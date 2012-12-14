#Similr#

A really simple recommendation engine.

It can calculate the similarity of different items based on how they are ranked on a set of properties.
It can also list similar items.


##Similarity distance##
  [http://localhost:1337/distance/{item1}/{item2}](http://localhost:1337/distance/{item1}/{item2})

Will return a number representing how similar they are. Higher number means more similar.
Query parameters:
  use: the algorithm to use (pearson or euclidean), default is pearson

##Listing similar items##
  [http://localhost:1337/similar/{item}](http://localhost:1337/similar/{item})

Will return a list of the most similar items
Query parameters:
`
max: the number of items returned, default is 4
use: the algorithm to use (pearson or euclidean), default is pearson
`



##Getting started##
Its a simple node + express application. Just run:
ÂÂ```  
npm install
node app.js
```

##Getting data into the system##
The input data is currently taken from a yml file (data.yml) containing all the items and their properties.
I might extend this to support reading data from a database or whatever in the future.

