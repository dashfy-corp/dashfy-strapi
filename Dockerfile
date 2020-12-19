FROM strapi/base

ARG ENVIRONMENT
ARG DATABASE_CLIENT
ARG API_PORT
ARG ADMIN_PORT

WORKDIR /usr/source/app

COPY package*.json ./

ENV NODE_ENV $ENVIRONMENT

RUN npm ci

RUN if [ "$DATABASE_CLIENT" = "postgres" ] ; then npm i --save pg ; fi

EXPOSE $API_PORT
EXPOSE $ADMIN_PORT

CMD ["npm", "run", "develop"]
