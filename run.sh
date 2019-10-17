#!/bin/sh

lsof -i:80 | awk '{if(NR>1){print $2}}' | uniq | awk '{cmd = "kill -9 "$0;system(cmd)}'
bundle exec jekyll serve -w --host=0.0.0.0 &

