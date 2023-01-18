class DataStructureTool {
  // TODO: optional isNullish checking/recursive chaining

  /**
   * ADD-TO-ARRAY-IN-MAP
   * @param map{Map}
   * @param key{any}
   * @param val{any}
   * @param keyOfArray
   */
  static addToArrayInMap(map, key, val, keyOfArray = null) {
    if (isNullish(key)) return

    const isArr = Array.isArray(val)

    if (map.has(key)) {
      const arr = keyOfArray ? map.get(key)[keyOfArray] : map.get(key)

      if (isArr) {
        arr.push(...val)
      } else {
        arr.push(val)
      }
    } else {
      if (isArr) {
        if (keyOfArray) map.set(key, { [keyOfArray]: [...val] })
        else map.set(key, [...val])
      } else {
        if (keyOfArray) map.set(key, { [keyOfArray]: [val] })
        else map.set(key, [val])
      }
    }
  }

  /**
   * MAP-FROM-ARRAY-BY-KEY
   *
   * `arr` - Source array with element(objects or primitives)
   *
   * `key` - This key will be used to get value from each element of the array and put this value to Map as key.
   * Example: Map.set(arr[indx][key], arr[i] or arr[indx][keyOfVal])
   *
   * `keyOfVal` - This key will be used to get value from each arr element.
   * Example: Map.set(arr[indx][key], arr[indx][keyOfVal])
   *
   * @param arr
   * @param key
   * @param keyOfVal
   * @returns {Map<any, any>}
   */
  static mapFromArrayByKey(arr, key = 'id', keyOfVal = null) {
    const map = new Map()

    if (!Array.isArray(arr)) throw new Error('first parameter must be an array')

    for (let i = 0; i < arr.length; i++) {
      if (isNullish(arr[i][key])) continue

      if (!isNullish(keyOfVal)) {
        map.set(arr[i][key], arr[i][keyOfVal])
      } else map.set(arr[i][key], arr[i])
    }

    return map
  }

  /**
   * FROM-ARRAY-TO-SET
   * @param arr
   * @param key
   * @param set
   * @returns {Set<any>}
   */
  static setFromArrayByKey(arr, key, set = new Set()) {
    if (!Array.isArray(arr)) throw new Error('first parameter must be an array')

    for (let i = 0; i < arr.length; i++) {
      if (isNullish(arr[i][key])) continue

      if (!isNullish(key)) {
        set.add(arr[i][key])
      } else set.add(arr[i])
    }

    return set
  }
}

exports.DataStructureTool = DataStructureTool

// DataStructureTool.addToArrayInMap(a, 'vasya', 'abdul', 'children')
// DataStructureTool.addToArrayInMap(a, 'vasya', 'dima', 'children')
//
// const flat = require('flat')
//
// const m = new Map()
//
// mapSetter(m, 'key.a', 'abdul', 'array')
//
// console.log('test', m)
//
// function mapSetter(map, key, value, type) {
//   const firstKey = key.split('.')[0]
//
//   const keys = key.split('.')
//
//   keys.splice(0, 1)
//
//   const keyWithoutFirstKey = keys.join('.')
//
//   console.log(keyWithoutFirstKey)
//
//   if (map.has(firstKey)) {
//     const data = map.get(firstKey)
//
//     if (eval('data.' + keyWithoutFirstKey.split('.').join('?.'))) {
//       const _val = eval('data.' + keyWithoutFirstKey)
//
//       const obj = {
//         [key]: Array.isArray(_val) ? [..._val, value] : value
//       }
//     }
//   } else {
//     m.set(
//       firstKey,
//       keyWithoutFirstKey.includes('.')
//         ? flat.unflatten({ [keyWithoutFirstKey]: type === 'array' ? [value] : value })
//         : type === 'array'
//         ? [value]
//         : value
//     )
//   }
// }

// console.log(a)

/**
 * IS-NULLISH
 * @param val
 * @returns {boolean}
 */
function isNullish(val) {
  return [undefined, null, ''].includes(val) || Number.isNaN(val)
}
