FROM node

RUN mkdir /tetris
WORKDIR /tetris

COPY package.json /tetris
RUN yarn install

COPY . /tetris
RUN yarn test
RUN yarn build

CMD yarn start

EXPOSE 3000
