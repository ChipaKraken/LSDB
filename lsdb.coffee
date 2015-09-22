class LSDB
  constructor: (@name) ->
    localStorage.setItem(@name, JSON.stringify([]))
  sync: (url)->
    that = @name
    $.ajax url:url
    .done (data)->
      localStorage.setItem(that, data)
      Promise.resolve(data)
  getAll: ->
    temp = JSON.parse(localStorage.getItem(@name))
    Promise.resolve(temp)
  append: (data)->
    temp = JSON.parse(localStorage.getItem(@name))
    temp.push(data)
    localStorage.setItem(@name, JSON.stringify(temp))
  pop: ->
    temp = JSON.parse(localStorage.getItem(@name))
    i = temp.pop()
    localStorage.setItem(@name, JSON.stringify(temp))
    Promise.resolve(i)
  remove: (kv)->
    temp = JSON.parse(localStorage.getItem(@name))
    key = Object.keys kv
    key = key[0]
    temp = temp.filter (data)->
      if data[key] != kv[key]
        true
      else
        false
    localStorage.setItem(@name, JSON.stringify(temp))
