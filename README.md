# Qicoo App front end

This is the front end application of Qicoo app. All files are under development.

## How to change the backend API base URL

Specify environment variable when building Docker image.

```sh
docker build --build-arg BASE_URL=http://example.net/v2 -t "cndjp/qicoo-front:dev" .
```

## How to see mock website with Docker

Run command below:

```sh
docker run --rm -d -p 8080:80 cndjp/qicoo-front
```