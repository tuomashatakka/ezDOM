(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './assert'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./assert'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.assert);
    global.DOM = mod.exports;
  }
})(this, function (exports, _assert) {
  'use strict';
  'use babel';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.properties = undefined;
  exports.prepend = prepend;
  exports.append = append;
  exports.insert = insert;
  exports.insertAt = insertAt;
  exports.insertChild = insertChild;
  var properties = exports.properties = ['append', 'prepend', 'insert'];

  /**
   * Insert an element as a first child among
   * the caller's children
   *
   * @method prepend
   * @param  {string | HTMLElement} el Element to be inserted
   * @return {HTMLElement}             Inserted element
   */

  function prepend(el) {
    return insertAt(this, (0, _assert.assertElement)(el), 'first');
  }

  /**
   * Insert an element as a last child among
   * the calling element's children
   *
   * @method prepend
   * @param  {string | HTMLElement} el Element to be inserted
   * @return {HTMLElement}             Appended element
   */

  function append(el) {
    el = (0, _assert.assertElement)(el);
    if (this !== window && this !== insert) return insertAt(this, (0, _assert.assertElement)(el));
    return null;
  }

  function insert(el, index) {
    el = (0, _assert.assertElement)(el);
    if (this !== window && this !== insert) return insertAt(this, (0, _assert.assertElement)(el), index);
    return null;
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

  function insertAt(parent, el) {
    var pos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'last';


    var DOM_INSERT_MAP = {
      'first': 'afterBegin',
      'last': 'beforeEnd'
    };
    // Reassign the arguments if this function is
    // is called from within any HTMLElement

    if (this !== window && this !== insertAt) {
      pos = el;
      el = parent;
      parent = this;
    }
    el = (0, _assert.assertElement)(el);
    if (!el || !parent) return null;

    var insertionPt = (0, _assert.isNumber)(pos) ? parent.children.item(pos) : typeof pos === 'string' ? DOM_INSERT_MAP[pos.toString()] || 0 : 0;

    if (pos === 'last') return parent.appendChild(el);

    if ((0, _assert.isElement)(el) || (0, _assert.isNumber)(el) || (0, _assert.isHTMLTag)(el)) return insertChild(parent, el, pos);

    if (typeof insertionPt === 'string')
      // TODO: Polyfill this
      parent.insertAdjacentElement(insertionPt, el);

    return el;
  }

  function insertChild(parent, el) {
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;


    // Reassign the arguments if this function is
    // is called from within any HTMLElement
    if (this !== window && this !== insertChild) {
      index = el;
      el = parent;
      parent = this;
    }

    el = (0, _assert.assertElement)(el);

    if (typeof index === 'number') {
      var _parent = parent,
          children = _parent.children,
          childElementCount = _parent.childElementCount;

      if (index >= childElementCount) return parent.appendChild(el);

      return parent.insertBefore(el, children.item(index));
    }

    return parent.insertBefore(el, index);
  }
});