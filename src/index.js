'use babel'
// @flow

import * as cls from './className'
import * as dom from './DOM'
import { toObject } from './utils'

type OptionsType = {
  namespace?: 'string' | void,
};

export const defaults = {

  // Not yet implemented
  namespace: undefined,

  // Setting to false prevents the overwriting
  // of properties for the HTMLElement.prototype
  overwrite: true,
}

export const methods = [
  {
    name: 'dom',
    methods: { ...dom },
    properties: dom.properties,
  },
  {
    name: 'className',
    methods: { ...cls },
    properties: cls.properties,
  },
]

function addProperty (name, getter, setter) {

  HTMLElement.prototype.__defineGetter__(name,
    function () {
    this.call(this) })

  HTMLElement.prototype.__defineSetter__(name,
    function (value) {
    this.call(this, value) })
}

// Calling this function applies
// the new properties provided by this package
// for the given object as its properties.
//
// To apply properties under certain namespace,
// provide a value for the `namespace` argument.
//
// With a namespace:
// import applyEzDOM from 'ezDOM'
// applyEzDOM({ namespace: 'ez' })
//
//
export default function extendHTMLElement (options: OptionsType = {}) {

  options = { ...defaults, ...options }
  let { namespace, overwrite } = options

  // element.class
  //  - Returns the classList for the element
  // element.class = 'classname-to-be-added'
  //  - Adds a class to the element's class list
  addProperty(
    'class',
    ()    => cls.getClassList(),
    (val) => cls.toggleClass(val))

  for (let module of methods) {
    for (let id of module.properties) {

      // if (!namespace)
      if(overwrite || !HTMLElement.prototype[id])
        HTMLElement.prototype[id] = module.methods[id]

      // TODO: Namespace .apply delegation
      // else
      //   HTMLElement.prototype[namespace][mehod] = fnc

    }
  }
}
