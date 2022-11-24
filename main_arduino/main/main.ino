#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>
#include <ArduinoJson.h>
#include "max6675.h"
#include <Servo.h>
Servo myservo;
//Servo pino
int servoPin = D3;
//Sensor presence pins
const int trigPin = 4;
const int echoPin = 2;
#define SOUND_VELOCITY 0.034
long duration;
float distanceCm;

int secret_key = 8888;
int led = 16;
int alarma = 10;
int ktcSO = 12;
int ktcCS = 15;
int ktcCLK = 14;

int valor_alarma;
int val = 0;
float temperatura = 0;
String nodo = "Estado";
int count = 0;
MAX6675 ktc(ktcCLK, ktcCS, ktcSO);
/* 1. Define the wi-fi credentials*/
const char *ssid = "realme 7i";
const char *password = "lm080804";

/* 2. Define the Firebase credentials */

const char *FIREBASE_HOST = "https://estado-73a8e.firebaseio.com";
const char *FIREBASE_AUTH = "fYee0VuFKFpyBYpsaN3KtFjqCEa8SAg1LqVCc02W";

// Define Firebase Data object
FirebaseData firebasedata;


void setup()
{
  Serial.begin(115200);
  Serial.println();
  Serial.println();

  myservo.attach(servoPin);

  WiFi.begin(ssid, password);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();
  Serial.printf("Firebase Client v%s\n\n", FIREBASE_CLIENT_VERSION);
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

  // Sets pins as Output or input
  pinMode(led, OUTPUT);
  pinMode(alarma, OUTPUT);  
  pinMode(trigPin, OUTPUT); 
  pinMode(echoPin, INPUT);
  
 
}

//Netx going to introduce in a loop function to listen every changes on the system.

void loop()
{   
   
  Serial.println("INITIALIZING PROCESS...");
  while(1)
  {
  temperatura_function();
  distance();
  motor();
  Light();
  alarm();

 
  }
} 


void temperatura_function(){
  // Calculate Temperature
  temperatura=ktc.readCelsius();
  Serial.print("The temperature is: ");
  Serial.println(temperatura);
  count++;
  if(count == 25)
  {
  Firebase.pushFloat(firebasedata,nodo + "/temperatura",temperatura);
  count = 0;
  }
  else {
    Serial.print("ITEMS LEFT =======>");
    Serial.println(25-count);
  }
  if(temperatura >= 60){
     digitalWrite(alarma,HIGH);
    }else{
       digitalWrite(alarma,LOW);
      }  
    }
  


void distance() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  // Calculate distance with duration of echopin
  duration = pulseIn(echoPin, HIGH);
  distanceCm = duration * SOUND_VELOCITY/2;
  Serial.print("Distance (cm): ");
  Serial.println(distanceCm);
  
}  

void motor(){
  Firebase.getString(firebasedata, nodo + "/motor");
  Serial.println(firebasedata.stringData());
  delay(100);
  if(firebasedata.stringData() == "on"){
    myservo.write(180);
    delay(500);
  }else{
    myservo.write(90);
    delay(500);
  }
}

void Light(){
  Firebase.getBool(firebasedata,nodo +"/Light");
  Serial.print("DATA FROM LIGHT ============>");
  Serial.println(firebasedata.boolData());
  if(firebasedata.boolData()== true){
  digitalWrite(led,HIGH);
  }
  else if(firebasedata.boolData()== false){  
  digitalWrite(led,LOW);
  }

  
}

void alarm(){
  Firebase.getInt(firebasedata, nodo +"/alarma");
  Serial.print("DATA FROM ALARM ============>");
  Serial.println(firebasedata.intData());
  if(firebasedata.intData() == 1 and distanceCm <= 23){
    digitalWrite(alarma,HIGH);    
    digitalWrite(alarma,LOW);
    
    }
  Firebase.getInt(firebasedata, nodo +"/password");
  Serial.print("DATA FROM PASSWORD ============>");
  Serial.println(firebasedata.intData());
  if(firebasedata.intData() == secret_key){  
  Firebase.setInt(firebasedata,nodo +"/alarma",0);  
  digitalWrite(alarma,LOW);
  Serial.println("alarm off");
  Firebase.setInt(firebasedata,nodo +"/password",0);  
  }    
 }
