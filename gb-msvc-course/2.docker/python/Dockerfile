FROM alpine:latest
RUN apk update && apk add bash vim python3 py3-pip

RUN mkdir /srv/flask/
COPY src srv/flask/src/
COPY deps srv/flask/deps/
RUN pip install -r /srv/flask/deps/requirements.txt \
&& chmod 775 /srv/flask/src/entry.sh

EXPOSE 8080

ENTRYPOINT ["/srv/flask/src/entry.sh"]
