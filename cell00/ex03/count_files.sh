#!/bin/bash

list=$(ls -l | wc -l)
count=$(($list - 1))

echo $count