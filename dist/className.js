(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'babel-runtime/core-js/get-iterator', 'babel-runtime/helpers/toConsumableArray'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/core-js/get-iterator'), require('babel-runtime/helpers/toConsumableArray'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.getIterator, global.toConsumableArray);
    global.className = mod.exports;
  }
})(this, function (exports, _getIterator2, _toConsumableArray2) {
  'use strict';
  'use babel';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.properties = undefined;
  exports.getClassList = getClassList;
  exports.toggleClass = toggleClass;
  exports.addClass = addClass;
  exports.removeClass = removeClass;
  exports.hasClass = hasClass;
  exports.hasClasses = hasClasses;
  exports.toggleItems = toggleItems;

  var _getIterator3 = _interopRequireDefault(_getIterator2);

  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var properties = exports.properties = ['toggleClass', 'addClass', 'removeClass', 'hasClass', 'hasClasses', 'getClassList'];

  function getClassList() {
    return this.classList || (this.getAttribute('class') || '').split(/\s/) || [];
  }

  function toggleClass() {
    var list = getClassList.call(this);

    for (var _len = arguments.length, cls = Array(_len), _key = 0; _key < _len; _key++) {
      cls[_key] = arguments[_key];
    }

    this.setAttribute('class', toggleItems.apply(undefined, [list || []].concat(cls)).join(' '));
    return this;
  }

  function addClass() {
    var _getClassList$call;

    (_getClassList$call = getClassList.call(this)).add.apply(_getClassList$call, arguments);
    return this;
  }

  function removeClass() {
    var _getClassList$call2;

    (_getClassList$call2 = getClassList.call(this)).remove.apply(_getClassList$call2, arguments);
    return this;
  }

  function hasClass(value) {
    return hasClasses.call(this, value);
  }

  function hasClasses() {
    var classList = [].concat((0, _toConsumableArray3.default)(getClassList.call(this)));

    for (var _len2 = arguments.length, value = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      value[_key2] = arguments[_key2];
    }

    var has = value.reduce(function (res, current) {
      return res && classList.indexOf(current) > -1;
    }, true);
    return has;
  }

  function toggleItems(list) {
    var copy = [].concat((0, _toConsumableArray3.default)(list));

    for (var _len3 = arguments.length, items = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      items[_key3 - 1] = arguments[_key3];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var item = _step.value;

        var index = copy.findIndex(function (o) {
          return o === item;
        });
        var arg = index === -1 ? [0, 0, item] : [index, 1];
        copy.splice.apply(copy, arg);
      };

      for (var _iterator = (0, _getIterator3.default)(items), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return copy;
  }
});