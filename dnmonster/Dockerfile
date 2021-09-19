FROM nodejs:testing180921a

RUN echo "https://mirror.yandex.ru/mirrors/alpine/v3.14/main/" > /etc/apk/repositories && \
    echo "https://mirror.yandex.ru/mirrors/alpine/v3.14/community/" >> /etc/apk/repositories

RUN  apk update && apk add shadow libuser cairo cairo-dev && \
     apk add libjpeg libjpeg-turbo libjpeg-turbo-dev pango giflib \
     make bash vim alpine-sdk

RUN groupadd -r dnmonster && useradd -r -g dnmonster dnmonster

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY ./src /usr/src/app

RUN chown -R dnmonster:dnmonster /usr/src/app
USER dnmonster

EXPOSE 8080

CMD [ "npm", "start" ]
