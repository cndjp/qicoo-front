FROM node:10.11.0-alpine AS builder
COPY . /
RUN ["npm", "install"]
RUN ["npm", "run-script", "build"]

FROM nginx:1.14.0-alpine
COPY --from=builder /build /usr/share/nginx/html
