# -*- coding: utf-8 -*-
import os                                                  # import glob module
import time                                                # import time module
os.system('modprobe w1-gpio')                              # load one wire communication device kernel modules
os.system('modprobe w1-therm')

def get_temp_sens():
    tfile = open("/sys/bus/w1/devices/28-000005e333d8/w1_slave")
    #tfile = open("c:\temp.txt")
    text = tfile.read()
    tfile.close()
    secondline = text.split("\n")[1]
    temperaturedata = secondline.split(" ")[9]
    temperature = float(temperaturedata[2:])
    temperature = temperature / 1000
    return float(temperature)

while True:
    mensaje = str(get_temp_sens()) + " ºC"
    print(mensaje)                                      # Print temperature
    time.sleep(1)
