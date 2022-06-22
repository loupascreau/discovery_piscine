#!/bin/bash

if [[ $# -eq 0 ]]; then
	echo "No arguments supplied"
else
	for a
	do
		mkdir "ex${a}"
	done
fi