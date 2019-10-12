#!/bin/sh

bundle exec jekyll serve -w --host=0.0.0.0 > blog.log 2>&1 &

