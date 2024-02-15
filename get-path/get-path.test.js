const { getPath } = require("./get-path.js");
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><body><p>Hello world<div id="id"><span><span><span><span id="deep"></span></span></span></span></div><div>2</div><p><span>1</span></p></p></body>`);


test("test on body", () => {
    const body = dom.window.document.querySelector("body");
    expect(getPath(body)).toBe('body');
});

test("test on id", () => {
    const elById = dom.window.document.getElementById("id");
    expect(getPath(elById)).toBe('body > div#id');
});

test("test on deep level", () => {
    const elById = dom.window.document.getElementById("deep");
    expect(getPath(elById)).toBe('body > div#id > span > span > span > span#deep')
});

test("test on siblings", () => {
    const siblings = dom.window.document.querySelectorAll("p");
    expect(getPath(siblings[1])).toBe('body > p:nth-child(2)')
});

test("test on empty value", () => {
    expect(() => getPath()).toThrow('No element provided')
});