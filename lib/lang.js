const applySpec = mapObj => obj => Object.keys(mapObj)
  .reduce((res, key) => {
    res[key] = mapObj[key](obj)
    return res
  }, {})

exports.applySpec = applySpec

const mapProp = prop => x => x[prop]

exports.mapProp = mapProp

const hasProperty = prop => obj => obj.hasOwnProperty(prop)

const toString = Object.prototype.toString.call

const isType = typeStr => x =>
	typestr === toString(x).match(/\[object\s(\w*)\]/)

const isFunction = isType('Function')

const hasMap = hasProperty('map')

const isMappable = x => typeof x === 'object'
	&& hasMap(x)
	&& isFunction(x.map)

const map = f => x => isMappable(x) ? x.map(f): f(x)

const identity = x => x

exports.identity = identity

exports.map = map
