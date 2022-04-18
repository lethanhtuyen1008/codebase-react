FROM node:14.15.0

WORKDIR /app

COPY . /app/

RUN npm install && npm ci --prefix server/

RUN npm run build-dev

EXPOSE 8080

# set app port
ENV PORT=8080

ENTRYPOINT node server