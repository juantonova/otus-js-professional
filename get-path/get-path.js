
function getPath(element) {
    if (!element) throw Error('No element provided')
    if (element.tagName === 'BODY') return 'body';
    let selector = element.tagName.toLowerCase();
    if (element.id) {
      selector += `#${element.id}`;
    } else if (element.className) {
      selector += `.${Array.from(element.classList).join('.')}`
    } else {
       const sameTagSiblings = Array.from(element.parentNode.children)?.filter(el => el.tagName === element.tagName);
      if (sameTagSiblings.length > 1) {
        selector += `:nth-child(${sameTagSiblings?.indexOf(element) + 1})`;
      }
    }
    return `${getPath(element.parentNode)} > ${selector}`;
  }

  module.exports = { getPath }