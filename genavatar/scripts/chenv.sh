#!/bin/bash

set -e

if [ "$ENV" == 'DEV' ]; then
   echo "Запуск девы"
   exec python3 "../src/avatargen.py"
else
  echo "Запуск прода" 
  exec uwsgi --http 0.0.0.0:9090 --wsgi-file ../src/avatargen.py \
       --callable app --stats 0.0.0.0:9191
fi
