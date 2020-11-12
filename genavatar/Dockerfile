FROM python:3.4

RUN pip install Flask==0.10.1 uWSGI
RUN groupadd -r uwsgi && useradd -r -g uwsgi uwsgi
RUN mkdir src/
EXPOSE 9090 9191
USER uwsgi
COPY src src/
COPY scripts scripts/

CMD ["scripts/chenv.sh"]
