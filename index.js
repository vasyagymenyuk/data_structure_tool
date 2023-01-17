class DataStructureTool {
  /**
   * ADD-TO-ARRAY-IN-MAP
   * @param map{Map}
   * @param key{any}
   * @param val{any}
   */
  static addToArrayInMap(map, key, val) {
    if (isNullish(key)) return

    const isArr = Array.isArray(val)

    if (map.has(key)) {
      if (isArr) map.get(key).push(...val)
      else map.get(key).push(val)
    } else {
      if (isArr) map.set(key, [...val])
      else map.set(key, [val])
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

    for (const el of arr) {
      if (isNullish(el[key])) continue

      if (!isNullish(keyOfVal)) {
        map.set(el[key], el[keyOfVal])
      } else map.set(el[key], el)
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

    for (const el of arr) {
      if (isNullish(el[key])) continue

      if (!isNullish(key)) {
        set.add(el[key])
      } else set.add(el)
    }

    return set
  }
}

exports.DataStructureTool = DataStructureTool

/**
 * IS-NULLISH
 * @param val
 * @returns {boolean}
 */
function isNullish(val) {
  return [undefined, null, ''].includes(val) || isNaN(val)
}
