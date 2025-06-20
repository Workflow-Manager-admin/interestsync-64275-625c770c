#!/bin/bash
cd /home/kavia/workspace/code-generation/interestsync-64275-625c770c/interestsync
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

