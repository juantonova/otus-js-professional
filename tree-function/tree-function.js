const example = require('./example');

const verticalStick = '|';
const horizontalStick = '_';
const branch = verticalStick + horizontalStick;

function tree(obj, line = "") {
    if (Array.isArray(obj)) {
        obj.forEach((el, i) => {
            const updatedLine = `${line}${(i !== obj.length - 1) ? verticalStick : ""}`;
            tree(el, updatedLine);
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
        tree(obj[key], `${line} `);
    }
}

tree(example);