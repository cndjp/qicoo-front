# Qicoo App front end
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcndjp%2Fqicoo-front.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcndjp%2Fqicoo-front?ref=badge_shield)


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

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcndjp%2Fqicoo-front.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcndjp%2Fqicoo-front?ref=badge_large)