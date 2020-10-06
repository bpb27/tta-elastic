# Trump Twitter Archive with Elastic Search [![Build Status](https://travis-ci.com/bpb27/tta-elastic.svg?branch=master)](https://travis-ci.com/bpb27/tta-elastic)

## Prerequisites

- To run the application locally, all you need is Docker. You can get it [here](https://docs.docker.com/get-docker/)

## Setup

### Local

Build the Docker image using `docker-compose`:

    docker-compose build

Execute `docker-compose` to start the dev container:

    docker-compose up dev

The application should now be running locally and accessible at http://localhost:8080

### Running in prod

1. `npm run build`
2. `npm start`

### Test

To run Jest tests in the Docker container:
`docker-compose run --rm test`

### Resources

[Site](https://trump-twitter-archive.herokuapp.com/)
[Heroku](https://dashboard.heroku.com/apps/trump-twitter-archive)
[Elastic Ref](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html)
