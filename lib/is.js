
const toString = x => Object.prototype.toString.call(x)

const isType = typeStr => x =>
	typeStr === toString(x).match(/\[object\s(\w*)\]/)[1]

const isFunction = isType('Function')
const isObject = isType('Object')
const isArray = isType('Array')

const hasProperty = prop => obj => obj[prop]
const hasMap = hasProperty('map')

const isMappable = x => (isObject(x) || isArray(x))
	&& hasMap(x)
	&& isFunction(x.map)

module.exports = {
	isFunction,
	isObject,
	isArray,
	isMappable
}
