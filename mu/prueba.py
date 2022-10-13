import machine
from date import sleep

luces = machine.Pin(5,machine.Pin.OUT)

while True:
    luces.on()
    sleep(2)
    luces.off()
    sleep(2)
