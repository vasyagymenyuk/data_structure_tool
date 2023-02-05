class DataStructureTool {
  // TODO: optional isNullish checking/recursive chaining

  /**
   * ADD-TO-ARRAY-IN-MAP
   * @param map{Map}
   * @param key{any}
   * @param val{any}
   * @param valKey
   * @param nullishValidation
   */
  static addToArrayInMap({ map, key, val, valKey = null, nullishKeyValidation = false, nullishValValidation = false }) {
    if (nullishKeyValidation && isNullish(key)) return
    if (nullishValValidation && isNullish(val)) return

    const isArr = Array.isArray(val)

    if (map.has(key)) {
      const arr = valKey ? map.get(key)[valKey] : map.get(key)

      if (isArr) {
        arr.push(...val)
      } else {
        arr.push(val)
      }
    } else {
      if (isArr) {
        if (keyOfArray) map.set(key, { [valKey]: [...val] })
        else map.set(key, [...val])
      } else {
        if (valKey) map.set(key, { [valKey]: [val] })
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
  static mapFromArrayByKey({ arr, key = 'id', valKey = null }) {
    const map = new Map()

    if (!Array.isArray(arr)) throw new Error('first parameter must be an array')

    for (let i = 0; i < arr.length; i++) {
      if (isNullish(arr[i][key])) continue

      if (!isNullish(valKey)) {
        map.set(arr[i][key], arr[i][valKey])
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

/**
 * IS-NULLISH
 * @param val
 * @returns {boolean}
 */
function isNullish(val) {
  return [undefined, null, ''].includes(val) || Number.isNaN(val)
}
