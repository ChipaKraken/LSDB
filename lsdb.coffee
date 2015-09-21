class LSDB
  constructor: (@name) ->
    localStorage.setItem(@name, JSON.stringify([]))
  sync: (url)->
    that = @name
    $.ajax url:url
    .done (data)->
      localStorage.setItem(that, data)
      new Promise (a,b)-> a(data)
  getAll: ->
    temp = JSON.parse(localStorage.getItem(@name))
    new Promise (a,b)-> a(temp)
  append: (data)->
    temp = @getAll()
    temp.push(data)
    localStorage.setItem(@name, JSON.stringify(temp))
  pop: ->
    temp = @getAll()
    i = temp.pop()
    localStorage.setItem(@name, JSON.stringify(temp))
    new Promise (a,b)-> a(i)
  remove: (kv)->
    temp = @getAll()
    key = Object.keys kv
    key = key[0]
    temp = temp.filter (data)->
      if data[key] != kv[key]
        true
      else
        false
    localStorage.setItem(@name, JSON.stringify(temp))
