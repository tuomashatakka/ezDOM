'use babel'
// @flow

export const properties = [
  'toggleClass',
  'addClass',
  'removeClass',
  'hasClass',
  'hasClasses',
  'getClassList' ]

export function getClassList (): Array<string> | DOMStringMap {
  return this.classList || (this.getAttribute('class') || '').split(/\s/) || []
}

export function toggleClass (...cls: Array<string>): HTMLElement {
  let list = getClassList.call(this)
  this.setAttribute('class', toggleItems(list || [], ...cls).join(' '))
  return this
}

export function addClass (...value): HTMLElement {
  getClassList.call(this).add(...value)
  return this
}

export function removeClass (...value: Array<string>) {
  getClassList.call(this).remove(...value)
  return this
}

export function hasClass (value: string) {
  return hasClasses.call(this, value)
}

export function hasClasses (...value: Array<string>) {
  let classList = [...getClassList.call(this)]
  let has = value.reduce((res, current) =>
    res && classList.indexOf(current) > -1, true)
  return has
}

export function toggleItems (list: Array<string>, ...items: Array<string>) {
  let copy = [...list]
  for (let item of items) {
    let index = copy.findIndex(o => o === item)
    let arg = (index === -1) ? [0, 0, item] : [index, 1]
    copy.splice(...arg)
  }
  return copy
}
