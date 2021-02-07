FROM node:12-alpine

WORKDIR /usr/src/app
ENV NODE_ENV development

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]
