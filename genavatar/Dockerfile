FROM alpine:latest

RUN echo "https://mirror.yandex.ru/mirrors/alpine/v3.14/main/" > /etc/apk/repositories && \
    echo "https://mirror.yandex.ru/mirrors/alpine/v3.14/community/" >> /etc/apk/repositories && \
    apk update && apk add python3-dev linux-headers libc-dev musl-dev gcc python3 py3-pip py3-wheel && \
    apk add bash vim shadow libuser
# RUN pip install --upgrade pip
RUN pip install --trusted-host pypi.org \
        --trusted-host files.pythonhosted.org \
        Flask uWSGI requests 
RUN groupadd -r uwsgi && useradd -r -g uwsgi uwsgi \
    && mkdir src/
EXPOSE 9090 9191 5000
USER uwsgi
COPY src src/
COPY scripts scripts/

CMD ["scripts/chenv.sh"]
