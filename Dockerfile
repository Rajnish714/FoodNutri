FROM node:latest
WORKDIR /app
COPY /dist /dist
COPY ./.env /.env
COPY ./package.json /package.json
RUN yarn install
CMD ["node", "./dist/main.js"]