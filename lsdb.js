// Generated by CoffeeScript 1.10.0
var LSDB;

LSDB = (function() {
  function LSDB(name) {
    this.name = name;
    localStorage.setItem(this.name, JSON.stringify((JSON.parse(localStorage.getItem(this.name))) || []));
  }

  LSDB.prototype.sync = function(url) {
    var that;
    that = this.name;
    return $.ajax({
      url: url
    }).done(function(data) {
      localStorage.setItem(that, data);
      return Promise.resolve(data);
    });
  };

  LSDB.prototype.getAll = function() {
    var temp;
    temp = JSON.parse(localStorage.getItem(this.name));
    return Promise.resolve(temp);
  };

  LSDB.prototype.append = function(data) {
    var temp;
    temp = JSON.parse(localStorage.getItem(this.name));
    temp.push(data);
    return localStorage.setItem(this.name, JSON.stringify(temp));
  };

  LSDB.prototype.pop = function() {
    var i, temp;
    temp = JSON.parse(localStorage.getItem(this.name));
    i = temp.pop();
    localStorage.setItem(this.name, JSON.stringify(temp));
    return Promise.resolve(i);
  };

  LSDB.prototype.remove = function(kv) {
    var key, temp;
    temp = JSON.parse(localStorage.getItem(this.name));
    key = Object.keys(kv);
    key = key[0];
    temp = temp.filter(function(data) {
      if (data[key] !== kv[key]) {
        return true;
      } else {
        return false;
      }
    });
    return localStorage.setItem(this.name, JSON.stringify(temp));
  };

  return LSDB;

})();
