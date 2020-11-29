
const { isMappable } = require('./is')

const applySpec = mapObj => obj => Object.keys(mapObj)
  .reduce((res, key) => {
    res[key] = mapObj[key](obj)
    return res
  }, {})

exports.applySpec = applySpec

const prop = prop => x => x[prop]

exports.prop = prop

const map = f => x => isMappable(x) ? x.map(f): f(x)

exports.map = map

const identity = x => x

exports.identity = identity

const compose = (...fns) =>
	fns.reduce((p, c) => x => p(c(x)))

exports.compose = compose


