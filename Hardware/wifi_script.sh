#!/bin/bash

# WiFi setup script

file=/etc/wpa_supplicant/wpa_supplicant.conf

country=$1
ssid=$2
psk=$3
key=$4

sed -i 's/country=.*/country='$country'/' $file
sed -i 's/ssid=.*/ssid='"$ssid"'/' $file
sed -i 's/psk=.*/psk='$psk'/' $file
sed -i 's/key_mgmt=.*/key_mgmt='$key'/' $file
