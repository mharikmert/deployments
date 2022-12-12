FROM node:16-alpine as node
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build


FROM nginx:alpine
COPY --from=node /usr/app/build /usr/share/nginx/html
EXPOSE 80 443