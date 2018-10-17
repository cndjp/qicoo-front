FROM node:10.11.0-alpine AS builder

ARG BASE_URL=http://example.com/v1
WORKDIR /builddir
COPY . /builddir
RUN ["apk", "--no-cache", "add", "sed=4.4-r2"]
RUN ["sed", "-i", "-e", "s/BASE_URL_TO_BE_REPLACED/${BASE_URL}/g", "/builddir/src/actions/questions.ts"]
RUN ["npm", "install"]
RUN ["npm", "run", "--verbose", "build"]

FROM nginx:1.14.0-alpine
COPY --from=builder /builddir/build /usr/share/nginx/html
