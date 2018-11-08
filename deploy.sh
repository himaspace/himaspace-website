#!/bin/sh

brunch build && rsync -arvz --delete public/ ext2:~/public_html/himaspace/
