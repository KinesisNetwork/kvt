#!/bin/bash

docker build -t abxit/kairos-promo .
docker run -p 9000:80 -v $(pwd):/sync --name kairos --rm -d abxit/kairos-promo
