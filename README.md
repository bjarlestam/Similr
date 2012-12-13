Similr
======

A really simple recommendation engine.

It can calculate the similarity distance between different items based on how they are ranked on a set of properties.
It can also list similar items based on the similarity distance.



Similarity distance
-------------------
http://localhost:1337/distance/{item1}/{item2}
Will return a number between 0 and 1 representing how similar they are where 1 means that they totally equal.

Listing similar items
---------------------
http://localhost:1337/similar/{item}
Will return a list of the most similar items
Query parameters:
max: the number of items returned, default is 4
use: the algorithm to use (pearson or euclidean), default is pearson



