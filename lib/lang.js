const applySpec = mapObj => obj => Object.keys(mapObj)
  .reduce((res, key) => {
    res[key] = mapObj[key](obj)
    return res
  }, {})

exports.applySpec = applySpec

const mapProp = prop => x => x[prop]

exports.mapProp = mapProp

const map = x => x

exports.map = map