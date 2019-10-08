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
let loaded = false;
const init = () => {
    if (!loaded) {
        loaded = true;
        if ('webkitAudioContext' in window) {
            // @ts-ignore
            audioContext = new webkitAudioContext();
            // play a dummy sound to activate context
            const buffer = audioContext.createBuffer(1, 1, 22050);
            const source = audioContext.createBufferSource();
            source.buffer = buffer;
            source.connect(audioContext.destination);
            source.start(0);
        }
        else {
            audioContext = new AudioContext();
        }
        document.getElementById('initmsg').remove();
        retilineares.forEach(r => r.setAudioCtx(audioContext));
        // document.getElementById('rand').onclick = playRand;
        // document.getElementById('stop').onclick = stopAll;
    }
};
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
        const ret = new retilinear_1.default(canvas, color, absPoints, init);
        retilineares.set(id, ret);
    });
    draw.select('rect').each(function (i, members) {
        const rect = this;
        const [id, points, color] = parseRect(rect);
        const absPoints = points.map(([px, py]) => [px - offset[0], py - offset[1]]);
        // console.log('abs rect', id, absPoints);
        const ret = new retilinear_1.default(canvas, color, absPoints, init);
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
loadSVG();


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
    constructor(canvas, color, points, initAudioCtx) {
        this.isPlaying = false;
        const b = color.brightness();
        // const pitchBase = 440;
        const pitchBase = 300;
        this.note = b * pitchBase + 60;
        // const [h, s, l] = rgb2hsl(col);
        // const mod = h / 100;
        this.canvas = canvas;
        this.color = color;
        this.points = points;
        this.initAudioCtx = initAudioCtx;
        this.draw();
    }
    setAudioCtx(audioCtx) {
        this.audioCtx = audioCtx;
        this.synth = new synth_1.BleepSynth(this.note, this.audioCtx);
    }
    draw() {
        this.poly = this.canvas.polygon(this.points).attr('fill', this.color.toString());
        const self = this;
        const toggle = () => self.isPlaying ? self.stop() : self.play();
        this.poly.click(toggle);
    }
    play() {
        if (this.audioCtx == null) {
            this.initAudioCtx();
        }
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
        if ('webkitAudioContext' in window) {
            // @ts-ignore
            osc.type = freq < 250 ? 2 : freq < 440 ? 0 : 3;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy5qcy9kaXN0L3N2Zy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmV0aWxpbmVhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ludGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBMEM7QUFDaEQsSUFBSSxtQ0FBTztBQUNYO0FBQ0EsS0FBSztBQUFBLG9HQUFDO0FBQ04sR0FBRyxNQUFNLEVBSU47QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOEJBQThCLFFBQVE7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRUFBbUU7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msa0JBQWtCLFdBQVcsVUFBVTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTs7QUFFM0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxJQUFJOztBQUVwQztBQUNBOztBQUVBO0FBQ0EsOEJBQThCLEdBQUc7O0FBRWpDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxRQUFRO0FBQ3ZCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLHlDQUF5QztBQUN0Rjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFFBQVE7QUFDOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RCxRQUFRO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxRQUFRO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RCxRQUFRO0FBQy9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxvQkFBb0I7QUFDNUQsT0FBTztBQUNQO0FBQ0Esd0NBQXdDLHNCQUFzQjtBQUM5RDtBQUNBLEtBQUssT0FBTztBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsU0FBUztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLFFBQVE7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxRQUFRO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsUUFBUTtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQOztBQUVBLE9BQU87QUFDUDs7QUFFQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0NBQXNDLHlCQUF5QjtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFFBQVE7QUFDaEQ7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7QUFFcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0RBQStELFFBQVE7QUFDdkU7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxjQUFjO0FBQ2xGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsS0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0QsaUVBQWlFOztBQUVySDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLG1DQUFtQzs7QUFFM0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUzs7QUFFdEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGFBQWE7QUFDekM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLElBQUk7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixJQUFJO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsUUFBUTtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0EsT0FBTyxlQUFlO0FBQ3RCO0FBQ0EsT0FBTyxhQUFhO0FBQ3BCO0FBQ0EsT0FBTywyQkFBMkI7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQzs7QUFFQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUseUJBQXlCO0FBQ25HLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELFNBQVM7QUFDMUQ7QUFDQTtBQUNBLEtBQUs7QUFDTCxpREFBaUQsU0FBUztBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsaURBQWlELFNBQVM7QUFDMUQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGlEQUFpRCxTQUFTO0FBQzFEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0EseUJBQXlCO0FBQ3pCLGdDQUFnQztBQUNoQywrQkFBK0IsYUFBYTtBQUM1QywyQkFBMkIsNEJBQTRCOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsMkNBQTJDLHdCQUF3QjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7QUFDRDs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsa0VBQWtFLCtCQUErQjtBQUNqRztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELGtCQUFrQjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSwrREFBK0Qsa0JBQWtCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQ0FBZ0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxRQUFRO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxRQUFRO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLCtDQUErQztBQUNoRSxpQkFBaUIsK0NBQStDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLCtDQUErQztBQUNoRSxpQkFBaUIsK0NBQStDO0FBQ2hFO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUzs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsUUFBUTtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxRQUFRO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4QkFBOEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseUJBQXlCO0FBQy9DLHNCQUFzQixxQ0FBcUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMEJBQTBCO0FBQ2hELHNCQUFzQix1Q0FBdUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsUUFBUTtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsUUFBUTtBQUMzRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsS0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFFBQVE7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLHFEQUFxRDtBQUNyRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoK0tELGFBQWE7QUFDYixtRkFBOEI7QUFDOUIsb0ZBQXNDO0FBRXRDLElBQUksWUFBMEIsQ0FBQztBQUMvQixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDbEIsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUUvRSxNQUFNLFlBQVksR0FBRyxJQUFJLEdBQUcsRUFBc0IsQ0FBQztBQUluRCxNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBUSxFQUFTLEVBQUU7SUFDekQsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFDO0FBRUYsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQVEsRUFBVSxFQUFFO0lBQ3RELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEUsQ0FBQyxDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFXLEVBQXFDLEVBQUU7SUFDakUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2xCLGFBQWE7SUFDYixNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzdDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQyxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDN0IseUJBQXlCO0lBQ3pCLE1BQU0sR0FBRyxHQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxNQUFNLElBQUksR0FBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM1QyxNQUFNLE1BQU0sR0FBaUI7UUFDekIsR0FBRztRQUNILENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM3QixDQUFDO0lBQ0YsMENBQTBDO0lBQzFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBVyxFQUFxQyxFQUFFO0lBQ2pFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNsQixhQUFhO0lBQ2IsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM3QyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkMsTUFBTSxDQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQzdCLHlCQUF5QjtJQUN6QixNQUFNLEdBQUcsR0FBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUMsTUFBTSxNQUFNLEdBQWlCLEVBQUUsQ0FBQztJQUNoQyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7SUFDZixJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7SUFDZixLQUFLLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUU7UUFDOUIsYUFBYTtRQUNiLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUNmLGFBQWE7WUFDYixNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBNkIsRUFBRSxDQUFDO1lBQy9DLElBQUksR0FBRyxJQUFJLENBQUM7WUFDWixJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLGFBQWE7U0FDWjthQUFNLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUN0QixhQUFhO1lBQ2IsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBcUIsRUFBRSxDQUFDO1lBQ3BDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDWixJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JCO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixhQUFhO1NBQ1o7YUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDdEIsYUFBYTtZQUNiLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQXFCLEVBQUUsQ0FBQztZQUNwQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ1osSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQjtZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsYUFBYTtTQUNaO2FBQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ3RCLGFBQWE7WUFDYixNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBNkIsRUFBRSxDQUFDO1lBQy9DLElBQUksR0FBRyxJQUFJLENBQUM7WUFDWixJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckI7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLGFBQWE7U0FDWjthQUFNLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUN0QixhQUFhO1lBQ2IsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUE2RCxFQUFFLENBQUM7WUFDL0YsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNaLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQjtZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckI7S0FDSjtJQUNELDBDQUEwQztJQUMxQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFFRixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDbkIsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFO0lBQ2QsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNULE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxJQUFJLG9CQUFvQixJQUFJLE1BQU0sRUFBRTtZQUNoQyxhQUFhO1lBQ2IsWUFBWSxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztZQUV4Qyx5Q0FBeUM7WUFDekMsTUFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RELE1BQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ2pELE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkI7YUFBTTtZQUNILFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM1QyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELHNEQUFzRDtRQUN0RCxxREFBcUQ7S0FDeEQ7QUFDTCxDQUFDLENBQUM7QUFFRixNQUFNLE9BQU8sR0FBRyxHQUFTLEVBQUU7SUFDdkIsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RCxNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUMxQixNQUFNLElBQUksR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVsQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFL0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVsQixJQUFJLE1BQU0sR0FBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixJQUFJLFNBQVMsR0FBWSxFQUFFLENBQUM7SUFFNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxDQUFTLEVBQUUsT0FBc0I7UUFDL0QsTUFBTSxJQUFJLEdBQWEsSUFBSSxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLENBQVMsRUFBRSxPQUFzQjtRQUMvRCxNQUFNLElBQUksR0FBYSxJQUFJLENBQUM7UUFDNUIsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLGlDQUFpQztJQUVqQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLENBQVMsRUFBRSxPQUFzQjtRQUMvRCxNQUFNLElBQUksR0FBYSxJQUFJLENBQUM7UUFDNUIsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLE1BQU0sU0FBUyxHQUFZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdGLDBDQUEwQztRQUMxQyxNQUFNLEdBQUcsR0FBRyxJQUFJLG9CQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLENBQVMsRUFBRSxPQUFzQjtRQUMvRCxNQUFNLElBQUksR0FBYSxJQUFJLENBQUM7UUFDNUIsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLE1BQU0sU0FBUyxHQUFZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdGLDBDQUEwQztRQUMxQyxNQUFNLEdBQUcsR0FBRyxJQUFJLG9CQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDbEIsQ0FBQyxFQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxFQUFjLEVBQUUsRUFBRTtJQUNoQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFO1lBQ3JCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNkO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixNQUFNLE9BQU8sR0FBRyxDQUFDLEVBQWMsRUFBRSxFQUFFO0lBQy9CLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLE9BQU8sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM3TFYsa0VBQTZCO0FBQzdCLHFFQUFxQztBQUVyQztJQWVJLFlBQVksTUFBZSxFQUFFLEtBQWdCLEVBQUUsTUFBK0IsRUFBRSxZQUF3QjtRQUNwRyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUV2QixNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFN0IseUJBQXlCO1FBQ3pCLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRS9CLGtDQUFrQztRQUNsQyx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFFakMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGtCQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUdELElBQUk7UUFDQSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUVqRixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsTUFBTSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5QixNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQ3BDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVwQixNQUFNLEdBQUcsR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0Msb0NBQW9DO1FBQ3BDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM1QyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFO1lBQ3RCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQ1QsR0FBRyxHQUFHLENBQUMsQ0FBQzthQUNYO2lCQUFNLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDaEIsR0FBRyxHQUFHLENBQUMsQ0FBQzthQUNYO2lCQUFNLElBQUksRUFBRSxHQUFHLEdBQUcsRUFBRTtnQkFDakIsR0FBRyxHQUFHLENBQUMsQ0FBQzthQUNYO2lCQUFNLElBQUksRUFBRSxHQUFHLEdBQUcsRUFBRTtnQkFDakIsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ1o7WUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQztRQUVGLG9DQUFvQztRQUNwQyxNQUFNLE9BQU8sR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFcEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDL0IsTUFBTSxDQUFDLEdBQUcsVUFBRyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDN0IsYUFBYTtZQUNiLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVoQyxNQUFNLENBQUMsR0FBRyxVQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLGFBQWE7WUFDYixNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBRXBDLGtCQUFrQjtZQUNsQixJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLE9BQU87YUFDVjtZQUVELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFeEQsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDO1lBQzFCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFekMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO2lCQUNqRCxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUVoQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7aUJBQ2pDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUM7aUJBQ3RCLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQztpQkFDMUIsS0FBSyxDQUFDLEdBQUcsRUFBRTtnQkFDUixTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztvQkFBRSxPQUFPO2dCQUU1QixPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUNKO0FBRUQsa0JBQWUsVUFBVSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMzSTFCO0lBS0ksWUFBWSxJQUFZLEVBQUUsUUFBc0I7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksQ0FBQyxJQUFZLEVBQUUsR0FBVztRQUMxQixtQ0FBbUM7UUFFbkMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzdDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUN0RSxJQUFJLG9CQUFvQixJQUFJLE1BQU0sRUFBRTtZQUNoQyxhQUFhO1lBQ2IsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN4QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFbEQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUxQyxPQUFPO1FBQ1AsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDckMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNkLFFBQVE7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEMsU0FBUztRQUNULE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0MsUUFBUTtRQUNSLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDcEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELE9BQU87UUFDUCxNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFO2dCQUN4QixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1gsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO1FBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELGNBQWMsQ0FBQyxHQUFXLEVBQUUsQ0FBUztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNsRCxDQUFDO0NBQ0o7QUFFUSxnQ0FBVTs7Ozs7Ozs7Ozs7Ozs7O0FDdERuQixNQUFNLE9BQU8sR0FBRyxDQUFDLEdBQWMsRUFBWSxFQUFFO0lBQ3pDLGtDQUFrQztJQUNsQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN0QixNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN0QixNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUV0Qiw0Q0FBNEM7SUFDNUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFHLENBQUMsQ0FBQyxFQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUN4QixLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksRUFDbkIsQ0FBQyxHQUFHLENBQUMsRUFDTCxDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLElBQUksS0FBSyxLQUFLLENBQUM7UUFDZixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ04sYUFBYTtTQUNSLElBQUksSUFBSSxLQUFLLENBQUM7UUFDbkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLGVBQWU7U0FDVixJQUFJLElBQUksS0FBSyxDQUFDO1FBQ25CLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLGNBQWM7O1FBRWQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7SUFFeEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBRXZCLDBDQUEwQztJQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ0wsQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUViLHNCQUFzQjtJQUN0QixDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXRCLHVCQUF1QjtJQUN2QixDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFeEQsMEJBQTBCO0lBQzFCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFMUIsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFDO0FBSU8sMEJBQU87QUFGaEIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUV0QyxrQkFBRyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiLyohXG4qIHN2Zy5qcyAtIEEgbGlnaHR3ZWlnaHQgbGlicmFyeSBmb3IgbWFuaXB1bGF0aW5nIGFuZCBhbmltYXRpbmcgU1ZHLlxuKiBAdmVyc2lvbiAyLjcuMVxuKiBodHRwczovL3N2Z2RvdGpzLmdpdGh1Yi5pby9cbipcbiogQGNvcHlyaWdodCBXb3V0IEZpZXJlbnMgPHdvdXRAbWljay13b3V0LmNvbT5cbiogQGxpY2Vuc2UgTUlUXG4qXG4qIEJVSUxUOiBGcmkgTm92IDMwIDIwMTggMTA6MDE6NTUgR01UKzAxMDAgKEdNVCswMTowMClcbiovO1xuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuICAgIGRlZmluZShmdW5jdGlvbigpe1xyXG4gICAgICByZXR1cm4gZmFjdG9yeShyb290LCByb290LmRvY3VtZW50KVxyXG4gICAgfSlcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSByb290LmRvY3VtZW50ID8gZmFjdG9yeShyb290LCByb290LmRvY3VtZW50KSA6IGZ1bmN0aW9uKHcpeyByZXR1cm4gZmFjdG9yeSh3LCB3LmRvY3VtZW50KSB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJvb3QuU1ZHID0gZmFjdG9yeShyb290LCByb290LmRvY3VtZW50KVxyXG4gIH1cclxufSh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCkge1xyXG5cclxuLy8gRmluZCBnbG9iYWwgcmVmZXJlbmNlIC0gdXNlcyAndGhpcycgYnkgZGVmYXVsdCB3aGVuIGF2YWlsYWJsZSxcclxuLy8gZmFsbHMgYmFjayB0byAnd2luZG93JyBvdGhlcndpc2UgKGZvciBidW5kbGVycyBsaWtlIFdlYnBhY2spXHJcbnZhciBnbG9iYWxSZWYgPSAodHlwZW9mIHRoaXMgIT09IFwidW5kZWZpbmVkXCIpID8gdGhpcyA6IHdpbmRvdztcclxuXHJcbi8vIFRoZSBtYWluIHdyYXBwaW5nIGVsZW1lbnRcclxudmFyIFNWRyA9IGdsb2JhbFJlZi5TVkcgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgaWYgKFNWRy5zdXBwb3J0ZWQpIHtcclxuICAgIGVsZW1lbnQgPSBuZXcgU1ZHLkRvYyhlbGVtZW50KVxyXG5cclxuICAgIGlmKCFTVkcucGFyc2VyLmRyYXcpXHJcbiAgICAgIFNWRy5wcmVwYXJlKClcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudFxyXG4gIH1cclxufVxyXG5cclxuLy8gRGVmYXVsdCBuYW1lc3BhY2VzXHJcblNWRy5ucyAgICA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuU1ZHLnhtbG5zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvJ1xyXG5TVkcueGxpbmsgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaydcclxuU1ZHLnN2Z2pzID0gJ2h0dHA6Ly9zdmdqcy5jb20vc3ZnanMnXHJcblxyXG4vLyBTdmcgc3VwcG9ydCB0ZXN0XHJcblNWRy5zdXBwb3J0ZWQgPSAoZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuICEhIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyAmJlxyXG4gICAgICAgICAhISBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHLm5zLCdzdmcnKS5jcmVhdGVTVkdSZWN0XHJcbn0pKClcclxuXHJcbi8vIERvbid0IGJvdGhlciB0byBjb250aW51ZSBpZiBTVkcgaXMgbm90IHN1cHBvcnRlZFxyXG5pZiAoIVNWRy5zdXBwb3J0ZWQpIHJldHVybiBmYWxzZVxyXG5cclxuLy8gRWxlbWVudCBpZCBzZXF1ZW5jZVxyXG5TVkcuZGlkICA9IDEwMDBcclxuXHJcbi8vIEdldCBuZXh0IG5hbWVkIGVsZW1lbnQgaWRcclxuU1ZHLmVpZCA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuICByZXR1cm4gJ1N2Z2pzJyArIGNhcGl0YWxpemUobmFtZSkgKyAoU1ZHLmRpZCsrKVxyXG59XHJcblxyXG4vLyBNZXRob2QgZm9yIGVsZW1lbnQgY3JlYXRpb25cclxuU1ZHLmNyZWF0ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuICAvLyBjcmVhdGUgZWxlbWVudFxyXG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHRoaXMubnMsIG5hbWUpXHJcblxyXG4gIC8vIGFwcGx5IHVuaXF1ZSBpZFxyXG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuZWlkKG5hbWUpKVxyXG5cclxuICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG4vLyBNZXRob2QgZm9yIGV4dGVuZGluZyBvYmplY3RzXHJcblNWRy5leHRlbmQgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgbW9kdWxlcywgbWV0aG9kcywga2V5LCBpXHJcblxyXG4gIC8vIEdldCBsaXN0IG9mIG1vZHVsZXNcclxuICBtb2R1bGVzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXHJcblxyXG4gIC8vIEdldCBvYmplY3Qgd2l0aCBleHRlbnNpb25zXHJcbiAgbWV0aG9kcyA9IG1vZHVsZXMucG9wKClcclxuXHJcbiAgZm9yIChpID0gbW9kdWxlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuICAgIGlmIChtb2R1bGVzW2ldKVxyXG4gICAgICBmb3IgKGtleSBpbiBtZXRob2RzKVxyXG4gICAgICAgIG1vZHVsZXNbaV0ucHJvdG90eXBlW2tleV0gPSBtZXRob2RzW2tleV1cclxuXHJcbiAgLy8gTWFrZSBzdXJlIFNWRy5TZXQgaW5oZXJpdHMgYW55IG5ld2x5IGFkZGVkIG1ldGhvZHNcclxuICBpZiAoU1ZHLlNldCAmJiBTVkcuU2V0LmluaGVyaXQpXHJcbiAgICBTVkcuU2V0LmluaGVyaXQoKVxyXG59XHJcblxyXG4vLyBJbnZlbnQgbmV3IGVsZW1lbnRcclxuU1ZHLmludmVudCA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG4gIC8vIENyZWF0ZSBlbGVtZW50IGluaXRpYWxpemVyXHJcbiAgdmFyIGluaXRpYWxpemVyID0gdHlwZW9mIGNvbmZpZy5jcmVhdGUgPT0gJ2Z1bmN0aW9uJyA/XHJcbiAgICBjb25maWcuY3JlYXRlIDpcclxuICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgU1ZHLmNyZWF0ZShjb25maWcuY3JlYXRlKSlcclxuICAgIH1cclxuXHJcbiAgLy8gSW5oZXJpdCBwcm90b3R5cGVcclxuICBpZiAoY29uZmlnLmluaGVyaXQpXHJcbiAgICBpbml0aWFsaXplci5wcm90b3R5cGUgPSBuZXcgY29uZmlnLmluaGVyaXRcclxuXHJcbiAgLy8gRXh0ZW5kIHdpdGggbWV0aG9kc1xyXG4gIGlmIChjb25maWcuZXh0ZW5kKVxyXG4gICAgU1ZHLmV4dGVuZChpbml0aWFsaXplciwgY29uZmlnLmV4dGVuZClcclxuXHJcbiAgLy8gQXR0YWNoIGNvbnN0cnVjdCBtZXRob2QgdG8gcGFyZW50XHJcbiAgaWYgKGNvbmZpZy5jb25zdHJ1Y3QpXHJcbiAgICBTVkcuZXh0ZW5kKGNvbmZpZy5wYXJlbnQgfHwgU1ZHLkNvbnRhaW5lciwgY29uZmlnLmNvbnN0cnVjdClcclxuXHJcbiAgcmV0dXJuIGluaXRpYWxpemVyXHJcbn1cclxuXHJcbi8vIEFkb3B0IGV4aXN0aW5nIHN2ZyBlbGVtZW50c1xyXG5TVkcuYWRvcHQgPSBmdW5jdGlvbihub2RlKSB7XHJcbiAgLy8gY2hlY2sgZm9yIHByZXNlbmNlIG9mIG5vZGVcclxuICBpZiAoIW5vZGUpIHJldHVybiBudWxsXHJcblxyXG4gIC8vIG1ha2Ugc3VyZSBhIG5vZGUgaXNuJ3QgYWxyZWFkeSBhZG9wdGVkXHJcbiAgaWYgKG5vZGUuaW5zdGFuY2UpIHJldHVybiBub2RlLmluc3RhbmNlXHJcblxyXG4gIC8vIGluaXRpYWxpemUgdmFyaWFibGVzXHJcbiAgdmFyIGVsZW1lbnRcclxuXHJcbiAgLy8gYWRvcHQgd2l0aCBlbGVtZW50LXNwZWNpZmljIHNldHRpbmdzXHJcbiAgaWYgKG5vZGUubm9kZU5hbWUgPT0gJ3N2ZycpXHJcbiAgICBlbGVtZW50ID0gbm9kZS5wYXJlbnROb2RlIGluc3RhbmNlb2Ygd2luZG93LlNWR0VsZW1lbnQgPyBuZXcgU1ZHLk5lc3RlZCA6IG5ldyBTVkcuRG9jXHJcbiAgZWxzZSBpZiAobm9kZS5ub2RlTmFtZSA9PSAnbGluZWFyR3JhZGllbnQnKVxyXG4gICAgZWxlbWVudCA9IG5ldyBTVkcuR3JhZGllbnQoJ2xpbmVhcicpXHJcbiAgZWxzZSBpZiAobm9kZS5ub2RlTmFtZSA9PSAncmFkaWFsR3JhZGllbnQnKVxyXG4gICAgZWxlbWVudCA9IG5ldyBTVkcuR3JhZGllbnQoJ3JhZGlhbCcpXHJcbiAgZWxzZSBpZiAoU1ZHW2NhcGl0YWxpemUobm9kZS5ub2RlTmFtZSldKVxyXG4gICAgZWxlbWVudCA9IG5ldyBTVkdbY2FwaXRhbGl6ZShub2RlLm5vZGVOYW1lKV1cclxuICBlbHNlXHJcbiAgICBlbGVtZW50ID0gbmV3IFNWRy5FbGVtZW50KG5vZGUpXHJcblxyXG4gIC8vIGVuc3VyZSByZWZlcmVuY2VzXHJcbiAgZWxlbWVudC50eXBlICA9IG5vZGUubm9kZU5hbWVcclxuICBlbGVtZW50Lm5vZGUgID0gbm9kZVxyXG4gIG5vZGUuaW5zdGFuY2UgPSBlbGVtZW50XHJcblxyXG4gIC8vIFNWRy5DbGFzcyBzcGVjaWZpYyBwcmVwYXJhdGlvbnNcclxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNWRy5Eb2MpXHJcbiAgICBlbGVtZW50Lm5hbWVzcGFjZSgpLmRlZnMoKVxyXG5cclxuICAvLyBwdWxsIHN2Z2pzIGRhdGEgZnJvbSB0aGUgZG9tIChnZXRBdHRyaWJ1dGVOUyBkb2Vzbid0IHdvcmsgaW4gaHRtbDUpXHJcbiAgZWxlbWVudC5zZXREYXRhKEpTT04ucGFyc2Uobm9kZS5nZXRBdHRyaWJ1dGUoJ3N2Z2pzOmRhdGEnKSkgfHwge30pXHJcblxyXG4gIHJldHVybiBlbGVtZW50XHJcbn1cclxuXHJcbi8vIEluaXRpYWxpemUgcGFyc2luZyBlbGVtZW50XHJcblNWRy5wcmVwYXJlID0gZnVuY3Rpb24oKSB7XHJcbiAgLy8gU2VsZWN0IGRvY3VtZW50IGJvZHkgYW5kIGNyZWF0ZSBpbnZpc2libGUgc3ZnIGVsZW1lbnRcclxuICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF1cclxuICAgICwgZHJhdyA9IChib2R5ID8gbmV3IFNWRy5Eb2MoYm9keSkgOiBTVkcuYWRvcHQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5uZXN0ZWQoKSkuc2l6ZSgyLCAwKVxyXG5cclxuICAvLyBDcmVhdGUgcGFyc2VyIG9iamVjdFxyXG4gIFNWRy5wYXJzZXIgPSB7XHJcbiAgICBib2R5OiBib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxyXG4gICwgZHJhdzogZHJhdy5zdHlsZSgnb3BhY2l0eTowO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTEwMCU7dG9wOi0xMDAlO292ZXJmbG93OmhpZGRlbicpLmF0dHIoJ2ZvY3VzYWJsZScsICdmYWxzZScpLm5vZGVcclxuICAsIHBvbHk6IGRyYXcucG9seWxpbmUoKS5ub2RlXHJcbiAgLCBwYXRoOiBkcmF3LnBhdGgoKS5ub2RlXHJcbiAgLCBuYXRpdmU6IFNWRy5jcmVhdGUoJ3N2ZycpXHJcbiAgfVxyXG59XHJcblxyXG5TVkcucGFyc2VyID0ge1xyXG4gIG5hdGl2ZTogU1ZHLmNyZWF0ZSgnc3ZnJylcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gIGlmKCFTVkcucGFyc2VyLmRyYXcpXHJcbiAgICBTVkcucHJlcGFyZSgpXHJcbn0sIGZhbHNlKVxyXG5cbi8vIFN0b3JhZ2UgZm9yIHJlZ3VsYXIgZXhwcmVzc2lvbnNcclxuU1ZHLnJlZ2V4ID0ge1xyXG4gIC8vIFBhcnNlIHVuaXQgdmFsdWVcclxuICBudW1iZXJBbmRVbml0OiAgICAvXihbKy1dPyhcXGQrKFxcLlxcZCopP3xcXC5cXGQrKShlWystXT9cXGQrKT8pKFthLXolXSopJC9pXHJcblxyXG4gIC8vIFBhcnNlIGhleCB2YWx1ZVxyXG4sIGhleDogICAgICAgICAgICAgIC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2lcclxuXHJcbiAgLy8gUGFyc2UgcmdiIHZhbHVlXHJcbiwgcmdiOiAgICAgICAgICAgICAgL3JnYlxcKChcXGQrKSwoXFxkKyksKFxcZCspXFwpL1xyXG5cclxuICAvLyBQYXJzZSByZWZlcmVuY2UgaWRcclxuLCByZWZlcmVuY2U6ICAgICAgICAvIyhbYS16MC05XFwtX10rKS9pXHJcblxyXG4gIC8vIHNwbGl0cyBhIHRyYW5zZm9ybWF0aW9uIGNoYWluXHJcbiwgdHJhbnNmb3JtczogICAgICAgL1xcKVxccyosP1xccyovXHJcblxyXG4gIC8vIFdoaXRlc3BhY2VcclxuLCB3aGl0ZXNwYWNlOiAgICAgICAvXFxzL2dcclxuXHJcbiAgLy8gVGVzdCBoZXggdmFsdWVcclxuLCBpc0hleDogICAgICAgICAgICAvXiNbYS1mMC05XXszLDZ9JC9pXHJcblxyXG4gIC8vIFRlc3QgcmdiIHZhbHVlXHJcbiwgaXNSZ2I6ICAgICAgICAgICAgL15yZ2JcXCgvXHJcblxyXG4gIC8vIFRlc3QgY3NzIGRlY2xhcmF0aW9uXHJcbiwgaXNDc3M6ICAgICAgICAgICAgL1teOl0rOlteO10rOz8vXHJcblxyXG4gIC8vIFRlc3QgZm9yIGJsYW5rIHN0cmluZ1xyXG4sIGlzQmxhbms6ICAgICAgICAgIC9eKFxccyspPyQvXHJcblxyXG4gIC8vIFRlc3QgZm9yIG51bWVyaWMgc3RyaW5nXHJcbiwgaXNOdW1iZXI6ICAgICAgICAgL15bKy1dPyhcXGQrKFxcLlxcZCopP3xcXC5cXGQrKShlWystXT9cXGQrKT8kL2lcclxuXHJcbiAgLy8gVGVzdCBmb3IgcGVyY2VudCB2YWx1ZVxyXG4sIGlzUGVyY2VudDogICAgICAgIC9eLT9bXFxkXFwuXSslJC9cclxuXHJcbiAgLy8gVGVzdCBmb3IgaW1hZ2UgdXJsXHJcbiwgaXNJbWFnZTogICAgICAgICAgL1xcLihqcGd8anBlZ3xwbmd8Z2lmfHN2ZykoXFw/W149XSsuKik/L2lcclxuXHJcbiAgLy8gc3BsaXQgYXQgd2hpdGVzcGFjZSBhbmQgY29tbWFcclxuLCBkZWxpbWl0ZXI6ICAgICAgICAvW1xccyxdKy9cclxuXHJcbiAgLy8gVGhlIGZvbGxvd2luZyByZWdleCBhcmUgdXNlZCB0byBwYXJzZSB0aGUgZCBhdHRyaWJ1dGUgb2YgYSBwYXRoXHJcblxyXG4gIC8vIE1hdGNoZXMgYWxsIGh5cGhlbnMgd2hpY2ggYXJlIG5vdCBhZnRlciBhbiBleHBvbmVudFxyXG4sIGh5cGhlbjogICAgICAgICAgIC8oW15lXSlcXC0vZ2lcclxuXHJcbiAgLy8gUmVwbGFjZXMgYW5kIHRlc3RzIGZvciBhbGwgcGF0aCBsZXR0ZXJzXHJcbiwgcGF0aExldHRlcnM6ICAgICAgL1tNTEhWQ1NRVEFaXS9naVxyXG5cclxuICAvLyB5ZXMgd2UgbmVlZCB0aGlzIG9uZSwgdG9vXHJcbiwgaXNQYXRoTGV0dGVyOiAgICAgL1tNTEhWQ1NRVEFaXS9pXHJcblxyXG4gIC8vIG1hdGNoZXMgMC4xNTQuMjMuNDVcclxuLCBudW1iZXJzV2l0aERvdHM6ICAvKChcXGQ/XFwuXFxkKyg/OmVbKy1dP1xcZCspPykoKD86XFwuXFxkKyg/OmVbKy1dP1xcZCspPykrKSkrL2dpXHJcblxyXG4gIC8vIG1hdGNoZXMgLlxyXG4sIGRvdHM6ICAgICAgICAgICAgIC9cXC4vZ1xyXG59XHJcblxuU1ZHLnV0aWxzID0ge1xyXG4gIC8vIE1hcCBmdW5jdGlvblxyXG4gIG1hcDogZnVuY3Rpb24oYXJyYXksIGJsb2NrKSB7XHJcbiAgICB2YXIgaVxyXG4gICAgICAsIGlsID0gYXJyYXkubGVuZ3RoXHJcbiAgICAgICwgcmVzdWx0ID0gW11cclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgcmVzdWx0LnB1c2goYmxvY2soYXJyYXlbaV0pKVxyXG5cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9XHJcblxyXG4gIC8vIEZpbHRlciBmdW5jdGlvblxyXG4sIGZpbHRlcjogZnVuY3Rpb24oYXJyYXksIGJsb2NrKSB7XHJcbiAgICB2YXIgaVxyXG4gICAgICAsIGlsID0gYXJyYXkubGVuZ3RoXHJcbiAgICAgICwgcmVzdWx0ID0gW11cclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgaWYgKGJsb2NrKGFycmF5W2ldKSlcclxuICAgICAgICByZXN1bHQucHVzaChhcnJheVtpXSlcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfVxyXG5cclxuICAvLyBEZWdyZWVzIHRvIHJhZGlhbnNcclxuLCByYWRpYW5zOiBmdW5jdGlvbihkKSB7XHJcbiAgICByZXR1cm4gZCAlIDM2MCAqIE1hdGguUEkgLyAxODBcclxuICB9XHJcblxyXG4gIC8vIFJhZGlhbnMgdG8gZGVncmVlc1xyXG4sIGRlZ3JlZXM6IGZ1bmN0aW9uKHIpIHtcclxuICAgIHJldHVybiByICogMTgwIC8gTWF0aC5QSSAlIDM2MFxyXG4gIH1cclxuXHJcbiwgZmlsdGVyU1ZHRWxlbWVudHM6IGZ1bmN0aW9uKG5vZGVzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWx0ZXIoIG5vZGVzLCBmdW5jdGlvbihlbCkgeyByZXR1cm4gZWwgaW5zdGFuY2VvZiB3aW5kb3cuU1ZHRWxlbWVudCB9KVxyXG4gIH1cclxuXHJcbn1cblxyXG5TVkcuZGVmYXVsdHMgPSB7XHJcbiAgLy8gRGVmYXVsdCBhdHRyaWJ1dGUgdmFsdWVzXHJcbiAgYXR0cnM6IHtcclxuICAgIC8vIGZpbGwgYW5kIHN0cm9rZVxyXG4gICAgJ2ZpbGwtb3BhY2l0eSc6ICAgICAxXHJcbiAgLCAnc3Ryb2tlLW9wYWNpdHknOiAgIDFcclxuICAsICdzdHJva2Utd2lkdGgnOiAgICAgMFxyXG4gICwgJ3N0cm9rZS1saW5lam9pbic6ICAnbWl0ZXInXHJcbiAgLCAnc3Ryb2tlLWxpbmVjYXAnOiAgICdidXR0J1xyXG4gICwgZmlsbDogICAgICAgICAgICAgICAnIzAwMDAwMCdcclxuICAsIHN0cm9rZTogICAgICAgICAgICAgJyMwMDAwMDAnXHJcbiAgLCBvcGFjaXR5OiAgICAgICAgICAgIDFcclxuICAgIC8vIHBvc2l0aW9uXHJcbiAgLCB4OiAgICAgICAgICAgICAgICAgIDBcclxuICAsIHk6ICAgICAgICAgICAgICAgICAgMFxyXG4gICwgY3g6ICAgICAgICAgICAgICAgICAwXHJcbiAgLCBjeTogICAgICAgICAgICAgICAgIDBcclxuICAgIC8vIHNpemVcclxuICAsIHdpZHRoOiAgICAgICAgICAgICAgMFxyXG4gICwgaGVpZ2h0OiAgICAgICAgICAgICAwXHJcbiAgICAvLyByYWRpdXNcclxuICAsIHI6ICAgICAgICAgICAgICAgICAgMFxyXG4gICwgcng6ICAgICAgICAgICAgICAgICAwXHJcbiAgLCByeTogICAgICAgICAgICAgICAgIDBcclxuICAgIC8vIGdyYWRpZW50XHJcbiAgLCBvZmZzZXQ6ICAgICAgICAgICAgIDBcclxuICAsICdzdG9wLW9wYWNpdHknOiAgICAgMVxyXG4gICwgJ3N0b3AtY29sb3InOiAgICAgICAnIzAwMDAwMCdcclxuICAgIC8vIHRleHRcclxuICAsICdmb250LXNpemUnOiAgICAgICAgMTZcclxuICAsICdmb250LWZhbWlseSc6ICAgICAgJ0hlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXHJcbiAgLCAndGV4dC1hbmNob3InOiAgICAgICdzdGFydCdcclxuICB9XHJcblxyXG59XG4vLyBNb2R1bGUgZm9yIGNvbG9yIGNvbnZlcnRpb25zXHJcblNWRy5Db2xvciA9IGZ1bmN0aW9uKGNvbG9yKSB7XHJcbiAgdmFyIG1hdGNoXHJcblxyXG4gIC8vIGluaXRpYWxpemUgZGVmYXVsdHNcclxuICB0aGlzLnIgPSAwXHJcbiAgdGhpcy5nID0gMFxyXG4gIHRoaXMuYiA9IDBcclxuXHJcbiAgaWYoIWNvbG9yKSByZXR1cm5cclxuXHJcbiAgLy8gcGFyc2UgY29sb3JcclxuICBpZiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJykge1xyXG4gICAgaWYgKFNWRy5yZWdleC5pc1JnYi50ZXN0KGNvbG9yKSkge1xyXG4gICAgICAvLyBnZXQgcmdiIHZhbHVlc1xyXG4gICAgICBtYXRjaCA9IFNWRy5yZWdleC5yZ2IuZXhlYyhjb2xvci5yZXBsYWNlKFNWRy5yZWdleC53aGl0ZXNwYWNlLCcnKSlcclxuXHJcbiAgICAgIC8vIHBhcnNlIG51bWVyaWMgdmFsdWVzXHJcbiAgICAgIHRoaXMuciA9IHBhcnNlSW50KG1hdGNoWzFdKVxyXG4gICAgICB0aGlzLmcgPSBwYXJzZUludChtYXRjaFsyXSlcclxuICAgICAgdGhpcy5iID0gcGFyc2VJbnQobWF0Y2hbM10pXHJcblxyXG4gICAgfSBlbHNlIGlmIChTVkcucmVnZXguaXNIZXgudGVzdChjb2xvcikpIHtcclxuICAgICAgLy8gZ2V0IGhleCB2YWx1ZXNcclxuICAgICAgbWF0Y2ggPSBTVkcucmVnZXguaGV4LmV4ZWMoZnVsbEhleChjb2xvcikpXHJcblxyXG4gICAgICAvLyBwYXJzZSBudW1lcmljIHZhbHVlc1xyXG4gICAgICB0aGlzLnIgPSBwYXJzZUludChtYXRjaFsxXSwgMTYpXHJcbiAgICAgIHRoaXMuZyA9IHBhcnNlSW50KG1hdGNoWzJdLCAxNilcclxuICAgICAgdGhpcy5iID0gcGFyc2VJbnQobWF0Y2hbM10sIDE2KVxyXG5cclxuICAgIH1cclxuXHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgY29sb3IgPT09ICdvYmplY3QnKSB7XHJcbiAgICB0aGlzLnIgPSBjb2xvci5yXHJcbiAgICB0aGlzLmcgPSBjb2xvci5nXHJcbiAgICB0aGlzLmIgPSBjb2xvci5iXHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcblNWRy5leHRlbmQoU1ZHLkNvbG9yLCB7XHJcbiAgLy8gRGVmYXVsdCB0byBoZXggY29udmVyc2lvblxyXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLnRvSGV4KClcclxuICB9XHJcbiAgLy8gQnVpbGQgaGV4IHZhbHVlXHJcbiwgdG9IZXg6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuICcjJ1xyXG4gICAgICArIGNvbXBUb0hleCh0aGlzLnIpXHJcbiAgICAgICsgY29tcFRvSGV4KHRoaXMuZylcclxuICAgICAgKyBjb21wVG9IZXgodGhpcy5iKVxyXG4gIH1cclxuICAvLyBCdWlsZCByZ2IgdmFsdWVcclxuLCB0b1JnYjogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gJ3JnYignICsgW3RoaXMuciwgdGhpcy5nLCB0aGlzLmJdLmpvaW4oKSArICcpJ1xyXG4gIH1cclxuICAvLyBDYWxjdWxhdGUgdHJ1ZSBicmlnaHRuZXNzXHJcbiwgYnJpZ2h0bmVzczogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuciAvIDI1NSAqIDAuMzApXHJcbiAgICAgICAgICsgKHRoaXMuZyAvIDI1NSAqIDAuNTkpXHJcbiAgICAgICAgICsgKHRoaXMuYiAvIDI1NSAqIDAuMTEpXHJcbiAgfVxyXG4gIC8vIE1ha2UgY29sb3IgbW9ycGhhYmxlXHJcbiwgbW9ycGg6IGZ1bmN0aW9uKGNvbG9yKSB7XHJcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gbmV3IFNWRy5Db2xvcihjb2xvcilcclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICAvLyBHZXQgbW9ycGhlZCBjb2xvciBhdCBnaXZlbiBwb3NpdGlvblxyXG4sIGF0OiBmdW5jdGlvbihwb3MpIHtcclxuICAgIC8vIG1ha2Ugc3VyZSBhIGRlc3RpbmF0aW9uIGlzIGRlZmluZWRcclxuICAgIGlmICghdGhpcy5kZXN0aW5hdGlvbikgcmV0dXJuIHRoaXNcclxuXHJcbiAgICAvLyBub3JtYWxpc2UgcG9zXHJcbiAgICBwb3MgPSBwb3MgPCAwID8gMCA6IHBvcyA+IDEgPyAxIDogcG9zXHJcblxyXG4gICAgLy8gZ2VuZXJhdGUgbW9ycGhlZCBjb2xvclxyXG4gICAgcmV0dXJuIG5ldyBTVkcuQ29sb3Ioe1xyXG4gICAgICByOiB+fih0aGlzLnIgKyAodGhpcy5kZXN0aW5hdGlvbi5yIC0gdGhpcy5yKSAqIHBvcylcclxuICAgICwgZzogfn4odGhpcy5nICsgKHRoaXMuZGVzdGluYXRpb24uZyAtIHRoaXMuZykgKiBwb3MpXHJcbiAgICAsIGI6IH5+KHRoaXMuYiArICh0aGlzLmRlc3RpbmF0aW9uLmIgLSB0aGlzLmIpICogcG9zKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG59KVxyXG5cclxuLy8gVGVzdGVyc1xyXG5cclxuLy8gVGVzdCBpZiBnaXZlbiB2YWx1ZSBpcyBhIGNvbG9yIHN0cmluZ1xyXG5TVkcuQ29sb3IudGVzdCA9IGZ1bmN0aW9uKGNvbG9yKSB7XHJcbiAgY29sb3IgKz0gJydcclxuICByZXR1cm4gU1ZHLnJlZ2V4LmlzSGV4LnRlc3QoY29sb3IpXHJcbiAgICAgIHx8IFNWRy5yZWdleC5pc1JnYi50ZXN0KGNvbG9yKVxyXG59XHJcblxyXG4vLyBUZXN0IGlmIGdpdmVuIHZhbHVlIGlzIGEgcmdiIG9iamVjdFxyXG5TVkcuQ29sb3IuaXNSZ2IgPSBmdW5jdGlvbihjb2xvcikge1xyXG4gIHJldHVybiBjb2xvciAmJiB0eXBlb2YgY29sb3IuciA9PSAnbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAmJiB0eXBlb2YgY29sb3IuZyA9PSAnbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAmJiB0eXBlb2YgY29sb3IuYiA9PSAnbnVtYmVyJ1xyXG59XHJcblxyXG4vLyBUZXN0IGlmIGdpdmVuIHZhbHVlIGlzIGEgY29sb3JcclxuU1ZHLkNvbG9yLmlzQ29sb3IgPSBmdW5jdGlvbihjb2xvcikge1xyXG4gIHJldHVybiBTVkcuQ29sb3IuaXNSZ2IoY29sb3IpIHx8IFNWRy5Db2xvci50ZXN0KGNvbG9yKVxyXG59XG4vLyBNb2R1bGUgZm9yIGFycmF5IGNvbnZlcnNpb25cclxuU1ZHLkFycmF5ID0gZnVuY3Rpb24oYXJyYXksIGZhbGxiYWNrKSB7XHJcbiAgYXJyYXkgPSAoYXJyYXkgfHwgW10pLnZhbHVlT2YoKVxyXG5cclxuICAvLyBpZiBhcnJheSBpcyBlbXB0eSBhbmQgZmFsbGJhY2sgaXMgcHJvdmlkZWQsIHVzZSBmYWxsYmFja1xyXG4gIGlmIChhcnJheS5sZW5ndGggPT0gMCAmJiBmYWxsYmFjaylcclxuICAgIGFycmF5ID0gZmFsbGJhY2sudmFsdWVPZigpXHJcblxyXG4gIC8vIHBhcnNlIGFycmF5XHJcbiAgdGhpcy52YWx1ZSA9IHRoaXMucGFyc2UoYXJyYXkpXHJcbn1cclxuXHJcblNWRy5leHRlbmQoU1ZHLkFycmF5LCB7XHJcbiAgLy8gTWFrZSBhcnJheSBtb3JwaGFibGVcclxuICBtb3JwaDogZnVuY3Rpb24oYXJyYXkpIHtcclxuICAgIHRoaXMuZGVzdGluYXRpb24gPSB0aGlzLnBhcnNlKGFycmF5KVxyXG5cclxuICAgIC8vIG5vcm1hbGl6ZSBsZW5ndGggb2YgYXJyYXlzXHJcbiAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggIT0gdGhpcy5kZXN0aW5hdGlvbi5sZW5ndGgpIHtcclxuICAgICAgdmFyIGxhc3RWYWx1ZSAgICAgICA9IHRoaXMudmFsdWVbdGhpcy52YWx1ZS5sZW5ndGggLSAxXVxyXG4gICAgICAgICwgbGFzdERlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvblt0aGlzLmRlc3RpbmF0aW9uLmxlbmd0aCAtIDFdXHJcblxyXG4gICAgICB3aGlsZSh0aGlzLnZhbHVlLmxlbmd0aCA+IHRoaXMuZGVzdGluYXRpb24ubGVuZ3RoKVxyXG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ucHVzaChsYXN0RGVzdGluYXRpb24pXHJcbiAgICAgIHdoaWxlKHRoaXMudmFsdWUubGVuZ3RoIDwgdGhpcy5kZXN0aW5hdGlvbi5sZW5ndGgpXHJcbiAgICAgICAgdGhpcy52YWx1ZS5wdXNoKGxhc3RWYWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICAvLyBDbGVhbiB1cCBhbnkgZHVwbGljYXRlIHBvaW50c1xyXG4sIHNldHRsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBmaW5kIGFsbCB1bmlxdWUgdmFsdWVzXHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSB0aGlzLnZhbHVlLmxlbmd0aCwgc2VlbiA9IFtdOyBpIDwgaWw7IGkrKylcclxuICAgICAgaWYgKHNlZW4uaW5kZXhPZih0aGlzLnZhbHVlW2ldKSA9PSAtMSlcclxuICAgICAgICBzZWVuLnB1c2godGhpcy52YWx1ZVtpXSlcclxuXHJcbiAgICAvLyBzZXQgbmV3IHZhbHVlXHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZSA9IHNlZW5cclxuICB9XHJcbiAgLy8gR2V0IG1vcnBoZWQgYXJyYXkgYXQgZ2l2ZW4gcG9zaXRpb25cclxuLCBhdDogZnVuY3Rpb24ocG9zKSB7XHJcbiAgICAvLyBtYWtlIHN1cmUgYSBkZXN0aW5hdGlvbiBpcyBkZWZpbmVkXHJcbiAgICBpZiAoIXRoaXMuZGVzdGluYXRpb24pIHJldHVybiB0aGlzXHJcblxyXG4gICAgLy8gZ2VuZXJhdGUgbW9ycGhlZCBhcnJheVxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gdGhpcy52YWx1ZS5sZW5ndGgsIGFycmF5ID0gW107IGkgPCBpbDsgaSsrKVxyXG4gICAgICBhcnJheS5wdXNoKHRoaXMudmFsdWVbaV0gKyAodGhpcy5kZXN0aW5hdGlvbltpXSAtIHRoaXMudmFsdWVbaV0pICogcG9zKVxyXG5cclxuICAgIHJldHVybiBuZXcgU1ZHLkFycmF5KGFycmF5KVxyXG4gIH1cclxuICAvLyBDb252ZXJ0IGFycmF5IHRvIHN0cmluZ1xyXG4sIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlLmpvaW4oJyAnKVxyXG4gIH1cclxuICAvLyBSZWFsIHZhbHVlXHJcbiwgdmFsdWVPZjogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxyXG4gIH1cclxuICAvLyBQYXJzZSB3aGl0ZXNwYWNlIHNlcGFyYXRlZCBzdHJpbmdcclxuLCBwYXJzZTogZnVuY3Rpb24oYXJyYXkpIHtcclxuICAgIGFycmF5ID0gYXJyYXkudmFsdWVPZigpXHJcblxyXG4gICAgLy8gaWYgYWxyZWFkeSBpcyBhbiBhcnJheSwgbm8gbmVlZCB0byBwYXJzZSBpdFxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSByZXR1cm4gYXJyYXlcclxuXHJcbiAgICByZXR1cm4gdGhpcy5zcGxpdChhcnJheSlcclxuICB9XHJcbiAgLy8gU3RyaXAgdW5uZWNlc3Nhcnkgd2hpdGVzcGFjZVxyXG4sIHNwbGl0OiBmdW5jdGlvbihzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdHJpbmcudHJpbSgpLnNwbGl0KFNWRy5yZWdleC5kZWxpbWl0ZXIpLm1hcChwYXJzZUZsb2F0KVxyXG4gIH1cclxuICAvLyBSZXZlcnNlIGFycmF5XHJcbiwgcmV2ZXJzZTogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLnZhbHVlLnJldmVyc2UoKVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4sIGNsb25lOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciBjbG9uZSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKClcclxuICAgIGNsb25lLnZhbHVlID0gYXJyYXlfY2xvbmUodGhpcy52YWx1ZSlcclxuICAgIHJldHVybiBjbG9uZVxyXG4gIH1cclxufSlcbi8vIFBvbHkgcG9pbnRzIGFycmF5XHJcblNWRy5Qb2ludEFycmF5ID0gZnVuY3Rpb24oYXJyYXksIGZhbGxiYWNrKSB7XHJcbiAgU1ZHLkFycmF5LmNhbGwodGhpcywgYXJyYXksIGZhbGxiYWNrIHx8IFtbMCwwXV0pXHJcbn1cclxuXHJcbi8vIEluaGVyaXQgZnJvbSBTVkcuQXJyYXlcclxuU1ZHLlBvaW50QXJyYXkucHJvdG90eXBlID0gbmV3IFNWRy5BcnJheVxyXG5TVkcuUG9pbnRBcnJheS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTVkcuUG9pbnRBcnJheVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuUG9pbnRBcnJheSwge1xyXG4gIC8vIENvbnZlcnQgYXJyYXkgdG8gc3RyaW5nXHJcbiAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gY29udmVydCB0byBhIHBvbHkgcG9pbnQgc3RyaW5nXHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSB0aGlzLnZhbHVlLmxlbmd0aCwgYXJyYXkgPSBbXTsgaSA8IGlsOyBpKyspXHJcbiAgICAgIGFycmF5LnB1c2godGhpcy52YWx1ZVtpXS5qb2luKCcsJykpXHJcblxyXG4gICAgcmV0dXJuIGFycmF5LmpvaW4oJyAnKVxyXG4gIH1cclxuICAvLyBDb252ZXJ0IGFycmF5IHRvIGxpbmUgb2JqZWN0XHJcbiwgdG9MaW5lOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHgxOiB0aGlzLnZhbHVlWzBdWzBdXHJcbiAgICAsIHkxOiB0aGlzLnZhbHVlWzBdWzFdXHJcbiAgICAsIHgyOiB0aGlzLnZhbHVlWzFdWzBdXHJcbiAgICAsIHkyOiB0aGlzLnZhbHVlWzFdWzFdXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIEdldCBtb3JwaGVkIGFycmF5IGF0IGdpdmVuIHBvc2l0aW9uXHJcbiwgYXQ6IGZ1bmN0aW9uKHBvcykge1xyXG4gICAgLy8gbWFrZSBzdXJlIGEgZGVzdGluYXRpb24gaXMgZGVmaW5lZFxyXG4gICAgaWYgKCF0aGlzLmRlc3RpbmF0aW9uKSByZXR1cm4gdGhpc1xyXG5cclxuICAgIC8vIGdlbmVyYXRlIG1vcnBoZWQgcG9pbnQgc3RyaW5nXHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSB0aGlzLnZhbHVlLmxlbmd0aCwgYXJyYXkgPSBbXTsgaSA8IGlsOyBpKyspXHJcbiAgICAgIGFycmF5LnB1c2goW1xyXG4gICAgICAgIHRoaXMudmFsdWVbaV1bMF0gKyAodGhpcy5kZXN0aW5hdGlvbltpXVswXSAtIHRoaXMudmFsdWVbaV1bMF0pICogcG9zXHJcbiAgICAgICwgdGhpcy52YWx1ZVtpXVsxXSArICh0aGlzLmRlc3RpbmF0aW9uW2ldWzFdIC0gdGhpcy52YWx1ZVtpXVsxXSkgKiBwb3NcclxuICAgICAgXSlcclxuXHJcbiAgICByZXR1cm4gbmV3IFNWRy5Qb2ludEFycmF5KGFycmF5KVxyXG4gIH1cclxuICAvLyBQYXJzZSBwb2ludCBzdHJpbmcgYW5kIGZsYXQgYXJyYXlcclxuLCBwYXJzZTogZnVuY3Rpb24oYXJyYXkpIHtcclxuICAgIHZhciBwb2ludHMgPSBbXVxyXG5cclxuICAgIGFycmF5ID0gYXJyYXkudmFsdWVPZigpXHJcblxyXG4gICAgLy8gaWYgaXQgaXMgYW4gYXJyYXlcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAvLyBhbmQgaXQgaXMgbm90IGZsYXQsIHRoZXJlIGlzIG5vIG5lZWQgdG8gcGFyc2UgaXRcclxuICAgICAgaWYoQXJyYXkuaXNBcnJheShhcnJheVswXSkpIHtcclxuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gdXNlIGEgY2xvbmVcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwuc2xpY2UoKSB9KVxyXG4gICAgICB9IGVsc2UgaWYgKGFycmF5WzBdLnggIT0gbnVsbCl7XHJcbiAgICAgICAgLy8gYWxsb3cgcG9pbnQgb2JqZWN0cyB0byBiZSBwYXNzZWRcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gW2VsLngsIGVsLnldIH0pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7IC8vIEVsc2UsIGl0IGlzIGNvbnNpZGVyZWQgYXMgYSBzdHJpbmdcclxuICAgICAgLy8gcGFyc2UgcG9pbnRzXHJcbiAgICAgIGFycmF5ID0gYXJyYXkudHJpbSgpLnNwbGl0KFNWRy5yZWdleC5kZWxpbWl0ZXIpLm1hcChwYXJzZUZsb2F0KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHZhbGlkYXRlIHBvaW50cyAtIGh0dHBzOi8vc3Znd2cub3JnL3N2ZzItZHJhZnQvc2hhcGVzLmh0bWwjRGF0YVR5cGVQb2ludHNcclxuICAgIC8vIE9kZCBudW1iZXIgb2YgY29vcmRpbmF0ZXMgaXMgYW4gZXJyb3IuIEluIHN1Y2ggY2FzZXMsIGRyb3AgdGhlIGxhc3Qgb2RkIGNvb3JkaW5hdGUuXHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoICUgMiAhPT0gMCkgYXJyYXkucG9wKClcclxuXHJcbiAgICAvLyB3cmFwIHBvaW50cyBpbiB0d28tdHVwbGVzIGFuZCBwYXJzZSBwb2ludHMgYXMgZmxvYXRzXHJcbiAgICBmb3IodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkgPSBpICsgMilcclxuICAgICAgcG9pbnRzLnB1c2goWyBhcnJheVtpXSwgYXJyYXlbaSsxXSBdKVxyXG5cclxuICAgIHJldHVybiBwb2ludHNcclxuICB9XHJcbiAgLy8gTW92ZSBwb2ludCBzdHJpbmdcclxuLCBtb3ZlOiBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICB2YXIgYm94ID0gdGhpcy5iYm94KClcclxuXHJcbiAgICAvLyBnZXQgcmVsYXRpdmUgb2Zmc2V0XHJcbiAgICB4IC09IGJveC54XHJcbiAgICB5IC09IGJveC55XHJcblxyXG4gICAgLy8gbW92ZSBldmVyeSBwb2ludFxyXG4gICAgaWYgKCFpc05hTih4KSAmJiAhaXNOYU4oeSkpXHJcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnZhbHVlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG4gICAgICAgIHRoaXMudmFsdWVbaV0gPSBbdGhpcy52YWx1ZVtpXVswXSArIHgsIHRoaXMudmFsdWVbaV1bMV0gKyB5XVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIC8vIFJlc2l6ZSBwb2x5IHN0cmluZ1xyXG4sIHNpemU6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHZhciBpLCBib3ggPSB0aGlzLmJib3goKVxyXG5cclxuICAgIC8vIHJlY2FsY3VsYXRlIHBvc2l0aW9uIG9mIGFsbCBwb2ludHMgYWNjb3JkaW5nIHRvIG5ldyBzaXplXHJcbiAgICBmb3IgKGkgPSB0aGlzLnZhbHVlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGlmKGJveC53aWR0aCkgdGhpcy52YWx1ZVtpXVswXSA9ICgodGhpcy52YWx1ZVtpXVswXSAtIGJveC54KSAqIHdpZHRoKSAgLyBib3gud2lkdGggICsgYm94LnhcclxuICAgICAgaWYoYm94LmhlaWdodCkgdGhpcy52YWx1ZVtpXVsxXSA9ICgodGhpcy52YWx1ZVtpXVsxXSAtIGJveC55KSAqIGhlaWdodCkgLyBib3guaGVpZ2h0ICsgYm94LnlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICAvLyBHZXQgYm91bmRpbmcgYm94IG9mIHBvaW50c1xyXG4sIGJib3g6IGZ1bmN0aW9uKCkge1xyXG4gICAgU1ZHLnBhcnNlci5wb2x5LnNldEF0dHJpYnV0ZSgncG9pbnRzJywgdGhpcy50b1N0cmluZygpKVxyXG5cclxuICAgIHJldHVybiBTVkcucGFyc2VyLnBvbHkuZ2V0QkJveCgpXHJcbiAgfVxyXG59KVxyXG5cbnZhciBwYXRoSGFuZGxlcnMgPSB7XHJcbiAgTTogZnVuY3Rpb24oYywgcCwgcDApIHtcclxuICAgIHAueCA9IHAwLnggPSBjWzBdXHJcbiAgICBwLnkgPSBwMC55ID0gY1sxXVxyXG5cclxuICAgIHJldHVybiBbJ00nLCBwLngsIHAueV1cclxuICB9LFxyXG4gIEw6IGZ1bmN0aW9uKGMsIHApIHtcclxuICAgIHAueCA9IGNbMF1cclxuICAgIHAueSA9IGNbMV1cclxuICAgIHJldHVybiBbJ0wnLCBjWzBdLCBjWzFdXVxyXG4gIH0sXHJcbiAgSDogZnVuY3Rpb24oYywgcCkge1xyXG4gICAgcC54ID0gY1swXVxyXG4gICAgcmV0dXJuIFsnSCcsIGNbMF1dXHJcbiAgfSxcclxuICBWOiBmdW5jdGlvbihjLCBwKSB7XHJcbiAgICBwLnkgPSBjWzBdXHJcbiAgICByZXR1cm4gWydWJywgY1swXV1cclxuICB9LFxyXG4gIEM6IGZ1bmN0aW9uKGMsIHApIHtcclxuICAgIHAueCA9IGNbNF1cclxuICAgIHAueSA9IGNbNV1cclxuICAgIHJldHVybiBbJ0MnLCBjWzBdLCBjWzFdLCBjWzJdLCBjWzNdLCBjWzRdLCBjWzVdXVxyXG4gIH0sXHJcbiAgUzogZnVuY3Rpb24oYywgcCkge1xyXG4gICAgcC54ID0gY1syXVxyXG4gICAgcC55ID0gY1szXVxyXG4gICAgcmV0dXJuIFsnUycsIGNbMF0sIGNbMV0sIGNbMl0sIGNbM11dXHJcbiAgfSxcclxuICBROiBmdW5jdGlvbihjLCBwKSB7XHJcbiAgICBwLnggPSBjWzJdXHJcbiAgICBwLnkgPSBjWzNdXHJcbiAgICByZXR1cm4gWydRJywgY1swXSwgY1sxXSwgY1syXSwgY1szXV1cclxuICB9LFxyXG4gIFQ6IGZ1bmN0aW9uKGMsIHApIHtcclxuICAgIHAueCA9IGNbMF1cclxuICAgIHAueSA9IGNbMV1cclxuICAgIHJldHVybiBbJ1QnLCBjWzBdLCBjWzFdXVxyXG4gIH0sXHJcbiAgWjogZnVuY3Rpb24oYywgcCwgcDApIHtcclxuICAgIHAueCA9IHAwLnhcclxuICAgIHAueSA9IHAwLnlcclxuICAgIHJldHVybiBbJ1onXVxyXG4gIH0sXHJcbiAgQTogZnVuY3Rpb24oYywgcCkge1xyXG4gICAgcC54ID0gY1s1XVxyXG4gICAgcC55ID0gY1s2XVxyXG4gICAgcmV0dXJuIFsnQScsIGNbMF0sIGNbMV0sIGNbMl0sIGNbM10sIGNbNF0sIGNbNV0sIGNbNl1dXHJcbiAgfVxyXG59XHJcblxyXG52YXIgbWxodnF0Y3NhID0gJ21saHZxdGNzYXonLnNwbGl0KCcnKVxyXG5cclxuZm9yKHZhciBpID0gMCwgaWwgPSBtbGh2cXRjc2EubGVuZ3RoOyBpIDwgaWw7ICsraSl7XHJcbiAgcGF0aEhhbmRsZXJzW21saHZxdGNzYVtpXV0gPSAoZnVuY3Rpb24oaSl7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oYywgcCwgcDApIHtcclxuICAgICAgaWYoaSA9PSAnSCcpIGNbMF0gPSBjWzBdICsgcC54XHJcbiAgICAgIGVsc2UgaWYoaSA9PSAnVicpIGNbMF0gPSBjWzBdICsgcC55XHJcbiAgICAgIGVsc2UgaWYoaSA9PSAnQScpe1xyXG4gICAgICAgIGNbNV0gPSBjWzVdICsgcC54LFxyXG4gICAgICAgIGNbNl0gPSBjWzZdICsgcC55XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICAgIGZvcih2YXIgaiA9IDAsIGpsID0gYy5sZW5ndGg7IGogPCBqbDsgKytqKSB7XHJcbiAgICAgICAgICBjW2pdID0gY1tqXSArIChqJTIgPyBwLnkgOiBwLngpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHBhdGhIYW5kbGVyc1tpXShjLCBwLCBwMClcclxuICAgIH1cclxuICB9KShtbGh2cXRjc2FbaV0udG9VcHBlckNhc2UoKSlcclxufVxyXG5cclxuLy8gUGF0aCBwb2ludHMgYXJyYXlcclxuU1ZHLlBhdGhBcnJheSA9IGZ1bmN0aW9uKGFycmF5LCBmYWxsYmFjaykge1xyXG4gIFNWRy5BcnJheS5jYWxsKHRoaXMsIGFycmF5LCBmYWxsYmFjayB8fCBbWydNJywgMCwgMF1dKVxyXG59XHJcblxyXG4vLyBJbmhlcml0IGZyb20gU1ZHLkFycmF5XHJcblNWRy5QYXRoQXJyYXkucHJvdG90eXBlID0gbmV3IFNWRy5BcnJheVxyXG5TVkcuUGF0aEFycmF5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNWRy5QYXRoQXJyYXlcclxuXHJcblNWRy5leHRlbmQoU1ZHLlBhdGhBcnJheSwge1xyXG4gIC8vIENvbnZlcnQgYXJyYXkgdG8gc3RyaW5nXHJcbiAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIGFycmF5VG9TdHJpbmcodGhpcy52YWx1ZSlcclxuICB9XHJcbiAgLy8gTW92ZSBwYXRoIHN0cmluZ1xyXG4sIG1vdmU6IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgIC8vIGdldCBib3VuZGluZyBib3ggb2YgY3VycmVudCBzaXR1YXRpb25cclxuICAgIHZhciBib3ggPSB0aGlzLmJib3goKVxyXG5cclxuICAgIC8vIGdldCByZWxhdGl2ZSBvZmZzZXRcclxuICAgIHggLT0gYm94LnhcclxuICAgIHkgLT0gYm94LnlcclxuXHJcbiAgICBpZiAoIWlzTmFOKHgpICYmICFpc05hTih5KSkge1xyXG4gICAgICAvLyBtb3ZlIGV2ZXJ5IHBvaW50XHJcbiAgICAgIGZvciAodmFyIGwsIGkgPSB0aGlzLnZhbHVlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgbCA9IHRoaXMudmFsdWVbaV1bMF1cclxuXHJcbiAgICAgICAgaWYgKGwgPT0gJ00nIHx8IGwgPT0gJ0wnIHx8IGwgPT0gJ1QnKSAge1xyXG4gICAgICAgICAgdGhpcy52YWx1ZVtpXVsxXSArPSB4XHJcbiAgICAgICAgICB0aGlzLnZhbHVlW2ldWzJdICs9IHlcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChsID09ICdIJykgIHtcclxuICAgICAgICAgIHRoaXMudmFsdWVbaV1bMV0gKz0geFxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGwgPT0gJ1YnKSAge1xyXG4gICAgICAgICAgdGhpcy52YWx1ZVtpXVsxXSArPSB5XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAobCA9PSAnQycgfHwgbCA9PSAnUycgfHwgbCA9PSAnUScpICB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlW2ldWzFdICs9IHhcclxuICAgICAgICAgIHRoaXMudmFsdWVbaV1bMl0gKz0geVxyXG4gICAgICAgICAgdGhpcy52YWx1ZVtpXVszXSArPSB4XHJcbiAgICAgICAgICB0aGlzLnZhbHVlW2ldWzRdICs9IHlcclxuXHJcbiAgICAgICAgICBpZiAobCA9PSAnQycpICB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVbaV1bNV0gKz0geFxyXG4gICAgICAgICAgICB0aGlzLnZhbHVlW2ldWzZdICs9IHlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChsID09ICdBJykgIHtcclxuICAgICAgICAgIHRoaXMudmFsdWVbaV1bNl0gKz0geFxyXG4gICAgICAgICAgdGhpcy52YWx1ZVtpXVs3XSArPSB5XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIC8vIFJlc2l6ZSBwYXRoIHN0cmluZ1xyXG4sIHNpemU6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIC8vIGdldCBib3VuZGluZyBib3ggb2YgY3VycmVudCBzaXR1YXRpb25cclxuICAgIHZhciBpLCBsLCBib3ggPSB0aGlzLmJib3goKVxyXG5cclxuICAgIC8vIHJlY2FsY3VsYXRlIHBvc2l0aW9uIG9mIGFsbCBwb2ludHMgYWNjb3JkaW5nIHRvIG5ldyBzaXplXHJcbiAgICBmb3IgKGkgPSB0aGlzLnZhbHVlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGwgPSB0aGlzLnZhbHVlW2ldWzBdXHJcblxyXG4gICAgICBpZiAobCA9PSAnTScgfHwgbCA9PSAnTCcgfHwgbCA9PSAnVCcpICB7XHJcbiAgICAgICAgdGhpcy52YWx1ZVtpXVsxXSA9ICgodGhpcy52YWx1ZVtpXVsxXSAtIGJveC54KSAqIHdpZHRoKSAgLyBib3gud2lkdGggICsgYm94LnhcclxuICAgICAgICB0aGlzLnZhbHVlW2ldWzJdID0gKCh0aGlzLnZhbHVlW2ldWzJdIC0gYm94LnkpICogaGVpZ2h0KSAvIGJveC5oZWlnaHQgKyBib3gueVxyXG5cclxuICAgICAgfSBlbHNlIGlmIChsID09ICdIJykgIHtcclxuICAgICAgICB0aGlzLnZhbHVlW2ldWzFdID0gKCh0aGlzLnZhbHVlW2ldWzFdIC0gYm94LngpICogd2lkdGgpICAvIGJveC53aWR0aCAgKyBib3gueFxyXG5cclxuICAgICAgfSBlbHNlIGlmIChsID09ICdWJykgIHtcclxuICAgICAgICB0aGlzLnZhbHVlW2ldWzFdID0gKCh0aGlzLnZhbHVlW2ldWzFdIC0gYm94LnkpICogaGVpZ2h0KSAvIGJveC5oZWlnaHQgKyBib3gueVxyXG5cclxuICAgICAgfSBlbHNlIGlmIChsID09ICdDJyB8fCBsID09ICdTJyB8fCBsID09ICdRJykgIHtcclxuICAgICAgICB0aGlzLnZhbHVlW2ldWzFdID0gKCh0aGlzLnZhbHVlW2ldWzFdIC0gYm94LngpICogd2lkdGgpICAvIGJveC53aWR0aCAgKyBib3gueFxyXG4gICAgICAgIHRoaXMudmFsdWVbaV1bMl0gPSAoKHRoaXMudmFsdWVbaV1bMl0gLSBib3gueSkgKiBoZWlnaHQpIC8gYm94LmhlaWdodCArIGJveC55XHJcbiAgICAgICAgdGhpcy52YWx1ZVtpXVszXSA9ICgodGhpcy52YWx1ZVtpXVszXSAtIGJveC54KSAqIHdpZHRoKSAgLyBib3gud2lkdGggICsgYm94LnhcclxuICAgICAgICB0aGlzLnZhbHVlW2ldWzRdID0gKCh0aGlzLnZhbHVlW2ldWzRdIC0gYm94LnkpICogaGVpZ2h0KSAvIGJveC5oZWlnaHQgKyBib3gueVxyXG5cclxuICAgICAgICBpZiAobCA9PSAnQycpICB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlW2ldWzVdID0gKCh0aGlzLnZhbHVlW2ldWzVdIC0gYm94LngpICogd2lkdGgpICAvIGJveC53aWR0aCAgKyBib3gueFxyXG4gICAgICAgICAgdGhpcy52YWx1ZVtpXVs2XSA9ICgodGhpcy52YWx1ZVtpXVs2XSAtIGJveC55KSAqIGhlaWdodCkgLyBib3guaGVpZ2h0ICsgYm94LnlcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGVsc2UgaWYgKGwgPT0gJ0EnKSAge1xyXG4gICAgICAgIC8vIHJlc2l6ZSByYWRpaVxyXG4gICAgICAgIHRoaXMudmFsdWVbaV1bMV0gPSAodGhpcy52YWx1ZVtpXVsxXSAqIHdpZHRoKSAgLyBib3gud2lkdGhcclxuICAgICAgICB0aGlzLnZhbHVlW2ldWzJdID0gKHRoaXMudmFsdWVbaV1bMl0gKiBoZWlnaHQpIC8gYm94LmhlaWdodFxyXG5cclxuICAgICAgICAvLyBtb3ZlIHBvc2l0aW9uIHZhbHVlc1xyXG4gICAgICAgIHRoaXMudmFsdWVbaV1bNl0gPSAoKHRoaXMudmFsdWVbaV1bNl0gLSBib3gueCkgKiB3aWR0aCkgIC8gYm94LndpZHRoICArIGJveC54XHJcbiAgICAgICAgdGhpcy52YWx1ZVtpXVs3XSA9ICgodGhpcy52YWx1ZVtpXVs3XSAtIGJveC55KSAqIGhlaWdodCkgLyBib3guaGVpZ2h0ICsgYm94LnlcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICAvLyBUZXN0IGlmIHRoZSBwYXNzZWQgcGF0aCBhcnJheSB1c2UgdGhlIHNhbWUgcGF0aCBkYXRhIGNvbW1hbmRzIGFzIHRoaXMgcGF0aCBhcnJheVxyXG4sIGVxdWFsQ29tbWFuZHM6IGZ1bmN0aW9uKHBhdGhBcnJheSkge1xyXG4gICAgdmFyIGksIGlsLCBlcXVhbENvbW1hbmRzXHJcblxyXG4gICAgcGF0aEFycmF5ID0gbmV3IFNWRy5QYXRoQXJyYXkocGF0aEFycmF5KVxyXG5cclxuICAgIGVxdWFsQ29tbWFuZHMgPSB0aGlzLnZhbHVlLmxlbmd0aCA9PT0gcGF0aEFycmF5LnZhbHVlLmxlbmd0aFxyXG4gICAgZm9yKGkgPSAwLCBpbCA9IHRoaXMudmFsdWUubGVuZ3RoOyBlcXVhbENvbW1hbmRzICYmIGkgPCBpbDsgaSsrKSB7XHJcbiAgICAgIGVxdWFsQ29tbWFuZHMgPSB0aGlzLnZhbHVlW2ldWzBdID09PSBwYXRoQXJyYXkudmFsdWVbaV1bMF1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZXF1YWxDb21tYW5kc1xyXG4gIH1cclxuICAvLyBNYWtlIHBhdGggYXJyYXkgbW9ycGhhYmxlXHJcbiwgbW9ycGg6IGZ1bmN0aW9uKHBhdGhBcnJheSkge1xyXG4gICAgcGF0aEFycmF5ID0gbmV3IFNWRy5QYXRoQXJyYXkocGF0aEFycmF5KVxyXG5cclxuICAgIGlmKHRoaXMuZXF1YWxDb21tYW5kcyhwYXRoQXJyYXkpKSB7XHJcbiAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBwYXRoQXJyYXlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgLy8gR2V0IG1vcnBoZWQgcGF0aCBhcnJheSBhdCBnaXZlbiBwb3NpdGlvblxyXG4sIGF0OiBmdW5jdGlvbihwb3MpIHtcclxuICAgIC8vIG1ha2Ugc3VyZSBhIGRlc3RpbmF0aW9uIGlzIGRlZmluZWRcclxuICAgIGlmICghdGhpcy5kZXN0aW5hdGlvbikgcmV0dXJuIHRoaXNcclxuXHJcbiAgICB2YXIgc291cmNlQXJyYXkgPSB0aGlzLnZhbHVlXHJcbiAgICAgICwgZGVzdGluYXRpb25BcnJheSA9IHRoaXMuZGVzdGluYXRpb24udmFsdWVcclxuICAgICAgLCBhcnJheSA9IFtdLCBwYXRoQXJyYXkgPSBuZXcgU1ZHLlBhdGhBcnJheSgpXHJcbiAgICAgICwgaSwgaWwsIGosIGpsXHJcblxyXG4gICAgLy8gQW5pbWF0ZSBoYXMgc3BlY2lmaWVkIGluIHRoZSBTVkcgc3BlY1xyXG4gICAgLy8gU2VlOiBodHRwczovL3d3dy53My5vcmcvVFIvU1ZHMTEvcGF0aHMuaHRtbCNQYXRoRWxlbWVudFxyXG4gICAgZm9yIChpID0gMCwgaWwgPSBzb3VyY2VBcnJheS5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XHJcbiAgICAgIGFycmF5W2ldID0gW3NvdXJjZUFycmF5W2ldWzBdXVxyXG4gICAgICBmb3IoaiA9IDEsIGpsID0gc291cmNlQXJyYXlbaV0ubGVuZ3RoOyBqIDwgamw7IGorKykge1xyXG4gICAgICAgIGFycmF5W2ldW2pdID0gc291cmNlQXJyYXlbaV1bal0gKyAoZGVzdGluYXRpb25BcnJheVtpXVtqXSAtIHNvdXJjZUFycmF5W2ldW2pdKSAqIHBvc1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEZvciB0aGUgdHdvIGZsYWdzIG9mIHRoZSBlbGxpcHRpY2FsIGFyYyBjb21tYW5kLCB0aGUgU1ZHIHNwZWMgc2F5OlxyXG4gICAgICAvLyBGbGFncyBhbmQgYm9vbGVhbnMgYXJlIGludGVycG9sYXRlZCBhcyBmcmFjdGlvbnMgYmV0d2VlbiB6ZXJvIGFuZCBvbmUsIHdpdGggYW55IG5vbi16ZXJvIHZhbHVlIGNvbnNpZGVyZWQgdG8gYmUgYSB2YWx1ZSBvZiBvbmUvdHJ1ZVxyXG4gICAgICAvLyBFbGxpcHRpY2FsIGFyYyBjb21tYW5kIGFzIGFuIGFycmF5IGZvbGxvd2VkIGJ5IGNvcnJlc3BvbmRpbmcgaW5kZXhlczpcclxuICAgICAgLy8gWydBJywgcngsIHJ5LCB4LWF4aXMtcm90YXRpb24sIGxhcmdlLWFyYy1mbGFnLCBzd2VlcC1mbGFnLCB4LCB5XVxyXG4gICAgICAvLyAgIDAgICAgMSAgIDIgICAgICAgIDMgICAgICAgICAgICAgICAgIDQgICAgICAgICAgICAgNSAgICAgIDYgIDdcclxuICAgICAgaWYoYXJyYXlbaV1bMF0gPT09ICdBJykge1xyXG4gICAgICAgIGFycmF5W2ldWzRdID0gKyhhcnJheVtpXVs0XSAhPSAwKVxyXG4gICAgICAgIGFycmF5W2ldWzVdID0gKyhhcnJheVtpXVs1XSAhPSAwKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGlyZWN0bHkgbW9kaWZ5IHRoZSB2YWx1ZSBvZiBhIHBhdGggYXJyYXksIHRoaXMgaXMgZG9uZSB0aGlzIHdheSBmb3IgcGVyZm9ybWFuY2VcclxuICAgIHBhdGhBcnJheS52YWx1ZSA9IGFycmF5XHJcbiAgICByZXR1cm4gcGF0aEFycmF5XHJcbiAgfVxyXG4gIC8vIEFic29sdXRpemUgYW5kIHBhcnNlIHBhdGggdG8gYXJyYXlcclxuLCBwYXJzZTogZnVuY3Rpb24oYXJyYXkpIHtcclxuICAgIC8vIGlmIGl0J3MgYWxyZWFkeSBhIHBhdGhhcnJheSwgbm8gbmVlZCB0byBwYXJzZSBpdFxyXG4gICAgaWYgKGFycmF5IGluc3RhbmNlb2YgU1ZHLlBhdGhBcnJheSkgcmV0dXJuIGFycmF5LnZhbHVlT2YoKVxyXG5cclxuICAgIC8vIHByZXBhcmUgZm9yIHBhcnNpbmdcclxuICAgIHZhciBpLCB4MCwgeTAsIHMsIHNlZywgYXJyXHJcbiAgICAgICwgeCA9IDBcclxuICAgICAgLCB5ID0gMFxyXG4gICAgICAsIHBhcmFtQ250ID0geyAnTSc6MiwgJ0wnOjIsICdIJzoxLCAnVic6MSwgJ0MnOjYsICdTJzo0LCAnUSc6NCwgJ1QnOjIsICdBJzo3LCAnWic6MCB9XHJcblxyXG4gICAgaWYodHlwZW9mIGFycmF5ID09ICdzdHJpbmcnKXtcclxuXHJcbiAgICAgIGFycmF5ID0gYXJyYXlcclxuICAgICAgICAucmVwbGFjZShTVkcucmVnZXgubnVtYmVyc1dpdGhEb3RzLCBwYXRoUmVnUmVwbGFjZSkgLy8gY29udmVydCA0NS4xMjMuMTIzIHRvIDQ1LjEyMyAuMTIzXHJcbiAgICAgICAgLnJlcGxhY2UoU1ZHLnJlZ2V4LnBhdGhMZXR0ZXJzLCAnICQmICcpIC8vIHB1dCBzb21lIHJvb20gYmV0d2VlbiBsZXR0ZXJzIGFuZCBudW1iZXJzXHJcbiAgICAgICAgLnJlcGxhY2UoU1ZHLnJlZ2V4Lmh5cGhlbiwgJyQxIC0nKSAgICAgIC8vIGFkZCBzcGFjZSBiZWZvcmUgaHlwaGVuXHJcbiAgICAgICAgLnRyaW0oKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyaW1cclxuICAgICAgICAuc3BsaXQoU1ZHLnJlZ2V4LmRlbGltaXRlcikgICAvLyBzcGxpdCBpbnRvIGFycmF5XHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICAgIGFycmF5ID0gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cnIpe1xyXG4gICAgICAgIHJldHVybiBbXS5jb25jYXQuY2FsbChwcmV2LCBjdXJyKVxyXG4gICAgICB9LCBbXSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBhcnJheSBub3cgaXMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgcGFydHMgb2YgYSBwYXRoIGUuZy4gWydNJywgJzAnLCAnMCcsICdMJywgJzMwJywgJzMwJyAuLi5dXHJcbiAgICB2YXIgYXJyID0gW11cclxuICAgICAgLCBwID0gbmV3IFNWRy5Qb2ludCgpXHJcbiAgICAgICwgcDAgPSBuZXcgU1ZHLlBvaW50KClcclxuICAgICAgLCBpbmRleCA9IDBcclxuICAgICAgLCBsZW4gPSBhcnJheS5sZW5ndGhcclxuXHJcbiAgICBkb3tcclxuICAgICAgLy8gVGVzdCBpZiB3ZSBoYXZlIGEgcGF0aCBsZXR0ZXJcclxuICAgICAgaWYoU1ZHLnJlZ2V4LmlzUGF0aExldHRlci50ZXN0KGFycmF5W2luZGV4XSkpe1xyXG4gICAgICAgIHMgPSBhcnJheVtpbmRleF1cclxuICAgICAgICArK2luZGV4XHJcbiAgICAgIC8vIElmIGxhc3QgbGV0dGVyIHdhcyBhIG1vdmUgY29tbWFuZCBhbmQgd2UgZ290IG5vIG5ldywgaXQgZGVmYXVsdHMgdG8gW0xdaW5lXHJcbiAgICAgIH1lbHNlIGlmKHMgPT0gJ00nKXtcclxuICAgICAgICBzID0gJ0wnXHJcbiAgICAgIH1lbHNlIGlmKHMgPT0gJ20nKXtcclxuICAgICAgICBzID0gJ2wnXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFyci5wdXNoKHBhdGhIYW5kbGVyc1tzXS5jYWxsKG51bGwsXHJcbiAgICAgICAgICBhcnJheS5zbGljZShpbmRleCwgKGluZGV4ID0gaW5kZXggKyBwYXJhbUNudFtzLnRvVXBwZXJDYXNlKCldKSkubWFwKHBhcnNlRmxvYXQpLFxyXG4gICAgICAgICAgcCwgcDBcclxuICAgICAgICApXHJcbiAgICAgIClcclxuXHJcbiAgICB9d2hpbGUobGVuID4gaW5kZXgpXHJcblxyXG4gICAgcmV0dXJuIGFyclxyXG5cclxuICB9XHJcbiAgLy8gR2V0IGJvdW5kaW5nIGJveCBvZiBwYXRoXHJcbiwgYmJveDogZnVuY3Rpb24oKSB7XHJcbiAgICBTVkcucGFyc2VyLnBhdGguc2V0QXR0cmlidXRlKCdkJywgdGhpcy50b1N0cmluZygpKVxyXG5cclxuICAgIHJldHVybiBTVkcucGFyc2VyLnBhdGguZ2V0QkJveCgpXHJcbiAgfVxyXG5cclxufSlcclxuXG4vLyBNb2R1bGUgZm9yIHVuaXQgY29udmVydGlvbnNcclxuU1ZHLk51bWJlciA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemVcclxuICBjcmVhdGU6IGZ1bmN0aW9uKHZhbHVlLCB1bml0KSB7XHJcbiAgICAvLyBpbml0aWFsaXplIGRlZmF1bHRzXHJcbiAgICB0aGlzLnZhbHVlID0gMFxyXG4gICAgdGhpcy51bml0ICA9IHVuaXQgfHwgJydcclxuXHJcbiAgICAvLyBwYXJzZSB2YWx1ZVxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgLy8gZW5zdXJlIGEgdmFsaWQgbnVtZXJpYyB2YWx1ZVxyXG4gICAgICB0aGlzLnZhbHVlID0gaXNOYU4odmFsdWUpID8gMCA6ICFpc0Zpbml0ZSh2YWx1ZSkgPyAodmFsdWUgPCAwID8gLTMuNGUrMzggOiArMy40ZSszOCkgOiB2YWx1ZVxyXG5cclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICB1bml0ID0gdmFsdWUubWF0Y2goU1ZHLnJlZ2V4Lm51bWJlckFuZFVuaXQpXHJcblxyXG4gICAgICBpZiAodW5pdCkge1xyXG4gICAgICAgIC8vIG1ha2UgdmFsdWUgbnVtZXJpY1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBwYXJzZUZsb2F0KHVuaXRbMV0pXHJcblxyXG4gICAgICAgIC8vIG5vcm1hbGl6ZVxyXG4gICAgICAgIGlmICh1bml0WzVdID09ICclJylcclxuICAgICAgICAgIHRoaXMudmFsdWUgLz0gMTAwXHJcbiAgICAgICAgZWxzZSBpZiAodW5pdFs1XSA9PSAncycpXHJcbiAgICAgICAgICB0aGlzLnZhbHVlICo9IDEwMDBcclxuXHJcbiAgICAgICAgLy8gc3RvcmUgdW5pdFxyXG4gICAgICAgIHRoaXMudW5pdCA9IHVuaXRbNV1cclxuICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFNWRy5OdW1iZXIpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWUudmFsdWVPZigpXHJcbiAgICAgICAgdGhpcy51bml0ICA9IHZhbHVlLnVuaXRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgLy8gQWRkIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIFN0cmluZ2FsaXplXHJcbiAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgdGhpcy51bml0ID09ICclJyA/XHJcbiAgICAgICAgICB+fih0aGlzLnZhbHVlICogMWU4KSAvIDFlNjpcclxuICAgICAgICB0aGlzLnVuaXQgPT0gJ3MnID9cclxuICAgICAgICAgIHRoaXMudmFsdWUgLyAxZTMgOlxyXG4gICAgICAgICAgdGhpcy52YWx1ZVxyXG4gICAgICApICsgdGhpcy51bml0XHJcbiAgICB9XHJcbiAgLCB0b0pTT046IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpXHJcbiAgICB9XHJcbiAgLCAvLyBDb252ZXJ0IHRvIHByaW1pdGl2ZVxyXG4gICAgdmFsdWVPZjogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlXHJcbiAgICB9XHJcbiAgICAvLyBBZGQgbnVtYmVyXHJcbiAgLCBwbHVzOiBmdW5jdGlvbihudW1iZXIpIHtcclxuICAgICAgbnVtYmVyID0gbmV3IFNWRy5OdW1iZXIobnVtYmVyKVxyXG4gICAgICByZXR1cm4gbmV3IFNWRy5OdW1iZXIodGhpcyArIG51bWJlciwgdGhpcy51bml0IHx8IG51bWJlci51bml0KVxyXG4gICAgfVxyXG4gICAgLy8gU3VidHJhY3QgbnVtYmVyXHJcbiAgLCBtaW51czogZnVuY3Rpb24obnVtYmVyKSB7XHJcbiAgICAgIG51bWJlciA9IG5ldyBTVkcuTnVtYmVyKG51bWJlcilcclxuICAgICAgcmV0dXJuIG5ldyBTVkcuTnVtYmVyKHRoaXMgLSBudW1iZXIsIHRoaXMudW5pdCB8fCBudW1iZXIudW5pdClcclxuICAgIH1cclxuICAgIC8vIE11bHRpcGx5IG51bWJlclxyXG4gICwgdGltZXM6IGZ1bmN0aW9uKG51bWJlcikge1xyXG4gICAgICBudW1iZXIgPSBuZXcgU1ZHLk51bWJlcihudW1iZXIpXHJcbiAgICAgIHJldHVybiBuZXcgU1ZHLk51bWJlcih0aGlzICogbnVtYmVyLCB0aGlzLnVuaXQgfHwgbnVtYmVyLnVuaXQpXHJcbiAgICB9XHJcbiAgICAvLyBEaXZpZGUgbnVtYmVyXHJcbiAgLCBkaXZpZGU6IGZ1bmN0aW9uKG51bWJlcikge1xyXG4gICAgICBudW1iZXIgPSBuZXcgU1ZHLk51bWJlcihudW1iZXIpXHJcbiAgICAgIHJldHVybiBuZXcgU1ZHLk51bWJlcih0aGlzIC8gbnVtYmVyLCB0aGlzLnVuaXQgfHwgbnVtYmVyLnVuaXQpXHJcbiAgICB9XHJcbiAgICAvLyBDb252ZXJ0IHRvIGRpZmZlcmVudCB1bml0XHJcbiAgLCB0bzogZnVuY3Rpb24odW5pdCkge1xyXG4gICAgICB2YXIgbnVtYmVyID0gbmV3IFNWRy5OdW1iZXIodGhpcylcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdW5pdCA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgbnVtYmVyLnVuaXQgPSB1bml0XHJcblxyXG4gICAgICByZXR1cm4gbnVtYmVyXHJcbiAgICB9XHJcbiAgICAvLyBNYWtlIG51bWJlciBtb3JwaGFibGVcclxuICAsIG1vcnBoOiBmdW5jdGlvbihudW1iZXIpIHtcclxuICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBTVkcuTnVtYmVyKG51bWJlcilcclxuXHJcbiAgICAgIGlmKG51bWJlci5yZWxhdGl2ZSkge1xyXG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24udmFsdWUgKz0gdGhpcy52YWx1ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gR2V0IG1vcnBoZWQgbnVtYmVyIGF0IGdpdmVuIHBvc2l0aW9uXHJcbiAgLCBhdDogZnVuY3Rpb24ocG9zKSB7XHJcbiAgICAgIC8vIE1ha2Ugc3VyZSBhIGRlc3RpbmF0aW9uIGlzIGRlZmluZWRcclxuICAgICAgaWYgKCF0aGlzLmRlc3RpbmF0aW9uKSByZXR1cm4gdGhpc1xyXG5cclxuICAgICAgLy8gR2VuZXJhdGUgbmV3IG1vcnBoZWQgbnVtYmVyXHJcbiAgICAgIHJldHVybiBuZXcgU1ZHLk51bWJlcih0aGlzLmRlc3RpbmF0aW9uKVxyXG4gICAgICAgICAgLm1pbnVzKHRoaXMpXHJcbiAgICAgICAgICAudGltZXMocG9zKVxyXG4gICAgICAgICAgLnBsdXModGhpcylcclxuICAgIH1cclxuXHJcbiAgfVxyXG59KVxyXG5cblxyXG5TVkcuRWxlbWVudCA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogZnVuY3Rpb24obm9kZSkge1xyXG4gICAgLy8gbWFrZSBzdHJva2UgdmFsdWUgYWNjZXNzaWJsZSBkeW5hbWljYWxseVxyXG4gICAgdGhpcy5fc3Ryb2tlID0gU1ZHLmRlZmF1bHRzLmF0dHJzLnN0cm9rZVxyXG4gICAgdGhpcy5fZXZlbnQgPSBudWxsXHJcbiAgICB0aGlzLl9ldmVudHMgPSB7fVxyXG5cclxuICAgIC8vIGluaXRpYWxpemUgZGF0YSBvYmplY3RcclxuICAgIHRoaXMuZG9tID0ge31cclxuXHJcbiAgICAvLyBjcmVhdGUgY2lyY3VsYXIgcmVmZXJlbmNlXHJcbiAgICBpZiAodGhpcy5ub2RlID0gbm9kZSkge1xyXG4gICAgICB0aGlzLnR5cGUgPSBub2RlLm5vZGVOYW1lXHJcbiAgICAgIHRoaXMubm9kZS5pbnN0YW5jZSA9IHRoaXNcclxuICAgICAgdGhpcy5fZXZlbnRzID0gbm9kZS5fZXZlbnRzIHx8IHt9XHJcblxyXG4gICAgICAvLyBzdG9yZSBjdXJyZW50IGF0dHJpYnV0ZSB2YWx1ZVxyXG4gICAgICB0aGlzLl9zdHJva2UgPSBub2RlLmdldEF0dHJpYnV0ZSgnc3Ryb2tlJykgfHwgdGhpcy5fc3Ryb2tlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgY2xhc3MgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gTW92ZSBvdmVyIHgtYXhpc1xyXG4gICAgeDogZnVuY3Rpb24oeCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCd4JywgeClcclxuICAgIH1cclxuICAgIC8vIE1vdmUgb3ZlciB5LWF4aXNcclxuICAsIHk6IGZ1bmN0aW9uKHkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cigneScsIHkpXHJcbiAgICB9XHJcbiAgICAvLyBNb3ZlIGJ5IGNlbnRlciBvdmVyIHgtYXhpc1xyXG4gICwgY3g6IGZ1bmN0aW9uKHgpIHtcclxuICAgICAgcmV0dXJuIHggPT0gbnVsbCA/IHRoaXMueCgpICsgdGhpcy53aWR0aCgpIC8gMiA6IHRoaXMueCh4IC0gdGhpcy53aWR0aCgpIC8gMilcclxuICAgIH1cclxuICAgIC8vIE1vdmUgYnkgY2VudGVyIG92ZXIgeS1heGlzXHJcbiAgLCBjeTogZnVuY3Rpb24oeSkge1xyXG4gICAgICByZXR1cm4geSA9PSBudWxsID8gdGhpcy55KCkgKyB0aGlzLmhlaWdodCgpIC8gMiA6IHRoaXMueSh5IC0gdGhpcy5oZWlnaHQoKSAvIDIpXHJcbiAgICB9XHJcbiAgICAvLyBNb3ZlIGVsZW1lbnQgdG8gZ2l2ZW4geCBhbmQgeSB2YWx1ZXNcclxuICAsIG1vdmU6IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMueCh4KS55KHkpXHJcbiAgICB9XHJcbiAgICAvLyBNb3ZlIGVsZW1lbnQgYnkgaXRzIGNlbnRlclxyXG4gICwgY2VudGVyOiBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmN4KHgpLmN5KHkpXHJcbiAgICB9XHJcbiAgICAvLyBTZXQgd2lkdGggb2YgZWxlbWVudFxyXG4gICwgd2lkdGg6IGZ1bmN0aW9uKHdpZHRoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ3dpZHRoJywgd2lkdGgpXHJcbiAgICB9XHJcbiAgICAvLyBTZXQgaGVpZ2h0IG9mIGVsZW1lbnRcclxuICAsIGhlaWdodDogZnVuY3Rpb24oaGVpZ2h0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcclxuICAgIH1cclxuICAgIC8vIFNldCBlbGVtZW50IHNpemUgdG8gZ2l2ZW4gd2lkdGggYW5kIGhlaWdodFxyXG4gICwgc2l6ZTogZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xyXG4gICAgICB2YXIgcCA9IHByb3BvcnRpb25hbFNpemUodGhpcywgd2lkdGgsIGhlaWdodClcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICAgICAgLndpZHRoKG5ldyBTVkcuTnVtYmVyKHAud2lkdGgpKVxyXG4gICAgICAgIC5oZWlnaHQobmV3IFNWRy5OdW1iZXIocC5oZWlnaHQpKVxyXG4gICAgfVxyXG4gICAgLy8gQ2xvbmUgZWxlbWVudFxyXG4gICwgY2xvbmU6IGZ1bmN0aW9uKHBhcmVudCkge1xyXG4gICAgICAvLyB3cml0ZSBkb20gZGF0YSB0byB0aGUgZG9tIHNvIHRoZSBjbG9uZSBjYW4gcGlja3VwIHRoZSBkYXRhXHJcbiAgICAgIHRoaXMud3JpdGVEYXRhVG9Eb20oKVxyXG5cclxuICAgICAgLy8gY2xvbmUgZWxlbWVudCBhbmQgYXNzaWduIG5ldyBpZFxyXG4gICAgICB2YXIgY2xvbmUgPSBhc3NpZ25OZXdJZCh0aGlzLm5vZGUuY2xvbmVOb2RlKHRydWUpKVxyXG5cclxuICAgICAgLy8gaW5zZXJ0IHRoZSBjbG9uZSBpbiB0aGUgZ2l2ZW4gcGFyZW50IG9yIGFmdGVyIG15c2VsZlxyXG4gICAgICBpZihwYXJlbnQpIHBhcmVudC5hZGQoY2xvbmUpXHJcbiAgICAgIGVsc2UgdGhpcy5hZnRlcihjbG9uZSlcclxuXHJcbiAgICAgIHJldHVybiBjbG9uZVxyXG4gICAgfVxyXG4gICAgLy8gUmVtb3ZlIGVsZW1lbnRcclxuICAsIHJlbW92ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmVudCgpKVxyXG4gICAgICAgIHRoaXMucGFyZW50KCkucmVtb3ZlRWxlbWVudCh0aGlzKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIFJlcGxhY2UgZWxlbWVudFxyXG4gICwgcmVwbGFjZTogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB0aGlzLmFmdGVyKGVsZW1lbnQpLnJlbW92ZSgpXHJcblxyXG4gICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgfVxyXG4gICAgLy8gQWRkIGVsZW1lbnQgdG8gZ2l2ZW4gY29udGFpbmVyIGFuZCByZXR1cm4gc2VsZlxyXG4gICwgYWRkVG86IGZ1bmN0aW9uKHBhcmVudCkge1xyXG4gICAgICByZXR1cm4gcGFyZW50LnB1dCh0aGlzKVxyXG4gICAgfVxyXG4gICAgLy8gQWRkIGVsZW1lbnQgdG8gZ2l2ZW4gY29udGFpbmVyIGFuZCByZXR1cm4gY29udGFpbmVyXHJcbiAgLCBwdXRJbjogZnVuY3Rpb24ocGFyZW50KSB7XHJcbiAgICAgIHJldHVybiBwYXJlbnQuYWRkKHRoaXMpXHJcbiAgICB9XHJcbiAgICAvLyBHZXQgLyBzZXQgaWRcclxuICAsIGlkOiBmdW5jdGlvbihpZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCdpZCcsIGlkKVxyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIHBvaW50IGluc2lkZSB0aGUgYm91bmRpbmcgYm94IG9mIHRoZSBlbGVtZW50XHJcbiAgLCBpbnNpZGU6IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgICAgdmFyIGJveCA9IHRoaXMuYmJveCgpXHJcblxyXG4gICAgICByZXR1cm4geCA+IGJveC54XHJcbiAgICAgICAgICAmJiB5ID4gYm94LnlcclxuICAgICAgICAgICYmIHggPCBib3gueCArIGJveC53aWR0aFxyXG4gICAgICAgICAgJiYgeSA8IGJveC55ICsgYm94LmhlaWdodFxyXG4gICAgfVxyXG4gICAgLy8gU2hvdyBlbGVtZW50XHJcbiAgLCBzaG93OiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCAnJylcclxuICAgIH1cclxuICAgIC8vIEhpZGUgZWxlbWVudFxyXG4gICwgaGlkZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKVxyXG4gICAgfVxyXG4gICAgLy8gSXMgZWxlbWVudCB2aXNpYmxlP1xyXG4gICwgdmlzaWJsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0eWxlKCdkaXNwbGF5JykgIT0gJ25vbmUnXHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gaWQgb24gc3RyaW5nIGNvbnZlcnNpb25cclxuICAsIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cignaWQnKVxyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJuIGFycmF5IG9mIGNsYXNzZXMgb24gdGhlIG5vZGVcclxuICAsIGNsYXNzZXM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgYXR0ciA9IHRoaXMuYXR0cignY2xhc3MnKVxyXG5cclxuICAgICAgcmV0dXJuIGF0dHIgPT0gbnVsbCA/IFtdIDogYXR0ci50cmltKCkuc3BsaXQoU1ZHLnJlZ2V4LmRlbGltaXRlcilcclxuICAgIH1cclxuICAgIC8vIFJldHVybiB0cnVlIGlmIGNsYXNzIGV4aXN0cyBvbiB0aGUgbm9kZSwgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgLCBoYXNDbGFzczogZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jbGFzc2VzKCkuaW5kZXhPZihuYW1lKSAhPSAtMVxyXG4gICAgfVxyXG4gICAgLy8gQWRkIGNsYXNzIHRvIHRoZSBub2RlXHJcbiAgLCBhZGRDbGFzczogZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICBpZiAoIXRoaXMuaGFzQ2xhc3MobmFtZSkpIHtcclxuICAgICAgICB2YXIgYXJyYXkgPSB0aGlzLmNsYXNzZXMoKVxyXG4gICAgICAgIGFycmF5LnB1c2gobmFtZSlcclxuICAgICAgICB0aGlzLmF0dHIoJ2NsYXNzJywgYXJyYXkuam9pbignICcpKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gUmVtb3ZlIGNsYXNzIGZyb20gdGhlIG5vZGVcclxuICAsIHJlbW92ZUNsYXNzOiBmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgIGlmICh0aGlzLmhhc0NsYXNzKG5hbWUpKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyKCdjbGFzcycsIHRoaXMuY2xhc3NlcygpLmZpbHRlcihmdW5jdGlvbihjKSB7XHJcbiAgICAgICAgICByZXR1cm4gYyAhPSBuYW1lXHJcbiAgICAgICAgfSkuam9pbignICcpKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gVG9nZ2xlIHRoZSBwcmVzZW5jZSBvZiBhIGNsYXNzIG9uIHRoZSBub2RlXHJcbiAgLCB0b2dnbGVDbGFzczogZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5oYXNDbGFzcyhuYW1lKSA/IHRoaXMucmVtb3ZlQ2xhc3MobmFtZSkgOiB0aGlzLmFkZENsYXNzKG5hbWUpXHJcbiAgICB9XHJcbiAgICAvLyBHZXQgcmVmZXJlbmNlZCBlbGVtZW50IGZvcm0gYXR0cmlidXRlIHZhbHVlXHJcbiAgLCByZWZlcmVuY2U6IGZ1bmN0aW9uKGF0dHIpIHtcclxuICAgICAgcmV0dXJuIFNWRy5nZXQodGhpcy5hdHRyKGF0dHIpKVxyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJucyB0aGUgcGFyZW50IGVsZW1lbnQgaW5zdGFuY2VcclxuICAsIHBhcmVudDogZnVuY3Rpb24odHlwZSkge1xyXG4gICAgICB2YXIgcGFyZW50ID0gdGhpc1xyXG5cclxuICAgICAgLy8gY2hlY2sgZm9yIHBhcmVudFxyXG4gICAgICBpZighcGFyZW50Lm5vZGUucGFyZW50Tm9kZSkgcmV0dXJuIG51bGxcclxuXHJcbiAgICAgIC8vIGdldCBwYXJlbnQgZWxlbWVudFxyXG4gICAgICBwYXJlbnQgPSBTVkcuYWRvcHQocGFyZW50Lm5vZGUucGFyZW50Tm9kZSlcclxuXHJcbiAgICAgIGlmKCF0eXBlKSByZXR1cm4gcGFyZW50XHJcblxyXG4gICAgICAvLyBsb29wIHRyb3VnaCBhbmNlc3RvcnMgaWYgdHlwZSBpcyBnaXZlblxyXG4gICAgICB3aGlsZShwYXJlbnQgJiYgcGFyZW50Lm5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuU1ZHRWxlbWVudCl7XHJcbiAgICAgICAgaWYodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50Lm1hdGNoZXModHlwZSkgOiBwYXJlbnQgaW5zdGFuY2VvZiB0eXBlKSByZXR1cm4gcGFyZW50XHJcbiAgICAgICAgaWYoIXBhcmVudC5ub2RlLnBhcmVudE5vZGUgfHwgcGFyZW50Lm5vZGUucGFyZW50Tm9kZS5ub2RlTmFtZSA9PSAnI2RvY3VtZW50JyB8fCBwYXJlbnQubm9kZS5wYXJlbnROb2RlLm5vZGVOYW1lID09ICcjZG9jdW1lbnQtZnJhZ21lbnQnKSByZXR1cm4gbnVsbCAvLyAjNzU5LCAjNzIwXHJcbiAgICAgICAgcGFyZW50ID0gU1ZHLmFkb3B0KHBhcmVudC5ub2RlLnBhcmVudE5vZGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEdldCBwYXJlbnQgZG9jdW1lbnRcclxuICAsIGRvYzogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgU1ZHLkRvYyA/IHRoaXMgOiB0aGlzLnBhcmVudChTVkcuRG9jKVxyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuIGFycmF5IG9mIGFsbCBhbmNlc3RvcnMgb2YgZ2l2ZW4gdHlwZSB1cCB0byB0aGUgcm9vdCBzdmdcclxuICAsIHBhcmVudHM6IGZ1bmN0aW9uKHR5cGUpIHtcclxuICAgICAgdmFyIHBhcmVudHMgPSBbXSwgcGFyZW50ID0gdGhpc1xyXG5cclxuICAgICAgZG97XHJcbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudCh0eXBlKVxyXG4gICAgICAgIGlmKCFwYXJlbnQgfHwgIXBhcmVudC5ub2RlKSBicmVha1xyXG5cclxuICAgICAgICBwYXJlbnRzLnB1c2gocGFyZW50KVxyXG4gICAgICB9IHdoaWxlKHBhcmVudC5wYXJlbnQpXHJcblxyXG4gICAgICByZXR1cm4gcGFyZW50c1xyXG4gICAgfVxyXG4gICAgLy8gbWF0Y2hlcyB0aGUgZWxlbWVudCB2cyBhIGNzcyBzZWxlY3RvclxyXG4gICwgbWF0Y2hlczogZnVuY3Rpb24oc2VsZWN0b3Ipe1xyXG4gICAgICByZXR1cm4gbWF0Y2hlcyh0aGlzLm5vZGUsIHNlbGVjdG9yKVxyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJucyB0aGUgc3ZnIG5vZGUgdG8gY2FsbCBuYXRpdmUgc3ZnIG1ldGhvZHMgb24gaXRcclxuICAsIG5hdGl2ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5vZGVcclxuICAgIH1cclxuICAgIC8vIEltcG9ydCByYXcgc3ZnXHJcbiAgLCBzdmc6IGZ1bmN0aW9uKHN2Zykge1xyXG4gICAgICAvLyBjcmVhdGUgdGVtcG9yYXJ5IGhvbGRlclxyXG4gICAgICB2YXIgd2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpXHJcblxyXG4gICAgICAvLyBhY3QgYXMgYSBzZXR0ZXIgaWYgc3ZnIGlzIGdpdmVuXHJcbiAgICAgIGlmIChzdmcgJiYgdGhpcyBpbnN0YW5jZW9mIFNWRy5QYXJlbnQpIHtcclxuICAgICAgICAvLyBkdW1wIHJhdyBzdmdcclxuICAgICAgICB3ZWxsLmlubmVySFRNTCA9ICc8c3ZnPicgKyBzdmcucmVwbGFjZSgvXFxuLywgJycpLnJlcGxhY2UoLzwoW1xcdzotXSspKFtePF0rPylcXC8+L2csICc8JDEkMj48LyQxPicpICsgJzwvc3ZnPidcclxuXHJcbiAgICAgICAgLy8gdHJhbnNwbGFudCBub2Rlc1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IHdlbGwuZmlyc3RDaGlsZC5jaGlsZE5vZGVzLmxlbmd0aDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQod2VsbC5maXJzdENoaWxkLmZpcnN0Q2hpbGQpXHJcblxyXG4gICAgICAvLyBvdGhlcndpc2UgYWN0IGFzIGEgZ2V0dGVyXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gY3JlYXRlIGEgd3JhcHBpbmcgc3ZnIGVsZW1lbnQgaW4gY2FzZSBvZiBwYXJ0aWFsIGNvbnRlbnRcclxuICAgICAgICB3ZWxsLmFwcGVuZENoaWxkKHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpKVxyXG5cclxuICAgICAgICAvLyB3cml0ZSBzdmdqcyBkYXRhIHRvIHRoZSBkb21cclxuICAgICAgICB0aGlzLndyaXRlRGF0YVRvRG9tKClcclxuXHJcbiAgICAgICAgLy8gaW5zZXJ0IGEgY29weSBvZiB0aGlzIG5vZGVcclxuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQodGhpcy5ub2RlLmNsb25lTm9kZSh0cnVlKSlcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIHRhcmdldCBlbGVtZW50XHJcbiAgICAgICAgcmV0dXJuIHdlbGwuaW5uZXJIVE1MLnJlcGxhY2UoL148c3ZnPi8sICcnKS5yZXBsYWNlKC88XFwvc3ZnPiQvLCAnJylcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAvLyB3cml0ZSBzdmdqcyBkYXRhIHRvIHRoZSBkb21cclxuICAsIHdyaXRlRGF0YVRvRG9tOiBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgIC8vIGR1bXAgdmFyaWFibGVzIHJlY3Vyc2l2ZWx5XHJcbiAgICAgIGlmKHRoaXMuZWFjaCB8fCB0aGlzLmxpbmVzKXtcclxuICAgICAgICB2YXIgZm4gPSB0aGlzLmVhY2ggPyB0aGlzIDogdGhpcy5saW5lcygpO1xyXG4gICAgICAgIGZuLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgIHRoaXMud3JpdGVEYXRhVG9Eb20oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHJlbW92ZSBwcmV2aW91c2x5IHNldCBkYXRhXHJcbiAgICAgIHRoaXMubm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ3N2Z2pzOmRhdGEnKVxyXG5cclxuICAgICAgaWYoT2JqZWN0LmtleXModGhpcy5kb20pLmxlbmd0aClcclxuICAgICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdzdmdqczpkYXRhJywgSlNPTi5zdHJpbmdpZnkodGhpcy5kb20pKSAvLyBzZWUgIzQyOFxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAvLyBzZXQgZ2l2ZW4gZGF0YSB0byB0aGUgZWxlbWVudHMgZGF0YSBwcm9wZXJ0eVxyXG4gICwgc2V0RGF0YTogZnVuY3Rpb24obyl7XHJcbiAgICAgIHRoaXMuZG9tID0gb1xyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICwgaXM6IGZ1bmN0aW9uKG9iail7XHJcbiAgICAgIHJldHVybiBpcyh0aGlzLCBvYmopXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cblNWRy5lYXNpbmcgPSB7XHJcbiAgJy0nOiBmdW5jdGlvbihwb3Mpe3JldHVybiBwb3N9XHJcbiwgJzw+JzpmdW5jdGlvbihwb3Mpe3JldHVybiAtTWF0aC5jb3MocG9zICogTWF0aC5QSSkgLyAyICsgMC41fVxyXG4sICc+JzogZnVuY3Rpb24ocG9zKXtyZXR1cm4gIE1hdGguc2luKHBvcyAqIE1hdGguUEkgLyAyKX1cclxuLCAnPCc6IGZ1bmN0aW9uKHBvcyl7cmV0dXJuIC1NYXRoLmNvcyhwb3MgKiBNYXRoLlBJIC8gMikgKyAxfVxyXG59XHJcblxyXG5TVkcubW9ycGggPSBmdW5jdGlvbihwb3Mpe1xyXG4gIHJldHVybiBmdW5jdGlvbihmcm9tLCB0bykge1xyXG4gICAgcmV0dXJuIG5ldyBTVkcuTW9ycGhPYmooZnJvbSwgdG8pLmF0KHBvcylcclxuICB9XHJcbn1cclxuXHJcblNWRy5TaXR1YXRpb24gPSBTVkcuaW52ZW50KHtcclxuXHJcbiAgY3JlYXRlOiBmdW5jdGlvbihvKXtcclxuICAgIHRoaXMuaW5pdCA9IGZhbHNlXHJcbiAgICB0aGlzLnJldmVyc2VkID0gZmFsc2VcclxuICAgIHRoaXMucmV2ZXJzaW5nID0gZmFsc2VcclxuXHJcbiAgICB0aGlzLmR1cmF0aW9uID0gbmV3IFNWRy5OdW1iZXIoby5kdXJhdGlvbikudmFsdWVPZigpXHJcbiAgICB0aGlzLmRlbGF5ID0gbmV3IFNWRy5OdW1iZXIoby5kZWxheSkudmFsdWVPZigpXHJcblxyXG4gICAgdGhpcy5zdGFydCA9ICtuZXcgRGF0ZSgpICsgdGhpcy5kZWxheVxyXG4gICAgdGhpcy5maW5pc2ggPSB0aGlzLnN0YXJ0ICsgdGhpcy5kdXJhdGlvblxyXG4gICAgdGhpcy5lYXNlID0gby5lYXNlXHJcblxyXG4gICAgLy8gdGhpcy5sb29wIGlzIGluY3JlbWVudGVkIGZyb20gMCB0byB0aGlzLmxvb3BzXHJcbiAgICAvLyBpdCBpcyBhbHNvIGluY3JlbWVudGVkIHdoZW4gaW4gYW4gaW5maW5pdGUgbG9vcCAod2hlbiB0aGlzLmxvb3BzIGlzIHRydWUpXHJcbiAgICB0aGlzLmxvb3AgPSAwXHJcbiAgICB0aGlzLmxvb3BzID0gZmFsc2VcclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSB7XHJcbiAgICAgIC8vIGZ1bmN0aW9uVG9DYWxsOiBbbGlzdCBvZiBtb3JwaGFibGUgb2JqZWN0c11cclxuICAgICAgLy8gZS5nLiBtb3ZlOiBbU1ZHLk51bWJlciwgU1ZHLk51bWJlcl1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF0dHJzID0ge1xyXG4gICAgICAvLyBob2xkcyBhbGwgYXR0cmlidXRlcyB3aGljaCBhcmUgbm90IHJlcHJlc2VudGVkIGZyb20gYSBmdW5jdGlvbiBzdmcuanMgcHJvdmlkZXNcclxuICAgICAgLy8gZS5nLiBzb21lQXR0cjogU1ZHLk51bWJlclxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3R5bGVzID0ge1xyXG4gICAgICAvLyBob2xkcyBhbGwgc3R5bGVzIHdoaWNoIHNob3VsZCBiZSBhbmltYXRlZFxyXG4gICAgICAvLyBlLmcuIGZpbGwtY29sb3I6IFNWRy5Db2xvclxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudHJhbnNmb3JtcyA9IFtcclxuICAgICAgLy8gaG9sZHMgYWxsIHRyYW5zZm9ybWF0aW9ucyBhcyB0cmFuc2Zvcm1hdGlvbiBvYmplY3RzXHJcbiAgICAgIC8vIGUuZy4gW1NWRy5Sb3RhdGUsIFNWRy5UcmFuc2xhdGUsIFNWRy5NYXRyaXhdXHJcbiAgICBdXHJcblxyXG4gICAgdGhpcy5vbmNlID0ge1xyXG4gICAgICAvLyBmdW5jdGlvbnMgdG8gZmlyZSBhdCBhIHNwZWNpZmljIHBvc2l0aW9uXHJcbiAgICAgIC8vIGUuZy4gXCIwLjVcIjogZnVuY3Rpb24gZm9vKCl7fVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59KVxyXG5cclxuXHJcblNWRy5GWCA9IFNWRy5pbnZlbnQoe1xyXG5cclxuICBjcmVhdGU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuX3RhcmdldCA9IGVsZW1lbnRcclxuICAgIHRoaXMuc2l0dWF0aW9ucyA9IFtdXHJcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB0aGlzLnNpdHVhdGlvbiA9IG51bGxcclxuICAgIHRoaXMucGF1c2VkID0gZmFsc2VcclxuICAgIHRoaXMubGFzdFBvcyA9IDBcclxuICAgIHRoaXMucG9zID0gMFxyXG4gICAgLy8gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIGFuIGFuaW1hdGlvbiBpcyBpdHMgcG9zaXRpb24gaW4gdGhlIGNvbnRleHQgb2YgaXRzIGNvbXBsZXRlIGR1cmF0aW9uIChpbmNsdWRpbmcgZGVsYXkgYW5kIGxvb3BzKVxyXG4gICAgLy8gV2hlbiBwZXJmb3JtaW5nIGEgZGVsYXksIGFic1BvcyBpcyBiZWxvdyAwIGFuZCB3aGVuIHBlcmZvcm1pbmcgYSBsb29wLCBpdHMgdmFsdWUgaXMgYWJvdmUgMVxyXG4gICAgdGhpcy5hYnNQb3MgPSAwXHJcbiAgICB0aGlzLl9zcGVlZCA9IDFcclxuICB9XHJcblxyXG4sIGV4dGVuZDoge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0cyBvciByZXR1cm5zIHRoZSB0YXJnZXQgb2YgdGhpcyBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBvIG9iamVjdCB8fCBudW1iZXIgSW4gY2FzZSBvZiBPYmplY3QgaXQgaG9sZHMgYWxsIHBhcmFtZXRlcnMuIEluIGNhc2Ugb2YgbnVtYmVyIGl0cyB0aGUgZHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIGVhc2UgZnVuY3Rpb24gfHwgc3RyaW5nIEZ1bmN0aW9uIHdoaWNoIHNob3VsZCBiZSB1c2VkIGZvciBlYXNpbmcgb3IgZWFzaW5nIGtleXdvcmRcclxuICAgICAqIEBwYXJhbSBkZWxheSBOdW1iZXIgaW5kaWNhdGluZyB0aGUgZGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gc3RhcnRzXHJcbiAgICAgKiBAcmV0dXJuIHRhcmdldCB8fCB0aGlzXHJcbiAgICAgKi9cclxuICAgIGFuaW1hdGU6IGZ1bmN0aW9uKG8sIGVhc2UsIGRlbGF5KXtcclxuXHJcbiAgICAgIGlmKHR5cGVvZiBvID09ICdvYmplY3QnKXtcclxuICAgICAgICBlYXNlID0gby5lYXNlXHJcbiAgICAgICAgZGVsYXkgPSBvLmRlbGF5XHJcbiAgICAgICAgbyA9IG8uZHVyYXRpb25cclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHNpdHVhdGlvbiA9IG5ldyBTVkcuU2l0dWF0aW9uKHtcclxuICAgICAgICBkdXJhdGlvbjogbyB8fCAxMDAwLFxyXG4gICAgICAgIGRlbGF5OiBkZWxheSB8fCAwLFxyXG4gICAgICAgIGVhc2U6IFNWRy5lYXNpbmdbZWFzZSB8fCAnLSddIHx8IGVhc2VcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHRoaXMucXVldWUoc2l0dWF0aW9uKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHMgYSBkZWxheSBiZWZvcmUgdGhlIG5leHQgZWxlbWVudCBvZiB0aGUgcXVldWUgaXMgY2FsbGVkXHJcbiAgICAgKiBAcGFyYW0gZGVsYXkgRHVyYXRpb24gb2YgZGVsYXkgaW4gbWlsbGlzZWNvbmRzXHJcbiAgICAgKiBAcmV0dXJuIHRoaXMudGFyZ2V0KClcclxuICAgICAqL1xyXG4gICwgZGVsYXk6IGZ1bmN0aW9uKGRlbGF5KXtcclxuICAgICAgLy8gVGhlIGRlbGF5IGlzIHBlcmZvcm1lZCBieSBhbiBlbXB0eSBzaXR1YXRpb24gd2l0aCBpdHMgZHVyYXRpb25cclxuICAgICAgLy8gYXR0cmlidXRlIHNldCB0byB0aGUgZHVyYXRpb24gb2YgdGhlIGRlbGF5XHJcbiAgICAgIHZhciBzaXR1YXRpb24gPSBuZXcgU1ZHLlNpdHVhdGlvbih7XHJcbiAgICAgICAgZHVyYXRpb246IGRlbGF5LFxyXG4gICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICAgIGVhc2U6IFNWRy5lYXNpbmdbJy0nXVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMucXVldWUoc2l0dWF0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0cyBvciByZXR1cm5zIHRoZSB0YXJnZXQgb2YgdGhpcyBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBudWxsIHx8IHRhcmdldCBTVkcuRWxlbWVudCB3aGljaCBzaG91bGQgYmUgc2V0IGFzIG5ldyB0YXJnZXRcclxuICAgICAqIEByZXR1cm4gdGFyZ2V0IHx8IHRoaXNcclxuICAgICAqL1xyXG4gICwgdGFyZ2V0OiBmdW5jdGlvbih0YXJnZXQpe1xyXG4gICAgICBpZih0YXJnZXQgJiYgdGFyZ2V0IGluc3RhbmNlb2YgU1ZHLkVsZW1lbnQpe1xyXG4gICAgICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldFxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLl90YXJnZXRcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm5zIHRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBhdCBhIGdpdmVuIHRpbWVcclxuICAsIHRpbWVUb0Fic1BvczogZnVuY3Rpb24odGltZXN0YW1wKXtcclxuICAgICAgcmV0dXJuICh0aW1lc3RhbXAgLSB0aGlzLnNpdHVhdGlvbi5zdGFydCkgLyAodGhpcy5zaXR1YXRpb24uZHVyYXRpb24vdGhpcy5fc3BlZWQpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJucyB0aGUgdGltZXN0YW1wIGZyb20gYSBnaXZlbiBhYnNvbHV0ZSBwb3NpdG9uXHJcbiAgLCBhYnNQb3NUb1RpbWU6IGZ1bmN0aW9uKGFic1Bvcyl7XHJcbiAgICAgIHJldHVybiB0aGlzLnNpdHVhdGlvbi5kdXJhdGlvbi90aGlzLl9zcGVlZCAqIGFic1BvcyArIHRoaXMuc2l0dWF0aW9uLnN0YXJ0XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3RhcnRzIHRoZSBhbmltYXRpb25sb29wXHJcbiAgLCBzdGFydEFuaW1GcmFtZTogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5zdG9wQW5pbUZyYW1lKClcclxuICAgICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXsgdGhpcy5zdGVwKCkgfS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhbmNlbHMgdGhlIGFuaW1hdGlvbmZyYW1lXHJcbiAgLCBzdG9wQW5pbUZyYW1lOiBmdW5jdGlvbigpe1xyXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBraWNrcyBvZmYgdGhlIGFuaW1hdGlvbiAtIG9ubHkgZG9lcyBzb21ldGhpbmcgd2hlbiB0aGUgcXVldWUgaXMgY3VycmVudGx5IG5vdCBhY3RpdmUgYW5kIGF0IGxlYXN0IG9uZSBzaXR1YXRpb24gaXMgc2V0XHJcbiAgLCBzdGFydDogZnVuY3Rpb24oKXtcclxuICAgICAgLy8gZG9udCBzdGFydCBpZiBhbHJlYWR5IHN0YXJ0ZWRcclxuICAgICAgaWYoIXRoaXMuYWN0aXZlICYmIHRoaXMuc2l0dWF0aW9uKXtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLnN0YXJ0Q3VycmVudCgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3RhcnQgdGhlIGN1cnJlbnQgc2l0dWF0aW9uXHJcbiAgLCBzdGFydEN1cnJlbnQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuc2l0dWF0aW9uLnN0YXJ0ID0gK25ldyBEYXRlICsgdGhpcy5zaXR1YXRpb24uZGVsYXkvdGhpcy5fc3BlZWRcclxuICAgICAgdGhpcy5zaXR1YXRpb24uZmluaXNoID0gdGhpcy5zaXR1YXRpb24uc3RhcnQgKyB0aGlzLnNpdHVhdGlvbi5kdXJhdGlvbi90aGlzLl9zcGVlZFxyXG4gICAgICByZXR1cm4gdGhpcy5pbml0QW5pbWF0aW9ucygpLnN0ZXAoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkcyBhIGZ1bmN0aW9uIC8gU2l0dWF0aW9uIHRvIHRoZSBhbmltYXRpb24gcXVldWVcclxuICAgICAqIEBwYXJhbSBmbiBmdW5jdGlvbiAvIHNpdHVhdGlvbiB0byBhZGRcclxuICAgICAqIEByZXR1cm4gdGhpc1xyXG4gICAgICovXHJcbiAgLCBxdWV1ZTogZnVuY3Rpb24oZm4pe1xyXG4gICAgICBpZih0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyB8fCBmbiBpbnN0YW5jZW9mIFNWRy5TaXR1YXRpb24pXHJcbiAgICAgICAgdGhpcy5zaXR1YXRpb25zLnB1c2goZm4pXHJcblxyXG4gICAgICBpZighdGhpcy5zaXR1YXRpb24pIHRoaXMuc2l0dWF0aW9uID0gdGhpcy5zaXR1YXRpb25zLnNoaWZ0KClcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwdWxscyBuZXh0IGVsZW1lbnQgZnJvbSB0aGUgcXVldWUgYW5kIGV4ZWN1dGUgaXRcclxuICAgICAqIEByZXR1cm4gdGhpc1xyXG4gICAgICovXHJcbiAgLCBkZXF1ZXVlOiBmdW5jdGlvbigpe1xyXG4gICAgICAvLyBzdG9wIGN1cnJlbnQgYW5pbWF0aW9uXHJcbiAgICAgIHRoaXMuc3RvcCgpXHJcblxyXG4gICAgICAvLyBnZXQgbmV4dCBhbmltYXRpb24gZnJvbSBxdWV1ZVxyXG4gICAgICB0aGlzLnNpdHVhdGlvbiA9IHRoaXMuc2l0dWF0aW9ucy5zaGlmdCgpXHJcblxyXG4gICAgICBpZih0aGlzLnNpdHVhdGlvbil7XHJcbiAgICAgICAgaWYodGhpcy5zaXR1YXRpb24gaW5zdGFuY2VvZiBTVkcuU2l0dWF0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLnN0YXJ0KClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gSWYgaXQgaXMgbm90IGEgU1ZHLlNpdHVhdGlvbiwgdGhlbiBpdCBpcyBhIGZ1bmN0aW9uLCB3ZSBleGVjdXRlIGl0XHJcbiAgICAgICAgICB0aGlzLnNpdHVhdGlvbi5jYWxsKHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZXMgYWxsIGFuaW1hdGlvbnMgdG8gdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGVsZW1lbnRcclxuICAgIC8vIHRoaXMgaXMgaW1wb3J0YW50IHdoZW4gb25lIHByb3BlcnR5IGNvdWxkIGJlIGNoYW5nZWQgZnJvbSBhbm90aGVyIHByb3BlcnR5XHJcbiAgLCBpbml0QW5pbWF0aW9uczogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBpLCBqLCBzb3VyY2VcclxuICAgICAgdmFyIHMgPSB0aGlzLnNpdHVhdGlvblxyXG5cclxuICAgICAgaWYocy5pbml0KSByZXR1cm4gdGhpc1xyXG5cclxuICAgICAgZm9yKGkgaW4gcy5hbmltYXRpb25zKXtcclxuICAgICAgICBzb3VyY2UgPSB0aGlzLnRhcmdldCgpW2ldKClcclxuXHJcbiAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkoc291cmNlKSkge1xyXG4gICAgICAgICAgc291cmNlID0gW3NvdXJjZV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCFBcnJheS5pc0FycmF5KHMuYW5pbWF0aW9uc1tpXSkpIHtcclxuICAgICAgICAgIHMuYW5pbWF0aW9uc1tpXSA9IFtzLmFuaW1hdGlvbnNbaV1dXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2lmKHMuYW5pbWF0aW9uc1tpXS5sZW5ndGggPiBzb3VyY2UubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gIHNvdXJjZS5jb25jYXQgPSBzb3VyY2UuY29uY2F0KHMuYW5pbWF0aW9uc1tpXS5zbGljZShzb3VyY2UubGVuZ3RoLCBzLmFuaW1hdGlvbnNbaV0ubGVuZ3RoKSlcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgZm9yKGogPSBzb3VyY2UubGVuZ3RoOyBqLS07KSB7XHJcbiAgICAgICAgICAvLyBUaGUgY29uZGl0aW9uIGlzIGJlY2F1c2Ugc29tZSBtZXRob2RzIHJldHVybiBhIG5vcm1hbCBudW1iZXIgaW5zdGVhZFxyXG4gICAgICAgICAgLy8gb2YgYSBTVkcuTnVtYmVyXHJcbiAgICAgICAgICBpZihzLmFuaW1hdGlvbnNbaV1bal0gaW5zdGFuY2VvZiBTVkcuTnVtYmVyKVxyXG4gICAgICAgICAgICBzb3VyY2Vbal0gPSBuZXcgU1ZHLk51bWJlcihzb3VyY2Vbal0pXHJcblxyXG4gICAgICAgICAgcy5hbmltYXRpb25zW2ldW2pdID0gc291cmNlW2pdLm1vcnBoKHMuYW5pbWF0aW9uc1tpXVtqXSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvcihpIGluIHMuYXR0cnMpe1xyXG4gICAgICAgIHMuYXR0cnNbaV0gPSBuZXcgU1ZHLk1vcnBoT2JqKHRoaXMudGFyZ2V0KCkuYXR0cihpKSwgcy5hdHRyc1tpXSlcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yKGkgaW4gcy5zdHlsZXMpe1xyXG4gICAgICAgIHMuc3R5bGVzW2ldID0gbmV3IFNWRy5Nb3JwaE9iaih0aGlzLnRhcmdldCgpLnN0eWxlKGkpLCBzLnN0eWxlc1tpXSlcclxuICAgICAgfVxyXG5cclxuICAgICAgcy5pbml0aWFsVHJhbnNmb3JtYXRpb24gPSB0aGlzLnRhcmdldCgpLm1hdHJpeGlmeSgpXHJcblxyXG4gICAgICBzLmluaXQgPSB0cnVlXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgLCBjbGVhclF1ZXVlOiBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLnNpdHVhdGlvbnMgPSBbXVxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICwgY2xlYXJDdXJyZW50OiBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLnNpdHVhdGlvbiA9IG51bGxcclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8qKiBzdG9wcyB0aGUgYW5pbWF0aW9uIGltbWVkaWF0ZWx5XHJcbiAgICAgKiBAcGFyYW0ganVtcFRvRW5kIEEgQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gY29tcGxldGUgdGhlIGN1cnJlbnQgYW5pbWF0aW9uIGltbWVkaWF0ZWx5LlxyXG4gICAgICogQHBhcmFtIGNsZWFyUXVldWUgQSBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0byByZW1vdmUgcXVldWVkIGFuaW1hdGlvbiBhcyB3ZWxsLlxyXG4gICAgICogQHJldHVybiB0aGlzXHJcbiAgICAgKi9cclxuICAsIHN0b3A6IGZ1bmN0aW9uKGp1bXBUb0VuZCwgY2xlYXJRdWV1ZSl7XHJcbiAgICAgIHZhciBhY3RpdmUgPSB0aGlzLmFjdGl2ZVxyXG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICBpZihjbGVhclF1ZXVlKXtcclxuICAgICAgICB0aGlzLmNsZWFyUXVldWUoKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihqdW1wVG9FbmQgJiYgdGhpcy5zaXR1YXRpb24pe1xyXG4gICAgICAgIC8vIGluaXRpYWxpemUgdGhlIHNpdHVhdGlvbiBpZiBpdCB3YXMgbm90XHJcbiAgICAgICAgIWFjdGl2ZSAmJiB0aGlzLnN0YXJ0Q3VycmVudCgpXHJcbiAgICAgICAgdGhpcy5hdEVuZCgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc3RvcEFuaW1GcmFtZSgpXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5jbGVhckN1cnJlbnQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiByZXNldHMgdGhlIGVsZW1lbnQgdG8gdGhlIHN0YXRlIHdoZXJlIHRoZSBjdXJyZW50IGVsZW1lbnQgaGFzIHN0YXJ0ZWRcclxuICAgICAqIEByZXR1cm4gdGhpc1xyXG4gICAgICovXHJcbiAgLCByZXNldDogZnVuY3Rpb24oKXtcclxuICAgICAgaWYodGhpcy5zaXR1YXRpb24pe1xyXG4gICAgICAgIHZhciB0ZW1wID0gdGhpcy5zaXR1YXRpb25cclxuICAgICAgICB0aGlzLnN0b3AoKVxyXG4gICAgICAgIHRoaXMuc2l0dWF0aW9uID0gdGVtcFxyXG4gICAgICAgIHRoaXMuYXRTdGFydCgpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdG9wIHRoZSBjdXJyZW50bHktcnVubmluZyBhbmltYXRpb24sIHJlbW92ZSBhbGwgcXVldWVkIGFuaW1hdGlvbnMsIGFuZCBjb21wbGV0ZSBhbGwgYW5pbWF0aW9ucyBmb3IgdGhlIGVsZW1lbnQuXHJcbiAgLCBmaW5pc2g6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICB0aGlzLnN0b3AodHJ1ZSwgZmFsc2UpXHJcblxyXG4gICAgICB3aGlsZSh0aGlzLmRlcXVldWUoKS5zaXR1YXRpb24gJiYgdGhpcy5zdG9wKHRydWUsIGZhbHNlKSk7XHJcblxyXG4gICAgICB0aGlzLmNsZWFyUXVldWUoKS5jbGVhckN1cnJlbnQoKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgdGhlIGludGVybmFsIGFuaW1hdGlvbiBwb2ludGVyIGF0IHRoZSBzdGFydCBwb3NpdGlvbiwgYmVmb3JlIGFueSBsb29wcywgYW5kIHVwZGF0ZXMgdGhlIHZpc3VhbGlzYXRpb25cclxuICAsIGF0U3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdCgwLCB0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldCB0aGUgaW50ZXJuYWwgYW5pbWF0aW9uIHBvaW50ZXIgYXQgdGhlIGVuZCBwb3NpdGlvbiwgYWZ0ZXIgYWxsIHRoZSBsb29wcywgYW5kIHVwZGF0ZXMgdGhlIHZpc3VhbGlzYXRpb25cclxuICAsIGF0RW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMuc2l0dWF0aW9uLmxvb3BzID09PSB0cnVlKSB7XHJcbiAgICAgICAgLy8gSWYgaW4gYSBpbmZpbml0ZSBsb29wLCB3ZSBlbmQgdGhlIGN1cnJlbnQgaXRlcmF0aW9uXHJcbiAgICAgICAgdGhpcy5zaXR1YXRpb24ubG9vcHMgPSB0aGlzLnNpdHVhdGlvbi5sb29wICsgMVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZih0eXBlb2YgdGhpcy5zaXR1YXRpb24ubG9vcHMgPT0gJ251bWJlcicpIHtcclxuICAgICAgICAvLyBJZiBwZXJmb3JtaW5nIGEgZmluaXRlIG51bWJlciBvZiBsb29wcywgd2UgZ28gYWZ0ZXIgYWxsIHRoZSBsb29wc1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF0KHRoaXMuc2l0dWF0aW9uLmxvb3BzLCB0cnVlKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIElmIG5vIGxvb3BzLCB3ZSBqdXN0IGdvIGF0IHRoZSBlbmRcclxuICAgICAgICByZXR1cm4gdGhpcy5hdCgxLCB0cnVlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2V0IHRoZSBpbnRlcm5hbCBhbmltYXRpb24gcG9pbnRlciB0byB0aGUgc3BlY2lmaWVkIHBvc2l0aW9uIGFuZCB1cGRhdGVzIHRoZSB2aXN1YWxpc2F0aW9uXHJcbiAgICAvLyBpZiBpc0Fic1BvcyBpcyB0cnVlLCBwb3MgaXMgdHJlYXRlZCBhcyBhbiBhYnNvbHV0ZSBwb3NpdGlvblxyXG4gICwgYXQ6IGZ1bmN0aW9uKHBvcywgaXNBYnNQb3Mpe1xyXG4gICAgICB2YXIgZHVyRGl2U3BkID0gdGhpcy5zaXR1YXRpb24uZHVyYXRpb24vdGhpcy5fc3BlZWRcclxuXHJcbiAgICAgIHRoaXMuYWJzUG9zID0gcG9zXHJcbiAgICAgIC8vIElmIHBvcyBpcyBub3QgYW4gYWJzb2x1dGUgcG9zaXRpb24sIHdlIGNvbnZlcnQgaXQgaW50byBvbmVcclxuICAgICAgaWYgKCFpc0Fic1Bvcykge1xyXG4gICAgICAgIGlmICh0aGlzLnNpdHVhdGlvbi5yZXZlcnNlZCkgdGhpcy5hYnNQb3MgPSAxIC0gdGhpcy5hYnNQb3NcclxuICAgICAgICB0aGlzLmFic1BvcyArPSB0aGlzLnNpdHVhdGlvbi5sb29wXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2l0dWF0aW9uLnN0YXJ0ID0gK25ldyBEYXRlIC0gdGhpcy5hYnNQb3MgKiBkdXJEaXZTcGRcclxuICAgICAgdGhpcy5zaXR1YXRpb24uZmluaXNoID0gdGhpcy5zaXR1YXRpb24uc3RhcnQgKyBkdXJEaXZTcGRcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnN0ZXAodHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHMgb3IgcmV0dXJucyB0aGUgc3BlZWQgb2YgdGhlIGFuaW1hdGlvbnNcclxuICAgICAqIEBwYXJhbSBzcGVlZCBudWxsIHx8IE51bWJlciBUaGUgbmV3IHNwZWVkIG9mIHRoZSBhbmltYXRpb25zXHJcbiAgICAgKiBAcmV0dXJuIE51bWJlciB8fCB0aGlzXHJcbiAgICAgKi9cclxuICAsIHNwZWVkOiBmdW5jdGlvbihzcGVlZCl7XHJcbiAgICAgIGlmIChzcGVlZCA9PT0gMCkgcmV0dXJuIHRoaXMucGF1c2UoKVxyXG5cclxuICAgICAgaWYgKHNwZWVkKSB7XHJcbiAgICAgICAgdGhpcy5fc3BlZWQgPSBzcGVlZFxyXG4gICAgICAgIC8vIFdlIHVzZSBhbiBhYnNvbHV0ZSBwb3NpdGlvbiBoZXJlIHNvIHRoYXQgc3BlZWQgY2FuIGFmZmVjdCB0aGUgZGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb25cclxuICAgICAgICByZXR1cm4gdGhpcy5hdCh0aGlzLmFic1BvcywgdHJ1ZSlcclxuICAgICAgfSBlbHNlIHJldHVybiB0aGlzLl9zcGVlZFxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ha2UgbG9vcGFibGVcclxuICAsIGxvb3A6IGZ1bmN0aW9uKHRpbWVzLCByZXZlcnNlKSB7XHJcbiAgICAgIHZhciBjID0gdGhpcy5sYXN0KClcclxuXHJcbiAgICAgIC8vIHN0b3JlIHRvdGFsIGxvb3BzXHJcbiAgICAgIGMubG9vcHMgPSAodGltZXMgIT0gbnVsbCkgPyB0aW1lcyA6IHRydWVcclxuICAgICAgYy5sb29wID0gMFxyXG5cclxuICAgICAgaWYocmV2ZXJzZSkgYy5yZXZlcnNpbmcgPSB0cnVlXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcGF1c2VzIHRoZSBhbmltYXRpb25cclxuICAsIHBhdXNlOiBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLnBhdXNlZCA9IHRydWVcclxuICAgICAgdGhpcy5zdG9wQW5pbUZyYW1lKClcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdW5wYXVzZSB0aGUgYW5pbWF0aW9uXHJcbiAgLCBwbGF5OiBmdW5jdGlvbigpe1xyXG4gICAgICBpZighdGhpcy5wYXVzZWQpIHJldHVybiB0aGlzXHJcbiAgICAgIHRoaXMucGF1c2VkID0gZmFsc2VcclxuICAgICAgLy8gV2UgdXNlIGFuIGFic29sdXRlIHBvc2l0aW9uIGhlcmUgc28gdGhhdCB0aGUgZGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gY2FuIGJlIHBhdXNlZFxyXG4gICAgICByZXR1cm4gdGhpcy5hdCh0aGlzLmFic1BvcywgdHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHRvZ2dsZSBvciBzZXQgdGhlIGRpcmVjdGlvbiBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKiB0cnVlIHNldHMgZGlyZWN0aW9uIHRvIGJhY2t3YXJkcyB3aGlsZSBmYWxzZSBzZXRzIGl0IHRvIGZvcndhcmRzXHJcbiAgICAgKiBAcGFyYW0gcmV2ZXJzZWQgQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gcmV2ZXJzZSB0aGUgYW5pbWF0aW9uIG9yIG5vdCAoZGVmYXVsdDogdG9nZ2xlIHRoZSByZXZlcnNlIHN0YXR1cylcclxuICAgICAqIEByZXR1cm4gdGhpc1xyXG4gICAgICovXHJcbiAgLCByZXZlcnNlOiBmdW5jdGlvbihyZXZlcnNlZCl7XHJcbiAgICAgIHZhciBjID0gdGhpcy5sYXN0KClcclxuXHJcbiAgICAgIGlmKHR5cGVvZiByZXZlcnNlZCA9PSAndW5kZWZpbmVkJykgYy5yZXZlcnNlZCA9ICFjLnJldmVyc2VkXHJcbiAgICAgIGVsc2UgYy5yZXZlcnNlZCA9IHJldmVyc2VkXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgYSBmbG9hdCBmcm9tIDAtMSBpbmRpY2F0aW5nIHRoZSBwcm9ncmVzcyBvZiB0aGUgY3VycmVudCBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBlYXNlZCBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgcmV0dXJuZWQgcG9zaXRpb24gc2hvdWxkIGJlIGVhc2VkIG9yIG5vdFxyXG4gICAgICogQHJldHVybiBudW1iZXJcclxuICAgICAqL1xyXG4gICwgcHJvZ3Jlc3M6IGZ1bmN0aW9uKGVhc2VJdCl7XHJcbiAgICAgIHJldHVybiBlYXNlSXQgPyB0aGlzLnNpdHVhdGlvbi5lYXNlKHRoaXMucG9zKSA6IHRoaXMucG9zXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRzIGEgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIGN1cnJlbnQgYW5pbWF0aW9uIGlzIGZpbmlzaGVkXHJcbiAgICAgKiBAcGFyYW0gZm4gRnVuY3Rpb24gd2hpY2ggc2hvdWxkIGJlIGV4ZWN1dGVkIGFzIGNhbGxiYWNrXHJcbiAgICAgKiBAcmV0dXJuIG51bWJlclxyXG4gICAgICovXHJcbiAgLCBhZnRlcjogZnVuY3Rpb24oZm4pe1xyXG4gICAgICB2YXIgYyA9IHRoaXMubGFzdCgpXHJcbiAgICAgICAgLCB3cmFwcGVyID0gZnVuY3Rpb24gd3JhcHBlcihlKXtcclxuICAgICAgICAgICAgaWYoZS5kZXRhaWwuc2l0dWF0aW9uID09IGMpe1xyXG4gICAgICAgICAgICAgIGZuLmNhbGwodGhpcywgYylcclxuICAgICAgICAgICAgICB0aGlzLm9mZignZmluaXNoZWQuZngnLCB3cmFwcGVyKSAvLyBwcmV2ZW50IG1lbW9yeSBsZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudGFyZ2V0KCkub24oJ2ZpbmlzaGVkLmZ4Jywgd3JhcHBlcilcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLl9jYWxsU3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZHMgYSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgd2hlbmV2ZXIgb25lIGFuaW1hdGlvbiBzdGVwIGlzIHBlcmZvcm1lZFxyXG4gICwgZHVyaW5nOiBmdW5jdGlvbihmbil7XHJcbiAgICAgIHZhciBjID0gdGhpcy5sYXN0KClcclxuICAgICAgICAsIHdyYXBwZXIgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgaWYoZS5kZXRhaWwuc2l0dWF0aW9uID09IGMpe1xyXG4gICAgICAgICAgICAgIGZuLmNhbGwodGhpcywgZS5kZXRhaWwucG9zLCBTVkcubW9ycGgoZS5kZXRhaWwucG9zKSwgZS5kZXRhaWwuZWFzZWQsIGMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgIC8vIHNlZSBhYm92ZVxyXG4gICAgICB0aGlzLnRhcmdldCgpLm9mZignZHVyaW5nLmZ4Jywgd3JhcHBlcikub24oJ2R1cmluZy5meCcsIHdyYXBwZXIpXHJcblxyXG4gICAgICB0aGlzLmFmdGVyKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5vZmYoJ2R1cmluZy5meCcsIHdyYXBwZXIpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5fY2FsbFN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICAvLyBjYWxscyBhZnRlciBBTEwgYW5pbWF0aW9ucyBpbiB0aGUgcXVldWUgYXJlIGZpbmlzaGVkXHJcbiAgLCBhZnRlckFsbDogZnVuY3Rpb24oZm4pe1xyXG4gICAgICB2YXIgd3JhcHBlciA9IGZ1bmN0aW9uIHdyYXBwZXIoZSl7XHJcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcylcclxuICAgICAgICAgICAgdGhpcy5vZmYoJ2FsbGZpbmlzaGVkLmZ4Jywgd3JhcHBlcilcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgIC8vIHNlZSBhYm92ZVxyXG4gICAgICB0aGlzLnRhcmdldCgpLm9mZignYWxsZmluaXNoZWQuZngnLCB3cmFwcGVyKS5vbignYWxsZmluaXNoZWQuZngnLCB3cmFwcGVyKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuX2NhbGxTdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2FsbHMgb24gZXZlcnkgYW5pbWF0aW9uIHN0ZXAgZm9yIGFsbCBhbmltYXRpb25zXHJcbiAgLCBkdXJpbmdBbGw6IGZ1bmN0aW9uKGZuKXtcclxuICAgICAgdmFyIHdyYXBwZXIgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBlLmRldGFpbC5wb3MsIFNWRy5tb3JwaChlLmRldGFpbC5wb3MpLCBlLmRldGFpbC5lYXNlZCwgZS5kZXRhaWwuc2l0dWF0aW9uKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50YXJnZXQoKS5vZmYoJ2R1cmluZy5meCcsIHdyYXBwZXIpLm9uKCdkdXJpbmcuZngnLCB3cmFwcGVyKVxyXG5cclxuICAgICAgdGhpcy5hZnRlckFsbChmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMub2ZmKCdkdXJpbmcuZngnLCB3cmFwcGVyKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuX2NhbGxTdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICwgbGFzdDogZnVuY3Rpb24oKXtcclxuICAgICAgcmV0dXJuIHRoaXMuc2l0dWF0aW9ucy5sZW5ndGggPyB0aGlzLnNpdHVhdGlvbnNbdGhpcy5zaXR1YXRpb25zLmxlbmd0aC0xXSA6IHRoaXMuc2l0dWF0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkcyBvbmUgcHJvcGVydHkgdG8gdGhlIGFuaW1hdGlvbnNcclxuICAsIGFkZDogZnVuY3Rpb24obWV0aG9kLCBhcmdzLCB0eXBlKXtcclxuICAgICAgdGhpcy5sYXN0KClbdHlwZSB8fCAnYW5pbWF0aW9ucyddW21ldGhvZF0gPSBhcmdzXHJcbiAgICAgIHJldHVybiB0aGlzLl9jYWxsU3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBwZXJmb3JtIG9uZSBzdGVwIG9mIHRoZSBhbmltYXRpb25cclxuICAgICAqICBAcGFyYW0gaWdub3JlVGltZSBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0byBpZ25vcmUgdGltZSBhbmQgdXNlIHBvc2l0aW9uIGRpcmVjdGx5IG9yIHJlY2FsY3VsYXRlIHBvc2l0aW9uIGJhc2VkIG9uIHRpbWVcclxuICAgICAqICBAcmV0dXJuIHRoaXNcclxuICAgICAqL1xyXG4gICwgc3RlcDogZnVuY3Rpb24oaWdub3JlVGltZSl7XHJcblxyXG4gICAgICAvLyBjb252ZXJ0IGN1cnJlbnQgdGltZSB0byBhbiBhYnNvbHV0ZSBwb3NpdGlvblxyXG4gICAgICBpZighaWdub3JlVGltZSkgdGhpcy5hYnNQb3MgPSB0aGlzLnRpbWVUb0Fic1BvcygrbmV3IERhdGUpXHJcblxyXG4gICAgICAvLyBUaGlzIHBhcnQgY29udmVydCBhbiBhYnNvbHV0ZSBwb3NpdGlvbiB0byBhIHBvc2l0aW9uXHJcbiAgICAgIGlmKHRoaXMuc2l0dWF0aW9uLmxvb3BzICE9PSBmYWxzZSkge1xyXG4gICAgICAgIHZhciBhYnNQb3MsIGFic1Bvc0ludCwgbGFzdExvb3BcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIGFic29sdXRlIHBvc2l0aW9uIGlzIGJlbG93IDAsIHdlIGp1c3QgdHJlYXQgaXQgYXMgaWYgaXQgd2FzIDBcclxuICAgICAgICBhYnNQb3MgPSBNYXRoLm1heCh0aGlzLmFic1BvcywgMClcclxuICAgICAgICBhYnNQb3NJbnQgPSBNYXRoLmZsb29yKGFic1BvcylcclxuXHJcbiAgICAgICAgaWYodGhpcy5zaXR1YXRpb24ubG9vcHMgPT09IHRydWUgfHwgYWJzUG9zSW50IDwgdGhpcy5zaXR1YXRpb24ubG9vcHMpIHtcclxuICAgICAgICAgIHRoaXMucG9zID0gYWJzUG9zIC0gYWJzUG9zSW50XHJcbiAgICAgICAgICBsYXN0TG9vcCA9IHRoaXMuc2l0dWF0aW9uLmxvb3BcclxuICAgICAgICAgIHRoaXMuc2l0dWF0aW9uLmxvb3AgPSBhYnNQb3NJbnRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5hYnNQb3MgPSB0aGlzLnNpdHVhdGlvbi5sb29wc1xyXG4gICAgICAgICAgdGhpcy5wb3MgPSAxXHJcbiAgICAgICAgICAvLyBUaGUgLTEgaGVyZSBpcyBiZWNhdXNlIHdlIGRvbid0IHdhbnQgdG8gdG9nZ2xlIHJldmVyc2VkIHdoZW4gYWxsIHRoZSBsb29wcyBoYXZlIGJlZW4gY29tcGxldGVkXHJcbiAgICAgICAgICBsYXN0TG9vcCA9IHRoaXMuc2l0dWF0aW9uLmxvb3AgLSAxXHJcbiAgICAgICAgICB0aGlzLnNpdHVhdGlvbi5sb29wID0gdGhpcy5zaXR1YXRpb24ubG9vcHNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc2l0dWF0aW9uLnJldmVyc2luZykge1xyXG4gICAgICAgICAgLy8gVG9nZ2xlIHJldmVyc2VkIGlmIGFuIG9kZCBudW1iZXIgb2YgbG9vcHMgYXMgb2NjdXJlZCBzaW5jZSB0aGUgbGFzdCBjYWxsIG9mIHN0ZXBcclxuICAgICAgICAgIHRoaXMuc2l0dWF0aW9uLnJldmVyc2VkID0gdGhpcy5zaXR1YXRpb24ucmV2ZXJzZWQgIT0gQm9vbGVhbigodGhpcy5zaXR1YXRpb24ubG9vcCAtIGxhc3RMb29wKSAlIDIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gbG9vcCwgdGhlIGFic29sdXRlIHBvc2l0aW9uIG11c3Qgbm90IGJlIGFib3ZlIDFcclxuICAgICAgICB0aGlzLmFic1BvcyA9IE1hdGgubWluKHRoaXMuYWJzUG9zLCAxKVxyXG4gICAgICAgIHRoaXMucG9zID0gdGhpcy5hYnNQb3NcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gd2hpbGUgdGhlIGFic29sdXRlIHBvc2l0aW9uIGNhbiBiZSBiZWxvdyAwLCB0aGUgcG9zaXRpb24gbXVzdCBub3QgYmUgYmVsb3cgMFxyXG4gICAgICBpZih0aGlzLnBvcyA8IDApIHRoaXMucG9zID0gMFxyXG5cclxuICAgICAgaWYodGhpcy5zaXR1YXRpb24ucmV2ZXJzZWQpIHRoaXMucG9zID0gMSAtIHRoaXMucG9zXHJcblxyXG5cclxuICAgICAgLy8gYXBwbHkgZWFzaW5nXHJcbiAgICAgIHZhciBlYXNlZCA9IHRoaXMuc2l0dWF0aW9uLmVhc2UodGhpcy5wb3MpXHJcblxyXG4gICAgICAvLyBjYWxsIG9uY2UtY2FsbGJhY2tzXHJcbiAgICAgIGZvcih2YXIgaSBpbiB0aGlzLnNpdHVhdGlvbi5vbmNlKXtcclxuICAgICAgICBpZihpID4gdGhpcy5sYXN0UG9zICYmIGkgPD0gZWFzZWQpe1xyXG4gICAgICAgICAgdGhpcy5zaXR1YXRpb24ub25jZVtpXS5jYWxsKHRoaXMudGFyZ2V0KCksIHRoaXMucG9zLCBlYXNlZClcclxuICAgICAgICAgIGRlbGV0ZSB0aGlzLnNpdHVhdGlvbi5vbmNlW2ldXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBmaXJlIGR1cmluZyBjYWxsYmFjayB3aXRoIHBvc2l0aW9uLCBlYXNlZCBwb3NpdGlvbiBhbmQgY3VycmVudCBzaXR1YXRpb24gYXMgcGFyYW1ldGVyXHJcbiAgICAgIGlmKHRoaXMuYWN0aXZlKSB0aGlzLnRhcmdldCgpLmZpcmUoJ2R1cmluZycsIHtwb3M6IHRoaXMucG9zLCBlYXNlZDogZWFzZWQsIGZ4OiB0aGlzLCBzaXR1YXRpb246IHRoaXMuc2l0dWF0aW9ufSlcclxuXHJcbiAgICAgIC8vIHRoZSB1c2VyIG1heSBjYWxsIHN0b3Agb3IgZmluaXNoIGluIHRoZSBkdXJpbmcgY2FsbGJhY2tcclxuICAgICAgLy8gc28gbWFrZSBzdXJlIHRoYXQgd2Ugc3RpbGwgaGF2ZSBhIHZhbGlkIHNpdHVhdGlvblxyXG4gICAgICBpZighdGhpcy5zaXR1YXRpb24pe1xyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGFwcGx5IHRoZSBhY3R1YWwgYW5pbWF0aW9uIHRvIGV2ZXJ5IHByb3BlcnR5XHJcbiAgICAgIHRoaXMuZWFjaEF0KClcclxuXHJcbiAgICAgIC8vIGRvIGZpbmFsIGNvZGUgd2hlbiBzaXR1YXRpb24gaXMgZmluaXNoZWRcclxuICAgICAgaWYoKHRoaXMucG9zID09IDEgJiYgIXRoaXMuc2l0dWF0aW9uLnJldmVyc2VkKSB8fCAodGhpcy5zaXR1YXRpb24ucmV2ZXJzZWQgJiYgdGhpcy5wb3MgPT0gMCkpe1xyXG5cclxuICAgICAgICAvLyBzdG9wIGFuaW1hdGlvbiBjYWxsYmFja1xyXG4gICAgICAgIHRoaXMuc3RvcEFuaW1GcmFtZSgpXHJcblxyXG4gICAgICAgIC8vIGZpcmUgZmluaXNoZWQgY2FsbGJhY2sgd2l0aCBjdXJyZW50IHNpdHVhdGlvbiBhcyBwYXJhbWV0ZXJcclxuICAgICAgICB0aGlzLnRhcmdldCgpLmZpcmUoJ2ZpbmlzaGVkJywge2Z4OnRoaXMsIHNpdHVhdGlvbjogdGhpcy5zaXR1YXRpb259KVxyXG5cclxuICAgICAgICBpZighdGhpcy5zaXR1YXRpb25zLmxlbmd0aCl7XHJcbiAgICAgICAgICB0aGlzLnRhcmdldCgpLmZpcmUoJ2FsbGZpbmlzaGVkJylcclxuXHJcbiAgICAgICAgICAvLyBSZWNoZWNrIHRoZSBsZW5ndGggc2luY2UgdGhlIHVzZXIgbWF5IGNhbGwgYW5pbWF0ZSBpbiB0aGUgYWZ0ZXJBbGwgY2FsbGJhY2tcclxuICAgICAgICAgIGlmKCF0aGlzLnNpdHVhdGlvbnMubGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQoKS5vZmYoJy5meCcpIC8vIHRoZXJlIHNob3VsZG50IGJlIGFueSBiaW5kaW5nIGxlZnQsIGJ1dCB0byBtYWtlIHN1cmUuLi5cclxuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3RhcnQgbmV4dCBhbmltYXRpb25cclxuICAgICAgICBpZih0aGlzLmFjdGl2ZSkgdGhpcy5kZXF1ZXVlKClcclxuICAgICAgICBlbHNlIHRoaXMuY2xlYXJDdXJyZW50KClcclxuXHJcbiAgICAgIH1lbHNlIGlmKCF0aGlzLnBhdXNlZCAmJiB0aGlzLmFjdGl2ZSl7XHJcbiAgICAgICAgLy8gd2UgY29udGludWUgYW5pbWF0aW5nIHdoZW4gd2UgYXJlIG5vdCBhdCB0aGUgZW5kXHJcbiAgICAgICAgdGhpcy5zdGFydEFuaW1GcmFtZSgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHNhdmUgbGFzdCBlYXNlZCBwb3NpdGlvbiBmb3Igb25jZSBjYWxsYmFjayB0cmlnZ2VyaW5nXHJcbiAgICAgIHRoaXMubGFzdFBvcyA9IGVhc2VkXHJcbiAgICAgIHJldHVybiB0aGlzXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhbGN1bGF0ZXMgdGhlIHN0ZXAgZm9yIGV2ZXJ5IHByb3BlcnR5IGFuZCBjYWxscyBibG9jayB3aXRoIGl0XHJcbiAgLCBlYWNoQXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciBpLCBsZW4sIGF0LCBzZWxmID0gdGhpcywgdGFyZ2V0ID0gdGhpcy50YXJnZXQoKSwgcyA9IHRoaXMuc2l0dWF0aW9uXHJcblxyXG4gICAgICAvLyBhcHBseSBhbmltYXRpb25zIHdoaWNoIGNhbiBiZSBjYWxsZWQgdHJvdWdoIGEgbWV0aG9kXHJcbiAgICAgIGZvcihpIGluIHMuYW5pbWF0aW9ucyl7XHJcblxyXG4gICAgICAgIGF0ID0gW10uY29uY2F0KHMuYW5pbWF0aW9uc1tpXSkubWFwKGZ1bmN0aW9uKGVsKXtcclxuICAgICAgICAgIHJldHVybiB0eXBlb2YgZWwgIT09ICdzdHJpbmcnICYmIGVsLmF0ID8gZWwuYXQocy5lYXNlKHNlbGYucG9zKSwgc2VsZi5wb3MpIDogZWxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0YXJnZXRbaV0uYXBwbHkodGFyZ2V0LCBhdClcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGFwcGx5IGFuaW1hdGlvbiB3aGljaCBoYXMgdG8gYmUgYXBwbGllZCB3aXRoIGF0dHIoKVxyXG4gICAgICBmb3IoaSBpbiBzLmF0dHJzKXtcclxuXHJcbiAgICAgICAgYXQgPSBbaV0uY29uY2F0KHMuYXR0cnNbaV0pLm1hcChmdW5jdGlvbihlbCl7XHJcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIGVsICE9PSAnc3RyaW5nJyAmJiBlbC5hdCA/IGVsLmF0KHMuZWFzZShzZWxmLnBvcyksIHNlbGYucG9zKSA6IGVsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGFyZ2V0LmF0dHIuYXBwbHkodGFyZ2V0LCBhdClcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGFwcGx5IGFuaW1hdGlvbiB3aGljaCBoYXMgdG8gYmUgYXBwbGllZCB3aXRoIHN0eWxlKClcclxuICAgICAgZm9yKGkgaW4gcy5zdHlsZXMpe1xyXG5cclxuICAgICAgICBhdCA9IFtpXS5jb25jYXQocy5zdHlsZXNbaV0pLm1hcChmdW5jdGlvbihlbCl7XHJcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIGVsICE9PSAnc3RyaW5nJyAmJiBlbC5hdCA/IGVsLmF0KHMuZWFzZShzZWxmLnBvcyksIHNlbGYucG9zKSA6IGVsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmFwcGx5KHRhcmdldCwgYXQpXHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhbmltYXRlIGluaXRpYWxUcmFuc2Zvcm1hdGlvbiB3aGljaCBoYXMgdG8gYmUgY2hhaW5lZFxyXG4gICAgICBpZihzLnRyYW5zZm9ybXMubGVuZ3RoKXtcclxuXHJcbiAgICAgICAgLy8gZ2V0IGluaXRpYWwgaW5pdGlhbFRyYW5zZm9ybWF0aW9uXHJcbiAgICAgICAgYXQgPSBzLmluaXRpYWxUcmFuc2Zvcm1hdGlvblxyXG4gICAgICAgIGZvcihpID0gMCwgbGVuID0gcy50cmFuc2Zvcm1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcclxuXHJcbiAgICAgICAgICAvLyBnZXQgbmV4dCB0cmFuc2Zvcm1hdGlvbiBpbiBjaGFpblxyXG4gICAgICAgICAgdmFyIGEgPSBzLnRyYW5zZm9ybXNbaV1cclxuXHJcbiAgICAgICAgICAvLyBtdWx0aXBseSBtYXRyaXggZGlyZWN0bHlcclxuICAgICAgICAgIGlmKGEgaW5zdGFuY2VvZiBTVkcuTWF0cml4KXtcclxuXHJcbiAgICAgICAgICAgIGlmKGEucmVsYXRpdmUpe1xyXG4gICAgICAgICAgICAgIGF0ID0gYXQubXVsdGlwbHkobmV3IFNWRy5NYXRyaXgoKS5tb3JwaChhKS5hdChzLmVhc2UodGhpcy5wb3MpKSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgYXQgPSBhdC5tb3JwaChhKS5hdChzLmVhc2UodGhpcy5wb3MpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gd2hlbiB0cmFuc2Zvcm1hdGlvbiBpcyBhYnNvbHV0ZSB3ZSBoYXZlIHRvIHJlc2V0IHRoZSBuZWVkZWQgdHJhbnNmb3JtYXRpb24gZmlyc3RcclxuICAgICAgICAgIGlmKCFhLnJlbGF0aXZlKVxyXG4gICAgICAgICAgICBhLnVuZG8oYXQuZXh0cmFjdCgpKVxyXG5cclxuICAgICAgICAgIC8vIGFuZCByZWFwcGx5IGl0IGFmdGVyXHJcbiAgICAgICAgICBhdCA9IGF0Lm11bHRpcGx5KGEuYXQocy5lYXNlKHRoaXMucG9zKSkpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2V0IG5ldyBtYXRyaXggb24gZWxlbWVudFxyXG4gICAgICAgIHRhcmdldC5tYXRyaXgoYXQpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBhZGRzIGFuIG9uY2UtY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGF0IGEgc3BlY2lmaWMgcG9zaXRpb24gYW5kIG5ldmVyIGFnYWluXHJcbiAgLCBvbmNlOiBmdW5jdGlvbihwb3MsIGZuLCBpc0Vhc2VkKXtcclxuICAgICAgdmFyIGMgPSB0aGlzLmxhc3QoKVxyXG4gICAgICBpZighaXNFYXNlZCkgcG9zID0gYy5lYXNlKHBvcylcclxuXHJcbiAgICAgIGMub25jZVtwb3NdID0gZm5cclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICwgX2NhbGxTdGFydDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGlzLnN0YXJ0KCl9LmJpbmQodGhpcyksIDApXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiwgcGFyZW50OiBTVkcuRWxlbWVudFxyXG5cclxuICAvLyBBZGQgbWV0aG9kIHRvIHBhcmVudCBlbGVtZW50c1xyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gR2V0IGZ4IG1vZHVsZSBvciBjcmVhdGUgYSBuZXcgb25lLCB0aGVuIGFuaW1hdGUgd2l0aCBnaXZlbiBkdXJhdGlvbiBhbmQgZWFzZVxyXG4gICAgYW5pbWF0ZTogZnVuY3Rpb24obywgZWFzZSwgZGVsYXkpIHtcclxuICAgICAgcmV0dXJuICh0aGlzLmZ4IHx8ICh0aGlzLmZ4ID0gbmV3IFNWRy5GWCh0aGlzKSkpLmFuaW1hdGUobywgZWFzZSwgZGVsYXkpXHJcbiAgICB9XHJcbiAgLCBkZWxheTogZnVuY3Rpb24oZGVsYXkpe1xyXG4gICAgICByZXR1cm4gKHRoaXMuZnggfHwgKHRoaXMuZnggPSBuZXcgU1ZHLkZYKHRoaXMpKSkuZGVsYXkoZGVsYXkpXHJcbiAgICB9XHJcbiAgLCBzdG9wOiBmdW5jdGlvbihqdW1wVG9FbmQsIGNsZWFyUXVldWUpIHtcclxuICAgICAgaWYgKHRoaXMuZngpXHJcbiAgICAgICAgdGhpcy5meC5zdG9wKGp1bXBUb0VuZCwgY2xlYXJRdWV1ZSlcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgLCBmaW5pc2g6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5meClcclxuICAgICAgICB0aGlzLmZ4LmZpbmlzaCgpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gUGF1c2UgY3VycmVudCBhbmltYXRpb25cclxuICAsIHBhdXNlOiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMuZngpXHJcbiAgICAgICAgdGhpcy5meC5wYXVzZSgpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gUGxheSBwYXVzZWQgY3VycmVudCBhbmltYXRpb25cclxuICAsIHBsYXk6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5meClcclxuICAgICAgICB0aGlzLmZ4LnBsYXkoKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIFNldC9HZXQgdGhlIHNwZWVkIG9mIHRoZSBhbmltYXRpb25zXHJcbiAgLCBzcGVlZDogZnVuY3Rpb24oc3BlZWQpIHtcclxuICAgICAgaWYgKHRoaXMuZngpXHJcbiAgICAgICAgaWYgKHNwZWVkID09IG51bGwpXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5meC5zcGVlZCgpXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgdGhpcy5meC5zcGVlZChzcGVlZClcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxuXHJcbi8vIE1vcnBoT2JqIGlzIHVzZWQgd2hlbmV2ZXIgbm8gbW9ycGhhYmxlIG9iamVjdCBpcyBnaXZlblxyXG5TVkcuTW9ycGhPYmogPSBTVkcuaW52ZW50KHtcclxuXHJcbiAgY3JlYXRlOiBmdW5jdGlvbihmcm9tLCB0byl7XHJcbiAgICAvLyBwcmVwYXJlIGNvbG9yIGZvciBtb3JwaGluZ1xyXG4gICAgaWYoU1ZHLkNvbG9yLmlzQ29sb3IodG8pKSByZXR1cm4gbmV3IFNWRy5Db2xvcihmcm9tKS5tb3JwaCh0bylcclxuICAgIC8vIGNoZWNrIGlmIHdlIGhhdmUgYSBsaXN0IG9mIHZhbHVlc1xyXG4gICAgaWYoU1ZHLnJlZ2V4LmRlbGltaXRlci50ZXN0KGZyb20pKSB7XHJcbiAgICAgIC8vIHByZXBhcmUgcGF0aCBmb3IgbW9ycGhpbmdcclxuICAgICAgaWYoU1ZHLnJlZ2V4LnBhdGhMZXR0ZXJzLnRlc3QoZnJvbSkpIHJldHVybiBuZXcgU1ZHLlBhdGhBcnJheShmcm9tKS5tb3JwaCh0bylcclxuICAgICAgLy8gcHJlcGFyZSB2YWx1ZSBsaXN0IGZvciBtb3JwaGluZ1xyXG4gICAgICBlbHNlIHJldHVybiBuZXcgU1ZHLkFycmF5KGZyb20pLm1vcnBoKHRvKVxyXG4gICAgfVxyXG4gICAgLy8gcHJlcGFyZSBudW1iZXIgZm9yIG1vcnBoaW5nXHJcbiAgICBpZihTVkcucmVnZXgubnVtYmVyQW5kVW5pdC50ZXN0KHRvKSkgcmV0dXJuIG5ldyBTVkcuTnVtYmVyKGZyb20pLm1vcnBoKHRvKVxyXG5cclxuICAgIC8vIHByZXBhcmUgZm9yIHBsYWluIG1vcnBoaW5nXHJcbiAgICB0aGlzLnZhbHVlID0gZnJvbVxyXG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IHRvXHJcbiAgfVxyXG5cclxuLCBleHRlbmQ6IHtcclxuICAgIGF0OiBmdW5jdGlvbihwb3MsIHJlYWwpe1xyXG4gICAgICByZXR1cm4gcmVhbCA8IDEgPyB0aGlzLnZhbHVlIDogdGhpcy5kZXN0aW5hdGlvblxyXG4gICAgfSxcclxuXHJcbiAgICB2YWx1ZU9mOiBmdW5jdGlvbigpe1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pXHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5GWCwge1xyXG4gIC8vIEFkZCBhbmltYXRhYmxlIGF0dHJpYnV0ZXNcclxuICBhdHRyOiBmdW5jdGlvbihhLCB2LCByZWxhdGl2ZSkge1xyXG4gICAgLy8gYXBwbHkgYXR0cmlidXRlcyBpbmRpdmlkdWFsbHlcclxuICAgIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICBmb3IgKHZhciBrZXkgaW4gYSlcclxuICAgICAgICB0aGlzLmF0dHIoa2V5LCBhW2tleV0pXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hZGQoYSwgdiwgJ2F0dHJzJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICAvLyBBZGQgYW5pbWF0YWJsZSBzdHlsZXNcclxuLCBzdHlsZTogZnVuY3Rpb24ocywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBzID09ICdvYmplY3QnKVxyXG4gICAgICBmb3IgKHZhciBrZXkgaW4gcylcclxuICAgICAgICB0aGlzLnN0eWxlKGtleSwgc1trZXldKVxyXG5cclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5hZGQocywgdiwgJ3N0eWxlcycpXHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgLy8gQW5pbWF0YWJsZSB4LWF4aXNcclxuLCB4OiBmdW5jdGlvbih4LCByZWxhdGl2ZSkge1xyXG4gICAgaWYodGhpcy50YXJnZXQoKSBpbnN0YW5jZW9mIFNWRy5HKXtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0oe3g6eH0sIHJlbGF0aXZlKVxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBudW0gPSBuZXcgU1ZHLk51bWJlcih4KVxyXG4gICAgbnVtLnJlbGF0aXZlID0gcmVsYXRpdmVcclxuICAgIHJldHVybiB0aGlzLmFkZCgneCcsIG51bSlcclxuICB9XHJcbiAgLy8gQW5pbWF0YWJsZSB5LWF4aXNcclxuLCB5OiBmdW5jdGlvbih5LCByZWxhdGl2ZSkge1xyXG4gICAgaWYodGhpcy50YXJnZXQoKSBpbnN0YW5jZW9mIFNWRy5HKXtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0oe3k6eX0sIHJlbGF0aXZlKVxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBudW0gPSBuZXcgU1ZHLk51bWJlcih5KVxyXG4gICAgbnVtLnJlbGF0aXZlID0gcmVsYXRpdmVcclxuICAgIHJldHVybiB0aGlzLmFkZCgneScsIG51bSlcclxuICB9XHJcbiAgLy8gQW5pbWF0YWJsZSBjZW50ZXIgeC1heGlzXHJcbiwgY3g6IGZ1bmN0aW9uKHgpIHtcclxuICAgIHJldHVybiB0aGlzLmFkZCgnY3gnLCBuZXcgU1ZHLk51bWJlcih4KSlcclxuICB9XHJcbiAgLy8gQW5pbWF0YWJsZSBjZW50ZXIgeS1heGlzXHJcbiwgY3k6IGZ1bmN0aW9uKHkpIHtcclxuICAgIHJldHVybiB0aGlzLmFkZCgnY3knLCBuZXcgU1ZHLk51bWJlcih5KSlcclxuICB9XHJcbiAgLy8gQWRkIGFuaW1hdGFibGUgbW92ZVxyXG4sIG1vdmU6IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgIHJldHVybiB0aGlzLngoeCkueSh5KVxyXG4gIH1cclxuICAvLyBBZGQgYW5pbWF0YWJsZSBjZW50ZXJcclxuLCBjZW50ZXI6IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgIHJldHVybiB0aGlzLmN4KHgpLmN5KHkpXHJcbiAgfVxyXG4gIC8vIEFkZCBhbmltYXRhYmxlIHNpemVcclxuLCBzaXplOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBpZiAodGhpcy50YXJnZXQoKSBpbnN0YW5jZW9mIFNWRy5UZXh0KSB7XHJcbiAgICAgIC8vIGFuaW1hdGUgZm9udCBzaXplIGZvciBUZXh0IGVsZW1lbnRzXHJcbiAgICAgIHRoaXMuYXR0cignZm9udC1zaXplJywgd2lkdGgpXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gYW5pbWF0ZSBiYm94IGJhc2VkIHNpemUgZm9yIGFsbCBvdGhlciBlbGVtZW50c1xyXG4gICAgICB2YXIgYm94XHJcblxyXG4gICAgICBpZighd2lkdGggfHwgIWhlaWdodCl7XHJcbiAgICAgICAgYm94ID0gdGhpcy50YXJnZXQoKS5iYm94KClcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIXdpZHRoKXtcclxuICAgICAgICB3aWR0aCA9IGJveC53aWR0aCAvIGJveC5oZWlnaHQgICogaGVpZ2h0XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCFoZWlnaHQpe1xyXG4gICAgICAgIGhlaWdodCA9IGJveC5oZWlnaHQgLyBib3gud2lkdGggICogd2lkdGhcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hZGQoJ3dpZHRoJyAsIG5ldyBTVkcuTnVtYmVyKHdpZHRoKSlcclxuICAgICAgICAgIC5hZGQoJ2hlaWdodCcsIG5ldyBTVkcuTnVtYmVyKGhlaWdodCkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIC8vIEFkZCBhbmltYXRhYmxlIHdpZHRoXHJcbiwgd2lkdGg6IGZ1bmN0aW9uKHdpZHRoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hZGQoJ3dpZHRoJywgbmV3IFNWRy5OdW1iZXIod2lkdGgpKVxyXG4gIH1cclxuICAvLyBBZGQgYW5pbWF0YWJsZSBoZWlnaHRcclxuLCBoZWlnaHQ6IGZ1bmN0aW9uKGhlaWdodCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYWRkKCdoZWlnaHQnLCBuZXcgU1ZHLk51bWJlcihoZWlnaHQpKVxyXG4gIH1cclxuICAvLyBBZGQgYW5pbWF0YWJsZSBwbG90XHJcbiwgcGxvdDogZnVuY3Rpb24oYSwgYiwgYywgZCkge1xyXG4gICAgLy8gTGluZXMgY2FuIGJlIHBsb3R0ZWQgd2l0aCA0IGFyZ3VtZW50c1xyXG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PSA0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBsb3QoW2EsIGIsIGMsIGRdKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmFkZCgncGxvdCcsIG5ldyAodGhpcy50YXJnZXQoKS5tb3JwaEFycmF5KShhKSlcclxuICB9XHJcbiAgLy8gQWRkIGxlYWRpbmcgbWV0aG9kXHJcbiwgbGVhZGluZzogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHJldHVybiB0aGlzLnRhcmdldCgpLmxlYWRpbmcgP1xyXG4gICAgICB0aGlzLmFkZCgnbGVhZGluZycsIG5ldyBTVkcuTnVtYmVyKHZhbHVlKSkgOlxyXG4gICAgICB0aGlzXHJcbiAgfVxyXG4gIC8vIEFkZCBhbmltYXRhYmxlIHZpZXdib3hcclxuLCB2aWV3Ym94OiBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBpZiAodGhpcy50YXJnZXQoKSBpbnN0YW5jZW9mIFNWRy5Db250YWluZXIpIHtcclxuICAgICAgdGhpcy5hZGQoJ3ZpZXdib3gnLCBuZXcgU1ZHLlZpZXdCb3goeCwgeSwgd2lkdGgsIGhlaWdodCkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiwgdXBkYXRlOiBmdW5jdGlvbihvKSB7XHJcbiAgICBpZiAodGhpcy50YXJnZXQoKSBpbnN0YW5jZW9mIFNWRy5TdG9wKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgbyA9PSAnbnVtYmVyJyB8fCBvIGluc3RhbmNlb2YgU1ZHLk51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZSh7XHJcbiAgICAgICAgICBvZmZzZXQ6ICBhcmd1bWVudHNbMF1cclxuICAgICAgICAsIGNvbG9yOiAgIGFyZ3VtZW50c1sxXVxyXG4gICAgICAgICwgb3BhY2l0eTogYXJndW1lbnRzWzJdXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG8ub3BhY2l0eSAhPSBudWxsKSB0aGlzLmF0dHIoJ3N0b3Atb3BhY2l0eScsIG8ub3BhY2l0eSlcclxuICAgICAgaWYgKG8uY29sb3IgICAhPSBudWxsKSB0aGlzLmF0dHIoJ3N0b3AtY29sb3InLCBvLmNvbG9yKVxyXG4gICAgICBpZiAoby5vZmZzZXQgICE9IG51bGwpIHRoaXMuYXR0cignb2Zmc2V0Jywgby5vZmZzZXQpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbn0pXHJcblxuU1ZHLkJveCA9IFNWRy5pbnZlbnQoe1xyXG4gIGNyZWF0ZTogZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgaWYgKHR5cGVvZiB4ID09ICdvYmplY3QnICYmICEoeCBpbnN0YW5jZW9mIFNWRy5FbGVtZW50KSkge1xyXG4gICAgICAvLyBjaHJvbWVzIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBoYXMgbm8geCBhbmQgeSBwcm9wZXJ0eVxyXG4gICAgICByZXR1cm4gU1ZHLkJveC5jYWxsKHRoaXMsIHgubGVmdCAhPSBudWxsID8geC5sZWZ0IDogeC54ICwgeC50b3AgIT0gbnVsbCA/IHgudG9wIDogeC55LCB4LndpZHRoLCB4LmhlaWdodClcclxuICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSA0KSB7XHJcbiAgICAgIHRoaXMueCA9IHhcclxuICAgICAgdGhpcy55ID0geVxyXG4gICAgICB0aGlzLndpZHRoID0gd2lkdGhcclxuICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGQgY2VudGVyLCByaWdodCwgYm90dG9tLi4uXHJcbiAgICBmdWxsQm94KHRoaXMpXHJcbiAgfVxyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gTWVyZ2UgcmVjdCBib3ggd2l0aCBhbm90aGVyLCByZXR1cm4gYSBuZXcgaW5zdGFuY2VcclxuICAgIG1lcmdlOiBmdW5jdGlvbihib3gpIHtcclxuICAgICAgdmFyIGIgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcigpXHJcblxyXG4gICAgICAvLyBtZXJnZSBib3hlc1xyXG4gICAgICBiLnggICAgICA9IE1hdGgubWluKHRoaXMueCwgYm94LngpXHJcbiAgICAgIGIueSAgICAgID0gTWF0aC5taW4odGhpcy55LCBib3gueSlcclxuICAgICAgYi53aWR0aCAgPSBNYXRoLm1heCh0aGlzLnggKyB0aGlzLndpZHRoLCAgYm94LnggKyBib3gud2lkdGgpICAtIGIueFxyXG4gICAgICBiLmhlaWdodCA9IE1hdGgubWF4KHRoaXMueSArIHRoaXMuaGVpZ2h0LCBib3gueSArIGJveC5oZWlnaHQpIC0gYi55XHJcblxyXG4gICAgICByZXR1cm4gZnVsbEJveChiKVxyXG4gICAgfVxyXG5cclxuICAsIHRyYW5zZm9ybTogZnVuY3Rpb24obSkge1xyXG4gICAgICB2YXIgeE1pbiA9IEluZmluaXR5LCB4TWF4ID0gLUluZmluaXR5LCB5TWluID0gSW5maW5pdHksIHlNYXggPSAtSW5maW5pdHksIHAsIGJib3hcclxuXHJcbiAgICAgIHZhciBwdHMgPSBbXHJcbiAgICAgICAgbmV3IFNWRy5Qb2ludCh0aGlzLngsIHRoaXMueSksXHJcbiAgICAgICAgbmV3IFNWRy5Qb2ludCh0aGlzLngyLCB0aGlzLnkpLFxyXG4gICAgICAgIG5ldyBTVkcuUG9pbnQodGhpcy54LCB0aGlzLnkyKSxcclxuICAgICAgICBuZXcgU1ZHLlBvaW50KHRoaXMueDIsIHRoaXMueTIpXHJcbiAgICAgIF1cclxuXHJcbiAgICAgIHB0cy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcclxuICAgICAgICBwID0gcC50cmFuc2Zvcm0obSlcclxuICAgICAgICB4TWluID0gTWF0aC5taW4oeE1pbixwLngpXHJcbiAgICAgICAgeE1heCA9IE1hdGgubWF4KHhNYXgscC54KVxyXG4gICAgICAgIHlNaW4gPSBNYXRoLm1pbih5TWluLHAueSlcclxuICAgICAgICB5TWF4ID0gTWF0aC5tYXgoeU1heCxwLnkpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBiYm94ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoKVxyXG4gICAgICBiYm94LnggPSB4TWluXHJcbiAgICAgIGJib3gud2lkdGggPSB4TWF4LXhNaW5cclxuICAgICAgYmJveC55ID0geU1pblxyXG4gICAgICBiYm94LmhlaWdodCA9IHlNYXgteU1pblxyXG5cclxuICAgICAgZnVsbEJveChiYm94KVxyXG5cclxuICAgICAgcmV0dXJuIGJib3hcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5TVkcuQkJveCA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemVcclxuICBjcmVhdGU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgIFNWRy5Cb3guYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKVxyXG5cclxuICAgIC8vIGdldCB2YWx1ZXMgaWYgZWxlbWVudCBpcyBnaXZlblxyXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkcuRWxlbWVudCkge1xyXG4gICAgICB2YXIgYm94XHJcblxyXG4gICAgICAvLyB5ZXMgdGhpcyBpcyB1Z2x5LCBidXQgRmlyZWZveCBjYW4gYmUgYSBwYWluIHdoZW4gaXQgY29tZXMgdG8gZWxlbWVudHMgdGhhdCBhcmUgbm90IHlldCByZW5kZXJlZFxyXG4gICAgICB0cnkge1xyXG5cclxuICAgICAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyl7XHJcbiAgICAgICAgICAvLyBUaGlzIGlzIElFIC0gaXQgZG9lcyBub3Qgc3VwcG9ydCBjb250YWlucygpIGZvciB0b3AtbGV2ZWwgU1ZHc1xyXG4gICAgICAgICAgdmFyIHRvcFBhcmVudCA9IGVsZW1lbnQubm9kZVxyXG4gICAgICAgICAgd2hpbGUgKHRvcFBhcmVudC5wYXJlbnROb2RlKXtcclxuICAgICAgICAgICAgdG9wUGFyZW50ID0gdG9wUGFyZW50LnBhcmVudE5vZGVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0b3BQYXJlbnQgIT0gZG9jdW1lbnQpIHRocm93IG5ldyBFeGNlcHRpb24oJ0VsZW1lbnQgbm90IGluIHRoZSBkb20nKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyB0aGUgZWxlbWVudCBpcyBOT1QgaW4gdGhlIGRvbSwgdGhyb3cgZXJyb3JcclxuICAgICAgICAgIGlmKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMoZWxlbWVudC5ub2RlKSkgdGhyb3cgbmV3IEV4Y2VwdGlvbignRWxlbWVudCBub3QgaW4gdGhlIGRvbScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmaW5kIG5hdGl2ZSBiYm94XHJcbiAgICAgICAgYm94ID0gZWxlbWVudC5ub2RlLmdldEJCb3goKVxyXG4gICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICBpZihlbGVtZW50IGluc3RhbmNlb2YgU1ZHLlNoYXBlKXtcclxuICAgICAgICAgIHZhciBjbG9uZSA9IGVsZW1lbnQuY2xvbmUoU1ZHLnBhcnNlci5kcmF3Lmluc3RhbmNlKS5zaG93KClcclxuICAgICAgICAgIGJveCA9IGNsb25lLm5vZGUuZ2V0QkJveCgpXHJcbiAgICAgICAgICBjbG9uZS5yZW1vdmUoKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgYm94ID0ge1xyXG4gICAgICAgICAgICB4OiAgICAgIGVsZW1lbnQubm9kZS5jbGllbnRMZWZ0XHJcbiAgICAgICAgICAsIHk6ICAgICAgZWxlbWVudC5ub2RlLmNsaWVudFRvcFxyXG4gICAgICAgICAgLCB3aWR0aDogIGVsZW1lbnQubm9kZS5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgLCBoZWlnaHQ6IGVsZW1lbnQubm9kZS5jbGllbnRIZWlnaHRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFNWRy5Cb3guY2FsbCh0aGlzLCBib3gpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gRGVmaW5lIGFuY2VzdG9yXHJcbiwgaW5oZXJpdDogU1ZHLkJveFxyXG5cclxuICAvLyBEZWZpbmUgUGFyZW50XHJcbiwgcGFyZW50OiBTVkcuRWxlbWVudFxyXG5cclxuICAvLyBDb25zdHJ1Y3RvclxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gR2V0IGJvdW5kaW5nIGJveFxyXG4gICAgYmJveDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBuZXcgU1ZHLkJCb3godGhpcylcclxuICAgIH1cclxuICB9XHJcblxyXG59KVxyXG5cclxuU1ZHLkJCb3gucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU1ZHLkJCb3hcclxuXHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5FbGVtZW50LCB7XHJcbiAgdGJveDogZnVuY3Rpb24oKXtcclxuICAgIGNvbnNvbGUud2FybignVXNlIG9mIFRCb3ggaXMgZGVwcmVjYXRlZCBhbmQgbWFwcGVkIHRvIFJCb3guIFVzZSAucmJveCgpIGluc3RlYWQuJylcclxuICAgIHJldHVybiB0aGlzLnJib3godGhpcy5kb2MoKSlcclxuICB9XHJcbn0pXHJcblxyXG5TVkcuUkJveCA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemVcclxuICBjcmVhdGU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgIFNWRy5Cb3guYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKVxyXG5cclxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHLkVsZW1lbnQpIHtcclxuICAgICAgU1ZHLkJveC5jYWxsKHRoaXMsIGVsZW1lbnQubm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4sIGluaGVyaXQ6IFNWRy5Cb3hcclxuXHJcbiAgLy8gZGVmaW5lIFBhcmVudFxyXG4sIHBhcmVudDogU1ZHLkVsZW1lbnRcclxuXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICBhZGRPZmZzZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyBvZmZzZXQgYnkgd2luZG93IHNjcm9sbCBwb3NpdGlvbiwgYmVjYXVzZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgY2hhbmdlcyB3aGVuIHdpbmRvdyBpcyBzY3JvbGxlZFxyXG4gICAgICB0aGlzLnggKz0gd2luZG93LnBhZ2VYT2Zmc2V0XHJcbiAgICAgIHRoaXMueSArPSB3aW5kb3cucGFnZVlPZmZzZXRcclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENvbnN0cnVjdG9yXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBHZXQgcmVjdCBib3hcclxuICAgIHJib3g6IGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgIGlmIChlbCkgcmV0dXJuIG5ldyBTVkcuUkJveCh0aGlzKS50cmFuc2Zvcm0oZWwuc2NyZWVuQ1RNKCkuaW52ZXJzZSgpKVxyXG4gICAgICByZXR1cm4gbmV3IFNWRy5SQm94KHRoaXMpLmFkZE9mZnNldCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxuXHJcblNWRy5SQm94LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNWRy5SQm94XHJcblxuU1ZHLk1hdHJpeCA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemVcclxuICBjcmVhdGU6IGZ1bmN0aW9uKHNvdXJjZSkge1xyXG4gICAgdmFyIGksIGJhc2UgPSBhcnJheVRvTWF0cml4KFsxLCAwLCAwLCAxLCAwLCAwXSlcclxuXHJcbiAgICAvLyBlbnN1cmUgc291cmNlIGFzIG9iamVjdFxyXG4gICAgc291cmNlID0gc291cmNlIGluc3RhbmNlb2YgU1ZHLkVsZW1lbnQgP1xyXG4gICAgICBzb3VyY2UubWF0cml4aWZ5KCkgOlxyXG4gICAgdHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycgP1xyXG4gICAgICBhcnJheVRvTWF0cml4KHNvdXJjZS5zcGxpdChTVkcucmVnZXguZGVsaW1pdGVyKS5tYXAocGFyc2VGbG9hdCkpIDpcclxuICAgIGFyZ3VtZW50cy5sZW5ndGggPT0gNiA/XHJcbiAgICAgIGFycmF5VG9NYXRyaXgoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKSA6XHJcbiAgICBBcnJheS5pc0FycmF5KHNvdXJjZSkgP1xyXG4gICAgICBhcnJheVRvTWF0cml4KHNvdXJjZSkgOlxyXG4gICAgdHlwZW9mIHNvdXJjZSA9PT0gJ29iamVjdCcgP1xyXG4gICAgICBzb3VyY2UgOiBiYXNlXHJcblxyXG4gICAgLy8gbWVyZ2Ugc291cmNlXHJcbiAgICBmb3IgKGkgPSBhYmNkZWYubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpXHJcbiAgICAgIHRoaXNbYWJjZGVmW2ldXSA9IHNvdXJjZVthYmNkZWZbaV1dICE9IG51bGwgP1xyXG4gICAgICAgIHNvdXJjZVthYmNkZWZbaV1dIDogYmFzZVthYmNkZWZbaV1dXHJcbiAgfVxyXG5cclxuICAvLyBBZGQgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gRXh0cmFjdCBpbmRpdmlkdWFsIHRyYW5zZm9ybWF0aW9uc1xyXG4gICAgZXh0cmFjdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIGZpbmQgZGVsdGEgdHJhbnNmb3JtIHBvaW50c1xyXG4gICAgICB2YXIgcHggICAgPSBkZWx0YVRyYW5zZm9ybVBvaW50KHRoaXMsIDAsIDEpXHJcbiAgICAgICAgLCBweSAgICA9IGRlbHRhVHJhbnNmb3JtUG9pbnQodGhpcywgMSwgMClcclxuICAgICAgICAsIHNrZXdYID0gMTgwIC8gTWF0aC5QSSAqIE1hdGguYXRhbjIocHgueSwgcHgueCkgLSA5MFxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAvLyB0cmFuc2xhdGlvblxyXG4gICAgICAgIHg6ICAgICAgICB0aGlzLmVcclxuICAgICAgLCB5OiAgICAgICAgdGhpcy5mXHJcbiAgICAgICwgdHJhbnNmb3JtZWRYOih0aGlzLmUgKiBNYXRoLmNvcyhza2V3WCAqIE1hdGguUEkgLyAxODApICsgdGhpcy5mICogTWF0aC5zaW4oc2tld1ggKiBNYXRoLlBJIC8gMTgwKSkgLyBNYXRoLnNxcnQodGhpcy5hICogdGhpcy5hICsgdGhpcy5iICogdGhpcy5iKVxyXG4gICAgICAsIHRyYW5zZm9ybWVkWToodGhpcy5mICogTWF0aC5jb3Moc2tld1ggKiBNYXRoLlBJIC8gMTgwKSArIHRoaXMuZSAqIE1hdGguc2luKC1za2V3WCAqIE1hdGguUEkgLyAxODApKSAvIE1hdGguc3FydCh0aGlzLmMgKiB0aGlzLmMgKyB0aGlzLmQgKiB0aGlzLmQpXHJcbiAgICAgICAgLy8gc2tld1xyXG4gICAgICAsIHNrZXdYOiAgICAtc2tld1hcclxuICAgICAgLCBza2V3WTogICAgMTgwIC8gTWF0aC5QSSAqIE1hdGguYXRhbjIocHkueSwgcHkueClcclxuICAgICAgICAvLyBzY2FsZVxyXG4gICAgICAsIHNjYWxlWDogICBNYXRoLnNxcnQodGhpcy5hICogdGhpcy5hICsgdGhpcy5iICogdGhpcy5iKVxyXG4gICAgICAsIHNjYWxlWTogICBNYXRoLnNxcnQodGhpcy5jICogdGhpcy5jICsgdGhpcy5kICogdGhpcy5kKVxyXG4gICAgICAgIC8vIHJvdGF0aW9uXHJcbiAgICAgICwgcm90YXRpb246IHNrZXdYXHJcbiAgICAgICwgYTogdGhpcy5hXHJcbiAgICAgICwgYjogdGhpcy5iXHJcbiAgICAgICwgYzogdGhpcy5jXHJcbiAgICAgICwgZDogdGhpcy5kXHJcbiAgICAgICwgZTogdGhpcy5lXHJcbiAgICAgICwgZjogdGhpcy5mXHJcbiAgICAgICwgbWF0cml4OiBuZXcgU1ZHLk1hdHJpeCh0aGlzKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDbG9uZSBtYXRyaXhcclxuICAsIGNsb25lOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIG5ldyBTVkcuTWF0cml4KHRoaXMpXHJcbiAgICB9XHJcbiAgICAvLyBNb3JwaCBvbmUgbWF0cml4IGludG8gYW5vdGhlclxyXG4gICwgbW9ycGg6IGZ1bmN0aW9uKG1hdHJpeCkge1xyXG4gICAgICAvLyBzdG9yZSBuZXcgZGVzdGluYXRpb25cclxuICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBTVkcuTWF0cml4KG1hdHJpeClcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBHZXQgbW9ycGhlZCBtYXRyaXggYXQgYSBnaXZlbiBwb3NpdGlvblxyXG4gICwgYXQ6IGZ1bmN0aW9uKHBvcykge1xyXG4gICAgICAvLyBtYWtlIHN1cmUgYSBkZXN0aW5hdGlvbiBpcyBkZWZpbmVkXHJcbiAgICAgIGlmICghdGhpcy5kZXN0aW5hdGlvbikgcmV0dXJuIHRoaXNcclxuXHJcbiAgICAgIC8vIGNhbGN1bGF0ZSBtb3JwaGVkIG1hdHJpeCBhdCBhIGdpdmVuIHBvc2l0aW9uXHJcbiAgICAgIHZhciBtYXRyaXggPSBuZXcgU1ZHLk1hdHJpeCh7XHJcbiAgICAgICAgYTogdGhpcy5hICsgKHRoaXMuZGVzdGluYXRpb24uYSAtIHRoaXMuYSkgKiBwb3NcclxuICAgICAgLCBiOiB0aGlzLmIgKyAodGhpcy5kZXN0aW5hdGlvbi5iIC0gdGhpcy5iKSAqIHBvc1xyXG4gICAgICAsIGM6IHRoaXMuYyArICh0aGlzLmRlc3RpbmF0aW9uLmMgLSB0aGlzLmMpICogcG9zXHJcbiAgICAgICwgZDogdGhpcy5kICsgKHRoaXMuZGVzdGluYXRpb24uZCAtIHRoaXMuZCkgKiBwb3NcclxuICAgICAgLCBlOiB0aGlzLmUgKyAodGhpcy5kZXN0aW5hdGlvbi5lIC0gdGhpcy5lKSAqIHBvc1xyXG4gICAgICAsIGY6IHRoaXMuZiArICh0aGlzLmRlc3RpbmF0aW9uLmYgLSB0aGlzLmYpICogcG9zXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gbWF0cml4XHJcbiAgICB9XHJcbiAgICAvLyBNdWx0aXBsaWVzIGJ5IGdpdmVuIG1hdHJpeFxyXG4gICwgbXVsdGlwbHk6IGZ1bmN0aW9uKG1hdHJpeCkge1xyXG4gICAgICByZXR1cm4gbmV3IFNWRy5NYXRyaXgodGhpcy5uYXRpdmUoKS5tdWx0aXBseShwYXJzZU1hdHJpeChtYXRyaXgpLm5hdGl2ZSgpKSlcclxuICAgIH1cclxuICAgIC8vIEludmVyc2VzIG1hdHJpeFxyXG4gICwgaW52ZXJzZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBuZXcgU1ZHLk1hdHJpeCh0aGlzLm5hdGl2ZSgpLmludmVyc2UoKSlcclxuICAgIH1cclxuICAgIC8vIFRyYW5zbGF0ZSBtYXRyaXhcclxuICAsIHRyYW5zbGF0ZTogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgICByZXR1cm4gbmV3IFNWRy5NYXRyaXgodGhpcy5uYXRpdmUoKS50cmFuc2xhdGUoeCB8fCAwLCB5IHx8IDApKVxyXG4gICAgfVxyXG4gICAgLy8gU2NhbGUgbWF0cml4XHJcbiAgLCBzY2FsZTogZnVuY3Rpb24oeCwgeSwgY3gsIGN5KSB7XHJcbiAgICAgIC8vIHN1cHBvcnQgdW5pZm9ybWFsIHNjYWxlXHJcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICB5ID0geFxyXG4gICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMykge1xyXG4gICAgICAgIGN5ID0gY3hcclxuICAgICAgICBjeCA9IHlcclxuICAgICAgICB5ID0geFxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5hcm91bmQoY3gsIGN5LCBuZXcgU1ZHLk1hdHJpeCh4LCAwLCAwLCB5LCAwLCAwKSlcclxuICAgIH1cclxuICAgIC8vIFJvdGF0ZSBtYXRyaXhcclxuICAsIHJvdGF0ZTogZnVuY3Rpb24ociwgY3gsIGN5KSB7XHJcbiAgICAgIC8vIGNvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXHJcbiAgICAgIHIgPSBTVkcudXRpbHMucmFkaWFucyhyKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuYXJvdW5kKGN4LCBjeSwgbmV3IFNWRy5NYXRyaXgoTWF0aC5jb3MociksIE1hdGguc2luKHIpLCAtTWF0aC5zaW4ociksIE1hdGguY29zKHIpLCAwLCAwKSlcclxuICAgIH1cclxuICAgIC8vIEZsaXAgbWF0cml4IG9uIHggb3IgeSwgYXQgYSBnaXZlbiBvZmZzZXRcclxuICAsIGZsaXA6IGZ1bmN0aW9uKGEsIG8pIHtcclxuICAgICAgcmV0dXJuIGEgPT0gJ3gnID9cclxuICAgICAgICAgIHRoaXMuc2NhbGUoLTEsIDEsIG8sIDApIDpcclxuICAgICAgICBhID09ICd5JyA/XHJcbiAgICAgICAgICB0aGlzLnNjYWxlKDEsIC0xLCAwLCBvKSA6XHJcbiAgICAgICAgICB0aGlzLnNjYWxlKC0xLCAtMSwgYSwgbyAhPSBudWxsID8gbyA6IGEpXHJcbiAgICB9XHJcbiAgICAvLyBTa2V3XHJcbiAgLCBza2V3OiBmdW5jdGlvbih4LCB5LCBjeCwgY3kpIHtcclxuICAgICAgLy8gc3VwcG9ydCB1bmlmb3JtYWwgc2tld1xyXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgeSA9IHhcclxuICAgICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDMpIHtcclxuICAgICAgICBjeSA9IGN4XHJcbiAgICAgICAgY3ggPSB5XHJcbiAgICAgICAgeSA9IHhcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gY29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcclxuICAgICAgeCA9IFNWRy51dGlscy5yYWRpYW5zKHgpXHJcbiAgICAgIHkgPSBTVkcudXRpbHMucmFkaWFucyh5KVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuYXJvdW5kKGN4LCBjeSwgbmV3IFNWRy5NYXRyaXgoMSwgTWF0aC50YW4oeSksIE1hdGgudGFuKHgpLCAxLCAwLCAwKSlcclxuICAgIH1cclxuICAgIC8vIFNrZXdYXHJcbiAgLCBza2V3WDogZnVuY3Rpb24oeCwgY3gsIGN5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNrZXcoeCwgMCwgY3gsIGN5KVxyXG4gICAgfVxyXG4gICAgLy8gU2tld1lcclxuICAsIHNrZXdZOiBmdW5jdGlvbih5LCBjeCwgY3kpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2tldygwLCB5LCBjeCwgY3kpXHJcbiAgICB9XHJcbiAgICAvLyBUcmFuc2Zvcm0gYXJvdW5kIGEgY2VudGVyIHBvaW50XHJcbiAgLCBhcm91bmQ6IGZ1bmN0aW9uKGN4LCBjeSwgbWF0cml4KSB7XHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICAgICAgLm11bHRpcGx5KG5ldyBTVkcuTWF0cml4KDEsIDAsIDAsIDEsIGN4IHx8IDAsIGN5IHx8IDApKVxyXG4gICAgICAgIC5tdWx0aXBseShtYXRyaXgpXHJcbiAgICAgICAgLm11bHRpcGx5KG5ldyBTVkcuTWF0cml4KDEsIDAsIDAsIDEsIC1jeCB8fCAwLCAtY3kgfHwgMCkpXHJcbiAgICB9XHJcbiAgICAvLyBDb252ZXJ0IHRvIG5hdGl2ZSBTVkdNYXRyaXhcclxuICAsIG5hdGl2ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIGNyZWF0ZSBuZXcgbWF0cml4XHJcbiAgICAgIHZhciBtYXRyaXggPSBTVkcucGFyc2VyLm5hdGl2ZS5jcmVhdGVTVkdNYXRyaXgoKVxyXG5cclxuICAgICAgLy8gdXBkYXRlIHdpdGggY3VycmVudCB2YWx1ZXNcclxuICAgICAgZm9yICh2YXIgaSA9IGFiY2RlZi5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuICAgICAgICBtYXRyaXhbYWJjZGVmW2ldXSA9IHRoaXNbYWJjZGVmW2ldXVxyXG5cclxuICAgICAgcmV0dXJuIG1hdHJpeFxyXG4gICAgfVxyXG4gICAgLy8gQ29udmVydCBtYXRyaXggdG8gc3RyaW5nXHJcbiAgLCB0b1N0cmluZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIENvbnN0cnVjdCB0aGUgbWF0cml4IGRpcmVjdGx5LCBhdm9pZCB2YWx1ZXMgdGhhdCBhcmUgdG9vIHNtYWxsXHJcbiAgICAgIHJldHVybiAnbWF0cml4KCcgKyBmbG9hdDMyU3RyaW5nKHRoaXMuYSkgKyAnLCcgKyBmbG9hdDMyU3RyaW5nKHRoaXMuYilcclxuICAgICAgICArICcsJyArIGZsb2F0MzJTdHJpbmcodGhpcy5jKSArICcsJyArIGZsb2F0MzJTdHJpbmcodGhpcy5kKVxyXG4gICAgICAgICsgJywnICsgZmxvYXQzMlN0cmluZyh0aGlzLmUpICsgJywnICsgZmxvYXQzMlN0cmluZyh0aGlzLmYpXHJcbiAgICAgICAgKyAnKSdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIERlZmluZSBwYXJlbnRcclxuLCBwYXJlbnQ6IFNWRy5FbGVtZW50XHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBHZXQgY3VycmVudCBtYXRyaXhcclxuICAgIGN0bTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBuZXcgU1ZHLk1hdHJpeCh0aGlzLm5vZGUuZ2V0Q1RNKCkpXHJcbiAgICB9LFxyXG4gICAgLy8gR2V0IGN1cnJlbnQgc2NyZWVuIG1hdHJpeFxyXG4gICAgc2NyZWVuQ1RNOiBmdW5jdGlvbigpIHtcclxuICAgICAgLyogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM0NDUzN1xyXG4gICAgICAgICBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIEZGIGRvZXMgbm90IHJldHVybiB0aGUgdHJhbnNmb3JtYXRpb24gbWF0cml4XHJcbiAgICAgICAgIGZvciB0aGUgaW5uZXIgY29vcmRpbmF0ZSBzeXN0ZW0gd2hlbiBnZXRTY3JlZW5DVE0oKSBpcyBjYWxsZWQgb24gbmVzdGVkIHN2Z3MuXHJcbiAgICAgICAgIEhvd2V2ZXIgYWxsIG90aGVyIEJyb3dzZXJzIGRvIHRoYXQgKi9cclxuICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIFNWRy5OZXN0ZWQpIHtcclxuICAgICAgICB2YXIgcmVjdCA9IHRoaXMucmVjdCgxLDEpXHJcbiAgICAgICAgdmFyIG0gPSByZWN0Lm5vZGUuZ2V0U2NyZWVuQ1RNKClcclxuICAgICAgICByZWN0LnJlbW92ZSgpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBTVkcuTWF0cml4KG0pXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ldyBTVkcuTWF0cml4KHRoaXMubm9kZS5nZXRTY3JlZW5DVE0oKSlcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufSlcclxuXG5TVkcuUG9pbnQgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplXHJcbiAgY3JlYXRlOiBmdW5jdGlvbih4LHkpIHtcclxuICAgIHZhciBpLCBzb3VyY2UsIGJhc2UgPSB7eDowLCB5OjB9XHJcblxyXG4gICAgLy8gZW5zdXJlIHNvdXJjZSBhcyBvYmplY3RcclxuICAgIHNvdXJjZSA9IEFycmF5LmlzQXJyYXkoeCkgP1xyXG4gICAgICB7eDp4WzBdLCB5OnhbMV19IDpcclxuICAgIHR5cGVvZiB4ID09PSAnb2JqZWN0JyA/XHJcbiAgICAgIHt4OngueCwgeTp4Lnl9IDpcclxuICAgIHggIT0gbnVsbCA/XHJcbiAgICAgIHt4OngsIHk6KHkgIT0gbnVsbCA/IHkgOiB4KX0gOiBiYXNlIC8vIElmIHkgaGFzIG5vIHZhbHVlLCB0aGVuIHggaXMgdXNlZCBoYXMgaXRzIHZhbHVlXHJcblxyXG4gICAgLy8gbWVyZ2Ugc291cmNlXHJcbiAgICB0aGlzLnggPSBzb3VyY2UueFxyXG4gICAgdGhpcy55ID0gc291cmNlLnlcclxuICB9XHJcblxyXG4gIC8vIEFkZCBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBDbG9uZSBwb2ludFxyXG4gICAgY2xvbmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFNWRy5Qb2ludCh0aGlzKVxyXG4gICAgfVxyXG4gICAgLy8gTW9ycGggb25lIHBvaW50IGludG8gYW5vdGhlclxyXG4gICwgbW9ycGg6IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgICAgLy8gc3RvcmUgbmV3IGRlc3RpbmF0aW9uXHJcbiAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBuZXcgU1ZHLlBvaW50KHgsIHkpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gR2V0IG1vcnBoZWQgcG9pbnQgYXQgYSBnaXZlbiBwb3NpdGlvblxyXG4gICwgYXQ6IGZ1bmN0aW9uKHBvcykge1xyXG4gICAgICAvLyBtYWtlIHN1cmUgYSBkZXN0aW5hdGlvbiBpcyBkZWZpbmVkXHJcbiAgICAgIGlmICghdGhpcy5kZXN0aW5hdGlvbikgcmV0dXJuIHRoaXNcclxuXHJcbiAgICAgIC8vIGNhbGN1bGF0ZSBtb3JwaGVkIG1hdHJpeCBhdCBhIGdpdmVuIHBvc2l0aW9uXHJcbiAgICAgIHZhciBwb2ludCA9IG5ldyBTVkcuUG9pbnQoe1xyXG4gICAgICAgIHg6IHRoaXMueCArICh0aGlzLmRlc3RpbmF0aW9uLnggLSB0aGlzLngpICogcG9zXHJcbiAgICAgICwgeTogdGhpcy55ICsgKHRoaXMuZGVzdGluYXRpb24ueSAtIHRoaXMueSkgKiBwb3NcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiBwb2ludFxyXG4gICAgfVxyXG4gICAgLy8gQ29udmVydCB0byBuYXRpdmUgU1ZHUG9pbnRcclxuICAsIG5hdGl2ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIGNyZWF0ZSBuZXcgcG9pbnRcclxuICAgICAgdmFyIHBvaW50ID0gU1ZHLnBhcnNlci5uYXRpdmUuY3JlYXRlU1ZHUG9pbnQoKVxyXG5cclxuICAgICAgLy8gdXBkYXRlIHdpdGggY3VycmVudCB2YWx1ZXNcclxuICAgICAgcG9pbnQueCA9IHRoaXMueFxyXG4gICAgICBwb2ludC55ID0gdGhpcy55XHJcblxyXG4gICAgICByZXR1cm4gcG9pbnRcclxuICAgIH1cclxuICAgIC8vIHRyYW5zZm9ybSBwb2ludCB3aXRoIG1hdHJpeFxyXG4gICwgdHJhbnNmb3JtOiBmdW5jdGlvbihtYXRyaXgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBTVkcuUG9pbnQodGhpcy5uYXRpdmUoKS5tYXRyaXhUcmFuc2Zvcm0obWF0cml4Lm5hdGl2ZSgpKSlcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufSlcclxuXHJcblNWRy5leHRlbmQoU1ZHLkVsZW1lbnQsIHtcclxuXHJcbiAgLy8gR2V0IHBvaW50XHJcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgIHJldHVybiBuZXcgU1ZHLlBvaW50KHgseSkudHJhbnNmb3JtKHRoaXMuc2NyZWVuQ1RNKCkuaW52ZXJzZSgpKTtcclxuICB9XHJcblxyXG59KVxyXG5cblNWRy5leHRlbmQoU1ZHLkVsZW1lbnQsIHtcclxuICAvLyBTZXQgc3ZnIGVsZW1lbnQgYXR0cmlidXRlXHJcbiAgYXR0cjogZnVuY3Rpb24oYSwgdiwgbikge1xyXG4gICAgLy8gYWN0IGFzIGZ1bGwgZ2V0dGVyXHJcbiAgICBpZiAoYSA9PSBudWxsKSB7XHJcbiAgICAgIC8vIGdldCBhbiBvYmplY3Qgb2YgYXR0cmlidXRlc1xyXG4gICAgICBhID0ge31cclxuICAgICAgdiA9IHRoaXMubm9kZS5hdHRyaWJ1dGVzXHJcbiAgICAgIGZvciAobiA9IHYubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pXHJcbiAgICAgICAgYVt2W25dLm5vZGVOYW1lXSA9IFNWRy5yZWdleC5pc051bWJlci50ZXN0KHZbbl0ubm9kZVZhbHVlKSA/IHBhcnNlRmxvYXQodltuXS5ub2RlVmFsdWUpIDogdltuXS5ub2RlVmFsdWVcclxuXHJcbiAgICAgIHJldHVybiBhXHJcblxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAvLyBhcHBseSBldmVyeSBhdHRyaWJ1dGUgaW5kaXZpZHVhbGx5IGlmIGFuIG9iamVjdCBpcyBwYXNzZWRcclxuICAgICAgZm9yICh2IGluIGEpIHRoaXMuYXR0cih2LCBhW3ZdKVxyXG5cclxuICAgIH0gZWxzZSBpZiAodiA9PT0gbnVsbCkge1xyXG4gICAgICAgIC8vIHJlbW92ZSB2YWx1ZVxyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVBdHRyaWJ1dGUoYSlcclxuXHJcbiAgICB9IGVsc2UgaWYgKHYgPT0gbnVsbCkge1xyXG4gICAgICAvLyBhY3QgYXMgYSBnZXR0ZXIgaWYgdGhlIGZpcnN0IGFuZCBvbmx5IGFyZ3VtZW50IGlzIG5vdCBhbiBvYmplY3RcclxuICAgICAgdiA9IHRoaXMubm9kZS5nZXRBdHRyaWJ1dGUoYSlcclxuICAgICAgcmV0dXJuIHYgPT0gbnVsbCA/XHJcbiAgICAgICAgU1ZHLmRlZmF1bHRzLmF0dHJzW2FdIDpcclxuICAgICAgU1ZHLnJlZ2V4LmlzTnVtYmVyLnRlc3QodikgP1xyXG4gICAgICAgIHBhcnNlRmxvYXQodikgOiB2XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQlVHIEZJWDogc29tZSBicm93c2VycyB3aWxsIHJlbmRlciBhIHN0cm9rZSBpZiBhIGNvbG9yIGlzIGdpdmVuIGV2ZW4gdGhvdWdoIHN0cm9rZSB3aWR0aCBpcyAwXHJcbiAgICAgIGlmIChhID09ICdzdHJva2Utd2lkdGgnKVxyXG4gICAgICAgIHRoaXMuYXR0cignc3Ryb2tlJywgcGFyc2VGbG9hdCh2KSA+IDAgPyB0aGlzLl9zdHJva2UgOiBudWxsKVxyXG4gICAgICBlbHNlIGlmIChhID09ICdzdHJva2UnKVxyXG4gICAgICAgIHRoaXMuX3N0cm9rZSA9IHZcclxuXHJcbiAgICAgIC8vIGNvbnZlcnQgaW1hZ2UgZmlsbCBhbmQgc3Ryb2tlIHRvIHBhdHRlcm5zXHJcbiAgICAgIGlmIChhID09ICdmaWxsJyB8fCBhID09ICdzdHJva2UnKSB7XHJcbiAgICAgICAgaWYgKFNWRy5yZWdleC5pc0ltYWdlLnRlc3QodikpXHJcbiAgICAgICAgICB2ID0gdGhpcy5kb2MoKS5kZWZzKCkuaW1hZ2UodiwgMCwgMClcclxuXHJcbiAgICAgICAgaWYgKHYgaW5zdGFuY2VvZiBTVkcuSW1hZ2UpXHJcbiAgICAgICAgICB2ID0gdGhpcy5kb2MoKS5kZWZzKCkucGF0dGVybigwLCAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGQodilcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGVuc3VyZSBjb3JyZWN0IG51bWVyaWMgdmFsdWVzIChhbHNvIGFjY2VwdHMgTmFOIGFuZCBJbmZpbml0eSlcclxuICAgICAgaWYgKHR5cGVvZiB2ID09PSAnbnVtYmVyJylcclxuICAgICAgICB2ID0gbmV3IFNWRy5OdW1iZXIodilcclxuXHJcbiAgICAgIC8vIGVuc3VyZSBmdWxsIGhleCBjb2xvclxyXG4gICAgICBlbHNlIGlmIChTVkcuQ29sb3IuaXNDb2xvcih2KSlcclxuICAgICAgICB2ID0gbmV3IFNWRy5Db2xvcih2KVxyXG5cclxuICAgICAgLy8gcGFyc2UgYXJyYXkgdmFsdWVzXHJcbiAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodikpXHJcbiAgICAgICAgdiA9IG5ldyBTVkcuQXJyYXkodilcclxuXHJcbiAgICAgIC8vIGlmIHRoZSBwYXNzZWQgYXR0cmlidXRlIGlzIGxlYWRpbmcuLi5cclxuICAgICAgaWYgKGEgPT0gJ2xlYWRpbmcnKSB7XHJcbiAgICAgICAgLy8gLi4uIGNhbGwgdGhlIGxlYWRpbmcgbWV0aG9kIGluc3RlYWRcclxuICAgICAgICBpZiAodGhpcy5sZWFkaW5nKVxyXG4gICAgICAgICAgdGhpcy5sZWFkaW5nKHYpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gc2V0IGdpdmVuIGF0dHJpYnV0ZSBvbiBub2RlXHJcbiAgICAgICAgdHlwZW9mIG4gPT09ICdzdHJpbmcnID9cclxuICAgICAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGVOUyhuLCBhLCB2LnRvU3RyaW5nKCkpIDpcclxuICAgICAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoYSwgdi50b1N0cmluZygpKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyByZWJ1aWxkIGlmIHJlcXVpcmVkXHJcbiAgICAgIGlmICh0aGlzLnJlYnVpbGQgJiYgKGEgPT0gJ2ZvbnQtc2l6ZScgfHwgYSA9PSAneCcpKVxyXG4gICAgICAgIHRoaXMucmVidWlsZChhLCB2KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG59KVxuU1ZHLmV4dGVuZChTVkcuRWxlbWVudCwge1xyXG4gIC8vIEFkZCB0cmFuc2Zvcm1hdGlvbnNcclxuICB0cmFuc2Zvcm06IGZ1bmN0aW9uKG8sIHJlbGF0aXZlKSB7XHJcbiAgICAvLyBnZXQgdGFyZ2V0IGluIGNhc2Ugb2YgdGhlIGZ4IG1vZHVsZSwgb3RoZXJ3aXNlIHJlZmVyZW5jZSB0aGlzXHJcbiAgICB2YXIgdGFyZ2V0ID0gdGhpc1xyXG4gICAgICAsIG1hdHJpeCwgYmJveFxyXG5cclxuICAgIC8vIGFjdCBhcyBhIGdldHRlclxyXG4gICAgaWYgKHR5cGVvZiBvICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAvLyBnZXQgY3VycmVudCBtYXRyaXhcclxuICAgICAgbWF0cml4ID0gbmV3IFNWRy5NYXRyaXgodGFyZ2V0KS5leHRyYWN0KClcclxuXHJcbiAgICAgIHJldHVybiB0eXBlb2YgbyA9PT0gJ3N0cmluZycgPyBtYXRyaXhbb10gOiBtYXRyaXhcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgY3VycmVudCBtYXRyaXhcclxuICAgIG1hdHJpeCA9IG5ldyBTVkcuTWF0cml4KHRhcmdldClcclxuXHJcbiAgICAvLyBlbnN1cmUgcmVsYXRpdmUgZmxhZ1xyXG4gICAgcmVsYXRpdmUgPSAhIXJlbGF0aXZlIHx8ICEhby5yZWxhdGl2ZVxyXG5cclxuICAgIC8vIGFjdCBvbiBtYXRyaXhcclxuICAgIGlmIChvLmEgIT0gbnVsbCkge1xyXG4gICAgICBtYXRyaXggPSByZWxhdGl2ZSA/XHJcbiAgICAgICAgLy8gcmVsYXRpdmVcclxuICAgICAgICBtYXRyaXgubXVsdGlwbHkobmV3IFNWRy5NYXRyaXgobykpIDpcclxuICAgICAgICAvLyBhYnNvbHV0ZVxyXG4gICAgICAgIG5ldyBTVkcuTWF0cml4KG8pXHJcblxyXG4gICAgLy8gYWN0IG9uIHJvdGF0aW9uXHJcbiAgICB9IGVsc2UgaWYgKG8ucm90YXRpb24gIT0gbnVsbCkge1xyXG4gICAgICAvLyBlbnN1cmUgY2VudHJlIHBvaW50XHJcbiAgICAgIGVuc3VyZUNlbnRyZShvLCB0YXJnZXQpXHJcblxyXG4gICAgICAvLyBhcHBseSB0cmFuc2Zvcm1hdGlvblxyXG4gICAgICBtYXRyaXggPSByZWxhdGl2ZSA/XHJcbiAgICAgICAgLy8gcmVsYXRpdmVcclxuICAgICAgICBtYXRyaXgucm90YXRlKG8ucm90YXRpb24sIG8uY3gsIG8uY3kpIDpcclxuICAgICAgICAvLyBhYnNvbHV0ZVxyXG4gICAgICAgIG1hdHJpeC5yb3RhdGUoby5yb3RhdGlvbiAtIG1hdHJpeC5leHRyYWN0KCkucm90YXRpb24sIG8uY3gsIG8uY3kpXHJcblxyXG4gICAgLy8gYWN0IG9uIHNjYWxlXHJcbiAgICB9IGVsc2UgaWYgKG8uc2NhbGUgIT0gbnVsbCB8fCBvLnNjYWxlWCAhPSBudWxsIHx8IG8uc2NhbGVZICE9IG51bGwpIHtcclxuICAgICAgLy8gZW5zdXJlIGNlbnRyZSBwb2ludFxyXG4gICAgICBlbnN1cmVDZW50cmUobywgdGFyZ2V0KVxyXG5cclxuICAgICAgLy8gZW5zdXJlIHNjYWxlIHZhbHVlcyBvbiBib3RoIGF4ZXNcclxuICAgICAgby5zY2FsZVggPSBvLnNjYWxlICE9IG51bGwgPyBvLnNjYWxlIDogby5zY2FsZVggIT0gbnVsbCA/IG8uc2NhbGVYIDogMVxyXG4gICAgICBvLnNjYWxlWSA9IG8uc2NhbGUgIT0gbnVsbCA/IG8uc2NhbGUgOiBvLnNjYWxlWSAhPSBudWxsID8gby5zY2FsZVkgOiAxXHJcblxyXG4gICAgICBpZiAoIXJlbGF0aXZlKSB7XHJcbiAgICAgICAgLy8gYWJzb2x1dGU7IG11bHRpcGx5IGludmVyc2VkIHZhbHVlc1xyXG4gICAgICAgIHZhciBlID0gbWF0cml4LmV4dHJhY3QoKVxyXG4gICAgICAgIG8uc2NhbGVYID0gby5zY2FsZVggKiAxIC8gZS5zY2FsZVhcclxuICAgICAgICBvLnNjYWxlWSA9IG8uc2NhbGVZICogMSAvIGUuc2NhbGVZXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdHJpeCA9IG1hdHJpeC5zY2FsZShvLnNjYWxlWCwgby5zY2FsZVksIG8uY3gsIG8uY3kpXHJcblxyXG4gICAgLy8gYWN0IG9uIHNrZXdcclxuICAgIH0gZWxzZSBpZiAoby5za2V3ICE9IG51bGwgfHwgby5za2V3WCAhPSBudWxsIHx8IG8uc2tld1kgIT0gbnVsbCkge1xyXG4gICAgICAvLyBlbnN1cmUgY2VudHJlIHBvaW50XHJcbiAgICAgIGVuc3VyZUNlbnRyZShvLCB0YXJnZXQpXHJcblxyXG4gICAgICAvLyBlbnN1cmUgc2tldyB2YWx1ZXMgb24gYm90aCBheGVzXHJcbiAgICAgIG8uc2tld1ggPSBvLnNrZXcgIT0gbnVsbCA/IG8uc2tldyA6IG8uc2tld1ggIT0gbnVsbCA/IG8uc2tld1ggOiAwXHJcbiAgICAgIG8uc2tld1kgPSBvLnNrZXcgIT0gbnVsbCA/IG8uc2tldyA6IG8uc2tld1kgIT0gbnVsbCA/IG8uc2tld1kgOiAwXHJcblxyXG4gICAgICBpZiAoIXJlbGF0aXZlKSB7XHJcbiAgICAgICAgLy8gYWJzb2x1dGU7IHJlc2V0IHNrZXcgdmFsdWVzXHJcbiAgICAgICAgdmFyIGUgPSBtYXRyaXguZXh0cmFjdCgpXHJcbiAgICAgICAgbWF0cml4ID0gbWF0cml4Lm11bHRpcGx5KG5ldyBTVkcuTWF0cml4KCkuc2tldyhlLnNrZXdYLCBlLnNrZXdZLCBvLmN4LCBvLmN5KS5pbnZlcnNlKCkpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdHJpeCA9IG1hdHJpeC5za2V3KG8uc2tld1gsIG8uc2tld1ksIG8uY3gsIG8uY3kpXHJcblxyXG4gICAgLy8gYWN0IG9uIGZsaXBcclxuICAgIH0gZWxzZSBpZiAoby5mbGlwKSB7XHJcbiAgICAgIGlmKG8uZmxpcCA9PSAneCcgfHwgby5mbGlwID09ICd5Jykge1xyXG4gICAgICAgIG8ub2Zmc2V0ID0gby5vZmZzZXQgPT0gbnVsbCA/IHRhcmdldC5iYm94KClbJ2MnICsgby5mbGlwXSA6IG8ub2Zmc2V0XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYoby5vZmZzZXQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgYmJveCA9IHRhcmdldC5iYm94KClcclxuICAgICAgICAgIG8uZmxpcCA9IGJib3guY3hcclxuICAgICAgICAgIG8ub2Zmc2V0ID0gYmJveC5jeVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBvLmZsaXAgPSBvLm9mZnNldFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0cml4ID0gbmV3IFNWRy5NYXRyaXgoKS5mbGlwKG8uZmxpcCwgby5vZmZzZXQpXHJcblxyXG4gICAgLy8gYWN0IG9uIHRyYW5zbGF0ZVxyXG4gICAgfSBlbHNlIGlmIChvLnggIT0gbnVsbCB8fCBvLnkgIT0gbnVsbCkge1xyXG4gICAgICBpZiAocmVsYXRpdmUpIHtcclxuICAgICAgICAvLyByZWxhdGl2ZVxyXG4gICAgICAgIG1hdHJpeCA9IG1hdHJpeC50cmFuc2xhdGUoby54LCBvLnkpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gYWJzb2x1dGVcclxuICAgICAgICBpZiAoby54ICE9IG51bGwpIG1hdHJpeC5lID0gby54XHJcbiAgICAgICAgaWYgKG8ueSAhPSBudWxsKSBtYXRyaXguZiA9IG8ueVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuYXR0cigndHJhbnNmb3JtJywgbWF0cml4KVxyXG4gIH1cclxufSlcclxuXHJcblNWRy5leHRlbmQoU1ZHLkZYLCB7XHJcbiAgdHJhbnNmb3JtOiBmdW5jdGlvbihvLCByZWxhdGl2ZSkge1xyXG4gICAgLy8gZ2V0IHRhcmdldCBpbiBjYXNlIG9mIHRoZSBmeCBtb2R1bGUsIG90aGVyd2lzZSByZWZlcmVuY2UgdGhpc1xyXG4gICAgdmFyIHRhcmdldCA9IHRoaXMudGFyZ2V0KClcclxuICAgICAgLCBtYXRyaXgsIGJib3hcclxuXHJcbiAgICAvLyBhY3QgYXMgYSBnZXR0ZXJcclxuICAgIGlmICh0eXBlb2YgbyAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgLy8gZ2V0IGN1cnJlbnQgbWF0cml4XHJcbiAgICAgIG1hdHJpeCA9IG5ldyBTVkcuTWF0cml4KHRhcmdldCkuZXh0cmFjdCgpXHJcblxyXG4gICAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdzdHJpbmcnID8gbWF0cml4W29dIDogbWF0cml4XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZW5zdXJlIHJlbGF0aXZlIGZsYWdcclxuICAgIHJlbGF0aXZlID0gISFyZWxhdGl2ZSB8fCAhIW8ucmVsYXRpdmVcclxuXHJcbiAgICAvLyBhY3Qgb24gbWF0cml4XHJcbiAgICBpZiAoby5hICE9IG51bGwpIHtcclxuICAgICAgbWF0cml4ID0gbmV3IFNWRy5NYXRyaXgobylcclxuXHJcbiAgICAvLyBhY3Qgb24gcm90YXRpb25cclxuICAgIH0gZWxzZSBpZiAoby5yb3RhdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgIC8vIGVuc3VyZSBjZW50cmUgcG9pbnRcclxuICAgICAgZW5zdXJlQ2VudHJlKG8sIHRhcmdldClcclxuXHJcbiAgICAgIC8vIGFwcGx5IHRyYW5zZm9ybWF0aW9uXHJcbiAgICAgIG1hdHJpeCA9IG5ldyBTVkcuUm90YXRlKG8ucm90YXRpb24sIG8uY3gsIG8uY3kpXHJcblxyXG4gICAgLy8gYWN0IG9uIHNjYWxlXHJcbiAgICB9IGVsc2UgaWYgKG8uc2NhbGUgIT0gbnVsbCB8fCBvLnNjYWxlWCAhPSBudWxsIHx8IG8uc2NhbGVZICE9IG51bGwpIHtcclxuICAgICAgLy8gZW5zdXJlIGNlbnRyZSBwb2ludFxyXG4gICAgICBlbnN1cmVDZW50cmUobywgdGFyZ2V0KVxyXG5cclxuICAgICAgLy8gZW5zdXJlIHNjYWxlIHZhbHVlcyBvbiBib3RoIGF4ZXNcclxuICAgICAgby5zY2FsZVggPSBvLnNjYWxlICE9IG51bGwgPyBvLnNjYWxlIDogby5zY2FsZVggIT0gbnVsbCA/IG8uc2NhbGVYIDogMVxyXG4gICAgICBvLnNjYWxlWSA9IG8uc2NhbGUgIT0gbnVsbCA/IG8uc2NhbGUgOiBvLnNjYWxlWSAhPSBudWxsID8gby5zY2FsZVkgOiAxXHJcblxyXG4gICAgICBtYXRyaXggPSBuZXcgU1ZHLlNjYWxlKG8uc2NhbGVYLCBvLnNjYWxlWSwgby5jeCwgby5jeSlcclxuXHJcbiAgICAvLyBhY3Qgb24gc2tld1xyXG4gICAgfSBlbHNlIGlmIChvLnNrZXdYICE9IG51bGwgfHwgby5za2V3WSAhPSBudWxsKSB7XHJcbiAgICAgIC8vIGVuc3VyZSBjZW50cmUgcG9pbnRcclxuICAgICAgZW5zdXJlQ2VudHJlKG8sIHRhcmdldClcclxuXHJcbiAgICAgIC8vIGVuc3VyZSBza2V3IHZhbHVlcyBvbiBib3RoIGF4ZXNcclxuICAgICAgby5za2V3WCA9IG8uc2tld1ggIT0gbnVsbCA/IG8uc2tld1ggOiAwXHJcbiAgICAgIG8uc2tld1kgPSBvLnNrZXdZICE9IG51bGwgPyBvLnNrZXdZIDogMFxyXG5cclxuICAgICAgbWF0cml4ID0gbmV3IFNWRy5Ta2V3KG8uc2tld1gsIG8uc2tld1ksIG8uY3gsIG8uY3kpXHJcblxyXG4gICAgLy8gYWN0IG9uIGZsaXBcclxuICAgIH0gZWxzZSBpZiAoby5mbGlwKSB7XHJcbiAgICAgIGlmKG8uZmxpcCA9PSAneCcgfHwgby5mbGlwID09ICd5Jykge1xyXG4gICAgICAgIG8ub2Zmc2V0ID0gby5vZmZzZXQgPT0gbnVsbCA/IHRhcmdldC5iYm94KClbJ2MnICsgby5mbGlwXSA6IG8ub2Zmc2V0XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYoby5vZmZzZXQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgYmJveCA9IHRhcmdldC5iYm94KClcclxuICAgICAgICAgIG8uZmxpcCA9IGJib3guY3hcclxuICAgICAgICAgIG8ub2Zmc2V0ID0gYmJveC5jeVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBvLmZsaXAgPSBvLm9mZnNldFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0cml4ID0gbmV3IFNWRy5NYXRyaXgoKS5mbGlwKG8uZmxpcCwgby5vZmZzZXQpXHJcblxyXG4gICAgLy8gYWN0IG9uIHRyYW5zbGF0ZVxyXG4gICAgfSBlbHNlIGlmIChvLnggIT0gbnVsbCB8fCBvLnkgIT0gbnVsbCkge1xyXG4gICAgICBtYXRyaXggPSBuZXcgU1ZHLlRyYW5zbGF0ZShvLngsIG8ueSlcclxuICAgIH1cclxuXHJcbiAgICBpZighbWF0cml4KSByZXR1cm4gdGhpc1xyXG5cclxuICAgIG1hdHJpeC5yZWxhdGl2ZSA9IHJlbGF0aXZlXHJcblxyXG4gICAgdGhpcy5sYXN0KCkudHJhbnNmb3Jtcy5wdXNoKG1hdHJpeClcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fY2FsbFN0YXJ0KClcclxuICB9XHJcbn0pXHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5FbGVtZW50LCB7XHJcbiAgLy8gUmVzZXQgYWxsIHRyYW5zZm9ybWF0aW9uc1xyXG4gIHVudHJhbnNmb3JtOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmF0dHIoJ3RyYW5zZm9ybScsIG51bGwpXHJcbiAgfSxcclxuICAvLyBtZXJnZSB0aGUgd2hvbGUgdHJhbnNmb3JtYXRpb24gY2hhaW4gaW50byBvbmUgbWF0cml4IGFuZCByZXR1cm5zIGl0XHJcbiAgbWF0cml4aWZ5OiBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB2YXIgbWF0cml4ID0gKHRoaXMuYXR0cigndHJhbnNmb3JtJykgfHwgJycpXHJcbiAgICAgIC8vIHNwbGl0IHRyYW5zZm9ybWF0aW9uc1xyXG4gICAgICAuc3BsaXQoU1ZHLnJlZ2V4LnRyYW5zZm9ybXMpLnNsaWNlKDAsLTEpLm1hcChmdW5jdGlvbihzdHIpe1xyXG4gICAgICAgIC8vIGdlbmVyYXRlIGtleSA9PiB2YWx1ZSBwYWlyc1xyXG4gICAgICAgIHZhciBrdiA9IHN0ci50cmltKCkuc3BsaXQoJygnKVxyXG4gICAgICAgIHJldHVybiBba3ZbMF0sIGt2WzFdLnNwbGl0KFNWRy5yZWdleC5kZWxpbWl0ZXIpLm1hcChmdW5jdGlvbihzdHIpeyByZXR1cm4gcGFyc2VGbG9hdChzdHIpIH0pXVxyXG4gICAgICB9KVxyXG4gICAgICAvLyBtZXJnZSBldmVyeSB0cmFuc2Zvcm1hdGlvbiBpbnRvIG9uZSBtYXRyaXhcclxuICAgICAgLnJlZHVjZShmdW5jdGlvbihtYXRyaXgsIHRyYW5zZm9ybSl7XHJcblxyXG4gICAgICAgIGlmKHRyYW5zZm9ybVswXSA9PSAnbWF0cml4JykgcmV0dXJuIG1hdHJpeC5tdWx0aXBseShhcnJheVRvTWF0cml4KHRyYW5zZm9ybVsxXSkpXHJcbiAgICAgICAgcmV0dXJuIG1hdHJpeFt0cmFuc2Zvcm1bMF1dLmFwcGx5KG1hdHJpeCwgdHJhbnNmb3JtWzFdKVxyXG5cclxuICAgICAgfSwgbmV3IFNWRy5NYXRyaXgoKSlcclxuXHJcbiAgICByZXR1cm4gbWF0cml4XHJcbiAgfSxcclxuICAvLyBhZGQgYW4gZWxlbWVudCB0byBhbm90aGVyIHBhcmVudCB3aXRob3V0IGNoYW5naW5nIHRoZSB2aXN1YWwgcmVwcmVzZW50YXRpb24gb24gdGhlIHNjcmVlblxyXG4gIHRvUGFyZW50OiBmdW5jdGlvbihwYXJlbnQpIHtcclxuICAgIGlmKHRoaXMgPT0gcGFyZW50KSByZXR1cm4gdGhpc1xyXG4gICAgdmFyIGN0bSA9IHRoaXMuc2NyZWVuQ1RNKClcclxuICAgIHZhciBwQ3RtID0gcGFyZW50LnNjcmVlbkNUTSgpLmludmVyc2UoKVxyXG5cclxuICAgIHRoaXMuYWRkVG8ocGFyZW50KS51bnRyYW5zZm9ybSgpLnRyYW5zZm9ybShwQ3RtLm11bHRpcGx5KGN0bSkpXHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9LFxyXG4gIC8vIHNhbWUgYXMgYWJvdmUgd2l0aCBwYXJlbnQgZXF1YWxzIHJvb3Qtc3ZnXHJcbiAgdG9Eb2M6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9QYXJlbnQodGhpcy5kb2MoKSlcclxuICB9XHJcblxyXG59KVxyXG5cclxuU1ZHLlRyYW5zZm9ybWF0aW9uID0gU1ZHLmludmVudCh7XHJcblxyXG4gIGNyZWF0ZTogZnVuY3Rpb24oc291cmNlLCBpbnZlcnNlZCl7XHJcblxyXG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgdHlwZW9mIGludmVyc2VkICE9ICdib29sZWFuJyl7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKVxyXG4gICAgfVxyXG5cclxuICAgIGlmKEFycmF5LmlzQXJyYXkoc291cmNlKSl7XHJcbiAgICAgIGZvcih2YXIgaSA9IDAsIGxlbiA9IHRoaXMuYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKXtcclxuICAgICAgICB0aGlzW3RoaXMuYXJndW1lbnRzW2ldXSA9IHNvdXJjZVtpXVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYodHlwZW9mIHNvdXJjZSA9PSAnb2JqZWN0Jyl7XHJcbiAgICAgIGZvcih2YXIgaSA9IDAsIGxlbiA9IHRoaXMuYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKXtcclxuICAgICAgICB0aGlzW3RoaXMuYXJndW1lbnRzW2ldXSA9IHNvdXJjZVt0aGlzLmFyZ3VtZW50c1tpXV1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW52ZXJzZWQgPSBmYWxzZVxyXG5cclxuICAgIGlmKGludmVyc2VkID09PSB0cnVlKXtcclxuICAgICAgdGhpcy5pbnZlcnNlZCA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuLCBleHRlbmQ6IHtcclxuXHJcbiAgICBhcmd1bWVudHM6IFtdXHJcbiAgLCBtZXRob2Q6ICcnXHJcblxyXG4gICwgYXQ6IGZ1bmN0aW9uKHBvcyl7XHJcblxyXG4gICAgICB2YXIgcGFyYW1zID0gW11cclxuXHJcbiAgICAgIGZvcih2YXIgaSA9IDAsIGxlbiA9IHRoaXMuYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKXtcclxuICAgICAgICBwYXJhbXMucHVzaCh0aGlzW3RoaXMuYXJndW1lbnRzW2ldXSlcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIG0gPSB0aGlzLl91bmRvIHx8IG5ldyBTVkcuTWF0cml4KClcclxuXHJcbiAgICAgIG0gPSBuZXcgU1ZHLk1hdHJpeCgpLm1vcnBoKFNWRy5NYXRyaXgucHJvdG90eXBlW3RoaXMubWV0aG9kXS5hcHBseShtLCBwYXJhbXMpKS5hdChwb3MpXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pbnZlcnNlZCA/IG0uaW52ZXJzZSgpIDogbVxyXG5cclxuICAgIH1cclxuXHJcbiAgLCB1bmRvOiBmdW5jdGlvbihvKXtcclxuICAgICAgZm9yKHZhciBpID0gMCwgbGVuID0gdGhpcy5hcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpe1xyXG4gICAgICAgIG9bdGhpcy5hcmd1bWVudHNbaV1dID0gdHlwZW9mIHRoaXNbdGhpcy5hcmd1bWVudHNbaV1dID09ICd1bmRlZmluZWQnID8gMCA6IG9bdGhpcy5hcmd1bWVudHNbaV1dXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRoZSBtZXRob2QgU1ZHLk1hdHJpeC5leHRyYWN0IHdoaWNoIHdhcyB1c2VkIGJlZm9yZSBjYWxsaW5nIHRoaXNcclxuICAgICAgLy8gbWV0aG9kIHRvIG9idGFpbiBhIHZhbHVlIGZvciB0aGUgcGFyYW1ldGVyIG8gZG9lc24ndCByZXR1cm4gYSBjeCBhbmRcclxuICAgICAgLy8gYSBjeSBzbyB3ZSB1c2UgdGhlIG9uZXMgdGhhdCB3ZXJlIHByb3ZpZGVkIHRvIHRoaXMgb2JqZWN0IGF0IGl0cyBjcmVhdGlvblxyXG4gICAgICBvLmN4ID0gdGhpcy5jeFxyXG4gICAgICBvLmN5ID0gdGhpcy5jeVxyXG5cclxuICAgICAgdGhpcy5fdW5kbyA9IG5ldyBTVkdbY2FwaXRhbGl6ZSh0aGlzLm1ldGhvZCldKG8sIHRydWUpLmF0KDEpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59KVxyXG5cclxuU1ZHLlRyYW5zbGF0ZSA9IFNWRy5pbnZlbnQoe1xyXG5cclxuICBwYXJlbnQ6IFNWRy5NYXRyaXhcclxuLCBpbmhlcml0OiBTVkcuVHJhbnNmb3JtYXRpb25cclxuXHJcbiwgY3JlYXRlOiBmdW5jdGlvbihzb3VyY2UsIGludmVyc2VkKXtcclxuICAgIHRoaXMuY29uc3RydWN0b3IuYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKVxyXG4gIH1cclxuXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICBhcmd1bWVudHM6IFsndHJhbnNmb3JtZWRYJywgJ3RyYW5zZm9ybWVkWSddXHJcbiAgLCBtZXRob2Q6ICd0cmFuc2xhdGUnXHJcbiAgfVxyXG5cclxufSlcclxuXHJcblNWRy5Sb3RhdGUgPSBTVkcuaW52ZW50KHtcclxuXHJcbiAgcGFyZW50OiBTVkcuTWF0cml4XHJcbiwgaW5oZXJpdDogU1ZHLlRyYW5zZm9ybWF0aW9uXHJcblxyXG4sIGNyZWF0ZTogZnVuY3Rpb24oc291cmNlLCBpbnZlcnNlZCl7XHJcbiAgICB0aGlzLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSlcclxuICB9XHJcblxyXG4sIGV4dGVuZDoge1xyXG4gICAgYXJndW1lbnRzOiBbJ3JvdGF0aW9uJywgJ2N4JywgJ2N5J11cclxuICAsIG1ldGhvZDogJ3JvdGF0ZSdcclxuICAsIGF0OiBmdW5jdGlvbihwb3Mpe1xyXG4gICAgICB2YXIgbSA9IG5ldyBTVkcuTWF0cml4KCkucm90YXRlKG5ldyBTVkcuTnVtYmVyKCkubW9ycGgodGhpcy5yb3RhdGlvbiAtICh0aGlzLl91bmRvID8gdGhpcy5fdW5kby5yb3RhdGlvbiA6IDApKS5hdChwb3MpLCB0aGlzLmN4LCB0aGlzLmN5KVxyXG4gICAgICByZXR1cm4gdGhpcy5pbnZlcnNlZCA/IG0uaW52ZXJzZSgpIDogbVxyXG4gICAgfVxyXG4gICwgdW5kbzogZnVuY3Rpb24obyl7XHJcbiAgICAgIHRoaXMuX3VuZG8gPSBvXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxuXHJcblNWRy5TY2FsZSA9IFNWRy5pbnZlbnQoe1xyXG5cclxuICBwYXJlbnQ6IFNWRy5NYXRyaXhcclxuLCBpbmhlcml0OiBTVkcuVHJhbnNmb3JtYXRpb25cclxuXHJcbiwgY3JlYXRlOiBmdW5jdGlvbihzb3VyY2UsIGludmVyc2VkKXtcclxuICAgIHRoaXMuY29uc3RydWN0b3IuYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKVxyXG4gIH1cclxuXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICBhcmd1bWVudHM6IFsnc2NhbGVYJywgJ3NjYWxlWScsICdjeCcsICdjeSddXHJcbiAgLCBtZXRob2Q6ICdzY2FsZSdcclxuICB9XHJcblxyXG59KVxyXG5cclxuU1ZHLlNrZXcgPSBTVkcuaW52ZW50KHtcclxuXHJcbiAgcGFyZW50OiBTVkcuTWF0cml4XHJcbiwgaW5oZXJpdDogU1ZHLlRyYW5zZm9ybWF0aW9uXHJcblxyXG4sIGNyZWF0ZTogZnVuY3Rpb24oc291cmNlLCBpbnZlcnNlZCl7XHJcbiAgICB0aGlzLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSlcclxuICB9XHJcblxyXG4sIGV4dGVuZDoge1xyXG4gICAgYXJndW1lbnRzOiBbJ3NrZXdYJywgJ3NrZXdZJywgJ2N4JywgJ2N5J11cclxuICAsIG1ldGhvZDogJ3NrZXcnXHJcbiAgfVxyXG5cclxufSlcclxuXG5TVkcuZXh0ZW5kKFNWRy5FbGVtZW50LCB7XHJcbiAgLy8gRHluYW1pYyBzdHlsZSBnZW5lcmF0b3JcclxuICBzdHlsZTogZnVuY3Rpb24ocywgdikge1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAvLyBnZXQgZnVsbCBzdHlsZVxyXG4gICAgICByZXR1cm4gdGhpcy5ub2RlLnN0eWxlLmNzc1RleHQgfHwgJydcclxuXHJcbiAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XHJcbiAgICAgIC8vIGFwcGx5IGV2ZXJ5IHN0eWxlIGluZGl2aWR1YWxseSBpZiBhbiBvYmplY3QgaXMgcGFzc2VkXHJcbiAgICAgIGlmICh0eXBlb2YgcyA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGZvciAodiBpbiBzKSB0aGlzLnN0eWxlKHYsIHNbdl0pXHJcblxyXG4gICAgICB9IGVsc2UgaWYgKFNWRy5yZWdleC5pc0Nzcy50ZXN0KHMpKSB7XHJcbiAgICAgICAgLy8gcGFyc2UgY3NzIHN0cmluZ1xyXG4gICAgICAgIHMgPSBzLnNwbGl0KC9cXHMqO1xccyovKVxyXG4gICAgICAgICAgLy8gZmlsdGVyIG91dCBzdWZmaXggOyBhbmQgc3R1ZmYgbGlrZSA7O1xyXG4gICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihlKSB7IHJldHVybiAhIWUgfSlcclxuICAgICAgICAgIC5tYXAoZnVuY3Rpb24oZSl7IHJldHVybiBlLnNwbGl0KC9cXHMqOlxccyovKSB9KVxyXG5cclxuICAgICAgICAvLyBhcHBseSBldmVyeSBkZWZpbml0aW9uIGluZGl2aWR1YWxseVxyXG4gICAgICAgIHdoaWxlICh2ID0gcy5wb3AoKSkge1xyXG4gICAgICAgICAgdGhpcy5zdHlsZSh2WzBdLCB2WzFdKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBhY3QgYXMgYSBnZXR0ZXIgaWYgdGhlIGZpcnN0IGFuZCBvbmx5IGFyZ3VtZW50IGlzIG5vdCBhbiBvYmplY3RcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnN0eWxlW2NhbWVsQ2FzZShzKV1cclxuICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubm9kZS5zdHlsZVtjYW1lbENhc2UocyldID0gdiA9PT0gbnVsbCB8fCBTVkcucmVnZXguaXNCbGFuay50ZXN0KHYpID8gJycgOiB2XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbn0pXG5TVkcuUGFyZW50ID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgZWxlbWVudClcclxuICB9XHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5FbGVtZW50XHJcblxyXG4gIC8vIEFkZCBjbGFzcyBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBSZXR1cm5zIGFsbCBjaGlsZCBlbGVtZW50c1xyXG4gICAgY2hpbGRyZW46IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gU1ZHLnV0aWxzLm1hcChTVkcudXRpbHMuZmlsdGVyU1ZHRWxlbWVudHModGhpcy5ub2RlLmNoaWxkTm9kZXMpLCBmdW5jdGlvbihub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIFNWRy5hZG9wdChub2RlKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8gQWRkIGdpdmVuIGVsZW1lbnQgYXQgYSBwb3NpdGlvblxyXG4gICwgYWRkOiBmdW5jdGlvbihlbGVtZW50LCBpKSB7XHJcbiAgICAgIGlmIChpID09IG51bGwpXHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGVsZW1lbnQubm9kZSlcclxuICAgICAgZWxzZSBpZiAoZWxlbWVudC5ub2RlICE9IHRoaXMubm9kZS5jaGlsZE5vZGVzW2ldKVxyXG4gICAgICAgIHRoaXMubm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudC5ub2RlLCB0aGlzLm5vZGUuY2hpbGROb2Rlc1tpXSlcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBCYXNpY2FsbHkgZG9lcyB0aGUgc2FtZSBhcyBgYWRkKClgIGJ1dCByZXR1cm5zIHRoZSBhZGRlZCBlbGVtZW50IGluc3RlYWRcclxuICAsIHB1dDogZnVuY3Rpb24oZWxlbWVudCwgaSkge1xyXG4gICAgICB0aGlzLmFkZChlbGVtZW50LCBpKVxyXG4gICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2tzIGlmIHRoZSBnaXZlbiBlbGVtZW50IGlzIGEgY2hpbGRcclxuICAsIGhhczogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pbmRleChlbGVtZW50KSA+PSAwXHJcbiAgICB9XHJcbiAgICAvLyBHZXRzIGluZGV4IG9mIGdpdmVuIGVsZW1lbnRcclxuICAsIGluZGV4OiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKHRoaXMubm9kZS5jaGlsZE5vZGVzKS5pbmRleE9mKGVsZW1lbnQubm9kZSlcclxuICAgIH1cclxuICAgIC8vIEdldCBhIGVsZW1lbnQgYXQgdGhlIGdpdmVuIGluZGV4XHJcbiAgLCBnZXQ6IGZ1bmN0aW9uKGkpIHtcclxuICAgICAgcmV0dXJuIFNWRy5hZG9wdCh0aGlzLm5vZGUuY2hpbGROb2Rlc1tpXSlcclxuICAgIH1cclxuICAgIC8vIEdldCBmaXJzdCBjaGlsZFxyXG4gICwgZmlyc3Q6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXQoMClcclxuICAgIH1cclxuICAgIC8vIEdldCB0aGUgbGFzdCBjaGlsZFxyXG4gICwgbGFzdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldCh0aGlzLm5vZGUuY2hpbGROb2Rlcy5sZW5ndGggLSAxKVxyXG4gICAgfVxyXG4gICAgLy8gSXRlcmF0ZXMgb3ZlciBhbGwgY2hpbGRyZW4gYW5kIGludm9rZXMgYSBnaXZlbiBibG9ja1xyXG4gICwgZWFjaDogZnVuY3Rpb24oYmxvY2ssIGRlZXApIHtcclxuICAgICAgdmFyIGksIGlsXHJcbiAgICAgICAgLCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oKVxyXG5cclxuICAgICAgZm9yIChpID0gMCwgaWwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGNoaWxkcmVuW2ldIGluc3RhbmNlb2YgU1ZHLkVsZW1lbnQpXHJcbiAgICAgICAgICBibG9jay5hcHBseShjaGlsZHJlbltpXSwgW2ksIGNoaWxkcmVuXSlcclxuXHJcbiAgICAgICAgaWYgKGRlZXAgJiYgKGNoaWxkcmVuW2ldIGluc3RhbmNlb2YgU1ZHLkNvbnRhaW5lcikpXHJcbiAgICAgICAgICBjaGlsZHJlbltpXS5lYWNoKGJsb2NrLCBkZWVwKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gUmVtb3ZlIGEgZ2l2ZW4gY2hpbGRcclxuICAsIHJlbW92ZUVsZW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQubm9kZSlcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBSZW1vdmUgYWxsIGVsZW1lbnRzIGluIHRoaXMgY29udGFpbmVyXHJcbiAgLCBjbGVhcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIHJlbW92ZSBjaGlsZHJlblxyXG4gICAgICB3aGlsZSh0aGlzLm5vZGUuaGFzQ2hpbGROb2RlcygpKVxyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUubGFzdENoaWxkKVxyXG5cclxuICAgICAgLy8gcmVtb3ZlIGRlZnMgcmVmZXJlbmNlXHJcbiAgICAgIGRlbGV0ZSB0aGlzLl9kZWZzXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICwgLy8gR2V0IGRlZnNcclxuICAgIGRlZnM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5kb2MoKS5kZWZzKClcclxuICAgIH1cclxuICB9XHJcblxyXG59KVxyXG5cblNWRy5leHRlbmQoU1ZHLlBhcmVudCwge1xyXG5cclxuICB1bmdyb3VwOiBmdW5jdGlvbihwYXJlbnQsIGRlcHRoKSB7XHJcbiAgICBpZihkZXB0aCA9PT0gMCB8fCB0aGlzIGluc3RhbmNlb2YgU1ZHLkRlZnMgfHwgdGhpcy5ub2RlID09IFNWRy5wYXJzZXIuZHJhdykgcmV0dXJuIHRoaXNcclxuXHJcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgKHRoaXMgaW5zdGFuY2VvZiBTVkcuRG9jID8gdGhpcyA6IHRoaXMucGFyZW50KFNWRy5QYXJlbnQpKVxyXG4gICAgZGVwdGggPSBkZXB0aCB8fCBJbmZpbml0eVxyXG5cclxuICAgIHRoaXMuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICBpZih0aGlzIGluc3RhbmNlb2YgU1ZHLkRlZnMpIHJldHVybiB0aGlzXHJcbiAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBTVkcuUGFyZW50KSByZXR1cm4gdGhpcy51bmdyb3VwKHBhcmVudCwgZGVwdGgtMSlcclxuICAgICAgcmV0dXJuIHRoaXMudG9QYXJlbnQocGFyZW50KVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLm5vZGUuZmlyc3RDaGlsZCB8fCB0aGlzLnJlbW92ZSgpXHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9LFxyXG5cclxuICBmbGF0dGVuOiBmdW5jdGlvbihwYXJlbnQsIGRlcHRoKSB7XHJcbiAgICByZXR1cm4gdGhpcy51bmdyb3VwKHBhcmVudCwgZGVwdGgpXHJcbiAgfVxyXG5cclxufSlcblNWRy5Db250YWluZXIgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBlbGVtZW50KVxyXG4gIH1cclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLlBhcmVudFxyXG5cclxufSlcblxyXG5TVkcuVmlld0JveCA9IFNWRy5pbnZlbnQoe1xyXG5cclxuICBjcmVhdGU6IGZ1bmN0aW9uKHNvdXJjZSkge1xyXG4gICAgdmFyIGksIGJhc2UgPSBbMCwgMCwgMCwgMF1cclxuXHJcbiAgICB2YXIgeCwgeSwgd2lkdGgsIGhlaWdodCwgYm94LCB2aWV3LCB3ZSwgaGVcclxuICAgICAgLCB3bSAgID0gMSAvLyB3aWR0aCBtdWx0aXBsaWVyXHJcbiAgICAgICwgaG0gICA9IDEgLy8gaGVpZ2h0IG11bHRpcGxpZXJcclxuICAgICAgLCByZWcgID0gL1srLV0/KD86XFxkKyg/OlxcLlxcZCopP3xcXC5cXGQrKSg/OmVbKy1dP1xcZCspPy9naVxyXG5cclxuICAgIGlmKHNvdXJjZSBpbnN0YW5jZW9mIFNWRy5FbGVtZW50KXtcclxuXHJcbiAgICAgIHdlID0gc291cmNlXHJcbiAgICAgIGhlID0gc291cmNlXHJcbiAgICAgIHZpZXcgPSAoc291cmNlLmF0dHIoJ3ZpZXdCb3gnKSB8fCAnJykubWF0Y2gocmVnKVxyXG4gICAgICBib3ggPSBzb3VyY2UuYmJveFxyXG5cclxuICAgICAgLy8gZ2V0IGRpbWVuc2lvbnMgb2YgY3VycmVudCBub2RlXHJcbiAgICAgIHdpZHRoICA9IG5ldyBTVkcuTnVtYmVyKHNvdXJjZS53aWR0aCgpKVxyXG4gICAgICBoZWlnaHQgPSBuZXcgU1ZHLk51bWJlcihzb3VyY2UuaGVpZ2h0KCkpXHJcblxyXG4gICAgICAvLyBmaW5kIG5lYXJlc3Qgbm9uLXBlcmNlbnR1YWwgZGltZW5zaW9uc1xyXG4gICAgICB3aGlsZSAod2lkdGgudW5pdCA9PSAnJScpIHtcclxuICAgICAgICB3bSAqPSB3aWR0aC52YWx1ZVxyXG4gICAgICAgIHdpZHRoID0gbmV3IFNWRy5OdW1iZXIod2UgaW5zdGFuY2VvZiBTVkcuRG9jID8gd2UucGFyZW50KCkub2Zmc2V0V2lkdGggOiB3ZS5wYXJlbnQoKS53aWR0aCgpKVxyXG4gICAgICAgIHdlID0gd2UucGFyZW50KClcclxuICAgICAgfVxyXG4gICAgICB3aGlsZSAoaGVpZ2h0LnVuaXQgPT0gJyUnKSB7XHJcbiAgICAgICAgaG0gKj0gaGVpZ2h0LnZhbHVlXHJcbiAgICAgICAgaGVpZ2h0ID0gbmV3IFNWRy5OdW1iZXIoaGUgaW5zdGFuY2VvZiBTVkcuRG9jID8gaGUucGFyZW50KCkub2Zmc2V0SGVpZ2h0IDogaGUucGFyZW50KCkuaGVpZ2h0KCkpXHJcbiAgICAgICAgaGUgPSBoZS5wYXJlbnQoKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBlbnN1cmUgZGVmYXVsdHNcclxuICAgICAgdGhpcy54ICAgICAgPSAwXHJcbiAgICAgIHRoaXMueSAgICAgID0gMFxyXG4gICAgICB0aGlzLndpZHRoICA9IHdpZHRoICAqIHdtXHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0ICogaG1cclxuICAgICAgdGhpcy56b29tICAgPSAxXHJcblxyXG4gICAgICBpZiAodmlldykge1xyXG4gICAgICAgIC8vIGdldCB3aWR0aCBhbmQgaGVpZ2h0IGZyb20gdmlld2JveFxyXG4gICAgICAgIHggICAgICA9IHBhcnNlRmxvYXQodmlld1swXSlcclxuICAgICAgICB5ICAgICAgPSBwYXJzZUZsb2F0KHZpZXdbMV0pXHJcbiAgICAgICAgd2lkdGggID0gcGFyc2VGbG9hdCh2aWV3WzJdKVxyXG4gICAgICAgIGhlaWdodCA9IHBhcnNlRmxvYXQodmlld1szXSlcclxuXHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHpvb20gYWNjb3JpbmcgdG8gdmlld2JveFxyXG4gICAgICAgIHRoaXMuem9vbSA9ICgodGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0KSA+ICh3aWR0aCAvIGhlaWdodCkpID9cclxuICAgICAgICAgIHRoaXMuaGVpZ2h0IC8gaGVpZ2h0IDpcclxuICAgICAgICAgIHRoaXMud2lkdGggIC8gd2lkdGhcclxuXHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHJlYWwgcGl4ZWwgZGltZW5zaW9ucyBvbiBwYXJlbnQgU1ZHLkRvYyBlbGVtZW50XHJcbiAgICAgICAgdGhpcy54ICAgICAgPSB4XHJcbiAgICAgICAgdGhpcy55ICAgICAgPSB5XHJcbiAgICAgICAgdGhpcy53aWR0aCAgPSB3aWR0aFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfWVsc2V7XHJcblxyXG4gICAgICAvLyBlbnN1cmUgc291cmNlIGFzIG9iamVjdFxyXG4gICAgICBzb3VyY2UgPSB0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJyA/XHJcbiAgICAgICAgc291cmNlLm1hdGNoKHJlZykubWFwKGZ1bmN0aW9uKGVsKXsgcmV0dXJuIHBhcnNlRmxvYXQoZWwpIH0pIDpcclxuICAgICAgQXJyYXkuaXNBcnJheShzb3VyY2UpID9cclxuICAgICAgICBzb3VyY2UgOlxyXG4gICAgICB0eXBlb2Ygc291cmNlID09ICdvYmplY3QnID9cclxuICAgICAgICBbc291cmNlLngsIHNvdXJjZS55LCBzb3VyY2Uud2lkdGgsIHNvdXJjZS5oZWlnaHRdIDpcclxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA9PSA0ID9cclxuICAgICAgICBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykgOlxyXG4gICAgICAgIGJhc2VcclxuXHJcbiAgICAgIHRoaXMueCA9IHNvdXJjZVswXVxyXG4gICAgICB0aGlzLnkgPSBzb3VyY2VbMV1cclxuICAgICAgdGhpcy53aWR0aCA9IHNvdXJjZVsyXVxyXG4gICAgICB0aGlzLmhlaWdodCA9IHNvdXJjZVszXVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuLCBleHRlbmQ6IHtcclxuXHJcbiAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnggKyAnICcgKyB0aGlzLnkgKyAnICcgKyB0aGlzLndpZHRoICsgJyAnICsgdGhpcy5oZWlnaHRcclxuICAgIH1cclxuICAsIG1vcnBoOiBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0KXtcclxuICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBTVkcuVmlld0JveCh4LCB5LCB3aWR0aCwgaGVpZ2h0KVxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAsIGF0OiBmdW5jdGlvbihwb3MpIHtcclxuXHJcbiAgICAgIGlmKCF0aGlzLmRlc3RpbmF0aW9uKSByZXR1cm4gdGhpc1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBTVkcuVmlld0JveChbXHJcbiAgICAgICAgICB0aGlzLnggKyAodGhpcy5kZXN0aW5hdGlvbi54IC0gdGhpcy54KSAqIHBvc1xyXG4gICAgICAgICwgdGhpcy55ICsgKHRoaXMuZGVzdGluYXRpb24ueSAtIHRoaXMueSkgKiBwb3NcclxuICAgICAgICAsIHRoaXMud2lkdGggKyAodGhpcy5kZXN0aW5hdGlvbi53aWR0aCAtIHRoaXMud2lkdGgpICogcG9zXHJcbiAgICAgICAgLCB0aGlzLmhlaWdodCArICh0aGlzLmRlc3RpbmF0aW9uLmhlaWdodCAtIHRoaXMuaGVpZ2h0KSAqIHBvc1xyXG4gICAgICBdKVxyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvLyBEZWZpbmUgcGFyZW50XHJcbiwgcGFyZW50OiBTVkcuQ29udGFpbmVyXHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcblxyXG4gICAgLy8gZ2V0L3NldCB2aWV3Ym94XHJcbiAgICB2aWV3Ym94OiBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcbiAgICAgICAgLy8gYWN0IGFzIGEgZ2V0dGVyIGlmIHRoZXJlIGFyZSBubyBhcmd1bWVudHNcclxuICAgICAgICByZXR1cm4gbmV3IFNWRy5WaWV3Qm94KHRoaXMpXHJcblxyXG4gICAgICAvLyBvdGhlcndpc2UgYWN0IGFzIGEgc2V0dGVyXHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ3ZpZXdCb3gnLCBuZXcgU1ZHLlZpZXdCb3goeCwgeSwgd2lkdGgsIGhlaWdodCkpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn0pXG4vLyBBZGQgZXZlbnRzIHRvIGVsZW1lbnRzXHJcblxyXG47WyAnY2xpY2snLFxyXG4gICdkYmxjbGljaycsXHJcbiAgJ21vdXNlZG93bicsXHJcbiAgJ21vdXNldXAnLFxyXG4gICdtb3VzZW92ZXInLFxyXG4gICdtb3VzZW91dCcsXHJcbiAgJ21vdXNlbW92ZScsXHJcbiAgJ21vdXNlZW50ZXInLFxyXG4gICdtb3VzZWxlYXZlJyxcclxuICAndG91Y2hzdGFydCcsXHJcbiAgJ3RvdWNobW92ZScsXHJcbiAgJ3RvdWNobGVhdmUnLFxyXG4gICd0b3VjaGVuZCcsXHJcbiAgJ3RvdWNoY2FuY2VsJyBdLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAvLyBhZGQgZXZlbnQgdG8gU1ZHLkVsZW1lbnRcclxuICAgIFNWRy5FbGVtZW50LnByb3RvdHlwZVtldmVudF0gPSBmdW5jdGlvbiAoZikge1xyXG4gICAgICAvLyBiaW5kIGV2ZW50IHRvIGVsZW1lbnQgcmF0aGVyIHRoYW4gZWxlbWVudCBub2RlXHJcbiAgICAgIGlmIChmID09IG51bGwpIHtcclxuICAgICAgICBTVkcub2ZmKHRoaXMsIGV2ZW50KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFNWRy5vbih0aGlzLCBldmVudCwgZilcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG5TVkcubGlzdGVuZXJJZCA9IDBcclxuXHJcbi8vIEFkZCBldmVudCBiaW5kZXIgaW4gdGhlIFNWRyBuYW1lc3BhY2VcclxuU1ZHLm9uID0gZnVuY3Rpb24gKG5vZGUsIGV2ZW50cywgbGlzdGVuZXIsIGJpbmRpbmcsIG9wdGlvbnMpIHtcclxuICB2YXIgbCA9IGxpc3RlbmVyLmJpbmQoYmluZGluZyB8fCBub2RlKVxyXG4gIHZhciBuID0gbm9kZSBpbnN0YW5jZW9mIFNWRy5FbGVtZW50ID8gbm9kZS5ub2RlIDogbm9kZVxyXG5cclxuICAvLyBlbnN1cmUgaW5zdGFuY2Ugb2JqZWN0IGZvciBub2RlcyB3aGljaCBhcmUgbm90IGFkb3B0ZWRcclxuICBuLmluc3RhbmNlID0gbi5pbnN0YW5jZSB8fCB7X2V2ZW50czoge319XHJcblxyXG4gIHZhciBiYWcgPSBuLmluc3RhbmNlLl9ldmVudHNcclxuXHJcbiAgLy8gYWRkIGlkIHRvIGxpc3RlbmVyXHJcbiAgaWYgKCFsaXN0ZW5lci5fc3ZnanNMaXN0ZW5lcklkKSB7IGxpc3RlbmVyLl9zdmdqc0xpc3RlbmVySWQgPSArK1NWRy5saXN0ZW5lcklkIH1cclxuXHJcbiAgZXZlbnRzLnNwbGl0KFNWRy5yZWdleC5kZWxpbWl0ZXIpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB2YXIgZXYgPSBldmVudC5zcGxpdCgnLicpWzBdXHJcbiAgICB2YXIgbnMgPSBldmVudC5zcGxpdCgnLicpWzFdIHx8ICcqJ1xyXG5cclxuICAgIC8vIGVuc3VyZSB2YWxpZCBvYmplY3RcclxuICAgIGJhZ1tldl0gPSBiYWdbZXZdIHx8IHt9XHJcbiAgICBiYWdbZXZdW25zXSA9IGJhZ1tldl1bbnNdIHx8IHt9XHJcblxyXG4gICAgLy8gcmVmZXJlbmNlIGxpc3RlbmVyXHJcbiAgICBiYWdbZXZdW25zXVtsaXN0ZW5lci5fc3ZnanNMaXN0ZW5lcklkXSA9IGxcclxuXHJcbiAgICAvLyBhZGQgbGlzdGVuZXJcclxuICAgIG4uYWRkRXZlbnRMaXN0ZW5lcihldiwgbCwgb3B0aW9ucyB8fCBmYWxzZSlcclxuICB9KVxyXG59XHJcblxyXG4vLyBBZGQgZXZlbnQgdW5iaW5kZXIgaW4gdGhlIFNWRyBuYW1lc3BhY2VcclxuU1ZHLm9mZiA9IGZ1bmN0aW9uIChub2RlLCBldmVudHMsIGxpc3RlbmVyLCBvcHRpb25zKSB7XHJcbiAgdmFyIG4gPSBub2RlIGluc3RhbmNlb2YgU1ZHLkVsZW1lbnQgPyBub2RlLm5vZGUgOiBub2RlXHJcbiAgaWYgKCFuLmluc3RhbmNlKSByZXR1cm5cclxuXHJcbiAgLy8gbGlzdGVuZXIgY2FuIGJlIGEgZnVuY3Rpb24gb3IgYSBudW1iZXJcclxuICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLl9zdmdqc0xpc3RlbmVySWRcclxuICAgIGlmICghbGlzdGVuZXIpIHJldHVyblxyXG4gIH1cclxuXHJcbiAgdmFyIGJhZyA9IG4uaW5zdGFuY2UuX2V2ZW50c1xyXG5cclxuICA7KGV2ZW50cyB8fCAnJykuc3BsaXQoU1ZHLnJlZ2V4LmRlbGltaXRlcikuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHZhciBldiA9IGV2ZW50ICYmIGV2ZW50LnNwbGl0KCcuJylbMF1cclxuICAgIHZhciBucyA9IGV2ZW50ICYmIGV2ZW50LnNwbGl0KCcuJylbMV1cclxuICAgIHZhciBuYW1lc3BhY2UsIGxcclxuXHJcbiAgICBpZiAobGlzdGVuZXIpIHtcclxuICAgICAgLy8gcmVtb3ZlIGxpc3RlbmVyIHJlZmVyZW5jZVxyXG4gICAgICBpZiAoYmFnW2V2XSAmJiBiYWdbZXZdW25zIHx8ICcqJ10pIHtcclxuICAgICAgICAvLyByZW1vdmVMaXN0ZW5lclxyXG4gICAgICAgIG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldiwgYmFnW2V2XVtucyB8fCAnKiddW2xpc3RlbmVyXSwgb3B0aW9ucyB8fCBmYWxzZSlcclxuXHJcbiAgICAgICAgZGVsZXRlIGJhZ1tldl1bbnMgfHwgJyonXVtsaXN0ZW5lcl1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChldiAmJiBucykge1xyXG4gICAgICAvLyByZW1vdmUgYWxsIGxpc3RlbmVycyBmb3IgYSBuYW1lc3BhY2VkIGV2ZW50XHJcbiAgICAgIGlmIChiYWdbZXZdICYmIGJhZ1tldl1bbnNdKSB7XHJcbiAgICAgICAgZm9yIChsIGluIGJhZ1tldl1bbnNdKSB7IFNWRy5vZmYobiwgW2V2LCBuc10uam9pbignLicpLCBsKSB9XHJcblxyXG4gICAgICAgIGRlbGV0ZSBiYWdbZXZdW25zXVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKG5zKSB7XHJcbiAgICAgIC8vIHJlbW92ZSBhbGwgbGlzdGVuZXJzIGZvciBhIHNwZWNpZmljIG5hbWVzcGFjZVxyXG4gICAgICBmb3IgKGV2ZW50IGluIGJhZykge1xyXG4gICAgICAgIGZvciAobmFtZXNwYWNlIGluIGJhZ1tldmVudF0pIHtcclxuICAgICAgICAgIGlmIChucyA9PT0gbmFtZXNwYWNlKSB7IFNWRy5vZmYobiwgW2V2ZW50LCBuc10uam9pbignLicpKSB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGV2KSB7XHJcbiAgICAgIC8vIHJlbW92ZSBhbGwgbGlzdGVuZXJzIGZvciB0aGUgZXZlbnRcclxuICAgICAgaWYgKGJhZ1tldl0pIHtcclxuICAgICAgICBmb3IgKG5hbWVzcGFjZSBpbiBiYWdbZXZdKSB7IFNWRy5vZmYobiwgW2V2LCBuYW1lc3BhY2VdLmpvaW4oJy4nKSkgfVxyXG5cclxuICAgICAgICBkZWxldGUgYmFnW2V2XVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyByZW1vdmUgYWxsIGxpc3RlbmVycyBvbiBhIGdpdmVuIG5vZGVcclxuICAgICAgZm9yIChldmVudCBpbiBiYWcpIHsgU1ZHLm9mZihuLCBldmVudCkgfVxyXG5cclxuICAgICAgbi5pbnN0YW5jZS5fZXZlbnRzID0ge31cclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5FbGVtZW50LCB7XHJcbiAgLy8gQmluZCBnaXZlbiBldmVudCB0byBsaXN0ZW5lclxyXG4gIG9uOiBmdW5jdGlvbiAoZXZlbnQsIGxpc3RlbmVyLCBiaW5kaW5nLCBvcHRpb25zKSB7XHJcbiAgICBTVkcub24odGhpcywgZXZlbnQsIGxpc3RlbmVyLCBiaW5kaW5nLCBvcHRpb25zKVxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9LFxyXG4gIC8vIFVuYmluZCBldmVudCBmcm9tIGxpc3RlbmVyXHJcbiAgb2ZmOiBmdW5jdGlvbiAoZXZlbnQsIGxpc3RlbmVyKSB7XHJcbiAgICBTVkcub2ZmKHRoaXMubm9kZSwgZXZlbnQsIGxpc3RlbmVyKVxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9LFxyXG4gIGZpcmU6IGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xyXG4gICAgLy8gRGlzcGF0Y2ggZXZlbnRcclxuICAgIGlmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5FdmVudCkge1xyXG4gICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChldmVudClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50ID0gbmV3IFNWRy5DdXN0b21FdmVudChldmVudCwge2RldGFpbDogZGF0YSwgY2FuY2VsYWJsZTogdHJ1ZX0pKVxyXG4gICAgfVxyXG4gICAgdGhpcy5fZXZlbnQgPSBldmVudFxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9LFxyXG4gIGV2ZW50OiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9ldmVudFxyXG4gIH1cclxufSlcclxuXG5cclxuU1ZHLkRlZnMgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6ICdkZWZzJ1xyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuQ29udGFpbmVyXHJcblxyXG59KVxuU1ZHLkcgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6ICdnJ1xyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuQ29udGFpbmVyXHJcblxyXG4gIC8vIEFkZCBjbGFzcyBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBNb3ZlIG92ZXIgeC1heGlzXHJcbiAgICB4OiBmdW5jdGlvbih4KSB7XHJcbiAgICAgIHJldHVybiB4ID09IG51bGwgPyB0aGlzLnRyYW5zZm9ybSgneCcpIDogdGhpcy50cmFuc2Zvcm0oeyB4OiB4IC0gdGhpcy54KCkgfSwgdHJ1ZSlcclxuICAgIH1cclxuICAgIC8vIE1vdmUgb3ZlciB5LWF4aXNcclxuICAsIHk6IGZ1bmN0aW9uKHkpIHtcclxuICAgICAgcmV0dXJuIHkgPT0gbnVsbCA/IHRoaXMudHJhbnNmb3JtKCd5JykgOiB0aGlzLnRyYW5zZm9ybSh7IHk6IHkgLSB0aGlzLnkoKSB9LCB0cnVlKVxyXG4gICAgfVxyXG4gICAgLy8gTW92ZSBieSBjZW50ZXIgb3ZlciB4LWF4aXNcclxuICAsIGN4OiBmdW5jdGlvbih4KSB7XHJcbiAgICAgIHJldHVybiB4ID09IG51bGwgPyB0aGlzLmdib3goKS5jeCA6IHRoaXMueCh4IC0gdGhpcy5nYm94KCkud2lkdGggLyAyKVxyXG4gICAgfVxyXG4gICAgLy8gTW92ZSBieSBjZW50ZXIgb3ZlciB5LWF4aXNcclxuICAsIGN5OiBmdW5jdGlvbih5KSB7XHJcbiAgICAgIHJldHVybiB5ID09IG51bGwgPyB0aGlzLmdib3goKS5jeSA6IHRoaXMueSh5IC0gdGhpcy5nYm94KCkuaGVpZ2h0IC8gMilcclxuICAgIH1cclxuICAsIGdib3g6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgdmFyIGJib3ggID0gdGhpcy5iYm94KClcclxuICAgICAgICAsIHRyYW5zID0gdGhpcy50cmFuc2Zvcm0oKVxyXG5cclxuICAgICAgYmJveC54ICArPSB0cmFucy54XHJcbiAgICAgIGJib3gueDIgKz0gdHJhbnMueFxyXG4gICAgICBiYm94LmN4ICs9IHRyYW5zLnhcclxuXHJcbiAgICAgIGJib3gueSAgKz0gdHJhbnMueVxyXG4gICAgICBiYm94LnkyICs9IHRyYW5zLnlcclxuICAgICAgYmJveC5jeSArPSB0cmFucy55XHJcblxyXG4gICAgICByZXR1cm4gYmJveFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIENyZWF0ZSBhIGdyb3VwIGVsZW1lbnRcclxuICAgIGdyb3VwOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTVkcuRylcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxuU1ZHLkRvYyA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgLy8gZW5zdXJlIHRoZSBwcmVzZW5jZSBvZiBhIGRvbSBlbGVtZW50XHJcbiAgICAgIGVsZW1lbnQgPSB0eXBlb2YgZWxlbWVudCA9PSAnc3RyaW5nJyA/XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCkgOlxyXG4gICAgICAgIGVsZW1lbnRcclxuXHJcbiAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXMgYW4gc3ZnIGVsZW1lbnQsIHVzZSB0aGF0IGVsZW1lbnQgYXMgdGhlIG1haW4gd3JhcHBlci5cclxuICAgICAgLy8gVGhpcyBhbGxvd3Mgc3ZnLmpzIHRvIHdvcmsgd2l0aCBzdmcgZG9jdW1lbnRzIGFzIHdlbGwuXHJcbiAgICAgIGlmIChlbGVtZW50Lm5vZGVOYW1lID09ICdzdmcnKSB7XHJcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGVsZW1lbnQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIFNWRy5jcmVhdGUoJ3N2ZycpKVxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuc2l6ZSgnMTAwJScsICcxMDAlJylcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gc2V0IHN2ZyBlbGVtZW50IGF0dHJpYnV0ZXMgYW5kIGVuc3VyZSBkZWZzIG5vZGVcclxuICAgICAgdGhpcy5uYW1lc3BhY2UoKS5kZWZzKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5Db250YWluZXJcclxuXHJcbiAgLy8gQWRkIGNsYXNzIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIEFkZCBuYW1lc3BhY2VzXHJcbiAgICBuYW1lc3BhY2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgICAgIC5hdHRyKHsgeG1sbnM6IFNWRy5ucywgdmVyc2lvbjogJzEuMScgfSlcclxuICAgICAgICAuYXR0cigneG1sbnM6eGxpbmsnLCBTVkcueGxpbmssIFNWRy54bWxucylcclxuICAgICAgICAuYXR0cigneG1sbnM6c3ZnanMnLCBTVkcuc3ZnanMsIFNWRy54bWxucylcclxuICAgIH1cclxuICAgIC8vIENyZWF0ZXMgYW5kIHJldHVybnMgZGVmcyBlbGVtZW50XHJcbiAgLCBkZWZzOiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKCF0aGlzLl9kZWZzKSB7XHJcbiAgICAgICAgdmFyIGRlZnNcclxuXHJcbiAgICAgICAgLy8gRmluZCBvciBjcmVhdGUgYSBkZWZzIGVsZW1lbnQgaW4gdGhpcyBpbnN0YW5jZVxyXG4gICAgICAgIGlmIChkZWZzID0gdGhpcy5ub2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkZWZzJylbMF0pXHJcbiAgICAgICAgICB0aGlzLl9kZWZzID0gU1ZHLmFkb3B0KGRlZnMpXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgdGhpcy5fZGVmcyA9IG5ldyBTVkcuRGVmc1xyXG5cclxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGRlZnMgbm9kZSBpcyBhdCB0aGUgZW5kIG9mIHRoZSBzdGFja1xyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLl9kZWZzLm5vZGUpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLl9kZWZzXHJcbiAgICB9XHJcbiAgICAvLyBjdXN0b20gcGFyZW50IG1ldGhvZFxyXG4gICwgcGFyZW50OiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYoIXRoaXMubm9kZS5wYXJlbnROb2RlIHx8IHRoaXMubm9kZS5wYXJlbnROb2RlLm5vZGVOYW1lID09ICcjZG9jdW1lbnQnIHx8IHRoaXMubm9kZS5wYXJlbnROb2RlLm5vZGVOYW1lID09ICcjZG9jdW1lbnQtZnJhZ21lbnQnKSByZXR1cm4gbnVsbFxyXG4gICAgICByZXR1cm4gdGhpcy5ub2RlLnBhcmVudE5vZGVcclxuICAgIH1cclxuICAgIC8vIEZpeCBmb3IgcG9zc2libGUgc3ViLXBpeGVsIG9mZnNldC4gU2VlOlxyXG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjA4ODEyXHJcbiAgLCBzcG9mOiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHBvcyA9IHRoaXMubm9kZS5nZXRTY3JlZW5DVE0oKVxyXG5cclxuICAgICAgaWYgKHBvcylcclxuICAgICAgICB0aGlzXHJcbiAgICAgICAgICAuc3R5bGUoJ2xlZnQnLCAoLXBvcy5lICUgMSkgKyAncHgnKVxyXG4gICAgICAgICAgLnN0eWxlKCd0b3AnLCAgKC1wb3MuZiAlIDEpICsgJ3B4JylcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgICAvLyBSZW1vdmVzIHRoZSBkb2MgZnJvbSB0aGUgRE9NXHJcbiAgLCByZW1vdmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZih0aGlzLnBhcmVudCgpKSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQoKS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgLCBjbGVhcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIHJlbW92ZSBjaGlsZHJlblxyXG4gICAgICB3aGlsZSh0aGlzLm5vZGUuaGFzQ2hpbGROb2RlcygpKVxyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUubGFzdENoaWxkKVxyXG5cclxuICAgICAgLy8gcmVtb3ZlIGRlZnMgcmVmZXJlbmNlXHJcbiAgICAgIGRlbGV0ZSB0aGlzLl9kZWZzXHJcblxyXG4gICAgICAvLyBhZGQgYmFjayBwYXJzZXJcclxuICAgICAgaWYoIVNWRy5wYXJzZXIuZHJhdy5wYXJlbnROb2RlKVxyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChTVkcucGFyc2VyLmRyYXcpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICwgY2xvbmU6IGZ1bmN0aW9uIChwYXJlbnQpIHtcclxuICAgICAgLy8gd3JpdGUgZG9tIGRhdGEgdG8gdGhlIGRvbSBzbyB0aGUgY2xvbmUgY2FuIHBpY2t1cCB0aGUgZGF0YVxyXG4gICAgICB0aGlzLndyaXRlRGF0YVRvRG9tKClcclxuXHJcbiAgICAgIC8vIGdldCByZWZlcmVuY2UgdG8gbm9kZVxyXG4gICAgICB2YXIgbm9kZSA9IHRoaXMubm9kZVxyXG5cclxuICAgICAgLy8gY2xvbmUgZWxlbWVudCBhbmQgYXNzaWduIG5ldyBpZFxyXG4gICAgICB2YXIgY2xvbmUgPSBhc3NpZ25OZXdJZChub2RlLmNsb25lTm9kZSh0cnVlKSlcclxuXHJcbiAgICAgIC8vIGluc2VydCB0aGUgY2xvbmUgaW4gdGhlIGdpdmVuIHBhcmVudCBvciBhZnRlciBteXNlbGZcclxuICAgICAgaWYocGFyZW50KSB7XHJcbiAgICAgICAgKHBhcmVudC5ub2RlIHx8IHBhcmVudCkuYXBwZW5kQ2hpbGQoY2xvbmUubm9kZSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsb25lLm5vZGUsIG5vZGUubmV4dFNpYmxpbmcpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjbG9uZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pXHJcblxuLy8gIyMjIFRoaXMgbW9kdWxlIGFkZHMgYmFja3dhcmQgLyBmb3J3YXJkIGZ1bmN0aW9uYWxpdHkgdG8gZWxlbWVudHMuXHJcblxyXG4vL1xyXG5TVkcuZXh0ZW5kKFNWRy5FbGVtZW50LCB7XHJcbiAgLy8gR2V0IGFsbCBzaWJsaW5ncywgaW5jbHVkaW5nIG15c2VsZlxyXG4gIHNpYmxpbmdzOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudCgpLmNoaWxkcmVuKClcclxuICB9XHJcbiAgLy8gR2V0IHRoZSBjdXJlbnQgcG9zaXRpb24gc2libGluZ3NcclxuLCBwb3NpdGlvbjogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQoKS5pbmRleCh0aGlzKVxyXG4gIH1cclxuICAvLyBHZXQgdGhlIG5leHQgZWxlbWVudCAod2lsbCByZXR1cm4gbnVsbCBpZiB0aGVyZSBpcyBub25lKVxyXG4sIG5leHQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2libGluZ3MoKVt0aGlzLnBvc2l0aW9uKCkgKyAxXVxyXG4gIH1cclxuICAvLyBHZXQgdGhlIG5leHQgZWxlbWVudCAod2lsbCByZXR1cm4gbnVsbCBpZiB0aGVyZSBpcyBub25lKVxyXG4sIHByZXZpb3VzOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLnNpYmxpbmdzKClbdGhpcy5wb3NpdGlvbigpIC0gMV1cclxuICB9XHJcbiAgLy8gU2VuZCBnaXZlbiBlbGVtZW50IG9uZSBzdGVwIGZvcndhcmRcclxuLCBmb3J3YXJkOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciBpID0gdGhpcy5wb3NpdGlvbigpICsgMVxyXG4gICAgICAsIHAgPSB0aGlzLnBhcmVudCgpXHJcblxyXG4gICAgLy8gbW92ZSBub2RlIG9uZSBzdGVwIGZvcndhcmRcclxuICAgIHAucmVtb3ZlRWxlbWVudCh0aGlzKS5hZGQodGhpcywgaSlcclxuXHJcbiAgICAvLyBtYWtlIHN1cmUgZGVmcyBub2RlIGlzIGFsd2F5cyBhdCB0aGUgdG9wXHJcbiAgICBpZiAocCBpbnN0YW5jZW9mIFNWRy5Eb2MpXHJcbiAgICAgIHAubm9kZS5hcHBlbmRDaGlsZChwLmRlZnMoKS5ub2RlKVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIC8vIFNlbmQgZ2l2ZW4gZWxlbWVudCBvbmUgc3RlcCBiYWNrd2FyZFxyXG4sIGJhY2t3YXJkOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciBpID0gdGhpcy5wb3NpdGlvbigpXHJcblxyXG4gICAgaWYgKGkgPiAwKVxyXG4gICAgICB0aGlzLnBhcmVudCgpLnJlbW92ZUVsZW1lbnQodGhpcykuYWRkKHRoaXMsIGkgLSAxKVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIC8vIFNlbmQgZ2l2ZW4gZWxlbWVudCBhbGwgdGhlIHdheSB0byB0aGUgZnJvbnRcclxuLCBmcm9udDogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgcCA9IHRoaXMucGFyZW50KClcclxuXHJcbiAgICAvLyBNb3ZlIG5vZGUgZm9yd2FyZFxyXG4gICAgcC5ub2RlLmFwcGVuZENoaWxkKHRoaXMubm9kZSlcclxuXHJcbiAgICAvLyBNYWtlIHN1cmUgZGVmcyBub2RlIGlzIGFsd2F5cyBhdCB0aGUgdG9wXHJcbiAgICBpZiAocCBpbnN0YW5jZW9mIFNWRy5Eb2MpXHJcbiAgICAgIHAubm9kZS5hcHBlbmRDaGlsZChwLmRlZnMoKS5ub2RlKVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIC8vIFNlbmQgZ2l2ZW4gZWxlbWVudCBhbGwgdGhlIHdheSB0byB0aGUgYmFja1xyXG4sIGJhY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMucG9zaXRpb24oKSA+IDApXHJcbiAgICAgIHRoaXMucGFyZW50KCkucmVtb3ZlRWxlbWVudCh0aGlzKS5hZGQodGhpcywgMClcclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICAvLyBJbnNlcnRzIGEgZ2l2ZW4gZWxlbWVudCBiZWZvcmUgdGhlIHRhcmdldGVkIGVsZW1lbnRcclxuLCBiZWZvcmU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQucmVtb3ZlKClcclxuXHJcbiAgICB2YXIgaSA9IHRoaXMucG9zaXRpb24oKVxyXG5cclxuICAgIHRoaXMucGFyZW50KCkuYWRkKGVsZW1lbnQsIGkpXHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgLy8gSW5zdGVycyBhIGdpdmVuIGVsZW1lbnQgYWZ0ZXIgdGhlIHRhcmdldGVkIGVsZW1lbnRcclxuLCBhZnRlcjogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5yZW1vdmUoKVxyXG5cclxuICAgIHZhciBpID0gdGhpcy5wb3NpdGlvbigpXHJcblxyXG4gICAgdGhpcy5wYXJlbnQoKS5hZGQoZWxlbWVudCwgaSArIDEpXHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcblxyXG59KVxuU1ZHLk1hc2sgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIFNWRy5jcmVhdGUoJ21hc2snKSlcclxuXHJcbiAgICAvLyBrZWVwIHJlZmVyZW5jZXMgdG8gbWFza2VkIGVsZW1lbnRzXHJcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxyXG4gIH1cclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLkNvbnRhaW5lclxyXG5cclxuICAvLyBBZGQgY2xhc3MgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gVW5tYXNrIGFsbCBtYXNrZWQgZWxlbWVudHMgYW5kIHJlbW92ZSBpdHNlbGZcclxuICAgIHJlbW92ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIHVubWFzayBhbGwgdGFyZ2V0c1xyXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50YXJnZXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG4gICAgICAgIGlmICh0aGlzLnRhcmdldHNbaV0pXHJcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0udW5tYXNrKClcclxuICAgICAgdGhpcy50YXJnZXRzID0gW11cclxuXHJcbiAgICAgIC8vIHJlbW92ZSBtYXNrIGZyb20gcGFyZW50XHJcbiAgICAgIFNWRy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUuY2FsbCh0aGlzKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBDcmVhdGUgbWFza2luZyBlbGVtZW50XHJcbiAgICBtYXNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGVmcygpLnB1dChuZXcgU1ZHLk1hc2spXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuXHJcblNWRy5leHRlbmQoU1ZHLkVsZW1lbnQsIHtcclxuICAvLyBEaXN0cmlidXRlIG1hc2sgdG8gc3ZnIGVsZW1lbnRcclxuICBtYXNrV2l0aDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgLy8gdXNlIGdpdmVuIG1hc2sgb3IgY3JlYXRlIGEgbmV3IG9uZVxyXG4gICAgdGhpcy5tYXNrZXIgPSBlbGVtZW50IGluc3RhbmNlb2YgU1ZHLk1hc2sgPyBlbGVtZW50IDogdGhpcy5wYXJlbnQoKS5tYXNrKCkuYWRkKGVsZW1lbnQpXHJcblxyXG4gICAgLy8gc3RvcmUgcmV2ZXJlbmNlIG9uIHNlbGYgaW4gbWFza1xyXG4gICAgdGhpcy5tYXNrZXIudGFyZ2V0cy5wdXNoKHRoaXMpXHJcblxyXG4gICAgLy8gYXBwbHkgbWFza1xyXG4gICAgcmV0dXJuIHRoaXMuYXR0cignbWFzaycsICd1cmwoXCIjJyArIHRoaXMubWFza2VyLmF0dHIoJ2lkJykgKyAnXCIpJylcclxuICB9XHJcbiAgLy8gVW5tYXNrIGVsZW1lbnRcclxuLCB1bm1hc2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgZGVsZXRlIHRoaXMubWFza2VyXHJcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdtYXNrJywgbnVsbClcclxuICB9XHJcblxyXG59KVxyXG5cblNWRy5DbGlwUGF0aCA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgU1ZHLmNyZWF0ZSgnY2xpcFBhdGgnKSlcclxuXHJcbiAgICAvLyBrZWVwIHJlZmVyZW5jZXMgdG8gY2xpcHBlZCBlbGVtZW50c1xyXG4gICAgdGhpcy50YXJnZXRzID0gW11cclxuICB9XHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5Db250YWluZXJcclxuXHJcbiAgLy8gQWRkIGNsYXNzIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIFVuY2xpcCBhbGwgY2xpcHBlZCBlbGVtZW50cyBhbmQgcmVtb3ZlIGl0c2VsZlxyXG4gICAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gdW5jbGlwIGFsbCB0YXJnZXRzXHJcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRhcmdldHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0c1tpXSlcclxuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS51bmNsaXAoKVxyXG4gICAgICB0aGlzLnRhcmdldHMgPSBbXVxyXG5cclxuICAgICAgLy8gcmVtb3ZlIGNsaXBQYXRoIGZyb20gcGFyZW50XHJcbiAgICAgIHRoaXMucGFyZW50KCkucmVtb3ZlRWxlbWVudCh0aGlzKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBDcmVhdGUgY2xpcHBpbmcgZWxlbWVudFxyXG4gICAgY2xpcDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRlZnMoKS5wdXQobmV3IFNWRy5DbGlwUGF0aClcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG4vL1xyXG5TVkcuZXh0ZW5kKFNWRy5FbGVtZW50LCB7XHJcbiAgLy8gRGlzdHJpYnV0ZSBjbGlwUGF0aCB0byBzdmcgZWxlbWVudFxyXG4gIGNsaXBXaXRoOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAvLyB1c2UgZ2l2ZW4gY2xpcCBvciBjcmVhdGUgYSBuZXcgb25lXHJcbiAgICB0aGlzLmNsaXBwZXIgPSBlbGVtZW50IGluc3RhbmNlb2YgU1ZHLkNsaXBQYXRoID8gZWxlbWVudCA6IHRoaXMucGFyZW50KCkuY2xpcCgpLmFkZChlbGVtZW50KVxyXG5cclxuICAgIC8vIHN0b3JlIHJldmVyZW5jZSBvbiBzZWxmIGluIG1hc2tcclxuICAgIHRoaXMuY2xpcHBlci50YXJnZXRzLnB1c2godGhpcylcclxuXHJcbiAgICAvLyBhcHBseSBtYXNrXHJcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdjbGlwLXBhdGgnLCAndXJsKFwiIycgKyB0aGlzLmNsaXBwZXIuYXR0cignaWQnKSArICdcIiknKVxyXG4gIH1cclxuICAvLyBVbmNsaXAgZWxlbWVudFxyXG4sIHVuY2xpcDogZnVuY3Rpb24oKSB7XHJcbiAgICBkZWxldGUgdGhpcy5jbGlwcGVyXHJcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdjbGlwLXBhdGgnLCBudWxsKVxyXG4gIH1cclxuXHJcbn0pXG5TVkcuR3JhZGllbnQgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6IGZ1bmN0aW9uKHR5cGUpIHtcclxuICAgIHRoaXMuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBTVkcuY3JlYXRlKHR5cGUgKyAnR3JhZGllbnQnKSlcclxuXHJcbiAgICAvLyBzdG9yZSB0eXBlXHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlXHJcbiAgfVxyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuQ29udGFpbmVyXHJcblxyXG4gIC8vIEFkZCBjbGFzcyBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBBZGQgYSBjb2xvciBzdG9wXHJcbiAgICBhdDogZnVuY3Rpb24ob2Zmc2V0LCBjb2xvciwgb3BhY2l0eSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFNWRy5TdG9wKS51cGRhdGUob2Zmc2V0LCBjb2xvciwgb3BhY2l0eSlcclxuICAgIH1cclxuICAgIC8vIFVwZGF0ZSBncmFkaWVudFxyXG4gICwgdXBkYXRlOiBmdW5jdGlvbihibG9jaykge1xyXG4gICAgICAvLyByZW1vdmUgYWxsIHN0b3BzXHJcbiAgICAgIHRoaXMuY2xlYXIoKVxyXG5cclxuICAgICAgLy8gaW52b2tlIHBhc3NlZCBibG9ja1xyXG4gICAgICBpZiAodHlwZW9mIGJsb2NrID09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgYmxvY2suY2FsbCh0aGlzLCB0aGlzKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIFJldHVybiB0aGUgZmlsbCBpZFxyXG4gICwgZmlsbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiAndXJsKCMnICsgdGhpcy5pZCgpICsgJyknXHJcbiAgICB9XHJcbiAgICAvLyBBbGlhcyBzdHJpbmcgY29udmVydGlvbiB0byBmaWxsXHJcbiAgLCB0b1N0cmluZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpbGwoKVxyXG4gICAgfVxyXG4gICAgLy8gY3VzdG9tIGF0dHIgdG8gaGFuZGxlIHRyYW5zZm9ybVxyXG4gICwgYXR0cjogZnVuY3Rpb24oYSwgYiwgYykge1xyXG4gICAgICBpZihhID09ICd0cmFuc2Zvcm0nKSBhID0gJ2dyYWRpZW50VHJhbnNmb3JtJ1xyXG4gICAgICByZXR1cm4gU1ZHLkNvbnRhaW5lci5wcm90b3R5cGUuYXR0ci5jYWxsKHRoaXMsIGEsIGIsIGMpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gQ3JlYXRlIGdyYWRpZW50IGVsZW1lbnQgaW4gZGVmc1xyXG4gICAgZ3JhZGllbnQ6IGZ1bmN0aW9uKHR5cGUsIGJsb2NrKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRlZnMoKS5ncmFkaWVudCh0eXBlLCBibG9jaylcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG4vLyBBZGQgYW5pbWF0YWJsZSBtZXRob2RzIHRvIGJvdGggZ3JhZGllbnQgYW5kIGZ4IG1vZHVsZVxyXG5TVkcuZXh0ZW5kKFNWRy5HcmFkaWVudCwgU1ZHLkZYLCB7XHJcbiAgLy8gRnJvbSBwb3NpdGlvblxyXG4gIGZyb206IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgIHJldHVybiAodGhpcy5fdGFyZ2V0IHx8IHRoaXMpLnR5cGUgPT0gJ3JhZGlhbCcgP1xyXG4gICAgICB0aGlzLmF0dHIoeyBmeDogbmV3IFNWRy5OdW1iZXIoeCksIGZ5OiBuZXcgU1ZHLk51bWJlcih5KSB9KSA6XHJcbiAgICAgIHRoaXMuYXR0cih7IHgxOiBuZXcgU1ZHLk51bWJlcih4KSwgeTE6IG5ldyBTVkcuTnVtYmVyKHkpIH0pXHJcbiAgfVxyXG4gIC8vIFRvIHBvc2l0aW9uXHJcbiwgdG86IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgIHJldHVybiAodGhpcy5fdGFyZ2V0IHx8IHRoaXMpLnR5cGUgPT0gJ3JhZGlhbCcgP1xyXG4gICAgICB0aGlzLmF0dHIoeyBjeDogbmV3IFNWRy5OdW1iZXIoeCksIGN5OiBuZXcgU1ZHLk51bWJlcih5KSB9KSA6XHJcbiAgICAgIHRoaXMuYXR0cih7IHgyOiBuZXcgU1ZHLk51bWJlcih4KSwgeTI6IG5ldyBTVkcuTnVtYmVyKHkpIH0pXHJcbiAgfVxyXG59KVxyXG5cclxuLy8gQmFzZSBncmFkaWVudCBnZW5lcmF0aW9uXHJcblNWRy5leHRlbmQoU1ZHLkRlZnMsIHtcclxuICAvLyBkZWZpbmUgZ3JhZGllbnRcclxuICBncmFkaWVudDogZnVuY3Rpb24odHlwZSwgYmxvY2spIHtcclxuICAgIHJldHVybiB0aGlzLnB1dChuZXcgU1ZHLkdyYWRpZW50KHR5cGUpKS51cGRhdGUoYmxvY2spXHJcbiAgfVxyXG5cclxufSlcclxuXHJcblNWRy5TdG9wID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiAnc3RvcCdcclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLkVsZW1lbnRcclxuXHJcbiAgLy8gQWRkIGNsYXNzIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIGFkZCBjb2xvciBzdG9wc1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgbyA9PSAnbnVtYmVyJyB8fCBvIGluc3RhbmNlb2YgU1ZHLk51bWJlcikge1xyXG4gICAgICAgIG8gPSB7XHJcbiAgICAgICAgICBvZmZzZXQ6ICBhcmd1bWVudHNbMF1cclxuICAgICAgICAsIGNvbG9yOiAgIGFyZ3VtZW50c1sxXVxyXG4gICAgICAgICwgb3BhY2l0eTogYXJndW1lbnRzWzJdXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzZXQgYXR0cmlidXRlc1xyXG4gICAgICBpZiAoby5vcGFjaXR5ICE9IG51bGwpIHRoaXMuYXR0cignc3RvcC1vcGFjaXR5Jywgby5vcGFjaXR5KVxyXG4gICAgICBpZiAoby5jb2xvciAgICE9IG51bGwpIHRoaXMuYXR0cignc3RvcC1jb2xvcicsIG8uY29sb3IpXHJcbiAgICAgIGlmIChvLm9mZnNldCAgIT0gbnVsbCkgdGhpcy5hdHRyKCdvZmZzZXQnLCBuZXcgU1ZHLk51bWJlcihvLm9mZnNldCkpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pXHJcblxuU1ZHLlBhdHRlcm4gPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6ICdwYXR0ZXJuJ1xyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuQ29udGFpbmVyXHJcblxyXG4gIC8vIEFkZCBjbGFzcyBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBSZXR1cm4gdGhlIGZpbGwgaWRcclxuICAgIGZpbGw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gJ3VybCgjJyArIHRoaXMuaWQoKSArICcpJ1xyXG4gICAgfVxyXG4gICAgLy8gVXBkYXRlIHBhdHRlcm4gYnkgcmVidWlsZGluZ1xyXG4gICwgdXBkYXRlOiBmdW5jdGlvbihibG9jaykge1xyXG4gICAgICAvLyByZW1vdmUgY29udGVudFxyXG4gICAgICB0aGlzLmNsZWFyKClcclxuXHJcbiAgICAgIC8vIGludm9rZSBwYXNzZWQgYmxvY2tcclxuICAgICAgaWYgKHR5cGVvZiBibG9jayA9PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgIGJsb2NrLmNhbGwodGhpcywgdGhpcylcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBBbGlhcyBzdHJpbmcgY29udmVydGlvbiB0byBmaWxsXHJcbiAgLCB0b1N0cmluZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpbGwoKVxyXG4gICAgfVxyXG4gICAgLy8gY3VzdG9tIGF0dHIgdG8gaGFuZGxlIHRyYW5zZm9ybVxyXG4gICwgYXR0cjogZnVuY3Rpb24oYSwgYiwgYykge1xyXG4gICAgICBpZihhID09ICd0cmFuc2Zvcm0nKSBhID0gJ3BhdHRlcm5UcmFuc2Zvcm0nXHJcbiAgICAgIHJldHVybiBTVkcuQ29udGFpbmVyLnByb3RvdHlwZS5hdHRyLmNhbGwodGhpcywgYSwgYiwgYylcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gQ3JlYXRlIHBhdHRlcm4gZWxlbWVudCBpbiBkZWZzXHJcbiAgICBwYXR0ZXJuOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCBibG9jaykge1xyXG4gICAgICByZXR1cm4gdGhpcy5kZWZzKCkucGF0dGVybih3aWR0aCwgaGVpZ2h0LCBibG9jaylcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5EZWZzLCB7XHJcbiAgLy8gRGVmaW5lIGdyYWRpZW50XHJcbiAgcGF0dGVybjogZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgYmxvY2spIHtcclxuICAgIHJldHVybiB0aGlzLnB1dChuZXcgU1ZHLlBhdHRlcm4pLnVwZGF0ZShibG9jaykuYXR0cih7XHJcbiAgICAgIHg6ICAgICAgICAgICAgMFxyXG4gICAgLCB5OiAgICAgICAgICAgIDBcclxuICAgICwgd2lkdGg6ICAgICAgICB3aWR0aFxyXG4gICAgLCBoZWlnaHQ6ICAgICAgIGhlaWdodFxyXG4gICAgLCBwYXR0ZXJuVW5pdHM6ICd1c2VyU3BhY2VPblVzZSdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxufSlcblNWRy5TaGFwZSA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGVsZW1lbnQpXHJcbiAgfVxyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuRWxlbWVudFxyXG5cclxufSlcblxyXG5TVkcuQmFyZSA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemVcclxuICBjcmVhdGU6IGZ1bmN0aW9uKGVsZW1lbnQsIGluaGVyaXQpIHtcclxuICAgIC8vIGNvbnN0cnVjdCBlbGVtZW50XHJcbiAgICB0aGlzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgU1ZHLmNyZWF0ZShlbGVtZW50KSlcclxuXHJcbiAgICAvLyBpbmhlcml0IGN1c3RvbSBtZXRob2RzXHJcbiAgICBpZiAoaW5oZXJpdClcclxuICAgICAgZm9yICh2YXIgbWV0aG9kIGluIGluaGVyaXQucHJvdG90eXBlKVxyXG4gICAgICAgIGlmICh0eXBlb2YgaW5oZXJpdC5wcm90b3R5cGVbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgIHRoaXNbbWV0aG9kXSA9IGluaGVyaXQucHJvdG90eXBlW21ldGhvZF1cclxuICB9XHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5FbGVtZW50XHJcblxyXG4gIC8vIEFkZCBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBJbnNlcnQgc29tZSBwbGFpbiB0ZXh0XHJcbiAgICB3b3JkczogZnVuY3Rpb24odGV4dCkge1xyXG4gICAgICAvLyByZW1vdmUgY29udGVudHNcclxuICAgICAgd2hpbGUgKHRoaXMubm9kZS5oYXNDaGlsZE5vZGVzKCkpXHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZS5sYXN0Q2hpbGQpXHJcblxyXG4gICAgICAvLyBjcmVhdGUgdGV4dCBub2RlXHJcbiAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSlcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuXHJcblNWRy5leHRlbmQoU1ZHLlBhcmVudCwge1xyXG4gIC8vIENyZWF0ZSBhbiBlbGVtZW50IHRoYXQgaXMgbm90IGRlc2NyaWJlZCBieSBTVkcuanNcclxuICBlbGVtZW50OiBmdW5jdGlvbihlbGVtZW50LCBpbmhlcml0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5wdXQobmV3IFNWRy5CYXJlKGVsZW1lbnQsIGluaGVyaXQpKVxyXG4gIH1cclxufSlcclxuXG5TVkcuU3ltYm9sID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiAnc3ltYm9sJ1xyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuQ29udGFpbmVyXHJcblxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gY3JlYXRlIHN5bWJvbFxyXG4gICAgc3ltYm9sOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTVkcuU3ltYm9sKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXG5TVkcuVXNlID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiAndXNlJ1xyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuU2hhcGVcclxuXHJcbiAgLy8gQWRkIGNsYXNzIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIFVzZSBlbGVtZW50IGFzIGEgcmVmZXJlbmNlXHJcbiAgICBlbGVtZW50OiBmdW5jdGlvbihlbGVtZW50LCBmaWxlKSB7XHJcbiAgICAgIC8vIFNldCBsaW5lZCBlbGVtZW50XHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ2hyZWYnLCAoZmlsZSB8fCAnJykgKyAnIycgKyBlbGVtZW50LCBTVkcueGxpbmspXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gQ3JlYXRlIGEgdXNlIGVsZW1lbnRcclxuICAgIHVzZTogZnVuY3Rpb24oZWxlbWVudCwgZmlsZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFNWRy5Vc2UpLmVsZW1lbnQoZWxlbWVudCwgZmlsZSlcclxuICAgIH1cclxuICB9XHJcbn0pXG5TVkcuUmVjdCA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogJ3JlY3QnXHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5TaGFwZVxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gQ3JlYXRlIGEgcmVjdCBlbGVtZW50XHJcbiAgICByZWN0OiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgU1ZHLlJlY3QoKSkuc2l6ZSh3aWR0aCwgaGVpZ2h0KVxyXG4gICAgfVxyXG4gIH1cclxufSlcblNWRy5DaXJjbGUgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6ICdjaXJjbGUnXHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5TaGFwZVxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gQ3JlYXRlIGNpcmNsZSBlbGVtZW50LCBiYXNlZCBvbiBlbGxpcHNlXHJcbiAgICBjaXJjbGU6IGZ1bmN0aW9uKHNpemUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTVkcuQ2lyY2xlKS5yeChuZXcgU1ZHLk51bWJlcihzaXplKS5kaXZpZGUoMikpLm1vdmUoMCwgMClcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5DaXJjbGUsIFNWRy5GWCwge1xyXG4gIC8vIFJhZGl1cyB4IHZhbHVlXHJcbiAgcng6IGZ1bmN0aW9uKHJ4KSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdyJywgcngpXHJcbiAgfVxyXG4gIC8vIEFsaWFzIHJhZGl1cyB4IHZhbHVlXHJcbiwgcnk6IGZ1bmN0aW9uKHJ5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5yeChyeSlcclxuICB9XHJcbn0pXHJcblxyXG5TVkcuRWxsaXBzZSA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogJ2VsbGlwc2UnXHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5TaGFwZVxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gQ3JlYXRlIGFuIGVsbGlwc2VcclxuICAgIGVsbGlwc2U6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTVkcuRWxsaXBzZSkuc2l6ZSh3aWR0aCwgaGVpZ2h0KS5tb3ZlKDAsIDApXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuRWxsaXBzZSwgU1ZHLlJlY3QsIFNWRy5GWCwge1xyXG4gIC8vIFJhZGl1cyB4IHZhbHVlXHJcbiAgcng6IGZ1bmN0aW9uKHJ4KSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdyeCcsIHJ4KVxyXG4gIH1cclxuICAvLyBSYWRpdXMgeSB2YWx1ZVxyXG4sIHJ5OiBmdW5jdGlvbihyeSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXR0cigncnknLCByeSlcclxuICB9XHJcbn0pXHJcblxyXG4vLyBBZGQgY29tbW9uIG1ldGhvZFxyXG5TVkcuZXh0ZW5kKFNWRy5DaXJjbGUsIFNWRy5FbGxpcHNlLCB7XHJcbiAgICAvLyBNb3ZlIG92ZXIgeC1heGlzXHJcbiAgICB4OiBmdW5jdGlvbih4KSB7XHJcbiAgICAgIHJldHVybiB4ID09IG51bGwgPyB0aGlzLmN4KCkgLSB0aGlzLnJ4KCkgOiB0aGlzLmN4KHggKyB0aGlzLnJ4KCkpXHJcbiAgICB9XHJcbiAgICAvLyBNb3ZlIG92ZXIgeS1heGlzXHJcbiAgLCB5OiBmdW5jdGlvbih5KSB7XHJcbiAgICAgIHJldHVybiB5ID09IG51bGwgPyB0aGlzLmN5KCkgLSB0aGlzLnJ5KCkgOiB0aGlzLmN5KHkgKyB0aGlzLnJ5KCkpXHJcbiAgICB9XHJcbiAgICAvLyBNb3ZlIGJ5IGNlbnRlciBvdmVyIHgtYXhpc1xyXG4gICwgY3g6IGZ1bmN0aW9uKHgpIHtcclxuICAgICAgcmV0dXJuIHggPT0gbnVsbCA/IHRoaXMuYXR0cignY3gnKSA6IHRoaXMuYXR0cignY3gnLCB4KVxyXG4gICAgfVxyXG4gICAgLy8gTW92ZSBieSBjZW50ZXIgb3ZlciB5LWF4aXNcclxuICAsIGN5OiBmdW5jdGlvbih5KSB7XHJcbiAgICAgIHJldHVybiB5ID09IG51bGwgPyB0aGlzLmF0dHIoJ2N5JykgOiB0aGlzLmF0dHIoJ2N5JywgeSlcclxuICAgIH1cclxuICAgIC8vIFNldCB3aWR0aCBvZiBlbGVtZW50XHJcbiAgLCB3aWR0aDogZnVuY3Rpb24od2lkdGgpIHtcclxuICAgICAgcmV0dXJuIHdpZHRoID09IG51bGwgPyB0aGlzLnJ4KCkgKiAyIDogdGhpcy5yeChuZXcgU1ZHLk51bWJlcih3aWR0aCkuZGl2aWRlKDIpKVxyXG4gICAgfVxyXG4gICAgLy8gU2V0IGhlaWdodCBvZiBlbGVtZW50XHJcbiAgLCBoZWlnaHQ6IGZ1bmN0aW9uKGhlaWdodCkge1xyXG4gICAgICByZXR1cm4gaGVpZ2h0ID09IG51bGwgPyB0aGlzLnJ5KCkgKiAyIDogdGhpcy5yeShuZXcgU1ZHLk51bWJlcihoZWlnaHQpLmRpdmlkZSgyKSlcclxuICAgIH1cclxuICAgIC8vIEN1c3RvbSBzaXplIGZ1bmN0aW9uXHJcbiAgLCBzaXplOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgIHZhciBwID0gcHJvcG9ydGlvbmFsU2l6ZSh0aGlzLCB3aWR0aCwgaGVpZ2h0KVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgICAgICAucngobmV3IFNWRy5OdW1iZXIocC53aWR0aCkuZGl2aWRlKDIpKVxyXG4gICAgICAgIC5yeShuZXcgU1ZHLk51bWJlcihwLmhlaWdodCkuZGl2aWRlKDIpKVxyXG4gICAgfVxyXG59KVxuU1ZHLkxpbmUgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6ICdsaW5lJ1xyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuU2hhcGVcclxuXHJcbiAgLy8gQWRkIGNsYXNzIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIEdldCBhcnJheVxyXG4gICAgYXJyYXk6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFNWRy5Qb2ludEFycmF5KFtcclxuICAgICAgICBbIHRoaXMuYXR0cigneDEnKSwgdGhpcy5hdHRyKCd5MScpIF1cclxuICAgICAgLCBbIHRoaXMuYXR0cigneDInKSwgdGhpcy5hdHRyKCd5MicpIF1cclxuICAgICAgXSlcclxuICAgIH1cclxuICAgIC8vIE92ZXJ3cml0ZSBuYXRpdmUgcGxvdCgpIG1ldGhvZFxyXG4gICwgcGxvdDogZnVuY3Rpb24oeDEsIHkxLCB4MiwgeTIpIHtcclxuICAgICAgaWYgKHgxID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXkoKVxyXG4gICAgICBlbHNlIGlmICh0eXBlb2YgeTEgIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgIHgxID0geyB4MTogeDEsIHkxOiB5MSwgeDI6IHgyLCB5MjogeTIgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgeDEgPSBuZXcgU1ZHLlBvaW50QXJyYXkoeDEpLnRvTGluZSgpXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKHgxKVxyXG4gICAgfVxyXG4gICAgLy8gTW92ZSBieSBsZWZ0IHRvcCBjb3JuZXJcclxuICAsIG1vdmU6IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cih0aGlzLmFycmF5KCkubW92ZSh4LCB5KS50b0xpbmUoKSlcclxuICAgIH1cclxuICAgIC8vIFNldCBlbGVtZW50IHNpemUgdG8gZ2l2ZW4gd2lkdGggYW5kIGhlaWdodFxyXG4gICwgc2l6ZTogZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xyXG4gICAgICB2YXIgcCA9IHByb3BvcnRpb25hbFNpemUodGhpcywgd2lkdGgsIGhlaWdodClcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIodGhpcy5hcnJheSgpLnNpemUocC53aWR0aCwgcC5oZWlnaHQpLnRvTGluZSgpKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIENyZWF0ZSBhIGxpbmUgZWxlbWVudFxyXG4gICAgbGluZTogZnVuY3Rpb24oeDEsIHkxLCB4MiwgeTIpIHtcclxuICAgICAgLy8gbWFrZSBzdXJlIHBsb3QgaXMgY2FsbGVkIGFzIGEgc2V0dGVyXHJcbiAgICAgIC8vIHgxIGlzIG5vdCBuZWNlc3NhcmlseSBhIG51bWJlciwgaXQgY2FuIGFsc28gYmUgYW4gYXJyYXksIGEgc3RyaW5nIGFuZCBhIFNWRy5Qb2ludEFycmF5XHJcbiAgICAgIHJldHVybiBTVkcuTGluZS5wcm90b3R5cGUucGxvdC5hcHBseShcclxuICAgICAgICB0aGlzLnB1dChuZXcgU1ZHLkxpbmUpXHJcbiAgICAgICwgeDEgIT0gbnVsbCA/IFt4MSwgeTEsIHgyLCB5Ml0gOiBbMCwgMCwgMCwgMF1cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXG5TVkcuUG9seWxpbmUgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6ICdwb2x5bGluZSdcclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLlNoYXBlXHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBDcmVhdGUgYSB3cmFwcGVkIHBvbHlsaW5lIGVsZW1lbnRcclxuICAgIHBvbHlsaW5lOiBmdW5jdGlvbihwKSB7XHJcbiAgICAgIC8vIG1ha2Ugc3VyZSBwbG90IGlzIGNhbGxlZCBhcyBhIHNldHRlclxyXG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFNWRy5Qb2x5bGluZSkucGxvdChwIHx8IG5ldyBTVkcuUG9pbnRBcnJheSlcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5TVkcuUG9seWdvbiA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogJ3BvbHlnb24nXHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5TaGFwZVxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gQ3JlYXRlIGEgd3JhcHBlZCBwb2x5Z29uIGVsZW1lbnRcclxuICAgIHBvbHlnb246IGZ1bmN0aW9uKHApIHtcclxuICAgICAgLy8gbWFrZSBzdXJlIHBsb3QgaXMgY2FsbGVkIGFzIGEgc2V0dGVyXHJcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgU1ZHLlBvbHlnb24pLnBsb3QocCB8fCBuZXcgU1ZHLlBvaW50QXJyYXkpXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuLy8gQWRkIHBvbHlnb24tc3BlY2lmaWMgZnVuY3Rpb25zXHJcblNWRy5leHRlbmQoU1ZHLlBvbHlsaW5lLCBTVkcuUG9seWdvbiwge1xyXG4gIC8vIEdldCBhcnJheVxyXG4gIGFycmF5OiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9hcnJheSB8fCAodGhpcy5fYXJyYXkgPSBuZXcgU1ZHLlBvaW50QXJyYXkodGhpcy5hdHRyKCdwb2ludHMnKSkpXHJcbiAgfVxyXG4gIC8vIFBsb3QgbmV3IHBhdGhcclxuLCBwbG90OiBmdW5jdGlvbihwKSB7XHJcbiAgICByZXR1cm4gKHAgPT0gbnVsbCkgP1xyXG4gICAgICB0aGlzLmFycmF5KCkgOlxyXG4gICAgICB0aGlzLmNsZWFyKCkuYXR0cigncG9pbnRzJywgdHlwZW9mIHAgPT0gJ3N0cmluZycgPyBwIDogKHRoaXMuX2FycmF5ID0gbmV3IFNWRy5Qb2ludEFycmF5KHApKSlcclxuICB9XHJcbiAgLy8gQ2xlYXIgYXJyYXkgY2FjaGVcclxuLCBjbGVhcjogZnVuY3Rpb24oKSB7XHJcbiAgICBkZWxldGUgdGhpcy5fYXJyYXlcclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIC8vIE1vdmUgYnkgbGVmdCB0b3AgY29ybmVyXHJcbiwgbW92ZTogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXR0cigncG9pbnRzJywgdGhpcy5hcnJheSgpLm1vdmUoeCwgeSkpXHJcbiAgfVxyXG4gIC8vIFNldCBlbGVtZW50IHNpemUgdG8gZ2l2ZW4gd2lkdGggYW5kIGhlaWdodFxyXG4sIHNpemU6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHZhciBwID0gcHJvcG9ydGlvbmFsU2l6ZSh0aGlzLCB3aWR0aCwgaGVpZ2h0KVxyXG5cclxuICAgIHJldHVybiB0aGlzLmF0dHIoJ3BvaW50cycsIHRoaXMuYXJyYXkoKS5zaXplKHAud2lkdGgsIHAuaGVpZ2h0KSlcclxuICB9XHJcblxyXG59KVxyXG5cbi8vIHVuaWZ5IGFsbCBwb2ludCB0byBwb2ludCBlbGVtZW50c1xyXG5TVkcuZXh0ZW5kKFNWRy5MaW5lLCBTVkcuUG9seWxpbmUsIFNWRy5Qb2x5Z29uLCB7XHJcbiAgLy8gRGVmaW5lIG1vcnBoYWJsZSBhcnJheVxyXG4gIG1vcnBoQXJyYXk6ICBTVkcuUG9pbnRBcnJheVxyXG4gIC8vIE1vdmUgYnkgbGVmdCB0b3AgY29ybmVyIG92ZXIgeC1heGlzXHJcbiwgeDogZnVuY3Rpb24oeCkge1xyXG4gICAgcmV0dXJuIHggPT0gbnVsbCA/IHRoaXMuYmJveCgpLnggOiB0aGlzLm1vdmUoeCwgdGhpcy5iYm94KCkueSlcclxuICB9XHJcbiAgLy8gTW92ZSBieSBsZWZ0IHRvcCBjb3JuZXIgb3ZlciB5LWF4aXNcclxuLCB5OiBmdW5jdGlvbih5KSB7XHJcbiAgICByZXR1cm4geSA9PSBudWxsID8gdGhpcy5iYm94KCkueSA6IHRoaXMubW92ZSh0aGlzLmJib3goKS54LCB5KVxyXG4gIH1cclxuICAvLyBTZXQgd2lkdGggb2YgZWxlbWVudFxyXG4sIHdpZHRoOiBmdW5jdGlvbih3aWR0aCkge1xyXG4gICAgdmFyIGIgPSB0aGlzLmJib3goKVxyXG5cclxuICAgIHJldHVybiB3aWR0aCA9PSBudWxsID8gYi53aWR0aCA6IHRoaXMuc2l6ZSh3aWR0aCwgYi5oZWlnaHQpXHJcbiAgfVxyXG4gIC8vIFNldCBoZWlnaHQgb2YgZWxlbWVudFxyXG4sIGhlaWdodDogZnVuY3Rpb24oaGVpZ2h0KSB7XHJcbiAgICB2YXIgYiA9IHRoaXMuYmJveCgpXHJcblxyXG4gICAgcmV0dXJuIGhlaWdodCA9PSBudWxsID8gYi5oZWlnaHQgOiB0aGlzLnNpemUoYi53aWR0aCwgaGVpZ2h0KVxyXG4gIH1cclxufSlcblNWRy5QYXRoID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiAncGF0aCdcclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLlNoYXBlXHJcblxyXG4gIC8vIEFkZCBjbGFzcyBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBEZWZpbmUgbW9ycGhhYmxlIGFycmF5XHJcbiAgICBtb3JwaEFycmF5OiAgU1ZHLlBhdGhBcnJheVxyXG4gICAgLy8gR2V0IGFycmF5XHJcbiAgLCBhcnJheTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9hcnJheSB8fCAodGhpcy5fYXJyYXkgPSBuZXcgU1ZHLlBhdGhBcnJheSh0aGlzLmF0dHIoJ2QnKSkpXHJcbiAgICB9XHJcbiAgICAvLyBQbG90IG5ldyBwYXRoXHJcbiAgLCBwbG90OiBmdW5jdGlvbihkKSB7XHJcbiAgICAgIHJldHVybiAoZCA9PSBudWxsKSA/XHJcbiAgICAgICAgdGhpcy5hcnJheSgpIDpcclxuICAgICAgICB0aGlzLmNsZWFyKCkuYXR0cignZCcsIHR5cGVvZiBkID09ICdzdHJpbmcnID8gZCA6ICh0aGlzLl9hcnJheSA9IG5ldyBTVkcuUGF0aEFycmF5KGQpKSlcclxuICAgIH1cclxuICAgIC8vIENsZWFyIGFycmF5IGNhY2hlXHJcbiAgLCBjbGVhcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLl9hcnJheVxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gTW92ZSBieSBsZWZ0IHRvcCBjb3JuZXJcclxuICAsIG1vdmU6IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cignZCcsIHRoaXMuYXJyYXkoKS5tb3ZlKHgsIHkpKVxyXG4gICAgfVxyXG4gICAgLy8gTW92ZSBieSBsZWZ0IHRvcCBjb3JuZXIgb3ZlciB4LWF4aXNcclxuICAsIHg6IGZ1bmN0aW9uKHgpIHtcclxuICAgICAgcmV0dXJuIHggPT0gbnVsbCA/IHRoaXMuYmJveCgpLnggOiB0aGlzLm1vdmUoeCwgdGhpcy5iYm94KCkueSlcclxuICAgIH1cclxuICAgIC8vIE1vdmUgYnkgbGVmdCB0b3AgY29ybmVyIG92ZXIgeS1heGlzXHJcbiAgLCB5OiBmdW5jdGlvbih5KSB7XHJcbiAgICAgIHJldHVybiB5ID09IG51bGwgPyB0aGlzLmJib3goKS55IDogdGhpcy5tb3ZlKHRoaXMuYmJveCgpLngsIHkpXHJcbiAgICB9XHJcbiAgICAvLyBTZXQgZWxlbWVudCBzaXplIHRvIGdpdmVuIHdpZHRoIGFuZCBoZWlnaHRcclxuICAsIHNpemU6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgdmFyIHAgPSBwcm9wb3J0aW9uYWxTaXplKHRoaXMsIHdpZHRoLCBoZWlnaHQpXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCdkJywgdGhpcy5hcnJheSgpLnNpemUocC53aWR0aCwgcC5oZWlnaHQpKVxyXG4gICAgfVxyXG4gICAgLy8gU2V0IHdpZHRoIG9mIGVsZW1lbnRcclxuICAsIHdpZHRoOiBmdW5jdGlvbih3aWR0aCkge1xyXG4gICAgICByZXR1cm4gd2lkdGggPT0gbnVsbCA/IHRoaXMuYmJveCgpLndpZHRoIDogdGhpcy5zaXplKHdpZHRoLCB0aGlzLmJib3goKS5oZWlnaHQpXHJcbiAgICB9XHJcbiAgICAvLyBTZXQgaGVpZ2h0IG9mIGVsZW1lbnRcclxuICAsIGhlaWdodDogZnVuY3Rpb24oaGVpZ2h0KSB7XHJcbiAgICAgIHJldHVybiBoZWlnaHQgPT0gbnVsbCA/IHRoaXMuYmJveCgpLmhlaWdodCA6IHRoaXMuc2l6ZSh0aGlzLmJib3goKS53aWR0aCwgaGVpZ2h0KVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBDcmVhdGUgYSB3cmFwcGVkIHBhdGggZWxlbWVudFxyXG4gICAgcGF0aDogZnVuY3Rpb24oZCkge1xyXG4gICAgICAvLyBtYWtlIHN1cmUgcGxvdCBpcyBjYWxsZWQgYXMgYSBzZXR0ZXJcclxuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTVkcuUGF0aCkucGxvdChkIHx8IG5ldyBTVkcuUGF0aEFycmF5KVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXG5TVkcuSW1hZ2UgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6ICdpbWFnZSdcclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLlNoYXBlXHJcblxyXG4gIC8vIEFkZCBjbGFzcyBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyAocmUpbG9hZCBpbWFnZVxyXG4gICAgbG9hZDogZnVuY3Rpb24odXJsKSB7XHJcbiAgICAgIGlmICghdXJsKSByZXR1cm4gdGhpc1xyXG5cclxuICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICAgICAgLCBpbWcgID0gbmV3IHdpbmRvdy5JbWFnZSgpXHJcblxyXG4gICAgICAvLyBwcmVsb2FkIGltYWdlXHJcbiAgICAgIFNWRy5vbihpbWcsICdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgU1ZHLm9mZihpbWcpXHJcblxyXG4gICAgICAgIHZhciBwID0gc2VsZi5wYXJlbnQoU1ZHLlBhdHRlcm4pXHJcblxyXG4gICAgICAgIGlmKHAgPT09IG51bGwpIHJldHVyblxyXG5cclxuICAgICAgICAvLyBlbnN1cmUgaW1hZ2Ugc2l6ZVxyXG4gICAgICAgIGlmIChzZWxmLndpZHRoKCkgPT0gMCAmJiBzZWxmLmhlaWdodCgpID09IDApXHJcbiAgICAgICAgICBzZWxmLnNpemUoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KVxyXG5cclxuICAgICAgICAvLyBlbnN1cmUgcGF0dGVybiBzaXplIGlmIG5vdCBzZXRcclxuICAgICAgICBpZiAocCAmJiBwLndpZHRoKCkgPT0gMCAmJiBwLmhlaWdodCgpID09IDApXHJcbiAgICAgICAgICBwLnNpemUoc2VsZi53aWR0aCgpLCBzZWxmLmhlaWdodCgpKVxyXG5cclxuICAgICAgICAvLyBjYWxsYmFja1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5fbG9hZGVkID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgc2VsZi5fbG9hZGVkLmNhbGwoc2VsZiwge1xyXG4gICAgICAgICAgICB3aWR0aDogIGltZy53aWR0aFxyXG4gICAgICAgICAgLCBoZWlnaHQ6IGltZy5oZWlnaHRcclxuICAgICAgICAgICwgcmF0aW86ICBpbWcud2lkdGggLyBpbWcuaGVpZ2h0XHJcbiAgICAgICAgICAsIHVybDogICAgdXJsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgU1ZHLm9uKGltZywgJ2Vycm9yJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgU1ZHLm9mZihpbWcpXHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5fZXJyb3IgPT09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICBzZWxmLl9lcnJvci5jYWxsKHNlbGYsIGUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cignaHJlZicsIChpbWcuc3JjID0gdGhpcy5zcmMgPSB1cmwpLCBTVkcueGxpbmspXHJcbiAgICB9XHJcbiAgICAvLyBBZGQgbG9hZGVkIGNhbGxiYWNrXHJcbiAgLCBsb2FkZWQ6IGZ1bmN0aW9uKGxvYWRlZCkge1xyXG4gICAgICB0aGlzLl9sb2FkZWQgPSBsb2FkZWRcclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgLCBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgdGhpcy5fZXJyb3IgPSBlcnJvclxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIGNyZWF0ZSBpbWFnZSBlbGVtZW50LCBsb2FkIGltYWdlIGFuZCBzZXQgaXRzIHNpemVcclxuICAgIGltYWdlOiBmdW5jdGlvbihzb3VyY2UsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTVkcuSW1hZ2UpLmxvYWQoc291cmNlKS5zaXplKHdpZHRoIHx8IDAsIGhlaWdodCB8fCB3aWR0aCB8fCAwKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pXG5TVkcuVGV4dCA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgU1ZHLmNyZWF0ZSgndGV4dCcpKVxyXG5cclxuICAgIHRoaXMuZG9tLmxlYWRpbmcgPSBuZXcgU1ZHLk51bWJlcigxLjMpICAgIC8vIHN0b3JlIGxlYWRpbmcgdmFsdWUgZm9yIHJlYnVpbGRpbmdcclxuICAgIHRoaXMuX3JlYnVpbGQgPSB0cnVlICAgICAgICAgICAgICAgICAgICAgIC8vIGVuYWJsZSBhdXRvbWF0aWMgdXBkYXRpbmcgb2YgZHkgdmFsdWVzXHJcbiAgICB0aGlzLl9idWlsZCAgID0gZmFsc2UgICAgICAgICAgICAgICAgICAgICAvLyBkaXNhYmxlIGJ1aWxkIG1vZGUgZm9yIGFkZGluZyBtdWx0aXBsZSBsaW5lc1xyXG5cclxuICAgIC8vIHNldCBkZWZhdWx0IGZvbnRcclxuICAgIHRoaXMuYXR0cignZm9udC1mYW1pbHknLCBTVkcuZGVmYXVsdHMuYXR0cnNbJ2ZvbnQtZmFtaWx5J10pXHJcbiAgfVxyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuU2hhcGVcclxuXHJcbiAgLy8gQWRkIGNsYXNzIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIE1vdmUgb3ZlciB4LWF4aXNcclxuICAgIHg6IGZ1bmN0aW9uKHgpIHtcclxuICAgICAgLy8gYWN0IGFzIGdldHRlclxyXG4gICAgICBpZiAoeCA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmF0dHIoJ3gnKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cigneCcsIHgpXHJcbiAgICB9XHJcbiAgICAvLyBNb3ZlIG92ZXIgeS1heGlzXHJcbiAgLCB5OiBmdW5jdGlvbih5KSB7XHJcbiAgICAgIHZhciBveSA9IHRoaXMuYXR0cigneScpXHJcbiAgICAgICAgLCBvICA9IHR5cGVvZiBveSA9PT0gJ251bWJlcicgPyBveSAtIHRoaXMuYmJveCgpLnkgOiAwXHJcblxyXG4gICAgICAvLyBhY3QgYXMgZ2V0dGVyXHJcbiAgICAgIGlmICh5ID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBveSA9PT0gJ251bWJlcicgPyBveSAtIG8gOiBveVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cigneScsIHR5cGVvZiB5LnZhbHVlT2YoKSA9PT0gJ251bWJlcicgPyB5ICsgbyA6IHkpXHJcbiAgICB9XHJcbiAgICAvLyBNb3ZlIGNlbnRlciBvdmVyIHgtYXhpc1xyXG4gICwgY3g6IGZ1bmN0aW9uKHgpIHtcclxuICAgICAgcmV0dXJuIHggPT0gbnVsbCA/IHRoaXMuYmJveCgpLmN4IDogdGhpcy54KHggLSB0aGlzLmJib3goKS53aWR0aCAvIDIpXHJcbiAgICB9XHJcbiAgICAvLyBNb3ZlIGNlbnRlciBvdmVyIHktYXhpc1xyXG4gICwgY3k6IGZ1bmN0aW9uKHkpIHtcclxuICAgICAgcmV0dXJuIHkgPT0gbnVsbCA/IHRoaXMuYmJveCgpLmN5IDogdGhpcy55KHkgLSB0aGlzLmJib3goKS5oZWlnaHQgLyAyKVxyXG4gICAgfVxyXG4gICAgLy8gU2V0IHRoZSB0ZXh0IGNvbnRlbnRcclxuICAsIHRleHQ6IGZ1bmN0aW9uKHRleHQpIHtcclxuICAgICAgLy8gYWN0IGFzIGdldHRlclxyXG4gICAgICBpZiAodHlwZW9mIHRleHQgPT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICB2YXIgdGV4dCA9ICcnXHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5ub2RlLmNoaWxkTm9kZXNcclxuICAgICAgICBmb3IodmFyIGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47ICsraSl7XHJcblxyXG4gICAgICAgICAgLy8gYWRkIG5ld2xpbmUgaWYgaXRzIG5vdCB0aGUgZmlyc3QgY2hpbGQgYW5kIG5ld0xpbmVkIGlzIHNldCB0byB0cnVlXHJcbiAgICAgICAgICBpZihpICE9IDAgJiYgY2hpbGRyZW5baV0ubm9kZVR5cGUgIT0gMyAmJiBTVkcuYWRvcHQoY2hpbGRyZW5baV0pLmRvbS5uZXdMaW5lZCA9PSB0cnVlKXtcclxuICAgICAgICAgICAgdGV4dCArPSAnXFxuJ1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIGFkZCBjb250ZW50IG9mIHRoaXMgbm9kZVxyXG4gICAgICAgICAgdGV4dCArPSBjaGlsZHJlbltpXS50ZXh0Q29udGVudFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHRcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gcmVtb3ZlIGV4aXN0aW5nIGNvbnRlbnRcclxuICAgICAgdGhpcy5jbGVhcigpLmJ1aWxkKHRydWUpXHJcblxyXG4gICAgICBpZiAodHlwZW9mIHRleHQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAvLyBjYWxsIGJsb2NrXHJcbiAgICAgICAgdGV4dC5jYWxsKHRoaXMsIHRoaXMpXHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHN0b3JlIHRleHQgYW5kIG1ha2Ugc3VyZSB0ZXh0IGlzIG5vdCBibGFua1xyXG4gICAgICAgIHRleHQgPSB0ZXh0LnNwbGl0KCdcXG4nKVxyXG5cclxuICAgICAgICAvLyBidWlsZCBuZXcgbGluZXNcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaWwgPSB0ZXh0Lmxlbmd0aDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgICB0aGlzLnRzcGFuKHRleHRbaV0pLm5ld0xpbmUoKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBkaXNhYmxlIGJ1aWxkIG1vZGUgYW5kIHJlYnVpbGQgbGluZXNcclxuICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoZmFsc2UpLnJlYnVpbGQoKVxyXG4gICAgfVxyXG4gICAgLy8gU2V0IGZvbnQgc2l6ZVxyXG4gICwgc2l6ZTogZnVuY3Rpb24oc2l6ZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCdmb250LXNpemUnLCBzaXplKS5yZWJ1aWxkKClcclxuICAgIH1cclxuICAgIC8vIFNldCAvIGdldCBsZWFkaW5nXHJcbiAgLCBsZWFkaW5nOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAvLyBhY3QgYXMgZ2V0dGVyXHJcbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmRvbS5sZWFkaW5nXHJcblxyXG4gICAgICAvLyBhY3QgYXMgc2V0dGVyXHJcbiAgICAgIHRoaXMuZG9tLmxlYWRpbmcgPSBuZXcgU1ZHLk51bWJlcih2YWx1ZSlcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnJlYnVpbGQoKVxyXG4gICAgfVxyXG4gICAgLy8gR2V0IGFsbCB0aGUgZmlyc3QgbGV2ZWwgbGluZXNcclxuICAsIGxpbmVzOiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIG5vZGUgPSAodGhpcy50ZXh0UGF0aCAmJiB0aGlzLnRleHRQYXRoKCkgfHwgdGhpcykubm9kZVxyXG5cclxuICAgICAgLy8gZmlsdGVyIHRzcGFucyBhbmQgbWFwIHRoZW0gdG8gU1ZHLmpzIGluc3RhbmNlc1xyXG4gICAgICB2YXIgbGluZXMgPSBTVkcudXRpbHMubWFwKFNWRy51dGlscy5maWx0ZXJTVkdFbGVtZW50cyhub2RlLmNoaWxkTm9kZXMpLCBmdW5jdGlvbihlbCl7XHJcbiAgICAgICAgcmV0dXJuIFNWRy5hZG9wdChlbClcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vIHJldHVybiBhbiBpbnN0YW5jZSBvZiBTVkcuc2V0XHJcbiAgICAgIHJldHVybiBuZXcgU1ZHLlNldChsaW5lcylcclxuICAgIH1cclxuICAgIC8vIFJlYnVpbGQgYXBwZWFyYW5jZSB0eXBlXHJcbiAgLCByZWJ1aWxkOiBmdW5jdGlvbihyZWJ1aWxkKSB7XHJcbiAgICAgIC8vIHN0b3JlIG5ldyByZWJ1aWxkIGZsYWcgaWYgZ2l2ZW5cclxuICAgICAgaWYgKHR5cGVvZiByZWJ1aWxkID09ICdib29sZWFuJylcclxuICAgICAgICB0aGlzLl9yZWJ1aWxkID0gcmVidWlsZFxyXG5cclxuICAgICAgLy8gZGVmaW5lIHBvc2l0aW9uIG9mIGFsbCBsaW5lc1xyXG4gICAgICBpZiAodGhpcy5fcmVidWlsZCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpc1xyXG4gICAgICAgICAgLCBibGFua0xpbmVPZmZzZXQgPSAwXHJcbiAgICAgICAgICAsIGR5ID0gdGhpcy5kb20ubGVhZGluZyAqIG5ldyBTVkcuTnVtYmVyKHRoaXMuYXR0cignZm9udC1zaXplJykpXHJcblxyXG4gICAgICAgIHRoaXMubGluZXMoKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuZG9tLm5ld0xpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICghc2VsZi50ZXh0UGF0aCgpKVxyXG4gICAgICAgICAgICAgIHRoaXMuYXR0cigneCcsIHNlbGYuYXR0cigneCcpKVxyXG4gICAgICAgICAgICBpZih0aGlzLnRleHQoKSA9PSAnXFxuJykge1xyXG4gICAgICAgICAgICAgIGJsYW5rTGluZU9mZnNldCArPSBkeVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICB0aGlzLmF0dHIoJ2R5JywgZHkgKyBibGFua0xpbmVPZmZzZXQpXHJcbiAgICAgICAgICAgICAgYmxhbmtMaW5lT2Zmc2V0ID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5maXJlKCdyZWJ1aWxkJylcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIEVuYWJsZSAvIGRpc2FibGUgYnVpbGQgbW9kZVxyXG4gICwgYnVpbGQ6IGZ1bmN0aW9uKGJ1aWxkKSB7XHJcbiAgICAgIHRoaXMuX2J1aWxkID0gISFidWlsZFxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gb3ZlcndyaXRlIG1ldGhvZCBmcm9tIHBhcmVudCB0byBzZXQgZGF0YSBwcm9wZXJseVxyXG4gICwgc2V0RGF0YTogZnVuY3Rpb24obyl7XHJcbiAgICAgIHRoaXMuZG9tID0gb1xyXG4gICAgICB0aGlzLmRvbS5sZWFkaW5nID0gbmV3IFNWRy5OdW1iZXIoby5sZWFkaW5nIHx8IDEuMylcclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBDcmVhdGUgdGV4dCBlbGVtZW50XHJcbiAgICB0ZXh0OiBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgU1ZHLlRleHQpLnRleHQodGV4dClcclxuICAgIH1cclxuICAgIC8vIENyZWF0ZSBwbGFpbiB0ZXh0IGVsZW1lbnRcclxuICAsIHBsYWluOiBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgU1ZHLlRleHQpLnBsYWluKHRleHQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxuXHJcblNWRy5Uc3BhbiA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogJ3RzcGFuJ1xyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuU2hhcGVcclxuXHJcbiAgLy8gQWRkIGNsYXNzIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIFNldCB0ZXh0IGNvbnRlbnRcclxuICAgIHRleHQ6IGZ1bmN0aW9uKHRleHQpIHtcclxuICAgICAgaWYodGV4dCA9PSBudWxsKSByZXR1cm4gdGhpcy5ub2RlLnRleHRDb250ZW50ICsgKHRoaXMuZG9tLm5ld0xpbmVkID8gJ1xcbicgOiAnJylcclxuXHJcbiAgICAgIHR5cGVvZiB0ZXh0ID09PSAnZnVuY3Rpb24nID8gdGV4dC5jYWxsKHRoaXMsIHRoaXMpIDogdGhpcy5wbGFpbih0ZXh0KVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIFNob3J0Y3V0IGR4XHJcbiAgLCBkeDogZnVuY3Rpb24oZHgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cignZHgnLCBkeClcclxuICAgIH1cclxuICAgIC8vIFNob3J0Y3V0IGR5XHJcbiAgLCBkeTogZnVuY3Rpb24oZHkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cignZHknLCBkeSlcclxuICAgIH1cclxuICAgIC8vIENyZWF0ZSBuZXcgbGluZVxyXG4gICwgbmV3TGluZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIGZldGNoIHRleHQgcGFyZW50XHJcbiAgICAgIHZhciB0ID0gdGhpcy5wYXJlbnQoU1ZHLlRleHQpXHJcblxyXG4gICAgICAvLyBtYXJrIG5ldyBsaW5lXHJcbiAgICAgIHRoaXMuZG9tLm5ld0xpbmVkID0gdHJ1ZVxyXG5cclxuICAgICAgLy8gYXBwbHkgbmV3IGh5wqFuXHJcbiAgICAgIHJldHVybiB0aGlzLmR5KHQuZG9tLmxlYWRpbmcgKiB0LmF0dHIoJ2ZvbnQtc2l6ZScpKS5hdHRyKCd4JywgdC54KCkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxuXHJcblNWRy5leHRlbmQoU1ZHLlRleHQsIFNWRy5Uc3Bhbiwge1xyXG4gIC8vIENyZWF0ZSBwbGFpbiB0ZXh0IG5vZGVcclxuICBwbGFpbjogZnVuY3Rpb24odGV4dCkge1xyXG4gICAgLy8gY2xlYXIgaWYgYnVpbGQgbW9kZSBpcyBkaXNhYmxlZFxyXG4gICAgaWYgKHRoaXMuX2J1aWxkID09PSBmYWxzZSlcclxuICAgICAgdGhpcy5jbGVhcigpXHJcblxyXG4gICAgLy8gY3JlYXRlIHRleHQgbm9kZVxyXG4gICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIC8vIENyZWF0ZSBhIHRzcGFuXHJcbiwgdHNwYW46IGZ1bmN0aW9uKHRleHQpIHtcclxuICAgIHZhciBub2RlICA9ICh0aGlzLnRleHRQYXRoICYmIHRoaXMudGV4dFBhdGgoKSB8fCB0aGlzKS5ub2RlXHJcbiAgICAgICwgdHNwYW4gPSBuZXcgU1ZHLlRzcGFuXHJcblxyXG4gICAgLy8gY2xlYXIgaWYgYnVpbGQgbW9kZSBpcyBkaXNhYmxlZFxyXG4gICAgaWYgKHRoaXMuX2J1aWxkID09PSBmYWxzZSlcclxuICAgICAgdGhpcy5jbGVhcigpXHJcblxyXG4gICAgLy8gYWRkIG5ldyB0c3BhblxyXG4gICAgbm9kZS5hcHBlbmRDaGlsZCh0c3Bhbi5ub2RlKVxyXG5cclxuICAgIHJldHVybiB0c3Bhbi50ZXh0KHRleHQpXHJcbiAgfVxyXG4gIC8vIENsZWFyIGFsbCBsaW5lc1xyXG4sIGNsZWFyOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciBub2RlID0gKHRoaXMudGV4dFBhdGggJiYgdGhpcy50ZXh0UGF0aCgpIHx8IHRoaXMpLm5vZGVcclxuXHJcbiAgICAvLyByZW1vdmUgZXhpc3RpbmcgY2hpbGQgbm9kZXNcclxuICAgIHdoaWxlIChub2RlLmhhc0NoaWxkTm9kZXMoKSlcclxuICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RDaGlsZClcclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICAvLyBHZXQgbGVuZ3RoIG9mIHRleHQgZWxlbWVudFxyXG4sIGxlbmd0aDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXB1dGVkVGV4dExlbmd0aCgpXHJcbiAgfVxyXG59KVxyXG5cblNWRy5UZXh0UGF0aCA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogJ3RleHRQYXRoJ1xyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuUGFyZW50XHJcblxyXG4gIC8vIERlZmluZSBwYXJlbnQgY2xhc3NcclxuLCBwYXJlbnQ6IFNWRy5UZXh0XHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICBtb3JwaEFycmF5OiBTVkcuUGF0aEFycmF5XHJcbiAgICAvLyBDcmVhdGUgcGF0aCBmb3IgdGV4dCB0byBydW4gb25cclxuICAsIHBhdGg6IGZ1bmN0aW9uKGQpIHtcclxuICAgICAgLy8gY3JlYXRlIHRleHRQYXRoIGVsZW1lbnRcclxuICAgICAgdmFyIHBhdGggID0gbmV3IFNWRy5UZXh0UGF0aFxyXG4gICAgICAgICwgdHJhY2sgPSB0aGlzLmRvYygpLmRlZnMoKS5wYXRoKGQpXHJcblxyXG4gICAgICAvLyBtb3ZlIGxpbmVzIHRvIHRleHRwYXRoXHJcbiAgICAgIHdoaWxlICh0aGlzLm5vZGUuaGFzQ2hpbGROb2RlcygpKVxyXG4gICAgICAgIHBhdGgubm9kZS5hcHBlbmRDaGlsZCh0aGlzLm5vZGUuZmlyc3RDaGlsZClcclxuXHJcbiAgICAgIC8vIGFkZCB0ZXh0UGF0aCBlbGVtZW50IGFzIGNoaWxkIG5vZGVcclxuICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHBhdGgubm9kZSlcclxuXHJcbiAgICAgIC8vIGxpbmsgdGV4dFBhdGggdG8gcGF0aCBhbmQgYWRkIGNvbnRlbnRcclxuICAgICAgcGF0aC5hdHRyKCdocmVmJywgJyMnICsgdHJhY2ssIFNWRy54bGluaylcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4gdGhlIGFycmF5IG9mIHRoZSBwYXRoIHRyYWNrIGVsZW1lbnRcclxuICAsIGFycmF5OiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHRyYWNrID0gdGhpcy50cmFjaygpXHJcblxyXG4gICAgICByZXR1cm4gdHJhY2sgPyB0cmFjay5hcnJheSgpIDogbnVsbFxyXG4gICAgfVxyXG4gICAgLy8gUGxvdCBwYXRoIGlmIGFueVxyXG4gICwgcGxvdDogZnVuY3Rpb24oZCkge1xyXG4gICAgICB2YXIgdHJhY2sgPSB0aGlzLnRyYWNrKClcclxuICAgICAgICAsIHBhdGhBcnJheSA9IG51bGxcclxuXHJcbiAgICAgIGlmICh0cmFjaykge1xyXG4gICAgICAgIHBhdGhBcnJheSA9IHRyYWNrLnBsb3QoZClcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIChkID09IG51bGwpID8gcGF0aEFycmF5IDogdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gR2V0IHRoZSBwYXRoIHRyYWNrIGVsZW1lbnRcclxuICAsIHRyYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHBhdGggPSB0aGlzLnRleHRQYXRoKClcclxuXHJcbiAgICAgIGlmIChwYXRoKVxyXG4gICAgICAgIHJldHVybiBwYXRoLnJlZmVyZW5jZSgnaHJlZicpXHJcbiAgICB9XHJcbiAgICAvLyBHZXQgdGhlIHRleHRQYXRoIGNoaWxkXHJcbiAgLCB0ZXh0UGF0aDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLm5vZGUuZmlyc3RDaGlsZCAmJiB0aGlzLm5vZGUuZmlyc3RDaGlsZC5ub2RlTmFtZSA9PSAndGV4dFBhdGgnKVxyXG4gICAgICAgIHJldHVybiBTVkcuYWRvcHQodGhpcy5ub2RlLmZpcnN0Q2hpbGQpXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cblNWRy5OZXN0ZWQgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIFNWRy5jcmVhdGUoJ3N2ZycpKVxyXG5cclxuICAgIHRoaXMuc3R5bGUoJ292ZXJmbG93JywgJ3Zpc2libGUnKVxyXG4gIH1cclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLkNvbnRhaW5lclxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gQ3JlYXRlIG5lc3RlZCBzdmcgZG9jdW1lbnRcclxuICAgIG5lc3RlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgU1ZHLk5lc3RlZClcclxuICAgIH1cclxuICB9XHJcbn0pXG5TVkcuQSA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogJ2EnXHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5Db250YWluZXJcclxuXHJcbiAgLy8gQWRkIGNsYXNzIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIExpbmsgdXJsXHJcbiAgICB0bzogZnVuY3Rpb24odXJsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ2hyZWYnLCB1cmwsIFNWRy54bGluaylcclxuICAgIH1cclxuICAgIC8vIExpbmsgc2hvdyBhdHRyaWJ1dGVcclxuICAsIHNob3c6IGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCdzaG93JywgdGFyZ2V0LCBTVkcueGxpbmspXHJcbiAgICB9XHJcbiAgICAvLyBMaW5rIHRhcmdldCBhdHRyaWJ1dGVcclxuICAsIHRhcmdldDogZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ3RhcmdldCcsIHRhcmdldClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBDcmVhdGUgYSBoeXBlcmxpbmsgZWxlbWVudFxyXG4gICAgbGluazogZnVuY3Rpb24odXJsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgU1ZHLkEpLnRvKHVybClcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5FbGVtZW50LCB7XHJcbiAgLy8gQ3JlYXRlIGEgaHlwZXJsaW5rIGVsZW1lbnRcclxuICBsaW5rVG86IGZ1bmN0aW9uKHVybCkge1xyXG4gICAgdmFyIGxpbmsgPSBuZXcgU1ZHLkFcclxuXHJcbiAgICBpZiAodHlwZW9mIHVybCA9PSAnZnVuY3Rpb24nKVxyXG4gICAgICB1cmwuY2FsbChsaW5rLCBsaW5rKVxyXG4gICAgZWxzZVxyXG4gICAgICBsaW5rLnRvKHVybClcclxuXHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQoKS5wdXQobGluaykucHV0KHRoaXMpXHJcbiAgfVxyXG5cclxufSlcblNWRy5NYXJrZXIgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6ICdtYXJrZXInXHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5Db250YWluZXJcclxuXHJcbiAgLy8gQWRkIGNsYXNzIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIFNldCB3aWR0aCBvZiBlbGVtZW50XHJcbiAgICB3aWR0aDogZnVuY3Rpb24od2lkdGgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cignbWFya2VyV2lkdGgnLCB3aWR0aClcclxuICAgIH1cclxuICAgIC8vIFNldCBoZWlnaHQgb2YgZWxlbWVudFxyXG4gICwgaGVpZ2h0OiBmdW5jdGlvbihoZWlnaHQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cignbWFya2VySGVpZ2h0JywgaGVpZ2h0KVxyXG4gICAgfVxyXG4gICAgLy8gU2V0IG1hcmtlciByZWZYIGFuZCByZWZZXHJcbiAgLCByZWY6IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cigncmVmWCcsIHgpLmF0dHIoJ3JlZlknLCB5KVxyXG4gICAgfVxyXG4gICAgLy8gVXBkYXRlIG1hcmtlclxyXG4gICwgdXBkYXRlOiBmdW5jdGlvbihibG9jaykge1xyXG4gICAgICAvLyByZW1vdmUgYWxsIGNvbnRlbnRcclxuICAgICAgdGhpcy5jbGVhcigpXHJcblxyXG4gICAgICAvLyBpbnZva2UgcGFzc2VkIGJsb2NrXHJcbiAgICAgIGlmICh0eXBlb2YgYmxvY2sgPT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICBibG9jay5jYWxsKHRoaXMsIHRoaXMpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJuIHRoZSBmaWxsIGlkXHJcbiAgLCB0b1N0cmluZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiAndXJsKCMnICsgdGhpcy5pZCgpICsgJyknXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgbWFya2VyOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCBibG9jaykge1xyXG4gICAgICAvLyBDcmVhdGUgbWFya2VyIGVsZW1lbnQgaW4gZGVmc1xyXG4gICAgICByZXR1cm4gdGhpcy5kZWZzKCkubWFya2VyKHdpZHRoLCBoZWlnaHQsIGJsb2NrKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pXHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5EZWZzLCB7XHJcbiAgLy8gQ3JlYXRlIG1hcmtlclxyXG4gIG1hcmtlcjogZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgYmxvY2spIHtcclxuICAgIC8vIFNldCBkZWZhdWx0IHZpZXdib3ggdG8gbWF0Y2ggdGhlIHdpZHRoIGFuZCBoZWlnaHQsIHNldCByZWYgdG8gY3ggYW5kIGN5IGFuZCBzZXQgb3JpZW50IHRvIGF1dG9cclxuICAgIHJldHVybiB0aGlzLnB1dChuZXcgU1ZHLk1hcmtlcilcclxuICAgICAgLnNpemUod2lkdGgsIGhlaWdodClcclxuICAgICAgLnJlZih3aWR0aCAvIDIsIGhlaWdodCAvIDIpXHJcbiAgICAgIC52aWV3Ym94KDAsIDAsIHdpZHRoLCBoZWlnaHQpXHJcbiAgICAgIC5hdHRyKCdvcmllbnQnLCAnYXV0bycpXHJcbiAgICAgIC51cGRhdGUoYmxvY2spXHJcbiAgfVxyXG5cclxufSlcclxuXHJcblNWRy5leHRlbmQoU1ZHLkxpbmUsIFNWRy5Qb2x5bGluZSwgU1ZHLlBvbHlnb24sIFNWRy5QYXRoLCB7XHJcbiAgLy8gQ3JlYXRlIGFuZCBhdHRhY2ggbWFya2Vyc1xyXG4gIG1hcmtlcjogZnVuY3Rpb24obWFya2VyLCB3aWR0aCwgaGVpZ2h0LCBibG9jaykge1xyXG4gICAgdmFyIGF0dHIgPSBbJ21hcmtlciddXHJcblxyXG4gICAgLy8gQnVpbGQgYXR0cmlidXRlIG5hbWVcclxuICAgIGlmIChtYXJrZXIgIT0gJ2FsbCcpIGF0dHIucHVzaChtYXJrZXIpXHJcbiAgICBhdHRyID0gYXR0ci5qb2luKCctJylcclxuXHJcbiAgICAvLyBTZXQgbWFya2VyIGF0dHJpYnV0ZVxyXG4gICAgbWFya2VyID0gYXJndW1lbnRzWzFdIGluc3RhbmNlb2YgU1ZHLk1hcmtlciA/XHJcbiAgICAgIGFyZ3VtZW50c1sxXSA6XHJcbiAgICAgIHRoaXMuZG9jKCkubWFya2VyKHdpZHRoLCBoZWlnaHQsIGJsb2NrKVxyXG5cclxuICAgIHJldHVybiB0aGlzLmF0dHIoYXR0ciwgbWFya2VyKVxyXG4gIH1cclxuXHJcbn0pXG4vLyBEZWZpbmUgbGlzdCBvZiBhdmFpbGFibGUgYXR0cmlidXRlcyBmb3Igc3Ryb2tlIGFuZCBmaWxsXHJcbnZhciBzdWdhciA9IHtcclxuICBzdHJva2U6IFsnY29sb3InLCAnd2lkdGgnLCAnb3BhY2l0eScsICdsaW5lY2FwJywgJ2xpbmVqb2luJywgJ21pdGVybGltaXQnLCAnZGFzaGFycmF5JywgJ2Rhc2hvZmZzZXQnXVxyXG4sIGZpbGw6ICAgWydjb2xvcicsICdvcGFjaXR5JywgJ3J1bGUnXVxyXG4sIHByZWZpeDogZnVuY3Rpb24odCwgYSkge1xyXG4gICAgcmV0dXJuIGEgPT0gJ2NvbG9yJyA/IHQgOiB0ICsgJy0nICsgYVxyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIHN1Z2FyIGZvciBmaWxsIGFuZCBzdHJva2VcclxuO1snZmlsbCcsICdzdHJva2UnXS5mb3JFYWNoKGZ1bmN0aW9uKG0pIHtcclxuICB2YXIgaSwgZXh0ZW5zaW9uID0ge31cclxuXHJcbiAgZXh0ZW5zaW9uW21dID0gZnVuY3Rpb24obykge1xyXG4gICAgaWYgKHR5cGVvZiBvID09ICd1bmRlZmluZWQnKVxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgaWYgKHR5cGVvZiBvID09ICdzdHJpbmcnIHx8IFNWRy5Db2xvci5pc1JnYihvKSB8fCAobyAmJiB0eXBlb2Ygby5maWxsID09PSAnZnVuY3Rpb24nKSlcclxuICAgICAgdGhpcy5hdHRyKG0sIG8pXHJcblxyXG4gICAgZWxzZVxyXG4gICAgICAvLyBzZXQgYWxsIGF0dHJpYnV0ZXMgZnJvbSBzdWdhci5maWxsIGFuZCBzdWdhci5zdHJva2UgbGlzdFxyXG4gICAgICBmb3IgKGkgPSBzdWdhclttXS5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuICAgICAgICBpZiAob1tzdWdhclttXVtpXV0gIT0gbnVsbClcclxuICAgICAgICAgIHRoaXMuYXR0cihzdWdhci5wcmVmaXgobSwgc3VnYXJbbV1baV0pLCBvW3N1Z2FyW21dW2ldXSlcclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuXHJcbiAgU1ZHLmV4dGVuZChTVkcuRWxlbWVudCwgU1ZHLkZYLCBleHRlbnNpb24pXHJcblxyXG59KVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuRWxlbWVudCwgU1ZHLkZYLCB7XHJcbiAgLy8gTWFwIHJvdGF0aW9uIHRvIHRyYW5zZm9ybVxyXG4gIHJvdGF0ZTogZnVuY3Rpb24oZCwgY3gsIGN5KSB7XHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0oeyByb3RhdGlvbjogZCwgY3g6IGN4LCBjeTogY3kgfSlcclxuICB9XHJcbiAgLy8gTWFwIHNrZXcgdG8gdHJhbnNmb3JtXHJcbiwgc2tldzogZnVuY3Rpb24oeCwgeSwgY3gsIGN5KSB7XHJcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PSAxICB8fCBhcmd1bWVudHMubGVuZ3RoID09IDMgP1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybSh7IHNrZXc6IHgsIGN4OiB5LCBjeTogY3ggfSkgOlxyXG4gICAgICB0aGlzLnRyYW5zZm9ybSh7IHNrZXdYOiB4LCBza2V3WTogeSwgY3g6IGN4LCBjeTogY3kgfSlcclxuICB9XHJcbiAgLy8gTWFwIHNjYWxlIHRvIHRyYW5zZm9ybVxyXG4sIHNjYWxlOiBmdW5jdGlvbih4LCB5LCBjeCwgY3kpIHtcclxuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09IDEgIHx8IGFyZ3VtZW50cy5sZW5ndGggPT0gMyA/XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtKHsgc2NhbGU6IHgsIGN4OiB5LCBjeTogY3ggfSkgOlxyXG4gICAgICB0aGlzLnRyYW5zZm9ybSh7IHNjYWxlWDogeCwgc2NhbGVZOiB5LCBjeDogY3gsIGN5OiBjeSB9KVxyXG4gIH1cclxuICAvLyBNYXAgdHJhbnNsYXRlIHRvIHRyYW5zZm9ybVxyXG4sIHRyYW5zbGF0ZTogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtKHsgeDogeCwgeTogeSB9KVxyXG4gIH1cclxuICAvLyBNYXAgZmxpcCB0byB0cmFuc2Zvcm1cclxuLCBmbGlwOiBmdW5jdGlvbihhLCBvKSB7XHJcbiAgICBvID0gdHlwZW9mIGEgPT0gJ251bWJlcicgPyBhIDogb1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtKHsgZmxpcDogYSB8fCAnYm90aCcsIG9mZnNldDogbyB9KVxyXG4gIH1cclxuICAvLyBNYXAgbWF0cml4IHRvIHRyYW5zZm9ybVxyXG4sIG1hdHJpeDogZnVuY3Rpb24obSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXR0cigndHJhbnNmb3JtJywgbmV3IFNWRy5NYXRyaXgoYXJndW1lbnRzLmxlbmd0aCA9PSA2ID8gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpIDogbSkpXHJcbiAgfVxyXG4gIC8vIE9wYWNpdHlcclxuLCBvcGFjaXR5OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXR0cignb3BhY2l0eScsIHZhbHVlKVxyXG4gIH1cclxuICAvLyBSZWxhdGl2ZSBtb3ZlIG92ZXIgeCBheGlzXHJcbiwgZHg6IGZ1bmN0aW9uKHgpIHtcclxuICAgIHJldHVybiB0aGlzLngobmV3IFNWRy5OdW1iZXIoeCkucGx1cyh0aGlzIGluc3RhbmNlb2YgU1ZHLkZYID8gMCA6IHRoaXMueCgpKSwgdHJ1ZSlcclxuICB9XHJcbiAgLy8gUmVsYXRpdmUgbW92ZSBvdmVyIHkgYXhpc1xyXG4sIGR5OiBmdW5jdGlvbih5KSB7XHJcbiAgICByZXR1cm4gdGhpcy55KG5ldyBTVkcuTnVtYmVyKHkpLnBsdXModGhpcyBpbnN0YW5jZW9mIFNWRy5GWCA/IDAgOiB0aGlzLnkoKSksIHRydWUpXHJcbiAgfVxyXG4gIC8vIFJlbGF0aXZlIG1vdmUgb3ZlciB4IGFuZCB5IGF4ZXNcclxuLCBkbW92ZTogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZHgoeCkuZHkoeSlcclxuICB9XHJcbn0pXHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5SZWN0LCBTVkcuRWxsaXBzZSwgU1ZHLkNpcmNsZSwgU1ZHLkdyYWRpZW50LCBTVkcuRlgsIHtcclxuICAvLyBBZGQgeCBhbmQgeSByYWRpdXNcclxuICByYWRpdXM6IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgIHZhciB0eXBlID0gKHRoaXMuX3RhcmdldCB8fCB0aGlzKS50eXBlO1xyXG4gICAgcmV0dXJuIHR5cGUgPT0gJ3JhZGlhbCcgfHwgdHlwZSA9PSAnY2lyY2xlJyA/XHJcbiAgICAgIHRoaXMuYXR0cigncicsIG5ldyBTVkcuTnVtYmVyKHgpKSA6XHJcbiAgICAgIHRoaXMucngoeCkucnkoeSA9PSBudWxsID8geCA6IHkpXHJcbiAgfVxyXG59KVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuUGF0aCwge1xyXG4gIC8vIEdldCBwYXRoIGxlbmd0aFxyXG4gIGxlbmd0aDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2RlLmdldFRvdGFsTGVuZ3RoKClcclxuICB9XHJcbiAgLy8gR2V0IHBvaW50IGF0IGxlbmd0aFxyXG4sIHBvaW50QXQ6IGZ1bmN0aW9uKGxlbmd0aCkge1xyXG4gICAgcmV0dXJuIHRoaXMubm9kZS5nZXRQb2ludEF0TGVuZ3RoKGxlbmd0aClcclxuICB9XHJcbn0pXHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5QYXJlbnQsIFNWRy5UZXh0LCBTVkcuVHNwYW4sIFNWRy5GWCwge1xyXG4gIC8vIFNldCBmb250XHJcbiAgZm9udDogZnVuY3Rpb24oYSwgdikge1xyXG4gICAgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnKSB7XHJcbiAgICAgIGZvciAodiBpbiBhKSB0aGlzLmZvbnQodiwgYVt2XSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYSA9PSAnbGVhZGluZycgP1xyXG4gICAgICAgIHRoaXMubGVhZGluZyh2KSA6XHJcbiAgICAgIGEgPT0gJ2FuY2hvcicgP1xyXG4gICAgICAgIHRoaXMuYXR0cigndGV4dC1hbmNob3InLCB2KSA6XHJcbiAgICAgIGEgPT0gJ3NpemUnIHx8IGEgPT0gJ2ZhbWlseScgfHwgYSA9PSAnd2VpZ2h0JyB8fCBhID09ICdzdHJldGNoJyB8fCBhID09ICd2YXJpYW50JyB8fCBhID09ICdzdHlsZScgP1xyXG4gICAgICAgIHRoaXMuYXR0cignZm9udC0nKyBhLCB2KSA6XHJcbiAgICAgICAgdGhpcy5hdHRyKGEsIHYpXHJcbiAgfVxyXG59KVxyXG5cblNWRy5TZXQgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplXHJcbiAgY3JlYXRlOiBmdW5jdGlvbihtZW1iZXJzKSB7XHJcbiAgICBpZiAobWVtYmVycyBpbnN0YW5jZW9mIFNWRy5TZXQpIHtcclxuICAgICAgdGhpcy5tZW1iZXJzID0gbWVtYmVycy5tZW1iZXJzLnNsaWNlKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIEFycmF5LmlzQXJyYXkobWVtYmVycykgPyB0aGlzLm1lbWJlcnMgPSBtZW1iZXJzIDogdGhpcy5jbGVhcigpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgY2xhc3MgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gQWRkIGVsZW1lbnQgdG8gc2V0XHJcbiAgICBhZGQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgaSwgaWwsIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXHJcblxyXG4gICAgICBmb3IgKGkgPSAwLCBpbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgdGhpcy5tZW1iZXJzLnB1c2goZWxlbWVudHNbaV0pXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gUmVtb3ZlIGVsZW1lbnQgZnJvbSBzZXRcclxuICAsIHJlbW92ZTogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgaSA9IHRoaXMuaW5kZXgoZWxlbWVudClcclxuXHJcbiAgICAgIC8vIHJlbW92ZSBnaXZlbiBjaGlsZFxyXG4gICAgICBpZiAoaSA+IC0xKVxyXG4gICAgICAgIHRoaXMubWVtYmVycy5zcGxpY2UoaSwgMSlcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIG1lbWJlcnNcclxuICAsIGVhY2g6IGZ1bmN0aW9uKGJsb2NrKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IHRoaXMubWVtYmVycy5sZW5ndGg7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGJsb2NrLmFwcGx5KHRoaXMubWVtYmVyc1tpXSwgW2ksIHRoaXMubWVtYmVyc10pXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gUmVzdG9yZSB0byBkZWZhdWx0c1xyXG4gICwgY2xlYXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyBpbml0aWFsaXplIHN0b3JlXHJcbiAgICAgIHRoaXMubWVtYmVycyA9IFtdXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gR2V0IHRoZSBsZW5ndGggb2YgYSBzZXRcclxuICAsIGxlbmd0aDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1lbWJlcnMubGVuZ3RoXHJcbiAgICB9XHJcbiAgICAvLyBDaGVja3MgaWYgYSBnaXZlbiBlbGVtZW50IGlzIHByZXNlbnQgaW4gc2V0XHJcbiAgLCBoYXM6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5kZXgoZWxlbWVudCkgPj0gMFxyXG4gICAgfVxyXG4gICAgLy8gcmV0dW5zIGluZGV4IG9mIGdpdmVuIGVsZW1lbnQgaW4gc2V0XHJcbiAgLCBpbmRleDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5tZW1iZXJzLmluZGV4T2YoZWxlbWVudClcclxuICAgIH1cclxuICAgIC8vIEdldCBtZW1iZXIgYXQgZ2l2ZW4gaW5kZXhcclxuICAsIGdldDogZnVuY3Rpb24oaSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5tZW1iZXJzW2ldXHJcbiAgICB9XHJcbiAgICAvLyBHZXQgZmlyc3QgbWVtYmVyXHJcbiAgLCBmaXJzdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldCgwKVxyXG4gICAgfVxyXG4gICAgLy8gR2V0IGxhc3QgbWVtYmVyXHJcbiAgLCBsYXN0OiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMubWVtYmVycy5sZW5ndGggLSAxKVxyXG4gICAgfVxyXG4gICAgLy8gRGVmYXVsdCB2YWx1ZVxyXG4gICwgdmFsdWVPZjogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1lbWJlcnNcclxuICAgIH1cclxuICAgIC8vIEdldCB0aGUgYm91bmRpbmcgYm94IG9mIGFsbCBtZW1iZXJzIGluY2x1ZGVkIG9yIGVtcHR5IGJveCBpZiBzZXQgaGFzIG5vIGl0ZW1zXHJcbiAgLCBiYm94OiBmdW5jdGlvbigpe1xyXG4gICAgICAvLyByZXR1cm4gYW4gZW1wdHkgYm94IG9mIHRoZXJlIGFyZSBubyBtZW1iZXJzXHJcbiAgICAgIGlmICh0aGlzLm1lbWJlcnMubGVuZ3RoID09IDApXHJcbiAgICAgICAgcmV0dXJuIG5ldyBTVkcuUkJveCgpXHJcblxyXG4gICAgICAvLyBnZXQgdGhlIGZpcnN0IHJib3ggYW5kIHVwZGF0ZSB0aGUgdGFyZ2V0IGJib3hcclxuICAgICAgdmFyIHJib3ggPSB0aGlzLm1lbWJlcnNbMF0ucmJveCh0aGlzLm1lbWJlcnNbMF0uZG9jKCkpXHJcblxyXG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gdXNlciByYm94IGZvciBjb3JyZWN0IHBvc2l0aW9uIGFuZCB2aXN1YWwgcmVwcmVzZW50YXRpb25cclxuICAgICAgICByYm94ID0gcmJveC5tZXJnZSh0aGlzLnJib3godGhpcy5kb2MoKSkpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gcmJveFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIENyZWF0ZSBhIG5ldyBzZXRcclxuICAgIHNldDogZnVuY3Rpb24obWVtYmVycykge1xyXG4gICAgICByZXR1cm4gbmV3IFNWRy5TZXQobWVtYmVycylcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5TVkcuRlguU2V0ID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiBmdW5jdGlvbihzZXQpIHtcclxuICAgIC8vIHN0b3JlIHJlZmVyZW5jZSB0byBzZXRcclxuICAgIHRoaXMuc2V0ID0gc2V0XHJcbiAgfVxyXG5cclxufSlcclxuXHJcbi8vIEFsaWFzIG1ldGhvZHNcclxuU1ZHLlNldC5pbmhlcml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIG1cclxuICAgICwgbWV0aG9kcyA9IFtdXHJcblxyXG4gIC8vIGdhdGhlciBzaGFwZSBtZXRob2RzXHJcbiAgZm9yKHZhciBtIGluIFNWRy5TaGFwZS5wcm90b3R5cGUpXHJcbiAgICBpZiAodHlwZW9mIFNWRy5TaGFwZS5wcm90b3R5cGVbbV0gPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU1ZHLlNldC5wcm90b3R5cGVbbV0gIT0gJ2Z1bmN0aW9uJylcclxuICAgICAgbWV0aG9kcy5wdXNoKG0pXHJcblxyXG4gIC8vIGFwcGx5IHNoYXBlIGFsaWFzc2VzXHJcbiAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xyXG4gICAgU1ZHLlNldC5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBmb3IgKHZhciBpID0gMCwgaWwgPSB0aGlzLm1lbWJlcnMubGVuZ3RoOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBpZiAodGhpcy5tZW1iZXJzW2ldICYmIHR5cGVvZiB0aGlzLm1lbWJlcnNbaV1bbWV0aG9kXSA9PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgdGhpcy5tZW1iZXJzW2ldW21ldGhvZF0uYXBwbHkodGhpcy5tZW1iZXJzW2ldLCBhcmd1bWVudHMpXHJcblxyXG4gICAgICByZXR1cm4gbWV0aG9kID09ICdhbmltYXRlJyA/ICh0aGlzLmZ4IHx8ICh0aGlzLmZ4ID0gbmV3IFNWRy5GWC5TZXQodGhpcykpKSA6IHRoaXNcclxuICAgIH1cclxuICB9KVxyXG5cclxuICAvLyBjbGVhciBtZXRob2RzIGZvciB0aGUgbmV4dCByb3VuZFxyXG4gIG1ldGhvZHMgPSBbXVxyXG5cclxuICAvLyBnYXRoZXIgZnggbWV0aG9kc1xyXG4gIGZvcih2YXIgbSBpbiBTVkcuRlgucHJvdG90eXBlKVxyXG4gICAgaWYgKHR5cGVvZiBTVkcuRlgucHJvdG90eXBlW21dID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFNWRy5GWC5TZXQucHJvdG90eXBlW21dICE9ICdmdW5jdGlvbicpXHJcbiAgICAgIG1ldGhvZHMucHVzaChtKVxyXG5cclxuICAvLyBhcHBseSBmeCBhbGlhc3Nlc1xyXG4gIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcclxuICAgIFNWRy5GWC5TZXQucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGlsID0gdGhpcy5zZXQubWVtYmVycy5sZW5ndGg7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIHRoaXMuc2V0Lm1lbWJlcnNbaV0uZnhbbWV0aG9kXS5hcHBseSh0aGlzLnNldC5tZW1iZXJzW2ldLmZ4LCBhcmd1bWVudHMpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXG5cclxuU1ZHLmV4dGVuZChTVkcuRWxlbWVudCwge1xyXG4gIC8vIFN0b3JlIGRhdGEgdmFsdWVzIG9uIHN2ZyBub2Rlc1xyXG4gIGRhdGE6IGZ1bmN0aW9uKGEsIHYsIHIpIHtcclxuICAgIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICBmb3IgKHYgaW4gYSlcclxuICAgICAgICB0aGlzLmRhdGEodiwgYVt2XSlcclxuXHJcbiAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5hdHRyKCdkYXRhLScgKyBhKSlcclxuICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cignZGF0YS0nICsgYSlcclxuICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYXR0cihcclxuICAgICAgICAnZGF0YS0nICsgYVxyXG4gICAgICAsIHYgPT09IG51bGwgP1xyXG4gICAgICAgICAgbnVsbCA6XHJcbiAgICAgICAgciA9PT0gdHJ1ZSB8fCB0eXBlb2YgdiA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHYgPT09ICdudW1iZXInID9cclxuICAgICAgICAgIHYgOlxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkodilcclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG59KVxuU1ZHLmV4dGVuZChTVkcuRWxlbWVudCwge1xyXG4gIC8vIFJlbWVtYmVyIGFyYml0cmFyeSBkYXRhXHJcbiAgcmVtZW1iZXI6IGZ1bmN0aW9uKGssIHYpIHtcclxuICAgIC8vIHJlbWVtYmVyIGV2ZXJ5IGl0ZW0gaW4gYW4gb2JqZWN0IGluZGl2aWR1YWxseVxyXG4gICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT0gJ29iamVjdCcpXHJcbiAgICAgIGZvciAodmFyIHYgaW4gaylcclxuICAgICAgICB0aGlzLnJlbWVtYmVyKHYsIGtbdl0pXHJcblxyXG4gICAgLy8gcmV0cmlldmUgbWVtb3J5XHJcbiAgICBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcbiAgICAgIHJldHVybiB0aGlzLm1lbW9yeSgpW2tdXHJcblxyXG4gICAgLy8gc3RvcmUgbWVtb3J5XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMubWVtb3J5KClba10gPSB2XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcblxyXG4gIC8vIEVyYXNlIGEgZ2l2ZW4gbWVtb3J5XHJcbiwgZm9yZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcbiAgICAgIHRoaXMuX21lbW9yeSA9IHt9XHJcbiAgICBlbHNlXHJcbiAgICAgIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcbiAgICAgICAgZGVsZXRlIHRoaXMubWVtb3J5KClbYXJndW1lbnRzW2ldXVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG5cclxuICAvLyBJbml0aWFsaXplIG9yIHJldHVybiBsb2NhbCBtZW1vcnkgb2JqZWN0XHJcbiwgbWVtb3J5OiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9tZW1vcnkgfHwgKHRoaXMuX21lbW9yeSA9IHt9KVxyXG4gIH1cclxuXHJcbn0pXG4vLyBNZXRob2QgZm9yIGdldHRpbmcgYW4gZWxlbWVudCBieSBpZFxyXG5TVkcuZ2V0ID0gZnVuY3Rpb24oaWQpIHtcclxuICB2YXIgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkRnJvbVJlZmVyZW5jZShpZCkgfHwgaWQpXHJcbiAgcmV0dXJuIFNWRy5hZG9wdChub2RlKVxyXG59XHJcblxyXG4vLyBTZWxlY3QgZWxlbWVudHMgYnkgcXVlcnkgc3RyaW5nXHJcblNWRy5zZWxlY3QgPSBmdW5jdGlvbihxdWVyeSwgcGFyZW50KSB7XHJcbiAgcmV0dXJuIG5ldyBTVkcuU2V0KFxyXG4gICAgU1ZHLnV0aWxzLm1hcCgocGFyZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSwgZnVuY3Rpb24obm9kZSkge1xyXG4gICAgICByZXR1cm4gU1ZHLmFkb3B0KG5vZGUpXHJcbiAgICB9KVxyXG4gIClcclxufVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuUGFyZW50LCB7XHJcbiAgLy8gU2NvcGVkIHNlbGVjdCBtZXRob2RcclxuICBzZWxlY3Q6IGZ1bmN0aW9uKHF1ZXJ5KSB7XHJcbiAgICByZXR1cm4gU1ZHLnNlbGVjdChxdWVyeSwgdGhpcy5ub2RlKVxyXG4gIH1cclxuXHJcbn0pXG5mdW5jdGlvbiBwYXRoUmVnUmVwbGFjZShhLCBiLCBjLCBkKSB7XHJcbiAgcmV0dXJuIGMgKyBkLnJlcGxhY2UoU1ZHLnJlZ2V4LmRvdHMsICcgLicpXHJcbn1cclxuXHJcbi8vIGNyZWF0ZXMgZGVlcCBjbG9uZSBvZiBhcnJheVxyXG5mdW5jdGlvbiBhcnJheV9jbG9uZShhcnIpe1xyXG4gIHZhciBjbG9uZSA9IGFyci5zbGljZSgwKVxyXG4gIGZvcih2YXIgaSA9IGNsb25lLmxlbmd0aDsgaS0tOyl7XHJcbiAgICBpZihBcnJheS5pc0FycmF5KGNsb25lW2ldKSl7XHJcbiAgICAgIGNsb25lW2ldID0gYXJyYXlfY2xvbmUoY2xvbmVbaV0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjbG9uZVxyXG59XHJcblxyXG4vLyB0ZXN0cyBpZiBhIGdpdmVuIGVsZW1lbnQgaXMgaW5zdGFuY2Ugb2YgYW4gb2JqZWN0XHJcbmZ1bmN0aW9uIGlzKGVsLCBvYmope1xyXG4gIHJldHVybiBlbCBpbnN0YW5jZW9mIG9ialxyXG59XHJcblxyXG4vLyB0ZXN0cyBpZiBhIGdpdmVuIHNlbGVjdG9yIG1hdGNoZXMgYW4gZWxlbWVudFxyXG5mdW5jdGlvbiBtYXRjaGVzKGVsLCBzZWxlY3Rvcikge1xyXG4gIHJldHVybiAoZWwubWF0Y2hlcyB8fCBlbC5tYXRjaGVzU2VsZWN0b3IgfHwgZWwubXNNYXRjaGVzU2VsZWN0b3IgfHwgZWwubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbC5vTWF0Y2hlc1NlbGVjdG9yKS5jYWxsKGVsLCBzZWxlY3Rvcik7XHJcbn1cclxuXHJcbi8vIENvbnZlcnQgZGFzaC1zZXBhcmF0ZWQtc3RyaW5nIHRvIGNhbWVsQ2FzZVxyXG5mdW5jdGlvbiBjYW1lbENhc2Uocykge1xyXG4gIHJldHVybiBzLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvLSguKS9nLCBmdW5jdGlvbihtLCBnKSB7XHJcbiAgICByZXR1cm4gZy50b1VwcGVyQ2FzZSgpXHJcbiAgfSlcclxufVxyXG5cclxuLy8gQ2FwaXRhbGl6ZSBmaXJzdCBsZXR0ZXIgb2YgYSBzdHJpbmdcclxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzKSB7XHJcbiAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpXHJcbn1cclxuXHJcbi8vIEVuc3VyZSB0byBzaXgtYmFzZWQgaGV4XHJcbmZ1bmN0aW9uIGZ1bGxIZXgoaGV4KSB7XHJcbiAgcmV0dXJuIGhleC5sZW5ndGggPT0gNCA/XHJcbiAgICBbICcjJyxcclxuICAgICAgaGV4LnN1YnN0cmluZygxLCAyKSwgaGV4LnN1YnN0cmluZygxLCAyKVxyXG4gICAgLCBoZXguc3Vic3RyaW5nKDIsIDMpLCBoZXguc3Vic3RyaW5nKDIsIDMpXHJcbiAgICAsIGhleC5zdWJzdHJpbmcoMywgNCksIGhleC5zdWJzdHJpbmcoMywgNClcclxuICAgIF0uam9pbignJykgOiBoZXhcclxufVxyXG5cclxuLy8gQ29tcG9uZW50IHRvIGhleCB2YWx1ZVxyXG5mdW5jdGlvbiBjb21wVG9IZXgoY29tcCkge1xyXG4gIHZhciBoZXggPSBjb21wLnRvU3RyaW5nKDE2KVxyXG4gIHJldHVybiBoZXgubGVuZ3RoID09IDEgPyAnMCcgKyBoZXggOiBoZXhcclxufVxyXG5cclxuLy8gQ2FsY3VsYXRlIHByb3BvcnRpb25hbCB3aWR0aCBhbmQgaGVpZ2h0IHZhbHVlcyB3aGVuIG5lY2Vzc2FyeVxyXG5mdW5jdGlvbiBwcm9wb3J0aW9uYWxTaXplKGVsZW1lbnQsIHdpZHRoLCBoZWlnaHQpIHtcclxuICBpZiAod2lkdGggPT0gbnVsbCB8fCBoZWlnaHQgPT0gbnVsbCkge1xyXG4gICAgdmFyIGJveCA9IGVsZW1lbnQuYmJveCgpXHJcblxyXG4gICAgaWYgKHdpZHRoID09IG51bGwpXHJcbiAgICAgIHdpZHRoID0gYm94LndpZHRoIC8gYm94LmhlaWdodCAqIGhlaWdodFxyXG4gICAgZWxzZSBpZiAoaGVpZ2h0ID09IG51bGwpXHJcbiAgICAgIGhlaWdodCA9IGJveC5oZWlnaHQgLyBib3gud2lkdGggKiB3aWR0aFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHdpZHRoOiAgd2lkdGhcclxuICAsIGhlaWdodDogaGVpZ2h0XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEZWx0YSB0cmFuc2Zvcm0gcG9pbnRcclxuZnVuY3Rpb24gZGVsdGFUcmFuc2Zvcm1Qb2ludChtYXRyaXgsIHgsIHkpIHtcclxuICByZXR1cm4ge1xyXG4gICAgeDogeCAqIG1hdHJpeC5hICsgeSAqIG1hdHJpeC5jICsgMFxyXG4gICwgeTogeCAqIG1hdHJpeC5iICsgeSAqIG1hdHJpeC5kICsgMFxyXG4gIH1cclxufVxyXG5cclxuLy8gTWFwIG1hdHJpeCBhcnJheSB0byBvYmplY3RcclxuZnVuY3Rpb24gYXJyYXlUb01hdHJpeChhKSB7XHJcbiAgcmV0dXJuIHsgYTogYVswXSwgYjogYVsxXSwgYzogYVsyXSwgZDogYVszXSwgZTogYVs0XSwgZjogYVs1XSB9XHJcbn1cclxuXHJcbi8vIFBhcnNlIG1hdHJpeCBpZiByZXF1aXJlZFxyXG5mdW5jdGlvbiBwYXJzZU1hdHJpeChtYXRyaXgpIHtcclxuICBpZiAoIShtYXRyaXggaW5zdGFuY2VvZiBTVkcuTWF0cml4KSlcclxuICAgIG1hdHJpeCA9IG5ldyBTVkcuTWF0cml4KG1hdHJpeClcclxuXHJcbiAgcmV0dXJuIG1hdHJpeFxyXG59XHJcblxyXG4vLyBBZGQgY2VudHJlIHBvaW50IHRvIHRyYW5zZm9ybSBvYmplY3RcclxuZnVuY3Rpb24gZW5zdXJlQ2VudHJlKG8sIHRhcmdldCkge1xyXG4gIG8uY3ggPSBvLmN4ID09IG51bGwgPyB0YXJnZXQuYmJveCgpLmN4IDogby5jeFxyXG4gIG8uY3kgPSBvLmN5ID09IG51bGwgPyB0YXJnZXQuYmJveCgpLmN5IDogby5jeVxyXG59XHJcblxyXG4vLyBQYXRoQXJyYXkgSGVscGVyc1xyXG5mdW5jdGlvbiBhcnJheVRvU3RyaW5nKGEpIHtcclxuICBmb3IgKHZhciBpID0gMCwgaWwgPSBhLmxlbmd0aCwgcyA9ICcnOyBpIDwgaWw7IGkrKykge1xyXG4gICAgcyArPSBhW2ldWzBdXHJcblxyXG4gICAgaWYgKGFbaV1bMV0gIT0gbnVsbCkge1xyXG4gICAgICBzICs9IGFbaV1bMV1cclxuXHJcbiAgICAgIGlmIChhW2ldWzJdICE9IG51bGwpIHtcclxuICAgICAgICBzICs9ICcgJ1xyXG4gICAgICAgIHMgKz0gYVtpXVsyXVxyXG5cclxuICAgICAgICBpZiAoYVtpXVszXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICBzICs9ICcgJ1xyXG4gICAgICAgICAgcyArPSBhW2ldWzNdXHJcbiAgICAgICAgICBzICs9ICcgJ1xyXG4gICAgICAgICAgcyArPSBhW2ldWzRdXHJcblxyXG4gICAgICAgICAgaWYgKGFbaV1bNV0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzICs9ICcgJ1xyXG4gICAgICAgICAgICBzICs9IGFbaV1bNV1cclxuICAgICAgICAgICAgcyArPSAnICdcclxuICAgICAgICAgICAgcyArPSBhW2ldWzZdXHJcblxyXG4gICAgICAgICAgICBpZiAoYVtpXVs3XSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgcyArPSAnICdcclxuICAgICAgICAgICAgICBzICs9IGFbaV1bN11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHMgKyAnICdcclxufVxyXG5cclxuLy8gRGVlcCBuZXcgaWQgYXNzaWdubWVudFxyXG5mdW5jdGlvbiBhc3NpZ25OZXdJZChub2RlKSB7XHJcbiAgLy8gZG8gdGhlIHNhbWUgZm9yIFNWRyBjaGlsZCBub2RlcyBhcyB3ZWxsXHJcbiAgZm9yICh2YXIgaSA9IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuICAgIGlmIChub2RlLmNoaWxkTm9kZXNbaV0gaW5zdGFuY2VvZiB3aW5kb3cuU1ZHRWxlbWVudClcclxuICAgICAgYXNzaWduTmV3SWQobm9kZS5jaGlsZE5vZGVzW2ldKVxyXG5cclxuICByZXR1cm4gU1ZHLmFkb3B0KG5vZGUpLmlkKFNWRy5laWQobm9kZS5ub2RlTmFtZSkpXHJcbn1cclxuXHJcbi8vIEFkZCBtb3JlIGJvdW5kaW5nIGJveCBwcm9wZXJ0aWVzXHJcbmZ1bmN0aW9uIGZ1bGxCb3goYikge1xyXG4gIGlmIChiLnggPT0gbnVsbCkge1xyXG4gICAgYi54ICAgICAgPSAwXHJcbiAgICBiLnkgICAgICA9IDBcclxuICAgIGIud2lkdGggID0gMFxyXG4gICAgYi5oZWlnaHQgPSAwXHJcbiAgfVxyXG5cclxuICBiLncgID0gYi53aWR0aFxyXG4gIGIuaCAgPSBiLmhlaWdodFxyXG4gIGIueDIgPSBiLnggKyBiLndpZHRoXHJcbiAgYi55MiA9IGIueSArIGIuaGVpZ2h0XHJcbiAgYi5jeCA9IGIueCArIGIud2lkdGggLyAyXHJcbiAgYi5jeSA9IGIueSArIGIuaGVpZ2h0IC8gMlxyXG5cclxuICByZXR1cm4gYlxyXG59XHJcblxyXG4vLyBHZXQgaWQgZnJvbSByZWZlcmVuY2Ugc3RyaW5nXHJcbmZ1bmN0aW9uIGlkRnJvbVJlZmVyZW5jZSh1cmwpIHtcclxuICB2YXIgbSA9ICh1cmwgfHwgJycpLnRvU3RyaW5nKCkubWF0Y2goU1ZHLnJlZ2V4LnJlZmVyZW5jZSlcclxuXHJcbiAgaWYgKG0pIHJldHVybiBtWzFdXHJcbn1cclxuXHJcbi8vIElmIHZhbHVlcyBsaWtlIDFlLTg4IGFyZSBwYXNzZWQsIHRoaXMgaXMgbm90IGEgdmFsaWQgMzIgYml0IGZsb2F0LFxyXG4vLyBidXQgaW4gdGhvc2UgY2FzZXMsIHdlIGFyZSBzbyBjbG9zZSB0byAwIHRoYXQgMCB3b3JrcyB3ZWxsIVxyXG5mdW5jdGlvbiBmbG9hdDMyU3RyaW5nKHYpIHtcclxuICByZXR1cm4gTWF0aC5hYnModikgPiAxZS0zNyA/IHYgOiAwXHJcbn1cclxuXHJcbi8vIENyZWF0ZSBtYXRyaXggYXJyYXkgZm9yIGxvb3BpbmdcclxudmFyIGFiY2RlZiA9ICdhYmNkZWYnLnNwbGl0KCcnKVxyXG5cbi8vIEFkZCBDdXN0b21FdmVudCB0byBJRTkgYW5kIElFMTBcclxuaWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgIT09ICdmdW5jdGlvbicpIHtcclxuICAvLyBDb2RlIGZyb206IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudFxyXG4gIHZhciBDdXN0b21FdmVudFBvbHkgPSBmdW5jdGlvbihldmVudCwgb3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgeyBidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogdW5kZWZpbmVkIH1cclxuICAgIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcclxuICAgIGUuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBvcHRpb25zLmJ1YmJsZXMsIG9wdGlvbnMuY2FuY2VsYWJsZSwgb3B0aW9ucy5kZXRhaWwpXHJcbiAgICByZXR1cm4gZVxyXG4gIH1cclxuXHJcbiAgQ3VzdG9tRXZlbnRQb2x5LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGVcclxuXHJcbiAgU1ZHLkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnRQb2x5XHJcbn0gZWxzZSB7XHJcbiAgU1ZHLkN1c3RvbUV2ZW50ID0gd2luZG93LkN1c3RvbUV2ZW50XHJcbn1cclxuXHJcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSAvIGNhbmNlbEFuaW1hdGlvbkZyYW1lIFBvbHlmaWxsIHdpdGggZmFsbGJhY2sgYmFzZWQgb24gUGF1bCBJcmlzaFxyXG4oZnVuY3Rpb24odykge1xyXG4gIHZhciBsYXN0VGltZSA9IDBcclxuICB2YXIgdmVuZG9ycyA9IFsnbW96JywgJ3dlYmtpdCddXHJcblxyXG4gIGZvcih2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XHJcbiAgICB3LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdbdmVuZG9yc1t4XSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXVxyXG4gICAgdy5jYW5jZWxBbmltYXRpb25GcmFtZSAgPSB3W3ZlbmRvcnNbeF0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3W3ZlbmRvcnNbeF0gKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ11cclxuICB9XHJcblxyXG4gIHcucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpXHJcblxyXG4gICAgICB2YXIgaWQgPSB3LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKVxyXG4gICAgICB9LCB0aW1lVG9DYWxsKVxyXG5cclxuICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGxcclxuICAgICAgcmV0dXJuIGlkXHJcbiAgICB9XHJcblxyXG4gIHcuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHcuY2xlYXJUaW1lb3V0O1xyXG5cclxufSh3aW5kb3cpKVxyXG5cclxucmV0dXJuIFNWR1xyXG5cclxufSkpO1xyIiwiLy8gQHRzLWlnbm9yZVxuaW1wb3J0ICogYXMgU1ZHIGZyb20gJ3N2Zy5qcyc7XG5pbXBvcnQgUmV0aWxpbmVhciBmcm9tICcuL3JldGlsaW5lYXInO1xuXG5sZXQgYXVkaW9Db250ZXh0OiBBdWRpb0NvbnRleHQ7XG5jb25zdCBkcmF3VyA9IDI5NztcbmNvbnN0IGRyYXdIID0gNDUwO1xubGV0IGNhbnZhcyA9IFNWRygnY29udGFpbmVyJykuc2l6ZSgnMTAwJScsICcxMDAlJykudmlld2JveCgwLCAwLCBkcmF3VywgZHJhd0gpO1xuXG5jb25zdCByZXRpbGluZWFyZXMgPSBuZXcgTWFwPHN0cmluZywgUmV0aWxpbmVhcj4oKTtcblxudHlwZSBQb2ludCA9IFtudW1iZXIsIG51bWJlcl07XG5cbmNvbnN0IG1pblBvaW50ID0gKFtheCwgYXldOiBQb2ludCwgW2J4LCBieV06IFBvaW50KTogUG9pbnQgPT4ge1xuICAgIHJldHVybiBbTWF0aC5taW4oYXgsIGJ4KSwgTWF0aC5taW4oYXksIGJ5KV07XG59O1xuXG5jb25zdCBkaXN0ID0gKFtheCwgYXldOiBQb2ludCwgW2J4LCBieV06IFBvaW50KTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGF4IC0gYngsIDIpICsgTWF0aC5wb3coYXkgKyBieSwgMikpO1xufTtcblxuY29uc3QgcGFyc2VSZWN0ID0gKHI6IFNWRy5SZWN0KTogW3N0cmluZywgQXJyYXk8UG9pbnQ+LCBTVkcuQ29sb3JdID0+IHtcbiAgICBjb25zdCBpZCA9IHIuaWQoKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgY29sb3IgPSBuZXcgU1ZHLkNvbG9yKHIuc3R5bGUoJ2ZpbGwnKSk7XG4gICAgY29uc3QgeHQgPSByLnNjcmVlbkNUTSgpLmV4dHJhY3QoKTtcbiAgICBjb25zdCB0ID0ge3g6IHh0LngsIHk6IHh0Lnl9O1xuICAgIC8vIGNvbnNvbGUubG9nKCdURUUnLCB0KTtcbiAgICBjb25zdCBwb3M6IFBvaW50ID0gW3IueCgpICsgdC54LCByLnkoKSArIHQueV07XG4gICAgY29uc3Qgc2l6ZTogUG9pbnQgPSBbci53aWR0aCgpLCByLmhlaWdodCgpXTtcbiAgICBjb25zdCBwb2ludHM6IEFycmF5PFBvaW50PiA9IFtcbiAgICAgICAgcG9zLFxuICAgICAgICBbcG9zWzBdICsgc2l6ZVswXSwgcG9zWzFdXSxcbiAgICAgICAgW3Bvc1swXSArIHNpemVbMF0sIHBvc1sxXSArIHNpemVbMV1dLFxuICAgICAgICBbcG9zWzBdLCBwb3NbMV0gKyBzaXplWzFdXVxuICAgIF07XG4gICAgLy8gY29uc29sZS5sb2coJ3JlY3QnLCBpZCwgcG9pbnRzLCBjb2xvcik7XG4gICAgcmV0dXJuIFtpZCwgcG9pbnRzLCBjb2xvcl07XG59O1xuXG5jb25zdCBwYXJzZVBhdGggPSAocDogU1ZHLlBhdGgpOiBbc3RyaW5nLCBBcnJheTxQb2ludD4sIFNWRy5Db2xvcl0gPT4ge1xuICAgIGNvbnN0IGlkID0gcC5pZCgpO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBjb2xvciA9IG5ldyBTVkcuQ29sb3IocC5zdHlsZSgnZmlsbCcpKTtcbiAgICBjb25zdCB4dCA9IHAuc2NyZWVuQ1RNKCkuZXh0cmFjdCgpO1xuICAgIGNvbnN0IHQgPSB7eDogeHQueCwgeTogeHQueX07XG4gICAgLy8gY29uc29sZS5sb2coJ1RFRScsIHQpO1xuICAgIGNvbnN0IHBvczogUG9pbnQgPSBbcC54KCkgKyB0LngsIHAueSgpICsgdC55XTtcblxuICAgIGNvbnN0IHBvaW50czogQXJyYXk8UG9pbnQ+ID0gW107XG4gICAgbGV0IGN1cnIgPSBwb3M7XG4gICAgbGV0IHByZXYgPSBwb3M7XG4gICAgZm9yIChjb25zdCBvcCBvZiBwLmFycmF5KCkudmFsdWUpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAob3BbMF0gPT09ICdNJykge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgW18sIHgsIHldOiBbc3RyaW5nLCBudW1iZXIsIG51bWJlcl0gPSBvcDtcbiAgICAgICAgICAgIHByZXYgPSBjdXJyO1xuICAgICAgICAgICAgY3VyciA9IFt4ICsgdC54LCB5ICsgdC55XTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB9IGVsc2UgaWYgKG9wWzBdID09PSAnSCcpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IFtfLCB4XTogW3N0cmluZywgbnVtYmVyXSA9IG9wO1xuICAgICAgICAgICAgcHJldiA9IGN1cnI7XG4gICAgICAgICAgICBjdXJyID0gW3ggKyB0LngsIHByZXZbMV1dO1xuICAgICAgICAgICAgaWYgKGRpc3QoY3VyciwgcHJldikgPiAxKSB7XG4gICAgICAgICAgICAgICAgcG9pbnRzLnB1c2gocHJldik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludHMucHVzaChjdXJyKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB9IGVsc2UgaWYgKG9wWzBdID09PSAnVicpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IFtfLCB5XTogW3N0cmluZywgbnVtYmVyXSA9IG9wO1xuICAgICAgICAgICAgcHJldiA9IGN1cnI7XG4gICAgICAgICAgICBjdXJyID0gW3ByZXZbMF0sIHkgKyB0LnldO1xuICAgICAgICAgICAgaWYgKGRpc3QoY3VyciwgcHJldikgPiAxKSB7XG4gICAgICAgICAgICAgICAgcG9pbnRzLnB1c2gocHJldik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludHMucHVzaChjdXJyKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB9IGVsc2UgaWYgKG9wWzBdID09PSAnTCcpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IFtfLCB4LCB5XTogW3N0cmluZywgbnVtYmVyLCBudW1iZXJdID0gb3A7XG4gICAgICAgICAgICBwcmV2ID0gY3VycjtcbiAgICAgICAgICAgIGN1cnIgPSBbeCArIHQueCwgeSArIHQueV07XG4gICAgICAgICAgICBpZiAoZGlzdChjdXJyLCBwcmV2KSA+IDEpIHtcbiAgICAgICAgICAgICAgICBwb2ludHMucHVzaChwcmV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50cy5wdXNoKGN1cnIpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIH0gZWxzZSBpZiAob3BbMF0gPT09ICdDJykge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgW28sIGF4LCBheSwgYngsIGJ5LCB4LCB5XTogW3N0cmluZywgbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gPSBvcDtcbiAgICAgICAgICAgIHByZXYgPSBjdXJyO1xuICAgICAgICAgICAgY3VyciA9IFt4ICsgdC54LCB5ICsgdC55XTtcbiAgICAgICAgICAgIGlmIChkaXN0KGN1cnIsIHByZXYpID4gMSkge1xuICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKHByZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9pbnRzLnB1c2goY3Vycik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ3BhdGgnLCBpZCwgcG9pbnRzLCBjb2xvcik7XG4gICAgcmV0dXJuIFtpZCwgcG9pbnRzLCBjb2xvcl07XG59O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGlmICghbG9hZGVkKSB7XG4gICAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICAgIGlmICgnd2Via2l0QXVkaW9Db250ZXh0JyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGF1ZGlvQ29udGV4dCA9IG5ldyB3ZWJraXRBdWRpb0NvbnRleHQoKTtcblxuICAgICAgICAgICAgLy8gcGxheSBhIGR1bW15IHNvdW5kIHRvIGFjdGl2YXRlIGNvbnRleHRcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IGF1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXIoMSwgMSwgMjIwNTApO1xuICAgICAgICAgICAgY29uc3Qgc291cmNlID0gYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgICAgICAgc291cmNlLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgICAgIHNvdXJjZS5jb25uZWN0KGF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgICAgICAgICBzb3VyY2Uuc3RhcnQoMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luaXRtc2cnKS5yZW1vdmUoKTtcbiAgICAgICAgcmV0aWxpbmVhcmVzLmZvckVhY2gociA9PiByLnNldEF1ZGlvQ3R4KGF1ZGlvQ29udGV4dCkpO1xuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZCcpLm9uY2xpY2sgPSBwbGF5UmFuZDtcbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0b3AnKS5vbmNsaWNrID0gc3RvcEFsbDtcbiAgICB9XG59O1xuXG5jb25zdCBsb2FkU1ZHID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICBjb25zdCBudW0gPSBjb250YWluZXIuY2xhc3NOYW1lLnJlcGxhY2UoJ2tsYXNzJywgJycpO1xuICAgIGNvbnN0IHVyaSA9IGAvJHtudW19LnN2Z2A7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKHVyaSk7XG4gICAgY29uc3Qgc3ZnRGF0YSA9IGF3YWl0IHJlc3AudGV4dCgpO1xuXG4gICAgY29uc3QgZHJhdyA9IFNWRygnY29udGFpbmVyJykuc2l6ZSgnMTAwJScsICcxMDAlJykudmlld2JveCgwLCAwLCBkcmF3VywgZHJhd0gpO1xuXG4gICAgZHJhdy5zdmcoc3ZnRGF0YSk7XG5cbiAgICBsZXQgb2Zmc2V0OiBQb2ludCA9IFswLCAwXTtcbiAgICBsZXQgYWxsUG9pbnRzOiBQb2ludFtdID0gW107XG5cbiAgICBkcmF3LnNlbGVjdCgncGF0aCcpLmVhY2goZnVuY3Rpb24oaTogbnVtYmVyLCBtZW1iZXJzOiBTVkcuRWxlbWVudFtdKSB7XG4gICAgICAgIGNvbnN0IHBhdGg6IFNWRy5QYXRoID0gdGhpcztcbiAgICAgICAgY29uc3QgW2lkLCBwb2ludHMsIGNvbG9yXSA9IHBhcnNlUGF0aChwYXRoKTtcbiAgICAgICAgYWxsUG9pbnRzLnB1c2goLi4ucG9pbnRzKTtcbiAgICB9KTtcbiAgICBkcmF3LnNlbGVjdCgncmVjdCcpLmVhY2goZnVuY3Rpb24oaTogbnVtYmVyLCBtZW1iZXJzOiBTVkcuRWxlbWVudFtdKSB7XG4gICAgICAgIGNvbnN0IHJlY3Q6IFNWRy5SZWN0ID0gdGhpcztcbiAgICAgICAgY29uc3QgW2lkLCBwb2ludHMsIGNvbG9yXSA9IHBhcnNlUmVjdChyZWN0KTtcbiAgICAgICAgYWxsUG9pbnRzLnB1c2goLi4ucG9pbnRzKTtcbiAgICB9KTtcblxuICAgIG9mZnNldCA9IGFsbFBvaW50cy5yZWR1Y2UobWluUG9pbnQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdPRkZTRVQnLCBvZmZzZXQpO1xuXG4gICAgZHJhdy5zZWxlY3QoJ3BhdGgnKS5lYWNoKGZ1bmN0aW9uKGk6IG51bWJlciwgbWVtYmVyczogU1ZHLkVsZW1lbnRbXSkge1xuICAgICAgICBjb25zdCBwYXRoOiBTVkcuUGF0aCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IFtpZCwgcG9pbnRzLCBjb2xvcl0gPSBwYXJzZVBhdGgocGF0aCk7XG4gICAgICAgIGNvbnN0IGFic1BvaW50czogUG9pbnRbXSA9IHBvaW50cy5tYXAoKFtweCwgcHldKTogUG9pbnQgPT4gW3B4IC0gb2Zmc2V0WzBdLCBweSAtIG9mZnNldFsxXV0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYWJzIHBhdGgnLCBpZCwgYWJzUG9pbnRzKTtcbiAgICAgICAgY29uc3QgcmV0ID0gbmV3IFJldGlsaW5lYXIoY2FudmFzLCBjb2xvciwgYWJzUG9pbnRzLCBpbml0KTtcbiAgICAgICAgcmV0aWxpbmVhcmVzLnNldChpZCwgcmV0KTtcbiAgICB9KTtcbiAgICBkcmF3LnNlbGVjdCgncmVjdCcpLmVhY2goZnVuY3Rpb24oaTogbnVtYmVyLCBtZW1iZXJzOiBTVkcuRWxlbWVudFtdKSB7XG4gICAgICAgIGNvbnN0IHJlY3Q6IFNWRy5SZWN0ID0gdGhpcztcbiAgICAgICAgY29uc3QgW2lkLCBwb2ludHMsIGNvbG9yXSA9IHBhcnNlUmVjdChyZWN0KTtcbiAgICAgICAgY29uc3QgYWJzUG9pbnRzOiBQb2ludFtdID0gcG9pbnRzLm1hcCgoW3B4LCBweV0pOiBQb2ludCA9PiBbcHggLSBvZmZzZXRbMF0sIHB5IC0gb2Zmc2V0WzFdXSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhYnMgcmVjdCcsIGlkLCBhYnNQb2ludHMpO1xuICAgICAgICBjb25zdCByZXQgPSBuZXcgUmV0aWxpbmVhcihjYW52YXMsIGNvbG9yLCBhYnNQb2ludHMsIGluaXQpO1xuICAgICAgICByZXRpbGluZWFyZXMuc2V0KGlkLCByZXQpO1xuICAgIH0pO1xuXG4gICAgZHJhdy5yZW1vdmUoKTtcbn07XG5cbmNvbnN0IHBsYXlSYW5kID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgcmV0aWxpbmVhcmVzLmZvckVhY2goKHJldCkgPT4ge1xuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuMikge1xuICAgICAgICAgICAgcmV0LnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xufTtcblxuY29uc3Qgc3RvcEFsbCA9IChldjogTW91c2VFdmVudCkgPT4ge1xuICAgIHJldGlsaW5lYXJlcy5mb3JFYWNoKChyZXQpID0+IHJldC5zdG9wKCkpO1xuICAgIHJldHVybiB0cnVlO1xufTtcblxubG9hZFNWRygpOyIsIi8vIEB0cy1pZ25vcmVcbmltcG9ydCAqIGFzIFNWRyBmcm9tICdzdmcuanMnO1xuaW1wb3J0IHsgbW9kIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IEJsZWVwU3ludGggfSBmcm9tICcuL3N5bnRoJztcblxuY2xhc3MgUmV0aWxpbmVhciB7XG4gICAgaXNQbGF5aW5nOiBib29sZWFuO1xuICAgIG5vdGU6IG51bWJlcjtcblxuICAgIGluaXRBdWRpb0N0eDogKCkgPT4gdm9pZDtcbiAgICBhdWRpb0N0eDogQXVkaW9Db250ZXh0O1xuICAgIHN5bnRoOiBCbGVlcFN5bnRoO1xuXG4gICAgY2FudmFzOiBTVkcuRG9jO1xuICAgIGNvbG9yOiBTVkcuQ29sb3I7XG5cbiAgICBwb2ludHM6IEFycmF5PFtudW1iZXIsIG51bWJlcl0+O1xuICAgIHBvbHk6IFNWRy5Qb2x5Z29uO1xuICAgIGN1cnNvcjogU1ZHLlNoYXBlO1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBTVkcuRG9jLCBjb2xvcjogU1ZHLkNvbG9yLCBwb2ludHM6IEFycmF5PFtudW1iZXIsIG51bWJlcl0+LCBpbml0QXVkaW9DdHg6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBiID0gY29sb3IuYnJpZ2h0bmVzcygpO1xuXG4gICAgICAgIC8vIGNvbnN0IHBpdGNoQmFzZSA9IDQ0MDtcbiAgICAgICAgY29uc3QgcGl0Y2hCYXNlID0gMzAwO1xuICAgICAgICB0aGlzLm5vdGUgPSBiICogcGl0Y2hCYXNlICsgNjA7XG5cbiAgICAgICAgLy8gY29uc3QgW2gsIHMsIGxdID0gcmdiMmhzbChjb2wpO1xuICAgICAgICAvLyBjb25zdCBtb2QgPSBoIC8gMTAwO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnBvaW50cyA9IHBvaW50cztcblxuICAgICAgICB0aGlzLmluaXRBdWRpb0N0eCA9IGluaXRBdWRpb0N0eDtcblxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBzZXRBdWRpb0N0eChhdWRpb0N0eDogQXVkaW9Db250ZXh0KSB7XG4gICAgICAgIHRoaXMuYXVkaW9DdHggPSBhdWRpb0N0eDtcbiAgICAgICAgdGhpcy5zeW50aCA9IG5ldyBCbGVlcFN5bnRoKHRoaXMubm90ZSwgdGhpcy5hdWRpb0N0eCk7XG4gICAgfVxuXG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLnBvbHkgPSB0aGlzLmNhbnZhcy5wb2x5Z29uKHRoaXMucG9pbnRzKS5hdHRyKCdmaWxsJywgdGhpcy5jb2xvci50b1N0cmluZygpKTtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2VsZi5pc1BsYXlpbmcgPyBzZWxmLnN0b3AoKSA6IHNlbGYucGxheSgpO1xuICAgICAgICB0aGlzLnBvbHkuY2xpY2sodG9nZ2xlKTtcbiAgICB9XG5cbiAgICBwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5hdWRpb0N0eCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRBdWRpb0N0eCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLnBvaW50c1swXTtcblxuICAgICAgICBjb25zdCBbY3csIGNoXSA9IFs1LCA1XTtcbiAgICAgICAgY29uc3QgW2t4LCBreV0gPSBbLWN3IC8gMiwgLWNoIC8gMl07XG4gICAgICAgIHRoaXMuY3Vyc29yID0gdGhpcy5jYW52YXMuZWxsaXBzZShjdywgY2gpXG4gICAgICAgICAgICAueCh4ICsga3gpLnkoeSArIGt5KVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCB0aGlzLmNvbG9yLnRvU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLmN1cnNvci5mcm9udCgpO1xuXG4gICAgICAgIGNvbnN0IGRlYyA9IChsOiBudW1iZXIpID0+IE1hdGguYWJzKGwpIC8gMjAwO1xuICAgICAgICAvLyBjb25zdCBkdXIgPSAobDogbnVtYmVyKSA9PiBsICogNjtcbiAgICAgICAgY29uc3QgZHVyID0gKGw6IG51bWJlcikgPT4gTWF0aC5hYnMobCkgKiAxODtcbiAgICAgICAgY29uc3Qgb2N0ID0gKGw6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWwgPSBNYXRoLmFicyhsKTtcbiAgICAgICAgICAgIGxldCBtdWwgPSAtMjtcbiAgICAgICAgICAgIGlmIChhbCA8IDI1KSB7XG4gICAgICAgICAgICAgICAgbXVsID0gMjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWwgPCA4MCkge1xuICAgICAgICAgICAgICAgIG11bCA9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFsIDwgMTYwKSB7XG4gICAgICAgICAgICAgICAgbXVsID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWwgPCAyNTApIHtcbiAgICAgICAgICAgICAgICBtdWwgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdygyLCBtdWwpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGNvbnN0IHBvaW50cyA9IHRoaXMucG9seS5hcnJheSgpO1xuICAgICAgICBjb25zdCBhbmltYXRlID0gKHN0ZXA6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJzb3IuZnJvbnQoKTtcblxuICAgICAgICAgICAgY29uc3QgbGVuID0gdGhpcy5wb2ludHMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgcCA9IG1vZChzdGVwIC0gMSwgbGVuKTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IFtweCwgcHldID0gdGhpcy5wb2ludHNbcF07XG5cbiAgICAgICAgICAgIGNvbnN0IG4gPSBtb2Qoc3RlcCwgbGVuKTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IFtueCwgbnldID0gdGhpcy5wb2ludHNbbl07XG4gICAgICAgICAgICBjb25zdCBbZHgsIGR5XSA9IFtueCAtIHB4LCBueSAtIHB5XTtcblxuICAgICAgICAgICAgLy8gc2tpcCB6ZXJvIHN0ZXBzXG4gICAgICAgICAgICBpZiAoZHggKyBkeSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoc3RlcCArIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zeW50aC5wbGF5KHRoaXMubm90ZSAqIG9jdChkeCArIGR5KSwgZGVjKGR4ICsgZHkpKTtcblxuICAgICAgICAgICAgY29uc3QgZmxhc2hDb2xvciA9ICcjZmZmJztcbiAgICAgICAgICAgIGNvbnN0IHNoYXBlQ29sb3IgPSB0aGlzLmNvbG9yLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRoaXMucG9seS5hdHRyKCdmaWxsJywgZmxhc2hDb2xvcik7XG4gICAgICAgICAgICBjb25zdCBwb2x5Rmxhc2ggPSB0aGlzLnBvbHkuYW5pbWF0ZShkdXIoZHggKyBkeSksICc+JylcbiAgICAgICAgICAgICAgICAuYXR0cih7IGZpbGw6IHNoYXBlQ29sb3IgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuY3Vyc29yLmF0dHIoJ2ZpbGwnLCBmbGFzaENvbG9yKTtcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yLmFuaW1hdGUoZHVyKGR4ICsgZHkpLCAnPicpXG4gICAgICAgICAgICAgICAgLm1vdmUobnggKyBreCwgbnkgKyBreSlcbiAgICAgICAgICAgICAgICAuYXR0cih7IGZpbGw6IHNoYXBlQ29sb3IgfSlcbiAgICAgICAgICAgICAgICAuYWZ0ZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwb2x5Rmxhc2guc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNQbGF5aW5nKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZShzdGVwICsgMSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGFuaW1hdGUoMSk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3Vyc29yKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnNvci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJldGlsaW5lYXI7IiwiY2xhc3MgQmxlZXBTeW50aCB7XG4gICAgYXVkaW9DdHg6IEF1ZGlvQ29udGV4dDtcbiAgICBmaWx0ZXI6IEJpcXVhZEZpbHRlck5vZGU7XG4gICAgZnJlcTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZnJlcTogbnVtYmVyLCBhdWRpb0N0eDogQXVkaW9Db250ZXh0KSB7XG4gICAgICAgIHRoaXMuZnJlcSA9IGZyZXE7XG4gICAgICAgIHRoaXMuYXVkaW9DdHggPSBhdWRpb0N0eDtcbiAgICB9XG5cbiAgICBwbGF5KGZyZXE6IG51bWJlciwgZGVjOiBudW1iZXIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3BsYXkhJywgZnJlcSwgZGVjKTtcblxuICAgICAgICBjb25zdCBvc2MgPSB0aGlzLmF1ZGlvQ3R4LmNyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICAgICAgb3NjLnR5cGUgPSBmcmVxIDwgMjUwID8gJ3Nhd3Rvb3RoJyA6IGZyZXEgPCA0NDAgPyAnc2luZScgOiAndHJpYW5nbGUnO1xuICAgICAgICBpZiAoJ3dlYmtpdEF1ZGlvQ29udGV4dCcgaW4gd2luZG93KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBvc2MudHlwZSA9IGZyZXEgPCAyNTAgPyAyIDogZnJlcSA8IDQ0MCA/IDAgOiAzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFkc3IgPSB0aGlzLmF1ZGlvQ3R4LmNyZWF0ZUdhaW4oKTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5hdWRpb0N0eC5jcmVhdGVCaXF1YWRGaWx0ZXIoKTtcblxuICAgICAgICBvc2MuY29ubmVjdChhZHNyKTtcbiAgICAgICAgYWRzci5jb25uZWN0KGZpbHRlcik7XG4gICAgICAgIGZpbHRlci5jb25uZWN0KHRoaXMuYXVkaW9DdHguZGVzdGluYXRpb24pO1xuXG4gICAgICAgIC8vIGFkc3JcbiAgICAgICAgY29uc3QgdDAgPSB0aGlzLmF1ZGlvQ3R4LmN1cnJlbnRUaW1lO1xuICAgICAgICBvc2Muc3RhcnQodDApO1xuICAgICAgICAvLyB2b2w6MFxuICAgICAgICBhZHNyLmdhaW4uc2V0VmFsdWVBdFRpbWUoMCwgdDApO1xuICAgICAgICAvLyBhdHRhY2tcbiAgICAgICAgY29uc3QgdDEgPSB0MCArIDAuMDE7XG4gICAgICAgIGFkc3IuZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSgwLjQsIHQxKTtcbiAgICAgICAgLy8gZGVjYXlcbiAgICAgICAgY29uc3QgdDIgPSB0MSArIGRlYztcbiAgICAgICAgY29uc3Qgc3VzID0gMC4wMTtcbiAgICAgICAgYWRzci5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoc3VzLCB0Mik7XG4gICAgICAgIC8vIGdhdGVcbiAgICAgICAgY29uc3Qgc3RvcCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChhZHNyLmdhaW4udmFsdWUgPCAwLjAxKSB7XG4gICAgICAgICAgICAgICAgb3NjLnN0b3AoKTtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHN0b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgIG9zYy5mcmVxdWVuY3kudmFsdWUgPSBmcmVxO1xuICAgICAgICBmaWx0ZXIuZnJlcXVlbmN5LnZhbHVlID0gZnJlcSAqIDI7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gZmlsdGVyO1xuICAgICAgICB0aGlzLmZyZXEgPSBmcmVxO1xuICAgIH1cblxuICAgIHNldEZpbHRlclByb3BzKG11bDogbnVtYmVyLCBxOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5maWx0ZXIuUS52YWx1ZSA9IHE7XG4gICAgICAgIHRoaXMuZmlsdGVyLmZyZXF1ZW5jeS52YWx1ZSA9IHRoaXMuZnJlcSAqIG11bDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEJsZWVwU3ludGggfTtcbiIsIi8vIEB0cy1pZ25vcmVcbmltcG9ydCAqIGFzIFNWRyBmcm9tICdzdmcuanMnO1xuXG50eXBlIEhTVkNvbG9yID0gW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuY29uc3QgcmdiMmhzbCA9IChjb2w6IFNWRy5Db2xvcik6IEhTVkNvbG9yID0+IHtcbiAgICAvLyBNYWtlIHIsIGcsIGFuZCBiIGZyYWN0aW9ucyBvZiAxXG4gICAgY29uc3QgciA9IGNvbC5yIC8gMjU1O1xuICAgIGNvbnN0IGcgPSBjb2wuZyAvIDI1NTtcbiAgICBjb25zdCBiID0gY29sLmIgLyAyNTU7XG5cbiAgICAvLyBGaW5kIGdyZWF0ZXN0IGFuZCBzbWFsbGVzdCBjaGFubmVsIHZhbHVlc1xuICAgIGxldCBjbWluID0gTWF0aC5taW4ociwgZyAsIGIpLFxuICAgICAgICBjbWF4ID0gTWF0aC5tYXgociwgZywgYiksXG4gICAgICAgIGRlbHRhID0gY21heCAtIGNtaW4sXG4gICAgICAgIGggPSAwLFxuICAgICAgICBzID0gMCxcbiAgICAgICAgbCA9IDA7XG5cbiAgICAvLyBDYWxjdWxhdGUgaHVlXG4gICAgLy8gTm8gZGlmZmVyZW5jZVxuICAgIGlmIChkZWx0YSA9PT0gMClcbiAgICBoID0gMDtcbiAgICAvLyBSZWQgaXMgbWF4XG4gICAgZWxzZSBpZiAoY21heCA9PT0gcilcbiAgICBoID0gKChnIC0gYikgLyBkZWx0YSkgJSA2O1xuICAgIC8vIEdyZWVuIGlzIG1heFxuICAgIGVsc2UgaWYgKGNtYXggPT09IGcpXG4gICAgaCA9IChiIC0gcikgLyBkZWx0YSArIDI7XG4gICAgLy8gQmx1ZSBpcyBtYXhcbiAgICBlbHNlXG4gICAgaCA9IChyIC0gZykgLyBkZWx0YSArIDQ7XG5cbiAgICBoID0gTWF0aC5yb3VuZChoICogNjApO1xuXG4gICAgLy8gTWFrZSBuZWdhdGl2ZSBodWVzIHBvc2l0aXZlIGJlaGluZCAzNjDCsFxuICAgIGlmIChoIDwgMClcbiAgICAgICAgaCArPSAzNjA7XG5cbiAgICAvLyBDYWxjdWxhdGUgbGlnaHRuZXNzXG4gICAgbCA9IChjbWF4ICsgY21pbikgLyAyO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHNhdHVyYXRpb25cbiAgICBzID0gZGVsdGEgPT09IDAgPyAwIDogZGVsdGEgLyAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpO1xuXG4gICAgLy8gTXVsdGlwbHkgbCBhbmQgcyBieSAxMDBcbiAgICBzID0gKyhzICogMTAwKS50b0ZpeGVkKDEpO1xuICAgIGwgPSArKGwgKiAxMDApLnRvRml4ZWQoMSk7XG5cbiAgICByZXR1cm4gW2ggLyAyNTUsIHMgLyAyNTUsIGwgLyAyNTVdO1xufTtcblxuY29uc3QgbW9kID0gKG06IG51bWJlciwgbjogbnVtYmVyKSA9PiAoKG0gJSBuKSArIG4pICUgbjtcblxuZXhwb3J0IHsgcmdiMmhzbCwgbW9kIH07Il0sInNvdXJjZVJvb3QiOiIifQ==