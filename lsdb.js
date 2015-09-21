LSDB = (function() {
  function LSDB(name) {
    this.name = name;
    localStorage.setItem(this.name, JSON.stringify([]));
  }

  LSDB.prototype.sync = function(url) {
    var that;
    that = this.name;
    return $.ajax({
      url: url
    }).done(function(data) {
      localStorage.setItem(that, data);
      return new Promise(function(a, b) {
        return a(data);
      });
    });
  };

  LSDB.prototype.getAll = function() {
    var temp;
    temp = JSON.parse(localStorage.getItem(this.name));
    return new Promise(function(a, b) {
      return a(temp);
    });
  };

  LSDB.prototype.append = function(data) {
    var temp;
    temp = this.getAll();
    temp.push(data);
    return localStorage.setItem(this.name, JSON.stringify(temp));
  };

  LSDB.prototype.pop = function() {
    var i, temp;
    temp = this.getAll();
    i = temp.pop();
    localStorage.setItem(this.name, JSON.stringify(temp));
    return new Promise(function(a, b) {
      return a(i);
    });
  };

  LSDB.prototype.remove = function(kv) {
    var key, temp;
    temp = this.getAll();
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
