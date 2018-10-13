FROM node:10.11.0-alpine AS builder

WORKDIR /builddir
COPY . /builddir
RUN ["npm", "install"]
RUN ["npm", "run", "--verbose", "build"]

FROM nginx:1.14.0-alpine
COPY --from=builder /builddir/build /usr/share/nginx/html
