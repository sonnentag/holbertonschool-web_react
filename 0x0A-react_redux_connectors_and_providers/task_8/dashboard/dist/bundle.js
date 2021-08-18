/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/aphrodite/es/chunk-febce46b.js":
/*!*****************************************************!*\
  !*** ./node_modules/aphrodite/es/chunk-febce46b.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ makeExports)
/* harmony export */ });
/* harmony import */ var string_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js");
/* harmony import */ var string_hash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(string_hash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var asap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! asap */ "./node_modules/asap/browser-asap.js");
/* harmony import */ var asap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(asap__WEBPACK_IMPORTED_MODULE_1__);



function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/* @flow */
/* ::
type ObjectMap = { [id:string]: any };
*/

var UPPERCASE_RE = /([A-Z])/g;

var UPPERCASE_RE_TO_KEBAB = function UPPERCASE_RE_TO_KEBAB(match
/* : string */
) {
  return (
    /* : string */
    "-".concat(match.toLowerCase())
  );
};

var kebabifyStyleName = function kebabifyStyleName(string
/* : string */
)
/* : string */
{
  var result = string.replace(UPPERCASE_RE, UPPERCASE_RE_TO_KEBAB);

  if (result[0] === 'm' && result[1] === 's' && result[2] === '-') {
    return "-".concat(result);
  }

  return result;
};
/**
 * CSS properties which accept numbers but are not in units of "px".
 * Taken from React's CSSProperty.js
 */

var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
/**
 * Taken from React's CSSProperty.js
 *
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 * Taken from React's CSSProperty.js
 */


var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
// Taken from React's CSSProperty.js

Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});
var stringifyValue = function stringifyValue(key
/* : string */
, prop
/* : any */
)
/* : string */
{
  if (typeof prop === "number") {
    if (isUnitlessNumber[key]) {
      return "" + prop;
    } else {
      return prop + "px";
    }
  } else {
    return '' + prop;
  }
};
var stringifyAndImportantifyValue = function stringifyAndImportantifyValue(key
/* : string */
, prop
/* : any */
) {
  return (
    /* : string */
    importantify(stringifyValue(key, prop))
  );
}; // Turn a string into a hash string of base-36 values (using letters and numbers)
// eslint-disable-next-line no-unused-vars

var hashString = function hashString(string
/* : string */
, key
/* : ?string */
) {
  return (
    /* string */
    string_hash__WEBPACK_IMPORTED_MODULE_0___default()(string).toString(36)
  );
}; // Hash a javascript object using JSON.stringify. This is very fast, about 3
// microseconds on my computer for a sample object:
// http://jsperf.com/test-hashfnv32a-hash/5
//
// Note that this uses JSON.stringify to stringify the objects so in order for
// this to produce consistent hashes browsers need to have a consistent
// ordering of objects. Ben Alpert says that Facebook depends on this, so we
// can probably depend on this too.

var hashObject = function hashObject(object
/* : ObjectMap */
) {
  return (
    /* : string */
    hashString(JSON.stringify(object))
  );
}; // Given a single style value string like the "b" from "a: b;", adds !important
// to generate "b !important".

var importantify = function importantify(string
/* : string */
) {
  return (
    /* : string */
    // Bracket string character access is very fast, and in the default case we
    // normally don't expect there to be "!important" at the end of the string
    // so we can use this simple check to take an optimized path. If there
    // happens to be a "!" in this position, we follow up with a more thorough
    // check.
    string[string.length - 10] === '!' && string.slice(-11) === ' !important' ? string : "".concat(string, " !important")
  );
};

/* @flow */
var MAP_EXISTS = typeof Map !== 'undefined';

var OrderedElements =
/*#__PURE__*/
function () {
  /* ::
  elements: {[string]: any};
  keyOrder: string[];
  */
  function OrderedElements() {
    this.elements = {};
    this.keyOrder = [];
  }

  var _proto = OrderedElements.prototype;

  _proto.forEach = function forEach(callback
  /* : (string, any) => void */
  ) {
    for (var i = 0; i < this.keyOrder.length; i++) {
      // (value, key) to match Map's API
      callback(this.elements[this.keyOrder[i]], this.keyOrder[i]);
    }
  };

  _proto.set = function set(key
  /* : string */
  , value
  /* : any */
  , shouldReorder
  /* : ?boolean */
  ) {
    if (!this.elements.hasOwnProperty(key)) {
      this.keyOrder.push(key);
    } else if (shouldReorder) {
      var index = this.keyOrder.indexOf(key);
      this.keyOrder.splice(index, 1);
      this.keyOrder.push(key);
    }

    if (value == null) {
      this.elements[key] = value;
      return;
    }

    if (MAP_EXISTS && value instanceof Map || value instanceof OrderedElements) {
      // We have found a nested Map, so we need to recurse so that all
      // of the nested objects and Maps are merged properly.
      var nested = this.elements.hasOwnProperty(key) ? this.elements[key] : new OrderedElements();
      value.forEach(function (value, key) {
        nested.set(key, value, shouldReorder);
      });
      this.elements[key] = nested;
      return;
    }

    if (!Array.isArray(value) && _typeof(value) === 'object') {
      // We have found a nested object, so we need to recurse so that all
      // of the nested objects and Maps are merged properly.
      var _nested = this.elements.hasOwnProperty(key) ? this.elements[key] : new OrderedElements();

      var keys = Object.keys(value);

      for (var i = 0; i < keys.length; i += 1) {
        _nested.set(keys[i], value[keys[i]], shouldReorder);
      }

      this.elements[key] = _nested;
      return;
    }

    this.elements[key] = value;
  };

  _proto.get = function get(key
  /* : string */
  )
  /* : any */
  {
    return this.elements[key];
  };

  _proto.has = function has(key
  /* : string */
  )
  /* : boolean */
  {
    return this.elements.hasOwnProperty(key);
  };

  _proto.addStyleType = function addStyleType(styleType
  /* : any */
  )
  /* : void */
  {
    var _this = this;

    if (MAP_EXISTS && styleType instanceof Map || styleType instanceof OrderedElements) {
      styleType.forEach(function (value, key) {
        _this.set(key, value, true);
      });
    } else {
      var keys = Object.keys(styleType);

      for (var i = 0; i < keys.length; i++) {
        this.set(keys[i], styleType[keys[i]], true);
      }
    }
  };

  return OrderedElements;
}();

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n.default || n;
}

var capitalizeString_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
});

unwrapExports(capitalizeString_1);

var prefixProperty_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;



var _capitalizeString2 = _interopRequireDefault(capitalizeString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var newStyle = {};
    var requiredPrefixes = prefixProperties[property];
    var capitalizedProperty = (0, _capitalizeString2.default)(property);
    var keys = Object.keys(style);
    for (var i = 0; i < keys.length; i++) {
      var styleProperty = keys[i];
      if (styleProperty === property) {
        for (var j = 0; j < requiredPrefixes.length; j++) {
          newStyle[requiredPrefixes[j] + capitalizedProperty] = style[property];
        }
      }
      newStyle[styleProperty] = style[styleProperty];
    }
    return newStyle;
  }
  return style;
}
});

unwrapExports(prefixProperty_1);

var prefixValue_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}
});

unwrapExports(prefixValue_1);

var addNewValuesOnly_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addNewValuesOnly;
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}
});

unwrapExports(addNewValuesOnly_1);

var isObject_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}
});

unwrapExports(isObject_1);

var createPrefixer_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrefixer;



var _prefixProperty2 = _interopRequireDefault(prefixProperty_1);



var _prefixValue2 = _interopRequireDefault(prefixValue_1);



var _addNewValuesOnly2 = _interopRequireDefault(addNewValuesOnly_1);



var _isObject2 = _interopRequireDefault(isObject_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  return function prefix(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if ((0, _isObject2.default)(value)) {
        style[property] = prefix(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        style = (0, _prefixProperty2.default)(prefixMap, property, style);
      }
    }

    return style;
  };
}
});

var createPrefixer = unwrapExports(createPrefixer_1);

var backgroundClip_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = backgroundClip;

// https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip#Browser_compatibility
function backgroundClip(property, value) {
  if (typeof value === 'string' && value === 'text') {
    return ['-webkit-text', 'text'];
  }
}
});

var backgroundClip = unwrapExports(backgroundClip_1);

var isPrefixedValue_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];
});

unwrapExports(isPrefixedValue_1);

var calc_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;



var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];
function calc(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/calc\(/g, prefix + 'calc(');
    });
  }
}
});

var calc = unwrapExports(calc_1);

var crossFade_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;



var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
});

var crossFade = unwrapExports(crossFade_1);

var cursor_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
});

var cursor = unwrapExports(cursor_1);

var filter_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;



var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
});

var filter = unwrapExports(filter_1);

var flex_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}
});

var flex = unwrapExports(flex_1);

var flexboxIE_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;
var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msFlexPreferredSize'
  // Full expanded syntax is flex-grow | flex-shrink | flex-basis.
};var flexShorthandMappings = {
  auto: '1 1 auto',
  inherit: 'inherit',
  initial: '0 1 auto',
  none: '0 0 auto',
  unset: 'unset'
};
var isUnitlessNumber = /^\d+(\.\d+)?$/;

function flexboxIE(property, value, style) {
  if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
  if (property === 'flex') {
    // For certain values we can do straight mappings based on the spec
    // for the expansions.
    if (Object.prototype.hasOwnProperty.call(flexShorthandMappings, value)) {
      style.msFlex = flexShorthandMappings[value];
      return;
    }
    // Here we have no direct mapping, so we favor looking for a
    // unitless positive number as that will be the most common use-case.
    if (isUnitlessNumber.test(value)) {
      style.msFlex = value + ' 1 0%';
      return;
    }

    // The next thing we can look for is if there are multiple values.
    var flexValues = value.split(/\s/);
    // If we only have a single value that wasn't a positive unitless
    // or a pre-mapped value, then we can assume it is a unit value.
    switch (flexValues.length) {
      case 1:
        style.msFlex = '1 1 ' + value;
        return;
      case 2:
        // If we have 2 units, then we expect that the first will
        // always be a unitless number and represents flex-grow.
        // The second unit will represent flex-shrink for a unitless
        // value, or flex-basis otherwise.
        if (isUnitlessNumber.test(flexValues[1])) {
          style.msFlex = flexValues[0] + ' ' + flexValues[1] + ' 0%';
        } else {
          style.msFlex = flexValues[0] + ' 1 ' + flexValues[1];
        }
        return;
      default:
        style.msFlex = value;
    }
  }
}
});

var flexboxIE = unwrapExports(flexboxIE_1);

var flexboxOld_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines',
  flexGrow: 'WebkitBoxFlex'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
});

var flexboxOld = unwrapExports(flexboxOld_1);

var gradient_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;



var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return value.replace(values, function (grad) {
        return prefix + grad;
      });
    });
  }
}
});

var gradient = unwrapExports(gradient_1);

var grid_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = grid;
function isSimplePositionValue(value) {
  return typeof value === 'number' && !isNaN(value);
}

var alignmentValues = ['center', 'end', 'start', 'stretch'];

var displayValues = {
  'inline-grid': ['-ms-inline-grid', 'inline-grid'],
  grid: ['-ms-grid', 'grid']
};

var propertyConverters = {
  alignSelf: function alignSelf(value, style) {
    if (alignmentValues.indexOf(value) > -1) {
      style.msGridRowAlign = value;
    }
  },

  gridColumn: function gridColumn(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridColumn = value;
    } else {
      var _value$split$map = value.split('/').map(function (position) {
        return +position;
      }),
          _value$split$map2 = _slicedToArray(_value$split$map, 2),
          start = _value$split$map2[0],
          end = _value$split$map2[1];

      propertyConverters.gridColumnStart(start, style);
      propertyConverters.gridColumnEnd(end, style);
    }
  },

  gridColumnEnd: function gridColumnEnd(value, style) {
    var msGridColumn = style.msGridColumn;

    if (isSimplePositionValue(value) && isSimplePositionValue(msGridColumn)) {
      style.msGridColumnSpan = value - msGridColumn;
    }
  },

  gridColumnStart: function gridColumnStart(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridColumn = value;
    }
  },

  gridRow: function gridRow(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridRow = value;
    } else {
      var _value$split$map3 = value.split('/').map(function (position) {
        return +position;
      }),
          _value$split$map4 = _slicedToArray(_value$split$map3, 2),
          start = _value$split$map4[0],
          end = _value$split$map4[1];

      propertyConverters.gridRowStart(start, style);
      propertyConverters.gridRowEnd(end, style);
    }
  },

  gridRowEnd: function gridRowEnd(value, style) {
    var msGridRow = style.msGridRow;

    if (isSimplePositionValue(value) && isSimplePositionValue(msGridRow)) {
      style.msGridRowSpan = value - msGridRow;
    }
  },

  gridRowStart: function gridRowStart(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridRow = value;
    }
  },

  gridTemplateColumns: function gridTemplateColumns(value, style) {
    style.msGridColumns = value;
  },

  gridTemplateRows: function gridTemplateRows(value, style) {
    style.msGridRows = value;
  },

  justifySelf: function justifySelf(value, style) {
    if (alignmentValues.indexOf(value) > -1) {
      style.msGridColumnAlign = value;
    }
  }
};

function grid(property, value, style) {
  if (property === 'display' && value in displayValues) {
    return displayValues[value];
  }

  if (property in propertyConverters) {
    var propertyConverter = propertyConverters[property];
    propertyConverter(value, style);
  }
}
});

var grid = unwrapExports(grid_1);

var imageSet_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;



var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
});

var imageSet = unwrapExports(imageSet_1);

var logical_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = logical;
var alternativeProps = {
  marginBlockStart: ['WebkitMarginBefore'],
  marginBlockEnd: ['WebkitMarginAfter'],
  marginInlineStart: ['WebkitMarginStart', 'MozMarginStart'],
  marginInlineEnd: ['WebkitMarginEnd', 'MozMarginEnd'],
  paddingBlockStart: ['WebkitPaddingBefore'],
  paddingBlockEnd: ['WebkitPaddingAfter'],
  paddingInlineStart: ['WebkitPaddingStart', 'MozPaddingStart'],
  paddingInlineEnd: ['WebkitPaddingEnd', 'MozPaddingEnd'],
  borderBlockStart: ['WebkitBorderBefore'],
  borderBlockStartColor: ['WebkitBorderBeforeColor'],
  borderBlockStartStyle: ['WebkitBorderBeforeStyle'],
  borderBlockStartWidth: ['WebkitBorderBeforeWidth'],
  borderBlockEnd: ['WebkitBorderAfter'],
  borderBlockEndColor: ['WebkitBorderAfterColor'],
  borderBlockEndStyle: ['WebkitBorderAfterStyle'],
  borderBlockEndWidth: ['WebkitBorderAfterWidth'],
  borderInlineStart: ['WebkitBorderStart', 'MozBorderStart'],
  borderInlineStartColor: ['WebkitBorderStartColor', 'MozBorderStartColor'],
  borderInlineStartStyle: ['WebkitBorderStartStyle', 'MozBorderStartStyle'],
  borderInlineStartWidth: ['WebkitBorderStartWidth', 'MozBorderStartWidth'],
  borderInlineEnd: ['WebkitBorderEnd', 'MozBorderEnd'],
  borderInlineEndColor: ['WebkitBorderEndColor', 'MozBorderEndColor'],
  borderInlineEndStyle: ['WebkitBorderEndStyle', 'MozBorderEndStyle'],
  borderInlineEndWidth: ['WebkitBorderEndWidth', 'MozBorderEndWidth']
};

function logical(property, value, style) {
  if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
    var alternativePropList = alternativeProps[property];
    for (var i = 0, len = alternativePropList.length; i < len; ++i) {
      style[alternativePropList[i]] = value;
    }
  }
}
});

var logical = unwrapExports(logical_1);

var position_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
});

var position = unwrapExports(position_1);

var sizing_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
});

var sizing = unwrapExports(sizing_1);

/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower);
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

var hyphenateStyleName$1 = /*#__PURE__*/Object.freeze({
  default: hyphenateStyleName
});

var _hyphenateStyleName = getCjsExportFromNamespace(hyphenateStyleName$1);

var hyphenateProperty_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;



var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];
});

unwrapExports(hyphenateProperty_1);

var transition_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;



var _hyphenateProperty2 = _interopRequireDefault(hyphenateProperty_1);



var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);



var _capitalizeString2 = _interopRequireDefault(capitalizeString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}
});

var transition = unwrapExports(transition_1);

var w = ["Webkit"];
var m = ["Moz"];
var ms = ["ms"];
var wm = ["Webkit", "Moz"];
var wms = ["Webkit", "ms"];
var wmms = ["Webkit", "Moz", "ms"];
var staticData = {
  plugins: [backgroundClip, calc, crossFade, cursor, filter, flex, flexboxIE, flexboxOld, gradient, grid, imageSet, logical, position, sizing, transition],
  prefixMap: {
    "transform": wms,
    "transformOrigin": wms,
    "transformOriginX": wms,
    "transformOriginY": wms,
    "backfaceVisibility": w,
    "perspective": w,
    "perspectiveOrigin": w,
    "transformStyle": w,
    "transformOriginZ": w,
    "animation": w,
    "animationDelay": w,
    "animationDirection": w,
    "animationFillMode": w,
    "animationDuration": w,
    "animationIterationCount": w,
    "animationName": w,
    "animationPlayState": w,
    "animationTimingFunction": w,
    "appearance": wm,
    "userSelect": wmms,
    "fontKerning": w,
    "textEmphasisPosition": w,
    "textEmphasis": w,
    "textEmphasisStyle": w,
    "textEmphasisColor": w,
    "boxDecorationBreak": w,
    "clipPath": w,
    "maskImage": w,
    "maskMode": w,
    "maskRepeat": w,
    "maskPosition": w,
    "maskClip": w,
    "maskOrigin": w,
    "maskSize": w,
    "maskComposite": w,
    "mask": w,
    "maskBorderSource": w,
    "maskBorderMode": w,
    "maskBorderSlice": w,
    "maskBorderWidth": w,
    "maskBorderOutset": w,
    "maskBorderRepeat": w,
    "maskBorder": w,
    "maskType": w,
    "textDecorationStyle": wm,
    "textDecorationSkip": wm,
    "textDecorationLine": wm,
    "textDecorationColor": wm,
    "filter": w,
    "fontFeatureSettings": wm,
    "breakAfter": wmms,
    "breakBefore": wmms,
    "breakInside": wmms,
    "columnCount": wm,
    "columnFill": wm,
    "columnGap": wm,
    "columnRule": wm,
    "columnRuleColor": wm,
    "columnRuleStyle": wm,
    "columnRuleWidth": wm,
    "columns": wm,
    "columnSpan": wm,
    "columnWidth": wm,
    "writingMode": wms,
    "flex": wms,
    "flexBasis": w,
    "flexDirection": wms,
    "flexGrow": w,
    "flexFlow": wms,
    "flexShrink": w,
    "flexWrap": wms,
    "alignContent": w,
    "alignItems": w,
    "alignSelf": w,
    "justifyContent": w,
    "order": w,
    "transitionDelay": w,
    "transitionDuration": w,
    "transitionProperty": w,
    "transitionTimingFunction": w,
    "backdropFilter": w,
    "scrollSnapType": wms,
    "scrollSnapPointsX": wms,
    "scrollSnapPointsY": wms,
    "scrollSnapDestination": wms,
    "scrollSnapCoordinate": wms,
    "shapeImageThreshold": w,
    "shapeImageMargin": w,
    "shapeImageOutside": w,
    "hyphens": wmms,
    "flowInto": wms,
    "flowFrom": wms,
    "regionFragment": wms,
    "textOrientation": w,
    "boxSizing": m,
    "textAlignLast": m,
    "tabSize": m,
    "wrapFlow": ms,
    "wrapThrough": ms,
    "wrapMargin": ms,
    "touchAction": ms,
    "textSizeAdjust": wms,
    "borderImage": w,
    "borderImageOutset": w,
    "borderImageRepeat": w,
    "borderImageSlice": w,
    "borderImageSource": w,
    "borderImageWidth": w
  }
};

var prefixAll = createPrefixer(staticData);
/* ::
import type { SheetDefinition } from './index.js';
type StringHandlers = { [id:string]: Function };
type SelectorCallback = (selector: string) => string[];
export type SelectorHandler = (
    selector: string,
    baseSelector: string,
    callback: SelectorCallback
) => string[] | string | null;
*/

/**
 * `selectorHandlers` are functions which handle special selectors which act
 * differently than normal style definitions. These functions look at the
 * current selector and can generate CSS for the styles in their subtree by
 * calling the callback with a new selector.
 *
 * For example, when generating styles with a base selector of '.foo' and the
 * following styles object:
 *
 *   {
 *     ':nth-child(2n)': {
 *       ':hover': {
 *         color: 'red'
 *       }
 *     }
 *   }
 *
 * when we reach the ':hover' style, we would call our selector handlers like
 *
 *   handler(':hover', '.foo:nth-child(2n)', callback)
 *
 * Since our `pseudoSelectors` handles ':hover' styles, that handler would call
 * the callback like
 *
 *   callback('.foo:nth-child(2n):hover')
 *
 * to generate its subtree `{ color: 'red' }` styles with a
 * '.foo:nth-child(2n):hover' selector. The callback would return an array of CSS
 * rules like
 *
 *   ['.foo:nth-child(2n):hover{color:red !important;}']
 *
 * and the handler would then return that resulting CSS.
 *
 * `defaultSelectorHandlers` is the list of default handlers used in a call to
 * `generateCSS`.
 *
 * @name SelectorHandler
 * @function
 * @param {string} selector: The currently inspected selector. ':hover' in the
 *     example above.
 * @param {string} baseSelector: The selector of the parent styles.
 *     '.foo:nth-child(2n)' in the example above.
 * @param {function} generateSubtreeStyles: A function which can be called to
 *     generate CSS for the subtree of styles corresponding to the selector.
 *     Accepts a new baseSelector to use for generating those styles.
 * @returns {string[] | string | null} The generated CSS for this selector, or
 *     null if we don't handle this selector.
 */

var defaultSelectorHandlers
/* : SelectorHandler[] */
= [// Handle pseudo-selectors, like :hover and :nth-child(3n)
function pseudoSelectors(selector, baseSelector, generateSubtreeStyles) {
  if (selector[0] !== ":") {
    return null;
  }

  return generateSubtreeStyles(baseSelector + selector);
}, // Handle media queries (or font-faces)
function mediaQueries(selector, baseSelector, generateSubtreeStyles) {
  if (selector[0] !== "@") {
    return null;
  } // Generate the styles normally, and then wrap them in the media query.


  var generated = generateSubtreeStyles(baseSelector);
  return ["".concat(selector, "{").concat(generated.join(''), "}")];
}];
/**
 * Generate CSS for a selector and some styles.
 *
 * This function handles the media queries and pseudo selectors that can be used
 * in aphrodite styles.
 *
 * @param {string} selector: A base CSS selector for the styles to be generated
 *     with.
 * @param {Object} styleTypes: A list of properties of the return type of
 *     StyleSheet.create, e.g. [styles.red, styles.blue].
 * @param {Array.<SelectorHandler>} selectorHandlers: A list of selector
 *     handlers to use for handling special selectors. See
 *     `defaultSelectorHandlers`.
 * @param stringHandlers: See `generateCSSRuleset`
 * @param useImportant: See `generateCSSRuleset`
 *
 * To actually generate the CSS special-construct-less styles are passed to
 * `generateCSSRuleset`.
 *
 * For instance, a call to
 *
 *     generateCSS(".foo", [{
 *       color: "red",
 *       "@media screen": {
 *         height: 20,
 *         ":hover": {
 *           backgroundColor: "black"
 *         }
 *       },
 *       ":active": {
 *         fontWeight: "bold"
 *       }
 *     }], defaultSelectorHandlers);
 *
 * with the default `selectorHandlers` will make 5 calls to
 * `generateCSSRuleset`:
 *
 *     generateCSSRuleset(".foo", { color: "red" }, ...)
 *     generateCSSRuleset(".foo:active", { fontWeight: "bold" }, ...)
 *     // These 2 will be wrapped in @media screen {}
 *     generateCSSRuleset(".foo", { height: 20 }, ...)
 *     generateCSSRuleset(".foo:hover", { backgroundColor: "black" }, ...)
 */

var generateCSS = function generateCSS(selector
/* : string */
, styleTypes
/* : SheetDefinition[] */
, selectorHandlers
/* : SelectorHandler[] */
, stringHandlers
/* : StringHandlers */
, useImportant
/* : boolean */
)
/* : string[] */
{
  var merged = new OrderedElements();

  for (var i = 0; i < styleTypes.length; i++) {
    merged.addStyleType(styleTypes[i]);
  }

  var plainDeclarations = new OrderedElements();
  var generatedStyles = []; // TODO(emily): benchmark this to see if a plain for loop would be faster.

  merged.forEach(function (val, key) {
    // For each key, see if one of the selector handlers will handle these
    // styles.
    var foundHandler = selectorHandlers.some(function (handler) {
      var result = handler(key, selector, function (newSelector) {
        return generateCSS(newSelector, [val], selectorHandlers, stringHandlers, useImportant);
      });

      if (result != null) {
        // If the handler returned something, add it to the generated
        // CSS and stop looking for another handler.
        if (Array.isArray(result)) {
          generatedStyles.push.apply(generatedStyles, _toConsumableArray(result));
        } else {
          // eslint-disable-next-line
          console.warn('WARNING: Selector handlers should return an array of rules.' + 'Returning a string containing multiple rules is deprecated.', handler);
          generatedStyles.push("@media all {".concat(result, "}"));
        }

        return true;
      }
    }); // If none of the handlers handled it, add it to the list of plain
    // style declarations.

    if (!foundHandler) {
      plainDeclarations.set(key, val, true);
    }
  });
  var generatedRuleset = generateCSSRuleset(selector, plainDeclarations, stringHandlers, useImportant, selectorHandlers);

  if (generatedRuleset) {
    generatedStyles.unshift(generatedRuleset);
  }

  return generatedStyles;
};
/**
 * Helper method of generateCSSRuleset to facilitate custom handling of certain
 * CSS properties. Used for e.g. font families.
 *
 * See generateCSSRuleset for usage and documentation of paramater types.
 */

var runStringHandlers = function runStringHandlers(declarations
/* : OrderedElements */
, stringHandlers
/* : StringHandlers */
, selectorHandlers
/* : SelectorHandler[] */
)
/* : void */
{
  if (!stringHandlers) {
    return;
  }

  var stringHandlerKeys = Object.keys(stringHandlers);

  for (var i = 0; i < stringHandlerKeys.length; i++) {
    var key = stringHandlerKeys[i];

    if (declarations.has(key)) {
      // A declaration exists for this particular string handler, so we
      // need to let the string handler interpret the declaration first
      // before proceeding.
      //
      // TODO(emily): Pass in a callback which generates CSS, similar to
      // how our selector handlers work, instead of passing in
      // `selectorHandlers` and have them make calls to `generateCSS`
      // themselves. Right now, this is impractical because our string
      // handlers are very specialized and do complex things.
      declarations.set(key, stringHandlers[key](declarations.get(key), selectorHandlers), // Preserve order here, since we are really replacing an
      // unprocessed style with a processed style, not overriding an
      // earlier style
      false);
    }
  }
};

var transformRule = function transformRule(key
/* : string */
, value
/* : string */
, transformValue
/* : function */
) {
  return (
    /* : string */
    "".concat(kebabifyStyleName(key), ":").concat(transformValue(key, value), ";")
  );
};

var arrayToObjectKeysReducer = function arrayToObjectKeysReducer(acc, val) {
  acc[val] = true;
  return acc;
};
/**
 * Generate a CSS ruleset with the selector and containing the declarations.
 *
 * This function assumes that the given declarations don't contain any special
 * children (such as media queries, pseudo-selectors, or descendant styles).
 *
 * Note that this method does not deal with nesting used for e.g.
 * psuedo-selectors or media queries. That responsibility is left to  the
 * `generateCSS` function.
 *
 * @param {string} selector: the selector associated with the ruleset
 * @param {Object} declarations: a map from camelCased CSS property name to CSS
 *     property value.
 * @param {Object.<string, function>} stringHandlers: a map from camelCased CSS
 *     property name to a function which will map the given value to the value
 *     that is output.
 * @param {bool} useImportant: A boolean saying whether to append "!important"
 *     to each of the CSS declarations.
 * @returns {string} A string of raw CSS.
 *
 * Examples:
 *
 *    generateCSSRuleset(".blah", { color: "red" })
 *    -> ".blah{color: red !important;}"
 *    generateCSSRuleset(".blah", { color: "red" }, {}, false)
 *    -> ".blah{color: red}"
 *    generateCSSRuleset(".blah", { color: "red" }, {color: c => c.toUpperCase})
 *    -> ".blah{color: RED}"
 *    generateCSSRuleset(".blah:hover", { color: "red" })
 *    -> ".blah:hover{color: red}"
 */


var generateCSSRuleset = function generateCSSRuleset(selector
/* : string */
, declarations
/* : OrderedElements */
, stringHandlers
/* : StringHandlers */
, useImportant
/* : boolean */
, selectorHandlers
/* : SelectorHandler[] */
)
/* : string */
{
  // Mutates declarations
  runStringHandlers(declarations, stringHandlers, selectorHandlers);
  var originalElements = Object.keys(declarations.elements).reduce(arrayToObjectKeysReducer, Object.create(null)); // NOTE(emily): This mutates handledDeclarations.elements.

  var prefixedElements = prefixAll(declarations.elements);
  var elementNames = Object.keys(prefixedElements);

  if (elementNames.length !== declarations.keyOrder.length) {
    // There are some prefixed values, so we need to figure out how to sort
    // them.
    //
    // Loop through prefixedElements, looking for anything that is not in
    // sortOrder, which means it was added by prefixAll. This means that we
    // need to figure out where it should appear in the sortOrder.
    for (var i = 0; i < elementNames.length; i++) {
      if (!originalElements[elementNames[i]]) {
        // This element is not in the sortOrder, which means it is a prefixed
        // value that was added by prefixAll. Let's try to figure out where it
        // goes.
        var originalStyle = void 0;

        if (elementNames[i][0] === 'W') {
          // This is a Webkit-prefixed style, like "WebkitTransition". Let's
          // find its original style's sort order.
          originalStyle = elementNames[i][6].toLowerCase() + elementNames[i].slice(7);
        } else if (elementNames[i][1] === 'o') {
          // This is a Moz-prefixed style, like "MozTransition". We check
          // the second character to avoid colliding with Ms-prefixed
          // styles. Let's find its original style's sort order.
          originalStyle = elementNames[i][3].toLowerCase() + elementNames[i].slice(4);
        } else {
          // if (elementNames[i][1] === 's') {
          // This is a Ms-prefixed style, like "MsTransition".
          originalStyle = elementNames[i][2].toLowerCase() + elementNames[i].slice(3);
        }

        if (originalStyle && originalElements[originalStyle]) {
          var originalIndex = declarations.keyOrder.indexOf(originalStyle);
          declarations.keyOrder.splice(originalIndex, 0, elementNames[i]);
        } else {
          // We don't know what the original style was, so sort it to
          // top. This can happen for styles that are added that don't
          // have the same base name as the original style.
          declarations.keyOrder.unshift(elementNames[i]);
        }
      }
    }
  }

  var transformValue = useImportant === false ? stringifyValue : stringifyAndImportantifyValue;
  var rules = [];

  for (var _i = 0; _i < declarations.keyOrder.length; _i++) {
    var key = declarations.keyOrder[_i];
    var value = prefixedElements[key];

    if (Array.isArray(value)) {
      // inline-style-prefixer returns an array when there should be
      // multiple rules for the same key. Here we flatten to multiple
      // pairs with the same key.
      for (var j = 0; j < value.length; j++) {
        rules.push(transformRule(key, value[j], transformValue));
      }
    } else {
      rules.push(transformRule(key, value, transformValue));
    }
  }

  if (rules.length) {
    return "".concat(selector, "{").concat(rules.join(""), "}");
  } else {
    return "";
  }
};

/* ::
import type { SheetDefinition, SheetDefinitions } from './index.js';
import type { MaybeSheetDefinition } from './exports.js';
import type { SelectorHandler } from './generate.js';
*/
// The current <style> tag we are inserting into, or null if we haven't
// inserted anything yet. We could find this each time using
// `document.querySelector("style[data-aphrodite"])`, but holding onto it is
// faster.

var styleTag
/* : ?HTMLStyleElement */
= null; // Inject a set of rules into a <style> tag in the head of the document. This
// will automatically create a style tag and then continue to use it for
// multiple injections. It will also use a style tag with the `data-aphrodite`
// tag on it if that exists in the DOM. This could be used for e.g. reusing the
// same style tag that server-side rendering inserts.

var injectStyleTag = function injectStyleTag(cssRules
/* : string[] */
) {
  if (styleTag == null) {
    // Try to find a style tag with the `data-aphrodite` attribute first.
    styleTag = document.querySelector("style[data-aphrodite]")
    /* : any */
    ; // If that doesn't work, generate a new style tag.

    if (styleTag == null) {
      // Taken from
      // http://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript
      var head = document.head || document.getElementsByTagName('head')[0];
      styleTag = document.createElement('style');
      styleTag.type = 'text/css';
      styleTag.setAttribute("data-aphrodite", "");
      head.appendChild(styleTag);
    }
  } // $FlowFixMe


  var sheet = styleTag.styleSheet || styleTag.sheet
  /* : any */
  ;

  if (sheet.insertRule) {
    var numRules = sheet.cssRules.length;
    cssRules.forEach(function (rule) {
      try {
        sheet.insertRule(rule, numRules);
        numRules += 1;
      } catch (e) {// The selector for this rule wasn't compatible with the browser
      }
    });
  } else {
    styleTag.innerText = (styleTag.innerText || '') + cssRules.join('');
  }
}; // Custom handlers for stringifying CSS values that have side effects
// (such as fontFamily, which can cause @font-face rules to be injected)


var stringHandlers = {
  // With fontFamily we look for objects that are passed in and interpret
  // them as @font-face rules that we need to inject. The value of fontFamily
  // can either be a string (as normal), an object (a single font face), or
  // an array of objects and strings.
  fontFamily: function fontFamily(val) {
    if (Array.isArray(val)) {
      var nameMap = {};
      val.forEach(function (v) {
        nameMap[fontFamily(v)] = true;
      });
      return Object.keys(nameMap).join(",");
    } else if (_typeof(val) === "object") {
      injectStyleOnce(val.src, "@font-face", [val], false);
      return "\"".concat(val.fontFamily, "\"");
    } else {
      return val;
    }
  },
  // With animationName we look for an object that contains keyframes and
  // inject them as an `@keyframes` block, returning a uniquely generated
  // name. The keyframes object should look like
  //  animationName: {
  //    from: {
  //      left: 0,
  //      top: 0,
  //    },
  //    '50%': {
  //      left: 15,
  //      top: 5,
  //    },
  //    to: {
  //      left: 20,
  //      top: 20,
  //    }
  //  }
  // TODO(emily): `stringHandlers` doesn't let us rename the key, so I have
  // to use `animationName` here. Improve that so we can call this
  // `animation` instead of `animationName`.
  animationName: function animationName(val, selectorHandlers) {
    if (Array.isArray(val)) {
      return val.map(function (v) {
        return animationName(v, selectorHandlers);
      }).join(",");
    } else if (_typeof(val) === "object") {
      // Generate a unique name based on the hash of the object. We can't
      // just use the hash because the name can't start with a number.
      // TODO(emily): this probably makes debugging hard, allow a custom
      // name?
      var name = "keyframe_".concat(hashObject(val)); // Since keyframes need 3 layers of nesting, we use `generateCSS` to
      // build the inner layers and wrap it in `@keyframes` ourselves.

      var finalVal = "@keyframes ".concat(name, "{"); // TODO see if we can find a way where checking for OrderedElements
      // here is not necessary. Alternatively, perhaps we should have a
      // utility method that can iterate over either a plain object, an
      // instance of OrderedElements, or a Map, and then use that here and
      // elsewhere.

      if (val instanceof OrderedElements) {
        val.forEach(function (valVal, valKey) {
          finalVal += generateCSS(valKey, [valVal], selectorHandlers, stringHandlers, false).join('');
        });
      } else {
        Object.keys(val).forEach(function (key) {
          finalVal += generateCSS(key, [val[key]], selectorHandlers, stringHandlers, false).join('');
        });
      }

      finalVal += '}';
      injectGeneratedCSSOnce(name, [finalVal]);
      return name;
    } else {
      return val;
    }
  }
}; // This is a map from Aphrodite's generated class names to `true` (acting as a
// set of class names)

var alreadyInjected = {}; // This is the buffer of styles which have not yet been flushed.

var injectionBuffer
/* : string[] */
= []; // A flag to tell if we are already buffering styles. This could happen either
// because we scheduled a flush call already, so newly added styles will
// already be flushed, or because we are statically buffering on the server.

var isBuffering = false;

var injectGeneratedCSSOnce = function injectGeneratedCSSOnce(key, generatedCSS) {
  var _injectionBuffer;

  if (alreadyInjected[key]) {
    return;
  }

  if (!isBuffering) {
    // We should never be automatically buffering on the server (or any
    // place without a document), so guard against that.
    if (typeof document === "undefined") {
      throw new Error("Cannot automatically buffer without a document");
    } // If we're not already buffering, schedule a call to flush the
    // current styles.


    isBuffering = true;
    asap__WEBPACK_IMPORTED_MODULE_1___default()(flushToStyleTag);
  }

  (_injectionBuffer = injectionBuffer).push.apply(_injectionBuffer, _toConsumableArray(generatedCSS));

  alreadyInjected[key] = true;
};

var injectStyleOnce = function injectStyleOnce(key
/* : string */
, selector
/* : string */
, definitions
/* : SheetDefinition[] */
, useImportant
/* : boolean */
) {
  var selectorHandlers
  /* : SelectorHandler[] */
  = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

  if (alreadyInjected[key]) {
    return;
  }

  var generated = generateCSS(selector, definitions, selectorHandlers, stringHandlers, useImportant);
  injectGeneratedCSSOnce(key, generated);
};
var reset = function reset() {
  injectionBuffer = [];
  alreadyInjected = {};
  isBuffering = false;
  styleTag = null;
};
var resetInjectedStyle = function resetInjectedStyle(key
/* : string */
) {
  delete alreadyInjected[key];
};
var getBufferedStyles = function getBufferedStyles() {
  return injectionBuffer;
};
var startBuffering = function startBuffering() {
  if (isBuffering) {
    throw new Error("Cannot buffer while already buffering");
  }

  isBuffering = true;
};

var flushToArray = function flushToArray() {
  isBuffering = false;
  var ret = injectionBuffer;
  injectionBuffer = [];
  return ret;
};

var flushToString = function flushToString() {
  return flushToArray().join('');
};
var flushToStyleTag = function flushToStyleTag() {
  var cssRules = flushToArray();

  if (cssRules.length > 0) {
    injectStyleTag(cssRules);
  }
};
var getRenderedClassNames = function getRenderedClassNames()
/* : string[] */
{
  return Object.keys(alreadyInjected);
};
var addRenderedClassNames = function addRenderedClassNames(classNames
/* : string[] */
) {
  classNames.forEach(function (className) {
    alreadyInjected[className] = true;
  });
};

var isValidStyleDefinition = function isValidStyleDefinition(def
/* : Object */
) {
  return "_definition" in def && "_name" in def && "_len" in def;
};

var processStyleDefinitions = function processStyleDefinitions(styleDefinitions
/* : any[] */
, classNameBits
/* : string[] */
, definitionBits
/* : Object[] */
, length
/* : number */
)
/* : number */
{
  for (var i = 0; i < styleDefinitions.length; i += 1) {
    // Filter out falsy values from the input, to allow for
    // `css(a, test && c)`
    if (styleDefinitions[i]) {
      if (Array.isArray(styleDefinitions[i])) {
        // We've encountered an array, so let's recurse
        length += processStyleDefinitions(styleDefinitions[i], classNameBits, definitionBits, length);
      } else if (isValidStyleDefinition(styleDefinitions[i])) {
        classNameBits.push(styleDefinitions[i]._name);
        definitionBits.push(styleDefinitions[i]._definition);
        length += styleDefinitions[i]._len;
      } else {
        throw new Error("Invalid Style Definition: Styles should be defined using the StyleSheet.create method.");
      }
    }
  }

  return length;
};
/**
 * Inject styles associated with the passed style definition objects, and return
 * an associated CSS class name.
 *
 * @param {boolean} useImportant If true, will append !important to generated
 *     CSS output. e.g. {color: red} -> "color: red !important".
 * @param {(Object|Object[])[]} styleDefinitions style definition objects, or
 *     arbitrarily nested arrays of them, as returned as properties of the
 *     return value of StyleSheet.create().
 */


var injectAndGetClassName = function injectAndGetClassName(useImportant
/* : boolean */
, styleDefinitions
/* : MaybeSheetDefinition[] */
, selectorHandlers
/* : SelectorHandler[] */
)
/* : string */
{
  var classNameBits = [];
  var definitionBits = []; // Mutates classNameBits and definitionBits and returns a length which we
  // will append to the hash to decrease the chance of hash collisions.

  var length = processStyleDefinitions(styleDefinitions, classNameBits, definitionBits, 0); // Break if there aren't any valid styles.

  if (classNameBits.length === 0) {
    return "";
  }

  var className;

  if (false) {} else {
    className = classNameBits.join("-o_O-");
  }

  injectStyleOnce(className, ".".concat(className), definitionBits, useImportant, selectorHandlers);
  return className;
};

/* ::
import type { SelectorHandler } from './generate.js';
export type SheetDefinition = { [id:string]: any };
export type SheetDefinitions = SheetDefinition | SheetDefinition[];
type RenderFunction = () => string;
type Extension = {
    selectorHandler: SelectorHandler
};
export type MaybeSheetDefinition = SheetDefinition | false | null | void
*/

var unminifiedHashFn = function unminifiedHashFn(str
/* : string */
, key
/* : string */
) {
  return "".concat(key, "_").concat(hashString(str));
}; // StyleSheet.create is in a hot path so we want to keep as much logic out of it
// as possible. So, we figure out which hash function to use once, and only
// switch it out via minify() as necessary.
//
// This is in an exported function to make it easier to test.


var initialHashFn = function initialHashFn() {
  return  false ? 0 : unminifiedHashFn;
};
var hashFn = initialHashFn();
var StyleSheet = {
  create: function create(sheetDefinition
  /* : SheetDefinition */
  )
  /* : Object */
  {
    var mappedSheetDefinition = {};
    var keys = Object.keys(sheetDefinition);

    for (var i = 0; i < keys.length; i += 1) {
      var key = keys[i];
      var val = sheetDefinition[key];
      var stringVal = JSON.stringify(val);
      mappedSheetDefinition[key] = {
        _len: stringVal.length,
        _name: hashFn(stringVal, key),
        _definition: val
      };
    }

    return mappedSheetDefinition;
  },
  rehydrate: function rehydrate() {
    var renderedClassNames
    /* : string[] */
    = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    addRenderedClassNames(renderedClassNames);
  }
};
/**
 * Utilities for using Aphrodite server-side.
 *
 * This can be minified out in client-only bundles by replacing `typeof window`
 * with `"object"`, e.g. via Webpack's DefinePlugin:
 *
 *   new webpack.DefinePlugin({
 *     "typeof window": JSON.stringify("object")
 *   })
 */

var StyleSheetServer = typeof window !== 'undefined' ? null : {
  renderStatic: function renderStatic(renderFunc
  /* : RenderFunction */
  ) {
    reset();
    startBuffering();
    var html = renderFunc();
    var cssContent = flushToString();
    return {
      html: html,
      css: {
        content: cssContent,
        renderedClassNames: getRenderedClassNames()
      }
    };
  }
};
/**
 * Utilities for using Aphrodite in tests.
 *
 * Not meant to be used in production.
 */

var StyleSheetTestUtils =  false ? 0 : {
  /**
  * Prevent styles from being injected into the DOM.
  *
  * This is useful in situations where you'd like to test rendering UI
  * components which use Aphrodite without any of the side-effects of
  * Aphrodite happening. Particularly useful for testing the output of
  * components when you have no DOM, e.g. testing in Node without a fake DOM.
  *
  * Should be paired with a subsequent call to
  * clearBufferAndResumeStyleInjection.
  */
  suppressStyleInjection: function suppressStyleInjection() {
    reset();
    startBuffering();
  },

  /**
  * Opposite method of preventStyleInject.
  */
  clearBufferAndResumeStyleInjection: function clearBufferAndResumeStyleInjection() {
    reset();
  },

  /**
  * Returns a string of buffered styles which have not been flushed
  *
  * @returns {string}  Buffer of styles which have not yet been flushed.
  */
  getBufferedStyles: function getBufferedStyles$1() {
    return getBufferedStyles();
  }
};
/**
 * Generate the Aphrodite API exports, with given `selectorHandlers` and
 * `useImportant` state.
 */

function makeExports(useImportant
/* : boolean */
) {
  var selectorHandlers
  /* : SelectorHandler[] */
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelectorHandlers;
  return {
    StyleSheet: _objectSpread({}, StyleSheet, {
      /**
       * Returns a version of the exports of Aphrodite (i.e. an object
       * with `css` and `StyleSheet` properties) which have some
       * extensions included.
       *
       * @param {Array.<Object>} extensions: An array of extensions to
       *     add to this instance of Aphrodite. Each object should have a
       *     single property on it, defining which kind of extension to
       *     add.
       * @param {SelectorHandler} [extensions[].selectorHandler]: A
       *     selector handler extension. See `defaultSelectorHandlers` in
       *     generate.js.
       *
       * @returns {Object} An object containing the exports of the new
       *     instance of Aphrodite.
       */
      extend: function extend(extensions
      /* : Extension[] */
      ) {
        var extensionSelectorHandlers = extensions // Pull out extensions with a selectorHandler property
        .map(function (extension) {
          return extension.selectorHandler;
        }) // Remove nulls (i.e. extensions without a selectorHandler property).
        .filter(function (handler) {
          return handler;
        });
        return makeExports(useImportant, selectorHandlers.concat(extensionSelectorHandlers));
      }
    }),
    StyleSheetServer: StyleSheetServer,
    StyleSheetTestUtils: StyleSheetTestUtils,
    minify: function minify(shouldMinify
    /* : boolean */
    ) {
      hashFn = shouldMinify ? hashString : unminifiedHashFn;
    },
    css: function css()
    /* : MaybeSheetDefinition[] */
    {
      for (var _len = arguments.length, styleDefinitions = new Array(_len), _key = 0; _key < _len; _key++) {
        styleDefinitions[_key] = arguments[_key];
      }

      return injectAndGetClassName(useImportant, styleDefinitions, selectorHandlers);
    },
    flushToStyleTag: flushToStyleTag,
    injectAndGetClassName: injectAndGetClassName,
    defaultSelectorHandlers: defaultSelectorHandlers,
    reset: reset,
    resetInjectedStyle: resetInjectedStyle
  };
}




/***/ }),

/***/ "./node_modules/aphrodite/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/aphrodite/es/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleSheet": () => (/* binding */ StyleSheet),
/* harmony export */   "StyleSheetServer": () => (/* binding */ StyleSheetServer),
/* harmony export */   "StyleSheetTestUtils": () => (/* binding */ StyleSheetTestUtils),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "minify": () => (/* binding */ minify),
/* harmony export */   "flushToStyleTag": () => (/* binding */ flushToStyleTag),
/* harmony export */   "injectAndGetClassName": () => (/* binding */ injectAndGetClassName),
/* harmony export */   "defaultSelectorHandlers": () => (/* binding */ defaultSelectorHandlers),
/* harmony export */   "reset": () => (/* binding */ reset),
/* harmony export */   "resetInjectedStyle": () => (/* binding */ resetInjectedStyle)
/* harmony export */ });
/* harmony import */ var _chunk_febce46b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-febce46b.js */ "./node_modules/aphrodite/es/chunk-febce46b.js");
/* harmony import */ var string_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js");
/* harmony import */ var string_hash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(string_hash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var asap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! asap */ "./node_modules/asap/browser-asap.js");
/* harmony import */ var asap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(asap__WEBPACK_IMPORTED_MODULE_2__);




var useImportant = true; // Add !important to all style definitions

var Aphrodite = (0,_chunk_febce46b_js__WEBPACK_IMPORTED_MODULE_0__.a)(useImportant);
var StyleSheet = Aphrodite.StyleSheet,
    StyleSheetServer = Aphrodite.StyleSheetServer,
    StyleSheetTestUtils = Aphrodite.StyleSheetTestUtils,
    css = Aphrodite.css,
    minify = Aphrodite.minify,
    flushToStyleTag = Aphrodite.flushToStyleTag,
    injectAndGetClassName = Aphrodite.injectAndGetClassName,
    defaultSelectorHandlers = Aphrodite.defaultSelectorHandlers,
    reset = Aphrodite.reset,
    resetInjectedStyle = Aphrodite.resetInjectedStyle;




/***/ }),

/***/ "./node_modules/asap/browser-asap.js":
/*!*******************************************!*\
  !*** ./node_modules/asap/browser-asap.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// rawAsap provides everything we need except exception management.
var rawAsap = __webpack_require__(/*! ./raw */ "./node_modules/asap/browser-raw.js");
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};


/***/ }),

/***/ "./node_modules/asap/browser-raw.js":
/*!******************************************!*\
  !*** ./node_modules/asap/browser-raw.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js


/***/ }),

/***/ "./src/App/App.js":
/*!************************!*\
  !*** ./src/App/App.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Notifications_Notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Notifications/Notifications */ "./src/Notifications/Notifications.js");
/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Login/Login */ "./src/Login/Login.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Footer/Footer */ "./src/Footer/Footer.js");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header/Header */ "./src/Header/Header.js");
/* harmony import */ var _CourseList_CourseList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CourseList/CourseList */ "./src/CourseList/CourseList.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _BodySection_BodySection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../BodySection/BodySection */ "./src/BodySection/BodySection.js");
/* harmony import */ var _BodySection_BodySectionWithMarginBottom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../BodySection/BodySectionWithMarginBottom */ "./src/BodySection/BodySectionWithMarginBottom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/es/index.js");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AppContext */ "./src/App/AppContext.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }













var listCourses = [{
  id: 1,
  name: 'ES6',
  credit: 60
}, {
  id: 2,
  name: 'Webpack',
  credit: 20
}, {
  id: 3,
  name: 'React',
  credit: 40
}];
var styles = aphrodite__WEBPACK_IMPORTED_MODULE_10__.StyleSheet.create({
  body: {
    fontFamily: 'Arial, Helvetica, sans-serif'
  },
  footer: {
    fontFamily: 'Arial, Helvetica, sans-serif'
  },
  paraNews: {
    width: "760px",
    '@media (max-width: 900px)': {
      width: "420px"
    }
  }
});

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.handleDisplayDrawer = _this.handleDisplayDrawer.bind(_assertThisInitialized(_this));
    _this.handleHideDrawer = _this.handleHideDrawer.bind(_assertThisInitialized(_this));
    _this.state = {
      displayDrawer: false,
      user: _AppContext__WEBPACK_IMPORTED_MODULE_11__.user,
      logOut: function logOut() {
        return _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
          user: {
            email: '',
            password: '',
            isLoggedIn: false
          }
        }));
      },
      listNotifications: [{
        id: 1,
        type: 'default',
        value: 'New course available'
      }, {
        id: 2,
        type: 'urgent',
        value: 'New resume available'
      }, {
        id: 3,
        type: 'urgent',
        html: {
          __html: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_9__.getLatestNotification)()
        }
      }]
    };
    return _this;
  }

  _createClass(App, [{
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      if (event.key === "h" && event.ctrlKey) {
        alert("Logging you out");
        this.state.logOut();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "handleDisplayDrawer",
    value: function handleDisplayDrawer() {
      this.setState({
        displayDrawer: true
      });
    }
  }, {
    key: "handleHideDrawer",
    value: function handleHideDrawer() {
      this.setState({
        displayDrawer: false
      });
    }
  }, {
    key: "logIn",
    value: function logIn(email, password) {
      this.setState({
        user: {
          email: email,
          password: password,
          isLoggedIn: true
        }
      });
    }
  }, {
    key: "markNotificationAsRead",
    value: function markNotificationAsRead(id) {
      this.setState({
        listNotifications: this.state.listNotifications.filter(function (_) {
          return _.id !== id;
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var displayDrawer = this.state.displayDrawer;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AppContext__WEBPACK_IMPORTED_MODULE_11__.default.Provider, {
        value: {
          user: this.state.user,
          logOut: this.state.logOut
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Notifications_Notifications__WEBPACK_IMPORTED_MODULE_1__.default, {
        listNotifications: this.state.listNotifications,
        displayDrawer: this.state.displayDrawer,
        handleDisplayDrawer: this.handleDisplayDrawer,
        handleHideDrawer: this.handleHideDrawer,
        markNotificationAsRead: this.markNotificationAsRead
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "App"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_4__.default, null), this.state.user.isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BodySection_BodySectionWithMarginBottom__WEBPACK_IMPORTED_MODULE_8__.default, {
        title: "Course list"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CourseList_CourseList__WEBPACK_IMPORTED_MODULE_5__.default, {
        listCourses: listCourses
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BodySection_BodySectionWithMarginBottom__WEBPACK_IMPORTED_MODULE_8__.default, {
        title: "Log in to continue"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Login_Login__WEBPACK_IMPORTED_MODULE_2__.default, {
        logIn: this.logIn
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BodySection_BodySection__WEBPACK_IMPORTED_MODULE_7__.default, {
        title: "News from the School"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_10__.css)(styles.paraNews)
      }, "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur")));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/App/AppContext.js":
/*!*******************************!*\
  !*** ./src/App/AppContext.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "user": () => (/* binding */ user),
/* harmony export */   "logOut": () => (/* binding */ logOut),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var user = {
  email: "",
  password: "",
  isLoggedIn: false
};
var logOut = function logOut() {};
var AppContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  user: user,
  logOut: logOut
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);

/***/ }),

/***/ "./src/BodySection/BodySection.js":
/*!****************************************!*\
  !*** ./src/BodySection/BodySection.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var styles = {
  margin: "40px"
};

function BodySection(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bodySection",
    style: styles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, title), children);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BodySection);

/***/ }),

/***/ "./src/BodySection/BodySectionWithMarginBottom.js":
/*!********************************************************!*\
  !*** ./src/BodySection/BodySectionWithMarginBottom.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _BodySection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BodySection */ "./src/BodySection/BodySection.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var BodySectionWithMarginBottom = /*#__PURE__*/function (_React$Component) {
  _inherits(BodySectionWithMarginBottom, _React$Component);

  var _super = _createSuper(BodySectionWithMarginBottom);

  function BodySectionWithMarginBottom(props) {
    _classCallCheck(this, BodySectionWithMarginBottom);

    return _super.call(this, props);
  }

  _createClass(BodySectionWithMarginBottom, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_3__.css)(style.bodySectionWithMargin)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BodySection__WEBPACK_IMPORTED_MODULE_1__.default, this.props));
    }
  }]);

  return BodySectionWithMarginBottom;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

BodySectionWithMarginBottom.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().element)
};
var style = aphrodite__WEBPACK_IMPORTED_MODULE_3__.StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "40px"
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BodySectionWithMarginBottom);

/***/ }),

/***/ "./src/CourseList/CourseList.js":
/*!**************************************!*\
  !*** ./src/CourseList/CourseList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _CourseListRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseListRow */ "./src/CourseList/CourseListRow.js");
/* harmony import */ var _CourseShape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CourseShape */ "./src/CourseList/CourseShape.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/es/index.js");






function CourseList(_ref) {
  var listCourses = _ref.listCourses;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    id: "CourseList",
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_4__.css)(styles.CourseList)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CourseListRow__WEBPACK_IMPORTED_MODULE_1__.default, {
    textFirstCell: "Available courses",
    isHeader: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CourseListRow__WEBPACK_IMPORTED_MODULE_1__.default, {
    textFirstCell: "Course name",
    textSecondCell: "Credit",
    isHeader: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, listCourses.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CourseListRow__WEBPACK_IMPORTED_MODULE_1__.default, {
    textFirstCell: "No course available yet",
    isHeader: false
  }) : listCourses.map(function (course) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CourseListRow__WEBPACK_IMPORTED_MODULE_1__.default, {
      key: course.id,
      textFirstCell: course.name,
      textSecondCell: course.credit,
      isHeader: false
    });
  }))));
}

CourseList.prototype = {
  listCourses: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(_CourseShape__WEBPACK_IMPORTED_MODULE_2__.default)
};
CourseList.defaultProps = {
  listCourses: []
};
var styles = aphrodite__WEBPACK_IMPORTED_MODULE_4__.StyleSheet.create({
  CourseList: {
    marginTop: "40px",
    border: "1px solid rgb(170, 170, 170)",
    borderCollapse: "collapse",
    width: "95%"
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseList);

/***/ }),

/***/ "./src/CourseList/CourseListRow.js":
/*!*****************************************!*\
  !*** ./src/CourseList/CourseListRow.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




CourseListRow.propTypes = {
  isHeader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  textFirstCell: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  textSecondCell: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

function CourseListRow(_ref) {
  var isHeader = _ref.isHeader,
      textFirstCell = _ref.textFirstCell,
      textSecondCell = _ref.textSecondCell;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setCheck = _useState2[1];

  var toggleCheck = function toggleCheck() {
    return setCheck(function (checked) {
      return !checked;
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
    className: isHeader ? (0,aphrodite__WEBPACK_IMPORTED_MODULE_2__.css)(styles.headerRowStyle) : (0,aphrodite__WEBPACK_IMPORTED_MODULE_2__.css)(styles.rowStyle)
  }, isHeader && textSecondCell && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_2__.css)(styles.headerTh)
  }, textFirstCell), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_2__.css)(styles.headerTh)
  }, textSecondCell)), isHeader && !textSecondCell && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    colSpan: "2",
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_2__.css)(styles.singleTh)
  }, textFirstCell)), !isHeader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    className: checked ? (0,aphrodite__WEBPACK_IMPORTED_MODULE_2__.css)(styles.rowChecked, styles.defaultTh) : (0,aphrodite__WEBPACK_IMPORTED_MODULE_2__.css)(styles.defaultTh)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "checkbox",
    onChange: toggleCheck
  }), textFirstCell), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_2__.css)(styles.defaultTh)
  }, textSecondCell)));
}

;
var styles = aphrodite__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.create({
  rowStyle: {
    backgroundColor: '#f5f5f5ab'
  },
  rowChecked: {
    backgroundColor: '#e6e4e4'
  },
  headerRowStyle: {
    backgroundColor: '#deb5b545'
  },
  headerTh: {
    borderBottom: '2px solid rgb(170, 170, 170)',
    textAlign: 'left'
  },
  defaultTh: {
    textAlign: 'left',
    fontSize: '18px',
    padding: '4px'
  },
  singleTh: {
    textAlign: 'center',
    borderBottom: '2px solid rgb(170, 170, 170)'
  },
  coursesTd: {
    textAlign: 'left'
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseListRow);

/***/ }),

/***/ "./src/CourseList/CourseShape.js":
/*!***************************************!*\
  !*** ./src/CourseList/CourseShape.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var CourseShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  id: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  credit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired)
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseShape);

/***/ }),

/***/ "./src/Footer/Footer.js":
/*!******************************!*\
  !*** ./src/Footer/Footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.css */ "./src/Footer/Footer.css");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App/AppContext */ "./src/App/AppContext.js");





function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App_AppContext__WEBPACK_IMPORTED_MODULE_3__.default.Consumer, null, function (value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", {
      className: "App-footer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Copyright ", (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.getFullYear)(), " - ", (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.getFooterCopy)(true)), value.user.isLoggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", null, "Contact us")));
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/Header/Header.js":
/*!******************************!*\
  !*** ./src/Header/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_hlogo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/hlogo.jpg */ "./src/assets/hlogo.jpg");
/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/es/index.js");
/* harmony import */ var _App_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App/AppContext */ "./src/App/AppContext.js");





function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_2__.css)(styles.header)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_hlogo_jpg__WEBPACK_IMPORTED_MODULE_1__.default,
    className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_2__.css)(styles.logo),
    alt: "Holberton logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "School dashboard"), this.context.user.isLoggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    id: "logoutSection"
  }, "Welcome ", this.context.user.email, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    onClick: this.context.logOut
  }, "logOut")));
}

var styles = aphrodite__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.create({
  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    color: "#DF344B",
    borderBottom: "4px solid #DF344B",
    margin: 0
  },
  logo: {
    width: "225px"
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/Login/Login.js":
/*!****************************!*\
  !*** ./src/Login/Login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Login = /*#__PURE__*/function (_Component) {
  _inherits(Login, _Component);

  var _super = _createSuper(Login);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _super.call(this, props);
    _this.state = {
      email: '',
      password: '',
      enableSubmit: false
    };
    _this.handleLoginSubmit = _this.handleLoginSubmit.bind(_assertThisInitialized(_this));
    _this.handleChangeEmail = _this.handleChangeEmail.bind(_assertThisInitialized(_this));
    _this.handleChangePassword = _this.handleChangePassword.bind(_assertThisInitialized(_this));
    _this.checkFormContents = _this.checkFormContents.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Login, [{
    key: "handleLoginSubmit",
    value: function handleLoginSubmit(event) {
      var _this$state = this.state,
          email = _this$state.email,
          password = _this$state.password;
      this.props.logIn(email, password);
      event.preventDefault();
    }
  }, {
    key: "handleChangeEmail",
    value: function handleChangeEmail(event) {
      this.setState({
        email: event.target.value
      }, this.checkFormContents);
    }
  }, {
    key: "handleChangePassword",
    value: function handleChangePassword(event) {
      this.setState({
        password: event.target.value
      }, this.checkFormContents);
    }
  }, {
    key: "checkFormContents",
    value: function checkFormContents() {
      if (this.state.email !== "" && this.state.password !== "") this.setState({
        enableSubmit: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.main)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Login to access the full dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
        onSubmit: this.handleLoginSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        htmlFor: "email",
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.blockLabel)
      }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "email",
        name: "email",
        value: this.state.email,
        onChange: this.handleChangeEmail
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        htmlFor: "password",
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_1__.css)(styles.blockLabel)
      }, "Password:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "password",
        name: "password",
        value: this.state.password,
        onChange: this.handleChangePassword
      }), this.state.enableSubmit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "submit",
        value: "Submit"
      })));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var styles = aphrodite__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  main: {
    margin: "48px",
    justifyContent: "center",
    '@media (max-width: 900px)': {
      margin: 0
    }
  },
  blockLabel: {
    '@media (max-width: 900px)': {
      display: "block"
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./src/Notifications/NotificationItem.js":
/*!***********************************************!*\
  !*** ./src/Notifications/NotificationItem.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/es/index.js");




function NotificationItem(_ref) {
  var type = _ref.type,
      html = _ref.html,
      value = _ref.value,
      markAsRead = _ref.markAsRead,
      id = _ref.id;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    "data-notification-type": type,
    dangerouslySetInnerHTML: html,
    onClick: markAsRead,
    className: type === "urgent" ? (0,aphrodite__WEBPACK_IMPORTED_MODULE_2__.css)(styles.urgent, styles.respScreen) : (0,aphrodite__WEBPACK_IMPORTED_MODULE_2__.css)(styles["default"], styles.respScreen)
  }, value);
}

;
NotificationItem.prototype = {
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  html: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    __html: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  markAsRead: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: function markAsRead() {},
  id: NaN
};
var styles = aphrodite__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.create({
  "default": {
    color: "blue"
  },
  urgent: {
    color: "red"
  },
  respScreen: {
    '@media (max-width: 900px)': {
      width: "100%",
      borderBottom: "2px solid black",
      fontSize: "20px",
      padding: "10px 8px"
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationItem);

/***/ }),

/***/ "./src/Notifications/NotificationItemShape.js":
/*!****************************************************!*\
  !*** ./src/Notifications/NotificationItemShape.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var NotificationItemShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  id: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
  html: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    __html: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
  }),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationItemShape);

/***/ }),

/***/ "./src/Notifications/Notifications.js":
/*!********************************************!*\
  !*** ./src/Notifications/Notifications.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_close_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/close-icon.png */ "./src/assets/close-icon.png");
/* harmony import */ var _NotificationItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationItem */ "./src/Notifications/NotificationItem.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _NotificationItemShape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NotificationItemShape */ "./src/Notifications/NotificationItemShape.js");
/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var Notifications = /*#__PURE__*/function (_PureComponent) {
  _inherits(Notifications, _PureComponent);

  var _super = _createSuper(Notifications);

  function Notifications() {
    _classCallCheck(this, Notifications);

    return _super.apply(this, arguments);
  }

  _createClass(Notifications, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          displayDrawer = _this$props.displayDrawer,
          handleDisplayDrawer = _this$props.handleDisplayDrawer,
          handleHideDrawer = _this$props.handleHideDrawer,
          listNotifications = _this$props.listNotifications,
          markNotificationAsRead = _this$props.markNotificationAsRead;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_6__.css)(styles.menuItem),
        onClick: handleDisplayDrawer
      }, "Your notifications"), this.props.displayDrawer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_6__.css)(styles.notifications)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Here is the list of notifications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        style: {
          display: 'inline',
          position: 'absolute',
          right: '0.8rem',
          top: '2.2rem'
        },
        "aria-label": "Close",
        onClick: handleHideDrawer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: _assets_close_icon_png__WEBPACK_IMPORTED_MODULE_1__.default,
        alt: "",
        style: {
          width: '4px'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_6__.css)(styles.listStyle)
      }, listNotifications ? listNotifications.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NotificationItem__WEBPACK_IMPORTED_MODULE_2__.default, {
          key: item.id,
          type: item.type,
          value: item.value,
          html: item.html,
          id: item.id,
          markAsRead: markNotificationAsRead(item.id)
        });
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "No new notification for now"))));
    }
  }]);

  return Notifications;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);

;
Notifications.propTypes = {
  displayDrawer: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  listNotifications: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(_NotificationItemShape__WEBPACK_IMPORTED_MODULE_5__.default),
  handleDisplayDrawer: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  handleHideDrawer: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  markNotificationAsRead: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: function handleDisplayDrawer() {},
  handleHideDrawer: function handleHideDrawer() {},
  markNotificationAsRead: function markNotificationAsRead() {}
};
var styles = aphrodite__WEBPACK_IMPORTED_MODULE_6__.StyleSheet.create({
  notifications: {
    "float": "right",
    padding: "8px",
    border: "1px dashed red",
    animationName: [borderKeyframes],
    animationDuration: "0.7s",
    animationIterationCount: 1,
    animationFillMode: "forwards",
    '@media (max-width: 900px)': {
      fontSize: "20px",
      "float": "none",
      border: 0,
      padding: 0
    }
  },
  menuItem: {
    "float": "right",
    backgroundColor: "#fff8f8",
    ":hover": {
      cursor: "pointer",
      animationName: [opacityKeyframes, translateYKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: 3
    },
    "@media (max-width: 900px)": {
      display: "none"
    }
  },
  listStyle: {
    '@media (max-width: 900px)': {
      listStyleType: "none",
      margin: 0
    }
  }
});
var opacityKeyframes = {
  from: {
    opacity: 0.5
  },
  to: {
    opacity: 1
  }
};
var translateYKeyframes = {
  "0%": {
    transform: "translateY(0)"
  },
  "25%": {
    transform: "translateY(5px)"
  },
  "50%": {
    transform: "translateY(0px)"
  },
  "75%": {
    transform: "translateY(-5px)"
  },
  "100%": {
    transform: "translateY(0)"
  }
};
var borderKeyframes = {
  "0%": {
    border: '3px dashed cyan'
  },
  "100%": {
    border: '3px dashed red'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notifications);

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFullYear": () => (/* binding */ getFullYear),
/* harmony export */   "getFooterCopy": () => (/* binding */ getFooterCopy),
/* harmony export */   "getLatestNotification": () => (/* binding */ getLatestNotification)
/* harmony export */ });
var getFullYear = function getFullYear() {
  return new Date().getFullYear();
};
var getFooterCopy = function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
};
var getLatestNotification = function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Footer/Footer.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Footer/Footer.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".App-footer {\r\n  width: 100%;\r\n  position: fixed;\r\n  bottom: 0;\r\n  text-align: center;\r\n  border-top: 4px solid #DF344B; \r\n  font-style: italic;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/Footer/Footer.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,eAAe;EACf,SAAS;EACT,kBAAkB;EAClB,6BAA6B;EAC7B,kBAAkB;AACpB","sourcesContent":[".App-footer {\r\n  width: 100%;\r\n  position: fixed;\r\n  bottom: 0;\r\n  text-align: center;\r\n  border-top: 4px solid #DF344B; \r\n  font-style: italic;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/close-icon.png":
/*!***********************************!*\
  !*** ./src/assets/close-icon.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8059dbdfcf5206530bcab2e30b0f42aa.png");

/***/ }),

/***/ "./src/assets/hlogo.jpg":
/*!******************************!*\
  !*** ./src/assets/hlogo.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "24bab5d633e36ca8d17edc63164cf934.jpg");

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom.development.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom.development.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.2
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var Scheduler = __webpack_require__(/*! scheduler */ "./node_modules/scheduler/index.js");
var tracing = __webpack_require__(/*! scheduler/tracing */ "./node_modules/scheduler/tracing.js");

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

if (!React) {
  {
    throw Error( "ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM." );
  }
}

var FunctionComponent = 0;
var ClassComponent = 1;
var IndeterminateComponent = 2; // Before we know whether it is function or class

var HostRoot = 3; // Root of a host tree. Could be nested inside another node.

var HostPortal = 4; // A subtree. Could be an entry point to a different renderer.

var HostComponent = 5;
var HostText = 6;
var Fragment = 7;
var Mode = 8;
var ContextConsumer = 9;
var ContextProvider = 10;
var ForwardRef = 11;
var Profiler = 12;
var SuspenseComponent = 13;
var MemoComponent = 14;
var SimpleMemoComponent = 15;
var LazyComponent = 16;
var IncompleteClassComponent = 17;
var DehydratedFragment = 18;
var SuspenseListComponent = 19;
var FundamentalComponent = 20;
var ScopeComponent = 21;
var Block = 22;
var OffscreenComponent = 23;
var LegacyHiddenComponent = 24;

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableProfilerTimer = true; // Record durations for commit and passive effects phases.

var enableFundamentalAPI = false; // Experimental Scope support.
var enableNewReconciler = false; // Errors that are thrown while unmounting (or after in the case of passive effects)
var warnAboutStringRefs = false;

var allNativeEvents = new Set();
/**
 * Mapping from registration name to event name
 */


var registrationNameDependencies = {};
/**
 * Mapping from lowercase registration names to the properly cased version,
 * used to warn in the case of missing event handlers. Available
 * only in true.
 * @type {Object}
 */

var possibleRegistrationNames =  {} ; // Trust the developer to only use possibleRegistrationNames in true

function registerTwoPhaseEvent(registrationName, dependencies) {
  registerDirectEvent(registrationName, dependencies);
  registerDirectEvent(registrationName + 'Capture', dependencies);
}
function registerDirectEvent(registrationName, dependencies) {
  {
    if (registrationNameDependencies[registrationName]) {
      error('EventRegistry: More than one plugin attempted to publish the same ' + 'registration name, `%s`.', registrationName);
    }
  }

  registrationNameDependencies[registrationName] = dependencies;

  {
    var lowerCasedName = registrationName.toLowerCase();
    possibleRegistrationNames[lowerCasedName] = registrationName;

    if (registrationName === 'onDoubleClick') {
      possibleRegistrationNames.ondblclick = registrationName;
    }
  }

  for (var i = 0; i < dependencies.length; i++) {
    allNativeEvents.add(dependencies[i]);
  }
}

var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
/* eslint-enable max-len */

var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty = Object.prototype.hasOwnProperty;
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
    return true;
  }

  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
    return false;
  }

  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }

  illegalAttributeNameCache[attributeName] = true;

  {
    error('Invalid attribute name: `%s`', attributeName);
  }

  return false;
}
function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null) {
    return propertyInfo.type === RESERVED;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return true;
  }

  return false;
}
function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
    return false;
  }

  switch (typeof value) {
    case 'function': // $FlowIssue symbol is perfectly valid here

    case 'symbol':
      // eslint-disable-line
      return true;

    case 'boolean':
      {
        if (isCustomComponentTag) {
          return false;
        }

        if (propertyInfo !== null) {
          return !propertyInfo.acceptsBooleans;
        } else {
          var prefix = name.toLowerCase().slice(0, 5);
          return prefix !== 'data-' && prefix !== 'aria-';
        }
      }

    default:
      return false;
  }
}
function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }

  if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
    return true;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (propertyInfo !== null) {

    switch (propertyInfo.type) {
      case BOOLEAN:
        return !value;

      case OVERLOADED_BOOLEAN:
        return value === false;

      case NUMERIC:
        return isNaN(value);

      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }

  return false;
}
function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];
reservedProps.forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize = function (token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
  false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false, // sanitizeURL
  false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
false);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true, // sanitizeURL
  true);
});

// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space

/* eslint-disable max-len */

var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
var didWarn = false;

function sanitizeURL(url) {
  {
    if (!didWarn && isJavaScriptProtocol.test(url)) {
      didWarn = true;

      error('A future version of React will block javascript: URLs as a security precaution. ' + 'Use event handlers instead if you can. If you need to generate unsafe HTML try ' + 'using dangerouslySetInnerHTML instead. React was passed %s.', JSON.stringify(url));
    }
  }
}

/**
 * Get the value for a property on a node. Only used in DEV for SSR validation.
 * The "expected" argument is used as a hint of what the expected value is.
 * Some properties have multiple equivalent values.
 */
function getValueForProperty(node, name, expected, propertyInfo) {
  {
    if (propertyInfo.mustUseProperty) {
      var propertyName = propertyInfo.propertyName;
      return node[propertyName];
    } else {
      if ( propertyInfo.sanitizeURL) {
        // If we haven't fully disabled javascript: URLs, and if
        // the hydration is successful of a javascript: URL, we
        // still want to warn on the client.
        sanitizeURL('' + expected);
      }

      var attributeName = propertyInfo.attributeName;
      var stringValue = null;

      if (propertyInfo.type === OVERLOADED_BOOLEAN) {
        if (node.hasAttribute(attributeName)) {
          var value = node.getAttribute(attributeName);

          if (value === '') {
            return true;
          }

          if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
            return value;
          }

          if (value === '' + expected) {
            return expected;
          }

          return value;
        }
      } else if (node.hasAttribute(attributeName)) {
        if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
          // We had an attribute but shouldn't have had one, so read it
          // for the error message.
          return node.getAttribute(attributeName);
        }

        if (propertyInfo.type === BOOLEAN) {
          // If this was a boolean, it doesn't matter what the value is
          // the fact that we have it is the same as the expected.
          return expected;
        } // Even if this property uses a namespace we use getAttribute
        // because we assume its namespaced name is the same as our config.
        // To use getAttributeNS we need the local name which we don't have
        // in our config atm.


        stringValue = node.getAttribute(attributeName);
      }

      if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
        return stringValue === null ? expected : stringValue;
      } else if (stringValue === '' + expected) {
        return expected;
      } else {
        return stringValue;
      }
    }
  }
}
/**
 * Get the value for a attribute on a node. Only used in DEV for SSR validation.
 * The third argument is used as a hint of what the expected value is. Some
 * attributes have multiple equivalent values.
 */

function getValueForAttribute(node, name, expected) {
  {
    if (!isAttributeNameSafe(name)) {
      return;
    } // If the object is an opaque reference ID, it's expected that
    // the next prop is different than the server value, so just return
    // expected


    if (isOpaqueHydratingObject(expected)) {
      return expected;
    }

    if (!node.hasAttribute(name)) {
      return expected === undefined ? undefined : null;
    }

    var value = node.getAttribute(name);

    if (value === '' + expected) {
      return expected;
    }

    return value;
  }
}
/**
 * Sets the value for a property on a node.
 *
 * @param {DOMElement} node
 * @param {string} name
 * @param {*} value
 */

function setValueForProperty(node, name, value, isCustomComponentTag) {
  var propertyInfo = getPropertyInfo(name);

  if (shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag)) {
    return;
  }

  if (shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag)) {
    value = null;
  } // If the prop isn't in the special list, treat it as a simple attribute.


  if (isCustomComponentTag || propertyInfo === null) {
    if (isAttributeNameSafe(name)) {
      var _attributeName = name;

      if (value === null) {
        node.removeAttribute(_attributeName);
      } else {
        node.setAttribute(_attributeName,  '' + value);
      }
    }

    return;
  }

  var mustUseProperty = propertyInfo.mustUseProperty;

  if (mustUseProperty) {
    var propertyName = propertyInfo.propertyName;

    if (value === null) {
      var type = propertyInfo.type;
      node[propertyName] = type === BOOLEAN ? false : '';
    } else {
      // Contrary to `setAttribute`, object properties are properly
      // `toString`ed by IE8/9.
      node[propertyName] = value;
    }

    return;
  } // The rest are treated as attributes with special cases.


  var attributeName = propertyInfo.attributeName,
      attributeNamespace = propertyInfo.attributeNamespace;

  if (value === null) {
    node.removeAttribute(attributeName);
  } else {
    var _type = propertyInfo.type;
    var attributeValue;

    if (_type === BOOLEAN || _type === OVERLOADED_BOOLEAN && value === true) {
      // If attribute type is boolean, we know for sure it won't be an execution sink
      // and we won't require Trusted Type here.
      attributeValue = '';
    } else {
      // `setAttribute` with objects becomes only `[object]` in IE8/9,
      // ('' + value) makes it output the correct toString()-value.
      {
        attributeValue = '' + value;
      }

      if (propertyInfo.sanitizeURL) {
        sanitizeURL(attributeValue.toString());
      }
    }

    if (attributeNamespace) {
      node.setAttributeNS(attributeNamespace, attributeName, attributeValue);
    } else {
      node.setAttribute(attributeName, attributeValue);
    }
  }
}

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}

function describeClassComponentFrame(ctor, source, ownerFn) {
  {
    return describeNativeComponentFrame(ctor, true);
  }
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

function describeFiber(fiber) {
  var owner =  fiber._debugOwner ? fiber._debugOwner.type : null ;
  var source =  fiber._debugSource ;

  switch (fiber.tag) {
    case HostComponent:
      return describeBuiltInComponentFrame(fiber.type);

    case LazyComponent:
      return describeBuiltInComponentFrame('Lazy');

    case SuspenseComponent:
      return describeBuiltInComponentFrame('Suspense');

    case SuspenseListComponent:
      return describeBuiltInComponentFrame('SuspenseList');

    case FunctionComponent:
    case IndeterminateComponent:
    case SimpleMemoComponent:
      return describeFunctionComponentFrame(fiber.type);

    case ForwardRef:
      return describeFunctionComponentFrame(fiber.type.render);

    case Block:
      return describeFunctionComponentFrame(fiber.type._render);

    case ClassComponent:
      return describeClassComponentFrame(fiber.type);

    default:
      return '';
  }
}

function getStackByFiberInDevAndProd(workInProgress) {
  try {
    var info = '';
    var node = workInProgress;

    do {
      info += describeFiber(node);
      node = node.return;
    } while (node);

    return info;
  } catch (x) {
    return '\nError generating stack: ' + x.message + '\n' + x.stack;
  }
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
var current = null;
var isRendering = false;
function getCurrentFiberOwnerNameInDevOrNull() {
  {
    if (current === null) {
      return null;
    }

    var owner = current._debugOwner;

    if (owner !== null && typeof owner !== 'undefined') {
      return getComponentName(owner.type);
    }
  }

  return null;
}

function getCurrentFiberStackInDev() {
  {
    if (current === null) {
      return '';
    } // Safe because if current fiber exists, we are reconciling,
    // and it is guaranteed to be the work-in-progress version.


    return getStackByFiberInDevAndProd(current);
  }
}

function resetCurrentFiber() {
  {
    ReactDebugCurrentFrame.getCurrentStack = null;
    current = null;
    isRendering = false;
  }
}
function setCurrentFiber(fiber) {
  {
    ReactDebugCurrentFrame.getCurrentStack = getCurrentFiberStackInDev;
    current = fiber;
    isRendering = false;
  }
}
function setIsRendering(rendering) {
  {
    isRendering = rendering;
  }
}
function getIsRendering() {
  {
    return isRendering;
  }
}

// Flow does not allow string concatenation of most non-string types. To work
// around this limitation, we use an opaque type that can only be obtained by
// passing the value through getToStringValue first.
function toString(value) {
  return '' + value;
}
function getToStringValue(value) {
  switch (typeof value) {
    case 'boolean':
    case 'number':
    case 'object':
    case 'string':
    case 'undefined':
      return value;

    default:
      // function, symbol are assigned as empty strings
      return '';
  }
}

var hasReadOnlyValue = {
  button: true,
  checkbox: true,
  image: true,
  hidden: true,
  radio: true,
  reset: true,
  submit: true
};
function checkControlledValueProps(tagName, props) {
  {
    if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
      error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }

    if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
      error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  }
}

function isCheckable(elem) {
  var type = elem.type;
  var nodeName = elem.nodeName;
  return nodeName && nodeName.toLowerCase() === 'input' && (type === 'checkbox' || type === 'radio');
}

function getTracker(node) {
  return node._valueTracker;
}

function detachTracker(node) {
  node._valueTracker = null;
}

function getValueFromNode(node) {
  var value = '';

  if (!node) {
    return value;
  }

  if (isCheckable(node)) {
    value = node.checked ? 'true' : 'false';
  } else {
    value = node.value;
  }

  return value;
}

function trackValueOnNode(node) {
  var valueField = isCheckable(node) ? 'checked' : 'value';
  var descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);
  var currentValue = '' + node[valueField]; // if someone has already defined a value or Safari, then bail
  // and don't track value will cause over reporting of changes,
  // but it's better then a hard failure
  // (needed for certain tests that spyOn input values and Safari)

  if (node.hasOwnProperty(valueField) || typeof descriptor === 'undefined' || typeof descriptor.get !== 'function' || typeof descriptor.set !== 'function') {
    return;
  }

  var get = descriptor.get,
      set = descriptor.set;
  Object.defineProperty(node, valueField, {
    configurable: true,
    get: function () {
      return get.call(this);
    },
    set: function (value) {
      currentValue = '' + value;
      set.call(this, value);
    }
  }); // We could've passed this the first time
  // but it triggers a bug in IE11 and Edge 14/15.
  // Calling defineProperty() again should be equivalent.
  // https://github.com/facebook/react/issues/11768

  Object.defineProperty(node, valueField, {
    enumerable: descriptor.enumerable
  });
  var tracker = {
    getValue: function () {
      return currentValue;
    },
    setValue: function (value) {
      currentValue = '' + value;
    },
    stopTracking: function () {
      detachTracker(node);
      delete node[valueField];
    }
  };
  return tracker;
}

function track(node) {
  if (getTracker(node)) {
    return;
  } // TODO: Once it's just Fiber we can move this to node._wrapperState


  node._valueTracker = trackValueOnNode(node);
}
function updateValueIfChanged(node) {
  if (!node) {
    return false;
  }

  var tracker = getTracker(node); // if there is no tracker at this point it's unlikely
  // that trying again will succeed

  if (!tracker) {
    return true;
  }

  var lastValue = tracker.getValue();
  var nextValue = getValueFromNode(node);

  if (nextValue !== lastValue) {
    tracker.setValue(nextValue);
    return true;
  }

  return false;
}

function getActiveElement(doc) {
  doc = doc || (typeof document !== 'undefined' ? document : undefined);

  if (typeof doc === 'undefined') {
    return null;
  }

  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}

var didWarnValueDefaultValue = false;
var didWarnCheckedDefaultChecked = false;
var didWarnControlledToUncontrolled = false;
var didWarnUncontrolledToControlled = false;

function isControlled(props) {
  var usesChecked = props.type === 'checkbox' || props.type === 'radio';
  return usesChecked ? props.checked != null : props.value != null;
}
/**
 * Implements an <input> host component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * See http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */


function getHostProps(element, props) {
  var node = element;
  var checked = props.checked;

  var hostProps = _assign({}, props, {
    defaultChecked: undefined,
    defaultValue: undefined,
    value: undefined,
    checked: checked != null ? checked : node._wrapperState.initialChecked
  });

  return hostProps;
}
function initWrapperState(element, props) {
  {
    checkControlledValueProps('input', props);

    if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnCheckedDefaultChecked) {
      error('%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', getCurrentFiberOwnerNameInDevOrNull() || 'A component', props.type);

      didWarnCheckedDefaultChecked = true;
    }

    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue) {
      error('%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', getCurrentFiberOwnerNameInDevOrNull() || 'A component', props.type);

      didWarnValueDefaultValue = true;
    }
  }

  var node = element;
  var defaultValue = props.defaultValue == null ? '' : props.defaultValue;
  node._wrapperState = {
    initialChecked: props.checked != null ? props.checked : props.defaultChecked,
    initialValue: getToStringValue(props.value != null ? props.value : defaultValue),
    controlled: isControlled(props)
  };
}
function updateChecked(element, props) {
  var node = element;
  var checked = props.checked;

  if (checked != null) {
    setValueForProperty(node, 'checked', checked, false);
  }
}
function updateWrapper(element, props) {
  var node = element;

  {
    var controlled = isControlled(props);

    if (!node._wrapperState.controlled && controlled && !didWarnUncontrolledToControlled) {
      error('A component is changing an uncontrolled input to be controlled. ' + 'This is likely caused by the value changing from undefined to ' + 'a defined value, which should not happen. ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components');

      didWarnUncontrolledToControlled = true;
    }

    if (node._wrapperState.controlled && !controlled && !didWarnControlledToUncontrolled) {
      error('A component is changing a controlled input to be uncontrolled. ' + 'This is likely caused by the value changing from a defined to ' + 'undefined, which should not happen. ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components');

      didWarnControlledToUncontrolled = true;
    }
  }

  updateChecked(element, props);
  var value = getToStringValue(props.value);
  var type = props.type;

  if (value != null) {
    if (type === 'number') {
      if (value === 0 && node.value === '' || // We explicitly want to coerce to number here if possible.
      // eslint-disable-next-line
      node.value != value) {
        node.value = toString(value);
      }
    } else if (node.value !== toString(value)) {
      node.value = toString(value);
    }
  } else if (type === 'submit' || type === 'reset') {
    // Submit/reset inputs need the attribute removed completely to avoid
    // blank-text buttons.
    node.removeAttribute('value');
    return;
  }

  {
    // When syncing the value attribute, the value comes from a cascade of
    // properties:
    //  1. The value React property
    //  2. The defaultValue React property
    //  3. Otherwise there should be no change
    if (props.hasOwnProperty('value')) {
      setDefaultValue(node, props.type, value);
    } else if (props.hasOwnProperty('defaultValue')) {
      setDefaultValue(node, props.type, getToStringValue(props.defaultValue));
    }
  }

  {
    // When syncing the checked attribute, it only changes when it needs
    // to be removed, such as transitioning from a checkbox into a text input
    if (props.checked == null && props.defaultChecked != null) {
      node.defaultChecked = !!props.defaultChecked;
    }
  }
}
function postMountWrapper(element, props, isHydrating) {
  var node = element; // Do not assign value if it is already set. This prevents user text input
  // from being lost during SSR hydration.

  if (props.hasOwnProperty('value') || props.hasOwnProperty('defaultValue')) {
    var type = props.type;
    var isButton = type === 'submit' || type === 'reset'; // Avoid setting value attribute on submit/reset inputs as it overrides the
    // default value provided by the browser. See: #12872

    if (isButton && (props.value === undefined || props.value === null)) {
      return;
    }

    var initialValue = toString(node._wrapperState.initialValue); // Do not assign value if it is already set. This prevents user text input
    // from being lost during SSR hydration.

    if (!isHydrating) {
      {
        // When syncing the value attribute, the value property should use
        // the wrapperState._initialValue property. This uses:
        //
        //   1. The value React property when present
        //   2. The defaultValue React property when present
        //   3. An empty string
        if (initialValue !== node.value) {
          node.value = initialValue;
        }
      }
    }

    {
      // Otherwise, the value attribute is synchronized to the property,
      // so we assign defaultValue to the same thing as the value property
      // assignment step above.
      node.defaultValue = initialValue;
    }
  } // Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
  // this is needed to work around a chrome bug where setting defaultChecked
  // will sometimes influence the value of checked (even after detachment).
  // Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
  // We need to temporarily unset name to avoid disrupting radio button groups.


  var name = node.name;

  if (name !== '') {
    node.name = '';
  }

  {
    // When syncing the checked attribute, both the checked property and
    // attribute are assigned at the same time using defaultChecked. This uses:
    //
    //   1. The checked React property when present
    //   2. The defaultChecked React property when present
    //   3. Otherwise, false
    node.defaultChecked = !node.defaultChecked;
    node.defaultChecked = !!node._wrapperState.initialChecked;
  }

  if (name !== '') {
    node.name = name;
  }
}
function restoreControlledState(element, props) {
  var node = element;
  updateWrapper(node, props);
  updateNamedCousins(node, props);
}

function updateNamedCousins(rootNode, props) {
  var name = props.name;

  if (props.type === 'radio' && name != null) {
    var queryRoot = rootNode;

    while (queryRoot.parentNode) {
      queryRoot = queryRoot.parentNode;
    } // If `rootNode.form` was non-null, then we could try `form.elements`,
    // but that sometimes behaves strangely in IE8. We could also try using
    // `form.getElementsByName`, but that will only return direct children
    // and won't include inputs that use the HTML5 `form=` attribute. Since
    // the input might not even be in a form. It might not even be in the
    // document. Let's just use the local `querySelectorAll` to ensure we don't
    // miss anything.


    var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');

    for (var i = 0; i < group.length; i++) {
      var otherNode = group[i];

      if (otherNode === rootNode || otherNode.form !== rootNode.form) {
        continue;
      } // This will throw if radio buttons rendered by different copies of React
      // and the same name are rendered into the same form (same as #1939).
      // That's probably okay; we don't support it just as we don't support
      // mixing React radio buttons with non-React ones.


      var otherProps = getFiberCurrentPropsFromNode(otherNode);

      if (!otherProps) {
        {
          throw Error( "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported." );
        }
      } // We need update the tracked value on the named cousin since the value
      // was changed but the input saw no event or value set


      updateValueIfChanged(otherNode); // If this is a controlled radio button group, forcing the input that
      // was previously checked to update will cause it to be come re-checked
      // as appropriate.

      updateWrapper(otherNode, otherProps);
    }
  }
} // In Chrome, assigning defaultValue to certain input types triggers input validation.
// For number inputs, the display value loses trailing decimal points. For email inputs,
// Chrome raises "The specified value <x> is not a valid email address".
//
// Here we check to see if the defaultValue has actually changed, avoiding these problems
// when the user is inputting text
//
// https://github.com/facebook/react/issues/7253


function setDefaultValue(node, type, value) {
  if ( // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
  type !== 'number' || getActiveElement(node.ownerDocument) !== node) {
    if (value == null) {
      node.defaultValue = toString(node._wrapperState.initialValue);
    } else if (node.defaultValue !== toString(value)) {
      node.defaultValue = toString(value);
    }
  }
}

var didWarnSelectedSetOnOption = false;
var didWarnInvalidChild = false;

function flattenChildren(children) {
  var content = ''; // Flatten children. We'll warn if they are invalid
  // during validateProps() which runs for hydration too.
  // Note that this would throw on non-element objects.
  // Elements are stringified (which is normally irrelevant
  // but matters for <fbt>).

  React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }

    content += child; // Note: we don't warn about invalid children here.
    // Instead, this is done separately below so that
    // it happens during the hydration code path too.
  });
  return content;
}
/**
 * Implements an <option> host component that warns when `selected` is set.
 */


function validateProps(element, props) {
  {
    // This mirrors the code path above, but runs for hydration too.
    // Warn about invalid children here so that client and hydration are consistent.
    // TODO: this seems like it could cause a DEV-only throw for hydration
    // if children contains a non-element object. We should try to avoid that.
    if (typeof props.children === 'object' && props.children !== null) {
      React.Children.forEach(props.children, function (child) {
        if (child == null) {
          return;
        }

        if (typeof child === 'string' || typeof child === 'number') {
          return;
        }

        if (typeof child.type !== 'string') {
          return;
        }

        if (!didWarnInvalidChild) {
          didWarnInvalidChild = true;

          error('Only strings and numbers are supported as <option> children.');
        }
      });
    } // TODO: Remove support for `selected` in <option>.


    if (props.selected != null && !didWarnSelectedSetOnOption) {
      error('Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.');

      didWarnSelectedSetOnOption = true;
    }
  }
}
function postMountWrapper$1(element, props) {
  // value="" should make a value attribute (#6219)
  if (props.value != null) {
    element.setAttribute('value', toString(getToStringValue(props.value)));
  }
}
function getHostProps$1(element, props) {
  var hostProps = _assign({
    children: undefined
  }, props);

  var content = flattenChildren(props.children);

  if (content) {
    hostProps.children = content;
  }

  return hostProps;
}

var didWarnValueDefaultValue$1;

{
  didWarnValueDefaultValue$1 = false;
}

function getDeclarationErrorAddendum() {
  var ownerName = getCurrentFiberOwnerNameInDevOrNull();

  if (ownerName) {
    return '\n\nCheck the render method of `' + ownerName + '`.';
  }

  return '';
}

var valuePropNames = ['value', 'defaultValue'];
/**
 * Validation function for `value` and `defaultValue`.
 */

function checkSelectPropTypes(props) {
  {
    checkControlledValueProps('select', props);

    for (var i = 0; i < valuePropNames.length; i++) {
      var propName = valuePropNames[i];

      if (props[propName] == null) {
        continue;
      }

      var isArray = Array.isArray(props[propName]);

      if (props.multiple && !isArray) {
        error('The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, getDeclarationErrorAddendum());
      } else if (!props.multiple && isArray) {
        error('The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, getDeclarationErrorAddendum());
      }
    }
  }
}

function updateOptions(node, multiple, propValue, setDefaultSelected) {
  var options = node.options;

  if (multiple) {
    var selectedValues = propValue;
    var selectedValue = {};

    for (var i = 0; i < selectedValues.length; i++) {
      // Prefix to avoid chaos with special keys.
      selectedValue['$' + selectedValues[i]] = true;
    }

    for (var _i = 0; _i < options.length; _i++) {
      var selected = selectedValue.hasOwnProperty('$' + options[_i].value);

      if (options[_i].selected !== selected) {
        options[_i].selected = selected;
      }

      if (selected && setDefaultSelected) {
        options[_i].defaultSelected = true;
      }
    }
  } else {
    // Do not set `select.value` as exact behavior isn't consistent across all
    // browsers for all cases.
    var _selectedValue = toString(getToStringValue(propValue));

    var defaultSelected = null;

    for (var _i2 = 0; _i2 < options.length; _i2++) {
      if (options[_i2].value === _selectedValue) {
        options[_i2].selected = true;

        if (setDefaultSelected) {
          options[_i2].defaultSelected = true;
        }

        return;
      }

      if (defaultSelected === null && !options[_i2].disabled) {
        defaultSelected = options[_i2];
      }
    }

    if (defaultSelected !== null) {
      defaultSelected.selected = true;
    }
  }
}
/**
 * Implements a <select> host component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */


function getHostProps$2(element, props) {
  return _assign({}, props, {
    value: undefined
  });
}
function initWrapperState$1(element, props) {
  var node = element;

  {
    checkSelectPropTypes(props);
  }

  node._wrapperState = {
    wasMultiple: !!props.multiple
  };

  {
    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue$1) {
      error('Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');

      didWarnValueDefaultValue$1 = true;
    }
  }
}
function postMountWrapper$2(element, props) {
  var node = element;
  node.multiple = !!props.multiple;
  var value = props.value;

  if (value != null) {
    updateOptions(node, !!props.multiple, value, false);
  } else if (props.defaultValue != null) {
    updateOptions(node, !!props.multiple, props.defaultValue, true);
  }
}
function postUpdateWrapper(element, props) {
  var node = element;
  var wasMultiple = node._wrapperState.wasMultiple;
  node._wrapperState.wasMultiple = !!props.multiple;
  var value = props.value;

  if (value != null) {
    updateOptions(node, !!props.multiple, value, false);
  } else if (wasMultiple !== !!props.multiple) {
    // For simplicity, reapply `defaultValue` if `multiple` is toggled.
    if (props.defaultValue != null) {
      updateOptions(node, !!props.multiple, props.defaultValue, true);
    } else {
      // Revert the select back to its default unselected state.
      updateOptions(node, !!props.multiple, props.multiple ? [] : '', false);
    }
  }
}
function restoreControlledState$1(element, props) {
  var node = element;
  var value = props.value;

  if (value != null) {
    updateOptions(node, !!props.multiple, value, false);
  }
}

var didWarnValDefaultVal = false;

/**
 * Implements a <textarea> host component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */
function getHostProps$3(element, props) {
  var node = element;

  if (!(props.dangerouslySetInnerHTML == null)) {
    {
      throw Error( "`dangerouslySetInnerHTML` does not make sense on <textarea>." );
    }
  } // Always set children to the same thing. In IE9, the selection range will
  // get reset if `textContent` is mutated.  We could add a check in setTextContent
  // to only set the value if/when the value differs from the node value (which would
  // completely solve this IE9 bug), but Sebastian+Sophie seemed to like this
  // solution. The value can be a boolean or object so that's why it's forced
  // to be a string.


  var hostProps = _assign({}, props, {
    value: undefined,
    defaultValue: undefined,
    children: toString(node._wrapperState.initialValue)
  });

  return hostProps;
}
function initWrapperState$2(element, props) {
  var node = element;

  {
    checkControlledValueProps('textarea', props);

    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValDefaultVal) {
      error('%s contains a textarea with both value and defaultValue props. ' + 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', getCurrentFiberOwnerNameInDevOrNull() || 'A component');

      didWarnValDefaultVal = true;
    }
  }

  var initialValue = props.value; // Only bother fetching default value if we're going to use it

  if (initialValue == null) {
    var children = props.children,
        defaultValue = props.defaultValue;

    if (children != null) {
      {
        error('Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
      }

      {
        if (!(defaultValue == null)) {
          {
            throw Error( "If you supply `defaultValue` on a <textarea>, do not pass children." );
          }
        }

        if (Array.isArray(children)) {
          if (!(children.length <= 1)) {
            {
              throw Error( "<textarea> can only have at most one child." );
            }
          }

          children = children[0];
        }

        defaultValue = children;
      }
    }

    if (defaultValue == null) {
      defaultValue = '';
    }

    initialValue = defaultValue;
  }

  node._wrapperState = {
    initialValue: getToStringValue(initialValue)
  };
}
function updateWrapper$1(element, props) {
  var node = element;
  var value = getToStringValue(props.value);
  var defaultValue = getToStringValue(props.defaultValue);

  if (value != null) {
    // Cast `value` to a string to ensure the value is set correctly. While
    // browsers typically do this as necessary, jsdom doesn't.
    var newValue = toString(value); // To avoid side effects (such as losing text selection), only set value if changed

    if (newValue !== node.value) {
      node.value = newValue;
    }

    if (props.defaultValue == null && node.defaultValue !== newValue) {
      node.defaultValue = newValue;
    }
  }

  if (defaultValue != null) {
    node.defaultValue = toString(defaultValue);
  }
}
function postMountWrapper$3(element, props) {
  var node = element; // This is in postMount because we need access to the DOM node, which is not
  // available until after the component has mounted.

  var textContent = node.textContent; // Only set node.value if textContent is equal to the expected
  // initial value. In IE10/IE11 there is a bug where the placeholder attribute
  // will populate textContent as well.
  // https://developer.microsoft.com/microsoft-edge/platform/issues/101525/

  if (textContent === node._wrapperState.initialValue) {
    if (textContent !== '' && textContent !== null) {
      node.value = textContent;
    }
  }
}
function restoreControlledState$2(element, props) {
  // DOM component is still mounted; update
  updateWrapper$1(element, props);
}

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
var Namespaces = {
  html: HTML_NAMESPACE,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
}; // Assumes there is no parent namespace.

function getIntrinsicNamespace(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;

    case 'math':
      return MATH_NAMESPACE;

    default:
      return HTML_NAMESPACE;
  }
}
function getChildNamespace(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace(type);
  }

  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  } // By default, pass namespace below.


  return parentNamespace;
}

/* globals MSApp */

/**
 * Create a function which has 'unsafe' privileges (required by windows8 apps)
 */
var createMicrosoftUnsafeLocalFunction = function (func) {
  if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
    return function (arg0, arg1, arg2, arg3) {
      MSApp.execUnsafeLocalFunction(function () {
        return func(arg0, arg1, arg2, arg3);
      });
    };
  } else {
    return func;
  }
};

var reusableSVGContainer;
/**
 * Set the innerHTML property of a node
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */

var setInnerHTML = createMicrosoftUnsafeLocalFunction(function (node, html) {
  if (node.namespaceURI === Namespaces.svg) {

    if (!('innerHTML' in node)) {
      // IE does not have innerHTML for SVG nodes, so instead we inject the
      // new markup in a temp node and then move the child nodes across into
      // the target node
      reusableSVGContainer = reusableSVGContainer || document.createElement('div');
      reusableSVGContainer.innerHTML = '<svg>' + html.valueOf().toString() + '</svg>';
      var svgNode = reusableSVGContainer.firstChild;

      while (node.firstChild) {
        node.removeChild(node.firstChild);
      }

      while (svgNode.firstChild) {
        node.appendChild(svgNode.firstChild);
      }

      return;
    }
  }

  node.innerHTML = html;
});

/**
 * HTML nodeType values that represent the type of the node
 */
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var DOCUMENT_NODE = 9;
var DOCUMENT_FRAGMENT_NODE = 11;

/**
 * Set the textContent property of a node. For text updates, it's faster
 * to set the `nodeValue` of the Text node directly instead of using
 * `.textContent` which will remove the existing node and create a new one.
 *
 * @param {DOMElement} node
 * @param {string} text
 * @internal
 */

var setTextContent = function (node, text) {
  if (text) {
    var firstChild = node.firstChild;

    if (firstChild && firstChild === node.lastChild && firstChild.nodeType === TEXT_NODE) {
      firstChild.nodeValue = text;
      return;
    }
  }

  node.textContent = text;
};

// List derived from Gecko source code:
// https://github.com/mozilla/gecko-dev/blob/4e638efc71/layout/style/test/property_database.js
var shorthandToLonghand = {
  animation: ['animationDelay', 'animationDirection', 'animationDuration', 'animationFillMode', 'animationIterationCount', 'animationName', 'animationPlayState', 'animationTimingFunction'],
  background: ['backgroundAttachment', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPositionX', 'backgroundPositionY', 'backgroundRepeat', 'backgroundSize'],
  backgroundPosition: ['backgroundPositionX', 'backgroundPositionY'],
  border: ['borderBottomColor', 'borderBottomStyle', 'borderBottomWidth', 'borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth', 'borderRightColor', 'borderRightStyle', 'borderRightWidth', 'borderTopColor', 'borderTopStyle', 'borderTopWidth'],
  borderBlockEnd: ['borderBlockEndColor', 'borderBlockEndStyle', 'borderBlockEndWidth'],
  borderBlockStart: ['borderBlockStartColor', 'borderBlockStartStyle', 'borderBlockStartWidth'],
  borderBottom: ['borderBottomColor', 'borderBottomStyle', 'borderBottomWidth'],
  borderColor: ['borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor'],
  borderImage: ['borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth'],
  borderInlineEnd: ['borderInlineEndColor', 'borderInlineEndStyle', 'borderInlineEndWidth'],
  borderInlineStart: ['borderInlineStartColor', 'borderInlineStartStyle', 'borderInlineStartWidth'],
  borderLeft: ['borderLeftColor', 'borderLeftStyle', 'borderLeftWidth'],
  borderRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopLeftRadius', 'borderTopRightRadius'],
  borderRight: ['borderRightColor', 'borderRightStyle', 'borderRightWidth'],
  borderStyle: ['borderBottomStyle', 'borderLeftStyle', 'borderRightStyle', 'borderTopStyle'],
  borderTop: ['borderTopColor', 'borderTopStyle', 'borderTopWidth'],
  borderWidth: ['borderBottomWidth', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth'],
  columnRule: ['columnRuleColor', 'columnRuleStyle', 'columnRuleWidth'],
  columns: ['columnCount', 'columnWidth'],
  flex: ['flexBasis', 'flexGrow', 'flexShrink'],
  flexFlow: ['flexDirection', 'flexWrap'],
  font: ['fontFamily', 'fontFeatureSettings', 'fontKerning', 'fontLanguageOverride', 'fontSize', 'fontSizeAdjust', 'fontStretch', 'fontStyle', 'fontVariant', 'fontVariantAlternates', 'fontVariantCaps', 'fontVariantEastAsian', 'fontVariantLigatures', 'fontVariantNumeric', 'fontVariantPosition', 'fontWeight', 'lineHeight'],
  fontVariant: ['fontVariantAlternates', 'fontVariantCaps', 'fontVariantEastAsian', 'fontVariantLigatures', 'fontVariantNumeric', 'fontVariantPosition'],
  gap: ['columnGap', 'rowGap'],
  grid: ['gridAutoColumns', 'gridAutoFlow', 'gridAutoRows', 'gridTemplateAreas', 'gridTemplateColumns', 'gridTemplateRows'],
  gridArea: ['gridColumnEnd', 'gridColumnStart', 'gridRowEnd', 'gridRowStart'],
  gridColumn: ['gridColumnEnd', 'gridColumnStart'],
  gridColumnGap: ['columnGap'],
  gridGap: ['columnGap', 'rowGap'],
  gridRow: ['gridRowEnd', 'gridRowStart'],
  gridRowGap: ['rowGap'],
  gridTemplate: ['gridTemplateAreas', 'gridTemplateColumns', 'gridTemplateRows'],
  listStyle: ['listStyleImage', 'listStylePosition', 'listStyleType'],
  margin: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
  marker: ['markerEnd', 'markerMid', 'markerStart'],
  mask: ['maskClip', 'maskComposite', 'maskImage', 'maskMode', 'maskOrigin', 'maskPositionX', 'maskPositionY', 'maskRepeat', 'maskSize'],
  maskPosition: ['maskPositionX', 'maskPositionY'],
  outline: ['outlineColor', 'outlineStyle', 'outlineWidth'],
  overflow: ['overflowX', 'overflowY'],
  padding: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
  placeContent: ['alignContent', 'justifyContent'],
  placeItems: ['alignItems', 'justifyItems'],
  placeSelf: ['alignSelf', 'justifySelf'],
  textDecoration: ['textDecorationColor', 'textDecorationLine', 'textDecorationStyle'],
  textEmphasis: ['textEmphasisColor', 'textEmphasisStyle'],
  transition: ['transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction'],
  wordWrap: ['overflowWrap']
};

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */


var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.

Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */

function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901
  var isEmpty = value == null || typeof value === 'boolean' || value === '';

  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */

function hyphenateStyleName(name) {
  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

var warnValidStyle = function () {};

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  var msPattern$1 = /^-ms-/;
  var hyphenPattern = /-(.)/g; // style values shouldn't contain a semicolon

  var badStyleValueWithSemicolonPattern = /;\s*$/;
  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var camelize = function (string) {
    return string.replace(hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  };

  var warnHyphenatedStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported style property %s. Did you mean %s?', name, // As Andi Smith suggests
    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
    // is converted to lowercase `ms`.
    camelize(name.replace(msPattern$1, 'ms-')));
  };

  var warnBadVendoredStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
  };

  var warnStyleValueWithSemicolon = function (name, value) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;

    error("Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;

    error('`NaN` is an invalid value for the `%s` css style property.', name);
  };

  var warnStyleValueIsInfinity = function (name, value) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;

    error('`Infinity` is an invalid value for the `%s` css style property.', name);
  };

  warnValidStyle = function (name, value) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

/**
 * Operations for dealing with CSS properties.
 */

/**
 * This creates a string that is expected to be equivalent to the style
 * attribute generated by server-side rendering. It by-passes warnings and
 * security checks so it's not safe to use this value for anything other than
 * comparison. It is only used in DEV for SSR validation.
 */

function createDangerousStringForStyles(styles) {
  {
    var serialized = '';
    var delimiter = '';

    for (var styleName in styles) {
      if (!styles.hasOwnProperty(styleName)) {
        continue;
      }

      var styleValue = styles[styleName];

      if (styleValue != null) {
        var isCustomProperty = styleName.indexOf('--') === 0;
        serialized += delimiter + (isCustomProperty ? styleName : hyphenateStyleName(styleName)) + ':';
        serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
        delimiter = ';';
      }
    }

    return serialized || null;
  }
}
/**
 * Sets the value for multiple styles on a node.  If a value is specified as
 * '' (empty string), the corresponding style property will be unset.
 *
 * @param {DOMElement} node
 * @param {object} styles
 */

function setValueForStyles(node, styles) {
  var style = node.style;

  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }

    var isCustomProperty = styleName.indexOf('--') === 0;

    {
      if (!isCustomProperty) {
        warnValidStyle$1(styleName, styles[styleName]);
      }
    }

    var styleValue = dangerousStyleValue(styleName, styles[styleName], isCustomProperty);

    if (styleName === 'float') {
      styleName = 'cssFloat';
    }

    if (isCustomProperty) {
      style.setProperty(styleName, styleValue);
    } else {
      style[styleName] = styleValue;
    }
  }
}

function isValueEmpty(value) {
  return value == null || typeof value === 'boolean' || value === '';
}
/**
 * Given {color: 'red', overflow: 'hidden'} returns {
 *   color: 'color',
 *   overflowX: 'overflow',
 *   overflowY: 'overflow',
 * }. This can be read as "the overflowY property was set by the overflow
 * shorthand". That is, the values are the property that each was derived from.
 */


function expandShorthandMap(styles) {
  var expanded = {};

  for (var key in styles) {
    var longhands = shorthandToLonghand[key] || [key];

    for (var i = 0; i < longhands.length; i++) {
      expanded[longhands[i]] = key;
    }
  }

  return expanded;
}
/**
 * When mixing shorthand and longhand property names, we warn during updates if
 * we expect an incorrect result to occur. In particular, we warn for:
 *
 * Updating a shorthand property (longhand gets overwritten):
 *   {font: 'foo', fontVariant: 'bar'} -> {font: 'baz', fontVariant: 'bar'}
 *   becomes .style.font = 'baz'
 * Removing a shorthand property (longhand gets lost too):
 *   {font: 'foo', fontVariant: 'bar'} -> {fontVariant: 'bar'}
 *   becomes .style.font = ''
 * Removing a longhand property (should revert to shorthand; doesn't):
 *   {font: 'foo', fontVariant: 'bar'} -> {font: 'foo'}
 *   becomes .style.fontVariant = ''
 */


function validateShorthandPropertyCollisionInDev(styleUpdates, nextStyles) {
  {
    if (!nextStyles) {
      return;
    }

    var expandedUpdates = expandShorthandMap(styleUpdates);
    var expandedStyles = expandShorthandMap(nextStyles);
    var warnedAbout = {};

    for (var key in expandedUpdates) {
      var originalKey = expandedUpdates[key];
      var correctOriginalKey = expandedStyles[key];

      if (correctOriginalKey && originalKey !== correctOriginalKey) {
        var warningKey = originalKey + ',' + correctOriginalKey;

        if (warnedAbout[warningKey]) {
          continue;
        }

        warnedAbout[warningKey] = true;

        error('%s a style property during rerender (%s) when a ' + 'conflicting property is set (%s) can lead to styling bugs. To ' + "avoid this, don't mix shorthand and non-shorthand properties " + 'for the same value; instead, replace the shorthand with ' + 'separate values.', isValueEmpty(styleUpdates[originalKey]) ? 'Removing' : 'Updating', originalKey, correctOriginalKey);
      }
    }
  }
}

// For HTML, certain tags should omit their close tag. We keep a list for
// those special-case tags.
var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true // NOTE: menuitem's close tag should be omitted, but that causes problems.

};

// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({
  menuitem: true
}, omittedCloseTags);

var HTML = '__html';

function assertValidProps(tag, props) {
  if (!props) {
    return;
  } // Note the use of `==` which checks for null or undefined.


  if (voidElementTags[tag]) {
    if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
      {
        throw Error( tag + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`." );
      }
    }
  }

  if (props.dangerouslySetInnerHTML != null) {
    if (!(props.children == null)) {
      {
        throw Error( "Can only set one of `children` or `props.dangerouslySetInnerHTML`." );
      }
    }

    if (!(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML)) {
      {
        throw Error( "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information." );
      }
    }
  }

  {
    if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
      error('A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
    }
  }

  if (!(props.style == null || typeof props.style === 'object')) {
    {
      throw Error( "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX." );
    }
  }
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this list too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;

    default:
      return true;
  }
}

// When adding attributes to the HTML or SVG allowed attribute list, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  class: 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  disablepictureinpicture: 'disablePictureInPicture',
  disableremoteplayback: 'disableRemotePlayback',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  enterkeyhint: 'enterKeyHint',
  for: 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',
  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  in: 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  typeof: 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var ariaProperties = {
  'aria-current': 0,
  // state
  'aria-details': 0,
  'aria-disabled': 0,
  // state
  'aria-hidden': 0,
  // state
  'aria-invalid': 0,
  // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

function validateProperty(tagName, name) {
  {
    if (hasOwnProperty$1.call(warnedProperties, name) && warnedProperties[name]) {
      return true;
    }

    if (rARIACamel.test(name)) {
      var ariaName = 'aria-' + name.slice(4).toLowerCase();
      var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (correctName == null) {
        error('Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);

        warnedProperties[name] = true;
        return true;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== correctName) {
        error('Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);

        warnedProperties[name] = true;
        return true;
      }
    }

    if (rARIA.test(name)) {
      var lowerCasedName = name.toLowerCase();
      var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (standardName == null) {
        warnedProperties[name] = true;
        return false;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== standardName) {
        error('Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties[name] = true;
        return true;
      }
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  {
    var invalidProps = [];

    for (var key in props) {
      var isValid = validateProperty(type, key);

      if (!isValid) {
        invalidProps.push(key);
      }
    }

    var unknownPropString = invalidProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (invalidProps.length === 1) {
      error('Invalid aria prop %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
    } else if (invalidProps.length > 1) {
      error('Invalid aria props %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
    }
  }
}

function validateProperties(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnInvalidARIAProps(type, props);
}

var didWarnValueNull = false;
function validateProperties$1(type, props) {
  {
    if (type !== 'input' && type !== 'textarea' && type !== 'select') {
      return;
    }

    if (props != null && props.value === null && !didWarnValueNull) {
      didWarnValueNull = true;

      if (type === 'select' && props.multiple) {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
      } else {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
      }
    }
  }
}

var validateProperty$1 = function () {};

{
  var warnedProperties$1 = {};
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  validateProperty$1 = function (tagName, name, value, eventRegistry) {
    if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();

    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      error('React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');

      warnedProperties$1[name] = true;
      return true;
    } // We can't rely on the event system being injected on the server.


    if (eventRegistry != null) {
      var registrationNameDependencies = eventRegistry.registrationNameDependencies,
          possibleRegistrationNames = eventRegistry.possibleRegistrationNames;

      if (registrationNameDependencies.hasOwnProperty(name)) {
        return true;
      }

      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;

      if (registrationName != null) {
        error('Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);

        warnedProperties$1[name] = true;
        return true;
      }

      if (EVENT_NAME_REGEX.test(name)) {
        error('Unknown event handler property `%s`. It will be ignored.', name);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        error('Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Let the ARIA attribute hook validate ARIA attributes


    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      error('Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      error('The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      error('Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      error('Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);

      warnedProperties$1[name] = true;
      return true;
    }

    var propertyInfo = getPropertyInfo(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED; // Known attributes should match the casing specified in the property config.

    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];

      if (standardName !== name) {
        error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      error('React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      if (value) {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
      } else {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Now that we've validated casing, do not validate
    // data types for reserved props


    if (isReserved) {
      return true;
    } // Warn when a known attribute is a bad type


    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      warnedProperties$1[name] = true;
      return false;
    } // Warn when passing the strings 'false' or 'true' into a boolean prop


    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
      error('Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);

      warnedProperties$1[name] = true;
      return true;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, eventRegistry) {
  {
    var unknownProps = [];

    for (var key in props) {
      var isValid = validateProperty$1(type, key, props[key], eventRegistry);

      if (!isValid) {
        unknownProps.push(key);
      }
    }

    var unknownPropString = unknownProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (unknownProps.length === 1) {
      error('Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
    } else if (unknownProps.length > 1) {
      error('Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
    }
  }
};

function validateProperties$2(type, props, eventRegistry) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnUnknownProperties(type, props, eventRegistry);
}

var IS_EVENT_HANDLE_NON_MANAGED_NODE = 1;
var IS_NON_DELEGATED = 1 << 1;
var IS_CAPTURE_PHASE = 1 << 2;
var IS_REPLAYED = 1 << 4;
// set to LEGACY_FB_SUPPORT. LEGACY_FB_SUPPORT only gets set when
// we call willDeferLaterForLegacyFBSupport, thus not bailing out
// will result in endless cycles like an infinite loop.
// We also don't want to defer during event replaying.

var SHOULD_NOT_PROCESS_POLYFILL_EVENT_PLUGINS = IS_EVENT_HANDLE_NON_MANAGED_NODE | IS_NON_DELEGATED | IS_CAPTURE_PHASE;

/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */

function getEventTarget(nativeEvent) {
  // Fallback to nativeEvent.srcElement for IE9
  // https://github.com/facebook/react/issues/12506
  var target = nativeEvent.target || nativeEvent.srcElement || window; // Normalize SVG <use> element events #4963

  if (target.correspondingUseElement) {
    target = target.correspondingUseElement;
  } // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
  // @see http://www.quirksmode.org/js/events_properties.html


  return target.nodeType === TEXT_NODE ? target.parentNode : target;
}

var restoreImpl = null;
var restoreTarget = null;
var restoreQueue = null;

function restoreStateOfTarget(target) {
  // We perform this translation at the end of the event loop so that we
  // always receive the correct fiber here
  var internalInstance = getInstanceFromNode(target);

  if (!internalInstance) {
    // Unmounted
    return;
  }

  if (!(typeof restoreImpl === 'function')) {
    {
      throw Error( "setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue." );
    }
  }

  var stateNode = internalInstance.stateNode; // Guard against Fiber being unmounted.

  if (stateNode) {
    var _props = getFiberCurrentPropsFromNode(stateNode);

    restoreImpl(internalInstance.stateNode, internalInstance.type, _props);
  }
}

function setRestoreImplementation(impl) {
  restoreImpl = impl;
}
function enqueueStateRestore(target) {
  if (restoreTarget) {
    if (restoreQueue) {
      restoreQueue.push(target);
    } else {
      restoreQueue = [target];
    }
  } else {
    restoreTarget = target;
  }
}
function needsStateRestore() {
  return restoreTarget !== null || restoreQueue !== null;
}
function restoreStateIfNeeded() {
  if (!restoreTarget) {
    return;
  }

  var target = restoreTarget;
  var queuedTargets = restoreQueue;
  restoreTarget = null;
  restoreQueue = null;
  restoreStateOfTarget(target);

  if (queuedTargets) {
    for (var i = 0; i < queuedTargets.length; i++) {
      restoreStateOfTarget(queuedTargets[i]);
    }
  }
}

// the renderer. Such as when we're dispatching events or if third party
// libraries need to call batchedUpdates. Eventually, this API will go away when
// everything is batched by default. We'll then have a similar API to opt-out of
// scheduled work and instead do synchronous work.
// Defaults

var batchedUpdatesImpl = function (fn, bookkeeping) {
  return fn(bookkeeping);
};

var discreteUpdatesImpl = function (fn, a, b, c, d) {
  return fn(a, b, c, d);
};

var flushDiscreteUpdatesImpl = function () {};

var batchedEventUpdatesImpl = batchedUpdatesImpl;
var isInsideEventHandler = false;
var isBatchingEventUpdates = false;

function finishEventHandler() {
  // Here we wait until all updates have propagated, which is important
  // when using controlled components within layers:
  // https://github.com/facebook/react/issues/1698
  // Then we restore state of any controlled component.
  var controlledComponentsHavePendingUpdates = needsStateRestore();

  if (controlledComponentsHavePendingUpdates) {
    // If a controlled event was fired, we may need to restore the state of
    // the DOM node back to the controlled value. This is necessary when React
    // bails out of the update without touching the DOM.
    flushDiscreteUpdatesImpl();
    restoreStateIfNeeded();
  }
}

function batchedUpdates(fn, bookkeeping) {
  if (isInsideEventHandler) {
    // If we are currently inside another batch, we need to wait until it
    // fully completes before restoring state.
    return fn(bookkeeping);
  }

  isInsideEventHandler = true;

  try {
    return batchedUpdatesImpl(fn, bookkeeping);
  } finally {
    isInsideEventHandler = false;
    finishEventHandler();
  }
}
function batchedEventUpdates(fn, a, b) {
  if (isBatchingEventUpdates) {
    // If we are currently inside another batch, we need to wait until it
    // fully completes before restoring state.
    return fn(a, b);
  }

  isBatchingEventUpdates = true;

  try {
    return batchedEventUpdatesImpl(fn, a, b);
  } finally {
    isBatchingEventUpdates = false;
    finishEventHandler();
  }
}
function discreteUpdates(fn, a, b, c, d) {
  var prevIsInsideEventHandler = isInsideEventHandler;
  isInsideEventHandler = true;

  try {
    return discreteUpdatesImpl(fn, a, b, c, d);
  } finally {
    isInsideEventHandler = prevIsInsideEventHandler;

    if (!isInsideEventHandler) {
      finishEventHandler();
    }
  }
}
function flushDiscreteUpdatesIfNeeded(timeStamp) {
  {
    if (!isInsideEventHandler) {
      flushDiscreteUpdatesImpl();
    }
  }
}
function setBatchingImplementation(_batchedUpdatesImpl, _discreteUpdatesImpl, _flushDiscreteUpdatesImpl, _batchedEventUpdatesImpl) {
  batchedUpdatesImpl = _batchedUpdatesImpl;
  discreteUpdatesImpl = _discreteUpdatesImpl;
  flushDiscreteUpdatesImpl = _flushDiscreteUpdatesImpl;
  batchedEventUpdatesImpl = _batchedEventUpdatesImpl;
}

function isInteractive(tag) {
  return tag === 'button' || tag === 'input' || tag === 'select' || tag === 'textarea';
}

function shouldPreventMouseEvent(name, type, props) {
  switch (name) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      return !!(props.disabled && isInteractive(type));

    default:
      return false;
  }
}
/**
 * @param {object} inst The instance, which is the source of events.
 * @param {string} registrationName Name of listener (e.g. `onClick`).
 * @return {?function} The stored callback.
 */


function getListener(inst, registrationName) {
  var stateNode = inst.stateNode;

  if (stateNode === null) {
    // Work in progress (ex: onload events in incremental mode).
    return null;
  }

  var props = getFiberCurrentPropsFromNode(stateNode);

  if (props === null) {
    // Work in progress.
    return null;
  }

  var listener = props[registrationName];

  if (shouldPreventMouseEvent(registrationName, inst.type, props)) {
    return null;
  }

  if (!(!listener || typeof listener === 'function')) {
    {
      throw Error( "Expected `" + registrationName + "` listener to be a function, instead got a value of `" + typeof listener + "` type." );
    }
  }

  return listener;
}

var passiveBrowserEventsSupported = false; // Check if browser support events with passive listeners
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support

if (canUseDOM) {
  try {
    var options = {}; // $FlowFixMe: Ignore Flow complaining about needing a value

    Object.defineProperty(options, 'passive', {
      get: function () {
        passiveBrowserEventsSupported = true;
      }
    });
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
  } catch (e) {
    passiveBrowserEventsSupported = false;
  }
}

function invokeGuardedCallbackProd(name, func, context, a, b, c, d, e, f) {
  var funcArgs = Array.prototype.slice.call(arguments, 3);

  try {
    func.apply(context, funcArgs);
  } catch (error) {
    this.onError(error);
  }
}

var invokeGuardedCallbackImpl = invokeGuardedCallbackProd;

{
  // In DEV mode, we swap out invokeGuardedCallback for a special version
  // that plays more nicely with the browser's DevTools. The idea is to preserve
  // "Pause on exceptions" behavior. Because React wraps all user-provided
  // functions in invokeGuardedCallback, and the production version of
  // invokeGuardedCallback uses a try-catch, all user exceptions are treated
  // like caught exceptions, and the DevTools won't pause unless the developer
  // takes the extra step of enabling pause on caught exceptions. This is
  // unintuitive, though, because even though React has caught the error, from
  // the developer's perspective, the error is uncaught.
  //
  // To preserve the expected "Pause on exceptions" behavior, we don't use a
  // try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
  // DOM node, and call the user-provided callback from inside an event handler
  // for that fake event. If the callback throws, the error is "captured" using
  // a global event handler. But because the error happens in a different
  // event loop context, it does not interrupt the normal program flow.
  // Effectively, this gives us try-catch behavior without actually using
  // try-catch. Neat!
  // Check that the browser supports the APIs we need to implement our special
  // DEV version of invokeGuardedCallback
  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
    var fakeNode = document.createElement('react');

    invokeGuardedCallbackImpl = function invokeGuardedCallbackDev(name, func, context, a, b, c, d, e, f) {
      // If document doesn't exist we know for sure we will crash in this method
      // when we call document.createEvent(). However this can cause confusing
      // errors: https://github.com/facebookincubator/create-react-app/issues/3482
      // So we preemptively throw with a better message instead.
      if (!(typeof document !== 'undefined')) {
        {
          throw Error( "The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous." );
        }
      }

      var evt = document.createEvent('Event');
      var didCall = false; // Keeps track of whether the user-provided callback threw an error. We
      // set this to true at the beginning, then set it to false right after
      // calling the function. If the function errors, `didError` will never be
      // set to false. This strategy works even if the browser is flaky and
      // fails to call our global error handler, because it doesn't rely on
      // the error event at all.

      var didError = true; // Keeps track of the value of window.event so that we can reset it
      // during the callback to let user code access window.event in the
      // browsers that support it.

      var windowEvent = window.event; // Keeps track of the descriptor of window.event to restore it after event
      // dispatching: https://github.com/facebook/react/issues/13688

      var windowEventDescriptor = Object.getOwnPropertyDescriptor(window, 'event');

      function restoreAfterDispatch() {
        // We immediately remove the callback from event listeners so that
        // nested `invokeGuardedCallback` calls do not clash. Otherwise, a
        // nested call would trigger the fake event handlers of any call higher
        // in the stack.
        fakeNode.removeEventListener(evtType, callCallback, false); // We check for window.hasOwnProperty('event') to prevent the
        // window.event assignment in both IE <= 10 as they throw an error
        // "Member not found" in strict mode, and in Firefox which does not
        // support window.event.

        if (typeof window.event !== 'undefined' && window.hasOwnProperty('event')) {
          window.event = windowEvent;
        }
      } // Create an event handler for our fake event. We will synchronously
      // dispatch our fake event using `dispatchEvent`. Inside the handler, we
      // call the user-provided callback.


      var funcArgs = Array.prototype.slice.call(arguments, 3);

      function callCallback() {
        didCall = true;
        restoreAfterDispatch();
        func.apply(context, funcArgs);
        didError = false;
      } // Create a global error event handler. We use this to capture the value
      // that was thrown. It's possible that this error handler will fire more
      // than once; for example, if non-React code also calls `dispatchEvent`
      // and a handler for that event throws. We should be resilient to most of
      // those cases. Even if our error event handler fires more than once, the
      // last error event is always used. If the callback actually does error,
      // we know that the last error event is the correct one, because it's not
      // possible for anything else to have happened in between our callback
      // erroring and the code that follows the `dispatchEvent` call below. If
      // the callback doesn't error, but the error event was fired, we know to
      // ignore it because `didError` will be false, as described above.


      var error; // Use this to track whether the error event is ever called.

      var didSetError = false;
      var isCrossOriginError = false;

      function handleWindowError(event) {
        error = event.error;
        didSetError = true;

        if (error === null && event.colno === 0 && event.lineno === 0) {
          isCrossOriginError = true;
        }

        if (event.defaultPrevented) {
          // Some other error handler has prevented default.
          // Browsers silence the error report if this happens.
          // We'll remember this to later decide whether to log it or not.
          if (error != null && typeof error === 'object') {
            try {
              error._suppressLogging = true;
            } catch (inner) {// Ignore.
            }
          }
        }
      } // Create a fake event type.


      var evtType = "react-" + (name ? name : 'invokeguardedcallback'); // Attach our event handlers

      window.addEventListener('error', handleWindowError);
      fakeNode.addEventListener(evtType, callCallback, false); // Synchronously dispatch our fake event. If the user-provided function
      // errors, it will trigger our global error handler.

      evt.initEvent(evtType, false, false);
      fakeNode.dispatchEvent(evt);

      if (windowEventDescriptor) {
        Object.defineProperty(window, 'event', windowEventDescriptor);
      }

      if (didCall && didError) {
        if (!didSetError) {
          // The callback errored, but the error event never fired.
          error = new Error('An error was thrown inside one of your components, but React ' + "doesn't know what it was. This is likely due to browser " + 'flakiness. React does its best to preserve the "Pause on ' + 'exceptions" behavior of the DevTools, which requires some ' + "DEV-mode only tricks. It's possible that these don't work in " + 'your browser. Try triggering the error in production mode, ' + 'or switching to a modern browser. If you suspect that this is ' + 'actually an issue with React, please file an issue.');
        } else if (isCrossOriginError) {
          error = new Error("A cross-origin error was thrown. React doesn't have access to " + 'the actual error object in development. ' + 'See https://reactjs.org/link/crossorigin-error for more information.');
        }

        this.onError(error);
      } // Remove our event listeners


      window.removeEventListener('error', handleWindowError);

      if (!didCall) {
        // Something went really wrong, and our event was not dispatched.
        // https://github.com/facebook/react/issues/16734
        // https://github.com/facebook/react/issues/16585
        // Fall back to the production implementation.
        restoreAfterDispatch();
        return invokeGuardedCallbackProd.apply(this, arguments);
      }
    };
  }
}

var invokeGuardedCallbackImpl$1 = invokeGuardedCallbackImpl;

var hasError = false;
var caughtError = null; // Used by event system to capture/rethrow the first error.

var hasRethrowError = false;
var rethrowError = null;
var reporter = {
  onError: function (error) {
    hasError = true;
    caughtError = error;
  }
};
/**
 * Call a function while guarding against errors that happens within it.
 * Returns an error if it throws, otherwise null.
 *
 * In production, this is implemented using a try-catch. The reason we don't
 * use a try-catch directly is so that we can swap out a different
 * implementation in DEV mode.
 *
 * @param {String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} context The context to use when calling the function
 * @param {...*} args Arguments for function
 */

function invokeGuardedCallback(name, func, context, a, b, c, d, e, f) {
  hasError = false;
  caughtError = null;
  invokeGuardedCallbackImpl$1.apply(reporter, arguments);
}
/**
 * Same as invokeGuardedCallback, but instead of returning an error, it stores
 * it in a global so it can be rethrown by `rethrowCaughtError` later.
 * TODO: See if caughtError and rethrowError can be unified.
 *
 * @param {String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} context The context to use when calling the function
 * @param {...*} args Arguments for function
 */

function invokeGuardedCallbackAndCatchFirstError(name, func, context, a, b, c, d, e, f) {
  invokeGuardedCallback.apply(this, arguments);

  if (hasError) {
    var error = clearCaughtError();

    if (!hasRethrowError) {
      hasRethrowError = true;
      rethrowError = error;
    }
  }
}
/**
 * During execution of guarded functions we will capture the first error which
 * we will rethrow to be handled by the top level error handler.
 */

function rethrowCaughtError() {
  if (hasRethrowError) {
    var error = rethrowError;
    hasRethrowError = false;
    rethrowError = null;
    throw error;
  }
}
function hasCaughtError() {
  return hasError;
}
function clearCaughtError() {
  if (hasError) {
    var error = caughtError;
    hasError = false;
    caughtError = null;
    return error;
  } else {
    {
      {
        throw Error( "clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue." );
      }
    }
  }
}

/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 *
 * Note that this module is currently shared and assumed to be stateless.
 * If this becomes an actual Map, that will break.
 */
function get(key) {
  return key._reactInternals;
}
function has(key) {
  return key._reactInternals !== undefined;
}
function set(key, value) {
  key._reactInternals = value;
}

// Don't change these two values. They're used by React Dev Tools.
var NoFlags =
/*                      */
0;
var PerformedWork =
/*                */
1; // You can change the rest (and add more).

var Placement =
/*                    */
2;
var Update =
/*                       */
4;
var PlacementAndUpdate =
/*           */
6;
var Deletion =
/*                     */
8;
var ContentReset =
/*                 */
16;
var Callback =
/*                     */
32;
var DidCapture =
/*                   */
64;
var Ref =
/*                          */
128;
var Snapshot =
/*                     */
256;
var Passive =
/*                      */
512; // TODO (effects) Remove this bit once the new reconciler is synced to the old.

var PassiveUnmountPendingDev =
/*     */
8192;
var Hydrating =
/*                    */
1024;
var HydratingAndUpdate =
/*           */
1028; // Passive & Update & Callback & Ref & Snapshot

var LifecycleEffectMask =
/*          */
932; // Union of all host effects

var HostEffectMask =
/*               */
2047; // These are not really side effects, but we still reuse this field.

var Incomplete =
/*                   */
2048;
var ShouldCapture =
/*                */
4096;
var ForceUpdateForLegacySuspense =
/* */
16384; // Static tags describe aspects of a fiber that are not specific to a render,

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
function getNearestMountedFiber(fiber) {
  var node = fiber;
  var nearestMounted = fiber;

  if (!fiber.alternate) {
    // If there is no alternate, this might be a new tree that isn't inserted
    // yet. If it is, then it will have a pending insertion effect on it.
    var nextNode = node;

    do {
      node = nextNode;

      if ((node.flags & (Placement | Hydrating)) !== NoFlags) {
        // This is an insertion or in-progress hydration. The nearest possible
        // mounted fiber is the parent but we need to continue to figure out
        // if that one is still mounted.
        nearestMounted = node.return;
      }

      nextNode = node.return;
    } while (nextNode);
  } else {
    while (node.return) {
      node = node.return;
    }
  }

  if (node.tag === HostRoot) {
    // TODO: Check if this was a nested HostRoot when used with
    // renderContainerIntoSubtree.
    return nearestMounted;
  } // If we didn't hit the root, that means that we're in an disconnected tree
  // that has been unmounted.


  return null;
}
function getSuspenseInstanceFromFiber(fiber) {
  if (fiber.tag === SuspenseComponent) {
    var suspenseState = fiber.memoizedState;

    if (suspenseState === null) {
      var current = fiber.alternate;

      if (current !== null) {
        suspenseState = current.memoizedState;
      }
    }

    if (suspenseState !== null) {
      return suspenseState.dehydrated;
    }
  }

  return null;
}
function getContainerFromFiber(fiber) {
  return fiber.tag === HostRoot ? fiber.stateNode.containerInfo : null;
}
function isFiberMounted(fiber) {
  return getNearestMountedFiber(fiber) === fiber;
}
function isMounted(component) {
  {
    var owner = ReactCurrentOwner.current;

    if (owner !== null && owner.tag === ClassComponent) {
      var ownerFiber = owner;
      var instance = ownerFiber.stateNode;

      if (!instance._warnedAboutRefsInRender) {
        error('%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', getComponentName(ownerFiber.type) || 'A component');
      }

      instance._warnedAboutRefsInRender = true;
    }
  }

  var fiber = get(component);

  if (!fiber) {
    return false;
  }

  return getNearestMountedFiber(fiber) === fiber;
}

function assertIsMounted(fiber) {
  if (!(getNearestMountedFiber(fiber) === fiber)) {
    {
      throw Error( "Unable to find node on an unmounted component." );
    }
  }
}

function findCurrentFiberUsingSlowPath(fiber) {
  var alternate = fiber.alternate;

  if (!alternate) {
    // If there is no alternate, then we only need to check if it is mounted.
    var nearestMounted = getNearestMountedFiber(fiber);

    if (!(nearestMounted !== null)) {
      {
        throw Error( "Unable to find node on an unmounted component." );
      }
    }

    if (nearestMounted !== fiber) {
      return null;
    }

    return fiber;
  } // If we have two possible branches, we'll walk backwards up to the root
  // to see what path the root points to. On the way we may hit one of the
  // special cases and we'll deal with them.


  var a = fiber;
  var b = alternate;

  while (true) {
    var parentA = a.return;

    if (parentA === null) {
      // We're at the root.
      break;
    }

    var parentB = parentA.alternate;

    if (parentB === null) {
      // There is no alternate. This is an unusual case. Currently, it only
      // happens when a Suspense component is hidden. An extra fragment fiber
      // is inserted in between the Suspense fiber and its children. Skip
      // over this extra fragment fiber and proceed to the next parent.
      var nextParent = parentA.return;

      if (nextParent !== null) {
        a = b = nextParent;
        continue;
      } // If there's no parent, we're at the root.


      break;
    } // If both copies of the parent fiber point to the same child, we can
    // assume that the child is current. This happens when we bailout on low
    // priority: the bailed out fiber's child reuses the current child.


    if (parentA.child === parentB.child) {
      var child = parentA.child;

      while (child) {
        if (child === a) {
          // We've determined that A is the current branch.
          assertIsMounted(parentA);
          return fiber;
        }

        if (child === b) {
          // We've determined that B is the current branch.
          assertIsMounted(parentA);
          return alternate;
        }

        child = child.sibling;
      } // We should never have an alternate for any mounting node. So the only
      // way this could possibly happen is if this was unmounted, if at all.


      {
        {
          throw Error( "Unable to find node on an unmounted component." );
        }
      }
    }

    if (a.return !== b.return) {
      // The return pointer of A and the return pointer of B point to different
      // fibers. We assume that return pointers never criss-cross, so A must
      // belong to the child set of A.return, and B must belong to the child
      // set of B.return.
      a = parentA;
      b = parentB;
    } else {
      // The return pointers point to the same fiber. We'll have to use the
      // default, slow path: scan the child sets of each parent alternate to see
      // which child belongs to which set.
      //
      // Search parent A's child set
      var didFindChild = false;
      var _child = parentA.child;

      while (_child) {
        if (_child === a) {
          didFindChild = true;
          a = parentA;
          b = parentB;
          break;
        }

        if (_child === b) {
          didFindChild = true;
          b = parentA;
          a = parentB;
          break;
        }

        _child = _child.sibling;
      }

      if (!didFindChild) {
        // Search parent B's child set
        _child = parentB.child;

        while (_child) {
          if (_child === a) {
            didFindChild = true;
            a = parentB;
            b = parentA;
            break;
          }

          if (_child === b) {
            didFindChild = true;
            b = parentB;
            a = parentA;
            break;
          }

          _child = _child.sibling;
        }

        if (!didFindChild) {
          {
            throw Error( "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue." );
          }
        }
      }
    }

    if (!(a.alternate === b)) {
      {
        throw Error( "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue." );
      }
    }
  } // If the root is not a host container, we're in a disconnected tree. I.e.
  // unmounted.


  if (!(a.tag === HostRoot)) {
    {
      throw Error( "Unable to find node on an unmounted component." );
    }
  }

  if (a.stateNode.current === a) {
    // We've determined that A is the current branch.
    return fiber;
  } // Otherwise B has to be current branch.


  return alternate;
}
function findCurrentHostFiber(parent) {
  var currentParent = findCurrentFiberUsingSlowPath(parent);

  if (!currentParent) {
    return null;
  } // Next we'll drill down this component to find the first HostComponent/Text.


  var node = currentParent;

  while (true) {
    if (node.tag === HostComponent || node.tag === HostText) {
      return node;
    } else if (node.child) {
      node.child.return = node;
      node = node.child;
      continue;
    }

    if (node === currentParent) {
      return null;
    }

    while (!node.sibling) {
      if (!node.return || node.return === currentParent) {
        return null;
      }

      node = node.return;
    }

    node.sibling.return = node.return;
    node = node.sibling;
  } // Flow needs the return null here, but ESLint complains about it.
  // eslint-disable-next-line no-unreachable


  return null;
}
function findCurrentHostFiberWithNoPortals(parent) {
  var currentParent = findCurrentFiberUsingSlowPath(parent);

  if (!currentParent) {
    return null;
  } // Next we'll drill down this component to find the first HostComponent/Text.


  var node = currentParent;

  while (true) {
    if (node.tag === HostComponent || node.tag === HostText || enableFundamentalAPI ) {
      return node;
    } else if (node.child && node.tag !== HostPortal) {
      node.child.return = node;
      node = node.child;
      continue;
    }

    if (node === currentParent) {
      return null;
    }

    while (!node.sibling) {
      if (!node.return || node.return === currentParent) {
        return null;
      }

      node = node.return;
    }

    node.sibling.return = node.return;
    node = node.sibling;
  } // Flow needs the return null here, but ESLint complains about it.
  // eslint-disable-next-line no-unreachable


  return null;
}
function doesFiberContain(parentFiber, childFiber) {
  var node = childFiber;
  var parentFiberAlternate = parentFiber.alternate;

  while (node !== null) {
    if (node === parentFiber || node === parentFiberAlternate) {
      return true;
    }

    node = node.return;
  }

  return false;
}

var attemptUserBlockingHydration;
function setAttemptUserBlockingHydration(fn) {
  attemptUserBlockingHydration = fn;
}
var attemptContinuousHydration;
function setAttemptContinuousHydration(fn) {
  attemptContinuousHydration = fn;
}
var attemptHydrationAtCurrentPriority;
function setAttemptHydrationAtCurrentPriority(fn) {
  attemptHydrationAtCurrentPriority = fn;
}
var attemptHydrationAtPriority;
function setAttemptHydrationAtPriority(fn) {
  attemptHydrationAtPriority = fn;
} // TODO: Upgrade this definition once we're on a newer version of Flow that
var hasScheduledReplayAttempt = false; // The queue of discrete events to be replayed.

var queuedDiscreteEvents = []; // Indicates if any continuous event targets are non-null for early bailout.
// if the last target was dehydrated.

var queuedFocus = null;
var queuedDrag = null;
var queuedMouse = null; // For pointer events there can be one latest event per pointerId.

var queuedPointers = new Map();
var queuedPointerCaptures = new Map(); // We could consider replaying selectionchange and touchmoves too.

var queuedExplicitHydrationTargets = [];
function hasQueuedDiscreteEvents() {
  return queuedDiscreteEvents.length > 0;
}
var discreteReplayableEvents = ['mousedown', 'mouseup', 'touchcancel', 'touchend', 'touchstart', 'auxclick', 'dblclick', 'pointercancel', 'pointerdown', 'pointerup', 'dragend', 'dragstart', 'drop', 'compositionend', 'compositionstart', 'keydown', 'keypress', 'keyup', 'input', 'textInput', // Intentionally camelCase
'copy', 'cut', 'paste', 'click', 'change', 'contextmenu', 'reset', 'submit'];
function isReplayableDiscreteEvent(eventType) {
  return discreteReplayableEvents.indexOf(eventType) > -1;
}

function createQueuedReplayableEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
  return {
    blockedOn: blockedOn,
    domEventName: domEventName,
    eventSystemFlags: eventSystemFlags | IS_REPLAYED,
    nativeEvent: nativeEvent,
    targetContainers: [targetContainer]
  };
}

function queueDiscreteEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
  var queuedEvent = createQueuedReplayableEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent);
  queuedDiscreteEvents.push(queuedEvent);
} // Resets the replaying for this type of continuous event to no event.

function clearIfContinuousEvent(domEventName, nativeEvent) {
  switch (domEventName) {
    case 'focusin':
    case 'focusout':
      queuedFocus = null;
      break;

    case 'dragenter':
    case 'dragleave':
      queuedDrag = null;
      break;

    case 'mouseover':
    case 'mouseout':
      queuedMouse = null;
      break;

    case 'pointerover':
    case 'pointerout':
      {
        var pointerId = nativeEvent.pointerId;
        queuedPointers.delete(pointerId);
        break;
      }

    case 'gotpointercapture':
    case 'lostpointercapture':
      {
        var _pointerId = nativeEvent.pointerId;
        queuedPointerCaptures.delete(_pointerId);
        break;
      }
  }
}

function accumulateOrCreateContinuousQueuedReplayableEvent(existingQueuedEvent, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
  if (existingQueuedEvent === null || existingQueuedEvent.nativeEvent !== nativeEvent) {
    var queuedEvent = createQueuedReplayableEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent);

    if (blockedOn !== null) {
      var _fiber2 = getInstanceFromNode(blockedOn);

      if (_fiber2 !== null) {
        // Attempt to increase the priority of this target.
        attemptContinuousHydration(_fiber2);
      }
    }

    return queuedEvent;
  } // If we have already queued this exact event, then it's because
  // the different event systems have different DOM event listeners.
  // We can accumulate the flags, and the targetContainers, and
  // store a single event to be replayed.


  existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
  var targetContainers = existingQueuedEvent.targetContainers;

  if (targetContainer !== null && targetContainers.indexOf(targetContainer) === -1) {
    targetContainers.push(targetContainer);
  }

  return existingQueuedEvent;
}

function queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
  // These set relatedTarget to null because the replayed event will be treated as if we
  // moved from outside the window (no target) onto the target once it hydrates.
  // Instead of mutating we could clone the event.
  switch (domEventName) {
    case 'focusin':
      {
        var focusEvent = nativeEvent;
        queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(queuedFocus, blockedOn, domEventName, eventSystemFlags, targetContainer, focusEvent);
        return true;
      }

    case 'dragenter':
      {
        var dragEvent = nativeEvent;
        queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(queuedDrag, blockedOn, domEventName, eventSystemFlags, targetContainer, dragEvent);
        return true;
      }

    case 'mouseover':
      {
        var mouseEvent = nativeEvent;
        queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(queuedMouse, blockedOn, domEventName, eventSystemFlags, targetContainer, mouseEvent);
        return true;
      }

    case 'pointerover':
      {
        var pointerEvent = nativeEvent;
        var pointerId = pointerEvent.pointerId;
        queuedPointers.set(pointerId, accumulateOrCreateContinuousQueuedReplayableEvent(queuedPointers.get(pointerId) || null, blockedOn, domEventName, eventSystemFlags, targetContainer, pointerEvent));
        return true;
      }

    case 'gotpointercapture':
      {
        var _pointerEvent = nativeEvent;
        var _pointerId2 = _pointerEvent.pointerId;
        queuedPointerCaptures.set(_pointerId2, accumulateOrCreateContinuousQueuedReplayableEvent(queuedPointerCaptures.get(_pointerId2) || null, blockedOn, domEventName, eventSystemFlags, targetContainer, _pointerEvent));
        return true;
      }
  }

  return false;
} // Check if this target is unblocked. Returns true if it's unblocked.

function attemptExplicitHydrationTarget(queuedTarget) {
  // TODO: This function shares a lot of logic with attemptToDispatchEvent.
  // Try to unify them. It's a bit tricky since it would require two return
  // values.
  var targetInst = getClosestInstanceFromNode(queuedTarget.target);

  if (targetInst !== null) {
    var nearestMounted = getNearestMountedFiber(targetInst);

    if (nearestMounted !== null) {
      var tag = nearestMounted.tag;

      if (tag === SuspenseComponent) {
        var instance = getSuspenseInstanceFromFiber(nearestMounted);

        if (instance !== null) {
          // We're blocked on hydrating this boundary.
          // Increase its priority.
          queuedTarget.blockedOn = instance;
          attemptHydrationAtPriority(queuedTarget.lanePriority, function () {
            Scheduler.unstable_runWithPriority(queuedTarget.priority, function () {
              attemptHydrationAtCurrentPriority(nearestMounted);
            });
          });
          return;
        }
      } else if (tag === HostRoot) {
        var root = nearestMounted.stateNode;

        if (root.hydrate) {
          queuedTarget.blockedOn = getContainerFromFiber(nearestMounted); // We don't currently have a way to increase the priority of
          // a root other than sync.

          return;
        }
      }
    }
  }

  queuedTarget.blockedOn = null;
}

function attemptReplayContinuousQueuedEvent(queuedEvent) {
  if (queuedEvent.blockedOn !== null) {
    return false;
  }

  var targetContainers = queuedEvent.targetContainers;

  while (targetContainers.length > 0) {
    var targetContainer = targetContainers[0];
    var nextBlockedOn = attemptToDispatchEvent(queuedEvent.domEventName, queuedEvent.eventSystemFlags, targetContainer, queuedEvent.nativeEvent);

    if (nextBlockedOn !== null) {
      // We're still blocked. Try again later.
      var _fiber3 = getInstanceFromNode(nextBlockedOn);

      if (_fiber3 !== null) {
        attemptContinuousHydration(_fiber3);
      }

      queuedEvent.blockedOn = nextBlockedOn;
      return false;
    } // This target container was successfully dispatched. Try the next.


    targetContainers.shift();
  }

  return true;
}

function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
  if (attemptReplayContinuousQueuedEvent(queuedEvent)) {
    map.delete(key);
  }
}

function replayUnblockedEvents() {
  hasScheduledReplayAttempt = false; // First replay discrete events.

  while (queuedDiscreteEvents.length > 0) {
    var nextDiscreteEvent = queuedDiscreteEvents[0];

    if (nextDiscreteEvent.blockedOn !== null) {
      // We're still blocked.
      // Increase the priority of this boundary to unblock
      // the next discrete event.
      var _fiber4 = getInstanceFromNode(nextDiscreteEvent.blockedOn);

      if (_fiber4 !== null) {
        attemptUserBlockingHydration(_fiber4);
      }

      break;
    }

    var targetContainers = nextDiscreteEvent.targetContainers;

    while (targetContainers.length > 0) {
      var targetContainer = targetContainers[0];
      var nextBlockedOn = attemptToDispatchEvent(nextDiscreteEvent.domEventName, nextDiscreteEvent.eventSystemFlags, targetContainer, nextDiscreteEvent.nativeEvent);

      if (nextBlockedOn !== null) {
        // We're still blocked. Try again later.
        nextDiscreteEvent.blockedOn = nextBlockedOn;
        break;
      } // This target container was successfully dispatched. Try the next.


      targetContainers.shift();
    }

    if (nextDiscreteEvent.blockedOn === null) {
      // We've successfully replayed the first event. Let's try the next one.
      queuedDiscreteEvents.shift();
    }
  } // Next replay any continuous events.


  if (queuedFocus !== null && attemptReplayContinuousQueuedEvent(queuedFocus)) {
    queuedFocus = null;
  }

  if (queuedDrag !== null && attemptReplayContinuousQueuedEvent(queuedDrag)) {
    queuedDrag = null;
  }

  if (queuedMouse !== null && attemptReplayContinuousQueuedEvent(queuedMouse)) {
    queuedMouse = null;
  }

  queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
  queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
}

function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
  if (queuedEvent.blockedOn === unblocked) {
    queuedEvent.blockedOn = null;

    if (!hasScheduledReplayAttempt) {
      hasScheduledReplayAttempt = true; // Schedule a callback to attempt replaying as many events as are
      // now unblocked. This first might not actually be unblocked yet.
      // We could check it early to avoid scheduling an unnecessary callback.

      Scheduler.unstable_scheduleCallback(Scheduler.unstable_NormalPriority, replayUnblockedEvents);
    }
  }
}

function retryIfBlockedOn(unblocked) {
  // Mark anything that was blocked on this as no longer blocked
  // and eligible for a replay.
  if (queuedDiscreteEvents.length > 0) {
    scheduleCallbackIfUnblocked(queuedDiscreteEvents[0], unblocked); // This is a exponential search for each boundary that commits. I think it's
    // worth it because we expect very few discrete events to queue up and once
    // we are actually fully unblocked it will be fast to replay them.

    for (var i = 1; i < queuedDiscreteEvents.length; i++) {
      var queuedEvent = queuedDiscreteEvents[i];

      if (queuedEvent.blockedOn === unblocked) {
        queuedEvent.blockedOn = null;
      }
    }
  }

  if (queuedFocus !== null) {
    scheduleCallbackIfUnblocked(queuedFocus, unblocked);
  }

  if (queuedDrag !== null) {
    scheduleCallbackIfUnblocked(queuedDrag, unblocked);
  }

  if (queuedMouse !== null) {
    scheduleCallbackIfUnblocked(queuedMouse, unblocked);
  }

  var unblock = function (queuedEvent) {
    return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
  };

  queuedPointers.forEach(unblock);
  queuedPointerCaptures.forEach(unblock);

  for (var _i = 0; _i < queuedExplicitHydrationTargets.length; _i++) {
    var queuedTarget = queuedExplicitHydrationTargets[_i];

    if (queuedTarget.blockedOn === unblocked) {
      queuedTarget.blockedOn = null;
    }
  }

  while (queuedExplicitHydrationTargets.length > 0) {
    var nextExplicitTarget = queuedExplicitHydrationTargets[0];

    if (nextExplicitTarget.blockedOn !== null) {
      // We're still blocked.
      break;
    } else {
      attemptExplicitHydrationTarget(nextExplicitTarget);

      if (nextExplicitTarget.blockedOn === null) {
        // We're unblocked.
        queuedExplicitHydrationTargets.shift();
      }
    }
  }
}

var DiscreteEvent = 0;
var UserBlockingEvent = 1;
var ContinuousEvent = 2;

/**
 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
 *
 * @param {string} styleProp
 * @param {string} eventName
 * @returns {object}
 */

function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes['Webkit' + styleProp] = 'webkit' + eventName;
  prefixes['Moz' + styleProp] = 'moz' + eventName;
  return prefixes;
}
/**
 * A list of event names to a configurable list of vendor prefixes.
 */


var vendorPrefixes = {
  animationend: makePrefixMap('Animation', 'AnimationEnd'),
  animationiteration: makePrefixMap('Animation', 'AnimationIteration'),
  animationstart: makePrefixMap('Animation', 'AnimationStart'),
  transitionend: makePrefixMap('Transition', 'TransitionEnd')
};
/**
 * Event names that have already been detected and prefixed (if applicable).
 */

var prefixedEventNames = {};
/**
 * Element to check for prefixes on.
 */

var style = {};
/**
 * Bootstrap if a DOM exists.
 */

if (canUseDOM) {
  style = document.createElement('div').style; // On some platforms, in particular some releases of Android 4.x,
  // the un-prefixed "animation" and "transition" properties are defined on the
  // style object but the events that fire will still be prefixed, so we need
  // to check if the un-prefixed events are usable, and if not remove them from the map.

  if (!('AnimationEvent' in window)) {
    delete vendorPrefixes.animationend.animation;
    delete vendorPrefixes.animationiteration.animation;
    delete vendorPrefixes.animationstart.animation;
  } // Same as above


  if (!('TransitionEvent' in window)) {
    delete vendorPrefixes.transitionend.transition;
  }
}
/**
 * Attempts to determine the correct vendor prefixed event name.
 *
 * @param {string} eventName
 * @returns {string}
 */


function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  } else if (!vendorPrefixes[eventName]) {
    return eventName;
  }

  var prefixMap = vendorPrefixes[eventName];

  for (var styleProp in prefixMap) {
    if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) {
      return prefixedEventNames[eventName] = prefixMap[styleProp];
    }
  }

  return eventName;
}

var ANIMATION_END = getVendorPrefixedEventName('animationend');
var ANIMATION_ITERATION = getVendorPrefixedEventName('animationiteration');
var ANIMATION_START = getVendorPrefixedEventName('animationstart');
var TRANSITION_END = getVendorPrefixedEventName('transitionend');

var topLevelEventsToReactNames = new Map();
var eventPriorities = new Map(); // We store most of the events in this module in pairs of two strings so we can re-use
// the code required to apply the same logic for event prioritization and that of the
// SimpleEventPlugin. This complicates things slightly, but the aim is to reduce code
// duplication (for which there would be quite a bit). For the events that are not needed
// for the SimpleEventPlugin (otherDiscreteEvents) we process them separately as an
// array of top level events.
// Lastly, we ignore prettier so we can keep the formatting sane.
// prettier-ignore

var discreteEventPairsForSimpleEventPlugin = ['cancel', 'cancel', 'click', 'click', 'close', 'close', 'contextmenu', 'contextMenu', 'copy', 'copy', 'cut', 'cut', 'auxclick', 'auxClick', 'dblclick', 'doubleClick', // Careful!
'dragend', 'dragEnd', 'dragstart', 'dragStart', 'drop', 'drop', 'focusin', 'focus', // Careful!
'focusout', 'blur', // Careful!
'input', 'input', 'invalid', 'invalid', 'keydown', 'keyDown', 'keypress', 'keyPress', 'keyup', 'keyUp', 'mousedown', 'mouseDown', 'mouseup', 'mouseUp', 'paste', 'paste', 'pause', 'pause', 'play', 'play', 'pointercancel', 'pointerCancel', 'pointerdown', 'pointerDown', 'pointerup', 'pointerUp', 'ratechange', 'rateChange', 'reset', 'reset', 'seeked', 'seeked', 'submit', 'submit', 'touchcancel', 'touchCancel', 'touchend', 'touchEnd', 'touchstart', 'touchStart', 'volumechange', 'volumeChange'];
var otherDiscreteEvents = ['change', 'selectionchange', 'textInput', 'compositionstart', 'compositionend', 'compositionupdate'];


var userBlockingPairsForSimpleEventPlugin = ['drag', 'drag', 'dragenter', 'dragEnter', 'dragexit', 'dragExit', 'dragleave', 'dragLeave', 'dragover', 'dragOver', 'mousemove', 'mouseMove', 'mouseout', 'mouseOut', 'mouseover', 'mouseOver', 'pointermove', 'pointerMove', 'pointerout', 'pointerOut', 'pointerover', 'pointerOver', 'scroll', 'scroll', 'toggle', 'toggle', 'touchmove', 'touchMove', 'wheel', 'wheel']; // prettier-ignore

var continuousPairsForSimpleEventPlugin = ['abort', 'abort', ANIMATION_END, 'animationEnd', ANIMATION_ITERATION, 'animationIteration', ANIMATION_START, 'animationStart', 'canplay', 'canPlay', 'canplaythrough', 'canPlayThrough', 'durationchange', 'durationChange', 'emptied', 'emptied', 'encrypted', 'encrypted', 'ended', 'ended', 'error', 'error', 'gotpointercapture', 'gotPointerCapture', 'load', 'load', 'loadeddata', 'loadedData', 'loadedmetadata', 'loadedMetadata', 'loadstart', 'loadStart', 'lostpointercapture', 'lostPointerCapture', 'playing', 'playing', 'progress', 'progress', 'seeking', 'seeking', 'stalled', 'stalled', 'suspend', 'suspend', 'timeupdate', 'timeUpdate', TRANSITION_END, 'transitionEnd', 'waiting', 'waiting'];
/**
 * Turns
 * ['abort', ...]
 *
 * into
 *
 * topLevelEventsToReactNames = new Map([
 *   ['abort', 'onAbort'],
 * ]);
 *
 * and registers them.
 */

function registerSimplePluginEventsAndSetTheirPriorities(eventTypes, priority) {
  // As the event types are in pairs of two, we need to iterate
  // through in twos. The events are in pairs of two to save code
  // and improve init perf of processing this array, as it will
  // result in far fewer object allocations and property accesses
  // if we only use three arrays to process all the categories of
  // instead of tuples.
  for (var i = 0; i < eventTypes.length; i += 2) {
    var topEvent = eventTypes[i];
    var event = eventTypes[i + 1];
    var capitalizedEvent = event[0].toUpperCase() + event.slice(1);
    var reactName = 'on' + capitalizedEvent;
    eventPriorities.set(topEvent, priority);
    topLevelEventsToReactNames.set(topEvent, reactName);
    registerTwoPhaseEvent(reactName, [topEvent]);
  }
}

function setEventPriorities(eventTypes, priority) {
  for (var i = 0; i < eventTypes.length; i++) {
    eventPriorities.set(eventTypes[i], priority);
  }
}

function getEventPriorityForPluginSystem(domEventName) {
  var priority = eventPriorities.get(domEventName); // Default to a ContinuousEvent. Note: we might
  // want to warn if we can't detect the priority
  // for the event.

  return priority === undefined ? ContinuousEvent : priority;
}
function registerSimpleEvents() {
  registerSimplePluginEventsAndSetTheirPriorities(discreteEventPairsForSimpleEventPlugin, DiscreteEvent);
  registerSimplePluginEventsAndSetTheirPriorities(userBlockingPairsForSimpleEventPlugin, UserBlockingEvent);
  registerSimplePluginEventsAndSetTheirPriorities(continuousPairsForSimpleEventPlugin, ContinuousEvent);
  setEventPriorities(otherDiscreteEvents, DiscreteEvent);
}

var Scheduler_now = Scheduler.unstable_now;

{
  // Provide explicit error message when production+profiling bundle of e.g.
  // react-dom is used with production (non-profiling) bundle of
  // scheduler/tracing
  if (!(tracing.__interactionsRef != null && tracing.__interactionsRef.current != null)) {
    {
      throw Error( "It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling" );
    }
  }
}
// ascending numbers so we can compare them like numbers. They start at 90 to
// avoid clashing with Scheduler's priorities.

var ImmediatePriority = 99;
var UserBlockingPriority = 98;
var NormalPriority = 97;
var LowPriority = 96;
var IdlePriority = 95; // NoPriority is the absence of priority. Also React-only.

var NoPriority = 90;
var initialTimeMs = Scheduler_now(); // If the initial timestamp is reasonably small, use Scheduler's `now` directly.

var SyncLanePriority = 15;
var SyncBatchedLanePriority = 14;
var InputDiscreteHydrationLanePriority = 13;
var InputDiscreteLanePriority = 12;
var InputContinuousHydrationLanePriority = 11;
var InputContinuousLanePriority = 10;
var DefaultHydrationLanePriority = 9;
var DefaultLanePriority = 8;
var TransitionHydrationPriority = 7;
var TransitionPriority = 6;
var RetryLanePriority = 5;
var SelectiveHydrationLanePriority = 4;
var IdleHydrationLanePriority = 3;
var IdleLanePriority = 2;
var OffscreenLanePriority = 1;
var NoLanePriority = 0;
var TotalLanes = 31;
var NoLanes =
/*                        */
0;
var NoLane =
/*                          */
0;
var SyncLane =
/*                        */
1;
var SyncBatchedLane =
/*                 */
2;
var InputDiscreteHydrationLane =
/*      */
4;
var InputDiscreteLanes =
/*                    */
24;
var InputContinuousHydrationLane =
/*           */
32;
var InputContinuousLanes =
/*                  */
192;
var DefaultHydrationLane =
/*            */
256;
var DefaultLanes =
/*                   */
3584;
var TransitionHydrationLane =
/*                */
4096;
var TransitionLanes =
/*                       */
4186112;
var RetryLanes =
/*                            */
62914560;
var SomeRetryLane =
/*                  */
33554432;
var SelectiveHydrationLane =
/*          */
67108864;
var NonIdleLanes =
/*                                 */
134217727;
var IdleHydrationLane =
/*               */
134217728;
var IdleLanes =
/*                             */
805306368;
var OffscreenLane =
/*                   */
1073741824;
var NoTimestamp = -1;
function setCurrentUpdateLanePriority(newLanePriority) {
} // "Registers" used to "return" multiple values
// Used by getHighestPriorityLanes and getNextLanes:

var return_highestLanePriority = DefaultLanePriority;

function getHighestPriorityLanes(lanes) {
  if ((SyncLane & lanes) !== NoLanes) {
    return_highestLanePriority = SyncLanePriority;
    return SyncLane;
  }

  if ((SyncBatchedLane & lanes) !== NoLanes) {
    return_highestLanePriority = SyncBatchedLanePriority;
    return SyncBatchedLane;
  }

  if ((InputDiscreteHydrationLane & lanes) !== NoLanes) {
    return_highestLanePriority = InputDiscreteHydrationLanePriority;
    return InputDiscreteHydrationLane;
  }

  var inputDiscreteLanes = InputDiscreteLanes & lanes;

  if (inputDiscreteLanes !== NoLanes) {
    return_highestLanePriority = InputDiscreteLanePriority;
    return inputDiscreteLanes;
  }

  if ((lanes & InputContinuousHydrationLane) !== NoLanes) {
    return_highestLanePriority = InputContinuousHydrationLanePriority;
    return InputContinuousHydrationLane;
  }

  var inputContinuousLanes = InputContinuousLanes & lanes;

  if (inputContinuousLanes !== NoLanes) {
    return_highestLanePriority = InputContinuousLanePriority;
    return inputContinuousLanes;
  }

  if ((lanes & DefaultHydrationLane) !== NoLanes) {
    return_highestLanePriority = DefaultHydrationLanePriority;
    return DefaultHydrationLane;
  }

  var defaultLanes = DefaultLanes & lanes;

  if (defaultLanes !== NoLanes) {
    return_highestLanePriority = DefaultLanePriority;
    return defaultLanes;
  }

  if ((lanes & TransitionHydrationLane) !== NoLanes) {
    return_highestLanePriority = TransitionHydrationPriority;
    return TransitionHydrationLane;
  }

  var transitionLanes = TransitionLanes & lanes;

  if (transitionLanes !== NoLanes) {
    return_highestLanePriority = TransitionPriority;
    return transitionLanes;
  }

  var retryLanes = RetryLanes & lanes;

  if (retryLanes !== NoLanes) {
    return_highestLanePriority = RetryLanePriority;
    return retryLanes;
  }

  if (lanes & SelectiveHydrationLane) {
    return_highestLanePriority = SelectiveHydrationLanePriority;
    return SelectiveHydrationLane;
  }

  if ((lanes & IdleHydrationLane) !== NoLanes) {
    return_highestLanePriority = IdleHydrationLanePriority;
    return IdleHydrationLane;
  }

  var idleLanes = IdleLanes & lanes;

  if (idleLanes !== NoLanes) {
    return_highestLanePriority = IdleLanePriority;
    return idleLanes;
  }

  if ((OffscreenLane & lanes) !== NoLanes) {
    return_highestLanePriority = OffscreenLanePriority;
    return OffscreenLane;
  }

  {
    error('Should have found matching lanes. This is a bug in React.');
  } // This shouldn't be reachable, but as a fallback, return the entire bitmask.


  return_highestLanePriority = DefaultLanePriority;
  return lanes;
}

function schedulerPriorityToLanePriority(schedulerPriorityLevel) {
  switch (schedulerPriorityLevel) {
    case ImmediatePriority:
      return SyncLanePriority;

    case UserBlockingPriority:
      return InputContinuousLanePriority;

    case NormalPriority:
    case LowPriority:
      // TODO: Handle LowSchedulerPriority, somehow. Maybe the same lane as hydration.
      return DefaultLanePriority;

    case IdlePriority:
      return IdleLanePriority;

    default:
      return NoLanePriority;
  }
}
function lanePriorityToSchedulerPriority(lanePriority) {
  switch (lanePriority) {
    case SyncLanePriority:
    case SyncBatchedLanePriority:
      return ImmediatePriority;

    case InputDiscreteHydrationLanePriority:
    case InputDiscreteLanePriority:
    case InputContinuousHydrationLanePriority:
    case InputContinuousLanePriority:
      return UserBlockingPriority;

    case DefaultHydrationLanePriority:
    case DefaultLanePriority:
    case TransitionHydrationPriority:
    case TransitionPriority:
    case SelectiveHydrationLanePriority:
    case RetryLanePriority:
      return NormalPriority;

    case IdleHydrationLanePriority:
    case IdleLanePriority:
    case OffscreenLanePriority:
      return IdlePriority;

    case NoLanePriority:
      return NoPriority;

    default:
      {
        {
          throw Error( "Invalid update priority: " + lanePriority + ". This is a bug in React." );
        }
      }

  }
}
function getNextLanes(root, wipLanes) {
  // Early bailout if there's no pending work left.
  var pendingLanes = root.pendingLanes;

  if (pendingLanes === NoLanes) {
    return_highestLanePriority = NoLanePriority;
    return NoLanes;
  }

  var nextLanes = NoLanes;
  var nextLanePriority = NoLanePriority;
  var expiredLanes = root.expiredLanes;
  var suspendedLanes = root.suspendedLanes;
  var pingedLanes = root.pingedLanes; // Check if any work has expired.

  if (expiredLanes !== NoLanes) {
    nextLanes = expiredLanes;
    nextLanePriority = return_highestLanePriority = SyncLanePriority;
  } else {
    // Do not work on any idle work until all the non-idle work has finished,
    // even if the work is suspended.
    var nonIdlePendingLanes = pendingLanes & NonIdleLanes;

    if (nonIdlePendingLanes !== NoLanes) {
      var nonIdleUnblockedLanes = nonIdlePendingLanes & ~suspendedLanes;

      if (nonIdleUnblockedLanes !== NoLanes) {
        nextLanes = getHighestPriorityLanes(nonIdleUnblockedLanes);
        nextLanePriority = return_highestLanePriority;
      } else {
        var nonIdlePingedLanes = nonIdlePendingLanes & pingedLanes;

        if (nonIdlePingedLanes !== NoLanes) {
          nextLanes = getHighestPriorityLanes(nonIdlePingedLanes);
          nextLanePriority = return_highestLanePriority;
        }
      }
    } else {
      // The only remaining work is Idle.
      var unblockedLanes = pendingLanes & ~suspendedLanes;

      if (unblockedLanes !== NoLanes) {
        nextLanes = getHighestPriorityLanes(unblockedLanes);
        nextLanePriority = return_highestLanePriority;
      } else {
        if (pingedLanes !== NoLanes) {
          nextLanes = getHighestPriorityLanes(pingedLanes);
          nextLanePriority = return_highestLanePriority;
        }
      }
    }
  }

  if (nextLanes === NoLanes) {
    // This should only be reachable if we're suspended
    // TODO: Consider warning in this path if a fallback timer is not scheduled.
    return NoLanes;
  } // If there are higher priority lanes, we'll include them even if they
  // are suspended.


  nextLanes = pendingLanes & getEqualOrHigherPriorityLanes(nextLanes); // If we're already in the middle of a render, switching lanes will interrupt
  // it and we'll lose our progress. We should only do this if the new lanes are
  // higher priority.

  if (wipLanes !== NoLanes && wipLanes !== nextLanes && // If we already suspended with a delay, then interrupting is fine. Don't
  // bother waiting until the root is complete.
  (wipLanes & suspendedLanes) === NoLanes) {
    getHighestPriorityLanes(wipLanes);
    var wipLanePriority = return_highestLanePriority;

    if (nextLanePriority <= wipLanePriority) {
      return wipLanes;
    } else {
      return_highestLanePriority = nextLanePriority;
    }
  } // Check for entangled lanes and add them to the batch.
  //
  // A lane is said to be entangled with another when it's not allowed to render
  // in a batch that does not also include the other lane. Typically we do this
  // when multiple updates have the same source, and we only want to respond to
  // the most recent event from that source.
  //
  // Note that we apply entanglements *after* checking for partial work above.
  // This means that if a lane is entangled during an interleaved event while
  // it's already rendering, we won't interrupt it. This is intentional, since
  // entanglement is usually "best effort": we'll try our best to render the
  // lanes in the same batch, but it's not worth throwing out partially
  // completed work in order to do it.
  //
  // For those exceptions where entanglement is semantically important, like
  // useMutableSource, we should ensure that there is no partial work at the
  // time we apply the entanglement.


  var entangledLanes = root.entangledLanes;

  if (entangledLanes !== NoLanes) {
    var entanglements = root.entanglements;
    var lanes = nextLanes & entangledLanes;

    while (lanes > 0) {
      var index = pickArbitraryLaneIndex(lanes);
      var lane = 1 << index;
      nextLanes |= entanglements[index];
      lanes &= ~lane;
    }
  }

  return nextLanes;
}
function getMostRecentEventTime(root, lanes) {
  var eventTimes = root.eventTimes;
  var mostRecentEventTime = NoTimestamp;

  while (lanes > 0) {
    var index = pickArbitraryLaneIndex(lanes);
    var lane = 1 << index;
    var eventTime = eventTimes[index];

    if (eventTime > mostRecentEventTime) {
      mostRecentEventTime = eventTime;
    }

    lanes &= ~lane;
  }

  return mostRecentEventTime;
}

function computeExpirationTime(lane, currentTime) {
  // TODO: Expiration heuristic is constant per lane, so could use a map.
  getHighestPriorityLanes(lane);
  var priority = return_highestLanePriority;

  if (priority >= InputContinuousLanePriority) {
    // User interactions should expire slightly more quickly.
    //
    // NOTE: This is set to the corresponding constant as in Scheduler.js. When
    // we made it larger, a product metric in www regressed, suggesting there's
    // a user interaction that's being starved by a series of synchronous
    // updates. If that theory is correct, the proper solution is to fix the
    // starvation. However, this scenario supports the idea that expiration
    // times are an important safeguard when starvation does happen.
    //
    // Also note that, in the case of user input specifically, this will soon no
    // longer be an issue because we plan to make user input synchronous by
    // default (until you enter `startTransition`, of course.)
    //
    // If weren't planning to make these updates synchronous soon anyway, I
    // would probably make this number a configurable parameter.
    return currentTime + 250;
  } else if (priority >= TransitionPriority) {
    return currentTime + 5000;
  } else {
    // Anything idle priority or lower should never expire.
    return NoTimestamp;
  }
}

function markStarvedLanesAsExpired(root, currentTime) {
  // TODO: This gets called every time we yield. We can optimize by storing
  // the earliest expiration time on the root. Then use that to quickly bail out
  // of this function.
  var pendingLanes = root.pendingLanes;
  var suspendedLanes = root.suspendedLanes;
  var pingedLanes = root.pingedLanes;
  var expirationTimes = root.expirationTimes; // Iterate through the pending lanes and check if we've reached their
  // expiration time. If so, we'll assume the update is being starved and mark
  // it as expired to force it to finish.

  var lanes = pendingLanes;

  while (lanes > 0) {
    var index = pickArbitraryLaneIndex(lanes);
    var lane = 1 << index;
    var expirationTime = expirationTimes[index];

    if (expirationTime === NoTimestamp) {
      // Found a pending lane with no expiration time. If it's not suspended, or
      // if it's pinged, assume it's CPU-bound. Compute a new expiration time
      // using the current time.
      if ((lane & suspendedLanes) === NoLanes || (lane & pingedLanes) !== NoLanes) {
        // Assumes timestamps are monotonically increasing.
        expirationTimes[index] = computeExpirationTime(lane, currentTime);
      }
    } else if (expirationTime <= currentTime) {
      // This lane expired
      root.expiredLanes |= lane;
    }

    lanes &= ~lane;
  }
} // This returns the highest priority pending lanes regardless of whether they
function getLanesToRetrySynchronouslyOnError(root) {
  var everythingButOffscreen = root.pendingLanes & ~OffscreenLane;

  if (everythingButOffscreen !== NoLanes) {
    return everythingButOffscreen;
  }

  if (everythingButOffscreen & OffscreenLane) {
    return OffscreenLane;
  }

  return NoLanes;
}
function returnNextLanesPriority() {
  return return_highestLanePriority;
}
function includesNonIdleWork(lanes) {
  return (lanes & NonIdleLanes) !== NoLanes;
}
function includesOnlyRetries(lanes) {
  return (lanes & RetryLanes) === lanes;
}
function includesOnlyTransitions(lanes) {
  return (lanes & TransitionLanes) === lanes;
} // To ensure consistency across multiple updates in the same event, this should
// be a pure function, so that it always returns the same lane for given inputs.

function findUpdateLane(lanePriority, wipLanes) {
  switch (lanePriority) {
    case NoLanePriority:
      break;

    case SyncLanePriority:
      return SyncLane;

    case SyncBatchedLanePriority:
      return SyncBatchedLane;

    case InputDiscreteLanePriority:
      {
        var _lane = pickArbitraryLane(InputDiscreteLanes & ~wipLanes);

        if (_lane === NoLane) {
          // Shift to the next priority level
          return findUpdateLane(InputContinuousLanePriority, wipLanes);
        }

        return _lane;
      }

    case InputContinuousLanePriority:
      {
        var _lane2 = pickArbitraryLane(InputContinuousLanes & ~wipLanes);

        if (_lane2 === NoLane) {
          // Shift to the next priority level
          return findUpdateLane(DefaultLanePriority, wipLanes);
        }

        return _lane2;
      }

    case DefaultLanePriority:
      {
        var _lane3 = pickArbitraryLane(DefaultLanes & ~wipLanes);

        if (_lane3 === NoLane) {
          // If all the default lanes are already being worked on, look for a
          // lane in the transition range.
          _lane3 = pickArbitraryLane(TransitionLanes & ~wipLanes);

          if (_lane3 === NoLane) {
            // All the transition lanes are taken, too. This should be very
            // rare, but as a last resort, pick a default lane. This will have
            // the effect of interrupting the current work-in-progress render.
            _lane3 = pickArbitraryLane(DefaultLanes);
          }
        }

        return _lane3;
      }

    case TransitionPriority: // Should be handled by findTransitionLane instead

    case RetryLanePriority:
      // Should be handled by findRetryLane instead
      break;

    case IdleLanePriority:
      var lane = pickArbitraryLane(IdleLanes & ~wipLanes);

      if (lane === NoLane) {
        lane = pickArbitraryLane(IdleLanes);
      }

      return lane;
  }

  {
    {
      throw Error( "Invalid update priority: " + lanePriority + ". This is a bug in React." );
    }
  }
} // To ensure consistency across multiple updates in the same event, this should
// be pure function, so that it always returns the same lane for given inputs.

function findTransitionLane(wipLanes, pendingLanes) {
  // First look for lanes that are completely unclaimed, i.e. have no
  // pending work.
  var lane = pickArbitraryLane(TransitionLanes & ~pendingLanes);

  if (lane === NoLane) {
    // If all lanes have pending work, look for a lane that isn't currently
    // being worked on.
    lane = pickArbitraryLane(TransitionLanes & ~wipLanes);

    if (lane === NoLane) {
      // If everything is being worked on, pick any lane. This has the
      // effect of interrupting the current work-in-progress.
      lane = pickArbitraryLane(TransitionLanes);
    }
  }

  return lane;
} // To ensure consistency across multiple updates in the same event, this should
// be pure function, so that it always returns the same lane for given inputs.

function findRetryLane(wipLanes) {
  // This is a fork of `findUpdateLane` designed specifically for Suspense
  // "retries" — a special update that attempts to flip a Suspense boundary
  // from its placeholder state to its primary/resolved state.
  var lane = pickArbitraryLane(RetryLanes & ~wipLanes);

  if (lane === NoLane) {
    lane = pickArbitraryLane(RetryLanes);
  }

  return lane;
}

function getHighestPriorityLane(lanes) {
  return lanes & -lanes;
}

function getLowestPriorityLane(lanes) {
  // This finds the most significant non-zero bit.
  var index = 31 - clz32(lanes);
  return index < 0 ? NoLanes : 1 << index;
}

function getEqualOrHigherPriorityLanes(lanes) {
  return (getLowestPriorityLane(lanes) << 1) - 1;
}

function pickArbitraryLane(lanes) {
  // This wrapper function gets inlined. Only exists so to communicate that it
  // doesn't matter which bit is selected; you can pick any bit without
  // affecting the algorithms where its used. Here I'm using
  // getHighestPriorityLane because it requires the fewest operations.
  return getHighestPriorityLane(lanes);
}

function pickArbitraryLaneIndex(lanes) {
  return 31 - clz32(lanes);
}

function laneToIndex(lane) {
  return pickArbitraryLaneIndex(lane);
}

function includesSomeLane(a, b) {
  return (a & b) !== NoLanes;
}
function isSubsetOfLanes(set, subset) {
  return (set & subset) === subset;
}
function mergeLanes(a, b) {
  return a | b;
}
function removeLanes(set, subset) {
  return set & ~subset;
} // Seems redundant, but it changes the type from a single lane (used for
// updates) to a group of lanes (used for flushing work).

function laneToLanes(lane) {
  return lane;
}
function higherPriorityLane(a, b) {
  // This works because the bit ranges decrease in priority as you go left.
  return a !== NoLane && a < b ? a : b;
}
function createLaneMap(initial) {
  // Intentionally pushing one by one.
  // https://v8.dev/blog/elements-kinds#avoid-creating-holes
  var laneMap = [];

  for (var i = 0; i < TotalLanes; i++) {
    laneMap.push(initial);
  }

  return laneMap;
}
function markRootUpdated(root, updateLane, eventTime) {
  root.pendingLanes |= updateLane; // TODO: Theoretically, any update to any lane can unblock any other lane. But
  // it's not practical to try every single possible combination. We need a
  // heuristic to decide which lanes to attempt to render, and in which batches.
  // For now, we use the same heuristic as in the old ExpirationTimes model:
  // retry any lane at equal or lower priority, but don't try updates at higher
  // priority without also including the lower priority updates. This works well
  // when considering updates across different priority levels, but isn't
  // sufficient for updates within the same priority, since we want to treat
  // those updates as parallel.
  // Unsuspend any update at equal or lower priority.

  var higherPriorityLanes = updateLane - 1; // Turns 0b1000 into 0b0111

  root.suspendedLanes &= higherPriorityLanes;
  root.pingedLanes &= higherPriorityLanes;
  var eventTimes = root.eventTimes;
  var index = laneToIndex(updateLane); // We can always overwrite an existing timestamp because we prefer the most
  // recent event, and we assume time is monotonically increasing.

  eventTimes[index] = eventTime;
}
function markRootSuspended(root, suspendedLanes) {
  root.suspendedLanes |= suspendedLanes;
  root.pingedLanes &= ~suspendedLanes; // The suspended lanes are no longer CPU-bound. Clear their expiration times.

  var expirationTimes = root.expirationTimes;
  var lanes = suspendedLanes;

  while (lanes > 0) {
    var index = pickArbitraryLaneIndex(lanes);
    var lane = 1 << index;
    expirationTimes[index] = NoTimestamp;
    lanes &= ~lane;
  }
}
function markRootPinged(root, pingedLanes, eventTime) {
  root.pingedLanes |= root.suspendedLanes & pingedLanes;
}
function markDiscreteUpdatesExpired(root) {
  root.expiredLanes |= InputDiscreteLanes & root.pendingLanes;
}
function hasDiscreteLanes(lanes) {
  return (lanes & InputDiscreteLanes) !== NoLanes;
}
function markRootMutableRead(root, updateLane) {
  root.mutableReadLanes |= updateLane & root.pendingLanes;
}
function markRootFinished(root, remainingLanes) {
  var noLongerPendingLanes = root.pendingLanes & ~remainingLanes;
  root.pendingLanes = remainingLanes; // Let's try everything again

  root.suspendedLanes = 0;
  root.pingedLanes = 0;
  root.expiredLanes &= remainingLanes;
  root.mutableReadLanes &= remainingLanes;
  root.entangledLanes &= remainingLanes;
  var entanglements = root.entanglements;
  var eventTimes = root.eventTimes;
  var expirationTimes = root.expirationTimes; // Clear the lanes that no longer have pending work

  var lanes = noLongerPendingLanes;

  while (lanes > 0) {
    var index = pickArbitraryLaneIndex(lanes);
    var lane = 1 << index;
    entanglements[index] = NoLanes;
    eventTimes[index] = NoTimestamp;
    expirationTimes[index] = NoTimestamp;
    lanes &= ~lane;
  }
}
function markRootEntangled(root, entangledLanes) {
  root.entangledLanes |= entangledLanes;
  var entanglements = root.entanglements;
  var lanes = entangledLanes;

  while (lanes > 0) {
    var index = pickArbitraryLaneIndex(lanes);
    var lane = 1 << index;
    entanglements[index] |= entangledLanes;
    lanes &= ~lane;
  }
}
var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback; // Count leading zeros. Only used on lanes, so assume input is an integer.
// Based on:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

var log = Math.log;
var LN2 = Math.LN2;

function clz32Fallback(lanes) {
  if (lanes === 0) {
    return 32;
  }

  return 31 - (log(lanes) / LN2 | 0) | 0;
}

// Intentionally not named imports because Rollup would use dynamic dispatch for
var UserBlockingPriority$1 = Scheduler.unstable_UserBlockingPriority,
    runWithPriority = Scheduler.unstable_runWithPriority; // TODO: can we stop exporting these?

var _enabled = true; // This is exported in FB builds for use by legacy FB layer infra.
// We'd like to remove this but it's not clear if this is safe.

function setEnabled(enabled) {
  _enabled = !!enabled;
}
function isEnabled() {
  return _enabled;
}
function createEventListenerWrapperWithPriority(targetContainer, domEventName, eventSystemFlags) {
  var eventPriority = getEventPriorityForPluginSystem(domEventName);
  var listenerWrapper;

  switch (eventPriority) {
    case DiscreteEvent:
      listenerWrapper = dispatchDiscreteEvent;
      break;

    case UserBlockingEvent:
      listenerWrapper = dispatchUserBlockingUpdate;
      break;

    case ContinuousEvent:
    default:
      listenerWrapper = dispatchEvent;
      break;
  }

  return listenerWrapper.bind(null, domEventName, eventSystemFlags, targetContainer);
}

function dispatchDiscreteEvent(domEventName, eventSystemFlags, container, nativeEvent) {
  {
    flushDiscreteUpdatesIfNeeded(nativeEvent.timeStamp);
  }

  discreteUpdates(dispatchEvent, domEventName, eventSystemFlags, container, nativeEvent);
}

function dispatchUserBlockingUpdate(domEventName, eventSystemFlags, container, nativeEvent) {
  {
    runWithPriority(UserBlockingPriority$1, dispatchEvent.bind(null, domEventName, eventSystemFlags, container, nativeEvent));
  }
}

function dispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
  if (!_enabled) {
    return;
  }

  var allowReplay = true;

  {
    // TODO: replaying capture phase events is currently broken
    // because we used to do it during top-level native bubble handlers
    // but now we use different bubble and capture handlers.
    // In eager mode, we attach capture listeners early, so we need
    // to filter them out until we fix the logic to handle them correctly.
    // This could've been outside the flag but I put it inside to reduce risk.
    allowReplay = (eventSystemFlags & IS_CAPTURE_PHASE) === 0;
  }

  if (allowReplay && hasQueuedDiscreteEvents() && isReplayableDiscreteEvent(domEventName)) {
    // If we already have a queue of discrete events, and this is another discrete
    // event, then we can't dispatch it regardless of its target, since they
    // need to dispatch in order.
    queueDiscreteEvent(null, // Flags that we're not actually blocked on anything as far as we know.
    domEventName, eventSystemFlags, targetContainer, nativeEvent);
    return;
  }

  var blockedOn = attemptToDispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent);

  if (blockedOn === null) {
    // We successfully dispatched this event.
    if (allowReplay) {
      clearIfContinuousEvent(domEventName, nativeEvent);
    }

    return;
  }

  if (allowReplay) {
    if (isReplayableDiscreteEvent(domEventName)) {
      // This this to be replayed later once the target is available.
      queueDiscreteEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent);
      return;
    }

    if (queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent)) {
      return;
    } // We need to clear only if we didn't queue because
    // queueing is accummulative.


    clearIfContinuousEvent(domEventName, nativeEvent);
  } // This is not replayable so we'll invoke it but without a target,
  // in case the event system needs to trace it.


  dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, null, targetContainer);
} // Attempt dispatching an event. Returns a SuspenseInstance or Container if it's blocked.

function attemptToDispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
  // TODO: Warn if _enabled is false.
  var nativeEventTarget = getEventTarget(nativeEvent);
  var targetInst = getClosestInstanceFromNode(nativeEventTarget);

  if (targetInst !== null) {
    var nearestMounted = getNearestMountedFiber(targetInst);

    if (nearestMounted === null) {
      // This tree has been unmounted already. Dispatch without a target.
      targetInst = null;
    } else {
      var tag = nearestMounted.tag;

      if (tag === SuspenseComponent) {
        var instance = getSuspenseInstanceFromFiber(nearestMounted);

        if (instance !== null) {
          // Queue the event to be replayed later. Abort dispatching since we
          // don't want this event dispatched twice through the event system.
          // TODO: If this is the first discrete event in the queue. Schedule an increased
          // priority for this boundary.
          return instance;
        } // This shouldn't happen, something went wrong but to avoid blocking
        // the whole system, dispatch the event without a target.
        // TODO: Warn.


        targetInst = null;
      } else if (tag === HostRoot) {
        var root = nearestMounted.stateNode;

        if (root.hydrate) {
          // If this happens during a replay something went wrong and it might block
          // the whole system.
          return getContainerFromFiber(nearestMounted);
        }

        targetInst = null;
      } else if (nearestMounted !== targetInst) {
        // If we get an event (ex: img onload) before committing that
        // component's mount, ignore it for now (that is, treat it as if it was an
        // event on a non-React tree). We might also consider queueing events and
        // dispatching them after the mount.
        targetInst = null;
      }
    }
  }

  dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, targetInst, targetContainer); // We're not blocked on anything.

  return null;
}

function addEventBubbleListener(target, eventType, listener) {
  target.addEventListener(eventType, listener, false);
  return listener;
}
function addEventCaptureListener(target, eventType, listener) {
  target.addEventListener(eventType, listener, true);
  return listener;
}
function addEventCaptureListenerWithPassiveFlag(target, eventType, listener, passive) {
  target.addEventListener(eventType, listener, {
    capture: true,
    passive: passive
  });
  return listener;
}
function addEventBubbleListenerWithPassiveFlag(target, eventType, listener, passive) {
  target.addEventListener(eventType, listener, {
    passive: passive
  });
  return listener;
}

/**
 * These variables store information about text content of a target node,
 * allowing comparison of content before and after a given event.
 *
 * Identify the node where selection currently begins, then observe
 * both its text content and its current position in the DOM. Since the
 * browser may natively replace the target node during composition, we can
 * use its position to find its replacement.
 *
 *
 */
var root = null;
var startText = null;
var fallbackText = null;
function initialize(nativeEventTarget) {
  root = nativeEventTarget;
  startText = getText();
  return true;
}
function reset() {
  root = null;
  startText = null;
  fallbackText = null;
}
function getData() {
  if (fallbackText) {
    return fallbackText;
  }

  var start;
  var startValue = startText;
  var startLength = startValue.length;
  var end;
  var endValue = getText();
  var endLength = endValue.length;

  for (start = 0; start < startLength; start++) {
    if (startValue[start] !== endValue[start]) {
      break;
    }
  }

  var minEnd = startLength - start;

  for (end = 1; end <= minEnd; end++) {
    if (startValue[startLength - end] !== endValue[endLength - end]) {
      break;
    }
  }

  var sliceTail = end > 1 ? 1 - end : undefined;
  fallbackText = endValue.slice(start, sliceTail);
  return fallbackText;
}
function getText() {
  if ('value' in root) {
    return root.value;
  }

  return root.textContent;
}

/**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {number} Normalized `charCode` property.
 */
function getEventCharCode(nativeEvent) {
  var charCode;
  var keyCode = nativeEvent.keyCode;

  if ('charCode' in nativeEvent) {
    charCode = nativeEvent.charCode; // FF does not set `charCode` for the Enter-key, check against `keyCode`.

    if (charCode === 0 && keyCode === 13) {
      charCode = 13;
    }
  } else {
    // IE8 does not implement `charCode`, but `keyCode` has the correct value.
    charCode = keyCode;
  } // IE and Edge (on Windows) and Chrome / Safari (on Windows and Linux)
  // report Enter as charCode 10 when ctrl is pressed.


  if (charCode === 10) {
    charCode = 13;
  } // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
  // Must not discard the (non-)printable Enter-key.


  if (charCode >= 32 || charCode === 13) {
    return charCode;
  }

  return 0;
}

function functionThatReturnsTrue() {
  return true;
}

function functionThatReturnsFalse() {
  return false;
} // This is intentionally a factory so that we have different returned constructors.
// If we had a single constructor, it would be megamorphic and engines would deopt.


function createSyntheticEvent(Interface) {
  /**
   * Synthetic events are dispatched by event plugins, typically in response to a
   * top-level event delegation handler.
   *
   * These systems should generally use pooling to reduce the frequency of garbage
   * collection. The system should check `isPersistent` to determine whether the
   * event should be released into the pool after being dispatched. Users that
   * need a persisted event should invoke `persist`.
   *
   * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
   * normalizing browser quirks. Subclasses do not necessarily have to implement a
   * DOM interface; custom application-specific events can also subclass this.
   */
  function SyntheticBaseEvent(reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget) {
    this._reactName = reactName;
    this._targetInst = targetInst;
    this.type = reactEventType;
    this.nativeEvent = nativeEvent;
    this.target = nativeEventTarget;
    this.currentTarget = null;

    for (var _propName in Interface) {
      if (!Interface.hasOwnProperty(_propName)) {
        continue;
      }

      var normalize = Interface[_propName];

      if (normalize) {
        this[_propName] = normalize(nativeEvent);
      } else {
        this[_propName] = nativeEvent[_propName];
      }
    }

    var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;

    if (defaultPrevented) {
      this.isDefaultPrevented = functionThatReturnsTrue;
    } else {
      this.isDefaultPrevented = functionThatReturnsFalse;
    }

    this.isPropagationStopped = functionThatReturnsFalse;
    return this;
  }

  _assign(SyntheticBaseEvent.prototype, {
    preventDefault: function () {
      this.defaultPrevented = true;
      var event = this.nativeEvent;

      if (!event) {
        return;
      }

      if (event.preventDefault) {
        event.preventDefault(); // $FlowFixMe - flow is not aware of `unknown` in IE
      } else if (typeof event.returnValue !== 'unknown') {
        event.returnValue = false;
      }

      this.isDefaultPrevented = functionThatReturnsTrue;
    },
    stopPropagation: function () {
      var event = this.nativeEvent;

      if (!event) {
        return;
      }

      if (event.stopPropagation) {
        event.stopPropagation(); // $FlowFixMe - flow is not aware of `unknown` in IE
      } else if (typeof event.cancelBubble !== 'unknown') {
        // The ChangeEventPlugin registers a "propertychange" event for
        // IE. This event does not support bubbling or cancelling, and
        // any references to cancelBubble throw "Member not found".  A
        // typeof check of "unknown" circumvents this issue (and is also
        // IE specific).
        event.cancelBubble = true;
      }

      this.isPropagationStopped = functionThatReturnsTrue;
    },

    /**
     * We release all dispatched `SyntheticEvent`s after each event loop, adding
     * them back into the pool. This allows a way to hold onto a reference that
     * won't be added back into the pool.
     */
    persist: function () {// Modern event system doesn't use pooling.
    },

    /**
     * Checks if this event should be released back into the pool.
     *
     * @return {boolean} True if this should not be released, false otherwise.
     */
    isPersistent: functionThatReturnsTrue
  });

  return SyntheticBaseEvent;
}
/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */


var EventInterface = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function (event) {
    return event.timeStamp || Date.now();
  },
  defaultPrevented: 0,
  isTrusted: 0
};
var SyntheticEvent = createSyntheticEvent(EventInterface);

var UIEventInterface = _assign({}, EventInterface, {
  view: 0,
  detail: 0
});

var SyntheticUIEvent = createSyntheticEvent(UIEventInterface);
var lastMovementX;
var lastMovementY;
var lastMouseEvent;

function updateMouseMovementPolyfillState(event) {
  if (event !== lastMouseEvent) {
    if (lastMouseEvent && event.type === 'mousemove') {
      lastMovementX = event.screenX - lastMouseEvent.screenX;
      lastMovementY = event.screenY - lastMouseEvent.screenY;
    } else {
      lastMovementX = 0;
      lastMovementY = 0;
    }

    lastMouseEvent = event;
  }
}
/**
 * @interface MouseEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */


var MouseEventInterface = _assign({}, UIEventInterface, {
  screenX: 0,
  screenY: 0,
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  getModifierState: getEventModifierState,
  button: 0,
  buttons: 0,
  relatedTarget: function (event) {
    if (event.relatedTarget === undefined) return event.fromElement === event.srcElement ? event.toElement : event.fromElement;
    return event.relatedTarget;
  },
  movementX: function (event) {
    if ('movementX' in event) {
      return event.movementX;
    }

    updateMouseMovementPolyfillState(event);
    return lastMovementX;
  },
  movementY: function (event) {
    if ('movementY' in event) {
      return event.movementY;
    } // Don't need to call updateMouseMovementPolyfillState() here
    // because it's guaranteed to have already run when movementX
    // was copied.


    return lastMovementY;
  }
});

var SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface);
/**
 * @interface DragEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */

var DragEventInterface = _assign({}, MouseEventInterface, {
  dataTransfer: 0
});

var SyntheticDragEvent = createSyntheticEvent(DragEventInterface);
/**
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */

var FocusEventInterface = _assign({}, UIEventInterface, {
  relatedTarget: 0
});

var SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface);
/**
 * @interface Event
 * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
 */

var AnimationEventInterface = _assign({}, EventInterface, {
  animationName: 0,
  elapsedTime: 0,
  pseudoElement: 0
});

var SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface);
/**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */

var ClipboardEventInterface = _assign({}, EventInterface, {
  clipboardData: function (event) {
    return 'clipboardData' in event ? event.clipboardData : window.clipboardData;
  }
});

var SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface);
/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */

var CompositionEventInterface = _assign({}, EventInterface, {
  data: 0
});

var SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface);
/**
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */
// Happens to share the same list for now.

var SyntheticInputEvent = SyntheticCompositionEvent;
/**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */

var normalizeKey = {
  Esc: 'Escape',
  Spacebar: ' ',
  Left: 'ArrowLeft',
  Up: 'ArrowUp',
  Right: 'ArrowRight',
  Down: 'ArrowDown',
  Del: 'Delete',
  Win: 'OS',
  Menu: 'ContextMenu',
  Apps: 'ContextMenu',
  Scroll: 'ScrollLock',
  MozPrintableKey: 'Unidentified'
};
/**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */

var translateToKey = {
  '8': 'Backspace',
  '9': 'Tab',
  '12': 'Clear',
  '13': 'Enter',
  '16': 'Shift',
  '17': 'Control',
  '18': 'Alt',
  '19': 'Pause',
  '20': 'CapsLock',
  '27': 'Escape',
  '32': ' ',
  '33': 'PageUp',
  '34': 'PageDown',
  '35': 'End',
  '36': 'Home',
  '37': 'ArrowLeft',
  '38': 'ArrowUp',
  '39': 'ArrowRight',
  '40': 'ArrowDown',
  '45': 'Insert',
  '46': 'Delete',
  '112': 'F1',
  '113': 'F2',
  '114': 'F3',
  '115': 'F4',
  '116': 'F5',
  '117': 'F6',
  '118': 'F7',
  '119': 'F8',
  '120': 'F9',
  '121': 'F10',
  '122': 'F11',
  '123': 'F12',
  '144': 'NumLock',
  '145': 'ScrollLock',
  '224': 'Meta'
};
/**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */

function getEventKey(nativeEvent) {
  if (nativeEvent.key) {
    // Normalize inconsistent values reported by browsers due to
    // implementations of a working draft specification.
    // FireFox implements `key` but returns `MozPrintableKey` for all
    // printable characters (normalized to `Unidentified`), ignore it.
    var key = normalizeKey[nativeEvent.key] || nativeEvent.key;

    if (key !== 'Unidentified') {
      return key;
    }
  } // Browser does not implement `key`, polyfill as much of it as we can.


  if (nativeEvent.type === 'keypress') {
    var charCode = getEventCharCode(nativeEvent); // The enter-key is technically both printable and non-printable and can
    // thus be captured by `keypress`, no other non-printable key should.

    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
  }

  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
    // While user keyboard layout determines the actual meaning of each
    // `keyCode` value, almost all function keys have a universal value.
    return translateToKey[nativeEvent.keyCode] || 'Unidentified';
  }

  return '';
}
/**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */


var modifierKeyToProp = {
  Alt: 'altKey',
  Control: 'ctrlKey',
  Meta: 'metaKey',
  Shift: 'shiftKey'
}; // Older browsers (Safari <= 10, iOS Safari <= 10.2) do not support
// getModifierState. If getModifierState is not supported, we map it to a set of
// modifier keys exposed by the event. In this case, Lock-keys are not supported.

function modifierStateGetter(keyArg) {
  var syntheticEvent = this;
  var nativeEvent = syntheticEvent.nativeEvent;

  if (nativeEvent.getModifierState) {
    return nativeEvent.getModifierState(keyArg);
  }

  var keyProp = modifierKeyToProp[keyArg];
  return keyProp ? !!nativeEvent[keyProp] : false;
}

function getEventModifierState(nativeEvent) {
  return modifierStateGetter;
}
/**
 * @interface KeyboardEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */


var KeyboardEventInterface = _assign({}, UIEventInterface, {
  key: getEventKey,
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: getEventModifierState,
  // Legacy Interface
  charCode: function (event) {
    // `charCode` is the result of a KeyPress event and represents the value of
    // the actual printable character.
    // KeyPress is deprecated, but its replacement is not yet final and not
    // implemented in any major browser. Only KeyPress has charCode.
    if (event.type === 'keypress') {
      return getEventCharCode(event);
    }

    return 0;
  },
  keyCode: function (event) {
    // `keyCode` is the result of a KeyDown/Up event and represents the value of
    // physical keyboard key.
    // The actual meaning of the value depends on the users' keyboard layout
    // which cannot be detected. Assuming that it is a US keyboard layout
    // provides a surprisingly accurate mapping for US and European users.
    // Due to this, it is left to the user to implement at this time.
    if (event.type === 'keydown' || event.type === 'keyup') {
      return event.keyCode;
    }

    return 0;
  },
  which: function (event) {
    // `which` is an alias for either `keyCode` or `charCode` depending on the
    // type of the event.
    if (event.type === 'keypress') {
      return getEventCharCode(event);
    }

    if (event.type === 'keydown' || event.type === 'keyup') {
      return event.keyCode;
    }

    return 0;
  }
});

var SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface);
/**
 * @interface PointerEvent
 * @see http://www.w3.org/TR/pointerevents/
 */

var PointerEventInterface = _assign({}, MouseEventInterface, {
  pointerId: 0,
  width: 0,
  height: 0,
  pressure: 0,
  tangentialPressure: 0,
  tiltX: 0,
  tiltY: 0,
  twist: 0,
  pointerType: 0,
  isPrimary: 0
});

var SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface);
/**
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */

var TouchEventInterface = _assign({}, UIEventInterface, {
  touches: 0,
  targetTouches: 0,
  changedTouches: 0,
  altKey: 0,
  metaKey: 0,
  ctrlKey: 0,
  shiftKey: 0,
  getModifierState: getEventModifierState
});

var SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface);
/**
 * @interface Event
 * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
 */

var TransitionEventInterface = _assign({}, EventInterface, {
  propertyName: 0,
  elapsedTime: 0,
  pseudoElement: 0
});

var SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface);
/**
 * @interface WheelEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */

var WheelEventInterface = _assign({}, MouseEventInterface, {
  deltaX: function (event) {
    return 'deltaX' in event ? event.deltaX : // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
    'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
  },
  deltaY: function (event) {
    return 'deltaY' in event ? event.deltaY : // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
    'wheelDeltaY' in event ? -event.wheelDeltaY : // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
    'wheelDelta' in event ? -event.wheelDelta : 0;
  },
  deltaZ: 0,
  // Browsers without "deltaMode" is reporting in raw wheel delta where one
  // notch on the scroll is always +/- 120, roughly equivalent to pixels.
  // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
  // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
  deltaMode: 0
});

var SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface);

var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space

var START_KEYCODE = 229;
var canUseCompositionEvent = canUseDOM && 'CompositionEvent' in window;
var documentMode = null;

if (canUseDOM && 'documentMode' in document) {
  documentMode = document.documentMode;
} // Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.


var canUseTextInputEvent = canUseDOM && 'TextEvent' in window && !documentMode; // In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.

var useFallbackCompositionData = canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);
var SPACEBAR_CODE = 32;
var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);

function registerEvents() {
  registerTwoPhaseEvent('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
  registerTwoPhaseEvent('onCompositionEnd', ['compositionend', 'focusout', 'keydown', 'keypress', 'keyup', 'mousedown']);
  registerTwoPhaseEvent('onCompositionStart', ['compositionstart', 'focusout', 'keydown', 'keypress', 'keyup', 'mousedown']);
  registerTwoPhaseEvent('onCompositionUpdate', ['compositionupdate', 'focusout', 'keydown', 'keypress', 'keyup', 'mousedown']);
} // Track whether we've ever handled a keypress on the space key.


var hasSpaceKeypress = false;
/**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */

function isKeypressCommand(nativeEvent) {
  return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
  !(nativeEvent.ctrlKey && nativeEvent.altKey);
}
/**
 * Translate native top level events into event types.
 */


function getCompositionEventType(domEventName) {
  switch (domEventName) {
    case 'compositionstart':
      return 'onCompositionStart';

    case 'compositionend':
      return 'onCompositionEnd';

    case 'compositionupdate':
      return 'onCompositionUpdate';
  }
}
/**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 */


function isFallbackCompositionStart(domEventName, nativeEvent) {
  return domEventName === 'keydown' && nativeEvent.keyCode === START_KEYCODE;
}
/**
 * Does our fallback mode think that this event is the end of composition?
 */


function isFallbackCompositionEnd(domEventName, nativeEvent) {
  switch (domEventName) {
    case 'keyup':
      // Command keys insert or clear IME input.
      return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;

    case 'keydown':
      // Expect IME keyCode on each keydown. If we get any other
      // code we must have exited earlier.
      return nativeEvent.keyCode !== START_KEYCODE;

    case 'keypress':
    case 'mousedown':
    case 'focusout':
      // Events are not possible without cancelling IME.
      return true;

    default:
      return false;
  }
}
/**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 * @param {object} nativeEvent
 * @return {?string}
 */


function getDataFromCustomEvent(nativeEvent) {
  var detail = nativeEvent.detail;

  if (typeof detail === 'object' && 'data' in detail) {
    return detail.data;
  }

  return null;
}
/**
 * Check if a composition event was triggered by Korean IME.
 * Our fallback mode does not work well with IE's Korean IME,
 * so just use native composition events when Korean IME is used.
 * Although CompositionEvent.locale property is deprecated,
 * it is available in IE, where our fallback mode is enabled.
 *
 * @param {object} nativeEvent
 * @return {boolean}
 */


function isUsingKoreanIME(nativeEvent) {
  return nativeEvent.locale === 'ko';
} // Track the current IME composition status, if any.


var isComposing = false;
/**
 * @return {?object} A SyntheticCompositionEvent.
 */

function extractCompositionEvent(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget) {
  var eventType;
  var fallbackData;

  if (canUseCompositionEvent) {
    eventType = getCompositionEventType(domEventName);
  } else if (!isComposing) {
    if (isFallbackCompositionStart(domEventName, nativeEvent)) {
      eventType = 'onCompositionStart';
    }
  } else if (isFallbackCompositionEnd(domEventName, nativeEvent)) {
    eventType = 'onCompositionEnd';
  }

  if (!eventType) {
    return null;
  }

  if (useFallbackCompositionData && !isUsingKoreanIME(nativeEvent)) {
    // The current composition is stored statically and must not be
    // overwritten while composition continues.
    if (!isComposing && eventType === 'onCompositionStart') {
      isComposing = initialize(nativeEventTarget);
    } else if (eventType === 'onCompositionEnd') {
      if (isComposing) {
        fallbackData = getData();
      }
    }
  }

  var listeners = accumulateTwoPhaseListeners(targetInst, eventType);

  if (listeners.length > 0) {
    var event = new SyntheticCompositionEvent(eventType, domEventName, null, nativeEvent, nativeEventTarget);
    dispatchQueue.push({
      event: event,
      listeners: listeners
    });

    if (fallbackData) {
      // Inject data generated from fallback path into the synthetic event.
      // This matches the property of native CompositionEventInterface.
      event.data = fallbackData;
    } else {
      var customData = getDataFromCustomEvent(nativeEvent);

      if (customData !== null) {
        event.data = customData;
      }
    }
  }
}

function getNativeBeforeInputChars(domEventName, nativeEvent) {
  switch (domEventName) {
    case 'compositionend':
      return getDataFromCustomEvent(nativeEvent);

    case 'keypress':
      /**
       * If native `textInput` events are available, our goal is to make
       * use of them. However, there is a special case: the spacebar key.
       * In Webkit, preventing default on a spacebar `textInput` event
       * cancels character insertion, but it *also* causes the browser
       * to fall back to its default spacebar behavior of scrolling the
       * page.
       *
       * Tracking at:
       * https://code.google.com/p/chromium/issues/detail?id=355103
       *
       * To avoid this issue, use the keypress event as if no `textInput`
       * event is available.
       */
      var which = nativeEvent.which;

      if (which !== SPACEBAR_CODE) {
        return null;
      }

      hasSpaceKeypress = true;
      return SPACEBAR_CHAR;

    case 'textInput':
      // Record the characters to be added to the DOM.
      var chars = nativeEvent.data; // If it's a spacebar character, assume that we have already handled
      // it at the keypress level and bail immediately. Android Chrome
      // doesn't give us keycodes, so we need to ignore it.

      if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
        return null;
      }

      return chars;

    default:
      // For other native event types, do nothing.
      return null;
  }
}
/**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 */


function getFallbackBeforeInputChars(domEventName, nativeEvent) {
  // If we are currently composing (IME) and using a fallback to do so,
  // try to extract the composed characters from the fallback object.
  // If composition event is available, we extract a string only at
  // compositionevent, otherwise extract it at fallback events.
  if (isComposing) {
    if (domEventName === 'compositionend' || !canUseCompositionEvent && isFallbackCompositionEnd(domEventName, nativeEvent)) {
      var chars = getData();
      reset();
      isComposing = false;
      return chars;
    }

    return null;
  }

  switch (domEventName) {
    case 'paste':
      // If a paste event occurs after a keypress, throw out the input
      // chars. Paste events should not lead to BeforeInput events.
      return null;

    case 'keypress':
      /**
       * As of v27, Firefox may fire keypress events even when no character
       * will be inserted. A few possibilities:
       *
       * - `which` is `0`. Arrow keys, Esc key, etc.
       *
       * - `which` is the pressed key code, but no char is available.
       *   Ex: 'AltGr + d` in Polish. There is no modified character for
       *   this key combination and no character is inserted into the
       *   document, but FF fires the keypress for char code `100` anyway.
       *   No `input` event will occur.
       *
       * - `which` is the pressed key code, but a command combination is
       *   being used. Ex: `Cmd+C`. No character is inserted, and no
       *   `input` event will occur.
       */
      if (!isKeypressCommand(nativeEvent)) {
        // IE fires the `keypress` event when a user types an emoji via
        // Touch keyboard of Windows.  In such a case, the `char` property
        // holds an emoji character like `\uD83D\uDE0A`.  Because its length
        // is 2, the property `which` does not represent an emoji correctly.
        // In such a case, we directly return the `char` property instead of
        // using `which`.
        if (nativeEvent.char && nativeEvent.char.length > 1) {
          return nativeEvent.char;
        } else if (nativeEvent.which) {
          return String.fromCharCode(nativeEvent.which);
        }
      }

      return null;

    case 'compositionend':
      return useFallbackCompositionData && !isUsingKoreanIME(nativeEvent) ? null : nativeEvent.data;

    default:
      return null;
  }
}
/**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 *
 * @return {?object} A SyntheticInputEvent.
 */


function extractBeforeInputEvent(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget) {
  var chars;

  if (canUseTextInputEvent) {
    chars = getNativeBeforeInputChars(domEventName, nativeEvent);
  } else {
    chars = getFallbackBeforeInputChars(domEventName, nativeEvent);
  } // If no characters are being inserted, no BeforeInput event should
  // be fired.


  if (!chars) {
    return null;
  }

  var listeners = accumulateTwoPhaseListeners(targetInst, 'onBeforeInput');

  if (listeners.length > 0) {
    var event = new SyntheticInputEvent('onBeforeInput', 'beforeinput', null, nativeEvent, nativeEventTarget);
    dispatchQueue.push({
      event: event,
      listeners: listeners
    });
    event.data = chars;
  }
}
/**
 * Create an `onBeforeInput` event to match
 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
 *
 * This event plugin is based on the native `textInput` event
 * available in Chrome, Safari, Opera, and IE. This event fires after
 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
 *
 * `beforeInput` is spec'd but not implemented in any browsers, and
 * the `input` event does not provide any useful information about what has
 * actually been added, contrary to the spec. Thus, `textInput` is the best
 * available event to identify the characters that have actually been inserted
 * into the target node.
 *
 * This plugin is also responsible for emitting `composition` events, thus
 * allowing us to share composition fallback code for both `beforeInput` and
 * `composition` event types.
 */


function extractEvents(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
  extractCompositionEvent(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
  extractBeforeInputEvent(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
}

/**
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
 */
var supportedInputTypes = {
  color: true,
  date: true,
  datetime: true,
  'datetime-local': true,
  email: true,
  month: true,
  number: true,
  password: true,
  range: true,
  search: true,
  tel: true,
  text: true,
  time: true,
  url: true,
  week: true
};

function isTextInputElement(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();

  if (nodeName === 'input') {
    return !!supportedInputTypes[elem.type];
  }

  if (nodeName === 'textarea') {
    return true;
  }

  return false;
}

/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */

function isEventSupported(eventNameSuffix) {
  if (!canUseDOM) {
    return false;
  }

  var eventName = 'on' + eventNameSuffix;
  var isSupported = (eventName in document);

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  return isSupported;
}

function registerEvents$1() {
  registerTwoPhaseEvent('onChange', ['change', 'click', 'focusin', 'focusout', 'input', 'keydown', 'keyup', 'selectionchange']);
}

function createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, target) {
  // Flag this event loop as needing state restore.
  enqueueStateRestore(target);
  var listeners = accumulateTwoPhaseListeners(inst, 'onChange');

  if (listeners.length > 0) {
    var event = new SyntheticEvent('onChange', 'change', null, nativeEvent, target);
    dispatchQueue.push({
      event: event,
      listeners: listeners
    });
  }
}
/**
 * For IE shims
 */


var activeElement = null;
var activeElementInst = null;
/**
 * SECTION: handle `change` event
 */

function shouldUseChangeEvent(elem) {
  var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
  return nodeName === 'select' || nodeName === 'input' && elem.type === 'file';
}

function manualDispatchChangeEvent(nativeEvent) {
  var dispatchQueue = [];
  createAndAccumulateChangeEvent(dispatchQueue, activeElementInst, nativeEvent, getEventTarget(nativeEvent)); // If change and propertychange bubbled, we'd just bind to it like all the
  // other events and have it go through ReactBrowserEventEmitter. Since it
  // doesn't, we manually listen for the events and so we have to enqueue and
  // process the abstract event manually.
  //
  // Batching is necessary here in order to ensure that all event handlers run
  // before the next rerender (including event handlers attached to ancestor
  // elements instead of directly on the input). Without this, controlled
  // components don't work properly in conjunction with event bubbling because
  // the component is rerendered and the value reverted before all the event
  // handlers can run. See https://github.com/facebook/react/issues/708.

  batchedUpdates(runEventInBatch, dispatchQueue);
}

function runEventInBatch(dispatchQueue) {
  processDispatchQueue(dispatchQueue, 0);
}

function getInstIfValueChanged(targetInst) {
  var targetNode = getNodeFromInstance(targetInst);

  if (updateValueIfChanged(targetNode)) {
    return targetInst;
  }
}

function getTargetInstForChangeEvent(domEventName, targetInst) {
  if (domEventName === 'change') {
    return targetInst;
  }
}
/**
 * SECTION: handle `input` event
 */


var isInputEventSupported = false;

if (canUseDOM) {
  // IE9 claims to support the input event but fails to trigger it when
  // deleting text, so we ignore its input events.
  isInputEventSupported = isEventSupported('input') && (!document.documentMode || document.documentMode > 9);
}
/**
 * (For IE <=9) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */


function startWatchingForValueChange(target, targetInst) {
  activeElement = target;
  activeElementInst = targetInst;
  activeElement.attachEvent('onpropertychange', handlePropertyChange);
}
/**
 * (For IE <=9) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */


function stopWatchingForValueChange() {
  if (!activeElement) {
    return;
  }

  activeElement.detachEvent('onpropertychange', handlePropertyChange);
  activeElement = null;
  activeElementInst = null;
}
/**
 * (For IE <=9) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */


function handlePropertyChange(nativeEvent) {
  if (nativeEvent.propertyName !== 'value') {
    return;
  }

  if (getInstIfValueChanged(activeElementInst)) {
    manualDispatchChangeEvent(nativeEvent);
  }
}

function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
  if (domEventName === 'focusin') {
    // In IE9, propertychange fires for most input events but is buggy and
    // doesn't fire when text is deleted, but conveniently, selectionchange
    // appears to fire in all of the remaining cases so we catch those and
    // forward the event if the value has changed
    // In either case, we don't want to call the event handler if the value
    // is changed from JS so we redefine a setter for `.value` that updates
    // our activeElementValue variable, allowing us to ignore those changes
    //
    // stopWatching() should be a noop here but we call it just in case we
    // missed a blur event somehow.
    stopWatchingForValueChange();
    startWatchingForValueChange(target, targetInst);
  } else if (domEventName === 'focusout') {
    stopWatchingForValueChange();
  }
} // For IE8 and IE9.


function getTargetInstForInputEventPolyfill(domEventName, targetInst) {
  if (domEventName === 'selectionchange' || domEventName === 'keyup' || domEventName === 'keydown') {
    // On the selectionchange event, the target is just document which isn't
    // helpful for us so just check activeElement instead.
    //
    // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
    // propertychange on the first input event after setting `value` from a
    // script and fires only keydown, keypress, keyup. Catching keyup usually
    // gets it and catching keydown lets us fire an event for the first
    // keystroke if user does a key repeat (it'll be a little delayed: right
    // before the second keystroke). Other input methods (e.g., paste) seem to
    // fire selectionchange normally.
    return getInstIfValueChanged(activeElementInst);
  }
}
/**
 * SECTION: handle `click` event
 */


function shouldUseClickEvent(elem) {
  // Use the `click` event to detect changes to checkbox and radio inputs.
  // This approach works across all browsers, whereas `change` does not fire
  // until `blur` in IE8.
  var nodeName = elem.nodeName;
  return nodeName && nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio');
}

function getTargetInstForClickEvent(domEventName, targetInst) {
  if (domEventName === 'click') {
    return getInstIfValueChanged(targetInst);
  }
}

function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
  if (domEventName === 'input' || domEventName === 'change') {
    return getInstIfValueChanged(targetInst);
  }
}

function handleControlledInputBlur(node) {
  var state = node._wrapperState;

  if (!state || !state.controlled || node.type !== 'number') {
    return;
  }

  {
    // If controlled, assign the value attribute to the current value on blur
    setDefaultValue(node, 'number', node.value);
  }
}
/**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */


function extractEvents$1(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
  var targetNode = targetInst ? getNodeFromInstance(targetInst) : window;
  var getTargetInstFunc, handleEventFunc;

  if (shouldUseChangeEvent(targetNode)) {
    getTargetInstFunc = getTargetInstForChangeEvent;
  } else if (isTextInputElement(targetNode)) {
    if (isInputEventSupported) {
      getTargetInstFunc = getTargetInstForInputOrChangeEvent;
    } else {
      getTargetInstFunc = getTargetInstForInputEventPolyfill;
      handleEventFunc = handleEventsForInputEventPolyfill;
    }
  } else if (shouldUseClickEvent(targetNode)) {
    getTargetInstFunc = getTargetInstForClickEvent;
  }

  if (getTargetInstFunc) {
    var inst = getTargetInstFunc(domEventName, targetInst);

    if (inst) {
      createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, nativeEventTarget);
      return;
    }
  }

  if (handleEventFunc) {
    handleEventFunc(domEventName, targetNode, targetInst);
  } // When blurring, set the value attribute for number inputs


  if (domEventName === 'focusout') {
    handleControlledInputBlur(targetNode);
  }
}

function registerEvents$2() {
  registerDirectEvent('onMouseEnter', ['mouseout', 'mouseover']);
  registerDirectEvent('onMouseLeave', ['mouseout', 'mouseover']);
  registerDirectEvent('onPointerEnter', ['pointerout', 'pointerover']);
  registerDirectEvent('onPointerLeave', ['pointerout', 'pointerover']);
}
/**
 * For almost every interaction we care about, there will be both a top-level
 * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
 * we do not extract duplicate events. However, moving the mouse into the
 * browser from outside will not fire a `mouseout` event. In this case, we use
 * the `mouseover` top-level event.
 */


function extractEvents$2(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
  var isOverEvent = domEventName === 'mouseover' || domEventName === 'pointerover';
  var isOutEvent = domEventName === 'mouseout' || domEventName === 'pointerout';

  if (isOverEvent && (eventSystemFlags & IS_REPLAYED) === 0) {
    // If this is an over event with a target, we might have already dispatched
    // the event in the out event of the other target. If this is replayed,
    // then it's because we couldn't dispatch against this target previously
    // so we have to do it now instead.
    var related = nativeEvent.relatedTarget || nativeEvent.fromElement;

    if (related) {
      // If the related node is managed by React, we can assume that we have
      // already dispatched the corresponding events during its mouseout.
      if (getClosestInstanceFromNode(related) || isContainerMarkedAsRoot(related)) {
        return;
      }
    }
  }

  if (!isOutEvent && !isOverEvent) {
    // Must not be a mouse or pointer in or out - ignoring.
    return;
  }

  var win; // TODO: why is this nullable in the types but we read from it?

  if (nativeEventTarget.window === nativeEventTarget) {
    // `nativeEventTarget` is probably a window object.
    win = nativeEventTarget;
  } else {
    // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
    var doc = nativeEventTarget.ownerDocument;

    if (doc) {
      win = doc.defaultView || doc.parentWindow;
    } else {
      win = window;
    }
  }

  var from;
  var to;

  if (isOutEvent) {
    var _related = nativeEvent.relatedTarget || nativeEvent.toElement;

    from = targetInst;
    to = _related ? getClosestInstanceFromNode(_related) : null;

    if (to !== null) {
      var nearestMounted = getNearestMountedFiber(to);

      if (to !== nearestMounted || to.tag !== HostComponent && to.tag !== HostText) {
        to = null;
      }
    }
  } else {
    // Moving to a node from outside the window.
    from = null;
    to = targetInst;
  }

  if (from === to) {
    // Nothing pertains to our managed components.
    return;
  }

  var SyntheticEventCtor = SyntheticMouseEvent;
  var leaveEventType = 'onMouseLeave';
  var enterEventType = 'onMouseEnter';
  var eventTypePrefix = 'mouse';

  if (domEventName === 'pointerout' || domEventName === 'pointerover') {
    SyntheticEventCtor = SyntheticPointerEvent;
    leaveEventType = 'onPointerLeave';
    enterEventType = 'onPointerEnter';
    eventTypePrefix = 'pointer';
  }

  var fromNode = from == null ? win : getNodeFromInstance(from);
  var toNode = to == null ? win : getNodeFromInstance(to);
  var leave = new SyntheticEventCtor(leaveEventType, eventTypePrefix + 'leave', from, nativeEvent, nativeEventTarget);
  leave.target = fromNode;
  leave.relatedTarget = toNode;
  var enter = null; // We should only process this nativeEvent if we are processing
  // the first ancestor. Next time, we will ignore the event.

  var nativeTargetInst = getClosestInstanceFromNode(nativeEventTarget);

  if (nativeTargetInst === targetInst) {
    var enterEvent = new SyntheticEventCtor(enterEventType, eventTypePrefix + 'enter', to, nativeEvent, nativeEventTarget);
    enterEvent.target = toNode;
    enterEvent.relatedTarget = fromNode;
    enter = enterEvent;
  }

  accumulateEnterLeaveTwoPhaseListeners(dispatchQueue, leave, enter, from, to);
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */

function shallowEqual(objA, objB) {
  if (objectIs(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty$2.call(objB, keysA[i]) || !objectIs(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */

function getLeafNode(node) {
  while (node && node.firstChild) {
    node = node.firstChild;
  }

  return node;
}
/**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */


function getSiblingNode(node) {
  while (node) {
    if (node.nextSibling) {
      return node.nextSibling;
    }

    node = node.parentNode;
  }
}
/**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */


function getNodeForCharacterOffset(root, offset) {
  var node = getLeafNode(root);
  var nodeStart = 0;
  var nodeEnd = 0;

  while (node) {
    if (node.nodeType === TEXT_NODE) {
      nodeEnd = nodeStart + node.textContent.length;

      if (nodeStart <= offset && nodeEnd >= offset) {
        return {
          node: node,
          offset: offset - nodeStart
        };
      }

      nodeStart = nodeEnd;
    }

    node = getLeafNode(getSiblingNode(node));
  }
}

/**
 * @param {DOMElement} outerNode
 * @return {?object}
 */

function getOffsets(outerNode) {
  var ownerDocument = outerNode.ownerDocument;
  var win = ownerDocument && ownerDocument.defaultView || window;
  var selection = win.getSelection && win.getSelection();

  if (!selection || selection.rangeCount === 0) {
    return null;
  }

  var anchorNode = selection.anchorNode,
      anchorOffset = selection.anchorOffset,
      focusNode = selection.focusNode,
      focusOffset = selection.focusOffset; // In Firefox, anchorNode and focusNode can be "anonymous divs", e.g. the
  // up/down buttons on an <input type="number">. Anonymous divs do not seem to
  // expose properties, triggering a "Permission denied error" if any of its
  // properties are accessed. The only seemingly possible way to avoid erroring
  // is to access a property that typically works for non-anonymous divs and
  // catch any error that may otherwise arise. See
  // https://bugzilla.mozilla.org/show_bug.cgi?id=208427

  try {
    /* eslint-disable no-unused-expressions */
    anchorNode.nodeType;
    focusNode.nodeType;
    /* eslint-enable no-unused-expressions */
  } catch (e) {
    return null;
  }

  return getModernOffsetsFromPoints(outerNode, anchorNode, anchorOffset, focusNode, focusOffset);
}
/**
 * Returns {start, end} where `start` is the character/codepoint index of
 * (anchorNode, anchorOffset) within the textContent of `outerNode`, and
 * `end` is the index of (focusNode, focusOffset).
 *
 * Returns null if you pass in garbage input but we should probably just crash.
 *
 * Exported only for testing.
 */

function getModernOffsetsFromPoints(outerNode, anchorNode, anchorOffset, focusNode, focusOffset) {
  var length = 0;
  var start = -1;
  var end = -1;
  var indexWithinAnchor = 0;
  var indexWithinFocus = 0;
  var node = outerNode;
  var parentNode = null;

  outer: while (true) {
    var next = null;

    while (true) {
      if (node === anchorNode && (anchorOffset === 0 || node.nodeType === TEXT_NODE)) {
        start = length + anchorOffset;
      }

      if (node === focusNode && (focusOffset === 0 || node.nodeType === TEXT_NODE)) {
        end = length + focusOffset;
      }

      if (node.nodeType === TEXT_NODE) {
        length += node.nodeValue.length;
      }

      if ((next = node.firstChild) === null) {
        break;
      } // Moving from `node` to its first child `next`.


      parentNode = node;
      node = next;
    }

    while (true) {
      if (node === outerNode) {
        // If `outerNode` has children, this is always the second time visiting
        // it. If it has no children, this is still the first loop, and the only
        // valid selection is anchorNode and focusNode both equal to this node
        // and both offsets 0, in which case we will have handled above.
        break outer;
      }

      if (parentNode === anchorNode && ++indexWithinAnchor === anchorOffset) {
        start = length;
      }

      if (parentNode === focusNode && ++indexWithinFocus === focusOffset) {
        end = length;
      }

      if ((next = node.nextSibling) !== null) {
        break;
      }

      node = parentNode;
      parentNode = node.parentNode;
    } // Moving from `node` to its next sibling `next`.


    node = next;
  }

  if (start === -1 || end === -1) {
    // This should never happen. (Would happen if the anchor/focus nodes aren't
    // actually inside the passed-in node.)
    return null;
  }

  return {
    start: start,
    end: end
  };
}
/**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programmatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */

function setOffsets(node, offsets) {
  var doc = node.ownerDocument || document;
  var win = doc && doc.defaultView || window; // Edge fails with "Object expected" in some scenarios.
  // (For instance: TinyMCE editor used in a list component that supports pasting to add more,
  // fails when pasting 100+ items)

  if (!win.getSelection) {
    return;
  }

  var selection = win.getSelection();
  var length = node.textContent.length;
  var start = Math.min(offsets.start, length);
  var end = offsets.end === undefined ? start : Math.min(offsets.end, length); // IE 11 uses modern selection, but doesn't support the extend method.
  // Flip backward selections, so we can set with a single range.

  if (!selection.extend && start > end) {
    var temp = end;
    end = start;
    start = temp;
  }

  var startMarker = getNodeForCharacterOffset(node, start);
  var endMarker = getNodeForCharacterOffset(node, end);

  if (startMarker && endMarker) {
    if (selection.rangeCount === 1 && selection.anchorNode === startMarker.node && selection.anchorOffset === startMarker.offset && selection.focusNode === endMarker.node && selection.focusOffset === endMarker.offset) {
      return;
    }

    var range = doc.createRange();
    range.setStart(startMarker.node, startMarker.offset);
    selection.removeAllRanges();

    if (start > end) {
      selection.addRange(range);
      selection.extend(endMarker.node, endMarker.offset);
    } else {
      range.setEnd(endMarker.node, endMarker.offset);
      selection.addRange(range);
    }
  }
}

function isTextNode(node) {
  return node && node.nodeType === TEXT_NODE;
}

function containsNode(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else if (outerNode === innerNode) {
    return true;
  } else if (isTextNode(outerNode)) {
    return false;
  } else if (isTextNode(innerNode)) {
    return containsNode(outerNode, innerNode.parentNode);
  } else if ('contains' in outerNode) {
    return outerNode.contains(innerNode);
  } else if (outerNode.compareDocumentPosition) {
    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
  } else {
    return false;
  }
}

function isInDocument(node) {
  return node && node.ownerDocument && containsNode(node.ownerDocument.documentElement, node);
}

function isSameOriginFrame(iframe) {
  try {
    // Accessing the contentDocument of a HTMLIframeElement can cause the browser
    // to throw, e.g. if it has a cross-origin src attribute.
    // Safari will show an error in the console when the access results in "Blocked a frame with origin". e.g:
    // iframe.contentDocument.defaultView;
    // A safety way is to access one of the cross origin properties: Window or Location
    // Which might result in "SecurityError" DOM Exception and it is compatible to Safari.
    // https://html.spec.whatwg.org/multipage/browsers.html#integration-with-idl
    return typeof iframe.contentWindow.location.href === 'string';
  } catch (err) {
    return false;
  }
}

function getActiveElementDeep() {
  var win = window;
  var element = getActiveElement();

  while (element instanceof win.HTMLIFrameElement) {
    if (isSameOriginFrame(element)) {
      win = element.contentWindow;
    } else {
      return element;
    }

    element = getActiveElement(win.document);
  }

  return element;
}
/**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */

/**
 * @hasSelectionCapabilities: we get the element types that support selection
 * from https://html.spec.whatwg.org/#do-not-apply, looking at `selectionStart`
 * and `selectionEnd` rows.
 */


function hasSelectionCapabilities(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  return nodeName && (nodeName === 'input' && (elem.type === 'text' || elem.type === 'search' || elem.type === 'tel' || elem.type === 'url' || elem.type === 'password') || nodeName === 'textarea' || elem.contentEditable === 'true');
}
function getSelectionInformation() {
  var focusedElem = getActiveElementDeep();
  return {
    focusedElem: focusedElem,
    selectionRange: hasSelectionCapabilities(focusedElem) ? getSelection(focusedElem) : null
  };
}
/**
 * @restoreSelection: If any selection information was potentially lost,
 * restore it. This is useful when performing operations that could remove dom
 * nodes and place them back in, resulting in focus being lost.
 */

function restoreSelection(priorSelectionInformation) {
  var curFocusedElem = getActiveElementDeep();
  var priorFocusedElem = priorSelectionInformation.focusedElem;
  var priorSelectionRange = priorSelectionInformation.selectionRange;

  if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
    if (priorSelectionRange !== null && hasSelectionCapabilities(priorFocusedElem)) {
      setSelection(priorFocusedElem, priorSelectionRange);
    } // Focusing a node can change the scroll position, which is undesirable


    var ancestors = [];
    var ancestor = priorFocusedElem;

    while (ancestor = ancestor.parentNode) {
      if (ancestor.nodeType === ELEMENT_NODE) {
        ancestors.push({
          element: ancestor,
          left: ancestor.scrollLeft,
          top: ancestor.scrollTop
        });
      }
    }

    if (typeof priorFocusedElem.focus === 'function') {
      priorFocusedElem.focus();
    }

    for (var i = 0; i < ancestors.length; i++) {
      var info = ancestors[i];
      info.element.scrollLeft = info.left;
      info.element.scrollTop = info.top;
    }
  }
}
/**
 * @getSelection: Gets the selection bounds of a focused textarea, input or
 * contentEditable node.
 * -@input: Look up selection bounds of this input
 * -@return {start: selectionStart, end: selectionEnd}
 */

function getSelection(input) {
  var selection;

  if ('selectionStart' in input) {
    // Modern browser with input or textarea.
    selection = {
      start: input.selectionStart,
      end: input.selectionEnd
    };
  } else {
    // Content editable or old IE textarea.
    selection = getOffsets(input);
  }

  return selection || {
    start: 0,
    end: 0
  };
}
/**
 * @setSelection: Sets the selection bounds of a textarea or input and focuses
 * the input.
 * -@input     Set selection bounds of this input or textarea
 * -@offsets   Object of same form that is returned from get*
 */

function setSelection(input, offsets) {
  var start = offsets.start;
  var end = offsets.end;

  if (end === undefined) {
    end = start;
  }

  if ('selectionStart' in input) {
    input.selectionStart = start;
    input.selectionEnd = Math.min(end, input.value.length);
  } else {
    setOffsets(input, offsets);
  }
}

var skipSelectionChangeEvent = canUseDOM && 'documentMode' in document && document.documentMode <= 11;

function registerEvents$3() {
  registerTwoPhaseEvent('onSelect', ['focusout', 'contextmenu', 'dragend', 'focusin', 'keydown', 'keyup', 'mousedown', 'mouseup', 'selectionchange']);
}

var activeElement$1 = null;
var activeElementInst$1 = null;
var lastSelection = null;
var mouseDown = false;
/**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 */

function getSelection$1(node) {
  if ('selectionStart' in node && hasSelectionCapabilities(node)) {
    return {
      start: node.selectionStart,
      end: node.selectionEnd
    };
  } else {
    var win = node.ownerDocument && node.ownerDocument.defaultView || window;
    var selection = win.getSelection();
    return {
      anchorNode: selection.anchorNode,
      anchorOffset: selection.anchorOffset,
      focusNode: selection.focusNode,
      focusOffset: selection.focusOffset
    };
  }
}
/**
 * Get document associated with the event target.
 */


function getEventTargetDocument(eventTarget) {
  return eventTarget.window === eventTarget ? eventTarget.document : eventTarget.nodeType === DOCUMENT_NODE ? eventTarget : eventTarget.ownerDocument;
}
/**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @param {object} nativeEventTarget
 * @return {?SyntheticEvent}
 */


function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
  // Ensure we have the right element, and that the user is not dragging a
  // selection (this matches native `select` event behavior). In HTML5, select
  // fires only on input and textarea thus if there's no focused element we
  // won't dispatch.
  var doc = getEventTargetDocument(nativeEventTarget);

  if (mouseDown || activeElement$1 == null || activeElement$1 !== getActiveElement(doc)) {
    return;
  } // Only fire when selection has actually changed.


  var currentSelection = getSelection$1(activeElement$1);

  if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
    lastSelection = currentSelection;
    var listeners = accumulateTwoPhaseListeners(activeElementInst$1, 'onSelect');

    if (listeners.length > 0) {
      var event = new SyntheticEvent('onSelect', 'select', null, nativeEvent, nativeEventTarget);
      dispatchQueue.push({
        event: event,
        listeners: listeners
      });
      event.target = activeElement$1;
    }
  }
}
/**
 * This plugin creates an `onSelect` event that normalizes select events
 * across form elements.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - contentEditable
 *
 * This differs from native browser implementations in the following ways:
 * - Fires on contentEditable fields as well as inputs.
 * - Fires for collapsed selection.
 * - Fires after user input.
 */


function extractEvents$3(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {

  var targetNode = targetInst ? getNodeFromInstance(targetInst) : window;

  switch (domEventName) {
    // Track the input node that has focus.
    case 'focusin':
      if (isTextInputElement(targetNode) || targetNode.contentEditable === 'true') {
        activeElement$1 = targetNode;
        activeElementInst$1 = targetInst;
        lastSelection = null;
      }

      break;

    case 'focusout':
      activeElement$1 = null;
      activeElementInst$1 = null;
      lastSelection = null;
      break;
    // Don't fire the event while the user is dragging. This matches the
    // semantics of the native select event.

    case 'mousedown':
      mouseDown = true;
      break;

    case 'contextmenu':
    case 'mouseup':
    case 'dragend':
      mouseDown = false;
      constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
      break;
    // Chrome and IE fire non-standard event when selection is changed (and
    // sometimes when it hasn't). IE's event fires out of order with respect
    // to key and input events on deletion, so we discard it.
    //
    // Firefox doesn't support selectionchange, so check selection status
    // after each key entry. The selection changes after keydown and before
    // keyup, but we check on keydown as well in the case of holding down a
    // key, when multiple keydown events are fired but only one keyup is.
    // This is also our approach for IE handling, for the reason above.

    case 'selectionchange':
      if (skipSelectionChangeEvent) {
        break;
      }

    // falls through

    case 'keydown':
    case 'keyup':
      constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
  }
}

function extractEvents$4(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
  var reactName = topLevelEventsToReactNames.get(domEventName);

  if (reactName === undefined) {
    return;
  }

  var SyntheticEventCtor = SyntheticEvent;
  var reactEventType = domEventName;

  switch (domEventName) {
    case 'keypress':
      // Firefox creates a keypress event for function keys too. This removes
      // the unwanted keypress events. Enter is however both printable and
      // non-printable. One would expect Tab to be as well (but it isn't).
      if (getEventCharCode(nativeEvent) === 0) {
        return;
      }

    /* falls through */

    case 'keydown':
    case 'keyup':
      SyntheticEventCtor = SyntheticKeyboardEvent;
      break;

    case 'focusin':
      reactEventType = 'focus';
      SyntheticEventCtor = SyntheticFocusEvent;
      break;

    case 'focusout':
      reactEventType = 'blur';
      SyntheticEventCtor = SyntheticFocusEvent;
      break;

    case 'beforeblur':
    case 'afterblur':
      SyntheticEventCtor = SyntheticFocusEvent;
      break;

    case 'click':
      // Firefox creates a click event on right mouse clicks. This removes the
      // unwanted click events.
      if (nativeEvent.button === 2) {
        return;
      }

    /* falls through */

    case 'auxclick':
    case 'dblclick':
    case 'mousedown':
    case 'mousemove':
    case 'mouseup': // TODO: Disabled elements should not respond to mouse events

    /* falls through */

    case 'mouseout':
    case 'mouseover':
    case 'contextmenu':
      SyntheticEventCtor = SyntheticMouseEvent;
      break;

    case 'drag':
    case 'dragend':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'dragstart':
    case 'drop':
      SyntheticEventCtor = SyntheticDragEvent;
      break;

    case 'touchcancel':
    case 'touchend':
    case 'touchmove':
    case 'touchstart':
      SyntheticEventCtor = SyntheticTouchEvent;
      break;

    case ANIMATION_END:
    case ANIMATION_ITERATION:
    case ANIMATION_START:
      SyntheticEventCtor = SyntheticAnimationEvent;
      break;

    case TRANSITION_END:
      SyntheticEventCtor = SyntheticTransitionEvent;
      break;

    case 'scroll':
      SyntheticEventCtor = SyntheticUIEvent;
      break;

    case 'wheel':
      SyntheticEventCtor = SyntheticWheelEvent;
      break;

    case 'copy':
    case 'cut':
    case 'paste':
      SyntheticEventCtor = SyntheticClipboardEvent;
      break;

    case 'gotpointercapture':
    case 'lostpointercapture':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'pointerup':
      SyntheticEventCtor = SyntheticPointerEvent;
      break;
  }

  var inCapturePhase = (eventSystemFlags & IS_CAPTURE_PHASE) !== 0;

  {
    // Some events don't bubble in the browser.
    // In the past, React has always bubbled them, but this can be surprising.
    // We're going to try aligning closer to the browser behavior by not bubbling
    // them in React either. We'll start by not bubbling onScroll, and then expand.
    var accumulateTargetOnly = !inCapturePhase && // TODO: ideally, we'd eventually add all events from
    // nonDelegatedEvents list in DOMPluginEventSystem.
    // Then we can remove this special list.
    // This is a breaking change that can wait until React 18.
    domEventName === 'scroll';

    var _listeners = accumulateSinglePhaseListeners(targetInst, reactName, nativeEvent.type, inCapturePhase, accumulateTargetOnly);

    if (_listeners.length > 0) {
      // Intentionally create event lazily.
      var _event = new SyntheticEventCtor(reactName, reactEventType, null, nativeEvent, nativeEventTarget);

      dispatchQueue.push({
        event: _event,
        listeners: _listeners
      });
    }
  }
}

// TODO: remove top-level side effect.
registerSimpleEvents();
registerEvents$2();
registerEvents$1();
registerEvents$3();
registerEvents();

function extractEvents$5(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
  // TODO: we should remove the concept of a "SimpleEventPlugin".
  // This is the basic functionality of the event system. All
  // the other plugins are essentially polyfills. So the plugin
  // should probably be inlined somewhere and have its logic
  // be core the to event system. This would potentially allow
  // us to ship builds of React without the polyfilled plugins below.
  extractEvents$4(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags);
  var shouldProcessPolyfillPlugins = (eventSystemFlags & SHOULD_NOT_PROCESS_POLYFILL_EVENT_PLUGINS) === 0; // We don't process these events unless we are in the
  // event's native "bubble" phase, which means that we're
  // not in the capture phase. That's because we emulate
  // the capture phase here still. This is a trade-off,
  // because in an ideal world we would not emulate and use
  // the phases properly, like we do with the SimpleEvent
  // plugin. However, the plugins below either expect
  // emulation (EnterLeave) or use state localized to that
  // plugin (BeforeInput, Change, Select). The state in
  // these modules complicates things, as you'll essentially
  // get the case where the capture phase event might change
  // state, only for the following bubble event to come in
  // later and not trigger anything as the state now
  // invalidates the heuristics of the event plugin. We
  // could alter all these plugins to work in such ways, but
  // that might cause other unknown side-effects that we
  // can't forsee right now.

  if (shouldProcessPolyfillPlugins) {
    extractEvents$2(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags);
    extractEvents$1(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
    extractEvents$3(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
    extractEvents(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
  }
} // List of events that need to be individually attached to media elements.


var mediaEventTypes = ['abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'encrypted', 'ended', 'error', 'loadeddata', 'loadedmetadata', 'loadstart', 'pause', 'play', 'playing', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting']; // We should not delegate these events to the container, but rather
// set them on the actual target element itself. This is primarily
// because these events do not consistently bubble in the DOM.

var nonDelegatedEvents = new Set(['cancel', 'close', 'invalid', 'load', 'scroll', 'toggle'].concat(mediaEventTypes));

function executeDispatch(event, listener, currentTarget) {
  var type = event.type || 'unknown-event';
  event.currentTarget = currentTarget;
  invokeGuardedCallbackAndCatchFirstError(type, listener, undefined, event);
  event.currentTarget = null;
}

function processDispatchQueueItemsInOrder(event, dispatchListeners, inCapturePhase) {
  var previousInstance;

  if (inCapturePhase) {
    for (var i = dispatchListeners.length - 1; i >= 0; i--) {
      var _dispatchListeners$i = dispatchListeners[i],
          instance = _dispatchListeners$i.instance,
          currentTarget = _dispatchListeners$i.currentTarget,
          listener = _dispatchListeners$i.listener;

      if (instance !== previousInstance && event.isPropagationStopped()) {
        return;
      }

      executeDispatch(event, listener, currentTarget);
      previousInstance = instance;
    }
  } else {
    for (var _i = 0; _i < dispatchListeners.length; _i++) {
      var _dispatchListeners$_i = dispatchListeners[_i],
          _instance = _dispatchListeners$_i.instance,
          _currentTarget = _dispatchListeners$_i.currentTarget,
          _listener = _dispatchListeners$_i.listener;

      if (_instance !== previousInstance && event.isPropagationStopped()) {
        return;
      }

      executeDispatch(event, _listener, _currentTarget);
      previousInstance = _instance;
    }
  }
}

function processDispatchQueue(dispatchQueue, eventSystemFlags) {
  var inCapturePhase = (eventSystemFlags & IS_CAPTURE_PHASE) !== 0;

  for (var i = 0; i < dispatchQueue.length; i++) {
    var _dispatchQueue$i = dispatchQueue[i],
        event = _dispatchQueue$i.event,
        listeners = _dispatchQueue$i.listeners;
    processDispatchQueueItemsInOrder(event, listeners, inCapturePhase); //  event system doesn't use pooling.
  } // This would be a good time to rethrow if any of the event handlers threw.


  rethrowCaughtError();
}

function dispatchEventsForPlugins(domEventName, eventSystemFlags, nativeEvent, targetInst, targetContainer) {
  var nativeEventTarget = getEventTarget(nativeEvent);
  var dispatchQueue = [];
  extractEvents$5(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags);
  processDispatchQueue(dispatchQueue, eventSystemFlags);
}

function listenToNonDelegatedEvent(domEventName, targetElement) {
  var isCapturePhaseListener = false;
  var listenerSet = getEventListenerSet(targetElement);
  var listenerSetKey = getListenerSetKey(domEventName, isCapturePhaseListener);

  if (!listenerSet.has(listenerSetKey)) {
    addTrappedEventListener(targetElement, domEventName, IS_NON_DELEGATED, isCapturePhaseListener);
    listenerSet.add(listenerSetKey);
  }
}
var listeningMarker = '_reactListening' + Math.random().toString(36).slice(2);
function listenToAllSupportedEvents(rootContainerElement) {
  {
    if (rootContainerElement[listeningMarker]) {
      // Performance optimization: don't iterate through events
      // for the same portal container or root node more than once.
      // TODO: once we remove the flag, we may be able to also
      // remove some of the bookkeeping maps used for laziness.
      return;
    }

    rootContainerElement[listeningMarker] = true;
    allNativeEvents.forEach(function (domEventName) {
      if (!nonDelegatedEvents.has(domEventName)) {
        listenToNativeEvent(domEventName, false, rootContainerElement, null);
      }

      listenToNativeEvent(domEventName, true, rootContainerElement, null);
    });
  }
}
function listenToNativeEvent(domEventName, isCapturePhaseListener, rootContainerElement, targetElement) {
  var eventSystemFlags = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var target = rootContainerElement; // selectionchange needs to be attached to the document
  // otherwise it won't capture incoming events that are only
  // triggered on the document directly.

  if (domEventName === 'selectionchange' && rootContainerElement.nodeType !== DOCUMENT_NODE) {
    target = rootContainerElement.ownerDocument;
  } // If the event can be delegated (or is capture phase), we can
  // register it to the root container. Otherwise, we should
  // register the event to the target element and mark it as
  // a non-delegated event.


  if (targetElement !== null && !isCapturePhaseListener && nonDelegatedEvents.has(domEventName)) {
    // For all non-delegated events, apart from scroll, we attach
    // their event listeners to the respective elements that their
    // events fire on. That means we can skip this step, as event
    // listener has already been added previously. However, we
    // special case the scroll event because the reality is that any
    // element can scroll.
    // TODO: ideally, we'd eventually apply the same logic to all
    // events from the nonDelegatedEvents list. Then we can remove
    // this special case and use the same logic for all events.
    if (domEventName !== 'scroll') {
      return;
    }

    eventSystemFlags |= IS_NON_DELEGATED;
    target = targetElement;
  }

  var listenerSet = getEventListenerSet(target);
  var listenerSetKey = getListenerSetKey(domEventName, isCapturePhaseListener); // If the listener entry is empty or we should upgrade, then
  // we need to trap an event listener onto the target.

  if (!listenerSet.has(listenerSetKey)) {
    if (isCapturePhaseListener) {
      eventSystemFlags |= IS_CAPTURE_PHASE;
    }

    addTrappedEventListener(target, domEventName, eventSystemFlags, isCapturePhaseListener);
    listenerSet.add(listenerSetKey);
  }
}

function addTrappedEventListener(targetContainer, domEventName, eventSystemFlags, isCapturePhaseListener, isDeferredListenerForLegacyFBSupport) {
  var listener = createEventListenerWrapperWithPriority(targetContainer, domEventName, eventSystemFlags); // If passive option is not supported, then the event will be
  // active and not passive.

  var isPassiveListener = undefined;

  if (passiveBrowserEventsSupported) {
    // Browsers introduced an intervention, making these events
    // passive by default on document. React doesn't bind them
    // to document anymore, but changing this now would undo
    // the performance wins from the change. So we emulate
    // the existing behavior manually on the roots now.
    // https://github.com/facebook/react/issues/19651
    if (domEventName === 'touchstart' || domEventName === 'touchmove' || domEventName === 'wheel') {
      isPassiveListener = true;
    }
  }

  targetContainer =  targetContainer;
  var unsubscribeListener; // When legacyFBSupport is enabled, it's for when we


  if (isCapturePhaseListener) {
    if (isPassiveListener !== undefined) {
      unsubscribeListener = addEventCaptureListenerWithPassiveFlag(targetContainer, domEventName, listener, isPassiveListener);
    } else {
      unsubscribeListener = addEventCaptureListener(targetContainer, domEventName, listener);
    }
  } else {
    if (isPassiveListener !== undefined) {
      unsubscribeListener = addEventBubbleListenerWithPassiveFlag(targetContainer, domEventName, listener, isPassiveListener);
    } else {
      unsubscribeListener = addEventBubbleListener(targetContainer, domEventName, listener);
    }
  }
}

function isMatchingRootContainer(grandContainer, targetContainer) {
  return grandContainer === targetContainer || grandContainer.nodeType === COMMENT_NODE && grandContainer.parentNode === targetContainer;
}

function dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, targetInst, targetContainer) {
  var ancestorInst = targetInst;

  if ((eventSystemFlags & IS_EVENT_HANDLE_NON_MANAGED_NODE) === 0 && (eventSystemFlags & IS_NON_DELEGATED) === 0) {
    var targetContainerNode = targetContainer; // If we are using the legacy FB support flag, we

    if (targetInst !== null) {
      // The below logic attempts to work out if we need to change
      // the target fiber to a different ancestor. We had similar logic
      // in the legacy event system, except the big difference between
      // systems is that the modern event system now has an event listener
      // attached to each React Root and React Portal Root. Together,
      // the DOM nodes representing these roots are the "rootContainer".
      // To figure out which ancestor instance we should use, we traverse
      // up the fiber tree from the target instance and attempt to find
      // root boundaries that match that of our current "rootContainer".
      // If we find that "rootContainer", we find the parent fiber
      // sub-tree for that root and make that our ancestor instance.
      var node = targetInst;

      mainLoop: while (true) {
        if (node === null) {
          return;
        }

        var nodeTag = node.tag;

        if (nodeTag === HostRoot || nodeTag === HostPortal) {
          var container = node.stateNode.containerInfo;

          if (isMatchingRootContainer(container, targetContainerNode)) {
            break;
          }

          if (nodeTag === HostPortal) {
            // The target is a portal, but it's not the rootContainer we're looking for.
            // Normally portals handle their own events all the way down to the root.
            // So we should be able to stop now. However, we don't know if this portal
            // was part of *our* root.
            var grandNode = node.return;

            while (grandNode !== null) {
              var grandTag = grandNode.tag;

              if (grandTag === HostRoot || grandTag === HostPortal) {
                var grandContainer = grandNode.stateNode.containerInfo;

                if (isMatchingRootContainer(grandContainer, targetContainerNode)) {
                  // This is the rootContainer we're looking for and we found it as
                  // a parent of the Portal. That means we can ignore it because the
                  // Portal will bubble through to us.
                  return;
                }
              }

              grandNode = grandNode.return;
            }
          } // Now we need to find it's corresponding host fiber in the other
          // tree. To do this we can use getClosestInstanceFromNode, but we
          // need to validate that the fiber is a host instance, otherwise
          // we need to traverse up through the DOM till we find the correct
          // node that is from the other tree.


          while (container !== null) {
            var parentNode = getClosestInstanceFromNode(container);

            if (parentNode === null) {
              return;
            }

            var parentTag = parentNode.tag;

            if (parentTag === HostComponent || parentTag === HostText) {
              node = ancestorInst = parentNode;
              continue mainLoop;
            }

            container = container.parentNode;
          }
        }

        node = node.return;
      }
    }
  }

  batchedEventUpdates(function () {
    return dispatchEventsForPlugins(domEventName, eventSystemFlags, nativeEvent, ancestorInst);
  });
}

function createDispatchListener(instance, listener, currentTarget) {
  return {
    instance: instance,
    listener: listener,
    currentTarget: currentTarget
  };
}

function accumulateSinglePhaseListeners(targetFiber, reactName, nativeEventType, inCapturePhase, accumulateTargetOnly) {
  var captureName = reactName !== null ? reactName + 'Capture' : null;
  var reactEventName = inCapturePhase ? captureName : reactName;
  var listeners = [];
  var instance = targetFiber;
  var lastHostComponent = null; // Accumulate all instances and listeners via the target -> root path.

  while (instance !== null) {
    var _instance2 = instance,
        stateNode = _instance2.stateNode,
        tag = _instance2.tag; // Handle listeners that are on HostComponents (i.e. <div>)

    if (tag === HostComponent && stateNode !== null) {
      lastHostComponent = stateNode; // createEventHandle listeners


      if (reactEventName !== null) {
        var listener = getListener(instance, reactEventName);

        if (listener != null) {
          listeners.push(createDispatchListener(instance, listener, lastHostComponent));
        }
      }
    } // If we are only accumulating events for the target, then we don't
    // continue to propagate through the React fiber tree to find other
    // listeners.


    if (accumulateTargetOnly) {
      break;
    }

    instance = instance.return;
  }

  return listeners;
} // We should only use this function for:
// - BeforeInputEventPlugin
// - ChangeEventPlugin
// - SelectEventPlugin
// This is because we only process these plugins
// in the bubble phase, so we need to accumulate two
// phase event listeners (via emulation).

function accumulateTwoPhaseListeners(targetFiber, reactName) {
  var captureName = reactName + 'Capture';
  var listeners = [];
  var instance = targetFiber; // Accumulate all instances and listeners via the target -> root path.

  while (instance !== null) {
    var _instance3 = instance,
        stateNode = _instance3.stateNode,
        tag = _instance3.tag; // Handle listeners that are on HostComponents (i.e. <div>)

    if (tag === HostComponent && stateNode !== null) {
      var currentTarget = stateNode;
      var captureListener = getListener(instance, captureName);

      if (captureListener != null) {
        listeners.unshift(createDispatchListener(instance, captureListener, currentTarget));
      }

      var bubbleListener = getListener(instance, reactName);

      if (bubbleListener != null) {
        listeners.push(createDispatchListener(instance, bubbleListener, currentTarget));
      }
    }

    instance = instance.return;
  }

  return listeners;
}

function getParent(inst) {
  if (inst === null) {
    return null;
  }

  do {
    inst = inst.return; // TODO: If this is a HostRoot we might want to bail out.
    // That is depending on if we want nested subtrees (layers) to bubble
    // events to their parent. We could also go through parentNode on the
    // host node but that wouldn't work for React Native and doesn't let us
    // do the portal feature.
  } while (inst && inst.tag !== HostComponent);

  if (inst) {
    return inst;
  }

  return null;
}
/**
 * Return the lowest common ancestor of A and B, or null if they are in
 * different trees.
 */


function getLowestCommonAncestor(instA, instB) {
  var nodeA = instA;
  var nodeB = instB;
  var depthA = 0;

  for (var tempA = nodeA; tempA; tempA = getParent(tempA)) {
    depthA++;
  }

  var depthB = 0;

  for (var tempB = nodeB; tempB; tempB = getParent(tempB)) {
    depthB++;
  } // If A is deeper, crawl up.


  while (depthA - depthB > 0) {
    nodeA = getParent(nodeA);
    depthA--;
  } // If B is deeper, crawl up.


  while (depthB - depthA > 0) {
    nodeB = getParent(nodeB);
    depthB--;
  } // Walk in lockstep until we find a match.


  var depth = depthA;

  while (depth--) {
    if (nodeA === nodeB || nodeB !== null && nodeA === nodeB.alternate) {
      return nodeA;
    }

    nodeA = getParent(nodeA);
    nodeB = getParent(nodeB);
  }

  return null;
}

function accumulateEnterLeaveListenersForEvent(dispatchQueue, event, target, common, inCapturePhase) {
  var registrationName = event._reactName;
  var listeners = [];
  var instance = target;

  while (instance !== null) {
    if (instance === common) {
      break;
    }

    var _instance4 = instance,
        alternate = _instance4.alternate,
        stateNode = _instance4.stateNode,
        tag = _instance4.tag;

    if (alternate !== null && alternate === common) {
      break;
    }

    if (tag === HostComponent && stateNode !== null) {
      var currentTarget = stateNode;

      if (inCapturePhase) {
        var captureListener = getListener(instance, registrationName);

        if (captureListener != null) {
          listeners.unshift(createDispatchListener(instance, captureListener, currentTarget));
        }
      } else if (!inCapturePhase) {
        var bubbleListener = getListener(instance, registrationName);

        if (bubbleListener != null) {
          listeners.push(createDispatchListener(instance, bubbleListener, currentTarget));
        }
      }
    }

    instance = instance.return;
  }

  if (listeners.length !== 0) {
    dispatchQueue.push({
      event: event,
      listeners: listeners
    });
  }
} // We should only use this function for:
// - EnterLeaveEventPlugin
// This is because we only process this plugin
// in the bubble phase, so we need to accumulate two
// phase event listeners.


function accumulateEnterLeaveTwoPhaseListeners(dispatchQueue, leaveEvent, enterEvent, from, to) {
  var common = from && to ? getLowestCommonAncestor(from, to) : null;

  if (from !== null) {
    accumulateEnterLeaveListenersForEvent(dispatchQueue, leaveEvent, from, common, false);
  }

  if (to !== null && enterEvent !== null) {
    accumulateEnterLeaveListenersForEvent(dispatchQueue, enterEvent, to, common, true);
  }
}
function getListenerSetKey(domEventName, capture) {
  return domEventName + "__" + (capture ? 'capture' : 'bubble');
}

var didWarnInvalidHydration = false;
var DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';
var SUPPRESS_CONTENT_EDITABLE_WARNING = 'suppressContentEditableWarning';
var SUPPRESS_HYDRATION_WARNING = 'suppressHydrationWarning';
var AUTOFOCUS = 'autoFocus';
var CHILDREN = 'children';
var STYLE = 'style';
var HTML$1 = '__html';
var HTML_NAMESPACE$1 = Namespaces.html;
var warnedUnknownTags;
var suppressHydrationWarning;
var validatePropertiesInDevelopment;
var warnForTextDifference;
var warnForPropDifference;
var warnForExtraAttributes;
var warnForInvalidEventListener;
var canDiffStyleForHydrationWarning;
var normalizeMarkupForTextOrAttribute;
var normalizeHTML;

{
  warnedUnknownTags = {
    // There are working polyfills for <dialog>. Let people use it.
    dialog: true,
    // Electron ships a custom <webview> tag to display external web content in
    // an isolated frame and process.
    // This tag is not present in non Electron environments such as JSDom which
    // is often used for testing purposes.
    // @see https://electronjs.org/docs/api/webview-tag
    webview: true
  };

  validatePropertiesInDevelopment = function (type, props) {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props, {
      registrationNameDependencies: registrationNameDependencies,
      possibleRegistrationNames: possibleRegistrationNames
    });
  }; // IE 11 parses & normalizes the style attribute as opposed to other
  // browsers. It adds spaces and sorts the properties in some
  // non-alphabetical order. Handling that would require sorting CSS
  // properties in the client & server versions or applying
  // `expectedStyle` to a temporary DOM node to read its `style` attribute
  // normalized. Since it only affects IE, we're skipping style warnings
  // in that browser completely in favor of doing all that work.
  // See https://github.com/facebook/react/issues/11807


  canDiffStyleForHydrationWarning = canUseDOM && !document.documentMode; // HTML parsing normalizes CR and CRLF to LF.
  // It also can turn \u0000 into \uFFFD inside attributes.
  // https://www.w3.org/TR/html5/single-page.html#preprocessing-the-input-stream
  // If we have a mismatch, it might be caused by that.
  // We will still patch up in this case but not fire the warning.

  var NORMALIZE_NEWLINES_REGEX = /\r\n?/g;
  var NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;

  normalizeMarkupForTextOrAttribute = function (markup) {
    var markupString = typeof markup === 'string' ? markup : '' + markup;
    return markupString.replace(NORMALIZE_NEWLINES_REGEX, '\n').replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, '');
  };

  warnForTextDifference = function (serverText, clientText) {
    if (didWarnInvalidHydration) {
      return;
    }

    var normalizedClientText = normalizeMarkupForTextOrAttribute(clientText);
    var normalizedServerText = normalizeMarkupForTextOrAttribute(serverText);

    if (normalizedServerText === normalizedClientText) {
      return;
    }

    didWarnInvalidHydration = true;

    error('Text content did not match. Server: "%s" Client: "%s"', normalizedServerText, normalizedClientText);
  };

  warnForPropDifference = function (propName, serverValue, clientValue) {
    if (didWarnInvalidHydration) {
      return;
    }

    var normalizedClientValue = normalizeMarkupForTextOrAttribute(clientValue);
    var normalizedServerValue = normalizeMarkupForTextOrAttribute(serverValue);

    if (normalizedServerValue === normalizedClientValue) {
      return;
    }

    didWarnInvalidHydration = true;

    error('Prop `%s` did not match. Server: %s Client: %s', propName, JSON.stringify(normalizedServerValue), JSON.stringify(normalizedClientValue));
  };

  warnForExtraAttributes = function (attributeNames) {
    if (didWarnInvalidHydration) {
      return;
    }

    didWarnInvalidHydration = true;
    var names = [];
    attributeNames.forEach(function (name) {
      names.push(name);
    });

    error('Extra attributes from the server: %s', names);
  };

  warnForInvalidEventListener = function (registrationName, listener) {
    if (listener === false) {
      error('Expected `%s` listener to be a function, instead got `false`.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', registrationName, registrationName, registrationName);
    } else {
      error('Expected `%s` listener to be a function, instead got a value of `%s` type.', registrationName, typeof listener);
    }
  }; // Parse the HTML and read it back to normalize the HTML string so that it
  // can be used for comparison.


  normalizeHTML = function (parent, html) {
    // We could have created a separate document here to avoid
    // re-initializing custom elements if they exist. But this breaks
    // how <noscript> is being handled. So we use the same document.
    // See the discussion in https://github.com/facebook/react/pull/11157.
    var testElement = parent.namespaceURI === HTML_NAMESPACE$1 ? parent.ownerDocument.createElement(parent.tagName) : parent.ownerDocument.createElementNS(parent.namespaceURI, parent.tagName);
    testElement.innerHTML = html;
    return testElement.innerHTML;
  };
}

function getOwnerDocumentFromRootContainer(rootContainerElement) {
  return rootContainerElement.nodeType === DOCUMENT_NODE ? rootContainerElement : rootContainerElement.ownerDocument;
}

function noop() {}

function trapClickOnNonInteractiveElement(node) {
  // Mobile Safari does not fire properly bubble click events on
  // non-interactive elements, which means delegated click listeners do not
  // fire. The workaround for this bug involves attaching an empty click
  // listener on the target node.
  // https://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
  // Just set it using the onclick property so that we don't have to manage any
  // bookkeeping for it. Not sure if we need to clear it when the listener is
  // removed.
  // TODO: Only do this for the relevant Safaris maybe?
  node.onclick = noop;
}

function setInitialDOMProperties(tag, domElement, rootContainerElement, nextProps, isCustomComponentTag) {
  for (var propKey in nextProps) {
    if (!nextProps.hasOwnProperty(propKey)) {
      continue;
    }

    var nextProp = nextProps[propKey];

    if (propKey === STYLE) {
      {
        if (nextProp) {
          // Freeze the next style object so that we can assume it won't be
          // mutated. We have already warned for this in the past.
          Object.freeze(nextProp);
        }
      } // Relies on `updateStylesByID` not mutating `styleUpdates`.


      setValueForStyles(domElement, nextProp);
    } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
      var nextHtml = nextProp ? nextProp[HTML$1] : undefined;

      if (nextHtml != null) {
        setInnerHTML(domElement, nextHtml);
      }
    } else if (propKey === CHILDREN) {
      if (typeof nextProp === 'string') {
        // Avoid setting initial textContent when the text is empty. In IE11 setting
        // textContent on a <textarea> will cause the placeholder to not
        // show within the <textarea> until it has been focused and blurred again.
        // https://github.com/facebook/react/issues/6731#issuecomment-254874553
        var canSetTextContent = tag !== 'textarea' || nextProp !== '';

        if (canSetTextContent) {
          setTextContent(domElement, nextProp);
        }
      } else if (typeof nextProp === 'number') {
        setTextContent(domElement, '' + nextProp);
      }
    } else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING) ; else if (propKey === AUTOFOCUS) ; else if (registrationNameDependencies.hasOwnProperty(propKey)) {
      if (nextProp != null) {
        if ( typeof nextProp !== 'function') {
          warnForInvalidEventListener(propKey, nextProp);
        }

        if (propKey === 'onScroll') {
          listenToNonDelegatedEvent('scroll', domElement);
        }
      }
    } else if (nextProp != null) {
      setValueForProperty(domElement, propKey, nextProp, isCustomComponentTag);
    }
  }
}

function updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag) {
  // TODO: Handle wasCustomComponentTag
  for (var i = 0; i < updatePayload.length; i += 2) {
    var propKey = updatePayload[i];
    var propValue = updatePayload[i + 1];

    if (propKey === STYLE) {
      setValueForStyles(domElement, propValue);
    } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
      setInnerHTML(domElement, propValue);
    } else if (propKey === CHILDREN) {
      setTextContent(domElement, propValue);
    } else {
      setValueForProperty(domElement, propKey, propValue, isCustomComponentTag);
    }
  }
}

function createElement(type, props, rootContainerElement, parentNamespace) {
  var isCustomComponentTag; // We create tags in the namespace of their parent container, except HTML
  // tags get no namespace.

  var ownerDocument = getOwnerDocumentFromRootContainer(rootContainerElement);
  var domElement;
  var namespaceURI = parentNamespace;

  if (namespaceURI === HTML_NAMESPACE$1) {
    namespaceURI = getIntrinsicNamespace(type);
  }

  if (namespaceURI === HTML_NAMESPACE$1) {
    {
      isCustomComponentTag = isCustomComponent(type, props); // Should this check be gated by parent namespace? Not sure we want to
      // allow <SVG> or <mATH>.

      if (!isCustomComponentTag && type !== type.toLowerCase()) {
        error('<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', type);
      }
    }

    if (type === 'script') {
      // Create the script via .innerHTML so its "parser-inserted" flag is
      // set to true and it does not execute
      var div = ownerDocument.createElement('div');

      div.innerHTML = '<script><' + '/script>'; // eslint-disable-line
      // This is guaranteed to yield a script element.

      var firstChild = div.firstChild;
      domElement = div.removeChild(firstChild);
    } else if (typeof props.is === 'string') {
      // $FlowIssue `createElement` should be updated for Web Components
      domElement = ownerDocument.createElement(type, {
        is: props.is
      });
    } else {
      // Separate else branch instead of using `props.is || undefined` above because of a Firefox bug.
      // See discussion in https://github.com/facebook/react/pull/6896
      // and discussion in https://bugzilla.mozilla.org/show_bug.cgi?id=1276240
      domElement = ownerDocument.createElement(type); // Normally attributes are assigned in `setInitialDOMProperties`, however the `multiple` and `size`
      // attributes on `select`s needs to be added before `option`s are inserted.
      // This prevents:
      // - a bug where the `select` does not scroll to the correct option because singular
      //  `select` elements automatically pick the first item #13222
      // - a bug where the `select` set the first item as selected despite the `size` attribute #14239
      // See https://github.com/facebook/react/issues/13222
      // and https://github.com/facebook/react/issues/14239

      if (type === 'select') {
        var node = domElement;

        if (props.multiple) {
          node.multiple = true;
        } else if (props.size) {
          // Setting a size greater than 1 causes a select to behave like `multiple=true`, where
          // it is possible that no option is selected.
          //
          // This is only necessary when a select in "single selection mode".
          node.size = props.size;
        }
      }
    }
  } else {
    domElement = ownerDocument.createElementNS(namespaceURI, type);
  }

  {
    if (namespaceURI === HTML_NAMESPACE$1) {
      if (!isCustomComponentTag && Object.prototype.toString.call(domElement) === '[object HTMLUnknownElement]' && !Object.prototype.hasOwnProperty.call(warnedUnknownTags, type)) {
        warnedUnknownTags[type] = true;

        error('The tag <%s> is unrecognized in this browser. ' + 'If you meant to render a React component, start its name with ' + 'an uppercase letter.', type);
      }
    }
  }

  return domElement;
}
function createTextNode(text, rootContainerElement) {
  return getOwnerDocumentFromRootContainer(rootContainerElement).createTextNode(text);
}
function setInitialProperties(domElement, tag, rawProps, rootContainerElement) {
  var isCustomComponentTag = isCustomComponent(tag, rawProps);

  {
    validatePropertiesInDevelopment(tag, rawProps);
  } // TODO: Make sure that we check isMounted before firing any of these events.


  var props;

  switch (tag) {
    case 'dialog':
      listenToNonDelegatedEvent('cancel', domElement);
      listenToNonDelegatedEvent('close', domElement);
      props = rawProps;
      break;

    case 'iframe':
    case 'object':
    case 'embed':
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the load event.
      listenToNonDelegatedEvent('load', domElement);
      props = rawProps;
      break;

    case 'video':
    case 'audio':
      // We listen to these events in case to ensure emulated bubble
      // listeners still fire for all the media events.
      for (var i = 0; i < mediaEventTypes.length; i++) {
        listenToNonDelegatedEvent(mediaEventTypes[i], domElement);
      }

      props = rawProps;
      break;

    case 'source':
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the error event.
      listenToNonDelegatedEvent('error', domElement);
      props = rawProps;
      break;

    case 'img':
    case 'image':
    case 'link':
      // We listen to these events in case to ensure emulated bubble
      // listeners still fire for error and load events.
      listenToNonDelegatedEvent('error', domElement);
      listenToNonDelegatedEvent('load', domElement);
      props = rawProps;
      break;

    case 'details':
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the toggle event.
      listenToNonDelegatedEvent('toggle', domElement);
      props = rawProps;
      break;

    case 'input':
      initWrapperState(domElement, rawProps);
      props = getHostProps(domElement, rawProps); // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the invalid event.

      listenToNonDelegatedEvent('invalid', domElement);

      break;

    case 'option':
      validateProps(domElement, rawProps);
      props = getHostProps$1(domElement, rawProps);
      break;

    case 'select':
      initWrapperState$1(domElement, rawProps);
      props = getHostProps$2(domElement, rawProps); // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the invalid event.

      listenToNonDelegatedEvent('invalid', domElement);

      break;

    case 'textarea':
      initWrapperState$2(domElement, rawProps);
      props = getHostProps$3(domElement, rawProps); // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the invalid event.

      listenToNonDelegatedEvent('invalid', domElement);

      break;

    default:
      props = rawProps;
  }

  assertValidProps(tag, props);
  setInitialDOMProperties(tag, domElement, rootContainerElement, props, isCustomComponentTag);

  switch (tag) {
    case 'input':
      // TODO: Make sure we check if this is still unmounted or do any clean
      // up necessary since we never stop tracking anymore.
      track(domElement);
      postMountWrapper(domElement, rawProps, false);
      break;

    case 'textarea':
      // TODO: Make sure we check if this is still unmounted or do any clean
      // up necessary since we never stop tracking anymore.
      track(domElement);
      postMountWrapper$3(domElement);
      break;

    case 'option':
      postMountWrapper$1(domElement, rawProps);
      break;

    case 'select':
      postMountWrapper$2(domElement, rawProps);
      break;

    default:
      if (typeof props.onClick === 'function') {
        // TODO: This cast may not be sound for SVG, MathML or custom elements.
        trapClickOnNonInteractiveElement(domElement);
      }

      break;
  }
} // Calculate the diff between the two objects.

function diffProperties(domElement, tag, lastRawProps, nextRawProps, rootContainerElement) {
  {
    validatePropertiesInDevelopment(tag, nextRawProps);
  }

  var updatePayload = null;
  var lastProps;
  var nextProps;

  switch (tag) {
    case 'input':
      lastProps = getHostProps(domElement, lastRawProps);
      nextProps = getHostProps(domElement, nextRawProps);
      updatePayload = [];
      break;

    case 'option':
      lastProps = getHostProps$1(domElement, lastRawProps);
      nextProps = getHostProps$1(domElement, nextRawProps);
      updatePayload = [];
      break;

    case 'select':
      lastProps = getHostProps$2(domElement, lastRawProps);
      nextProps = getHostProps$2(domElement, nextRawProps);
      updatePayload = [];
      break;

    case 'textarea':
      lastProps = getHostProps$3(domElement, lastRawProps);
      nextProps = getHostProps$3(domElement, nextRawProps);
      updatePayload = [];
      break;

    default:
      lastProps = lastRawProps;
      nextProps = nextRawProps;

      if (typeof lastProps.onClick !== 'function' && typeof nextProps.onClick === 'function') {
        // TODO: This cast may not be sound for SVG, MathML or custom elements.
        trapClickOnNonInteractiveElement(domElement);
      }

      break;
  }

  assertValidProps(tag, nextProps);
  var propKey;
  var styleName;
  var styleUpdates = null;

  for (propKey in lastProps) {
    if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
      continue;
    }

    if (propKey === STYLE) {
      var lastStyle = lastProps[propKey];

      for (styleName in lastStyle) {
        if (lastStyle.hasOwnProperty(styleName)) {
          if (!styleUpdates) {
            styleUpdates = {};
          }

          styleUpdates[styleName] = '';
        }
      }
    } else if (propKey === DANGEROUSLY_SET_INNER_HTML || propKey === CHILDREN) ; else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING) ; else if (propKey === AUTOFOCUS) ; else if (registrationNameDependencies.hasOwnProperty(propKey)) {
      // This is a special case. If any listener updates we need to ensure
      // that the "current" fiber pointer gets updated so we need a commit
      // to update this element.
      if (!updatePayload) {
        updatePayload = [];
      }
    } else {
      // For all other deleted properties we add it to the queue. We use
      // the allowed property list in the commit phase instead.
      (updatePayload = updatePayload || []).push(propKey, null);
    }
  }

  for (propKey in nextProps) {
    var nextProp = nextProps[propKey];
    var lastProp = lastProps != null ? lastProps[propKey] : undefined;

    if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
      continue;
    }

    if (propKey === STYLE) {
      {
        if (nextProp) {
          // Freeze the next style object so that we can assume it won't be
          // mutated. We have already warned for this in the past.
          Object.freeze(nextProp);
        }
      }

      if (lastProp) {
        // Unset styles on `lastProp` but not on `nextProp`.
        for (styleName in lastProp) {
          if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
            if (!styleUpdates) {
              styleUpdates = {};
            }

            styleUpdates[styleName] = '';
          }
        } // Update styles that changed since `lastProp`.


        for (styleName in nextProp) {
          if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
            if (!styleUpdates) {
              styleUpdates = {};
            }

            styleUpdates[styleName] = nextProp[styleName];
          }
        }
      } else {
        // Relies on `updateStylesByID` not mutating `styleUpdates`.
        if (!styleUpdates) {
          if (!updatePayload) {
            updatePayload = [];
          }

          updatePayload.push(propKey, styleUpdates);
        }

        styleUpdates = nextProp;
      }
    } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
      var nextHtml = nextProp ? nextProp[HTML$1] : undefined;
      var lastHtml = lastProp ? lastProp[HTML$1] : undefined;

      if (nextHtml != null) {
        if (lastHtml !== nextHtml) {
          (updatePayload = updatePayload || []).push(propKey, nextHtml);
        }
      }
    } else if (propKey === CHILDREN) {
      if (typeof nextProp === 'string' || typeof nextProp === 'number') {
        (updatePayload = updatePayload || []).push(propKey, '' + nextProp);
      }
    } else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING) ; else if (registrationNameDependencies.hasOwnProperty(propKey)) {
      if (nextProp != null) {
        // We eagerly listen to this even though we haven't committed yet.
        if ( typeof nextProp !== 'function') {
          warnForInvalidEventListener(propKey, nextProp);
        }

        if (propKey === 'onScroll') {
          listenToNonDelegatedEvent('scroll', domElement);
        }
      }

      if (!updatePayload && lastProp !== nextProp) {
        // This is a special case. If any listener updates we need to ensure
        // that the "current" props pointer gets updated so we need a commit
        // to update this element.
        updatePayload = [];
      }
    } else if (typeof nextProp === 'object' && nextProp !== null && nextProp.$$typeof === REACT_OPAQUE_ID_TYPE) {
      // If we encounter useOpaqueReference's opaque object, this means we are hydrating.
      // In this case, call the opaque object's toString function which generates a new client
      // ID so client and server IDs match and throws to rerender.
      nextProp.toString();
    } else {
      // For any other property we always add it to the queue and then we
      // filter it out using the allowed property list during the commit.
      (updatePayload = updatePayload || []).push(propKey, nextProp);
    }
  }

  if (styleUpdates) {
    {
      validateShorthandPropertyCollisionInDev(styleUpdates, nextProps[STYLE]);
    }

    (updatePayload = updatePayload || []).push(STYLE, styleUpdates);
  }

  return updatePayload;
} // Apply the diff.

function updateProperties(domElement, updatePayload, tag, lastRawProps, nextRawProps) {
  // Update checked *before* name.
  // In the middle of an update, it is possible to have multiple checked.
  // When a checked radio tries to change name, browser makes another radio's checked false.
  if (tag === 'input' && nextRawProps.type === 'radio' && nextRawProps.name != null) {
    updateChecked(domElement, nextRawProps);
  }

  var wasCustomComponentTag = isCustomComponent(tag, lastRawProps);
  var isCustomComponentTag = isCustomComponent(tag, nextRawProps); // Apply the diff.

  updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag); // TODO: Ensure that an update gets scheduled if any of the special props
  // changed.

  switch (tag) {
    case 'input':
      // Update the wrapper around inputs *after* updating props. This has to
      // happen after `updateDOMProperties`. Otherwise HTML5 input validations
      // raise warnings and prevent the new value from being assigned.
      updateWrapper(domElement, nextRawProps);
      break;

    case 'textarea':
      updateWrapper$1(domElement, nextRawProps);
      break;

    case 'select':
      // <select> value update needs to occur after <option> children
      // reconciliation
      postUpdateWrapper(domElement, nextRawProps);
      break;
  }
}

function getPossibleStandardName(propName) {
  {
    var lowerCasedName = propName.toLowerCase();

    if (!possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      return null;
    }

    return possibleStandardNames[lowerCasedName] || null;
  }
}

function diffHydratedProperties(domElement, tag, rawProps, parentNamespace, rootContainerElement) {
  var isCustomComponentTag;
  var extraAttributeNames;

  {
    suppressHydrationWarning = rawProps[SUPPRESS_HYDRATION_WARNING] === true;
    isCustomComponentTag = isCustomComponent(tag, rawProps);
    validatePropertiesInDevelopment(tag, rawProps);
  } // TODO: Make sure that we check isMounted before firing any of these events.


  switch (tag) {
    case 'dialog':
      listenToNonDelegatedEvent('cancel', domElement);
      listenToNonDelegatedEvent('close', domElement);
      break;

    case 'iframe':
    case 'object':
    case 'embed':
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the load event.
      listenToNonDelegatedEvent('load', domElement);
      break;

    case 'video':
    case 'audio':
      // We listen to these events in case to ensure emulated bubble
      // listeners still fire for all the media events.
      for (var i = 0; i < mediaEventTypes.length; i++) {
        listenToNonDelegatedEvent(mediaEventTypes[i], domElement);
      }

      break;

    case 'source':
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the error event.
      listenToNonDelegatedEvent('error', domElement);
      break;

    case 'img':
    case 'image':
    case 'link':
      // We listen to these events in case to ensure emulated bubble
      // listeners still fire for error and load events.
      listenToNonDelegatedEvent('error', domElement);
      listenToNonDelegatedEvent('load', domElement);
      break;

    case 'details':
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the toggle event.
      listenToNonDelegatedEvent('toggle', domElement);
      break;

    case 'input':
      initWrapperState(domElement, rawProps); // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the invalid event.

      listenToNonDelegatedEvent('invalid', domElement);

      break;

    case 'option':
      validateProps(domElement, rawProps);
      break;

    case 'select':
      initWrapperState$1(domElement, rawProps); // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the invalid event.

      listenToNonDelegatedEvent('invalid', domElement);

      break;

    case 'textarea':
      initWrapperState$2(domElement, rawProps); // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the invalid event.

      listenToNonDelegatedEvent('invalid', domElement);

      break;
  }

  assertValidProps(tag, rawProps);

  {
    extraAttributeNames = new Set();
    var attributes = domElement.attributes;

    for (var _i = 0; _i < attributes.length; _i++) {
      var name = attributes[_i].name.toLowerCase();

      switch (name) {
        // Built-in SSR attribute is allowed
        case 'data-reactroot':
          break;
        // Controlled attributes are not validated
        // TODO: Only ignore them on controlled tags.

        case 'value':
          break;

        case 'checked':
          break;

        case 'selected':
          break;

        default:
          // Intentionally use the original name.
          // See discussion in https://github.com/facebook/react/pull/10676.
          extraAttributeNames.add(attributes[_i].name);
      }
    }
  }

  var updatePayload = null;

  for (var propKey in rawProps) {
    if (!rawProps.hasOwnProperty(propKey)) {
      continue;
    }

    var nextProp = rawProps[propKey];

    if (propKey === CHILDREN) {
      // For text content children we compare against textContent. This
      // might match additional HTML that is hidden when we read it using
      // textContent. E.g. "foo" will match "f<span>oo</span>" but that still
      // satisfies our requirement. Our requirement is not to produce perfect
      // HTML and attributes. Ideally we should preserve structure but it's
      // ok not to if the visible content is still enough to indicate what
      // even listeners these nodes might be wired up to.
      // TODO: Warn if there is more than a single textNode as a child.
      // TODO: Should we use domElement.firstChild.nodeValue to compare?
      if (typeof nextProp === 'string') {
        if (domElement.textContent !== nextProp) {
          if ( !suppressHydrationWarning) {
            warnForTextDifference(domElement.textContent, nextProp);
          }

          updatePayload = [CHILDREN, nextProp];
        }
      } else if (typeof nextProp === 'number') {
        if (domElement.textContent !== '' + nextProp) {
          if ( !suppressHydrationWarning) {
            warnForTextDifference(domElement.textContent, nextProp);
          }

          updatePayload = [CHILDREN, '' + nextProp];
        }
      }
    } else if (registrationNameDependencies.hasOwnProperty(propKey)) {
      if (nextProp != null) {
        if ( typeof nextProp !== 'function') {
          warnForInvalidEventListener(propKey, nextProp);
        }

        if (propKey === 'onScroll') {
          listenToNonDelegatedEvent('scroll', domElement);
        }
      }
    } else if ( // Convince Flow we've calculated it (it's DEV-only in this method.)
    typeof isCustomComponentTag === 'boolean') {
      // Validate that the properties correspond to their expected values.
      var serverValue = void 0;
      var propertyInfo = getPropertyInfo(propKey);

      if (suppressHydrationWarning) ; else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING || // Controlled attributes are not validated
      // TODO: Only ignore them on controlled tags.
      propKey === 'value' || propKey === 'checked' || propKey === 'selected') ; else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
        var serverHTML = domElement.innerHTML;
        var nextHtml = nextProp ? nextProp[HTML$1] : undefined;

        if (nextHtml != null) {
          var expectedHTML = normalizeHTML(domElement, nextHtml);

          if (expectedHTML !== serverHTML) {
            warnForPropDifference(propKey, serverHTML, expectedHTML);
          }
        }
      } else if (propKey === STYLE) {
        // $FlowFixMe - Should be inferred as not undefined.
        extraAttributeNames.delete(propKey);

        if (canDiffStyleForHydrationWarning) {
          var expectedStyle = createDangerousStringForStyles(nextProp);
          serverValue = domElement.getAttribute('style');

          if (expectedStyle !== serverValue) {
            warnForPropDifference(propKey, serverValue, expectedStyle);
          }
        }
      } else if (isCustomComponentTag) {
        // $FlowFixMe - Should be inferred as not undefined.
        extraAttributeNames.delete(propKey.toLowerCase());
        serverValue = getValueForAttribute(domElement, propKey, nextProp);

        if (nextProp !== serverValue) {
          warnForPropDifference(propKey, serverValue, nextProp);
        }
      } else if (!shouldIgnoreAttribute(propKey, propertyInfo, isCustomComponentTag) && !shouldRemoveAttribute(propKey, nextProp, propertyInfo, isCustomComponentTag)) {
        var isMismatchDueToBadCasing = false;

        if (propertyInfo !== null) {
          // $FlowFixMe - Should be inferred as not undefined.
          extraAttributeNames.delete(propertyInfo.attributeName);
          serverValue = getValueForProperty(domElement, propKey, nextProp, propertyInfo);
        } else {
          var ownNamespace = parentNamespace;

          if (ownNamespace === HTML_NAMESPACE$1) {
            ownNamespace = getIntrinsicNamespace(tag);
          }

          if (ownNamespace === HTML_NAMESPACE$1) {
            // $FlowFixMe - Should be inferred as not undefined.
            extraAttributeNames.delete(propKey.toLowerCase());
          } else {
            var standardName = getPossibleStandardName(propKey);

            if (standardName !== null && standardName !== propKey) {
              // If an SVG prop is supplied with bad casing, it will
              // be successfully parsed from HTML, but will produce a mismatch
              // (and would be incorrectly rendered on the client).
              // However, we already warn about bad casing elsewhere.
              // So we'll skip the misleading extra mismatch warning in this case.
              isMismatchDueToBadCasing = true; // $FlowFixMe - Should be inferred as not undefined.

              extraAttributeNames.delete(standardName);
            } // $FlowFixMe - Should be inferred as not undefined.


            extraAttributeNames.delete(propKey);
          }

          serverValue = getValueForAttribute(domElement, propKey, nextProp);
        }

        if (nextProp !== serverValue && !isMismatchDueToBadCasing) {
          warnForPropDifference(propKey, serverValue, nextProp);
        }
      }
    }
  }

  {
    // $FlowFixMe - Should be inferred as not undefined.
    if (extraAttributeNames.size > 0 && !suppressHydrationWarning) {
      // $FlowFixMe - Should be inferred as not undefined.
      warnForExtraAttributes(extraAttributeNames);
    }
  }

  switch (tag) {
    case 'input':
      // TODO: Make sure we check if this is still unmounted or do any clean
      // up necessary since we never stop tracking anymore.
      track(domElement);
      postMountWrapper(domElement, rawProps, true);
      break;

    case 'textarea':
      // TODO: Make sure we check if this is still unmounted or do any clean
      // up necessary since we never stop tracking anymore.
      track(domElement);
      postMountWrapper$3(domElement);
      break;

    case 'select':
    case 'option':
      // For input and textarea we current always set the value property at
      // post mount to force it to diverge from attributes. However, for
      // option and select we don't quite do the same thing and select
      // is not resilient to the DOM state changing so we don't do that here.
      // TODO: Consider not doing this for input and textarea.
      break;

    default:
      if (typeof rawProps.onClick === 'function') {
        // TODO: This cast may not be sound for SVG, MathML or custom elements.
        trapClickOnNonInteractiveElement(domElement);
      }

      break;
  }

  return updatePayload;
}
function diffHydratedText(textNode, text) {
  var isDifferent = textNode.nodeValue !== text;
  return isDifferent;
}
function warnForUnmatchedText(textNode, text) {
  {
    warnForTextDifference(textNode.nodeValue, text);
  }
}
function warnForDeletedHydratableElement(parentNode, child) {
  {
    if (didWarnInvalidHydration) {
      return;
    }

    didWarnInvalidHydration = true;

    error('Did not expect server HTML to contain a <%s> in <%s>.', child.nodeName.toLowerCase(), parentNode.nodeName.toLowerCase());
  }
}
function warnForDeletedHydratableText(parentNode, child) {
  {
    if (didWarnInvalidHydration) {
      return;
    }

    didWarnInvalidHydration = true;

    error('Did not expect server HTML to contain the text node "%s" in <%s>.', child.nodeValue, parentNode.nodeName.toLowerCase());
  }
}
function warnForInsertedHydratedElement(parentNode, tag, props) {
  {
    if (didWarnInvalidHydration) {
      return;
    }

    didWarnInvalidHydration = true;

    error('Expected server HTML to contain a matching <%s> in <%s>.', tag, parentNode.nodeName.toLowerCase());
  }
}
function warnForInsertedHydratedText(parentNode, text) {
  {
    if (text === '') {
      // We expect to insert empty text nodes since they're not represented in
      // the HTML.
      // TODO: Remove this special case if we can just avoid inserting empty
      // text nodes.
      return;
    }

    if (didWarnInvalidHydration) {
      return;
    }

    didWarnInvalidHydration = true;

    error('Expected server HTML to contain a matching text node for "%s" in <%s>.', text, parentNode.nodeName.toLowerCase());
  }
}
function restoreControlledState$3(domElement, tag, props) {
  switch (tag) {
    case 'input':
      restoreControlledState(domElement, props);
      return;

    case 'textarea':
      restoreControlledState$2(domElement, props);
      return;

    case 'select':
      restoreControlledState$1(domElement, props);
      return;
  }
}

var validateDOMNesting = function () {};

var updatedAncestorInfo = function () {};

{
  // This validation code was written based on the HTML5 parsing spec:
  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
  //
  // Note: this does not catch all invalid nesting, nor does it try to (as it's
  // not clear what practical benefit doing so provides); instead, we warn only
  // for cases where the parser will give a parse tree differing from what React
  // intended. For example, <b><div></div></b> is invalid but we don't warn
  // because it still parses correctly; we do warn for other cases like nested
  // <p> tags where the beginning of the second element implicitly closes the
  // first, causing a confusing mess.
  // https://html.spec.whatwg.org/multipage/syntax.html#special
  var specialTags = ['address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 'xmp']; // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope

  var inScopeTags = ['applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 'template', // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
  // TODO: Distinguish by namespace here -- for <title>, including it here
  // errs on the side of fewer warnings
  'foreignObject', 'desc', 'title']; // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope

  var buttonScopeTags = inScopeTags.concat(['button']); // https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags

  var impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];
  var emptyAncestorInfo = {
    current: null,
    formTag: null,
    aTagInScope: null,
    buttonTagInScope: null,
    nobrTagInScope: null,
    pTagInButtonScope: null,
    listItemTagAutoclosing: null,
    dlItemTagAutoclosing: null
  };

  updatedAncestorInfo = function (oldInfo, tag) {
    var ancestorInfo = _assign({}, oldInfo || emptyAncestorInfo);

    var info = {
      tag: tag
    };

    if (inScopeTags.indexOf(tag) !== -1) {
      ancestorInfo.aTagInScope = null;
      ancestorInfo.buttonTagInScope = null;
      ancestorInfo.nobrTagInScope = null;
    }

    if (buttonScopeTags.indexOf(tag) !== -1) {
      ancestorInfo.pTagInButtonScope = null;
    } // See rules for 'li', 'dd', 'dt' start tags in
    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody


    if (specialTags.indexOf(tag) !== -1 && tag !== 'address' && tag !== 'div' && tag !== 'p') {
      ancestorInfo.listItemTagAutoclosing = null;
      ancestorInfo.dlItemTagAutoclosing = null;
    }

    ancestorInfo.current = info;

    if (tag === 'form') {
      ancestorInfo.formTag = info;
    }

    if (tag === 'a') {
      ancestorInfo.aTagInScope = info;
    }

    if (tag === 'button') {
      ancestorInfo.buttonTagInScope = info;
    }

    if (tag === 'nobr') {
      ancestorInfo.nobrTagInScope = info;
    }

    if (tag === 'p') {
      ancestorInfo.pTagInButtonScope = info;
    }

    if (tag === 'li') {
      ancestorInfo.listItemTagAutoclosing = info;
    }

    if (tag === 'dd' || tag === 'dt') {
      ancestorInfo.dlItemTagAutoclosing = info;
    }

    return ancestorInfo;
  };
  /**
   * Returns whether
   */


  var isTagValidWithParent = function (tag, parentTag) {
    // First, let's check if we're in an unusual parsing mode...
    switch (parentTag) {
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
      case 'select':
        return tag === 'option' || tag === 'optgroup' || tag === '#text';

      case 'optgroup':
        return tag === 'option' || tag === '#text';
      // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
      // but

      case 'option':
        return tag === '#text';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
      // No special behavior since these rules fall back to "in body" mode for
      // all except special table nodes which cause bad parsing behavior anyway.
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr

      case 'tr':
        return tag === 'th' || tag === 'td' || tag === 'style' || tag === 'script' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody

      case 'tbody':
      case 'thead':
      case 'tfoot':
        return tag === 'tr' || tag === 'style' || tag === 'script' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup

      case 'colgroup':
        return tag === 'col' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable

      case 'table':
        return tag === 'caption' || tag === 'colgroup' || tag === 'tbody' || tag === 'tfoot' || tag === 'thead' || tag === 'style' || tag === 'script' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead

      case 'head':
        return tag === 'base' || tag === 'basefont' || tag === 'bgsound' || tag === 'link' || tag === 'meta' || tag === 'title' || tag === 'noscript' || tag === 'noframes' || tag === 'style' || tag === 'script' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element

      case 'html':
        return tag === 'head' || tag === 'body' || tag === 'frameset';

      case 'frameset':
        return tag === 'frame';

      case '#document':
        return tag === 'html';
    } // Probably in the "in body" parsing mode, so we outlaw only tag combos
    // where the parsing rules cause implicit opens or closes to be added.
    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody


    switch (tag) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return parentTag !== 'h1' && parentTag !== 'h2' && parentTag !== 'h3' && parentTag !== 'h4' && parentTag !== 'h5' && parentTag !== 'h6';

      case 'rp':
      case 'rt':
        return impliedEndTags.indexOf(parentTag) === -1;

      case 'body':
      case 'caption':
      case 'col':
      case 'colgroup':
      case 'frameset':
      case 'frame':
      case 'head':
      case 'html':
      case 'tbody':
      case 'td':
      case 'tfoot':
      case 'th':
      case 'thead':
      case 'tr':
        // These tags are only valid with a few parents that have special child
        // parsing rules -- if we're down here, then none of those matched and
        // so we allow it only if we don't know what the parent is, as all other
        // cases are invalid.
        return parentTag == null;
    }

    return true;
  };
  /**
   * Returns whether
   */


  var findInvalidAncestorForTag = function (tag, ancestorInfo) {
    switch (tag) {
      case 'address':
      case 'article':
      case 'aside':
      case 'blockquote':
      case 'center':
      case 'details':
      case 'dialog':
      case 'dir':
      case 'div':
      case 'dl':
      case 'fieldset':
      case 'figcaption':
      case 'figure':
      case 'footer':
      case 'header':
      case 'hgroup':
      case 'main':
      case 'menu':
      case 'nav':
      case 'ol':
      case 'p':
      case 'section':
      case 'summary':
      case 'ul':
      case 'pre':
      case 'listing':
      case 'table':
      case 'hr':
      case 'xmp':
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return ancestorInfo.pTagInButtonScope;

      case 'form':
        return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;

      case 'li':
        return ancestorInfo.listItemTagAutoclosing;

      case 'dd':
      case 'dt':
        return ancestorInfo.dlItemTagAutoclosing;

      case 'button':
        return ancestorInfo.buttonTagInScope;

      case 'a':
        // Spec says something about storing a list of markers, but it sounds
        // equivalent to this check.
        return ancestorInfo.aTagInScope;

      case 'nobr':
        return ancestorInfo.nobrTagInScope;
    }

    return null;
  };

  var didWarn$1 = {};

  validateDOMNesting = function (childTag, childText, ancestorInfo) {
    ancestorInfo = ancestorInfo || emptyAncestorInfo;
    var parentInfo = ancestorInfo.current;
    var parentTag = parentInfo && parentInfo.tag;

    if (childText != null) {
      if (childTag != null) {
        error('validateDOMNesting: when childText is passed, childTag should be null');
      }

      childTag = '#text';
    }

    var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
    var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
    var invalidParentOrAncestor = invalidParent || invalidAncestor;

    if (!invalidParentOrAncestor) {
      return;
    }

    var ancestorTag = invalidParentOrAncestor.tag;
    var warnKey = !!invalidParent + '|' + childTag + '|' + ancestorTag;

    if (didWarn$1[warnKey]) {
      return;
    }

    didWarn$1[warnKey] = true;
    var tagDisplayName = childTag;
    var whitespaceInfo = '';

    if (childTag === '#text') {
      if (/\S/.test(childText)) {
        tagDisplayName = 'Text nodes';
      } else {
        tagDisplayName = 'Whitespace text nodes';
        whitespaceInfo = " Make sure you don't have any extra whitespace between tags on " + 'each line of your source code.';
      }
    } else {
      tagDisplayName = '<' + childTag + '>';
    }

    if (invalidParent) {
      var info = '';

      if (ancestorTag === 'table' && childTag === 'tr') {
        info += ' Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by ' + 'the browser.';
      }

      error('validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s', tagDisplayName, ancestorTag, whitespaceInfo, info);
    } else {
      error('validateDOMNesting(...): %s cannot appear as a descendant of ' + '<%s>.', tagDisplayName, ancestorTag);
    }
  };
}

var SUPPRESS_HYDRATION_WARNING$1;

{
  SUPPRESS_HYDRATION_WARNING$1 = 'suppressHydrationWarning';
}

var SUSPENSE_START_DATA = '$';
var SUSPENSE_END_DATA = '/$';
var SUSPENSE_PENDING_START_DATA = '$?';
var SUSPENSE_FALLBACK_START_DATA = '$!';
var STYLE$1 = 'style';
var eventsEnabled = null;
var selectionInformation = null;

function shouldAutoFocusHostComponent(type, props) {
  switch (type) {
    case 'button':
    case 'input':
    case 'select':
    case 'textarea':
      return !!props.autoFocus;
  }

  return false;
}
function getRootHostContext(rootContainerInstance) {
  var type;
  var namespace;
  var nodeType = rootContainerInstance.nodeType;

  switch (nodeType) {
    case DOCUMENT_NODE:
    case DOCUMENT_FRAGMENT_NODE:
      {
        type = nodeType === DOCUMENT_NODE ? '#document' : '#fragment';
        var root = rootContainerInstance.documentElement;
        namespace = root ? root.namespaceURI : getChildNamespace(null, '');
        break;
      }

    default:
      {
        var container = nodeType === COMMENT_NODE ? rootContainerInstance.parentNode : rootContainerInstance;
        var ownNamespace = container.namespaceURI || null;
        type = container.tagName;
        namespace = getChildNamespace(ownNamespace, type);
        break;
      }
  }

  {
    var validatedTag = type.toLowerCase();
    var ancestorInfo = updatedAncestorInfo(null, validatedTag);
    return {
      namespace: namespace,
      ancestorInfo: ancestorInfo
    };
  }
}
function getChildHostContext(parentHostContext, type, rootContainerInstance) {
  {
    var parentHostContextDev = parentHostContext;
    var namespace = getChildNamespace(parentHostContextDev.namespace, type);
    var ancestorInfo = updatedAncestorInfo(parentHostContextDev.ancestorInfo, type);
    return {
      namespace: namespace,
      ancestorInfo: ancestorInfo
    };
  }
}
function getPublicInstance(instance) {
  return instance;
}
function prepareForCommit(containerInfo) {
  eventsEnabled = isEnabled();
  selectionInformation = getSelectionInformation();
  var activeInstance = null;

  setEnabled(false);
  return activeInstance;
}
function resetAfterCommit(containerInfo) {
  restoreSelection(selectionInformation);
  setEnabled(eventsEnabled);
  eventsEnabled = null;
  selectionInformation = null;
}
function createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
  var parentNamespace;

  {
    // TODO: take namespace into account when validating.
    var hostContextDev = hostContext;
    validateDOMNesting(type, null, hostContextDev.ancestorInfo);

    if (typeof props.children === 'string' || typeof props.children === 'number') {
      var string = '' + props.children;
      var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type);
      validateDOMNesting(null, string, ownAncestorInfo);
    }

    parentNamespace = hostContextDev.namespace;
  }

  var domElement = createElement(type, props, rootContainerInstance, parentNamespace);
  precacheFiberNode(internalInstanceHandle, domElement);
  updateFiberProps(domElement, props);
  return domElement;
}
function appendInitialChild(parentInstance, child) {
  parentInstance.appendChild(child);
}
function finalizeInitialChildren(domElement, type, props, rootContainerInstance, hostContext) {
  setInitialProperties(domElement, type, props, rootContainerInstance);
  return shouldAutoFocusHostComponent(type, props);
}
function prepareUpdate(domElement, type, oldProps, newProps, rootContainerInstance, hostContext) {
  {
    var hostContextDev = hostContext;

    if (typeof newProps.children !== typeof oldProps.children && (typeof newProps.children === 'string' || typeof newProps.children === 'number')) {
      var string = '' + newProps.children;
      var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type);
      validateDOMNesting(null, string, ownAncestorInfo);
    }
  }

  return diffProperties(domElement, type, oldProps, newProps);
}
function shouldSetTextContent(type, props) {
  return type === 'textarea' || type === 'option' || type === 'noscript' || typeof props.children === 'string' || typeof props.children === 'number' || typeof props.dangerouslySetInnerHTML === 'object' && props.dangerouslySetInnerHTML !== null && props.dangerouslySetInnerHTML.__html != null;
}
function createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle) {
  {
    var hostContextDev = hostContext;
    validateDOMNesting(null, text, hostContextDev.ancestorInfo);
  }

  var textNode = createTextNode(text, rootContainerInstance);
  precacheFiberNode(internalInstanceHandle, textNode);
  return textNode;
}
// if a component just imports ReactDOM (e.g. for findDOMNode).
// Some environments might not have setTimeout or clearTimeout.

var scheduleTimeout = typeof setTimeout === 'function' ? setTimeout : undefined;
var cancelTimeout = typeof clearTimeout === 'function' ? clearTimeout : undefined;
var noTimeout = -1; // -------------------
function commitMount(domElement, type, newProps, internalInstanceHandle) {
  // Despite the naming that might imply otherwise, this method only
  // fires if there is an `Update` effect scheduled during mounting.
  // This happens if `finalizeInitialChildren` returns `true` (which it
  // does to implement the `autoFocus` attribute on the client). But
  // there are also other cases when this might happen (such as patching
  // up text content during hydration mismatch). So we'll check this again.
  if (shouldAutoFocusHostComponent(type, newProps)) {
    domElement.focus();
  }
}
function commitUpdate(domElement, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
  // Update the props handle so that we know which props are the ones with
  // with current event handlers.
  updateFiberProps(domElement, newProps); // Apply the diff to the DOM node.

  updateProperties(domElement, updatePayload, type, oldProps, newProps);
}
function resetTextContent(domElement) {
  setTextContent(domElement, '');
}
function commitTextUpdate(textInstance, oldText, newText) {
  textInstance.nodeValue = newText;
}
function appendChild(parentInstance, child) {
  parentInstance.appendChild(child);
}
function appendChildToContainer(container, child) {
  var parentNode;

  if (container.nodeType === COMMENT_NODE) {
    parentNode = container.parentNode;
    parentNode.insertBefore(child, container);
  } else {
    parentNode = container;
    parentNode.appendChild(child);
  } // This container might be used for a portal.
  // If something inside a portal is clicked, that click should bubble
  // through the React tree. However, on Mobile Safari the click would
  // never bubble through the *DOM* tree unless an ancestor with onclick
  // event exists. So we wouldn't see it and dispatch it.
  // This is why we ensure that non React root containers have inline onclick
  // defined.
  // https://github.com/facebook/react/issues/11918


  var reactRootContainer = container._reactRootContainer;

  if ((reactRootContainer === null || reactRootContainer === undefined) && parentNode.onclick === null) {
    // TODO: This cast may not be sound for SVG, MathML or custom elements.
    trapClickOnNonInteractiveElement(parentNode);
  }
}
function insertBefore(parentInstance, child, beforeChild) {
  parentInstance.insertBefore(child, beforeChild);
}
function insertInContainerBefore(container, child, beforeChild) {
  if (container.nodeType === COMMENT_NODE) {
    container.parentNode.insertBefore(child, beforeChild);
  } else {
    container.insertBefore(child, beforeChild);
  }
}

function removeChild(parentInstance, child) {
  parentInstance.removeChild(child);
}
function removeChildFromContainer(container, child) {
  if (container.nodeType === COMMENT_NODE) {
    container.parentNode.removeChild(child);
  } else {
    container.removeChild(child);
  }
}
function hideInstance(instance) {
  // TODO: Does this work for all element types? What about MathML? Should we
  // pass host context to this method?
  instance = instance;
  var style = instance.style;

  if (typeof style.setProperty === 'function') {
    style.setProperty('display', 'none', 'important');
  } else {
    style.display = 'none';
  }
}
function hideTextInstance(textInstance) {
  textInstance.nodeValue = '';
}
function unhideInstance(instance, props) {
  instance = instance;
  var styleProp = props[STYLE$1];
  var display = styleProp !== undefined && styleProp !== null && styleProp.hasOwnProperty('display') ? styleProp.display : null;
  instance.style.display = dangerousStyleValue('display', display);
}
function unhideTextInstance(textInstance, text) {
  textInstance.nodeValue = text;
}
function clearContainer(container) {
  if (container.nodeType === ELEMENT_NODE) {
    container.textContent = '';
  } else if (container.nodeType === DOCUMENT_NODE) {
    var body = container.body;

    if (body != null) {
      body.textContent = '';
    }
  }
} // -------------------
function canHydrateInstance(instance, type, props) {
  if (instance.nodeType !== ELEMENT_NODE || type.toLowerCase() !== instance.nodeName.toLowerCase()) {
    return null;
  } // This has now been refined to an element node.


  return instance;
}
function canHydrateTextInstance(instance, text) {
  if (text === '' || instance.nodeType !== TEXT_NODE) {
    // Empty strings are not parsed by HTML so there won't be a correct match here.
    return null;
  } // This has now been refined to a text node.


  return instance;
}
function isSuspenseInstancePending(instance) {
  return instance.data === SUSPENSE_PENDING_START_DATA;
}
function isSuspenseInstanceFallback(instance) {
  return instance.data === SUSPENSE_FALLBACK_START_DATA;
}

function getNextHydratable(node) {
  // Skip non-hydratable nodes.
  for (; node != null; node = node.nextSibling) {
    var nodeType = node.nodeType;

    if (nodeType === ELEMENT_NODE || nodeType === TEXT_NODE) {
      break;
    }
  }

  return node;
}

function getNextHydratableSibling(instance) {
  return getNextHydratable(instance.nextSibling);
}
function getFirstHydratableChild(parentInstance) {
  return getNextHydratable(parentInstance.firstChild);
}
function hydrateInstance(instance, type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
  precacheFiberNode(internalInstanceHandle, instance); // TODO: Possibly defer this until the commit phase where all the events
  // get attached.

  updateFiberProps(instance, props);
  var parentNamespace;

  {
    var hostContextDev = hostContext;
    parentNamespace = hostContextDev.namespace;
  }

  return diffHydratedProperties(instance, type, props, parentNamespace);
}
function hydrateTextInstance(textInstance, text, internalInstanceHandle) {
  precacheFiberNode(internalInstanceHandle, textInstance);
  return diffHydratedText(textInstance, text);
}
function getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance) {
  var node = suspenseInstance.nextSibling; // Skip past all nodes within this suspense boundary.
  // There might be nested nodes so we need to keep track of how
  // deep we are and only break out when we're back on top.

  var depth = 0;

  while (node) {
    if (node.nodeType === COMMENT_NODE) {
      var data = node.data;

      if (data === SUSPENSE_END_DATA) {
        if (depth === 0) {
          return getNextHydratableSibling(node);
        } else {
          depth--;
        }
      } else if (data === SUSPENSE_START_DATA || data === SUSPENSE_FALLBACK_START_DATA || data === SUSPENSE_PENDING_START_DATA) {
        depth++;
      }
    }

    node = node.nextSibling;
  } // TODO: Warn, we didn't find the end comment boundary.


  return null;
} // Returns the SuspenseInstance if this node is a direct child of a
// SuspenseInstance. I.e. if its previous sibling is a Comment with
// SUSPENSE_x_START_DATA. Otherwise, null.

function getParentSuspenseInstance(targetInstance) {
  var node = targetInstance.previousSibling; // Skip past all nodes within this suspense boundary.
  // There might be nested nodes so we need to keep track of how
  // deep we are and only break out when we're back on top.

  var depth = 0;

  while (node) {
    if (node.nodeType === COMMENT_NODE) {
      var data = node.data;

      if (data === SUSPENSE_START_DATA || data === SUSPENSE_FALLBACK_START_DATA || data === SUSPENSE_PENDING_START_DATA) {
        if (depth === 0) {
          return node;
        } else {
          depth--;
        }
      } else if (data === SUSPENSE_END_DATA) {
        depth++;
      }
    }

    node = node.previousSibling;
  }

  return null;
}
function commitHydratedContainer(container) {
  // Retry if any event replaying was blocked on this.
  retryIfBlockedOn(container);
}
function commitHydratedSuspenseInstance(suspenseInstance) {
  // Retry if any event replaying was blocked on this.
  retryIfBlockedOn(suspenseInstance);
}
function didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, text) {
  {
    warnForUnmatchedText(textInstance, text);
  }
}
function didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, text) {
  if ( parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) {
    warnForUnmatchedText(textInstance, text);
  }
}
function didNotHydrateContainerInstance(parentContainer, instance) {
  {
    if (instance.nodeType === ELEMENT_NODE) {
      warnForDeletedHydratableElement(parentContainer, instance);
    } else if (instance.nodeType === COMMENT_NODE) ; else {
      warnForDeletedHydratableText(parentContainer, instance);
    }
  }
}
function didNotHydrateInstance(parentType, parentProps, parentInstance, instance) {
  if ( parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) {
    if (instance.nodeType === ELEMENT_NODE) {
      warnForDeletedHydratableElement(parentInstance, instance);
    } else if (instance.nodeType === COMMENT_NODE) ; else {
      warnForDeletedHydratableText(parentInstance, instance);
    }
  }
}
function didNotFindHydratableContainerInstance(parentContainer, type, props) {
  {
    warnForInsertedHydratedElement(parentContainer, type);
  }
}
function didNotFindHydratableContainerTextInstance(parentContainer, text) {
  {
    warnForInsertedHydratedText(parentContainer, text);
  }
}
function didNotFindHydratableInstance(parentType, parentProps, parentInstance, type, props) {
  if ( parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) {
    warnForInsertedHydratedElement(parentInstance, type);
  }
}
function didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, text) {
  if ( parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) {
    warnForInsertedHydratedText(parentInstance, text);
  }
}
function didNotFindHydratableSuspenseInstance(parentType, parentProps, parentInstance) {
  if ( parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) ;
}
var clientId = 0;
function makeClientIdInDEV(warnOnAccessInDEV) {
  var id = 'r:' + (clientId++).toString(36);
  return {
    toString: function () {
      warnOnAccessInDEV();
      return id;
    },
    valueOf: function () {
      warnOnAccessInDEV();
      return id;
    }
  };
}
function isOpaqueHydratingObject(value) {
  return value !== null && typeof value === 'object' && value.$$typeof === REACT_OPAQUE_ID_TYPE;
}
function makeOpaqueHydratingObject(attemptToReadValue) {
  return {
    $$typeof: REACT_OPAQUE_ID_TYPE,
    toString: attemptToReadValue,
    valueOf: attemptToReadValue
  };
}
function preparePortalMount(portalInstance) {
  {
    listenToAllSupportedEvents(portalInstance);
  }
}

var randomKey = Math.random().toString(36).slice(2);
var internalInstanceKey = '__reactFiber$' + randomKey;
var internalPropsKey = '__reactProps$' + randomKey;
var internalContainerInstanceKey = '__reactContainer$' + randomKey;
var internalEventHandlersKey = '__reactEvents$' + randomKey;
function precacheFiberNode(hostInst, node) {
  node[internalInstanceKey] = hostInst;
}
function markContainerAsRoot(hostRoot, node) {
  node[internalContainerInstanceKey] = hostRoot;
}
function unmarkContainerAsRoot(node) {
  node[internalContainerInstanceKey] = null;
}
function isContainerMarkedAsRoot(node) {
  return !!node[internalContainerInstanceKey];
} // Given a DOM node, return the closest HostComponent or HostText fiber ancestor.
// If the target node is part of a hydrated or not yet rendered subtree, then
// this may also return a SuspenseComponent or HostRoot to indicate that.
// Conceptually the HostRoot fiber is a child of the Container node. So if you
// pass the Container node as the targetNode, you will not actually get the
// HostRoot back. To get to the HostRoot, you need to pass a child of it.
// The same thing applies to Suspense boundaries.

function getClosestInstanceFromNode(targetNode) {
  var targetInst = targetNode[internalInstanceKey];

  if (targetInst) {
    // Don't return HostRoot or SuspenseComponent here.
    return targetInst;
  } // If the direct event target isn't a React owned DOM node, we need to look
  // to see if one of its parents is a React owned DOM node.


  var parentNode = targetNode.parentNode;

  while (parentNode) {
    // We'll check if this is a container root that could include
    // React nodes in the future. We need to check this first because
    // if we're a child of a dehydrated container, we need to first
    // find that inner container before moving on to finding the parent
    // instance. Note that we don't check this field on  the targetNode
    // itself because the fibers are conceptually between the container
    // node and the first child. It isn't surrounding the container node.
    // If it's not a container, we check if it's an instance.
    targetInst = parentNode[internalContainerInstanceKey] || parentNode[internalInstanceKey];

    if (targetInst) {
      // Since this wasn't the direct target of the event, we might have
      // stepped past dehydrated DOM nodes to get here. However they could
      // also have been non-React nodes. We need to answer which one.
      // If we the instance doesn't have any children, then there can't be
      // a nested suspense boundary within it. So we can use this as a fast
      // bailout. Most of the time, when people add non-React children to
      // the tree, it is using a ref to a child-less DOM node.
      // Normally we'd only need to check one of the fibers because if it
      // has ever gone from having children to deleting them or vice versa
      // it would have deleted the dehydrated boundary nested inside already.
      // However, since the HostRoot starts out with an alternate it might
      // have one on the alternate so we need to check in case this was a
      // root.
      var alternate = targetInst.alternate;

      if (targetInst.child !== null || alternate !== null && alternate.child !== null) {
        // Next we need to figure out if the node that skipped past is
        // nested within a dehydrated boundary and if so, which one.
        var suspenseInstance = getParentSuspenseInstance(targetNode);

        while (suspenseInstance !== null) {
          // We found a suspense instance. That means that we haven't
          // hydrated it yet. Even though we leave the comments in the
          // DOM after hydrating, and there are boundaries in the DOM
          // that could already be hydrated, we wouldn't have found them
          // through this pass since if the target is hydrated it would
          // have had an internalInstanceKey on it.
          // Let's get the fiber associated with the SuspenseComponent
          // as the deepest instance.
          var targetSuspenseInst = suspenseInstance[internalInstanceKey];

          if (targetSuspenseInst) {
            return targetSuspenseInst;
          } // If we don't find a Fiber on the comment, it might be because
          // we haven't gotten to hydrate it yet. There might still be a
          // parent boundary that hasn't above this one so we need to find
          // the outer most that is known.


          suspenseInstance = getParentSuspenseInstance(suspenseInstance); // If we don't find one, then that should mean that the parent
          // host component also hasn't hydrated yet. We can return it
          // below since it will bail out on the isMounted check later.
        }
      }

      return targetInst;
    }

    targetNode = parentNode;
    parentNode = targetNode.parentNode;
  }

  return null;
}
/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */

function getInstanceFromNode(node) {
  var inst = node[internalInstanceKey] || node[internalContainerInstanceKey];

  if (inst) {
    if (inst.tag === HostComponent || inst.tag === HostText || inst.tag === SuspenseComponent || inst.tag === HostRoot) {
      return inst;
    } else {
      return null;
    }
  }

  return null;
}
/**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
 * DOM node.
 */

function getNodeFromInstance(inst) {
  if (inst.tag === HostComponent || inst.tag === HostText) {
    // In Fiber this, is just the state node right now. We assume it will be
    // a host component or host text.
    return inst.stateNode;
  } // Without this first invariant, passing a non-DOM-component triggers the next
  // invariant for a missing parent, which is super confusing.


  {
    {
      throw Error( "getNodeFromInstance: Invalid argument." );
    }
  }
}
function getFiberCurrentPropsFromNode(node) {
  return node[internalPropsKey] || null;
}
function updateFiberProps(node, props) {
  node[internalPropsKey] = props;
}
function getEventListenerSet(node) {
  var elementListenerSet = node[internalEventHandlersKey];

  if (elementListenerSet === undefined) {
    elementListenerSet = node[internalEventHandlersKey] = new Set();
  }

  return elementListenerSet;
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var valueStack = [];
var fiberStack;

{
  fiberStack = [];
}

var index = -1;

function createCursor(defaultValue) {
  return {
    current: defaultValue
  };
}

function pop(cursor, fiber) {
  if (index < 0) {
    {
      error('Unexpected pop.');
    }

    return;
  }

  {
    if (fiber !== fiberStack[index]) {
      error('Unexpected Fiber popped.');
    }
  }

  cursor.current = valueStack[index];
  valueStack[index] = null;

  {
    fiberStack[index] = null;
  }

  index--;
}

function push(cursor, value, fiber) {
  index++;
  valueStack[index] = cursor.current;

  {
    fiberStack[index] = fiber;
  }

  cursor.current = value;
}

var warnedAboutMissingGetChildContext;

{
  warnedAboutMissingGetChildContext = {};
}

var emptyContextObject = {};

{
  Object.freeze(emptyContextObject);
} // A cursor to the current merged context object on the stack.


var contextStackCursor = createCursor(emptyContextObject); // A cursor to a boolean indicating whether the context has changed.

var didPerformWorkStackCursor = createCursor(false); // Keep track of the previous context object that was on the stack.
// We use this to get access to the parent context after we have already
// pushed the next context provider, and now need to merge their contexts.

var previousContext = emptyContextObject;

function getUnmaskedContext(workInProgress, Component, didPushOwnContextIfProvider) {
  {
    if (didPushOwnContextIfProvider && isContextProvider(Component)) {
      // If the fiber is a context provider itself, when we read its context
      // we may have already pushed its own child context on the stack. A context
      // provider should not "see" its own child context. Therefore we read the
      // previous (parent) context instead for a context provider.
      return previousContext;
    }

    return contextStackCursor.current;
  }
}

function cacheContext(workInProgress, unmaskedContext, maskedContext) {
  {
    var instance = workInProgress.stateNode;
    instance.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext;
    instance.__reactInternalMemoizedMaskedChildContext = maskedContext;
  }
}

function getMaskedContext(workInProgress, unmaskedContext) {
  {
    var type = workInProgress.type;
    var contextTypes = type.contextTypes;

    if (!contextTypes) {
      return emptyContextObject;
    } // Avoid recreating masked context unless unmasked context has changed.
    // Failing to do this will result in unnecessary calls to componentWillReceiveProps.
    // This may trigger infinite loops if componentWillReceiveProps calls setState.


    var instance = workInProgress.stateNode;

    if (instance && instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext) {
      return instance.__reactInternalMemoizedMaskedChildContext;
    }

    var context = {};

    for (var key in contextTypes) {
      context[key] = unmaskedContext[key];
    }

    {
      var name = getComponentName(type) || 'Unknown';
      checkPropTypes(contextTypes, context, 'context', name);
    } // Cache unmasked context so we can avoid recreating masked context unless necessary.
    // Context is created before the class component is instantiated so check for instance.


    if (instance) {
      cacheContext(workInProgress, unmaskedContext, context);
    }

    return context;
  }
}

function hasContextChanged() {
  {
    return didPerformWorkStackCursor.current;
  }
}

function isContextProvider(type) {
  {
    var childContextTypes = type.childContextTypes;
    return childContextTypes !== null && childContextTypes !== undefined;
  }
}

function popContext(fiber) {
  {
    pop(didPerformWorkStackCursor, fiber);
    pop(contextStackCursor, fiber);
  }
}

function popTopLevelContextObject(fiber) {
  {
    pop(didPerformWorkStackCursor, fiber);
    pop(contextStackCursor, fiber);
  }
}

function pushTopLevelContextObject(fiber, context, didChange) {
  {
    if (!(contextStackCursor.current === emptyContextObject)) {
      {
        throw Error( "Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue." );
      }
    }

    push(contextStackCursor, context, fiber);
    push(didPerformWorkStackCursor, didChange, fiber);
  }
}

function processChildContext(fiber, type, parentContext) {
  {
    var instance = fiber.stateNode;
    var childContextTypes = type.childContextTypes; // TODO (bvaughn) Replace this behavior with an invariant() in the future.
    // It has only been added in Fiber to match the (unintentional) behavior in Stack.

    if (typeof instance.getChildContext !== 'function') {
      {
        var componentName = getComponentName(type) || 'Unknown';

        if (!warnedAboutMissingGetChildContext[componentName]) {
          warnedAboutMissingGetChildContext[componentName] = true;

          error('%s.childContextTypes is specified but there is no getChildContext() method ' + 'on the instance. You can either define getChildContext() on %s or remove ' + 'childContextTypes from it.', componentName, componentName);
        }
      }

      return parentContext;
    }

    var childContext = instance.getChildContext();

    for (var contextKey in childContext) {
      if (!(contextKey in childContextTypes)) {
        {
          throw Error( (getComponentName(type) || 'Unknown') + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes." );
        }
      }
    }

    {
      var name = getComponentName(type) || 'Unknown';
      checkPropTypes(childContextTypes, childContext, 'child context', name);
    }

    return _assign({}, parentContext, childContext);
  }
}

function pushContextProvider(workInProgress) {
  {
    var instance = workInProgress.stateNode; // We push the context as early as possible to ensure stack integrity.
    // If the instance does not exist yet, we will push null at first,
    // and replace it on the stack later when invalidating the context.

    var memoizedMergedChildContext = instance && instance.__reactInternalMemoizedMergedChildContext || emptyContextObject; // Remember the parent context so we can merge with it later.
    // Inherit the parent's did-perform-work value to avoid inadvertently blocking updates.

    previousContext = contextStackCursor.current;
    push(contextStackCursor, memoizedMergedChildContext, workInProgress);
    push(didPerformWorkStackCursor, didPerformWorkStackCursor.current, workInProgress);
    return true;
  }
}

function invalidateContextProvider(workInProgress, type, didChange) {
  {
    var instance = workInProgress.stateNode;

    if (!instance) {
      {
        throw Error( "Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue." );
      }
    }

    if (didChange) {
      // Merge parent and own context.
      // Skip this if we're not updating due to sCU.
      // This avoids unnecessarily recomputing memoized values.
      var mergedContext = processChildContext(workInProgress, type, previousContext);
      instance.__reactInternalMemoizedMergedChildContext = mergedContext; // Replace the old (or empty) context with the new one.
      // It is important to unwind the context in the reverse order.

      pop(didPerformWorkStackCursor, workInProgress);
      pop(contextStackCursor, workInProgress); // Now push the new context and mark that it has changed.

      push(contextStackCursor, mergedContext, workInProgress);
      push(didPerformWorkStackCursor, didChange, workInProgress);
    } else {
      pop(didPerformWorkStackCursor, workInProgress);
      push(didPerformWorkStackCursor, didChange, workInProgress);
    }
  }
}

function findCurrentUnmaskedContext(fiber) {
  {
    // Currently this is only used with renderSubtreeIntoContainer; not sure if it
    // makes sense elsewhere
    if (!(isFiberMounted(fiber) && fiber.tag === ClassComponent)) {
      {
        throw Error( "Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue." );
      }
    }

    var node = fiber;

    do {
      switch (node.tag) {
        case HostRoot:
          return node.stateNode.context;

        case ClassComponent:
          {
            var Component = node.type;

            if (isContextProvider(Component)) {
              return node.stateNode.__reactInternalMemoizedMergedChildContext;
            }

            break;
          }
      }

      node = node.return;
    } while (node !== null);

    {
      {
        throw Error( "Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue." );
      }
    }
  }
}

var LegacyRoot = 0;
var BlockingRoot = 1;
var ConcurrentRoot = 2;

var rendererID = null;
var injectedHook = null;
var hasLoggedError = false;
var isDevToolsPresent = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined';
function injectInternals(internals) {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
    // No DevTools
    return false;
  }

  var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;

  if (hook.isDisabled) {
    // This isn't a real property on the hook, but it can be set to opt out
    // of DevTools integration and associated warnings and logs.
    // https://github.com/facebook/react/issues/3877
    return true;
  }

  if (!hook.supportsFiber) {
    {
      error('The installed version of React DevTools is too old and will not work ' + 'with the current version of React. Please update React DevTools. ' + 'https://reactjs.org/link/react-devtools');
    } // DevTools exists, even though it doesn't support Fiber.


    return true;
  }

  try {
    rendererID = hook.inject(internals); // We have successfully injected, so now it is safe to set up hooks.

    injectedHook = hook;
  } catch (err) {
    // Catch all errors because it is unsafe to throw during initialization.
    {
      error('React instrumentation encountered an error: %s.', err);
    }
  } // DevTools exists


  return true;
}
function onScheduleRoot(root, children) {
  {
    if (injectedHook && typeof injectedHook.onScheduleFiberRoot === 'function') {
      try {
        injectedHook.onScheduleFiberRoot(rendererID, root, children);
      } catch (err) {
        if ( !hasLoggedError) {
          hasLoggedError = true;

          error('React instrumentation encountered an error: %s', err);
        }
      }
    }
  }
}
function onCommitRoot(root, priorityLevel) {
  if (injectedHook && typeof injectedHook.onCommitFiberRoot === 'function') {
    try {
      var didError = (root.current.flags & DidCapture) === DidCapture;

      if (enableProfilerTimer) {
        injectedHook.onCommitFiberRoot(rendererID, root, priorityLevel, didError);
      } else {
        injectedHook.onCommitFiberRoot(rendererID, root, undefined, didError);
      }
    } catch (err) {
      {
        if (!hasLoggedError) {
          hasLoggedError = true;

          error('React instrumentation encountered an error: %s', err);
        }
      }
    }
  }
}
function onCommitUnmount(fiber) {
  if (injectedHook && typeof injectedHook.onCommitFiberUnmount === 'function') {
    try {
      injectedHook.onCommitFiberUnmount(rendererID, fiber);
    } catch (err) {
      {
        if (!hasLoggedError) {
          hasLoggedError = true;

          error('React instrumentation encountered an error: %s', err);
        }
      }
    }
  }
}

var Scheduler_runWithPriority = Scheduler.unstable_runWithPriority,
    Scheduler_scheduleCallback = Scheduler.unstable_scheduleCallback,
    Scheduler_cancelCallback = Scheduler.unstable_cancelCallback,
    Scheduler_shouldYield = Scheduler.unstable_shouldYield,
    Scheduler_requestPaint = Scheduler.unstable_requestPaint,
    Scheduler_now$1 = Scheduler.unstable_now,
    Scheduler_getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel,
    Scheduler_ImmediatePriority = Scheduler.unstable_ImmediatePriority,
    Scheduler_UserBlockingPriority = Scheduler.unstable_UserBlockingPriority,
    Scheduler_NormalPriority = Scheduler.unstable_NormalPriority,
    Scheduler_LowPriority = Scheduler.unstable_LowPriority,
    Scheduler_IdlePriority = Scheduler.unstable_IdlePriority;

{
  // Provide explicit error message when production+profiling bundle of e.g.
  // react-dom is used with production (non-profiling) bundle of
  // scheduler/tracing
  if (!(tracing.__interactionsRef != null && tracing.__interactionsRef.current != null)) {
    {
      throw Error( "It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling" );
    }
  }
}

var fakeCallbackNode = {}; // Except for NoPriority, these correspond to Scheduler priorities. We use
// ascending numbers so we can compare them like numbers. They start at 90 to
// avoid clashing with Scheduler's priorities.

var ImmediatePriority$1 = 99;
var UserBlockingPriority$2 = 98;
var NormalPriority$1 = 97;
var LowPriority$1 = 96;
var IdlePriority$1 = 95; // NoPriority is the absence of priority. Also React-only.

var NoPriority$1 = 90;
var shouldYield = Scheduler_shouldYield;
var requestPaint = // Fall back gracefully if we're running an older version of Scheduler.
Scheduler_requestPaint !== undefined ? Scheduler_requestPaint : function () {};
var syncQueue = null;
var immediateQueueCallbackNode = null;
var isFlushingSyncQueue = false;
var initialTimeMs$1 = Scheduler_now$1(); // If the initial timestamp is reasonably small, use Scheduler's `now` directly.
// This will be the case for modern browsers that support `performance.now`. In
// older browsers, Scheduler falls back to `Date.now`, which returns a Unix
// timestamp. In that case, subtract the module initialization time to simulate
// the behavior of performance.now and keep our times small enough to fit
// within 32 bits.
// TODO: Consider lifting this into Scheduler.

var now = initialTimeMs$1 < 10000 ? Scheduler_now$1 : function () {
  return Scheduler_now$1() - initialTimeMs$1;
};
function getCurrentPriorityLevel() {
  switch (Scheduler_getCurrentPriorityLevel()) {
    case Scheduler_ImmediatePriority:
      return ImmediatePriority$1;

    case Scheduler_UserBlockingPriority:
      return UserBlockingPriority$2;

    case Scheduler_NormalPriority:
      return NormalPriority$1;

    case Scheduler_LowPriority:
      return LowPriority$1;

    case Scheduler_IdlePriority:
      return IdlePriority$1;

    default:
      {
        {
          throw Error( "Unknown priority level." );
        }
      }

  }
}

function reactPriorityToSchedulerPriority(reactPriorityLevel) {
  switch (reactPriorityLevel) {
    case ImmediatePriority$1:
      return Scheduler_ImmediatePriority;

    case UserBlockingPriority$2:
      return Scheduler_UserBlockingPriority;

    case NormalPriority$1:
      return Scheduler_NormalPriority;

    case LowPriority$1:
      return Scheduler_LowPriority;

    case IdlePriority$1:
      return Scheduler_IdlePriority;

    default:
      {
        {
          throw Error( "Unknown priority level." );
        }
      }

  }
}

function runWithPriority$1(reactPriorityLevel, fn) {
  var priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
  return Scheduler_runWithPriority(priorityLevel, fn);
}
function scheduleCallback(reactPriorityLevel, callback, options) {
  var priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
  return Scheduler_scheduleCallback(priorityLevel, callback, options);
}
function scheduleSyncCallback(callback) {
  // Push this callback into an internal queue. We'll flush these either in
  // the next tick, or earlier if something calls `flushSyncCallbackQueue`.
  if (syncQueue === null) {
    syncQueue = [callback]; // Flush the queue in the next tick, at the earliest.

    immediateQueueCallbackNode = Scheduler_scheduleCallback(Scheduler_ImmediatePriority, flushSyncCallbackQueueImpl);
  } else {
    // Push onto existing queue. Don't need to schedule a callback because
    // we already scheduled one when we created the queue.
    syncQueue.push(callback);
  }

  return fakeCallbackNode;
}
function cancelCallback(callbackNode) {
  if (callbackNode !== fakeCallbackNode) {
    Scheduler_cancelCallback(callbackNode);
  }
}
function flushSyncCallbackQueue() {
  if (immediateQueueCallbackNode !== null) {
    var node = immediateQueueCallbackNode;
    immediateQueueCallbackNode = null;
    Scheduler_cancelCallback(node);
  }

  flushSyncCallbackQueueImpl();
}

function flushSyncCallbackQueueImpl() {
  if (!isFlushingSyncQueue && syncQueue !== null) {
    // Prevent re-entrancy.
    isFlushingSyncQueue = true;
    var i = 0;

    {
      try {
        var _isSync2 = true;
        var _queue = syncQueue;
        runWithPriority$1(ImmediatePriority$1, function () {
          for (; i < _queue.length; i++) {
            var callback = _queue[i];

            do {
              callback = callback(_isSync2);
            } while (callback !== null);
          }
        });
        syncQueue = null;
      } catch (error) {
        // If something throws, leave the remaining callbacks on the queue.
        if (syncQueue !== null) {
          syncQueue = syncQueue.slice(i + 1);
        } // Resume flushing in the next tick


        Scheduler_scheduleCallback(Scheduler_ImmediatePriority, flushSyncCallbackQueue);
        throw error;
      } finally {
        isFlushingSyncQueue = false;
      }
    }
  }
}

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

var NoMode = 0;
var StrictMode = 1; // TODO: Remove BlockingMode and ConcurrentMode by reading from the root
// tag instead

var BlockingMode = 2;
var ConcurrentMode = 4;
var ProfileMode = 8;
var DebugTracingMode = 16;

var ReactCurrentBatchConfig = ReactSharedInternals.ReactCurrentBatchConfig;
var NoTransition = 0;
function requestCurrentTransition() {
  return ReactCurrentBatchConfig.transition;
}

var ReactStrictModeWarnings = {
  recordUnsafeLifecycleWarnings: function (fiber, instance) {},
  flushPendingUnsafeLifecycleWarnings: function () {},
  recordLegacyContextWarning: function (fiber, instance) {},
  flushLegacyContextWarning: function () {},
  discardPendingWarnings: function () {}
};

{
  var findStrictRoot = function (fiber) {
    var maybeStrictRoot = null;
    var node = fiber;

    while (node !== null) {
      if (node.mode & StrictMode) {
        maybeStrictRoot = node;
      }

      node = node.return;
    }

    return maybeStrictRoot;
  };

  var setToSortedString = function (set) {
    var array = [];
    set.forEach(function (value) {
      array.push(value);
    });
    return array.sort().join(', ');
  };

  var pendingComponentWillMountWarnings = [];
  var pendingUNSAFE_ComponentWillMountWarnings = [];
  var pendingComponentWillReceivePropsWarnings = [];
  var pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
  var pendingComponentWillUpdateWarnings = [];
  var pendingUNSAFE_ComponentWillUpdateWarnings = []; // Tracks components we have already warned about.

  var didWarnAboutUnsafeLifecycles = new Set();

  ReactStrictModeWarnings.recordUnsafeLifecycleWarnings = function (fiber, instance) {
    // Dedup strategy: Warn once per component.
    if (didWarnAboutUnsafeLifecycles.has(fiber.type)) {
      return;
    }

    if (typeof instance.componentWillMount === 'function' && // Don't warn about react-lifecycles-compat polyfilled components.
    instance.componentWillMount.__suppressDeprecationWarning !== true) {
      pendingComponentWillMountWarnings.push(fiber);
    }

    if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillMount === 'function') {
      pendingUNSAFE_ComponentWillMountWarnings.push(fiber);
    }

    if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
      pendingComponentWillReceivePropsWarnings.push(fiber);
    }

    if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
      pendingUNSAFE_ComponentWillReceivePropsWarnings.push(fiber);
    }

    if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
      pendingComponentWillUpdateWarnings.push(fiber);
    }

    if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillUpdate === 'function') {
      pendingUNSAFE_ComponentWillUpdateWarnings.push(fiber);
    }
  };

  ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings = function () {
    // We do an initial pass to gather component names
    var componentWillMountUniqueNames = new Set();

    if (pendingComponentWillMountWarnings.length > 0) {
      pendingComponentWillMountWarnings.forEach(function (fiber) {
        componentWillMountUniqueNames.add(getComponentName(fiber.type) || 'Component');
        didWarnAboutUnsafeLifecycles.add(fiber.type);
      });
      pendingComponentWillMountWarnings = [];
    }

    var UNSAFE_componentWillMountUniqueNames = new Set();

    if (pendingUNSAFE_ComponentWillMountWarnings.length > 0) {
      pendingUNSAFE_ComponentWillMountWarnings.forEach(function (fiber) {
        UNSAFE_componentWillMountUniqueNames.add(getComponentName(fiber.type) || 'Component');
        didWarnAboutUnsafeLifecycles.add(fiber.type);
      });
      pendingUNSAFE_ComponentWillMountWarnings = [];
    }

    var componentWillReceivePropsUniqueNames = new Set();

    if (pendingComponentWillReceivePropsWarnings.length > 0) {
      pendingComponentWillReceivePropsWarnings.forEach(function (fiber) {
        componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type) || 'Component');
        didWarnAboutUnsafeLifecycles.add(fiber.type);
      });
      pendingComponentWillReceivePropsWarnings = [];
    }

    var UNSAFE_componentWillReceivePropsUniqueNames = new Set();

    if (pendingUNSAFE_ComponentWillReceivePropsWarnings.length > 0) {
      pendingUNSAFE_ComponentWillReceivePropsWarnings.forEach(function (fiber) {
        UNSAFE_componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type) || 'Component');
        didWarnAboutUnsafeLifecycles.add(fiber.type);
      });
      pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
    }

    var componentWillUpdateUniqueNames = new Set();

    if (pendingComponentWillUpdateWarnings.length > 0) {
      pendingComponentWillUpdateWarnings.forEach(function (fiber) {
        componentWillUpdateUniqueNames.add(getComponentName(fiber.type) || 'Component');
        didWarnAboutUnsafeLifecycles.add(fiber.type);
      });
      pendingComponentWillUpdateWarnings = [];
    }

    var UNSAFE_componentWillUpdateUniqueNames = new Set();

    if (pendingUNSAFE_ComponentWillUpdateWarnings.length > 0) {
      pendingUNSAFE_ComponentWillUpdateWarnings.forEach(function (fiber) {
        UNSAFE_componentWillUpdateUniqueNames.add(getComponentName(fiber.type) || 'Component');
        didWarnAboutUnsafeLifecycles.add(fiber.type);
      });
      pendingUNSAFE_ComponentWillUpdateWarnings = [];
    } // Finally, we flush all the warnings
    // UNSAFE_ ones before the deprecated ones, since they'll be 'louder'


    if (UNSAFE_componentWillMountUniqueNames.size > 0) {
      var sortedNames = setToSortedString(UNSAFE_componentWillMountUniqueNames);

      error('Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move code with side effects to componentDidMount, and set initial state in the constructor.\n' + '\nPlease update the following components: %s', sortedNames);
    }

    if (UNSAFE_componentWillReceivePropsUniqueNames.size > 0) {
      var _sortedNames = setToSortedString(UNSAFE_componentWillReceivePropsUniqueNames);

      error('Using UNSAFE_componentWillReceiveProps in strict mode is not recommended ' + 'and may indicate bugs in your code. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move data fetching code or side effects to componentDidUpdate.\n' + "* If you're updating state whenever props change, " + 'refactor your code to use memoization techniques or move it to ' + 'static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n' + '\nPlease update the following components: %s', _sortedNames);
    }

    if (UNSAFE_componentWillUpdateUniqueNames.size > 0) {
      var _sortedNames2 = setToSortedString(UNSAFE_componentWillUpdateUniqueNames);

      error('Using UNSAFE_componentWillUpdate in strict mode is not recommended ' + 'and may indicate bugs in your code. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move data fetching code or side effects to componentDidUpdate.\n' + '\nPlease update the following components: %s', _sortedNames2);
    }

    if (componentWillMountUniqueNames.size > 0) {
      var _sortedNames3 = setToSortedString(componentWillMountUniqueNames);

      warn('componentWillMount has been renamed, and is not recommended for use. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move code with side effects to componentDidMount, and set initial state in the constructor.\n' + '* Rename componentWillMount to UNSAFE_componentWillMount to suppress ' + 'this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. ' + 'To rename all deprecated lifecycles to their new names, you can run ' + '`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n' + '\nPlease update the following components: %s', _sortedNames3);
    }

    if (componentWillReceivePropsUniqueNames.size > 0) {
      var _sortedNames4 = setToSortedString(componentWillReceivePropsUniqueNames);

      warn('componentWillReceiveProps has been renamed, and is not recommended for use. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move data fetching code or side effects to componentDidUpdate.\n' + "* If you're updating state whenever props change, refactor your " + 'code to use memoization techniques or move it to ' + 'static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n' + '* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress ' + 'this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. ' + 'To rename all deprecated lifecycles to their new names, you can run ' + '`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n' + '\nPlease update the following components: %s', _sortedNames4);
    }

    if (componentWillUpdateUniqueNames.size > 0) {
      var _sortedNames5 = setToSortedString(componentWillUpdateUniqueNames);

      warn('componentWillUpdate has been renamed, and is not recommended for use. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move data fetching code or side effects to componentDidUpdate.\n' + '* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress ' + 'this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. ' + 'To rename all deprecated lifecycles to their new names, you can run ' + '`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n' + '\nPlease update the following components: %s', _sortedNames5);
    }
  };

  var pendingLegacyContextWarning = new Map(); // Tracks components we have already warned about.

  var didWarnAboutLegacyContext = new Set();

  ReactStrictModeWarnings.recordLegacyContextWarning = function (fiber, instance) {
    var strictRoot = findStrictRoot(fiber);

    if (strictRoot === null) {
      error('Expected to find a StrictMode component in a strict mode tree. ' + 'This error is likely caused by a bug in React. Please file an issue.');

      return;
    } // Dedup strategy: Warn once per component.


    if (didWarnAboutLegacyContext.has(fiber.type)) {
      return;
    }

    var warningsForRoot = pendingLegacyContextWarning.get(strictRoot);

    if (fiber.type.contextTypes != null || fiber.type.childContextTypes != null || instance !== null && typeof instance.getChildContext === 'function') {
      if (warningsForRoot === undefined) {
        warningsForRoot = [];
        pendingLegacyContextWarning.set(strictRoot, warningsForRoot);
      }

      warningsForRoot.push(fiber);
    }
  };

  ReactStrictModeWarnings.flushLegacyContextWarning = function () {
    pendingLegacyContextWarning.forEach(function (fiberArray, strictRoot) {
      if (fiberArray.length === 0) {
        return;
      }

      var firstFiber = fiberArray[0];
      var uniqueNames = new Set();
      fiberArray.forEach(function (fiber) {
        uniqueNames.add(getComponentName(fiber.type) || 'Component');
        didWarnAboutLegacyContext.add(fiber.type);
      });
      var sortedNames = setToSortedString(uniqueNames);

      try {
        setCurrentFiber(firstFiber);

        error('Legacy context API has been detected within a strict-mode tree.' + '\n\nThe old API will be supported in all 16.x releases, but applications ' + 'using it should migrate to the new version.' + '\n\nPlease update the following components: %s' + '\n\nLearn more about this warning here: https://reactjs.org/link/legacy-context', sortedNames);
      } finally {
        resetCurrentFiber();
      }
    });
  };

  ReactStrictModeWarnings.discardPendingWarnings = function () {
    pendingComponentWillMountWarnings = [];
    pendingUNSAFE_ComponentWillMountWarnings = [];
    pendingComponentWillReceivePropsWarnings = [];
    pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
    pendingComponentWillUpdateWarnings = [];
    pendingUNSAFE_ComponentWillUpdateWarnings = [];
    pendingLegacyContextWarning = new Map();
  };
}

function resolveDefaultProps(Component, baseProps) {
  if (Component && Component.defaultProps) {
    // Resolve default props. Taken from ReactElement
    var props = _assign({}, baseProps);

    var defaultProps = Component.defaultProps;

    for (var propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }

    return props;
  }

  return baseProps;
}

// Max 31 bit integer. The max integer size in V8 for 32-bit systems.
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111
var MAX_SIGNED_31_BIT_INT = 1073741823;

var valueCursor = createCursor(null);
var rendererSigil;

{
  // Use this to detect multiple renderers using the same context
  rendererSigil = {};
}

var currentlyRenderingFiber = null;
var lastContextDependency = null;
var lastContextWithAllBitsObserved = null;
var isDisallowedContextReadInDEV = false;
function resetContextDependencies() {
  // This is called right before React yields execution, to ensure `readContext`
  // cannot be called outside the render phase.
  currentlyRenderingFiber = null;
  lastContextDependency = null;
  lastContextWithAllBitsObserved = null;

  {
    isDisallowedContextReadInDEV = false;
  }
}
function enterDisallowedContextReadInDEV() {
  {
    isDisallowedContextReadInDEV = true;
  }
}
function exitDisallowedContextReadInDEV() {
  {
    isDisallowedContextReadInDEV = false;
  }
}
function pushProvider(providerFiber, nextValue) {
  var context = providerFiber.type._context;

  {
    push(valueCursor, context._currentValue, providerFiber);
    context._currentValue = nextValue;

    {
      if (context._currentRenderer !== undefined && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
        error('Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.');
      }

      context._currentRenderer = rendererSigil;
    }
  }
}
function popProvider(providerFiber) {
  var currentValue = valueCursor.current;
  pop(valueCursor, providerFiber);
  var context = providerFiber.type._context;

  {
    context._currentValue = currentValue;
  }
}
function calculateChangedBits(context, newValue, oldValue) {
  if (objectIs(oldValue, newValue)) {
    // No change
    return 0;
  } else {
    var changedBits = typeof context._calculateChangedBits === 'function' ? context._calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

    {
      if ((changedBits & MAX_SIGNED_31_BIT_INT) !== changedBits) {
        error('calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
      }
    }

    return changedBits | 0;
  }
}
function scheduleWorkOnParentPath(parent, renderLanes) {
  // Update the child lanes of all the ancestors, including the alternates.
  var node = parent;

  while (node !== null) {
    var alternate = node.alternate;

    if (!isSubsetOfLanes(node.childLanes, renderLanes)) {
      node.childLanes = mergeLanes(node.childLanes, renderLanes);

      if (alternate !== null) {
        alternate.childLanes = mergeLanes(alternate.childLanes, renderLanes);
      }
    } else if (alternate !== null && !isSubsetOfLanes(alternate.childLanes, renderLanes)) {
      alternate.childLanes = mergeLanes(alternate.childLanes, renderLanes);
    } else {
      // Neither alternate was updated, which means the rest of the
      // ancestor path already has sufficient priority.
      break;
    }

    node = node.return;
  }
}
function propagateContextChange(workInProgress, context, changedBits, renderLanes) {
  var fiber = workInProgress.child;

  if (fiber !== null) {
    // Set the return pointer of the child to the work-in-progress fiber.
    fiber.return = workInProgress;
  }

  while (fiber !== null) {
    var nextFiber = void 0; // Visit this fiber.

    var list = fiber.dependencies;

    if (list !== null) {
      nextFiber = fiber.child;
      var dependency = list.firstContext;

      while (dependency !== null) {
        // Check if the context matches.
        if (dependency.context === context && (dependency.observedBits & changedBits) !== 0) {
          // Match! Schedule an update on this fiber.
          if (fiber.tag === ClassComponent) {
            // Schedule a force update on the work-in-progress.
            var update = createUpdate(NoTimestamp, pickArbitraryLane(renderLanes));
            update.tag = ForceUpdate; // TODO: Because we don't have a work-in-progress, this will add the
            // update to the current fiber, too, which means it will persist even if
            // this render is thrown away. Since it's a race condition, not sure it's
            // worth fixing.

            enqueueUpdate(fiber, update);
          }

          fiber.lanes = mergeLanes(fiber.lanes, renderLanes);
          var alternate = fiber.alternate;

          if (alternate !== null) {
            alternate.lanes = mergeLanes(alternate.lanes, renderLanes);
          }

          scheduleWorkOnParentPath(fiber.return, renderLanes); // Mark the updated lanes on the list, too.

          list.lanes = mergeLanes(list.lanes, renderLanes); // Since we already found a match, we can stop traversing the
          // dependency list.

          break;
        }

        dependency = dependency.next;
      }
    } else if (fiber.tag === ContextProvider) {
      // Don't scan deeper if this is a matching provider
      nextFiber = fiber.type === workInProgress.type ? null : fiber.child;
    } else {
      // Traverse down.
      nextFiber = fiber.child;
    }

    if (nextFiber !== null) {
      // Set the return pointer of the child to the work-in-progress fiber.
      nextFiber.return = fiber;
    } else {
      // No child. Traverse to next sibling.
      nextFiber = fiber;

      while (nextFiber !== null) {
        if (nextFiber === workInProgress) {
          // We're back to the root of this subtree. Exit.
          nextFiber = null;
          break;
        }

        var sibling = nextFiber.sibling;

        if (sibling !== null) {
          // Set the return pointer of the sibling to the work-in-progress fiber.
          sibling.return = nextFiber.return;
          nextFiber = sibling;
          break;
        } // No more siblings. Traverse up.


        nextFiber = nextFiber.return;
      }
    }

    fiber = nextFiber;
  }
}
function prepareToReadContext(workInProgress, renderLanes) {
  currentlyRenderingFiber = workInProgress;
  lastContextDependency = null;
  lastContextWithAllBitsObserved = null;
  var dependencies = workInProgress.dependencies;

  if (dependencies !== null) {
    var firstContext = dependencies.firstContext;

    if (firstContext !== null) {
      if (includesSomeLane(dependencies.lanes, renderLanes)) {
        // Context list has a pending update. Mark that this fiber performed work.
        markWorkInProgressReceivedUpdate();
      } // Reset the work-in-progress list


      dependencies.firstContext = null;
    }
  }
}
function readContext(context, observedBits) {
  {
    // This warning would fire if you read context inside a Hook like useMemo.
    // Unlike the class check below, it's not enforced in production for perf.
    if (isDisallowedContextReadInDEV) {
      error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
    }
  }

  if (lastContextWithAllBitsObserved === context) ; else if (observedBits === false || observedBits === 0) ; else {
    var resolvedObservedBits; // Avoid deopting on observable arguments or heterogeneous types.

    if (typeof observedBits !== 'number' || observedBits === MAX_SIGNED_31_BIT_INT) {
      // Observe all updates.
      lastContextWithAllBitsObserved = context;
      resolvedObservedBits = MAX_SIGNED_31_BIT_INT;
    } else {
      resolvedObservedBits = observedBits;
    }

    var contextItem = {
      context: context,
      observedBits: resolvedObservedBits,
      next: null
    };

    if (lastContextDependency === null) {
      if (!(currentlyRenderingFiber !== null)) {
        {
          throw Error( "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()." );
        }
      } // This is the first dependency for this component. Create a new list.


      lastContextDependency = contextItem;
      currentlyRenderingFiber.dependencies = {
        lanes: NoLanes,
        firstContext: contextItem,
        responders: null
      };
    } else {
      // Append a new context item.
      lastContextDependency = lastContextDependency.next = contextItem;
    }
  }

  return  context._currentValue ;
}

var UpdateState = 0;
var ReplaceState = 1;
var ForceUpdate = 2;
var CaptureUpdate = 3; // Global state that is reset at the beginning of calling `processUpdateQueue`.
// It should only be read right after calling `processUpdateQueue`, via
// `checkHasForceUpdateAfterProcessing`.

var hasForceUpdate = false;
var didWarnUpdateInsideUpdate;
var currentlyProcessingQueue;

{
  didWarnUpdateInsideUpdate = false;
  currentlyProcessingQueue = null;
}

function initializeUpdateQueue(fiber) {
  var queue = {
    baseState: fiber.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null
    },
    effects: null
  };
  fiber.updateQueue = queue;
}
function cloneUpdateQueue(current, workInProgress) {
  // Clone the update queue from current. Unless it's already a clone.
  var queue = workInProgress.updateQueue;
  var currentQueue = current.updateQueue;

  if (queue === currentQueue) {
    var clone = {
      baseState: currentQueue.baseState,
      firstBaseUpdate: currentQueue.firstBaseUpdate,
      lastBaseUpdate: currentQueue.lastBaseUpdate,
      shared: currentQueue.shared,
      effects: currentQueue.effects
    };
    workInProgress.updateQueue = clone;
  }
}
function createUpdate(eventTime, lane) {
  var update = {
    eventTime: eventTime,
    lane: lane,
    tag: UpdateState,
    payload: null,
    callback: null,
    next: null
  };
  return update;
}
function enqueueUpdate(fiber, update) {
  var updateQueue = fiber.updateQueue;

  if (updateQueue === null) {
    // Only occurs if the fiber has been unmounted.
    return;
  }

  var sharedQueue = updateQueue.shared;
  var pending = sharedQueue.pending;

  if (pending === null) {
    // This is the first update. Create a circular list.
    update.next = update;
  } else {
    update.next = pending.next;
    pending.next = update;
  }

  sharedQueue.pending = update;

  {
    if (currentlyProcessingQueue === sharedQueue && !didWarnUpdateInsideUpdate) {
      error('An update (setState, replaceState, or forceUpdate) was scheduled ' + 'from inside an update function. Update functions should be pure, ' + 'with zero side-effects. Consider using componentDidUpdate or a ' + 'callback.');

      didWarnUpdateInsideUpdate = true;
    }
  }
}
function enqueueCapturedUpdate(workInProgress, capturedUpdate) {
  // Captured updates are updates that are thrown by a child during the render
  // phase. They should be discarded if the render is aborted. Therefore,
  // we should only put them on the work-in-progress queue, not the current one.
  var queue = workInProgress.updateQueue; // Check if the work-in-progress queue is a clone.

  var current = workInProgress.alternate;

  if (current !== null) {
    var currentQueue = current.updateQueue;

    if (queue === currentQueue) {
      // The work-in-progress queue is the same as current. This happens when
      // we bail out on a parent fiber that then captures an error thrown by
      // a child. Since we want to append the update only to the work-in
      // -progress queue, we need to clone the updates. We usually clone during
      // processUpdateQueue, but that didn't happen in this case because we
      // skipped over the parent when we bailed out.
      var newFirst = null;
      var newLast = null;
      var firstBaseUpdate = queue.firstBaseUpdate;

      if (firstBaseUpdate !== null) {
        // Loop through the updates and clone them.
        var update = firstBaseUpdate;

        do {
          var clone = {
            eventTime: update.eventTime,
            lane: update.lane,
            tag: update.tag,
            payload: update.payload,
            callback: update.callback,
            next: null
          };

          if (newLast === null) {
            newFirst = newLast = clone;
          } else {
            newLast.next = clone;
            newLast = clone;
          }

          update = update.next;
        } while (update !== null); // Append the captured update the end of the cloned list.


        if (newLast === null) {
          newFirst = newLast = capturedUpdate;
        } else {
          newLast.next = capturedUpdate;
          newLast = capturedUpdate;
        }
      } else {
        // There are no base updates.
        newFirst = newLast = capturedUpdate;
      }

      queue = {
        baseState: currentQueue.baseState,
        firstBaseUpdate: newFirst,
        lastBaseUpdate: newLast,
        shared: currentQueue.shared,
        effects: currentQueue.effects
      };
      workInProgress.updateQueue = queue;
      return;
    }
  } // Append the update to the end of the list.


  var lastBaseUpdate = queue.lastBaseUpdate;

  if (lastBaseUpdate === null) {
    queue.firstBaseUpdate = capturedUpdate;
  } else {
    lastBaseUpdate.next = capturedUpdate;
  }

  queue.lastBaseUpdate = capturedUpdate;
}

function getStateFromUpdate(workInProgress, queue, update, prevState, nextProps, instance) {
  switch (update.tag) {
    case ReplaceState:
      {
        var payload = update.payload;

        if (typeof payload === 'function') {
          // Updater function
          {
            enterDisallowedContextReadInDEV();
          }

          var nextState = payload.call(instance, prevState, nextProps);

          {
            if ( workInProgress.mode & StrictMode) {
              disableLogs();

              try {
                payload.call(instance, prevState, nextProps);
              } finally {
                reenableLogs();
              }
            }

            exitDisallowedContextReadInDEV();
          }

          return nextState;
        } // State object


        return payload;
      }

    case CaptureUpdate:
      {
        workInProgress.flags = workInProgress.flags & ~ShouldCapture | DidCapture;
      }
    // Intentional fallthrough

    case UpdateState:
      {
        var _payload = update.payload;
        var partialState;

        if (typeof _payload === 'function') {
          // Updater function
          {
            enterDisallowedContextReadInDEV();
          }

          partialState = _payload.call(instance, prevState, nextProps);

          {
            if ( workInProgress.mode & StrictMode) {
              disableLogs();

              try {
                _payload.call(instance, prevState, nextProps);
              } finally {
                reenableLogs();
              }
            }

            exitDisallowedContextReadInDEV();
          }
        } else {
          // Partial state object
          partialState = _payload;
        }

        if (partialState === null || partialState === undefined) {
          // Null and undefined are treated as no-ops.
          return prevState;
        } // Merge the partial state and the previous state.


        return _assign({}, prevState, partialState);
      }

    case ForceUpdate:
      {
        hasForceUpdate = true;
        return prevState;
      }
  }

  return prevState;
}

function processUpdateQueue(workInProgress, props, instance, renderLanes) {
  // This is always non-null on a ClassComponent or HostRoot
  var queue = workInProgress.updateQueue;
  hasForceUpdate = false;

  {
    currentlyProcessingQueue = queue.shared;
  }

  var firstBaseUpdate = queue.firstBaseUpdate;
  var lastBaseUpdate = queue.lastBaseUpdate; // Check if there are pending updates. If so, transfer them to the base queue.

  var pendingQueue = queue.shared.pending;

  if (pendingQueue !== null) {
    queue.shared.pending = null; // The pending queue is circular. Disconnect the pointer between first
    // and last so that it's non-circular.

    var lastPendingUpdate = pendingQueue;
    var firstPendingUpdate = lastPendingUpdate.next;
    lastPendingUpdate.next = null; // Append pending updates to base queue

    if (lastBaseUpdate === null) {
      firstBaseUpdate = firstPendingUpdate;
    } else {
      lastBaseUpdate.next = firstPendingUpdate;
    }

    lastBaseUpdate = lastPendingUpdate; // If there's a current queue, and it's different from the base queue, then
    // we need to transfer the updates to that queue, too. Because the base
    // queue is a singly-linked list with no cycles, we can append to both
    // lists and take advantage of structural sharing.
    // TODO: Pass `current` as argument

    var current = workInProgress.alternate;

    if (current !== null) {
      // This is always non-null on a ClassComponent or HostRoot
      var currentQueue = current.updateQueue;
      var currentLastBaseUpdate = currentQueue.lastBaseUpdate;

      if (currentLastBaseUpdate !== lastBaseUpdate) {
        if (currentLastBaseUpdate === null) {
          currentQueue.firstBaseUpdate = firstPendingUpdate;
        } else {
          currentLastBaseUpdate.next = firstPendingUpdate;
        }

        currentQueue.lastBaseUpdate = lastPendingUpdate;
      }
    }
  } // These values may change as we process the queue.


  if (firstBaseUpdate !== null) {
    // Iterate through the list of updates to compute the result.
    var newState = queue.baseState; // TODO: Don't need to accumulate this. Instead, we can remove renderLanes
    // from the original lanes.

    var newLanes = NoLanes;
    var newBaseState = null;
    var newFirstBaseUpdate = null;
    var newLastBaseUpdate = null;
    var update = firstBaseUpdate;

    do {
      var updateLane = update.lane;
      var updateEventTime = update.eventTime;

      if (!isSubsetOfLanes(renderLanes, updateLane)) {
        // Priority is insufficient. Skip this update. If this is the first
        // skipped update, the previous update/state is the new base
        // update/state.
        var clone = {
          eventTime: updateEventTime,
          lane: updateLane,
          tag: update.tag,
          payload: update.payload,
          callback: update.callback,
          next: null
        };

        if (newLastBaseUpdate === null) {
          newFirstBaseUpdate = newLastBaseUpdate = clone;
          newBaseState = newState;
        } else {
          newLastBaseUpdate = newLastBaseUpdate.next = clone;
        } // Update the remaining priority in the queue.


        newLanes = mergeLanes(newLanes, updateLane);
      } else {
        // This update does have sufficient priority.
        if (newLastBaseUpdate !== null) {
          var _clone = {
            eventTime: updateEventTime,
            // This update is going to be committed so we never want uncommit
            // it. Using NoLane works because 0 is a subset of all bitmasks, so
            // this will never be skipped by the check above.
            lane: NoLane,
            tag: update.tag,
            payload: update.payload,
            callback: update.callback,
            next: null
          };
          newLastBaseUpdate = newLastBaseUpdate.next = _clone;
        } // Process this update.


        newState = getStateFromUpdate(workInProgress, queue, update, newState, props, instance);
        var callback = update.callback;

        if (callback !== null) {
          workInProgress.flags |= Callback;
          var effects = queue.effects;

          if (effects === null) {
            queue.effects = [update];
          } else {
            effects.push(update);
          }
        }
      }

      update = update.next;

      if (update === null) {
        pendingQueue = queue.shared.pending;

        if (pendingQueue === null) {
          break;
        } else {
          // An update was scheduled from inside a reducer. Add the new
          // pending updates to the end of the list and keep processing.
          var _lastPendingUpdate = pendingQueue; // Intentionally unsound. Pending updates form a circular list, but we
          // unravel them when transferring them to the base queue.

          var _firstPendingUpdate = _lastPendingUpdate.next;
          _lastPendingUpdate.next = null;
          update = _firstPendingUpdate;
          queue.lastBaseUpdate = _lastPendingUpdate;
          queue.shared.pending = null;
        }
      }
    } while (true);

    if (newLastBaseUpdate === null) {
      newBaseState = newState;
    }

    queue.baseState = newBaseState;
    queue.firstBaseUpdate = newFirstBaseUpdate;
    queue.lastBaseUpdate = newLastBaseUpdate; // Set the remaining expiration time to be whatever is remaining in the queue.
    // This should be fine because the only two other things that contribute to
    // expiration time are props and context. We're already in the middle of the
    // begin phase by the time we start processing the queue, so we've already
    // dealt with the props. Context in components that specify
    // shouldComponentUpdate is tricky; but we'll have to account for
    // that regardless.

    markSkippedUpdateLanes(newLanes);
    workInProgress.lanes = newLanes;
    workInProgress.memoizedState = newState;
  }

  {
    currentlyProcessingQueue = null;
  }
}

function callCallback(callback, context) {
  if (!(typeof callback === 'function')) {
    {
      throw Error( "Invalid argument passed as callback. Expected a function. Instead received: " + callback );
    }
  }

  callback.call(context);
}

function resetHasForceUpdateBeforeProcessing() {
  hasForceUpdate = false;
}
function checkHasForceUpdateAfterProcessing() {
  return hasForceUpdate;
}
function commitUpdateQueue(finishedWork, finishedQueue, instance) {
  // Commit the effects
  var effects = finishedQueue.effects;
  finishedQueue.effects = null;

  if (effects !== null) {
    for (var i = 0; i < effects.length; i++) {
      var effect = effects[i];
      var callback = effect.callback;

      if (callback !== null) {
        effect.callback = null;
        callCallback(callback, instance);
      }
    }
  }
}

var fakeInternalInstance = {};
var isArray = Array.isArray; // React.Component uses a shared frozen object by default.
// We'll use it to determine whether we need to initialize legacy refs.

var emptyRefsObject = new React.Component().refs;
var didWarnAboutStateAssignmentForComponent;
var didWarnAboutUninitializedState;
var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
var didWarnAboutLegacyLifecyclesAndDerivedState;
var didWarnAboutUndefinedDerivedState;
var warnOnUndefinedDerivedState;
var warnOnInvalidCallback;
var didWarnAboutDirectlyAssigningPropsToState;
var didWarnAboutContextTypeAndContextTypes;
var didWarnAboutInvalidateContextType;

{
  didWarnAboutStateAssignmentForComponent = new Set();
  didWarnAboutUninitializedState = new Set();
  didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
  didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
  didWarnAboutDirectlyAssigningPropsToState = new Set();
  didWarnAboutUndefinedDerivedState = new Set();
  didWarnAboutContextTypeAndContextTypes = new Set();
  didWarnAboutInvalidateContextType = new Set();
  var didWarnOnInvalidCallback = new Set();

  warnOnInvalidCallback = function (callback, callerName) {
    if (callback === null || typeof callback === 'function') {
      return;
    }

    var key = callerName + '_' + callback;

    if (!didWarnOnInvalidCallback.has(key)) {
      didWarnOnInvalidCallback.add(key);

      error('%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callerName, callback);
    }
  };

  warnOnUndefinedDerivedState = function (type, partialState) {
    if (partialState === undefined) {
      var componentName = getComponentName(type) || 'Component';

      if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
        didWarnAboutUndefinedDerivedState.add(componentName);

        error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', componentName);
      }
    }
  }; // This is so gross but it's at least non-critical and can be removed if
  // it causes problems. This is meant to give a nicer error message for
  // ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
  // ...)) which otherwise throws a "_processChildContext is not a function"
  // exception.


  Object.defineProperty(fakeInternalInstance, '_processChildContext', {
    enumerable: false,
    value: function () {
      {
        {
          throw Error( "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal)." );
        }
      }
    }
  });
  Object.freeze(fakeInternalInstance);
}

function applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, nextProps) {
  var prevState = workInProgress.memoizedState;

  {
    if ( workInProgress.mode & StrictMode) {
      disableLogs();

      try {
        // Invoke the function an extra time to help detect side-effects.
        getDerivedStateFromProps(nextProps, prevState);
      } finally {
        reenableLogs();
      }
    }
  }

  var partialState = getDerivedStateFromProps(nextProps, prevState);

  {
    warnOnUndefinedDerivedState(ctor, partialState);
  } // Merge the partial state and the previous state.


  var memoizedState = partialState === null || partialState === undefined ? prevState : _assign({}, prevState, partialState);
  workInProgress.memoizedState = memoizedState; // Once the update queue is empty, persist the derived state onto the
  // base state.

  if (workInProgress.lanes === NoLanes) {
    // Queue is always non-null for classes
    var updateQueue = workInProgress.updateQueue;
    updateQueue.baseState = memoizedState;
  }
}
var classComponentUpdater = {
  isMounted: isMounted,
  enqueueSetState: function (inst, payload, callback) {
    var fiber = get(inst);
    var eventTime = requestEventTime();
    var lane = requestUpdateLane(fiber);
    var update = createUpdate(eventTime, lane);
    update.payload = payload;

    if (callback !== undefined && callback !== null) {
      {
        warnOnInvalidCallback(callback, 'setState');
      }

      update.callback = callback;
    }

    enqueueUpdate(fiber, update);
    scheduleUpdateOnFiber(fiber, lane, eventTime);
  },
  enqueueReplaceState: function (inst, payload, callback) {
    var fiber = get(inst);
    var eventTime = requestEventTime();
    var lane = requestUpdateLane(fiber);
    var update = createUpdate(eventTime, lane);
    update.tag = ReplaceState;
    update.payload = payload;

    if (callback !== undefined && callback !== null) {
      {
        warnOnInvalidCallback(callback, 'replaceState');
      }

      update.callback = callback;
    }

    enqueueUpdate(fiber, update);
    scheduleUpdateOnFiber(fiber, lane, eventTime);
  },
  enqueueForceUpdate: function (inst, callback) {
    var fiber = get(inst);
    var eventTime = requestEventTime();
    var lane = requestUpdateLane(fiber);
    var update = createUpdate(eventTime, lane);
    update.tag = ForceUpdate;

    if (callback !== undefined && callback !== null) {
      {
        warnOnInvalidCallback(callback, 'forceUpdate');
      }

      update.callback = callback;
    }

    enqueueUpdate(fiber, update);
    scheduleUpdateOnFiber(fiber, lane, eventTime);
  }
};

function checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext) {
  var instance = workInProgress.stateNode;

  if (typeof instance.shouldComponentUpdate === 'function') {
    {
      if ( workInProgress.mode & StrictMode) {
        disableLogs();

        try {
          // Invoke the function an extra time to help detect side-effects.
          instance.shouldComponentUpdate(newProps, newState, nextContext);
        } finally {
          reenableLogs();
        }
      }
    }

    var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, nextContext);

    {
      if (shouldUpdate === undefined) {
        error('%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', getComponentName(ctor) || 'Component');
      }
    }

    return shouldUpdate;
  }

  if (ctor.prototype && ctor.prototype.isPureReactComponent) {
    return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
  }

  return true;
}

function checkClassInstance(workInProgress, ctor, newProps) {
  var instance = workInProgress.stateNode;

  {
    var name = getComponentName(ctor) || 'Component';
    var renderPresent = instance.render;

    if (!renderPresent) {
      if (ctor.prototype && typeof ctor.prototype.render === 'function') {
        error('%s(...): No `render` method found on the returned component ' + 'instance: did you accidentally return an object from the constructor?', name);
      } else {
        error('%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', name);
      }
    }

    if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
      error('getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', name);
    }

    if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', name);
    }

    if (instance.propTypes) {
      error('propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', name);
    }

    if (instance.contextType) {
      error('contextType was defined as an instance property on %s. Use a static ' + 'property to define contextType instead.', name);
    }

    {
      if (instance.contextTypes) {
        error('contextTypes was defined as an instance property on %s. Use a static ' + 'property to define contextTypes instead.', name);
      }

      if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
        didWarnAboutContextTypeAndContextTypes.add(ctor);

        error('%s declares both contextTypes and contextType static properties. ' + 'The legacy contextTypes property will be ignored.', name);
      }
    }

    if (typeof instance.componentShouldUpdate === 'function') {
      error('%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', name);
    }

    if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== 'undefined') {
      error('%s has a method called shouldComponentUpdate(). ' + 'shouldComponentUpdate should not be used when extending React.PureComponent. ' + 'Please extend React.Component if shouldComponentUpdate is used.', getComponentName(ctor) || 'A pure component');
    }

    if (typeof instance.componentDidUnmount === 'function') {
      error('%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', name);
    }

    if (typeof instance.componentDidReceiveProps === 'function') {
      error('%s has a method called ' + 'componentDidReceiveProps(). But there is no such lifecycle method. ' + 'If you meant to update the state in response to changing props, ' + 'use componentWillReceiveProps(). If you meant to fetch data or ' + 'run side-effects or mutations after React has updated the UI, use componentDidUpdate().', name);
    }

    if (typeof instance.componentWillRecieveProps === 'function') {
      error('%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', name);
    }

    if (typeof instance.UNSAFE_componentWillRecieveProps === 'function') {
      error('%s has a method called ' + 'UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?', name);
    }

    var hasMutatedProps = instance.props !== newProps;

    if (instance.props !== undefined && hasMutatedProps) {
      error('%s(...): When calling super() in `%s`, make sure to pass ' + "up the same props that your component's constructor was passed.", name, name);
    }

    if (instance.defaultProps) {
      error('Setting defaultProps as an instance property on %s is not supported and will be ignored.' + ' Instead, define defaultProps as a static property on %s.', name, name);
    }

    if (typeof instance.getSnapshotBeforeUpdate === 'function' && typeof instance.componentDidUpdate !== 'function' && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
      didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);

      error('%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). ' + 'This component defines getSnapshotBeforeUpdate() only.', getComponentName(ctor));
    }

    if (typeof instance.getDerivedStateFromProps === 'function') {
      error('%s: getDerivedStateFromProps() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name);
    }

    if (typeof instance.getDerivedStateFromError === 'function') {
      error('%s: getDerivedStateFromError() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name);
    }

    if (typeof ctor.getSnapshotBeforeUpdate === 'function') {
      error('%s: getSnapshotBeforeUpdate() is defined as a static method ' + 'and will be ignored. Instead, declare it as an instance method.', name);
    }

    var _state = instance.state;

    if (_state && (typeof _state !== 'object' || isArray(_state))) {
      error('%s.state: must be set to an object or null', name);
    }

    if (typeof instance.getChildContext === 'function' && typeof ctor.childContextTypes !== 'object') {
      error('%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', name);
    }
  }
}

function adoptClassInstance(workInProgress, instance) {
  instance.updater = classComponentUpdater;
  workInProgress.stateNode = instance; // The instance needs access to the fiber so that it can schedule updates

  set(instance, workInProgress);

  {
    instance._reactInternalInstance = fakeInternalInstance;
  }
}

function constructClassInstance(workInProgress, ctor, props) {
  var isLegacyContextConsumer = false;
  var unmaskedContext = emptyContextObject;
  var context = emptyContextObject;
  var contextType = ctor.contextType;

  {
    if ('contextType' in ctor) {
      var isValid = // Allow null for conditional declaration
      contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

      if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
        didWarnAboutInvalidateContextType.add(ctor);
        var addendum = '';

        if (contextType === undefined) {
          addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
        } else if (typeof contextType !== 'object') {
          addendum = ' However, it is set to a ' + typeof contextType + '.';
        } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
          addendum = ' Did you accidentally pass the Context.Provider instead?';
        } else if (contextType._context !== undefined) {
          // <Context.Consumer>
          addendum = ' Did you accidentally pass the Context.Consumer instead?';
        } else {
          addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
        }

        error('%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentName(ctor) || 'Component', addendum);
      }
    }
  }

  if (typeof contextType === 'object' && contextType !== null) {
    context = readContext(contextType);
  } else {
    unmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
    var contextTypes = ctor.contextTypes;
    isLegacyContextConsumer = contextTypes !== null && contextTypes !== undefined;
    context = isLegacyContextConsumer ? getMaskedContext(workInProgress, unmaskedContext) : emptyContextObject;
  } // Instantiate twice to help detect side-effects.


  {
    if ( workInProgress.mode & StrictMode) {
      disableLogs();

      try {
        new ctor(props, context); // eslint-disable-line no-new
      } finally {
        reenableLogs();
      }
    }
  }

  var instance = new ctor(props, context);
  var state = workInProgress.memoizedState = instance.state !== null && instance.state !== undefined ? instance.state : null;
  adoptClassInstance(workInProgress, instance);

  {
    if (typeof ctor.getDerivedStateFromProps === 'function' && state === null) {
      var componentName = getComponentName(ctor) || 'Component';

      if (!didWarnAboutUninitializedState.has(componentName)) {
        didWarnAboutUninitializedState.add(componentName);

        error('`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, instance.state === null ? 'null' : 'undefined', componentName);
      }
    } // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Warn about these lifecycles if they are present.
    // Don't warn about react-lifecycles-compat polyfilled methods though.


    if (typeof ctor.getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function') {
      var foundWillMountName = null;
      var foundWillReceivePropsName = null;
      var foundWillUpdateName = null;

      if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true) {
        foundWillMountName = 'componentWillMount';
      } else if (typeof instance.UNSAFE_componentWillMount === 'function') {
        foundWillMountName = 'UNSAFE_componentWillMount';
      }

      if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
        foundWillReceivePropsName = 'componentWillReceiveProps';
      } else if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
      }

      if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
        foundWillUpdateName = 'componentWillUpdate';
      } else if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
        foundWillUpdateName = 'UNSAFE_componentWillUpdate';
      }

      if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
        var _componentName = getComponentName(ctor) || 'Component';

        var newApiName = typeof ctor.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';

        if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
          didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);

          error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + '%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\n' + 'The above lifecycles should be removed. Learn more about this warning here:\n' + 'https://reactjs.org/link/unsafe-component-lifecycles', _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : '', foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : '', foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : '');
        }
      }
    }
  } // Cache unmasked context so we can avoid recreating masked context unless necessary.
  // ReactFiberContext usually updates this cache but can't for newly-created instances.


  if (isLegacyContextConsumer) {
    cacheContext(workInProgress, unmaskedContext, context);
  }

  return instance;
}

function callComponentWillMount(workInProgress, instance) {
  var oldState = instance.state;

  if (typeof instance.componentWillMount === 'function') {
    instance.componentWillMount();
  }

  if (typeof instance.UNSAFE_componentWillMount === 'function') {
    instance.UNSAFE_componentWillMount();
  }

  if (oldState !== instance.state) {
    {
      error('%s.componentWillMount(): Assigning directly to this.state is ' + "deprecated (except inside a component's " + 'constructor). Use setState instead.', getComponentName(workInProgress.type) || 'Component');
    }

    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
  }
}

function callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext) {
  var oldState = instance.state;

  if (typeof instance.componentWillReceiveProps === 'function') {
    instance.componentWillReceiveProps(newProps, nextContext);
  }

  if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
    instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
  }

  if (instance.state !== oldState) {
    {
      var componentName = getComponentName(workInProgress.type) || 'Component';

      if (!didWarnAboutStateAssignmentForComponent.has(componentName)) {
        didWarnAboutStateAssignmentForComponent.add(componentName);

        error('%s.componentWillReceiveProps(): Assigning directly to ' + "this.state is deprecated (except inside a component's " + 'constructor). Use setState instead.', componentName);
      }
    }

    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
  }
} // Invokes the mount life-cycles on a previously never rendered instance.


function mountClassInstance(workInProgress, ctor, newProps, renderLanes) {
  {
    checkClassInstance(workInProgress, ctor, newProps);
  }

  var instance = workInProgress.stateNode;
  instance.props = newProps;
  instance.state = workInProgress.memoizedState;
  instance.refs = emptyRefsObject;
  initializeUpdateQueue(workInProgress);
  var contextType = ctor.contextType;

  if (typeof contextType === 'object' && contextType !== null) {
    instance.context = readContext(contextType);
  } else {
    var unmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
    instance.context = getMaskedContext(workInProgress, unmaskedContext);
  }

  {
    if (instance.state === newProps) {
      var componentName = getComponentName(ctor) || 'Component';

      if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
        didWarnAboutDirectlyAssigningPropsToState.add(componentName);

        error('%s: It is not recommended to assign props directly to state ' + "because updates to props won't be reflected in state. " + 'In most cases, it is better to use props directly.', componentName);
      }
    }

    if (workInProgress.mode & StrictMode) {
      ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, instance);
    }

    {
      ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress, instance);
    }
  }

  processUpdateQueue(workInProgress, newProps, instance, renderLanes);
  instance.state = workInProgress.memoizedState;
  var getDerivedStateFromProps = ctor.getDerivedStateFromProps;

  if (typeof getDerivedStateFromProps === 'function') {
    applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, newProps);
    instance.state = workInProgress.memoizedState;
  } // In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.


  if (typeof ctor.getDerivedStateFromProps !== 'function' && typeof instance.getSnapshotBeforeUpdate !== 'function' && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
    callComponentWillMount(workInProgress, instance); // If we had additional state updates during this life-cycle, let's
    // process them now.

    processUpdateQueue(workInProgress, newProps, instance, renderLanes);
    instance.state = workInProgress.memoizedState;
  }

  if (typeof instance.componentDidMount === 'function') {
    workInProgress.flags |= Update;
  }
}

function resumeMountClassInstance(workInProgress, ctor, newProps, renderLanes) {
  var instance = workInProgress.stateNode;
  var oldProps = workInProgress.memoizedProps;
  instance.props = oldProps;
  var oldContext = instance.context;
  var contextType = ctor.contextType;
  var nextContext = emptyContextObject;

  if (typeof contextType === 'object' && contextType !== null) {
    nextContext = readContext(contextType);
  } else {
    var nextLegacyUnmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
    nextContext = getMaskedContext(workInProgress, nextLegacyUnmaskedContext);
  }

  var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
  var hasNewLifecycles = typeof getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function'; // Note: During these life-cycles, instance.props/instance.state are what
  // ever the previously attempted to render - not the "current". However,
  // during componentDidUpdate we pass the "current" props.
  // In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.

  if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === 'function' || typeof instance.componentWillReceiveProps === 'function')) {
    if (oldProps !== newProps || oldContext !== nextContext) {
      callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext);
    }
  }

  resetHasForceUpdateBeforeProcessing();
  var oldState = workInProgress.memoizedState;
  var newState = instance.state = oldState;
  processUpdateQueue(workInProgress, newProps, instance, renderLanes);
  newState = workInProgress.memoizedState;

  if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
    // If an update was already in progress, we should schedule an Update
    // effect even though we're bailing out, so that cWU/cDU are called.
    if (typeof instance.componentDidMount === 'function') {
      workInProgress.flags |= Update;
    }

    return false;
  }

  if (typeof getDerivedStateFromProps === 'function') {
    applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, newProps);
    newState = workInProgress.memoizedState;
  }

  var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext);

  if (shouldUpdate) {
    // In order to support react-lifecycles-compat polyfilled components,
    // Unsafe lifecycles should not be invoked for components using the new APIs.
    if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
      if (typeof instance.componentWillMount === 'function') {
        instance.componentWillMount();
      }

      if (typeof instance.UNSAFE_componentWillMount === 'function') {
        instance.UNSAFE_componentWillMount();
      }
    }

    if (typeof instance.componentDidMount === 'function') {
      workInProgress.flags |= Update;
    }
  } else {
    // If an update was already in progress, we should schedule an Update
    // effect even though we're bailing out, so that cWU/cDU are called.
    if (typeof instance.componentDidMount === 'function') {
      workInProgress.flags |= Update;
    } // If shouldComponentUpdate returned false, we should still update the
    // memoized state to indicate that this work can be reused.


    workInProgress.memoizedProps = newProps;
    workInProgress.memoizedState = newState;
  } // Update the existing instance's state, props, and context pointers even
  // if shouldComponentUpdate returns false.


  instance.props = newProps;
  instance.state = newState;
  instance.context = nextContext;
  return shouldUpdate;
} // Invokes the update life-cycles and returns false if it shouldn't rerender.


function updateClassInstance(current, workInProgress, ctor, newProps, renderLanes) {
  var instance = workInProgress.stateNode;
  cloneUpdateQueue(current, workInProgress);
  var unresolvedOldProps = workInProgress.memoizedProps;
  var oldProps = workInProgress.type === workInProgress.elementType ? unresolvedOldProps : resolveDefaultProps(workInProgress.type, unresolvedOldProps);
  instance.props = oldProps;
  var unresolvedNewProps = workInProgress.pendingProps;
  var oldContext = instance.context;
  var contextType = ctor.contextType;
  var nextContext = emptyContextObject;

  if (typeof contextType === 'object' && contextType !== null) {
    nextContext = readContext(contextType);
  } else {
    var nextUnmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
    nextContext = getMaskedContext(workInProgress, nextUnmaskedContext);
  }

  var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
  var hasNewLifecycles = typeof getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function'; // Note: During these life-cycles, instance.props/instance.state are what
  // ever the previously attempted to render - not the "current". However,
  // during componentDidUpdate we pass the "current" props.
  // In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.

  if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === 'function' || typeof instance.componentWillReceiveProps === 'function')) {
    if (unresolvedOldProps !== unresolvedNewProps || oldContext !== nextContext) {
      callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext);
    }
  }

  resetHasForceUpdateBeforeProcessing();
  var oldState = workInProgress.memoizedState;
  var newState = instance.state = oldState;
  processUpdateQueue(workInProgress, newProps, instance, renderLanes);
  newState = workInProgress.memoizedState;

  if (unresolvedOldProps === unresolvedNewProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
    // If an update was already in progress, we should schedule an Update
    // effect even though we're bailing out, so that cWU/cDU are called.
    if (typeof instance.componentDidUpdate === 'function') {
      if (unresolvedOldProps !== current.memoizedProps || oldState !== current.memoizedState) {
        workInProgress.flags |= Update;
      }
    }

    if (typeof instance.getSnapshotBeforeUpdate === 'function') {
      if (unresolvedOldProps !== current.memoizedProps || oldState !== current.memoizedState) {
        workInProgress.flags |= Snapshot;
      }
    }

    return false;
  }

  if (typeof getDerivedStateFromProps === 'function') {
    applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, newProps);
    newState = workInProgress.memoizedState;
  }

  var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext);

  if (shouldUpdate) {
    // In order to support react-lifecycles-compat polyfilled components,
    // Unsafe lifecycles should not be invoked for components using the new APIs.
    if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillUpdate === 'function' || typeof instance.componentWillUpdate === 'function')) {
      if (typeof instance.componentWillUpdate === 'function') {
        instance.componentWillUpdate(newProps, newState, nextContext);
      }

      if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
        instance.UNSAFE_componentWillUpdate(newProps, newState, nextContext);
      }
    }

    if (typeof instance.componentDidUpdate === 'function') {
      workInProgress.flags |= Update;
    }

    if (typeof instance.getSnapshotBeforeUpdate === 'function') {
      workInProgress.flags |= Snapshot;
    }
  } else {
    // If an update was already in progress, we should schedule an Update
    // effect even though we're bailing out, so that cWU/cDU are called.
    if (typeof instance.componentDidUpdate === 'function') {
      if (unresolvedOldProps !== current.memoizedProps || oldState !== current.memoizedState) {
        workInProgress.flags |= Update;
      }
    }

    if (typeof instance.getSnapshotBeforeUpdate === 'function') {
      if (unresolvedOldProps !== current.memoizedProps || oldState !== current.memoizedState) {
        workInProgress.flags |= Snapshot;
      }
    } // If shouldComponentUpdate returned false, we should still update the
    // memoized props/state to indicate that this work can be reused.


    workInProgress.memoizedProps = newProps;
    workInProgress.memoizedState = newState;
  } // Update the existing instance's state, props, and context pointers even
  // if shouldComponentUpdate returns false.


  instance.props = newProps;
  instance.state = newState;
  instance.context = nextContext;
  return shouldUpdate;
}

var didWarnAboutMaps;
var didWarnAboutGenerators;
var didWarnAboutStringRefs;
var ownerHasKeyUseWarning;
var ownerHasFunctionTypeWarning;

var warnForMissingKey = function (child, returnFiber) {};

{
  didWarnAboutMaps = false;
  didWarnAboutGenerators = false;
  didWarnAboutStringRefs = {};
  /**
   * Warn if there's no key explicitly set on dynamic arrays of children or
   * object keys are not valid. This allows us to keep track of children between
   * updates.
   */

  ownerHasKeyUseWarning = {};
  ownerHasFunctionTypeWarning = {};

  warnForMissingKey = function (child, returnFiber) {
    if (child === null || typeof child !== 'object') {
      return;
    }

    if (!child._store || child._store.validated || child.key != null) {
      return;
    }

    if (!(typeof child._store === 'object')) {
      {
        throw Error( "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue." );
      }
    }

    child._store.validated = true;
    var componentName = getComponentName(returnFiber.type) || 'Component';

    if (ownerHasKeyUseWarning[componentName]) {
      return;
    }

    ownerHasKeyUseWarning[componentName] = true;

    error('Each child in a list should have a unique ' + '"key" prop. See https://reactjs.org/link/warning-keys for ' + 'more information.');
  };
}

var isArray$1 = Array.isArray;

function coerceRef(returnFiber, current, element) {
  var mixedRef = element.ref;

  if (mixedRef !== null && typeof mixedRef !== 'function' && typeof mixedRef !== 'object') {
    {
      // TODO: Clean this up once we turn on the string ref warning for
      // everyone, because the strict mode case will no longer be relevant
      if ((returnFiber.mode & StrictMode || warnAboutStringRefs) && // We warn in ReactElement.js if owner and self are equal for string refs
      // because these cannot be automatically converted to an arrow function
      // using a codemod. Therefore, we don't have to warn about string refs again.
      !(element._owner && element._self && element._owner.stateNode !== element._self)) {
        var componentName = getComponentName(returnFiber.type) || 'Component';

        if (!didWarnAboutStringRefs[componentName]) {
          {
            error('A string ref, "%s", has been found within a strict mode tree. ' + 'String refs are a source of potential bugs and should be avoided. ' + 'We recommend using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', mixedRef);
          }

          didWarnAboutStringRefs[componentName] = true;
        }
      }
    }

    if (element._owner) {
      var owner = element._owner;
      var inst;

      if (owner) {
        var ownerFiber = owner;

        if (!(ownerFiber.tag === ClassComponent)) {
          {
            throw Error( "Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref" );
          }
        }

        inst = ownerFiber.stateNode;
      }

      if (!inst) {
        {
          throw Error( "Missing owner for string ref " + mixedRef + ". This error is likely caused by a bug in React. Please file an issue." );
        }
      }

      var stringRef = '' + mixedRef; // Check if previous string ref matches new string ref

      if (current !== null && current.ref !== null && typeof current.ref === 'function' && current.ref._stringRef === stringRef) {
        return current.ref;
      }

      var ref = function (value) {
        var refs = inst.refs;

        if (refs === emptyRefsObject) {
          // This is a lazy pooled frozen object, so we need to initialize.
          refs = inst.refs = {};
        }

        if (value === null) {
          delete refs[stringRef];
        } else {
          refs[stringRef] = value;
        }
      };

      ref._stringRef = stringRef;
      return ref;
    } else {
      if (!(typeof mixedRef === 'string')) {
        {
          throw Error( "Expected ref to be a function, a string, an object returned by React.createRef(), or null." );
        }
      }

      if (!element._owner) {
        {
          throw Error( "Element ref was specified as a string (" + mixedRef + ") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://reactjs.org/link/refs-must-have-owner for more information." );
        }
      }
    }
  }

  return mixedRef;
}

function throwOnInvalidObjectType(returnFiber, newChild) {
  if (returnFiber.type !== 'textarea') {
    {
      {
        throw Error( "Objects are not valid as a React child (found: " + (Object.prototype.toString.call(newChild) === '[object Object]' ? 'object with keys {' + Object.keys(newChild).join(', ') + '}' : newChild) + "). If you meant to render a collection of children, use an array instead." );
      }
    }
  }
}

function warnOnFunctionType(returnFiber) {
  {
    var componentName = getComponentName(returnFiber.type) || 'Component';

    if (ownerHasFunctionTypeWarning[componentName]) {
      return;
    }

    ownerHasFunctionTypeWarning[componentName] = true;

    error('Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.');
  }
} // We avoid inlining this to avoid potential deopts from using try/catch.
// to be able to optimize each path individually by branching early. This needs
// a compiler or we can do it manually. Helpers that don't need this branching
// live outside of this function.


function ChildReconciler(shouldTrackSideEffects) {
  function deleteChild(returnFiber, childToDelete) {
    if (!shouldTrackSideEffects) {
      // Noop.
      return;
    } // Deletions are added in reversed order so we add it to the front.
    // At this point, the return fiber's effect list is empty except for
    // deletions, so we can just append the deletion to the list. The remaining
    // effects aren't added until the complete phase. Once we implement
    // resuming, this may not be true.


    var last = returnFiber.lastEffect;

    if (last !== null) {
      last.nextEffect = childToDelete;
      returnFiber.lastEffect = childToDelete;
    } else {
      returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
    }

    childToDelete.nextEffect = null;
    childToDelete.flags = Deletion;
  }

  function deleteRemainingChildren(returnFiber, currentFirstChild) {
    if (!shouldTrackSideEffects) {
      // Noop.
      return null;
    } // TODO: For the shouldClone case, this could be micro-optimized a bit by
    // assuming that after the first child we've already added everything.


    var childToDelete = currentFirstChild;

    while (childToDelete !== null) {
      deleteChild(returnFiber, childToDelete);
      childToDelete = childToDelete.sibling;
    }

    return null;
  }

  function mapRemainingChildren(returnFiber, currentFirstChild) {
    // Add the remaining children to a temporary map so that we can find them by
    // keys quickly. Implicit (null) keys get added to this set with their index
    // instead.
    var existingChildren = new Map();
    var existingChild = currentFirstChild;

    while (existingChild !== null) {
      if (existingChild.key !== null) {
        existingChildren.set(existingChild.key, existingChild);
      } else {
        existingChildren.set(existingChild.index, existingChild);
      }

      existingChild = existingChild.sibling;
    }

    return existingChildren;
  }

  function useFiber(fiber, pendingProps) {
    // We currently set sibling to null and index to 0 here because it is easy
    // to forget to do before returning it. E.g. for the single child case.
    var clone = createWorkInProgress(fiber, pendingProps);
    clone.index = 0;
    clone.sibling = null;
    return clone;
  }

  function placeChild(newFiber, lastPlacedIndex, newIndex) {
    newFiber.index = newIndex;

    if (!shouldTrackSideEffects) {
      // Noop.
      return lastPlacedIndex;
    }

    var current = newFiber.alternate;

    if (current !== null) {
      var oldIndex = current.index;

      if (oldIndex < lastPlacedIndex) {
        // This is a move.
        newFiber.flags = Placement;
        return lastPlacedIndex;
      } else {
        // This item can stay in place.
        return oldIndex;
      }
    } else {
      // This is an insertion.
      newFiber.flags = Placement;
      return lastPlacedIndex;
    }
  }

  function placeSingleChild(newFiber) {
    // This is simpler for the single child case. We only need to do a
    // placement for inserting new children.
    if (shouldTrackSideEffects && newFiber.alternate === null) {
      newFiber.flags = Placement;
    }

    return newFiber;
  }

  function updateTextNode(returnFiber, current, textContent, lanes) {
    if (current === null || current.tag !== HostText) {
      // Insert
      var created = createFiberFromText(textContent, returnFiber.mode, lanes);
      created.return = returnFiber;
      return created;
    } else {
      // Update
      var existing = useFiber(current, textContent);
      existing.return = returnFiber;
      return existing;
    }
  }

  function updateElement(returnFiber, current, element, lanes) {
    if (current !== null) {
      if (current.elementType === element.type || ( // Keep this check inline so it only runs on the false path:
       isCompatibleFamilyForHotReloading(current, element) )) {
        // Move based on index
        var existing = useFiber(current, element.props);
        existing.ref = coerceRef(returnFiber, current, element);
        existing.return = returnFiber;

        {
          existing._debugSource = element._source;
          existing._debugOwner = element._owner;
        }

        return existing;
      }
    } // Insert


    var created = createFiberFromElement(element, returnFiber.mode, lanes);
    created.ref = coerceRef(returnFiber, current, element);
    created.return = returnFiber;
    return created;
  }

  function updatePortal(returnFiber, current, portal, lanes) {
    if (current === null || current.tag !== HostPortal || current.stateNode.containerInfo !== portal.containerInfo || current.stateNode.implementation !== portal.implementation) {
      // Insert
      var created = createFiberFromPortal(portal, returnFiber.mode, lanes);
      created.return = returnFiber;
      return created;
    } else {
      // Update
      var existing = useFiber(current, portal.children || []);
      existing.return = returnFiber;
      return existing;
    }
  }

  function updateFragment(returnFiber, current, fragment, lanes, key) {
    if (current === null || current.tag !== Fragment) {
      // Insert
      var created = createFiberFromFragment(fragment, returnFiber.mode, lanes, key);
      created.return = returnFiber;
      return created;
    } else {
      // Update
      var existing = useFiber(current, fragment);
      existing.return = returnFiber;
      return existing;
    }
  }

  function createChild(returnFiber, newChild, lanes) {
    if (typeof newChild === 'string' || typeof newChild === 'number') {
      // Text nodes don't have keys. If the previous node is implicitly keyed
      // we can continue to replace it without aborting even if it is not a text
      // node.
      var created = createFiberFromText('' + newChild, returnFiber.mode, lanes);
      created.return = returnFiber;
      return created;
    }

    if (typeof newChild === 'object' && newChild !== null) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          {
            var _created = createFiberFromElement(newChild, returnFiber.mode, lanes);

            _created.ref = coerceRef(returnFiber, null, newChild);
            _created.return = returnFiber;
            return _created;
          }

        case REACT_PORTAL_TYPE:
          {
            var _created2 = createFiberFromPortal(newChild, returnFiber.mode, lanes);

            _created2.return = returnFiber;
            return _created2;
          }
      }

      if (isArray$1(newChild) || getIteratorFn(newChild)) {
        var _created3 = createFiberFromFragment(newChild, returnFiber.mode, lanes, null);

        _created3.return = returnFiber;
        return _created3;
      }

      throwOnInvalidObjectType(returnFiber, newChild);
    }

    {
      if (typeof newChild === 'function') {
        warnOnFunctionType(returnFiber);
      }
    }

    return null;
  }

  function updateSlot(returnFiber, oldFiber, newChild, lanes) {
    // Update the fiber if the keys match, otherwise return null.
    var key = oldFiber !== null ? oldFiber.key : null;

    if (typeof newChild === 'string' || typeof newChild === 'number') {
      // Text nodes don't have keys. If the previous node is implicitly keyed
      // we can continue to replace it without aborting even if it is not a text
      // node.
      if (key !== null) {
        return null;
      }

      return updateTextNode(returnFiber, oldFiber, '' + newChild, lanes);
    }

    if (typeof newChild === 'object' && newChild !== null) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          {
            if (newChild.key === key) {
              if (newChild.type === REACT_FRAGMENT_TYPE) {
                return updateFragment(returnFiber, oldFiber, newChild.props.children, lanes, key);
              }

              return updateElement(returnFiber, oldFiber, newChild, lanes);
            } else {
              return null;
            }
          }

        case REACT_PORTAL_TYPE:
          {
            if (newChild.key === key) {
              return updatePortal(returnFiber, oldFiber, newChild, lanes);
            } else {
              return null;
            }
          }
      }

      if (isArray$1(newChild) || getIteratorFn(newChild)) {
        if (key !== null) {
          return null;
        }

        return updateFragment(returnFiber, oldFiber, newChild, lanes, null);
      }

      throwOnInvalidObjectType(returnFiber, newChild);
    }

    {
      if (typeof newChild === 'function') {
        warnOnFunctionType(returnFiber);
      }
    }

    return null;
  }

  function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
    if (typeof newChild === 'string' || typeof newChild === 'number') {
      // Text nodes don't have keys, so we neither have to check the old nor
      // new node for the key. If both are text nodes, they match.
      var matchedFiber = existingChildren.get(newIdx) || null;
      return updateTextNode(returnFiber, matchedFiber, '' + newChild, lanes);
    }

    if (typeof newChild === 'object' && newChild !== null) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          {
            var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;

            if (newChild.type === REACT_FRAGMENT_TYPE) {
              return updateFragment(returnFiber, _matchedFiber, newChild.props.children, lanes, newChild.key);
            }

            return updateElement(returnFiber, _matchedFiber, newChild, lanes);
          }

        case REACT_PORTAL_TYPE:
          {
            var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;

            return updatePortal(returnFiber, _matchedFiber2, newChild, lanes);
          }

      }

      if (isArray$1(newChild) || getIteratorFn(newChild)) {
        var _matchedFiber3 = existingChildren.get(newIdx) || null;

        return updateFragment(returnFiber, _matchedFiber3, newChild, lanes, null);
      }

      throwOnInvalidObjectType(returnFiber, newChild);
    }

    {
      if (typeof newChild === 'function') {
        warnOnFunctionType(returnFiber);
      }
    }

    return null;
  }
  /**
   * Warns if there is a duplicate or missing key
   */


  function warnOnInvalidKey(child, knownKeys, returnFiber) {
    {
      if (typeof child !== 'object' || child === null) {
        return knownKeys;
      }

      switch (child.$$typeof) {
        case REACT_ELEMENT_TYPE:
        case REACT_PORTAL_TYPE:
          warnForMissingKey(child, returnFiber);
          var key = child.key;

          if (typeof key !== 'string') {
            break;
          }

          if (knownKeys === null) {
            knownKeys = new Set();
            knownKeys.add(key);
            break;
          }

          if (!knownKeys.has(key)) {
            knownKeys.add(key);
            break;
          }

          error('Encountered two children with the same key, `%s`. ' + 'Keys should be unique so that components maintain their identity ' + 'across updates. Non-unique keys may cause children to be ' + 'duplicated and/or omitted — the behavior is unsupported and ' + 'could change in a future version.', key);

          break;
      }
    }

    return knownKeys;
  }

  function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
    // This algorithm can't optimize by searching from both ends since we
    // don't have backpointers on fibers. I'm trying to see how far we can get
    // with that model. If it ends up not being worth the tradeoffs, we can
    // add it later.
    // Even with a two ended optimization, we'd want to optimize for the case
    // where there are few changes and brute force the comparison instead of
    // going for the Map. It'd like to explore hitting that path first in
    // forward-only mode and only go for the Map once we notice that we need
    // lots of look ahead. This doesn't handle reversal as well as two ended
    // search but that's unusual. Besides, for the two ended optimization to
    // work on Iterables, we'd need to copy the whole set.
    // In this first iteration, we'll just live with hitting the bad case
    // (adding everything to a Map) in for every insert/move.
    // If you change this code, also update reconcileChildrenIterator() which
    // uses the same algorithm.
    {
      // First, validate keys.
      var knownKeys = null;

      for (var i = 0; i < newChildren.length; i++) {
        var child = newChildren[i];
        knownKeys = warnOnInvalidKey(child, knownKeys, returnFiber);
      }
    }

    var resultingFirstChild = null;
    var previousNewFiber = null;
    var oldFiber = currentFirstChild;
    var lastPlacedIndex = 0;
    var newIdx = 0;
    var nextOldFiber = null;

    for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
      if (oldFiber.index > newIdx) {
        nextOldFiber = oldFiber;
        oldFiber = null;
      } else {
        nextOldFiber = oldFiber.sibling;
      }

      var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], lanes);

      if (newFiber === null) {
        // TODO: This breaks on empty slots like null children. That's
        // unfortunate because it triggers the slow path all the time. We need
        // a better way to communicate whether this was a miss or null,
        // boolean, undefined, etc.
        if (oldFiber === null) {
          oldFiber = nextOldFiber;
        }

        break;
      }

      if (shouldTrackSideEffects) {
        if (oldFiber && newFiber.alternate === null) {
          // We matched the slot, but we didn't reuse the existing fiber, so we
          // need to delete the existing child.
          deleteChild(returnFiber, oldFiber);
        }
      }

      lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);

      if (previousNewFiber === null) {
        // TODO: Move out of the loop. This only happens for the first run.
        resultingFirstChild = newFiber;
      } else {
        // TODO: Defer siblings if we're not at the right index for this slot.
        // I.e. if we had null values before, then we want to defer this
        // for each null value. However, we also don't want to call updateSlot
        // with the previous one.
        previousNewFiber.sibling = newFiber;
      }

      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }

    if (newIdx === newChildren.length) {
      // We've reached the end of the new children. We can delete the rest.
      deleteRemainingChildren(returnFiber, oldFiber);
      return resultingFirstChild;
    }

    if (oldFiber === null) {
      // If we don't have any more existing children we can choose a fast path
      // since the rest will all be insertions.
      for (; newIdx < newChildren.length; newIdx++) {
        var _newFiber = createChild(returnFiber, newChildren[newIdx], lanes);

        if (_newFiber === null) {
          continue;
        }

        lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx);

        if (previousNewFiber === null) {
          // TODO: Move out of the loop. This only happens for the first run.
          resultingFirstChild = _newFiber;
        } else {
          previousNewFiber.sibling = _newFiber;
        }

        previousNewFiber = _newFiber;
      }

      return resultingFirstChild;
    } // Add all children to a key map for quick lookups.


    var existingChildren = mapRemainingChildren(returnFiber, oldFiber); // Keep scanning and use the map to restore deleted items as moves.

    for (; newIdx < newChildren.length; newIdx++) {
      var _newFiber2 = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], lanes);

      if (_newFiber2 !== null) {
        if (shouldTrackSideEffects) {
          if (_newFiber2.alternate !== null) {
            // The new fiber is a work in progress, but if there exists a
            // current, that means that we reused the fiber. We need to delete
            // it from the child list so that we don't add it to the deletion
            // list.
            existingChildren.delete(_newFiber2.key === null ? newIdx : _newFiber2.key);
          }
        }

        lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx);

        if (previousNewFiber === null) {
          resultingFirstChild = _newFiber2;
        } else {
          previousNewFiber.sibling = _newFiber2;
        }

        previousNewFiber = _newFiber2;
      }
    }

    if (shouldTrackSideEffects) {
      // Any existing children that weren't consumed above were deleted. We need
      // to add them to the deletion list.
      existingChildren.forEach(function (child) {
        return deleteChild(returnFiber, child);
      });
    }

    return resultingFirstChild;
  }

  function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, lanes) {
    // This is the same implementation as reconcileChildrenArray(),
    // but using the iterator instead.
    var iteratorFn = getIteratorFn(newChildrenIterable);

    if (!(typeof iteratorFn === 'function')) {
      {
        throw Error( "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue." );
      }
    }

    {
      // We don't support rendering Generators because it's a mutation.
      // See https://github.com/facebook/react/issues/12995
      if (typeof Symbol === 'function' && // $FlowFixMe Flow doesn't know about toStringTag
      newChildrenIterable[Symbol.toStringTag] === 'Generator') {
        if (!didWarnAboutGenerators) {
          error('Using Generators as children is unsupported and will likely yield ' + 'unexpected results because enumerating a generator mutates it. ' + 'You may convert it to an array with `Array.from()` or the ' + '`[...spread]` operator before rendering. Keep in mind ' + 'you might need to polyfill these features for older browsers.');
        }

        didWarnAboutGenerators = true;
      } // Warn about using Maps as children


      if (newChildrenIterable.entries === iteratorFn) {
        if (!didWarnAboutMaps) {
          error('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
        }

        didWarnAboutMaps = true;
      } // First, validate keys.
      // We'll get a different iterator later for the main pass.


      var _newChildren = iteratorFn.call(newChildrenIterable);

      if (_newChildren) {
        var knownKeys = null;

        var _step = _newChildren.next();

        for (; !_step.done; _step = _newChildren.next()) {
          var child = _step.value;
          knownKeys = warnOnInvalidKey(child, knownKeys, returnFiber);
        }
      }
    }

    var newChildren = iteratorFn.call(newChildrenIterable);

    if (!(newChildren != null)) {
      {
        throw Error( "An iterable object provided no iterator." );
      }
    }

    var resultingFirstChild = null;
    var previousNewFiber = null;
    var oldFiber = currentFirstChild;
    var lastPlacedIndex = 0;
    var newIdx = 0;
    var nextOldFiber = null;
    var step = newChildren.next();

    for (; oldFiber !== null && !step.done; newIdx++, step = newChildren.next()) {
      if (oldFiber.index > newIdx) {
        nextOldFiber = oldFiber;
        oldFiber = null;
      } else {
        nextOldFiber = oldFiber.sibling;
      }

      var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);

      if (newFiber === null) {
        // TODO: This breaks on empty slots like null children. That's
        // unfortunate because it triggers the slow path all the time. We need
        // a better way to communicate whether this was a miss or null,
        // boolean, undefined, etc.
        if (oldFiber === null) {
          oldFiber = nextOldFiber;
        }

        break;
      }

      if (shouldTrackSideEffects) {
        if (oldFiber && newFiber.alternate === null) {
          // We matched the slot, but we didn't reuse the existing fiber, so we
          // need to delete the existing child.
          deleteChild(returnFiber, oldFiber);
        }
      }

      lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);

      if (previousNewFiber === null) {
        // TODO: Move out of the loop. This only happens for the first run.
        resultingFirstChild = newFiber;
      } else {
        // TODO: Defer siblings if we're not at the right index for this slot.
        // I.e. if we had null values before, then we want to defer this
        // for each null value. However, we also don't want to call updateSlot
        // with the previous one.
        previousNewFiber.sibling = newFiber;
      }

      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }

    if (step.done) {
      // We've reached the end of the new children. We can delete the rest.
      deleteRemainingChildren(returnFiber, oldFiber);
      return resultingFirstChild;
    }

    if (oldFiber === null) {
      // If we don't have any more existing children we can choose a fast path
      // since the rest will all be insertions.
      for (; !step.done; newIdx++, step = newChildren.next()) {
        var _newFiber3 = createChild(returnFiber, step.value, lanes);

        if (_newFiber3 === null) {
          continue;
        }

        lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx);

        if (previousNewFiber === null) {
          // TODO: Move out of the loop. This only happens for the first run.
          resultingFirstChild = _newFiber3;
        } else {
          previousNewFiber.sibling = _newFiber3;
        }

        previousNewFiber = _newFiber3;
      }

      return resultingFirstChild;
    } // Add all children to a key map for quick lookups.


    var existingChildren = mapRemainingChildren(returnFiber, oldFiber); // Keep scanning and use the map to restore deleted items as moves.

    for (; !step.done; newIdx++, step = newChildren.next()) {
      var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, lanes);

      if (_newFiber4 !== null) {
        if (shouldTrackSideEffects) {
          if (_newFiber4.alternate !== null) {
            // The new fiber is a work in progress, but if there exists a
            // current, that means that we reused the fiber. We need to delete
            // it from the child list so that we don't add it to the deletion
            // list.
            existingChildren.delete(_newFiber4.key === null ? newIdx : _newFiber4.key);
          }
        }

        lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx);

        if (previousNewFiber === null) {
          resultingFirstChild = _newFiber4;
        } else {
          previousNewFiber.sibling = _newFiber4;
        }

        previousNewFiber = _newFiber4;
      }
    }

    if (shouldTrackSideEffects) {
      // Any existing children that weren't consumed above were deleted. We need
      // to add them to the deletion list.
      existingChildren.forEach(function (child) {
        return deleteChild(returnFiber, child);
      });
    }

    return resultingFirstChild;
  }

  function reconcileSingleTextNode(returnFiber, currentFirstChild, textContent, lanes) {
    // There's no need to check for keys on text nodes since we don't have a
    // way to define them.
    if (currentFirstChild !== null && currentFirstChild.tag === HostText) {
      // We already have an existing node so let's just update it and delete
      // the rest.
      deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
      var existing = useFiber(currentFirstChild, textContent);
      existing.return = returnFiber;
      return existing;
    } // The existing first child is not a text node so we need to create one
    // and delete the existing ones.


    deleteRemainingChildren(returnFiber, currentFirstChild);
    var created = createFiberFromText(textContent, returnFiber.mode, lanes);
    created.return = returnFiber;
    return created;
  }

  function reconcileSingleElement(returnFiber, currentFirstChild, element, lanes) {
    var key = element.key;
    var child = currentFirstChild;

    while (child !== null) {
      // TODO: If key === null and child.key === null, then this only applies to
      // the first item in the list.
      if (child.key === key) {
        switch (child.tag) {
          case Fragment:
            {
              if (element.type === REACT_FRAGMENT_TYPE) {
                deleteRemainingChildren(returnFiber, child.sibling);
                var existing = useFiber(child, element.props.children);
                existing.return = returnFiber;

                {
                  existing._debugSource = element._source;
                  existing._debugOwner = element._owner;
                }

                return existing;
              }

              break;
            }

          case Block:

          // We intentionally fallthrough here if enableBlocksAPI is not on.
          // eslint-disable-next-lined no-fallthrough

          default:
            {
              if (child.elementType === element.type || ( // Keep this check inline so it only runs on the false path:
               isCompatibleFamilyForHotReloading(child, element) )) {
                deleteRemainingChildren(returnFiber, child.sibling);

                var _existing3 = useFiber(child, element.props);

                _existing3.ref = coerceRef(returnFiber, child, element);
                _existing3.return = returnFiber;

                {
                  _existing3._debugSource = element._source;
                  _existing3._debugOwner = element._owner;
                }

                return _existing3;
              }

              break;
            }
        } // Didn't match.


        deleteRemainingChildren(returnFiber, child);
        break;
      } else {
        deleteChild(returnFiber, child);
      }

      child = child.sibling;
    }

    if (element.type === REACT_FRAGMENT_TYPE) {
      var created = createFiberFromFragment(element.props.children, returnFiber.mode, lanes, element.key);
      created.return = returnFiber;
      return created;
    } else {
      var _created4 = createFiberFromElement(element, returnFiber.mode, lanes);

      _created4.ref = coerceRef(returnFiber, currentFirstChild, element);
      _created4.return = returnFiber;
      return _created4;
    }
  }

  function reconcileSinglePortal(returnFiber, currentFirstChild, portal, lanes) {
    var key = portal.key;
    var child = currentFirstChild;

    while (child !== null) {
      // TODO: If key === null and child.key === null, then this only applies to
      // the first item in the list.
      if (child.key === key) {
        if (child.tag === HostPortal && child.stateNode.containerInfo === portal.containerInfo && child.stateNode.implementation === portal.implementation) {
          deleteRemainingChildren(returnFiber, child.sibling);
          var existing = useFiber(child, portal.children || []);
          existing.return = returnFiber;
          return existing;
        } else {
          deleteRemainingChildren(returnFiber, child);
          break;
        }
      } else {
        deleteChild(returnFiber, child);
      }

      child = child.sibling;
    }

    var created = createFiberFromPortal(portal, returnFiber.mode, lanes);
    created.return = returnFiber;
    return created;
  } // This API will tag the children with the side-effect of the reconciliation
  // itself. They will be added to the side-effect list as we pass through the
  // children and the parent.


  function reconcileChildFibers(returnFiber, currentFirstChild, newChild, lanes) {
    // This function is not recursive.
    // If the top level item is an array, we treat it as a set of children,
    // not as a fragment. Nested arrays on the other hand will be treated as
    // fragment nodes. Recursion happens at the normal flow.
    // Handle top level unkeyed fragments as if they were arrays.
    // This leads to an ambiguity between <>{[...]}</> and <>...</>.
    // We treat the ambiguous cases above the same.
    var isUnkeyedTopLevelFragment = typeof newChild === 'object' && newChild !== null && newChild.type === REACT_FRAGMENT_TYPE && newChild.key === null;

    if (isUnkeyedTopLevelFragment) {
      newChild = newChild.props.children;
    } // Handle object types


    var isObject = typeof newChild === 'object' && newChild !== null;

    if (isObject) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, lanes));

        case REACT_PORTAL_TYPE:
          return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstChild, newChild, lanes));

      }
    }

    if (typeof newChild === 'string' || typeof newChild === 'number') {
      return placeSingleChild(reconcileSingleTextNode(returnFiber, currentFirstChild, '' + newChild, lanes));
    }

    if (isArray$1(newChild)) {
      return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, lanes);
    }

    if (getIteratorFn(newChild)) {
      return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, lanes);
    }

    if (isObject) {
      throwOnInvalidObjectType(returnFiber, newChild);
    }

    {
      if (typeof newChild === 'function') {
        warnOnFunctionType(returnFiber);
      }
    }

    if (typeof newChild === 'undefined' && !isUnkeyedTopLevelFragment) {
      // If the new child is undefined, and the return fiber is a composite
      // component, throw an error. If Fiber return types are disabled,
      // we already threw above.
      switch (returnFiber.tag) {
        case ClassComponent:
          {
            {
              var instance = returnFiber.stateNode;

              if (instance.render._isMockFunction) {
                // We allow auto-mocks to proceed as if they're returning null.
                break;
              }
            }
          }
        // Intentionally fall through to the next case, which handles both
        // functions and classes
        // eslint-disable-next-lined no-fallthrough

        case Block:
        case FunctionComponent:
        case ForwardRef:
        case SimpleMemoComponent:
          {
            {
              {
                throw Error( (getComponentName(returnFiber.type) || 'Component') + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null." );
              }
            }
          }
      }
    } // Remaining cases are all treated as empty.


    return deleteRemainingChildren(returnFiber, currentFirstChild);
  }

  return reconcileChildFibers;
}

var reconcileChildFibers = ChildReconciler(true);
var mountChildFibers = ChildReconciler(false);
function cloneChildFibers(current, workInProgress) {
  if (!(current === null || workInProgress.child === current.child)) {
    {
      throw Error( "Resuming work not yet implemented." );
    }
  }

  if (workInProgress.child === null) {
    return;
  }

  var currentChild = workInProgress.child;
  var newChild = createWorkInProgress(currentChild, currentChild.pendingProps);
  workInProgress.child = newChild;
  newChild.return = workInProgress;

  while (currentChild.sibling !== null) {
    currentChild = currentChild.sibling;
    newChild = newChild.sibling = createWorkInProgress(currentChild, currentChild.pendingProps);
    newChild.return = workInProgress;
  }

  newChild.sibling = null;
} // Reset a workInProgress child set to prepare it for a second pass.

function resetChildFibers(workInProgress, lanes) {
  var child = workInProgress.child;

  while (child !== null) {
    resetWorkInProgress(child, lanes);
    child = child.sibling;
  }
}

var NO_CONTEXT = {};
var contextStackCursor$1 = createCursor(NO_CONTEXT);
var contextFiberStackCursor = createCursor(NO_CONTEXT);
var rootInstanceStackCursor = createCursor(NO_CONTEXT);

function requiredContext(c) {
  if (!(c !== NO_CONTEXT)) {
    {
      throw Error( "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue." );
    }
  }

  return c;
}

function getRootHostContainer() {
  var rootInstance = requiredContext(rootInstanceStackCursor.current);
  return rootInstance;
}

function pushHostContainer(fiber, nextRootInstance) {
  // Push current root instance onto the stack;
  // This allows us to reset root when portals are popped.
  push(rootInstanceStackCursor, nextRootInstance, fiber); // Track the context and the Fiber that provided it.
  // This enables us to pop only Fibers that provide unique contexts.

  push(contextFiberStackCursor, fiber, fiber); // Finally, we need to push the host context to the stack.
  // However, we can't just call getRootHostContext() and push it because
  // we'd have a different number of entries on the stack depending on
  // whether getRootHostContext() throws somewhere in renderer code or not.
  // So we push an empty value first. This lets us safely unwind on errors.

  push(contextStackCursor$1, NO_CONTEXT, fiber);
  var nextRootContext = getRootHostContext(nextRootInstance); // Now that we know this function doesn't throw, replace it.

  pop(contextStackCursor$1, fiber);
  push(contextStackCursor$1, nextRootContext, fiber);
}

function popHostContainer(fiber) {
  pop(contextStackCursor$1, fiber);
  pop(contextFiberStackCursor, fiber);
  pop(rootInstanceStackCursor, fiber);
}

function getHostContext() {
  var context = requiredContext(contextStackCursor$1.current);
  return context;
}

function pushHostContext(fiber) {
  var rootInstance = requiredContext(rootInstanceStackCursor.current);
  var context = requiredContext(contextStackCursor$1.current);
  var nextContext = getChildHostContext(context, fiber.type); // Don't push this Fiber's context unless it's unique.

  if (context === nextContext) {
    return;
  } // Track the context and the Fiber that provided it.
  // This enables us to pop only Fibers that provide unique contexts.


  push(contextFiberStackCursor, fiber, fiber);
  push(contextStackCursor$1, nextContext, fiber);
}

function popHostContext(fiber) {
  // Do not pop unless this Fiber provided the current context.
  // pushHostContext() only pushes Fibers that provide unique contexts.
  if (contextFiberStackCursor.current !== fiber) {
    return;
  }

  pop(contextStackCursor$1, fiber);
  pop(contextFiberStackCursor, fiber);
}

var DefaultSuspenseContext = 0; // The Suspense Context is split into two parts. The lower bits is
// inherited deeply down the subtree. The upper bits only affect
// this immediate suspense boundary and gets reset each new
// boundary or suspense list.

var SubtreeSuspenseContextMask = 1; // Subtree Flags:
// InvisibleParentSuspenseContext indicates that one of our parent Suspense
// boundaries is not currently showing visible main content.
// Either because it is already showing a fallback or is not mounted at all.
// We can use this to determine if it is desirable to trigger a fallback at
// the parent. If not, then we might need to trigger undesirable boundaries
// and/or suspend the commit to avoid hiding the parent content.

var InvisibleParentSuspenseContext = 1; // Shallow Flags:
// ForceSuspenseFallback can be used by SuspenseList to force newly added
// items into their fallback state during one of the render passes.

var ForceSuspenseFallback = 2;
var suspenseStackCursor = createCursor(DefaultSuspenseContext);
function hasSuspenseContext(parentContext, flag) {
  return (parentContext & flag) !== 0;
}
function setDefaultShallowSuspenseContext(parentContext) {
  return parentContext & SubtreeSuspenseContextMask;
}
function setShallowSuspenseContext(parentContext, shallowContext) {
  return parentContext & SubtreeSuspenseContextMask | shallowContext;
}
function addSubtreeSuspenseContext(parentContext, subtreeContext) {
  return parentContext | subtreeContext;
}
function pushSuspenseContext(fiber, newContext) {
  push(suspenseStackCursor, newContext, fiber);
}
function popSuspenseContext(fiber) {
  pop(suspenseStackCursor, fiber);
}

function shouldCaptureSuspense(workInProgress, hasInvisibleParent) {
  // If it was the primary children that just suspended, capture and render the
  // fallback. Otherwise, don't capture and bubble to the next boundary.
  var nextState = workInProgress.memoizedState;

  if (nextState !== null) {
    if (nextState.dehydrated !== null) {
      // A dehydrated boundary always captures.
      return true;
    }

    return false;
  }

  var props = workInProgress.memoizedProps; // In order to capture, the Suspense component must have a fallback prop.

  if (props.fallback === undefined) {
    return false;
  } // Regular boundaries always capture.


  if (props.unstable_avoidThisFallback !== true) {
    return true;
  } // If it's a boundary we should avoid, then we prefer to bubble up to the
  // parent boundary if it is currently invisible.


  if (hasInvisibleParent) {
    return false;
  } // If the parent is not able to handle it, we must handle it.


  return true;
}
function findFirstSuspended(row) {
  var node = row;

  while (node !== null) {
    if (node.tag === SuspenseComponent) {
      var state = node.memoizedState;

      if (state !== null) {
        var dehydrated = state.dehydrated;

        if (dehydrated === null || isSuspenseInstancePending(dehydrated) || isSuspenseInstanceFallback(dehydrated)) {
          return node;
        }
      }
    } else if (node.tag === SuspenseListComponent && // revealOrder undefined can't be trusted because it don't
    // keep track of whether it suspended or not.
    node.memoizedProps.revealOrder !== undefined) {
      var didSuspend = (node.flags & DidCapture) !== NoFlags;

      if (didSuspend) {
        return node;
      }
    } else if (node.child !== null) {
      node.child.return = node;
      node = node.child;
      continue;
    }

    if (node === row) {
      return null;
    }

    while (node.sibling === null) {
      if (node.return === null || node.return === row) {
        return null;
      }

      node = node.return;
    }

    node.sibling.return = node.return;
    node = node.sibling;
  }

  return null;
}

var NoFlags$1 =
/*  */
0; // Represents whether effect should fire.

var HasEffect =
/* */
1; // Represents the phase in which the effect (not the clean-up) fires.

var Layout =
/*    */
2;
var Passive$1 =
/*   */
4;

// This may have been an insertion or a hydration.

var hydrationParentFiber = null;
var nextHydratableInstance = null;
var isHydrating = false;

function enterHydrationState(fiber) {

  var parentInstance = fiber.stateNode.containerInfo;
  nextHydratableInstance = getFirstHydratableChild(parentInstance);
  hydrationParentFiber = fiber;
  isHydrating = true;
  return true;
}

function deleteHydratableInstance(returnFiber, instance) {
  {
    switch (returnFiber.tag) {
      case HostRoot:
        didNotHydrateContainerInstance(returnFiber.stateNode.containerInfo, instance);
        break;

      case HostComponent:
        didNotHydrateInstance(returnFiber.type, returnFiber.memoizedProps, returnFiber.stateNode, instance);
        break;
    }
  }

  var childToDelete = createFiberFromHostInstanceForDeletion();
  childToDelete.stateNode = instance;
  childToDelete.return = returnFiber;
  childToDelete.flags = Deletion; // This might seem like it belongs on progressedFirstDeletion. However,
  // these children are not part of the reconciliation list of children.
  // Even if we abort and rereconcile the children, that will try to hydrate
  // again and the nodes are still in the host tree so these will be
  // recreated.

  if (returnFiber.lastEffect !== null) {
    returnFiber.lastEffect.nextEffect = childToDelete;
    returnFiber.lastEffect = childToDelete;
  } else {
    returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
  }
}

function insertNonHydratedInstance(returnFiber, fiber) {
  fiber.flags = fiber.flags & ~Hydrating | Placement;

  {
    switch (returnFiber.tag) {
      case HostRoot:
        {
          var parentContainer = returnFiber.stateNode.containerInfo;

          switch (fiber.tag) {
            case HostComponent:
              var type = fiber.type;
              var props = fiber.pendingProps;
              didNotFindHydratableContainerInstance(parentContainer, type);
              break;

            case HostText:
              var text = fiber.pendingProps;
              didNotFindHydratableContainerTextInstance(parentContainer, text);
              break;
          }

          break;
        }

      case HostComponent:
        {
          var parentType = returnFiber.type;
          var parentProps = returnFiber.memoizedProps;
          var parentInstance = returnFiber.stateNode;

          switch (fiber.tag) {
            case HostComponent:
              var _type = fiber.type;
              var _props = fiber.pendingProps;
              didNotFindHydratableInstance(parentType, parentProps, parentInstance, _type);
              break;

            case HostText:
              var _text = fiber.pendingProps;
              didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, _text);
              break;

            case SuspenseComponent:
              didNotFindHydratableSuspenseInstance(parentType, parentProps);
              break;
          }

          break;
        }

      default:
        return;
    }
  }
}

function tryHydrate(fiber, nextInstance) {
  switch (fiber.tag) {
    case HostComponent:
      {
        var type = fiber.type;
        var props = fiber.pendingProps;
        var instance = canHydrateInstance(nextInstance, type);

        if (instance !== null) {
          fiber.stateNode = instance;
          return true;
        }

        return false;
      }

    case HostText:
      {
        var text = fiber.pendingProps;
        var textInstance = canHydrateTextInstance(nextInstance, text);

        if (textInstance !== null) {
          fiber.stateNode = textInstance;
          return true;
        }

        return false;
      }

    case SuspenseComponent:
      {

        return false;
      }

    default:
      return false;
  }
}

function tryToClaimNextHydratableInstance(fiber) {
  if (!isHydrating) {
    return;
  }

  var nextInstance = nextHydratableInstance;

  if (!nextInstance) {
    // Nothing to hydrate. Make it an insertion.
    insertNonHydratedInstance(hydrationParentFiber, fiber);
    isHydrating = false;
    hydrationParentFiber = fiber;
    return;
  }

  var firstAttemptedInstance = nextInstance;

  if (!tryHydrate(fiber, nextInstance)) {
    // If we can't hydrate this instance let's try the next one.
    // We use this as a heuristic. It's based on intuition and not data so it
    // might be flawed or unnecessary.
    nextInstance = getNextHydratableSibling(firstAttemptedInstance);

    if (!nextInstance || !tryHydrate(fiber, nextInstance)) {
      // Nothing to hydrate. Make it an insertion.
      insertNonHydratedInstance(hydrationParentFiber, fiber);
      isHydrating = false;
      hydrationParentFiber = fiber;
      return;
    } // We matched the next one, we'll now assume that the first one was
    // superfluous and we'll delete it. Since we can't eagerly delete it
    // we'll have to schedule a deletion. To do that, this node needs a dummy
    // fiber associated with it.


    deleteHydratableInstance(hydrationParentFiber, firstAttemptedInstance);
  }

  hydrationParentFiber = fiber;
  nextHydratableInstance = getFirstHydratableChild(nextInstance);
}

function prepareToHydrateHostInstance(fiber, rootContainerInstance, hostContext) {

  var instance = fiber.stateNode;
  var updatePayload = hydrateInstance(instance, fiber.type, fiber.memoizedProps, rootContainerInstance, hostContext, fiber); // TODO: Type this specific to this type of component.

  fiber.updateQueue = updatePayload; // If the update payload indicates that there is a change or if there
  // is a new ref we mark this as an update.

  if (updatePayload !== null) {
    return true;
  }

  return false;
}

function prepareToHydrateHostTextInstance(fiber) {

  var textInstance = fiber.stateNode;
  var textContent = fiber.memoizedProps;
  var shouldUpdate = hydrateTextInstance(textInstance, textContent, fiber);

  {
    if (shouldUpdate) {
      // We assume that prepareToHydrateHostTextInstance is called in a context where the
      // hydration parent is the parent host component of this host text.
      var returnFiber = hydrationParentFiber;

      if (returnFiber !== null) {
        switch (returnFiber.tag) {
          case HostRoot:
            {
              var parentContainer = returnFiber.stateNode.containerInfo;
              didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, textContent);
              break;
            }

          case HostComponent:
            {
              var parentType = returnFiber.type;
              var parentProps = returnFiber.memoizedProps;
              var parentInstance = returnFiber.stateNode;
              didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, textContent);
              break;
            }
        }
      }
    }
  }

  return shouldUpdate;
}

function skipPastDehydratedSuspenseInstance(fiber) {

  var suspenseState = fiber.memoizedState;
  var suspenseInstance = suspenseState !== null ? suspenseState.dehydrated : null;

  if (!suspenseInstance) {
    {
      throw Error( "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue." );
    }
  }

  return getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance);
}

function popToNextHostParent(fiber) {
  var parent = fiber.return;

  while (parent !== null && parent.tag !== HostComponent && parent.tag !== HostRoot && parent.tag !== SuspenseComponent) {
    parent = parent.return;
  }

  hydrationParentFiber = parent;
}

function popHydrationState(fiber) {

  if (fiber !== hydrationParentFiber) {
    // We're deeper than the current hydration context, inside an inserted
    // tree.
    return false;
  }

  if (!isHydrating) {
    // If we're not currently hydrating but we're in a hydration context, then
    // we were an insertion and now need to pop up reenter hydration of our
    // siblings.
    popToNextHostParent(fiber);
    isHydrating = true;
    return false;
  }

  var type = fiber.type; // If we have any remaining hydratable nodes, we need to delete them now.
  // We only do this deeper than head and body since they tend to have random
  // other nodes in them. We also ignore components with pure text content in
  // side of them.
  // TODO: Better heuristic.

  if (fiber.tag !== HostComponent || type !== 'head' && type !== 'body' && !shouldSetTextContent(type, fiber.memoizedProps)) {
    var nextInstance = nextHydratableInstance;

    while (nextInstance) {
      deleteHydratableInstance(fiber, nextInstance);
      nextInstance = getNextHydratableSibling(nextInstance);
    }
  }

  popToNextHostParent(fiber);

  if (fiber.tag === SuspenseComponent) {
    nextHydratableInstance = skipPastDehydratedSuspenseInstance(fiber);
  } else {
    nextHydratableInstance = hydrationParentFiber ? getNextHydratableSibling(fiber.stateNode) : null;
  }

  return true;
}

function resetHydrationState() {

  hydrationParentFiber = null;
  nextHydratableInstance = null;
  isHydrating = false;
}

function getIsHydrating() {
  return isHydrating;
}

// and should be reset before starting a new render.
// This tracks which mutable sources need to be reset after a render.

var workInProgressSources = [];
var rendererSigil$1;

{
  // Used to detect multiple renderers using the same mutable source.
  rendererSigil$1 = {};
}

function markSourceAsDirty(mutableSource) {
  workInProgressSources.push(mutableSource);
}
function resetWorkInProgressVersions() {
  for (var i = 0; i < workInProgressSources.length; i++) {
    var mutableSource = workInProgressSources[i];

    {
      mutableSource._workInProgressVersionPrimary = null;
    }
  }

  workInProgressSources.length = 0;
}
function getWorkInProgressVersion(mutableSource) {
  {
    return mutableSource._workInProgressVersionPrimary;
  }
}
function setWorkInProgressVersion(mutableSource, version) {
  {
    mutableSource._workInProgressVersionPrimary = version;
  }

  workInProgressSources.push(mutableSource);
}
function warnAboutMultipleRenderersDEV(mutableSource) {
  {
    {
      if (mutableSource._currentPrimaryRenderer == null) {
        mutableSource._currentPrimaryRenderer = rendererSigil$1;
      } else if (mutableSource._currentPrimaryRenderer !== rendererSigil$1) {
        error('Detected multiple renderers concurrently rendering the ' + 'same mutable source. This is currently unsupported.');
      }
    }
  }
} // Eager reads the version of a mutable source and stores it on the root.

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher,
    ReactCurrentBatchConfig$1 = ReactSharedInternals.ReactCurrentBatchConfig;
var didWarnAboutMismatchedHooksForComponent;
var didWarnAboutUseOpaqueIdentifier;

{
  didWarnAboutUseOpaqueIdentifier = {};
  didWarnAboutMismatchedHooksForComponent = new Set();
}

// These are set right before calling the component.
var renderLanes = NoLanes; // The work-in-progress fiber. I've named it differently to distinguish it from
// the work-in-progress hook.

var currentlyRenderingFiber$1 = null; // Hooks are stored as a linked list on the fiber's memoizedState field. The
// current hook list is the list that belongs to the current fiber. The
// work-in-progress hook list is a new list that will be added to the
// work-in-progress fiber.

var currentHook = null;
var workInProgressHook = null; // Whether an update was scheduled at any point during the render phase. This
// does not get reset if we do another render pass; only when we're completely
// finished evaluating this component. This is an optimization so we know
// whether we need to clear render phase updates after a throw.

var didScheduleRenderPhaseUpdate = false; // Where an update was scheduled only during the current render pass. This
// gets reset after each attempt.
// TODO: Maybe there's some way to consolidate this with
// `didScheduleRenderPhaseUpdate`. Or with `numberOfReRenders`.

var didScheduleRenderPhaseUpdateDuringThisPass = false;
var RE_RENDER_LIMIT = 25; // In DEV, this is the name of the currently executing primitive hook

var currentHookNameInDev = null; // In DEV, this list ensures that hooks are called in the same order between renders.
// The list stores the order of hooks used during the initial render (mount).
// Subsequent renders (updates) reference this list.

var hookTypesDev = null;
var hookTypesUpdateIndexDev = -1; // In DEV, this tracks whether currently rendering component needs to ignore
// the dependencies for Hooks that need them (e.g. useEffect or useMemo).
// When true, such Hooks will always be "remounted". Only used during hot reload.

var ignorePreviousDependencies = false;

function mountHookTypesDev() {
  {
    var hookName = currentHookNameInDev;

    if (hookTypesDev === null) {
      hookTypesDev = [hookName];
    } else {
      hookTypesDev.push(hookName);
    }
  }
}

function updateHookTypesDev() {
  {
    var hookName = currentHookNameInDev;

    if (hookTypesDev !== null) {
      hookTypesUpdateIndexDev++;

      if (hookTypesDev[hookTypesUpdateIndexDev] !== hookName) {
        warnOnHookMismatchInDev(hookName);
      }
    }
  }
}

function checkDepsAreArrayDev(deps) {
  {
    if (deps !== undefined && deps !== null && !Array.isArray(deps)) {
      // Verify deps, but only on mount to avoid extra checks.
      // It's unlikely their type would change as usually you define them inline.
      error('%s received a final argument that is not an array (instead, received `%s`). When ' + 'specified, the final argument must be an array.', currentHookNameInDev, typeof deps);
    }
  }
}

function warnOnHookMismatchInDev(currentHookName) {
  {
    var componentName = getComponentName(currentlyRenderingFiber$1.type);

    if (!didWarnAboutMismatchedHooksForComponent.has(componentName)) {
      didWarnAboutMismatchedHooksForComponent.add(componentName);

      if (hookTypesDev !== null) {
        var table = '';
        var secondColumnStart = 30;

        for (var i = 0; i <= hookTypesUpdateIndexDev; i++) {
          var oldHookName = hookTypesDev[i];
          var newHookName = i === hookTypesUpdateIndexDev ? currentHookName : oldHookName;
          var row = i + 1 + ". " + oldHookName; // Extra space so second column lines up
          // lol @ IE not supporting String#repeat

          while (row.length < secondColumnStart) {
            row += ' ';
          }

          row += newHookName + '\n';
          table += row;
        }

        error('React has detected a change in the order of Hooks called by %s. ' + 'This will lead to bugs and errors if not fixed. ' + 'For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks\n\n' + '   Previous render            Next render\n' + '   ------------------------------------------------------\n' + '%s' + '   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n', componentName, table);
      }
    }
  }
}

function throwInvalidHookError() {
  {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }
}

function areHookInputsEqual(nextDeps, prevDeps) {
  {
    if (ignorePreviousDependencies) {
      // Only true when this component is being hot reloaded.
      return false;
    }
  }

  if (prevDeps === null) {
    {
      error('%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
    }

    return false;
  }

  {
    // Don't bother comparing lengths in prod because these arrays should be
    // passed inline.
    if (nextDeps.length !== prevDeps.length) {
      error('The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, "[" + prevDeps.join(', ') + "]", "[" + nextDeps.join(', ') + "]");
    }
  }

  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (objectIs(nextDeps[i], prevDeps[i])) {
      continue;
    }

    return false;
  }

  return true;
}

function renderWithHooks(current, workInProgress, Component, props, secondArg, nextRenderLanes) {
  renderLanes = nextRenderLanes;
  currentlyRenderingFiber$1 = workInProgress;

  {
    hookTypesDev = current !== null ? current._debugHookTypes : null;
    hookTypesUpdateIndexDev = -1; // Used for hot reloading:

    ignorePreviousDependencies = current !== null && current.type !== workInProgress.type;
  }

  workInProgress.memoizedState = null;
  workInProgress.updateQueue = null;
  workInProgress.lanes = NoLanes; // The following should have already been reset
  // currentHook = null;
  // workInProgressHook = null;
  // didScheduleRenderPhaseUpdate = false;
  // TODO Warn if no hooks are used at all during mount, then some are used during update.
  // Currently we will identify the update render as a mount because memoizedState === null.
  // This is tricky because it's valid for certain types of components (e.g. React.lazy)
  // Using memoizedState to differentiate between mount/update only works if at least one stateful hook is used.
  // Non-stateful hooks (e.g. context) don't get added to memoizedState,
  // so memoizedState would be null during updates and mounts.

  {
    if (current !== null && current.memoizedState !== null) {
      ReactCurrentDispatcher$1.current = HooksDispatcherOnUpdateInDEV;
    } else if (hookTypesDev !== null) {
      // This dispatcher handles an edge case where a component is updating,
      // but no stateful hooks have been used.
      // We want to match the production code behavior (which will use HooksDispatcherOnMount),
      // but with the extra DEV validation to ensure hooks ordering hasn't changed.
      // This dispatcher does that.
      ReactCurrentDispatcher$1.current = HooksDispatcherOnMountWithHookTypesInDEV;
    } else {
      ReactCurrentDispatcher$1.current = HooksDispatcherOnMountInDEV;
    }
  }

  var children = Component(props, secondArg); // Check if there was a render phase update

  if (didScheduleRenderPhaseUpdateDuringThisPass) {
    // Keep rendering in a loop for as long as render phase updates continue to
    // be scheduled. Use a counter to prevent infinite loops.
    var numberOfReRenders = 0;

    do {
      didScheduleRenderPhaseUpdateDuringThisPass = false;

      if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
        {
          throw Error( "Too many re-renders. React limits the number of renders to prevent an infinite loop." );
        }
      }

      numberOfReRenders += 1;

      {
        // Even when hot reloading, allow dependencies to stabilize
        // after first render to prevent infinite render phase updates.
        ignorePreviousDependencies = false;
      } // Start over from the beginning of the list


      currentHook = null;
      workInProgressHook = null;
      workInProgress.updateQueue = null;

      {
        // Also validate hook order for cascading updates.
        hookTypesUpdateIndexDev = -1;
      }

      ReactCurrentDispatcher$1.current =  HooksDispatcherOnRerenderInDEV ;
      children = Component(props, secondArg);
    } while (didScheduleRenderPhaseUpdateDuringThisPass);
  } // We can assume the previous dispatcher is always this one, since we set it
  // at the beginning of the render phase and there's no re-entrancy.


  ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;

  {
    workInProgress._debugHookTypes = hookTypesDev;
  } // This check uses currentHook so that it works the same in DEV and prod bundles.
  // hookTypesDev could catch more cases (e.g. context) but only in DEV bundles.


  var didRenderTooFewHooks = currentHook !== null && currentHook.next !== null;
  renderLanes = NoLanes;
  currentlyRenderingFiber$1 = null;
  currentHook = null;
  workInProgressHook = null;

  {
    currentHookNameInDev = null;
    hookTypesDev = null;
    hookTypesUpdateIndexDev = -1;
  }

  didScheduleRenderPhaseUpdate = false;

  if (!!didRenderTooFewHooks) {
    {
      throw Error( "Rendered fewer hooks than expected. This may be caused by an accidental early return statement." );
    }
  }

  return children;
}
function bailoutHooks(current, workInProgress, lanes) {
  workInProgress.updateQueue = current.updateQueue;
  workInProgress.flags &= ~(Passive | Update);
  current.lanes = removeLanes(current.lanes, lanes);
}
function resetHooksAfterThrow() {
  // We can assume the previous dispatcher is always this one, since we set it
  // at the beginning of the render phase and there's no re-entrancy.
  ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;

  if (didScheduleRenderPhaseUpdate) {
    // There were render phase updates. These are only valid for this render
    // phase, which we are now aborting. Remove the updates from the queues so
    // they do not persist to the next render. Do not remove updates from hooks
    // that weren't processed.
    //
    // Only reset the updates from the queue if it has a clone. If it does
    // not have a clone, that means it wasn't processed, and the updates were
    // scheduled before we entered the render phase.
    var hook = currentlyRenderingFiber$1.memoizedState;

    while (hook !== null) {
      var queue = hook.queue;

      if (queue !== null) {
        queue.pending = null;
      }

      hook = hook.next;
    }

    didScheduleRenderPhaseUpdate = false;
  }

  renderLanes = NoLanes;
  currentlyRenderingFiber$1 = null;
  currentHook = null;
  workInProgressHook = null;

  {
    hookTypesDev = null;
    hookTypesUpdateIndexDev = -1;
    currentHookNameInDev = null;
    isUpdatingOpaqueValueInRenderPhase = false;
  }

  didScheduleRenderPhaseUpdateDuringThisPass = false;
}

function mountWorkInProgressHook() {
  var hook = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };

  if (workInProgressHook === null) {
    // This is the first hook in the list
    currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook;
  } else {
    // Append to the end of the list
    workInProgressHook = workInProgressHook.next = hook;
  }

  return workInProgressHook;
}

function updateWorkInProgressHook() {
  // This function is used both for updates and for re-renders triggered by a
  // render phase update. It assumes there is either a current hook we can
  // clone, or a work-in-progress hook from a previous render pass that we can
  // use as a base. When we reach the end of the base list, we must switch to
  // the dispatcher used for mounts.
  var nextCurrentHook;

  if (currentHook === null) {
    var current = currentlyRenderingFiber$1.alternate;

    if (current !== null) {
      nextCurrentHook = current.memoizedState;
    } else {
      nextCurrentHook = null;
    }
  } else {
    nextCurrentHook = currentHook.next;
  }

  var nextWorkInProgressHook;

  if (workInProgressHook === null) {
    nextWorkInProgressHook = currentlyRenderingFiber$1.memoizedState;
  } else {
    nextWorkInProgressHook = workInProgressHook.next;
  }

  if (nextWorkInProgressHook !== null) {
    // There's already a work-in-progress. Reuse it.
    workInProgressHook = nextWorkInProgressHook;
    nextWorkInProgressHook = workInProgressHook.next;
    currentHook = nextCurrentHook;
  } else {
    // Clone from the current hook.
    if (!(nextCurrentHook !== null)) {
      {
        throw Error( "Rendered more hooks than during the previous render." );
      }
    }

    currentHook = nextCurrentHook;
    var newHook = {
      memoizedState: currentHook.memoizedState,
      baseState: currentHook.baseState,
      baseQueue: currentHook.baseQueue,
      queue: currentHook.queue,
      next: null
    };

    if (workInProgressHook === null) {
      // This is the first hook in the list.
      currentlyRenderingFiber$1.memoizedState = workInProgressHook = newHook;
    } else {
      // Append to the end of the list.
      workInProgressHook = workInProgressHook.next = newHook;
    }
  }

  return workInProgressHook;
}

function createFunctionComponentUpdateQueue() {
  return {
    lastEffect: null
  };
}

function basicStateReducer(state, action) {
  // $FlowFixMe: Flow doesn't like mixed types
  return typeof action === 'function' ? action(state) : action;
}

function mountReducer(reducer, initialArg, init) {
  var hook = mountWorkInProgressHook();
  var initialState;

  if (init !== undefined) {
    initialState = init(initialArg);
  } else {
    initialState = initialArg;
  }

  hook.memoizedState = hook.baseState = initialState;
  var queue = hook.queue = {
    pending: null,
    dispatch: null,
    lastRenderedReducer: reducer,
    lastRenderedState: initialState
  };
  var dispatch = queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber$1, queue);
  return [hook.memoizedState, dispatch];
}

function updateReducer(reducer, initialArg, init) {
  var hook = updateWorkInProgressHook();
  var queue = hook.queue;

  if (!(queue !== null)) {
    {
      throw Error( "Should have a queue. This is likely a bug in React. Please file an issue." );
    }
  }

  queue.lastRenderedReducer = reducer;
  var current = currentHook; // The last rebase update that is NOT part of the base state.

  var baseQueue = current.baseQueue; // The last pending update that hasn't been processed yet.

  var pendingQueue = queue.pending;

  if (pendingQueue !== null) {
    // We have new updates that haven't been processed yet.
    // We'll add them to the base queue.
    if (baseQueue !== null) {
      // Merge the pending queue and the base queue.
      var baseFirst = baseQueue.next;
      var pendingFirst = pendingQueue.next;
      baseQueue.next = pendingFirst;
      pendingQueue.next = baseFirst;
    }

    {
      if (current.baseQueue !== baseQueue) {
        // Internal invariant that should never happen, but feasibly could in
        // the future if we implement resuming, or some form of that.
        error('Internal error: Expected work-in-progress queue to be a clone. ' + 'This is a bug in React.');
      }
    }

    current.baseQueue = baseQueue = pendingQueue;
    queue.pending = null;
  }

  if (baseQueue !== null) {
    // We have a queue to process.
    var first = baseQueue.next;
    var newState = current.baseState;
    var newBaseState = null;
    var newBaseQueueFirst = null;
    var newBaseQueueLast = null;
    var update = first;

    do {
      var updateLane = update.lane;

      if (!isSubsetOfLanes(renderLanes, updateLane)) {
        // Priority is insufficient. Skip this update. If this is the first
        // skipped update, the previous update/state is the new base
        // update/state.
        var clone = {
          lane: updateLane,
          action: update.action,
          eagerReducer: update.eagerReducer,
          eagerState: update.eagerState,
          next: null
        };

        if (newBaseQueueLast === null) {
          newBaseQueueFirst = newBaseQueueLast = clone;
          newBaseState = newState;
        } else {
          newBaseQueueLast = newBaseQueueLast.next = clone;
        } // Update the remaining priority in the queue.
        // TODO: Don't need to accumulate this. Instead, we can remove
        // renderLanes from the origi