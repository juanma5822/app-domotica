from firebase_admin import db
from connection import connection
#import machine
from time import sleep



"""sensor_ambiente = machine.Pin(5,machine.Pin.IN)
sensor_presencia= machine.Pin(4,machine.Pin.IN)

motor_persianas= machine.Pin(14,machine.Pin.OUT)
luces = machine.Pin(12,machine.Pin.OUT)

led_fb = db.reference('led')


if sensor_presencia >=1:
    sleep(10)
    if sensor_presencia == 0:
        luces.off()        
        led_fb.push(0)"""


     


ref =db.reference('Productos')
producto = {'tipo':'micropi','modelo':'Two','pines':'8'}
producto_ref = ref.push(producto)


data = list(ref.get('Productos'))
print(data)
print(type(data))
