#!/usr/bin/env bash

while true; do
read -p 'Delete all ".DS_Store"? [y/n]: ' answer
case $answer in
  y ) find / -type f -name '.DS_Store' -delete
      killall Finder
      message='Everything is done.'
      echo $message
      break;;
  n ) exit;;
  * ) echo 'Please answer "y" or "n".';;
esac
done