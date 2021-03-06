# LSDB
A tiny wrapper for localStorage that lets use LocalStorage as cache data base.
Done using [promises].
Inspired by [astorage]

## Usage

```
db = new LSDB('names');
db.append({name:'Kraken'});
db.append({name:'Chipa'});
db.append({name:'Lorem'});
db.append({name:'Ipsum'});
db.remove({name:'Ipsum'});
db.getAll().then(function(data){
  console.log(data);
});
```

## LICENSE
Released under the MIT license.

```
The MIT License (MIT)

Copyright © 2015 Chyngyz Dyikanbaev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
[promises]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
[astorage]: https://github.com/andrew--r/astorage
