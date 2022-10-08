import machine
import time
import upip
import network


try:
    print('connecting to WLAN...')
    wlan = network.WLAN(network.STA_IF) # create station interface
    wlan.active(True)       # activate the interface
    wlan.scan()             # scan for access points
    wlan.isconnected()      # check if the station is connected to an AP
    wlan.connect('DACJ', '121053848522') # connect to an AP
    wlan.config('mac')      # get the interface's MAC address
    wlan.ifconfig()         # get the interface's IP/netmask/gw/DNS addresses
    print("Connected.")
    import firebase, firebase_admin
except Exception as e:
    print('Connection Failed..',e)    
pin = machine.Pin(4, machine.Pin.OUT)
for i in range(10):
    pin.on()
    time.sleep(0.5)
    pin.off()
    time.sleep(0.5)

