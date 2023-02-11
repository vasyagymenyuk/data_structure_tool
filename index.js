class DataStructureTool {
  // TODO: optional isNullish checking/recursive chaining

  static structsFromArrayByKey({ arr, structs = [] }) {
    if (!Array.isArray(arr)) throw new Error('arr parameter must be an array')

    const results = []

    for (let i = 0; i < structs.length; i++) {
      const struct = structs[i]

      if (struct.type === 'map') {
        results[i] = new Map()

        for (const obj of arr) {
          results[i].set(obj[struct.key], obj[struct.valKey])
        }
      } else if (struct.type === 'set') {
        results[i] = new Set()

        for (const obj of arr) {
          results[i].add(obj[struct.key])
        }
      } else {
        throw new Error(`type of structs[${i}] is not correct. Possible type options are: [map, set]`)
      }
    }

    return results
  }

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
   * @param {
   * arr,
   * key = 'id',
   * valKey = null
   * }
   * @returns {Map<any, any>}
   */

  static mapFromArrayByKey({ arr, key = 'id', valKey = null }) {
    const map = new Map()

    if (!Array.isArray(arr)) throw new Error('first parameter must be an array')

    for (let i = 0; i < arr.length; i++) {
      this.setValToMap(map, arr[i], key, valKey)
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
      this.addValToSet(set, arr[i], key)
    }

    return set
  }

  /**
   *
   * @param {*} map
   * @param {*} val
   * @param {*} valKey
   * @param {*} key
   * @returns
   */
  static setValToMap(map, val, key, valKey) {
    if (isNullish(val[key])) return

    if (!isNullish(valKey)) {
      map.set(val[key], val[valKey])
    } else map.set(val[key], val)
  }

  /**
   *
   * @param {*} set
   * @param {*} val
   * @param {*} key
   */
  static addValToSet(set, val, key) {
    if (!isNullish(val[key])) {
      if (!isNullish(key)) {
        set.add(val[key])
      } else set.add(val)
    }
  }
}

/**
 * IS-NULLISH
 * @param val
 * @returns {boolean}
 */
function isNullish(val) {
  return [undefined, null, ''].includes(val) || Number.isNaN(val)
}

module.exports = DataStructureTool
