#!/usr/bin/env sh

if ! [ -x "$(command -v docker)" ]; then
    echo "Docker is required to serve locally this website."
    exit 1
fi

docker run --rm -it -v "$PWD:/srv/jekyll" -p 4000:4000 -p 35729:35729 jekyll/jekyll:4.2.0 jekyll serve --force_polling --livereload
