
const obj1 = {
    a: {
    b: '1',
    },
    c: { 
        d: { 
            e: [1, 2, { c: 'object'}, null, 'string'],
            f: {
                g: [1, 2]
            },
            h: 6
        } 
    },
 };

const obj2 = {
    a: {
    b: '1',
    },
}

const obj3 = {};

const obj4 = {
    a: {
    b: '1',
    },
    c: { 
        d: { 
            e: [1, 2, { c: 'object'}, null, 'string'],
            f: {
                g: [1, 2, 3]
            },
            h: 6
        } 
    }
}; 

const obj5 = {
    a: {
    b: '1',
    },
    c: { 
        d: { 
            e: [1, 2, { c: 'object'}, 5, 'string'],
            f: {
                g: [1, 2, 3]
            },
            h: 6
        } 
    }
}; 

const obj6 = {
    a: {
    b: '1',
    },
    c: { 
        d: { 
            e: [1, 2, { c: 'object'}, null, 'string'],
            f: {
                g: [1, 2]
            },
            h: 6
        } 
    },
 };

 const obj7 = {
    a: {
    b: '1',
    },
    c: { 
        d: { 
            e: [1, 2, { c: 'object'}, null, 'string'],
            f: {
                g: [1, 2]
            },
            h: 6,
            i: 7
        } 
    },
 };

const obj8 = { a: null }
const obj9 = { a: {} }

module.exports = { obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9 }