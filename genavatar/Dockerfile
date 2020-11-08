FROM python:3.4

RUN pip install Flask==0.10.1 uWSGI
RUN mkdir src/
COPY src src/

CMD ["uwsgi","--http","0.0.0.0:9090","--wsgi-file","/src/avatargen.py",\
    "--callable","app","--stats","0.0.0.0:9191"]
