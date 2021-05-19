#!/bin/bash
export FLASK_APP=/srv/flask/src/app.py
echo -e "\033[33m [ N ] :: \033[37mЗапуск flask ...\n"
flask run --host 0.0.0.0 --port 8080
echo -e "\n\033[35m [ i ] :: \033[37mFlask завершил работу по сигналу от пользователя!\n"
