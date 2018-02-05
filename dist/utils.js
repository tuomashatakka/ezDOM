(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'babel-runtime/helpers/defineProperty', 'babel-runtime/helpers/extends'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/helpers/defineProperty'), require('babel-runtime/helpers/extends'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.defineProperty, global._extends);
    global.utils = mod.exports;
  }
})(this, function (exports, _defineProperty2, _extends3) {
  'use strict';
  'use babel';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.toObject = undefined;

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _extends4 = _interopRequireDefault(_extends3);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var toObject = exports.toObject = function toObject(keys) {
    var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return keys.reduce(function (x, o) {
      return (0, _extends4.default)({}, x, (0, _defineProperty3.default)({}, o, (arr || keys)[o]));
    }, {});
  };
});