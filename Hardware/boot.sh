#!/bin/bash

while :;
do
	if ping -c 1 -q 8.8.8.8 >&/dev/null; then
		break
	fi
	mpg321 /home/pi/Desktop/CubeAPI/src/tts/setup.mp3
	sleep 5s
done
python3.9 /home/pi/Desktop/CubeAPI/main.py

exit 0
