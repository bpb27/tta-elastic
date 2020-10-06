################
# DEV STAGE
################
FROM node:10.22.1-slim AS DEV

USER root

RUN apt-get update \
  && apt-get install -y \
  bash \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json package-lock.json .babelrc .eslintrc.js webpack.config.js .travis.yml ./
COPY public ./public
COPY src ./src
COPY server ./server
COPY scripts ./scripts
COPY test-setup ./test-setup

RUN npm install

################
# BUILD STAGE
################
FROM DEV AS BUILD

RUN npm run build