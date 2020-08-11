FROM node:alpine

RUN mkdir /tetris
WORKDIR /tetris

COPY package.json /tetris
RUN wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub && \
    wget https://github.com/sgerrand/alpine-pkg-glibs/releases/download/2.25-r0/glibc-2.25-r0.apk && \
    apk add glibc-2.25-r0.apk

RUN yarn install

COPY . /tetris
RUN yarn test
RUN yarn build

CMD yarn start

EXPOSE 3000
