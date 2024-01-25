const isObject = require('../utils/isObject');

const verticalStick = '|';
const horizontalStick = '_';
const branch = verticalStick + horizontalStick;

function print(obj, line = "") {
    if (!isObject(obj)) return;
    if (Array.isArray(obj)) {
        obj.forEach((el, i) => {
            const updatedLine = `${line}${(i !== obj.length - 1) ? verticalStick : ""}`;
            print(el, updatedLine);
        })
        return;
    }

    for (let key in obj) {
        if (key === 'name') {
            let additionalLine = "";
            if (line.length) {
                additionalLine = `${line[line.length - 1] === verticalStick ? horizontalStick : branch}`;
            } 
            console.log(`${line}${additionalLine}${obj[key]}`);
        }
        print(obj[key], `${line} `);
    }
}

module.exports = print