FROM node:13.7.0-alpine

ENV CHROME_BIN /usr/bin/chromium-browser

RUN apk update && \
    apk add --no-cache \
    python \
    build-base \
    bash \
    openjdk8-jre-base \
    # chromium dependencies
    nss \
    chromium-chromedriver \
    chromium \
    && apk upgrade --no-cache --available

WORKDIR /template