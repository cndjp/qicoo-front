FROM node:12.11.1-alpine AS builder

WORKDIR /builddir
COPY . /builddir
RUN ["apk", "--no-cache", "add", "sed"]
RUN ["npm", "install"]
RUN ["npm", "run", "--verbose", "build"]

FROM nginx:1.14.0-alpine
COPY --from=builder /builddir/build /usr/share/nginx/html
