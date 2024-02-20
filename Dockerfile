ARG NODEJS_VERSION=18
ARG BASE_DISTRO=alpine

FROM node:${NODEJS_VERSION}-${BASE_DISTRO}

WORKDIR /app

COPY package.json .
RUN npm install --loglevel verbose

COPY . .
RUN npm run build --loglevel verbose

EXPOSE 8000

CMD ["npm", "run", "preview"]