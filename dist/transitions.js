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
    global.transitions = mod.exports;
  }
})(this, function (exports, _assert) {
  'use strict';
  'use babel';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.HIDDEN_CLASS = exports.hideSpecification = exports.properties = undefined;
  exports.hide = hide;
  exports.show = show;
  exports.toggle = toggle;
  var properties = exports.properties = ['show', 'hide', 'toggle'];var hideSpecification = exports.hideSpecification = ['setAttribute', 'visible'];
  var HIDDEN_CLASS = exports.HIDDEN_CLASS = 'hidden';

  function toggleVisibility() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var method = hideSpecification[0],
        attr = hideSpecification[1];

    var action = state || state === null && this.hasClass(HIDDEN_CLASS) ? 'remove' : 'add';

    this[action + 'Class'](HIDDEN_CLASS);
    return this[method](attr, state);
  }

  function hide() {
    toggleVisibility.call(this, false);
  }

  function show() {
    toggleVisibility.call(this, true);
  }

  function toggle() {
    toggleVisibility.call(this);
  }
});