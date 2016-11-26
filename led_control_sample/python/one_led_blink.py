import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)
GPIO.setup(11, GPIO.OUT)

while True:
    GPIO.output(11, True)
    print "LED ON!"
    time.sleep(2)
    GPIO.output(11, False)
    print "LED OFF!"
    time.sleep(2)