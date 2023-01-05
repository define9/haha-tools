/**
 * 获取一下dom的实际长度和理论长度(有没有省略)
 * @param {*} el 
 * @returns 
 */
export function textRange(el) {
    const textContent = el
    const targetW = textContent.getBoundingClientRect().width
    const range = document.createRange()
    range.setStart(textContent, 0)
    range.setEnd(textContent, textContent.childNodes.length)
    const rangeWidth = range.getBoundingClientRect().width
    return rangeWidth > targetW
}