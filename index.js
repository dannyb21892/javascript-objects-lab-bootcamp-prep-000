var recipes = {}


function updateObjectWithKeyAndValue(object, key, value) {
  var newobject = Object.assign({}, recipes, {key: value})
  return newobject
}

function updateObjectWithKeyAndValue(object, key, value) {
  var tempobj = {}
  tempobj[key] = value
  var newobject = Object.assign({}, object, tempobj)
  return newobject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}