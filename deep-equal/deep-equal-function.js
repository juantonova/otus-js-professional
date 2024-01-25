
const { obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9 } = require('./examples');
const isObject = require('../utils/isObject');

const deepEqual = (actual, expected, errorStep = "") => {
    if (actual === expected) return true;
    if (!isObject(actual) || !isObject(expected)) {
        return actual === expected || new Error(errorStep)
    }
        
    if ((Array.isArray(actual) && Array.isArray(expected))) {
        const maxArray = actual.length > expected.length ? actual : expected
        for (let i = 0; i < maxArray.length; i++) {
            const res = deepEqual(actual[i], expected[i], errorStep)
            if (res !== true) return res;
        }
        return true;
    }

    const maxObj = Object.keys(actual).length > Object.keys(expected).length ? actual : expected
    for (let key in maxObj) {
        if (!maxObj.hasOwnProperty(key)) continue;
        const res = deepEqual(actual[key], expected[key], `${errorStep}${errorStep ? "." : ""}${key}`)
        if (res !== true) return res;
    }
    return true;
}

console.log('obj1 + obj1', deepEqual(obj1, obj1))
// true
console.log('obj1 + obj2', deepEqual(obj1, obj2))
// Error: c
console.log('obj1 + obj3', deepEqual(obj1, obj3))
// Error: a
console.log('obj1 + obj4', deepEqual(obj1, obj4))
// Error: c.d.f.g
console.log('obj1 + obj5', deepEqual(obj1, obj5))
// Error: c.d.e
console.log('obj1 + obj6', deepEqual(obj1, obj6))
// true
console.log('obj1 + obj7', deepEqual(obj1, obj7))
// c.d.i
console.log('obj8 + obj9', deepEqual(obj8, obj9))
// a


    