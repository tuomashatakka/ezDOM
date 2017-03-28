'use babel'
//@flow

import { assertElement, isElement, isNumber, isHTMLTag } from './assert'
export const properties = ['show', 'hide', 'toggle']
export const hideSpecification = ['setAttribute', 'visible']
export const HIDDEN_CLASS = 'hidden'

function toggleVisibility (state=null) {

  let [ method, attr ] = hideSpecification
  let action = state || state === null && this.hasClass(HIDDEN_CLASS)
    ? 'remove' : 'add'

  this[action + 'Class'](HIDDEN_CLASS)
  return this[method](attr, state)
}

export function hide () {
  toggleVisibility.call(this, false)
}

export function show () {
  toggleVisibility.call(this, true)
}

export function toggle () {
  toggleVisibility.call(this)
}
