'use babel'
// @flow

export const properties = [
  'toggleClass',
  'addClass',
  'removeClass',
  'hasClasses',
  'getClassList' ]

export function getClassList (): HTMLElement {
  return this.classList || (this.getAttribute('class') || '').split(/\s/)
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

export function hasClasses (...value: Array<string>) {
  return getClassList.call(this).reduce((bo, current) => bo && current, true)
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
