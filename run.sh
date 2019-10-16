#!/bin/sh

lsof -i:8080 | awk '{if(NR>1){print $2}}' | uniq | awk '{cmd = "kill -9 "$0;system(cmd)}'
bundle exec jekyll serve -w --host=0.0.0.0 > blog.log 2>&1 &

