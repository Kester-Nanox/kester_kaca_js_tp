const object = {
    a: [{ x: 2 }, { y: 4 }],
    b: 1
};

const other = {
    a: { z: 3 },
    b: [2, 3],
    c: 'foo'
};

function merge(object, other) {
    let result = Object.assign({}, object);
    for (let [key, value] of Object.entries(other)) {
        if (result.hasOwnProperty(key)) {
            if (!Array.isArray(result[key])) {
                // target isn't an array yet, have to convert it to an array
                result[key] = [result[key]];
            }
            // now copy over either a single entry or an array of entries
            if (Array.isArray(other[key])) {
                // copy all the array entries over to the other array
                result[key].push(...other[key]);
            } else {
                // copy single entry over to the other array
                result[key].push(other[key]);
            }
        } else {
            // result doesn't have this property yet, just copy the value over
            result[key] = value;
        }
    }
    return result;
}

console.log(merge(object, other));

/*
const
    merge = (target, source) => Object.entries(source).reduce((o, [k, v]) => {
        if (k in o) {
            if (!Array.isArray(o[k])) o[k] = [o[k]];
            [].concat(v).forEach(item => {
                if (!o[k].includes(item)) o[k].push(item);
            });
        } else {
            o[k] = v;
        }
        return o;
    }, target);
    
    result = [object, other].reduce(merge, {});

console.log(result);
*/

/*
const merge = (obj1, obj2) => {
    const keys = Object.keys(obj2);
    let newObj = {...obj1};
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const value = obj2[key];
      if (typeof value === "object" && value !== null) {
        newObj = { ...newObj, ...merge(newObj, value) };
      } else {
        newObj = { ...newObj, [key]: value };
      }
    }
    return newObj;
  };
  */