function typeError (data, name, pur) {
  if (!Array.isArray(data)) {
    throw new TypeError(`[${data}] Only array conversion is supporteds`)
  }
  if (!Array.isArray(name) && pur) {
    throw new TypeError(`[${name}] must be an array store`)
  } else if (Object.prototype.toString.call(name) !== "[object Object]" && !pur) {
    throw new TypeError(`[${name}] must be an object store`)
  }
  if (name.length === 0) {
    throw new TypeError(`[${name}]is not allowed to be an empty array`)
  }
}

function tranformAliasPur(name) {
  return name.reduce((total, item)=> {
    if (typeof item !== 'string') {
      throw new TypeError(`${item} must type of string`)
    }
    total[item] = null
    return total
  }, {})
}

const cArrayPur = function (data, name) {
  typeError(data, name, true)
  const tranformAlias = tranformAliasPur(name)
  const tranformVal = data.map(item => {
    const cptranformAlias = JSON.parse(JSON.stringify(tranformAlias))
    for (let key in cptranformAlias) {
      cptranformAlias[key] = item
    }
    return cptranformAlias
  })
  return tranformVal
}


const cArray = function (data, name, tag) {
  typeError(data, name, false)
  return data.map(item => {
    const obj = {}
    for (let key in name) {
      obj[key] = item[name[key]]
    }
    if (tag === 'all') {
      return {
        ...item,
        ...obj
      }
    } else {
      return obj
    }
  })
}

export { cArrayPur, cArray}