#Similr#

A really simple recommendation engine.

It can calculate the similarity of different items based on how they are ranked on a set of properties.
It can also list similar items.


##Similarity distance##
  [http://localhost:1337/distance/{item1}/{item2}](http://localhost:1337/distance/{item1}/{item2})

Will return a number representing how similar they are. Higher number means more similar.

Query parameters:
* use: the algorithm to use (pearson or euclidean), default is pearson

##Listing similar items##
  [http://localhost:1337/similar/{item}](http://localhost:1337/similar/{item})

Will return a list of the most similar items

Query parameters:
* max: the number of items returned, default is 4
* use: the algorithm to use (pearson or euclidean), default is pearson




##Getting started##
Its a simple node + express application. Just run:
```  
npm install
node app.js
```

##Getting data into the system##
The input data is currently taken from a yml file (data.yml) containing all the items and their properties.
I might extend this to support reading data from a database or whatever in the future.

##LICENSE##
This software is licensed under the MIT License.

Copyright Andreas Bjärlestam, 2013.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
