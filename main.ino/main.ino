#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>

/* 1. Define the WiFi credentials */



int IN1=5;
int IN2=4;


const char *ssid = "MERCHAN ROMERO";
const char *password = "3147819989";

/* 2. Define the Firebase credentials */

const char *FIREBASE_HOST = "https://app-python-44c9b-default-rtdb.firebaseio.com";
const char *FIREBASE_AUTH = "zomDnCpGasnUz2HewzmKqTh0GUcCzBryRQDEdouW";

unsigned long a;

// Define Firebase Data object
FirebaseData firebasedata;

bool iterar = true;
//const char a=Firebase.getString(firebasedata, "motor");
void setup()
{

  Serial.begin(115200);
  Serial.println();
  Serial.println();

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

  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  

}

void loop()
{
  
  while (iterar)
  {
    //Firebase.setString(firebasedata, "light", "on");
    //Firebase.setInt(firebasedata, "temperatura",32);

    a = Firebase.getInt(firebasedata, "motor");
    //leer datos

    //Firebase.getInt(firebasedata, "temperatura");
    //Serial.println(firebasedata.intData());
    delay(250);
    //Firebase.getString(firebasedata, "light");
    //Serial.println(firebasedata.stringData());

    
     Serial.println(a);

    /*if (a == 1){
      Serial.println(firebasedata.intData());   
      digitalWrite(IN1, HIGH);
      digitalWrite(IN2, LOW);    
      }else{
        Serial.println(firebasedata.stringData());   
        digitalWrite(IN1, LOW);
        digitalWrite(IN2, LOW);  
        }
    */        
  }
  
}
