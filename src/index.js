const covertAliasPur = function (data, name) {
  if (!Array.isArray(data)) {
    throw new TypeError(`[${data}] Only array conversion is supporteds`)
  }
  if (!Array.isArray(name)) {
    throw new TypeError(`[${name}] must be an array store`)
  }
  if (name.length === 0) {
    throw new TypeError(`[${name}]is not allowed to be an empty array`)
  }
  const tranformAlias = name.reduce((total, item)=> {
    if (typeof item !== 'string') {
      throw new TypeError(`${item} must type of string`)
    }
    total[item] = null
    return total
  }, {})
  const tranformVal = data.map(item => {
    const cptranformAlias = JSON.parse(JSON.stringify(tranformAlias))
    for (let key in cptranformAlias) {
      cptranformAlias[key] = item
    }
    return cptranformAlias
  })
  return tranformVal
}

export { covertAliasPur }