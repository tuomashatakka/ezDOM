'use babel'

export const isElement = (o) =>
  typeof o === 'object' && o.tagName

export const isNumber = (o) =>
  typeof o === 'number'

// TODO: Check the given object is within the valid tag names
export const isHTMLTag = (o) =>
  typeof o === 'string'

export function assertElement (el: HTMLElement | string) {

  console.log(arguments, arguments.caller)
  el = this !== window && this !== assertElement
    ? this : el

  return isElement(el)
    ? el : isHTMLTag(el)
      ? document.createElement(el) : null
}
