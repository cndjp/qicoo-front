FROM node:12.11.1-alpine AS builder

WORKDIR /builddir
COPY package.json /builddir/package.json
RUN npm install
COPY . /builddir
RUN npm run build


FROM nginx:1.14.0-alpine
COPY --from=builder /builddir/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080