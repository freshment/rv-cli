
const { isMappable } = require('./is')

const applySpec = mapObj => obj => Object.keys(mapObj)
  .reduce((res, key) => {
    res[key] = mapObj[key](obj)
    return res
  }, {})

exports.applySpec = applySpec

const mapProp = prop => x => x[prop]

exports.mapProp = mapProp


const map = f => x => isMappable(x) ? x.map(f): f(x)

const identity = x => x

exports.identity = identity

exports.map = map


