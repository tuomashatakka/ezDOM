(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'babel-runtime/helpers/typeof'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/helpers/typeof'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._typeof);
    global.assert = mod.exports;
  }
})(this, function (exports, _typeof2) {
  'use strict';
  'use babel';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isHTMLTag = exports.isNumber = exports.isElement = undefined;
  exports.assertElement = assertElement;

  var _typeof3 = _interopRequireDefault(_typeof2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var isElement = exports.isElement = function isElement(o) {
    return (typeof o === 'undefined' ? 'undefined' : (0, _typeof3.default)(o)) === 'object' && o.tagName;
  };

  var isNumber = exports.isNumber = function isNumber(o) {
    return typeof o === 'number';
  };

  // TODO: Check the given object is within the valid tag names
  var isHTMLTag = exports.isHTMLTag = function isHTMLTag(o) {
    return typeof o === 'string';
  };

  function assertElement(el) {

    el = this !== window && this !== assertElement ? this : el;

    return isElement(el) ? el : isHTMLTag(el) ? document.createElement(el) : null;
  }
});