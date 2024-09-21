#!/bin/bash

# Build the Docker image
docker build -t dependency-graph .

# Run the Docker container
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules --rm dependency-graph