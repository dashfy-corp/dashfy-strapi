FROM strapi/base

WORKDIR /usr/source/app

COPY package*.json ./

RUN npm i

EXPOSE 1337

CMD ["npm", "run", "develop"]
