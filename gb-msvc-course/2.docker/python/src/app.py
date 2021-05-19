#!/usr/bin/python3

import os

from flask import Flask

config = {
        "port": os.environ.get('PORT', 8080),
        "debug": os.environ.get('DEBUG', False)
}

app = Flask(__name__)

@app.route("/")
def hello():
    return '''
           <head>
            <meta charset=utf-8>
            <title>Привет из фляжки!</title>
           </head>
           <h1>Отлично, все работает</h1>
              <p>Итак, эту страницу показывает фласк из контейнера.</p>
              <p>Я приношу извинения за то что отошел от задания и взял за основу Alpine Linux.</p></br>
              <p>Но зато мой образ весит 90+ МБ вместо 900+ МБ.</p></br>
              <p>И еще я прекрасно понимаю, что это плохая практика и надо выносить страницу в шаблоны.</p></br>
           '''

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=config["port"], debug=config["debug"])
