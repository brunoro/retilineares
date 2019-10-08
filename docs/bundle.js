/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/svg.js/dist/svg.js":
/*!*****************************************!*\
  !*** ./node_modules/svg.js/dist/svg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
* svg.js - A lightweight library for manipulating and animating SVG.
* @version 2.7.1
* https://svgdotjs.github.io/
*
* @copyright Wout Fierens <wout@mick-wout.com>
* @license MIT
*
* BUILT: Fri Nov 30 2018 10:01:55 GMT+0100 (GMT+01:00)
*/;
(function(root, factory) {
  /* istanbul ignore next */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){
      return factory(root, root.document)
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
}(typeof window !== "undefined" ? window : this, function(window, document) {

// Find global reference - uses 'this' by default when available,
// falls back to 'window' otherwise (for bundlers like Webpack)
var globalRef = (typeof this !== "undefined") ? this : window;

// The main wrapping element
var SVG = globalRef.SVG = function(element) {
  if (SVG.supported) {
    element = new SVG.Doc(element)

    if(!SVG.parser.draw)
      SVG.prepare()

    return element
  }
}

// Default namespaces
SVG.ns    = 'http://www.w3.org/2000/svg'
SVG.xmlns = 'http://www.w3.org/2000/xmlns/'
SVG.xlink = 'http://www.w3.org/1999/xlink'
SVG.svgjs = 'http://svgjs.com/svgjs'

// Svg support test
SVG.supported = (function() {
  return !! document.createElementNS &&
         !! document.createElementNS(SVG.ns,'svg').createSVGRect
})()

// Don't bother to continue if SVG is not supported
if (!SVG.supported) return false

// Element id sequence
SVG.did  = 1000

// Get next named element id
SVG.eid = function(name) {
  return 'Svgjs' + capitalize(name) + (SVG.did++)
}

// Method for element creation
SVG.create = function(name) {
  // create element
  var element = document.createElementNS(this.ns, name)

  // apply unique id
  element.setAttribute('id', this.eid(name))

  return element
}

// Method for extending objects
SVG.extend = function() {
  var modules, methods, key, i

  // Get list of modules
  modules = [].slice.call(arguments)

  // Get object with extensions
  methods = modules.pop()

  for (i = modules.length - 1; i >= 0; i--)
    if (modules[i])
      for (key in methods)
        modules[i].prototype[key] = methods[key]

  // Make sure SVG.Set inherits any newly added methods
  if (SVG.Set && SVG.Set.inherit)
    SVG.Set.inherit()
}

// Invent new element
SVG.invent = function(config) {
  // Create element initializer
  var initializer = typeof config.create == 'function' ?
    config.create :
    function() {
      this.constructor.call(this, SVG.create(config.create))
    }

  // Inherit prototype
  if (config.inherit)
    initializer.prototype = new config.inherit

  // Extend with methods
  if (config.extend)
    SVG.extend(initializer, config.extend)

  // Attach construct method to parent
  if (config.construct)
    SVG.extend(config.parent || SVG.Container, config.construct)

  return initializer
}

// Adopt existing svg elements
SVG.adopt = function(node) {
  // check for presence of node
  if (!node) return null

  // make sure a node isn't already adopted
  if (node.instance) return node.instance

  // initialize variables
  var element

  // adopt with element-specific settings
  if (node.nodeName == 'svg')
    element = node.parentNode instanceof window.SVGElement ? new SVG.Nested : new SVG.Doc
  else if (node.nodeName == 'linearGradient')
    element = new SVG.Gradient('linear')
  else if (node.nodeName == 'radialGradient')
    element = new SVG.Gradient('radial')
  else if (SVG[capitalize(node.nodeName)])
    element = new SVG[capitalize(node.nodeName)]
  else
    element = new SVG.Element(node)

  // ensure references
  element.type  = node.nodeName
  element.node  = node
  node.instance = element

  // SVG.Class specific preparations
  if (element instanceof SVG.Doc)
    element.namespace().defs()

  // pull svgjs data from the dom (getAttributeNS doesn't work in html5)
  element.setData(JSON.parse(node.getAttribute('svgjs:data')) || {})

  return element
}

// Initialize parsing element
SVG.prepare = function() {
  // Select document body and create invisible svg element
  var body = document.getElementsByTagName('body')[0]
    , draw = (body ? new SVG.Doc(body) : SVG.adopt(document.documentElement).nested()).size(2, 0)

  // Create parser object
  SVG.parser = {
    body: body || document.documentElement
  , draw: draw.style('opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden').attr('focusable', 'false').node
  , poly: draw.polyline().node
  , path: draw.path().node
  , native: SVG.create('svg')
  }
}

SVG.parser = {
  native: SVG.create('svg')
}

document.addEventListener('DOMContentLoaded', function() {
  if(!SVG.parser.draw)
    SVG.prepare()
}, false)

// Storage for regular expressions
SVG.regex = {
  // Parse unit value
  numberAndUnit:    /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i

  // Parse hex value
, hex:              /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i

  // Parse rgb value
, rgb:              /rgb\((\d+),(\d+),(\d+)\)/

  // Parse reference id
, reference:        /#([a-z0-9\-_]+)/i

  // splits a transformation chain
, transforms:       /\)\s*,?\s*/

  // Whitespace
, whitespace:       /\s/g

  // Test hex value
, isHex:            /^#[a-f0-9]{3,6}$/i

  // Test rgb value
, isRgb:            /^rgb\(/

  // Test css declaration
, isCss:            /[^:]+:[^;]+;?/

  // Test for blank string
, isBlank:          /^(\s+)?$/

  // Test for numeric string
, isNumber:         /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i

  // Test for percent value
, isPercent:        /^-?[\d\.]+%$/

  // Test for image url
, isImage:          /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i

  // split at whitespace and comma
, delimiter:        /[\s,]+/

  // The following regex are used to parse the d attribute of a path

  // Matches all hyphens which are not after an exponent
, hyphen:           /([^e])\-/gi

  // Replaces and tests for all path letters
, pathLetters:      /[MLHVCSQTAZ]/gi

  // yes we need this one, too
, isPathLetter:     /[MLHVCSQTAZ]/i

  // matches 0.154.23.45
, numbersWithDots:  /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi

  // matches .
, dots:             /\./g
}

SVG.utils = {
  // Map function
  map: function(array, block) {
    var i
      , il = array.length
      , result = []

    for (i = 0; i < il; i++)
      result.push(block(array[i]))

    return result
  }

  // Filter function
, filter: function(array, block) {
    var i
      , il = array.length
      , result = []

    for (i = 0; i < il; i++)
      if (block(array[i]))
        result.push(array[i])

    return result
  }

  // Degrees to radians
, radians: function(d) {
    return d % 360 * Math.PI / 180
  }

  // Radians to degrees
, degrees: function(r) {
    return r * 180 / Math.PI % 360
  }

, filterSVGElements: function(nodes) {
    return this.filter( nodes, function(el) { return el instanceof window.SVGElement })
  }

}

SVG.defaults = {
  // Default attribute values
  attrs: {
    // fill and stroke
    'fill-opacity':     1
  , 'stroke-opacity':   1
  , 'stroke-width':     0
  , 'stroke-linejoin':  'miter'
  , 'stroke-linecap':   'butt'
  , fill:               '#000000'
  , stroke:             '#000000'
  , opacity:            1
    // position
  , x:                  0
  , y:                  0
  , cx:                 0
  , cy:                 0
    // size
  , width:              0
  , height:             0
    // radius
  , r:                  0
  , rx:                 0
  , ry:                 0
    // gradient
  , offset:             0
  , 'stop-opacity':     1
  , 'stop-color':       '#000000'
    // text
  , 'font-size':        16
  , 'font-family':      'Helvetica, Arial, sans-serif'
  , 'text-anchor':      'start'
  }

}
// Module for color convertions
SVG.Color = function(color) {
  var match

  // initialize defaults
  this.r = 0
  this.g = 0
  this.b = 0

  if(!color) return

  // parse color
  if (typeof color === 'string') {
    if (SVG.regex.isRgb.test(color)) {
      // get rgb values
      match = SVG.regex.rgb.exec(color.replace(SVG.regex.whitespace,''))

      // parse numeric values
      this.r = parseInt(match[1])
      this.g = parseInt(match[2])
      this.b = parseInt(match[3])

    } else if (SVG.regex.isHex.test(color)) {
      // get hex values
      match = SVG.regex.hex.exec(fullHex(color))

      // parse numeric values
      this.r = parseInt(match[1], 16)
      this.g = parseInt(match[2], 16)
      this.b = parseInt(match[3], 16)

    }

  } else if (typeof color === 'object') {
    this.r = color.r
    this.g = color.g
    this.b = color.b

  }

}

SVG.extend(SVG.Color, {
  // Default to hex conversion
  toString: function() {
    return this.toHex()
  }
  // Build hex value
, toHex: function() {
    return '#'
      + compToHex(this.r)
      + compToHex(this.g)
      + compToHex(this.b)
  }
  // Build rgb value
, toRgb: function() {
    return 'rgb(' + [this.r, this.g, this.b].join() + ')'
  }
  // Calculate true brightness
, brightness: function() {
    return (this.r / 255 * 0.30)
         + (this.g / 255 * 0.59)
         + (this.b / 255 * 0.11)
  }
  // Make color morphable
, morph: function(color) {
    this.destination = new SVG.Color(color)

    return this
  }
  // Get morphed color at given position
, at: function(pos) {
    // make sure a destination is defined
    if (!this.destination) return this

    // normalise pos
    pos = pos < 0 ? 0 : pos > 1 ? 1 : pos

    // generate morphed color
    return new SVG.Color({
      r: ~~(this.r + (this.destination.r - this.r) * pos)
    , g: ~~(this.g + (this.destination.g - this.g) * pos)
    , b: ~~(this.b + (this.destination.b - this.b) * pos)
    })
  }

})

// Testers

// Test if given value is a color string
SVG.Color.test = function(color) {
  color += ''
  return SVG.regex.isHex.test(color)
      || SVG.regex.isRgb.test(color)
}

// Test if given value is a rgb object
SVG.Color.isRgb = function(color) {
  return color && typeof color.r == 'number'
               && typeof color.g == 'number'
               && typeof color.b == 'number'
}

// Test if given value is a color
SVG.Color.isColor = function(color) {
  return SVG.Color.isRgb(color) || SVG.Color.test(color)
}
// Module for array conversion
SVG.Array = function(array, fallback) {
  array = (array || []).valueOf()

  // if array is empty and fallback is provided, use fallback
  if (array.length == 0 && fallback)
    array = fallback.valueOf()

  // parse array
  this.value = this.parse(array)
}

SVG.extend(SVG.Array, {
  // Make array morphable
  morph: function(array) {
    this.destination = this.parse(array)

    // normalize length of arrays
    if (this.value.length != this.destination.length) {
      var lastValue       = this.value[this.value.length - 1]
        , lastDestination = this.destination[this.destination.length - 1]

      while(this.value.length > this.destination.length)
        this.destination.push(lastDestination)
      while(this.value.length < this.destination.length)
        this.value.push(lastValue)
    }

    return this
  }
  // Clean up any duplicate points
, settle: function() {
    // find all unique values
    for (var i = 0, il = this.value.length, seen = []; i < il; i++)
      if (seen.indexOf(this.value[i]) == -1)
        seen.push(this.value[i])

    // set new value
    return this.value = seen
  }
  // Get morphed array at given position
, at: function(pos) {
    // make sure a destination is defined
    if (!this.destination) return this

    // generate morphed array
    for (var i = 0, il = this.value.length, array = []; i < il; i++)
      array.push(this.value[i] + (this.destination[i] - this.value[i]) * pos)

    return new SVG.Array(array)
  }
  // Convert array to string
, toString: function() {
    return this.value.join(' ')
  }
  // Real value
, valueOf: function() {
    return this.value
  }
  // Parse whitespace separated string
, parse: function(array) {
    array = array.valueOf()

    // if already is an array, no need to parse it
    if (Array.isArray(array)) return array

    return this.split(array)
  }
  // Strip unnecessary whitespace
, split: function(string) {
    return string.trim().split(SVG.regex.delimiter).map(parseFloat)
  }
  // Reverse array
, reverse: function() {
    this.value.reverse()

    return this
  }
, clone: function() {
    var clone = new this.constructor()
    clone.value = array_clone(this.value)
    return clone
  }
})
// Poly points array
SVG.PointArray = function(array, fallback) {
  SVG.Array.call(this, array, fallback || [[0,0]])
}

// Inherit from SVG.Array
SVG.PointArray.prototype = new SVG.Array
SVG.PointArray.prototype.constructor = SVG.PointArray

SVG.extend(SVG.PointArray, {
  // Convert array to string
  toString: function() {
    // convert to a poly point string
    for (var i = 0, il = this.value.length, array = []; i < il; i++)
      array.push(this.value[i].join(','))

    return array.join(' ')
  }
  // Convert array to line object
, toLine: function() {
    return {
      x1: this.value[0][0]
    , y1: this.value[0][1]
    , x2: this.value[1][0]
    , y2: this.value[1][1]
    }
  }
  // Get morphed array at given position
, at: function(pos) {
    // make sure a destination is defined
    if (!this.destination) return this

    // generate morphed point string
    for (var i = 0, il = this.value.length, array = []; i < il; i++)
      array.push([
        this.value[i][0] + (this.destination[i][0] - this.value[i][0]) * pos
      , this.value[i][1] + (this.destination[i][1] - this.value[i][1]) * pos
      ])

    return new SVG.PointArray(array)
  }
  // Parse point string and flat array
, parse: function(array) {
    var points = []

    array = array.valueOf()

    // if it is an array
    if (Array.isArray(array)) {
      // and it is not flat, there is no need to parse it
      if(Array.isArray(array[0])) {
        // make sure to use a clone
        return array.map(function (el) { return el.slice() })
      } else if (array[0].x != null){
        // allow point objects to be passed
        return array.map(function (el) { return [el.x, el.y] })
      }
    } else { // Else, it is considered as a string
      // parse points
      array = array.trim().split(SVG.regex.delimiter).map(parseFloat)
    }

    // validate points - https://svgwg.org/svg2-draft/shapes.html#DataTypePoints
    // Odd number of coordinates is an error. In such cases, drop the last odd coordinate.
    if (array.length % 2 !== 0) array.pop()

    // wrap points in two-tuples and parse points as floats
    for(var i = 0, len = array.length; i < len; i = i + 2)
      points.push([ array[i], array[i+1] ])

    return points
  }
  // Move point string
, move: function(x, y) {
    var box = this.bbox()

    // get relative offset
    x -= box.x
    y -= box.y

    // move every point
    if (!isNaN(x) && !isNaN(y))
      for (var i = this.value.length - 1; i >= 0; i--)
        this.value[i] = [this.value[i][0] + x, this.value[i][1] + y]

    return this
  }
  // Resize poly string
, size: function(width, height) {
    var i, box = this.bbox()

    // recalculate position of all points according to new size
    for (i = this.value.length - 1; i >= 0; i--) {
      if(box.width) this.value[i][0] = ((this.value[i][0] - box.x) * width)  / box.width  + box.x
      if(box.height) this.value[i][1] = ((this.value[i][1] - box.y) * height) / box.height + box.y
    }

    return this
  }
  // Get bounding box of points
, bbox: function() {
    SVG.parser.poly.setAttribute('points', this.toString())

    return SVG.parser.poly.getBBox()
  }
})

var pathHandlers = {
  M: function(c, p, p0) {
    p.x = p0.x = c[0]
    p.y = p0.y = c[1]

    return ['M', p.x, p.y]
  },
  L: function(c, p) {
    p.x = c[0]
    p.y = c[1]
    return ['L', c[0], c[1]]
  },
  H: function(c, p) {
    p.x = c[0]
    return ['H', c[0]]
  },
  V: function(c, p) {
    p.y = c[0]
    return ['V', c[0]]
  },
  C: function(c, p) {
    p.x = c[4]
    p.y = c[5]
    return ['C', c[0], c[1], c[2], c[3], c[4], c[5]]
  },
  S: function(c, p) {
    p.x = c[2]
    p.y = c[3]
    return ['S', c[0], c[1], c[2], c[3]]
  },
  Q: function(c, p) {
    p.x = c[2]
    p.y = c[3]
    return ['Q', c[0], c[1], c[2], c[3]]
  },
  T: function(c, p) {
    p.x = c[0]
    p.y = c[1]
    return ['T', c[0], c[1]]
  },
  Z: function(c, p, p0) {
    p.x = p0.x
    p.y = p0.y
    return ['Z']
  },
  A: function(c, p) {
    p.x = c[5]
    p.y = c[6]
    return ['A', c[0], c[1], c[2], c[3], c[4], c[5], c[6]]
  }
}

var mlhvqtcsa = 'mlhvqtcsaz'.split('')

for(var i = 0, il = mlhvqtcsa.length; i < il; ++i){
  pathHandlers[mlhvqtcsa[i]] = (function(i){
    return function(c, p, p0) {
      if(i == 'H') c[0] = c[0] + p.x
      else if(i == 'V') c[0] = c[0] + p.y
      else if(i == 'A'){
        c[5] = c[5] + p.x,
        c[6] = c[6] + p.y
      }
      else
        for(var j = 0, jl = c.length; j < jl; ++j) {
          c[j] = c[j] + (j%2 ? p.y : p.x)
        }

      return pathHandlers[i](c, p, p0)
    }
  })(mlhvqtcsa[i].toUpperCase())
}

// Path points array
SVG.PathArray = function(array, fallback) {
  SVG.Array.call(this, array, fallback || [['M', 0, 0]])
}

// Inherit from SVG.Array
SVG.PathArray.prototype = new SVG.Array
SVG.PathArray.prototype.constructor = SVG.PathArray

SVG.extend(SVG.PathArray, {
  // Convert array to string
  toString: function() {
    return arrayToString(this.value)
  }
  // Move path string
, move: function(x, y) {
    // get bounding box of current situation
    var box = this.bbox()

    // get relative offset
    x -= box.x
    y -= box.y

    if (!isNaN(x) && !isNaN(y)) {
      // move every point
      for (var l, i = this.value.length - 1; i >= 0; i--) {
        l = this.value[i][0]

        if (l == 'M' || l == 'L' || l == 'T')  {
          this.value[i][1] += x
          this.value[i][2] += y

        } else if (l == 'H')  {
          this.value[i][1] += x

        } else if (l == 'V')  {
          this.value[i][1] += y

        } else if (l == 'C' || l == 'S' || l == 'Q')  {
          this.value[i][1] += x
          this.value[i][2] += y
          this.value[i][3] += x
          this.value[i][4] += y

          if (l == 'C')  {
            this.value[i][5] += x
            this.value[i][6] += y
          }

        } else if (l == 'A')  {
          this.value[i][6] += x
          this.value[i][7] += y
        }

      }
    }

    return this
  }
  // Resize path string
, size: function(width, height) {
    // get bounding box of current situation
    var i, l, box = this.bbox()

    // recalculate position of all points according to new size
    for (i = this.value.length - 1; i >= 0; i--) {
      l = this.value[i][0]

      if (l == 'M' || l == 'L' || l == 'T')  {
        this.value[i][1] = ((this.value[i][1] - box.x) * width)  / box.width  + box.x
        this.value[i][2] = ((this.value[i][2] - box.y) * height) / box.height + box.y

      } else if (l == 'H')  {
        this.value[i][1] = ((this.value[i][1] - box.x) * width)  / box.width  + box.x

      } else if (l == 'V')  {
        this.value[i][1] = ((this.value[i][1] - box.y) * height) / box.height + box.y

      } else if (l == 'C' || l == 'S' || l == 'Q')  {
        this.value[i][1] = ((this.value[i][1] - box.x) * width)  / box.width  + box.x
        this.value[i][2] = ((this.value[i][2] - box.y) * height) / box.height + box.y
        this.value[i][3] = ((this.value[i][3] - box.x) * width)  / box.width  + box.x
        this.value[i][4] = ((this.value[i][4] - box.y) * height) / box.height + box.y

        if (l == 'C')  {
          this.value[i][5] = ((this.value[i][5] - box.x) * width)  / box.width  + box.x
          this.value[i][6] = ((this.value[i][6] - box.y) * height) / box.height + box.y
        }

      } else if (l == 'A')  {
        // resize radii
        this.value[i][1] = (this.value[i][1] * width)  / box.width
        this.value[i][2] = (this.value[i][2] * height) / box.height

        // move position values
        this.value[i][6] = ((this.value[i][6] - box.x) * width)  / box.width  + box.x
        this.value[i][7] = ((this.value[i][7] - box.y) * height) / box.height + box.y
      }

    }

    return this
  }
  // Test if the passed path array use the same path data commands as this path array
, equalCommands: function(pathArray) {
    var i, il, equalCommands

    pathArray = new SVG.PathArray(pathArray)

    equalCommands = this.value.length === pathArray.value.length
    for(i = 0, il = this.value.length; equalCommands && i < il; i++) {
      equalCommands = this.value[i][0] === pathArray.value[i][0]
    }

    return equalCommands
  }
  // Make path array morphable
, morph: function(pathArray) {
    pathArray = new SVG.PathArray(pathArray)

    if(this.equalCommands(pathArray)) {
      this.destination = pathArray
    } else {
      this.destination = null
    }

    return this
  }
  // Get morphed path array at given position
, at: function(pos) {
    // make sure a destination is defined
    if (!this.destination) return this

    var sourceArray = this.value
      , destinationArray = this.destination.value
      , array = [], pathArray = new SVG.PathArray()
      , i, il, j, jl

    // Animate has specified in the SVG spec
    // See: https://www.w3.org/TR/SVG11/paths.html#PathElement
    for (i = 0, il = sourceArray.length; i < il; i++) {
      array[i] = [sourceArray[i][0]]
      for(j = 1, jl = sourceArray[i].length; j < jl; j++) {
        array[i][j] = sourceArray[i][j] + (destinationArray[i][j] - sourceArray[i][j]) * pos
      }
      // For the two flags of the elliptical arc command, the SVG spec say:
      // Flags and booleans are interpolated as fractions between zero and one, with any non-zero value considered to be a value of one/true
      // Elliptical arc command as an array followed by corresponding indexes:
      // ['A', rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y]
      //   0    1   2        3                 4             5      6  7
      if(array[i][0] === 'A') {
        array[i][4] = +(array[i][4] != 0)
        array[i][5] = +(array[i][5] != 0)
      }
    }

    // Directly modify the value of a path array, this is done this way for performance
    pathArray.value = array
    return pathArray
  }
  // Absolutize and parse path to array
, parse: function(array) {
    // if it's already a patharray, no need to parse it
    if (array instanceof SVG.PathArray) return array.valueOf()

    // prepare for parsing
    var i, x0, y0, s, seg, arr
      , x = 0
      , y = 0
      , paramCnt = { 'M':2, 'L':2, 'H':1, 'V':1, 'C':6, 'S':4, 'Q':4, 'T':2, 'A':7, 'Z':0 }

    if(typeof array == 'string'){

      array = array
        .replace(SVG.regex.numbersWithDots, pathRegReplace) // convert 45.123.123 to 45.123 .123
        .replace(SVG.regex.pathLetters, ' $& ') // put some room between letters and numbers
        .replace(SVG.regex.hyphen, '$1 -')      // add space before hyphen
        .trim()                                 // trim
        .split(SVG.regex.delimiter)   // split into array

    }else{
      array = array.reduce(function(prev, curr){
        return [].concat.call(prev, curr)
      }, [])
    }

    // array now is an array containing all parts of a path e.g. ['M', '0', '0', 'L', '30', '30' ...]
    var arr = []
      , p = new SVG.Point()
      , p0 = new SVG.Point()
      , index = 0
      , len = array.length

    do{
      // Test if we have a path letter
      if(SVG.regex.isPathLetter.test(array[index])){
        s = array[index]
        ++index
      // If last letter was a move command and we got no new, it defaults to [L]ine
      }else if(s == 'M'){
        s = 'L'
      }else if(s == 'm'){
        s = 'l'
      }

      arr.push(pathHandlers[s].call(null,
          array.slice(index, (index = index + paramCnt[s.toUpperCase()])).map(parseFloat),
          p, p0
        )
      )

    }while(len > index)

    return arr

  }
  // Get bounding box of path
, bbox: function() {
    SVG.parser.path.setAttribute('d', this.toString())

    return SVG.parser.path.getBBox()
  }

})

// Module for unit convertions
SVG.Number = SVG.invent({
  // Initialize
  create: function(value, unit) {
    // initialize defaults
    this.value = 0
    this.unit  = unit || ''

    // parse value
    if (typeof value === 'number') {
      // ensure a valid numeric value
      this.value = isNaN(value) ? 0 : !isFinite(value) ? (value < 0 ? -3.4e+38 : +3.4e+38) : value

    } else if (typeof value === 'string') {
      unit = value.match(SVG.regex.numberAndUnit)

      if (unit) {
        // make value numeric
        this.value = parseFloat(unit[1])

        // normalize
        if (unit[5] == '%')
          this.value /= 100
        else if (unit[5] == 's')
          this.value *= 1000

        // store unit
        this.unit = unit[5]
      }

    } else {
      if (value instanceof SVG.Number) {
        this.value = value.valueOf()
        this.unit  = value.unit
      }
    }

  }
  // Add methods
, extend: {
    // Stringalize
    toString: function() {
      return (
        this.unit == '%' ?
          ~~(this.value * 1e8) / 1e6:
        this.unit == 's' ?
          this.value / 1e3 :
          this.value
      ) + this.unit
    }
  , toJSON: function() {
      return this.toString()
    }
  , // Convert to primitive
    valueOf: function() {
      return this.value
    }
    // Add number
  , plus: function(number) {
      number = new SVG.Number(number)
      return new SVG.Number(this + number, this.unit || number.unit)
    }
    // Subtract number
  , minus: function(number) {
      number = new SVG.Number(number)
      return new SVG.Number(this - number, this.unit || number.unit)
    }
    // Multiply number
  , times: function(number) {
      number = new SVG.Number(number)
      return new SVG.Number(this * number, this.unit || number.unit)
    }
    // Divide number
  , divide: function(number) {
      number = new SVG.Number(number)
      return new SVG.Number(this / number, this.unit || number.unit)
    }
    // Convert to different unit
  , to: function(unit) {
      var number = new SVG.Number(this)

      if (typeof unit === 'string')
        number.unit = unit

      return number
    }
    // Make number morphable
  , morph: function(number) {
      this.destination = new SVG.Number(number)

      if(number.relative) {
        this.destination.value += this.value
      }

      return this
    }
    // Get morphed number at given position
  , at: function(pos) {
      // Make sure a destination is defined
      if (!this.destination) return this

      // Generate new morphed number
      return new SVG.Number(this.destination)
          .minus(this)
          .times(pos)
          .plus(this)
    }

  }
})


SVG.Element = SVG.invent({
  // Initialize node
  create: function(node) {
    // make stroke value accessible dynamically
    this._stroke = SVG.defaults.attrs.stroke
    this._event = null
    this._events = {}

    // initialize data object
    this.dom = {}

    // create circular reference
    if (this.node = node) {
      this.type = node.nodeName
      this.node.instance = this
      this._events = node._events || {}

      // store current attribute value
      this._stroke = node.getAttribute('stroke') || this._stroke
    }
  }

  // Add class methods
, extend: {
    // Move over x-axis
    x: function(x) {
      return this.attr('x', x)
    }
    // Move over y-axis
  , y: function(y) {
      return this.attr('y', y)
    }
    // Move by center over x-axis
  , cx: function(x) {
      return x == null ? this.x() + this.width() / 2 : this.x(x - this.width() / 2)
    }
    // Move by center over y-axis
  , cy: function(y) {
      return y == null ? this.y() + this.height() / 2 : this.y(y - this.height() / 2)
    }
    // Move element to given x and y values
  , move: function(x, y) {
      return this.x(x).y(y)
    }
    // Move element by its center
  , center: function(x, y) {
      return this.cx(x).cy(y)
    }
    // Set width of element
  , width: function(width) {
      return this.attr('width', width)
    }
    // Set height of element
  , height: function(height) {
      return this.attr('height', height)
    }
    // Set element size to given width and height
  , size: function(width, height) {
      var p = proportionalSize(this, width, height)

      return this
        .width(new SVG.Number(p.width))
        .height(new SVG.Number(p.height))
    }
    // Clone element
  , clone: function(parent) {
      // write dom data to the dom so the clone can pickup the data
      this.writeDataToDom()

      // clone element and assign new id
      var clone = assignNewId(this.node.cloneNode(true))

      // insert the clone in the given parent or after myself
      if(parent) parent.add(clone)
      else this.after(clone)

      return clone
    }
    // Remove element
  , remove: function() {
      if (this.parent())
        this.parent().removeElement(this)

      return this
    }
    // Replace element
  , replace: function(element) {
      this.after(element).remove()

      return element
    }
    // Add element to given container and return self
  , addTo: function(parent) {
      return parent.put(this)
    }
    // Add element to given container and return container
  , putIn: function(parent) {
      return parent.add(this)
    }
    // Get / set id
  , id: function(id) {
      return this.attr('id', id)
    }
    // Checks whether the given point inside the bounding box of the element
  , inside: function(x, y) {
      var box = this.bbox()

      return x > box.x
          && y > box.y
          && x < box.x + box.width
          && y < box.y + box.height
    }
    // Show element
  , show: function() {
      return this.style('display', '')
    }
    // Hide element
  , hide: function() {
      return this.style('display', 'none')
    }
    // Is element visible?
  , visible: function() {
      return this.style('display') != 'none'
    }
    // Return id on string conversion
  , toString: function() {
      return this.attr('id')
    }
    // Return array of classes on the node
  , classes: function() {
      var attr = this.attr('class')

      return attr == null ? [] : attr.trim().split(SVG.regex.delimiter)
    }
    // Return true if class exists on the node, false otherwise
  , hasClass: function(name) {
      return this.classes().indexOf(name) != -1
    }
    // Add class to the node
  , addClass: function(name) {
      if (!this.hasClass(name)) {
        var array = this.classes()
        array.push(name)
        this.attr('class', array.join(' '))
      }

      return this
    }
    // Remove class from the node
  , removeClass: function(name) {
      if (this.hasClass(name)) {
        this.attr('class', this.classes().filter(function(c) {
          return c != name
        }).join(' '))
      }

      return this
    }
    // Toggle the presence of a class on the node
  , toggleClass: function(name) {
      return this.hasClass(name) ? this.removeClass(name) : this.addClass(name)
    }
    // Get referenced element form attribute value
  , reference: function(attr) {
      return SVG.get(this.attr(attr))
    }
    // Returns the parent element instance
  , parent: function(type) {
      var parent = this

      // check for parent
      if(!parent.node.parentNode) return null

      // get parent element
      parent = SVG.adopt(parent.node.parentNode)

      if(!type) return parent

      // loop trough ancestors if type is given
      while(parent && parent.node instanceof window.SVGElement){
        if(typeof type === 'string' ? parent.matches(type) : parent instanceof type) return parent
        if(!parent.node.parentNode || parent.node.parentNode.nodeName == '#document' || parent.node.parentNode.nodeName == '#document-fragment') return null // #759, #720
        parent = SVG.adopt(parent.node.parentNode)
      }
    }
    // Get parent document
  , doc: function() {
      return this instanceof SVG.Doc ? this : this.parent(SVG.Doc)
    }
    // return array of all ancestors of given type up to the root svg
  , parents: function(type) {
      var parents = [], parent = this

      do{
        parent = parent.parent(type)
        if(!parent || !parent.node) break

        parents.push(parent)
      } while(parent.parent)

      return parents
    }
    // matches the element vs a css selector
  , matches: function(selector){
      return matches(this.node, selector)
    }
    // Returns the svg node to call native svg methods on it
  , native: function() {
      return this.node
    }
    // Import raw svg
  , svg: function(svg) {
      // create temporary holder
      var well = document.createElement('svg')

      // act as a setter if svg is given
      if (svg && this instanceof SVG.Parent) {
        // dump raw svg
        well.innerHTML = '<svg>' + svg.replace(/\n/, '').replace(/<([\w:-]+)([^<]+?)\/>/g, '<$1$2></$1>') + '</svg>'

        // transplant nodes
        for (var i = 0, il = well.firstChild.childNodes.length; i < il; i++)
          this.node.appendChild(well.firstChild.firstChild)

      // otherwise act as a getter
      } else {
        // create a wrapping svg element in case of partial content
        well.appendChild(svg = document.createElement('svg'))

        // write svgjs data to the dom
        this.writeDataToDom()

        // insert a copy of this node
        svg.appendChild(this.node.cloneNode(true))

        // return target element
        return well.innerHTML.replace(/^<svg>/, '').replace(/<\/svg>$/, '')
      }

      return this
    }
  // write svgjs data to the dom
  , writeDataToDom: function() {

      // dump variables recursively
      if(this.each || this.lines){
        var fn = this.each ? this : this.lines();
        fn.each(function(){
          this.writeDataToDom()
        })
      }

      // remove previously set data
      this.node.removeAttribute('svgjs:data')

      if(Object.keys(this.dom).length)
        this.node.setAttribute('svgjs:data', JSON.stringify(this.dom)) // see #428

      return this
    }
  // set given data to the elements data property
  , setData: function(o){
      this.dom = o
      return this
    }
  , is: function(obj){
      return is(this, obj)
    }
  }
})

SVG.easing = {
  '-': function(pos){return pos}
, '<>':function(pos){return -Math.cos(pos * Math.PI) / 2 + 0.5}
, '>': function(pos){return  Math.sin(pos * Math.PI / 2)}
, '<': function(pos){return -Math.cos(pos * Math.PI / 2) + 1}
}

SVG.morph = function(pos){
  return function(from, to) {
    return new SVG.MorphObj(from, to).at(pos)
  }
}

SVG.Situation = SVG.invent({

  create: function(o){
    this.init = false
    this.reversed = false
    this.reversing = false

    this.duration = new SVG.Number(o.duration).valueOf()
    this.delay = new SVG.Number(o.delay).valueOf()

    this.start = +new Date() + this.delay
    this.finish = this.start + this.duration
    this.ease = o.ease

    // this.loop is incremented from 0 to this.loops
    // it is also incremented when in an infinite loop (when this.loops is true)
    this.loop = 0
    this.loops = false

    this.animations = {
      // functionToCall: [list of morphable objects]
      // e.g. move: [SVG.Number, SVG.Number]
    }

    this.attrs = {
      // holds all attributes which are not represented from a function svg.js provides
      // e.g. someAttr: SVG.Number
    }

    this.styles = {
      // holds all styles which should be animated
      // e.g. fill-color: SVG.Color
    }

    this.transforms = [
      // holds all transformations as transformation objects
      // e.g. [SVG.Rotate, SVG.Translate, SVG.Matrix]
    ]

    this.once = {
      // functions to fire at a specific position
      // e.g. "0.5": function foo(){}
    }

  }

})


SVG.FX = SVG.invent({

  create: function(element) {
    this._target = element
    this.situations = []
    this.active = false
    this.situation = null
    this.paused = false
    this.lastPos = 0
    this.pos = 0
    // The absolute position of an animation is its position in the context of its complete duration (including delay and loops)
    // When performing a delay, absPos is below 0 and when performing a loop, its value is above 1
    this.absPos = 0
    this._speed = 1
  }

, extend: {

    /**
     * sets or returns the target of this animation
     * @param o object || number In case of Object it holds all parameters. In case of number its the duration of the animation
     * @param ease function || string Function which should be used for easing or easing keyword
     * @param delay Number indicating the delay before the animation starts
     * @return target || this
     */
    animate: function(o, ease, delay){

      if(typeof o == 'object'){
        ease = o.ease
        delay = o.delay
        o = o.duration
      }

      var situation = new SVG.Situation({
        duration: o || 1000,
        delay: delay || 0,
        ease: SVG.easing[ease || '-'] || ease
      })

      this.queue(situation)

      return this
    }

    /**
     * sets a delay before the next element of the queue is called
     * @param delay Duration of delay in milliseconds
     * @return this.target()
     */
  , delay: function(delay){
      // The delay is performed by an empty situation with its duration
      // attribute set to the duration of the delay
      var situation = new SVG.Situation({
        duration: delay,
        delay: 0,
        ease: SVG.easing['-']
      })

      return this.queue(situation)
    }

    /**
     * sets or returns the target of this animation
     * @param null || target SVG.Element which should be set as new target
     * @return target || this
     */
  , target: function(target){
      if(target && target instanceof SVG.Element){
        this._target = target
        return this
      }

      return this._target
    }

    // returns the absolute position at a given time
  , timeToAbsPos: function(timestamp){
      return (timestamp - this.situation.start) / (this.situation.duration/this._speed)
    }

    // returns the timestamp from a given absolute positon
  , absPosToTime: function(absPos){
      return this.situation.duration/this._speed * absPos + this.situation.start
    }

    // starts the animationloop
  , startAnimFrame: function(){
      this.stopAnimFrame()
      this.animationFrame = window.requestAnimationFrame(function(){ this.step() }.bind(this))
    }

    // cancels the animationframe
  , stopAnimFrame: function(){
      window.cancelAnimationFrame(this.animationFrame)
    }

    // kicks off the animation - only does something when the queue is currently not active and at least one situation is set
  , start: function(){
      // dont start if already started
      if(!this.active && this.situation){
        this.active = true
        this.startCurrent()
      }

      return this
    }

    // start the current situation
  , startCurrent: function(){
      this.situation.start = +new Date + this.situation.delay/this._speed
      this.situation.finish = this.situation.start + this.situation.duration/this._speed
      return this.initAnimations().step()
    }

    /**
     * adds a function / Situation to the animation queue
     * @param fn function / situation to add
     * @return this
     */
  , queue: function(fn){
      if(typeof fn == 'function' || fn instanceof SVG.Situation)
        this.situations.push(fn)

      if(!this.situation) this.situation = this.situations.shift()

      return this
    }

    /**
     * pulls next element from the queue and execute it
     * @return this
     */
  , dequeue: function(){
      // stop current animation
      this.stop()

      // get next animation from queue
      this.situation = this.situations.shift()

      if(this.situation){
        if(this.situation instanceof SVG.Situation) {
          this.start()
        } else {
          // If it is not a SVG.Situation, then it is a function, we execute it
          this.situation.call(this)
        }
      }

      return this
    }

    // updates all animations to the current state of the element
    // this is important when one property could be changed from another property
  , initAnimations: function() {
      var i, j, source
      var s = this.situation

      if(s.init) return this

      for(i in s.animations){
        source = this.target()[i]()

        if(!Array.isArray(source)) {
          source = [source]
        }

        if(!Array.isArray(s.animations[i])) {
          s.animations[i] = [s.animations[i]]
        }

        //if(s.animations[i].length > source.length) {
        //  source.concat = source.concat(s.animations[i].slice(source.length, s.animations[i].length))
        //}

        for(j = source.length; j--;) {
          // The condition is because some methods return a normal number instead
          // of a SVG.Number
          if(s.animations[i][j] instanceof SVG.Number)
            source[j] = new SVG.Number(source[j])

          s.animations[i][j] = source[j].morph(s.animations[i][j])
        }
      }

      for(i in s.attrs){
        s.attrs[i] = new SVG.MorphObj(this.target().attr(i), s.attrs[i])
      }

      for(i in s.styles){
        s.styles[i] = new SVG.MorphObj(this.target().style(i), s.styles[i])
      }

      s.initialTransformation = this.target().matrixify()

      s.init = true
      return this
    }
  , clearQueue: function(){
      this.situations = []
      return this
    }
  , clearCurrent: function(){
      this.situation = null
      return this
    }
    /** stops the animation immediately
     * @param jumpToEnd A Boolean indicating whether to complete the current animation immediately.
     * @param clearQueue A Boolean indicating whether to remove queued animation as well.
     * @return this
     */
  , stop: function(jumpToEnd, clearQueue){
      var active = this.active
      this.active = false

      if(clearQueue){
        this.clearQueue()
      }

      if(jumpToEnd && this.situation){
        // initialize the situation if it was not
        !active && this.startCurrent()
        this.atEnd()
      }

      this.stopAnimFrame()

      return this.clearCurrent()
    }

    /** resets the element to the state where the current element has started
     * @return this
     */
  , reset: function(){
      if(this.situation){
        var temp = this.situation
        this.stop()
        this.situation = temp
        this.atStart()
      }
      return this
    }

    // Stop the currently-running animation, remove all queued animations, and complete all animations for the element.
  , finish: function(){

      this.stop(true, false)

      while(this.dequeue().situation && this.stop(true, false));

      this.clearQueue().clearCurrent()

      return this
    }

    // set the internal animation pointer at the start position, before any loops, and updates the visualisation
  , atStart: function() {
      return this.at(0, true)
    }

    // set the internal animation pointer at the end position, after all the loops, and updates the visualisation
  , atEnd: function() {
      if (this.situation.loops === true) {
        // If in a infinite loop, we end the current iteration
        this.situation.loops = this.situation.loop + 1
      }

      if(typeof this.situation.loops == 'number') {
        // If performing a finite number of loops, we go after all the loops
        return this.at(this.situation.loops, true)
      } else {
        // If no loops, we just go at the end
        return this.at(1, true)
      }
    }

    // set the internal animation pointer to the specified position and updates the visualisation
    // if isAbsPos is true, pos is treated as an absolute position
  , at: function(pos, isAbsPos){
      var durDivSpd = this.situation.duration/this._speed

      this.absPos = pos
      // If pos is not an absolute position, we convert it into one
      if (!isAbsPos) {
        if (this.situation.reversed) this.absPos = 1 - this.absPos
        this.absPos += this.situation.loop
      }

      this.situation.start = +new Date - this.absPos * durDivSpd
      this.situation.finish = this.situation.start + durDivSpd

      return this.step(true)
    }

    /**
     * sets or returns the speed of the animations
     * @param speed null || Number The new speed of the animations
     * @return Number || this
     */
  , speed: function(speed){
      if (speed === 0) return this.pause()

      if (speed) {
        this._speed = speed
        // We use an absolute position here so that speed can affect the delay before the animation
        return this.at(this.absPos, true)
      } else return this._speed
    }

    // Make loopable
  , loop: function(times, reverse) {
      var c = this.last()

      // store total loops
      c.loops = (times != null) ? times : true
      c.loop = 0

      if(reverse) c.reversing = true
      return this
    }

    // pauses the animation
  , pause: function(){
      this.paused = true
      this.stopAnimFrame()

      return this
    }

    // unpause the animation
  , play: function(){
      if(!this.paused) return this
      this.paused = false
      // We use an absolute position here so that the delay before the animation can be paused
      return this.at(this.absPos, true)
    }

    /**
     * toggle or set the direction of the animation
     * true sets direction to backwards while false sets it to forwards
     * @param reversed Boolean indicating whether to reverse the animation or not (default: toggle the reverse status)
     * @return this
     */
  , reverse: function(reversed){
      var c = this.last()

      if(typeof reversed == 'undefined') c.reversed = !c.reversed
      else c.reversed = reversed

      return this
    }


    /**
     * returns a float from 0-1 indicating the progress of the current animation
     * @param eased Boolean indicating whether the returned position should be eased or not
     * @return number
     */
  , progress: function(easeIt){
      return easeIt ? this.situation.ease(this.pos) : this.pos
    }

    /**
     * adds a callback function which is called when the current animation is finished
     * @param fn Function which should be executed as callback
     * @return number
     */
  , after: function(fn){
      var c = this.last()
        , wrapper = function wrapper(e){
            if(e.detail.situation == c){
              fn.call(this, c)
              this.off('finished.fx', wrapper) // prevent memory leak
            }
          }

      this.target().on('finished.fx', wrapper)

      return this._callStart()
    }

    // adds a callback which is called whenever one animation step is performed
  , during: function(fn){
      var c = this.last()
        , wrapper = function(e){
            if(e.detail.situation == c){
              fn.call(this, e.detail.pos, SVG.morph(e.detail.pos), e.detail.eased, c)
            }
          }

      // see above
      this.target().off('during.fx', wrapper).on('during.fx', wrapper)

      this.after(function(){
        this.off('during.fx', wrapper)
      })

      return this._callStart()
    }

    // calls after ALL animations in the queue are finished
  , afterAll: function(fn){
      var wrapper = function wrapper(e){
            fn.call(this)
            this.off('allfinished.fx', wrapper)
          }

      // see above
      this.target().off('allfinished.fx', wrapper).on('allfinished.fx', wrapper)

      return this._callStart()
    }

    // calls on every animation step for all animations
  , duringAll: function(fn){
      var wrapper = function(e){
            fn.call(this, e.detail.pos, SVG.morph(e.detail.pos), e.detail.eased, e.detail.situation)
          }

      this.target().off('during.fx', wrapper).on('during.fx', wrapper)

      this.afterAll(function(){
        this.off('during.fx', wrapper)
      })

      return this._callStart()
    }

  , last: function(){
      return this.situations.length ? this.situations[this.situations.length-1] : this.situation
    }

    // adds one property to the animations
  , add: function(method, args, type){
      this.last()[type || 'animations'][method] = args
      return this._callStart()
    }

    /** perform one step of the animation
     *  @param ignoreTime Boolean indicating whether to ignore time and use position directly or recalculate position based on time
     *  @return this
     */
  , step: function(ignoreTime){

      // convert current time to an absolute position
      if(!ignoreTime) this.absPos = this.timeToAbsPos(+new Date)

      // This part convert an absolute position to a position
      if(this.situation.loops !== false) {
        var absPos, absPosInt, lastLoop

        // If the absolute position is below 0, we just treat it as if it was 0
        absPos = Math.max(this.absPos, 0)
        absPosInt = Math.floor(absPos)

        if(this.situation.loops === true || absPosInt < this.situation.loops) {
          this.pos = absPos - absPosInt
          lastLoop = this.situation.loop
          this.situation.loop = absPosInt
        } else {
          this.absPos = this.situation.loops
          this.pos = 1
          // The -1 here is because we don't want to toggle reversed when all the loops have been completed
          lastLoop = this.situation.loop - 1
          this.situation.loop = this.situation.loops
        }

        if(this.situation.reversing) {
          // Toggle reversed if an odd number of loops as occured since the last call of step
          this.situation.reversed = this.situation.reversed != Boolean((this.situation.loop - lastLoop) % 2)
        }

      } else {
        // If there are no loop, the absolute position must not be above 1
        this.absPos = Math.min(this.absPos, 1)
        this.pos = this.absPos
      }

      // while the absolute position can be below 0, the position must not be below 0
      if(this.pos < 0) this.pos = 0

      if(this.situation.reversed) this.pos = 1 - this.pos


      // apply easing
      var eased = this.situation.ease(this.pos)

      // call once-callbacks
      for(var i in this.situation.once){
        if(i > this.lastPos && i <= eased){
          this.situation.once[i].call(this.target(), this.pos, eased)
          delete this.situation.once[i]
        }
      }

      // fire during callback with position, eased position and current situation as parameter
      if(this.active) this.target().fire('during', {pos: this.pos, eased: eased, fx: this, situation: this.situation})

      // the user may call stop or finish in the during callback
      // so make sure that we still have a valid situation
      if(!this.situation){
        return this
      }

      // apply the actual animation to every property
      this.eachAt()

      // do final code when situation is finished
      if((this.pos == 1 && !this.situation.reversed) || (this.situation.reversed && this.pos == 0)){

        // stop animation callback
        this.stopAnimFrame()

        // fire finished callback with current situation as parameter
        this.target().fire('finished', {fx:this, situation: this.situation})

        if(!this.situations.length){
          this.target().fire('allfinished')

          // Recheck the length since the user may call animate in the afterAll callback
          if(!this.situations.length){
            this.target().off('.fx') // there shouldnt be any binding left, but to make sure...
            this.active = false
          }
        }

        // start next animation
        if(this.active) this.dequeue()
        else this.clearCurrent()

      }else if(!this.paused && this.active){
        // we continue animating when we are not at the end
        this.startAnimFrame()
      }

      // save last eased position for once callback triggering
      this.lastPos = eased
      return this

    }

    // calculates the step for every property and calls block with it
  , eachAt: function(){
      var i, len, at, self = this, target = this.target(), s = this.situation

      // apply animations which can be called trough a method
      for(i in s.animations){

        at = [].concat(s.animations[i]).map(function(el){
          return typeof el !== 'string' && el.at ? el.at(s.ease(self.pos), self.pos) : el
        })

        target[i].apply(target, at)

      }

      // apply animation which has to be applied with attr()
      for(i in s.attrs){

        at = [i].concat(s.attrs[i]).map(function(el){
          return typeof el !== 'string' && el.at ? el.at(s.ease(self.pos), self.pos) : el
        })

        target.attr.apply(target, at)

      }

      // apply animation which has to be applied with style()
      for(i in s.styles){

        at = [i].concat(s.styles[i]).map(function(el){
          return typeof el !== 'string' && el.at ? el.at(s.ease(self.pos), self.pos) : el
        })

        target.style.apply(target, at)

      }

      // animate initialTransformation which has to be chained
      if(s.transforms.length){

        // get initial initialTransformation
        at = s.initialTransformation
        for(i = 0, len = s.transforms.length; i < len; i++){

          // get next transformation in chain
          var a = s.transforms[i]

          // multiply matrix directly
          if(a instanceof SVG.Matrix){

            if(a.relative){
              at = at.multiply(new SVG.Matrix().morph(a).at(s.ease(this.pos)))
            }else{
              at = at.morph(a).at(s.ease(this.pos))
            }
            continue
          }

          // when transformation is absolute we have to reset the needed transformation first
          if(!a.relative)
            a.undo(at.extract())

          // and reapply it after
          at = at.multiply(a.at(s.ease(this.pos)))

        }

        // set new matrix on element
        target.matrix(at)
      }

      return this

    }


    // adds an once-callback which is called at a specific position and never again
  , once: function(pos, fn, isEased){
      var c = this.last()
      if(!isEased) pos = c.ease(pos)

      c.once[pos] = fn

      return this
    }

  , _callStart: function() {
      setTimeout(function(){this.start()}.bind(this), 0)
      return this
    }

  }

, parent: SVG.Element

  // Add method to parent elements
, construct: {
    // Get fx module or create a new one, then animate with given duration and ease
    animate: function(o, ease, delay) {
      return (this.fx || (this.fx = new SVG.FX(this))).animate(o, ease, delay)
    }
  , delay: function(delay){
      return (this.fx || (this.fx = new SVG.FX(this))).delay(delay)
    }
  , stop: function(jumpToEnd, clearQueue) {
      if (this.fx)
        this.fx.stop(jumpToEnd, clearQueue)

      return this
    }
  , finish: function() {
      if (this.fx)
        this.fx.finish()

      return this
    }
    // Pause current animation
  , pause: function() {
      if (this.fx)
        this.fx.pause()

      return this
    }
    // Play paused current animation
  , play: function() {
      if (this.fx)
        this.fx.play()

      return this
    }
    // Set/Get the speed of the animations
  , speed: function(speed) {
      if (this.fx)
        if (speed == null)
          return this.fx.speed()
        else
          this.fx.speed(speed)

      return this
    }
  }

})

// MorphObj is used whenever no morphable object is given
SVG.MorphObj = SVG.invent({

  create: function(from, to){
    // prepare color for morphing
    if(SVG.Color.isColor(to)) return new SVG.Color(from).morph(to)
    // check if we have a list of values
    if(SVG.regex.delimiter.test(from)) {
      // prepare path for morphing
      if(SVG.regex.pathLetters.test(from)) return new SVG.PathArray(from).morph(to)
      // prepare value list for morphing
      else return new SVG.Array(from).morph(to)
    }
    // prepare number for morphing
    if(SVG.regex.numberAndUnit.test(to)) return new SVG.Number(from).morph(to)

    // prepare for plain morphing
    this.value = from
    this.destination = to
  }

, extend: {
    at: function(pos, real){
      return real < 1 ? this.value : this.destination
    },

    valueOf: function(){
      return this.value
    }
  }

})

SVG.extend(SVG.FX, {
  // Add animatable attributes
  attr: function(a, v, relative) {
    // apply attributes individually
    if (typeof a == 'object') {
      for (var key in a)
        this.attr(key, a[key])

    } else {
      this.add(a, v, 'attrs')
    }

    return this
  }
  // Add animatable styles
, style: function(s, v) {
    if (typeof s == 'object')
      for (var key in s)
        this.style(key, s[key])

    else
      this.add(s, v, 'styles')

    return this
  }
  // Animatable x-axis
, x: function(x, relative) {
    if(this.target() instanceof SVG.G){
      this.transform({x:x}, relative)
      return this
    }

    var num = new SVG.Number(x)
    num.relative = relative
    return this.add('x', num)
  }
  // Animatable y-axis
, y: function(y, relative) {
    if(this.target() instanceof SVG.G){
      this.transform({y:y}, relative)
      return this
    }

    var num = new SVG.Number(y)
    num.relative = relative
    return this.add('y', num)
  }
  // Animatable center x-axis
, cx: function(x) {
    return this.add('cx', new SVG.Number(x))
  }
  // Animatable center y-axis
, cy: function(y) {
    return this.add('cy', new SVG.Number(y))
  }
  // Add animatable move
, move: function(x, y) {
    return this.x(x).y(y)
  }
  // Add animatable center
, center: function(x, y) {
    return this.cx(x).cy(y)
  }
  // Add animatable size
, size: function(width, height) {
    if (this.target() instanceof SVG.Text) {
      // animate font size for Text elements
      this.attr('font-size', width)

    } else {
      // animate bbox based size for all other elements
      var box

      if(!width || !height){
        box = this.target().bbox()
      }

      if(!width){
        width = box.width / box.height  * height
      }

      if(!height){
        height = box.height / box.width  * width
      }

      this.add('width' , new SVG.Number(width))
          .add('height', new SVG.Number(height))

    }

    return this
  }
  // Add animatable width
, width: function(width) {
    return this.add('width', new SVG.Number(width))
  }
  // Add animatable height
, height: function(height) {
    return this.add('height', new SVG.Number(height))
  }
  // Add animatable plot
, plot: function(a, b, c, d) {
    // Lines can be plotted with 4 arguments
    if(arguments.length == 4) {
      return this.plot([a, b, c, d])
    }

    return this.add('plot', new (this.target().morphArray)(a))
  }
  // Add leading method
, leading: function(value) {
    return this.target().leading ?
      this.add('leading', new SVG.Number(value)) :
      this
  }
  // Add animatable viewbox
, viewbox: function(x, y, width, height) {
    if (this.target() instanceof SVG.Container) {
      this.add('viewbox', new SVG.ViewBox(x, y, width, height))
    }

    return this
  }
, update: function(o) {
    if (this.target() instanceof SVG.Stop) {
      if (typeof o == 'number' || o instanceof SVG.Number) {
        return this.update({
          offset:  arguments[0]
        , color:   arguments[1]
        , opacity: arguments[2]
        })
      }

      if (o.opacity != null) this.attr('stop-opacity', o.opacity)
      if (o.color   != null) this.attr('stop-color', o.color)
      if (o.offset  != null) this.attr('offset', o.offset)
    }

    return this
  }
})

SVG.Box = SVG.invent({
  create: function(x, y, width, height) {
    if (typeof x == 'object' && !(x instanceof SVG.Element)) {
      // chromes getBoundingClientRect has no x and y property
      return SVG.Box.call(this, x.left != null ? x.left : x.x , x.top != null ? x.top : x.y, x.width, x.height)
    } else if (arguments.length == 4) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    }

    // add center, right, bottom...
    fullBox(this)
  }
, extend: {
    // Merge rect box with another, return a new instance
    merge: function(box) {
      var b = new this.constructor()

      // merge boxes
      b.x      = Math.min(this.x, box.x)
      b.y      = Math.min(this.y, box.y)
      b.width  = Math.max(this.x + this.width,  box.x + box.width)  - b.x
      b.height = Math.max(this.y + this.height, box.y + box.height) - b.y

      return fullBox(b)
    }

  , transform: function(m) {
      var xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, p, bbox

      var pts = [
        new SVG.Point(this.x, this.y),
        new SVG.Point(this.x2, this.y),
        new SVG.Point(this.x, this.y2),
        new SVG.Point(this.x2, this.y2)
      ]

      pts.forEach(function(p) {
        p = p.transform(m)
        xMin = Math.min(xMin,p.x)
        xMax = Math.max(xMax,p.x)
        yMin = Math.min(yMin,p.y)
        yMax = Math.max(yMax,p.y)
      })

      bbox = new this.constructor()
      bbox.x = xMin
      bbox.width = xMax-xMin
      bbox.y = yMin
      bbox.height = yMax-yMin

      fullBox(bbox)

      return bbox
    }
  }
})

SVG.BBox = SVG.invent({
  // Initialize
  create: function(element) {
    SVG.Box.apply(this, [].slice.call(arguments))

    // get values if element is given
    if (element instanceof SVG.Element) {
      var box

      // yes this is ugly, but Firefox can be a pain when it comes to elements that are not yet rendered
      try {

        if (!document.documentElement.contains){
          // This is IE - it does not support contains() for top-level SVGs
          var topParent = element.node
          while (topParent.parentNode){
            topParent = topParent.parentNode
          }
          if (topParent != document) throw new Exception('Element not in the dom')
        } else {
          // the element is NOT in the dom, throw error
          if(!document.documentElement.contains(element.node)) throw new Exception('Element not in the dom')
        }

        // find native bbox
        box = element.node.getBBox()
      } catch(e) {
        if(element instanceof SVG.Shape){
          var clone = element.clone(SVG.parser.draw.instance).show()
          box = clone.node.getBBox()
          clone.remove()
        }else{
          box = {
            x:      element.node.clientLeft
          , y:      element.node.clientTop
          , width:  element.node.clientWidth
          , height: element.node.clientHeight
          }
        }
      }

      SVG.Box.call(this, box)
    }

  }

  // Define ancestor
, inherit: SVG.Box

  // Define Parent
, parent: SVG.Element

  // Constructor
, construct: {
    // Get bounding box
    bbox: function() {
      return new SVG.BBox(this)
    }
  }

})

SVG.BBox.prototype.constructor = SVG.BBox


SVG.extend(SVG.Element, {
  tbox: function(){
    console.warn('Use of TBox is deprecated and mapped to RBox. Use .rbox() instead.')
    return this.rbox(this.doc())
  }
})

SVG.RBox = SVG.invent({
  // Initialize
  create: function(element) {
    SVG.Box.apply(this, [].slice.call(arguments))

    if (element instanceof SVG.Element) {
      SVG.Box.call(this, element.node.getBoundingClientRect())
    }
  }

, inherit: SVG.Box

  // define Parent
, parent: SVG.Element

, extend: {
    addOffset: function() {
      // offset by window scroll position, because getBoundingClientRect changes when window is scrolled
      this.x += window.pageXOffset
      this.y += window.pageYOffset
      return this
    }
  }

  // Constructor
, construct: {
    // Get rect box
    rbox: function(el) {
      if (el) return new SVG.RBox(this).transform(el.screenCTM().inverse())
      return new SVG.RBox(this).addOffset()
    }
  }

})

SVG.RBox.prototype.constructor = SVG.RBox

SVG.Matrix = SVG.invent({
  // Initialize
  create: function(source) {
    var i, base = arrayToMatrix([1, 0, 0, 1, 0, 0])

    // ensure source as object
    source = source instanceof SVG.Element ?
      source.matrixify() :
    typeof source === 'string' ?
      arrayToMatrix(source.split(SVG.regex.delimiter).map(parseFloat)) :
    arguments.length == 6 ?
      arrayToMatrix([].slice.call(arguments)) :
    Array.isArray(source) ?
      arrayToMatrix(source) :
    typeof source === 'object' ?
      source : base

    // merge source
    for (i = abcdef.length - 1; i >= 0; --i)
      this[abcdef[i]] = source[abcdef[i]] != null ?
        source[abcdef[i]] : base[abcdef[i]]
  }

  // Add methods
, extend: {
    // Extract individual transformations
    extract: function() {
      // find delta transform points
      var px    = deltaTransformPoint(this, 0, 1)
        , py    = deltaTransformPoint(this, 1, 0)
        , skewX = 180 / Math.PI * Math.atan2(px.y, px.x) - 90

      return {
        // translation
        x:        this.e
      , y:        this.f
      , transformedX:(this.e * Math.cos(skewX * Math.PI / 180) + this.f * Math.sin(skewX * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b)
      , transformedY:(this.f * Math.cos(skewX * Math.PI / 180) + this.e * Math.sin(-skewX * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d)
        // skew
      , skewX:    -skewX
      , skewY:    180 / Math.PI * Math.atan2(py.y, py.x)
        // scale
      , scaleX:   Math.sqrt(this.a * this.a + this.b * this.b)
      , scaleY:   Math.sqrt(this.c * this.c + this.d * this.d)
        // rotation
      , rotation: skewX
      , a: this.a
      , b: this.b
      , c: this.c
      , d: this.d
      , e: this.e
      , f: this.f
      , matrix: new SVG.Matrix(this)
      }
    }
    // Clone matrix
  , clone: function() {
      return new SVG.Matrix(this)
    }
    // Morph one matrix into another
  , morph: function(matrix) {
      // store new destination
      this.destination = new SVG.Matrix(matrix)

      return this
    }
    // Get morphed matrix at a given position
  , at: function(pos) {
      // make sure a destination is defined
      if (!this.destination) return this

      // calculate morphed matrix at a given position
      var matrix = new SVG.Matrix({
        a: this.a + (this.destination.a - this.a) * pos
      , b: this.b + (this.destination.b - this.b) * pos
      , c: this.c + (this.destination.c - this.c) * pos
      , d: this.d + (this.destination.d - this.d) * pos
      , e: this.e + (this.destination.e - this.e) * pos
      , f: this.f + (this.destination.f - this.f) * pos
      })

      return matrix
    }
    // Multiplies by given matrix
  , multiply: function(matrix) {
      return new SVG.Matrix(this.native().multiply(parseMatrix(matrix).native()))
    }
    // Inverses matrix
  , inverse: function() {
      return new SVG.Matrix(this.native().inverse())
    }
    // Translate matrix
  , translate: function(x, y) {
      return new SVG.Matrix(this.native().translate(x || 0, y || 0))
    }
    // Scale matrix
  , scale: function(x, y, cx, cy) {
      // support uniformal scale
      if (arguments.length == 1) {
        y = x
      } else if (arguments.length == 3) {
        cy = cx
        cx = y
        y = x
      }

      return this.around(cx, cy, new SVG.Matrix(x, 0, 0, y, 0, 0))
    }
    // Rotate matrix
  , rotate: function(r, cx, cy) {
      // convert degrees to radians
      r = SVG.utils.radians(r)

      return this.around(cx, cy, new SVG.Matrix(Math.cos(r), Math.sin(r), -Math.sin(r), Math.cos(r), 0, 0))
    }
    // Flip matrix on x or y, at a given offset
  , flip: function(a, o) {
      return a == 'x' ?
          this.scale(-1, 1, o, 0) :
        a == 'y' ?
          this.scale(1, -1, 0, o) :
          this.scale(-1, -1, a, o != null ? o : a)
    }
    // Skew
  , skew: function(x, y, cx, cy) {
      // support uniformal skew
      if (arguments.length == 1) {
        y = x
      } else if (arguments.length == 3) {
        cy = cx
        cx = y
        y = x
      }

      // convert degrees to radians
      x = SVG.utils.radians(x)
      y = SVG.utils.radians(y)

      return this.around(cx, cy, new SVG.Matrix(1, Math.tan(y), Math.tan(x), 1, 0, 0))
    }
    // SkewX
  , skewX: function(x, cx, cy) {
      return this.skew(x, 0, cx, cy)
    }
    // SkewY
  , skewY: function(y, cx, cy) {
      return this.skew(0, y, cx, cy)
    }
    // Transform around a center point
  , around: function(cx, cy, matrix) {
      return this
        .multiply(new SVG.Matrix(1, 0, 0, 1, cx || 0, cy || 0))
        .multiply(matrix)
        .multiply(new SVG.Matrix(1, 0, 0, 1, -cx || 0, -cy || 0))
    }
    // Convert to native SVGMatrix
  , native: function() {
      // create new matrix
      var matrix = SVG.parser.native.createSVGMatrix()

      // update with current values
      for (var i = abcdef.length - 1; i >= 0; i--)
        matrix[abcdef[i]] = this[abcdef[i]]

      return matrix
    }
    // Convert matrix to string
  , toString: function() {
      // Construct the matrix directly, avoid values that are too small
      return 'matrix(' + float32String(this.a) + ',' + float32String(this.b)
        + ',' + float32String(this.c) + ',' + float32String(this.d)
        + ',' + float32String(this.e) + ',' + float32String(this.f)
        + ')'
    }
  }

  // Define parent
, parent: SVG.Element

  // Add parent method
, construct: {
    // Get current matrix
    ctm: function() {
      return new SVG.Matrix(this.node.getCTM())
    },
    // Get current screen matrix
    screenCTM: function() {
      /* https://bugzilla.mozilla.org/show_bug.cgi?id=1344537
         This is needed because FF does not return the transformation matrix
         for the inner coordinate system when getScreenCTM() is called on nested svgs.
         However all other Browsers do that */
      if(this instanceof SVG.Nested) {
        var rect = this.rect(1,1)
        var m = rect.node.getScreenCTM()
        rect.remove()
        return new SVG.Matrix(m)
      }
      return new SVG.Matrix(this.node.getScreenCTM())
    }

  }

})

SVG.Point = SVG.invent({
  // Initialize
  create: function(x,y) {
    var i, source, base = {x:0, y:0}

    // ensure source as object
    source = Array.isArray(x) ?
      {x:x[0], y:x[1]} :
    typeof x === 'object' ?
      {x:x.x, y:x.y} :
    x != null ?
      {x:x, y:(y != null ? y : x)} : base // If y has no value, then x is used has its value

    // merge source
    this.x = source.x
    this.y = source.y
  }

  // Add methods
, extend: {
    // Clone point
    clone: function() {
      return new SVG.Point(this)
    }
    // Morph one point into another
  , morph: function(x, y) {
      // store new destination
      this.destination = new SVG.Point(x, y)

      return this
    }
    // Get morphed point at a given position
  , at: function(pos) {
      // make sure a destination is defined
      if (!this.destination) return this

      // calculate morphed matrix at a given position
      var point = new SVG.Point({
        x: this.x + (this.destination.x - this.x) * pos
      , y: this.y + (this.destination.y - this.y) * pos
      })

      return point
    }
    // Convert to native SVGPoint
  , native: function() {
      // create new point
      var point = SVG.parser.native.createSVGPoint()

      // update with current values
      point.x = this.x
      point.y = this.y

      return point
    }
    // transform point with matrix
  , transform: function(matrix) {
      return new SVG.Point(this.native().matrixTransform(matrix.native()))
    }

  }

})

SVG.extend(SVG.Element, {

  // Get point
  point: function(x, y) {
    return new SVG.Point(x,y).transform(this.screenCTM().inverse());
  }

})

SVG.extend(SVG.Element, {
  // Set svg element attribute
  attr: function(a, v, n) {
    // act as full getter
    if (a == null) {
      // get an object of attributes
      a = {}
      v = this.node.attributes
      for (n = v.length - 1; n >= 0; n--)
        a[v[n].nodeName] = SVG.regex.isNumber.test(v[n].nodeValue) ? parseFloat(v[n].nodeValue) : v[n].nodeValue

      return a

    } else if (typeof a == 'object') {
      // apply every attribute individually if an object is passed
      for (v in a) this.attr(v, a[v])

    } else if (v === null) {
        // remove value
        this.node.removeAttribute(a)

    } else if (v == null) {
      // act as a getter if the first and only argument is not an object
      v = this.node.getAttribute(a)
      return v == null ?
        SVG.defaults.attrs[a] :
      SVG.regex.isNumber.test(v) ?
        parseFloat(v) : v

    } else {
      // BUG FIX: some browsers will render a stroke if a color is given even though stroke width is 0
      if (a == 'stroke-width')
        this.attr('stroke', parseFloat(v) > 0 ? this._stroke : null)
      else if (a == 'stroke')
        this._stroke = v

      // convert image fill and stroke to patterns
      if (a == 'fill' || a == 'stroke') {
        if (SVG.regex.isImage.test(v))
          v = this.doc().defs().image(v, 0, 0)

        if (v instanceof SVG.Image)
          v = this.doc().defs().pattern(0, 0, function() {
            this.add(v)
          })
      }

      // ensure correct numeric values (also accepts NaN and Infinity)
      if (typeof v === 'number')
        v = new SVG.Number(v)

      // ensure full hex color
      else if (SVG.Color.isColor(v))
        v = new SVG.Color(v)

      // parse array values
      else if (Array.isArray(v))
        v = new SVG.Array(v)

      // if the passed attribute is leading...
      if (a == 'leading') {
        // ... call the leading method instead
        if (this.leading)
          this.leading(v)
      } else {
        // set given attribute on node
        typeof n === 'string' ?
          this.node.setAttributeNS(n, a, v.toString()) :
          this.node.setAttribute(a, v.toString())
      }

      // rebuild if required
      if (this.rebuild && (a == 'font-size' || a == 'x'))
        this.rebuild(a, v)
    }

    return this
  }
})
SVG.extend(SVG.Element, {
  // Add transformations
  transform: function(o, relative) {
    // get target in case of the fx module, otherwise reference this
    var target = this
      , matrix, bbox

    // act as a getter
    if (typeof o !== 'object') {
      // get current matrix
      matrix = new SVG.Matrix(target).extract()

      return typeof o === 'string' ? matrix[o] : matrix
    }

    // get current matrix
    matrix = new SVG.Matrix(target)

    // ensure relative flag
    relative = !!relative || !!o.relative

    // act on matrix
    if (o.a != null) {
      matrix = relative ?
        // relative
        matrix.multiply(new SVG.Matrix(o)) :
        // absolute
        new SVG.Matrix(o)

    // act on rotation
    } else if (o.rotation != null) {
      // ensure centre point
      ensureCentre(o, target)

      // apply transformation
      matrix = relative ?
        // relative
        matrix.rotate(o.rotation, o.cx, o.cy) :
        // absolute
        matrix.rotate(o.rotation - matrix.extract().rotation, o.cx, o.cy)

    // act on scale
    } else if (o.scale != null || o.scaleX != null || o.scaleY != null) {
      // ensure centre point
      ensureCentre(o, target)

      // ensure scale values on both axes
      o.scaleX = o.scale != null ? o.scale : o.scaleX != null ? o.scaleX : 1
      o.scaleY = o.scale != null ? o.scale : o.scaleY != null ? o.scaleY : 1

      if (!relative) {
        // absolute; multiply inversed values
        var e = matrix.extract()
        o.scaleX = o.scaleX * 1 / e.scaleX
        o.scaleY = o.scaleY * 1 / e.scaleY
      }

      matrix = matrix.scale(o.scaleX, o.scaleY, o.cx, o.cy)

    // act on skew
    } else if (o.skew != null || o.skewX != null || o.skewY != null) {
      // ensure centre point
      ensureCentre(o, target)

      // ensure skew values on both axes
      o.skewX = o.skew != null ? o.skew : o.skewX != null ? o.skewX : 0
      o.skewY = o.skew != null ? o.skew : o.skewY != null ? o.skewY : 0

      if (!relative) {
        // absolute; reset skew values
        var e = matrix.extract()
        matrix = matrix.multiply(new SVG.Matrix().skew(e.skewX, e.skewY, o.cx, o.cy).inverse())
      }

      matrix = matrix.skew(o.skewX, o.skewY, o.cx, o.cy)

    // act on flip
    } else if (o.flip) {
      if(o.flip == 'x' || o.flip == 'y') {
        o.offset = o.offset == null ? target.bbox()['c' + o.flip] : o.offset
      } else {
        if(o.offset == null) {
          bbox = target.bbox()
          o.flip = bbox.cx
          o.offset = bbox.cy
        } else {
          o.flip = o.offset
        }
      }

      matrix = new SVG.Matrix().flip(o.flip, o.offset)

    // act on translate
    } else if (o.x != null || o.y != null) {
      if (relative) {
        // relative
        matrix = matrix.translate(o.x, o.y)
      } else {
        // absolute
        if (o.x != null) matrix.e = o.x
        if (o.y != null) matrix.f = o.y
      }
    }

    return this.attr('transform', matrix)
  }
})

SVG.extend(SVG.FX, {
  transform: function(o, relative) {
    // get target in case of the fx module, otherwise reference this
    var target = this.target()
      , matrix, bbox

    // act as a getter
    if (typeof o !== 'object') {
      // get current matrix
      matrix = new SVG.Matrix(target).extract()

      return typeof o === 'string' ? matrix[o] : matrix
    }

    // ensure relative flag
    relative = !!relative || !!o.relative

    // act on matrix
    if (o.a != null) {
      matrix = new SVG.Matrix(o)

    // act on rotation
    } else if (o.rotation != null) {
      // ensure centre point
      ensureCentre(o, target)

      // apply transformation
      matrix = new SVG.Rotate(o.rotation, o.cx, o.cy)

    // act on scale
    } else if (o.scale != null || o.scaleX != null || o.scaleY != null) {
      // ensure centre point
      ensureCentre(o, target)

      // ensure scale values on both axes
      o.scaleX = o.scale != null ? o.scale : o.scaleX != null ? o.scaleX : 1
      o.scaleY = o.scale != null ? o.scale : o.scaleY != null ? o.scaleY : 1

      matrix = new SVG.Scale(o.scaleX, o.scaleY, o.cx, o.cy)

    // act on skew
    } else if (o.skewX != null || o.skewY != null) {
      // ensure centre point
      ensureCentre(o, target)

      // ensure skew values on both axes
      o.skewX = o.skewX != null ? o.skewX : 0
      o.skewY = o.skewY != null ? o.skewY : 0

      matrix = new SVG.Skew(o.skewX, o.skewY, o.cx, o.cy)

    // act on flip
    } else if (o.flip) {
      if(o.flip == 'x' || o.flip == 'y') {
        o.offset = o.offset == null ? target.bbox()['c' + o.flip] : o.offset
      } else {
        if(o.offset == null) {
          bbox = target.bbox()
          o.flip = bbox.cx
          o.offset = bbox.cy
        } else {
          o.flip = o.offset
        }
      }

      matrix = new SVG.Matrix().flip(o.flip, o.offset)

    // act on translate
    } else if (o.x != null || o.y != null) {
      matrix = new SVG.Translate(o.x, o.y)
    }

    if(!matrix) return this

    matrix.relative = relative

    this.last().transforms.push(matrix)

    return this._callStart()
  }
})

SVG.extend(SVG.Element, {
  // Reset all transformations
  untransform: function() {
    return this.attr('transform', null)
  },
  // merge the whole transformation chain into one matrix and returns it
  matrixify: function() {

    var matrix = (this.attr('transform') || '')
      // split transformations
      .split(SVG.regex.transforms).slice(0,-1).map(function(str){
        // generate key => value pairs
        var kv = str.trim().split('(')
        return [kv[0], kv[1].split(SVG.regex.delimiter).map(function(str){ return parseFloat(str) })]
      })
      // merge every transformation into one matrix
      .reduce(function(matrix, transform){

        if(transform[0] == 'matrix') return matrix.multiply(arrayToMatrix(transform[1]))
        return matrix[transform[0]].apply(matrix, transform[1])

      }, new SVG.Matrix())

    return matrix
  },
  // add an element to another parent without changing the visual representation on the screen
  toParent: function(parent) {
    if(this == parent) return this
    var ctm = this.screenCTM()
    var pCtm = parent.screenCTM().inverse()

    this.addTo(parent).untransform().transform(pCtm.multiply(ctm))

    return this
  },
  // same as above with parent equals root-svg
  toDoc: function() {
    return this.toParent(this.doc())
  }

})

SVG.Transformation = SVG.invent({

  create: function(source, inversed){

    if(arguments.length > 1 && typeof inversed != 'boolean'){
      return this.constructor.call(this, [].slice.call(arguments))
    }

    if(Array.isArray(source)){
      for(var i = 0, len = this.arguments.length; i < len; ++i){
        this[this.arguments[i]] = source[i]
      }
    } else if(typeof source == 'object'){
      for(var i = 0, len = this.arguments.length; i < len; ++i){
        this[this.arguments[i]] = source[this.arguments[i]]
      }
    }

    this.inversed = false

    if(inversed === true){
      this.inversed = true
    }

  }

, extend: {

    arguments: []
  , method: ''

  , at: function(pos){

      var params = []

      for(var i = 0, len = this.arguments.length; i < len; ++i){
        params.push(this[this.arguments[i]])
      }

      var m = this._undo || new SVG.Matrix()

      m = new SVG.Matrix().morph(SVG.Matrix.prototype[this.method].apply(m, params)).at(pos)

      return this.inversed ? m.inverse() : m

    }

  , undo: function(o){
      for(var i = 0, len = this.arguments.length; i < len; ++i){
        o[this.arguments[i]] = typeof this[this.arguments[i]] == 'undefined' ? 0 : o[this.arguments[i]]
      }

      // The method SVG.Matrix.extract which was used before calling this
      // method to obtain a value for the parameter o doesn't return a cx and
      // a cy so we use the ones that were provided to this object at its creation
      o.cx = this.cx
      o.cy = this.cy

      this._undo = new SVG[capitalize(this.method)](o, true).at(1)

      return this
    }

  }

})

SVG.Translate = SVG.invent({

  parent: SVG.Matrix
, inherit: SVG.Transformation

, create: function(source, inversed){
    this.constructor.apply(this, [].slice.call(arguments))
  }

, extend: {
    arguments: ['transformedX', 'transformedY']
  , method: 'translate'
  }

})

SVG.Rotate = SVG.invent({

  parent: SVG.Matrix
, inherit: SVG.Transformation

, create: function(source, inversed){
    this.constructor.apply(this, [].slice.call(arguments))
  }

, extend: {
    arguments: ['rotation', 'cx', 'cy']
  , method: 'rotate'
  , at: function(pos){
      var m = new SVG.Matrix().rotate(new SVG.Number().morph(this.rotation - (this._undo ? this._undo.rotation : 0)).at(pos), this.cx, this.cy)
      return this.inversed ? m.inverse() : m
    }
  , undo: function(o){
      this._undo = o
      return this
    }
  }

})

SVG.Scale = SVG.invent({

  parent: SVG.Matrix
, inherit: SVG.Transformation

, create: function(source, inversed){
    this.constructor.apply(this, [].slice.call(arguments))
  }

, extend: {
    arguments: ['scaleX', 'scaleY', 'cx', 'cy']
  , method: 'scale'
  }

})

SVG.Skew = SVG.invent({

  parent: SVG.Matrix
, inherit: SVG.Transformation

, create: function(source, inversed){
    this.constructor.apply(this, [].slice.call(arguments))
  }

, extend: {
    arguments: ['skewX', 'skewY', 'cx', 'cy']
  , method: 'skew'
  }

})

SVG.extend(SVG.Element, {
  // Dynamic style generator
  style: function(s, v) {
    if (arguments.length == 0) {
      // get full style
      return this.node.style.cssText || ''

    } else if (arguments.length < 2) {
      // apply every style individually if an object is passed
      if (typeof s == 'object') {
        for (v in s) this.style(v, s[v])

      } else if (SVG.regex.isCss.test(s)) {
        // parse css string
        s = s.split(/\s*;\s*/)
          // filter out suffix ; and stuff like ;;
          .filter(function(e) { return !!e })
          .map(function(e){ return e.split(/\s*:\s*/) })

        // apply every definition individually
        while (v = s.pop()) {
          this.style(v[0], v[1])
        }
      } else {
        // act as a getter if the first and only argument is not an object
        return this.node.style[camelCase(s)]
      }

    } else {
      this.node.style[camelCase(s)] = v === null || SVG.regex.isBlank.test(v) ? '' : v
    }

    return this
  }
})
SVG.Parent = SVG.invent({
  // Initialize node
  create: function(element) {
    this.constructor.call(this, element)
  }

  // Inherit from
, inherit: SVG.Element

  // Add class methods
, extend: {
    // Returns all child elements
    children: function() {
      return SVG.utils.map(SVG.utils.filterSVGElements(this.node.childNodes), function(node) {
        return SVG.adopt(node)
      })
    }
    // Add given element at a position
  , add: function(element, i) {
      if (i == null)
        this.node.appendChild(element.node)
      else if (element.node != this.node.childNodes[i])
        this.node.insertBefore(element.node, this.node.childNodes[i])

      return this
    }
    // Basically does the same as `add()` but returns the added element instead
  , put: function(element, i) {
      this.add(element, i)
      return element
    }
    // Checks if the given element is a child
  , has: function(element) {
      return this.index(element) >= 0
    }
    // Gets index of given element
  , index: function(element) {
      return [].slice.call(this.node.childNodes).indexOf(element.node)
    }
    // Get a element at the given index
  , get: function(i) {
      return SVG.adopt(this.node.childNodes[i])
    }
    // Get first child
  , first: function() {
      return this.get(0)
    }
    // Get the last child
  , last: function() {
      return this.get(this.node.childNodes.length - 1)
    }
    // Iterates over all children and invokes a given block
  , each: function(block, deep) {
      var i, il
        , children = this.children()

      for (i = 0, il = children.length; i < il; i++) {
        if (children[i] instanceof SVG.Element)
          block.apply(children[i], [i, children])

        if (deep && (children[i] instanceof SVG.Container))
          children[i].each(block, deep)
      }

      return this
    }
    // Remove a given child
  , removeElement: function(element) {
      this.node.removeChild(element.node)

      return this
    }
    // Remove all elements in this container
  , clear: function() {
      // remove children
      while(this.node.hasChildNodes())
        this.node.removeChild(this.node.lastChild)

      // remove defs reference
      delete this._defs

      return this
    }
  , // Get defs
    defs: function() {
      return this.doc().defs()
    }
  }

})

SVG.extend(SVG.Parent, {

  ungroup: function(parent, depth) {
    if(depth === 0 || this instanceof SVG.Defs || this.node == SVG.parser.draw) return this

    parent = parent || (this instanceof SVG.Doc ? this : this.parent(SVG.Parent))
    depth = depth || Infinity

    this.each(function(){
      if(this instanceof SVG.Defs) return this
      if(this instanceof SVG.Parent) return this.ungroup(parent, depth-1)
      return this.toParent(parent)
    })

    this.node.firstChild || this.remove()

    return this
  },

  flatten: function(parent, depth) {
    return this.ungroup(parent, depth)
  }

})
SVG.Container = SVG.invent({
  // Initialize node
  create: function(element) {
    this.constructor.call(this, element)
  }

  // Inherit from
, inherit: SVG.Parent

})

SVG.ViewBox = SVG.invent({

  create: function(source) {
    var i, base = [0, 0, 0, 0]

    var x, y, width, height, box, view, we, he
      , wm   = 1 // width multiplier
      , hm   = 1 // height multiplier
      , reg  = /[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/gi

    if(source instanceof SVG.Element){

      we = source
      he = source
      view = (source.attr('viewBox') || '').match(reg)
      box = source.bbox

      // get dimensions of current node
      width  = new SVG.Number(source.width())
      height = new SVG.Number(source.height())

      // find nearest non-percentual dimensions
      while (width.unit == '%') {
        wm *= width.value
        width = new SVG.Number(we instanceof SVG.Doc ? we.parent().offsetWidth : we.parent().width())
        we = we.parent()
      }
      while (height.unit == '%') {
        hm *= height.value
        height = new SVG.Number(he instanceof SVG.Doc ? he.parent().offsetHeight : he.parent().height())
        he = he.parent()
      }

      // ensure defaults
      this.x      = 0
      this.y      = 0
      this.width  = width  * wm
      this.height = height * hm
      this.zoom   = 1

      if (view) {
        // get width and height from viewbox
        x      = parseFloat(view[0])
        y      = parseFloat(view[1])
        width  = parseFloat(view[2])
        height = parseFloat(view[3])

        // calculate zoom accoring to viewbox
        this.zoom = ((this.width / this.height) > (width / height)) ?
          this.height / height :
          this.width  / width

        // calculate real pixel dimensions on parent SVG.Doc element
        this.x      = x
        this.y      = y
        this.width  = width
        this.height = height

      }

    }else{

      // ensure source as object
      source = typeof source === 'string' ?
        source.match(reg).map(function(el){ return parseFloat(el) }) :
      Array.isArray(source) ?
        source :
      typeof source == 'object' ?
        [source.x, source.y, source.width, source.height] :
      arguments.length == 4 ?
        [].slice.call(arguments) :
        base

      this.x = source[0]
      this.y = source[1]
      this.width = source[2]
      this.height = source[3]
    }


  }

, extend: {

    toString: function() {
      return this.x + ' ' + this.y + ' ' + this.width + ' ' + this.height
    }
  , morph: function(x, y, width, height){
      this.destination = new SVG.ViewBox(x, y, width, height)
      return this
    }

  , at: function(pos) {

      if(!this.destination) return this

      return new SVG.ViewBox([
          this.x + (this.destination.x - this.x) * pos
        , this.y + (this.destination.y - this.y) * pos
        , this.width + (this.destination.width - this.width) * pos
        , this.height + (this.destination.height - this.height) * pos
      ])

    }

  }

  // Define parent
, parent: SVG.Container

  // Add parent method
, construct: {

    // get/set viewbox
    viewbox: function(x, y, width, height) {
      if (arguments.length == 0)
        // act as a getter if there are no arguments
        return new SVG.ViewBox(this)

      // otherwise act as a setter
      return this.attr('viewBox', new SVG.ViewBox(x, y, width, height))
    }

  }

})
// Add events to elements

;[ 'click',
  'dblclick',
  'mousedown',
  'mouseup',
  'mouseover',
  'mouseout',
  'mousemove',
  'mouseenter',
  'mouseleave',
  'touchstart',
  'touchmove',
  'touchleave',
  'touchend',
  'touchcancel' ].forEach(function (event) {
    // add event to SVG.Element
    SVG.Element.prototype[event] = function (f) {
      // bind event to element rather than element node
      if (f == null) {
        SVG.off(this, event)
      } else {
        SVG.on(this, event, f)
      }
      return this
    }
  })

SVG.listenerId = 0

// Add event binder in the SVG namespace
SVG.on = function (node, events, listener, binding, options) {
  var l = listener.bind(binding || node)
  var n = node instanceof SVG.Element ? node.node : node

  // ensure instance object for nodes which are not adopted
  n.instance = n.instance || {_events: {}}

  var bag = n.instance._events

  // add id to listener
  if (!listener._svgjsListenerId) { listener._svgjsListenerId = ++SVG.listenerId }

  events.split(SVG.regex.delimiter).forEach(function (event) {
    var ev = event.split('.')[0]
    var ns = event.split('.')[1] || '*'

    // ensure valid object
    bag[ev] = bag[ev] || {}
    bag[ev][ns] = bag[ev][ns] || {}

    // reference listener
    bag[ev][ns][listener._svgjsListenerId] = l

    // add listener
    n.addEventListener(ev, l, options || false)
  })
}

// Add event unbinder in the SVG namespace
SVG.off = function (node, events, listener, options) {
  var n = node instanceof SVG.Element ? node.node : node
  if (!n.instance) return

  // listener can be a function or a number
  if (typeof listener === 'function') {
    listener = listener._svgjsListenerId
    if (!listener) return
  }

  var bag = n.instance._events

  ;(events || '').split(SVG.regex.delimiter).forEach(function (event) {
    var ev = event && event.split('.')[0]
    var ns = event && event.split('.')[1]
    var namespace, l

    if (listener) {
      // remove listener reference
      if (bag[ev] && bag[ev][ns || '*']) {
        // removeListener
        n.removeEventListener(ev, bag[ev][ns || '*'][listener], options || false)

        delete bag[ev][ns || '*'][listener]
      }
    } else if (ev && ns) {
      // remove all listeners for a namespaced event
      if (bag[ev] && bag[ev][ns]) {
        for (l in bag[ev][ns]) { SVG.off(n, [ev, ns].join('.'), l) }

        delete bag[ev][ns]
      }
    } else if (ns) {
      // remove all listeners for a specific namespace
      for (event in bag) {
        for (namespace in bag[event]) {
          if (ns === namespace) { SVG.off(n, [event, ns].join('.')) }
        }
      }
    } else if (ev) {
      // remove all listeners for the event
      if (bag[ev]) {
        for (namespace in bag[ev]) { SVG.off(n, [ev, namespace].join('.')) }

        delete bag[ev]
      }
    } else {
      // remove all listeners on a given node
      for (event in bag) { SVG.off(n, event) }

      n.instance._events = {}
    }
  })
}

SVG.extend(SVG.Element, {
  // Bind given event to listener
  on: function (event, listener, binding, options) {
    SVG.on(this, event, listener, binding, options)
    return this
  },
  // Unbind event from listener
  off: function (event, listener) {
    SVG.off(this.node, event, listener)
    return this
  },
  fire: function (event, data) {
    // Dispatch event
    if (event instanceof window.Event) {
      this.node.dispatchEvent(event)
    } else {
      this.node.dispatchEvent(event = new SVG.CustomEvent(event, {detail: data, cancelable: true}))
    }
    this._event = event
    return this
  },
  event: function() {
    return this._event
  }
})


SVG.Defs = SVG.invent({
  // Initialize node
  create: 'defs'

  // Inherit from
, inherit: SVG.Container

})
SVG.G = SVG.invent({
  // Initialize node
  create: 'g'

  // Inherit from
, inherit: SVG.Container

  // Add class methods
, extend: {
    // Move over x-axis
    x: function(x) {
      return x == null ? this.transform('x') : this.transform({ x: x - this.x() }, true)
    }
    // Move over y-axis
  , y: function(y) {
      return y == null ? this.transform('y') : this.transform({ y: y - this.y() }, true)
    }
    // Move by center over x-axis
  , cx: function(x) {
      return x == null ? this.gbox().cx : this.x(x - this.gbox().width / 2)
    }
    // Move by center over y-axis
  , cy: function(y) {
      return y == null ? this.gbox().cy : this.y(y - this.gbox().height / 2)
    }
  , gbox: function() {

      var bbox  = this.bbox()
        , trans = this.transform()

      bbox.x  += trans.x
      bbox.x2 += trans.x
      bbox.cx += trans.x

      bbox.y  += trans.y
      bbox.y2 += trans.y
      bbox.cy += trans.y

      return bbox
    }
  }

  // Add parent method
, construct: {
    // Create a group element
    group: function() {
      return this.put(new SVG.G)
    }
  }
})

SVG.Doc = SVG.invent({
  // Initialize node
  create: function(element) {
    if (element) {
      // ensure the presence of a dom element
      element = typeof element == 'string' ?
        document.getElementById(element) :
        element

      // If the target is an svg element, use that element as the main wrapper.
      // This allows svg.js to work with svg documents as well.
      if (element.nodeName == 'svg') {
        this.constructor.call(this, element)
      } else {
        this.constructor.call(this, SVG.create('svg'))
        element.appendChild(this.node)
        this.size('100%', '100%')
      }

      // set svg element attributes and ensure defs node
      this.namespace().defs()
    }
  }

  // Inherit from
, inherit: SVG.Container

  // Add class methods
, extend: {
    // Add namespaces
    namespace: function() {
      return this
        .attr({ xmlns: SVG.ns, version: '1.1' })
        .attr('xmlns:xlink', SVG.xlink, SVG.xmlns)
        .attr('xmlns:svgjs', SVG.svgjs, SVG.xmlns)
    }
    // Creates and returns defs element
  , defs: function() {
      if (!this._defs) {
        var defs

        // Find or create a defs element in this instance
        if (defs = this.node.getElementsByTagName('defs')[0])
          this._defs = SVG.adopt(defs)
        else
          this._defs = new SVG.Defs

        // Make sure the defs node is at the end of the stack
        this.node.appendChild(this._defs.node)
      }

      return this._defs
    }
    // custom parent method
  , parent: function() {
      if(!this.node.parentNode || this.node.parentNode.nodeName == '#document' || this.node.parentNode.nodeName == '#document-fragment') return null
      return this.node.parentNode
    }
    // Fix for possible sub-pixel offset. See:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=608812
  , spof: function() {
      var pos = this.node.getScreenCTM()

      if (pos)
        this
          .style('left', (-pos.e % 1) + 'px')
          .style('top',  (-pos.f % 1) + 'px')

      return this
    }

      // Removes the doc from the DOM
  , remove: function() {
      if(this.parent()) {
        this.parent().removeChild(this.node)
      }

      return this
    }
  , clear: function() {
      // remove children
      while(this.node.hasChildNodes())
        this.node.removeChild(this.node.lastChild)

      // remove defs reference
      delete this._defs

      // add back parser
      if(!SVG.parser.draw.parentNode)
        this.node.appendChild(SVG.parser.draw)

      return this
    }
  , clone: function (parent) {
      // write dom data to the dom so the clone can pickup the data
      this.writeDataToDom()

      // get reference to node
      var node = this.node

      // clone element and assign new id
      var clone = assignNewId(node.cloneNode(true))

      // insert the clone in the given parent or after myself
      if(parent) {
        (parent.node || parent).appendChild(clone.node)
      } else {
        node.parentNode.insertBefore(clone.node, node.nextSibling)
      }

      return clone
    }
  }

})

// ### This module adds backward / forward functionality to elements.

//
SVG.extend(SVG.Element, {
  // Get all siblings, including myself
  siblings: function() {
    return this.parent().children()
  }
  // Get the curent position siblings
, position: function() {
    return this.parent().index(this)
  }
  // Get the next element (will return null if there is none)
, next: function() {
    return this.siblings()[this.position() + 1]
  }
  // Get the next element (will return null if there is none)
, previous: function() {
    return this.siblings()[this.position() - 1]
  }
  // Send given element one step forward
, forward: function() {
    var i = this.position() + 1
      , p = this.parent()

    // move node one step forward
    p.removeElement(this).add(this, i)

    // make sure defs node is always at the top
    if (p instanceof SVG.Doc)
      p.node.appendChild(p.defs().node)

    return this
  }
  // Send given element one step backward
, backward: function() {
    var i = this.position()

    if (i > 0)
      this.parent().removeElement(this).add(this, i - 1)

    return this
  }
  // Send given element all the way to the front
, front: function() {
    var p = this.parent()

    // Move node forward
    p.node.appendChild(this.node)

    // Make sure defs node is always at the top
    if (p instanceof SVG.Doc)
      p.node.appendChild(p.defs().node)

    return this
  }
  // Send given element all the way to the back
, back: function() {
    if (this.position() > 0)
      this.parent().removeElement(this).add(this, 0)

    return this
  }
  // Inserts a given element before the targeted element
, before: function(element) {
    element.remove()

    var i = this.position()

    this.parent().add(element, i)

    return this
  }
  // Insters a given element after the targeted element
, after: function(element) {
    element.remove()

    var i = this.position()

    this.parent().add(element, i + 1)

    return this
  }

})
SVG.Mask = SVG.invent({
  // Initialize node
  create: function() {
    this.constructor.call(this, SVG.create('mask'))

    // keep references to masked elements
    this.targets = []
  }

  // Inherit from
, inherit: SVG.Container

  // Add class methods
, extend: {
    // Unmask all masked elements and remove itself
    remove: function() {
      // unmask all targets
      for (var i = this.targets.length - 1; i >= 0; i--)
        if (this.targets[i])
          this.targets[i].unmask()
      this.targets = []

      // remove mask from parent
      SVG.Element.prototype.remove.call(this)

      return this
    }
  }

  // Add parent method
, construct: {
    // Create masking element
    mask: function() {
      return this.defs().put(new SVG.Mask)
    }
  }
})


SVG.extend(SVG.Element, {
  // Distribute mask to svg element
  maskWith: function(element) {
    // use given mask or create a new one
    this.masker = element instanceof SVG.Mask ? element : this.parent().mask().add(element)

    // store reverence on self in mask
    this.masker.targets.push(this)

    // apply mask
    return this.attr('mask', 'url("#' + this.masker.attr('id') + '")')
  }
  // Unmask element
, unmask: function() {
    delete this.masker
    return this.attr('mask', null)
  }

})

SVG.ClipPath = SVG.invent({
  // Initialize node
  create: function() {
    this.constructor.call(this, SVG.create('clipPath'))

    // keep references to clipped elements
    this.targets = []
  }

  // Inherit from
, inherit: SVG.Container

  // Add class methods
, extend: {
    // Unclip all clipped elements and remove itself
    remove: function() {
      // unclip all targets
      for (var i = this.targets.length - 1; i >= 0; i--)
        if (this.targets[i])
          this.targets[i].unclip()
      this.targets = []

      // remove clipPath from parent
      this.parent().removeElement(this)

      return this
    }
  }

  // Add parent method
, construct: {
    // Create clipping element
    clip: function() {
      return this.defs().put(new SVG.ClipPath)
    }
  }
})

//
SVG.extend(SVG.Element, {
  // Distribute clipPath to svg element
  clipWith: function(element) {
    // use given clip or create a new one
    this.clipper = element instanceof SVG.ClipPath ? element : this.parent().clip().add(element)

    // store reverence on self in mask
    this.clipper.targets.push(this)

    // apply mask
    return this.attr('clip-path', 'url("#' + this.clipper.attr('id') + '")')
  }
  // Unclip element
, unclip: function() {
    delete this.clipper
    return this.attr('clip-path', null)
  }

})
SVG.Gradient = SVG.invent({
  // Initialize node
  create: function(type) {
    this.constructor.call(this, SVG.create(type + 'Gradient'))

    // store type
    this.type = type
  }

  // Inherit from
, inherit: SVG.Container

  // Add class methods
, extend: {
    // Add a color stop
    at: function(offset, color, opacity) {
      return this.put(new SVG.Stop).update(offset, color, opacity)
    }
    // Update gradient
  , update: function(block) {
      // remove all stops
      this.clear()

      // invoke passed block
      if (typeof block == 'function')
        block.call(this, this)

      return this
    }
    // Return the fill id
  , fill: function() {
      return 'url(#' + this.id() + ')'
    }
    // Alias string convertion to fill
  , toString: function() {
      return this.fill()
    }
    // custom attr to handle transform
  , attr: function(a, b, c) {
      if(a == 'transform') a = 'gradientTransform'
      return SVG.Container.prototype.attr.call(this, a, b, c)
    }
  }

  // Add parent method
, construct: {
    // Create gradient element in defs
    gradient: function(type, block) {
      return this.defs().gradient(type, block)
    }
  }
})

// Add animatable methods to both gradient and fx module
SVG.extend(SVG.Gradient, SVG.FX, {
  // From position
  from: function(x, y) {
    return (this._target || this).type == 'radial' ?
      this.attr({ fx: new SVG.Number(x), fy: new SVG.Number(y) }) :
      this.attr({ x1: new SVG.Number(x), y1: new SVG.Number(y) })
  }
  // To position
, to: function(x, y) {
    return (this._target || this).type == 'radial' ?
      this.attr({ cx: new SVG.Number(x), cy: new SVG.Number(y) }) :
      this.attr({ x2: new SVG.Number(x), y2: new SVG.Number(y) })
  }
})

// Base gradient generation
SVG.extend(SVG.Defs, {
  // define gradient
  gradient: function(type, block) {
    return this.put(new SVG.Gradient(type)).update(block)
  }

})

SVG.Stop = SVG.invent({
  // Initialize node
  create: 'stop'

  // Inherit from
, inherit: SVG.Element

  // Add class methods
, extend: {
    // add color stops
    update: function(o) {
      if (typeof o == 'number' || o instanceof SVG.Number) {
        o = {
          offset:  arguments[0]
        , color:   arguments[1]
        , opacity: arguments[2]
        }
      }

      // set attributes
      if (o.opacity != null) this.attr('stop-opacity', o.opacity)
      if (o.color   != null) this.attr('stop-color', o.color)
      if (o.offset  != null) this.attr('offset', new SVG.Number(o.offset))

      return this
    }
  }

})

SVG.Pattern = SVG.invent({
  // Initialize node
  create: 'pattern'

  // Inherit from
, inherit: SVG.Container

  // Add class methods
, extend: {
    // Return the fill id
    fill: function() {
      return 'url(#' + this.id() + ')'
    }
    // Update pattern by rebuilding
  , update: function(block) {
      // remove content
      this.clear()

      // invoke passed block
      if (typeof block == 'function')
        block.call(this, this)

      return this
    }
    // Alias string convertion to fill
  , toString: function() {
      return this.fill()
    }
    // custom attr to handle transform
  , attr: function(a, b, c) {
      if(a == 'transform') a = 'patternTransform'
      return SVG.Container.prototype.attr.call(this, a, b, c)
    }

  }

  // Add parent method
, construct: {
    // Create pattern element in defs
    pattern: function(width, height, block) {
      return this.defs().pattern(width, height, block)
    }
  }
})

SVG.extend(SVG.Defs, {
  // Define gradient
  pattern: function(width, height, block) {
    return this.put(new SVG.Pattern).update(block).attr({
      x:            0
    , y:            0
    , width:        width
    , height:       height
    , patternUnits: 'userSpaceOnUse'
    })
  }

})
SVG.Shape = SVG.invent({
  // Initialize node
  create: function(element) {
    this.constructor.call(this, element)
  }

  // Inherit from
, inherit: SVG.Element

})

SVG.Bare = SVG.invent({
  // Initialize
  create: function(element, inherit) {
    // construct element
    this.constructor.call(this, SVG.create(element))

    // inherit custom methods
    if (inherit)
      for (var method in inherit.prototype)
        if (typeof inherit.prototype[method] === 'function')
          this[method] = inherit.prototype[method]
  }

  // Inherit from
, inherit: SVG.Element

  // Add methods
, extend: {
    // Insert some plain text
    words: function(text) {
      // remove contents
      while (this.node.hasChildNodes())
        this.node.removeChild(this.node.lastChild)

      // create text node
      this.node.appendChild(document.createTextNode(text))

      return this
    }
  }
})


SVG.extend(SVG.Parent, {
  // Create an element that is not described by SVG.js
  element: function(element, inherit) {
    return this.put(new SVG.Bare(element, inherit))
  }
})

SVG.Symbol = SVG.invent({
  // Initialize node
  create: 'symbol'

  // Inherit from
, inherit: SVG.Container

, construct: {
    // create symbol
    symbol: function() {
      return this.put(new SVG.Symbol)
    }
  }
})

SVG.Use = SVG.invent({
  // Initialize node
  create: 'use'

  // Inherit from
, inherit: SVG.Shape

  // Add class methods
, extend: {
    // Use element as a reference
    element: function(element, file) {
      // Set lined element
      return this.attr('href', (file || '') + '#' + element, SVG.xlink)
    }
  }

  // Add parent method
, construct: {
    // Create a use element
    use: function(element, file) {
      return this.put(new SVG.Use).element(element, file)
    }
  }
})
SVG.Rect = SVG.invent({
  // Initialize node
  create: 'rect'

  // Inherit from
, inherit: SVG.Shape

  // Add parent method
, construct: {
    // Create a rect element
    rect: function(width, height) {
      return this.put(new SVG.Rect()).size(width, height)
    }
  }
})
SVG.Circle = SVG.invent({
  // Initialize node
  create: 'circle'

  // Inherit from
, inherit: SVG.Shape

  // Add parent method
, construct: {
    // Create circle element, based on ellipse
    circle: function(size) {
      return this.put(new SVG.Circle).rx(new SVG.Number(size).divide(2)).move(0, 0)
    }
  }
})

SVG.extend(SVG.Circle, SVG.FX, {
  // Radius x value
  rx: function(rx) {
    return this.attr('r', rx)
  }
  // Alias radius x value
, ry: function(ry) {
    return this.rx(ry)
  }
})

SVG.Ellipse = SVG.invent({
  // Initialize node
  create: 'ellipse'

  // Inherit from
, inherit: SVG.Shape

  // Add parent method
, construct: {
    // Create an ellipse
    ellipse: function(width, height) {
      return this.put(new SVG.Ellipse).size(width, height).move(0, 0)
    }
  }
})

SVG.extend(SVG.Ellipse, SVG.Rect, SVG.FX, {
  // Radius x value
  rx: function(rx) {
    return this.attr('rx', rx)
  }
  // Radius y value
, ry: function(ry) {
    return this.attr('ry', ry)
  }
})

// Add common method
SVG.extend(SVG.Circle, SVG.Ellipse, {
    // Move over x-axis
    x: function(x) {
      return x == null ? this.cx() - this.rx() : this.cx(x + this.rx())
    }
    // Move over y-axis
  , y: function(y) {
      return y == null ? this.cy() - this.ry() : this.cy(y + this.ry())
    }
    // Move by center over x-axis
  , cx: function(x) {
      return x == null ? this.attr('cx') : this.attr('cx', x)
    }
    // Move by center over y-axis
  , cy: function(y) {
      return y == null ? this.attr('cy') : this.attr('cy', y)
    }
    // Set width of element
  , width: function(width) {
      return width == null ? this.rx() * 2 : this.rx(new SVG.Number(width).divide(2))
    }
    // Set height of element
  , height: function(height) {
      return height == null ? this.ry() * 2 : this.ry(new SVG.Number(height).divide(2))
    }
    // Custom size function
  , size: function(width, height) {
      var p = proportionalSize(this, width, height)

      return this
        .rx(new SVG.Number(p.width).divide(2))
        .ry(new SVG.Number(p.height).divide(2))
    }
})
SVG.Line = SVG.invent({
  // Initialize node
  create: 'line'

  // Inherit from
, inherit: SVG.Shape

  // Add class methods
, extend: {
    // Get array
    array: function() {
      return new SVG.PointArray([
        [ this.attr('x1'), this.attr('y1') ]
      , [ this.attr('x2'), this.attr('y2') ]
      ])
    }
    // Overwrite native plot() method
  , plot: function(x1, y1, x2, y2) {
      if (x1 == null)
        return this.array()
      else if (typeof y1 !== 'undefined')
        x1 = { x1: x1, y1: y1, x2: x2, y2: y2 }
      else
        x1 = new SVG.PointArray(x1).toLine()

      return this.attr(x1)
    }
    // Move by left top corner
  , move: function(x, y) {
      return this.attr(this.array().move(x, y).toLine())
    }
    // Set element size to given width and height
  , size: function(width, height) {
      var p = proportionalSize(this, width, height)

      return this.attr(this.array().size(p.width, p.height).toLine())
    }
  }

  // Add parent method
, construct: {
    // Create a line element
    line: function(x1, y1, x2, y2) {
      // make sure plot is called as a setter
      // x1 is not necessarily a number, it can also be an array, a string and a SVG.PointArray
      return SVG.Line.prototype.plot.apply(
        this.put(new SVG.Line)
      , x1 != null ? [x1, y1, x2, y2] : [0, 0, 0, 0]
      )
    }
  }
})

SVG.Polyline = SVG.invent({
  // Initialize node
  create: 'polyline'

  // Inherit from
, inherit: SVG.Shape

  // Add parent method
, construct: {
    // Create a wrapped polyline element
    polyline: function(p) {
      // make sure plot is called as a setter
      return this.put(new SVG.Polyline).plot(p || new SVG.PointArray)
    }
  }
})

SVG.Polygon = SVG.invent({
  // Initialize node
  create: 'polygon'

  // Inherit from
, inherit: SVG.Shape

  // Add parent method
, construct: {
    // Create a wrapped polygon element
    polygon: function(p) {
      // make sure plot is called as a setter
      return this.put(new SVG.Polygon).plot(p || new SVG.PointArray)
    }
  }
})

// Add polygon-specific functions
SVG.extend(SVG.Polyline, SVG.Polygon, {
  // Get array
  array: function() {
    return this._array || (this._array = new SVG.PointArray(this.attr('points')))
  }
  // Plot new path
, plot: function(p) {
    return (p == null) ?
      this.array() :
      this.clear().attr('points', typeof p == 'string' ? p : (this._array = new SVG.PointArray(p)))
  }
  // Clear array cache
, clear: function() {
    delete this._array
    return this
  }
  // Move by left top corner
, move: function(x, y) {
    return this.attr('points', this.array().move(x, y))
  }
  // Set element size to given width and height
, size: function(width, height) {
    var p = proportionalSize(this, width, height)

    return this.attr('points', this.array().size(p.width, p.height))
  }

})

// unify all point to point elements
SVG.extend(SVG.Line, SVG.Polyline, SVG.Polygon, {
  // Define morphable array
  morphArray:  SVG.PointArray
  // Move by left top corner over x-axis
, x: function(x) {
    return x == null ? this.bbox().x : this.move(x, this.bbox().y)
  }
  // Move by left top corner over y-axis
, y: function(y) {
    return y == null ? this.bbox().y : this.move(this.bbox().x, y)
  }
  // Set width of element
, width: function(width) {
    var b = this.bbox()

    return width == null ? b.width : this.size(width, b.height)
  }
  // Set height of element
, height: function(height) {
    var b = this.bbox()

    return height == null ? b.height : this.size(b.width, height)
  }
})
SVG.Path = SVG.invent({
  // Initialize node
  create: 'path'

  // Inherit from
, inherit: SVG.Shape

  // Add class methods
, extend: {
    // Define morphable array
    morphArray:  SVG.PathArray
    // Get array
  , array: function() {
      return this._array || (this._array = new SVG.PathArray(this.attr('d')))
    }
    // Plot new path
  , plot: function(d) {
      return (d == null) ?
        this.array() :
        this.clear().attr('d', typeof d == 'string' ? d : (this._array = new SVG.PathArray(d)))
    }
    // Clear array cache
  , clear: function() {
      delete this._array
      return this
    }
    // Move by left top corner
  , move: function(x, y) {
      return this.attr('d', this.array().move(x, y))
    }
    // Move by left top corner over x-axis
  , x: function(x) {
      return x == null ? this.bbox().x : this.move(x, this.bbox().y)
    }
    // Move by left top corner over y-axis
  , y: function(y) {
      return y == null ? this.bbox().y : this.move(this.bbox().x, y)
    }
    // Set element size to given width and height
  , size: function(width, height) {
      var p = proportionalSize(this, width, height)

      return this.attr('d', this.array().size(p.width, p.height))
    }
    // Set width of element
  , width: function(width) {
      return width == null ? this.bbox().width : this.size(width, this.bbox().height)
    }
    // Set height of element
  , height: function(height) {
      return height == null ? this.bbox().height : this.size(this.bbox().width, height)
    }

  }

  // Add parent method
, construct: {
    // Create a wrapped path element
    path: function(d) {
      // make sure plot is called as a setter
      return this.put(new SVG.Path).plot(d || new SVG.PathArray)
    }
  }
})

SVG.Image = SVG.invent({
  // Initialize node
  create: 'image'

  // Inherit from
, inherit: SVG.Shape

  // Add class methods
, extend: {
    // (re)load image
    load: function(url) {
      if (!url) return this

      var self = this
        , img  = new window.Image()

      // preload image
      SVG.on(img, 'load', function() {
        SVG.off(img)

        var p = self.parent(SVG.Pattern)

        if(p === null) return

        // ensure image size
        if (self.width() == 0 && self.height() == 0)
          self.size(img.width, img.height)

        // ensure pattern size if not set
        if (p && p.width() == 0 && p.height() == 0)
          p.size(self.width(), self.height())

        // callback
        if (typeof self._loaded === 'function')
          self._loaded.call(self, {
            width:  img.width
          , height: img.height
          , ratio:  img.width / img.height
          , url:    url
          })
      })

      SVG.on(img, 'error', function(e){
        SVG.off(img)

        if (typeof self._error === 'function'){
            self._error.call(self, e)
        }
      })

      return this.attr('href', (img.src = this.src = url), SVG.xlink)
    }
    // Add loaded callback
  , loaded: function(loaded) {
      this._loaded = loaded
      return this
    }

  , error: function(error) {
      this._error = error
      return this
    }
  }

  // Add parent method
, construct: {
    // create image element, load image and set its size
    image: function(source, width, height) {
      return this.put(new SVG.Image).load(source).size(width || 0, height || width || 0)
    }
  }

})
SVG.Text = SVG.invent({
  // Initialize node
  create: function() {
    this.constructor.call(this, SVG.create('text'))

    this.dom.leading = new SVG.Number(1.3)    // store leading value for rebuilding
    this._rebuild = true                      // enable automatic updating of dy values
    this._build   = false                     // disable build mode for adding multiple lines

    // set default font
    this.attr('font-family', SVG.defaults.attrs['font-family'])
  }

  // Inherit from
, inherit: SVG.Shape

  // Add class methods
, extend: {
    // Move over x-axis
    x: function(x) {
      // act as getter
      if (x == null)
        return this.attr('x')

      return this.attr('x', x)
    }
    // Move over y-axis
  , y: function(y) {
      var oy = this.attr('y')
        , o  = typeof oy === 'number' ? oy - this.bbox().y : 0

      // act as getter
      if (y == null)
        return typeof oy === 'number' ? oy - o : oy

      return this.attr('y', typeof y.valueOf() === 'number' ? y + o : y)
    }
    // Move center over x-axis
  , cx: function(x) {
      return x == null ? this.bbox().cx : this.x(x - this.bbox().width / 2)
    }
    // Move center over y-axis
  , cy: function(y) {
      return y == null ? this.bbox().cy : this.y(y - this.bbox().height / 2)
    }
    // Set the text content
  , text: function(text) {
      // act as getter
      if (typeof text === 'undefined'){
        var text = ''
        var children = this.node.childNodes
        for(var i = 0, len = children.length; i < len; ++i){

          // add newline if its not the first child and newLined is set to true
          if(i != 0 && children[i].nodeType != 3 && SVG.adopt(children[i]).dom.newLined == true){
            text += '\n'
          }

          // add content of this node
          text += children[i].textContent
        }

        return text
      }

      // remove existing content
      this.clear().build(true)

      if (typeof text === 'function') {
        // call block
        text.call(this, this)

      } else {
        // store text and make sure text is not blank
        text = text.split('\n')

        // build new lines
        for (var i = 0, il = text.length; i < il; i++)
          this.tspan(text[i]).newLine()
      }

      // disable build mode and rebuild lines
      return this.build(false).rebuild()
    }
    // Set font size
  , size: function(size) {
      return this.attr('font-size', size).rebuild()
    }
    // Set / get leading
  , leading: function(value) {
      // act as getter
      if (value == null)
        return this.dom.leading

      // act as setter
      this.dom.leading = new SVG.Number(value)

      return this.rebuild()
    }
    // Get all the first level lines
  , lines: function() {
      var node = (this.textPath && this.textPath() || this).node

      // filter tspans and map them to SVG.js instances
      var lines = SVG.utils.map(SVG.utils.filterSVGElements(node.childNodes), function(el){
        return SVG.adopt(el)
      })

      // return an instance of SVG.set
      return new SVG.Set(lines)
    }
    // Rebuild appearance type
  , rebuild: function(rebuild) {
      // store new rebuild flag if given
      if (typeof rebuild == 'boolean')
        this._rebuild = rebuild

      // define position of all lines
      if (this._rebuild) {
        var self = this
          , blankLineOffset = 0
          , dy = this.dom.leading * new SVG.Number(this.attr('font-size'))

        this.lines().each(function() {
          if (this.dom.newLined) {
            if (!self.textPath())
              this.attr('x', self.attr('x'))
            if(this.text() == '\n') {
              blankLineOffset += dy
            }else{
              this.attr('dy', dy + blankLineOffset)
              blankLineOffset = 0
            }
          }
        })

        this.fire('rebuild')
      }

      return this
    }
    // Enable / disable build mode
  , build: function(build) {
      this._build = !!build
      return this
    }
    // overwrite method from parent to set data properly
  , setData: function(o){
      this.dom = o
      this.dom.leading = new SVG.Number(o.leading || 1.3)
      return this
    }
  }

  // Add parent method
, construct: {
    // Create text element
    text: function(text) {
      return this.put(new SVG.Text).text(text)
    }
    // Create plain text element
  , plain: function(text) {
      return this.put(new SVG.Text).plain(text)
    }
  }

})

SVG.Tspan = SVG.invent({
  // Initialize node
  create: 'tspan'

  // Inherit from
, inherit: SVG.Shape

  // Add class methods
, extend: {
    // Set text content
    text: function(text) {
      if(text == null) return this.node.textContent + (this.dom.newLined ? '\n' : '')

      typeof text === 'function' ? text.call(this, this) : this.plain(text)

      return this
    }
    // Shortcut dx
  , dx: function(dx) {
      return this.attr('dx', dx)
    }
    // Shortcut dy
  , dy: function(dy) {
      return this.attr('dy', dy)
    }
    // Create new line
  , newLine: function() {
      // fetch text parent
      var t = this.parent(SVG.Text)

      // mark new line
      this.dom.newLined = true

      // apply new hy¡n
      return this.dy(t.dom.leading * t.attr('font-size')).attr('x', t.x())
    }
  }

})

SVG.extend(SVG.Text, SVG.Tspan, {
  // Create plain text node
  plain: function(text) {
    // clear if build mode is disabled
    if (this._build === false)
      this.clear()

    // create text node
    this.node.appendChild(document.createTextNode(text))

    return this
  }
  // Create a tspan
, tspan: function(text) {
    var node  = (this.textPath && this.textPath() || this).node
      , tspan = new SVG.Tspan

    // clear if build mode is disabled
    if (this._build === false)
      this.clear()

    // add new tspan
    node.appendChild(tspan.node)

    return tspan.text(text)
  }
  // Clear all lines
, clear: function() {
    var node = (this.textPath && this.textPath() || this).node

    // remove existing child nodes
    while (node.hasChildNodes())
      node.removeChild(node.lastChild)

    return this
  }
  // Get length of text element
, length: function() {
    return this.node.getComputedTextLength()
  }
})

SVG.TextPath = SVG.invent({
  // Initialize node
  create: 'textPath'

  // Inherit from
, inherit: SVG.Parent

  // Define parent class
, parent: SVG.Text

  // Add parent method
, construct: {
    morphArray: SVG.PathArray
    // Create path for text to run on
  , path: function(d) {
      // create textPath element
      var path  = new SVG.TextPath
        , track = this.doc().defs().path(d)

      // move lines to textpath
      while (this.node.hasChildNodes())
        path.node.appendChild(this.node.firstChild)

      // add textPath element as child node
      this.node.appendChild(path.node)

      // link textPath to path and add content
      path.attr('href', '#' + track, SVG.xlink)

      return this
    }
    // return the array of the path track element
  , array: function() {
      var track = this.track()

      return track ? track.array() : null
    }
    // Plot path if any
  , plot: function(d) {
      var track = this.track()
        , pathArray = null

      if (track) {
        pathArray = track.plot(d)
      }

      return (d == null) ? pathArray : this
    }
    // Get the path track element
  , track: function() {
      var path = this.textPath()

      if (path)
        return path.reference('href')
    }
    // Get the textPath child
  , textPath: function() {
      if (this.node.firstChild && this.node.firstChild.nodeName == 'textPath')
        return SVG.adopt(this.node.firstChild)
    }
  }
})

SVG.Nested = SVG.invent({
  // Initialize node
  create: function() {
    this.constructor.call(this, SVG.create('svg'))

    this.style('overflow', 'visible')
  }

  // Inherit from
, inherit: SVG.Container

  // Add parent method
, construct: {
    // Create nested svg document
    nested: function() {
      return this.put(new SVG.Nested)
    }
  }
})
SVG.A = SVG.invent({
  // Initialize node
  create: 'a'

  // Inherit from
, inherit: SVG.Container

  // Add class methods
, extend: {
    // Link url
    to: function(url) {
      return this.attr('href', url, SVG.xlink)
    }
    // Link show attribute
  , show: function(target) {
      return this.attr('show', target, SVG.xlink)
    }
    // Link target attribute
  , target: function(target) {
      return this.attr('target', target)
    }
  }

  // Add parent method
, construct: {
    // Create a hyperlink element
    link: function(url) {
      return this.put(new SVG.A).to(url)
    }
  }
})

SVG.extend(SVG.Element, {
  // Create a hyperlink element
  linkTo: function(url) {
    var link = new SVG.A

    if (typeof url == 'function')
      url.call(link, link)
    else
      link.to(url)

    return this.parent().put(link).put(this)
  }

})
SVG.Marker = SVG.invent({
  // Initialize node
  create: 'marker'

  // Inherit from
, inherit: SVG.Container

  // Add class methods
, extend: {
    // Set width of element
    width: function(width) {
      return this.attr('markerWidth', width)
    }
    // Set height of element
  , height: function(height) {
      return this.attr('markerHeight', height)
    }
    // Set marker refX and refY
  , ref: function(x, y) {
      return this.attr('refX', x).attr('refY', y)
    }
    // Update marker
  , update: function(block) {
      // remove all content
      this.clear()

      // invoke passed block
      if (typeof block == 'function')
        block.call(this, this)

      return this
    }
    // Return the fill id
  , toString: function() {
      return 'url(#' + this.id() + ')'
    }
  }

  // Add parent method
, construct: {
    marker: function(width, height, block) {
      // Create marker element in defs
      return this.defs().marker(width, height, block)
    }
  }

})

SVG.extend(SVG.Defs, {
  // Create marker
  marker: function(width, height, block) {
    // Set default viewbox to match the width and height, set ref to cx and cy and set orient to auto
    return this.put(new SVG.Marker)
      .size(width, height)
      .ref(width / 2, height / 2)
      .viewbox(0, 0, width, height)
      .attr('orient', 'auto')
      .update(block)
  }

})

SVG.extend(SVG.Line, SVG.Polyline, SVG.Polygon, SVG.Path, {
  // Create and attach markers
  marker: function(marker, width, height, block) {
    var attr = ['marker']

    // Build attribute name
    if (marker != 'all') attr.push(marker)
    attr = attr.join('-')

    // Set marker attribute
    marker = arguments[1] instanceof SVG.Marker ?
      arguments[1] :
      this.doc().marker(width, height, block)

    return this.attr(attr, marker)
  }

})
// Define list of available attributes for stroke and fill
var sugar = {
  stroke: ['color', 'width', 'opacity', 'linecap', 'linejoin', 'miterlimit', 'dasharray', 'dashoffset']
, fill:   ['color', 'opacity', 'rule']
, prefix: function(t, a) {
    return a == 'color' ? t : t + '-' + a
  }
}

// Add sugar for fill and stroke
;['fill', 'stroke'].forEach(function(m) {
  var i, extension = {}

  extension[m] = function(o) {
    if (typeof o == 'undefined')
      return this
    if (typeof o == 'string' || SVG.Color.isRgb(o) || (o && typeof o.fill === 'function'))
      this.attr(m, o)

    else
      // set all attributes from sugar.fill and sugar.stroke list
      for (i = sugar[m].length - 1; i >= 0; i--)
        if (o[sugar[m][i]] != null)
          this.attr(sugar.prefix(m, sugar[m][i]), o[sugar[m][i]])

    return this
  }

  SVG.extend(SVG.Element, SVG.FX, extension)

})

SVG.extend(SVG.Element, SVG.FX, {
  // Map rotation to transform
  rotate: function(d, cx, cy) {
    return this.transform({ rotation: d, cx: cx, cy: cy })
  }
  // Map skew to transform
, skew: function(x, y, cx, cy) {
    return arguments.length == 1  || arguments.length == 3 ?
      this.transform({ skew: x, cx: y, cy: cx }) :
      this.transform({ skewX: x, skewY: y, cx: cx, cy: cy })
  }
  // Map scale to transform
, scale: function(x, y, cx, cy) {
    return arguments.length == 1  || arguments.length == 3 ?
      this.transform({ scale: x, cx: y, cy: cx }) :
      this.transform({ scaleX: x, scaleY: y, cx: cx, cy: cy })
  }
  // Map translate to transform
, translate: function(x, y) {
    return this.transform({ x: x, y: y })
  }
  // Map flip to transform
, flip: function(a, o) {
    o = typeof a == 'number' ? a : o
    return this.transform({ flip: a || 'both', offset: o })
  }
  // Map matrix to transform
, matrix: function(m) {
    return this.attr('transform', new SVG.Matrix(arguments.length == 6 ? [].slice.call(arguments) : m))
  }
  // Opacity
, opacity: function(value) {
    return this.attr('opacity', value)
  }
  // Relative move over x axis
, dx: function(x) {
    return this.x(new SVG.Number(x).plus(this instanceof SVG.FX ? 0 : this.x()), true)
  }
  // Relative move over y axis
, dy: function(y) {
    return this.y(new SVG.Number(y).plus(this instanceof SVG.FX ? 0 : this.y()), true)
  }
  // Relative move over x and y axes
, dmove: function(x, y) {
    return this.dx(x).dy(y)
  }
})

SVG.extend(SVG.Rect, SVG.Ellipse, SVG.Circle, SVG.Gradient, SVG.FX, {
  // Add x and y radius
  radius: function(x, y) {
    var type = (this._target || this).type;
    return type == 'radial' || type == 'circle' ?
      this.attr('r', new SVG.Number(x)) :
      this.rx(x).ry(y == null ? x : y)
  }
})

SVG.extend(SVG.Path, {
  // Get path length
  length: function() {
    return this.node.getTotalLength()
  }
  // Get point at length
, pointAt: function(length) {
    return this.node.getPointAtLength(length)
  }
})

SVG.extend(SVG.Parent, SVG.Text, SVG.Tspan, SVG.FX, {
  // Set font
  font: function(a, v) {
    if (typeof a == 'object') {
      for (v in a) this.font(v, a[v])
    }

    return a == 'leading' ?
        this.leading(v) :
      a == 'anchor' ?
        this.attr('text-anchor', v) :
      a == 'size' || a == 'family' || a == 'weight' || a == 'stretch' || a == 'variant' || a == 'style' ?
        this.attr('font-'+ a, v) :
        this.attr(a, v)
  }
})

SVG.Set = SVG.invent({
  // Initialize
  create: function(members) {
    if (members instanceof SVG.Set) {
      this.members = members.members.slice()
    } else {
      Array.isArray(members) ? this.members = members : this.clear()
    }
  }

  // Add class methods
, extend: {
    // Add element to set
    add: function() {
      var i, il, elements = [].slice.call(arguments)

      for (i = 0, il = elements.length; i < il; i++)
        this.members.push(elements[i])

      return this
    }
    // Remove element from set
  , remove: function(element) {
      var i = this.index(element)

      // remove given child
      if (i > -1)
        this.members.splice(i, 1)

      return this
    }
    // Iterate over all members
  , each: function(block) {
      for (var i = 0, il = this.members.length; i < il; i++)
        block.apply(this.members[i], [i, this.members])

      return this
    }
    // Restore to defaults
  , clear: function() {
      // initialize store
      this.members = []

      return this
    }
    // Get the length of a set
  , length: function() {
      return this.members.length
    }
    // Checks if a given element is present in set
  , has: function(element) {
      return this.index(element) >= 0
    }
    // retuns index of given element in set
  , index: function(element) {
      return this.members.indexOf(element)
    }
    // Get member at given index
  , get: function(i) {
      return this.members[i]
    }
    // Get first member
  , first: function() {
      return this.get(0)
    }
    // Get last member
  , last: function() {
      return this.get(this.members.length - 1)
    }
    // Default value
  , valueOf: function() {
      return this.members
    }
    // Get the bounding box of all members included or empty box if set has no items
  , bbox: function(){
      // return an empty box of there are no members
      if (this.members.length == 0)
        return new SVG.RBox()

      // get the first rbox and update the target bbox
      var rbox = this.members[0].rbox(this.members[0].doc())

      this.each(function() {
        // user rbox for correct position and visual representation
        rbox = rbox.merge(this.rbox(this.doc()))
      })

      return rbox
    }
  }

  // Add parent method
, construct: {
    // Create a new set
    set: function(members) {
      return new SVG.Set(members)
    }
  }
})

SVG.FX.Set = SVG.invent({
  // Initialize node
  create: function(set) {
    // store reference to set
    this.set = set
  }

})

// Alias methods
SVG.Set.inherit = function() {
  var m
    , methods = []

  // gather shape methods
  for(var m in SVG.Shape.prototype)
    if (typeof SVG.Shape.prototype[m] == 'function' && typeof SVG.Set.prototype[m] != 'function')
      methods.push(m)

  // apply shape aliasses
  methods.forEach(function(method) {
    SVG.Set.prototype[method] = function() {
      for (var i = 0, il = this.members.length; i < il; i++)
        if (this.members[i] && typeof this.members[i][method] == 'function')
          this.members[i][method].apply(this.members[i], arguments)

      return method == 'animate' ? (this.fx || (this.fx = new SVG.FX.Set(this))) : this
    }
  })

  // clear methods for the next round
  methods = []

  // gather fx methods
  for(var m in SVG.FX.prototype)
    if (typeof SVG.FX.prototype[m] == 'function' && typeof SVG.FX.Set.prototype[m] != 'function')
      methods.push(m)

  // apply fx aliasses
  methods.forEach(function(method) {
    SVG.FX.Set.prototype[method] = function() {
      for (var i = 0, il = this.set.members.length; i < il; i++)
        this.set.members[i].fx[method].apply(this.set.members[i].fx, arguments)

      return this
    }
  })
}


SVG.extend(SVG.Element, {
  // Store data values on svg nodes
  data: function(a, v, r) {
    if (typeof a == 'object') {
      for (v in a)
        this.data(v, a[v])

    } else if (arguments.length < 2) {
      try {
        return JSON.parse(this.attr('data-' + a))
      } catch(e) {
        return this.attr('data-' + a)
      }

    } else {
      this.attr(
        'data-' + a
      , v === null ?
          null :
        r === true || typeof v === 'string' || typeof v === 'number' ?
          v :
          JSON.stringify(v)
      )
    }

    return this
  }
})
SVG.extend(SVG.Element, {
  // Remember arbitrary data
  remember: function(k, v) {
    // remember every item in an object individually
    if (typeof arguments[0] == 'object')
      for (var v in k)
        this.remember(v, k[v])

    // retrieve memory
    else if (arguments.length == 1)
      return this.memory()[k]

    // store memory
    else
      this.memory()[k] = v

    return this
  }

  // Erase a given memory
, forget: function() {
    if (arguments.length == 0)
      this._memory = {}
    else
      for (var i = arguments.length - 1; i >= 0; i--)
        delete this.memory()[arguments[i]]

    return this
  }

  // Initialize or return local memory object
, memory: function() {
    return this._memory || (this._memory = {})
  }

})
// Method for getting an element by id
SVG.get = function(id) {
  var node = document.getElementById(idFromReference(id) || id)
  return SVG.adopt(node)
}

// Select elements by query string
SVG.select = function(query, parent) {
  return new SVG.Set(
    SVG.utils.map((parent || document).querySelectorAll(query), function(node) {
      return SVG.adopt(node)
    })
  )
}

SVG.extend(SVG.Parent, {
  // Scoped select method
  select: function(query) {
    return SVG.select(query, this.node)
  }

})
function pathRegReplace(a, b, c, d) {
  return c + d.replace(SVG.regex.dots, ' .')
}

// creates deep clone of array
function array_clone(arr){
  var clone = arr.slice(0)
  for(var i = clone.length; i--;){
    if(Array.isArray(clone[i])){
      clone[i] = array_clone(clone[i])
    }
  }
  return clone
}

// tests if a given element is instance of an object
function is(el, obj){
  return el instanceof obj
}

// tests if a given selector matches an element
function matches(el, selector) {
  return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
}

// Convert dash-separated-string to camelCase
function camelCase(s) {
  return s.toLowerCase().replace(/-(.)/g, function(m, g) {
    return g.toUpperCase()
  })
}

// Capitalize first letter of a string
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// Ensure to six-based hex
function fullHex(hex) {
  return hex.length == 4 ?
    [ '#',
      hex.substring(1, 2), hex.substring(1, 2)
    , hex.substring(2, 3), hex.substring(2, 3)
    , hex.substring(3, 4), hex.substring(3, 4)
    ].join('') : hex
}

// Component to hex value
function compToHex(comp) {
  var hex = comp.toString(16)
  return hex.length == 1 ? '0' + hex : hex
}

// Calculate proportional width and height values when necessary
function proportionalSize(element, width, height) {
  if (width == null || height == null) {
    var box = element.bbox()

    if (width == null)
      width = box.width / box.height * height
    else if (height == null)
      height = box.height / box.width * width
  }

  return {
    width:  width
  , height: height
  }
}

// Delta transform point
function deltaTransformPoint(matrix, x, y) {
  return {
    x: x * matrix.a + y * matrix.c + 0
  , y: x * matrix.b + y * matrix.d + 0
  }
}

// Map matrix array to object
function arrayToMatrix(a) {
  return { a: a[0], b: a[1], c: a[2], d: a[3], e: a[4], f: a[5] }
}

// Parse matrix if required
function parseMatrix(matrix) {
  if (!(matrix instanceof SVG.Matrix))
    matrix = new SVG.Matrix(matrix)

  return matrix
}

// Add centre point to transform object
function ensureCentre(o, target) {
  o.cx = o.cx == null ? target.bbox().cx : o.cx
  o.cy = o.cy == null ? target.bbox().cy : o.cy
}

// PathArray Helpers
function arrayToString(a) {
  for (var i = 0, il = a.length, s = ''; i < il; i++) {
    s += a[i][0]

    if (a[i][1] != null) {
      s += a[i][1]

      if (a[i][2] != null) {
        s += ' '
        s += a[i][2]

        if (a[i][3] != null) {
          s += ' '
          s += a[i][3]
          s += ' '
          s += a[i][4]

          if (a[i][5] != null) {
            s += ' '
            s += a[i][5]
            s += ' '
            s += a[i][6]

            if (a[i][7] != null) {
              s += ' '
              s += a[i][7]
            }
          }
        }
      }
    }
  }

  return s + ' '
}

// Deep new id assignment
function assignNewId(node) {
  // do the same for SVG child nodes as well
  for (var i = node.childNodes.length - 1; i >= 0; i--)
    if (node.childNodes[i] instanceof window.SVGElement)
      assignNewId(node.childNodes[i])

  return SVG.adopt(node).id(SVG.eid(node.nodeName))
}

// Add more bounding box properties
function fullBox(b) {
  if (b.x == null) {
    b.x      = 0
    b.y      = 0
    b.width  = 0
    b.height = 0
  }

  b.w  = b.width
  b.h  = b.height
  b.x2 = b.x + b.width
  b.y2 = b.y + b.height
  b.cx = b.x + b.width / 2
  b.cy = b.y + b.height / 2

  return b
}

// Get id from reference string
function idFromReference(url) {
  var m = (url || '').toString().match(SVG.regex.reference)

  if (m) return m[1]
}

// If values like 1e-88 are passed, this is not a valid 32 bit float,
// but in those cases, we are so close to 0 that 0 works well!
function float32String(v) {
  return Math.abs(v) > 1e-37 ? v : 0
}

// Create matrix array for looping
var abcdef = 'abcdef'.split('')

// Add CustomEvent to IE9 and IE10
if (typeof window.CustomEvent !== 'function') {
  // Code from: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
  var CustomEventPoly = function(event, options) {
    options = options || { bubbles: false, cancelable: false, detail: undefined }
    var e = document.createEvent('CustomEvent')
    e.initCustomEvent(event, options.bubbles, options.cancelable, options.detail)
    return e
  }

  CustomEventPoly.prototype = window.Event.prototype

  SVG.CustomEvent = CustomEventPoly
} else {
  SVG.CustomEvent = window.CustomEvent
}

// requestAnimationFrame / cancelAnimationFrame Polyfill with fallback based on Paul Irish
(function(w) {
  var lastTime = 0
  var vendors = ['moz', 'webkit']

  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    w.requestAnimationFrame = w[vendors[x] + 'RequestAnimationFrame']
    w.cancelAnimationFrame  = w[vendors[x] + 'CancelAnimationFrame'] ||
                              w[vendors[x] + 'CancelRequestAnimationFrame']
  }

  w.requestAnimationFrame = w.requestAnimationFrame ||
    function(callback) {
      var currTime = new Date().getTime()
      var timeToCall = Math.max(0, 16 - (currTime - lastTime))

      var id = w.setTimeout(function() {
        callback(currTime + timeToCall)
      }, timeToCall)

      lastTime = currTime + timeToCall
      return id
    }

  w.cancelAnimationFrame = w.cancelAnimationFrame || w.clearTimeout;

}(window))

return SVG

}));

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const SVG = __webpack_require__(/*! svg.js */ "./node_modules/svg.js/dist/svg.js");
const retilinear_1 = __webpack_require__(/*! ./retilinear */ "./src/retilinear.ts");
let audioContext;
const drawW = 297;
const drawH = 450;
let canvas = SVG('container').size('100%', '100%').viewbox(0, 0, drawW, drawH);
const retilineares = new Map();
const minPoint = ([ax, ay], [bx, by]) => {
    return [Math.min(ax, bx), Math.min(ay, by)];
};
const dist = ([ax, ay], [bx, by]) => {
    return Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay + by, 2));
};
const parseRect = (r) => {
    const id = r.id();
    // @ts-ignore
    const color = new SVG.Color(r.style('fill'));
    const xt = r.screenCTM().extract();
    const t = { x: xt.x, y: xt.y };
    // console.log('TEE', t);
    const pos = [r.x() + t.x, r.y() + t.y];
    const size = [r.width(), r.height()];
    const points = [
        pos,
        [pos[0] + size[0], pos[1]],
        [pos[0] + size[0], pos[1] + size[1]],
        [pos[0], pos[1] + size[1]]
    ];
    // console.log('rect', id, points, color);
    return [id, points, color];
};
const parsePath = (p) => {
    const id = p.id();
    // @ts-ignore
    const color = new SVG.Color(p.style('fill'));
    const xt = p.screenCTM().extract();
    const t = { x: xt.x, y: xt.y };
    // console.log('TEE', t);
    const pos = [p.x() + t.x, p.y() + t.y];
    const points = [];
    let curr = pos;
    let prev = pos;
    for (const op of p.array().value) {
        // @ts-ignore
        if (op[0] === 'M') {
            // @ts-ignore
            const [_, x, y] = op;
            prev = curr;
            curr = [x + t.x, y + t.y];
            // @ts-ignore
        }
        else if (op[0] === 'H') {
            // @ts-ignore
            const [_, x] = op;
            prev = curr;
            curr = [x + t.x, prev[1]];
            if (dist(curr, prev) > 1) {
                points.push(prev);
            }
            points.push(curr);
            // @ts-ignore
        }
        else if (op[0] === 'V') {
            // @ts-ignore
            const [_, y] = op;
            prev = curr;
            curr = [prev[0], y + t.y];
            if (dist(curr, prev) > 1) {
                points.push(prev);
            }
            points.push(curr);
            // @ts-ignore
        }
        else if (op[0] === 'L') {
            // @ts-ignore
            const [_, x, y] = op;
            prev = curr;
            curr = [x + t.x, y + t.y];
            if (dist(curr, prev) > 1) {
                points.push(prev);
            }
            points.push(curr);
            // @ts-ignore
        }
        else if (op[0] === 'C') {
            // @ts-ignore
            const [o, ax, ay, bx, by, x, y] = op;
            prev = curr;
            curr = [x + t.x, y + t.y];
            if (dist(curr, prev) > 1) {
                points.push(prev);
            }
            points.push(curr);
        }
    }
    // console.log('path', id, points, color);
    return [id, points, color];
};
// svg stuff
const loadSVG = () => __awaiter(this, void 0, void 0, function* () {
    const container = document.getElementById('container');
    const num = container.className.replace('klass', '');
    const uri = `/${num}.svg`;
    const resp = yield fetch(uri);
    const svgData = yield resp.text();
    const draw = SVG('container').size('100%', '100%').viewbox(0, 0, drawW, drawH);
    draw.svg(svgData);
    let offset = [0, 0];
    let allPoints = [];
    draw.select('path').each(function (i, members) {
        const path = this;
        const [id, points, color] = parsePath(path);
        allPoints.push(...points);
    });
    draw.select('rect').each(function (i, members) {
        const rect = this;
        const [id, points, color] = parseRect(rect);
        allPoints.push(...points);
    });
    offset = allPoints.reduce(minPoint);
    // console.log('OFFSET', offset);
    draw.select('path').each(function (i, members) {
        const path = this;
        const [id, points, color] = parsePath(path);
        const absPoints = points.map(([px, py]) => [px - offset[0], py - offset[1]]);
        // console.log('abs path', id, absPoints);
        const ret = new retilinear_1.default(audioContext, canvas, color, absPoints);
        retilineares.set(id, ret);
    });
    draw.select('rect').each(function (i, members) {
        const rect = this;
        const [id, points, color] = parseRect(rect);
        const absPoints = points.map(([px, py]) => [px - offset[0], py - offset[1]]);
        // console.log('abs rect', id, absPoints);
        const ret = new retilinear_1.default(audioContext, canvas, color, absPoints);
        retilineares.set(id, ret);
    });
    draw.remove();
});
const playRand = (ev) => {
    retilineares.forEach((ret) => {
        if (Math.random() < 0.2) {
            ret.play();
        }
    });
    return true;
};
const stopAll = (ev) => {
    retilineares.forEach((ret) => ret.stop());
    return true;
};
let loaded = false;
const init = () => {
    if (!loaded) {
        loaded = true;
        if ('webkitAudioContext' in window) {
            // @ts-ignore
            audioContext = new webkitAudioContext();
        }
        else {
            audioContext = new AudioContext();
        }
        loadSVG();
        // document.getElementById('rand').onclick = playRand;
        // document.getElementById('stop').onclick = stopAll;
    }
};
canvas.click(init);


/***/ }),

/***/ "./src/retilinear.ts":
/*!***************************!*\
  !*** ./src/retilinear.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
const synth_1 = __webpack_require__(/*! ./synth */ "./src/synth.ts");
class Retilinear {
    constructor(audioCtx, canvas, color, points) {
        this.isPlaying = false;
        const b = color.brightness();
        // const pitchBase = 440;
        const pitchBase = 300;
        this.note = b * pitchBase + 60;
        // const [h, s, l] = rgb2hsl(col);
        // const mod = h / 100;
        this.audioCtx = audioCtx;
        this.synth = new synth_1.BleepSynth(this.note, this.audioCtx);
        this.canvas = canvas;
        this.color = color;
        this.points = points;
        this.draw();
    }
    draw() {
        this.poly = this.canvas.polygon(this.points).attr('fill', this.color.toString());
        const self = this;
        const toggle = () => self.isPlaying ? self.stop() : self.play();
        this.poly.click(toggle);
    }
    play() {
        this.isPlaying = true;
        const [x, y] = this.points[0];
        const [cw, ch] = [5, 5];
        const [kx, ky] = [-cw / 2, -ch / 2];
        this.cursor = this.canvas.ellipse(cw, ch)
            .x(x + kx).y(y + ky)
            .attr('fill', this.color.toString());
        this.cursor.front();
        const dec = (l) => Math.abs(l) / 200;
        // const dur = (l: number) => l * 6;
        const dur = (l) => Math.abs(l) * 18;
        const oct = (l) => {
            const al = Math.abs(l);
            let mul = -2;
            if (al < 25) {
                mul = 2;
            }
            else if (al < 80) {
                mul = 1;
            }
            else if (al < 160) {
                mul = 0;
            }
            else if (al < 250) {
                mul = -1;
            }
            return Math.pow(2, mul);
        };
        // const points = this.poly.array();
        const animate = (step) => {
            this.cursor.front();
            const len = this.points.length;
            const p = util_1.mod(step - 1, len);
            // @ts-ignore
            const [px, py] = this.points[p];
            const n = util_1.mod(step, len);
            // @ts-ignore
            const [nx, ny] = this.points[n];
            const [dx, dy] = [nx - px, ny - py];
            // skip zero steps
            if (dx + dy === 0) {
                animate(step + 1);
                return;
            }
            this.synth.play(this.note * oct(dx + dy), dec(dx + dy));
            const flashColor = '#fff';
            const shapeColor = this.color.toString();
            this.poly.attr('fill', flashColor);
            const polyFlash = this.poly.animate(dur(dx + dy), '>')
                .attr({ fill: shapeColor });
            this.cursor.attr('fill', flashColor);
            this.cursor.animate(dur(dx + dy), '>')
                .move(nx + kx, ny + ky)
                .attr({ fill: shapeColor })
                .after(() => {
                polyFlash.stop();
                if (!this.isPlaying)
                    return;
                animate(step + 1);
            });
        };
        animate(1);
    }
    stop() {
        if (this.cursor) {
            this.cursor.remove();
        }
        this.isPlaying = false;
        return true;
    }
}
exports.default = Retilinear;


/***/ }),

/***/ "./src/synth.ts":
/*!**********************!*\
  !*** ./src/synth.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BleepSynth {
    constructor(freq, audioCtx) {
        this.freq = freq;
        this.audioCtx = audioCtx;
    }
    play(freq, dec) {
        // console.log('play!', freq, dec);
        const osc = this.audioCtx.createOscillator();
        osc.type = freq < 250 ? 'sawtooth' : freq < 440 ? 'sine' : 'triangle';
        const adsr = this.audioCtx.createGain();
        const filter = this.audioCtx.createBiquadFilter();
        osc.connect(adsr);
        adsr.connect(filter);
        filter.connect(this.audioCtx.destination);
        // adsr
        const t0 = this.audioCtx.currentTime;
        osc.start(t0);
        // vol:0
        adsr.gain.setValueAtTime(0, t0);
        // attack
        const t1 = t0 + 0.01;
        adsr.gain.linearRampToValueAtTime(0.4, t1);
        // decay
        const t2 = t1 + dec;
        const sus = 0.01;
        adsr.gain.exponentialRampToValueAtTime(sus, t2);
        // gate
        const stop = setInterval(() => {
            if (adsr.gain.value < 0.01) {
                osc.stop();
                clearInterval(stop);
            }
        }, 100);
        osc.frequency.value = freq;
        filter.frequency.value = freq * 2;
        this.filter = filter;
        this.freq = freq;
    }
    setFilterProps(mul, q) {
        this.filter.Q.value = q;
        this.filter.frequency.value = this.freq * mul;
    }
}
exports.BleepSynth = BleepSynth;


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const rgb2hsl = (col) => {
    // Make r, g, and b fractions of 1
    const r = col.r / 255;
    const g = col.g / 255;
    const b = col.b / 255;
    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b), cmax = Math.max(r, g, b), delta = cmax - cmin, h = 0, s = 0, l = 0;
    // Calculate hue
    // No difference
    if (delta === 0)
        h = 0;
    // Red is max
    else if (cmax === r)
        h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax === g)
        h = (b - r) / delta + 2;
    // Blue is max
    else
        h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    // Make negative hues positive behind 360°
    if (h < 0)
        h += 360;
    // Calculate lightness
    l = (cmax + cmin) / 2;
    // Calculate saturation
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return [h / 255, s / 255, l / 255];
};
exports.rgb2hsl = rgb2hsl;
const mod = (m, n) => ((m % n) + n) % n;
exports.mod = mod;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy5qcy9kaXN0L3N2Zy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmV0aWxpbmVhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ludGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBMEM7QUFDaEQsSUFBSSxtQ0FBTztBQUNYO0FBQ0EsS0FBSztBQUFBLG9HQUFDO0FBQ04sR0FBRyxNQUFNLEVBSU47QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOEJBQThCLFFBQVE7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRUFBbUU7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msa0JBQWtCLFdBQVcsVUFBVTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTs7QUFFM0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxJQUFJOztBQUVwQztBQUNBOztBQUVBO0FBQ0EsOEJBQThCLEdBQUc7O0FBRWpDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxRQUFRO0FBQ3ZCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLHlDQUF5QztBQUN0Rjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFFBQVE7QUFDOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RCxRQUFRO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxRQUFRO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RCxRQUFRO0FBQy9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxvQkFBb0I7QUFDNUQsT0FBTztBQUNQO0FBQ0Esd0NBQXdDLHNCQUFzQjtBQUM5RDtBQUNBLEtBQUssT0FBTztBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsU0FBUztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLFFBQVE7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxRQUFRO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsUUFBUTtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQOztBQUVBLE9BQU87QUFDUDs7QUFFQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0NBQXNDLHlCQUF5QjtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFFBQVE7QUFDaEQ7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7QUFFcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0RBQStELFFBQVE7QUFDdkU7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxjQUFjO0FBQ2xGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsS0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0QsaUVBQWlFOztBQUVySDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLG1DQUFtQzs7QUFFM0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUzs7QUFFdEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGFBQWE7QUFDekM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLElBQUk7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixJQUFJO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsUUFBUTtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0EsT0FBTyxlQUFlO0FBQ3RCO0FBQ0EsT0FBTyxhQUFhO0FBQ3BCO0FBQ0EsT0FBTywyQkFBMkI7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQzs7QUFFQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUseUJBQXlCO0FBQ25HLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELFNBQVM7QUFDMUQ7QUFDQTtBQUNBLEtBQUs7QUFDTCxpREFBaUQsU0FBUztBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsaURBQWlELFNBQVM7QUFDMUQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGlEQUFpRCxTQUFTO0FBQzFEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0EseUJBQXlCO0FBQ3pCLGdDQUFnQztBQUNoQywrQkFBK0IsYUFBYTtBQUM1QywyQkFBMkIsNEJBQTRCOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsMkNBQTJDLHdCQUF3QjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7QUFDRDs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsa0VBQWtFLCtCQUErQjtBQUNqRztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELGtCQUFrQjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSwrREFBK0Qsa0JBQWtCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQ0FBZ0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxRQUFRO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxRQUFRO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLCtDQUErQztBQUNoRSxpQkFBaUIsK0NBQStDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLCtDQUErQztBQUNoRSxpQkFBaUIsK0NBQStDO0FBQ2hFO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUzs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsUUFBUTtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxRQUFRO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4QkFBOEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseUJBQXlCO0FBQy9DLHNCQUFzQixxQ0FBcUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMEJBQTBCO0FBQ2hELHNCQUFzQix1Q0FBdUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsUUFBUTtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsUUFBUTtBQUMzRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsS0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFFBQVE7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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TywwQkFBTztBQUZoQixNQUFNLEdBQUcsR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRXRDLGtCQUFHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCIvKiFcbiogc3ZnLmpzIC0gQSBsaWdodHdlaWdodCBsaWJyYXJ5IGZvciBtYW5pcHVsYXRpbmcgYW5kIGFuaW1hdGluZyBTVkcuXG4qIEB2ZXJzaW9uIDIuNy4xXG4qIGh0dHBzOi8vc3ZnZG90anMuZ2l0aHViLmlvL1xuKlxuKiBAY29weXJpZ2h0IFdvdXQgRmllcmVucyA8d291dEBtaWNrLXdvdXQuY29tPlxuKiBAbGljZW5zZSBNSVRcbipcbiogQlVJTFQ6IEZyaSBOb3YgMzAgMjAxOCAxMDowMTo1NSBHTVQrMDEwMCAoR01UKzAxOjAwKVxuKi87XG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgZGVmaW5lKGZ1bmN0aW9uKCl7XHJcbiAgICAgIHJldHVybiBmYWN0b3J5KHJvb3QsIHJvb3QuZG9jdW1lbnQpXHJcbiAgICB9KVxyXG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHJvb3QuZG9jdW1lbnQgPyBmYWN0b3J5KHJvb3QsIHJvb3QuZG9jdW1lbnQpIDogZnVuY3Rpb24odyl7IHJldHVybiBmYWN0b3J5KHcsIHcuZG9jdW1lbnQpIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcm9vdC5TVkcgPSBmYWN0b3J5KHJvb3QsIHJvb3QuZG9jdW1lbnQpXHJcbiAgfVxyXG59KHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50KSB7XHJcblxyXG4vLyBGaW5kIGdsb2JhbCByZWZlcmVuY2UgLSB1c2VzICd0aGlzJyBieSBkZWZhdWx0IHdoZW4gYXZhaWxhYmxlLFxyXG4vLyBmYWxscyBiYWNrIHRvICd3aW5kb3cnIG90aGVyd2lzZSAoZm9yIGJ1bmRsZXJzIGxpa2UgV2VicGFjaylcclxudmFyIGdsb2JhbFJlZiA9ICh0eXBlb2YgdGhpcyAhPT0gXCJ1bmRlZmluZWRcIikgPyB0aGlzIDogd2luZG93O1xyXG5cclxuLy8gVGhlIG1haW4gd3JhcHBpbmcgZWxlbWVudFxyXG52YXIgU1ZHID0gZ2xvYmFsUmVmLlNWRyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICBpZiAoU1ZHLnN1cHBvcnRlZCkge1xyXG4gICAgZWxlbWVudCA9IG5ldyBTVkcuRG9jKGVsZW1lbnQpXHJcblxyXG4gICAgaWYoIVNWRy5wYXJzZXIuZHJhdylcclxuICAgICAgU1ZHLnByZXBhcmUoKVxyXG5cclxuICAgIHJldHVybiBlbGVtZW50XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEZWZhdWx0IG5hbWVzcGFjZXNcclxuU1ZHLm5zICAgID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5TVkcueG1sbnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy8nXHJcblNWRy54bGluayA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJ1xyXG5TVkcuc3ZnanMgPSAnaHR0cDovL3N2Z2pzLmNvbS9zdmdqcydcclxuXHJcbi8vIFN2ZyBzdXBwb3J0IHRlc3RcclxuU1ZHLnN1cHBvcnRlZCA9IChmdW5jdGlvbigpIHtcclxuICByZXR1cm4gISEgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TICYmXHJcbiAgICAgICAgICEhIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkcubnMsJ3N2ZycpLmNyZWF0ZVNWR1JlY3RcclxufSkoKVxyXG5cclxuLy8gRG9uJ3QgYm90aGVyIHRvIGNvbnRpbnVlIGlmIFNWRyBpcyBub3Qgc3VwcG9ydGVkXHJcbmlmICghU1ZHLnN1cHBvcnRlZCkgcmV0dXJuIGZhbHNlXHJcblxyXG4vLyBFbGVtZW50IGlkIHNlcXVlbmNlXHJcblNWRy5kaWQgID0gMTAwMFxyXG5cclxuLy8gR2V0IG5leHQgbmFtZWQgZWxlbWVudCBpZFxyXG5TVkcuZWlkID0gZnVuY3Rpb24obmFtZSkge1xyXG4gIHJldHVybiAnU3ZnanMnICsgY2FwaXRhbGl6ZShuYW1lKSArIChTVkcuZGlkKyspXHJcbn1cclxuXHJcbi8vIE1ldGhvZCBmb3IgZWxlbWVudCBjcmVhdGlvblxyXG5TVkcuY3JlYXRlID0gZnVuY3Rpb24obmFtZSkge1xyXG4gIC8vIGNyZWF0ZSBlbGVtZW50XHJcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlModGhpcy5ucywgbmFtZSlcclxuXHJcbiAgLy8gYXBwbHkgdW5pcXVlIGlkXHJcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5laWQobmFtZSkpXHJcblxyXG4gIHJldHVybiBlbGVtZW50XHJcbn1cclxuXHJcbi8vIE1ldGhvZCBmb3IgZXh0ZW5kaW5nIG9iamVjdHNcclxuU1ZHLmV4dGVuZCA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBtb2R1bGVzLCBtZXRob2RzLCBrZXksIGlcclxuXHJcbiAgLy8gR2V0IGxpc3Qgb2YgbW9kdWxlc1xyXG4gIG1vZHVsZXMgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcclxuXHJcbiAgLy8gR2V0IG9iamVjdCB3aXRoIGV4dGVuc2lvbnNcclxuICBtZXRob2RzID0gbW9kdWxlcy5wb3AoKVxyXG5cclxuICBmb3IgKGkgPSBtb2R1bGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG4gICAgaWYgKG1vZHVsZXNbaV0pXHJcbiAgICAgIGZvciAoa2V5IGluIG1ldGhvZHMpXHJcbiAgICAgICAgbW9kdWxlc1tpXS5wcm90b3R5cGVba2V5XSA9IG1ldGhvZHNba2V5XVxyXG5cclxuICAvLyBNYWtlIHN1cmUgU1ZHLlNldCBpbmhlcml0cyBhbnkgbmV3bHkgYWRkZWQgbWV0aG9kc1xyXG4gIGlmIChTVkcuU2V0ICYmIFNWRy5TZXQuaW5oZXJpdClcclxuICAgIFNWRy5TZXQuaW5oZXJpdCgpXHJcbn1cclxuXHJcbi8vIEludmVudCBuZXcgZWxlbWVudFxyXG5TVkcuaW52ZW50ID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcbiAgLy8gQ3JlYXRlIGVsZW1lbnQgaW5pdGlhbGl6ZXJcclxuICB2YXIgaW5pdGlhbGl6ZXIgPSB0eXBlb2YgY29uZmlnLmNyZWF0ZSA9PSAnZnVuY3Rpb24nID9cclxuICAgIGNvbmZpZy5jcmVhdGUgOlxyXG4gICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBTVkcuY3JlYXRlKGNvbmZpZy5jcmVhdGUpKVxyXG4gICAgfVxyXG5cclxuICAvLyBJbmhlcml0IHByb3RvdHlwZVxyXG4gIGlmIChjb25maWcuaW5oZXJpdClcclxuICAgIGluaXRpYWxpemVyLnByb3RvdHlwZSA9IG5ldyBjb25maWcuaW5oZXJpdFxyXG5cclxuICAvLyBFeHRlbmQgd2l0aCBtZXRob2RzXHJcbiAgaWYgKGNvbmZpZy5leHRlbmQpXHJcbiAgICBTVkcuZXh0ZW5kKGluaXRpYWxpemVyLCBjb25maWcuZXh0ZW5kKVxyXG5cclxuICAvLyBBdHRhY2ggY29uc3RydWN0IG1ldGhvZCB0byBwYXJlbnRcclxuICBpZiAoY29uZmlnLmNvbnN0cnVjdClcclxuICAgIFNWRy5leHRlbmQoY29uZmlnLnBhcmVudCB8fCBTVkcuQ29udGFpbmVyLCBjb25maWcuY29uc3RydWN0KVxyXG5cclxuICByZXR1cm4gaW5pdGlhbGl6ZXJcclxufVxyXG5cclxuLy8gQWRvcHQgZXhpc3Rpbmcgc3ZnIGVsZW1lbnRzXHJcblNWRy5hZG9wdCA9IGZ1bmN0aW9uKG5vZGUpIHtcclxuICAvLyBjaGVjayBmb3IgcHJlc2VuY2Ugb2Ygbm9kZVxyXG4gIGlmICghbm9kZSkgcmV0dXJuIG51bGxcclxuXHJcbiAgLy8gbWFrZSBzdXJlIGEgbm9kZSBpc24ndCBhbHJlYWR5IGFkb3B0ZWRcclxuICBpZiAobm9kZS5pbnN0YW5jZSkgcmV0dXJuIG5vZGUuaW5zdGFuY2VcclxuXHJcbiAgLy8gaW5pdGlhbGl6ZSB2YXJpYWJsZXNcclxuICB2YXIgZWxlbWVudFxyXG5cclxuICAvLyBhZG9wdCB3aXRoIGVsZW1lbnQtc3BlY2lmaWMgc2V0dGluZ3NcclxuICBpZiAobm9kZS5ub2RlTmFtZSA9PSAnc3ZnJylcclxuICAgIGVsZW1lbnQgPSBub2RlLnBhcmVudE5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuU1ZHRWxlbWVudCA/IG5ldyBTVkcuTmVzdGVkIDogbmV3IFNWRy5Eb2NcclxuICBlbHNlIGlmIChub2RlLm5vZGVOYW1lID09ICdsaW5lYXJHcmFkaWVudCcpXHJcbiAgICBlbGVtZW50ID0gbmV3IFNWRy5HcmFkaWVudCgnbGluZWFyJylcclxuICBlbHNlIGlmIChub2RlLm5vZGVOYW1lID09ICdyYWRpYWxHcmFkaWVudCcpXHJcbiAgICBlbGVtZW50ID0gbmV3IFNWRy5HcmFkaWVudCgncmFkaWFsJylcclxuICBlbHNlIGlmIChTVkdbY2FwaXRhbGl6ZShub2RlLm5vZGVOYW1lKV0pXHJcbiAgICBlbGVtZW50ID0gbmV3IFNWR1tjYXBpdGFsaXplKG5vZGUubm9kZU5hbWUpXVxyXG4gIGVsc2VcclxuICAgIGVsZW1lbnQgPSBuZXcgU1ZHLkVsZW1lbnQobm9kZSlcclxuXHJcbiAgLy8gZW5zdXJlIHJlZmVyZW5jZXNcclxuICBlbGVtZW50LnR5cGUgID0gbm9kZS5ub2RlTmFtZVxyXG4gIGVsZW1lbnQubm9kZSAgPSBub2RlXHJcbiAgbm9kZS5pbnN0YW5jZSA9IGVsZW1lbnRcclxuXHJcbiAgLy8gU1ZHLkNsYXNzIHNwZWNpZmljIHByZXBhcmF0aW9uc1xyXG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHLkRvYylcclxuICAgIGVsZW1lbnQubmFtZXNwYWNlKCkuZGVmcygpXHJcblxyXG4gIC8vIHB1bGwgc3ZnanMgZGF0YSBmcm9tIHRoZSBkb20gKGdldEF0dHJpYnV0ZU5TIGRvZXNuJ3Qgd29yayBpbiBodG1sNSlcclxuICBlbGVtZW50LnNldERhdGEoSlNPTi5wYXJzZShub2RlLmdldEF0dHJpYnV0ZSgnc3ZnanM6ZGF0YScpKSB8fCB7fSlcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuLy8gSW5pdGlhbGl6ZSBwYXJzaW5nIGVsZW1lbnRcclxuU1ZHLnByZXBhcmUgPSBmdW5jdGlvbigpIHtcclxuICAvLyBTZWxlY3QgZG9jdW1lbnQgYm9keSBhbmQgY3JlYXRlIGludmlzaWJsZSBzdmcgZWxlbWVudFxyXG4gIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXVxyXG4gICAgLCBkcmF3ID0gKGJvZHkgPyBuZXcgU1ZHLkRvYyhib2R5KSA6IFNWRy5hZG9wdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLm5lc3RlZCgpKS5zaXplKDIsIDApXHJcblxyXG4gIC8vIENyZWF0ZSBwYXJzZXIgb2JqZWN0XHJcbiAgU1ZHLnBhcnNlciA9IHtcclxuICAgIGJvZHk6IGJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XHJcbiAgLCBkcmF3OiBkcmF3LnN0eWxlKCdvcGFjaXR5OjA7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTAwJTt0b3A6LTEwMCU7b3ZlcmZsb3c6aGlkZGVuJykuYXR0cignZm9jdXNhYmxlJywgJ2ZhbHNlJykubm9kZVxyXG4gICwgcG9seTogZHJhdy5wb2x5bGluZSgpLm5vZGVcclxuICAsIHBhdGg6IGRyYXcucGF0aCgpLm5vZGVcclxuICAsIG5hdGl2ZTogU1ZHLmNyZWF0ZSgnc3ZnJylcclxuICB9XHJcbn1cclxuXHJcblNWRy5wYXJzZXIgPSB7XHJcbiAgbmF0aXZlOiBTVkcuY3JlYXRlKCdzdmcnKVxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgaWYoIVNWRy5wYXJzZXIuZHJhdylcclxuICAgIFNWRy5wcmVwYXJlKClcclxufSwgZmFsc2UpXHJcblxuLy8gU3RvcmFnZSBmb3IgcmVndWxhciBleHByZXNzaW9uc1xyXG5TVkcucmVnZXggPSB7XHJcbiAgLy8gUGFyc2UgdW5pdCB2YWx1ZVxyXG4gIG51bWJlckFuZFVuaXQ6ICAgIC9eKFsrLV0/KFxcZCsoXFwuXFxkKik/fFxcLlxcZCspKGVbKy1dP1xcZCspPykoW2EteiVdKikkL2lcclxuXHJcbiAgLy8gUGFyc2UgaGV4IHZhbHVlXHJcbiwgaGV4OiAgICAgICAgICAgICAgL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaVxyXG5cclxuICAvLyBQYXJzZSByZ2IgdmFsdWVcclxuLCByZ2I6ICAgICAgICAgICAgICAvcmdiXFwoKFxcZCspLChcXGQrKSwoXFxkKylcXCkvXHJcblxyXG4gIC8vIFBhcnNlIHJlZmVyZW5jZSBpZFxyXG4sIHJlZmVyZW5jZTogICAgICAgIC8jKFthLXowLTlcXC1fXSspL2lcclxuXHJcbiAgLy8gc3BsaXRzIGEgdHJhbnNmb3JtYXRpb24gY2hhaW5cclxuLCB0cmFuc2Zvcm1zOiAgICAgICAvXFwpXFxzKiw/XFxzKi9cclxuXHJcbiAgLy8gV2hpdGVzcGFjZVxyXG4sIHdoaXRlc3BhY2U6ICAgICAgIC9cXHMvZ1xyXG5cclxuICAvLyBUZXN0IGhleCB2YWx1ZVxyXG4sIGlzSGV4OiAgICAgICAgICAgIC9eI1thLWYwLTldezMsNn0kL2lcclxuXHJcbiAgLy8gVGVzdCByZ2IgdmFsdWVcclxuLCBpc1JnYjogICAgICAgICAgICAvXnJnYlxcKC9cclxuXHJcbiAgLy8gVGVzdCBjc3MgZGVjbGFyYXRpb25cclxuLCBpc0NzczogICAgICAgICAgICAvW146XSs6W147XSs7Py9cclxuXHJcbiAgLy8gVGVzdCBmb3IgYmxhbmsgc3RyaW5nXHJcbiwgaXNCbGFuazogICAgICAgICAgL14oXFxzKyk/JC9cclxuXHJcbiAgLy8gVGVzdCBmb3IgbnVtZXJpYyBzdHJpbmdcclxuLCBpc051bWJlcjogICAgICAgICAvXlsrLV0/KFxcZCsoXFwuXFxkKik/fFxcLlxcZCspKGVbKy1dP1xcZCspPyQvaVxyXG5cclxuICAvLyBUZXN0IGZvciBwZXJjZW50IHZhbHVlXHJcbiwgaXNQZXJjZW50OiAgICAgICAgL14tP1tcXGRcXC5dKyUkL1xyXG5cclxuICAvLyBUZXN0IGZvciBpbWFnZSB1cmxcclxuLCBpc0ltYWdlOiAgICAgICAgICAvXFwuKGpwZ3xqcGVnfHBuZ3xnaWZ8c3ZnKShcXD9bXj1dKy4qKT8vaVxyXG5cclxuICAvLyBzcGxpdCBhdCB3aGl0ZXNwYWNlIGFuZCBjb21tYVxyXG4sIGRlbGltaXRlcjogICAgICAgIC9bXFxzLF0rL1xyXG5cclxuICAvLyBUaGUgZm9sbG93aW5nIHJlZ2V4IGFyZSB1c2VkIHRvIHBhcnNlIHRoZSBkIGF0dHJpYnV0ZSBvZiBhIHBhdGhcclxuXHJcbiAgLy8gTWF0Y2hlcyBhbGwgaHlwaGVucyB3aGljaCBhcmUgbm90IGFmdGVyIGFuIGV4cG9uZW50XHJcbiwgaHlwaGVuOiAgICAgICAgICAgLyhbXmVdKVxcLS9naVxyXG5cclxuICAvLyBSZXBsYWNlcyBhbmQgdGVzdHMgZm9yIGFsbCBwYXRoIGxldHRlcnNcclxuLCBwYXRoTGV0dGVyczogICAgICAvW01MSFZDU1FUQVpdL2dpXHJcblxyXG4gIC8vIHllcyB3ZSBuZWVkIHRoaXMgb25lLCB0b29cclxuLCBpc1BhdGhMZXR0ZXI6ICAgICAvW01MSFZDU1FUQVpdL2lcclxuXHJcbiAgLy8gbWF0Y2hlcyAwLjE1NC4yMy40NVxyXG4sIG51bWJlcnNXaXRoRG90czogIC8oKFxcZD9cXC5cXGQrKD86ZVsrLV0/XFxkKyk/KSgoPzpcXC5cXGQrKD86ZVsrLV0/XFxkKyk/KSspKSsvZ2lcclxuXHJcbiAgLy8gbWF0Y2hlcyAuXHJcbiwgZG90czogICAgICAgICAgICAgL1xcLi9nXHJcbn1cclxuXG5TVkcudXRpbHMgPSB7XHJcbiAgLy8gTWFwIGZ1bmN0aW9uXHJcbiAgbWFwOiBmdW5jdGlvbihhcnJheSwgYmxvY2spIHtcclxuICAgIHZhciBpXHJcbiAgICAgICwgaWwgPSBhcnJheS5sZW5ndGhcclxuICAgICAgLCByZXN1bHQgPSBbXVxyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICByZXN1bHQucHVzaChibG9jayhhcnJheVtpXSkpXHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxuXHJcbiAgLy8gRmlsdGVyIGZ1bmN0aW9uXHJcbiwgZmlsdGVyOiBmdW5jdGlvbihhcnJheSwgYmxvY2spIHtcclxuICAgIHZhciBpXHJcbiAgICAgICwgaWwgPSBhcnJheS5sZW5ndGhcclxuICAgICAgLCByZXN1bHQgPSBbXVxyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICBpZiAoYmxvY2soYXJyYXlbaV0pKVxyXG4gICAgICAgIHJlc3VsdC5wdXNoKGFycmF5W2ldKVxyXG5cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9XHJcblxyXG4gIC8vIERlZ3JlZXMgdG8gcmFkaWFuc1xyXG4sIHJhZGlhbnM6IGZ1bmN0aW9uKGQpIHtcclxuICAgIHJldHVybiBkICUgMzYwICogTWF0aC5QSSAvIDE4MFxyXG4gIH1cclxuXHJcbiAgLy8gUmFkaWFucyB0byBkZWdyZWVzXHJcbiwgZGVncmVlczogZnVuY3Rpb24ocikge1xyXG4gICAgcmV0dXJuIHIgKiAxODAgLyBNYXRoLlBJICUgMzYwXHJcbiAgfVxyXG5cclxuLCBmaWx0ZXJTVkdFbGVtZW50czogZnVuY3Rpb24obm9kZXMpIHtcclxuICAgIHJldHVybiB0aGlzLmZpbHRlciggbm9kZXMsIGZ1bmN0aW9uKGVsKSB7IHJldHVybiBlbCBpbnN0YW5jZW9mIHdpbmRvdy5TVkdFbGVtZW50IH0pXHJcbiAgfVxyXG5cclxufVxuXHJcblNWRy5kZWZhdWx0cyA9IHtcclxuICAvLyBEZWZhdWx0IGF0dHJpYnV0ZSB2YWx1ZXNcclxuICBhdHRyczoge1xyXG4gICAgLy8gZmlsbCBhbmQgc3Ryb2tlXHJcbiAgICAnZmlsbC1vcGFjaXR5JzogICAgIDFcclxuICAsICdzdHJva2Utb3BhY2l0eSc6ICAgMVxyXG4gICwgJ3N0cm9rZS13aWR0aCc6ICAgICAwXHJcbiAgLCAnc3Ryb2tlLWxpbmVqb2luJzogICdtaXRlcidcclxuICAsICdzdHJva2UtbGluZWNhcCc6ICAgJ2J1dHQnXHJcbiAgLCBmaWxsOiAgICAgICAgICAgICAgICcjMDAwMDAwJ1xyXG4gICwgc3Ryb2tlOiAgICAgICAgICAgICAnIzAwMDAwMCdcclxuICAsIG9wYWNpdHk6ICAgICAgICAgICAgMVxyXG4gICAgLy8gcG9zaXRpb25cclxuICAsIHg6ICAgICAgICAgICAgICAgICAgMFxyXG4gICwgeTogICAgICAgICAgICAgICAgICAwXHJcbiAgLCBjeDogICAgICAgICAgICAgICAgIDBcclxuICAsIGN5OiAgICAgICAgICAgICAgICAgMFxyXG4gICAgLy8gc2l6ZVxyXG4gICwgd2lkdGg6ICAgICAgICAgICAgICAwXHJcbiAgLCBoZWlnaHQ6ICAgICAgICAgICAgIDBcclxuICAgIC8vIHJhZGl1c1xyXG4gICwgcjogICAgICAgICAgICAgICAgICAwXHJcbiAgLCByeDogICAgICAgICAgICAgICAgIDBcclxuICAsIHJ5OiAgICAgICAgICAgICAgICAgMFxyXG4gICAgLy8gZ3JhZGllbnRcclxuICAsIG9mZnNldDogICAgICAgICAgICAgMFxyXG4gICwgJ3N0b3Atb3BhY2l0eSc6ICAgICAxXHJcbiAgLCAnc3RvcC1jb2xvcic6ICAgICAgICcjMDAwMDAwJ1xyXG4gICAgLy8gdGV4dFxyXG4gICwgJ2ZvbnQtc2l6ZSc6ICAgICAgICAxNlxyXG4gICwgJ2ZvbnQtZmFtaWx5JzogICAgICAnSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZidcclxuICAsICd0ZXh0LWFuY2hvcic6ICAgICAgJ3N0YXJ0J1xyXG4gIH1cclxuXHJcbn1cbi8vIE1vZHVsZSBmb3IgY29sb3IgY29udmVydGlvbnNcclxuU1ZHLkNvbG9yID0gZnVuY3Rpb24oY29sb3IpIHtcclxuICB2YXIgbWF0Y2hcclxuXHJcbiAgLy8gaW5pdGlhbGl6ZSBkZWZhdWx0c1xyXG4gIHRoaXMuciA9IDBcclxuICB0aGlzLmcgPSAwXHJcbiAgdGhpcy5iID0gMFxyXG5cclxuICBpZighY29sb3IpIHJldHVyblxyXG5cclxuICAvLyBwYXJzZSBjb2xvclxyXG4gIGlmICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnKSB7XHJcbiAgICBpZiAoU1ZHLnJlZ2V4LmlzUmdiLnRlc3QoY29sb3IpKSB7XHJcbiAgICAgIC8vIGdldCByZ2IgdmFsdWVzXHJcbiAgICAgIG1hdGNoID0gU1ZHLnJlZ2V4LnJnYi5leGVjKGNvbG9yLnJlcGxhY2UoU1ZHLnJlZ2V4LndoaXRlc3BhY2UsJycpKVxyXG5cclxuICAgICAgLy8gcGFyc2UgbnVtZXJpYyB2YWx1ZXNcclxuICAgICAgdGhpcy5yID0gcGFyc2VJbnQobWF0Y2hbMV0pXHJcbiAgICAgIHRoaXMuZyA9IHBhcnNlSW50KG1hdGNoWzJdKVxyXG4gICAgICB0aGlzLmIgPSBwYXJzZUludChtYXRjaFszXSlcclxuXHJcbiAgICB9IGVsc2UgaWYgKFNWRy5yZWdleC5pc0hleC50ZXN0KGNvbG9yKSkge1xyXG4gICAgICAvLyBnZXQgaGV4IHZhbHVlc1xyXG4gICAgICBtYXRjaCA9IFNWRy5yZWdleC5oZXguZXhlYyhmdWxsSGV4KGNvbG9yKSlcclxuXHJcbiAgICAgIC8vIHBhcnNlIG51bWVyaWMgdmFsdWVzXHJcbiAgICAgIHRoaXMuciA9IHBhcnNlSW50KG1hdGNoWzFdLCAxNilcclxuICAgICAgdGhpcy5nID0gcGFyc2VJbnQobWF0Y2hbMl0sIDE2KVxyXG4gICAgICB0aGlzLmIgPSBwYXJzZUludChtYXRjaFszXSwgMTYpXHJcblxyXG4gICAgfVxyXG5cclxuICB9IGVsc2UgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ29iamVjdCcpIHtcclxuICAgIHRoaXMuciA9IGNvbG9yLnJcclxuICAgIHRoaXMuZyA9IGNvbG9yLmdcclxuICAgIHRoaXMuYiA9IGNvbG9yLmJcclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuQ29sb3IsIHtcclxuICAvLyBEZWZhdWx0IHRvIGhleCBjb252ZXJzaW9uXHJcbiAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9IZXgoKVxyXG4gIH1cclxuICAvLyBCdWlsZCBoZXggdmFsdWVcclxuLCB0b0hleDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gJyMnXHJcbiAgICAgICsgY29tcFRvSGV4KHRoaXMucilcclxuICAgICAgKyBjb21wVG9IZXgodGhpcy5nKVxyXG4gICAgICArIGNvbXBUb0hleCh0aGlzLmIpXHJcbiAgfVxyXG4gIC8vIEJ1aWxkIHJnYiB2YWx1ZVxyXG4sIHRvUmdiOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAncmdiKCcgKyBbdGhpcy5yLCB0aGlzLmcsIHRoaXMuYl0uam9pbigpICsgJyknXHJcbiAgfVxyXG4gIC8vIENhbGN1bGF0ZSB0cnVlIGJyaWdodG5lc3NcclxuLCBicmlnaHRuZXNzOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAodGhpcy5yIC8gMjU1ICogMC4zMClcclxuICAgICAgICAgKyAodGhpcy5nIC8gMjU1ICogMC41OSlcclxuICAgICAgICAgKyAodGhpcy5iIC8gMjU1ICogMC4xMSlcclxuICB9XHJcbiAgLy8gTWFrZSBjb2xvciBtb3JwaGFibGVcclxuLCBtb3JwaDogZnVuY3Rpb24oY29sb3IpIHtcclxuICAgIHRoaXMuZGVzdGluYXRpb24gPSBuZXcgU1ZHLkNvbG9yKGNvbG9yKVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIC8vIEdldCBtb3JwaGVkIGNvbG9yIGF0IGdpdmVuIHBvc2l0aW9uXHJcbiwgYXQ6IGZ1bmN0aW9uKHBvcykge1xyXG4gICAgLy8gbWFrZSBzdXJlIGEgZGVzdGluYXRpb24gaXMgZGVmaW5lZFxyXG4gICAgaWYgKCF0aGlzLmRlc3RpbmF0aW9uKSByZXR1cm4gdGhpc1xyXG5cclxuICAgIC8vIG5vcm1hbGlzZSBwb3NcclxuICAgIHBvcyA9IHBvcyA8IDAgPyAwIDogcG9zID4gMSA/IDEgOiBwb3NcclxuXHJcbiAgICAvLyBnZW5lcmF0ZSBtb3JwaGVkIGNvbG9yXHJcbiAgICByZXR1cm4gbmV3IFNWRy5Db2xvcih7XHJcbiAgICAgIHI6IH5+KHRoaXMuciArICh0aGlzLmRlc3RpbmF0aW9uLnIgLSB0aGlzLnIpICogcG9zKVxyXG4gICAgLCBnOiB+fih0aGlzLmcgKyAodGhpcy5kZXN0aW5hdGlvbi5nIC0gdGhpcy5nKSAqIHBvcylcclxuICAgICwgYjogfn4odGhpcy5iICsgKHRoaXMuZGVzdGluYXRpb24uYiAtIHRoaXMuYikgKiBwb3MpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbn0pXHJcblxyXG4vLyBUZXN0ZXJzXHJcblxyXG4vLyBUZXN0IGlmIGdpdmVuIHZhbHVlIGlzIGEgY29sb3Igc3RyaW5nXHJcblNWRy5Db2xvci50ZXN0ID0gZnVuY3Rpb24oY29sb3IpIHtcclxuICBjb2xvciArPSAnJ1xyXG4gIHJldHVybiBTVkcucmVnZXguaXNIZXgudGVzdChjb2xvcilcclxuICAgICAgfHwgU1ZHLnJlZ2V4LmlzUmdiLnRlc3QoY29sb3IpXHJcbn1cclxuXHJcbi8vIFRlc3QgaWYgZ2l2ZW4gdmFsdWUgaXMgYSByZ2Igb2JqZWN0XHJcblNWRy5Db2xvci5pc1JnYiA9IGZ1bmN0aW9uKGNvbG9yKSB7XHJcbiAgcmV0dXJuIGNvbG9yICYmIHR5cGVvZiBjb2xvci5yID09ICdudW1iZXInXHJcbiAgICAgICAgICAgICAgICYmIHR5cGVvZiBjb2xvci5nID09ICdudW1iZXInXHJcbiAgICAgICAgICAgICAgICYmIHR5cGVvZiBjb2xvci5iID09ICdudW1iZXInXHJcbn1cclxuXHJcbi8vIFRlc3QgaWYgZ2l2ZW4gdmFsdWUgaXMgYSBjb2xvclxyXG5TVkcuQ29sb3IuaXNDb2xvciA9IGZ1bmN0aW9uKGNvbG9yKSB7XHJcbiAgcmV0dXJuIFNWRy5Db2xvci5pc1JnYihjb2xvcikgfHwgU1ZHLkNvbG9yLnRlc3QoY29sb3IpXHJcbn1cbi8vIE1vZHVsZSBmb3IgYXJyYXkgY29udmVyc2lvblxyXG5TVkcuQXJyYXkgPSBmdW5jdGlvbihhcnJheSwgZmFsbGJhY2spIHtcclxuICBhcnJheSA9IChhcnJheSB8fCBbXSkudmFsdWVPZigpXHJcblxyXG4gIC8vIGlmIGFycmF5IGlzIGVtcHR5IGFuZCBmYWxsYmFjayBpcyBwcm92aWRlZCwgdXNlIGZhbGxiYWNrXHJcbiAgaWYgKGFycmF5Lmxlbmd0aCA9PSAwICYmIGZhbGxiYWNrKVxyXG4gICAgYXJyYXkgPSBmYWxsYmFjay52YWx1ZU9mKClcclxuXHJcbiAgLy8gcGFyc2UgYXJyYXlcclxuICB0aGlzLnZhbHVlID0gdGhpcy5wYXJzZShhcnJheSlcclxufVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuQXJyYXksIHtcclxuICAvLyBNYWtlIGFycmF5IG1vcnBoYWJsZVxyXG4gIG1vcnBoOiBmdW5jdGlvbihhcnJheSkge1xyXG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IHRoaXMucGFyc2UoYXJyYXkpXHJcblxyXG4gICAgLy8gbm9ybWFsaXplIGxlbmd0aCBvZiBhcnJheXNcclxuICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCAhPSB0aGlzLmRlc3RpbmF0aW9uLmxlbmd0aCkge1xyXG4gICAgICB2YXIgbGFzdFZhbHVlICAgICAgID0gdGhpcy52YWx1ZVt0aGlzLnZhbHVlLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgLCBsYXN0RGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uW3RoaXMuZGVzdGluYXRpb24ubGVuZ3RoIC0gMV1cclxuXHJcbiAgICAgIHdoaWxlKHRoaXMudmFsdWUubGVuZ3RoID4gdGhpcy5kZXN0aW5hdGlvbi5sZW5ndGgpXHJcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5wdXNoKGxhc3REZXN0aW5hdGlvbilcclxuICAgICAgd2hpbGUodGhpcy52YWx1ZS5sZW5ndGggPCB0aGlzLmRlc3RpbmF0aW9uLmxlbmd0aClcclxuICAgICAgICB0aGlzLnZhbHVlLnB1c2gobGFzdFZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIC8vIENsZWFuIHVwIGFueSBkdXBsaWNhdGUgcG9pbnRzXHJcbiwgc2V0dGxlOiBmdW5jdGlvbigpIHtcclxuICAgIC8vIGZpbmQgYWxsIHVuaXF1ZSB2YWx1ZXNcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IHRoaXMudmFsdWUubGVuZ3RoLCBzZWVuID0gW107IGkgPCBpbDsgaSsrKVxyXG4gICAgICBpZiAoc2Vlbi5pbmRleE9mKHRoaXMudmFsdWVbaV0pID09IC0xKVxyXG4gICAgICAgIHNlZW4ucHVzaCh0aGlzLnZhbHVlW2ldKVxyXG5cclxuICAgIC8vIHNldCBuZXcgdmFsdWVcclxuICAgIHJldHVybiB0aGlzLnZhbHVlID0gc2VlblxyXG4gIH1cclxuICAvLyBHZXQgbW9ycGhlZCBhcnJheSBhdCBnaXZlbiBwb3NpdGlvblxyXG4sIGF0OiBmdW5jdGlvbihwb3MpIHtcclxuICAgIC8vIG1ha2Ugc3VyZSBhIGRlc3RpbmF0aW9uIGlzIGRlZmluZWRcclxuICAgIGlmICghdGhpcy5kZXN0aW5hdGlvbikgcmV0dXJuIHRoaXNcclxuXHJcbiAgICAvLyBnZW5lcmF0ZSBtb3JwaGVkIGFycmF5XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSB0aGlzLnZhbHVlLmxlbmd0aCwgYXJyYXkgPSBbXTsgaSA8IGlsOyBpKyspXHJcbiAgICAgIGFycmF5LnB1c2godGhpcy52YWx1ZVtpXSArICh0aGlzLmRlc3RpbmF0aW9uW2ldIC0gdGhpcy52YWx1ZVtpXSkgKiBwb3MpXHJcblxyXG4gICAgcmV0dXJuIG5ldyBTVkcuQXJyYXkoYXJyYXkpXHJcbiAgfVxyXG4gIC8vIENvbnZlcnQgYXJyYXkgdG8gc3RyaW5nXHJcbiwgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUuam9pbignICcpXHJcbiAgfVxyXG4gIC8vIFJlYWwgdmFsdWVcclxuLCB2YWx1ZU9mOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlXHJcbiAgfVxyXG4gIC8vIFBhcnNlIHdoaXRlc3BhY2Ugc2VwYXJhdGVkIHN0cmluZ1xyXG4sIHBhcnNlOiBmdW5jdGlvbihhcnJheSkge1xyXG4gICAgYXJyYXkgPSBhcnJheS52YWx1ZU9mKClcclxuXHJcbiAgICAvLyBpZiBhbHJlYWR5IGlzIGFuIGFycmF5LCBubyBuZWVkIHRvIHBhcnNlIGl0XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnJheSkpIHJldHVybiBhcnJheVxyXG5cclxuICAgIHJldHVybiB0aGlzLnNwbGl0KGFycmF5KVxyXG4gIH1cclxuICAvLyBTdHJpcCB1bm5lY2Vzc2FyeSB3aGl0ZXNwYWNlXHJcbiwgc3BsaXQ6IGZ1bmN0aW9uKHN0cmluZykge1xyXG4gICAgcmV0dXJuIHN0cmluZy50cmltKCkuc3BsaXQoU1ZHLnJlZ2V4LmRlbGltaXRlcikubWFwKHBhcnNlRmxvYXQpXHJcbiAgfVxyXG4gIC8vIFJldmVyc2UgYXJyYXlcclxuLCByZXZlcnNlOiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMudmFsdWUucmV2ZXJzZSgpXHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiwgY2xvbmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNsb25lID0gbmV3IHRoaXMuY29uc3RydWN0b3IoKVxyXG4gICAgY2xvbmUudmFsdWUgPSBhcnJheV9jbG9uZSh0aGlzLnZhbHVlKVxyXG4gICAgcmV0dXJuIGNsb25lXHJcbiAgfVxyXG59KVxuLy8gUG9seSBwb2ludHMgYXJyYXlcclxuU1ZHLlBvaW50QXJyYXkgPSBmdW5jdGlvbihhcnJheSwgZmFsbGJhY2spIHtcclxuICBTVkcuQXJyYXkuY2FsbCh0aGlzLCBhcnJheSwgZmFsbGJhY2sgfHwgW1swLDBdXSlcclxufVxyXG5cclxuLy8gSW5oZXJpdCBmcm9tIFNWRy5BcnJheVxyXG5TVkcuUG9pbnRBcnJheS5wcm90b3R5cGUgPSBuZXcgU1ZHLkFycmF5XHJcblNWRy5Qb2ludEFycmF5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNWRy5Qb2ludEFycmF5XHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5Qb2ludEFycmF5LCB7XHJcbiAgLy8gQ29udmVydCBhcnJheSB0byBzdHJpbmdcclxuICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBjb252ZXJ0IHRvIGEgcG9seSBwb2ludCBzdHJpbmdcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IHRoaXMudmFsdWUubGVuZ3RoLCBhcnJheSA9IFtdOyBpIDwgaWw7IGkrKylcclxuICAgICAgYXJyYXkucHVzaCh0aGlzLnZhbHVlW2ldLmpvaW4oJywnKSlcclxuXHJcbiAgICByZXR1cm4gYXJyYXkuam9pbignICcpXHJcbiAgfVxyXG4gIC8vIENvbnZlcnQgYXJyYXkgdG8gbGluZSBvYmplY3RcclxuLCB0b0xpbmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeDE6IHRoaXMudmFsdWVbMF1bMF1cclxuICAgICwgeTE6IHRoaXMudmFsdWVbMF1bMV1cclxuICAgICwgeDI6IHRoaXMudmFsdWVbMV1bMF1cclxuICAgICwgeTI6IHRoaXMudmFsdWVbMV1bMV1cclxuICAgIH1cclxuICB9XHJcbiAgLy8gR2V0IG1vcnBoZWQgYXJyYXkgYXQgZ2l2ZW4gcG9zaXRpb25cclxuLCBhdDogZnVuY3Rpb24ocG9zKSB7XHJcbiAgICAvLyBtYWtlIHN1cmUgYSBkZXN0aW5hdGlvbiBpcyBkZWZpbmVkXHJcbiAgICBpZiAoIXRoaXMuZGVzdGluYXRpb24pIHJldHVybiB0aGlzXHJcblxyXG4gICAgLy8gZ2VuZXJhdGUgbW9ycGhlZCBwb2ludCBzdHJpbmdcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IHRoaXMudmFsdWUubGVuZ3RoLCBhcnJheSA9IFtdOyBpIDwgaWw7IGkrKylcclxuICAgICAgYXJyYXkucHVzaChbXHJcbiAgICAgICAgdGhpcy52YWx1ZVtpXVswXSArICh0aGlzLmRlc3RpbmF0aW9uW2ldWzBdIC0gdGhpcy52YWx1ZVtpXVswXSkgKiBwb3NcclxuICAgICAgLCB0aGlzLnZhbHVlW2ldWzFdICsgKHRoaXMuZGVzdGluYXRpb25baV1bMV0gLSB0aGlzLnZhbHVlW2ldWzFdKSAqIHBvc1xyXG4gICAgICBdKVxyXG5cclxuICAgIHJldHVybiBuZXcgU1ZHLlBvaW50QXJyYXkoYXJyYXkpXHJcbiAgfVxyXG4gIC8vIFBhcnNlIHBvaW50IHN0cmluZyBhbmQgZmxhdCBhcnJheVxyXG4sIHBhcnNlOiBmdW5jdGlvbihhcnJheSkge1xyXG4gICAgdmFyIHBvaW50cyA9IFtdXHJcblxyXG4gICAgYXJyYXkgPSBhcnJheS52YWx1ZU9mKClcclxuXHJcbiAgICAvLyBpZiBpdCBpcyBhbiBhcnJheVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgIC8vIGFuZCBpdCBpcyBub3QgZmxhdCwgdGhlcmUgaXMgbm8gbmVlZCB0byBwYXJzZSBpdFxyXG4gICAgICBpZihBcnJheS5pc0FycmF5KGFycmF5WzBdKSkge1xyXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byB1c2UgYSBjbG9uZVxyXG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5zbGljZSgpIH0pXHJcbiAgICAgIH0gZWxzZSBpZiAoYXJyYXlbMF0ueCAhPSBudWxsKXtcclxuICAgICAgICAvLyBhbGxvdyBwb2ludCBvYmplY3RzIHRvIGJlIHBhc3NlZFxyXG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBbZWwueCwgZWwueV0gfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHsgLy8gRWxzZSwgaXQgaXMgY29uc2lkZXJlZCBhcyBhIHN0cmluZ1xyXG4gICAgICAvLyBwYXJzZSBwb2ludHNcclxuICAgICAgYXJyYXkgPSBhcnJheS50cmltKCkuc3BsaXQoU1ZHLnJlZ2V4LmRlbGltaXRlcikubWFwKHBhcnNlRmxvYXQpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdmFsaWRhdGUgcG9pbnRzIC0gaHR0cHM6Ly9zdmd3Zy5vcmcvc3ZnMi1kcmFmdC9zaGFwZXMuaHRtbCNEYXRhVHlwZVBvaW50c1xyXG4gICAgLy8gT2RkIG51bWJlciBvZiBjb29yZGluYXRlcyBpcyBhbiBlcnJvci4gSW4gc3VjaCBjYXNlcywgZHJvcCB0aGUgbGFzdCBvZGQgY29vcmRpbmF0ZS5cclxuICAgIGlmIChhcnJheS5sZW5ndGggJSAyICE9PSAwKSBhcnJheS5wb3AoKVxyXG5cclxuICAgIC8vIHdyYXAgcG9pbnRzIGluIHR3by10dXBsZXMgYW5kIHBhcnNlIHBvaW50cyBhcyBmbG9hdHNcclxuICAgIGZvcih2YXIgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSA9IGkgKyAyKVxyXG4gICAgICBwb2ludHMucHVzaChbIGFycmF5W2ldLCBhcnJheVtpKzFdIF0pXHJcblxyXG4gICAgcmV0dXJuIHBvaW50c1xyXG4gIH1cclxuICAvLyBNb3ZlIHBvaW50IHN0cmluZ1xyXG4sIG1vdmU6IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgIHZhciBib3ggPSB0aGlzLmJib3goKVxyXG5cclxuICAgIC8vIGdldCByZWxhdGl2ZSBvZmZzZXRcclxuICAgIHggLT0gYm94LnhcclxuICAgIHkgLT0gYm94LnlcclxuXHJcbiAgICAvLyBtb3ZlIGV2ZXJ5IHBvaW50XHJcbiAgICBpZiAoIWlzTmFOKHgpICYmICFpc05hTih5KSlcclxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudmFsdWUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcbiAgICAgICAgdGhpcy52YWx1ZVtpXSA9IFt0aGlzLnZhbHVlW2ldWzBdICsgeCwgdGhpcy52YWx1ZVtpXVsxXSArIHldXHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgLy8gUmVzaXplIHBvbHkgc3RyaW5nXHJcbiwgc2l6ZTogZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xyXG4gICAgdmFyIGksIGJveCA9IHRoaXMuYmJveCgpXHJcblxyXG4gICAgLy8gcmVjYWxjdWxhdGUgcG9zaXRpb24gb2YgYWxsIHBvaW50cyBhY2NvcmRpbmcgdG8gbmV3IHNpemVcclxuICAgIGZvciAoaSA9IHRoaXMudmFsdWUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgaWYoYm94LndpZHRoKSB0aGlzLnZhbHVlW2ldWzBdID0gKCh0aGlzLnZhbHVlW2ldWzBdIC0gYm94LngpICogd2lkdGgpICAvIGJveC53aWR0aCAgKyBib3gueFxyXG4gICAgICBpZihib3guaGVpZ2h0KSB0aGlzLnZhbHVlW2ldWzFdID0gKCh0aGlzLnZhbHVlW2ldWzFdIC0gYm94LnkpICogaGVpZ2h0KSAvIGJveC5oZWlnaHQgKyBib3gueVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIC8vIEdldCBib3VuZGluZyBib3ggb2YgcG9pbnRzXHJcbiwgYmJveDogZnVuY3Rpb24oKSB7XHJcbiAgICBTVkcucGFyc2VyLnBvbHkuc2V0QXR0cmlidXRlKCdwb2ludHMnLCB0aGlzLnRvU3RyaW5nKCkpXHJcblxyXG4gICAgcmV0dXJuIFNWRy5wYXJzZXIucG9seS5nZXRCQm94KClcclxuICB9XHJcbn0pXHJcblxudmFyIHBhdGhIYW5kbGVycyA9IHtcclxuICBNOiBmdW5jdGlvbihjLCBwLCBwMCkge1xyXG4gICAgcC54ID0gcDAueCA9IGNbMF1cclxuICAgIHAueSA9IHAwLnkgPSBjWzFdXHJcblxyXG4gICAgcmV0dXJuIFsnTScsIHAueCwgcC55XVxyXG4gIH0sXHJcbiAgTDogZnVuY3Rpb24oYywgcCkge1xyXG4gICAgcC54ID0gY1swXVxyXG4gICAgcC55ID0gY1sxXVxyXG4gICAgcmV0dXJuIFsnTCcsIGNbMF0sIGNbMV1dXHJcbiAgfSxcclxuICBIOiBmdW5jdGlvbihjLCBwKSB7XHJcbiAgICBwLnggPSBjWzBdXHJcbiAgICByZXR1cm4gWydIJywgY1swXV1cclxuICB9LFxyXG4gIFY6IGZ1bmN0aW9uKGMsIHApIHtcclxuICAgIHAueSA9IGNbMF1cclxuICAgIHJldHVybiBbJ1YnLCBjWzBdXVxyXG4gIH0sXHJcbiAgQzogZnVuY3Rpb24oYywgcCkge1xyXG4gICAgcC54ID0gY1s0XVxyXG4gICAgcC55ID0gY1s1XVxyXG4gICAgcmV0dXJuIFsnQycsIGNbMF0sIGNbMV0sIGNbMl0sIGNbM10sIGNbNF0sIGNbNV1dXHJcbiAgfSxcclxuICBTOiBmdW5jdGlvbihjLCBwKSB7XHJcbiAgICBwLnggPSBjWzJdXHJcbiAgICBwLnkgPSBjWzNdXHJcbiAgICByZXR1cm4gWydTJywgY1swXSwgY1sxXSwgY1syXSwgY1szXV1cclxuICB9LFxyXG4gIFE6IGZ1bmN0aW9uKGMsIHApIHtcclxuICAgIHAueCA9IGNbMl1cclxuICAgIHAueSA9IGNbM11cclxuICAgIHJldHVybiBbJ1EnLCBjWzBdLCBjWzFdLCBjWzJdLCBjWzNdXVxyXG4gIH0sXHJcbiAgVDogZnVuY3Rpb24oYywgcCkge1xyXG4gICAgcC54ID0gY1swXVxyXG4gICAgcC55ID0gY1sxXVxyXG4gICAgcmV0dXJuIFsnVCcsIGNbMF0sIGNbMV1dXHJcbiAgfSxcclxuICBaOiBmdW5jdGlvbihjLCBwLCBwMCkge1xyXG4gICAgcC54ID0gcDAueFxyXG4gICAgcC55ID0gcDAueVxyXG4gICAgcmV0dXJuIFsnWiddXHJcbiAgfSxcclxuICBBOiBmdW5jdGlvbihjLCBwKSB7XHJcbiAgICBwLnggPSBjWzVdXHJcbiAgICBwLnkgPSBjWzZdXHJcbiAgICByZXR1cm4gWydBJywgY1swXSwgY1sxXSwgY1syXSwgY1szXSwgY1s0XSwgY1s1XSwgY1s2XV1cclxuICB9XHJcbn1cclxuXHJcbnZhciBtbGh2cXRjc2EgPSAnbWxodnF0Y3Nheicuc3BsaXQoJycpXHJcblxyXG5mb3IodmFyIGkgPSAwLCBpbCA9IG1saHZxdGNzYS5sZW5ndGg7IGkgPCBpbDsgKytpKXtcclxuICBwYXRoSGFuZGxlcnNbbWxodnF0Y3NhW2ldXSA9IChmdW5jdGlvbihpKXtcclxuICAgIHJldHVybiBmdW5jdGlvbihjLCBwLCBwMCkge1xyXG4gICAgICBpZihpID09ICdIJykgY1swXSA9IGNbMF0gKyBwLnhcclxuICAgICAgZWxzZSBpZihpID09ICdWJykgY1swXSA9IGNbMF0gKyBwLnlcclxuICAgICAgZWxzZSBpZihpID09ICdBJyl7XHJcbiAgICAgICAgY1s1XSA9IGNbNV0gKyBwLngsXHJcbiAgICAgICAgY1s2XSA9IGNbNl0gKyBwLnlcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgZm9yKHZhciBqID0gMCwgamwgPSBjLmxlbmd0aDsgaiA8IGpsOyArK2opIHtcclxuICAgICAgICAgIGNbal0gPSBjW2pdICsgKGolMiA/IHAueSA6IHAueClcclxuICAgICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcGF0aEhhbmRsZXJzW2ldKGMsIHAsIHAwKVxyXG4gICAgfVxyXG4gIH0pKG1saHZxdGNzYVtpXS50b1VwcGVyQ2FzZSgpKVxyXG59XHJcblxyXG4vLyBQYXRoIHBvaW50cyBhcnJheVxyXG5TVkcuUGF0aEFycmF5ID0gZnVuY3Rpb24oYXJyYXksIGZhbGxiYWNrKSB7XHJcbiAgU1ZHLkFycmF5LmNhbGwodGhpcywgYXJyYXksIGZhbGxiYWNrIHx8IFtbJ00nLCAwLCAwXV0pXHJcbn1cclxuXHJcbi8vIEluaGVyaXQgZnJvbSBTVkcuQXJyYXlcclxuU1ZHLlBhdGhBcnJheS5wcm90b3R5cGUgPSBuZXcgU1ZHLkFycmF5XHJcblNWRy5QYXRoQXJyYXkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU1ZHLlBhdGhBcnJheVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuUGF0aEFycmF5LCB7XHJcbiAgLy8gQ29udmVydCBhcnJheSB0byBzdHJpbmdcclxuICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gYXJyYXlUb1N0cmluZyh0aGlzLnZhbHVlKVxyXG4gIH1cclxuICAvLyBNb3ZlIHBhdGggc3RyaW5nXHJcbiwgbW92ZTogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgLy8gZ2V0IGJvdW5kaW5nIGJveCBvZiBjdXJyZW50IHNpdHVhdGlvblxyXG4gICAgdmFyIGJveCA9IHRoaXMuYmJveCgpXHJcblxyXG4gICAgLy8gZ2V0IHJlbGF0aXZlIG9mZnNldFxyXG4gICAgeCAtPSBib3gueFxyXG4gICAgeSAtPSBib3gueVxyXG5cclxuICAgIGlmICghaXNOYU4oeCkgJiYgIWlzTmFOKHkpKSB7XHJcbiAgICAgIC8vIG1vdmUgZXZlcnkgcG9pbnRcclxuICAgICAgZm9yICh2YXIgbCwgaSA9IHRoaXMudmFsdWUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBsID0gdGhpcy52YWx1ZVtpXVswXVxyXG5cclxuICAgICAgICBpZiAobCA9PSAnTScgfHwgbCA9PSAnTCcgfHwgbCA9PSAnVCcpICB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlW2ldWzFdICs9IHhcclxuICAgICAgICAgIHRoaXMudmFsdWVbaV1bMl0gKz0geVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGwgPT0gJ0gnKSAge1xyXG4gICAgICAgICAgdGhpcy52YWx1ZVtpXVsxXSArPSB4XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAobCA9PSAnVicpICB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlW2ldWzFdICs9IHlcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChsID09ICdDJyB8fCBsID09ICdTJyB8fCBsID09ICdRJykgIHtcclxuICAgICAgICAgIHRoaXMudmFsdWVbaV1bMV0gKz0geFxyXG4gICAgICAgICAgdGhpcy52YWx1ZVtpXVsyXSArPSB5XHJcbiAgICAgICAgICB0aGlzLnZhbHVlW2ldWzNdICs9IHhcclxuICAgICAgICAgIHRoaXMudmFsdWVbaV1bNF0gKz0geVxyXG5cclxuICAgICAgICAgIGlmIChsID09ICdDJykgIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZVtpXVs1XSArPSB4XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVbaV1bNl0gKz0geVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGwgPT0gJ0EnKSAge1xyXG4gICAgICAgICAgdGhpcy52YWx1ZVtpXVs2XSArPSB4XHJcbiAgICAgICAgICB0aGlzLnZhbHVlW2ldWzddICs9IHlcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgLy8gUmVzaXplIHBhdGggc3RyaW5nXHJcbiwgc2l6ZTogZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xyXG4gICAgLy8gZ2V0IGJvdW5kaW5nIGJveCBvZiBjdXJyZW50IHNpdHVhdGlvblxyXG4gICAgdmFyIGksIGwsIGJveCA9IHRoaXMuYmJveCgpXHJcblxyXG4gICAgLy8gcmVjYWxjdWxhdGUgcG9zaXRpb24gb2YgYWxsIHBvaW50cyBhY2NvcmRpbmcgdG8gbmV3IHNpemVcclxuICAgIGZvciAoaSA9IHRoaXMudmFsdWUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgbCA9IHRoaXMudmFsdWVbaV1bMF1cclxuXHJcbiAgICAgIGlmIChsID09ICdNJyB8fCBsID09ICdMJyB8fCBsID09ICdUJykgIHtcclxuICAgICAgICB0aGlzLnZhbHVlW2ldWzFdID0gKCh0aGlzLnZhbHVlW2ldWzFdIC0gYm94LngpICogd2lkdGgpICAvIGJveC53aWR0aCAgKyBib3gueFxyXG4gICAgICAgIHRoaXMudmFsdWVbaV1bMl0gPSAoKHRoaXMudmFsdWVbaV1bMl0gLSBib3gueSkgKiBoZWlnaHQpIC8gYm94LmhlaWdodCArIGJveC55XHJcblxyXG4gICAgICB9IGVsc2UgaWYgKGwgPT0gJ0gnKSAge1xyXG4gICAgICAgIHRoaXMudmFsdWVbaV1bMV0gPSAoKHRoaXMudmFsdWVbaV1bMV0gLSBib3gueCkgKiB3aWR0aCkgIC8gYm94LndpZHRoICArIGJveC54XHJcblxyXG4gICAgICB9IGVsc2UgaWYgKGwgPT0gJ1YnKSAge1xyXG4gICAgICAgIHRoaXMudmFsdWVbaV1bMV0gPSAoKHRoaXMudmFsdWVbaV1bMV0gLSBib3gueSkgKiBoZWlnaHQpIC8gYm94LmhlaWdodCArIGJveC55XHJcblxyXG4gICAgICB9IGVsc2UgaWYgKGwgPT0gJ0MnIHx8IGwgPT0gJ1MnIHx8IGwgPT0gJ1EnKSAge1xyXG4gICAgICAgIHRoaXMudmFsdWVbaV1bMV0gPSAoKHRoaXMudmFsdWVbaV1bMV0gLSBib3gueCkgKiB3aWR0aCkgIC8gYm94LndpZHRoICArIGJveC54XHJcbiAgICAgICAgdGhpcy52YWx1ZVtpXVsyXSA9ICgodGhpcy52YWx1ZVtpXVsyXSAtIGJveC55KSAqIGhlaWdodCkgLyBib3guaGVpZ2h0ICsgYm94LnlcclxuICAgICAgICB0aGlzLnZhbHVlW2ldWzNdID0gKCh0aGlzLnZhbHVlW2ldWzNdIC0gYm94LngpICogd2lkdGgpICAvIGJveC53aWR0aCAgKyBib3gueFxyXG4gICAgICAgIHRoaXMudmFsdWVbaV1bNF0gPSAoKHRoaXMudmFsdWVbaV1bNF0gLSBib3gueSkgKiBoZWlnaHQpIC8gYm94LmhlaWdodCArIGJveC55XHJcblxyXG4gICAgICAgIGlmIChsID09ICdDJykgIHtcclxuICAgICAgICAgIHRoaXMudmFsdWVbaV1bNV0gPSAoKHRoaXMudmFsdWVbaV1bNV0gLSBib3gueCkgKiB3aWR0aCkgIC8gYm94LndpZHRoICArIGJveC54XHJcbiAgICAgICAgICB0aGlzLnZhbHVlW2ldWzZdID0gKCh0aGlzLnZhbHVlW2ldWzZdIC0gYm94LnkpICogaGVpZ2h0KSAvIGJveC5oZWlnaHQgKyBib3gueVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gZWxzZSBpZiAobCA9PSAnQScpICB7XHJcbiAgICAgICAgLy8gcmVzaXplIHJhZGlpXHJcbiAgICAgICAgdGhpcy52YWx1ZVtpXVsxXSA9ICh0aGlzLnZhbHVlW2ldWzFdICogd2lkdGgpICAvIGJveC53aWR0aFxyXG4gICAgICAgIHRoaXMudmFsdWVbaV1bMl0gPSAodGhpcy52YWx1ZVtpXVsyXSAqIGhlaWdodCkgLyBib3guaGVpZ2h0XHJcblxyXG4gICAgICAgIC8vIG1vdmUgcG9zaXRpb24gdmFsdWVzXHJcbiAgICAgICAgdGhpcy52YWx1ZVtpXVs2XSA9ICgodGhpcy52YWx1ZVtpXVs2XSAtIGJveC54KSAqIHdpZHRoKSAgLyBib3gud2lkdGggICsgYm94LnhcclxuICAgICAgICB0aGlzLnZhbHVlW2ldWzddID0gKCh0aGlzLnZhbHVlW2ldWzddIC0gYm94LnkpICogaGVpZ2h0KSAvIGJveC5oZWlnaHQgKyBib3gueVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIC8vIFRlc3QgaWYgdGhlIHBhc3NlZCBwYXRoIGFycmF5IHVzZSB0aGUgc2FtZSBwYXRoIGRhdGEgY29tbWFuZHMgYXMgdGhpcyBwYXRoIGFycmF5XHJcbiwgZXF1YWxDb21tYW5kczogZnVuY3Rpb24ocGF0aEFycmF5KSB7XHJcbiAgICB2YXIgaSwgaWwsIGVxdWFsQ29tbWFuZHNcclxuXHJcbiAgICBwYXRoQXJyYXkgPSBuZXcgU1ZHLlBhdGhBcnJheShwYXRoQXJyYXkpXHJcblxyXG4gICAgZXF1YWxDb21tYW5kcyA9IHRoaXMudmFsdWUubGVuZ3RoID09PSBwYXRoQXJyYXkudmFsdWUubGVuZ3RoXHJcbiAgICBmb3IoaSA9IDAsIGlsID0gdGhpcy52YWx1ZS5sZW5ndGg7IGVxdWFsQ29tbWFuZHMgJiYgaSA8IGlsOyBpKyspIHtcclxuICAgICAgZXF1YWxDb21tYW5kcyA9IHRoaXMudmFsdWVbaV1bMF0gPT09IHBhdGhBcnJheS52YWx1ZVtpXVswXVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlcXVhbENvbW1hbmRzXHJcbiAgfVxyXG4gIC8vIE1ha2UgcGF0aCBhcnJheSBtb3JwaGFibGVcclxuLCBtb3JwaDogZnVuY3Rpb24ocGF0aEFycmF5KSB7XHJcbiAgICBwYXRoQXJyYXkgPSBuZXcgU1ZHLlBhdGhBcnJheShwYXRoQXJyYXkpXHJcblxyXG4gICAgaWYodGhpcy5lcXVhbENvbW1hbmRzKHBhdGhBcnJheSkpIHtcclxuICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IHBhdGhBcnJheVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICAvLyBHZXQgbW9ycGhlZCBwYXRoIGFycmF5IGF0IGdpdmVuIHBvc2l0aW9uXHJcbiwgYXQ6IGZ1bmN0aW9uKHBvcykge1xyXG4gICAgLy8gbWFrZSBzdXJlIGEgZGVzdGluYXRpb24gaXMgZGVmaW5lZFxyXG4gICAgaWYgKCF0aGlzLmRlc3RpbmF0aW9uKSByZXR1cm4gdGhpc1xyXG5cclxuICAgIHZhciBzb3VyY2VBcnJheSA9IHRoaXMudmFsdWVcclxuICAgICAgLCBkZXN0aW5hdGlvbkFycmF5ID0gdGhpcy5kZXN0aW5hdGlvbi52YWx1ZVxyXG4gICAgICAsIGFycmF5ID0gW10sIHBhdGhBcnJheSA9IG5ldyBTVkcuUGF0aEFycmF5KClcclxuICAgICAgLCBpLCBpbCwgaiwgamxcclxuXHJcbiAgICAvLyBBbmltYXRlIGhhcyBzcGVjaWZpZWQgaW4gdGhlIFNWRyBzcGVjXHJcbiAgICAvLyBTZWU6IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9wYXRocy5odG1sI1BhdGhFbGVtZW50XHJcbiAgICBmb3IgKGkgPSAwLCBpbCA9IHNvdXJjZUFycmF5Lmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcclxuICAgICAgYXJyYXlbaV0gPSBbc291cmNlQXJyYXlbaV1bMF1dXHJcbiAgICAgIGZvcihqID0gMSwgamwgPSBzb3VyY2VBcnJheVtpXS5sZW5ndGg7IGogPCBqbDsgaisrKSB7XHJcbiAgICAgICAgYXJyYXlbaV1bal0gPSBzb3VyY2VBcnJheVtpXVtqXSArIChkZXN0aW5hdGlvbkFycmF5W2ldW2pdIC0gc291cmNlQXJyYXlbaV1bal0pICogcG9zXHJcbiAgICAgIH1cclxuICAgICAgLy8gRm9yIHRoZSB0d28gZmxhZ3Mgb2YgdGhlIGVsbGlwdGljYWwgYXJjIGNvbW1hbmQsIHRoZSBTVkcgc3BlYyBzYXk6XHJcbiAgICAgIC8vIEZsYWdzIGFuZCBib29sZWFucyBhcmUgaW50ZXJwb2xhdGVkIGFzIGZyYWN0aW9ucyBiZXR3ZWVuIHplcm8gYW5kIG9uZSwgd2l0aCBhbnkgbm9uLXplcm8gdmFsdWUgY29uc2lkZXJlZCB0byBiZSBhIHZhbHVlIG9mIG9uZS90cnVlXHJcbiAgICAgIC8vIEVsbGlwdGljYWwgYXJjIGNvbW1hbmQgYXMgYW4gYXJyYXkgZm9sbG93ZWQgYnkgY29ycmVzcG9uZGluZyBpbmRleGVzOlxyXG4gICAgICAvLyBbJ0EnLCByeCwgcnksIHgtYXhpcy1yb3RhdGlvbiwgbGFyZ2UtYXJjLWZsYWcsIHN3ZWVwLWZsYWcsIHgsIHldXHJcbiAgICAgIC8vICAgMCAgICAxICAgMiAgICAgICAgMyAgICAgICAgICAgICAgICAgNCAgICAgICAgICAgICA1ICAgICAgNiAgN1xyXG4gICAgICBpZihhcnJheVtpXVswXSA9PT0gJ0EnKSB7XHJcbiAgICAgICAgYXJyYXlbaV1bNF0gPSArKGFycmF5W2ldWzRdICE9IDApXHJcbiAgICAgICAgYXJyYXlbaV1bNV0gPSArKGFycmF5W2ldWzVdICE9IDApXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBEaXJlY3RseSBtb2RpZnkgdGhlIHZhbHVlIG9mIGEgcGF0aCBhcnJheSwgdGhpcyBpcyBkb25lIHRoaXMgd2F5IGZvciBwZXJmb3JtYW5jZVxyXG4gICAgcGF0aEFycmF5LnZhbHVlID0gYXJyYXlcclxuICAgIHJldHVybiBwYXRoQXJyYXlcclxuICB9XHJcbiAgLy8gQWJzb2x1dGl6ZSBhbmQgcGFyc2UgcGF0aCB0byBhcnJheVxyXG4sIHBhcnNlOiBmdW5jdGlvbihhcnJheSkge1xyXG4gICAgLy8gaWYgaXQncyBhbHJlYWR5IGEgcGF0aGFycmF5LCBubyBuZWVkIHRvIHBhcnNlIGl0XHJcbiAgICBpZiAoYXJyYXkgaW5zdGFuY2VvZiBTVkcuUGF0aEFycmF5KSByZXR1cm4gYXJyYXkudmFsdWVPZigpXHJcblxyXG4gICAgLy8gcHJlcGFyZSBmb3IgcGFyc2luZ1xyXG4gICAgdmFyIGksIHgwLCB5MCwgcywgc2VnLCBhcnJcclxuICAgICAgLCB4ID0gMFxyXG4gICAgICAsIHkgPSAwXHJcbiAgICAgICwgcGFyYW1DbnQgPSB7ICdNJzoyLCAnTCc6MiwgJ0gnOjEsICdWJzoxLCAnQyc6NiwgJ1MnOjQsICdRJzo0LCAnVCc6MiwgJ0EnOjcsICdaJzowIH1cclxuXHJcbiAgICBpZih0eXBlb2YgYXJyYXkgPT0gJ3N0cmluZycpe1xyXG5cclxuICAgICAgYXJyYXkgPSBhcnJheVxyXG4gICAgICAgIC5yZXBsYWNlKFNWRy5yZWdleC5udW1iZXJzV2l0aERvdHMsIHBhdGhSZWdSZXBsYWNlKSAvLyBjb252ZXJ0IDQ1LjEyMy4xMjMgdG8gNDUuMTIzIC4xMjNcclxuICAgICAgICAucmVwbGFjZShTVkcucmVnZXgucGF0aExldHRlcnMsICcgJCYgJykgLy8gcHV0IHNvbWUgcm9vbSBiZXR3ZWVuIGxldHRlcnMgYW5kIG51bWJlcnNcclxuICAgICAgICAucmVwbGFjZShTVkcucmVnZXguaHlwaGVuLCAnJDEgLScpICAgICAgLy8gYWRkIHNwYWNlIGJlZm9yZSBoeXBoZW5cclxuICAgICAgICAudHJpbSgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJpbVxyXG4gICAgICAgIC5zcGxpdChTVkcucmVnZXguZGVsaW1pdGVyKSAgIC8vIHNwbGl0IGludG8gYXJyYXlcclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgYXJyYXkgPSBhcnJheS5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3Vycil7XHJcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdC5jYWxsKHByZXYsIGN1cnIpXHJcbiAgICAgIH0sIFtdKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGFycmF5IG5vdyBpcyBhbiBhcnJheSBjb250YWluaW5nIGFsbCBwYXJ0cyBvZiBhIHBhdGggZS5nLiBbJ00nLCAnMCcsICcwJywgJ0wnLCAnMzAnLCAnMzAnIC4uLl1cclxuICAgIHZhciBhcnIgPSBbXVxyXG4gICAgICAsIHAgPSBuZXcgU1ZHLlBvaW50KClcclxuICAgICAgLCBwMCA9IG5ldyBTVkcuUG9pbnQoKVxyXG4gICAgICAsIGluZGV4ID0gMFxyXG4gICAgICAsIGxlbiA9IGFycmF5Lmxlbmd0aFxyXG5cclxuICAgIGRve1xyXG4gICAgICAvLyBUZXN0IGlmIHdlIGhhdmUgYSBwYXRoIGxldHRlclxyXG4gICAgICBpZihTVkcucmVnZXguaXNQYXRoTGV0dGVyLnRlc3QoYXJyYXlbaW5kZXhdKSl7XHJcbiAgICAgICAgcyA9IGFycmF5W2luZGV4XVxyXG4gICAgICAgICsraW5kZXhcclxuICAgICAgLy8gSWYgbGFzdCBsZXR0ZXIgd2FzIGEgbW92ZSBjb21tYW5kIGFuZCB3ZSBnb3Qgbm8gbmV3LCBpdCBkZWZhdWx0cyB0byBbTF1pbmVcclxuICAgICAgfWVsc2UgaWYocyA9PSAnTScpe1xyXG4gICAgICAgIHMgPSAnTCdcclxuICAgICAgfWVsc2UgaWYocyA9PSAnbScpe1xyXG4gICAgICAgIHMgPSAnbCdcclxuICAgICAgfVxyXG5cclxuICAgICAgYXJyLnB1c2gocGF0aEhhbmRsZXJzW3NdLmNhbGwobnVsbCxcclxuICAgICAgICAgIGFycmF5LnNsaWNlKGluZGV4LCAoaW5kZXggPSBpbmRleCArIHBhcmFtQ250W3MudG9VcHBlckNhc2UoKV0pKS5tYXAocGFyc2VGbG9hdCksXHJcbiAgICAgICAgICBwLCBwMFxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG5cclxuICAgIH13aGlsZShsZW4gPiBpbmRleClcclxuXHJcbiAgICByZXR1cm4gYXJyXHJcblxyXG4gIH1cclxuICAvLyBHZXQgYm91bmRpbmcgYm94IG9mIHBhdGhcclxuLCBiYm94OiBmdW5jdGlvbigpIHtcclxuICAgIFNWRy5wYXJzZXIucGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCB0aGlzLnRvU3RyaW5nKCkpXHJcblxyXG4gICAgcmV0dXJuIFNWRy5wYXJzZXIucGF0aC5nZXRCQm94KClcclxuICB9XHJcblxyXG59KVxyXG5cbi8vIE1vZHVsZSBmb3IgdW5pdCBjb252ZXJ0aW9uc1xyXG5TVkcuTnVtYmVyID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZVxyXG4gIGNyZWF0ZTogZnVuY3Rpb24odmFsdWUsIHVuaXQpIHtcclxuICAgIC8vIGluaXRpYWxpemUgZGVmYXVsdHNcclxuICAgIHRoaXMudmFsdWUgPSAwXHJcbiAgICB0aGlzLnVuaXQgID0gdW5pdCB8fCAnJ1xyXG5cclxuICAgIC8vIHBhcnNlIHZhbHVlXHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAvLyBlbnN1cmUgYSB2YWxpZCBudW1lcmljIHZhbHVlXHJcbiAgICAgIHRoaXMudmFsdWUgPSBpc05hTih2YWx1ZSkgPyAwIDogIWlzRmluaXRlKHZhbHVlKSA/ICh2YWx1ZSA8IDAgPyAtMy40ZSszOCA6ICszLjRlKzM4KSA6IHZhbHVlXHJcblxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHVuaXQgPSB2YWx1ZS5tYXRjaChTVkcucmVnZXgubnVtYmVyQW5kVW5pdClcclxuXHJcbiAgICAgIGlmICh1bml0KSB7XHJcbiAgICAgICAgLy8gbWFrZSB2YWx1ZSBudW1lcmljXHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHBhcnNlRmxvYXQodW5pdFsxXSlcclxuXHJcbiAgICAgICAgLy8gbm9ybWFsaXplXHJcbiAgICAgICAgaWYgKHVuaXRbNV0gPT0gJyUnKVxyXG4gICAgICAgICAgdGhpcy52YWx1ZSAvPSAxMDBcclxuICAgICAgICBlbHNlIGlmICh1bml0WzVdID09ICdzJylcclxuICAgICAgICAgIHRoaXMudmFsdWUgKj0gMTAwMFxyXG5cclxuICAgICAgICAvLyBzdG9yZSB1bml0XHJcbiAgICAgICAgdGhpcy51bml0ID0gdW5pdFs1XVxyXG4gICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgU1ZHLk51bWJlcikge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZS52YWx1ZU9mKClcclxuICAgICAgICB0aGlzLnVuaXQgID0gdmFsdWUudW5pdFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICAvLyBBZGQgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gU3RyaW5nYWxpemVcclxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICB0aGlzLnVuaXQgPT0gJyUnID9cclxuICAgICAgICAgIH5+KHRoaXMudmFsdWUgKiAxZTgpIC8gMWU2OlxyXG4gICAgICAgIHRoaXMudW5pdCA9PSAncycgP1xyXG4gICAgICAgICAgdGhpcy52YWx1ZSAvIDFlMyA6XHJcbiAgICAgICAgICB0aGlzLnZhbHVlXHJcbiAgICAgICkgKyB0aGlzLnVuaXRcclxuICAgIH1cclxuICAsIHRvSlNPTjogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKClcclxuICAgIH1cclxuICAsIC8vIENvbnZlcnQgdG8gcHJpbWl0aXZlXHJcbiAgICB2YWx1ZU9mOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVcclxuICAgIH1cclxuICAgIC8vIEFkZCBudW1iZXJcclxuICAsIHBsdXM6IGZ1bmN0aW9uKG51bWJlcikge1xyXG4gICAgICBudW1iZXIgPSBuZXcgU1ZHLk51bWJlcihudW1iZXIpXHJcbiAgICAgIHJldHVybiBuZXcgU1ZHLk51bWJlcih0aGlzICsgbnVtYmVyLCB0aGlzLnVuaXQgfHwgbnVtYmVyLnVuaXQpXHJcbiAgICB9XHJcbiAgICAvLyBTdWJ0cmFjdCBudW1iZXJcclxuICAsIG1pbnVzOiBmdW5jdGlvbihudW1iZXIpIHtcclxuICAgICAgbnVtYmVyID0gbmV3IFNWRy5OdW1iZXIobnVtYmVyKVxyXG4gICAgICByZXR1cm4gbmV3IFNWRy5OdW1iZXIodGhpcyAtIG51bWJlciwgdGhpcy51bml0IHx8IG51bWJlci51bml0KVxyXG4gICAgfVxyXG4gICAgLy8gTXVsdGlwbHkgbnVtYmVyXHJcbiAgLCB0aW1lczogZnVuY3Rpb24obnVtYmVyKSB7XHJcbiAgICAgIG51bWJlciA9IG5ldyBTVkcuTnVtYmVyKG51bWJlcilcclxuICAgICAgcmV0dXJuIG5ldyBTVkcuTnVtYmVyKHRoaXMgKiBudW1iZXIsIHRoaXMudW5pdCB8fCBudW1iZXIudW5pdClcclxuICAgIH1cclxuICAgIC8vIERpdmlkZSBudW1iZXJcclxuICAsIGRpdmlkZTogZnVuY3Rpb24obnVtYmVyKSB7XHJcbiAgICAgIG51bWJlciA9IG5ldyBTVkcuTnVtYmVyKG51bWJlcilcclxuICAgICAgcmV0dXJuIG5ldyBTVkcuTnVtYmVyKHRoaXMgLyBudW1iZXIsIHRoaXMudW5pdCB8fCBudW1iZXIudW5pdClcclxuICAgIH1cclxuICAgIC8vIENvbnZlcnQgdG8gZGlmZmVyZW50IHVuaXRcclxuICAsIHRvOiBmdW5jdGlvbih1bml0KSB7XHJcbiAgICAgIHZhciBudW1iZXIgPSBuZXcgU1ZHLk51bWJlcih0aGlzKVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiB1bml0ID09PSAnc3RyaW5nJylcclxuICAgICAgICBudW1iZXIudW5pdCA9IHVuaXRcclxuXHJcbiAgICAgIHJldHVybiBudW1iZXJcclxuICAgIH1cclxuICAgIC8vIE1ha2UgbnVtYmVyIG1vcnBoYWJsZVxyXG4gICwgbW9ycGg6IGZ1bmN0aW9uKG51bWJlcikge1xyXG4gICAgICB0aGlzLmRlc3RpbmF0aW9uID0gbmV3IFNWRy5OdW1iZXIobnVtYmVyKVxyXG5cclxuICAgICAgaWYobnVtYmVyLnJlbGF0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi52YWx1ZSArPSB0aGlzLnZhbHVlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBHZXQgbW9ycGhlZCBudW1iZXIgYXQgZ2l2ZW4gcG9zaXRpb25cclxuICAsIGF0OiBmdW5jdGlvbihwb3MpIHtcclxuICAgICAgLy8gTWFrZSBzdXJlIGEgZGVzdGluYXRpb24gaXMgZGVmaW5lZFxyXG4gICAgICBpZiAoIXRoaXMuZGVzdGluYXRpb24pIHJldHVybiB0aGlzXHJcblxyXG4gICAgICAvLyBHZW5lcmF0ZSBuZXcgbW9ycGhlZCBudW1iZXJcclxuICAgICAgcmV0dXJuIG5ldyBTVkcuTnVtYmVyKHRoaXMuZGVzdGluYXRpb24pXHJcbiAgICAgICAgICAubWludXModGhpcylcclxuICAgICAgICAgIC50aW1lcyhwb3MpXHJcbiAgICAgICAgICAucGx1cyh0aGlzKVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn0pXHJcblxuXHJcblNWRy5FbGVtZW50ID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiBmdW5jdGlvbihub2RlKSB7XHJcbiAgICAvLyBtYWtlIHN0cm9rZSB2YWx1ZSBhY2Nlc3NpYmxlIGR5bmFtaWNhbGx5XHJcbiAgICB0aGlzLl9zdHJva2UgPSBTVkcuZGVmYXVsdHMuYXR0cnMuc3Ryb2tlXHJcbiAgICB0aGlzLl9ldmVudCA9IG51bGxcclxuICAgIHRoaXMuX2V2ZW50cyA9IHt9XHJcblxyXG4gICAgLy8gaW5pdGlhbGl6ZSBkYXRhIG9iamVjdFxyXG4gICAgdGhpcy5kb20gPSB7fVxyXG5cclxuICAgIC8vIGNyZWF0ZSBjaXJjdWxhciByZWZlcmVuY2VcclxuICAgIGlmICh0aGlzLm5vZGUgPSBub2RlKSB7XHJcbiAgICAgIHRoaXMudHlwZSA9IG5vZGUubm9kZU5hbWVcclxuICAgICAgdGhpcy5ub2RlLmluc3RhbmNlID0gdGhpc1xyXG4gICAgICB0aGlzLl9ldmVudHMgPSBub2RlLl9ldmVudHMgfHwge31cclxuXHJcbiAgICAgIC8vIHN0b3JlIGN1cnJlbnQgYXR0cmlidXRlIHZhbHVlXHJcbiAgICAgIHRoaXMuX3N0cm9rZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdzdHJva2UnKSB8fCB0aGlzLl9zdHJva2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEFkZCBjbGFzcyBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBNb3ZlIG92ZXIgeC1heGlzXHJcbiAgICB4OiBmdW5jdGlvbih4KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ3gnLCB4KVxyXG4gICAgfVxyXG4gICAgLy8gTW92ZSBvdmVyIHktYXhpc1xyXG4gICwgeTogZnVuY3Rpb24oeSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCd5JywgeSlcclxuICAgIH1cclxuICAgIC8vIE1vdmUgYnkgY2VudGVyIG92ZXIgeC1heGlzXHJcbiAgLCBjeDogZnVuY3Rpb24oeCkge1xyXG4gICAgICByZXR1cm4geCA9PSBudWxsID8gdGhpcy54KCkgKyB0aGlzLndpZHRoKCkgLyAyIDogdGhpcy54KHggLSB0aGlzLndpZHRoKCkgLyAyKVxyXG4gICAgfVxyXG4gICAgLy8gTW92ZSBieSBjZW50ZXIgb3ZlciB5LWF4aXNcclxuICAsIGN5OiBmdW5jdGlvbih5KSB7XHJcbiAgICAgIHJldHVybiB5ID09IG51bGwgPyB0aGlzLnkoKSArIHRoaXMuaGVpZ2h0KCkgLyAyIDogdGhpcy55KHkgLSB0aGlzLmhlaWdodCgpIC8gMilcclxuICAgIH1cclxuICAgIC8vIE1vdmUgZWxlbWVudCB0byBnaXZlbiB4IGFuZCB5IHZhbHVlc1xyXG4gICwgbW92ZTogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgICByZXR1cm4gdGhpcy54KHgpLnkoeSlcclxuICAgIH1cclxuICAgIC8vIE1vdmUgZWxlbWVudCBieSBpdHMgY2VudGVyXHJcbiAgLCBjZW50ZXI6IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3goeCkuY3koeSlcclxuICAgIH1cclxuICAgIC8vIFNldCB3aWR0aCBvZiBlbGVtZW50XHJcbiAgLCB3aWR0aDogZnVuY3Rpb24od2lkdGgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cignd2lkdGgnLCB3aWR0aClcclxuICAgIH1cclxuICAgIC8vIFNldCBoZWlnaHQgb2YgZWxlbWVudFxyXG4gICwgaGVpZ2h0OiBmdW5jdGlvbihoZWlnaHQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxyXG4gICAgfVxyXG4gICAgLy8gU2V0IGVsZW1lbnQgc2l6ZSB0byBnaXZlbiB3aWR0aCBhbmQgaGVpZ2h0XHJcbiAgLCBzaXplOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgIHZhciBwID0gcHJvcG9ydGlvbmFsU2l6ZSh0aGlzLCB3aWR0aCwgaGVpZ2h0KVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgICAgICAud2lkdGgobmV3IFNWRy5OdW1iZXIocC53aWR0aCkpXHJcbiAgICAgICAgLmhlaWdodChuZXcgU1ZHLk51bWJlcihwLmhlaWdodCkpXHJcbiAgICB9XHJcbiAgICAvLyBDbG9uZSBlbGVtZW50XHJcbiAgLCBjbG9uZTogZnVuY3Rpb24ocGFyZW50KSB7XHJcbiAgICAgIC8vIHdyaXRlIGRvbSBkYXRhIHRvIHRoZSBkb20gc28gdGhlIGNsb25lIGNhbiBwaWNrdXAgdGhlIGRhdGFcclxuICAgICAgdGhpcy53cml0ZURhdGFUb0RvbSgpXHJcblxyXG4gICAgICAvLyBjbG9uZSBlbGVtZW50IGFuZCBhc3NpZ24gbmV3IGlkXHJcbiAgICAgIHZhciBjbG9uZSA9IGFzc2lnbk5ld0lkKHRoaXMubm9kZS5jbG9uZU5vZGUodHJ1ZSkpXHJcblxyXG4gICAgICAvLyBpbnNlcnQgdGhlIGNsb25lIGluIHRoZSBnaXZlbiBwYXJlbnQgb3IgYWZ0ZXIgbXlzZWxmXHJcbiAgICAgIGlmKHBhcmVudCkgcGFyZW50LmFkZChjbG9uZSlcclxuICAgICAgZWxzZSB0aGlzLmFmdGVyKGNsb25lKVxyXG5cclxuICAgICAgcmV0dXJuIGNsb25lXHJcbiAgICB9XHJcbiAgICAvLyBSZW1vdmUgZWxlbWVudFxyXG4gICwgcmVtb3ZlOiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMucGFyZW50KCkpXHJcbiAgICAgICAgdGhpcy5wYXJlbnQoKS5yZW1vdmVFbGVtZW50KHRoaXMpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gUmVwbGFjZSBlbGVtZW50XHJcbiAgLCByZXBsYWNlOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuYWZ0ZXIoZWxlbWVudCkucmVtb3ZlKClcclxuXHJcbiAgICAgIHJldHVybiBlbGVtZW50XHJcbiAgICB9XHJcbiAgICAvLyBBZGQgZWxlbWVudCB0byBnaXZlbiBjb250YWluZXIgYW5kIHJldHVybiBzZWxmXHJcbiAgLCBhZGRUbzogZnVuY3Rpb24ocGFyZW50KSB7XHJcbiAgICAgIHJldHVybiBwYXJlbnQucHV0KHRoaXMpXHJcbiAgICB9XHJcbiAgICAvLyBBZGQgZWxlbWVudCB0byBnaXZlbiBjb250YWluZXIgYW5kIHJldHVybiBjb250YWluZXJcclxuICAsIHB1dEluOiBmdW5jdGlvbihwYXJlbnQpIHtcclxuICAgICAgcmV0dXJuIHBhcmVudC5hZGQodGhpcylcclxuICAgIH1cclxuICAgIC8vIEdldCAvIHNldCBpZFxyXG4gICwgaWQ6IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ2lkJywgaWQpXHJcbiAgICB9XHJcbiAgICAvLyBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gcG9pbnQgaW5zaWRlIHRoZSBib3VuZGluZyBib3ggb2YgdGhlIGVsZW1lbnRcclxuICAsIGluc2lkZTogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgICB2YXIgYm94ID0gdGhpcy5iYm94KClcclxuXHJcbiAgICAgIHJldHVybiB4ID4gYm94LnhcclxuICAgICAgICAgICYmIHkgPiBib3gueVxyXG4gICAgICAgICAgJiYgeCA8IGJveC54ICsgYm94LndpZHRoXHJcbiAgICAgICAgICAmJiB5IDwgYm94LnkgKyBib3guaGVpZ2h0XHJcbiAgICB9XHJcbiAgICAvLyBTaG93IGVsZW1lbnRcclxuICAsIHNob3c6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdHlsZSgnZGlzcGxheScsICcnKVxyXG4gICAgfVxyXG4gICAgLy8gSGlkZSBlbGVtZW50XHJcbiAgLCBoaWRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpXHJcbiAgICB9XHJcbiAgICAvLyBJcyBlbGVtZW50IHZpc2libGU/XHJcbiAgLCB2aXNpYmxlOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3R5bGUoJ2Rpc3BsYXknKSAhPSAnbm9uZSdcclxuICAgIH1cclxuICAgIC8vIFJldHVybiBpZCBvbiBzdHJpbmcgY29udmVyc2lvblxyXG4gICwgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCdpZCcpXHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gYXJyYXkgb2YgY2xhc3NlcyBvbiB0aGUgbm9kZVxyXG4gICwgY2xhc3NlczogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBhdHRyID0gdGhpcy5hdHRyKCdjbGFzcycpXHJcblxyXG4gICAgICByZXR1cm4gYXR0ciA9PSBudWxsID8gW10gOiBhdHRyLnRyaW0oKS5zcGxpdChTVkcucmVnZXguZGVsaW1pdGVyKVxyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJuIHRydWUgaWYgY2xhc3MgZXhpc3RzIG9uIHRoZSBub2RlLCBmYWxzZSBvdGhlcndpc2VcclxuICAsIGhhc0NsYXNzOiBmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNsYXNzZXMoKS5pbmRleE9mKG5hbWUpICE9IC0xXHJcbiAgICB9XHJcbiAgICAvLyBBZGQgY2xhc3MgdG8gdGhlIG5vZGVcclxuICAsIGFkZENsYXNzOiBmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgIGlmICghdGhpcy5oYXNDbGFzcyhuYW1lKSkge1xyXG4gICAgICAgIHZhciBhcnJheSA9IHRoaXMuY2xhc3NlcygpXHJcbiAgICAgICAgYXJyYXkucHVzaChuYW1lKVxyXG4gICAgICAgIHRoaXMuYXR0cignY2xhc3MnLCBhcnJheS5qb2luKCcgJykpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBSZW1vdmUgY2xhc3MgZnJvbSB0aGUgbm9kZVxyXG4gICwgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgaWYgKHRoaXMuaGFzQ2xhc3MobmFtZSkpIHtcclxuICAgICAgICB0aGlzLmF0dHIoJ2NsYXNzJywgdGhpcy5jbGFzc2VzKCkuZmlsdGVyKGZ1bmN0aW9uKGMpIHtcclxuICAgICAgICAgIHJldHVybiBjICE9IG5hbWVcclxuICAgICAgICB9KS5qb2luKCcgJykpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBUb2dnbGUgdGhlIHByZXNlbmNlIG9mIGEgY2xhc3Mgb24gdGhlIG5vZGVcclxuICAsIHRvZ2dsZUNsYXNzOiBmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhhc0NsYXNzKG5hbWUpID8gdGhpcy5yZW1vdmVDbGFzcyhuYW1lKSA6IHRoaXMuYWRkQ2xhc3MobmFtZSlcclxuICAgIH1cclxuICAgIC8vIEdldCByZWZlcmVuY2VkIGVsZW1lbnQgZm9ybSBhdHRyaWJ1dGUgdmFsdWVcclxuICAsIHJlZmVyZW5jZTogZnVuY3Rpb24oYXR0cikge1xyXG4gICAgICByZXR1cm4gU1ZHLmdldCh0aGlzLmF0dHIoYXR0cikpXHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm5zIHRoZSBwYXJlbnQgZWxlbWVudCBpbnN0YW5jZVxyXG4gICwgcGFyZW50OiBmdW5jdGlvbih0eXBlKSB7XHJcbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzXHJcblxyXG4gICAgICAvLyBjaGVjayBmb3IgcGFyZW50XHJcbiAgICAgIGlmKCFwYXJlbnQubm9kZS5wYXJlbnROb2RlKSByZXR1cm4gbnVsbFxyXG5cclxuICAgICAgLy8gZ2V0IHBhcmVudCBlbGVtZW50XHJcbiAgICAgIHBhcmVudCA9IFNWRy5hZG9wdChwYXJlbnQubm9kZS5wYXJlbnROb2RlKVxyXG5cclxuICAgICAgaWYoIXR5cGUpIHJldHVybiBwYXJlbnRcclxuXHJcbiAgICAgIC8vIGxvb3AgdHJvdWdoIGFuY2VzdG9ycyBpZiB0eXBlIGlzIGdpdmVuXHJcbiAgICAgIHdoaWxlKHBhcmVudCAmJiBwYXJlbnQubm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5TVkdFbGVtZW50KXtcclxuICAgICAgICBpZih0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnQubWF0Y2hlcyh0eXBlKSA6IHBhcmVudCBpbnN0YW5jZW9mIHR5cGUpIHJldHVybiBwYXJlbnRcclxuICAgICAgICBpZighcGFyZW50Lm5vZGUucGFyZW50Tm9kZSB8fCBwYXJlbnQubm9kZS5wYXJlbnROb2RlLm5vZGVOYW1lID09ICcjZG9jdW1lbnQnIHx8IHBhcmVudC5ub2RlLnBhcmVudE5vZGUubm9kZU5hbWUgPT0gJyNkb2N1bWVudC1mcmFnbWVudCcpIHJldHVybiBudWxsIC8vICM3NTksICM3MjBcclxuICAgICAgICBwYXJlbnQgPSBTVkcuYWRvcHQocGFyZW50Lm5vZGUucGFyZW50Tm9kZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gR2V0IHBhcmVudCBkb2N1bWVudFxyXG4gICwgZG9jOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBTVkcuRG9jID8gdGhpcyA6IHRoaXMucGFyZW50KFNWRy5Eb2MpXHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4gYXJyYXkgb2YgYWxsIGFuY2VzdG9ycyBvZiBnaXZlbiB0eXBlIHVwIHRvIHRoZSByb290IHN2Z1xyXG4gICwgcGFyZW50czogZnVuY3Rpb24odHlwZSkge1xyXG4gICAgICB2YXIgcGFyZW50cyA9IFtdLCBwYXJlbnQgPSB0aGlzXHJcblxyXG4gICAgICBkb3tcclxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50KHR5cGUpXHJcbiAgICAgICAgaWYoIXBhcmVudCB8fCAhcGFyZW50Lm5vZGUpIGJyZWFrXHJcblxyXG4gICAgICAgIHBhcmVudHMucHVzaChwYXJlbnQpXHJcbiAgICAgIH0gd2hpbGUocGFyZW50LnBhcmVudClcclxuXHJcbiAgICAgIHJldHVybiBwYXJlbnRzXHJcbiAgICB9XHJcbiAgICAvLyBtYXRjaGVzIHRoZSBlbGVtZW50IHZzIGEgY3NzIHNlbGVjdG9yXHJcbiAgLCBtYXRjaGVzOiBmdW5jdGlvbihzZWxlY3Rvcil7XHJcbiAgICAgIHJldHVybiBtYXRjaGVzKHRoaXMubm9kZSwgc2VsZWN0b3IpXHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm5zIHRoZSBzdmcgbm9kZSB0byBjYWxsIG5hdGl2ZSBzdmcgbWV0aG9kcyBvbiBpdFxyXG4gICwgbmF0aXZlOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubm9kZVxyXG4gICAgfVxyXG4gICAgLy8gSW1wb3J0IHJhdyBzdmdcclxuICAsIHN2ZzogZnVuY3Rpb24oc3ZnKSB7XHJcbiAgICAgIC8vIGNyZWF0ZSB0ZW1wb3JhcnkgaG9sZGVyXHJcbiAgICAgIHZhciB3ZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJylcclxuXHJcbiAgICAgIC8vIGFjdCBhcyBhIHNldHRlciBpZiBzdmcgaXMgZ2l2ZW5cclxuICAgICAgaWYgKHN2ZyAmJiB0aGlzIGluc3RhbmNlb2YgU1ZHLlBhcmVudCkge1xyXG4gICAgICAgIC8vIGR1bXAgcmF3IHN2Z1xyXG4gICAgICAgIHdlbGwuaW5uZXJIVE1MID0gJzxzdmc+JyArIHN2Zy5yZXBsYWNlKC9cXG4vLCAnJykucmVwbGFjZSgvPChbXFx3Oi1dKykoW148XSs/KVxcLz4vZywgJzwkMSQyPjwvJDE+JykgKyAnPC9zdmc+J1xyXG5cclxuICAgICAgICAvLyB0cmFuc3BsYW50IG5vZGVzXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlsID0gd2VsbC5maXJzdENoaWxkLmNoaWxkTm9kZXMubGVuZ3RoOyBpIDwgaWw7IGkrKylcclxuICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh3ZWxsLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZClcclxuXHJcbiAgICAgIC8vIG90aGVyd2lzZSBhY3QgYXMgYSBnZXR0ZXJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBjcmVhdGUgYSB3cmFwcGluZyBzdmcgZWxlbWVudCBpbiBjYXNlIG9mIHBhcnRpYWwgY29udGVudFxyXG4gICAgICAgIHdlbGwuYXBwZW5kQ2hpbGQoc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJykpXHJcblxyXG4gICAgICAgIC8vIHdyaXRlIHN2Z2pzIGRhdGEgdG8gdGhlIGRvbVxyXG4gICAgICAgIHRoaXMud3JpdGVEYXRhVG9Eb20oKVxyXG5cclxuICAgICAgICAvLyBpbnNlcnQgYSBjb3B5IG9mIHRoaXMgbm9kZVxyXG4gICAgICAgIHN2Zy5hcHBlbmRDaGlsZCh0aGlzLm5vZGUuY2xvbmVOb2RlKHRydWUpKVxyXG5cclxuICAgICAgICAvLyByZXR1cm4gdGFyZ2V0IGVsZW1lbnRcclxuICAgICAgICByZXR1cm4gd2VsbC5pbm5lckhUTUwucmVwbGFjZSgvXjxzdmc+LywgJycpLnJlcGxhY2UoLzxcXC9zdmc+JC8sICcnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gIC8vIHdyaXRlIHN2Z2pzIGRhdGEgdG8gdGhlIGRvbVxyXG4gICwgd3JpdGVEYXRhVG9Eb206IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgLy8gZHVtcCB2YXJpYWJsZXMgcmVjdXJzaXZlbHlcclxuICAgICAgaWYodGhpcy5lYWNoIHx8IHRoaXMubGluZXMpe1xyXG4gICAgICAgIHZhciBmbiA9IHRoaXMuZWFjaCA/IHRoaXMgOiB0aGlzLmxpbmVzKCk7XHJcbiAgICAgICAgZm4uZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgdGhpcy53cml0ZURhdGFUb0RvbSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gcmVtb3ZlIHByZXZpb3VzbHkgc2V0IGRhdGFcclxuICAgICAgdGhpcy5ub2RlLnJlbW92ZUF0dHJpYnV0ZSgnc3ZnanM6ZGF0YScpXHJcblxyXG4gICAgICBpZihPYmplY3Qua2V5cyh0aGlzLmRvbSkubGVuZ3RoKVxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ3N2Z2pzOmRhdGEnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmRvbSkpIC8vIHNlZSAjNDI4XHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gIC8vIHNldCBnaXZlbiBkYXRhIHRvIHRoZSBlbGVtZW50cyBkYXRhIHByb3BlcnR5XHJcbiAgLCBzZXREYXRhOiBmdW5jdGlvbihvKXtcclxuICAgICAgdGhpcy5kb20gPSBvXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgLCBpczogZnVuY3Rpb24ob2JqKXtcclxuICAgICAgcmV0dXJuIGlzKHRoaXMsIG9iailcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxuU1ZHLmVhc2luZyA9IHtcclxuICAnLSc6IGZ1bmN0aW9uKHBvcyl7cmV0dXJuIHBvc31cclxuLCAnPD4nOmZ1bmN0aW9uKHBvcyl7cmV0dXJuIC1NYXRoLmNvcyhwb3MgKiBNYXRoLlBJKSAvIDIgKyAwLjV9XHJcbiwgJz4nOiBmdW5jdGlvbihwb3Mpe3JldHVybiAgTWF0aC5zaW4ocG9zICogTWF0aC5QSSAvIDIpfVxyXG4sICc8JzogZnVuY3Rpb24ocG9zKXtyZXR1cm4gLU1hdGguY29zKHBvcyAqIE1hdGguUEkgLyAyKSArIDF9XHJcbn1cclxuXHJcblNWRy5tb3JwaCA9IGZ1bmN0aW9uKHBvcyl7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGZyb20sIHRvKSB7XHJcbiAgICByZXR1cm4gbmV3IFNWRy5Nb3JwaE9iaihmcm9tLCB0bykuYXQocG9zKVxyXG4gIH1cclxufVxyXG5cclxuU1ZHLlNpdHVhdGlvbiA9IFNWRy5pbnZlbnQoe1xyXG5cclxuICBjcmVhdGU6IGZ1bmN0aW9uKG8pe1xyXG4gICAgdGhpcy5pbml0ID0gZmFsc2VcclxuICAgIHRoaXMucmV2ZXJzZWQgPSBmYWxzZVxyXG4gICAgdGhpcy5yZXZlcnNpbmcgPSBmYWxzZVxyXG5cclxuICAgIHRoaXMuZHVyYXRpb24gPSBuZXcgU1ZHLk51bWJlcihvLmR1cmF0aW9uKS52YWx1ZU9mKClcclxuICAgIHRoaXMuZGVsYXkgPSBuZXcgU1ZHLk51bWJlcihvLmRlbGF5KS52YWx1ZU9mKClcclxuXHJcbiAgICB0aGlzLnN0YXJ0ID0gK25ldyBEYXRlKCkgKyB0aGlzLmRlbGF5XHJcbiAgICB0aGlzLmZpbmlzaCA9IHRoaXMuc3RhcnQgKyB0aGlzLmR1cmF0aW9uXHJcbiAgICB0aGlzLmVhc2UgPSBvLmVhc2VcclxuXHJcbiAgICAvLyB0aGlzLmxvb3AgaXMgaW5jcmVtZW50ZWQgZnJvbSAwIHRvIHRoaXMubG9vcHNcclxuICAgIC8vIGl0IGlzIGFsc28gaW5jcmVtZW50ZWQgd2hlbiBpbiBhbiBpbmZpbml0ZSBsb29wICh3aGVuIHRoaXMubG9vcHMgaXMgdHJ1ZSlcclxuICAgIHRoaXMubG9vcCA9IDBcclxuICAgIHRoaXMubG9vcHMgPSBmYWxzZVxyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9ucyA9IHtcclxuICAgICAgLy8gZnVuY3Rpb25Ub0NhbGw6IFtsaXN0IG9mIG1vcnBoYWJsZSBvYmplY3RzXVxyXG4gICAgICAvLyBlLmcuIG1vdmU6IFtTVkcuTnVtYmVyLCBTVkcuTnVtYmVyXVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXR0cnMgPSB7XHJcbiAgICAgIC8vIGhvbGRzIGFsbCBhdHRyaWJ1dGVzIHdoaWNoIGFyZSBub3QgcmVwcmVzZW50ZWQgZnJvbSBhIGZ1bmN0aW9uIHN2Zy5qcyBwcm92aWRlc1xyXG4gICAgICAvLyBlLmcuIHNvbWVBdHRyOiBTVkcuTnVtYmVyXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdHlsZXMgPSB7XHJcbiAgICAgIC8vIGhvbGRzIGFsbCBzdHlsZXMgd2hpY2ggc2hvdWxkIGJlIGFuaW1hdGVkXHJcbiAgICAgIC8vIGUuZy4gZmlsbC1jb2xvcjogU1ZHLkNvbG9yXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50cmFuc2Zvcm1zID0gW1xyXG4gICAgICAvLyBob2xkcyBhbGwgdHJhbnNmb3JtYXRpb25zIGFzIHRyYW5zZm9ybWF0aW9uIG9iamVjdHNcclxuICAgICAgLy8gZS5nLiBbU1ZHLlJvdGF0ZSwgU1ZHLlRyYW5zbGF0ZSwgU1ZHLk1hdHJpeF1cclxuICAgIF1cclxuXHJcbiAgICB0aGlzLm9uY2UgPSB7XHJcbiAgICAgIC8vIGZ1bmN0aW9ucyB0byBmaXJlIGF0IGEgc3BlY2lmaWMgcG9zaXRpb25cclxuICAgICAgLy8gZS5nLiBcIjAuNVwiOiBmdW5jdGlvbiBmb28oKXt9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn0pXHJcblxyXG5cclxuU1ZHLkZYID0gU1ZHLmludmVudCh7XHJcblxyXG4gIGNyZWF0ZTogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgdGhpcy5fdGFyZ2V0ID0gZWxlbWVudFxyXG4gICAgdGhpcy5zaXR1YXRpb25zID0gW11cclxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2VcclxuICAgIHRoaXMuc2l0dWF0aW9uID0gbnVsbFxyXG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZVxyXG4gICAgdGhpcy5sYXN0UG9zID0gMFxyXG4gICAgdGhpcy5wb3MgPSAwXHJcbiAgICAvLyBUaGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgYW4gYW5pbWF0aW9uIGlzIGl0cyBwb3NpdGlvbiBpbiB0aGUgY29udGV4dCBvZiBpdHMgY29tcGxldGUgZHVyYXRpb24gKGluY2x1ZGluZyBkZWxheSBhbmQgbG9vcHMpXHJcbiAgICAvLyBXaGVuIHBlcmZvcm1pbmcgYSBkZWxheSwgYWJzUG9zIGlzIGJlbG93IDAgYW5kIHdoZW4gcGVyZm9ybWluZyBhIGxvb3AsIGl0cyB2YWx1ZSBpcyBhYm92ZSAxXHJcbiAgICB0aGlzLmFic1BvcyA9IDBcclxuICAgIHRoaXMuX3NwZWVkID0gMVxyXG4gIH1cclxuXHJcbiwgZXh0ZW5kOiB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIG9yIHJldHVybnMgdGhlIHRhcmdldCBvZiB0aGlzIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIG8gb2JqZWN0IHx8IG51bWJlciBJbiBjYXNlIG9mIE9iamVjdCBpdCBob2xkcyBhbGwgcGFyYW1ldGVycy4gSW4gY2FzZSBvZiBudW1iZXIgaXRzIHRoZSBkdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gZWFzZSBmdW5jdGlvbiB8fCBzdHJpbmcgRnVuY3Rpb24gd2hpY2ggc2hvdWxkIGJlIHVzZWQgZm9yIGVhc2luZyBvciBlYXNpbmcga2V5d29yZFxyXG4gICAgICogQHBhcmFtIGRlbGF5IE51bWJlciBpbmRpY2F0aW5nIHRoZSBkZWxheSBiZWZvcmUgdGhlIGFuaW1hdGlvbiBzdGFydHNcclxuICAgICAqIEByZXR1cm4gdGFyZ2V0IHx8IHRoaXNcclxuICAgICAqL1xyXG4gICAgYW5pbWF0ZTogZnVuY3Rpb24obywgZWFzZSwgZGVsYXkpe1xyXG5cclxuICAgICAgaWYodHlwZW9mIG8gPT0gJ29iamVjdCcpe1xyXG4gICAgICAgIGVhc2UgPSBvLmVhc2VcclxuICAgICAgICBkZWxheSA9IG8uZGVsYXlcclxuICAgICAgICBvID0gby5kdXJhdGlvblxyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgc2l0dWF0aW9uID0gbmV3IFNWRy5TaXR1YXRpb24oe1xyXG4gICAgICAgIGR1cmF0aW9uOiBvIHx8IDEwMDAsXHJcbiAgICAgICAgZGVsYXk6IGRlbGF5IHx8IDAsXHJcbiAgICAgICAgZWFzZTogU1ZHLmVhc2luZ1tlYXNlIHx8ICctJ10gfHwgZWFzZVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdGhpcy5xdWV1ZShzaXR1YXRpb24pXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0cyBhIGRlbGF5IGJlZm9yZSB0aGUgbmV4dCBlbGVtZW50IG9mIHRoZSBxdWV1ZSBpcyBjYWxsZWRcclxuICAgICAqIEBwYXJhbSBkZWxheSBEdXJhdGlvbiBvZiBkZWxheSBpbiBtaWxsaXNlY29uZHNcclxuICAgICAqIEByZXR1cm4gdGhpcy50YXJnZXQoKVxyXG4gICAgICovXHJcbiAgLCBkZWxheTogZnVuY3Rpb24oZGVsYXkpe1xyXG4gICAgICAvLyBUaGUgZGVsYXkgaXMgcGVyZm9ybWVkIGJ5IGFuIGVtcHR5IHNpdHVhdGlvbiB3aXRoIGl0cyBkdXJhdGlvblxyXG4gICAgICAvLyBhdHRyaWJ1dGUgc2V0IHRvIHRoZSBkdXJhdGlvbiBvZiB0aGUgZGVsYXlcclxuICAgICAgdmFyIHNpdHVhdGlvbiA9IG5ldyBTVkcuU2l0dWF0aW9uKHtcclxuICAgICAgICBkdXJhdGlvbjogZGVsYXksXHJcbiAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgZWFzZTogU1ZHLmVhc2luZ1snLSddXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5xdWV1ZShzaXR1YXRpb24pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIG9yIHJldHVybnMgdGhlIHRhcmdldCBvZiB0aGlzIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIG51bGwgfHwgdGFyZ2V0IFNWRy5FbGVtZW50IHdoaWNoIHNob3VsZCBiZSBzZXQgYXMgbmV3IHRhcmdldFxyXG4gICAgICogQHJldHVybiB0YXJnZXQgfHwgdGhpc1xyXG4gICAgICovXHJcbiAgLCB0YXJnZXQ6IGZ1bmN0aW9uKHRhcmdldCl7XHJcbiAgICAgIGlmKHRhcmdldCAmJiB0YXJnZXQgaW5zdGFuY2VvZiBTVkcuRWxlbWVudCl7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0ID0gdGFyZ2V0XHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldFxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybnMgdGhlIGFic29sdXRlIHBvc2l0aW9uIGF0IGEgZ2l2ZW4gdGltZVxyXG4gICwgdGltZVRvQWJzUG9zOiBmdW5jdGlvbih0aW1lc3RhbXApe1xyXG4gICAgICByZXR1cm4gKHRpbWVzdGFtcCAtIHRoaXMuc2l0dWF0aW9uLnN0YXJ0KSAvICh0aGlzLnNpdHVhdGlvbi5kdXJhdGlvbi90aGlzLl9zcGVlZClcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm5zIHRoZSB0aW1lc3RhbXAgZnJvbSBhIGdpdmVuIGFic29sdXRlIHBvc2l0b25cclxuICAsIGFic1Bvc1RvVGltZTogZnVuY3Rpb24oYWJzUG9zKXtcclxuICAgICAgcmV0dXJuIHRoaXMuc2l0dWF0aW9uLmR1cmF0aW9uL3RoaXMuX3NwZWVkICogYWJzUG9zICsgdGhpcy5zaXR1YXRpb24uc3RhcnRcclxuICAgIH1cclxuXHJcbiAgICAvLyBzdGFydHMgdGhlIGFuaW1hdGlvbmxvb3BcclxuICAsIHN0YXJ0QW5pbUZyYW1lOiBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLnN0b3BBbmltRnJhbWUoKVxyXG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpeyB0aGlzLnN0ZXAoKSB9LmJpbmQodGhpcykpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2FuY2VscyB0aGUgYW5pbWF0aW9uZnJhbWVcclxuICAsIHN0b3BBbmltRnJhbWU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGtpY2tzIG9mZiB0aGUgYW5pbWF0aW9uIC0gb25seSBkb2VzIHNvbWV0aGluZyB3aGVuIHRoZSBxdWV1ZSBpcyBjdXJyZW50bHkgbm90IGFjdGl2ZSBhbmQgYXQgbGVhc3Qgb25lIHNpdHVhdGlvbiBpcyBzZXRcclxuICAsIHN0YXJ0OiBmdW5jdGlvbigpe1xyXG4gICAgICAvLyBkb250IHN0YXJ0IGlmIGFscmVhZHkgc3RhcnRlZFxyXG4gICAgICBpZighdGhpcy5hY3RpdmUgJiYgdGhpcy5zaXR1YXRpb24pe1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuc3RhcnRDdXJyZW50KClcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvLyBzdGFydCB0aGUgY3VycmVudCBzaXR1YXRpb25cclxuICAsIHN0YXJ0Q3VycmVudDogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5zaXR1YXRpb24uc3RhcnQgPSArbmV3IERhdGUgKyB0aGlzLnNpdHVhdGlvbi5kZWxheS90aGlzLl9zcGVlZFxyXG4gICAgICB0aGlzLnNpdHVhdGlvbi5maW5pc2ggPSB0aGlzLnNpdHVhdGlvbi5zdGFydCArIHRoaXMuc2l0dWF0aW9uLmR1cmF0aW9uL3RoaXMuX3NwZWVkXHJcbiAgICAgIHJldHVybiB0aGlzLmluaXRBbmltYXRpb25zKCkuc3RlcCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRzIGEgZnVuY3Rpb24gLyBTaXR1YXRpb24gdG8gdGhlIGFuaW1hdGlvbiBxdWV1ZVxyXG4gICAgICogQHBhcmFtIGZuIGZ1bmN0aW9uIC8gc2l0dWF0aW9uIHRvIGFkZFxyXG4gICAgICogQHJldHVybiB0aGlzXHJcbiAgICAgKi9cclxuICAsIHF1ZXVlOiBmdW5jdGlvbihmbil7XHJcbiAgICAgIGlmKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nIHx8IGZuIGluc3RhbmNlb2YgU1ZHLlNpdHVhdGlvbilcclxuICAgICAgICB0aGlzLnNpdHVhdGlvbnMucHVzaChmbilcclxuXHJcbiAgICAgIGlmKCF0aGlzLnNpdHVhdGlvbikgdGhpcy5zaXR1YXRpb24gPSB0aGlzLnNpdHVhdGlvbnMuc2hpZnQoKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHB1bGxzIG5leHQgZWxlbWVudCBmcm9tIHRoZSBxdWV1ZSBhbmQgZXhlY3V0ZSBpdFxyXG4gICAgICogQHJldHVybiB0aGlzXHJcbiAgICAgKi9cclxuICAsIGRlcXVldWU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vIHN0b3AgY3VycmVudCBhbmltYXRpb25cclxuICAgICAgdGhpcy5zdG9wKClcclxuXHJcbiAgICAgIC8vIGdldCBuZXh0IGFuaW1hdGlvbiBmcm9tIHF1ZXVlXHJcbiAgICAgIHRoaXMuc2l0dWF0aW9uID0gdGhpcy5zaXR1YXRpb25zLnNoaWZ0KClcclxuXHJcbiAgICAgIGlmKHRoaXMuc2l0dWF0aW9uKXtcclxuICAgICAgICBpZih0aGlzLnNpdHVhdGlvbiBpbnN0YW5jZW9mIFNWRy5TaXR1YXRpb24pIHtcclxuICAgICAgICAgIHRoaXMuc3RhcnQoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBJZiBpdCBpcyBub3QgYSBTVkcuU2l0dWF0aW9uLCB0aGVuIGl0IGlzIGEgZnVuY3Rpb24sIHdlIGV4ZWN1dGUgaXRcclxuICAgICAgICAgIHRoaXMuc2l0dWF0aW9uLmNhbGwodGhpcylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlcyBhbGwgYW5pbWF0aW9ucyB0byB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZWxlbWVudFxyXG4gICAgLy8gdGhpcyBpcyBpbXBvcnRhbnQgd2hlbiBvbmUgcHJvcGVydHkgY291bGQgYmUgY2hhbmdlZCBmcm9tIGFub3RoZXIgcHJvcGVydHlcclxuICAsIGluaXRBbmltYXRpb25zOiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGksIGosIHNvdXJjZVxyXG4gICAgICB2YXIgcyA9IHRoaXMuc2l0dWF0aW9uXHJcblxyXG4gICAgICBpZihzLmluaXQpIHJldHVybiB0aGlzXHJcblxyXG4gICAgICBmb3IoaSBpbiBzLmFuaW1hdGlvbnMpe1xyXG4gICAgICAgIHNvdXJjZSA9IHRoaXMudGFyZ2V0KClbaV0oKVxyXG5cclxuICAgICAgICBpZighQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XHJcbiAgICAgICAgICBzb3VyY2UgPSBbc291cmNlXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkocy5hbmltYXRpb25zW2ldKSkge1xyXG4gICAgICAgICAgcy5hbmltYXRpb25zW2ldID0gW3MuYW5pbWF0aW9uc1tpXV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vaWYocy5hbmltYXRpb25zW2ldLmxlbmd0aCA+IHNvdXJjZS5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgc291cmNlLmNvbmNhdCA9IHNvdXJjZS5jb25jYXQocy5hbmltYXRpb25zW2ldLnNsaWNlKHNvdXJjZS5sZW5ndGgsIHMuYW5pbWF0aW9uc1tpXS5sZW5ndGgpKVxyXG4gICAgICAgIC8vfVxyXG5cclxuICAgICAgICBmb3IoaiA9IHNvdXJjZS5sZW5ndGg7IGotLTspIHtcclxuICAgICAgICAgIC8vIFRoZSBjb25kaXRpb24gaXMgYmVjYXVzZSBzb21lIG1ldGhvZHMgcmV0dXJuIGEgbm9ybWFsIG51bWJlciBpbnN0ZWFkXHJcbiAgICAgICAgICAvLyBvZiBhIFNWRy5OdW1iZXJcclxuICAgICAgICAgIGlmKHMuYW5pbWF0aW9uc1tpXVtqXSBpbnN0YW5jZW9mIFNWRy5OdW1iZXIpXHJcbiAgICAgICAgICAgIHNvdXJjZVtqXSA9IG5ldyBTVkcuTnVtYmVyKHNvdXJjZVtqXSlcclxuXHJcbiAgICAgICAgICBzLmFuaW1hdGlvbnNbaV1bal0gPSBzb3VyY2Vbal0ubW9ycGgocy5hbmltYXRpb25zW2ldW2pdKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yKGkgaW4gcy5hdHRycyl7XHJcbiAgICAgICAgcy5hdHRyc1tpXSA9IG5ldyBTVkcuTW9ycGhPYmoodGhpcy50YXJnZXQoKS5hdHRyKGkpLCBzLmF0dHJzW2ldKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IoaSBpbiBzLnN0eWxlcyl7XHJcbiAgICAgICAgcy5zdHlsZXNbaV0gPSBuZXcgU1ZHLk1vcnBoT2JqKHRoaXMudGFyZ2V0KCkuc3R5bGUoaSksIHMuc3R5bGVzW2ldKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzLmluaXRpYWxUcmFuc2Zvcm1hdGlvbiA9IHRoaXMudGFyZ2V0KCkubWF0cml4aWZ5KClcclxuXHJcbiAgICAgIHMuaW5pdCA9IHRydWVcclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAsIGNsZWFyUXVldWU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuc2l0dWF0aW9ucyA9IFtdXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgLCBjbGVhckN1cnJlbnQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuc2l0dWF0aW9uID0gbnVsbFxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLyoqIHN0b3BzIHRoZSBhbmltYXRpb24gaW1tZWRpYXRlbHlcclxuICAgICAqIEBwYXJhbSBqdW1wVG9FbmQgQSBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0byBjb21wbGV0ZSB0aGUgY3VycmVudCBhbmltYXRpb24gaW1tZWRpYXRlbHkuXHJcbiAgICAgKiBAcGFyYW0gY2xlYXJRdWV1ZSBBIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRvIHJlbW92ZSBxdWV1ZWQgYW5pbWF0aW9uIGFzIHdlbGwuXHJcbiAgICAgKiBAcmV0dXJuIHRoaXNcclxuICAgICAqL1xyXG4gICwgc3RvcDogZnVuY3Rpb24oanVtcFRvRW5kLCBjbGVhclF1ZXVlKXtcclxuICAgICAgdmFyIGFjdGl2ZSA9IHRoaXMuYWN0aXZlXHJcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgIGlmKGNsZWFyUXVldWUpe1xyXG4gICAgICAgIHRoaXMuY2xlYXJRdWV1ZSgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGp1bXBUb0VuZCAmJiB0aGlzLnNpdHVhdGlvbil7XHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSB0aGUgc2l0dWF0aW9uIGlmIGl0IHdhcyBub3RcclxuICAgICAgICAhYWN0aXZlICYmIHRoaXMuc3RhcnRDdXJyZW50KClcclxuICAgICAgICB0aGlzLmF0RW5kKClcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zdG9wQW5pbUZyYW1lKClcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmNsZWFyQ3VycmVudCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIHJlc2V0cyB0aGUgZWxlbWVudCB0byB0aGUgc3RhdGUgd2hlcmUgdGhlIGN1cnJlbnQgZWxlbWVudCBoYXMgc3RhcnRlZFxyXG4gICAgICogQHJldHVybiB0aGlzXHJcbiAgICAgKi9cclxuICAsIHJlc2V0OiBmdW5jdGlvbigpe1xyXG4gICAgICBpZih0aGlzLnNpdHVhdGlvbil7XHJcbiAgICAgICAgdmFyIHRlbXAgPSB0aGlzLnNpdHVhdGlvblxyXG4gICAgICAgIHRoaXMuc3RvcCgpXHJcbiAgICAgICAgdGhpcy5zaXR1YXRpb24gPSB0ZW1wXHJcbiAgICAgICAgdGhpcy5hdFN0YXJ0KClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0b3AgdGhlIGN1cnJlbnRseS1ydW5uaW5nIGFuaW1hdGlvbiwgcmVtb3ZlIGFsbCBxdWV1ZWQgYW5pbWF0aW9ucywgYW5kIGNvbXBsZXRlIGFsbCBhbmltYXRpb25zIGZvciB0aGUgZWxlbWVudC5cclxuICAsIGZpbmlzaDogZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIHRoaXMuc3RvcCh0cnVlLCBmYWxzZSlcclxuXHJcbiAgICAgIHdoaWxlKHRoaXMuZGVxdWV1ZSgpLnNpdHVhdGlvbiAmJiB0aGlzLnN0b3AodHJ1ZSwgZmFsc2UpKTtcclxuXHJcbiAgICAgIHRoaXMuY2xlYXJRdWV1ZSgpLmNsZWFyQ3VycmVudCgpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldCB0aGUgaW50ZXJuYWwgYW5pbWF0aW9uIHBvaW50ZXIgYXQgdGhlIHN0YXJ0IHBvc2l0aW9uLCBiZWZvcmUgYW55IGxvb3BzLCBhbmQgdXBkYXRlcyB0aGUgdmlzdWFsaXNhdGlvblxyXG4gICwgYXRTdGFydDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF0KDAsIHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2V0IHRoZSBpbnRlcm5hbCBhbmltYXRpb24gcG9pbnRlciBhdCB0aGUgZW5kIHBvc2l0aW9uLCBhZnRlciBhbGwgdGhlIGxvb3BzLCBhbmQgdXBkYXRlcyB0aGUgdmlzdWFsaXNhdGlvblxyXG4gICwgYXRFbmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5zaXR1YXRpb24ubG9vcHMgPT09IHRydWUpIHtcclxuICAgICAgICAvLyBJZiBpbiBhIGluZmluaXRlIGxvb3AsIHdlIGVuZCB0aGUgY3VycmVudCBpdGVyYXRpb25cclxuICAgICAgICB0aGlzLnNpdHVhdGlvbi5sb29wcyA9IHRoaXMuc2l0dWF0aW9uLmxvb3AgKyAxXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHR5cGVvZiB0aGlzLnNpdHVhdGlvbi5sb29wcyA9PSAnbnVtYmVyJykge1xyXG4gICAgICAgIC8vIElmIHBlcmZvcm1pbmcgYSBmaW5pdGUgbnVtYmVyIG9mIGxvb3BzLCB3ZSBnbyBhZnRlciBhbGwgdGhlIGxvb3BzXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXQodGhpcy5zaXR1YXRpb24ubG9vcHMsIHRydWUpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gSWYgbm8gbG9vcHMsIHdlIGp1c3QgZ28gYXQgdGhlIGVuZFxyXG4gICAgICAgIHJldHVybiB0aGlzLmF0KDEsIHRydWUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgdGhlIGludGVybmFsIGFuaW1hdGlvbiBwb2ludGVyIHRvIHRoZSBzcGVjaWZpZWQgcG9zaXRpb24gYW5kIHVwZGF0ZXMgdGhlIHZpc3VhbGlzYXRpb25cclxuICAgIC8vIGlmIGlzQWJzUG9zIGlzIHRydWUsIHBvcyBpcyB0cmVhdGVkIGFzIGFuIGFic29sdXRlIHBvc2l0aW9uXHJcbiAgLCBhdDogZnVuY3Rpb24ocG9zLCBpc0Fic1Bvcyl7XHJcbiAgICAgIHZhciBkdXJEaXZTcGQgPSB0aGlzLnNpdHVhdGlvbi5kdXJhdGlvbi90aGlzLl9zcGVlZFxyXG5cclxuICAgICAgdGhpcy5hYnNQb3MgPSBwb3NcclxuICAgICAgLy8gSWYgcG9zIGlzIG5vdCBhbiBhYnNvbHV0ZSBwb3NpdGlvbiwgd2UgY29udmVydCBpdCBpbnRvIG9uZVxyXG4gICAgICBpZiAoIWlzQWJzUG9zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2l0dWF0aW9uLnJldmVyc2VkKSB0aGlzLmFic1BvcyA9IDEgLSB0aGlzLmFic1Bvc1xyXG4gICAgICAgIHRoaXMuYWJzUG9zICs9IHRoaXMuc2l0dWF0aW9uLmxvb3BcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zaXR1YXRpb24uc3RhcnQgPSArbmV3IERhdGUgLSB0aGlzLmFic1BvcyAqIGR1ckRpdlNwZFxyXG4gICAgICB0aGlzLnNpdHVhdGlvbi5maW5pc2ggPSB0aGlzLnNpdHVhdGlvbi5zdGFydCArIGR1ckRpdlNwZFxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuc3RlcCh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0cyBvciByZXR1cm5zIHRoZSBzcGVlZCBvZiB0aGUgYW5pbWF0aW9uc1xyXG4gICAgICogQHBhcmFtIHNwZWVkIG51bGwgfHwgTnVtYmVyIFRoZSBuZXcgc3BlZWQgb2YgdGhlIGFuaW1hdGlvbnNcclxuICAgICAqIEByZXR1cm4gTnVtYmVyIHx8IHRoaXNcclxuICAgICAqL1xyXG4gICwgc3BlZWQ6IGZ1bmN0aW9uKHNwZWVkKXtcclxuICAgICAgaWYgKHNwZWVkID09PSAwKSByZXR1cm4gdGhpcy5wYXVzZSgpXHJcblxyXG4gICAgICBpZiAoc3BlZWQpIHtcclxuICAgICAgICB0aGlzLl9zcGVlZCA9IHNwZWVkXHJcbiAgICAgICAgLy8gV2UgdXNlIGFuIGFic29sdXRlIHBvc2l0aW9uIGhlcmUgc28gdGhhdCBzcGVlZCBjYW4gYWZmZWN0IHRoZSBkZWxheSBiZWZvcmUgdGhlIGFuaW1hdGlvblxyXG4gICAgICAgIHJldHVybiB0aGlzLmF0KHRoaXMuYWJzUG9zLCB0cnVlKVxyXG4gICAgICB9IGVsc2UgcmV0dXJuIHRoaXMuX3NwZWVkXHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFrZSBsb29wYWJsZVxyXG4gICwgbG9vcDogZnVuY3Rpb24odGltZXMsIHJldmVyc2UpIHtcclxuICAgICAgdmFyIGMgPSB0aGlzLmxhc3QoKVxyXG5cclxuICAgICAgLy8gc3RvcmUgdG90YWwgbG9vcHNcclxuICAgICAgYy5sb29wcyA9ICh0aW1lcyAhPSBudWxsKSA/IHRpbWVzIDogdHJ1ZVxyXG4gICAgICBjLmxvb3AgPSAwXHJcblxyXG4gICAgICBpZihyZXZlcnNlKSBjLnJldmVyc2luZyA9IHRydWVcclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvLyBwYXVzZXMgdGhlIGFuaW1hdGlvblxyXG4gICwgcGF1c2U6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZVxyXG4gICAgICB0aGlzLnN0b3BBbmltRnJhbWUoKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvLyB1bnBhdXNlIHRoZSBhbmltYXRpb25cclxuICAsIHBsYXk6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmKCF0aGlzLnBhdXNlZCkgcmV0dXJuIHRoaXNcclxuICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZVxyXG4gICAgICAvLyBXZSB1c2UgYW4gYWJzb2x1dGUgcG9zaXRpb24gaGVyZSBzbyB0aGF0IHRoZSBkZWxheSBiZWZvcmUgdGhlIGFuaW1hdGlvbiBjYW4gYmUgcGF1c2VkXHJcbiAgICAgIHJldHVybiB0aGlzLmF0KHRoaXMuYWJzUG9zLCB0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdG9nZ2xlIG9yIHNldCB0aGUgZGlyZWN0aW9uIG9mIHRoZSBhbmltYXRpb25cclxuICAgICAqIHRydWUgc2V0cyBkaXJlY3Rpb24gdG8gYmFja3dhcmRzIHdoaWxlIGZhbHNlIHNldHMgaXQgdG8gZm9yd2FyZHNcclxuICAgICAqIEBwYXJhbSByZXZlcnNlZCBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0byByZXZlcnNlIHRoZSBhbmltYXRpb24gb3Igbm90IChkZWZhdWx0OiB0b2dnbGUgdGhlIHJldmVyc2Ugc3RhdHVzKVxyXG4gICAgICogQHJldHVybiB0aGlzXHJcbiAgICAgKi9cclxuICAsIHJldmVyc2U6IGZ1bmN0aW9uKHJldmVyc2VkKXtcclxuICAgICAgdmFyIGMgPSB0aGlzLmxhc3QoKVxyXG5cclxuICAgICAgaWYodHlwZW9mIHJldmVyc2VkID09ICd1bmRlZmluZWQnKSBjLnJldmVyc2VkID0gIWMucmV2ZXJzZWRcclxuICAgICAgZWxzZSBjLnJldmVyc2VkID0gcmV2ZXJzZWRcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyBhIGZsb2F0IGZyb20gMC0xIGluZGljYXRpbmcgdGhlIHByb2dyZXNzIG9mIHRoZSBjdXJyZW50IGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIGVhc2VkIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSByZXR1cm5lZCBwb3NpdGlvbiBzaG91bGQgYmUgZWFzZWQgb3Igbm90XHJcbiAgICAgKiBAcmV0dXJuIG51bWJlclxyXG4gICAgICovXHJcbiAgLCBwcm9ncmVzczogZnVuY3Rpb24oZWFzZUl0KXtcclxuICAgICAgcmV0dXJuIGVhc2VJdCA/IHRoaXMuc2l0dWF0aW9uLmVhc2UodGhpcy5wb3MpIDogdGhpcy5wb3NcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZHMgYSBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgY3VycmVudCBhbmltYXRpb24gaXMgZmluaXNoZWRcclxuICAgICAqIEBwYXJhbSBmbiBGdW5jdGlvbiB3aGljaCBzaG91bGQgYmUgZXhlY3V0ZWQgYXMgY2FsbGJhY2tcclxuICAgICAqIEByZXR1cm4gbnVtYmVyXHJcbiAgICAgKi9cclxuICAsIGFmdGVyOiBmdW5jdGlvbihmbil7XHJcbiAgICAgIHZhciBjID0gdGhpcy5sYXN0KClcclxuICAgICAgICAsIHdyYXBwZXIgPSBmdW5jdGlvbiB3cmFwcGVyKGUpe1xyXG4gICAgICAgICAgICBpZihlLmRldGFpbC5zaXR1YXRpb24gPT0gYyl7XHJcbiAgICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBjKVxyXG4gICAgICAgICAgICAgIHRoaXMub2ZmKCdmaW5pc2hlZC5meCcsIHdyYXBwZXIpIC8vIHByZXZlbnQgbWVtb3J5IGxlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50YXJnZXQoKS5vbignZmluaXNoZWQuZngnLCB3cmFwcGVyKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuX2NhbGxTdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkcyBhIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCB3aGVuZXZlciBvbmUgYW5pbWF0aW9uIHN0ZXAgaXMgcGVyZm9ybWVkXHJcbiAgLCBkdXJpbmc6IGZ1bmN0aW9uKGZuKXtcclxuICAgICAgdmFyIGMgPSB0aGlzLmxhc3QoKVxyXG4gICAgICAgICwgd3JhcHBlciA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZihlLmRldGFpbC5zaXR1YXRpb24gPT0gYyl7XHJcbiAgICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBlLmRldGFpbC5wb3MsIFNWRy5tb3JwaChlLmRldGFpbC5wb3MpLCBlLmRldGFpbC5lYXNlZCwgYylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgLy8gc2VlIGFib3ZlXHJcbiAgICAgIHRoaXMudGFyZ2V0KCkub2ZmKCdkdXJpbmcuZngnLCB3cmFwcGVyKS5vbignZHVyaW5nLmZ4Jywgd3JhcHBlcilcclxuXHJcbiAgICAgIHRoaXMuYWZ0ZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm9mZignZHVyaW5nLmZ4Jywgd3JhcHBlcilcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLl9jYWxsU3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhbGxzIGFmdGVyIEFMTCBhbmltYXRpb25zIGluIHRoZSBxdWV1ZSBhcmUgZmluaXNoZWRcclxuICAsIGFmdGVyQWxsOiBmdW5jdGlvbihmbil7XHJcbiAgICAgIHZhciB3cmFwcGVyID0gZnVuY3Rpb24gd3JhcHBlcihlKXtcclxuICAgICAgICAgICAgZm4uY2FsbCh0aGlzKVxyXG4gICAgICAgICAgICB0aGlzLm9mZignYWxsZmluaXNoZWQuZngnLCB3cmFwcGVyKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgLy8gc2VlIGFib3ZlXHJcbiAgICAgIHRoaXMudGFyZ2V0KCkub2ZmKCdhbGxmaW5pc2hlZC5meCcsIHdyYXBwZXIpLm9uKCdhbGxmaW5pc2hlZC5meCcsIHdyYXBwZXIpXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5fY2FsbFN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICAvLyBjYWxscyBvbiBldmVyeSBhbmltYXRpb24gc3RlcCBmb3IgYWxsIGFuaW1hdGlvbnNcclxuICAsIGR1cmluZ0FsbDogZnVuY3Rpb24oZm4pe1xyXG4gICAgICB2YXIgd3JhcHBlciA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMsIGUuZGV0YWlsLnBvcywgU1ZHLm1vcnBoKGUuZGV0YWlsLnBvcyksIGUuZGV0YWlsLmVhc2VkLCBlLmRldGFpbC5zaXR1YXRpb24pXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRhcmdldCgpLm9mZignZHVyaW5nLmZ4Jywgd3JhcHBlcikub24oJ2R1cmluZy5meCcsIHdyYXBwZXIpXHJcblxyXG4gICAgICB0aGlzLmFmdGVyQWxsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5vZmYoJ2R1cmluZy5meCcsIHdyYXBwZXIpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5fY2FsbFN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgLCBsYXN0OiBmdW5jdGlvbigpe1xyXG4gICAgICByZXR1cm4gdGhpcy5zaXR1YXRpb25zLmxlbmd0aCA/IHRoaXMuc2l0dWF0aW9uc1t0aGlzLnNpdHVhdGlvbnMubGVuZ3RoLTFdIDogdGhpcy5zaXR1YXRpb25cclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGRzIG9uZSBwcm9wZXJ0eSB0byB0aGUgYW5pbWF0aW9uc1xyXG4gICwgYWRkOiBmdW5jdGlvbihtZXRob2QsIGFyZ3MsIHR5cGUpe1xyXG4gICAgICB0aGlzLmxhc3QoKVt0eXBlIHx8ICdhbmltYXRpb25zJ11bbWV0aG9kXSA9IGFyZ3NcclxuICAgICAgcmV0dXJuIHRoaXMuX2NhbGxTdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIHBlcmZvcm0gb25lIHN0ZXAgb2YgdGhlIGFuaW1hdGlvblxyXG4gICAgICogIEBwYXJhbSBpZ25vcmVUaW1lIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRvIGlnbm9yZSB0aW1lIGFuZCB1c2UgcG9zaXRpb24gZGlyZWN0bHkgb3IgcmVjYWxjdWxhdGUgcG9zaXRpb24gYmFzZWQgb24gdGltZVxyXG4gICAgICogIEByZXR1cm4gdGhpc1xyXG4gICAgICovXHJcbiAgLCBzdGVwOiBmdW5jdGlvbihpZ25vcmVUaW1lKXtcclxuXHJcbiAgICAgIC8vIGNvbnZlcnQgY3VycmVudCB0aW1lIHRvIGFuIGFic29sdXRlIHBvc2l0aW9uXHJcbiAgICAgIGlmKCFpZ25vcmVUaW1lKSB0aGlzLmFic1BvcyA9IHRoaXMudGltZVRvQWJzUG9zKCtuZXcgRGF0ZSlcclxuXHJcbiAgICAgIC8vIFRoaXMgcGFydCBjb252ZXJ0IGFuIGFic29sdXRlIHBvc2l0aW9uIHRvIGEgcG9zaXRpb25cclxuICAgICAgaWYodGhpcy5zaXR1YXRpb24ubG9vcHMgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgdmFyIGFic1BvcywgYWJzUG9zSW50LCBsYXN0TG9vcFxyXG5cclxuICAgICAgICAvLyBJZiB0aGUgYWJzb2x1dGUgcG9zaXRpb24gaXMgYmVsb3cgMCwgd2UganVzdCB0cmVhdCBpdCBhcyBpZiBpdCB3YXMgMFxyXG4gICAgICAgIGFic1BvcyA9IE1hdGgubWF4KHRoaXMuYWJzUG9zLCAwKVxyXG4gICAgICAgIGFic1Bvc0ludCA9IE1hdGguZmxvb3IoYWJzUG9zKVxyXG5cclxuICAgICAgICBpZih0aGlzLnNpdHVhdGlvbi5sb29wcyA9PT0gdHJ1ZSB8fCBhYnNQb3NJbnQgPCB0aGlzLnNpdHVhdGlvbi5sb29wcykge1xyXG4gICAgICAgICAgdGhpcy5wb3MgPSBhYnNQb3MgLSBhYnNQb3NJbnRcclxuICAgICAgICAgIGxhc3RMb29wID0gdGhpcy5zaXR1YXRpb24ubG9vcFxyXG4gICAgICAgICAgdGhpcy5zaXR1YXRpb24ubG9vcCA9IGFic1Bvc0ludFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmFic1BvcyA9IHRoaXMuc2l0dWF0aW9uLmxvb3BzXHJcbiAgICAgICAgICB0aGlzLnBvcyA9IDFcclxuICAgICAgICAgIC8vIFRoZSAtMSBoZXJlIGlzIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCB0byB0b2dnbGUgcmV2ZXJzZWQgd2hlbiBhbGwgdGhlIGxvb3BzIGhhdmUgYmVlbiBjb21wbGV0ZWRcclxuICAgICAgICAgIGxhc3RMb29wID0gdGhpcy5zaXR1YXRpb24ubG9vcCAtIDFcclxuICAgICAgICAgIHRoaXMuc2l0dWF0aW9uLmxvb3AgPSB0aGlzLnNpdHVhdGlvbi5sb29wc1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5zaXR1YXRpb24ucmV2ZXJzaW5nKSB7XHJcbiAgICAgICAgICAvLyBUb2dnbGUgcmV2ZXJzZWQgaWYgYW4gb2RkIG51bWJlciBvZiBsb29wcyBhcyBvY2N1cmVkIHNpbmNlIHRoZSBsYXN0IGNhbGwgb2Ygc3RlcFxyXG4gICAgICAgICAgdGhpcy5zaXR1YXRpb24ucmV2ZXJzZWQgPSB0aGlzLnNpdHVhdGlvbi5yZXZlcnNlZCAhPSBCb29sZWFuKCh0aGlzLnNpdHVhdGlvbi5sb29wIC0gbGFzdExvb3ApICUgMilcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBsb29wLCB0aGUgYWJzb2x1dGUgcG9zaXRpb24gbXVzdCBub3QgYmUgYWJvdmUgMVxyXG4gICAgICAgIHRoaXMuYWJzUG9zID0gTWF0aC5taW4odGhpcy5hYnNQb3MsIDEpXHJcbiAgICAgICAgdGhpcy5wb3MgPSB0aGlzLmFic1Bvc1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyB3aGlsZSB0aGUgYWJzb2x1dGUgcG9zaXRpb24gY2FuIGJlIGJlbG93IDAsIHRoZSBwb3NpdGlvbiBtdXN0IG5vdCBiZSBiZWxvdyAwXHJcbiAgICAgIGlmKHRoaXMucG9zIDwgMCkgdGhpcy5wb3MgPSAwXHJcblxyXG4gICAgICBpZih0aGlzLnNpdHVhdGlvbi5yZXZlcnNlZCkgdGhpcy5wb3MgPSAxIC0gdGhpcy5wb3NcclxuXHJcblxyXG4gICAgICAvLyBhcHBseSBlYXNpbmdcclxuICAgICAgdmFyIGVhc2VkID0gdGhpcy5zaXR1YXRpb24uZWFzZSh0aGlzLnBvcylcclxuXHJcbiAgICAgIC8vIGNhbGwgb25jZS1jYWxsYmFja3NcclxuICAgICAgZm9yKHZhciBpIGluIHRoaXMuc2l0dWF0aW9uLm9uY2Upe1xyXG4gICAgICAgIGlmKGkgPiB0aGlzLmxhc3RQb3MgJiYgaSA8PSBlYXNlZCl7XHJcbiAgICAgICAgICB0aGlzLnNpdHVhdGlvbi5vbmNlW2ldLmNhbGwodGhpcy50YXJnZXQoKSwgdGhpcy5wb3MsIGVhc2VkKVxyXG4gICAgICAgICAgZGVsZXRlIHRoaXMuc2l0dWF0aW9uLm9uY2VbaV1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGZpcmUgZHVyaW5nIGNhbGxiYWNrIHdpdGggcG9zaXRpb24sIGVhc2VkIHBvc2l0aW9uIGFuZCBjdXJyZW50IHNpdHVhdGlvbiBhcyBwYXJhbWV0ZXJcclxuICAgICAgaWYodGhpcy5hY3RpdmUpIHRoaXMudGFyZ2V0KCkuZmlyZSgnZHVyaW5nJywge3BvczogdGhpcy5wb3MsIGVhc2VkOiBlYXNlZCwgZng6IHRoaXMsIHNpdHVhdGlvbjogdGhpcy5zaXR1YXRpb259KVxyXG5cclxuICAgICAgLy8gdGhlIHVzZXIgbWF5IGNhbGwgc3RvcCBvciBmaW5pc2ggaW4gdGhlIGR1cmluZyBjYWxsYmFja1xyXG4gICAgICAvLyBzbyBtYWtlIHN1cmUgdGhhdCB3ZSBzdGlsbCBoYXZlIGEgdmFsaWQgc2l0dWF0aW9uXHJcbiAgICAgIGlmKCF0aGlzLnNpdHVhdGlvbil7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYXBwbHkgdGhlIGFjdHVhbCBhbmltYXRpb24gdG8gZXZlcnkgcHJvcGVydHlcclxuICAgICAgdGhpcy5lYWNoQXQoKVxyXG5cclxuICAgICAgLy8gZG8gZmluYWwgY29kZSB3aGVuIHNpdHVhdGlvbiBpcyBmaW5pc2hlZFxyXG4gICAgICBpZigodGhpcy5wb3MgPT0gMSAmJiAhdGhpcy5zaXR1YXRpb24ucmV2ZXJzZWQpIHx8ICh0aGlzLnNpdHVhdGlvbi5yZXZlcnNlZCAmJiB0aGlzLnBvcyA9PSAwKSl7XHJcblxyXG4gICAgICAgIC8vIHN0b3AgYW5pbWF0aW9uIGNhbGxiYWNrXHJcbiAgICAgICAgdGhpcy5zdG9wQW5pbUZyYW1lKClcclxuXHJcbiAgICAgICAgLy8gZmlyZSBmaW5pc2hlZCBjYWxsYmFjayB3aXRoIGN1cnJlbnQgc2l0dWF0aW9uIGFzIHBhcmFtZXRlclxyXG4gICAgICAgIHRoaXMudGFyZ2V0KCkuZmlyZSgnZmluaXNoZWQnLCB7Zng6dGhpcywgc2l0dWF0aW9uOiB0aGlzLnNpdHVhdGlvbn0pXHJcblxyXG4gICAgICAgIGlmKCF0aGlzLnNpdHVhdGlvbnMubGVuZ3RoKXtcclxuICAgICAgICAgIHRoaXMudGFyZ2V0KCkuZmlyZSgnYWxsZmluaXNoZWQnKVxyXG5cclxuICAgICAgICAgIC8vIFJlY2hlY2sgdGhlIGxlbmd0aCBzaW5jZSB0aGUgdXNlciBtYXkgY2FsbCBhbmltYXRlIGluIHRoZSBhZnRlckFsbCBjYWxsYmFja1xyXG4gICAgICAgICAgaWYoIXRoaXMuc2l0dWF0aW9ucy5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCgpLm9mZignLmZ4JykgLy8gdGhlcmUgc2hvdWxkbnQgYmUgYW55IGJpbmRpbmcgbGVmdCwgYnV0IHRvIG1ha2Ugc3VyZS4uLlxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdGFydCBuZXh0IGFuaW1hdGlvblxyXG4gICAgICAgIGlmKHRoaXMuYWN0aXZlKSB0aGlzLmRlcXVldWUoKVxyXG4gICAgICAgIGVsc2UgdGhpcy5jbGVhckN1cnJlbnQoKVxyXG5cclxuICAgICAgfWVsc2UgaWYoIXRoaXMucGF1c2VkICYmIHRoaXMuYWN0aXZlKXtcclxuICAgICAgICAvLyB3ZSBjb250aW51ZSBhbmltYXRpbmcgd2hlbiB3ZSBhcmUgbm90IGF0IHRoZSBlbmRcclxuICAgICAgICB0aGlzLnN0YXJ0QW5pbUZyYW1lKClcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gc2F2ZSBsYXN0IGVhc2VkIHBvc2l0aW9uIGZvciBvbmNlIGNhbGxiYWNrIHRyaWdnZXJpbmdcclxuICAgICAgdGhpcy5sYXN0UG9zID0gZWFzZWRcclxuICAgICAgcmV0dXJuIHRoaXNcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2FsY3VsYXRlcyB0aGUgc3RlcCBmb3IgZXZlcnkgcHJvcGVydHkgYW5kIGNhbGxzIGJsb2NrIHdpdGggaXRcclxuICAsIGVhY2hBdDogZnVuY3Rpb24oKXtcclxuICAgICAgdmFyIGksIGxlbiwgYXQsIHNlbGYgPSB0aGlzLCB0YXJnZXQgPSB0aGlzLnRhcmdldCgpLCBzID0gdGhpcy5zaXR1YXRpb25cclxuXHJcbiAgICAgIC8vIGFwcGx5IGFuaW1hdGlvbnMgd2hpY2ggY2FuIGJlIGNhbGxlZCB0cm91Z2ggYSBtZXRob2RcclxuICAgICAgZm9yKGkgaW4gcy5hbmltYXRpb25zKXtcclxuXHJcbiAgICAgICAgYXQgPSBbXS5jb25jYXQocy5hbmltYXRpb25zW2ldKS5tYXAoZnVuY3Rpb24oZWwpe1xyXG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiBlbCAhPT0gJ3N0cmluZycgJiYgZWwuYXQgPyBlbC5hdChzLmVhc2Uoc2VsZi5wb3MpLCBzZWxmLnBvcykgOiBlbFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRhcmdldFtpXS5hcHBseSh0YXJnZXQsIGF0KVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYXBwbHkgYW5pbWF0aW9uIHdoaWNoIGhhcyB0byBiZSBhcHBsaWVkIHdpdGggYXR0cigpXHJcbiAgICAgIGZvcihpIGluIHMuYXR0cnMpe1xyXG5cclxuICAgICAgICBhdCA9IFtpXS5jb25jYXQocy5hdHRyc1tpXSkubWFwKGZ1bmN0aW9uKGVsKXtcclxuICAgICAgICAgIHJldHVybiB0eXBlb2YgZWwgIT09ICdzdHJpbmcnICYmIGVsLmF0ID8gZWwuYXQocy5lYXNlKHNlbGYucG9zKSwgc2VsZi5wb3MpIDogZWxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0YXJnZXQuYXR0ci5hcHBseSh0YXJnZXQsIGF0KVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYXBwbHkgYW5pbWF0aW9uIHdoaWNoIGhhcyB0byBiZSBhcHBsaWVkIHdpdGggc3R5bGUoKVxyXG4gICAgICBmb3IoaSBpbiBzLnN0eWxlcyl7XHJcblxyXG4gICAgICAgIGF0ID0gW2ldLmNvbmNhdChzLnN0eWxlc1tpXSkubWFwKGZ1bmN0aW9uKGVsKXtcclxuICAgICAgICAgIHJldHVybiB0eXBlb2YgZWwgIT09ICdzdHJpbmcnICYmIGVsLmF0ID8gZWwuYXQocy5lYXNlKHNlbGYucG9zKSwgc2VsZi5wb3MpIDogZWxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0YXJnZXQuc3R5bGUuYXBwbHkodGFyZ2V0LCBhdClcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGFuaW1hdGUgaW5pdGlhbFRyYW5zZm9ybWF0aW9uIHdoaWNoIGhhcyB0byBiZSBjaGFpbmVkXHJcbiAgICAgIGlmKHMudHJhbnNmb3Jtcy5sZW5ndGgpe1xyXG5cclxuICAgICAgICAvLyBnZXQgaW5pdGlhbCBpbml0aWFsVHJhbnNmb3JtYXRpb25cclxuICAgICAgICBhdCA9IHMuaW5pdGlhbFRyYW5zZm9ybWF0aW9uXHJcbiAgICAgICAgZm9yKGkgPSAwLCBsZW4gPSBzLnRyYW5zZm9ybXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspe1xyXG5cclxuICAgICAgICAgIC8vIGdldCBuZXh0IHRyYW5zZm9ybWF0aW9uIGluIGNoYWluXHJcbiAgICAgICAgICB2YXIgYSA9IHMudHJhbnNmb3Jtc1tpXVxyXG5cclxuICAgICAgICAgIC8vIG11bHRpcGx5IG1hdHJpeCBkaXJlY3RseVxyXG4gICAgICAgICAgaWYoYSBpbnN0YW5jZW9mIFNWRy5NYXRyaXgpe1xyXG5cclxuICAgICAgICAgICAgaWYoYS5yZWxhdGl2ZSl7XHJcbiAgICAgICAgICAgICAgYXQgPSBhdC5tdWx0aXBseShuZXcgU1ZHLk1hdHJpeCgpLm1vcnBoKGEpLmF0KHMuZWFzZSh0aGlzLnBvcykpKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICBhdCA9IGF0Lm1vcnBoKGEpLmF0KHMuZWFzZSh0aGlzLnBvcykpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyB3aGVuIHRyYW5zZm9ybWF0aW9uIGlzIGFic29sdXRlIHdlIGhhdmUgdG8gcmVzZXQgdGhlIG5lZWRlZCB0cmFuc2Zvcm1hdGlvbiBmaXJzdFxyXG4gICAgICAgICAgaWYoIWEucmVsYXRpdmUpXHJcbiAgICAgICAgICAgIGEudW5kbyhhdC5leHRyYWN0KCkpXHJcblxyXG4gICAgICAgICAgLy8gYW5kIHJlYXBwbHkgaXQgYWZ0ZXJcclxuICAgICAgICAgIGF0ID0gYXQubXVsdGlwbHkoYS5hdChzLmVhc2UodGhpcy5wb3MpKSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXQgbmV3IG1hdHJpeCBvbiBlbGVtZW50XHJcbiAgICAgICAgdGFyZ2V0Lm1hdHJpeChhdClcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGFkZHMgYW4gb25jZS1jYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgYXQgYSBzcGVjaWZpYyBwb3NpdGlvbiBhbmQgbmV2ZXIgYWdhaW5cclxuICAsIG9uY2U6IGZ1bmN0aW9uKHBvcywgZm4sIGlzRWFzZWQpe1xyXG4gICAgICB2YXIgYyA9IHRoaXMubGFzdCgpXHJcbiAgICAgIGlmKCFpc0Vhc2VkKSBwb3MgPSBjLmVhc2UocG9zKVxyXG5cclxuICAgICAgYy5vbmNlW3Bvc10gPSBmblxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgLCBfY2FsbFN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe3RoaXMuc3RhcnQoKX0uYmluZCh0aGlzKSwgMClcclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuLCBwYXJlbnQ6IFNWRy5FbGVtZW50XHJcblxyXG4gIC8vIEFkZCBtZXRob2QgdG8gcGFyZW50IGVsZW1lbnRzXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBHZXQgZnggbW9kdWxlIG9yIGNyZWF0ZSBhIG5ldyBvbmUsIHRoZW4gYW5pbWF0ZSB3aXRoIGdpdmVuIGR1cmF0aW9uIGFuZCBlYXNlXHJcbiAgICBhbmltYXRlOiBmdW5jdGlvbihvLCBlYXNlLCBkZWxheSkge1xyXG4gICAgICByZXR1cm4gKHRoaXMuZnggfHwgKHRoaXMuZnggPSBuZXcgU1ZHLkZYKHRoaXMpKSkuYW5pbWF0ZShvLCBlYXNlLCBkZWxheSlcclxuICAgIH1cclxuICAsIGRlbGF5OiBmdW5jdGlvbihkZWxheSl7XHJcbiAgICAgIHJldHVybiAodGhpcy5meCB8fCAodGhpcy5meCA9IG5ldyBTVkcuRlgodGhpcykpKS5kZWxheShkZWxheSlcclxuICAgIH1cclxuICAsIHN0b3A6IGZ1bmN0aW9uKGp1bXBUb0VuZCwgY2xlYXJRdWV1ZSkge1xyXG4gICAgICBpZiAodGhpcy5meClcclxuICAgICAgICB0aGlzLmZ4LnN0b3AoanVtcFRvRW5kLCBjbGVhclF1ZXVlKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAsIGZpbmlzaDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLmZ4KVxyXG4gICAgICAgIHRoaXMuZnguZmluaXNoKClcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBQYXVzZSBjdXJyZW50IGFuaW1hdGlvblxyXG4gICwgcGF1c2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5meClcclxuICAgICAgICB0aGlzLmZ4LnBhdXNlKClcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBQbGF5IHBhdXNlZCBjdXJyZW50IGFuaW1hdGlvblxyXG4gICwgcGxheTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLmZ4KVxyXG4gICAgICAgIHRoaXMuZngucGxheSgpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gU2V0L0dldCB0aGUgc3BlZWQgb2YgdGhlIGFuaW1hdGlvbnNcclxuICAsIHNwZWVkOiBmdW5jdGlvbihzcGVlZCkge1xyXG4gICAgICBpZiAodGhpcy5meClcclxuICAgICAgICBpZiAoc3BlZWQgPT0gbnVsbClcclxuICAgICAgICAgIHJldHVybiB0aGlzLmZ4LnNwZWVkKClcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICB0aGlzLmZ4LnNwZWVkKHNwZWVkKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICB9XHJcblxyXG59KVxyXG5cclxuLy8gTW9ycGhPYmogaXMgdXNlZCB3aGVuZXZlciBubyBtb3JwaGFibGUgb2JqZWN0IGlzIGdpdmVuXHJcblNWRy5Nb3JwaE9iaiA9IFNWRy5pbnZlbnQoe1xyXG5cclxuICBjcmVhdGU6IGZ1bmN0aW9uKGZyb20sIHRvKXtcclxuICAgIC8vIHByZXBhcmUgY29sb3IgZm9yIG1vcnBoaW5nXHJcbiAgICBpZihTVkcuQ29sb3IuaXNDb2xvcih0bykpIHJldHVybiBuZXcgU1ZHLkNvbG9yKGZyb20pLm1vcnBoKHRvKVxyXG4gICAgLy8gY2hlY2sgaWYgd2UgaGF2ZSBhIGxpc3Qgb2YgdmFsdWVzXHJcbiAgICBpZihTVkcucmVnZXguZGVsaW1pdGVyLnRlc3QoZnJvbSkpIHtcclxuICAgICAgLy8gcHJlcGFyZSBwYXRoIGZvciBtb3JwaGluZ1xyXG4gICAgICBpZihTVkcucmVnZXgucGF0aExldHRlcnMudGVzdChmcm9tKSkgcmV0dXJuIG5ldyBTVkcuUGF0aEFycmF5KGZyb20pLm1vcnBoKHRvKVxyXG4gICAgICAvLyBwcmVwYXJlIHZhbHVlIGxpc3QgZm9yIG1vcnBoaW5nXHJcbiAgICAgIGVsc2UgcmV0dXJuIG5ldyBTVkcuQXJyYXkoZnJvbSkubW9ycGgodG8pXHJcbiAgICB9XHJcbiAgICAvLyBwcmVwYXJlIG51bWJlciBmb3IgbW9ycGhpbmdcclxuICAgIGlmKFNWRy5yZWdleC5udW1iZXJBbmRVbml0LnRlc3QodG8pKSByZXR1cm4gbmV3IFNWRy5OdW1iZXIoZnJvbSkubW9ycGgodG8pXHJcblxyXG4gICAgLy8gcHJlcGFyZSBmb3IgcGxhaW4gbW9ycGhpbmdcclxuICAgIHRoaXMudmFsdWUgPSBmcm9tXHJcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gdG9cclxuICB9XHJcblxyXG4sIGV4dGVuZDoge1xyXG4gICAgYXQ6IGZ1bmN0aW9uKHBvcywgcmVhbCl7XHJcbiAgICAgIHJldHVybiByZWFsIDwgMSA/IHRoaXMudmFsdWUgOiB0aGlzLmRlc3RpbmF0aW9uXHJcbiAgICB9LFxyXG5cclxuICAgIHZhbHVlT2Y6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxuXHJcblNWRy5leHRlbmQoU1ZHLkZYLCB7XHJcbiAgLy8gQWRkIGFuaW1hdGFibGUgYXR0cmlidXRlc1xyXG4gIGF0dHI6IGZ1bmN0aW9uKGEsIHYsIHJlbGF0aXZlKSB7XHJcbiAgICAvLyBhcHBseSBhdHRyaWJ1dGVzIGluZGl2aWR1YWxseVxyXG4gICAgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnKSB7XHJcbiAgICAgIGZvciAodmFyIGtleSBpbiBhKVxyXG4gICAgICAgIHRoaXMuYXR0cihrZXksIGFba2V5XSlcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFkZChhLCB2LCAnYXR0cnMnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIC8vIEFkZCBhbmltYXRhYmxlIHN0eWxlc1xyXG4sIHN0eWxlOiBmdW5jdGlvbihzLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIHMgPT0gJ29iamVjdCcpXHJcbiAgICAgIGZvciAodmFyIGtleSBpbiBzKVxyXG4gICAgICAgIHRoaXMuc3R5bGUoa2V5LCBzW2tleV0pXHJcblxyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLmFkZChzLCB2LCAnc3R5bGVzJylcclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICAvLyBBbmltYXRhYmxlIHgtYXhpc1xyXG4sIHg6IGZ1bmN0aW9uKHgsIHJlbGF0aXZlKSB7XHJcbiAgICBpZih0aGlzLnRhcmdldCgpIGluc3RhbmNlb2YgU1ZHLkcpe1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybSh7eDp4fSwgcmVsYXRpdmUpXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG51bSA9IG5ldyBTVkcuTnVtYmVyKHgpXHJcbiAgICBudW0ucmVsYXRpdmUgPSByZWxhdGl2ZVxyXG4gICAgcmV0dXJuIHRoaXMuYWRkKCd4JywgbnVtKVxyXG4gIH1cclxuICAvLyBBbmltYXRhYmxlIHktYXhpc1xyXG4sIHk6IGZ1bmN0aW9uKHksIHJlbGF0aXZlKSB7XHJcbiAgICBpZih0aGlzLnRhcmdldCgpIGluc3RhbmNlb2YgU1ZHLkcpe1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybSh7eTp5fSwgcmVsYXRpdmUpXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG51bSA9IG5ldyBTVkcuTnVtYmVyKHkpXHJcbiAgICBudW0ucmVsYXRpdmUgPSByZWxhdGl2ZVxyXG4gICAgcmV0dXJuIHRoaXMuYWRkKCd5JywgbnVtKVxyXG4gIH1cclxuICAvLyBBbmltYXRhYmxlIGNlbnRlciB4LWF4aXNcclxuLCBjeDogZnVuY3Rpb24oeCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYWRkKCdjeCcsIG5ldyBTVkcuTnVtYmVyKHgpKVxyXG4gIH1cclxuICAvLyBBbmltYXRhYmxlIGNlbnRlciB5LWF4aXNcclxuLCBjeTogZnVuY3Rpb24oeSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYWRkKCdjeScsIG5ldyBTVkcuTnVtYmVyKHkpKVxyXG4gIH1cclxuICAvLyBBZGQgYW5pbWF0YWJsZSBtb3ZlXHJcbiwgbW92ZTogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgcmV0dXJuIHRoaXMueCh4KS55KHkpXHJcbiAgfVxyXG4gIC8vIEFkZCBhbmltYXRhYmxlIGNlbnRlclxyXG4sIGNlbnRlcjogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgcmV0dXJuIHRoaXMuY3goeCkuY3koeSlcclxuICB9XHJcbiAgLy8gQWRkIGFuaW1hdGFibGUgc2l6ZVxyXG4sIHNpemU6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIGlmICh0aGlzLnRhcmdldCgpIGluc3RhbmNlb2YgU1ZHLlRleHQpIHtcclxuICAgICAgLy8gYW5pbWF0ZSBmb250IHNpemUgZm9yIFRleHQgZWxlbWVudHNcclxuICAgICAgdGhpcy5hdHRyKCdmb250LXNpemUnLCB3aWR0aClcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBhbmltYXRlIGJib3ggYmFzZWQgc2l6ZSBmb3IgYWxsIG90aGVyIGVsZW1lbnRzXHJcbiAgICAgIHZhciBib3hcclxuXHJcbiAgICAgIGlmKCF3aWR0aCB8fCAhaGVpZ2h0KXtcclxuICAgICAgICBib3ggPSB0aGlzLnRhcmdldCgpLmJib3goKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZighd2lkdGgpe1xyXG4gICAgICAgIHdpZHRoID0gYm94LndpZHRoIC8gYm94LmhlaWdodCAgKiBoZWlnaHRcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIWhlaWdodCl7XHJcbiAgICAgICAgaGVpZ2h0ID0gYm94LmhlaWdodCAvIGJveC53aWR0aCAgKiB3aWR0aFxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFkZCgnd2lkdGgnICwgbmV3IFNWRy5OdW1iZXIod2lkdGgpKVxyXG4gICAgICAgICAgLmFkZCgnaGVpZ2h0JywgbmV3IFNWRy5OdW1iZXIoaGVpZ2h0KSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgLy8gQWRkIGFuaW1hdGFibGUgd2lkdGhcclxuLCB3aWR0aDogZnVuY3Rpb24od2lkdGgpIHtcclxuICAgIHJldHVybiB0aGlzLmFkZCgnd2lkdGgnLCBuZXcgU1ZHLk51bWJlcih3aWR0aCkpXHJcbiAgfVxyXG4gIC8vIEFkZCBhbmltYXRhYmxlIGhlaWdodFxyXG4sIGhlaWdodDogZnVuY3Rpb24oaGVpZ2h0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5hZGQoJ2hlaWdodCcsIG5ldyBTVkcuTnVtYmVyKGhlaWdodCkpXHJcbiAgfVxyXG4gIC8vIEFkZCBhbmltYXRhYmxlIHBsb3RcclxuLCBwbG90OiBmdW5jdGlvbihhLCBiLCBjLCBkKSB7XHJcbiAgICAvLyBMaW5lcyBjYW4gYmUgcGxvdHRlZCB3aXRoIDQgYXJndW1lbnRzXHJcbiAgICBpZihhcmd1bWVudHMubGVuZ3RoID09IDQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucGxvdChbYSwgYiwgYywgZF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuYWRkKCdwbG90JywgbmV3ICh0aGlzLnRhcmdldCgpLm1vcnBoQXJyYXkpKGEpKVxyXG4gIH1cclxuICAvLyBBZGQgbGVhZGluZyBtZXRob2RcclxuLCBsZWFkaW5nOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0KCkubGVhZGluZyA/XHJcbiAgICAgIHRoaXMuYWRkKCdsZWFkaW5nJywgbmV3IFNWRy5OdW1iZXIodmFsdWUpKSA6XHJcbiAgICAgIHRoaXNcclxuICB9XHJcbiAgLy8gQWRkIGFuaW1hdGFibGUgdmlld2JveFxyXG4sIHZpZXdib3g6IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIGlmICh0aGlzLnRhcmdldCgpIGluc3RhbmNlb2YgU1ZHLkNvbnRhaW5lcikge1xyXG4gICAgICB0aGlzLmFkZCgndmlld2JveCcsIG5ldyBTVkcuVmlld0JveCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuLCB1cGRhdGU6IGZ1bmN0aW9uKG8pIHtcclxuICAgIGlmICh0aGlzLnRhcmdldCgpIGluc3RhbmNlb2YgU1ZHLlN0b3ApIHtcclxuICAgICAgaWYgKHR5cGVvZiBvID09ICdudW1iZXInIHx8IG8gaW5zdGFuY2VvZiBTVkcuTnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKHtcclxuICAgICAgICAgIG9mZnNldDogIGFyZ3VtZW50c1swXVxyXG4gICAgICAgICwgY29sb3I6ICAgYXJndW1lbnRzWzFdXHJcbiAgICAgICAgLCBvcGFjaXR5OiBhcmd1bWVudHNbMl1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoby5vcGFjaXR5ICE9IG51bGwpIHRoaXMuYXR0cignc3RvcC1vcGFjaXR5Jywgby5vcGFjaXR5KVxyXG4gICAgICBpZiAoby5jb2xvciAgICE9IG51bGwpIHRoaXMuYXR0cignc3RvcC1jb2xvcicsIG8uY29sb3IpXHJcbiAgICAgIGlmIChvLm9mZnNldCAgIT0gbnVsbCkgdGhpcy5hdHRyKCdvZmZzZXQnLCBvLm9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxufSlcclxuXG5TVkcuQm94ID0gU1ZHLmludmVudCh7XHJcbiAgY3JlYXRlOiBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBpZiAodHlwZW9mIHggPT0gJ29iamVjdCcgJiYgISh4IGluc3RhbmNlb2YgU1ZHLkVsZW1lbnQpKSB7XHJcbiAgICAgIC8vIGNocm9tZXMgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGhhcyBubyB4IGFuZCB5IHByb3BlcnR5XHJcbiAgICAgIHJldHVybiBTVkcuQm94LmNhbGwodGhpcywgeC5sZWZ0ICE9IG51bGwgPyB4LmxlZnQgOiB4LnggLCB4LnRvcCAhPSBudWxsID8geC50b3AgOiB4LnksIHgud2lkdGgsIHguaGVpZ2h0KVxyXG4gICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDQpIHtcclxuICAgICAgdGhpcy54ID0geFxyXG4gICAgICB0aGlzLnkgPSB5XHJcbiAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxyXG4gICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZCBjZW50ZXIsIHJpZ2h0LCBib3R0b20uLi5cclxuICAgIGZ1bGxCb3godGhpcylcclxuICB9XHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBNZXJnZSByZWN0IGJveCB3aXRoIGFub3RoZXIsIHJldHVybiBhIG5ldyBpbnN0YW5jZVxyXG4gICAgbWVyZ2U6IGZ1bmN0aW9uKGJveCkge1xyXG4gICAgICB2YXIgYiA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKClcclxuXHJcbiAgICAgIC8vIG1lcmdlIGJveGVzXHJcbiAgICAgIGIueCAgICAgID0gTWF0aC5taW4odGhpcy54LCBib3gueClcclxuICAgICAgYi55ICAgICAgPSBNYXRoLm1pbih0aGlzLnksIGJveC55KVxyXG4gICAgICBiLndpZHRoICA9IE1hdGgubWF4KHRoaXMueCArIHRoaXMud2lkdGgsICBib3gueCArIGJveC53aWR0aCkgIC0gYi54XHJcbiAgICAgIGIuaGVpZ2h0ID0gTWF0aC5tYXgodGhpcy55ICsgdGhpcy5oZWlnaHQsIGJveC55ICsgYm94LmhlaWdodCkgLSBiLnlcclxuXHJcbiAgICAgIHJldHVybiBmdWxsQm94KGIpXHJcbiAgICB9XHJcblxyXG4gICwgdHJhbnNmb3JtOiBmdW5jdGlvbihtKSB7XHJcbiAgICAgIHZhciB4TWluID0gSW5maW5pdHksIHhNYXggPSAtSW5maW5pdHksIHlNaW4gPSBJbmZpbml0eSwgeU1heCA9IC1JbmZpbml0eSwgcCwgYmJveFxyXG5cclxuICAgICAgdmFyIHB0cyA9IFtcclxuICAgICAgICBuZXcgU1ZHLlBvaW50KHRoaXMueCwgdGhpcy55KSxcclxuICAgICAgICBuZXcgU1ZHLlBvaW50KHRoaXMueDIsIHRoaXMueSksXHJcbiAgICAgICAgbmV3IFNWRy5Qb2ludCh0aGlzLngsIHRoaXMueTIpLFxyXG4gICAgICAgIG5ldyBTVkcuUG9pbnQodGhpcy54MiwgdGhpcy55MilcclxuICAgICAgXVxyXG5cclxuICAgICAgcHRzLmZvckVhY2goZnVuY3Rpb24ocCkge1xyXG4gICAgICAgIHAgPSBwLnRyYW5zZm9ybShtKVxyXG4gICAgICAgIHhNaW4gPSBNYXRoLm1pbih4TWluLHAueClcclxuICAgICAgICB4TWF4ID0gTWF0aC5tYXgoeE1heCxwLngpXHJcbiAgICAgICAgeU1pbiA9IE1hdGgubWluKHlNaW4scC55KVxyXG4gICAgICAgIHlNYXggPSBNYXRoLm1heCh5TWF4LHAueSlcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGJib3ggPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcigpXHJcbiAgICAgIGJib3gueCA9IHhNaW5cclxuICAgICAgYmJveC53aWR0aCA9IHhNYXgteE1pblxyXG4gICAgICBiYm94LnkgPSB5TWluXHJcbiAgICAgIGJib3guaGVpZ2h0ID0geU1heC15TWluXHJcblxyXG4gICAgICBmdWxsQm94KGJib3gpXHJcblxyXG4gICAgICByZXR1cm4gYmJveFxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcblNWRy5CQm94ID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZVxyXG4gIGNyZWF0ZTogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgU1ZHLkJveC5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpXHJcblxyXG4gICAgLy8gZ2V0IHZhbHVlcyBpZiBlbGVtZW50IGlzIGdpdmVuXHJcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNWRy5FbGVtZW50KSB7XHJcbiAgICAgIHZhciBib3hcclxuXHJcbiAgICAgIC8vIHllcyB0aGlzIGlzIHVnbHksIGJ1dCBGaXJlZm94IGNhbiBiZSBhIHBhaW4gd2hlbiBpdCBjb21lcyB0byBlbGVtZW50cyB0aGF0IGFyZSBub3QgeWV0IHJlbmRlcmVkXHJcbiAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKXtcclxuICAgICAgICAgIC8vIFRoaXMgaXMgSUUgLSBpdCBkb2VzIG5vdCBzdXBwb3J0IGNvbnRhaW5zKCkgZm9yIHRvcC1sZXZlbCBTVkdzXHJcbiAgICAgICAgICB2YXIgdG9wUGFyZW50ID0gZWxlbWVudC5ub2RlXHJcbiAgICAgICAgICB3aGlsZSAodG9wUGFyZW50LnBhcmVudE5vZGUpe1xyXG4gICAgICAgICAgICB0b3BQYXJlbnQgPSB0b3BQYXJlbnQucGFyZW50Tm9kZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRvcFBhcmVudCAhPSBkb2N1bWVudCkgdGhyb3cgbmV3IEV4Y2VwdGlvbignRWxlbWVudCBub3QgaW4gdGhlIGRvbScpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIHRoZSBlbGVtZW50IGlzIE5PVCBpbiB0aGUgZG9tLCB0aHJvdyBlcnJvclxyXG4gICAgICAgICAgaWYoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhlbGVtZW50Lm5vZGUpKSB0aHJvdyBuZXcgRXhjZXB0aW9uKCdFbGVtZW50IG5vdCBpbiB0aGUgZG9tJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZpbmQgbmF0aXZlIGJib3hcclxuICAgICAgICBib3ggPSBlbGVtZW50Lm5vZGUuZ2V0QkJveCgpXHJcbiAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIGlmKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkcuU2hhcGUpe1xyXG4gICAgICAgICAgdmFyIGNsb25lID0gZWxlbWVudC5jbG9uZShTVkcucGFyc2VyLmRyYXcuaW5zdGFuY2UpLnNob3coKVxyXG4gICAgICAgICAgYm94ID0gY2xvbmUubm9kZS5nZXRCQm94KClcclxuICAgICAgICAgIGNsb25lLnJlbW92ZSgpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBib3ggPSB7XHJcbiAgICAgICAgICAgIHg6ICAgICAgZWxlbWVudC5ub2RlLmNsaWVudExlZnRcclxuICAgICAgICAgICwgeTogICAgICBlbGVtZW50Lm5vZGUuY2xpZW50VG9wXHJcbiAgICAgICAgICAsIHdpZHRoOiAgZWxlbWVudC5ub2RlLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAsIGhlaWdodDogZWxlbWVudC5ub2RlLmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgU1ZHLkJveC5jYWxsKHRoaXMsIGJveClcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvLyBEZWZpbmUgYW5jZXN0b3JcclxuLCBpbmhlcml0OiBTVkcuQm94XHJcblxyXG4gIC8vIERlZmluZSBQYXJlbnRcclxuLCBwYXJlbnQ6IFNWRy5FbGVtZW50XHJcblxyXG4gIC8vIENvbnN0cnVjdG9yXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBHZXQgYm91bmRpbmcgYm94XHJcbiAgICBiYm94OiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIG5ldyBTVkcuQkJveCh0aGlzKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pXHJcblxyXG5TVkcuQkJveC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTVkcuQkJveFxyXG5cclxuXHJcblNWRy5leHRlbmQoU1ZHLkVsZW1lbnQsIHtcclxuICB0Ym94OiBmdW5jdGlvbigpe1xyXG4gICAgY29uc29sZS53YXJuKCdVc2Ugb2YgVEJveCBpcyBkZXByZWNhdGVkIGFuZCBtYXBwZWQgdG8gUkJveC4gVXNlIC5yYm94KCkgaW5zdGVhZC4nKVxyXG4gICAgcmV0dXJuIHRoaXMucmJveCh0aGlzLmRvYygpKVxyXG4gIH1cclxufSlcclxuXHJcblNWRy5SQm94ID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZVxyXG4gIGNyZWF0ZTogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgU1ZHLkJveC5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpXHJcblxyXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkcuRWxlbWVudCkge1xyXG4gICAgICBTVkcuQm94LmNhbGwodGhpcywgZWxlbWVudC5ub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiwgaW5oZXJpdDogU1ZHLkJveFxyXG5cclxuICAvLyBkZWZpbmUgUGFyZW50XHJcbiwgcGFyZW50OiBTVkcuRWxlbWVudFxyXG5cclxuLCBleHRlbmQ6IHtcclxuICAgIGFkZE9mZnNldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIG9mZnNldCBieSB3aW5kb3cgc2Nyb2xsIHBvc2l0aW9uLCBiZWNhdXNlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBjaGFuZ2VzIHdoZW4gd2luZG93IGlzIHNjcm9sbGVkXHJcbiAgICAgIHRoaXMueCArPSB3aW5kb3cucGFnZVhPZmZzZXRcclxuICAgICAgdGhpcy55ICs9IHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ29uc3RydWN0b3JcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIEdldCByZWN0IGJveFxyXG4gICAgcmJveDogZnVuY3Rpb24oZWwpIHtcclxuICAgICAgaWYgKGVsKSByZXR1cm4gbmV3IFNWRy5SQm94KHRoaXMpLnRyYW5zZm9ybShlbC5zY3JlZW5DVE0oKS5pbnZlcnNlKCkpXHJcbiAgICAgIHJldHVybiBuZXcgU1ZHLlJCb3godGhpcykuYWRkT2Zmc2V0KClcclxuICAgIH1cclxuICB9XHJcblxyXG59KVxyXG5cclxuU1ZHLlJCb3gucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU1ZHLlJCb3hcclxuXG5TVkcuTWF0cml4ID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZVxyXG4gIGNyZWF0ZTogZnVuY3Rpb24oc291cmNlKSB7XHJcbiAgICB2YXIgaSwgYmFzZSA9IGFycmF5VG9NYXRyaXgoWzEsIDAsIDAsIDEsIDAsIDBdKVxyXG5cclxuICAgIC8vIGVuc3VyZSBzb3VyY2UgYXMgb2JqZWN0XHJcbiAgICBzb3VyY2UgPSBzb3VyY2UgaW5zdGFuY2VvZiBTVkcuRWxlbWVudCA/XHJcbiAgICAgIHNvdXJjZS5tYXRyaXhpZnkoKSA6XHJcbiAgICB0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJyA/XHJcbiAgICAgIGFycmF5VG9NYXRyaXgoc291cmNlLnNwbGl0KFNWRy5yZWdleC5kZWxpbWl0ZXIpLm1hcChwYXJzZUZsb2F0KSkgOlxyXG4gICAgYXJndW1lbnRzLmxlbmd0aCA9PSA2ID9cclxuICAgICAgYXJyYXlUb01hdHJpeChbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpIDpcclxuICAgIEFycmF5LmlzQXJyYXkoc291cmNlKSA/XHJcbiAgICAgIGFycmF5VG9NYXRyaXgoc291cmNlKSA6XHJcbiAgICB0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0JyA/XHJcbiAgICAgIHNvdXJjZSA6IGJhc2VcclxuXHJcbiAgICAvLyBtZXJnZSBzb3VyY2VcclxuICAgIGZvciAoaSA9IGFiY2RlZi5sZW5ndGggLSAxOyBpID49IDA7IC0taSlcclxuICAgICAgdGhpc1thYmNkZWZbaV1dID0gc291cmNlW2FiY2RlZltpXV0gIT0gbnVsbCA/XHJcbiAgICAgICAgc291cmNlW2FiY2RlZltpXV0gOiBiYXNlW2FiY2RlZltpXV1cclxuICB9XHJcblxyXG4gIC8vIEFkZCBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBFeHRyYWN0IGluZGl2aWR1YWwgdHJhbnNmb3JtYXRpb25zXHJcbiAgICBleHRyYWN0OiBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gZmluZCBkZWx0YSB0cmFuc2Zvcm0gcG9pbnRzXHJcbiAgICAgIHZhciBweCAgICA9IGRlbHRhVHJhbnNmb3JtUG9pbnQodGhpcywgMCwgMSlcclxuICAgICAgICAsIHB5ICAgID0gZGVsdGFUcmFuc2Zvcm1Qb2ludCh0aGlzLCAxLCAwKVxyXG4gICAgICAgICwgc2tld1ggPSAxODAgLyBNYXRoLlBJICogTWF0aC5hdGFuMihweC55LCBweC54KSAtIDkwXHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uXHJcbiAgICAgICAgeDogICAgICAgIHRoaXMuZVxyXG4gICAgICAsIHk6ICAgICAgICB0aGlzLmZcclxuICAgICAgLCB0cmFuc2Zvcm1lZFg6KHRoaXMuZSAqIE1hdGguY29zKHNrZXdYICogTWF0aC5QSSAvIDE4MCkgKyB0aGlzLmYgKiBNYXRoLnNpbihza2V3WCAqIE1hdGguUEkgLyAxODApKSAvIE1hdGguc3FydCh0aGlzLmEgKiB0aGlzLmEgKyB0aGlzLmIgKiB0aGlzLmIpXHJcbiAgICAgICwgdHJhbnNmb3JtZWRZOih0aGlzLmYgKiBNYXRoLmNvcyhza2V3WCAqIE1hdGguUEkgLyAxODApICsgdGhpcy5lICogTWF0aC5zaW4oLXNrZXdYICogTWF0aC5QSSAvIDE4MCkpIC8gTWF0aC5zcXJ0KHRoaXMuYyAqIHRoaXMuYyArIHRoaXMuZCAqIHRoaXMuZClcclxuICAgICAgICAvLyBza2V3XHJcbiAgICAgICwgc2tld1g6ICAgIC1za2V3WFxyXG4gICAgICAsIHNrZXdZOiAgICAxODAgLyBNYXRoLlBJICogTWF0aC5hdGFuMihweS55LCBweS54KVxyXG4gICAgICAgIC8vIHNjYWxlXHJcbiAgICAgICwgc2NhbGVYOiAgIE1hdGguc3FydCh0aGlzLmEgKiB0aGlzLmEgKyB0aGlzLmIgKiB0aGlzLmIpXHJcbiAgICAgICwgc2NhbGVZOiAgIE1hdGguc3FydCh0aGlzLmMgKiB0aGlzLmMgKyB0aGlzLmQgKiB0aGlzLmQpXHJcbiAgICAgICAgLy8gcm90YXRpb25cclxuICAgICAgLCByb3RhdGlvbjogc2tld1hcclxuICAgICAgLCBhOiB0aGlzLmFcclxuICAgICAgLCBiOiB0aGlzLmJcclxuICAgICAgLCBjOiB0aGlzLmNcclxuICAgICAgLCBkOiB0aGlzLmRcclxuICAgICAgLCBlOiB0aGlzLmVcclxuICAgICAgLCBmOiB0aGlzLmZcclxuICAgICAgLCBtYXRyaXg6IG5ldyBTVkcuTWF0cml4KHRoaXMpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIENsb25lIG1hdHJpeFxyXG4gICwgY2xvbmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFNWRy5NYXRyaXgodGhpcylcclxuICAgIH1cclxuICAgIC8vIE1vcnBoIG9uZSBtYXRyaXggaW50byBhbm90aGVyXHJcbiAgLCBtb3JwaDogZnVuY3Rpb24obWF0cml4KSB7XHJcbiAgICAgIC8vIHN0b3JlIG5ldyBkZXN0aW5hdGlvblxyXG4gICAgICB0aGlzLmRlc3RpbmF0aW9uID0gbmV3IFNWRy5NYXRyaXgobWF0cml4KVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIEdldCBtb3JwaGVkIG1hdHJpeCBhdCBhIGdpdmVuIHBvc2l0aW9uXHJcbiAgLCBhdDogZnVuY3Rpb24ocG9zKSB7XHJcbiAgICAgIC8vIG1ha2Ugc3VyZSBhIGRlc3RpbmF0aW9uIGlzIGRlZmluZWRcclxuICAgICAgaWYgKCF0aGlzLmRlc3RpbmF0aW9uKSByZXR1cm4gdGhpc1xyXG5cclxuICAgICAgLy8gY2FsY3VsYXRlIG1vcnBoZWQgbWF0cml4IGF0IGEgZ2l2ZW4gcG9zaXRpb25cclxuICAgICAgdmFyIG1hdHJpeCA9IG5ldyBTVkcuTWF0cml4KHtcclxuICAgICAgICBhOiB0aGlzLmEgKyAodGhpcy5kZXN0aW5hdGlvbi5hIC0gdGhpcy5hKSAqIHBvc1xyXG4gICAgICAsIGI6IHRoaXMuYiArICh0aGlzLmRlc3RpbmF0aW9uLmIgLSB0aGlzLmIpICogcG9zXHJcbiAgICAgICwgYzogdGhpcy5jICsgKHRoaXMuZGVzdGluYXRpb24uYyAtIHRoaXMuYykgKiBwb3NcclxuICAgICAgLCBkOiB0aGlzLmQgKyAodGhpcy5kZXN0aW5hdGlvbi5kIC0gdGhpcy5kKSAqIHBvc1xyXG4gICAgICAsIGU6IHRoaXMuZSArICh0aGlzLmRlc3RpbmF0aW9uLmUgLSB0aGlzLmUpICogcG9zXHJcbiAgICAgICwgZjogdGhpcy5mICsgKHRoaXMuZGVzdGluYXRpb24uZiAtIHRoaXMuZikgKiBwb3NcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiBtYXRyaXhcclxuICAgIH1cclxuICAgIC8vIE11bHRpcGxpZXMgYnkgZ2l2ZW4gbWF0cml4XHJcbiAgLCBtdWx0aXBseTogZnVuY3Rpb24obWF0cml4KSB7XHJcbiAgICAgIHJldHVybiBuZXcgU1ZHLk1hdHJpeCh0aGlzLm5hdGl2ZSgpLm11bHRpcGx5KHBhcnNlTWF0cml4KG1hdHJpeCkubmF0aXZlKCkpKVxyXG4gICAgfVxyXG4gICAgLy8gSW52ZXJzZXMgbWF0cml4XHJcbiAgLCBpbnZlcnNlOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIG5ldyBTVkcuTWF0cml4KHRoaXMubmF0aXZlKCkuaW52ZXJzZSgpKVxyXG4gICAgfVxyXG4gICAgLy8gVHJhbnNsYXRlIG1hdHJpeFxyXG4gICwgdHJhbnNsYXRlOiBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICAgIHJldHVybiBuZXcgU1ZHLk1hdHJpeCh0aGlzLm5hdGl2ZSgpLnRyYW5zbGF0ZSh4IHx8IDAsIHkgfHwgMCkpXHJcbiAgICB9XHJcbiAgICAvLyBTY2FsZSBtYXRyaXhcclxuICAsIHNjYWxlOiBmdW5jdGlvbih4LCB5LCBjeCwgY3kpIHtcclxuICAgICAgLy8gc3VwcG9ydCB1bmlmb3JtYWwgc2NhbGVcclxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgIHkgPSB4XHJcbiAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgY3kgPSBjeFxyXG4gICAgICAgIGN4ID0geVxyXG4gICAgICAgIHkgPSB4XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmFyb3VuZChjeCwgY3ksIG5ldyBTVkcuTWF0cml4KHgsIDAsIDAsIHksIDAsIDApKVxyXG4gICAgfVxyXG4gICAgLy8gUm90YXRlIG1hdHJpeFxyXG4gICwgcm90YXRlOiBmdW5jdGlvbihyLCBjeCwgY3kpIHtcclxuICAgICAgLy8gY29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcclxuICAgICAgciA9IFNWRy51dGlscy5yYWRpYW5zKHIpXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5hcm91bmQoY3gsIGN5LCBuZXcgU1ZHLk1hdHJpeChNYXRoLmNvcyhyKSwgTWF0aC5zaW4ociksIC1NYXRoLnNpbihyKSwgTWF0aC5jb3MociksIDAsIDApKVxyXG4gICAgfVxyXG4gICAgLy8gRmxpcCBtYXRyaXggb24geCBvciB5LCBhdCBhIGdpdmVuIG9mZnNldFxyXG4gICwgZmxpcDogZnVuY3Rpb24oYSwgbykge1xyXG4gICAgICByZXR1cm4gYSA9PSAneCcgP1xyXG4gICAgICAgICAgdGhpcy5zY2FsZSgtMSwgMSwgbywgMCkgOlxyXG4gICAgICAgIGEgPT0gJ3knID9cclxuICAgICAgICAgIHRoaXMuc2NhbGUoMSwgLTEsIDAsIG8pIDpcclxuICAgICAgICAgIHRoaXMuc2NhbGUoLTEsIC0xLCBhLCBvICE9IG51bGwgPyBvIDogYSlcclxuICAgIH1cclxuICAgIC8vIFNrZXdcclxuICAsIHNrZXc6IGZ1bmN0aW9uKHgsIHksIGN4LCBjeSkge1xyXG4gICAgICAvLyBzdXBwb3J0IHVuaWZvcm1hbCBza2V3XHJcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICB5ID0geFxyXG4gICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMykge1xyXG4gICAgICAgIGN5ID0gY3hcclxuICAgICAgICBjeCA9IHlcclxuICAgICAgICB5ID0geFxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBjb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xyXG4gICAgICB4ID0gU1ZHLnV0aWxzLnJhZGlhbnMoeClcclxuICAgICAgeSA9IFNWRy51dGlscy5yYWRpYW5zKHkpXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5hcm91bmQoY3gsIGN5LCBuZXcgU1ZHLk1hdHJpeCgxLCBNYXRoLnRhbih5KSwgTWF0aC50YW4oeCksIDEsIDAsIDApKVxyXG4gICAgfVxyXG4gICAgLy8gU2tld1hcclxuICAsIHNrZXdYOiBmdW5jdGlvbih4LCBjeCwgY3kpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2tldyh4LCAwLCBjeCwgY3kpXHJcbiAgICB9XHJcbiAgICAvLyBTa2V3WVxyXG4gICwgc2tld1k6IGZ1bmN0aW9uKHksIGN4LCBjeSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5za2V3KDAsIHksIGN4LCBjeSlcclxuICAgIH1cclxuICAgIC8vIFRyYW5zZm9ybSBhcm91bmQgYSBjZW50ZXIgcG9pbnRcclxuICAsIGFyb3VuZDogZnVuY3Rpb24oY3gsIGN5LCBtYXRyaXgpIHtcclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgICAgICAubXVsdGlwbHkobmV3IFNWRy5NYXRyaXgoMSwgMCwgMCwgMSwgY3ggfHwgMCwgY3kgfHwgMCkpXHJcbiAgICAgICAgLm11bHRpcGx5KG1hdHJpeClcclxuICAgICAgICAubXVsdGlwbHkobmV3IFNWRy5NYXRyaXgoMSwgMCwgMCwgMSwgLWN4IHx8IDAsIC1jeSB8fCAwKSlcclxuICAgIH1cclxuICAgIC8vIENvbnZlcnQgdG8gbmF0aXZlIFNWR01hdHJpeFxyXG4gICwgbmF0aXZlOiBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gY3JlYXRlIG5ldyBtYXRyaXhcclxuICAgICAgdmFyIG1hdHJpeCA9IFNWRy5wYXJzZXIubmF0aXZlLmNyZWF0ZVNWR01hdHJpeCgpXHJcblxyXG4gICAgICAvLyB1cGRhdGUgd2l0aCBjdXJyZW50IHZhbHVlc1xyXG4gICAgICBmb3IgKHZhciBpID0gYWJjZGVmLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG4gICAgICAgIG1hdHJpeFthYmNkZWZbaV1dID0gdGhpc1thYmNkZWZbaV1dXHJcblxyXG4gICAgICByZXR1cm4gbWF0cml4XHJcbiAgICB9XHJcbiAgICAvLyBDb252ZXJ0IG1hdHJpeCB0byBzdHJpbmdcclxuICAsIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gQ29uc3RydWN0IHRoZSBtYXRyaXggZGlyZWN0bHksIGF2b2lkIHZhbHVlcyB0aGF0IGFyZSB0b28gc21hbGxcclxuICAgICAgcmV0dXJuICdtYXRyaXgoJyArIGZsb2F0MzJTdHJpbmcodGhpcy5hKSArICcsJyArIGZsb2F0MzJTdHJpbmcodGhpcy5iKVxyXG4gICAgICAgICsgJywnICsgZmxvYXQzMlN0cmluZyh0aGlzLmMpICsgJywnICsgZmxvYXQzMlN0cmluZyh0aGlzLmQpXHJcbiAgICAgICAgKyAnLCcgKyBmbG9hdDMyU3RyaW5nKHRoaXMuZSkgKyAnLCcgKyBmbG9hdDMyU3RyaW5nKHRoaXMuZilcclxuICAgICAgICArICcpJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRGVmaW5lIHBhcmVudFxyXG4sIHBhcmVudDogU1ZHLkVsZW1lbnRcclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIEdldCBjdXJyZW50IG1hdHJpeFxyXG4gICAgY3RtOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIG5ldyBTVkcuTWF0cml4KHRoaXMubm9kZS5nZXRDVE0oKSlcclxuICAgIH0sXHJcbiAgICAvLyBHZXQgY3VycmVudCBzY3JlZW4gbWF0cml4XHJcbiAgICBzY3JlZW5DVE06IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvKiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzQ0NTM3XHJcbiAgICAgICAgIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgRkYgZG9lcyBub3QgcmV0dXJuIHRoZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXhcclxuICAgICAgICAgZm9yIHRoZSBpbm5lciBjb29yZGluYXRlIHN5c3RlbSB3aGVuIGdldFNjcmVlbkNUTSgpIGlzIGNhbGxlZCBvbiBuZXN0ZWQgc3Zncy5cclxuICAgICAgICAgSG93ZXZlciBhbGwgb3RoZXIgQnJvd3NlcnMgZG8gdGhhdCAqL1xyXG4gICAgICBpZih0aGlzIGluc3RhbmNlb2YgU1ZHLk5lc3RlZCkge1xyXG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5yZWN0KDEsMSlcclxuICAgICAgICB2YXIgbSA9IHJlY3Qubm9kZS5nZXRTY3JlZW5DVE0oKVxyXG4gICAgICAgIHJlY3QucmVtb3ZlKClcclxuICAgICAgICByZXR1cm4gbmV3IFNWRy5NYXRyaXgobSlcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3IFNWRy5NYXRyaXgodGhpcy5ub2RlLmdldFNjcmVlbkNUTSgpKVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59KVxyXG5cblNWRy5Qb2ludCA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemVcclxuICBjcmVhdGU6IGZ1bmN0aW9uKHgseSkge1xyXG4gICAgdmFyIGksIHNvdXJjZSwgYmFzZSA9IHt4OjAsIHk6MH1cclxuXHJcbiAgICAvLyBlbnN1cmUgc291cmNlIGFzIG9iamVjdFxyXG4gICAgc291cmNlID0gQXJyYXkuaXNBcnJheSh4KSA/XHJcbiAgICAgIHt4OnhbMF0sIHk6eFsxXX0gOlxyXG4gICAgdHlwZW9mIHggPT09ICdvYmplY3QnID9cclxuICAgICAge3g6eC54LCB5OngueX0gOlxyXG4gICAgeCAhPSBudWxsID9cclxuICAgICAge3g6eCwgeTooeSAhPSBudWxsID8geSA6IHgpfSA6IGJhc2UgLy8gSWYgeSBoYXMgbm8gdmFsdWUsIHRoZW4geCBpcyB1c2VkIGhhcyBpdHMgdmFsdWVcclxuXHJcbiAgICAvLyBtZXJnZSBzb3VyY2VcclxuICAgIHRoaXMueCA9IHNvdXJjZS54XHJcbiAgICB0aGlzLnkgPSBzb3VyY2UueVxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIENsb25lIHBvaW50XHJcbiAgICBjbG9uZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBuZXcgU1ZHLlBvaW50KHRoaXMpXHJcbiAgICB9XHJcbiAgICAvLyBNb3JwaCBvbmUgcG9pbnQgaW50byBhbm90aGVyXHJcbiAgLCBtb3JwaDogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgICAvLyBzdG9yZSBuZXcgZGVzdGluYXRpb25cclxuICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBTVkcuUG9pbnQoeCwgeSlcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBHZXQgbW9ycGhlZCBwb2ludCBhdCBhIGdpdmVuIHBvc2l0aW9uXHJcbiAgLCBhdDogZnVuY3Rpb24ocG9zKSB7XHJcbiAgICAgIC8vIG1ha2Ugc3VyZSBhIGRlc3RpbmF0aW9uIGlzIGRlZmluZWRcclxuICAgICAgaWYgKCF0aGlzLmRlc3RpbmF0aW9uKSByZXR1cm4gdGhpc1xyXG5cclxuICAgICAgLy8gY2FsY3VsYXRlIG1vcnBoZWQgbWF0cml4IGF0IGEgZ2l2ZW4gcG9zaXRpb25cclxuICAgICAgdmFyIHBvaW50ID0gbmV3IFNWRy5Qb2ludCh7XHJcbiAgICAgICAgeDogdGhpcy54ICsgKHRoaXMuZGVzdGluYXRpb24ueCAtIHRoaXMueCkgKiBwb3NcclxuICAgICAgLCB5OiB0aGlzLnkgKyAodGhpcy5kZXN0aW5hdGlvbi55IC0gdGhpcy55KSAqIHBvc1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHBvaW50XHJcbiAgICB9XHJcbiAgICAvLyBDb252ZXJ0IHRvIG5hdGl2ZSBTVkdQb2ludFxyXG4gICwgbmF0aXZlOiBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gY3JlYXRlIG5ldyBwb2ludFxyXG4gICAgICB2YXIgcG9pbnQgPSBTVkcucGFyc2VyLm5hdGl2ZS5jcmVhdGVTVkdQb2ludCgpXHJcblxyXG4gICAgICAvLyB1cGRhdGUgd2l0aCBjdXJyZW50IHZhbHVlc1xyXG4gICAgICBwb2ludC54ID0gdGhpcy54XHJcbiAgICAgIHBvaW50LnkgPSB0aGlzLnlcclxuXHJcbiAgICAgIHJldHVybiBwb2ludFxyXG4gICAgfVxyXG4gICAgLy8gdHJhbnNmb3JtIHBvaW50IHdpdGggbWF0cml4XHJcbiAgLCB0cmFuc2Zvcm06IGZ1bmN0aW9uKG1hdHJpeCkge1xyXG4gICAgICByZXR1cm4gbmV3IFNWRy5Qb2ludCh0aGlzLm5hdGl2ZSgpLm1hdHJpeFRyYW5zZm9ybShtYXRyaXgubmF0aXZlKCkpKVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59KVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuRWxlbWVudCwge1xyXG5cclxuICAvLyBHZXQgcG9pbnRcclxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgcmV0dXJuIG5ldyBTVkcuUG9pbnQoeCx5KS50cmFuc2Zvcm0odGhpcy5zY3JlZW5DVE0oKS5pbnZlcnNlKCkpO1xyXG4gIH1cclxuXHJcbn0pXHJcblxuU1ZHLmV4dGVuZChTVkcuRWxlbWVudCwge1xyXG4gIC8vIFNldCBzdmcgZWxlbWVudCBhdHRyaWJ1dGVcclxuICBhdHRyOiBmdW5jdGlvbihhLCB2LCBuKSB7XHJcbiAgICAvLyBhY3QgYXMgZnVsbCBnZXR0ZXJcclxuICAgIGlmIChhID09IG51bGwpIHtcclxuICAgICAgLy8gZ2V0IGFuIG9iamVjdCBvZiBhdHRyaWJ1dGVzXHJcbiAgICAgIGEgPSB7fVxyXG4gICAgICB2ID0gdGhpcy5ub2RlLmF0dHJpYnV0ZXNcclxuICAgICAgZm9yIChuID0gdi5sZW5ndGggLSAxOyBuID49IDA7IG4tLSlcclxuICAgICAgICBhW3Zbbl0ubm9kZU5hbWVdID0gU1ZHLnJlZ2V4LmlzTnVtYmVyLnRlc3QodltuXS5ub2RlVmFsdWUpID8gcGFyc2VGbG9hdCh2W25dLm5vZGVWYWx1ZSkgOiB2W25dLm5vZGVWYWx1ZVxyXG5cclxuICAgICAgcmV0dXJuIGFcclxuXHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnKSB7XHJcbiAgICAgIC8vIGFwcGx5IGV2ZXJ5IGF0dHJpYnV0ZSBpbmRpdmlkdWFsbHkgaWYgYW4gb2JqZWN0IGlzIHBhc3NlZFxyXG4gICAgICBmb3IgKHYgaW4gYSkgdGhpcy5hdHRyKHYsIGFbdl0pXHJcblxyXG4gICAgfSBlbHNlIGlmICh2ID09PSBudWxsKSB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIHZhbHVlXHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUF0dHJpYnV0ZShhKVxyXG5cclxuICAgIH0gZWxzZSBpZiAodiA9PSBudWxsKSB7XHJcbiAgICAgIC8vIGFjdCBhcyBhIGdldHRlciBpZiB0aGUgZmlyc3QgYW5kIG9ubHkgYXJndW1lbnQgaXMgbm90IGFuIG9iamVjdFxyXG4gICAgICB2ID0gdGhpcy5ub2RlLmdldEF0dHJpYnV0ZShhKVxyXG4gICAgICByZXR1cm4gdiA9PSBudWxsID9cclxuICAgICAgICBTVkcuZGVmYXVsdHMuYXR0cnNbYV0gOlxyXG4gICAgICBTVkcucmVnZXguaXNOdW1iZXIudGVzdCh2KSA/XHJcbiAgICAgICAgcGFyc2VGbG9hdCh2KSA6IHZcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBCVUcgRklYOiBzb21lIGJyb3dzZXJzIHdpbGwgcmVuZGVyIGEgc3Ryb2tlIGlmIGEgY29sb3IgaXMgZ2l2ZW4gZXZlbiB0aG91Z2ggc3Ryb2tlIHdpZHRoIGlzIDBcclxuICAgICAgaWYgKGEgPT0gJ3N0cm9rZS13aWR0aCcpXHJcbiAgICAgICAgdGhpcy5hdHRyKCdzdHJva2UnLCBwYXJzZUZsb2F0KHYpID4gMCA/IHRoaXMuX3N0cm9rZSA6IG51bGwpXHJcbiAgICAgIGVsc2UgaWYgKGEgPT0gJ3N0cm9rZScpXHJcbiAgICAgICAgdGhpcy5fc3Ryb2tlID0gdlxyXG5cclxuICAgICAgLy8gY29udmVydCBpbWFnZSBmaWxsIGFuZCBzdHJva2UgdG8gcGF0dGVybnNcclxuICAgICAgaWYgKGEgPT0gJ2ZpbGwnIHx8IGEgPT0gJ3N0cm9rZScpIHtcclxuICAgICAgICBpZiAoU1ZHLnJlZ2V4LmlzSW1hZ2UudGVzdCh2KSlcclxuICAgICAgICAgIHYgPSB0aGlzLmRvYygpLmRlZnMoKS5pbWFnZSh2LCAwLCAwKVxyXG5cclxuICAgICAgICBpZiAodiBpbnN0YW5jZW9mIFNWRy5JbWFnZSlcclxuICAgICAgICAgIHYgPSB0aGlzLmRvYygpLmRlZnMoKS5wYXR0ZXJuKDAsIDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZCh2KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZW5zdXJlIGNvcnJlY3QgbnVtZXJpYyB2YWx1ZXMgKGFsc28gYWNjZXB0cyBOYU4gYW5kIEluZmluaXR5KVxyXG4gICAgICBpZiAodHlwZW9mIHYgPT09ICdudW1iZXInKVxyXG4gICAgICAgIHYgPSBuZXcgU1ZHLk51bWJlcih2KVxyXG5cclxuICAgICAgLy8gZW5zdXJlIGZ1bGwgaGV4IGNvbG9yXHJcbiAgICAgIGVsc2UgaWYgKFNWRy5Db2xvci5pc0NvbG9yKHYpKVxyXG4gICAgICAgIHYgPSBuZXcgU1ZHLkNvbG9yKHYpXHJcblxyXG4gICAgICAvLyBwYXJzZSBhcnJheSB2YWx1ZXNcclxuICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2KSlcclxuICAgICAgICB2ID0gbmV3IFNWRy5BcnJheSh2KVxyXG5cclxuICAgICAgLy8gaWYgdGhlIHBhc3NlZCBhdHRyaWJ1dGUgaXMgbGVhZGluZy4uLlxyXG4gICAgICBpZiAoYSA9PSAnbGVhZGluZycpIHtcclxuICAgICAgICAvLyAuLi4gY2FsbCB0aGUgbGVhZGluZyBtZXRob2QgaW5zdGVhZFxyXG4gICAgICAgIGlmICh0aGlzLmxlYWRpbmcpXHJcbiAgICAgICAgICB0aGlzLmxlYWRpbmcodilcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBzZXQgZ2l2ZW4gYXR0cmlidXRlIG9uIG5vZGVcclxuICAgICAgICB0eXBlb2YgbiA9PT0gJ3N0cmluZycgP1xyXG4gICAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZU5TKG4sIGEsIHYudG9TdHJpbmcoKSkgOlxyXG4gICAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZShhLCB2LnRvU3RyaW5nKCkpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHJlYnVpbGQgaWYgcmVxdWlyZWRcclxuICAgICAgaWYgKHRoaXMucmVidWlsZCAmJiAoYSA9PSAnZm9udC1zaXplJyB8fCBhID09ICd4JykpXHJcbiAgICAgICAgdGhpcy5yZWJ1aWxkKGEsIHYpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbn0pXG5TVkcuZXh0ZW5kKFNWRy5FbGVtZW50LCB7XHJcbiAgLy8gQWRkIHRyYW5zZm9ybWF0aW9uc1xyXG4gIHRyYW5zZm9ybTogZnVuY3Rpb24obywgcmVsYXRpdmUpIHtcclxuICAgIC8vIGdldCB0YXJnZXQgaW4gY2FzZSBvZiB0aGUgZnggbW9kdWxlLCBvdGhlcndpc2UgcmVmZXJlbmNlIHRoaXNcclxuICAgIHZhciB0YXJnZXQgPSB0aGlzXHJcbiAgICAgICwgbWF0cml4LCBiYm94XHJcblxyXG4gICAgLy8gYWN0IGFzIGEgZ2V0dGVyXHJcbiAgICBpZiAodHlwZW9mIG8gIT09ICdvYmplY3QnKSB7XHJcbiAgICAgIC8vIGdldCBjdXJyZW50IG1hdHJpeFxyXG4gICAgICBtYXRyaXggPSBuZXcgU1ZHLk1hdHJpeCh0YXJnZXQpLmV4dHJhY3QoKVxyXG5cclxuICAgICAgcmV0dXJuIHR5cGVvZiBvID09PSAnc3RyaW5nJyA/IG1hdHJpeFtvXSA6IG1hdHJpeFxyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldCBjdXJyZW50IG1hdHJpeFxyXG4gICAgbWF0cml4ID0gbmV3IFNWRy5NYXRyaXgodGFyZ2V0KVxyXG5cclxuICAgIC8vIGVuc3VyZSByZWxhdGl2ZSBmbGFnXHJcbiAgICByZWxhdGl2ZSA9ICEhcmVsYXRpdmUgfHwgISFvLnJlbGF0aXZlXHJcblxyXG4gICAgLy8gYWN0IG9uIG1hdHJpeFxyXG4gICAgaWYgKG8uYSAhPSBudWxsKSB7XHJcbiAgICAgIG1hdHJpeCA9IHJlbGF0aXZlID9cclxuICAgICAgICAvLyByZWxhdGl2ZVxyXG4gICAgICAgIG1hdHJpeC5tdWx0aXBseShuZXcgU1ZHLk1hdHJpeChvKSkgOlxyXG4gICAgICAgIC8vIGFic29sdXRlXHJcbiAgICAgICAgbmV3IFNWRy5NYXRyaXgobylcclxuXHJcbiAgICAvLyBhY3Qgb24gcm90YXRpb25cclxuICAgIH0gZWxzZSBpZiAoby5yb3RhdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgIC8vIGVuc3VyZSBjZW50cmUgcG9pbnRcclxuICAgICAgZW5zdXJlQ2VudHJlKG8sIHRhcmdldClcclxuXHJcbiAgICAgIC8vIGFwcGx5IHRyYW5zZm9ybWF0aW9uXHJcbiAgICAgIG1hdHJpeCA9IHJlbGF0aXZlID9cclxuICAgICAgICAvLyByZWxhdGl2ZVxyXG4gICAgICAgIG1hdHJpeC5yb3RhdGUoby5yb3RhdGlvbiwgby5jeCwgby5jeSkgOlxyXG4gICAgICAgIC8vIGFic29sdXRlXHJcbiAgICAgICAgbWF0cml4LnJvdGF0ZShvLnJvdGF0aW9uIC0gbWF0cml4LmV4dHJhY3QoKS5yb3RhdGlvbiwgby5jeCwgby5jeSlcclxuXHJcbiAgICAvLyBhY3Qgb24gc2NhbGVcclxuICAgIH0gZWxzZSBpZiAoby5zY2FsZSAhPSBudWxsIHx8IG8uc2NhbGVYICE9IG51bGwgfHwgby5zY2FsZVkgIT0gbnVsbCkge1xyXG4gICAgICAvLyBlbnN1cmUgY2VudHJlIHBvaW50XHJcbiAgICAgIGVuc3VyZUNlbnRyZShvLCB0YXJnZXQpXHJcblxyXG4gICAgICAvLyBlbnN1cmUgc2NhbGUgdmFsdWVzIG9uIGJvdGggYXhlc1xyXG4gICAgICBvLnNjYWxlWCA9IG8uc2NhbGUgIT0gbnVsbCA/IG8uc2NhbGUgOiBvLnNjYWxlWCAhPSBudWxsID8gby5zY2FsZVggOiAxXHJcbiAgICAgIG8uc2NhbGVZID0gby5zY2FsZSAhPSBudWxsID8gby5zY2FsZSA6IG8uc2NhbGVZICE9IG51bGwgPyBvLnNjYWxlWSA6IDFcclxuXHJcbiAgICAgIGlmICghcmVsYXRpdmUpIHtcclxuICAgICAgICAvLyBhYnNvbHV0ZTsgbXVsdGlwbHkgaW52ZXJzZWQgdmFsdWVzXHJcbiAgICAgICAgdmFyIGUgPSBtYXRyaXguZXh0cmFjdCgpXHJcbiAgICAgICAgby5zY2FsZVggPSBvLnNjYWxlWCAqIDEgLyBlLnNjYWxlWFxyXG4gICAgICAgIG8uc2NhbGVZID0gby5zY2FsZVkgKiAxIC8gZS5zY2FsZVlcclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0cml4ID0gbWF0cml4LnNjYWxlKG8uc2NhbGVYLCBvLnNjYWxlWSwgby5jeCwgby5jeSlcclxuXHJcbiAgICAvLyBhY3Qgb24gc2tld1xyXG4gICAgfSBlbHNlIGlmIChvLnNrZXcgIT0gbnVsbCB8fCBvLnNrZXdYICE9IG51bGwgfHwgby5za2V3WSAhPSBudWxsKSB7XHJcbiAgICAgIC8vIGVuc3VyZSBjZW50cmUgcG9pbnRcclxuICAgICAgZW5zdXJlQ2VudHJlKG8sIHRhcmdldClcclxuXHJcbiAgICAgIC8vIGVuc3VyZSBza2V3IHZhbHVlcyBvbiBib3RoIGF4ZXNcclxuICAgICAgby5za2V3WCA9IG8uc2tldyAhPSBudWxsID8gby5za2V3IDogby5za2V3WCAhPSBudWxsID8gby5za2V3WCA6IDBcclxuICAgICAgby5za2V3WSA9IG8uc2tldyAhPSBudWxsID8gby5za2V3IDogby5za2V3WSAhPSBudWxsID8gby5za2V3WSA6IDBcclxuXHJcbiAgICAgIGlmICghcmVsYXRpdmUpIHtcclxuICAgICAgICAvLyBhYnNvbHV0ZTsgcmVzZXQgc2tldyB2YWx1ZXNcclxuICAgICAgICB2YXIgZSA9IG1hdHJpeC5leHRyYWN0KClcclxuICAgICAgICBtYXRyaXggPSBtYXRyaXgubXVsdGlwbHkobmV3IFNWRy5NYXRyaXgoKS5za2V3KGUuc2tld1gsIGUuc2tld1ksIG8uY3gsIG8uY3kpLmludmVyc2UoKSlcclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0cml4ID0gbWF0cml4LnNrZXcoby5za2V3WCwgby5za2V3WSwgby5jeCwgby5jeSlcclxuXHJcbiAgICAvLyBhY3Qgb24gZmxpcFxyXG4gICAgfSBlbHNlIGlmIChvLmZsaXApIHtcclxuICAgICAgaWYoby5mbGlwID09ICd4JyB8fCBvLmZsaXAgPT0gJ3knKSB7XHJcbiAgICAgICAgby5vZmZzZXQgPSBvLm9mZnNldCA9PSBudWxsID8gdGFyZ2V0LmJib3goKVsnYycgKyBvLmZsaXBdIDogby5vZmZzZXRcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZihvLm9mZnNldCA9PSBudWxsKSB7XHJcbiAgICAgICAgICBiYm94ID0gdGFyZ2V0LmJib3goKVxyXG4gICAgICAgICAgby5mbGlwID0gYmJveC5jeFxyXG4gICAgICAgICAgby5vZmZzZXQgPSBiYm94LmN5XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG8uZmxpcCA9IG8ub2Zmc2V0XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBtYXRyaXggPSBuZXcgU1ZHLk1hdHJpeCgpLmZsaXAoby5mbGlwLCBvLm9mZnNldClcclxuXHJcbiAgICAvLyBhY3Qgb24gdHJhbnNsYXRlXHJcbiAgICB9IGVsc2UgaWYgKG8ueCAhPSBudWxsIHx8IG8ueSAhPSBudWxsKSB7XHJcbiAgICAgIGlmIChyZWxhdGl2ZSkge1xyXG4gICAgICAgIC8vIHJlbGF0aXZlXHJcbiAgICAgICAgbWF0cml4ID0gbWF0cml4LnRyYW5zbGF0ZShvLngsIG8ueSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBhYnNvbHV0ZVxyXG4gICAgICAgIGlmIChvLnggIT0gbnVsbCkgbWF0cml4LmUgPSBvLnhcclxuICAgICAgICBpZiAoby55ICE9IG51bGwpIG1hdHJpeC5mID0gby55XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5hdHRyKCd0cmFuc2Zvcm0nLCBtYXRyaXgpXHJcbiAgfVxyXG59KVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuRlgsIHtcclxuICB0cmFuc2Zvcm06IGZ1bmN0aW9uKG8sIHJlbGF0aXZlKSB7XHJcbiAgICAvLyBnZXQgdGFyZ2V0IGluIGNhc2Ugb2YgdGhlIGZ4IG1vZHVsZSwgb3RoZXJ3aXNlIHJlZmVyZW5jZSB0aGlzXHJcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy50YXJnZXQoKVxyXG4gICAgICAsIG1hdHJpeCwgYmJveFxyXG5cclxuICAgIC8vIGFjdCBhcyBhIGdldHRlclxyXG4gICAgaWYgKHR5cGVvZiBvICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAvLyBnZXQgY3VycmVudCBtYXRyaXhcclxuICAgICAgbWF0cml4ID0gbmV3IFNWRy5NYXRyaXgodGFyZ2V0KS5leHRyYWN0KClcclxuXHJcbiAgICAgIHJldHVybiB0eXBlb2YgbyA9PT0gJ3N0cmluZycgPyBtYXRyaXhbb10gOiBtYXRyaXhcclxuICAgIH1cclxuXHJcbiAgICAvLyBlbnN1cmUgcmVsYXRpdmUgZmxhZ1xyXG4gICAgcmVsYXRpdmUgPSAhIXJlbGF0aXZlIHx8ICEhby5yZWxhdGl2ZVxyXG5cclxuICAgIC8vIGFjdCBvbiBtYXRyaXhcclxuICAgIGlmIChvLmEgIT0gbnVsbCkge1xyXG4gICAgICBtYXRyaXggPSBuZXcgU1ZHLk1hdHJpeChvKVxyXG5cclxuICAgIC8vIGFjdCBvbiByb3RhdGlvblxyXG4gICAgfSBlbHNlIGlmIChvLnJvdGF0aW9uICE9IG51bGwpIHtcclxuICAgICAgLy8gZW5zdXJlIGNlbnRyZSBwb2ludFxyXG4gICAgICBlbnN1cmVDZW50cmUobywgdGFyZ2V0KVxyXG5cclxuICAgICAgLy8gYXBwbHkgdHJhbnNmb3JtYXRpb25cclxuICAgICAgbWF0cml4ID0gbmV3IFNWRy5Sb3RhdGUoby5yb3RhdGlvbiwgby5jeCwgby5jeSlcclxuXHJcbiAgICAvLyBhY3Qgb24gc2NhbGVcclxuICAgIH0gZWxzZSBpZiAoby5zY2FsZSAhPSBudWxsIHx8IG8uc2NhbGVYICE9IG51bGwgfHwgby5zY2FsZVkgIT0gbnVsbCkge1xyXG4gICAgICAvLyBlbnN1cmUgY2VudHJlIHBvaW50XHJcbiAgICAgIGVuc3VyZUNlbnRyZShvLCB0YXJnZXQpXHJcblxyXG4gICAgICAvLyBlbnN1cmUgc2NhbGUgdmFsdWVzIG9uIGJvdGggYXhlc1xyXG4gICAgICBvLnNjYWxlWCA9IG8uc2NhbGUgIT0gbnVsbCA/IG8uc2NhbGUgOiBvLnNjYWxlWCAhPSBudWxsID8gby5zY2FsZVggOiAxXHJcbiAgICAgIG8uc2NhbGVZID0gby5zY2FsZSAhPSBudWxsID8gby5zY2FsZSA6IG8uc2NhbGVZICE9IG51bGwgPyBvLnNjYWxlWSA6IDFcclxuXHJcbiAgICAgIG1hdHJpeCA9IG5ldyBTVkcuU2NhbGUoby5zY2FsZVgsIG8uc2NhbGVZLCBvLmN4LCBvLmN5KVxyXG5cclxuICAgIC8vIGFjdCBvbiBza2V3XHJcbiAgICB9IGVsc2UgaWYgKG8uc2tld1ggIT0gbnVsbCB8fCBvLnNrZXdZICE9IG51bGwpIHtcclxuICAgICAgLy8gZW5zdXJlIGNlbnRyZSBwb2ludFxyXG4gICAgICBlbnN1cmVDZW50cmUobywgdGFyZ2V0KVxyXG5cclxuICAgICAgLy8gZW5zdXJlIHNrZXcgdmFsdWVzIG9uIGJvdGggYXhlc1xyXG4gICAgICBvLnNrZXdYID0gby5za2V3WCAhPSBudWxsID8gby5za2V3WCA6IDBcclxuICAgICAgby5za2V3WSA9IG8uc2tld1kgIT0gbnVsbCA/IG8uc2tld1kgOiAwXHJcblxyXG4gICAgICBtYXRyaXggPSBuZXcgU1ZHLlNrZXcoby5za2V3WCwgby5za2V3WSwgby5jeCwgby5jeSlcclxuXHJcbiAgICAvLyBhY3Qgb24gZmxpcFxyXG4gICAgfSBlbHNlIGlmIChvLmZsaXApIHtcclxuICAgICAgaWYoby5mbGlwID09ICd4JyB8fCBvLmZsaXAgPT0gJ3knKSB7XHJcbiAgICAgICAgby5vZmZzZXQgPSBvLm9mZnNldCA9PSBudWxsID8gdGFyZ2V0LmJib3goKVsnYycgKyBvLmZsaXBdIDogby5vZmZzZXRcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZihvLm9mZnNldCA9PSBudWxsKSB7XHJcbiAgICAgICAgICBiYm94ID0gdGFyZ2V0LmJib3goKVxyXG4gICAgICAgICAgby5mbGlwID0gYmJveC5jeFxyXG4gICAgICAgICAgby5vZmZzZXQgPSBiYm94LmN5XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG8uZmxpcCA9IG8ub2Zmc2V0XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBtYXRyaXggPSBuZXcgU1ZHLk1hdHJpeCgpLmZsaXAoby5mbGlwLCBvLm9mZnNldClcclxuXHJcbiAgICAvLyBhY3Qgb24gdHJhbnNsYXRlXHJcbiAgICB9IGVsc2UgaWYgKG8ueCAhPSBudWxsIHx8IG8ueSAhPSBudWxsKSB7XHJcbiAgICAgIG1hdHJpeCA9IG5ldyBTVkcuVHJhbnNsYXRlKG8ueCwgby55KVxyXG4gICAgfVxyXG5cclxuICAgIGlmKCFtYXRyaXgpIHJldHVybiB0aGlzXHJcblxyXG4gICAgbWF0cml4LnJlbGF0aXZlID0gcmVsYXRpdmVcclxuXHJcbiAgICB0aGlzLmxhc3QoKS50cmFuc2Zvcm1zLnB1c2gobWF0cml4KVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9jYWxsU3RhcnQoKVxyXG4gIH1cclxufSlcclxuXHJcblNWRy5leHRlbmQoU1ZHLkVsZW1lbnQsIHtcclxuICAvLyBSZXNldCBhbGwgdHJhbnNmb3JtYXRpb25zXHJcbiAgdW50cmFuc2Zvcm06IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXR0cigndHJhbnNmb3JtJywgbnVsbClcclxuICB9LFxyXG4gIC8vIG1lcmdlIHRoZSB3aG9sZSB0cmFuc2Zvcm1hdGlvbiBjaGFpbiBpbnRvIG9uZSBtYXRyaXggYW5kIHJldHVybnMgaXRcclxuICBtYXRyaXhpZnk6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHZhciBtYXRyaXggPSAodGhpcy5hdHRyKCd0cmFuc2Zvcm0nKSB8fCAnJylcclxuICAgICAgLy8gc3BsaXQgdHJhbnNmb3JtYXRpb25zXHJcbiAgICAgIC5zcGxpdChTVkcucmVnZXgudHJhbnNmb3Jtcykuc2xpY2UoMCwtMSkubWFwKGZ1bmN0aW9uKHN0cil7XHJcbiAgICAgICAgLy8gZ2VuZXJhdGUga2V5ID0+IHZhbHVlIHBhaXJzXHJcbiAgICAgICAgdmFyIGt2ID0gc3RyLnRyaW0oKS5zcGxpdCgnKCcpXHJcbiAgICAgICAgcmV0dXJuIFtrdlswXSwga3ZbMV0uc3BsaXQoU1ZHLnJlZ2V4LmRlbGltaXRlcikubWFwKGZ1bmN0aW9uKHN0cil7IHJldHVybiBwYXJzZUZsb2F0KHN0cikgfSldXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIG1lcmdlIGV2ZXJ5IHRyYW5zZm9ybWF0aW9uIGludG8gb25lIG1hdHJpeFxyXG4gICAgICAucmVkdWNlKGZ1bmN0aW9uKG1hdHJpeCwgdHJhbnNmb3JtKXtcclxuXHJcbiAgICAgICAgaWYodHJhbnNmb3JtWzBdID09ICdtYXRyaXgnKSByZXR1cm4gbWF0cml4Lm11bHRpcGx5KGFycmF5VG9NYXRyaXgodHJhbnNmb3JtWzFdKSlcclxuICAgICAgICByZXR1cm4gbWF0cml4W3RyYW5zZm9ybVswXV0uYXBwbHkobWF0cml4LCB0cmFuc2Zvcm1bMV0pXHJcblxyXG4gICAgICB9LCBuZXcgU1ZHLk1hdHJpeCgpKVxyXG5cclxuICAgIHJldHVybiBtYXRyaXhcclxuICB9LFxyXG4gIC8vIGFkZCBhbiBlbGVtZW50IHRvIGFub3RoZXIgcGFyZW50IHdpdGhvdXQgY2hhbmdpbmcgdGhlIHZpc3VhbCByZXByZXNlbnRhdGlvbiBvbiB0aGUgc2NyZWVuXHJcbiAgdG9QYXJlbnQ6IGZ1bmN0aW9uKHBhcmVudCkge1xyXG4gICAgaWYodGhpcyA9PSBwYXJlbnQpIHJldHVybiB0aGlzXHJcbiAgICB2YXIgY3RtID0gdGhpcy5zY3JlZW5DVE0oKVxyXG4gICAgdmFyIHBDdG0gPSBwYXJlbnQuc2NyZWVuQ1RNKCkuaW52ZXJzZSgpXHJcblxyXG4gICAgdGhpcy5hZGRUbyhwYXJlbnQpLnVudHJhbnNmb3JtKCkudHJhbnNmb3JtKHBDdG0ubXVsdGlwbHkoY3RtKSlcclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH0sXHJcbiAgLy8gc2FtZSBhcyBhYm92ZSB3aXRoIHBhcmVudCBlcXVhbHMgcm9vdC1zdmdcclxuICB0b0RvYzogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b1BhcmVudCh0aGlzLmRvYygpKVxyXG4gIH1cclxuXHJcbn0pXHJcblxyXG5TVkcuVHJhbnNmb3JtYXRpb24gPSBTVkcuaW52ZW50KHtcclxuXHJcbiAgY3JlYXRlOiBmdW5jdGlvbihzb3VyY2UsIGludmVyc2VkKXtcclxuXHJcbiAgICBpZihhcmd1bWVudHMubGVuZ3RoID4gMSAmJiB0eXBlb2YgaW52ZXJzZWQgIT0gJ2Jvb2xlYW4nKXtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpXHJcbiAgICB9XHJcblxyXG4gICAgaWYoQXJyYXkuaXNBcnJheShzb3VyY2UpKXtcclxuICAgICAgZm9yKHZhciBpID0gMCwgbGVuID0gdGhpcy5hcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpe1xyXG4gICAgICAgIHRoaXNbdGhpcy5hcmd1bWVudHNbaV1dID0gc291cmNlW2ldXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZih0eXBlb2Ygc291cmNlID09ICdvYmplY3QnKXtcclxuICAgICAgZm9yKHZhciBpID0gMCwgbGVuID0gdGhpcy5hcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpe1xyXG4gICAgICAgIHRoaXNbdGhpcy5hcmd1bWVudHNbaV1dID0gc291cmNlW3RoaXMuYXJndW1lbnRzW2ldXVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnZlcnNlZCA9IGZhbHNlXHJcblxyXG4gICAgaWYoaW52ZXJzZWQgPT09IHRydWUpe1xyXG4gICAgICB0aGlzLmludmVyc2VkID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4sIGV4dGVuZDoge1xyXG5cclxuICAgIGFyZ3VtZW50czogW11cclxuICAsIG1ldGhvZDogJydcclxuXHJcbiAgLCBhdDogZnVuY3Rpb24ocG9zKXtcclxuXHJcbiAgICAgIHZhciBwYXJhbXMgPSBbXVxyXG5cclxuICAgICAgZm9yKHZhciBpID0gMCwgbGVuID0gdGhpcy5hcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpe1xyXG4gICAgICAgIHBhcmFtcy5wdXNoKHRoaXNbdGhpcy5hcmd1bWVudHNbaV1dKVxyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgbSA9IHRoaXMuX3VuZG8gfHwgbmV3IFNWRy5NYXRyaXgoKVxyXG5cclxuICAgICAgbSA9IG5ldyBTVkcuTWF0cml4KCkubW9ycGgoU1ZHLk1hdHJpeC5wcm90b3R5cGVbdGhpcy5tZXRob2RdLmFwcGx5KG0sIHBhcmFtcykpLmF0KHBvcylcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmludmVyc2VkID8gbS5pbnZlcnNlKCkgOiBtXHJcblxyXG4gICAgfVxyXG5cclxuICAsIHVuZG86IGZ1bmN0aW9uKG8pe1xyXG4gICAgICBmb3IodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW47ICsraSl7XHJcbiAgICAgICAgb1t0aGlzLmFyZ3VtZW50c1tpXV0gPSB0eXBlb2YgdGhpc1t0aGlzLmFyZ3VtZW50c1tpXV0gPT0gJ3VuZGVmaW5lZCcgPyAwIDogb1t0aGlzLmFyZ3VtZW50c1tpXV1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVGhlIG1ldGhvZCBTVkcuTWF0cml4LmV4dHJhY3Qgd2hpY2ggd2FzIHVzZWQgYmVmb3JlIGNhbGxpbmcgdGhpc1xyXG4gICAgICAvLyBtZXRob2QgdG8gb2J0YWluIGEgdmFsdWUgZm9yIHRoZSBwYXJhbWV0ZXIgbyBkb2Vzbid0IHJldHVybiBhIGN4IGFuZFxyXG4gICAgICAvLyBhIGN5IHNvIHdlIHVzZSB0aGUgb25lcyB0aGF0IHdlcmUgcHJvdmlkZWQgdG8gdGhpcyBvYmplY3QgYXQgaXRzIGNyZWF0aW9uXHJcbiAgICAgIG8uY3ggPSB0aGlzLmN4XHJcbiAgICAgIG8uY3kgPSB0aGlzLmN5XHJcblxyXG4gICAgICB0aGlzLl91bmRvID0gbmV3IFNWR1tjYXBpdGFsaXplKHRoaXMubWV0aG9kKV0obywgdHJ1ZSkuYXQoMSlcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn0pXHJcblxyXG5TVkcuVHJhbnNsYXRlID0gU1ZHLmludmVudCh7XHJcblxyXG4gIHBhcmVudDogU1ZHLk1hdHJpeFxyXG4sIGluaGVyaXQ6IFNWRy5UcmFuc2Zvcm1hdGlvblxyXG5cclxuLCBjcmVhdGU6IGZ1bmN0aW9uKHNvdXJjZSwgaW52ZXJzZWQpe1xyXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpXHJcbiAgfVxyXG5cclxuLCBleHRlbmQ6IHtcclxuICAgIGFyZ3VtZW50czogWyd0cmFuc2Zvcm1lZFgnLCAndHJhbnNmb3JtZWRZJ11cclxuICAsIG1ldGhvZDogJ3RyYW5zbGF0ZSdcclxuICB9XHJcblxyXG59KVxyXG5cclxuU1ZHLlJvdGF0ZSA9IFNWRy5pbnZlbnQoe1xyXG5cclxuICBwYXJlbnQ6IFNWRy5NYXRyaXhcclxuLCBpbmhlcml0OiBTVkcuVHJhbnNmb3JtYXRpb25cclxuXHJcbiwgY3JlYXRlOiBmdW5jdGlvbihzb3VyY2UsIGludmVyc2VkKXtcclxuICAgIHRoaXMuY29uc3RydWN0b3IuYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKVxyXG4gIH1cclxuXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICBhcmd1bWVudHM6IFsncm90YXRpb24nLCAnY3gnLCAnY3knXVxyXG4gICwgbWV0aG9kOiAncm90YXRlJ1xyXG4gICwgYXQ6IGZ1bmN0aW9uKHBvcyl7XHJcbiAgICAgIHZhciBtID0gbmV3IFNWRy5NYXRyaXgoKS5yb3RhdGUobmV3IFNWRy5OdW1iZXIoKS5tb3JwaCh0aGlzLnJvdGF0aW9uIC0gKHRoaXMuX3VuZG8gPyB0aGlzLl91bmRvLnJvdGF0aW9uIDogMCkpLmF0KHBvcyksIHRoaXMuY3gsIHRoaXMuY3kpXHJcbiAgICAgIHJldHVybiB0aGlzLmludmVyc2VkID8gbS5pbnZlcnNlKCkgOiBtXHJcbiAgICB9XHJcbiAgLCB1bmRvOiBmdW5jdGlvbihvKXtcclxuICAgICAgdGhpcy5fdW5kbyA9IG9cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICB9XHJcblxyXG59KVxyXG5cclxuU1ZHLlNjYWxlID0gU1ZHLmludmVudCh7XHJcblxyXG4gIHBhcmVudDogU1ZHLk1hdHJpeFxyXG4sIGluaGVyaXQ6IFNWRy5UcmFuc2Zvcm1hdGlvblxyXG5cclxuLCBjcmVhdGU6IGZ1bmN0aW9uKHNvdXJjZSwgaW52ZXJzZWQpe1xyXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpXHJcbiAgfVxyXG5cclxuLCBleHRlbmQ6IHtcclxuICAgIGFyZ3VtZW50czogWydzY2FsZVgnLCAnc2NhbGVZJywgJ2N4JywgJ2N5J11cclxuICAsIG1ldGhvZDogJ3NjYWxlJ1xyXG4gIH1cclxuXHJcbn0pXHJcblxyXG5TVkcuU2tldyA9IFNWRy5pbnZlbnQoe1xyXG5cclxuICBwYXJlbnQ6IFNWRy5NYXRyaXhcclxuLCBpbmhlcml0OiBTVkcuVHJhbnNmb3JtYXRpb25cclxuXHJcbiwgY3JlYXRlOiBmdW5jdGlvbihzb3VyY2UsIGludmVyc2VkKXtcclxuICAgIHRoaXMuY29uc3RydWN0b3IuYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKVxyXG4gIH1cclxuXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICBhcmd1bWVudHM6IFsnc2tld1gnLCAnc2tld1knLCAnY3gnLCAnY3knXVxyXG4gICwgbWV0aG9kOiAnc2tldydcclxuICB9XHJcblxyXG59KVxyXG5cblNWRy5leHRlbmQoU1ZHLkVsZW1lbnQsIHtcclxuICAvLyBEeW5hbWljIHN0eWxlIGdlbmVyYXRvclxyXG4gIHN0eWxlOiBmdW5jdGlvbihzLCB2KSB7XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIC8vIGdldCBmdWxsIHN0eWxlXHJcbiAgICAgIHJldHVybiB0aGlzLm5vZGUuc3R5bGUuY3NzVGV4dCB8fCAnJ1xyXG5cclxuICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgLy8gYXBwbHkgZXZlcnkgc3R5bGUgaW5kaXZpZHVhbGx5IGlmIGFuIG9iamVjdCBpcyBwYXNzZWRcclxuICAgICAgaWYgKHR5cGVvZiBzID09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgZm9yICh2IGluIHMpIHRoaXMuc3R5bGUodiwgc1t2XSlcclxuXHJcbiAgICAgIH0gZWxzZSBpZiAoU1ZHLnJlZ2V4LmlzQ3NzLnRlc3QocykpIHtcclxuICAgICAgICAvLyBwYXJzZSBjc3Mgc3RyaW5nXHJcbiAgICAgICAgcyA9IHMuc3BsaXQoL1xccyo7XFxzKi8pXHJcbiAgICAgICAgICAvLyBmaWx0ZXIgb3V0IHN1ZmZpeCA7IGFuZCBzdHVmZiBsaWtlIDs7XHJcbiAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGUpIHsgcmV0dXJuICEhZSB9KVxyXG4gICAgICAgICAgLm1hcChmdW5jdGlvbihlKXsgcmV0dXJuIGUuc3BsaXQoL1xccyo6XFxzKi8pIH0pXHJcblxyXG4gICAgICAgIC8vIGFwcGx5IGV2ZXJ5IGRlZmluaXRpb24gaW5kaXZpZHVhbGx5XHJcbiAgICAgICAgd2hpbGUgKHYgPSBzLnBvcCgpKSB7XHJcbiAgICAgICAgICB0aGlzLnN0eWxlKHZbMF0sIHZbMV0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGFjdCBhcyBhIGdldHRlciBpZiB0aGUgZmlyc3QgYW5kIG9ubHkgYXJndW1lbnQgaXMgbm90IGFuIG9iamVjdFxyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuc3R5bGVbY2FtZWxDYXNlKHMpXVxyXG4gICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ub2RlLnN0eWxlW2NhbWVsQ2FzZShzKV0gPSB2ID09PSBudWxsIHx8IFNWRy5yZWdleC5pc0JsYW5rLnRlc3QodikgPyAnJyA6IHZcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxufSlcblNWRy5QYXJlbnQgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBlbGVtZW50KVxyXG4gIH1cclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLkVsZW1lbnRcclxuXHJcbiAgLy8gQWRkIGNsYXNzIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIFJldHVybnMgYWxsIGNoaWxkIGVsZW1lbnRzXHJcbiAgICBjaGlsZHJlbjogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBTVkcudXRpbHMubWFwKFNWRy51dGlscy5maWx0ZXJTVkdFbGVtZW50cyh0aGlzLm5vZGUuY2hpbGROb2RlcyksIGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gU1ZHLmFkb3B0KG5vZGUpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvLyBBZGQgZ2l2ZW4gZWxlbWVudCBhdCBhIHBvc2l0aW9uXHJcbiAgLCBhZGQ6IGZ1bmN0aW9uKGVsZW1lbnQsIGkpIHtcclxuICAgICAgaWYgKGkgPT0gbnVsbClcclxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZWxlbWVudC5ub2RlKVxyXG4gICAgICBlbHNlIGlmIChlbGVtZW50Lm5vZGUgIT0gdGhpcy5ub2RlLmNoaWxkTm9kZXNbaV0pXHJcbiAgICAgICAgdGhpcy5ub2RlLmluc2VydEJlZm9yZShlbGVtZW50Lm5vZGUsIHRoaXMubm9kZS5jaGlsZE5vZGVzW2ldKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIEJhc2ljYWxseSBkb2VzIHRoZSBzYW1lIGFzIGBhZGQoKWAgYnV0IHJldHVybnMgdGhlIGFkZGVkIGVsZW1lbnQgaW5zdGVhZFxyXG4gICwgcHV0OiBmdW5jdGlvbihlbGVtZW50LCBpKSB7XHJcbiAgICAgIHRoaXMuYWRkKGVsZW1lbnQsIGkpXHJcbiAgICAgIHJldHVybiBlbGVtZW50XHJcbiAgICB9XHJcbiAgICAvLyBDaGVja3MgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaXMgYSBjaGlsZFxyXG4gICwgaGFzOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmluZGV4KGVsZW1lbnQpID49IDBcclxuICAgIH1cclxuICAgIC8vIEdldHMgaW5kZXggb2YgZ2l2ZW4gZWxlbWVudFxyXG4gICwgaW5kZXg6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodGhpcy5ub2RlLmNoaWxkTm9kZXMpLmluZGV4T2YoZWxlbWVudC5ub2RlKVxyXG4gICAgfVxyXG4gICAgLy8gR2V0IGEgZWxlbWVudCBhdCB0aGUgZ2l2ZW4gaW5kZXhcclxuICAsIGdldDogZnVuY3Rpb24oaSkge1xyXG4gICAgICByZXR1cm4gU1ZHLmFkb3B0KHRoaXMubm9kZS5jaGlsZE5vZGVzW2ldKVxyXG4gICAgfVxyXG4gICAgLy8gR2V0IGZpcnN0IGNoaWxkXHJcbiAgLCBmaXJzdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldCgwKVxyXG4gICAgfVxyXG4gICAgLy8gR2V0IHRoZSBsYXN0IGNoaWxkXHJcbiAgLCBsYXN0OiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMubm9kZS5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpXHJcbiAgICB9XHJcbiAgICAvLyBJdGVyYXRlcyBvdmVyIGFsbCBjaGlsZHJlbiBhbmQgaW52b2tlcyBhIGdpdmVuIGJsb2NrXHJcbiAgLCBlYWNoOiBmdW5jdGlvbihibG9jaywgZGVlcCkge1xyXG4gICAgICB2YXIgaSwgaWxcclxuICAgICAgICAsIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbigpXHJcblxyXG4gICAgICBmb3IgKGkgPSAwLCBpbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcclxuICAgICAgICBpZiAoY2hpbGRyZW5baV0gaW5zdGFuY2VvZiBTVkcuRWxlbWVudClcclxuICAgICAgICAgIGJsb2NrLmFwcGx5KGNoaWxkcmVuW2ldLCBbaSwgY2hpbGRyZW5dKVxyXG5cclxuICAgICAgICBpZiAoZGVlcCAmJiAoY2hpbGRyZW5baV0gaW5zdGFuY2VvZiBTVkcuQ29udGFpbmVyKSlcclxuICAgICAgICAgIGNoaWxkcmVuW2ldLmVhY2goYmxvY2ssIGRlZXApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBSZW1vdmUgYSBnaXZlbiBjaGlsZFxyXG4gICwgcmVtb3ZlRWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudC5ub2RlKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIFJlbW92ZSBhbGwgZWxlbWVudHMgaW4gdGhpcyBjb250YWluZXJcclxuICAsIGNsZWFyOiBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gcmVtb3ZlIGNoaWxkcmVuXHJcbiAgICAgIHdoaWxlKHRoaXMubm9kZS5oYXNDaGlsZE5vZGVzKCkpXHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZS5sYXN0Q2hpbGQpXHJcblxyXG4gICAgICAvLyByZW1vdmUgZGVmcyByZWZlcmVuY2VcclxuICAgICAgZGVsZXRlIHRoaXMuX2RlZnNcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgLCAvLyBHZXQgZGVmc1xyXG4gICAgZGVmczogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRvYygpLmRlZnMoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pXHJcblxuU1ZHLmV4dGVuZChTVkcuUGFyZW50LCB7XHJcblxyXG4gIHVuZ3JvdXA6IGZ1bmN0aW9uKHBhcmVudCwgZGVwdGgpIHtcclxuICAgIGlmKGRlcHRoID09PSAwIHx8IHRoaXMgaW5zdGFuY2VvZiBTVkcuRGVmcyB8fCB0aGlzLm5vZGUgPT0gU1ZHLnBhcnNlci5kcmF3KSByZXR1cm4gdGhpc1xyXG5cclxuICAgIHBhcmVudCA9IHBhcmVudCB8fCAodGhpcyBpbnN0YW5jZW9mIFNWRy5Eb2MgPyB0aGlzIDogdGhpcy5wYXJlbnQoU1ZHLlBhcmVudCkpXHJcbiAgICBkZXB0aCA9IGRlcHRoIHx8IEluZmluaXR5XHJcblxyXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBTVkcuRGVmcykgcmV0dXJuIHRoaXNcclxuICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIFNWRy5QYXJlbnQpIHJldHVybiB0aGlzLnVuZ3JvdXAocGFyZW50LCBkZXB0aC0xKVxyXG4gICAgICByZXR1cm4gdGhpcy50b1BhcmVudChwYXJlbnQpXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMubm9kZS5maXJzdENoaWxkIHx8IHRoaXMucmVtb3ZlKClcclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH0sXHJcblxyXG4gIGZsYXR0ZW46IGZ1bmN0aW9uKHBhcmVudCwgZGVwdGgpIHtcclxuICAgIHJldHVybiB0aGlzLnVuZ3JvdXAocGFyZW50LCBkZXB0aClcclxuICB9XHJcblxyXG59KVxuU1ZHLkNvbnRhaW5lciA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGVsZW1lbnQpXHJcbiAgfVxyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuUGFyZW50XHJcblxyXG59KVxuXHJcblNWRy5WaWV3Qm94ID0gU1ZHLmludmVudCh7XHJcblxyXG4gIGNyZWF0ZTogZnVuY3Rpb24oc291cmNlKSB7XHJcbiAgICB2YXIgaSwgYmFzZSA9IFswLCAwLCAwLCAwXVxyXG5cclxuICAgIHZhciB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBib3gsIHZpZXcsIHdlLCBoZVxyXG4gICAgICAsIHdtICAgPSAxIC8vIHdpZHRoIG11bHRpcGxpZXJcclxuICAgICAgLCBobSAgID0gMSAvLyBoZWlnaHQgbXVsdGlwbGllclxyXG4gICAgICAsIHJlZyAgPSAvWystXT8oPzpcXGQrKD86XFwuXFxkKik/fFxcLlxcZCspKD86ZVsrLV0/XFxkKyk/L2dpXHJcblxyXG4gICAgaWYoc291cmNlIGluc3RhbmNlb2YgU1ZHLkVsZW1lbnQpe1xyXG5cclxuICAgICAgd2UgPSBzb3VyY2VcclxuICAgICAgaGUgPSBzb3VyY2VcclxuICAgICAgdmlldyA9IChzb3VyY2UuYXR0cigndmlld0JveCcpIHx8ICcnKS5tYXRjaChyZWcpXHJcbiAgICAgIGJveCA9IHNvdXJjZS5iYm94XHJcblxyXG4gICAgICAvLyBnZXQgZGltZW5zaW9ucyBvZiBjdXJyZW50IG5vZGVcclxuICAgICAgd2lkdGggID0gbmV3IFNWRy5OdW1iZXIoc291cmNlLndpZHRoKCkpXHJcbiAgICAgIGhlaWdodCA9IG5ldyBTVkcuTnVtYmVyKHNvdXJjZS5oZWlnaHQoKSlcclxuXHJcbiAgICAgIC8vIGZpbmQgbmVhcmVzdCBub24tcGVyY2VudHVhbCBkaW1lbnNpb25zXHJcbiAgICAgIHdoaWxlICh3aWR0aC51bml0ID09ICclJykge1xyXG4gICAgICAgIHdtICo9IHdpZHRoLnZhbHVlXHJcbiAgICAgICAgd2lkdGggPSBuZXcgU1ZHLk51bWJlcih3ZSBpbnN0YW5jZW9mIFNWRy5Eb2MgPyB3ZS5wYXJlbnQoKS5vZmZzZXRXaWR0aCA6IHdlLnBhcmVudCgpLndpZHRoKCkpXHJcbiAgICAgICAgd2UgPSB3ZS5wYXJlbnQoKVxyXG4gICAgICB9XHJcbiAgICAgIHdoaWxlIChoZWlnaHQudW5pdCA9PSAnJScpIHtcclxuICAgICAgICBobSAqPSBoZWlnaHQudmFsdWVcclxuICAgICAgICBoZWlnaHQgPSBuZXcgU1ZHLk51bWJlcihoZSBpbnN0YW5jZW9mIFNWRy5Eb2MgPyBoZS5wYXJlbnQoKS5vZmZzZXRIZWlnaHQgOiBoZS5wYXJlbnQoKS5oZWlnaHQoKSlcclxuICAgICAgICBoZSA9IGhlLnBhcmVudCgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGVuc3VyZSBkZWZhdWx0c1xyXG4gICAgICB0aGlzLnggICAgICA9IDBcclxuICAgICAgdGhpcy55ICAgICAgPSAwXHJcbiAgICAgIHRoaXMud2lkdGggID0gd2lkdGggICogd21cclxuICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgKiBobVxyXG4gICAgICB0aGlzLnpvb20gICA9IDFcclxuXHJcbiAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgLy8gZ2V0IHdpZHRoIGFuZCBoZWlnaHQgZnJvbSB2aWV3Ym94XHJcbiAgICAgICAgeCAgICAgID0gcGFyc2VGbG9hdCh2aWV3WzBdKVxyXG4gICAgICAgIHkgICAgICA9IHBhcnNlRmxvYXQodmlld1sxXSlcclxuICAgICAgICB3aWR0aCAgPSBwYXJzZUZsb2F0KHZpZXdbMl0pXHJcbiAgICAgICAgaGVpZ2h0ID0gcGFyc2VGbG9hdCh2aWV3WzNdKVxyXG5cclxuICAgICAgICAvLyBjYWxjdWxhdGUgem9vbSBhY2NvcmluZyB0byB2aWV3Ym94XHJcbiAgICAgICAgdGhpcy56b29tID0gKCh0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQpID4gKHdpZHRoIC8gaGVpZ2h0KSkgP1xyXG4gICAgICAgICAgdGhpcy5oZWlnaHQgLyBoZWlnaHQgOlxyXG4gICAgICAgICAgdGhpcy53aWR0aCAgLyB3aWR0aFxyXG5cclxuICAgICAgICAvLyBjYWxjdWxhdGUgcmVhbCBwaXhlbCBkaW1lbnNpb25zIG9uIHBhcmVudCBTVkcuRG9jIGVsZW1lbnRcclxuICAgICAgICB0aGlzLnggICAgICA9IHhcclxuICAgICAgICB0aGlzLnkgICAgICA9IHlcclxuICAgICAgICB0aGlzLndpZHRoICA9IHdpZHRoXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9ZWxzZXtcclxuXHJcbiAgICAgIC8vIGVuc3VyZSBzb3VyY2UgYXMgb2JqZWN0XHJcbiAgICAgIHNvdXJjZSA9IHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnID9cclxuICAgICAgICBzb3VyY2UubWF0Y2gocmVnKS5tYXAoZnVuY3Rpb24oZWwpeyByZXR1cm4gcGFyc2VGbG9hdChlbCkgfSkgOlxyXG4gICAgICBBcnJheS5pc0FycmF5KHNvdXJjZSkgP1xyXG4gICAgICAgIHNvdXJjZSA6XHJcbiAgICAgIHR5cGVvZiBzb3VyY2UgPT0gJ29iamVjdCcgP1xyXG4gICAgICAgIFtzb3VyY2UueCwgc291cmNlLnksIHNvdXJjZS53aWR0aCwgc291cmNlLmhlaWdodF0gOlxyXG4gICAgICBhcmd1bWVudHMubGVuZ3RoID09IDQgP1xyXG4gICAgICAgIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSA6XHJcbiAgICAgICAgYmFzZVxyXG5cclxuICAgICAgdGhpcy54ID0gc291cmNlWzBdXHJcbiAgICAgIHRoaXMueSA9IHNvdXJjZVsxXVxyXG4gICAgICB0aGlzLndpZHRoID0gc291cmNlWzJdXHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gc291cmNlWzNdXHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcblxyXG4sIGV4dGVuZDoge1xyXG5cclxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMueCArICcgJyArIHRoaXMueSArICcgJyArIHRoaXMud2lkdGggKyAnICcgKyB0aGlzLmhlaWdodFxyXG4gICAgfVxyXG4gICwgbW9ycGg6IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQpe1xyXG4gICAgICB0aGlzLmRlc3RpbmF0aW9uID0gbmV3IFNWRy5WaWV3Qm94KHgsIHksIHdpZHRoLCBoZWlnaHQpXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICwgYXQ6IGZ1bmN0aW9uKHBvcykge1xyXG5cclxuICAgICAgaWYoIXRoaXMuZGVzdGluYXRpb24pIHJldHVybiB0aGlzXHJcblxyXG4gICAgICByZXR1cm4gbmV3IFNWRy5WaWV3Qm94KFtcclxuICAgICAgICAgIHRoaXMueCArICh0aGlzLmRlc3RpbmF0aW9uLnggLSB0aGlzLngpICogcG9zXHJcbiAgICAgICAgLCB0aGlzLnkgKyAodGhpcy5kZXN0aW5hdGlvbi55IC0gdGhpcy55KSAqIHBvc1xyXG4gICAgICAgICwgdGhpcy53aWR0aCArICh0aGlzLmRlc3RpbmF0aW9uLndpZHRoIC0gdGhpcy53aWR0aCkgKiBwb3NcclxuICAgICAgICAsIHRoaXMuaGVpZ2h0ICsgKHRoaXMuZGVzdGluYXRpb24uaGVpZ2h0IC0gdGhpcy5oZWlnaHQpICogcG9zXHJcbiAgICAgIF0pXHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8vIERlZmluZSBwYXJlbnRcclxuLCBwYXJlbnQ6IFNWRy5Db250YWluZXJcclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuXHJcbiAgICAvLyBnZXQvc2V0IHZpZXdib3hcclxuICAgIHZpZXdib3g6IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuICAgICAgICAvLyBhY3QgYXMgYSBnZXR0ZXIgaWYgdGhlcmUgYXJlIG5vIGFyZ3VtZW50c1xyXG4gICAgICAgIHJldHVybiBuZXcgU1ZHLlZpZXdCb3godGhpcylcclxuXHJcbiAgICAgIC8vIG90aGVyd2lzZSBhY3QgYXMgYSBzZXR0ZXJcclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cigndmlld0JveCcsIG5ldyBTVkcuVmlld0JveCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSlcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufSlcbi8vIEFkZCBldmVudHMgdG8gZWxlbWVudHNcclxuXHJcbjtbICdjbGljaycsXHJcbiAgJ2RibGNsaWNrJyxcclxuICAnbW91c2Vkb3duJyxcclxuICAnbW91c2V1cCcsXHJcbiAgJ21vdXNlb3ZlcicsXHJcbiAgJ21vdXNlb3V0JyxcclxuICAnbW91c2Vtb3ZlJyxcclxuICAnbW91c2VlbnRlcicsXHJcbiAgJ21vdXNlbGVhdmUnLFxyXG4gICd0b3VjaHN0YXJ0JyxcclxuICAndG91Y2htb3ZlJyxcclxuICAndG91Y2hsZWF2ZScsXHJcbiAgJ3RvdWNoZW5kJyxcclxuICAndG91Y2hjYW5jZWwnIF0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIC8vIGFkZCBldmVudCB0byBTVkcuRWxlbWVudFxyXG4gICAgU1ZHLkVsZW1lbnQucHJvdG90eXBlW2V2ZW50XSA9IGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgIC8vIGJpbmQgZXZlbnQgdG8gZWxlbWVudCByYXRoZXIgdGhhbiBlbGVtZW50IG5vZGVcclxuICAgICAgaWYgKGYgPT0gbnVsbCkge1xyXG4gICAgICAgIFNWRy5vZmYodGhpcywgZXZlbnQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgU1ZHLm9uKHRoaXMsIGV2ZW50LCBmKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcblNWRy5saXN0ZW5lcklkID0gMFxyXG5cclxuLy8gQWRkIGV2ZW50IGJpbmRlciBpbiB0aGUgU1ZHIG5hbWVzcGFjZVxyXG5TVkcub24gPSBmdW5jdGlvbiAobm9kZSwgZXZlbnRzLCBsaXN0ZW5lciwgYmluZGluZywgb3B0aW9ucykge1xyXG4gIHZhciBsID0gbGlzdGVuZXIuYmluZChiaW5kaW5nIHx8IG5vZGUpXHJcbiAgdmFyIG4gPSBub2RlIGluc3RhbmNlb2YgU1ZHLkVsZW1lbnQgPyBub2RlLm5vZGUgOiBub2RlXHJcblxyXG4gIC8vIGVuc3VyZSBpbnN0YW5jZSBvYmplY3QgZm9yIG5vZGVzIHdoaWNoIGFyZSBub3QgYWRvcHRlZFxyXG4gIG4uaW5zdGFuY2UgPSBuLmluc3RhbmNlIHx8IHtfZXZlbnRzOiB7fX1cclxuXHJcbiAgdmFyIGJhZyA9IG4uaW5zdGFuY2UuX2V2ZW50c1xyXG5cclxuICAvLyBhZGQgaWQgdG8gbGlzdGVuZXJcclxuICBpZiAoIWxpc3RlbmVyLl9zdmdqc0xpc3RlbmVySWQpIHsgbGlzdGVuZXIuX3N2Z2pzTGlzdGVuZXJJZCA9ICsrU1ZHLmxpc3RlbmVySWQgfVxyXG5cclxuICBldmVudHMuc3BsaXQoU1ZHLnJlZ2V4LmRlbGltaXRlcikuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHZhciBldiA9IGV2ZW50LnNwbGl0KCcuJylbMF1cclxuICAgIHZhciBucyA9IGV2ZW50LnNwbGl0KCcuJylbMV0gfHwgJyonXHJcblxyXG4gICAgLy8gZW5zdXJlIHZhbGlkIG9iamVjdFxyXG4gICAgYmFnW2V2XSA9IGJhZ1tldl0gfHwge31cclxuICAgIGJhZ1tldl1bbnNdID0gYmFnW2V2XVtuc10gfHwge31cclxuXHJcbiAgICAvLyByZWZlcmVuY2UgbGlzdGVuZXJcclxuICAgIGJhZ1tldl1bbnNdW2xpc3RlbmVyLl9zdmdqc0xpc3RlbmVySWRdID0gbFxyXG5cclxuICAgIC8vIGFkZCBsaXN0ZW5lclxyXG4gICAgbi5hZGRFdmVudExpc3RlbmVyKGV2LCBsLCBvcHRpb25zIHx8IGZhbHNlKVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIEFkZCBldmVudCB1bmJpbmRlciBpbiB0aGUgU1ZHIG5hbWVzcGFjZVxyXG5TVkcub2ZmID0gZnVuY3Rpb24gKG5vZGUsIGV2ZW50cywgbGlzdGVuZXIsIG9wdGlvbnMpIHtcclxuICB2YXIgbiA9IG5vZGUgaW5zdGFuY2VvZiBTVkcuRWxlbWVudCA/IG5vZGUubm9kZSA6IG5vZGVcclxuICBpZiAoIW4uaW5zdGFuY2UpIHJldHVyblxyXG5cclxuICAvLyBsaXN0ZW5lciBjYW4gYmUgYSBmdW5jdGlvbiBvciBhIG51bWJlclxyXG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIGxpc3RlbmVyID0gbGlzdGVuZXIuX3N2Z2pzTGlzdGVuZXJJZFxyXG4gICAgaWYgKCFsaXN0ZW5lcikgcmV0dXJuXHJcbiAgfVxyXG5cclxuICB2YXIgYmFnID0gbi5pbnN0YW5jZS5fZXZlbnRzXHJcblxyXG4gIDsoZXZlbnRzIHx8ICcnKS5zcGxpdChTVkcucmVnZXguZGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdmFyIGV2ID0gZXZlbnQgJiYgZXZlbnQuc3BsaXQoJy4nKVswXVxyXG4gICAgdmFyIG5zID0gZXZlbnQgJiYgZXZlbnQuc3BsaXQoJy4nKVsxXVxyXG4gICAgdmFyIG5hbWVzcGFjZSwgbFxyXG5cclxuICAgIGlmIChsaXN0ZW5lcikge1xyXG4gICAgICAvLyByZW1vdmUgbGlzdGVuZXIgcmVmZXJlbmNlXHJcbiAgICAgIGlmIChiYWdbZXZdICYmIGJhZ1tldl1bbnMgfHwgJyonXSkge1xyXG4gICAgICAgIC8vIHJlbW92ZUxpc3RlbmVyXHJcbiAgICAgICAgbi5yZW1vdmVFdmVudExpc3RlbmVyKGV2LCBiYWdbZXZdW25zIHx8ICcqJ11bbGlzdGVuZXJdLCBvcHRpb25zIHx8IGZhbHNlKVxyXG5cclxuICAgICAgICBkZWxldGUgYmFnW2V2XVtucyB8fCAnKiddW2xpc3RlbmVyXVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGV2ICYmIG5zKSB7XHJcbiAgICAgIC8vIHJlbW92ZSBhbGwgbGlzdGVuZXJzIGZvciBhIG5hbWVzcGFjZWQgZXZlbnRcclxuICAgICAgaWYgKGJhZ1tldl0gJiYgYmFnW2V2XVtuc10pIHtcclxuICAgICAgICBmb3IgKGwgaW4gYmFnW2V2XVtuc10pIHsgU1ZHLm9mZihuLCBbZXYsIG5zXS5qb2luKCcuJyksIGwpIH1cclxuXHJcbiAgICAgICAgZGVsZXRlIGJhZ1tldl1bbnNdXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAobnMpIHtcclxuICAgICAgLy8gcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZm9yIGEgc3BlY2lmaWMgbmFtZXNwYWNlXHJcbiAgICAgIGZvciAoZXZlbnQgaW4gYmFnKSB7XHJcbiAgICAgICAgZm9yIChuYW1lc3BhY2UgaW4gYmFnW2V2ZW50XSkge1xyXG4gICAgICAgICAgaWYgKG5zID09PSBuYW1lc3BhY2UpIHsgU1ZHLm9mZihuLCBbZXZlbnQsIG5zXS5qb2luKCcuJykpIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZXYpIHtcclxuICAgICAgLy8gcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZm9yIHRoZSBldmVudFxyXG4gICAgICBpZiAoYmFnW2V2XSkge1xyXG4gICAgICAgIGZvciAobmFtZXNwYWNlIGluIGJhZ1tldl0pIHsgU1ZHLm9mZihuLCBbZXYsIG5hbWVzcGFjZV0uam9pbignLicpKSB9XHJcblxyXG4gICAgICAgIGRlbGV0ZSBiYWdbZXZdXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHJlbW92ZSBhbGwgbGlzdGVuZXJzIG9uIGEgZ2l2ZW4gbm9kZVxyXG4gICAgICBmb3IgKGV2ZW50IGluIGJhZykgeyBTVkcub2ZmKG4sIGV2ZW50KSB9XHJcblxyXG4gICAgICBuLmluc3RhbmNlLl9ldmVudHMgPSB7fVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcblNWRy5leHRlbmQoU1ZHLkVsZW1lbnQsIHtcclxuICAvLyBCaW5kIGdpdmVuIGV2ZW50IHRvIGxpc3RlbmVyXHJcbiAgb246IGZ1bmN0aW9uIChldmVudCwgbGlzdGVuZXIsIGJpbmRpbmcsIG9wdGlvbnMpIHtcclxuICAgIFNWRy5vbih0aGlzLCBldmVudCwgbGlzdGVuZXIsIGJpbmRpbmcsIG9wdGlvbnMpXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH0sXHJcbiAgLy8gVW5iaW5kIGV2ZW50IGZyb20gbGlzdGVuZXJcclxuICBvZmY6IGZ1bmN0aW9uIChldmVudCwgbGlzdGVuZXIpIHtcclxuICAgIFNWRy5vZmYodGhpcy5ub2RlLCBldmVudCwgbGlzdGVuZXIpXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH0sXHJcbiAgZmlyZTogZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAvLyBEaXNwYXRjaCBldmVudFxyXG4gICAgaWYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LkV2ZW50KSB7XHJcbiAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQgPSBuZXcgU1ZHLkN1c3RvbUV2ZW50KGV2ZW50LCB7ZGV0YWlsOiBkYXRhLCBjYW5jZWxhYmxlOiB0cnVlfSkpXHJcbiAgICB9XHJcbiAgICB0aGlzLl9ldmVudCA9IGV2ZW50XHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH0sXHJcbiAgZXZlbnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50XHJcbiAgfVxyXG59KVxyXG5cblxyXG5TVkcuRGVmcyA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogJ2RlZnMnXHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5Db250YWluZXJcclxuXHJcbn0pXG5TVkcuRyA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogJ2cnXHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5Db250YWluZXJcclxuXHJcbiAgLy8gQWRkIGNsYXNzIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIE1vdmUgb3ZlciB4LWF4aXNcclxuICAgIHg6IGZ1bmN0aW9uKHgpIHtcclxuICAgICAgcmV0dXJuIHggPT0gbnVsbCA/IHRoaXMudHJhbnNmb3JtKCd4JykgOiB0aGlzLnRyYW5zZm9ybSh7IHg6IHggLSB0aGlzLngoKSB9LCB0cnVlKVxyXG4gICAgfVxyXG4gICAgLy8gTW92ZSBvdmVyIHktYXhpc1xyXG4gICwgeTogZnVuY3Rpb24oeSkge1xyXG4gICAgICByZXR1cm4geSA9PSBudWxsID8gdGhpcy50cmFuc2Zvcm0oJ3knKSA6IHRoaXMudHJhbnNmb3JtKHsgeTogeSAtIHRoaXMueSgpIH0sIHRydWUpXHJcbiAgICB9XHJcbiAgICAvLyBNb3ZlIGJ5IGNlbnRlciBvdmVyIHgtYXhpc1xyXG4gICwgY3g6IGZ1bmN0aW9uKHgpIHtcclxuICAgICAgcmV0dXJuIHggPT0gbnVsbCA/IHRoaXMuZ2JveCgpLmN4IDogdGhpcy54KHggLSB0aGlzLmdib3goKS53aWR0aCAvIDIpXHJcbiAgICB9XHJcbiAgICAvLyBNb3ZlIGJ5IGNlbnRlciBvdmVyIHktYXhpc1xyXG4gICwgY3k6IGZ1bmN0aW9uKHkpIHtcclxuICAgICAgcmV0dXJuIHkgPT0gbnVsbCA/IHRoaXMuZ2JveCgpLmN5IDogdGhpcy55KHkgLSB0aGlzLmdib3goKS5oZWlnaHQgLyAyKVxyXG4gICAgfVxyXG4gICwgZ2JveDogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICB2YXIgYmJveCAgPSB0aGlzLmJib3goKVxyXG4gICAgICAgICwgdHJhbnMgPSB0aGlzLnRyYW5zZm9ybSgpXHJcblxyXG4gICAgICBiYm94LnggICs9IHRyYW5zLnhcclxuICAgICAgYmJveC54MiArPSB0cmFucy54XHJcbiAgICAgIGJib3guY3ggKz0gdHJhbnMueFxyXG5cclxuICAgICAgYmJveC55ICArPSB0cmFucy55XHJcbiAgICAgIGJib3gueTIgKz0gdHJhbnMueVxyXG4gICAgICBiYm94LmN5ICs9IHRyYW5zLnlcclxuXHJcbiAgICAgIHJldHVybiBiYm94XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gQ3JlYXRlIGEgZ3JvdXAgZWxlbWVudFxyXG4gICAgZ3JvdXA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFNWRy5HKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXG5TVkcuRG9jID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAvLyBlbnN1cmUgdGhlIHByZXNlbmNlIG9mIGEgZG9tIGVsZW1lbnRcclxuICAgICAgZWxlbWVudCA9IHR5cGVvZiBlbGVtZW50ID09ICdzdHJpbmcnID9cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KSA6XHJcbiAgICAgICAgZWxlbWVudFxyXG5cclxuICAgICAgLy8gSWYgdGhlIHRhcmdldCBpcyBhbiBzdmcgZWxlbWVudCwgdXNlIHRoYXQgZWxlbWVudCBhcyB0aGUgbWFpbiB3cmFwcGVyLlxyXG4gICAgICAvLyBUaGlzIGFsbG93cyBzdmcuanMgdG8gd29yayB3aXRoIHN2ZyBkb2N1bWVudHMgYXMgd2VsbC5cclxuICAgICAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT0gJ3N2ZycpIHtcclxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgZWxlbWVudClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgU1ZHLmNyZWF0ZSgnc3ZnJykpXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5zaXplKCcxMDAlJywgJzEwMCUnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzZXQgc3ZnIGVsZW1lbnQgYXR0cmlidXRlcyBhbmQgZW5zdXJlIGRlZnMgbm9kZVxyXG4gICAgICB0aGlzLm5hbWVzcGFjZSgpLmRlZnMoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLkNvbnRhaW5lclxyXG5cclxuICAvLyBBZGQgY2xhc3MgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gQWRkIG5hbWVzcGFjZXNcclxuICAgIG5hbWVzcGFjZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICAgICAgLmF0dHIoeyB4bWxuczogU1ZHLm5zLCB2ZXJzaW9uOiAnMS4xJyB9KVxyXG4gICAgICAgIC5hdHRyKCd4bWxuczp4bGluaycsIFNWRy54bGluaywgU1ZHLnhtbG5zKVxyXG4gICAgICAgIC5hdHRyKCd4bWxuczpzdmdqcycsIFNWRy5zdmdqcywgU1ZHLnhtbG5zKVxyXG4gICAgfVxyXG4gICAgLy8gQ3JlYXRlcyBhbmQgcmV0dXJucyBkZWZzIGVsZW1lbnRcclxuICAsIGRlZnM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoIXRoaXMuX2RlZnMpIHtcclxuICAgICAgICB2YXIgZGVmc1xyXG5cclxuICAgICAgICAvLyBGaW5kIG9yIGNyZWF0ZSBhIGRlZnMgZWxlbWVudCBpbiB0aGlzIGluc3RhbmNlXHJcbiAgICAgICAgaWYgKGRlZnMgPSB0aGlzLm5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RlZnMnKVswXSlcclxuICAgICAgICAgIHRoaXMuX2RlZnMgPSBTVkcuYWRvcHQoZGVmcylcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICB0aGlzLl9kZWZzID0gbmV3IFNWRy5EZWZzXHJcblxyXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgZGVmcyBub2RlIGlzIGF0IHRoZSBlbmQgb2YgdGhlIHN0YWNrXHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuX2RlZnMubm9kZSlcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuX2RlZnNcclxuICAgIH1cclxuICAgIC8vIGN1c3RvbSBwYXJlbnQgbWV0aG9kXHJcbiAgLCBwYXJlbnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZighdGhpcy5ub2RlLnBhcmVudE5vZGUgfHwgdGhpcy5ub2RlLnBhcmVudE5vZGUubm9kZU5hbWUgPT0gJyNkb2N1bWVudCcgfHwgdGhpcy5ub2RlLnBhcmVudE5vZGUubm9kZU5hbWUgPT0gJyNkb2N1bWVudC1mcmFnbWVudCcpIHJldHVybiBudWxsXHJcbiAgICAgIHJldHVybiB0aGlzLm5vZGUucGFyZW50Tm9kZVxyXG4gICAgfVxyXG4gICAgLy8gRml4IGZvciBwb3NzaWJsZSBzdWItcGl4ZWwgb2Zmc2V0LiBTZWU6XHJcbiAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02MDg4MTJcclxuICAsIHNwb2Y6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgcG9zID0gdGhpcy5ub2RlLmdldFNjcmVlbkNUTSgpXHJcblxyXG4gICAgICBpZiAocG9zKVxyXG4gICAgICAgIHRoaXNcclxuICAgICAgICAgIC5zdHlsZSgnbGVmdCcsICgtcG9zLmUgJSAxKSArICdweCcpXHJcbiAgICAgICAgICAuc3R5bGUoJ3RvcCcsICAoLXBvcy5mICUgMSkgKyAncHgnKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAgIC8vIFJlbW92ZXMgdGhlIGRvYyBmcm9tIHRoZSBET01cclxuICAsIHJlbW92ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmKHRoaXMucGFyZW50KCkpIHtcclxuICAgICAgICB0aGlzLnBhcmVudCgpLnJlbW92ZUNoaWxkKHRoaXMubm9kZSlcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAsIGNsZWFyOiBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gcmVtb3ZlIGNoaWxkcmVuXHJcbiAgICAgIHdoaWxlKHRoaXMubm9kZS5oYXNDaGlsZE5vZGVzKCkpXHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZS5sYXN0Q2hpbGQpXHJcblxyXG4gICAgICAvLyByZW1vdmUgZGVmcyByZWZlcmVuY2VcclxuICAgICAgZGVsZXRlIHRoaXMuX2RlZnNcclxuXHJcbiAgICAgIC8vIGFkZCBiYWNrIHBhcnNlclxyXG4gICAgICBpZighU1ZHLnBhcnNlci5kcmF3LnBhcmVudE5vZGUpXHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKFNWRy5wYXJzZXIuZHJhdylcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgLCBjbG9uZTogZnVuY3Rpb24gKHBhcmVudCkge1xyXG4gICAgICAvLyB3cml0ZSBkb20gZGF0YSB0byB0aGUgZG9tIHNvIHRoZSBjbG9uZSBjYW4gcGlja3VwIHRoZSBkYXRhXHJcbiAgICAgIHRoaXMud3JpdGVEYXRhVG9Eb20oKVxyXG5cclxuICAgICAgLy8gZ2V0IHJlZmVyZW5jZSB0byBub2RlXHJcbiAgICAgIHZhciBub2RlID0gdGhpcy5ub2RlXHJcblxyXG4gICAgICAvLyBjbG9uZSBlbGVtZW50IGFuZCBhc3NpZ24gbmV3IGlkXHJcbiAgICAgIHZhciBjbG9uZSA9IGFzc2lnbk5ld0lkKG5vZGUuY2xvbmVOb2RlKHRydWUpKVxyXG5cclxuICAgICAgLy8gaW5zZXJ0IHRoZSBjbG9uZSBpbiB0aGUgZ2l2ZW4gcGFyZW50IG9yIGFmdGVyIG15c2VsZlxyXG4gICAgICBpZihwYXJlbnQpIHtcclxuICAgICAgICAocGFyZW50Lm5vZGUgfHwgcGFyZW50KS5hcHBlbmRDaGlsZChjbG9uZS5ub2RlKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2xvbmUubm9kZSwgbm9kZS5uZXh0U2libGluZylcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNsb25lXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxuXG4vLyAjIyMgVGhpcyBtb2R1bGUgYWRkcyBiYWNrd2FyZCAvIGZvcndhcmQgZnVuY3Rpb25hbGl0eSB0byBlbGVtZW50cy5cclxuXHJcbi8vXHJcblNWRy5leHRlbmQoU1ZHLkVsZW1lbnQsIHtcclxuICAvLyBHZXQgYWxsIHNpYmxpbmdzLCBpbmNsdWRpbmcgbXlzZWxmXHJcbiAgc2libGluZ3M6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50KCkuY2hpbGRyZW4oKVxyXG4gIH1cclxuICAvLyBHZXQgdGhlIGN1cmVudCBwb3NpdGlvbiBzaWJsaW5nc1xyXG4sIHBvc2l0aW9uOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudCgpLmluZGV4KHRoaXMpXHJcbiAgfVxyXG4gIC8vIEdldCB0aGUgbmV4dCBlbGVtZW50ICh3aWxsIHJldHVybiBudWxsIGlmIHRoZXJlIGlzIG5vbmUpXHJcbiwgbmV4dDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zaWJsaW5ncygpW3RoaXMucG9zaXRpb24oKSArIDFdXHJcbiAgfVxyXG4gIC8vIEdldCB0aGUgbmV4dCBlbGVtZW50ICh3aWxsIHJldHVybiBudWxsIGlmIHRoZXJlIGlzIG5vbmUpXHJcbiwgcHJldmlvdXM6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2libGluZ3MoKVt0aGlzLnBvc2l0aW9uKCkgLSAxXVxyXG4gIH1cclxuICAvLyBTZW5kIGdpdmVuIGVsZW1lbnQgb25lIHN0ZXAgZm9yd2FyZFxyXG4sIGZvcndhcmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGkgPSB0aGlzLnBvc2l0aW9uKCkgKyAxXHJcbiAgICAgICwgcCA9IHRoaXMucGFyZW50KClcclxuXHJcbiAgICAvLyBtb3ZlIG5vZGUgb25lIHN0ZXAgZm9yd2FyZFxyXG4gICAgcC5yZW1vdmVFbGVtZW50KHRoaXMpLmFkZCh0aGlzLCBpKVxyXG5cclxuICAgIC8vIG1ha2Ugc3VyZSBkZWZzIG5vZGUgaXMgYWx3YXlzIGF0IHRoZSB0b3BcclxuICAgIGlmIChwIGluc3RhbmNlb2YgU1ZHLkRvYylcclxuICAgICAgcC5ub2RlLmFwcGVuZENoaWxkKHAuZGVmcygpLm5vZGUpXHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgLy8gU2VuZCBnaXZlbiBlbGVtZW50IG9uZSBzdGVwIGJhY2t3YXJkXHJcbiwgYmFja3dhcmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGkgPSB0aGlzLnBvc2l0aW9uKClcclxuXHJcbiAgICBpZiAoaSA+IDApXHJcbiAgICAgIHRoaXMucGFyZW50KCkucmVtb3ZlRWxlbWVudCh0aGlzKS5hZGQodGhpcywgaSAtIDEpXHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgLy8gU2VuZCBnaXZlbiBlbGVtZW50IGFsbCB0aGUgd2F5IHRvIHRoZSBmcm9udFxyXG4sIGZyb250OiBmdW5jdGlvbigpIHtcclxuICAgIHZhciBwID0gdGhpcy5wYXJlbnQoKVxyXG5cclxuICAgIC8vIE1vdmUgbm9kZSBmb3J3YXJkXHJcbiAgICBwLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKVxyXG5cclxuICAgIC8vIE1ha2Ugc3VyZSBkZWZzIG5vZGUgaXMgYWx3YXlzIGF0IHRoZSB0b3BcclxuICAgIGlmIChwIGluc3RhbmNlb2YgU1ZHLkRvYylcclxuICAgICAgcC5ub2RlLmFwcGVuZENoaWxkKHAuZGVmcygpLm5vZGUpXHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgLy8gU2VuZCBnaXZlbiBlbGVtZW50IGFsbCB0aGUgd2F5IHRvIHRoZSBiYWNrXHJcbiwgYmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAodGhpcy5wb3NpdGlvbigpID4gMClcclxuICAgICAgdGhpcy5wYXJlbnQoKS5yZW1vdmVFbGVtZW50KHRoaXMpLmFkZCh0aGlzLCAwKVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIC8vIEluc2VydHMgYSBnaXZlbiBlbGVtZW50IGJlZm9yZSB0aGUgdGFyZ2V0ZWQgZWxlbWVudFxyXG4sIGJlZm9yZTogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5yZW1vdmUoKVxyXG5cclxuICAgIHZhciBpID0gdGhpcy5wb3NpdGlvbigpXHJcblxyXG4gICAgdGhpcy5wYXJlbnQoKS5hZGQoZWxlbWVudCwgaSlcclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICAvLyBJbnN0ZXJzIGEgZ2l2ZW4gZWxlbWVudCBhZnRlciB0aGUgdGFyZ2V0ZWQgZWxlbWVudFxyXG4sIGFmdGVyOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LnJlbW92ZSgpXHJcblxyXG4gICAgdmFyIGkgPSB0aGlzLnBvc2l0aW9uKClcclxuXHJcbiAgICB0aGlzLnBhcmVudCgpLmFkZChlbGVtZW50LCBpICsgMSlcclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuXHJcbn0pXG5TVkcuTWFzayA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgU1ZHLmNyZWF0ZSgnbWFzaycpKVxyXG5cclxuICAgIC8vIGtlZXAgcmVmZXJlbmNlcyB0byBtYXNrZWQgZWxlbWVudHNcclxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXHJcbiAgfVxyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuQ29udGFpbmVyXHJcblxyXG4gIC8vIEFkZCBjbGFzcyBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBVbm1hc2sgYWxsIG1hc2tlZCBlbGVtZW50cyBhbmQgcmVtb3ZlIGl0c2VsZlxyXG4gICAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gdW5tYXNrIGFsbCB0YXJnZXRzXHJcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRhcmdldHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0c1tpXSlcclxuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS51bm1hc2soKVxyXG4gICAgICB0aGlzLnRhcmdldHMgPSBbXVxyXG5cclxuICAgICAgLy8gcmVtb3ZlIG1hc2sgZnJvbSBwYXJlbnRcclxuICAgICAgU1ZHLkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZS5jYWxsKHRoaXMpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIENyZWF0ZSBtYXNraW5nIGVsZW1lbnRcclxuICAgIG1hc2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5kZWZzKCkucHV0KG5ldyBTVkcuTWFzaylcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5cclxuU1ZHLmV4dGVuZChTVkcuRWxlbWVudCwge1xyXG4gIC8vIERpc3RyaWJ1dGUgbWFzayB0byBzdmcgZWxlbWVudFxyXG4gIG1hc2tXaXRoOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAvLyB1c2UgZ2l2ZW4gbWFzayBvciBjcmVhdGUgYSBuZXcgb25lXHJcbiAgICB0aGlzLm1hc2tlciA9IGVsZW1lbnQgaW5zdGFuY2VvZiBTVkcuTWFzayA/IGVsZW1lbnQgOiB0aGlzLnBhcmVudCgpLm1hc2soKS5hZGQoZWxlbWVudClcclxuXHJcbiAgICAvLyBzdG9yZSByZXZlcmVuY2Ugb24gc2VsZiBpbiBtYXNrXHJcbiAgICB0aGlzLm1hc2tlci50YXJnZXRzLnB1c2godGhpcylcclxuXHJcbiAgICAvLyBhcHBseSBtYXNrXHJcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdtYXNrJywgJ3VybChcIiMnICsgdGhpcy5tYXNrZXIuYXR0cignaWQnKSArICdcIiknKVxyXG4gIH1cclxuICAvLyBVbm1hc2sgZWxlbWVudFxyXG4sIHVubWFzazogZnVuY3Rpb24oKSB7XHJcbiAgICBkZWxldGUgdGhpcy5tYXNrZXJcclxuICAgIHJldHVybiB0aGlzLmF0dHIoJ21hc2snLCBudWxsKVxyXG4gIH1cclxuXHJcbn0pXHJcblxuU1ZHLkNsaXBQYXRoID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBTVkcuY3JlYXRlKCdjbGlwUGF0aCcpKVxyXG5cclxuICAgIC8vIGtlZXAgcmVmZXJlbmNlcyB0byBjbGlwcGVkIGVsZW1lbnRzXHJcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxyXG4gIH1cclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLkNvbnRhaW5lclxyXG5cclxuICAvLyBBZGQgY2xhc3MgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gVW5jbGlwIGFsbCBjbGlwcGVkIGVsZW1lbnRzIGFuZCByZW1vdmUgaXRzZWxmXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyB1bmNsaXAgYWxsIHRhcmdldHNcclxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudGFyZ2V0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuICAgICAgICBpZiAodGhpcy50YXJnZXRzW2ldKVxyXG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLnVuY2xpcCgpXHJcbiAgICAgIHRoaXMudGFyZ2V0cyA9IFtdXHJcblxyXG4gICAgICAvLyByZW1vdmUgY2xpcFBhdGggZnJvbSBwYXJlbnRcclxuICAgICAgdGhpcy5wYXJlbnQoKS5yZW1vdmVFbGVtZW50KHRoaXMpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIENyZWF0ZSBjbGlwcGluZyBlbGVtZW50XHJcbiAgICBjbGlwOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGVmcygpLnB1dChuZXcgU1ZHLkNsaXBQYXRoKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbi8vXHJcblNWRy5leHRlbmQoU1ZHLkVsZW1lbnQsIHtcclxuICAvLyBEaXN0cmlidXRlIGNsaXBQYXRoIHRvIHN2ZyBlbGVtZW50XHJcbiAgY2xpcFdpdGg6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgIC8vIHVzZSBnaXZlbiBjbGlwIG9yIGNyZWF0ZSBhIG5ldyBvbmVcclxuICAgIHRoaXMuY2xpcHBlciA9IGVsZW1lbnQgaW5zdGFuY2VvZiBTVkcuQ2xpcFBhdGggPyBlbGVtZW50IDogdGhpcy5wYXJlbnQoKS5jbGlwKCkuYWRkKGVsZW1lbnQpXHJcblxyXG4gICAgLy8gc3RvcmUgcmV2ZXJlbmNlIG9uIHNlbGYgaW4gbWFza1xyXG4gICAgdGhpcy5jbGlwcGVyLnRhcmdldHMucHVzaCh0aGlzKVxyXG5cclxuICAgIC8vIGFwcGx5IG1hc2tcclxuICAgIHJldHVybiB0aGlzLmF0dHIoJ2NsaXAtcGF0aCcsICd1cmwoXCIjJyArIHRoaXMuY2xpcHBlci5hdHRyKCdpZCcpICsgJ1wiKScpXHJcbiAgfVxyXG4gIC8vIFVuY2xpcCBlbGVtZW50XHJcbiwgdW5jbGlwOiBmdW5jdGlvbigpIHtcclxuICAgIGRlbGV0ZSB0aGlzLmNsaXBwZXJcclxuICAgIHJldHVybiB0aGlzLmF0dHIoJ2NsaXAtcGF0aCcsIG51bGwpXHJcbiAgfVxyXG5cclxufSlcblNWRy5HcmFkaWVudCA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogZnVuY3Rpb24odHlwZSkge1xyXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIFNWRy5jcmVhdGUodHlwZSArICdHcmFkaWVudCcpKVxyXG5cclxuICAgIC8vIHN0b3JlIHR5cGVcclxuICAgIHRoaXMudHlwZSA9IHR5cGVcclxuICB9XHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5Db250YWluZXJcclxuXHJcbiAgLy8gQWRkIGNsYXNzIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIEFkZCBhIGNvbG9yIHN0b3BcclxuICAgIGF0OiBmdW5jdGlvbihvZmZzZXQsIGNvbG9yLCBvcGFjaXR5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgU1ZHLlN0b3ApLnVwZGF0ZShvZmZzZXQsIGNvbG9yLCBvcGFjaXR5KVxyXG4gICAgfVxyXG4gICAgLy8gVXBkYXRlIGdyYWRpZW50XHJcbiAgLCB1cGRhdGU6IGZ1bmN0aW9uKGJsb2NrKSB7XHJcbiAgICAgIC8vIHJlbW92ZSBhbGwgc3RvcHNcclxuICAgICAgdGhpcy5jbGVhcigpXHJcblxyXG4gICAgICAvLyBpbnZva2UgcGFzc2VkIGJsb2NrXHJcbiAgICAgIGlmICh0eXBlb2YgYmxvY2sgPT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICBibG9jay5jYWxsKHRoaXMsIHRoaXMpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJuIHRoZSBmaWxsIGlkXHJcbiAgLCBmaWxsOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuICd1cmwoIycgKyB0aGlzLmlkKCkgKyAnKSdcclxuICAgIH1cclxuICAgIC8vIEFsaWFzIHN0cmluZyBjb252ZXJ0aW9uIHRvIGZpbGxcclxuICAsIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmlsbCgpXHJcbiAgICB9XHJcbiAgICAvLyBjdXN0b20gYXR0ciB0byBoYW5kbGUgdHJhbnNmb3JtXHJcbiAgLCBhdHRyOiBmdW5jdGlvbihhLCBiLCBjKSB7XHJcbiAgICAgIGlmKGEgPT0gJ3RyYW5zZm9ybScpIGEgPSAnZ3JhZGllbnRUcmFuc2Zvcm0nXHJcbiAgICAgIHJldHVybiBTVkcuQ29udGFpbmVyLnByb3RvdHlwZS5hdHRyLmNhbGwodGhpcywgYSwgYiwgYylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBDcmVhdGUgZ3JhZGllbnQgZWxlbWVudCBpbiBkZWZzXHJcbiAgICBncmFkaWVudDogZnVuY3Rpb24odHlwZSwgYmxvY2spIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGVmcygpLmdyYWRpZW50KHR5cGUsIGJsb2NrKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbi8vIEFkZCBhbmltYXRhYmxlIG1ldGhvZHMgdG8gYm90aCBncmFkaWVudCBhbmQgZnggbW9kdWxlXHJcblNWRy5leHRlbmQoU1ZHLkdyYWRpZW50LCBTVkcuRlgsIHtcclxuICAvLyBGcm9tIHBvc2l0aW9uXHJcbiAgZnJvbTogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgcmV0dXJuICh0aGlzLl90YXJnZXQgfHwgdGhpcykudHlwZSA9PSAncmFkaWFsJyA/XHJcbiAgICAgIHRoaXMuYXR0cih7IGZ4OiBuZXcgU1ZHLk51bWJlcih4KSwgZnk6IG5ldyBTVkcuTnVtYmVyKHkpIH0pIDpcclxuICAgICAgdGhpcy5hdHRyKHsgeDE6IG5ldyBTVkcuTnVtYmVyKHgpLCB5MTogbmV3IFNWRy5OdW1iZXIoeSkgfSlcclxuICB9XHJcbiAgLy8gVG8gcG9zaXRpb25cclxuLCB0bzogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgcmV0dXJuICh0aGlzLl90YXJnZXQgfHwgdGhpcykudHlwZSA9PSAncmFkaWFsJyA/XHJcbiAgICAgIHRoaXMuYXR0cih7IGN4OiBuZXcgU1ZHLk51bWJlcih4KSwgY3k6IG5ldyBTVkcuTnVtYmVyKHkpIH0pIDpcclxuICAgICAgdGhpcy5hdHRyKHsgeDI6IG5ldyBTVkcuTnVtYmVyKHgpLCB5MjogbmV3IFNWRy5OdW1iZXIoeSkgfSlcclxuICB9XHJcbn0pXHJcblxyXG4vLyBCYXNlIGdyYWRpZW50IGdlbmVyYXRpb25cclxuU1ZHLmV4dGVuZChTVkcuRGVmcywge1xyXG4gIC8vIGRlZmluZSBncmFkaWVudFxyXG4gIGdyYWRpZW50OiBmdW5jdGlvbih0eXBlLCBibG9jaykge1xyXG4gICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTVkcuR3JhZGllbnQodHlwZSkpLnVwZGF0ZShibG9jaylcclxuICB9XHJcblxyXG59KVxyXG5cclxuU1ZHLlN0b3AgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6ICdzdG9wJ1xyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuRWxlbWVudFxyXG5cclxuICAvLyBBZGQgY2xhc3MgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gYWRkIGNvbG9yIHN0b3BzXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgaWYgKHR5cGVvZiBvID09ICdudW1iZXInIHx8IG8gaW5zdGFuY2VvZiBTVkcuTnVtYmVyKSB7XHJcbiAgICAgICAgbyA9IHtcclxuICAgICAgICAgIG9mZnNldDogIGFyZ3VtZW50c1swXVxyXG4gICAgICAgICwgY29sb3I6ICAgYXJndW1lbnRzWzFdXHJcbiAgICAgICAgLCBvcGFjaXR5OiBhcmd1bWVudHNbMl1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHNldCBhdHRyaWJ1dGVzXHJcbiAgICAgIGlmIChvLm9wYWNpdHkgIT0gbnVsbCkgdGhpcy5hdHRyKCdzdG9wLW9wYWNpdHknLCBvLm9wYWNpdHkpXHJcbiAgICAgIGlmIChvLmNvbG9yICAgIT0gbnVsbCkgdGhpcy5hdHRyKCdzdG9wLWNvbG9yJywgby5jb2xvcilcclxuICAgICAgaWYgKG8ub2Zmc2V0ICAhPSBudWxsKSB0aGlzLmF0dHIoJ29mZnNldCcsIG5ldyBTVkcuTnVtYmVyKG8ub2Zmc2V0KSlcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxuXG5TVkcuUGF0dGVybiA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogJ3BhdHRlcm4nXHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5Db250YWluZXJcclxuXHJcbiAgLy8gQWRkIGNsYXNzIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIFJldHVybiB0aGUgZmlsbCBpZFxyXG4gICAgZmlsbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiAndXJsKCMnICsgdGhpcy5pZCgpICsgJyknXHJcbiAgICB9XHJcbiAgICAvLyBVcGRhdGUgcGF0dGVybiBieSByZWJ1aWxkaW5nXHJcbiAgLCB1cGRhdGU6IGZ1bmN0aW9uKGJsb2NrKSB7XHJcbiAgICAgIC8vIHJlbW92ZSBjb250ZW50XHJcbiAgICAgIHRoaXMuY2xlYXIoKVxyXG5cclxuICAgICAgLy8gaW52b2tlIHBhc3NlZCBibG9ja1xyXG4gICAgICBpZiAodHlwZW9mIGJsb2NrID09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgYmxvY2suY2FsbCh0aGlzLCB0aGlzKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIEFsaWFzIHN0cmluZyBjb252ZXJ0aW9uIHRvIGZpbGxcclxuICAsIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmlsbCgpXHJcbiAgICB9XHJcbiAgICAvLyBjdXN0b20gYXR0ciB0byBoYW5kbGUgdHJhbnNmb3JtXHJcbiAgLCBhdHRyOiBmdW5jdGlvbihhLCBiLCBjKSB7XHJcbiAgICAgIGlmKGEgPT0gJ3RyYW5zZm9ybScpIGEgPSAncGF0dGVyblRyYW5zZm9ybSdcclxuICAgICAgcmV0dXJuIFNWRy5Db250YWluZXIucHJvdG90eXBlLmF0dHIuY2FsbCh0aGlzLCBhLCBiLCBjKVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBDcmVhdGUgcGF0dGVybiBlbGVtZW50IGluIGRlZnNcclxuICAgIHBhdHRlcm46IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQsIGJsb2NrKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRlZnMoKS5wYXR0ZXJuKHdpZHRoLCBoZWlnaHQsIGJsb2NrKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcblNWRy5leHRlbmQoU1ZHLkRlZnMsIHtcclxuICAvLyBEZWZpbmUgZ3JhZGllbnRcclxuICBwYXR0ZXJuOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCBibG9jaykge1xyXG4gICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTVkcuUGF0dGVybikudXBkYXRlKGJsb2NrKS5hdHRyKHtcclxuICAgICAgeDogICAgICAgICAgICAwXHJcbiAgICAsIHk6ICAgICAgICAgICAgMFxyXG4gICAgLCB3aWR0aDogICAgICAgIHdpZHRoXHJcbiAgICAsIGhlaWdodDogICAgICAgaGVpZ2h0XHJcbiAgICAsIHBhdHRlcm5Vbml0czogJ3VzZXJTcGFjZU9uVXNlJ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG59KVxuU1ZHLlNoYXBlID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgZWxlbWVudClcclxuICB9XHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5FbGVtZW50XHJcblxyXG59KVxuXHJcblNWRy5CYXJlID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZVxyXG4gIGNyZWF0ZTogZnVuY3Rpb24oZWxlbWVudCwgaW5oZXJpdCkge1xyXG4gICAgLy8gY29uc3RydWN0IGVsZW1lbnRcclxuICAgIHRoaXMuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBTVkcuY3JlYXRlKGVsZW1lbnQpKVxyXG5cclxuICAgIC8vIGluaGVyaXQgY3VzdG9tIG1ldGhvZHNcclxuICAgIGlmIChpbmhlcml0KVxyXG4gICAgICBmb3IgKHZhciBtZXRob2QgaW4gaW5oZXJpdC5wcm90b3R5cGUpXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpbmhlcml0LnByb3RvdHlwZVttZXRob2RdID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgdGhpc1ttZXRob2RdID0gaW5oZXJpdC5wcm90b3R5cGVbbWV0aG9kXVxyXG4gIH1cclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLkVsZW1lbnRcclxuXHJcbiAgLy8gQWRkIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIEluc2VydCBzb21lIHBsYWluIHRleHRcclxuICAgIHdvcmRzOiBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgICAgIC8vIHJlbW92ZSBjb250ZW50c1xyXG4gICAgICB3aGlsZSAodGhpcy5ub2RlLmhhc0NoaWxkTm9kZXMoKSlcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlLmxhc3RDaGlsZClcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0ZXh0IG5vZGVcclxuICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5cclxuU1ZHLmV4dGVuZChTVkcuUGFyZW50LCB7XHJcbiAgLy8gQ3JlYXRlIGFuIGVsZW1lbnQgdGhhdCBpcyBub3QgZGVzY3JpYmVkIGJ5IFNWRy5qc1xyXG4gIGVsZW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnQsIGluaGVyaXQpIHtcclxuICAgIHJldHVybiB0aGlzLnB1dChuZXcgU1ZHLkJhcmUoZWxlbWVudCwgaW5oZXJpdCkpXHJcbiAgfVxyXG59KVxyXG5cblNWRy5TeW1ib2wgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6ICdzeW1ib2wnXHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5Db250YWluZXJcclxuXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBjcmVhdGUgc3ltYm9sXHJcbiAgICBzeW1ib2w6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFNWRy5TeW1ib2wpXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cblNWRy5Vc2UgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6ICd1c2UnXHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5TaGFwZVxyXG5cclxuICAvLyBBZGQgY2xhc3MgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gVXNlIGVsZW1lbnQgYXMgYSByZWZlcmVuY2VcclxuICAgIGVsZW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnQsIGZpbGUpIHtcclxuICAgICAgLy8gU2V0IGxpbmVkIGVsZW1lbnRcclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cignaHJlZicsIChmaWxlIHx8ICcnKSArICcjJyArIGVsZW1lbnQsIFNWRy54bGluaylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBDcmVhdGUgYSB1c2UgZWxlbWVudFxyXG4gICAgdXNlOiBmdW5jdGlvbihlbGVtZW50LCBmaWxlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgU1ZHLlVzZSkuZWxlbWVudChlbGVtZW50LCBmaWxlKVxyXG4gICAgfVxyXG4gIH1cclxufSlcblNWRy5SZWN0ID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiAncmVjdCdcclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLlNoYXBlXHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBDcmVhdGUgYSByZWN0IGVsZW1lbnRcclxuICAgIHJlY3Q6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTVkcuUmVjdCgpKS5zaXplKHdpZHRoLCBoZWlnaHQpXHJcbiAgICB9XHJcbiAgfVxyXG59KVxuU1ZHLkNpcmNsZSA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogJ2NpcmNsZSdcclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLlNoYXBlXHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBDcmVhdGUgY2lyY2xlIGVsZW1lbnQsIGJhc2VkIG9uIGVsbGlwc2VcclxuICAgIGNpcmNsZTogZnVuY3Rpb24oc2l6ZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFNWRy5DaXJjbGUpLnJ4KG5ldyBTVkcuTnVtYmVyKHNpemUpLmRpdmlkZSgyKSkubW92ZSgwLCAwKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcblNWRy5leHRlbmQoU1ZHLkNpcmNsZSwgU1ZHLkZYLCB7XHJcbiAgLy8gUmFkaXVzIHggdmFsdWVcclxuICByeDogZnVuY3Rpb24ocngpIHtcclxuICAgIHJldHVybiB0aGlzLmF0dHIoJ3InLCByeClcclxuICB9XHJcbiAgLy8gQWxpYXMgcmFkaXVzIHggdmFsdWVcclxuLCByeTogZnVuY3Rpb24ocnkpIHtcclxuICAgIHJldHVybiB0aGlzLnJ4KHJ5KVxyXG4gIH1cclxufSlcclxuXHJcblNWRy5FbGxpcHNlID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiAnZWxsaXBzZSdcclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLlNoYXBlXHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBDcmVhdGUgYW4gZWxsaXBzZVxyXG4gICAgZWxsaXBzZTogZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFNWRy5FbGxpcHNlKS5zaXplKHdpZHRoLCBoZWlnaHQpLm1vdmUoMCwgMClcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5FbGxpcHNlLCBTVkcuUmVjdCwgU1ZHLkZYLCB7XHJcbiAgLy8gUmFkaXVzIHggdmFsdWVcclxuICByeDogZnVuY3Rpb24ocngpIHtcclxuICAgIHJldHVybiB0aGlzLmF0dHIoJ3J4JywgcngpXHJcbiAgfVxyXG4gIC8vIFJhZGl1cyB5IHZhbHVlXHJcbiwgcnk6IGZ1bmN0aW9uKHJ5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdyeScsIHJ5KVxyXG4gIH1cclxufSlcclxuXHJcbi8vIEFkZCBjb21tb24gbWV0aG9kXHJcblNWRy5leHRlbmQoU1ZHLkNpcmNsZSwgU1ZHLkVsbGlwc2UsIHtcclxuICAgIC8vIE1vdmUgb3ZlciB4LWF4aXNcclxuICAgIHg6IGZ1bmN0aW9uKHgpIHtcclxuICAgICAgcmV0dXJuIHggPT0gbnVsbCA/IHRoaXMuY3goKSAtIHRoaXMucngoKSA6IHRoaXMuY3goeCArIHRoaXMucngoKSlcclxuICAgIH1cclxuICAgIC8vIE1vdmUgb3ZlciB5LWF4aXNcclxuICAsIHk6IGZ1bmN0aW9uKHkpIHtcclxuICAgICAgcmV0dXJuIHkgPT0gbnVsbCA/IHRoaXMuY3koKSAtIHRoaXMucnkoKSA6IHRoaXMuY3koeSArIHRoaXMucnkoKSlcclxuICAgIH1cclxuICAgIC8vIE1vdmUgYnkgY2VudGVyIG92ZXIgeC1heGlzXHJcbiAgLCBjeDogZnVuY3Rpb24oeCkge1xyXG4gICAgICByZXR1cm4geCA9PSBudWxsID8gdGhpcy5hdHRyKCdjeCcpIDogdGhpcy5hdHRyKCdjeCcsIHgpXHJcbiAgICB9XHJcbiAgICAvLyBNb3ZlIGJ5IGNlbnRlciBvdmVyIHktYXhpc1xyXG4gICwgY3k6IGZ1bmN0aW9uKHkpIHtcclxuICAgICAgcmV0dXJuIHkgPT0gbnVsbCA/IHRoaXMuYXR0cignY3knKSA6IHRoaXMuYXR0cignY3knLCB5KVxyXG4gICAgfVxyXG4gICAgLy8gU2V0IHdpZHRoIG9mIGVsZW1lbnRcclxuICAsIHdpZHRoOiBmdW5jdGlvbih3aWR0aCkge1xyXG4gICAgICByZXR1cm4gd2lkdGggPT0gbnVsbCA/IHRoaXMucngoKSAqIDIgOiB0aGlzLnJ4KG5ldyBTVkcuTnVtYmVyKHdpZHRoKS5kaXZpZGUoMikpXHJcbiAgICB9XHJcbiAgICAvLyBTZXQgaGVpZ2h0IG9mIGVsZW1lbnRcclxuICAsIGhlaWdodDogZnVuY3Rpb24oaGVpZ2h0KSB7XHJcbiAgICAgIHJldHVybiBoZWlnaHQgPT0gbnVsbCA/IHRoaXMucnkoKSAqIDIgOiB0aGlzLnJ5KG5ldyBTVkcuTnVtYmVyKGhlaWdodCkuZGl2aWRlKDIpKVxyXG4gICAgfVxyXG4gICAgLy8gQ3VzdG9tIHNpemUgZnVuY3Rpb25cclxuICAsIHNpemU6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgdmFyIHAgPSBwcm9wb3J0aW9uYWxTaXplKHRoaXMsIHdpZHRoLCBoZWlnaHQpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgICAgIC5yeChuZXcgU1ZHLk51bWJlcihwLndpZHRoKS5kaXZpZGUoMikpXHJcbiAgICAgICAgLnJ5KG5ldyBTVkcuTnVtYmVyKHAuaGVpZ2h0KS5kaXZpZGUoMikpXHJcbiAgICB9XHJcbn0pXG5TVkcuTGluZSA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogJ2xpbmUnXHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5TaGFwZVxyXG5cclxuICAvLyBBZGQgY2xhc3MgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gR2V0IGFycmF5XHJcbiAgICBhcnJheTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBuZXcgU1ZHLlBvaW50QXJyYXkoW1xyXG4gICAgICAgIFsgdGhpcy5hdHRyKCd4MScpLCB0aGlzLmF0dHIoJ3kxJykgXVxyXG4gICAgICAsIFsgdGhpcy5hdHRyKCd4MicpLCB0aGlzLmF0dHIoJ3kyJykgXVxyXG4gICAgICBdKVxyXG4gICAgfVxyXG4gICAgLy8gT3ZlcndyaXRlIG5hdGl2ZSBwbG90KCkgbWV0aG9kXHJcbiAgLCBwbG90OiBmdW5jdGlvbih4MSwgeTEsIHgyLCB5Mikge1xyXG4gICAgICBpZiAoeDEgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheSgpXHJcbiAgICAgIGVsc2UgaWYgKHR5cGVvZiB5MSAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgeDEgPSB7IHgxOiB4MSwgeTE6IHkxLCB4MjogeDIsIHkyOiB5MiB9XHJcbiAgICAgIGVsc2VcclxuICAgICAgICB4MSA9IG5ldyBTVkcuUG9pbnRBcnJheSh4MSkudG9MaW5lKClcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoeDEpXHJcbiAgICB9XHJcbiAgICAvLyBNb3ZlIGJ5IGxlZnQgdG9wIGNvcm5lclxyXG4gICwgbW92ZTogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKHRoaXMuYXJyYXkoKS5tb3ZlKHgsIHkpLnRvTGluZSgpKVxyXG4gICAgfVxyXG4gICAgLy8gU2V0IGVsZW1lbnQgc2l6ZSB0byBnaXZlbiB3aWR0aCBhbmQgaGVpZ2h0XHJcbiAgLCBzaXplOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgIHZhciBwID0gcHJvcG9ydGlvbmFsU2l6ZSh0aGlzLCB3aWR0aCwgaGVpZ2h0KVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cih0aGlzLmFycmF5KCkuc2l6ZShwLndpZHRoLCBwLmhlaWdodCkudG9MaW5lKCkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gQ3JlYXRlIGEgbGluZSBlbGVtZW50XHJcbiAgICBsaW5lOiBmdW5jdGlvbih4MSwgeTEsIHgyLCB5Mikge1xyXG4gICAgICAvLyBtYWtlIHN1cmUgcGxvdCBpcyBjYWxsZWQgYXMgYSBzZXR0ZXJcclxuICAgICAgLy8geDEgaXMgbm90IG5lY2Vzc2FyaWx5IGEgbnVtYmVyLCBpdCBjYW4gYWxzbyBiZSBhbiBhcnJheSwgYSBzdHJpbmcgYW5kIGEgU1ZHLlBvaW50QXJyYXlcclxuICAgICAgcmV0dXJuIFNWRy5MaW5lLnByb3RvdHlwZS5wbG90LmFwcGx5KFxyXG4gICAgICAgIHRoaXMucHV0KG5ldyBTVkcuTGluZSlcclxuICAgICAgLCB4MSAhPSBudWxsID8gW3gxLCB5MSwgeDIsIHkyXSA6IFswLCAwLCAwLCAwXVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cblNWRy5Qb2x5bGluZSA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogJ3BvbHlsaW5lJ1xyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuU2hhcGVcclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIENyZWF0ZSBhIHdyYXBwZWQgcG9seWxpbmUgZWxlbWVudFxyXG4gICAgcG9seWxpbmU6IGZ1bmN0aW9uKHApIHtcclxuICAgICAgLy8gbWFrZSBzdXJlIHBsb3QgaXMgY2FsbGVkIGFzIGEgc2V0dGVyXHJcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgU1ZHLlBvbHlsaW5lKS5wbG90KHAgfHwgbmV3IFNWRy5Qb2ludEFycmF5KVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcblNWRy5Qb2x5Z29uID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiAncG9seWdvbidcclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLlNoYXBlXHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBDcmVhdGUgYSB3cmFwcGVkIHBvbHlnb24gZWxlbWVudFxyXG4gICAgcG9seWdvbjogZnVuY3Rpb24ocCkge1xyXG4gICAgICAvLyBtYWtlIHN1cmUgcGxvdCBpcyBjYWxsZWQgYXMgYSBzZXR0ZXJcclxuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTVkcuUG9seWdvbikucGxvdChwIHx8IG5ldyBTVkcuUG9pbnRBcnJheSlcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG4vLyBBZGQgcG9seWdvbi1zcGVjaWZpYyBmdW5jdGlvbnNcclxuU1ZHLmV4dGVuZChTVkcuUG9seWxpbmUsIFNWRy5Qb2x5Z29uLCB7XHJcbiAgLy8gR2V0IGFycmF5XHJcbiAgYXJyYXk6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FycmF5IHx8ICh0aGlzLl9hcnJheSA9IG5ldyBTVkcuUG9pbnRBcnJheSh0aGlzLmF0dHIoJ3BvaW50cycpKSlcclxuICB9XHJcbiAgLy8gUGxvdCBuZXcgcGF0aFxyXG4sIHBsb3Q6IGZ1bmN0aW9uKHApIHtcclxuICAgIHJldHVybiAocCA9PSBudWxsKSA/XHJcbiAgICAgIHRoaXMuYXJyYXkoKSA6XHJcbiAgICAgIHRoaXMuY2xlYXIoKS5hdHRyKCdwb2ludHMnLCB0eXBlb2YgcCA9PSAnc3RyaW5nJyA/IHAgOiAodGhpcy5fYXJyYXkgPSBuZXcgU1ZHLlBvaW50QXJyYXkocCkpKVxyXG4gIH1cclxuICAvLyBDbGVhciBhcnJheSBjYWNoZVxyXG4sIGNsZWFyOiBmdW5jdGlvbigpIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9hcnJheVxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgLy8gTW92ZSBieSBsZWZ0IHRvcCBjb3JuZXJcclxuLCBtb3ZlOiBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdwb2ludHMnLCB0aGlzLmFycmF5KCkubW92ZSh4LCB5KSlcclxuICB9XHJcbiAgLy8gU2V0IGVsZW1lbnQgc2l6ZSB0byBnaXZlbiB3aWR0aCBhbmQgaGVpZ2h0XHJcbiwgc2l6ZTogZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xyXG4gICAgdmFyIHAgPSBwcm9wb3J0aW9uYWxTaXplKHRoaXMsIHdpZHRoLCBoZWlnaHQpXHJcblxyXG4gICAgcmV0dXJuIHRoaXMuYXR0cigncG9pbnRzJywgdGhpcy5hcnJheSgpLnNpemUocC53aWR0aCwgcC5oZWlnaHQpKVxyXG4gIH1cclxuXHJcbn0pXHJcblxuLy8gdW5pZnkgYWxsIHBvaW50IHRvIHBvaW50IGVsZW1lbnRzXHJcblNWRy5leHRlbmQoU1ZHLkxpbmUsIFNWRy5Qb2x5bGluZSwgU1ZHLlBvbHlnb24sIHtcclxuICAvLyBEZWZpbmUgbW9ycGhhYmxlIGFycmF5XHJcbiAgbW9ycGhBcnJheTogIFNWRy5Qb2ludEFycmF5XHJcbiAgLy8gTW92ZSBieSBsZWZ0IHRvcCBjb3JuZXIgb3ZlciB4LWF4aXNcclxuLCB4OiBmdW5jdGlvbih4KSB7XHJcbiAgICByZXR1cm4geCA9PSBudWxsID8gdGhpcy5iYm94KCkueCA6IHRoaXMubW92ZSh4LCB0aGlzLmJib3goKS55KVxyXG4gIH1cclxuICAvLyBNb3ZlIGJ5IGxlZnQgdG9wIGNvcm5lciBvdmVyIHktYXhpc1xyXG4sIHk6IGZ1bmN0aW9uKHkpIHtcclxuICAgIHJldHVybiB5ID09IG51bGwgPyB0aGlzLmJib3goKS55IDogdGhpcy5tb3ZlKHRoaXMuYmJveCgpLngsIHkpXHJcbiAgfVxyXG4gIC8vIFNldCB3aWR0aCBvZiBlbGVtZW50XHJcbiwgd2lkdGg6IGZ1bmN0aW9uKHdpZHRoKSB7XHJcbiAgICB2YXIgYiA9IHRoaXMuYmJveCgpXHJcblxyXG4gICAgcmV0dXJuIHdpZHRoID09IG51bGwgPyBiLndpZHRoIDogdGhpcy5zaXplKHdpZHRoLCBiLmhlaWdodClcclxuICB9XHJcbiAgLy8gU2V0IGhlaWdodCBvZiBlbGVtZW50XHJcbiwgaGVpZ2h0OiBmdW5jdGlvbihoZWlnaHQpIHtcclxuICAgIHZhciBiID0gdGhpcy5iYm94KClcclxuXHJcbiAgICByZXR1cm4gaGVpZ2h0ID09IG51bGwgPyBiLmhlaWdodCA6IHRoaXMuc2l6ZShiLndpZHRoLCBoZWlnaHQpXHJcbiAgfVxyXG59KVxuU1ZHLlBhdGggPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6ICdwYXRoJ1xyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuU2hhcGVcclxuXHJcbiAgLy8gQWRkIGNsYXNzIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIERlZmluZSBtb3JwaGFibGUgYXJyYXlcclxuICAgIG1vcnBoQXJyYXk6ICBTVkcuUGF0aEFycmF5XHJcbiAgICAvLyBHZXQgYXJyYXlcclxuICAsIGFycmF5OiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2FycmF5IHx8ICh0aGlzLl9hcnJheSA9IG5ldyBTVkcuUGF0aEFycmF5KHRoaXMuYXR0cignZCcpKSlcclxuICAgIH1cclxuICAgIC8vIFBsb3QgbmV3IHBhdGhcclxuICAsIHBsb3Q6IGZ1bmN0aW9uKGQpIHtcclxuICAgICAgcmV0dXJuIChkID09IG51bGwpID9cclxuICAgICAgICB0aGlzLmFycmF5KCkgOlxyXG4gICAgICAgIHRoaXMuY2xlYXIoKS5hdHRyKCdkJywgdHlwZW9mIGQgPT0gJ3N0cmluZycgPyBkIDogKHRoaXMuX2FycmF5ID0gbmV3IFNWRy5QYXRoQXJyYXkoZCkpKVxyXG4gICAgfVxyXG4gICAgLy8gQ2xlYXIgYXJyYXkgY2FjaGVcclxuICAsIGNsZWFyOiBmdW5jdGlvbigpIHtcclxuICAgICAgZGVsZXRlIHRoaXMuX2FycmF5XHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBNb3ZlIGJ5IGxlZnQgdG9wIGNvcm5lclxyXG4gICwgbW92ZTogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCdkJywgdGhpcy5hcnJheSgpLm1vdmUoeCwgeSkpXHJcbiAgICB9XHJcbiAgICAvLyBNb3ZlIGJ5IGxlZnQgdG9wIGNvcm5lciBvdmVyIHgtYXhpc1xyXG4gICwgeDogZnVuY3Rpb24oeCkge1xyXG4gICAgICByZXR1cm4geCA9PSBudWxsID8gdGhpcy5iYm94KCkueCA6IHRoaXMubW92ZSh4LCB0aGlzLmJib3goKS55KVxyXG4gICAgfVxyXG4gICAgLy8gTW92ZSBieSBsZWZ0IHRvcCBjb3JuZXIgb3ZlciB5LWF4aXNcclxuICAsIHk6IGZ1bmN0aW9uKHkpIHtcclxuICAgICAgcmV0dXJuIHkgPT0gbnVsbCA/IHRoaXMuYmJveCgpLnkgOiB0aGlzLm1vdmUodGhpcy5iYm94KCkueCwgeSlcclxuICAgIH1cclxuICAgIC8vIFNldCBlbGVtZW50IHNpemUgdG8gZ2l2ZW4gd2lkdGggYW5kIGhlaWdodFxyXG4gICwgc2l6ZTogZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xyXG4gICAgICB2YXIgcCA9IHByb3BvcnRpb25hbFNpemUodGhpcywgd2lkdGgsIGhlaWdodClcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ2QnLCB0aGlzLmFycmF5KCkuc2l6ZShwLndpZHRoLCBwLmhlaWdodCkpXHJcbiAgICB9XHJcbiAgICAvLyBTZXQgd2lkdGggb2YgZWxlbWVudFxyXG4gICwgd2lkdGg6IGZ1bmN0aW9uKHdpZHRoKSB7XHJcbiAgICAgIHJldHVybiB3aWR0aCA9PSBudWxsID8gdGhpcy5iYm94KCkud2lkdGggOiB0aGlzLnNpemUod2lkdGgsIHRoaXMuYmJveCgpLmhlaWdodClcclxuICAgIH1cclxuICAgIC8vIFNldCBoZWlnaHQgb2YgZWxlbWVudFxyXG4gICwgaGVpZ2h0OiBmdW5jdGlvbihoZWlnaHQpIHtcclxuICAgICAgcmV0dXJuIGhlaWdodCA9PSBudWxsID8gdGhpcy5iYm94KCkuaGVpZ2h0IDogdGhpcy5zaXplKHRoaXMuYmJveCgpLndpZHRoLCBoZWlnaHQpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIENyZWF0ZSBhIHdyYXBwZWQgcGF0aCBlbGVtZW50XHJcbiAgICBwYXRoOiBmdW5jdGlvbihkKSB7XHJcbiAgICAgIC8vIG1ha2Ugc3VyZSBwbG90IGlzIGNhbGxlZCBhcyBhIHNldHRlclxyXG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFNWRy5QYXRoKS5wbG90KGQgfHwgbmV3IFNWRy5QYXRoQXJyYXkpXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cblNWRy5JbWFnZSA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogJ2ltYWdlJ1xyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuU2hhcGVcclxuXHJcbiAgLy8gQWRkIGNsYXNzIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIChyZSlsb2FkIGltYWdlXHJcbiAgICBsb2FkOiBmdW5jdGlvbih1cmwpIHtcclxuICAgICAgaWYgKCF1cmwpIHJldHVybiB0aGlzXHJcblxyXG4gICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICAsIGltZyAgPSBuZXcgd2luZG93LkltYWdlKClcclxuXHJcbiAgICAgIC8vIHByZWxvYWQgaW1hZ2VcclxuICAgICAgU1ZHLm9uKGltZywgJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBTVkcub2ZmKGltZylcclxuXHJcbiAgICAgICAgdmFyIHAgPSBzZWxmLnBhcmVudChTVkcuUGF0dGVybilcclxuXHJcbiAgICAgICAgaWYocCA9PT0gbnVsbCkgcmV0dXJuXHJcblxyXG4gICAgICAgIC8vIGVuc3VyZSBpbWFnZSBzaXplXHJcbiAgICAgICAgaWYgKHNlbGYud2lkdGgoKSA9PSAwICYmIHNlbGYuaGVpZ2h0KCkgPT0gMClcclxuICAgICAgICAgIHNlbGYuc2l6ZShpbWcud2lkdGgsIGltZy5oZWlnaHQpXHJcblxyXG4gICAgICAgIC8vIGVuc3VyZSBwYXR0ZXJuIHNpemUgaWYgbm90IHNldFxyXG4gICAgICAgIGlmIChwICYmIHAud2lkdGgoKSA9PSAwICYmIHAuaGVpZ2h0KCkgPT0gMClcclxuICAgICAgICAgIHAuc2l6ZShzZWxmLndpZHRoKCksIHNlbGYuaGVpZ2h0KCkpXHJcblxyXG4gICAgICAgIC8vIGNhbGxiYWNrXHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLl9sb2FkZWQgPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICBzZWxmLl9sb2FkZWQuY2FsbChzZWxmLCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAgaW1nLndpZHRoXHJcbiAgICAgICAgICAsIGhlaWdodDogaW1nLmhlaWdodFxyXG4gICAgICAgICAgLCByYXRpbzogIGltZy53aWR0aCAvIGltZy5oZWlnaHRcclxuICAgICAgICAgICwgdXJsOiAgICB1cmxcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBTVkcub24oaW1nLCAnZXJyb3InLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBTVkcub2ZmKGltZylcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLl9lcnJvciA9PT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgIHNlbGYuX2Vycm9yLmNhbGwoc2VsZiwgZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCdocmVmJywgKGltZy5zcmMgPSB0aGlzLnNyYyA9IHVybCksIFNWRy54bGluaylcclxuICAgIH1cclxuICAgIC8vIEFkZCBsb2FkZWQgY2FsbGJhY2tcclxuICAsIGxvYWRlZDogZnVuY3Rpb24obG9hZGVkKSB7XHJcbiAgICAgIHRoaXMuX2xvYWRlZCA9IGxvYWRlZFxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAsIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICB0aGlzLl9lcnJvciA9IGVycm9yXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gY3JlYXRlIGltYWdlIGVsZW1lbnQsIGxvYWQgaW1hZ2UgYW5kIHNldCBpdHMgc2l6ZVxyXG4gICAgaW1hZ2U6IGZ1bmN0aW9uKHNvdXJjZSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFNWRy5JbWFnZSkubG9hZChzb3VyY2UpLnNpemUod2lkdGggfHwgMCwgaGVpZ2h0IHx8IHdpZHRoIHx8IDApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcblNWRy5UZXh0ID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBTVkcuY3JlYXRlKCd0ZXh0JykpXHJcblxyXG4gICAgdGhpcy5kb20ubGVhZGluZyA9IG5ldyBTVkcuTnVtYmVyKDEuMykgICAgLy8gc3RvcmUgbGVhZGluZyB2YWx1ZSBmb3IgcmVidWlsZGluZ1xyXG4gICAgdGhpcy5fcmVidWlsZCA9IHRydWUgICAgICAgICAgICAgICAgICAgICAgLy8gZW5hYmxlIGF1dG9tYXRpYyB1cGRhdGluZyBvZiBkeSB2YWx1ZXNcclxuICAgIHRoaXMuX2J1aWxkICAgPSBmYWxzZSAgICAgICAgICAgICAgICAgICAgIC8vIGRpc2FibGUgYnVpbGQgbW9kZSBmb3IgYWRkaW5nIG11bHRpcGxlIGxpbmVzXHJcblxyXG4gICAgLy8gc2V0IGRlZmF1bHQgZm9udFxyXG4gICAgdGhpcy5hdHRyKCdmb250LWZhbWlseScsIFNWRy5kZWZhdWx0cy5hdHRyc1snZm9udC1mYW1pbHknXSlcclxuICB9XHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5TaGFwZVxyXG5cclxuICAvLyBBZGQgY2xhc3MgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gTW92ZSBvdmVyIHgtYXhpc1xyXG4gICAgeDogZnVuY3Rpb24oeCkge1xyXG4gICAgICAvLyBhY3QgYXMgZ2V0dGVyXHJcbiAgICAgIGlmICh4ID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cigneCcpXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCd4JywgeClcclxuICAgIH1cclxuICAgIC8vIE1vdmUgb3ZlciB5LWF4aXNcclxuICAsIHk6IGZ1bmN0aW9uKHkpIHtcclxuICAgICAgdmFyIG95ID0gdGhpcy5hdHRyKCd5JylcclxuICAgICAgICAsIG8gID0gdHlwZW9mIG95ID09PSAnbnVtYmVyJyA/IG95IC0gdGhpcy5iYm94KCkueSA6IDBcclxuXHJcbiAgICAgIC8vIGFjdCBhcyBnZXR0ZXJcclxuICAgICAgaWYgKHkgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gdHlwZW9mIG95ID09PSAnbnVtYmVyJyA/IG95IC0gbyA6IG95XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCd5JywgdHlwZW9mIHkudmFsdWVPZigpID09PSAnbnVtYmVyJyA/IHkgKyBvIDogeSlcclxuICAgIH1cclxuICAgIC8vIE1vdmUgY2VudGVyIG92ZXIgeC1heGlzXHJcbiAgLCBjeDogZnVuY3Rpb24oeCkge1xyXG4gICAgICByZXR1cm4geCA9PSBudWxsID8gdGhpcy5iYm94KCkuY3ggOiB0aGlzLngoeCAtIHRoaXMuYmJveCgpLndpZHRoIC8gMilcclxuICAgIH1cclxuICAgIC8vIE1vdmUgY2VudGVyIG92ZXIgeS1heGlzXHJcbiAgLCBjeTogZnVuY3Rpb24oeSkge1xyXG4gICAgICByZXR1cm4geSA9PSBudWxsID8gdGhpcy5iYm94KCkuY3kgOiB0aGlzLnkoeSAtIHRoaXMuYmJveCgpLmhlaWdodCAvIDIpXHJcbiAgICB9XHJcbiAgICAvLyBTZXQgdGhlIHRleHQgY29udGVudFxyXG4gICwgdGV4dDogZnVuY3Rpb24odGV4dCkge1xyXG4gICAgICAvLyBhY3QgYXMgZ2V0dGVyXHJcbiAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgIHZhciB0ZXh0ID0gJydcclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLm5vZGUuY2hpbGROb2Rlc1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgKytpKXtcclxuXHJcbiAgICAgICAgICAvLyBhZGQgbmV3bGluZSBpZiBpdHMgbm90IHRoZSBmaXJzdCBjaGlsZCBhbmQgbmV3TGluZWQgaXMgc2V0IHRvIHRydWVcclxuICAgICAgICAgIGlmKGkgIT0gMCAmJiBjaGlsZHJlbltpXS5ub2RlVHlwZSAhPSAzICYmIFNWRy5hZG9wdChjaGlsZHJlbltpXSkuZG9tLm5ld0xpbmVkID09IHRydWUpe1xyXG4gICAgICAgICAgICB0ZXh0ICs9ICdcXG4nXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gYWRkIGNvbnRlbnQgb2YgdGhpcyBub2RlXHJcbiAgICAgICAgICB0ZXh0ICs9IGNoaWxkcmVuW2ldLnRleHRDb250ZW50XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGV4dFxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyByZW1vdmUgZXhpc3RpbmcgY29udGVudFxyXG4gICAgICB0aGlzLmNsZWFyKCkuYnVpbGQodHJ1ZSlcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIC8vIGNhbGwgYmxvY2tcclxuICAgICAgICB0ZXh0LmNhbGwodGhpcywgdGhpcylcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gc3RvcmUgdGV4dCBhbmQgbWFrZSBzdXJlIHRleHQgaXMgbm90IGJsYW5rXHJcbiAgICAgICAgdGV4dCA9IHRleHQuc3BsaXQoJ1xcbicpXHJcblxyXG4gICAgICAgIC8vIGJ1aWxkIG5ldyBsaW5lc1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IHRleHQubGVuZ3RoOyBpIDwgaWw7IGkrKylcclxuICAgICAgICAgIHRoaXMudHNwYW4odGV4dFtpXSkubmV3TGluZSgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGRpc2FibGUgYnVpbGQgbW9kZSBhbmQgcmVidWlsZCBsaW5lc1xyXG4gICAgICByZXR1cm4gdGhpcy5idWlsZChmYWxzZSkucmVidWlsZCgpXHJcbiAgICB9XHJcbiAgICAvLyBTZXQgZm9udCBzaXplXHJcbiAgLCBzaXplOiBmdW5jdGlvbihzaXplKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ2ZvbnQtc2l6ZScsIHNpemUpLnJlYnVpbGQoKVxyXG4gICAgfVxyXG4gICAgLy8gU2V0IC8gZ2V0IGxlYWRpbmdcclxuICAsIGxlYWRpbmc6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgIC8vIGFjdCBhcyBnZXR0ZXJcclxuICAgICAgaWYgKHZhbHVlID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9tLmxlYWRpbmdcclxuXHJcbiAgICAgIC8vIGFjdCBhcyBzZXR0ZXJcclxuICAgICAgdGhpcy5kb20ubGVhZGluZyA9IG5ldyBTVkcuTnVtYmVyKHZhbHVlKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMucmVidWlsZCgpXHJcbiAgICB9XHJcbiAgICAvLyBHZXQgYWxsIHRoZSBmaXJzdCBsZXZlbCBsaW5lc1xyXG4gICwgbGluZXM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgbm9kZSA9ICh0aGlzLnRleHRQYXRoICYmIHRoaXMudGV4dFBhdGgoKSB8fCB0aGlzKS5ub2RlXHJcblxyXG4gICAgICAvLyBmaWx0ZXIgdHNwYW5zIGFuZCBtYXAgdGhlbSB0byBTVkcuanMgaW5zdGFuY2VzXHJcbiAgICAgIHZhciBsaW5lcyA9IFNWRy51dGlscy5tYXAoU1ZHLnV0aWxzLmZpbHRlclNWR0VsZW1lbnRzKG5vZGUuY2hpbGROb2RlcyksIGZ1bmN0aW9uKGVsKXtcclxuICAgICAgICByZXR1cm4gU1ZHLmFkb3B0KGVsKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy8gcmV0dXJuIGFuIGluc3RhbmNlIG9mIFNWRy5zZXRcclxuICAgICAgcmV0dXJuIG5ldyBTVkcuU2V0KGxpbmVzKVxyXG4gICAgfVxyXG4gICAgLy8gUmVidWlsZCBhcHBlYXJhbmNlIHR5cGVcclxuICAsIHJlYnVpbGQ6IGZ1bmN0aW9uKHJlYnVpbGQpIHtcclxuICAgICAgLy8gc3RvcmUgbmV3IHJlYnVpbGQgZmxhZyBpZiBnaXZlblxyXG4gICAgICBpZiAodHlwZW9mIHJlYnVpbGQgPT0gJ2Jvb2xlYW4nKVxyXG4gICAgICAgIHRoaXMuX3JlYnVpbGQgPSByZWJ1aWxkXHJcblxyXG4gICAgICAvLyBkZWZpbmUgcG9zaXRpb24gb2YgYWxsIGxpbmVzXHJcbiAgICAgIGlmICh0aGlzLl9yZWJ1aWxkKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICAgICAgICAsIGJsYW5rTGluZU9mZnNldCA9IDBcclxuICAgICAgICAgICwgZHkgPSB0aGlzLmRvbS5sZWFkaW5nICogbmV3IFNWRy5OdW1iZXIodGhpcy5hdHRyKCdmb250LXNpemUnKSlcclxuXHJcbiAgICAgICAgdGhpcy5saW5lcygpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5kb20ubmV3TGluZWQpIHtcclxuICAgICAgICAgICAgaWYgKCFzZWxmLnRleHRQYXRoKCkpXHJcbiAgICAgICAgICAgICAgdGhpcy5hdHRyKCd4Jywgc2VsZi5hdHRyKCd4JykpXHJcbiAgICAgICAgICAgIGlmKHRoaXMudGV4dCgpID09ICdcXG4nKSB7XHJcbiAgICAgICAgICAgICAgYmxhbmtMaW5lT2Zmc2V0ICs9IGR5XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHRoaXMuYXR0cignZHknLCBkeSArIGJsYW5rTGluZU9mZnNldClcclxuICAgICAgICAgICAgICBibGFua0xpbmVPZmZzZXQgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmZpcmUoJ3JlYnVpbGQnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gRW5hYmxlIC8gZGlzYWJsZSBidWlsZCBtb2RlXHJcbiAgLCBidWlsZDogZnVuY3Rpb24oYnVpbGQpIHtcclxuICAgICAgdGhpcy5fYnVpbGQgPSAhIWJ1aWxkXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBvdmVyd3JpdGUgbWV0aG9kIGZyb20gcGFyZW50IHRvIHNldCBkYXRhIHByb3Blcmx5XHJcbiAgLCBzZXREYXRhOiBmdW5jdGlvbihvKXtcclxuICAgICAgdGhpcy5kb20gPSBvXHJcbiAgICAgIHRoaXMuZG9tLmxlYWRpbmcgPSBuZXcgU1ZHLk51bWJlcihvLmxlYWRpbmcgfHwgMS4zKVxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIENyZWF0ZSB0ZXh0IGVsZW1lbnRcclxuICAgIHRleHQ6IGZ1bmN0aW9uKHRleHQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTVkcuVGV4dCkudGV4dCh0ZXh0KVxyXG4gICAgfVxyXG4gICAgLy8gQ3JlYXRlIHBsYWluIHRleHQgZWxlbWVudFxyXG4gICwgcGxhaW46IGZ1bmN0aW9uKHRleHQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTVkcuVGV4dCkucGxhaW4odGV4dClcclxuICAgIH1cclxuICB9XHJcblxyXG59KVxyXG5cclxuU1ZHLlRzcGFuID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiAndHNwYW4nXHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5TaGFwZVxyXG5cclxuICAvLyBBZGQgY2xhc3MgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gU2V0IHRleHQgY29udGVudFxyXG4gICAgdGV4dDogZnVuY3Rpb24odGV4dCkge1xyXG4gICAgICBpZih0ZXh0ID09IG51bGwpIHJldHVybiB0aGlzLm5vZGUudGV4dENvbnRlbnQgKyAodGhpcy5kb20ubmV3TGluZWQgPyAnXFxuJyA6ICcnKVxyXG5cclxuICAgICAgdHlwZW9mIHRleHQgPT09ICdmdW5jdGlvbicgPyB0ZXh0LmNhbGwodGhpcywgdGhpcykgOiB0aGlzLnBsYWluKHRleHQpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gU2hvcnRjdXQgZHhcclxuICAsIGR4OiBmdW5jdGlvbihkeCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCdkeCcsIGR4KVxyXG4gICAgfVxyXG4gICAgLy8gU2hvcnRjdXQgZHlcclxuICAsIGR5OiBmdW5jdGlvbihkeSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCdkeScsIGR5KVxyXG4gICAgfVxyXG4gICAgLy8gQ3JlYXRlIG5ldyBsaW5lXHJcbiAgLCBuZXdMaW5lOiBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gZmV0Y2ggdGV4dCBwYXJlbnRcclxuICAgICAgdmFyIHQgPSB0aGlzLnBhcmVudChTVkcuVGV4dClcclxuXHJcbiAgICAgIC8vIG1hcmsgbmV3IGxpbmVcclxuICAgICAgdGhpcy5kb20ubmV3TGluZWQgPSB0cnVlXHJcblxyXG4gICAgICAvLyBhcHBseSBuZXcgaHnCoW5cclxuICAgICAgcmV0dXJuIHRoaXMuZHkodC5kb20ubGVhZGluZyAqIHQuYXR0cignZm9udC1zaXplJykpLmF0dHIoJ3gnLCB0LngoKSlcclxuICAgIH1cclxuICB9XHJcblxyXG59KVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuVGV4dCwgU1ZHLlRzcGFuLCB7XHJcbiAgLy8gQ3JlYXRlIHBsYWluIHRleHQgbm9kZVxyXG4gIHBsYWluOiBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgICAvLyBjbGVhciBpZiBidWlsZCBtb2RlIGlzIGRpc2FibGVkXHJcbiAgICBpZiAodGhpcy5fYnVpbGQgPT09IGZhbHNlKVxyXG4gICAgICB0aGlzLmNsZWFyKClcclxuXHJcbiAgICAvLyBjcmVhdGUgdGV4dCBub2RlXHJcbiAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpXHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgLy8gQ3JlYXRlIGEgdHNwYW5cclxuLCB0c3BhbjogZnVuY3Rpb24odGV4dCkge1xyXG4gICAgdmFyIG5vZGUgID0gKHRoaXMudGV4dFBhdGggJiYgdGhpcy50ZXh0UGF0aCgpIHx8IHRoaXMpLm5vZGVcclxuICAgICAgLCB0c3BhbiA9IG5ldyBTVkcuVHNwYW5cclxuXHJcbiAgICAvLyBjbGVhciBpZiBidWlsZCBtb2RlIGlzIGRpc2FibGVkXHJcbiAgICBpZiAodGhpcy5fYnVpbGQgPT09IGZhbHNlKVxyXG4gICAgICB0aGlzLmNsZWFyKClcclxuXHJcbiAgICAvLyBhZGQgbmV3IHRzcGFuXHJcbiAgICBub2RlLmFwcGVuZENoaWxkKHRzcGFuLm5vZGUpXHJcblxyXG4gICAgcmV0dXJuIHRzcGFuLnRleHQodGV4dClcclxuICB9XHJcbiAgLy8gQ2xlYXIgYWxsIGxpbmVzXHJcbiwgY2xlYXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIG5vZGUgPSAodGhpcy50ZXh0UGF0aCAmJiB0aGlzLnRleHRQYXRoKCkgfHwgdGhpcykubm9kZVxyXG5cclxuICAgIC8vIHJlbW92ZSBleGlzdGluZyBjaGlsZCBub2Rlc1xyXG4gICAgd2hpbGUgKG5vZGUuaGFzQ2hpbGROb2RlcygpKVxyXG4gICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdENoaWxkKVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIC8vIEdldCBsZW5ndGggb2YgdGV4dCBlbGVtZW50XHJcbiwgbGVuZ3RoOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKClcclxuICB9XHJcbn0pXHJcblxuU1ZHLlRleHRQYXRoID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiAndGV4dFBhdGgnXHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5QYXJlbnRcclxuXHJcbiAgLy8gRGVmaW5lIHBhcmVudCBjbGFzc1xyXG4sIHBhcmVudDogU1ZHLlRleHRcclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIG1vcnBoQXJyYXk6IFNWRy5QYXRoQXJyYXlcclxuICAgIC8vIENyZWF0ZSBwYXRoIGZvciB0ZXh0IHRvIHJ1biBvblxyXG4gICwgcGF0aDogZnVuY3Rpb24oZCkge1xyXG4gICAgICAvLyBjcmVhdGUgdGV4dFBhdGggZWxlbWVudFxyXG4gICAgICB2YXIgcGF0aCAgPSBuZXcgU1ZHLlRleHRQYXRoXHJcbiAgICAgICAgLCB0cmFjayA9IHRoaXMuZG9jKCkuZGVmcygpLnBhdGgoZClcclxuXHJcbiAgICAgIC8vIG1vdmUgbGluZXMgdG8gdGV4dHBhdGhcclxuICAgICAgd2hpbGUgKHRoaXMubm9kZS5oYXNDaGlsZE5vZGVzKCkpXHJcbiAgICAgICAgcGF0aC5ub2RlLmFwcGVuZENoaWxkKHRoaXMubm9kZS5maXJzdENoaWxkKVxyXG5cclxuICAgICAgLy8gYWRkIHRleHRQYXRoIGVsZW1lbnQgYXMgY2hpbGQgbm9kZVxyXG4gICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQocGF0aC5ub2RlKVxyXG5cclxuICAgICAgLy8gbGluayB0ZXh0UGF0aCB0byBwYXRoIGFuZCBhZGQgY29udGVudFxyXG4gICAgICBwYXRoLmF0dHIoJ2hyZWYnLCAnIycgKyB0cmFjaywgU1ZHLnhsaW5rKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIHJldHVybiB0aGUgYXJyYXkgb2YgdGhlIHBhdGggdHJhY2sgZWxlbWVudFxyXG4gICwgYXJyYXk6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgdHJhY2sgPSB0aGlzLnRyYWNrKClcclxuXHJcbiAgICAgIHJldHVybiB0cmFjayA/IHRyYWNrLmFycmF5KCkgOiBudWxsXHJcbiAgICB9XHJcbiAgICAvLyBQbG90IHBhdGggaWYgYW55XHJcbiAgLCBwbG90OiBmdW5jdGlvbihkKSB7XHJcbiAgICAgIHZhciB0cmFjayA9IHRoaXMudHJhY2soKVxyXG4gICAgICAgICwgcGF0aEFycmF5ID0gbnVsbFxyXG5cclxuICAgICAgaWYgKHRyYWNrKSB7XHJcbiAgICAgICAgcGF0aEFycmF5ID0gdHJhY2sucGxvdChkKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gKGQgPT0gbnVsbCkgPyBwYXRoQXJyYXkgOiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBHZXQgdGhlIHBhdGggdHJhY2sgZWxlbWVudFxyXG4gICwgdHJhY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgcGF0aCA9IHRoaXMudGV4dFBhdGgoKVxyXG5cclxuICAgICAgaWYgKHBhdGgpXHJcbiAgICAgICAgcmV0dXJuIHBhdGgucmVmZXJlbmNlKCdocmVmJylcclxuICAgIH1cclxuICAgIC8vIEdldCB0aGUgdGV4dFBhdGggY2hpbGRcclxuICAsIHRleHRQYXRoOiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMubm9kZS5maXJzdENoaWxkICYmIHRoaXMubm9kZS5maXJzdENoaWxkLm5vZGVOYW1lID09ICd0ZXh0UGF0aCcpXHJcbiAgICAgICAgcmV0dXJuIFNWRy5hZG9wdCh0aGlzLm5vZGUuZmlyc3RDaGlsZClcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxuU1ZHLk5lc3RlZCA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgU1ZHLmNyZWF0ZSgnc3ZnJykpXHJcblxyXG4gICAgdGhpcy5zdHlsZSgnb3ZlcmZsb3cnLCAndmlzaWJsZScpXHJcbiAgfVxyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuQ29udGFpbmVyXHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBDcmVhdGUgbmVzdGVkIHN2ZyBkb2N1bWVudFxyXG4gICAgbmVzdGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTVkcuTmVzdGVkKVxyXG4gICAgfVxyXG4gIH1cclxufSlcblNWRy5BID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiAnYSdcclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLkNvbnRhaW5lclxyXG5cclxuICAvLyBBZGQgY2xhc3MgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gTGluayB1cmxcclxuICAgIHRvOiBmdW5jdGlvbih1cmwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cignaHJlZicsIHVybCwgU1ZHLnhsaW5rKVxyXG4gICAgfVxyXG4gICAgLy8gTGluayBzaG93IGF0dHJpYnV0ZVxyXG4gICwgc2hvdzogZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ3Nob3cnLCB0YXJnZXQsIFNWRy54bGluaylcclxuICAgIH1cclxuICAgIC8vIExpbmsgdGFyZ2V0IGF0dHJpYnV0ZVxyXG4gICwgdGFyZ2V0OiBmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cigndGFyZ2V0JywgdGFyZ2V0KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIENyZWF0ZSBhIGh5cGVybGluayBlbGVtZW50XHJcbiAgICBsaW5rOiBmdW5jdGlvbih1cmwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTVkcuQSkudG8odXJsKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcblNWRy5leHRlbmQoU1ZHLkVsZW1lbnQsIHtcclxuICAvLyBDcmVhdGUgYSBoeXBlcmxpbmsgZWxlbWVudFxyXG4gIGxpbmtUbzogZnVuY3Rpb24odXJsKSB7XHJcbiAgICB2YXIgbGluayA9IG5ldyBTVkcuQVxyXG5cclxuICAgIGlmICh0eXBlb2YgdXJsID09ICdmdW5jdGlvbicpXHJcbiAgICAgIHVybC5jYWxsKGxpbmssIGxpbmspXHJcbiAgICBlbHNlXHJcbiAgICAgIGxpbmsudG8odXJsKVxyXG5cclxuICAgIHJldHVybiB0aGlzLnBhcmVudCgpLnB1dChsaW5rKS5wdXQodGhpcylcclxuICB9XHJcblxyXG59KVxuU1ZHLk1hcmtlciA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogJ21hcmtlcidcclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLkNvbnRhaW5lclxyXG5cclxuICAvLyBBZGQgY2xhc3MgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gU2V0IHdpZHRoIG9mIGVsZW1lbnRcclxuICAgIHdpZHRoOiBmdW5jdGlvbih3aWR0aCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCdtYXJrZXJXaWR0aCcsIHdpZHRoKVxyXG4gICAgfVxyXG4gICAgLy8gU2V0IGhlaWdodCBvZiBlbGVtZW50XHJcbiAgLCBoZWlnaHQ6IGZ1bmN0aW9uKGhlaWdodCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCdtYXJrZXJIZWlnaHQnLCBoZWlnaHQpXHJcbiAgICB9XHJcbiAgICAvLyBTZXQgbWFya2VyIHJlZlggYW5kIHJlZllcclxuICAsIHJlZjogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCdyZWZYJywgeCkuYXR0cigncmVmWScsIHkpXHJcbiAgICB9XHJcbiAgICAvLyBVcGRhdGUgbWFya2VyXHJcbiAgLCB1cGRhdGU6IGZ1bmN0aW9uKGJsb2NrKSB7XHJcbiAgICAgIC8vIHJlbW92ZSBhbGwgY29udGVudFxyXG4gICAgICB0aGlzLmNsZWFyKClcclxuXHJcbiAgICAgIC8vIGludm9rZSBwYXNzZWQgYmxvY2tcclxuICAgICAgaWYgKHR5cGVvZiBibG9jayA9PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgIGJsb2NrLmNhbGwodGhpcywgdGhpcylcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gdGhlIGZpbGwgaWRcclxuICAsIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuICd1cmwoIycgKyB0aGlzLmlkKCkgKyAnKSdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICBtYXJrZXI6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQsIGJsb2NrKSB7XHJcbiAgICAgIC8vIENyZWF0ZSBtYXJrZXIgZWxlbWVudCBpbiBkZWZzXHJcbiAgICAgIHJldHVybiB0aGlzLmRlZnMoKS5tYXJrZXIod2lkdGgsIGhlaWdodCwgYmxvY2spXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxuXHJcblNWRy5leHRlbmQoU1ZHLkRlZnMsIHtcclxuICAvLyBDcmVhdGUgbWFya2VyXHJcbiAgbWFya2VyOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCBibG9jaykge1xyXG4gICAgLy8gU2V0IGRlZmF1bHQgdmlld2JveCB0byBtYXRjaCB0aGUgd2lkdGggYW5kIGhlaWdodCwgc2V0IHJlZiB0byBjeCBhbmQgY3kgYW5kIHNldCBvcmllbnQgdG8gYXV0b1xyXG4gICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTVkcuTWFya2VyKVxyXG4gICAgICAuc2l6ZSh3aWR0aCwgaGVpZ2h0KVxyXG4gICAgICAucmVmKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMilcclxuICAgICAgLnZpZXdib3goMCwgMCwgd2lkdGgsIGhlaWdodClcclxuICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcclxuICAgICAgLnVwZGF0ZShibG9jaylcclxuICB9XHJcblxyXG59KVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuTGluZSwgU1ZHLlBvbHlsaW5lLCBTVkcuUG9seWdvbiwgU1ZHLlBhdGgsIHtcclxuICAvLyBDcmVhdGUgYW5kIGF0dGFjaCBtYXJrZXJzXHJcbiAgbWFya2VyOiBmdW5jdGlvbihtYXJrZXIsIHdpZHRoLCBoZWlnaHQsIGJsb2NrKSB7XHJcbiAgICB2YXIgYXR0ciA9IFsnbWFya2VyJ11cclxuXHJcbiAgICAvLyBCdWlsZCBhdHRyaWJ1dGUgbmFtZVxyXG4gICAgaWYgKG1hcmtlciAhPSAnYWxsJykgYXR0ci5wdXNoKG1hcmtlcilcclxuICAgIGF0dHIgPSBhdHRyLmpvaW4oJy0nKVxyXG5cclxuICAgIC8vIFNldCBtYXJrZXIgYXR0cmlidXRlXHJcbiAgICBtYXJrZXIgPSBhcmd1bWVudHNbMV0gaW5zdGFuY2VvZiBTVkcuTWFya2VyID9cclxuICAgICAgYXJndW1lbnRzWzFdIDpcclxuICAgICAgdGhpcy5kb2MoKS5tYXJrZXIod2lkdGgsIGhlaWdodCwgYmxvY2spXHJcblxyXG4gICAgcmV0dXJuIHRoaXMuYXR0cihhdHRyLCBtYXJrZXIpXHJcbiAgfVxyXG5cclxufSlcbi8vIERlZmluZSBsaXN0IG9mIGF2YWlsYWJsZSBhdHRyaWJ1dGVzIGZvciBzdHJva2UgYW5kIGZpbGxcclxudmFyIHN1Z2FyID0ge1xyXG4gIHN0cm9rZTogWydjb2xvcicsICd3aWR0aCcsICdvcGFjaXR5JywgJ2xpbmVjYXAnLCAnbGluZWpvaW4nLCAnbWl0ZXJsaW1pdCcsICdkYXNoYXJyYXknLCAnZGFzaG9mZnNldCddXHJcbiwgZmlsbDogICBbJ2NvbG9yJywgJ29wYWNpdHknLCAncnVsZSddXHJcbiwgcHJlZml4OiBmdW5jdGlvbih0LCBhKSB7XHJcbiAgICByZXR1cm4gYSA9PSAnY29sb3InID8gdCA6IHQgKyAnLScgKyBhXHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgc3VnYXIgZm9yIGZpbGwgYW5kIHN0cm9rZVxyXG47WydmaWxsJywgJ3N0cm9rZSddLmZvckVhY2goZnVuY3Rpb24obSkge1xyXG4gIHZhciBpLCBleHRlbnNpb24gPSB7fVxyXG5cclxuICBleHRlbnNpb25bbV0gPSBmdW5jdGlvbihvKSB7XHJcbiAgICBpZiAodHlwZW9mIG8gPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICBpZiAodHlwZW9mIG8gPT0gJ3N0cmluZycgfHwgU1ZHLkNvbG9yLmlzUmdiKG8pIHx8IChvICYmIHR5cGVvZiBvLmZpbGwgPT09ICdmdW5jdGlvbicpKVxyXG4gICAgICB0aGlzLmF0dHIobSwgbylcclxuXHJcbiAgICBlbHNlXHJcbiAgICAgIC8vIHNldCBhbGwgYXR0cmlidXRlcyBmcm9tIHN1Z2FyLmZpbGwgYW5kIHN1Z2FyLnN0cm9rZSBsaXN0XHJcbiAgICAgIGZvciAoaSA9IHN1Z2FyW21dLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG4gICAgICAgIGlmIChvW3N1Z2FyW21dW2ldXSAhPSBudWxsKVxyXG4gICAgICAgICAgdGhpcy5hdHRyKHN1Z2FyLnByZWZpeChtLCBzdWdhclttXVtpXSksIG9bc3VnYXJbbV1baV1dKVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG5cclxuICBTVkcuZXh0ZW5kKFNWRy5FbGVtZW50LCBTVkcuRlgsIGV4dGVuc2lvbilcclxuXHJcbn0pXHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5FbGVtZW50LCBTVkcuRlgsIHtcclxuICAvLyBNYXAgcm90YXRpb24gdG8gdHJhbnNmb3JtXHJcbiAgcm90YXRlOiBmdW5jdGlvbihkLCBjeCwgY3kpIHtcclxuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybSh7IHJvdGF0aW9uOiBkLCBjeDogY3gsIGN5OiBjeSB9KVxyXG4gIH1cclxuICAvLyBNYXAgc2tldyB0byB0cmFuc2Zvcm1cclxuLCBza2V3OiBmdW5jdGlvbih4LCB5LCBjeCwgY3kpIHtcclxuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09IDEgIHx8IGFyZ3VtZW50cy5sZW5ndGggPT0gMyA/XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtKHsgc2tldzogeCwgY3g6IHksIGN5OiBjeCB9KSA6XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtKHsgc2tld1g6IHgsIHNrZXdZOiB5LCBjeDogY3gsIGN5OiBjeSB9KVxyXG4gIH1cclxuICAvLyBNYXAgc2NhbGUgdG8gdHJhbnNmb3JtXHJcbiwgc2NhbGU6IGZ1bmN0aW9uKHgsIHksIGN4LCBjeSkge1xyXG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT0gMSAgfHwgYXJndW1lbnRzLmxlbmd0aCA9PSAzID9cclxuICAgICAgdGhpcy50cmFuc2Zvcm0oeyBzY2FsZTogeCwgY3g6IHksIGN5OiBjeCB9KSA6XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtKHsgc2NhbGVYOiB4LCBzY2FsZVk6IHksIGN4OiBjeCwgY3k6IGN5IH0pXHJcbiAgfVxyXG4gIC8vIE1hcCB0cmFuc2xhdGUgdG8gdHJhbnNmb3JtXHJcbiwgdHJhbnNsYXRlOiBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0oeyB4OiB4LCB5OiB5IH0pXHJcbiAgfVxyXG4gIC8vIE1hcCBmbGlwIHRvIHRyYW5zZm9ybVxyXG4sIGZsaXA6IGZ1bmN0aW9uKGEsIG8pIHtcclxuICAgIG8gPSB0eXBlb2YgYSA9PSAnbnVtYmVyJyA/IGEgOiBvXHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0oeyBmbGlwOiBhIHx8ICdib3RoJywgb2Zmc2V0OiBvIH0pXHJcbiAgfVxyXG4gIC8vIE1hcCBtYXRyaXggdG8gdHJhbnNmb3JtXHJcbiwgbWF0cml4OiBmdW5jdGlvbihtKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdHRyKCd0cmFuc2Zvcm0nLCBuZXcgU1ZHLk1hdHJpeChhcmd1bWVudHMubGVuZ3RoID09IDYgPyBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykgOiBtKSlcclxuICB9XHJcbiAgLy8gT3BhY2l0eVxyXG4sIG9wYWNpdHk6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdvcGFjaXR5JywgdmFsdWUpXHJcbiAgfVxyXG4gIC8vIFJlbGF0aXZlIG1vdmUgb3ZlciB4IGF4aXNcclxuLCBkeDogZnVuY3Rpb24oeCkge1xyXG4gICAgcmV0dXJuIHRoaXMueChuZXcgU1ZHLk51bWJlcih4KS5wbHVzKHRoaXMgaW5zdGFuY2VvZiBTVkcuRlggPyAwIDogdGhpcy54KCkpLCB0cnVlKVxyXG4gIH1cclxuICAvLyBSZWxhdGl2ZSBtb3ZlIG92ZXIgeSBheGlzXHJcbiwgZHk6IGZ1bmN0aW9uKHkpIHtcclxuICAgIHJldHVybiB0aGlzLnkobmV3IFNWRy5OdW1iZXIoeSkucGx1cyh0aGlzIGluc3RhbmNlb2YgU1ZHLkZYID8gMCA6IHRoaXMueSgpKSwgdHJ1ZSlcclxuICB9XHJcbiAgLy8gUmVsYXRpdmUgbW92ZSBvdmVyIHggYW5kIHkgYXhlc1xyXG4sIGRtb3ZlOiBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5keCh4KS5keSh5KVxyXG4gIH1cclxufSlcclxuXHJcblNWRy5leHRlbmQoU1ZHLlJlY3QsIFNWRy5FbGxpcHNlLCBTVkcuQ2lyY2xlLCBTVkcuR3JhZGllbnQsIFNWRy5GWCwge1xyXG4gIC8vIEFkZCB4IGFuZCB5IHJhZGl1c1xyXG4gIHJhZGl1czogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgdmFyIHR5cGUgPSAodGhpcy5fdGFyZ2V0IHx8IHRoaXMpLnR5cGU7XHJcbiAgICByZXR1cm4gdHlwZSA9PSAncmFkaWFsJyB8fCB0eXBlID09ICdjaXJjbGUnID9cclxuICAgICAgdGhpcy5hdHRyKCdyJywgbmV3IFNWRy5OdW1iZXIoeCkpIDpcclxuICAgICAgdGhpcy5yeCh4KS5yeSh5ID09IG51bGwgPyB4IDogeSlcclxuICB9XHJcbn0pXHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5QYXRoLCB7XHJcbiAgLy8gR2V0IHBhdGggbGVuZ3RoXHJcbiAgbGVuZ3RoOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0VG90YWxMZW5ndGgoKVxyXG4gIH1cclxuICAvLyBHZXQgcG9pbnQgYXQgbGVuZ3RoXHJcbiwgcG9pbnRBdDogZnVuY3Rpb24obGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2RlLmdldFBvaW50QXRMZW5ndGgobGVuZ3RoKVxyXG4gIH1cclxufSlcclxuXHJcblNWRy5leHRlbmQoU1ZHLlBhcmVudCwgU1ZHLlRleHQsIFNWRy5Uc3BhbiwgU1ZHLkZYLCB7XHJcbiAgLy8gU2V0IGZvbnRcclxuICBmb250OiBmdW5jdGlvbihhLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcpIHtcclxuICAgICAgZm9yICh2IGluIGEpIHRoaXMuZm9udCh2LCBhW3ZdKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhID09ICdsZWFkaW5nJyA/XHJcbiAgICAgICAgdGhpcy5sZWFkaW5nKHYpIDpcclxuICAgICAgYSA9PSAnYW5jaG9yJyA/XHJcbiAgICAgICAgdGhpcy5hdHRyKCd0ZXh0LWFuY2hvcicsIHYpIDpcclxuICAgICAgYSA9PSAnc2l6ZScgfHwgYSA9PSAnZmFtaWx5JyB8fCBhID09ICd3ZWlnaHQnIHx8IGEgPT0gJ3N0cmV0Y2gnIHx8IGEgPT0gJ3ZhcmlhbnQnIHx8IGEgPT0gJ3N0eWxlJyA/XHJcbiAgICAgICAgdGhpcy5hdHRyKCdmb250LScrIGEsIHYpIDpcclxuICAgICAgICB0aGlzLmF0dHIoYSwgdilcclxuICB9XHJcbn0pXHJcblxuU1ZHLlNldCA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemVcclxuICBjcmVhdGU6IGZ1bmN0aW9uKG1lbWJlcnMpIHtcclxuICAgIGlmIChtZW1iZXJzIGluc3RhbmNlb2YgU1ZHLlNldCkge1xyXG4gICAgICB0aGlzLm1lbWJlcnMgPSBtZW1iZXJzLm1lbWJlcnMuc2xpY2UoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgQXJyYXkuaXNBcnJheShtZW1iZXJzKSA/IHRoaXMubWVtYmVycyA9IG1lbWJlcnMgOiB0aGlzLmNsZWFyKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEFkZCBjbGFzcyBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBBZGQgZWxlbWVudCB0byBzZXRcclxuICAgIGFkZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBpLCBpbCwgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcclxuXHJcbiAgICAgIGZvciAoaSA9IDAsIGlsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKylcclxuICAgICAgICB0aGlzLm1lbWJlcnMucHVzaChlbGVtZW50c1tpXSlcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBSZW1vdmUgZWxlbWVudCBmcm9tIHNldFxyXG4gICwgcmVtb3ZlOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBpID0gdGhpcy5pbmRleChlbGVtZW50KVxyXG5cclxuICAgICAgLy8gcmVtb3ZlIGdpdmVuIGNoaWxkXHJcbiAgICAgIGlmIChpID4gLTEpXHJcbiAgICAgICAgdGhpcy5tZW1iZXJzLnNwbGljZShpLCAxKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIEl0ZXJhdGUgb3ZlciBhbGwgbWVtYmVyc1xyXG4gICwgZWFjaDogZnVuY3Rpb24oYmxvY2spIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGlsID0gdGhpcy5tZW1iZXJzLmxlbmd0aDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgYmxvY2suYXBwbHkodGhpcy5tZW1iZXJzW2ldLCBbaSwgdGhpcy5tZW1iZXJzXSlcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBSZXN0b3JlIHRvIGRlZmF1bHRzXHJcbiAgLCBjbGVhcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIGluaXRpYWxpemUgc3RvcmVcclxuICAgICAgdGhpcy5tZW1iZXJzID0gW11cclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBHZXQgdGhlIGxlbmd0aCBvZiBhIHNldFxyXG4gICwgbGVuZ3RoOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWVtYmVycy5sZW5ndGhcclxuICAgIH1cclxuICAgIC8vIENoZWNrcyBpZiBhIGdpdmVuIGVsZW1lbnQgaXMgcHJlc2VudCBpbiBzZXRcclxuICAsIGhhczogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pbmRleChlbGVtZW50KSA+PSAwXHJcbiAgICB9XHJcbiAgICAvLyByZXR1bnMgaW5kZXggb2YgZ2l2ZW4gZWxlbWVudCBpbiBzZXRcclxuICAsIGluZGV4OiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1lbWJlcnMuaW5kZXhPZihlbGVtZW50KVxyXG4gICAgfVxyXG4gICAgLy8gR2V0IG1lbWJlciBhdCBnaXZlbiBpbmRleFxyXG4gICwgZ2V0OiBmdW5jdGlvbihpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1lbWJlcnNbaV1cclxuICAgIH1cclxuICAgIC8vIEdldCBmaXJzdCBtZW1iZXJcclxuICAsIGZpcnN0OiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0KDApXHJcbiAgICB9XHJcbiAgICAvLyBHZXQgbGFzdCBtZW1iZXJcclxuICAsIGxhc3Q6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5tZW1iZXJzLmxlbmd0aCAtIDEpXHJcbiAgICB9XHJcbiAgICAvLyBEZWZhdWx0IHZhbHVlXHJcbiAgLCB2YWx1ZU9mOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWVtYmVyc1xyXG4gICAgfVxyXG4gICAgLy8gR2V0IHRoZSBib3VuZGluZyBib3ggb2YgYWxsIG1lbWJlcnMgaW5jbHVkZWQgb3IgZW1wdHkgYm94IGlmIHNldCBoYXMgbm8gaXRlbXNcclxuICAsIGJib3g6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vIHJldHVybiBhbiBlbXB0eSBib3ggb2YgdGhlcmUgYXJlIG5vIG1lbWJlcnNcclxuICAgICAgaWYgKHRoaXMubWVtYmVycy5sZW5ndGggPT0gMClcclxuICAgICAgICByZXR1cm4gbmV3IFNWRy5SQm94KClcclxuXHJcbiAgICAgIC8vIGdldCB0aGUgZmlyc3QgcmJveCBhbmQgdXBkYXRlIHRoZSB0YXJnZXQgYmJveFxyXG4gICAgICB2YXIgcmJveCA9IHRoaXMubWVtYmVyc1swXS5yYm94KHRoaXMubWVtYmVyc1swXS5kb2MoKSlcclxuXHJcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyB1c2VyIHJib3ggZm9yIGNvcnJlY3QgcG9zaXRpb24gYW5kIHZpc3VhbCByZXByZXNlbnRhdGlvblxyXG4gICAgICAgIHJib3ggPSByYm94Lm1lcmdlKHRoaXMucmJveCh0aGlzLmRvYygpKSlcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiByYm94XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IHNldFxyXG4gICAgc2V0OiBmdW5jdGlvbihtZW1iZXJzKSB7XHJcbiAgICAgIHJldHVybiBuZXcgU1ZHLlNldChtZW1iZXJzKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcblNWRy5GWC5TZXQgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6IGZ1bmN0aW9uKHNldCkge1xyXG4gICAgLy8gc3RvcmUgcmVmZXJlbmNlIHRvIHNldFxyXG4gICAgdGhpcy5zZXQgPSBzZXRcclxuICB9XHJcblxyXG59KVxyXG5cclxuLy8gQWxpYXMgbWV0aG9kc1xyXG5TVkcuU2V0LmluaGVyaXQgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgbVxyXG4gICAgLCBtZXRob2RzID0gW11cclxuXHJcbiAgLy8gZ2F0aGVyIHNoYXBlIG1ldGhvZHNcclxuICBmb3IodmFyIG0gaW4gU1ZHLlNoYXBlLnByb3RvdHlwZSlcclxuICAgIGlmICh0eXBlb2YgU1ZHLlNoYXBlLnByb3RvdHlwZVttXSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTVkcuU2V0LnByb3RvdHlwZVttXSAhPSAnZnVuY3Rpb24nKVxyXG4gICAgICBtZXRob2RzLnB1c2gobSlcclxuXHJcbiAgLy8gYXBwbHkgc2hhcGUgYWxpYXNzZXNcclxuICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XHJcbiAgICBTVkcuU2V0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IHRoaXMubWVtYmVycy5sZW5ndGg7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGlmICh0aGlzLm1lbWJlcnNbaV0gJiYgdHlwZW9mIHRoaXMubWVtYmVyc1tpXVttZXRob2RdID09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICB0aGlzLm1lbWJlcnNbaV1bbWV0aG9kXS5hcHBseSh0aGlzLm1lbWJlcnNbaV0sIGFyZ3VtZW50cylcclxuXHJcbiAgICAgIHJldHVybiBtZXRob2QgPT0gJ2FuaW1hdGUnID8gKHRoaXMuZnggfHwgKHRoaXMuZnggPSBuZXcgU1ZHLkZYLlNldCh0aGlzKSkpIDogdGhpc1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIC8vIGNsZWFyIG1ldGhvZHMgZm9yIHRoZSBuZXh0IHJvdW5kXHJcbiAgbWV0aG9kcyA9IFtdXHJcblxyXG4gIC8vIGdhdGhlciBmeCBtZXRob2RzXHJcbiAgZm9yKHZhciBtIGluIFNWRy5GWC5wcm90b3R5cGUpXHJcbiAgICBpZiAodHlwZW9mIFNWRy5GWC5wcm90b3R5cGVbbV0gPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU1ZHLkZYLlNldC5wcm90b3R5cGVbbV0gIT0gJ2Z1bmN0aW9uJylcclxuICAgICAgbWV0aG9kcy5wdXNoKG0pXHJcblxyXG4gIC8vIGFwcGx5IGZ4IGFsaWFzc2VzXHJcbiAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xyXG4gICAgU1ZHLkZYLlNldC5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBmb3IgKHZhciBpID0gMCwgaWwgPSB0aGlzLnNldC5tZW1iZXJzLmxlbmd0aDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgdGhpcy5zZXQubWVtYmVyc1tpXS5meFttZXRob2RdLmFwcGx5KHRoaXMuc2V0Lm1lbWJlcnNbaV0uZngsIGFyZ3VtZW50cylcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cblxyXG5TVkcuZXh0ZW5kKFNWRy5FbGVtZW50LCB7XHJcbiAgLy8gU3RvcmUgZGF0YSB2YWx1ZXMgb24gc3ZnIG5vZGVzXHJcbiAgZGF0YTogZnVuY3Rpb24oYSwgdiwgcikge1xyXG4gICAgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnKSB7XHJcbiAgICAgIGZvciAodiBpbiBhKVxyXG4gICAgICAgIHRoaXMuZGF0YSh2LCBhW3ZdKVxyXG5cclxuICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmF0dHIoJ2RhdGEtJyArIGEpKVxyXG4gICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdHRyKCdkYXRhLScgKyBhKVxyXG4gICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdHRyKFxyXG4gICAgICAgICdkYXRhLScgKyBhXHJcbiAgICAgICwgdiA9PT0gbnVsbCA/XHJcbiAgICAgICAgICBudWxsIDpcclxuICAgICAgICByID09PSB0cnVlIHx8IHR5cGVvZiB2ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdiA9PT0gJ251bWJlcicgP1xyXG4gICAgICAgICAgdiA6XHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh2KVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbn0pXG5TVkcuZXh0ZW5kKFNWRy5FbGVtZW50LCB7XHJcbiAgLy8gUmVtZW1iZXIgYXJiaXRyYXJ5IGRhdGFcclxuICByZW1lbWJlcjogZnVuY3Rpb24oaywgdikge1xyXG4gICAgLy8gcmVtZW1iZXIgZXZlcnkgaXRlbSBpbiBhbiBvYmplY3QgaW5kaXZpZHVhbGx5XHJcbiAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PSAnb2JqZWN0JylcclxuICAgICAgZm9yICh2YXIgdiBpbiBrKVxyXG4gICAgICAgIHRoaXMucmVtZW1iZXIodiwga1t2XSlcclxuXHJcbiAgICAvLyByZXRyaWV2ZSBtZW1vcnlcclxuICAgIGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuICAgICAgcmV0dXJuIHRoaXMubWVtb3J5KClba11cclxuXHJcbiAgICAvLyBzdG9yZSBtZW1vcnlcclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5tZW1vcnkoKVtrXSA9IHZcclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuXHJcbiAgLy8gRXJhc2UgYSBnaXZlbiBtZW1vcnlcclxuLCBmb3JnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuICAgICAgdGhpcy5fbWVtb3J5ID0ge31cclxuICAgIGVsc2VcclxuICAgICAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuICAgICAgICBkZWxldGUgdGhpcy5tZW1vcnkoKVthcmd1bWVudHNbaV1dXHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcblxyXG4gIC8vIEluaXRpYWxpemUgb3IgcmV0dXJuIGxvY2FsIG1lbW9yeSBvYmplY3RcclxuLCBtZW1vcnk6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21lbW9yeSB8fCAodGhpcy5fbWVtb3J5ID0ge30pXHJcbiAgfVxyXG5cclxufSlcbi8vIE1ldGhvZCBmb3IgZ2V0dGluZyBhbiBlbGVtZW50IGJ5IGlkXHJcblNWRy5nZXQgPSBmdW5jdGlvbihpZCkge1xyXG4gIHZhciBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRGcm9tUmVmZXJlbmNlKGlkKSB8fCBpZClcclxuICByZXR1cm4gU1ZHLmFkb3B0KG5vZGUpXHJcbn1cclxuXHJcbi8vIFNlbGVjdCBlbGVtZW50cyBieSBxdWVyeSBzdHJpbmdcclxuU1ZHLnNlbGVjdCA9IGZ1bmN0aW9uKHF1ZXJ5LCBwYXJlbnQpIHtcclxuICByZXR1cm4gbmV3IFNWRy5TZXQoXHJcbiAgICBTVkcudXRpbHMubWFwKChwYXJlbnQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpLCBmdW5jdGlvbihub2RlKSB7XHJcbiAgICAgIHJldHVybiBTVkcuYWRvcHQobm9kZSlcclxuICAgIH0pXHJcbiAgKVxyXG59XHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5QYXJlbnQsIHtcclxuICAvLyBTY29wZWQgc2VsZWN0IG1ldGhvZFxyXG4gIHNlbGVjdDogZnVuY3Rpb24ocXVlcnkpIHtcclxuICAgIHJldHVybiBTVkcuc2VsZWN0KHF1ZXJ5LCB0aGlzLm5vZGUpXHJcbiAgfVxyXG5cclxufSlcbmZ1bmN0aW9uIHBhdGhSZWdSZXBsYWNlKGEsIGIsIGMsIGQpIHtcclxuICByZXR1cm4gYyArIGQucmVwbGFjZShTVkcucmVnZXguZG90cywgJyAuJylcclxufVxyXG5cclxuLy8gY3JlYXRlcyBkZWVwIGNsb25lIG9mIGFycmF5XHJcbmZ1bmN0aW9uIGFycmF5X2Nsb25lKGFycil7XHJcbiAgdmFyIGNsb25lID0gYXJyLnNsaWNlKDApXHJcbiAgZm9yKHZhciBpID0gY2xvbmUubGVuZ3RoOyBpLS07KXtcclxuICAgIGlmKEFycmF5LmlzQXJyYXkoY2xvbmVbaV0pKXtcclxuICAgICAgY2xvbmVbaV0gPSBhcnJheV9jbG9uZShjbG9uZVtpXSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGNsb25lXHJcbn1cclxuXHJcbi8vIHRlc3RzIGlmIGEgZ2l2ZW4gZWxlbWVudCBpcyBpbnN0YW5jZSBvZiBhbiBvYmplY3RcclxuZnVuY3Rpb24gaXMoZWwsIG9iail7XHJcbiAgcmV0dXJuIGVsIGluc3RhbmNlb2Ygb2JqXHJcbn1cclxuXHJcbi8vIHRlc3RzIGlmIGEgZ2l2ZW4gc2VsZWN0b3IgbWF0Y2hlcyBhbiBlbGVtZW50XHJcbmZ1bmN0aW9uIG1hdGNoZXMoZWwsIHNlbGVjdG9yKSB7XHJcbiAgcmV0dXJuIChlbC5tYXRjaGVzIHx8IGVsLm1hdGNoZXNTZWxlY3RvciB8fCBlbC5tc01hdGNoZXNTZWxlY3RvciB8fCBlbC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm9NYXRjaGVzU2VsZWN0b3IpLmNhbGwoZWwsIHNlbGVjdG9yKTtcclxufVxyXG5cclxuLy8gQ29udmVydCBkYXNoLXNlcGFyYXRlZC1zdHJpbmcgdG8gY2FtZWxDYXNlXHJcbmZ1bmN0aW9uIGNhbWVsQ2FzZShzKSB7XHJcbiAgcmV0dXJuIHMudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tKC4pL2csIGZ1bmN0aW9uKG0sIGcpIHtcclxuICAgIHJldHVybiBnLnRvVXBwZXJDYXNlKClcclxuICB9KVxyXG59XHJcblxyXG4vLyBDYXBpdGFsaXplIGZpcnN0IGxldHRlciBvZiBhIHN0cmluZ1xyXG5mdW5jdGlvbiBjYXBpdGFsaXplKHMpIHtcclxuICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSlcclxufVxyXG5cclxuLy8gRW5zdXJlIHRvIHNpeC1iYXNlZCBoZXhcclxuZnVuY3Rpb24gZnVsbEhleChoZXgpIHtcclxuICByZXR1cm4gaGV4Lmxlbmd0aCA9PSA0ID9cclxuICAgIFsgJyMnLFxyXG4gICAgICBoZXguc3Vic3RyaW5nKDEsIDIpLCBoZXguc3Vic3RyaW5nKDEsIDIpXHJcbiAgICAsIGhleC5zdWJzdHJpbmcoMiwgMyksIGhleC5zdWJzdHJpbmcoMiwgMylcclxuICAgICwgaGV4LnN1YnN0cmluZygzLCA0KSwgaGV4LnN1YnN0cmluZygzLCA0KVxyXG4gICAgXS5qb2luKCcnKSA6IGhleFxyXG59XHJcblxyXG4vLyBDb21wb25lbnQgdG8gaGV4IHZhbHVlXHJcbmZ1bmN0aW9uIGNvbXBUb0hleChjb21wKSB7XHJcbiAgdmFyIGhleCA9IGNvbXAudG9TdHJpbmcoMTYpXHJcbiAgcmV0dXJuIGhleC5sZW5ndGggPT0gMSA/ICcwJyArIGhleCA6IGhleFxyXG59XHJcblxyXG4vLyBDYWxjdWxhdGUgcHJvcG9ydGlvbmFsIHdpZHRoIGFuZCBoZWlnaHQgdmFsdWVzIHdoZW4gbmVjZXNzYXJ5XHJcbmZ1bmN0aW9uIHByb3BvcnRpb25hbFNpemUoZWxlbWVudCwgd2lkdGgsIGhlaWdodCkge1xyXG4gIGlmICh3aWR0aCA9PSBudWxsIHx8IGhlaWdodCA9PSBudWxsKSB7XHJcbiAgICB2YXIgYm94ID0gZWxlbWVudC5iYm94KClcclxuXHJcbiAgICBpZiAod2lkdGggPT0gbnVsbClcclxuICAgICAgd2lkdGggPSBib3gud2lkdGggLyBib3guaGVpZ2h0ICogaGVpZ2h0XHJcbiAgICBlbHNlIGlmIChoZWlnaHQgPT0gbnVsbClcclxuICAgICAgaGVpZ2h0ID0gYm94LmhlaWdodCAvIGJveC53aWR0aCAqIHdpZHRoXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgd2lkdGg6ICB3aWR0aFxyXG4gICwgaGVpZ2h0OiBoZWlnaHRcclxuICB9XHJcbn1cclxuXHJcbi8vIERlbHRhIHRyYW5zZm9ybSBwb2ludFxyXG5mdW5jdGlvbiBkZWx0YVRyYW5zZm9ybVBvaW50KG1hdHJpeCwgeCwgeSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB4OiB4ICogbWF0cml4LmEgKyB5ICogbWF0cml4LmMgKyAwXHJcbiAgLCB5OiB4ICogbWF0cml4LmIgKyB5ICogbWF0cml4LmQgKyAwXHJcbiAgfVxyXG59XHJcblxyXG4vLyBNYXAgbWF0cml4IGFycmF5IHRvIG9iamVjdFxyXG5mdW5jdGlvbiBhcnJheVRvTWF0cml4KGEpIHtcclxuICByZXR1cm4geyBhOiBhWzBdLCBiOiBhWzFdLCBjOiBhWzJdLCBkOiBhWzNdLCBlOiBhWzRdLCBmOiBhWzVdIH1cclxufVxyXG5cclxuLy8gUGFyc2UgbWF0cml4IGlmIHJlcXVpcmVkXHJcbmZ1bmN0aW9uIHBhcnNlTWF0cml4KG1hdHJpeCkge1xyXG4gIGlmICghKG1hdHJpeCBpbnN0YW5jZW9mIFNWRy5NYXRyaXgpKVxyXG4gICAgbWF0cml4ID0gbmV3IFNWRy5NYXRyaXgobWF0cml4KVxyXG5cclxuICByZXR1cm4gbWF0cml4XHJcbn1cclxuXHJcbi8vIEFkZCBjZW50cmUgcG9pbnQgdG8gdHJhbnNmb3JtIG9iamVjdFxyXG5mdW5jdGlvbiBlbnN1cmVDZW50cmUobywgdGFyZ2V0KSB7XHJcbiAgby5jeCA9IG8uY3ggPT0gbnVsbCA/IHRhcmdldC5iYm94KCkuY3ggOiBvLmN4XHJcbiAgby5jeSA9IG8uY3kgPT0gbnVsbCA/IHRhcmdldC5iYm94KCkuY3kgOiBvLmN5XHJcbn1cclxuXHJcbi8vIFBhdGhBcnJheSBIZWxwZXJzXHJcbmZ1bmN0aW9uIGFycmF5VG9TdHJpbmcoYSkge1xyXG4gIGZvciAodmFyIGkgPSAwLCBpbCA9IGEubGVuZ3RoLCBzID0gJyc7IGkgPCBpbDsgaSsrKSB7XHJcbiAgICBzICs9IGFbaV1bMF1cclxuXHJcbiAgICBpZiAoYVtpXVsxXSAhPSBudWxsKSB7XHJcbiAgICAgIHMgKz0gYVtpXVsxXVxyXG5cclxuICAgICAgaWYgKGFbaV1bMl0gIT0gbnVsbCkge1xyXG4gICAgICAgIHMgKz0gJyAnXHJcbiAgICAgICAgcyArPSBhW2ldWzJdXHJcblxyXG4gICAgICAgIGlmIChhW2ldWzNdICE9IG51bGwpIHtcclxuICAgICAgICAgIHMgKz0gJyAnXHJcbiAgICAgICAgICBzICs9IGFbaV1bM11cclxuICAgICAgICAgIHMgKz0gJyAnXHJcbiAgICAgICAgICBzICs9IGFbaV1bNF1cclxuXHJcbiAgICAgICAgICBpZiAoYVtpXVs1XSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHMgKz0gJyAnXHJcbiAgICAgICAgICAgIHMgKz0gYVtpXVs1XVxyXG4gICAgICAgICAgICBzICs9ICcgJ1xyXG4gICAgICAgICAgICBzICs9IGFbaV1bNl1cclxuXHJcbiAgICAgICAgICAgIGlmIChhW2ldWzddICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICBzICs9ICcgJ1xyXG4gICAgICAgICAgICAgIHMgKz0gYVtpXVs3XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcyArICcgJ1xyXG59XHJcblxyXG4vLyBEZWVwIG5ldyBpZCBhc3NpZ25tZW50XHJcbmZ1bmN0aW9uIGFzc2lnbk5ld0lkKG5vZGUpIHtcclxuICAvLyBkbyB0aGUgc2FtZSBmb3IgU1ZHIGNoaWxkIG5vZGVzIGFzIHdlbGxcclxuICBmb3IgKHZhciBpID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG4gICAgaWYgKG5vZGUuY2hpbGROb2Rlc1tpXSBpbnN0YW5jZW9mIHdpbmRvdy5TVkdFbGVtZW50KVxyXG4gICAgICBhc3NpZ25OZXdJZChub2RlLmNoaWxkTm9kZXNbaV0pXHJcblxyXG4gIHJldHVybiBTVkcuYWRvcHQobm9kZSkuaWQoU1ZHLmVpZChub2RlLm5vZGVOYW1lKSlcclxufVxyXG5cclxuLy8gQWRkIG1vcmUgYm91bmRpbmcgYm94IHByb3BlcnRpZXNcclxuZnVuY3Rpb24gZnVsbEJveChiKSB7XHJcbiAgaWYgKGIueCA9PSBudWxsKSB7XHJcbiAgICBiLnggICAgICA9IDBcclxuICAgIGIueSAgICAgID0gMFxyXG4gICAgYi53aWR0aCAgPSAwXHJcbiAgICBiLmhlaWdodCA9IDBcclxuICB9XHJcblxyXG4gIGIudyAgPSBiLndpZHRoXHJcbiAgYi5oICA9IGIuaGVpZ2h0XHJcbiAgYi54MiA9IGIueCArIGIud2lkdGhcclxuICBiLnkyID0gYi55ICsgYi5oZWlnaHRcclxuICBiLmN4ID0gYi54ICsgYi53aWR0aCAvIDJcclxuICBiLmN5ID0gYi55ICsgYi5oZWlnaHQgLyAyXHJcblxyXG4gIHJldHVybiBiXHJcbn1cclxuXHJcbi8vIEdldCBpZCBmcm9tIHJlZmVyZW5jZSBzdHJpbmdcclxuZnVuY3Rpb24gaWRGcm9tUmVmZXJlbmNlKHVybCkge1xyXG4gIHZhciBtID0gKHVybCB8fCAnJykudG9TdHJpbmcoKS5tYXRjaChTVkcucmVnZXgucmVmZXJlbmNlKVxyXG5cclxuICBpZiAobSkgcmV0dXJuIG1bMV1cclxufVxyXG5cclxuLy8gSWYgdmFsdWVzIGxpa2UgMWUtODggYXJlIHBhc3NlZCwgdGhpcyBpcyBub3QgYSB2YWxpZCAzMiBiaXQgZmxvYXQsXHJcbi8vIGJ1dCBpbiB0aG9zZSBjYXNlcywgd2UgYXJlIHNvIGNsb3NlIHRvIDAgdGhhdCAwIHdvcmtzIHdlbGwhXHJcbmZ1bmN0aW9uIGZsb2F0MzJTdHJpbmcodikge1xyXG4gIHJldHVybiBNYXRoLmFicyh2KSA+IDFlLTM3ID8gdiA6IDBcclxufVxyXG5cclxuLy8gQ3JlYXRlIG1hdHJpeCBhcnJheSBmb3IgbG9vcGluZ1xyXG52YXIgYWJjZGVmID0gJ2FiY2RlZicuc3BsaXQoJycpXHJcblxuLy8gQWRkIEN1c3RvbUV2ZW50IHRvIElFOSBhbmQgSUUxMFxyXG5pZiAodHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gIC8vIENvZGUgZnJvbTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0N1c3RvbUV2ZW50XHJcbiAgdmFyIEN1c3RvbUV2ZW50UG9seSA9IGZ1bmN0aW9uKGV2ZW50LCBvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiB1bmRlZmluZWQgfVxyXG4gICAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxyXG4gICAgZS5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIG9wdGlvbnMuYnViYmxlcywgb3B0aW9ucy5jYW5jZWxhYmxlLCBvcHRpb25zLmRldGFpbClcclxuICAgIHJldHVybiBlXHJcbiAgfVxyXG5cclxuICBDdXN0b21FdmVudFBvbHkucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZVxyXG5cclxuICBTVkcuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudFBvbHlcclxufSBlbHNlIHtcclxuICBTVkcuQ3VzdG9tRXZlbnQgPSB3aW5kb3cuQ3VzdG9tRXZlbnRcclxufVxyXG5cclxuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIC8gY2FuY2VsQW5pbWF0aW9uRnJhbWUgUG9seWZpbGwgd2l0aCBmYWxsYmFjayBiYXNlZCBvbiBQYXVsIElyaXNoXHJcbihmdW5jdGlvbih3KSB7XHJcbiAgdmFyIGxhc3RUaW1lID0gMFxyXG4gIHZhciB2ZW5kb3JzID0gWydtb3onLCAnd2Via2l0J11cclxuXHJcbiAgZm9yKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcclxuICAgIHcucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd1t2ZW5kb3JzW3hdICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddXHJcbiAgICB3LmNhbmNlbEFuaW1hdGlvbkZyYW1lICA9IHdbdmVuZG9yc1t4XSArICdDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdbdmVuZG9yc1t4XSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXVxyXG4gIH1cclxuXHJcbiAgdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSlcclxuXHJcbiAgICAgIHZhciBpZCA9IHcuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpXHJcbiAgICAgIH0sIHRpbWVUb0NhbGwpXHJcblxyXG4gICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbFxyXG4gICAgICByZXR1cm4gaWRcclxuICAgIH1cclxuXHJcbiAgdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHcuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgdy5jbGVhclRpbWVvdXQ7XHJcblxyXG59KHdpbmRvdykpXHJcblxyXG5yZXR1cm4gU1ZHXHJcblxyXG59KSk7XHIiLCIvLyBAdHMtaWdub3JlXG5pbXBvcnQgKiBhcyBTVkcgZnJvbSAnc3ZnLmpzJztcbmltcG9ydCBSZXRpbGluZWFyIGZyb20gJy4vcmV0aWxpbmVhcic7XG5cbmxldCBhdWRpb0NvbnRleHQ6IEF1ZGlvQ29udGV4dDtcbmNvbnN0IGRyYXdXID0gMjk3O1xuY29uc3QgZHJhd0ggPSA0NTA7XG5sZXQgY2FudmFzID0gU1ZHKCdjb250YWluZXInKS5zaXplKCcxMDAlJywgJzEwMCUnKS52aWV3Ym94KDAsIDAsIGRyYXdXLCBkcmF3SCk7XG5cbmNvbnN0IHJldGlsaW5lYXJlcyA9IG5ldyBNYXA8c3RyaW5nLCBSZXRpbGluZWFyPigpO1xuXG50eXBlIFBvaW50ID0gW251bWJlciwgbnVtYmVyXTtcblxuY29uc3QgbWluUG9pbnQgPSAoW2F4LCBheV06IFBvaW50LCBbYngsIGJ5XTogUG9pbnQpOiBQb2ludCA9PiB7XG4gICAgcmV0dXJuIFtNYXRoLm1pbihheCwgYngpLCBNYXRoLm1pbihheSwgYnkpXTtcbn07XG5cbmNvbnN0IGRpc3QgPSAoW2F4LCBheV06IFBvaW50LCBbYngsIGJ5XTogUG9pbnQpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coYXggLSBieCwgMikgKyBNYXRoLnBvdyhheSArIGJ5LCAyKSk7XG59O1xuXG5jb25zdCBwYXJzZVJlY3QgPSAocjogU1ZHLlJlY3QpOiBbc3RyaW5nLCBBcnJheTxQb2ludD4sIFNWRy5Db2xvcl0gPT4ge1xuICAgIGNvbnN0IGlkID0gci5pZCgpO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBjb2xvciA9IG5ldyBTVkcuQ29sb3Ioci5zdHlsZSgnZmlsbCcpKTtcbiAgICBjb25zdCB4dCA9IHIuc2NyZWVuQ1RNKCkuZXh0cmFjdCgpO1xuICAgIGNvbnN0IHQgPSB7eDogeHQueCwgeTogeHQueX07XG4gICAgLy8gY29uc29sZS5sb2coJ1RFRScsIHQpO1xuICAgIGNvbnN0IHBvczogUG9pbnQgPSBbci54KCkgKyB0LngsIHIueSgpICsgdC55XTtcbiAgICBjb25zdCBzaXplOiBQb2ludCA9IFtyLndpZHRoKCksIHIuaGVpZ2h0KCldO1xuICAgIGNvbnN0IHBvaW50czogQXJyYXk8UG9pbnQ+ID0gW1xuICAgICAgICBwb3MsXG4gICAgICAgIFtwb3NbMF0gKyBzaXplWzBdLCBwb3NbMV1dLFxuICAgICAgICBbcG9zWzBdICsgc2l6ZVswXSwgcG9zWzFdICsgc2l6ZVsxXV0sXG4gICAgICAgIFtwb3NbMF0sIHBvc1sxXSArIHNpemVbMV1dXG4gICAgXTtcbiAgICAvLyBjb25zb2xlLmxvZygncmVjdCcsIGlkLCBwb2ludHMsIGNvbG9yKTtcbiAgICByZXR1cm4gW2lkLCBwb2ludHMsIGNvbG9yXTtcbn07XG5cbmNvbnN0IHBhcnNlUGF0aCA9IChwOiBTVkcuUGF0aCk6IFtzdHJpbmcsIEFycmF5PFBvaW50PiwgU1ZHLkNvbG9yXSA9PiB7XG4gICAgY29uc3QgaWQgPSBwLmlkKCk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGNvbG9yID0gbmV3IFNWRy5Db2xvcihwLnN0eWxlKCdmaWxsJykpO1xuICAgIGNvbnN0IHh0ID0gcC5zY3JlZW5DVE0oKS5leHRyYWN0KCk7XG4gICAgY29uc3QgdCA9IHt4OiB4dC54LCB5OiB4dC55fTtcbiAgICAvLyBjb25zb2xlLmxvZygnVEVFJywgdCk7XG4gICAgY29uc3QgcG9zOiBQb2ludCA9IFtwLngoKSArIHQueCwgcC55KCkgKyB0LnldO1xuXG4gICAgY29uc3QgcG9pbnRzOiBBcnJheTxQb2ludD4gPSBbXTtcbiAgICBsZXQgY3VyciA9IHBvcztcbiAgICBsZXQgcHJldiA9IHBvcztcbiAgICBmb3IgKGNvbnN0IG9wIG9mIHAuYXJyYXkoKS52YWx1ZSkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChvcFswXSA9PT0gJ00nKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBbXywgeCwgeV06IFtzdHJpbmcsIG51bWJlciwgbnVtYmVyXSA9IG9wO1xuICAgICAgICAgICAgcHJldiA9IGN1cnI7XG4gICAgICAgICAgICBjdXJyID0gW3ggKyB0LngsIHkgKyB0LnldO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIH0gZWxzZSBpZiAob3BbMF0gPT09ICdIJykge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgW18sIHhdOiBbc3RyaW5nLCBudW1iZXJdID0gb3A7XG4gICAgICAgICAgICBwcmV2ID0gY3VycjtcbiAgICAgICAgICAgIGN1cnIgPSBbeCArIHQueCwgcHJldlsxXV07XG4gICAgICAgICAgICBpZiAoZGlzdChjdXJyLCBwcmV2KSA+IDEpIHtcbiAgICAgICAgICAgICAgICBwb2ludHMucHVzaChwcmV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50cy5wdXNoKGN1cnIpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIH0gZWxzZSBpZiAob3BbMF0gPT09ICdWJykge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgW18sIHldOiBbc3RyaW5nLCBudW1iZXJdID0gb3A7XG4gICAgICAgICAgICBwcmV2ID0gY3VycjtcbiAgICAgICAgICAgIGN1cnIgPSBbcHJldlswXSwgeSArIHQueV07XG4gICAgICAgICAgICBpZiAoZGlzdChjdXJyLCBwcmV2KSA+IDEpIHtcbiAgICAgICAgICAgICAgICBwb2ludHMucHVzaChwcmV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50cy5wdXNoKGN1cnIpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIH0gZWxzZSBpZiAob3BbMF0gPT09ICdMJykge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgW18sIHgsIHldOiBbc3RyaW5nLCBudW1iZXIsIG51bWJlcl0gPSBvcDtcbiAgICAgICAgICAgIHByZXYgPSBjdXJyO1xuICAgICAgICAgICAgY3VyciA9IFt4ICsgdC54LCB5ICsgdC55XTtcbiAgICAgICAgICAgIGlmIChkaXN0KGN1cnIsIHByZXYpID4gMSkge1xuICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKHByZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9pbnRzLnB1c2goY3Vycik7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgfSBlbHNlIGlmIChvcFswXSA9PT0gJ0MnKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBbbywgYXgsIGF5LCBieCwgYnksIHgsIHldOiBbc3RyaW5nLCBudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSA9IG9wO1xuICAgICAgICAgICAgcHJldiA9IGN1cnI7XG4gICAgICAgICAgICBjdXJyID0gW3ggKyB0LngsIHkgKyB0LnldO1xuICAgICAgICAgICAgaWYgKGRpc3QoY3VyciwgcHJldikgPiAxKSB7XG4gICAgICAgICAgICAgICAgcG9pbnRzLnB1c2gocHJldik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludHMucHVzaChjdXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygncGF0aCcsIGlkLCBwb2ludHMsIGNvbG9yKTtcbiAgICByZXR1cm4gW2lkLCBwb2ludHMsIGNvbG9yXTtcbn07XG5cbi8vIHN2ZyBzdHVmZlxuY29uc3QgbG9hZFNWRyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gICAgY29uc3QgbnVtID0gY29udGFpbmVyLmNsYXNzTmFtZS5yZXBsYWNlKCdrbGFzcycsICcnKTtcbiAgICBjb25zdCB1cmkgPSBgLyR7bnVtfS5zdmdgO1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCh1cmkpO1xuICAgIGNvbnN0IHN2Z0RhdGEgPSBhd2FpdCByZXNwLnRleHQoKTtcblxuICAgIGNvbnN0IGRyYXcgPSBTVkcoJ2NvbnRhaW5lcicpLnNpemUoJzEwMCUnLCAnMTAwJScpLnZpZXdib3goMCwgMCwgZHJhd1csIGRyYXdIKTtcblxuICAgIGRyYXcuc3ZnKHN2Z0RhdGEpO1xuXG4gICAgbGV0IG9mZnNldDogUG9pbnQgPSBbMCwgMF07XG4gICAgbGV0IGFsbFBvaW50czogUG9pbnRbXSA9IFtdO1xuXG4gICAgZHJhdy5zZWxlY3QoJ3BhdGgnKS5lYWNoKGZ1bmN0aW9uKGk6IG51bWJlciwgbWVtYmVyczogU1ZHLkVsZW1lbnRbXSkge1xuICAgICAgICBjb25zdCBwYXRoOiBTVkcuUGF0aCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IFtpZCwgcG9pbnRzLCBjb2xvcl0gPSBwYXJzZVBhdGgocGF0aCk7XG4gICAgICAgIGFsbFBvaW50cy5wdXNoKC4uLnBvaW50cyk7XG4gICAgfSk7XG4gICAgZHJhdy5zZWxlY3QoJ3JlY3QnKS5lYWNoKGZ1bmN0aW9uKGk6IG51bWJlciwgbWVtYmVyczogU1ZHLkVsZW1lbnRbXSkge1xuICAgICAgICBjb25zdCByZWN0OiBTVkcuUmVjdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IFtpZCwgcG9pbnRzLCBjb2xvcl0gPSBwYXJzZVJlY3QocmVjdCk7XG4gICAgICAgIGFsbFBvaW50cy5wdXNoKC4uLnBvaW50cyk7XG4gICAgfSk7XG5cbiAgICBvZmZzZXQgPSBhbGxQb2ludHMucmVkdWNlKG1pblBvaW50KTtcbiAgICAvLyBjb25zb2xlLmxvZygnT0ZGU0VUJywgb2Zmc2V0KTtcblxuICAgIGRyYXcuc2VsZWN0KCdwYXRoJykuZWFjaChmdW5jdGlvbihpOiBudW1iZXIsIG1lbWJlcnM6IFNWRy5FbGVtZW50W10pIHtcbiAgICAgICAgY29uc3QgcGF0aDogU1ZHLlBhdGggPSB0aGlzO1xuICAgICAgICBjb25zdCBbaWQsIHBvaW50cywgY29sb3JdID0gcGFyc2VQYXRoKHBhdGgpO1xuICAgICAgICBjb25zdCBhYnNQb2ludHM6IFBvaW50W10gPSBwb2ludHMubWFwKChbcHgsIHB5XSk6IFBvaW50ID0+IFtweCAtIG9mZnNldFswXSwgcHkgLSBvZmZzZXRbMV1dKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FicyBwYXRoJywgaWQsIGFic1BvaW50cyk7XG4gICAgICAgIGNvbnN0IHJldCA9IG5ldyBSZXRpbGluZWFyKGF1ZGlvQ29udGV4dCwgY2FudmFzLCBjb2xvciwgYWJzUG9pbnRzKTtcbiAgICAgICAgcmV0aWxpbmVhcmVzLnNldChpZCwgcmV0KTtcbiAgICB9KTtcbiAgICBkcmF3LnNlbGVjdCgncmVjdCcpLmVhY2goZnVuY3Rpb24oaTogbnVtYmVyLCBtZW1iZXJzOiBTVkcuRWxlbWVudFtdKSB7XG4gICAgICAgIGNvbnN0IHJlY3Q6IFNWRy5SZWN0ID0gdGhpcztcbiAgICAgICAgY29uc3QgW2lkLCBwb2ludHMsIGNvbG9yXSA9IHBhcnNlUmVjdChyZWN0KTtcbiAgICAgICAgY29uc3QgYWJzUG9pbnRzOiBQb2ludFtdID0gcG9pbnRzLm1hcCgoW3B4LCBweV0pOiBQb2ludCA9PiBbcHggLSBvZmZzZXRbMF0sIHB5IC0gb2Zmc2V0WzFdXSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhYnMgcmVjdCcsIGlkLCBhYnNQb2ludHMpO1xuICAgICAgICBjb25zdCByZXQgPSBuZXcgUmV0aWxpbmVhcihhdWRpb0NvbnRleHQsIGNhbnZhcywgY29sb3IsIGFic1BvaW50cyk7XG4gICAgICAgIHJldGlsaW5lYXJlcy5zZXQoaWQsIHJldCk7XG4gICAgfSk7XG5cbiAgICBkcmF3LnJlbW92ZSgpO1xufTtcblxuY29uc3QgcGxheVJhbmQgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcbiAgICByZXRpbGluZWFyZXMuZm9yRWFjaCgocmV0KSA9PiB7XG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC4yKSB7XG4gICAgICAgICAgICByZXQucGxheSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBzdG9wQWxsID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgcmV0aWxpbmVhcmVzLmZvckVhY2goKHJldCkgPT4gcmV0LnN0b3AoKSk7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGlmICghbG9hZGVkKSB7XG4gICAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICAgIGlmICgnd2Via2l0QXVkaW9Db250ZXh0JyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGF1ZGlvQ29udGV4dCA9IG5ldyB3ZWJraXRBdWRpb0NvbnRleHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkU1ZHKCk7XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kJykub25jbGljayA9IHBsYXlSYW5kO1xuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RvcCcpLm9uY2xpY2sgPSBzdG9wQWxsO1xuICAgIH1cbn07XG5cbmNhbnZhcy5jbGljayhpbml0KTsiLCIvLyBAdHMtaWdub3JlXG5pbXBvcnQgKiBhcyBTVkcgZnJvbSAnc3ZnLmpzJztcbmltcG9ydCB7IG1vZCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBCbGVlcFN5bnRoIH0gZnJvbSAnLi9zeW50aCc7XG5cbmNsYXNzIFJldGlsaW5lYXIge1xuICAgIGlzUGxheWluZzogYm9vbGVhbjtcbiAgICBub3RlOiBudW1iZXI7XG5cbiAgICBhdWRpb0N0eDogQXVkaW9Db250ZXh0O1xuICAgIHN5bnRoOiBCbGVlcFN5bnRoO1xuXG4gICAgY2FudmFzOiBTVkcuRG9jO1xuICAgIGNvbG9yOiBTVkcuQ29sb3I7XG5cbiAgICBwb2ludHM6IEFycmF5PFtudW1iZXIsIG51bWJlcl0+O1xuICAgIHBvbHk6IFNWRy5Qb2x5Z29uO1xuICAgIGN1cnNvcjogU1ZHLlNoYXBlO1xuXG4gICAgY29uc3RydWN0b3IoYXVkaW9DdHg6IEF1ZGlvQ29udGV4dCwgY2FudmFzOiBTVkcuRG9jLCBjb2xvcjogU1ZHLkNvbG9yLCBwb2ludHM6IEFycmF5PFtudW1iZXIsIG51bWJlcl0+KSB7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgYiA9IGNvbG9yLmJyaWdodG5lc3MoKTtcblxuICAgICAgICAvLyBjb25zdCBwaXRjaEJhc2UgPSA0NDA7XG4gICAgICAgIGNvbnN0IHBpdGNoQmFzZSA9IDMwMDtcbiAgICAgICAgdGhpcy5ub3RlID0gYiAqIHBpdGNoQmFzZSArIDYwO1xuXG4gICAgICAgIC8vIGNvbnN0IFtoLCBzLCBsXSA9IHJnYjJoc2woY29sKTtcbiAgICAgICAgLy8gY29uc3QgbW9kID0gaCAvIDEwMDtcbiAgICAgICAgdGhpcy5hdWRpb0N0eCA9IGF1ZGlvQ3R4O1xuICAgICAgICB0aGlzLnN5bnRoID0gbmV3IEJsZWVwU3ludGgodGhpcy5ub3RlLCB0aGlzLmF1ZGlvQ3R4KTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5wb2ludHMgPSBwb2ludHM7XG5cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLnBvbHkgPSB0aGlzLmNhbnZhcy5wb2x5Z29uKHRoaXMucG9pbnRzKS5hdHRyKCdmaWxsJywgdGhpcy5jb2xvci50b1N0cmluZygpKTtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2VsZi5pc1BsYXlpbmcgPyBzZWxmLnN0b3AoKSA6IHNlbGYucGxheSgpO1xuICAgICAgICB0aGlzLnBvbHkuY2xpY2sodG9nZ2xlKTtcbiAgICB9XG5cbiAgICBwbGF5KCkge1xuICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5wb2ludHNbMF07XG5cbiAgICAgICAgY29uc3QgW2N3LCBjaF0gPSBbNSwgNV07XG4gICAgICAgIGNvbnN0IFtreCwga3ldID0gWy1jdyAvIDIsIC1jaCAvIDJdO1xuICAgICAgICB0aGlzLmN1cnNvciA9IHRoaXMuY2FudmFzLmVsbGlwc2UoY3csIGNoKVxuICAgICAgICAgICAgLngoeCArIGt4KS55KHkgKyBreSlcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgdGhpcy5jb2xvci50b1N0cmluZygpKTtcbiAgICAgICAgdGhpcy5jdXJzb3IuZnJvbnQoKTtcblxuICAgICAgICBjb25zdCBkZWMgPSAobDogbnVtYmVyKSA9PiBNYXRoLmFicyhsKSAvIDIwMDtcbiAgICAgICAgLy8gY29uc3QgZHVyID0gKGw6IG51bWJlcikgPT4gbCAqIDY7XG4gICAgICAgIGNvbnN0IGR1ciA9IChsOiBudW1iZXIpID0+IE1hdGguYWJzKGwpICogMTg7XG4gICAgICAgIGNvbnN0IG9jdCA9IChsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFsID0gTWF0aC5hYnMobCk7XG4gICAgICAgICAgICBsZXQgbXVsID0gLTI7XG4gICAgICAgICAgICBpZiAoYWwgPCAyNSkge1xuICAgICAgICAgICAgICAgIG11bCA9IDI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFsIDwgODApIHtcbiAgICAgICAgICAgICAgICBtdWwgPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhbCA8IDE2MCkge1xuICAgICAgICAgICAgICAgIG11bCA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFsIDwgMjUwKSB7XG4gICAgICAgICAgICAgICAgbXVsID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3coMiwgbXVsKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBjb25zdCBwb2ludHMgPSB0aGlzLnBvbHkuYXJyYXkoKTtcbiAgICAgICAgY29uc3QgYW5pbWF0ZSA9IChzdGVwOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yLmZyb250KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IHRoaXMucG9pbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBtb2Qoc3RlcCAtIDEsIGxlbik7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBbcHgsIHB5XSA9IHRoaXMucG9pbnRzW3BdO1xuXG4gICAgICAgICAgICBjb25zdCBuID0gbW9kKHN0ZXAsIGxlbik7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBbbngsIG55XSA9IHRoaXMucG9pbnRzW25dO1xuICAgICAgICAgICAgY29uc3QgW2R4LCBkeV0gPSBbbnggLSBweCwgbnkgLSBweV07XG5cbiAgICAgICAgICAgIC8vIHNraXAgemVybyBzdGVwc1xuICAgICAgICAgICAgaWYgKGR4ICsgZHkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhbmltYXRlKHN0ZXAgKyAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3ludGgucGxheSh0aGlzLm5vdGUgKiBvY3QoZHggKyBkeSksIGRlYyhkeCArIGR5KSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZsYXNoQ29sb3IgPSAnI2ZmZic7XG4gICAgICAgICAgICBjb25zdCBzaGFwZUNvbG9yID0gdGhpcy5jb2xvci50b1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aGlzLnBvbHkuYXR0cignZmlsbCcsIGZsYXNoQ29sb3IpO1xuICAgICAgICAgICAgY29uc3QgcG9seUZsYXNoID0gdGhpcy5wb2x5LmFuaW1hdGUoZHVyKGR4ICsgZHkpLCAnPicpXG4gICAgICAgICAgICAgICAgLmF0dHIoeyBmaWxsOiBzaGFwZUNvbG9yIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnNvci5hdHRyKCdmaWxsJywgZmxhc2hDb2xvcik7XG4gICAgICAgICAgICB0aGlzLmN1cnNvci5hbmltYXRlKGR1cihkeCArIGR5KSwgJz4nKVxuICAgICAgICAgICAgICAgIC5tb3ZlKG54ICsga3gsIG55ICsga3kpXG4gICAgICAgICAgICAgICAgLmF0dHIoeyBmaWxsOiBzaGFwZUNvbG9yIH0pXG4gICAgICAgICAgICAgICAgLmFmdGVyKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcG9seUZsYXNoLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzUGxheWluZykgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGUoc3RlcCArIDEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBhbmltYXRlKDEpO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnNvcikge1xuICAgICAgICAgICAgdGhpcy5jdXJzb3IucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXRpbGluZWFyOyIsImNsYXNzIEJsZWVwU3ludGgge1xuICAgIGF1ZGlvQ3R4OiBBdWRpb0NvbnRleHQ7XG4gICAgZmlsdGVyOiBCaXF1YWRGaWx0ZXJOb2RlO1xuICAgIGZyZXE6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGZyZXE6IG51bWJlciwgYXVkaW9DdHg6IEF1ZGlvQ29udGV4dCkge1xuICAgICAgICB0aGlzLmZyZXEgPSBmcmVxO1xuICAgICAgICB0aGlzLmF1ZGlvQ3R4ID0gYXVkaW9DdHg7XG4gICAgfVxuXG4gICAgcGxheShmcmVxOiBudW1iZXIsIGRlYzogbnVtYmVyKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwbGF5IScsIGZyZXEsIGRlYyk7XG5cbiAgICAgICAgY29uc3Qgb3NjID0gdGhpcy5hdWRpb0N0eC5jcmVhdGVPc2NpbGxhdG9yKCk7XG4gICAgICAgIG9zYy50eXBlID0gZnJlcSA8IDI1MCA/ICdzYXd0b290aCcgOiBmcmVxIDwgNDQwID8gJ3NpbmUnIDogJ3RyaWFuZ2xlJztcbiAgICAgICAgY29uc3QgYWRzciA9IHRoaXMuYXVkaW9DdHguY3JlYXRlR2FpbigpO1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLmF1ZGlvQ3R4LmNyZWF0ZUJpcXVhZEZpbHRlcigpO1xuXG4gICAgICAgIG9zYy5jb25uZWN0KGFkc3IpO1xuICAgICAgICBhZHNyLmNvbm5lY3QoZmlsdGVyKTtcbiAgICAgICAgZmlsdGVyLmNvbm5lY3QodGhpcy5hdWRpb0N0eC5kZXN0aW5hdGlvbik7XG5cbiAgICAgICAgLy8gYWRzclxuICAgICAgICBjb25zdCB0MCA9IHRoaXMuYXVkaW9DdHguY3VycmVudFRpbWU7XG4gICAgICAgIG9zYy5zdGFydCh0MCk7XG4gICAgICAgIC8vIHZvbDowXG4gICAgICAgIGFkc3IuZ2Fpbi5zZXRWYWx1ZUF0VGltZSgwLCB0MCk7XG4gICAgICAgIC8vIGF0dGFja1xuICAgICAgICBjb25zdCB0MSA9IHQwICsgMC4wMTtcbiAgICAgICAgYWRzci5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKDAuNCwgdDEpO1xuICAgICAgICAvLyBkZWNheVxuICAgICAgICBjb25zdCB0MiA9IHQxICsgZGVjO1xuICAgICAgICBjb25zdCBzdXMgPSAwLjAxO1xuICAgICAgICBhZHNyLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZShzdXMsIHQyKTtcbiAgICAgICAgLy8gZ2F0ZVxuICAgICAgICBjb25zdCBzdG9wID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGFkc3IuZ2Fpbi52YWx1ZSA8IDAuMDEpIHtcbiAgICAgICAgICAgICAgICBvc2Muc3RvcCgpO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc3RvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgb3NjLmZyZXF1ZW5jeS52YWx1ZSA9IGZyZXE7XG4gICAgICAgIGZpbHRlci5mcmVxdWVuY3kudmFsdWUgPSBmcmVxICogMjtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBmaWx0ZXI7XG4gICAgICAgIHRoaXMuZnJlcSA9IGZyZXE7XG4gICAgfVxuXG4gICAgc2V0RmlsdGVyUHJvcHMobXVsOiBudW1iZXIsIHE6IG51bWJlcikge1xuICAgICAgICB0aGlzLmZpbHRlci5RLnZhbHVlID0gcTtcbiAgICAgICAgdGhpcy5maWx0ZXIuZnJlcXVlbmN5LnZhbHVlID0gdGhpcy5mcmVxICogbXVsO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQmxlZXBTeW50aCB9O1xuIiwiLy8gQHRzLWlnbm9yZVxuaW1wb3J0ICogYXMgU1ZHIGZyb20gJ3N2Zy5qcyc7XG5cbnR5cGUgSFNWQ29sb3IgPSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG5jb25zdCByZ2IyaHNsID0gKGNvbDogU1ZHLkNvbG9yKTogSFNWQ29sb3IgPT4ge1xuICAgIC8vIE1ha2UgciwgZywgYW5kIGIgZnJhY3Rpb25zIG9mIDFcbiAgICBjb25zdCByID0gY29sLnIgLyAyNTU7XG4gICAgY29uc3QgZyA9IGNvbC5nIC8gMjU1O1xuICAgIGNvbnN0IGIgPSBjb2wuYiAvIDI1NTtcblxuICAgIC8vIEZpbmQgZ3JlYXRlc3QgYW5kIHNtYWxsZXN0IGNoYW5uZWwgdmFsdWVzXG4gICAgbGV0IGNtaW4gPSBNYXRoLm1pbihyLCBnICwgYiksXG4gICAgICAgIGNtYXggPSBNYXRoLm1heChyLCBnLCBiKSxcbiAgICAgICAgZGVsdGEgPSBjbWF4IC0gY21pbixcbiAgICAgICAgaCA9IDAsXG4gICAgICAgIHMgPSAwLFxuICAgICAgICBsID0gMDtcblxuICAgIC8vIENhbGN1bGF0ZSBodWVcbiAgICAvLyBObyBkaWZmZXJlbmNlXG4gICAgaWYgKGRlbHRhID09PSAwKVxuICAgIGggPSAwO1xuICAgIC8vIFJlZCBpcyBtYXhcbiAgICBlbHNlIGlmIChjbWF4ID09PSByKVxuICAgIGggPSAoKGcgLSBiKSAvIGRlbHRhKSAlIDY7XG4gICAgLy8gR3JlZW4gaXMgbWF4XG4gICAgZWxzZSBpZiAoY21heCA9PT0gZylcbiAgICBoID0gKGIgLSByKSAvIGRlbHRhICsgMjtcbiAgICAvLyBCbHVlIGlzIG1heFxuICAgIGVsc2VcbiAgICBoID0gKHIgLSBnKSAvIGRlbHRhICsgNDtcblxuICAgIGggPSBNYXRoLnJvdW5kKGggKiA2MCk7XG5cbiAgICAvLyBNYWtlIG5lZ2F0aXZlIGh1ZXMgcG9zaXRpdmUgYmVoaW5kIDM2MMKwXG4gICAgaWYgKGggPCAwKVxuICAgICAgICBoICs9IDM2MDtcblxuICAgIC8vIENhbGN1bGF0ZSBsaWdodG5lc3NcbiAgICBsID0gKGNtYXggKyBjbWluKSAvIDI7XG5cbiAgICAvLyBDYWxjdWxhdGUgc2F0dXJhdGlvblxuICAgIHMgPSBkZWx0YSA9PT0gMCA/IDAgOiBkZWx0YSAvICgxIC0gTWF0aC5hYnMoMiAqIGwgLSAxKSk7XG5cbiAgICAvLyBNdWx0aXBseSBsIGFuZCBzIGJ5IDEwMFxuICAgIHMgPSArKHMgKiAxMDApLnRvRml4ZWQoMSk7XG4gICAgbCA9ICsobCAqIDEwMCkudG9GaXhlZCgxKTtcblxuICAgIHJldHVybiBbaCAvIDI1NSwgcyAvIDI1NSwgbCAvIDI1NV07XG59O1xuXG5jb25zdCBtb2QgPSAobTogbnVtYmVyLCBuOiBudW1iZXIpID0+ICgobSAlIG4pICsgbikgJSBuO1xuXG5leHBvcnQgeyByZ2IyaHNsLCBtb2QgfTsiXSwic291cmNlUm9vdCI6IiJ9