(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'babel-runtime/core-js/get-iterator', 'babel-runtime/helpers/extends', './className', './DOM', './transitions', './utils'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/core-js/get-iterator'), require('babel-runtime/helpers/extends'), require('./className'), require('./DOM'), require('./transitions'), require('./utils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.getIterator, global._extends, global.className, global.DOM, global.transitions, global.utils);
    global.index = mod.exports;
  }
})(this, function (exports, _getIterator2, _extends2, _className, _DOM, _transitions, _utils) {
  'use strict';
  'use babel';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.methods = exports.defaults = undefined;
  exports.default = extendHTMLElement;

  var _getIterator3 = _interopRequireDefault(_getIterator2);

  var _extends3 = _interopRequireDefault(_extends2);

  var cls = _interopRequireWildcard(_className);

  var dom = _interopRequireWildcard(_DOM);

  var anim = _interopRequireWildcard(_transitions);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var defaults = exports.defaults = {

    // Not yet implemented
    namespace: undefined,

    // Setting to false prevents the overwriting
    // of properties for the HTMLElement.prototype
    overwrite: true
  };

  var methods = exports.methods = [{
    name: 'dom',
    methods: (0, _extends3.default)({}, dom),
    properties: dom.properties
  }, {
    name: 'anim',
    methods: (0, _extends3.default)({}, anim),
    properties: anim.properties
  }, {
    name: 'className',
    methods: (0, _extends3.default)({}, cls),
    properties: cls.properties
  }];

  function addProperty(name, getter, setter) {

    HTMLElement.prototype.__defineGetter__(name, function () {
      this.call(this);
    });

    HTMLElement.prototype.__defineSetter__(name, function (value) {
      this.call(this, value);
    });
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
  function extendHTMLElement() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


    options = (0, _extends3.default)({}, defaults, options);
    var _options = options,
        namespace = _options.namespace,
        overwrite = _options.overwrite;


    // element.class
    //  - Returns the classList for the element
    // element.class = 'classname-to-be-added'
    //  - Adds a class to the element's class list
    addProperty('class', function () {
      return cls.getClassList();
    }, function (val) {
      return cls.toggleClass(val);
    });

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var module = _step.value;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          var _loop2 = function _loop2() {
            var id = _step2.value;


            var method = function method() {
              var _module$methods$id;

              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              return (_module$methods$id = module.methods[id]).call.apply(_module$methods$id, [this].concat(args));
            };
            // if (!namespace)
            if (overwrite || !HTMLElement.prototype[id]) HTMLElement.prototype[id] = method;

            // TODO: Namespace .apply delegation
            // else
            //   HTMLElement.prototype[namespace][mehod] = fnc
          };

          for (var _iterator2 = (0, _getIterator3.default)(module.properties), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            _loop2();
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      };

      for (var _iterator = (0, _getIterator3.default)(methods), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
  }
});