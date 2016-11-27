import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)
GPIO.setup(11, GPIO.OUT)
GPIO.setup(12, GPIO.OUT)

while True:
    GPIO.output(11, True)
    GPIO.output(12, False)
    print "Green!"
    time.sleep(2)
    GPIO.output(11, False)
    GPIO.output(12, True)
    print "Red!"
    time.sleep(2)