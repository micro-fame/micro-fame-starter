FROM mhart/alpine-node

ENV PORT 80

RUN apk --update add git ncdu

WORKDIR /app

ADD . /app

RUN yarn install

ENTRYPOINT npm run build-start
