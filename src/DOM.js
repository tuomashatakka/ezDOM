'use babel'
// @flow
import { assertElement, isElement, isNumber, isHTMLTag } from './assert'

export const properties = ['append', 'prepend', 'insert']

type ElementType = HTMLElement | null;
type InsertPositionType = 'first' | 'last' | number | ElementType;


/**
 * Insert an element as a first child among
 * the caller's children
 *
 * @method prepend
 * @param  {string | HTMLElement} el Element to be inserted
 * @return {HTMLElement}             Inserted element
 */

export function prepend (el: ElementType): ElementType {
  return insertAt(this, assertElement(el), 'first')
}


/**
 * Insert an element as a last child among
 * the calling element's children
 *
 * @method prepend
 * @param  {string | HTMLElement} el Element to be inserted
 * @return {HTMLElement}             Appended element
 */

export function append (el: ElementType): ElementType {
  el = assertElement(el)
  if (this !== window && this !== insert)
    return insertAt(this, assertElement(el))
  return null
}

export function insert (el: ElementType, index: InsertPositionType): ElementType {
  el = assertElement(el)
  if (this !== window && this !== insert)
    return insertAt(this, assertElement(el), index)
  return null
}


/**
 * Insert an element as a child to the calling element
 *
 * @method prepend
 * @param  {string | HTMLElement} el  Element to be inserted
 * @param  {string}               pos Position into which the element is inserted;
 *                                    first to insert as a first child,
 *                                    last to insert as a last child.
 *                                    If an instance of HTMLElement is given,
 *                                    the element is inserted after the given element.
 * @return {HTMLElement}              Inserted element
 */

export function insertAt (parent: ElementType, el: InsertPositionType, pos: InsertPositionType = 'last'): ElementType {

  const DOM_INSERT_MAP = {
    'first': 'afterBegin',
    'last':  'beforeEnd',
  }
  // Reassign the arguments if this function is
  // is called from within any HTMLElement

  if (this !== window && this !== insertAt) {
    pos = el
    el = parent
    parent = this
  }
  el = assertElement(el)
  if (!el || !parent)
    return null

  let insertionPt = isNumber(pos)
    ? parent.children.item(pos)
    : typeof pos === 'string'
      ? DOM_INSERT_MAP[pos.toString()] || 0
      : 0

  if (pos === 'last')
    return parent.appendChild(el)

  if (isElement(el) || isNumber(el) || isHTMLTag(el))
    return insertChild(parent, el, pos)

  if (typeof insertionPt === 'string')
    // TODO: Polyfill this
    parent.insertAdjacentElement(insertionPt, el)

  return el
}


export function insertChild (parent: HTMLElement, el: HTMLElement, index: InsertPositionType = 0) {

  // Reassign the arguments if this function is
  // is called from within any HTMLElement
  if (this !== window && this !== insertChild) {
    index = el
    el = parent
    parent = this
  }

  el = assertElement(el)

  if (typeof index === 'number') {
    let { children, childElementCount } = parent
    if (index >= childElementCount)
      return parent.appendChild(el)

    return parent.insertBefore(el, children.item(index))
  }

  return parent.insertBefore(el, index)
}
