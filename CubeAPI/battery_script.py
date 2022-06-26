import psutil

from src.tts.TTS import TTS


def notify(percentage: str):
    tts = TTS("De batterij is " + percentage + '%')
    tts.play()


battery = psutil.sensors_battery()
plugged = battery.power_plugged
percent = str(battery.percent)

if not plugged and battery.percent <= 20:
    notify(percent)
