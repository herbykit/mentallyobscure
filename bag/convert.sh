#! /bin/bash

if [ $# == 0 ];
then
	echo "You must input the file."
	exit 1
fi

x=0

echo "{" >> values.json
echo "added first line"

while IFS= read -r line
do
	IFS= read -r value
	echo '"'$line'": "'$value'",' >> values.json
done < $1

echo '"":""' >> values.json	
echo "}" >> values.json
