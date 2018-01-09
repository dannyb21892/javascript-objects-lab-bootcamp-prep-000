var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newobject = Object.assign({}, recipes, key: value)
  return newobject
}