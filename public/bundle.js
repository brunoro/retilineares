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
const rectMin = (r) => {
    const pos = [r.x(), r.y()];
    const size = [r.width(), r.height()];
    const points = [
        pos,
        [pos[0] + size[0], pos[1]],
        [pos[0] + size[0], pos[1] + size[1]],
        [pos[0], pos[1] + size[1]]
    ];
    const coords = [points.map(p => p[0]), points.map(p => p[1])];
    return [Math.min(...coords[0]), Math.min(...coords[1])];
};
const pathMin = (p) => {
    const id = p.id();
    // @ts-ignore
    const color = new SVG.Color(p.style('fill'));
    const pos = [p.x(), p.y()];
    const points = [];
    let curr = pos;
    let prev = pos;
    for (const op of p.array().value) {
        // console.log(op);
        // @ts-ignore
        if (op[0] === 'M') {
            // @ts-ignore
            const [_, x, y] = op;
            prev = curr;
            curr = [x, y];
            // @ts-ignore
        }
        else if (op[0] === 'L') {
            // @ts-ignore
            const [_, x, y] = op;
            prev = curr;
            curr = [x, y];
            if (points[points.length - 1] !== prev) {
                points.push(prev);
            }
            points.push(curr);
            // @ts-ignore
        }
        else if (op[0] === 'C') {
            // @ts-ignore
            const [o, ax, ay, bx, by, x, y] = op;
            prev = curr;
            curr = [x, y];
            if (points[points.length - 1] !== prev) {
                points.push(prev);
            }
            points.push(curr);
        }
    }
    const coords = [points.map(p => p[0]), points.map(p => p[1])];
    return [Math.min(...coords[0]), Math.min(...coords[1])];
};
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
    const pos = [r.x(), r.y()];
    const size = [r.width(), r.height()];
    const points = [
        pos,
        [pos[0] + size[0], pos[1]],
        [pos[0] + size[0], pos[1] + size[1]],
        [pos[0], pos[1] + size[1]]
    ];
    return [id, points, color];
};
const parsePath = (p) => {
    const id = p.id();
    // @ts-ignore
    const color = new SVG.Color(p.style('fill'));
    const pos = [p.x(), p.y()];
    const points = [];
    let curr = pos;
    let prev = pos;
    for (const op of p.array().value) {
        // console.log(op);
        // @ts-ignore
        if (op[0] === 'M') {
            // @ts-ignore
            const [_, x, y] = op;
            prev = curr;
            curr = [x, y];
            // @ts-ignore
        }
        else if (op[0] === 'L') {
            // @ts-ignore
            const [_, x, y] = op;
            prev = curr;
            curr = [x, y];
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
            curr = [x, y];
            if (dist(curr, prev) > 1) {
                points.push(prev);
            }
            points.push(curr);
        }
    }
    return [id, points, color];
};
// svg stuff
const loadSVG = () => __awaiter(this, void 0, void 0, function* () {
    const uri = '/fix.svg';
    const resp = yield fetch(uri);
    const svgData = yield resp.text();
    const draw = SVG('container').size('100%', '100%').viewbox(0, 0, drawW, drawH);
    draw.svg(svgData);
    let offset = [0, 0];
    draw.select('path').each(function (i, members) {
        const pOff = pathMin(this);
        offset = minPoint(offset, pOff);
    });
    draw.select('rect').each(function (i, members) {
        const rOff = rectMin(this);
        offset = minPoint(offset, rOff);
    });
    offset = [offset[0] - 5, offset[1] - 5];
    draw.select('path').each(function (i, members) {
        const path = this;
        const [id, points, color] = parsePath(path);
        const absPoints = points.map(([px, py]) => [px - offset[0], py - offset[1]]);
        const ret = new retilinear_1.default(audioContext, canvas, color, absPoints);
        retilineares.set(id, ret);
    });
    draw.select('rect').each(function (i, members) {
        const rect = this;
        const [id, points, color] = parseRect(rect);
        const absPoints = points.map(([px, py]) => [px - offset[0], py - offset[1]]);
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
        document.getElementById('rand').onclick = playRand;
        document.getElementById('stop').onclick = stopAll;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy5qcy9kaXN0L3N2Zy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmV0aWxpbmVhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ludGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBMEM7QUFDaEQsSUFBSSxtQ0FBTztBQUNYO0FBQ0EsS0FBSztBQUFBLG9HQUFDO0FBQ04sR0FBRyxNQUFNLEVBSU47QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOEJBQThCLFFBQVE7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRUFBbUU7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msa0JBQWtCLFdBQVcsVUFBVTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTs7QUFFM0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxJQUFJOztBQUVwQztBQUNBOztBQUVBO0FBQ0EsOEJBQThCLEdBQUc7O0FBRWpDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxRQUFRO0FBQ3ZCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLHlDQUF5QztBQUN0Rjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFFBQVE7QUFDOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RCxRQUFRO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxRQUFRO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RCxRQUFRO0FBQy9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxvQkFBb0I7QUFDNUQsT0FBTztBQUNQO0FBQ0Esd0NBQXdDLHNCQUFzQjtBQUM5RDtBQUNBLEtBQUssT0FBTztBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsU0FBUztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLFFBQVE7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxRQUFRO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsUUFBUTtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQOztBQUVBLE9BQU87QUFDUDs7QUFFQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0NBQXNDLHlCQUF5QjtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFFBQVE7QUFDaEQ7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7QUFFcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0RBQStELFFBQVE7QUFDdkU7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxjQUFjO0FBQ2xGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsS0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0QsaUVBQWlFOztBQUVySDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLG1DQUFtQzs7QUFFM0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUzs7QUFFdEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGFBQWE7QUFDekM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLElBQUk7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixJQUFJO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsUUFBUTtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0EsT0FBTyxlQUFlO0FBQ3RCO0FBQ0EsT0FBTyxhQUFhO0FBQ3BCO0FBQ0EsT0FBTywyQkFBMkI7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQzs7QUFFQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUseUJBQXlCO0FBQ25HLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELFNBQVM7QUFDMUQ7QUFDQTtBQUNBLEtBQUs7QUFDTCxpREFBaUQsU0FBUztBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsaURBQWlELFNBQVM7QUFDMUQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGlEQUFpRCxTQUFTO0FBQzFEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0EseUJBQXlCO0FBQ3pCLGdDQUFnQztBQUNoQywrQkFBK0IsYUFBYTtBQUM1QywyQkFBMkIsNEJBQTRCOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsMkNBQTJDLHdCQUF3QjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7QUFDRDs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsa0VBQWtFLCtCQUErQjtBQUNqRztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELGtCQUFrQjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSwrREFBK0Qsa0JBQWtCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQ0FBZ0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxRQUFRO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxRQUFRO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLCtDQUErQztBQUNoRSxpQkFBaUIsK0NBQStDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLCtDQUErQztBQUNoRSxpQkFBaUIsK0NBQStDO0FBQ2hFO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUzs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsUUFBUTtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxRQUFRO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4QkFBOEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseUJBQXlCO0FBQy9DLHNCQUFzQixxQ0FBcUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMEJBQTBCO0FBQ2hELHNCQUFzQix1Q0FBdUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsUUFBUTtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsUUFBUTtBQUMzRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsS0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFFBQVE7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFHRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFakYsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlCLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDcEMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENB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LENBQUM7SUFDMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTFCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQUlPLDBCQUFPO0FBRmhCLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFdEMsa0JBQUciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsIi8qIVxuKiBzdmcuanMgLSBBIGxpZ2h0d2VpZ2h0IGxpYnJhcnkgZm9yIG1hbmlwdWxhdGluZyBhbmQgYW5pbWF0aW5nIFNWRy5cbiogQHZlcnNpb24gMi43LjFcbiogaHR0cHM6Ly9zdmdkb3Rqcy5naXRodWIuaW8vXG4qXG4qIEBjb3B5cmlnaHQgV291dCBGaWVyZW5zIDx3b3V0QG1pY2std291dC5jb20+XG4qIEBsaWNlbnNlIE1JVFxuKlxuKiBCVUlMVDogRnJpIE5vdiAzMCAyMDE4IDEwOjAxOjU1IEdNVCswMTAwIChHTVQrMDE6MDApXG4qLztcbihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICBkZWZpbmUoZnVuY3Rpb24oKXtcclxuICAgICAgcmV0dXJuIGZhY3Rvcnkocm9vdCwgcm9vdC5kb2N1bWVudClcclxuICAgIH0pXHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gcm9vdC5kb2N1bWVudCA/IGZhY3Rvcnkocm9vdCwgcm9vdC5kb2N1bWVudCkgOiBmdW5jdGlvbih3KXsgcmV0dXJuIGZhY3Rvcnkodywgdy5kb2N1bWVudCkgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByb290LlNWRyA9IGZhY3Rvcnkocm9vdCwgcm9vdC5kb2N1bWVudClcclxuICB9XHJcbn0odHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQpIHtcclxuXHJcbi8vIEZpbmQgZ2xvYmFsIHJlZmVyZW5jZSAtIHVzZXMgJ3RoaXMnIGJ5IGRlZmF1bHQgd2hlbiBhdmFpbGFibGUsXHJcbi8vIGZhbGxzIGJhY2sgdG8gJ3dpbmRvdycgb3RoZXJ3aXNlIChmb3IgYnVuZGxlcnMgbGlrZSBXZWJwYWNrKVxyXG52YXIgZ2xvYmFsUmVmID0gKHR5cGVvZiB0aGlzICE9PSBcInVuZGVmaW5lZFwiKSA/IHRoaXMgOiB3aW5kb3c7XHJcblxyXG4vLyBUaGUgbWFpbiB3cmFwcGluZyBlbGVtZW50XHJcbnZhciBTVkcgPSBnbG9iYWxSZWYuU1ZHID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gIGlmIChTVkcuc3VwcG9ydGVkKSB7XHJcbiAgICBlbGVtZW50ID0gbmV3IFNWRy5Eb2MoZWxlbWVudClcclxuXHJcbiAgICBpZighU1ZHLnBhcnNlci5kcmF3KVxyXG4gICAgICBTVkcucHJlcGFyZSgpXHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxuICB9XHJcbn1cclxuXHJcbi8vIERlZmF1bHQgbmFtZXNwYWNlc1xyXG5TVkcubnMgICAgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcblNWRy54bWxucyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLydcclxuU1ZHLnhsaW5rID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnXHJcblNWRy5zdmdqcyA9ICdodHRwOi8vc3ZnanMuY29tL3N2Z2pzJ1xyXG5cclxuLy8gU3ZnIHN1cHBvcnQgdGVzdFxyXG5TVkcuc3VwcG9ydGVkID0gKGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiAhISBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgJiZcclxuICAgICAgICAgISEgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWRy5ucywnc3ZnJykuY3JlYXRlU1ZHUmVjdFxyXG59KSgpXHJcblxyXG4vLyBEb24ndCBib3RoZXIgdG8gY29udGludWUgaWYgU1ZHIGlzIG5vdCBzdXBwb3J0ZWRcclxuaWYgKCFTVkcuc3VwcG9ydGVkKSByZXR1cm4gZmFsc2VcclxuXHJcbi8vIEVsZW1lbnQgaWQgc2VxdWVuY2VcclxuU1ZHLmRpZCAgPSAxMDAwXHJcblxyXG4vLyBHZXQgbmV4dCBuYW1lZCBlbGVtZW50IGlkXHJcblNWRy5laWQgPSBmdW5jdGlvbihuYW1lKSB7XHJcbiAgcmV0dXJuICdTdmdqcycgKyBjYXBpdGFsaXplKG5hbWUpICsgKFNWRy5kaWQrKylcclxufVxyXG5cclxuLy8gTWV0aG9kIGZvciBlbGVtZW50IGNyZWF0aW9uXHJcblNWRy5jcmVhdGUgPSBmdW5jdGlvbihuYW1lKSB7XHJcbiAgLy8gY3JlYXRlIGVsZW1lbnRcclxuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh0aGlzLm5zLCBuYW1lKVxyXG5cclxuICAvLyBhcHBseSB1bmlxdWUgaWRcclxuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmVpZChuYW1lKSlcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuLy8gTWV0aG9kIGZvciBleHRlbmRpbmcgb2JqZWN0c1xyXG5TVkcuZXh0ZW5kID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIG1vZHVsZXMsIG1ldGhvZHMsIGtleSwgaVxyXG5cclxuICAvLyBHZXQgbGlzdCBvZiBtb2R1bGVzXHJcbiAgbW9kdWxlcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxyXG5cclxuICAvLyBHZXQgb2JqZWN0IHdpdGggZXh0ZW5zaW9uc1xyXG4gIG1ldGhvZHMgPSBtb2R1bGVzLnBvcCgpXHJcblxyXG4gIGZvciAoaSA9IG1vZHVsZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcbiAgICBpZiAobW9kdWxlc1tpXSlcclxuICAgICAgZm9yIChrZXkgaW4gbWV0aG9kcylcclxuICAgICAgICBtb2R1bGVzW2ldLnByb3RvdHlwZVtrZXldID0gbWV0aG9kc1trZXldXHJcblxyXG4gIC8vIE1ha2Ugc3VyZSBTVkcuU2V0IGluaGVyaXRzIGFueSBuZXdseSBhZGRlZCBtZXRob2RzXHJcbiAgaWYgKFNWRy5TZXQgJiYgU1ZHLlNldC5pbmhlcml0KVxyXG4gICAgU1ZHLlNldC5pbmhlcml0KClcclxufVxyXG5cclxuLy8gSW52ZW50IG5ldyBlbGVtZW50XHJcblNWRy5pbnZlbnQgPSBmdW5jdGlvbihjb25maWcpIHtcclxuICAvLyBDcmVhdGUgZWxlbWVudCBpbml0aWFsaXplclxyXG4gIHZhciBpbml0aWFsaXplciA9IHR5cGVvZiBjb25maWcuY3JlYXRlID09ICdmdW5jdGlvbicgP1xyXG4gICAgY29uZmlnLmNyZWF0ZSA6XHJcbiAgICBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIFNWRy5jcmVhdGUoY29uZmlnLmNyZWF0ZSkpXHJcbiAgICB9XHJcblxyXG4gIC8vIEluaGVyaXQgcHJvdG90eXBlXHJcbiAgaWYgKGNvbmZpZy5pbmhlcml0KVxyXG4gICAgaW5pdGlhbGl6ZXIucHJvdG90eXBlID0gbmV3IGNvbmZpZy5pbmhlcml0XHJcblxyXG4gIC8vIEV4dGVuZCB3aXRoIG1ldGhvZHNcclxuICBpZiAoY29uZmlnLmV4dGVuZClcclxuICAgIFNWRy5leHRlbmQoaW5pdGlhbGl6ZXIsIGNvbmZpZy5leHRlbmQpXHJcblxyXG4gIC8vIEF0dGFjaCBjb25zdHJ1Y3QgbWV0aG9kIHRvIHBhcmVudFxyXG4gIGlmIChjb25maWcuY29uc3RydWN0KVxyXG4gICAgU1ZHLmV4dGVuZChjb25maWcucGFyZW50IHx8IFNWRy5Db250YWluZXIsIGNvbmZpZy5jb25zdHJ1Y3QpXHJcblxyXG4gIHJldHVybiBpbml0aWFsaXplclxyXG59XHJcblxyXG4vLyBBZG9wdCBleGlzdGluZyBzdmcgZWxlbWVudHNcclxuU1ZHLmFkb3B0ID0gZnVuY3Rpb24obm9kZSkge1xyXG4gIC8vIGNoZWNrIGZvciBwcmVzZW5jZSBvZiBub2RlXHJcbiAgaWYgKCFub2RlKSByZXR1cm4gbnVsbFxyXG5cclxuICAvLyBtYWtlIHN1cmUgYSBub2RlIGlzbid0IGFscmVhZHkgYWRvcHRlZFxyXG4gIGlmIChub2RlLmluc3RhbmNlKSByZXR1cm4gbm9kZS5pbnN0YW5jZVxyXG5cclxuICAvLyBpbml0aWFsaXplIHZhcmlhYmxlc1xyXG4gIHZhciBlbGVtZW50XHJcblxyXG4gIC8vIGFkb3B0IHdpdGggZWxlbWVudC1zcGVjaWZpYyBzZXR0aW5nc1xyXG4gIGlmIChub2RlLm5vZGVOYW1lID09ICdzdmcnKVxyXG4gICAgZWxlbWVudCA9IG5vZGUucGFyZW50Tm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5TVkdFbGVtZW50ID8gbmV3IFNWRy5OZXN0ZWQgOiBuZXcgU1ZHLkRvY1xyXG4gIGVsc2UgaWYgKG5vZGUubm9kZU5hbWUgPT0gJ2xpbmVhckdyYWRpZW50JylcclxuICAgIGVsZW1lbnQgPSBuZXcgU1ZHLkdyYWRpZW50KCdsaW5lYXInKVxyXG4gIGVsc2UgaWYgKG5vZGUubm9kZU5hbWUgPT0gJ3JhZGlhbEdyYWRpZW50JylcclxuICAgIGVsZW1lbnQgPSBuZXcgU1ZHLkdyYWRpZW50KCdyYWRpYWwnKVxyXG4gIGVsc2UgaWYgKFNWR1tjYXBpdGFsaXplKG5vZGUubm9kZU5hbWUpXSlcclxuICAgIGVsZW1lbnQgPSBuZXcgU1ZHW2NhcGl0YWxpemUobm9kZS5ub2RlTmFtZSldXHJcbiAgZWxzZVxyXG4gICAgZWxlbWVudCA9IG5ldyBTVkcuRWxlbWVudChub2RlKVxyXG5cclxuICAvLyBlbnN1cmUgcmVmZXJlbmNlc1xyXG4gIGVsZW1lbnQudHlwZSAgPSBub2RlLm5vZGVOYW1lXHJcbiAgZWxlbWVudC5ub2RlICA9IG5vZGVcclxuICBub2RlLmluc3RhbmNlID0gZWxlbWVudFxyXG5cclxuICAvLyBTVkcuQ2xhc3Mgc3BlY2lmaWMgcHJlcGFyYXRpb25zXHJcbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkcuRG9jKVxyXG4gICAgZWxlbWVudC5uYW1lc3BhY2UoKS5kZWZzKClcclxuXHJcbiAgLy8gcHVsbCBzdmdqcyBkYXRhIGZyb20gdGhlIGRvbSAoZ2V0QXR0cmlidXRlTlMgZG9lc24ndCB3b3JrIGluIGh0bWw1KVxyXG4gIGVsZW1lbnQuc2V0RGF0YShKU09OLnBhcnNlKG5vZGUuZ2V0QXR0cmlidXRlKCdzdmdqczpkYXRhJykpIHx8IHt9KVxyXG5cclxuICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG4vLyBJbml0aWFsaXplIHBhcnNpbmcgZWxlbWVudFxyXG5TVkcucHJlcGFyZSA9IGZ1bmN0aW9uKCkge1xyXG4gIC8vIFNlbGVjdCBkb2N1bWVudCBib2R5IGFuZCBjcmVhdGUgaW52aXNpYmxlIHN2ZyBlbGVtZW50XHJcbiAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdXHJcbiAgICAsIGRyYXcgPSAoYm9keSA/IG5ldyBTVkcuRG9jKGJvZHkpIDogU1ZHLmFkb3B0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkubmVzdGVkKCkpLnNpemUoMiwgMClcclxuXHJcbiAgLy8gQ3JlYXRlIHBhcnNlciBvYmplY3RcclxuICBTVkcucGFyc2VyID0ge1xyXG4gICAgYm9keTogYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcclxuICAsIGRyYXc6IGRyYXcuc3R5bGUoJ29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMDAlO3RvcDotMTAwJTtvdmVyZmxvdzpoaWRkZW4nKS5hdHRyKCdmb2N1c2FibGUnLCAnZmFsc2UnKS5ub2RlXHJcbiAgLCBwb2x5OiBkcmF3LnBvbHlsaW5lKCkubm9kZVxyXG4gICwgcGF0aDogZHJhdy5wYXRoKCkubm9kZVxyXG4gICwgbmF0aXZlOiBTVkcuY3JlYXRlKCdzdmcnKVxyXG4gIH1cclxufVxyXG5cclxuU1ZHLnBhcnNlciA9IHtcclxuICBuYXRpdmU6IFNWRy5jcmVhdGUoJ3N2ZycpXHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICBpZighU1ZHLnBhcnNlci5kcmF3KVxyXG4gICAgU1ZHLnByZXBhcmUoKVxyXG59LCBmYWxzZSlcclxuXG4vLyBTdG9yYWdlIGZvciByZWd1bGFyIGV4cHJlc3Npb25zXHJcblNWRy5yZWdleCA9IHtcclxuICAvLyBQYXJzZSB1bml0IHZhbHVlXHJcbiAgbnVtYmVyQW5kVW5pdDogICAgL14oWystXT8oXFxkKyhcXC5cXGQqKT98XFwuXFxkKykoZVsrLV0/XFxkKyk/KShbYS16JV0qKSQvaVxyXG5cclxuICAvLyBQYXJzZSBoZXggdmFsdWVcclxuLCBoZXg6ICAgICAgICAgICAgICAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pXHJcblxyXG4gIC8vIFBhcnNlIHJnYiB2YWx1ZVxyXG4sIHJnYjogICAgICAgICAgICAgIC9yZ2JcXCgoXFxkKyksKFxcZCspLChcXGQrKVxcKS9cclxuXHJcbiAgLy8gUGFyc2UgcmVmZXJlbmNlIGlkXHJcbiwgcmVmZXJlbmNlOiAgICAgICAgLyMoW2EtejAtOVxcLV9dKykvaVxyXG5cclxuICAvLyBzcGxpdHMgYSB0cmFuc2Zvcm1hdGlvbiBjaGFpblxyXG4sIHRyYW5zZm9ybXM6ICAgICAgIC9cXClcXHMqLD9cXHMqL1xyXG5cclxuICAvLyBXaGl0ZXNwYWNlXHJcbiwgd2hpdGVzcGFjZTogICAgICAgL1xccy9nXHJcblxyXG4gIC8vIFRlc3QgaGV4IHZhbHVlXHJcbiwgaXNIZXg6ICAgICAgICAgICAgL14jW2EtZjAtOV17Myw2fSQvaVxyXG5cclxuICAvLyBUZXN0IHJnYiB2YWx1ZVxyXG4sIGlzUmdiOiAgICAgICAgICAgIC9ecmdiXFwoL1xyXG5cclxuICAvLyBUZXN0IGNzcyBkZWNsYXJhdGlvblxyXG4sIGlzQ3NzOiAgICAgICAgICAgIC9bXjpdKzpbXjtdKzs/L1xyXG5cclxuICAvLyBUZXN0IGZvciBibGFuayBzdHJpbmdcclxuLCBpc0JsYW5rOiAgICAgICAgICAvXihcXHMrKT8kL1xyXG5cclxuICAvLyBUZXN0IGZvciBudW1lcmljIHN0cmluZ1xyXG4sIGlzTnVtYmVyOiAgICAgICAgIC9eWystXT8oXFxkKyhcXC5cXGQqKT98XFwuXFxkKykoZVsrLV0/XFxkKyk/JC9pXHJcblxyXG4gIC8vIFRlc3QgZm9yIHBlcmNlbnQgdmFsdWVcclxuLCBpc1BlcmNlbnQ6ICAgICAgICAvXi0/W1xcZFxcLl0rJSQvXHJcblxyXG4gIC8vIFRlc3QgZm9yIGltYWdlIHVybFxyXG4sIGlzSW1hZ2U6ICAgICAgICAgIC9cXC4oanBnfGpwZWd8cG5nfGdpZnxzdmcpKFxcP1tePV0rLiopPy9pXHJcblxyXG4gIC8vIHNwbGl0IGF0IHdoaXRlc3BhY2UgYW5kIGNvbW1hXHJcbiwgZGVsaW1pdGVyOiAgICAgICAgL1tcXHMsXSsvXHJcblxyXG4gIC8vIFRoZSBmb2xsb3dpbmcgcmVnZXggYXJlIHVzZWQgdG8gcGFyc2UgdGhlIGQgYXR0cmlidXRlIG9mIGEgcGF0aFxyXG5cclxuICAvLyBNYXRjaGVzIGFsbCBoeXBoZW5zIHdoaWNoIGFyZSBub3QgYWZ0ZXIgYW4gZXhwb25lbnRcclxuLCBoeXBoZW46ICAgICAgICAgICAvKFteZV0pXFwtL2dpXHJcblxyXG4gIC8vIFJlcGxhY2VzIGFuZCB0ZXN0cyBmb3IgYWxsIHBhdGggbGV0dGVyc1xyXG4sIHBhdGhMZXR0ZXJzOiAgICAgIC9bTUxIVkNTUVRBWl0vZ2lcclxuXHJcbiAgLy8geWVzIHdlIG5lZWQgdGhpcyBvbmUsIHRvb1xyXG4sIGlzUGF0aExldHRlcjogICAgIC9bTUxIVkNTUVRBWl0vaVxyXG5cclxuICAvLyBtYXRjaGVzIDAuMTU0LjIzLjQ1XHJcbiwgbnVtYmVyc1dpdGhEb3RzOiAgLygoXFxkP1xcLlxcZCsoPzplWystXT9cXGQrKT8pKCg/OlxcLlxcZCsoPzplWystXT9cXGQrKT8pKykpKy9naVxyXG5cclxuICAvLyBtYXRjaGVzIC5cclxuLCBkb3RzOiAgICAgICAgICAgICAvXFwuL2dcclxufVxyXG5cblNWRy51dGlscyA9IHtcclxuICAvLyBNYXAgZnVuY3Rpb25cclxuICBtYXA6IGZ1bmN0aW9uKGFycmF5LCBibG9jaykge1xyXG4gICAgdmFyIGlcclxuICAgICAgLCBpbCA9IGFycmF5Lmxlbmd0aFxyXG4gICAgICAsIHJlc3VsdCA9IFtdXHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgIHJlc3VsdC5wdXNoKGJsb2NrKGFycmF5W2ldKSlcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfVxyXG5cclxuICAvLyBGaWx0ZXIgZnVuY3Rpb25cclxuLCBmaWx0ZXI6IGZ1bmN0aW9uKGFycmF5LCBibG9jaykge1xyXG4gICAgdmFyIGlcclxuICAgICAgLCBpbCA9IGFycmF5Lmxlbmd0aFxyXG4gICAgICAsIHJlc3VsdCA9IFtdXHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgIGlmIChibG9jayhhcnJheVtpXSkpXHJcbiAgICAgICAgcmVzdWx0LnB1c2goYXJyYXlbaV0pXHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxuXHJcbiAgLy8gRGVncmVlcyB0byByYWRpYW5zXHJcbiwgcmFkaWFuczogZnVuY3Rpb24oZCkge1xyXG4gICAgcmV0dXJuIGQgJSAzNjAgKiBNYXRoLlBJIC8gMTgwXHJcbiAgfVxyXG5cclxuICAvLyBSYWRpYW5zIHRvIGRlZ3JlZXNcclxuLCBkZWdyZWVzOiBmdW5jdGlvbihyKSB7XHJcbiAgICByZXR1cm4gciAqIDE4MCAvIE1hdGguUEkgJSAzNjBcclxuICB9XHJcblxyXG4sIGZpbHRlclNWR0VsZW1lbnRzOiBmdW5jdGlvbihub2Rlcykge1xyXG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyKCBub2RlcywgZnVuY3Rpb24oZWwpIHsgcmV0dXJuIGVsIGluc3RhbmNlb2Ygd2luZG93LlNWR0VsZW1lbnQgfSlcclxuICB9XHJcblxyXG59XG5cclxuU1ZHLmRlZmF1bHRzID0ge1xyXG4gIC8vIERlZmF1bHQgYXR0cmlidXRlIHZhbHVlc1xyXG4gIGF0dHJzOiB7XHJcbiAgICAvLyBmaWxsIGFuZCBzdHJva2VcclxuICAgICdmaWxsLW9wYWNpdHknOiAgICAgMVxyXG4gICwgJ3N0cm9rZS1vcGFjaXR5JzogICAxXHJcbiAgLCAnc3Ryb2tlLXdpZHRoJzogICAgIDBcclxuICAsICdzdHJva2UtbGluZWpvaW4nOiAgJ21pdGVyJ1xyXG4gICwgJ3N0cm9rZS1saW5lY2FwJzogICAnYnV0dCdcclxuICAsIGZpbGw6ICAgICAgICAgICAgICAgJyMwMDAwMDAnXHJcbiAgLCBzdHJva2U6ICAgICAgICAgICAgICcjMDAwMDAwJ1xyXG4gICwgb3BhY2l0eTogICAgICAgICAgICAxXHJcbiAgICAvLyBwb3NpdGlvblxyXG4gICwgeDogICAgICAgICAgICAgICAgICAwXHJcbiAgLCB5OiAgICAgICAgICAgICAgICAgIDBcclxuICAsIGN4OiAgICAgICAgICAgICAgICAgMFxyXG4gICwgY3k6ICAgICAgICAgICAgICAgICAwXHJcbiAgICAvLyBzaXplXHJcbiAgLCB3aWR0aDogICAgICAgICAgICAgIDBcclxuICAsIGhlaWdodDogICAgICAgICAgICAgMFxyXG4gICAgLy8gcmFkaXVzXHJcbiAgLCByOiAgICAgICAgICAgICAgICAgIDBcclxuICAsIHJ4OiAgICAgICAgICAgICAgICAgMFxyXG4gICwgcnk6ICAgICAgICAgICAgICAgICAwXHJcbiAgICAvLyBncmFkaWVudFxyXG4gICwgb2Zmc2V0OiAgICAgICAgICAgICAwXHJcbiAgLCAnc3RvcC1vcGFjaXR5JzogICAgIDFcclxuICAsICdzdG9wLWNvbG9yJzogICAgICAgJyMwMDAwMDAnXHJcbiAgICAvLyB0ZXh0XHJcbiAgLCAnZm9udC1zaXplJzogICAgICAgIDE2XHJcbiAgLCAnZm9udC1mYW1pbHknOiAgICAgICdIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmJ1xyXG4gICwgJ3RleHQtYW5jaG9yJzogICAgICAnc3RhcnQnXHJcbiAgfVxyXG5cclxufVxuLy8gTW9kdWxlIGZvciBjb2xvciBjb252ZXJ0aW9uc1xyXG5TVkcuQ29sb3IgPSBmdW5jdGlvbihjb2xvcikge1xyXG4gIHZhciBtYXRjaFxyXG5cclxuICAvLyBpbml0aWFsaXplIGRlZmF1bHRzXHJcbiAgdGhpcy5yID0gMFxyXG4gIHRoaXMuZyA9IDBcclxuICB0aGlzLmIgPSAwXHJcblxyXG4gIGlmKCFjb2xvcikgcmV0dXJuXHJcblxyXG4gIC8vIHBhcnNlIGNvbG9yXHJcbiAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycpIHtcclxuICAgIGlmIChTVkcucmVnZXguaXNSZ2IudGVzdChjb2xvcikpIHtcclxuICAgICAgLy8gZ2V0IHJnYiB2YWx1ZXNcclxuICAgICAgbWF0Y2ggPSBTVkcucmVnZXgucmdiLmV4ZWMoY29sb3IucmVwbGFjZShTVkcucmVnZXgud2hpdGVzcGFjZSwnJykpXHJcblxyXG4gICAgICAvLyBwYXJzZSBudW1lcmljIHZhbHVlc1xyXG4gICAgICB0aGlzLnIgPSBwYXJzZUludChtYXRjaFsxXSlcclxuICAgICAgdGhpcy5nID0gcGFyc2VJbnQobWF0Y2hbMl0pXHJcbiAgICAgIHRoaXMuYiA9IHBhcnNlSW50KG1hdGNoWzNdKVxyXG5cclxuICAgIH0gZWxzZSBpZiAoU1ZHLnJlZ2V4LmlzSGV4LnRlc3QoY29sb3IpKSB7XHJcbiAgICAgIC8vIGdldCBoZXggdmFsdWVzXHJcbiAgICAgIG1hdGNoID0gU1ZHLnJlZ2V4LmhleC5leGVjKGZ1bGxIZXgoY29sb3IpKVxyXG5cclxuICAgICAgLy8gcGFyc2UgbnVtZXJpYyB2YWx1ZXNcclxuICAgICAgdGhpcy5yID0gcGFyc2VJbnQobWF0Y2hbMV0sIDE2KVxyXG4gICAgICB0aGlzLmcgPSBwYXJzZUludChtYXRjaFsyXSwgMTYpXHJcbiAgICAgIHRoaXMuYiA9IHBhcnNlSW50KG1hdGNoWzNdLCAxNilcclxuXHJcbiAgICB9XHJcblxyXG4gIH0gZWxzZSBpZiAodHlwZW9mIGNvbG9yID09PSAnb2JqZWN0Jykge1xyXG4gICAgdGhpcy5yID0gY29sb3IuclxyXG4gICAgdGhpcy5nID0gY29sb3IuZ1xyXG4gICAgdGhpcy5iID0gY29sb3IuYlxyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5Db2xvciwge1xyXG4gIC8vIERlZmF1bHQgdG8gaGV4IGNvbnZlcnNpb25cclxuICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b0hleCgpXHJcbiAgfVxyXG4gIC8vIEJ1aWxkIGhleCB2YWx1ZVxyXG4sIHRvSGV4OiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAnIydcclxuICAgICAgKyBjb21wVG9IZXgodGhpcy5yKVxyXG4gICAgICArIGNvbXBUb0hleCh0aGlzLmcpXHJcbiAgICAgICsgY29tcFRvSGV4KHRoaXMuYilcclxuICB9XHJcbiAgLy8gQnVpbGQgcmdiIHZhbHVlXHJcbiwgdG9SZ2I6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuICdyZ2IoJyArIFt0aGlzLnIsIHRoaXMuZywgdGhpcy5iXS5qb2luKCkgKyAnKSdcclxuICB9XHJcbiAgLy8gQ2FsY3VsYXRlIHRydWUgYnJpZ2h0bmVzc1xyXG4sIGJyaWdodG5lc3M6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuICh0aGlzLnIgLyAyNTUgKiAwLjMwKVxyXG4gICAgICAgICArICh0aGlzLmcgLyAyNTUgKiAwLjU5KVxyXG4gICAgICAgICArICh0aGlzLmIgLyAyNTUgKiAwLjExKVxyXG4gIH1cclxuICAvLyBNYWtlIGNvbG9yIG1vcnBoYWJsZVxyXG4sIG1vcnBoOiBmdW5jdGlvbihjb2xvcikge1xyXG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBTVkcuQ29sb3IoY29sb3IpXHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgLy8gR2V0IG1vcnBoZWQgY29sb3IgYXQgZ2l2ZW4gcG9zaXRpb25cclxuLCBhdDogZnVuY3Rpb24ocG9zKSB7XHJcbiAgICAvLyBtYWtlIHN1cmUgYSBkZXN0aW5hdGlvbiBpcyBkZWZpbmVkXHJcbiAgICBpZiAoIXRoaXMuZGVzdGluYXRpb24pIHJldHVybiB0aGlzXHJcblxyXG4gICAgLy8gbm9ybWFsaXNlIHBvc1xyXG4gICAgcG9zID0gcG9zIDwgMCA/IDAgOiBwb3MgPiAxID8gMSA6IHBvc1xyXG5cclxuICAgIC8vIGdlbmVyYXRlIG1vcnBoZWQgY29sb3JcclxuICAgIHJldHVybiBuZXcgU1ZHLkNvbG9yKHtcclxuICAgICAgcjogfn4odGhpcy5yICsgKHRoaXMuZGVzdGluYXRpb24uciAtIHRoaXMucikgKiBwb3MpXHJcbiAgICAsIGc6IH5+KHRoaXMuZyArICh0aGlzLmRlc3RpbmF0aW9uLmcgLSB0aGlzLmcpICogcG9zKVxyXG4gICAgLCBiOiB+fih0aGlzLmIgKyAodGhpcy5kZXN0aW5hdGlvbi5iIC0gdGhpcy5iKSAqIHBvcylcclxuICAgIH0pXHJcbiAgfVxyXG5cclxufSlcclxuXHJcbi8vIFRlc3RlcnNcclxuXHJcbi8vIFRlc3QgaWYgZ2l2ZW4gdmFsdWUgaXMgYSBjb2xvciBzdHJpbmdcclxuU1ZHLkNvbG9yLnRlc3QgPSBmdW5jdGlvbihjb2xvcikge1xyXG4gIGNvbG9yICs9ICcnXHJcbiAgcmV0dXJuIFNWRy5yZWdleC5pc0hleC50ZXN0KGNvbG9yKVxyXG4gICAgICB8fCBTVkcucmVnZXguaXNSZ2IudGVzdChjb2xvcilcclxufVxyXG5cclxuLy8gVGVzdCBpZiBnaXZlbiB2YWx1ZSBpcyBhIHJnYiBvYmplY3RcclxuU1ZHLkNvbG9yLmlzUmdiID0gZnVuY3Rpb24oY29sb3IpIHtcclxuICByZXR1cm4gY29sb3IgJiYgdHlwZW9mIGNvbG9yLnIgPT0gJ251bWJlcidcclxuICAgICAgICAgICAgICAgJiYgdHlwZW9mIGNvbG9yLmcgPT0gJ251bWJlcidcclxuICAgICAgICAgICAgICAgJiYgdHlwZW9mIGNvbG9yLmIgPT0gJ251bWJlcidcclxufVxyXG5cclxuLy8gVGVzdCBpZiBnaXZlbiB2YWx1ZSBpcyBhIGNvbG9yXHJcblNWRy5Db2xvci5pc0NvbG9yID0gZnVuY3Rpb24oY29sb3IpIHtcclxuICByZXR1cm4gU1ZHLkNvbG9yLmlzUmdiKGNvbG9yKSB8fCBTVkcuQ29sb3IudGVzdChjb2xvcilcclxufVxuLy8gTW9kdWxlIGZvciBhcnJheSBjb252ZXJzaW9uXHJcblNWRy5BcnJheSA9IGZ1bmN0aW9uKGFycmF5LCBmYWxsYmFjaykge1xyXG4gIGFycmF5ID0gKGFycmF5IHx8IFtdKS52YWx1ZU9mKClcclxuXHJcbiAgLy8gaWYgYXJyYXkgaXMgZW1wdHkgYW5kIGZhbGxiYWNrIGlzIHByb3ZpZGVkLCB1c2UgZmFsbGJhY2tcclxuICBpZiAoYXJyYXkubGVuZ3RoID09IDAgJiYgZmFsbGJhY2spXHJcbiAgICBhcnJheSA9IGZhbGxiYWNrLnZhbHVlT2YoKVxyXG5cclxuICAvLyBwYXJzZSBhcnJheVxyXG4gIHRoaXMudmFsdWUgPSB0aGlzLnBhcnNlKGFycmF5KVxyXG59XHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5BcnJheSwge1xyXG4gIC8vIE1ha2UgYXJyYXkgbW9ycGhhYmxlXHJcbiAgbW9ycGg6IGZ1bmN0aW9uKGFycmF5KSB7XHJcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gdGhpcy5wYXJzZShhcnJheSlcclxuXHJcbiAgICAvLyBub3JtYWxpemUgbGVuZ3RoIG9mIGFycmF5c1xyXG4gICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoICE9IHRoaXMuZGVzdGluYXRpb24ubGVuZ3RoKSB7XHJcbiAgICAgIHZhciBsYXN0VmFsdWUgICAgICAgPSB0aGlzLnZhbHVlW3RoaXMudmFsdWUubGVuZ3RoIC0gMV1cclxuICAgICAgICAsIGxhc3REZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb25bdGhpcy5kZXN0aW5hdGlvbi5sZW5ndGggLSAxXVxyXG5cclxuICAgICAgd2hpbGUodGhpcy52YWx1ZS5sZW5ndGggPiB0aGlzLmRlc3RpbmF0aW9uLmxlbmd0aClcclxuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLnB1c2gobGFzdERlc3RpbmF0aW9uKVxyXG4gICAgICB3aGlsZSh0aGlzLnZhbHVlLmxlbmd0aCA8IHRoaXMuZGVzdGluYXRpb24ubGVuZ3RoKVxyXG4gICAgICAgIHRoaXMudmFsdWUucHVzaChsYXN0VmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgLy8gQ2xlYW4gdXAgYW55IGR1cGxpY2F0ZSBwb2ludHNcclxuLCBzZXR0bGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gZmluZCBhbGwgdW5pcXVlIHZhbHVlc1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gdGhpcy52YWx1ZS5sZW5ndGgsIHNlZW4gPSBbXTsgaSA8IGlsOyBpKyspXHJcbiAgICAgIGlmIChzZWVuLmluZGV4T2YodGhpcy52YWx1ZVtpXSkgPT0gLTEpXHJcbiAgICAgICAgc2Vlbi5wdXNoKHRoaXMudmFsdWVbaV0pXHJcblxyXG4gICAgLy8gc2V0IG5ldyB2YWx1ZVxyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUgPSBzZWVuXHJcbiAgfVxyXG4gIC8vIEdldCBtb3JwaGVkIGFycmF5IGF0IGdpdmVuIHBvc2l0aW9uXHJcbiwgYXQ6IGZ1bmN0aW9uKHBvcykge1xyXG4gICAgLy8gbWFrZSBzdXJlIGEgZGVzdGluYXRpb24gaXMgZGVmaW5lZFxyXG4gICAgaWYgKCF0aGlzLmRlc3RpbmF0aW9uKSByZXR1cm4gdGhpc1xyXG5cclxuICAgIC8vIGdlbmVyYXRlIG1vcnBoZWQgYXJyYXlcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IHRoaXMudmFsdWUubGVuZ3RoLCBhcnJheSA9IFtdOyBpIDwgaWw7IGkrKylcclxuICAgICAgYXJyYXkucHVzaCh0aGlzLnZhbHVlW2ldICsgKHRoaXMuZGVzdGluYXRpb25baV0gLSB0aGlzLnZhbHVlW2ldKSAqIHBvcylcclxuXHJcbiAgICByZXR1cm4gbmV3IFNWRy5BcnJheShhcnJheSlcclxuICB9XHJcbiAgLy8gQ29udmVydCBhcnJheSB0byBzdHJpbmdcclxuLCB0b1N0cmluZzogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZS5qb2luKCcgJylcclxuICB9XHJcbiAgLy8gUmVhbCB2YWx1ZVxyXG4sIHZhbHVlT2Y6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWVcclxuICB9XHJcbiAgLy8gUGFyc2Ugd2hpdGVzcGFjZSBzZXBhcmF0ZWQgc3RyaW5nXHJcbiwgcGFyc2U6IGZ1bmN0aW9uKGFycmF5KSB7XHJcbiAgICBhcnJheSA9IGFycmF5LnZhbHVlT2YoKVxyXG5cclxuICAgIC8vIGlmIGFscmVhZHkgaXMgYW4gYXJyYXksIG5vIG5lZWQgdG8gcGFyc2UgaXRcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkgcmV0dXJuIGFycmF5XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc3BsaXQoYXJyYXkpXHJcbiAgfVxyXG4gIC8vIFN0cmlwIHVubmVjZXNzYXJ5IHdoaXRlc3BhY2VcclxuLCBzcGxpdDogZnVuY3Rpb24oc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyaW5nLnRyaW0oKS5zcGxpdChTVkcucmVnZXguZGVsaW1pdGVyKS5tYXAocGFyc2VGbG9hdClcclxuICB9XHJcbiAgLy8gUmV2ZXJzZSBhcnJheVxyXG4sIHJldmVyc2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy52YWx1ZS5yZXZlcnNlKClcclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuLCBjbG9uZTogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgY2xvbmUgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcigpXHJcbiAgICBjbG9uZS52YWx1ZSA9IGFycmF5X2Nsb25lKHRoaXMudmFsdWUpXHJcbiAgICByZXR1cm4gY2xvbmVcclxuICB9XHJcbn0pXG4vLyBQb2x5IHBvaW50cyBhcnJheVxyXG5TVkcuUG9pbnRBcnJheSA9IGZ1bmN0aW9uKGFycmF5LCBmYWxsYmFjaykge1xyXG4gIFNWRy5BcnJheS5jYWxsKHRoaXMsIGFycmF5LCBmYWxsYmFjayB8fCBbWzAsMF1dKVxyXG59XHJcblxyXG4vLyBJbmhlcml0IGZyb20gU1ZHLkFycmF5XHJcblNWRy5Qb2ludEFycmF5LnByb3RvdHlwZSA9IG5ldyBTVkcuQXJyYXlcclxuU1ZHLlBvaW50QXJyYXkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU1ZHLlBvaW50QXJyYXlcclxuXHJcblNWRy5leHRlbmQoU1ZHLlBvaW50QXJyYXksIHtcclxuICAvLyBDb252ZXJ0IGFycmF5IHRvIHN0cmluZ1xyXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcclxuICAgIC8vIGNvbnZlcnQgdG8gYSBwb2x5IHBvaW50IHN0cmluZ1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gdGhpcy52YWx1ZS5sZW5ndGgsIGFycmF5ID0gW107IGkgPCBpbDsgaSsrKVxyXG4gICAgICBhcnJheS5wdXNoKHRoaXMudmFsdWVbaV0uam9pbignLCcpKVxyXG5cclxuICAgIHJldHVybiBhcnJheS5qb2luKCcgJylcclxuICB9XHJcbiAgLy8gQ29udmVydCBhcnJheSB0byBsaW5lIG9iamVjdFxyXG4sIHRvTGluZTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4MTogdGhpcy52YWx1ZVswXVswXVxyXG4gICAgLCB5MTogdGhpcy52YWx1ZVswXVsxXVxyXG4gICAgLCB4MjogdGhpcy52YWx1ZVsxXVswXVxyXG4gICAgLCB5MjogdGhpcy52YWx1ZVsxXVsxXVxyXG4gICAgfVxyXG4gIH1cclxuICAvLyBHZXQgbW9ycGhlZCBhcnJheSBhdCBnaXZlbiBwb3NpdGlvblxyXG4sIGF0OiBmdW5jdGlvbihwb3MpIHtcclxuICAgIC8vIG1ha2Ugc3VyZSBhIGRlc3RpbmF0aW9uIGlzIGRlZmluZWRcclxuICAgIGlmICghdGhpcy5kZXN0aW5hdGlvbikgcmV0dXJuIHRoaXNcclxuXHJcbiAgICAvLyBnZW5lcmF0ZSBtb3JwaGVkIHBvaW50IHN0cmluZ1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gdGhpcy52YWx1ZS5sZW5ndGgsIGFycmF5ID0gW107IGkgPCBpbDsgaSsrKVxyXG4gICAgICBhcnJheS5wdXNoKFtcclxuICAgICAgICB0aGlzLnZhbHVlW2ldWzBdICsgKHRoaXMuZGVzdGluYXRpb25baV1bMF0gLSB0aGlzLnZhbHVlW2ldWzBdKSAqIHBvc1xyXG4gICAgICAsIHRoaXMudmFsdWVbaV1bMV0gKyAodGhpcy5kZXN0aW5hdGlvbltpXVsxXSAtIHRoaXMudmFsdWVbaV1bMV0pICogcG9zXHJcbiAgICAgIF0pXHJcblxyXG4gICAgcmV0dXJuIG5ldyBTVkcuUG9pbnRBcnJheShhcnJheSlcclxuICB9XHJcbiAgLy8gUGFyc2UgcG9pbnQgc3RyaW5nIGFuZCBmbGF0IGFycmF5XHJcbiwgcGFyc2U6IGZ1bmN0aW9uKGFycmF5KSB7XHJcbiAgICB2YXIgcG9pbnRzID0gW11cclxuXHJcbiAgICBhcnJheSA9IGFycmF5LnZhbHVlT2YoKVxyXG5cclxuICAgIC8vIGlmIGl0IGlzIGFuIGFycmF5XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgLy8gYW5kIGl0IGlzIG5vdCBmbGF0LCB0aGVyZSBpcyBubyBuZWVkIHRvIHBhcnNlIGl0XHJcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoYXJyYXlbMF0pKSB7XHJcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIHVzZSBhIGNsb25lXHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLnNsaWNlKCkgfSlcclxuICAgICAgfSBlbHNlIGlmIChhcnJheVswXS54ICE9IG51bGwpe1xyXG4gICAgICAgIC8vIGFsbG93IHBvaW50IG9iamVjdHMgdG8gYmUgcGFzc2VkXHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIFtlbC54LCBlbC55XSB9KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgeyAvLyBFbHNlLCBpdCBpcyBjb25zaWRlcmVkIGFzIGEgc3RyaW5nXHJcbiAgICAgIC8vIHBhcnNlIHBvaW50c1xyXG4gICAgICBhcnJheSA9IGFycmF5LnRyaW0oKS5zcGxpdChTVkcucmVnZXguZGVsaW1pdGVyKS5tYXAocGFyc2VGbG9hdClcclxuICAgIH1cclxuXHJcbiAgICAvLyB2YWxpZGF0ZSBwb2ludHMgLSBodHRwczovL3N2Z3dnLm9yZy9zdmcyLWRyYWZ0L3NoYXBlcy5odG1sI0RhdGFUeXBlUG9pbnRzXHJcbiAgICAvLyBPZGQgbnVtYmVyIG9mIGNvb3JkaW5hdGVzIGlzIGFuIGVycm9yLiBJbiBzdWNoIGNhc2VzLCBkcm9wIHRoZSBsYXN0IG9kZCBjb29yZGluYXRlLlxyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCAlIDIgIT09IDApIGFycmF5LnBvcCgpXHJcblxyXG4gICAgLy8gd3JhcCBwb2ludHMgaW4gdHdvLXR1cGxlcyBhbmQgcGFyc2UgcG9pbnRzIGFzIGZsb2F0c1xyXG4gICAgZm9yKHZhciBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpID0gaSArIDIpXHJcbiAgICAgIHBvaW50cy5wdXNoKFsgYXJyYXlbaV0sIGFycmF5W2krMV0gXSlcclxuXHJcbiAgICByZXR1cm4gcG9pbnRzXHJcbiAgfVxyXG4gIC8vIE1vdmUgcG9pbnQgc3RyaW5nXHJcbiwgbW92ZTogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgdmFyIGJveCA9IHRoaXMuYmJveCgpXHJcblxyXG4gICAgLy8gZ2V0IHJlbGF0aXZlIG9mZnNldFxyXG4gICAgeCAtPSBib3gueFxyXG4gICAgeSAtPSBib3gueVxyXG5cclxuICAgIC8vIG1vdmUgZXZlcnkgcG9pbnRcclxuICAgIGlmICghaXNOYU4oeCkgJiYgIWlzTmFOKHkpKVxyXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy52YWx1ZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuICAgICAgICB0aGlzLnZhbHVlW2ldID0gW3RoaXMudmFsdWVbaV1bMF0gKyB4LCB0aGlzLnZhbHVlW2ldWzFdICsgeV1cclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICAvLyBSZXNpemUgcG9seSBzdHJpbmdcclxuLCBzaXplOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB2YXIgaSwgYm94ID0gdGhpcy5iYm94KClcclxuXHJcbiAgICAvLyByZWNhbGN1bGF0ZSBwb3NpdGlvbiBvZiBhbGwgcG9pbnRzIGFjY29yZGluZyB0byBuZXcgc2l6ZVxyXG4gICAgZm9yIChpID0gdGhpcy52YWx1ZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBpZihib3gud2lkdGgpIHRoaXMudmFsdWVbaV1bMF0gPSAoKHRoaXMudmFsdWVbaV1bMF0gLSBib3gueCkgKiB3aWR0aCkgIC8gYm94LndpZHRoICArIGJveC54XHJcbiAgICAgIGlmKGJveC5oZWlnaHQpIHRoaXMudmFsdWVbaV1bMV0gPSAoKHRoaXMudmFsdWVbaV1bMV0gLSBib3gueSkgKiBoZWlnaHQpIC8gYm94LmhlaWdodCArIGJveC55XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgLy8gR2V0IGJvdW5kaW5nIGJveCBvZiBwb2ludHNcclxuLCBiYm94OiBmdW5jdGlvbigpIHtcclxuICAgIFNWRy5wYXJzZXIucG9seS5zZXRBdHRyaWJ1dGUoJ3BvaW50cycsIHRoaXMudG9TdHJpbmcoKSlcclxuXHJcbiAgICByZXR1cm4gU1ZHLnBhcnNlci5wb2x5LmdldEJCb3goKVxyXG4gIH1cclxufSlcclxuXG52YXIgcGF0aEhhbmRsZXJzID0ge1xyXG4gIE06IGZ1bmN0aW9uKGMsIHAsIHAwKSB7XHJcbiAgICBwLnggPSBwMC54ID0gY1swXVxyXG4gICAgcC55ID0gcDAueSA9IGNbMV1cclxuXHJcbiAgICByZXR1cm4gWydNJywgcC54LCBwLnldXHJcbiAgfSxcclxuICBMOiBmdW5jdGlvbihjLCBwKSB7XHJcbiAgICBwLnggPSBjWzBdXHJcbiAgICBwLnkgPSBjWzFdXHJcbiAgICByZXR1cm4gWydMJywgY1swXSwgY1sxXV1cclxuICB9LFxyXG4gIEg6IGZ1bmN0aW9uKGMsIHApIHtcclxuICAgIHAueCA9IGNbMF1cclxuICAgIHJldHVybiBbJ0gnLCBjWzBdXVxyXG4gIH0sXHJcbiAgVjogZnVuY3Rpb24oYywgcCkge1xyXG4gICAgcC55ID0gY1swXVxyXG4gICAgcmV0dXJuIFsnVicsIGNbMF1dXHJcbiAgfSxcclxuICBDOiBmdW5jdGlvbihjLCBwKSB7XHJcbiAgICBwLnggPSBjWzRdXHJcbiAgICBwLnkgPSBjWzVdXHJcbiAgICByZXR1cm4gWydDJywgY1swXSwgY1sxXSwgY1syXSwgY1szXSwgY1s0XSwgY1s1XV1cclxuICB9LFxyXG4gIFM6IGZ1bmN0aW9uKGMsIHApIHtcclxuICAgIHAueCA9IGNbMl1cclxuICAgIHAueSA9IGNbM11cclxuICAgIHJldHVybiBbJ1MnLCBjWzBdLCBjWzFdLCBjWzJdLCBjWzNdXVxyXG4gIH0sXHJcbiAgUTogZnVuY3Rpb24oYywgcCkge1xyXG4gICAgcC54ID0gY1syXVxyXG4gICAgcC55ID0gY1szXVxyXG4gICAgcmV0dXJuIFsnUScsIGNbMF0sIGNbMV0sIGNbMl0sIGNbM11dXHJcbiAgfSxcclxuICBUOiBmdW5jdGlvbihjLCBwKSB7XHJcbiAgICBwLnggPSBjWzBdXHJcbiAgICBwLnkgPSBjWzFdXHJcbiAgICByZXR1cm4gWydUJywgY1swXSwgY1sxXV1cclxuICB9LFxyXG4gIFo6IGZ1bmN0aW9uKGMsIHAsIHAwKSB7XHJcbiAgICBwLnggPSBwMC54XHJcbiAgICBwLnkgPSBwMC55XHJcbiAgICByZXR1cm4gWydaJ11cclxuICB9LFxyXG4gIEE6IGZ1bmN0aW9uKGMsIHApIHtcclxuICAgIHAueCA9IGNbNV1cclxuICAgIHAueSA9IGNbNl1cclxuICAgIHJldHVybiBbJ0EnLCBjWzBdLCBjWzFdLCBjWzJdLCBjWzNdLCBjWzRdLCBjWzVdLCBjWzZdXVxyXG4gIH1cclxufVxyXG5cclxudmFyIG1saHZxdGNzYSA9ICdtbGh2cXRjc2F6Jy5zcGxpdCgnJylcclxuXHJcbmZvcih2YXIgaSA9IDAsIGlsID0gbWxodnF0Y3NhLmxlbmd0aDsgaSA8IGlsOyArK2kpe1xyXG4gIHBhdGhIYW5kbGVyc1ttbGh2cXRjc2FbaV1dID0gKGZ1bmN0aW9uKGkpe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGMsIHAsIHAwKSB7XHJcbiAgICAgIGlmKGkgPT0gJ0gnKSBjWzBdID0gY1swXSArIHAueFxyXG4gICAgICBlbHNlIGlmKGkgPT0gJ1YnKSBjWzBdID0gY1swXSArIHAueVxyXG4gICAgICBlbHNlIGlmKGkgPT0gJ0EnKXtcclxuICAgICAgICBjWzVdID0gY1s1XSArIHAueCxcclxuICAgICAgICBjWzZdID0gY1s2XSArIHAueVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBmb3IodmFyIGogPSAwLCBqbCA9IGMubGVuZ3RoOyBqIDwgamw7ICsraikge1xyXG4gICAgICAgICAgY1tqXSA9IGNbal0gKyAoaiUyID8gcC55IDogcC54KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBwYXRoSGFuZGxlcnNbaV0oYywgcCwgcDApXHJcbiAgICB9XHJcbiAgfSkobWxodnF0Y3NhW2ldLnRvVXBwZXJDYXNlKCkpXHJcbn1cclxuXHJcbi8vIFBhdGggcG9pbnRzIGFycmF5XHJcblNWRy5QYXRoQXJyYXkgPSBmdW5jdGlvbihhcnJheSwgZmFsbGJhY2spIHtcclxuICBTVkcuQXJyYXkuY2FsbCh0aGlzLCBhcnJheSwgZmFsbGJhY2sgfHwgW1snTScsIDAsIDBdXSlcclxufVxyXG5cclxuLy8gSW5oZXJpdCBmcm9tIFNWRy5BcnJheVxyXG5TVkcuUGF0aEFycmF5LnByb3RvdHlwZSA9IG5ldyBTVkcuQXJyYXlcclxuU1ZHLlBhdGhBcnJheS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTVkcuUGF0aEFycmF5XHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5QYXRoQXJyYXksIHtcclxuICAvLyBDb252ZXJ0IGFycmF5IHRvIHN0cmluZ1xyXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBhcnJheVRvU3RyaW5nKHRoaXMudmFsdWUpXHJcbiAgfVxyXG4gIC8vIE1vdmUgcGF0aCBzdHJpbmdcclxuLCBtb3ZlOiBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICAvLyBnZXQgYm91bmRpbmcgYm94IG9mIGN1cnJlbnQgc2l0dWF0aW9uXHJcbiAgICB2YXIgYm94ID0gdGhpcy5iYm94KClcclxuXHJcbiAgICAvLyBnZXQgcmVsYXRpdmUgb2Zmc2V0XHJcbiAgICB4IC09IGJveC54XHJcbiAgICB5IC09IGJveC55XHJcblxyXG4gICAgaWYgKCFpc05hTih4KSAmJiAhaXNOYU4oeSkpIHtcclxuICAgICAgLy8gbW92ZSBldmVyeSBwb2ludFxyXG4gICAgICBmb3IgKHZhciBsLCBpID0gdGhpcy52YWx1ZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGwgPSB0aGlzLnZhbHVlW2ldWzBdXHJcblxyXG4gICAgICAgIGlmIChsID09ICdNJyB8fCBsID09ICdMJyB8fCBsID09ICdUJykgIHtcclxuICAgICAgICAgIHRoaXMudmFsdWVbaV1bMV0gKz0geFxyXG4gICAgICAgICAgdGhpcy52YWx1ZVtpXVsyXSArPSB5XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAobCA9PSAnSCcpICB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlW2ldWzFdICs9IHhcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChsID09ICdWJykgIHtcclxuICAgICAgICAgIHRoaXMudmFsdWVbaV1bMV0gKz0geVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGwgPT0gJ0MnIHx8IGwgPT0gJ1MnIHx8IGwgPT0gJ1EnKSAge1xyXG4gICAgICAgICAgdGhpcy52YWx1ZVtpXVsxXSArPSB4XHJcbiAgICAgICAgICB0aGlzLnZhbHVlW2ldWzJdICs9IHlcclxuICAgICAgICAgIHRoaXMudmFsdWVbaV1bM10gKz0geFxyXG4gICAgICAgICAgdGhpcy52YWx1ZVtpXVs0XSArPSB5XHJcblxyXG4gICAgICAgICAgaWYgKGwgPT0gJ0MnKSAge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlW2ldWzVdICs9IHhcclxuICAgICAgICAgICAgdGhpcy52YWx1ZVtpXVs2XSArPSB5XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAobCA9PSAnQScpICB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlW2ldWzZdICs9IHhcclxuICAgICAgICAgIHRoaXMudmFsdWVbaV1bN10gKz0geVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICAvLyBSZXNpemUgcGF0aCBzdHJpbmdcclxuLCBzaXplOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAvLyBnZXQgYm91bmRpbmcgYm94IG9mIGN1cnJlbnQgc2l0dWF0aW9uXHJcbiAgICB2YXIgaSwgbCwgYm94ID0gdGhpcy5iYm94KClcclxuXHJcbiAgICAvLyByZWNhbGN1bGF0ZSBwb3NpdGlvbiBvZiBhbGwgcG9pbnRzIGFjY29yZGluZyB0byBuZXcgc2l6ZVxyXG4gICAgZm9yIChpID0gdGhpcy52YWx1ZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBsID0gdGhpcy52YWx1ZVtpXVswXVxyXG5cclxuICAgICAgaWYgKGwgPT0gJ00nIHx8IGwgPT0gJ0wnIHx8IGwgPT0gJ1QnKSAge1xyXG4gICAgICAgIHRoaXMudmFsdWVbaV1bMV0gPSAoKHRoaXMudmFsdWVbaV1bMV0gLSBib3gueCkgKiB3aWR0aCkgIC8gYm94LndpZHRoICArIGJveC54XHJcbiAgICAgICAgdGhpcy52YWx1ZVtpXVsyXSA9ICgodGhpcy52YWx1ZVtpXVsyXSAtIGJveC55KSAqIGhlaWdodCkgLyBib3guaGVpZ2h0ICsgYm94LnlcclxuXHJcbiAgICAgIH0gZWxzZSBpZiAobCA9PSAnSCcpICB7XHJcbiAgICAgICAgdGhpcy52YWx1ZVtpXVsxXSA9ICgodGhpcy52YWx1ZVtpXVsxXSAtIGJveC54KSAqIHdpZHRoKSAgLyBib3gud2lkdGggICsgYm94LnhcclxuXHJcbiAgICAgIH0gZWxzZSBpZiAobCA9PSAnVicpICB7XHJcbiAgICAgICAgdGhpcy52YWx1ZVtpXVsxXSA9ICgodGhpcy52YWx1ZVtpXVsxXSAtIGJveC55KSAqIGhlaWdodCkgLyBib3guaGVpZ2h0ICsgYm94LnlcclxuXHJcbiAgICAgIH0gZWxzZSBpZiAobCA9PSAnQycgfHwgbCA9PSAnUycgfHwgbCA9PSAnUScpICB7XHJcbiAgICAgICAgdGhpcy52YWx1ZVtpXVsxXSA9ICgodGhpcy52YWx1ZVtpXVsxXSAtIGJveC54KSAqIHdpZHRoKSAgLyBib3gud2lkdGggICsgYm94LnhcclxuICAgICAgICB0aGlzLnZhbHVlW2ldWzJdID0gKCh0aGlzLnZhbHVlW2ldWzJdIC0gYm94LnkpICogaGVpZ2h0KSAvIGJveC5oZWlnaHQgKyBib3gueVxyXG4gICAgICAgIHRoaXMudmFsdWVbaV1bM10gPSAoKHRoaXMudmFsdWVbaV1bM10gLSBib3gueCkgKiB3aWR0aCkgIC8gYm94LndpZHRoICArIGJveC54XHJcbiAgICAgICAgdGhpcy52YWx1ZVtpXVs0XSA9ICgodGhpcy52YWx1ZVtpXVs0XSAtIGJveC55KSAqIGhlaWdodCkgLyBib3guaGVpZ2h0ICsgYm94LnlcclxuXHJcbiAgICAgICAgaWYgKGwgPT0gJ0MnKSAge1xyXG4gICAgICAgICAgdGhpcy52YWx1ZVtpXVs1XSA9ICgodGhpcy52YWx1ZVtpXVs1XSAtIGJveC54KSAqIHdpZHRoKSAgLyBib3gud2lkdGggICsgYm94LnhcclxuICAgICAgICAgIHRoaXMudmFsdWVbaV1bNl0gPSAoKHRoaXMudmFsdWVbaV1bNl0gLSBib3gueSkgKiBoZWlnaHQpIC8gYm94LmhlaWdodCArIGJveC55XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIGlmIChsID09ICdBJykgIHtcclxuICAgICAgICAvLyByZXNpemUgcmFkaWlcclxuICAgICAgICB0aGlzLnZhbHVlW2ldWzFdID0gKHRoaXMudmFsdWVbaV1bMV0gKiB3aWR0aCkgIC8gYm94LndpZHRoXHJcbiAgICAgICAgdGhpcy52YWx1ZVtpXVsyXSA9ICh0aGlzLnZhbHVlW2ldWzJdICogaGVpZ2h0KSAvIGJveC5oZWlnaHRcclxuXHJcbiAgICAgICAgLy8gbW92ZSBwb3NpdGlvbiB2YWx1ZXNcclxuICAgICAgICB0aGlzLnZhbHVlW2ldWzZdID0gKCh0aGlzLnZhbHVlW2ldWzZdIC0gYm94LngpICogd2lkdGgpICAvIGJveC53aWR0aCAgKyBib3gueFxyXG4gICAgICAgIHRoaXMudmFsdWVbaV1bN10gPSAoKHRoaXMudmFsdWVbaV1bN10gLSBib3gueSkgKiBoZWlnaHQpIC8gYm94LmhlaWdodCArIGJveC55XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgLy8gVGVzdCBpZiB0aGUgcGFzc2VkIHBhdGggYXJyYXkgdXNlIHRoZSBzYW1lIHBhdGggZGF0YSBjb21tYW5kcyBhcyB0aGlzIHBhdGggYXJyYXlcclxuLCBlcXVhbENvbW1hbmRzOiBmdW5jdGlvbihwYXRoQXJyYXkpIHtcclxuICAgIHZhciBpLCBpbCwgZXF1YWxDb21tYW5kc1xyXG5cclxuICAgIHBhdGhBcnJheSA9IG5ldyBTVkcuUGF0aEFycmF5KHBhdGhBcnJheSlcclxuXHJcbiAgICBlcXVhbENvbW1hbmRzID0gdGhpcy52YWx1ZS5sZW5ndGggPT09IHBhdGhBcnJheS52YWx1ZS5sZW5ndGhcclxuICAgIGZvcihpID0gMCwgaWwgPSB0aGlzLnZhbHVlLmxlbmd0aDsgZXF1YWxDb21tYW5kcyAmJiBpIDwgaWw7IGkrKykge1xyXG4gICAgICBlcXVhbENvbW1hbmRzID0gdGhpcy52YWx1ZVtpXVswXSA9PT0gcGF0aEFycmF5LnZhbHVlW2ldWzBdXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVxdWFsQ29tbWFuZHNcclxuICB9XHJcbiAgLy8gTWFrZSBwYXRoIGFycmF5IG1vcnBoYWJsZVxyXG4sIG1vcnBoOiBmdW5jdGlvbihwYXRoQXJyYXkpIHtcclxuICAgIHBhdGhBcnJheSA9IG5ldyBTVkcuUGF0aEFycmF5KHBhdGhBcnJheSlcclxuXHJcbiAgICBpZih0aGlzLmVxdWFsQ29tbWFuZHMocGF0aEFycmF5KSkge1xyXG4gICAgICB0aGlzLmRlc3RpbmF0aW9uID0gcGF0aEFycmF5XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRlc3RpbmF0aW9uID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIC8vIEdldCBtb3JwaGVkIHBhdGggYXJyYXkgYXQgZ2l2ZW4gcG9zaXRpb25cclxuLCBhdDogZnVuY3Rpb24ocG9zKSB7XHJcbiAgICAvLyBtYWtlIHN1cmUgYSBkZXN0aW5hdGlvbiBpcyBkZWZpbmVkXHJcbiAgICBpZiAoIXRoaXMuZGVzdGluYXRpb24pIHJldHVybiB0aGlzXHJcblxyXG4gICAgdmFyIHNvdXJjZUFycmF5ID0gdGhpcy52YWx1ZVxyXG4gICAgICAsIGRlc3RpbmF0aW9uQXJyYXkgPSB0aGlzLmRlc3RpbmF0aW9uLnZhbHVlXHJcbiAgICAgICwgYXJyYXkgPSBbXSwgcGF0aEFycmF5ID0gbmV3IFNWRy5QYXRoQXJyYXkoKVxyXG4gICAgICAsIGksIGlsLCBqLCBqbFxyXG5cclxuICAgIC8vIEFuaW1hdGUgaGFzIHNwZWNpZmllZCBpbiB0aGUgU1ZHIHNwZWNcclxuICAgIC8vIFNlZTogaHR0cHM6Ly93d3cudzMub3JnL1RSL1NWRzExL3BhdGhzLmh0bWwjUGF0aEVsZW1lbnRcclxuICAgIGZvciAoaSA9IDAsIGlsID0gc291cmNlQXJyYXkubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xyXG4gICAgICBhcnJheVtpXSA9IFtzb3VyY2VBcnJheVtpXVswXV1cclxuICAgICAgZm9yKGogPSAxLCBqbCA9IHNvdXJjZUFycmF5W2ldLmxlbmd0aDsgaiA8IGpsOyBqKyspIHtcclxuICAgICAgICBhcnJheVtpXVtqXSA9IHNvdXJjZUFycmF5W2ldW2pdICsgKGRlc3RpbmF0aW9uQXJyYXlbaV1bal0gLSBzb3VyY2VBcnJheVtpXVtqXSkgKiBwb3NcclxuICAgICAgfVxyXG4gICAgICAvLyBGb3IgdGhlIHR3byBmbGFncyBvZiB0aGUgZWxsaXB0aWNhbCBhcmMgY29tbWFuZCwgdGhlIFNWRyBzcGVjIHNheTpcclxuICAgICAgLy8gRmxhZ3MgYW5kIGJvb2xlYW5zIGFyZSBpbnRlcnBvbGF0ZWQgYXMgZnJhY3Rpb25zIGJldHdlZW4gemVybyBhbmQgb25lLCB3aXRoIGFueSBub24temVybyB2YWx1ZSBjb25zaWRlcmVkIHRvIGJlIGEgdmFsdWUgb2Ygb25lL3RydWVcclxuICAgICAgLy8gRWxsaXB0aWNhbCBhcmMgY29tbWFuZCBhcyBhbiBhcnJheSBmb2xsb3dlZCBieSBjb3JyZXNwb25kaW5nIGluZGV4ZXM6XHJcbiAgICAgIC8vIFsnQScsIHJ4LCByeSwgeC1heGlzLXJvdGF0aW9uLCBsYXJnZS1hcmMtZmxhZywgc3dlZXAtZmxhZywgeCwgeV1cclxuICAgICAgLy8gICAwICAgIDEgICAyICAgICAgICAzICAgICAgICAgICAgICAgICA0ICAgICAgICAgICAgIDUgICAgICA2ICA3XHJcbiAgICAgIGlmKGFycmF5W2ldWzBdID09PSAnQScpIHtcclxuICAgICAgICBhcnJheVtpXVs0XSA9ICsoYXJyYXlbaV1bNF0gIT0gMClcclxuICAgICAgICBhcnJheVtpXVs1XSA9ICsoYXJyYXlbaV1bNV0gIT0gMClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIERpcmVjdGx5IG1vZGlmeSB0aGUgdmFsdWUgb2YgYSBwYXRoIGFycmF5LCB0aGlzIGlzIGRvbmUgdGhpcyB3YXkgZm9yIHBlcmZvcm1hbmNlXHJcbiAgICBwYXRoQXJyYXkudmFsdWUgPSBhcnJheVxyXG4gICAgcmV0dXJuIHBhdGhBcnJheVxyXG4gIH1cclxuICAvLyBBYnNvbHV0aXplIGFuZCBwYXJzZSBwYXRoIHRvIGFycmF5XHJcbiwgcGFyc2U6IGZ1bmN0aW9uKGFycmF5KSB7XHJcbiAgICAvLyBpZiBpdCdzIGFscmVhZHkgYSBwYXRoYXJyYXksIG5vIG5lZWQgdG8gcGFyc2UgaXRcclxuICAgIGlmIChhcnJheSBpbnN0YW5jZW9mIFNWRy5QYXRoQXJyYXkpIHJldHVybiBhcnJheS52YWx1ZU9mKClcclxuXHJcbiAgICAvLyBwcmVwYXJlIGZvciBwYXJzaW5nXHJcbiAgICB2YXIgaSwgeDAsIHkwLCBzLCBzZWcsIGFyclxyXG4gICAgICAsIHggPSAwXHJcbiAgICAgICwgeSA9IDBcclxuICAgICAgLCBwYXJhbUNudCA9IHsgJ00nOjIsICdMJzoyLCAnSCc6MSwgJ1YnOjEsICdDJzo2LCAnUyc6NCwgJ1EnOjQsICdUJzoyLCAnQSc6NywgJ1onOjAgfVxyXG5cclxuICAgIGlmKHR5cGVvZiBhcnJheSA9PSAnc3RyaW5nJyl7XHJcblxyXG4gICAgICBhcnJheSA9IGFycmF5XHJcbiAgICAgICAgLnJlcGxhY2UoU1ZHLnJlZ2V4Lm51bWJlcnNXaXRoRG90cywgcGF0aFJlZ1JlcGxhY2UpIC8vIGNvbnZlcnQgNDUuMTIzLjEyMyB0byA0NS4xMjMgLjEyM1xyXG4gICAgICAgIC5yZXBsYWNlKFNWRy5yZWdleC5wYXRoTGV0dGVycywgJyAkJiAnKSAvLyBwdXQgc29tZSByb29tIGJldHdlZW4gbGV0dGVycyBhbmQgbnVtYmVyc1xyXG4gICAgICAgIC5yZXBsYWNlKFNWRy5yZWdleC5oeXBoZW4sICckMSAtJykgICAgICAvLyBhZGQgc3BhY2UgYmVmb3JlIGh5cGhlblxyXG4gICAgICAgIC50cmltKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmltXHJcbiAgICAgICAgLnNwbGl0KFNWRy5yZWdleC5kZWxpbWl0ZXIpICAgLy8gc3BsaXQgaW50byBhcnJheVxyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICBhcnJheSA9IGFycmF5LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXJyKXtcclxuICAgICAgICByZXR1cm4gW10uY29uY2F0LmNhbGwocHJldiwgY3VycilcclxuICAgICAgfSwgW10pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXJyYXkgbm93IGlzIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIHBhcnRzIG9mIGEgcGF0aCBlLmcuIFsnTScsICcwJywgJzAnLCAnTCcsICczMCcsICczMCcgLi4uXVxyXG4gICAgdmFyIGFyciA9IFtdXHJcbiAgICAgICwgcCA9IG5ldyBTVkcuUG9pbnQoKVxyXG4gICAgICAsIHAwID0gbmV3IFNWRy5Qb2ludCgpXHJcbiAgICAgICwgaW5kZXggPSAwXHJcbiAgICAgICwgbGVuID0gYXJyYXkubGVuZ3RoXHJcblxyXG4gICAgZG97XHJcbiAgICAgIC8vIFRlc3QgaWYgd2UgaGF2ZSBhIHBhdGggbGV0dGVyXHJcbiAgICAgIGlmKFNWRy5yZWdleC5pc1BhdGhMZXR0ZXIudGVzdChhcnJheVtpbmRleF0pKXtcclxuICAgICAgICBzID0gYXJyYXlbaW5kZXhdXHJcbiAgICAgICAgKytpbmRleFxyXG4gICAgICAvLyBJZiBsYXN0IGxldHRlciB3YXMgYSBtb3ZlIGNvbW1hbmQgYW5kIHdlIGdvdCBubyBuZXcsIGl0IGRlZmF1bHRzIHRvIFtMXWluZVxyXG4gICAgICB9ZWxzZSBpZihzID09ICdNJyl7XHJcbiAgICAgICAgcyA9ICdMJ1xyXG4gICAgICB9ZWxzZSBpZihzID09ICdtJyl7XHJcbiAgICAgICAgcyA9ICdsJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhcnIucHVzaChwYXRoSGFuZGxlcnNbc10uY2FsbChudWxsLFxyXG4gICAgICAgICAgYXJyYXkuc2xpY2UoaW5kZXgsIChpbmRleCA9IGluZGV4ICsgcGFyYW1DbnRbcy50b1VwcGVyQ2FzZSgpXSkpLm1hcChwYXJzZUZsb2F0KSxcclxuICAgICAgICAgIHAsIHAwXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcblxyXG4gICAgfXdoaWxlKGxlbiA+IGluZGV4KVxyXG5cclxuICAgIHJldHVybiBhcnJcclxuXHJcbiAgfVxyXG4gIC8vIEdldCBib3VuZGluZyBib3ggb2YgcGF0aFxyXG4sIGJib3g6IGZ1bmN0aW9uKCkge1xyXG4gICAgU1ZHLnBhcnNlci5wYXRoLnNldEF0dHJpYnV0ZSgnZCcsIHRoaXMudG9TdHJpbmcoKSlcclxuXHJcbiAgICByZXR1cm4gU1ZHLnBhcnNlci5wYXRoLmdldEJCb3goKVxyXG4gIH1cclxuXHJcbn0pXHJcblxuLy8gTW9kdWxlIGZvciB1bml0IGNvbnZlcnRpb25zXHJcblNWRy5OdW1iZXIgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplXHJcbiAgY3JlYXRlOiBmdW5jdGlvbih2YWx1ZSwgdW5pdCkge1xyXG4gICAgLy8gaW5pdGlhbGl6ZSBkZWZhdWx0c1xyXG4gICAgdGhpcy52YWx1ZSA9IDBcclxuICAgIHRoaXMudW5pdCAgPSB1bml0IHx8ICcnXHJcblxyXG4gICAgLy8gcGFyc2UgdmFsdWVcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIC8vIGVuc3VyZSBhIHZhbGlkIG51bWVyaWMgdmFsdWVcclxuICAgICAgdGhpcy52YWx1ZSA9IGlzTmFOKHZhbHVlKSA/IDAgOiAhaXNGaW5pdGUodmFsdWUpID8gKHZhbHVlIDwgMCA/IC0zLjRlKzM4IDogKzMuNGUrMzgpIDogdmFsdWVcclxuXHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdW5pdCA9IHZhbHVlLm1hdGNoKFNWRy5yZWdleC5udW1iZXJBbmRVbml0KVxyXG5cclxuICAgICAgaWYgKHVuaXQpIHtcclxuICAgICAgICAvLyBtYWtlIHZhbHVlIG51bWVyaWNcclxuICAgICAgICB0aGlzLnZhbHVlID0gcGFyc2VGbG9hdCh1bml0WzFdKVxyXG5cclxuICAgICAgICAvLyBub3JtYWxpemVcclxuICAgICAgICBpZiAodW5pdFs1XSA9PSAnJScpXHJcbiAgICAgICAgICB0aGlzLnZhbHVlIC89IDEwMFxyXG4gICAgICAgIGVsc2UgaWYgKHVuaXRbNV0gPT0gJ3MnKVxyXG4gICAgICAgICAgdGhpcy52YWx1ZSAqPSAxMDAwXHJcblxyXG4gICAgICAgIC8vIHN0b3JlIHVuaXRcclxuICAgICAgICB0aGlzLnVuaXQgPSB1bml0WzVdXHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBTVkcuTnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlLnZhbHVlT2YoKVxyXG4gICAgICAgIHRoaXMudW5pdCAgPSB2YWx1ZS51bml0XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIC8vIEFkZCBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBTdHJpbmdhbGl6ZVxyXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIHRoaXMudW5pdCA9PSAnJScgP1xyXG4gICAgICAgICAgfn4odGhpcy52YWx1ZSAqIDFlOCkgLyAxZTY6XHJcbiAgICAgICAgdGhpcy51bml0ID09ICdzJyA/XHJcbiAgICAgICAgICB0aGlzLnZhbHVlIC8gMWUzIDpcclxuICAgICAgICAgIHRoaXMudmFsdWVcclxuICAgICAgKSArIHRoaXMudW5pdFxyXG4gICAgfVxyXG4gICwgdG9KU09OOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKVxyXG4gICAgfVxyXG4gICwgLy8gQ29udmVydCB0byBwcmltaXRpdmVcclxuICAgIHZhbHVlT2Y6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZVxyXG4gICAgfVxyXG4gICAgLy8gQWRkIG51bWJlclxyXG4gICwgcGx1czogZnVuY3Rpb24obnVtYmVyKSB7XHJcbiAgICAgIG51bWJlciA9IG5ldyBTVkcuTnVtYmVyKG51bWJlcilcclxuICAgICAgcmV0dXJuIG5ldyBTVkcuTnVtYmVyKHRoaXMgKyBudW1iZXIsIHRoaXMudW5pdCB8fCBudW1iZXIudW5pdClcclxuICAgIH1cclxuICAgIC8vIFN1YnRyYWN0IG51bWJlclxyXG4gICwgbWludXM6IGZ1bmN0aW9uKG51bWJlcikge1xyXG4gICAgICBudW1iZXIgPSBuZXcgU1ZHLk51bWJlcihudW1iZXIpXHJcbiAgICAgIHJldHVybiBuZXcgU1ZHLk51bWJlcih0aGlzIC0gbnVtYmVyLCB0aGlzLnVuaXQgfHwgbnVtYmVyLnVuaXQpXHJcbiAgICB9XHJcbiAgICAvLyBNdWx0aXBseSBudW1iZXJcclxuICAsIHRpbWVzOiBmdW5jdGlvbihudW1iZXIpIHtcclxuICAgICAgbnVtYmVyID0gbmV3IFNWRy5OdW1iZXIobnVtYmVyKVxyXG4gICAgICByZXR1cm4gbmV3IFNWRy5OdW1iZXIodGhpcyAqIG51bWJlciwgdGhpcy51bml0IHx8IG51bWJlci51bml0KVxyXG4gICAgfVxyXG4gICAgLy8gRGl2aWRlIG51bWJlclxyXG4gICwgZGl2aWRlOiBmdW5jdGlvbihudW1iZXIpIHtcclxuICAgICAgbnVtYmVyID0gbmV3IFNWRy5OdW1iZXIobnVtYmVyKVxyXG4gICAgICByZXR1cm4gbmV3IFNWRy5OdW1iZXIodGhpcyAvIG51bWJlciwgdGhpcy51bml0IHx8IG51bWJlci51bml0KVxyXG4gICAgfVxyXG4gICAgLy8gQ29udmVydCB0byBkaWZmZXJlbnQgdW5pdFxyXG4gICwgdG86IGZ1bmN0aW9uKHVuaXQpIHtcclxuICAgICAgdmFyIG51bWJlciA9IG5ldyBTVkcuTnVtYmVyKHRoaXMpXHJcblxyXG4gICAgICBpZiAodHlwZW9mIHVuaXQgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgIG51bWJlci51bml0ID0gdW5pdFxyXG5cclxuICAgICAgcmV0dXJuIG51bWJlclxyXG4gICAgfVxyXG4gICAgLy8gTWFrZSBudW1iZXIgbW9ycGhhYmxlXHJcbiAgLCBtb3JwaDogZnVuY3Rpb24obnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBuZXcgU1ZHLk51bWJlcihudW1iZXIpXHJcblxyXG4gICAgICBpZihudW1iZXIucmVsYXRpdmUpIHtcclxuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLnZhbHVlICs9IHRoaXMudmFsdWVcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIEdldCBtb3JwaGVkIG51bWJlciBhdCBnaXZlbiBwb3NpdGlvblxyXG4gICwgYXQ6IGZ1bmN0aW9uKHBvcykge1xyXG4gICAgICAvLyBNYWtlIHN1cmUgYSBkZXN0aW5hdGlvbiBpcyBkZWZpbmVkXHJcbiAgICAgIGlmICghdGhpcy5kZXN0aW5hdGlvbikgcmV0dXJuIHRoaXNcclxuXHJcbiAgICAgIC8vIEdlbmVyYXRlIG5ldyBtb3JwaGVkIG51bWJlclxyXG4gICAgICByZXR1cm4gbmV3IFNWRy5OdW1iZXIodGhpcy5kZXN0aW5hdGlvbilcclxuICAgICAgICAgIC5taW51cyh0aGlzKVxyXG4gICAgICAgICAgLnRpbWVzKHBvcylcclxuICAgICAgICAgIC5wbHVzKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gIH1cclxufSlcclxuXG5cclxuU1ZHLkVsZW1lbnQgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6IGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgIC8vIG1ha2Ugc3Ryb2tlIHZhbHVlIGFjY2Vzc2libGUgZHluYW1pY2FsbHlcclxuICAgIHRoaXMuX3N0cm9rZSA9IFNWRy5kZWZhdWx0cy5hdHRycy5zdHJva2VcclxuICAgIHRoaXMuX2V2ZW50ID0gbnVsbFxyXG4gICAgdGhpcy5fZXZlbnRzID0ge31cclxuXHJcbiAgICAvLyBpbml0aWFsaXplIGRhdGEgb2JqZWN0XHJcbiAgICB0aGlzLmRvbSA9IHt9XHJcblxyXG4gICAgLy8gY3JlYXRlIGNpcmN1bGFyIHJlZmVyZW5jZVxyXG4gICAgaWYgKHRoaXMubm9kZSA9IG5vZGUpIHtcclxuICAgICAgdGhpcy50eXBlID0gbm9kZS5ub2RlTmFtZVxyXG4gICAgICB0aGlzLm5vZGUuaW5zdGFuY2UgPSB0aGlzXHJcbiAgICAgIHRoaXMuX2V2ZW50cyA9IG5vZGUuX2V2ZW50cyB8fCB7fVxyXG5cclxuICAgICAgLy8gc3RvcmUgY3VycmVudCBhdHRyaWJ1dGUgdmFsdWVcclxuICAgICAgdGhpcy5fc3Ryb2tlID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ3N0cm9rZScpIHx8IHRoaXMuX3N0cm9rZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIGNsYXNzIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIE1vdmUgb3ZlciB4LWF4aXNcclxuICAgIHg6IGZ1bmN0aW9uKHgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cigneCcsIHgpXHJcbiAgICB9XHJcbiAgICAvLyBNb3ZlIG92ZXIgeS1heGlzXHJcbiAgLCB5OiBmdW5jdGlvbih5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ3knLCB5KVxyXG4gICAgfVxyXG4gICAgLy8gTW92ZSBieSBjZW50ZXIgb3ZlciB4LWF4aXNcclxuICAsIGN4OiBmdW5jdGlvbih4KSB7XHJcbiAgICAgIHJldHVybiB4ID09IG51bGwgPyB0aGlzLngoKSArIHRoaXMud2lkdGgoKSAvIDIgOiB0aGlzLngoeCAtIHRoaXMud2lkdGgoKSAvIDIpXHJcbiAgICB9XHJcbiAgICAvLyBNb3ZlIGJ5IGNlbnRlciBvdmVyIHktYXhpc1xyXG4gICwgY3k6IGZ1bmN0aW9uKHkpIHtcclxuICAgICAgcmV0dXJuIHkgPT0gbnVsbCA/IHRoaXMueSgpICsgdGhpcy5oZWlnaHQoKSAvIDIgOiB0aGlzLnkoeSAtIHRoaXMuaGVpZ2h0KCkgLyAyKVxyXG4gICAgfVxyXG4gICAgLy8gTW92ZSBlbGVtZW50IHRvIGdpdmVuIHggYW5kIHkgdmFsdWVzXHJcbiAgLCBtb3ZlOiBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLngoeCkueSh5KVxyXG4gICAgfVxyXG4gICAgLy8gTW92ZSBlbGVtZW50IGJ5IGl0cyBjZW50ZXJcclxuICAsIGNlbnRlcjogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jeCh4KS5jeSh5KVxyXG4gICAgfVxyXG4gICAgLy8gU2V0IHdpZHRoIG9mIGVsZW1lbnRcclxuICAsIHdpZHRoOiBmdW5jdGlvbih3aWR0aCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCd3aWR0aCcsIHdpZHRoKVxyXG4gICAgfVxyXG4gICAgLy8gU2V0IGhlaWdodCBvZiBlbGVtZW50XHJcbiAgLCBoZWlnaHQ6IGZ1bmN0aW9uKGhlaWdodCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXHJcbiAgICB9XHJcbiAgICAvLyBTZXQgZWxlbWVudCBzaXplIHRvIGdpdmVuIHdpZHRoIGFuZCBoZWlnaHRcclxuICAsIHNpemU6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgdmFyIHAgPSBwcm9wb3J0aW9uYWxTaXplKHRoaXMsIHdpZHRoLCBoZWlnaHQpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgICAgIC53aWR0aChuZXcgU1ZHLk51bWJlcihwLndpZHRoKSlcclxuICAgICAgICAuaGVpZ2h0KG5ldyBTVkcuTnVtYmVyKHAuaGVpZ2h0KSlcclxuICAgIH1cclxuICAgIC8vIENsb25lIGVsZW1lbnRcclxuICAsIGNsb25lOiBmdW5jdGlvbihwYXJlbnQpIHtcclxuICAgICAgLy8gd3JpdGUgZG9tIGRhdGEgdG8gdGhlIGRvbSBzbyB0aGUgY2xvbmUgY2FuIHBpY2t1cCB0aGUgZGF0YVxyXG4gICAgICB0aGlzLndyaXRlRGF0YVRvRG9tKClcclxuXHJcbiAgICAgIC8vIGNsb25lIGVsZW1lbnQgYW5kIGFzc2lnbiBuZXcgaWRcclxuICAgICAgdmFyIGNsb25lID0gYXNzaWduTmV3SWQodGhpcy5ub2RlLmNsb25lTm9kZSh0cnVlKSlcclxuXHJcbiAgICAgIC8vIGluc2VydCB0aGUgY2xvbmUgaW4gdGhlIGdpdmVuIHBhcmVudCBvciBhZnRlciBteXNlbGZcclxuICAgICAgaWYocGFyZW50KSBwYXJlbnQuYWRkKGNsb25lKVxyXG4gICAgICBlbHNlIHRoaXMuYWZ0ZXIoY2xvbmUpXHJcblxyXG4gICAgICByZXR1cm4gY2xvbmVcclxuICAgIH1cclxuICAgIC8vIFJlbW92ZSBlbGVtZW50XHJcbiAgLCByZW1vdmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5wYXJlbnQoKSlcclxuICAgICAgICB0aGlzLnBhcmVudCgpLnJlbW92ZUVsZW1lbnQodGhpcylcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBSZXBsYWNlIGVsZW1lbnRcclxuICAsIHJlcGxhY2U6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5hZnRlcihlbGVtZW50KS5yZW1vdmUoKVxyXG5cclxuICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgIH1cclxuICAgIC8vIEFkZCBlbGVtZW50IHRvIGdpdmVuIGNvbnRhaW5lciBhbmQgcmV0dXJuIHNlbGZcclxuICAsIGFkZFRvOiBmdW5jdGlvbihwYXJlbnQpIHtcclxuICAgICAgcmV0dXJuIHBhcmVudC5wdXQodGhpcylcclxuICAgIH1cclxuICAgIC8vIEFkZCBlbGVtZW50IHRvIGdpdmVuIGNvbnRhaW5lciBhbmQgcmV0dXJuIGNvbnRhaW5lclxyXG4gICwgcHV0SW46IGZ1bmN0aW9uKHBhcmVudCkge1xyXG4gICAgICByZXR1cm4gcGFyZW50LmFkZCh0aGlzKVxyXG4gICAgfVxyXG4gICAgLy8gR2V0IC8gc2V0IGlkXHJcbiAgLCBpZDogZnVuY3Rpb24oaWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cignaWQnLCBpZClcclxuICAgIH1cclxuICAgIC8vIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBwb2ludCBpbnNpZGUgdGhlIGJvdW5kaW5nIGJveCBvZiB0aGUgZWxlbWVudFxyXG4gICwgaW5zaWRlOiBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICAgIHZhciBib3ggPSB0aGlzLmJib3goKVxyXG5cclxuICAgICAgcmV0dXJuIHggPiBib3gueFxyXG4gICAgICAgICAgJiYgeSA+IGJveC55XHJcbiAgICAgICAgICAmJiB4IDwgYm94LnggKyBib3gud2lkdGhcclxuICAgICAgICAgICYmIHkgPCBib3gueSArIGJveC5oZWlnaHRcclxuICAgIH1cclxuICAgIC8vIFNob3cgZWxlbWVudFxyXG4gICwgc2hvdzogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0eWxlKCdkaXNwbGF5JywgJycpXHJcbiAgICB9XHJcbiAgICAvLyBIaWRlIGVsZW1lbnRcclxuICAsIGhpZGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdHlsZSgnZGlzcGxheScsICdub25lJylcclxuICAgIH1cclxuICAgIC8vIElzIGVsZW1lbnQgdmlzaWJsZT9cclxuICAsIHZpc2libGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdHlsZSgnZGlzcGxheScpICE9ICdub25lJ1xyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJuIGlkIG9uIHN0cmluZyBjb252ZXJzaW9uXHJcbiAgLCB0b1N0cmluZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ2lkJylcclxuICAgIH1cclxuICAgIC8vIFJldHVybiBhcnJheSBvZiBjbGFzc2VzIG9uIHRoZSBub2RlXHJcbiAgLCBjbGFzc2VzOiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGF0dHIgPSB0aGlzLmF0dHIoJ2NsYXNzJylcclxuXHJcbiAgICAgIHJldHVybiBhdHRyID09IG51bGwgPyBbXSA6IGF0dHIudHJpbSgpLnNwbGl0KFNWRy5yZWdleC5kZWxpbWl0ZXIpXHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gdHJ1ZSBpZiBjbGFzcyBleGlzdHMgb24gdGhlIG5vZGUsIGZhbHNlIG90aGVyd2lzZVxyXG4gICwgaGFzQ2xhc3M6IGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2xhc3NlcygpLmluZGV4T2YobmFtZSkgIT0gLTFcclxuICAgIH1cclxuICAgIC8vIEFkZCBjbGFzcyB0byB0aGUgbm9kZVxyXG4gICwgYWRkQ2xhc3M6IGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgaWYgKCF0aGlzLmhhc0NsYXNzKG5hbWUpKSB7XHJcbiAgICAgICAgdmFyIGFycmF5ID0gdGhpcy5jbGFzc2VzKClcclxuICAgICAgICBhcnJheS5wdXNoKG5hbWUpXHJcbiAgICAgICAgdGhpcy5hdHRyKCdjbGFzcycsIGFycmF5LmpvaW4oJyAnKSlcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIFJlbW92ZSBjbGFzcyBmcm9tIHRoZSBub2RlXHJcbiAgLCByZW1vdmVDbGFzczogZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICBpZiAodGhpcy5oYXNDbGFzcyhuYW1lKSkge1xyXG4gICAgICAgIHRoaXMuYXR0cignY2xhc3MnLCB0aGlzLmNsYXNzZXMoKS5maWx0ZXIoZnVuY3Rpb24oYykge1xyXG4gICAgICAgICAgcmV0dXJuIGMgIT0gbmFtZVxyXG4gICAgICAgIH0pLmpvaW4oJyAnKSlcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIFRvZ2dsZSB0aGUgcHJlc2VuY2Ugb2YgYSBjbGFzcyBvbiB0aGUgbm9kZVxyXG4gICwgdG9nZ2xlQ2xhc3M6IGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGFzQ2xhc3MobmFtZSkgPyB0aGlzLnJlbW92ZUNsYXNzKG5hbWUpIDogdGhpcy5hZGRDbGFzcyhuYW1lKVxyXG4gICAgfVxyXG4gICAgLy8gR2V0IHJlZmVyZW5jZWQgZWxlbWVudCBmb3JtIGF0dHJpYnV0ZSB2YWx1ZVxyXG4gICwgcmVmZXJlbmNlOiBmdW5jdGlvbihhdHRyKSB7XHJcbiAgICAgIHJldHVybiBTVkcuZ2V0KHRoaXMuYXR0cihhdHRyKSlcclxuICAgIH1cclxuICAgIC8vIFJldHVybnMgdGhlIHBhcmVudCBlbGVtZW50IGluc3RhbmNlXHJcbiAgLCBwYXJlbnQ6IGZ1bmN0aW9uKHR5cGUpIHtcclxuICAgICAgdmFyIHBhcmVudCA9IHRoaXNcclxuXHJcbiAgICAgIC8vIGNoZWNrIGZvciBwYXJlbnRcclxuICAgICAgaWYoIXBhcmVudC5ub2RlLnBhcmVudE5vZGUpIHJldHVybiBudWxsXHJcblxyXG4gICAgICAvLyBnZXQgcGFyZW50IGVsZW1lbnRcclxuICAgICAgcGFyZW50ID0gU1ZHLmFkb3B0KHBhcmVudC5ub2RlLnBhcmVudE5vZGUpXHJcblxyXG4gICAgICBpZighdHlwZSkgcmV0dXJuIHBhcmVudFxyXG5cclxuICAgICAgLy8gbG9vcCB0cm91Z2ggYW5jZXN0b3JzIGlmIHR5cGUgaXMgZ2l2ZW5cclxuICAgICAgd2hpbGUocGFyZW50ICYmIHBhcmVudC5ub2RlIGluc3RhbmNlb2Ygd2luZG93LlNWR0VsZW1lbnQpe1xyXG4gICAgICAgIGlmKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHBhcmVudC5tYXRjaGVzKHR5cGUpIDogcGFyZW50IGluc3RhbmNlb2YgdHlwZSkgcmV0dXJuIHBhcmVudFxyXG4gICAgICAgIGlmKCFwYXJlbnQubm9kZS5wYXJlbnROb2RlIHx8IHBhcmVudC5ub2RlLnBhcmVudE5vZGUubm9kZU5hbWUgPT0gJyNkb2N1bWVudCcgfHwgcGFyZW50Lm5vZGUucGFyZW50Tm9kZS5ub2RlTmFtZSA9PSAnI2RvY3VtZW50LWZyYWdtZW50JykgcmV0dXJuIG51bGwgLy8gIzc1OSwgIzcyMFxyXG4gICAgICAgIHBhcmVudCA9IFNWRy5hZG9wdChwYXJlbnQubm9kZS5wYXJlbnROb2RlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBHZXQgcGFyZW50IGRvY3VtZW50XHJcbiAgLCBkb2M6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIFNWRy5Eb2MgPyB0aGlzIDogdGhpcy5wYXJlbnQoU1ZHLkRvYylcclxuICAgIH1cclxuICAgIC8vIHJldHVybiBhcnJheSBvZiBhbGwgYW5jZXN0b3JzIG9mIGdpdmVuIHR5cGUgdXAgdG8gdGhlIHJvb3Qgc3ZnXHJcbiAgLCBwYXJlbnRzOiBmdW5jdGlvbih0eXBlKSB7XHJcbiAgICAgIHZhciBwYXJlbnRzID0gW10sIHBhcmVudCA9IHRoaXNcclxuXHJcbiAgICAgIGRve1xyXG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQodHlwZSlcclxuICAgICAgICBpZighcGFyZW50IHx8ICFwYXJlbnQubm9kZSkgYnJlYWtcclxuXHJcbiAgICAgICAgcGFyZW50cy5wdXNoKHBhcmVudClcclxuICAgICAgfSB3aGlsZShwYXJlbnQucGFyZW50KVxyXG5cclxuICAgICAgcmV0dXJuIHBhcmVudHNcclxuICAgIH1cclxuICAgIC8vIG1hdGNoZXMgdGhlIGVsZW1lbnQgdnMgYSBjc3Mgc2VsZWN0b3JcclxuICAsIG1hdGNoZXM6IGZ1bmN0aW9uKHNlbGVjdG9yKXtcclxuICAgICAgcmV0dXJuIG1hdGNoZXModGhpcy5ub2RlLCBzZWxlY3RvcilcclxuICAgIH1cclxuICAgIC8vIFJldHVybnMgdGhlIHN2ZyBub2RlIHRvIGNhbGwgbmF0aXZlIHN2ZyBtZXRob2RzIG9uIGl0XHJcbiAgLCBuYXRpdmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5ub2RlXHJcbiAgICB9XHJcbiAgICAvLyBJbXBvcnQgcmF3IHN2Z1xyXG4gICwgc3ZnOiBmdW5jdGlvbihzdmcpIHtcclxuICAgICAgLy8gY3JlYXRlIHRlbXBvcmFyeSBob2xkZXJcclxuICAgICAgdmFyIHdlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKVxyXG5cclxuICAgICAgLy8gYWN0IGFzIGEgc2V0dGVyIGlmIHN2ZyBpcyBnaXZlblxyXG4gICAgICBpZiAoc3ZnICYmIHRoaXMgaW5zdGFuY2VvZiBTVkcuUGFyZW50KSB7XHJcbiAgICAgICAgLy8gZHVtcCByYXcgc3ZnXHJcbiAgICAgICAgd2VsbC5pbm5lckhUTUwgPSAnPHN2Zz4nICsgc3ZnLnJlcGxhY2UoL1xcbi8sICcnKS5yZXBsYWNlKC88KFtcXHc6LV0rKShbXjxdKz8pXFwvPi9nLCAnPCQxJDI+PC8kMT4nKSArICc8L3N2Zz4nXHJcblxyXG4gICAgICAgIC8vIHRyYW5zcGxhbnQgbm9kZXNcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaWwgPSB3ZWxsLmZpcnN0Q2hpbGQuY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHdlbGwuZmlyc3RDaGlsZC5maXJzdENoaWxkKVxyXG5cclxuICAgICAgLy8gb3RoZXJ3aXNlIGFjdCBhcyBhIGdldHRlclxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGNyZWF0ZSBhIHdyYXBwaW5nIHN2ZyBlbGVtZW50IGluIGNhc2Ugb2YgcGFydGlhbCBjb250ZW50XHJcbiAgICAgICAgd2VsbC5hcHBlbmRDaGlsZChzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKSlcclxuXHJcbiAgICAgICAgLy8gd3JpdGUgc3ZnanMgZGF0YSB0byB0aGUgZG9tXHJcbiAgICAgICAgdGhpcy53cml0ZURhdGFUb0RvbSgpXHJcblxyXG4gICAgICAgIC8vIGluc2VydCBhIGNvcHkgb2YgdGhpcyBub2RlXHJcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHRoaXMubm9kZS5jbG9uZU5vZGUodHJ1ZSkpXHJcblxyXG4gICAgICAgIC8vIHJldHVybiB0YXJnZXQgZWxlbWVudFxyXG4gICAgICAgIHJldHVybiB3ZWxsLmlubmVySFRNTC5yZXBsYWNlKC9ePHN2Zz4vLCAnJykucmVwbGFjZSgvPFxcL3N2Zz4kLywgJycpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgLy8gd3JpdGUgc3ZnanMgZGF0YSB0byB0aGUgZG9tXHJcbiAgLCB3cml0ZURhdGFUb0RvbTogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAvLyBkdW1wIHZhcmlhYmxlcyByZWN1cnNpdmVseVxyXG4gICAgICBpZih0aGlzLmVhY2ggfHwgdGhpcy5saW5lcyl7XHJcbiAgICAgICAgdmFyIGZuID0gdGhpcy5lYWNoID8gdGhpcyA6IHRoaXMubGluZXMoKTtcclxuICAgICAgICBmbi5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICB0aGlzLndyaXRlRGF0YVRvRG9tKClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyByZW1vdmUgcHJldmlvdXNseSBzZXQgZGF0YVxyXG4gICAgICB0aGlzLm5vZGUucmVtb3ZlQXR0cmlidXRlKCdzdmdqczpkYXRhJylcclxuXHJcbiAgICAgIGlmKE9iamVjdC5rZXlzKHRoaXMuZG9tKS5sZW5ndGgpXHJcbiAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnc3ZnanM6ZGF0YScsIEpTT04uc3RyaW5naWZ5KHRoaXMuZG9tKSkgLy8gc2VlICM0MjhcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgLy8gc2V0IGdpdmVuIGRhdGEgdG8gdGhlIGVsZW1lbnRzIGRhdGEgcHJvcGVydHlcclxuICAsIHNldERhdGE6IGZ1bmN0aW9uKG8pe1xyXG4gICAgICB0aGlzLmRvbSA9IG9cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAsIGlzOiBmdW5jdGlvbihvYmope1xyXG4gICAgICByZXR1cm4gaXModGhpcywgb2JqKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXG5TVkcuZWFzaW5nID0ge1xyXG4gICctJzogZnVuY3Rpb24ocG9zKXtyZXR1cm4gcG9zfVxyXG4sICc8Pic6ZnVuY3Rpb24ocG9zKXtyZXR1cm4gLU1hdGguY29zKHBvcyAqIE1hdGguUEkpIC8gMiArIDAuNX1cclxuLCAnPic6IGZ1bmN0aW9uKHBvcyl7cmV0dXJuICBNYXRoLnNpbihwb3MgKiBNYXRoLlBJIC8gMil9XHJcbiwgJzwnOiBmdW5jdGlvbihwb3Mpe3JldHVybiAtTWF0aC5jb3MocG9zICogTWF0aC5QSSAvIDIpICsgMX1cclxufVxyXG5cclxuU1ZHLm1vcnBoID0gZnVuY3Rpb24ocG9zKXtcclxuICByZXR1cm4gZnVuY3Rpb24oZnJvbSwgdG8pIHtcclxuICAgIHJldHVybiBuZXcgU1ZHLk1vcnBoT2JqKGZyb20sIHRvKS5hdChwb3MpXHJcbiAgfVxyXG59XHJcblxyXG5TVkcuU2l0dWF0aW9uID0gU1ZHLmludmVudCh7XHJcblxyXG4gIGNyZWF0ZTogZnVuY3Rpb24obyl7XHJcbiAgICB0aGlzLmluaXQgPSBmYWxzZVxyXG4gICAgdGhpcy5yZXZlcnNlZCA9IGZhbHNlXHJcbiAgICB0aGlzLnJldmVyc2luZyA9IGZhbHNlXHJcblxyXG4gICAgdGhpcy5kdXJhdGlvbiA9IG5ldyBTVkcuTnVtYmVyKG8uZHVyYXRpb24pLnZhbHVlT2YoKVxyXG4gICAgdGhpcy5kZWxheSA9IG5ldyBTVkcuTnVtYmVyKG8uZGVsYXkpLnZhbHVlT2YoKVxyXG5cclxuICAgIHRoaXMuc3RhcnQgPSArbmV3IERhdGUoKSArIHRoaXMuZGVsYXlcclxuICAgIHRoaXMuZmluaXNoID0gdGhpcy5zdGFydCArIHRoaXMuZHVyYXRpb25cclxuICAgIHRoaXMuZWFzZSA9IG8uZWFzZVxyXG5cclxuICAgIC8vIHRoaXMubG9vcCBpcyBpbmNyZW1lbnRlZCBmcm9tIDAgdG8gdGhpcy5sb29wc1xyXG4gICAgLy8gaXQgaXMgYWxzbyBpbmNyZW1lbnRlZCB3aGVuIGluIGFuIGluZmluaXRlIGxvb3AgKHdoZW4gdGhpcy5sb29wcyBpcyB0cnVlKVxyXG4gICAgdGhpcy5sb29wID0gMFxyXG4gICAgdGhpcy5sb29wcyA9IGZhbHNlXHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25zID0ge1xyXG4gICAgICAvLyBmdW5jdGlvblRvQ2FsbDogW2xpc3Qgb2YgbW9ycGhhYmxlIG9iamVjdHNdXHJcbiAgICAgIC8vIGUuZy4gbW92ZTogW1NWRy5OdW1iZXIsIFNWRy5OdW1iZXJdXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hdHRycyA9IHtcclxuICAgICAgLy8gaG9sZHMgYWxsIGF0dHJpYnV0ZXMgd2hpY2ggYXJlIG5vdCByZXByZXNlbnRlZCBmcm9tIGEgZnVuY3Rpb24gc3ZnLmpzIHByb3ZpZGVzXHJcbiAgICAgIC8vIGUuZy4gc29tZUF0dHI6IFNWRy5OdW1iZXJcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0eWxlcyA9IHtcclxuICAgICAgLy8gaG9sZHMgYWxsIHN0eWxlcyB3aGljaCBzaG91bGQgYmUgYW5pbWF0ZWRcclxuICAgICAgLy8gZS5nLiBmaWxsLWNvbG9yOiBTVkcuQ29sb3JcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRyYW5zZm9ybXMgPSBbXHJcbiAgICAgIC8vIGhvbGRzIGFsbCB0cmFuc2Zvcm1hdGlvbnMgYXMgdHJhbnNmb3JtYXRpb24gb2JqZWN0c1xyXG4gICAgICAvLyBlLmcuIFtTVkcuUm90YXRlLCBTVkcuVHJhbnNsYXRlLCBTVkcuTWF0cml4XVxyXG4gICAgXVxyXG5cclxuICAgIHRoaXMub25jZSA9IHtcclxuICAgICAgLy8gZnVuY3Rpb25zIHRvIGZpcmUgYXQgYSBzcGVjaWZpYyBwb3NpdGlvblxyXG4gICAgICAvLyBlLmcuIFwiMC41XCI6IGZ1bmN0aW9uIGZvbygpe31cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufSlcclxuXHJcblxyXG5TVkcuRlggPSBTVkcuaW52ZW50KHtcclxuXHJcbiAgY3JlYXRlOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICB0aGlzLl90YXJnZXQgPSBlbGVtZW50XHJcbiAgICB0aGlzLnNpdHVhdGlvbnMgPSBbXVxyXG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZVxyXG4gICAgdGhpcy5zaXR1YXRpb24gPSBudWxsXHJcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlXHJcbiAgICB0aGlzLmxhc3RQb3MgPSAwXHJcbiAgICB0aGlzLnBvcyA9IDBcclxuICAgIC8vIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiBhbiBhbmltYXRpb24gaXMgaXRzIHBvc2l0aW9uIGluIHRoZSBjb250ZXh0IG9mIGl0cyBjb21wbGV0ZSBkdXJhdGlvbiAoaW5jbHVkaW5nIGRlbGF5IGFuZCBsb29wcylcclxuICAgIC8vIFdoZW4gcGVyZm9ybWluZyBhIGRlbGF5LCBhYnNQb3MgaXMgYmVsb3cgMCBhbmQgd2hlbiBwZXJmb3JtaW5nIGEgbG9vcCwgaXRzIHZhbHVlIGlzIGFib3ZlIDFcclxuICAgIHRoaXMuYWJzUG9zID0gMFxyXG4gICAgdGhpcy5fc3BlZWQgPSAxXHJcbiAgfVxyXG5cclxuLCBleHRlbmQ6IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHMgb3IgcmV0dXJucyB0aGUgdGFyZ2V0IG9mIHRoaXMgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gbyBvYmplY3QgfHwgbnVtYmVyIEluIGNhc2Ugb2YgT2JqZWN0IGl0IGhvbGRzIGFsbCBwYXJhbWV0ZXJzLiBJbiBjYXNlIG9mIG51bWJlciBpdHMgdGhlIGR1cmF0aW9uIG9mIHRoZSBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBlYXNlIGZ1bmN0aW9uIHx8IHN0cmluZyBGdW5jdGlvbiB3aGljaCBzaG91bGQgYmUgdXNlZCBmb3IgZWFzaW5nIG9yIGVhc2luZyBrZXl3b3JkXHJcbiAgICAgKiBAcGFyYW0gZGVsYXkgTnVtYmVyIGluZGljYXRpbmcgdGhlIGRlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHN0YXJ0c1xyXG4gICAgICogQHJldHVybiB0YXJnZXQgfHwgdGhpc1xyXG4gICAgICovXHJcbiAgICBhbmltYXRlOiBmdW5jdGlvbihvLCBlYXNlLCBkZWxheSl7XHJcblxyXG4gICAgICBpZih0eXBlb2YgbyA9PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgZWFzZSA9IG8uZWFzZVxyXG4gICAgICAgIGRlbGF5ID0gby5kZWxheVxyXG4gICAgICAgIG8gPSBvLmR1cmF0aW9uXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBzaXR1YXRpb24gPSBuZXcgU1ZHLlNpdHVhdGlvbih7XHJcbiAgICAgICAgZHVyYXRpb246IG8gfHwgMTAwMCxcclxuICAgICAgICBkZWxheTogZGVsYXkgfHwgMCxcclxuICAgICAgICBlYXNlOiBTVkcuZWFzaW5nW2Vhc2UgfHwgJy0nXSB8fCBlYXNlXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0aGlzLnF1ZXVlKHNpdHVhdGlvbilcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIGEgZGVsYXkgYmVmb3JlIHRoZSBuZXh0IGVsZW1lbnQgb2YgdGhlIHF1ZXVlIGlzIGNhbGxlZFxyXG4gICAgICogQHBhcmFtIGRlbGF5IER1cmF0aW9uIG9mIGRlbGF5IGluIG1pbGxpc2Vjb25kc1xyXG4gICAgICogQHJldHVybiB0aGlzLnRhcmdldCgpXHJcbiAgICAgKi9cclxuICAsIGRlbGF5OiBmdW5jdGlvbihkZWxheSl7XHJcbiAgICAgIC8vIFRoZSBkZWxheSBpcyBwZXJmb3JtZWQgYnkgYW4gZW1wdHkgc2l0dWF0aW9uIHdpdGggaXRzIGR1cmF0aW9uXHJcbiAgICAgIC8vIGF0dHJpYnV0ZSBzZXQgdG8gdGhlIGR1cmF0aW9uIG9mIHRoZSBkZWxheVxyXG4gICAgICB2YXIgc2l0dWF0aW9uID0gbmV3IFNWRy5TaXR1YXRpb24oe1xyXG4gICAgICAgIGR1cmF0aW9uOiBkZWxheSxcclxuICAgICAgICBkZWxheTogMCxcclxuICAgICAgICBlYXNlOiBTVkcuZWFzaW5nWyctJ11cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnF1ZXVlKHNpdHVhdGlvbilcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHMgb3IgcmV0dXJucyB0aGUgdGFyZ2V0IG9mIHRoaXMgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gbnVsbCB8fCB0YXJnZXQgU1ZHLkVsZW1lbnQgd2hpY2ggc2hvdWxkIGJlIHNldCBhcyBuZXcgdGFyZ2V0XHJcbiAgICAgKiBAcmV0dXJuIHRhcmdldCB8fCB0aGlzXHJcbiAgICAgKi9cclxuICAsIHRhcmdldDogZnVuY3Rpb24odGFyZ2V0KXtcclxuICAgICAgaWYodGFyZ2V0ICYmIHRhcmdldCBpbnN0YW5jZW9mIFNWRy5FbGVtZW50KXtcclxuICAgICAgICB0aGlzLl90YXJnZXQgPSB0YXJnZXRcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJucyB0aGUgYWJzb2x1dGUgcG9zaXRpb24gYXQgYSBnaXZlbiB0aW1lXHJcbiAgLCB0aW1lVG9BYnNQb3M6IGZ1bmN0aW9uKHRpbWVzdGFtcCl7XHJcbiAgICAgIHJldHVybiAodGltZXN0YW1wIC0gdGhpcy5zaXR1YXRpb24uc3RhcnQpIC8gKHRoaXMuc2l0dWF0aW9uLmR1cmF0aW9uL3RoaXMuX3NwZWVkKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybnMgdGhlIHRpbWVzdGFtcCBmcm9tIGEgZ2l2ZW4gYWJzb2x1dGUgcG9zaXRvblxyXG4gICwgYWJzUG9zVG9UaW1lOiBmdW5jdGlvbihhYnNQb3Mpe1xyXG4gICAgICByZXR1cm4gdGhpcy5zaXR1YXRpb24uZHVyYXRpb24vdGhpcy5fc3BlZWQgKiBhYnNQb3MgKyB0aGlzLnNpdHVhdGlvbi5zdGFydFxyXG4gICAgfVxyXG5cclxuICAgIC8vIHN0YXJ0cyB0aGUgYW5pbWF0aW9ubG9vcFxyXG4gICwgc3RhcnRBbmltRnJhbWU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuc3RvcEFuaW1GcmFtZSgpXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7IHRoaXMuc3RlcCgpIH0uYmluZCh0aGlzKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBjYW5jZWxzIHRoZSBhbmltYXRpb25mcmFtZVxyXG4gICwgc3RvcEFuaW1GcmFtZTogZnVuY3Rpb24oKXtcclxuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpXHJcbiAgICB9XHJcblxyXG4gICAgLy8ga2lja3Mgb2ZmIHRoZSBhbmltYXRpb24gLSBvbmx5IGRvZXMgc29tZXRoaW5nIHdoZW4gdGhlIHF1ZXVlIGlzIGN1cnJlbnRseSBub3QgYWN0aXZlIGFuZCBhdCBsZWFzdCBvbmUgc2l0dWF0aW9uIGlzIHNldFxyXG4gICwgc3RhcnQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vIGRvbnQgc3RhcnQgaWYgYWxyZWFkeSBzdGFydGVkXHJcbiAgICAgIGlmKCF0aGlzLmFjdGl2ZSAmJiB0aGlzLnNpdHVhdGlvbil7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5zdGFydEN1cnJlbnQoKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHN0YXJ0IHRoZSBjdXJyZW50IHNpdHVhdGlvblxyXG4gICwgc3RhcnRDdXJyZW50OiBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLnNpdHVhdGlvbi5zdGFydCA9ICtuZXcgRGF0ZSArIHRoaXMuc2l0dWF0aW9uLmRlbGF5L3RoaXMuX3NwZWVkXHJcbiAgICAgIHRoaXMuc2l0dWF0aW9uLmZpbmlzaCA9IHRoaXMuc2l0dWF0aW9uLnN0YXJ0ICsgdGhpcy5zaXR1YXRpb24uZHVyYXRpb24vdGhpcy5fc3BlZWRcclxuICAgICAgcmV0dXJuIHRoaXMuaW5pdEFuaW1hdGlvbnMoKS5zdGVwKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZHMgYSBmdW5jdGlvbiAvIFNpdHVhdGlvbiB0byB0aGUgYW5pbWF0aW9uIHF1ZXVlXHJcbiAgICAgKiBAcGFyYW0gZm4gZnVuY3Rpb24gLyBzaXR1YXRpb24gdG8gYWRkXHJcbiAgICAgKiBAcmV0dXJuIHRoaXNcclxuICAgICAqL1xyXG4gICwgcXVldWU6IGZ1bmN0aW9uKGZuKXtcclxuICAgICAgaWYodHlwZW9mIGZuID09ICdmdW5jdGlvbicgfHwgZm4gaW5zdGFuY2VvZiBTVkcuU2l0dWF0aW9uKVxyXG4gICAgICAgIHRoaXMuc2l0dWF0aW9ucy5wdXNoKGZuKVxyXG5cclxuICAgICAgaWYoIXRoaXMuc2l0dWF0aW9uKSB0aGlzLnNpdHVhdGlvbiA9IHRoaXMuc2l0dWF0aW9ucy5zaGlmdCgpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcHVsbHMgbmV4dCBlbGVtZW50IGZyb20gdGhlIHF1ZXVlIGFuZCBleGVjdXRlIGl0XHJcbiAgICAgKiBAcmV0dXJuIHRoaXNcclxuICAgICAqL1xyXG4gICwgZGVxdWV1ZTogZnVuY3Rpb24oKXtcclxuICAgICAgLy8gc3RvcCBjdXJyZW50IGFuaW1hdGlvblxyXG4gICAgICB0aGlzLnN0b3AoKVxyXG5cclxuICAgICAgLy8gZ2V0IG5leHQgYW5pbWF0aW9uIGZyb20gcXVldWVcclxuICAgICAgdGhpcy5zaXR1YXRpb24gPSB0aGlzLnNpdHVhdGlvbnMuc2hpZnQoKVxyXG5cclxuICAgICAgaWYodGhpcy5zaXR1YXRpb24pe1xyXG4gICAgICAgIGlmKHRoaXMuc2l0dWF0aW9uIGluc3RhbmNlb2YgU1ZHLlNpdHVhdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5zdGFydCgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIElmIGl0IGlzIG5vdCBhIFNWRy5TaXR1YXRpb24sIHRoZW4gaXQgaXMgYSBmdW5jdGlvbiwgd2UgZXhlY3V0ZSBpdFxyXG4gICAgICAgICAgdGhpcy5zaXR1YXRpb24uY2FsbCh0aGlzKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGVzIGFsbCBhbmltYXRpb25zIHRvIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBlbGVtZW50XHJcbiAgICAvLyB0aGlzIGlzIGltcG9ydGFudCB3aGVuIG9uZSBwcm9wZXJ0eSBjb3VsZCBiZSBjaGFuZ2VkIGZyb20gYW5vdGhlciBwcm9wZXJ0eVxyXG4gICwgaW5pdEFuaW1hdGlvbnM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgaSwgaiwgc291cmNlXHJcbiAgICAgIHZhciBzID0gdGhpcy5zaXR1YXRpb25cclxuXHJcbiAgICAgIGlmKHMuaW5pdCkgcmV0dXJuIHRoaXNcclxuXHJcbiAgICAgIGZvcihpIGluIHMuYW5pbWF0aW9ucyl7XHJcbiAgICAgICAgc291cmNlID0gdGhpcy50YXJnZXQoKVtpXSgpXHJcblxyXG4gICAgICAgIGlmKCFBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcclxuICAgICAgICAgIHNvdXJjZSA9IFtzb3VyY2VdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighQXJyYXkuaXNBcnJheShzLmFuaW1hdGlvbnNbaV0pKSB7XHJcbiAgICAgICAgICBzLmFuaW1hdGlvbnNbaV0gPSBbcy5hbmltYXRpb25zW2ldXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9pZihzLmFuaW1hdGlvbnNbaV0ubGVuZ3RoID4gc291cmNlLmxlbmd0aCkge1xyXG4gICAgICAgIC8vICBzb3VyY2UuY29uY2F0ID0gc291cmNlLmNvbmNhdChzLmFuaW1hdGlvbnNbaV0uc2xpY2Uoc291cmNlLmxlbmd0aCwgcy5hbmltYXRpb25zW2ldLmxlbmd0aCkpXHJcbiAgICAgICAgLy99XHJcblxyXG4gICAgICAgIGZvcihqID0gc291cmNlLmxlbmd0aDsgai0tOykge1xyXG4gICAgICAgICAgLy8gVGhlIGNvbmRpdGlvbiBpcyBiZWNhdXNlIHNvbWUgbWV0aG9kcyByZXR1cm4gYSBub3JtYWwgbnVtYmVyIGluc3RlYWRcclxuICAgICAgICAgIC8vIG9mIGEgU1ZHLk51bWJlclxyXG4gICAgICAgICAgaWYocy5hbmltYXRpb25zW2ldW2pdIGluc3RhbmNlb2YgU1ZHLk51bWJlcilcclxuICAgICAgICAgICAgc291cmNlW2pdID0gbmV3IFNWRy5OdW1iZXIoc291cmNlW2pdKVxyXG5cclxuICAgICAgICAgIHMuYW5pbWF0aW9uc1tpXVtqXSA9IHNvdXJjZVtqXS5tb3JwaChzLmFuaW1hdGlvbnNbaV1bal0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IoaSBpbiBzLmF0dHJzKXtcclxuICAgICAgICBzLmF0dHJzW2ldID0gbmV3IFNWRy5Nb3JwaE9iaih0aGlzLnRhcmdldCgpLmF0dHIoaSksIHMuYXR0cnNbaV0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvcihpIGluIHMuc3R5bGVzKXtcclxuICAgICAgICBzLnN0eWxlc1tpXSA9IG5ldyBTVkcuTW9ycGhPYmoodGhpcy50YXJnZXQoKS5zdHlsZShpKSwgcy5zdHlsZXNbaV0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHMuaW5pdGlhbFRyYW5zZm9ybWF0aW9uID0gdGhpcy50YXJnZXQoKS5tYXRyaXhpZnkoKVxyXG5cclxuICAgICAgcy5pbml0ID0gdHJ1ZVxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICwgY2xlYXJRdWV1ZTogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5zaXR1YXRpb25zID0gW11cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAsIGNsZWFyQ3VycmVudDogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5zaXR1YXRpb24gPSBudWxsXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvKiogc3RvcHMgdGhlIGFuaW1hdGlvbiBpbW1lZGlhdGVseVxyXG4gICAgICogQHBhcmFtIGp1bXBUb0VuZCBBIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRvIGNvbXBsZXRlIHRoZSBjdXJyZW50IGFuaW1hdGlvbiBpbW1lZGlhdGVseS5cclxuICAgICAqIEBwYXJhbSBjbGVhclF1ZXVlIEEgQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gcmVtb3ZlIHF1ZXVlZCBhbmltYXRpb24gYXMgd2VsbC5cclxuICAgICAqIEByZXR1cm4gdGhpc1xyXG4gICAgICovXHJcbiAgLCBzdG9wOiBmdW5jdGlvbihqdW1wVG9FbmQsIGNsZWFyUXVldWUpe1xyXG4gICAgICB2YXIgYWN0aXZlID0gdGhpcy5hY3RpdmVcclxuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgaWYoY2xlYXJRdWV1ZSl7XHJcbiAgICAgICAgdGhpcy5jbGVhclF1ZXVlKClcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoanVtcFRvRW5kICYmIHRoaXMuc2l0dWF0aW9uKXtcclxuICAgICAgICAvLyBpbml0aWFsaXplIHRoZSBzaXR1YXRpb24gaWYgaXQgd2FzIG5vdFxyXG4gICAgICAgICFhY3RpdmUgJiYgdGhpcy5zdGFydEN1cnJlbnQoKVxyXG4gICAgICAgIHRoaXMuYXRFbmQoKVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnN0b3BBbmltRnJhbWUoKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuY2xlYXJDdXJyZW50KClcclxuICAgIH1cclxuXHJcbiAgICAvKiogcmVzZXRzIHRoZSBlbGVtZW50IHRvIHRoZSBzdGF0ZSB3aGVyZSB0aGUgY3VycmVudCBlbGVtZW50IGhhcyBzdGFydGVkXHJcbiAgICAgKiBAcmV0dXJuIHRoaXNcclxuICAgICAqL1xyXG4gICwgcmVzZXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmKHRoaXMuc2l0dWF0aW9uKXtcclxuICAgICAgICB2YXIgdGVtcCA9IHRoaXMuc2l0dWF0aW9uXHJcbiAgICAgICAgdGhpcy5zdG9wKClcclxuICAgICAgICB0aGlzLnNpdHVhdGlvbiA9IHRlbXBcclxuICAgICAgICB0aGlzLmF0U3RhcnQoKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3RvcCB0aGUgY3VycmVudGx5LXJ1bm5pbmcgYW5pbWF0aW9uLCByZW1vdmUgYWxsIHF1ZXVlZCBhbmltYXRpb25zLCBhbmQgY29tcGxldGUgYWxsIGFuaW1hdGlvbnMgZm9yIHRoZSBlbGVtZW50LlxyXG4gICwgZmluaXNoOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgdGhpcy5zdG9wKHRydWUsIGZhbHNlKVxyXG5cclxuICAgICAgd2hpbGUodGhpcy5kZXF1ZXVlKCkuc2l0dWF0aW9uICYmIHRoaXMuc3RvcCh0cnVlLCBmYWxzZSkpO1xyXG5cclxuICAgICAgdGhpcy5jbGVhclF1ZXVlKCkuY2xlYXJDdXJyZW50KClcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2V0IHRoZSBpbnRlcm5hbCBhbmltYXRpb24gcG9pbnRlciBhdCB0aGUgc3RhcnQgcG9zaXRpb24sIGJlZm9yZSBhbnkgbG9vcHMsIGFuZCB1cGRhdGVzIHRoZSB2aXN1YWxpc2F0aW9uXHJcbiAgLCBhdFN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXQoMCwgdHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgdGhlIGludGVybmFsIGFuaW1hdGlvbiBwb2ludGVyIGF0IHRoZSBlbmQgcG9zaXRpb24sIGFmdGVyIGFsbCB0aGUgbG9vcHMsIGFuZCB1cGRhdGVzIHRoZSB2aXN1YWxpc2F0aW9uXHJcbiAgLCBhdEVuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLnNpdHVhdGlvbi5sb29wcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIC8vIElmIGluIGEgaW5maW5pdGUgbG9vcCwgd2UgZW5kIHRoZSBjdXJyZW50IGl0ZXJhdGlvblxyXG4gICAgICAgIHRoaXMuc2l0dWF0aW9uLmxvb3BzID0gdGhpcy5zaXR1YXRpb24ubG9vcCArIDFcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYodHlwZW9mIHRoaXMuc2l0dWF0aW9uLmxvb3BzID09ICdudW1iZXInKSB7XHJcbiAgICAgICAgLy8gSWYgcGVyZm9ybWluZyBhIGZpbml0ZSBudW1iZXIgb2YgbG9vcHMsIHdlIGdvIGFmdGVyIGFsbCB0aGUgbG9vcHNcclxuICAgICAgICByZXR1cm4gdGhpcy5hdCh0aGlzLnNpdHVhdGlvbi5sb29wcywgdHJ1ZSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBJZiBubyBsb29wcywgd2UganVzdCBnbyBhdCB0aGUgZW5kXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXQoMSwgdHJ1ZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldCB0aGUgaW50ZXJuYWwgYW5pbWF0aW9uIHBvaW50ZXIgdG8gdGhlIHNwZWNpZmllZCBwb3NpdGlvbiBhbmQgdXBkYXRlcyB0aGUgdmlzdWFsaXNhdGlvblxyXG4gICAgLy8gaWYgaXNBYnNQb3MgaXMgdHJ1ZSwgcG9zIGlzIHRyZWF0ZWQgYXMgYW4gYWJzb2x1dGUgcG9zaXRpb25cclxuICAsIGF0OiBmdW5jdGlvbihwb3MsIGlzQWJzUG9zKXtcclxuICAgICAgdmFyIGR1ckRpdlNwZCA9IHRoaXMuc2l0dWF0aW9uLmR1cmF0aW9uL3RoaXMuX3NwZWVkXHJcblxyXG4gICAgICB0aGlzLmFic1BvcyA9IHBvc1xyXG4gICAgICAvLyBJZiBwb3MgaXMgbm90IGFuIGFic29sdXRlIHBvc2l0aW9uLCB3ZSBjb252ZXJ0IGl0IGludG8gb25lXHJcbiAgICAgIGlmICghaXNBYnNQb3MpIHtcclxuICAgICAgICBpZiAodGhpcy5zaXR1YXRpb24ucmV2ZXJzZWQpIHRoaXMuYWJzUG9zID0gMSAtIHRoaXMuYWJzUG9zXHJcbiAgICAgICAgdGhpcy5hYnNQb3MgKz0gdGhpcy5zaXR1YXRpb24ubG9vcFxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNpdHVhdGlvbi5zdGFydCA9ICtuZXcgRGF0ZSAtIHRoaXMuYWJzUG9zICogZHVyRGl2U3BkXHJcbiAgICAgIHRoaXMuc2l0dWF0aW9uLmZpbmlzaCA9IHRoaXMuc2l0dWF0aW9uLnN0YXJ0ICsgZHVyRGl2U3BkXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5zdGVwKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIG9yIHJldHVybnMgdGhlIHNwZWVkIG9mIHRoZSBhbmltYXRpb25zXHJcbiAgICAgKiBAcGFyYW0gc3BlZWQgbnVsbCB8fCBOdW1iZXIgVGhlIG5ldyBzcGVlZCBvZiB0aGUgYW5pbWF0aW9uc1xyXG4gICAgICogQHJldHVybiBOdW1iZXIgfHwgdGhpc1xyXG4gICAgICovXHJcbiAgLCBzcGVlZDogZnVuY3Rpb24oc3BlZWQpe1xyXG4gICAgICBpZiAoc3BlZWQgPT09IDApIHJldHVybiB0aGlzLnBhdXNlKClcclxuXHJcbiAgICAgIGlmIChzcGVlZCkge1xyXG4gICAgICAgIHRoaXMuX3NwZWVkID0gc3BlZWRcclxuICAgICAgICAvLyBXZSB1c2UgYW4gYWJzb2x1dGUgcG9zaXRpb24gaGVyZSBzbyB0aGF0IHNwZWVkIGNhbiBhZmZlY3QgdGhlIGRlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXQodGhpcy5hYnNQb3MsIHRydWUpXHJcbiAgICAgIH0gZWxzZSByZXR1cm4gdGhpcy5fc3BlZWRcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWtlIGxvb3BhYmxlXHJcbiAgLCBsb29wOiBmdW5jdGlvbih0aW1lcywgcmV2ZXJzZSkge1xyXG4gICAgICB2YXIgYyA9IHRoaXMubGFzdCgpXHJcblxyXG4gICAgICAvLyBzdG9yZSB0b3RhbCBsb29wc1xyXG4gICAgICBjLmxvb3BzID0gKHRpbWVzICE9IG51bGwpID8gdGltZXMgOiB0cnVlXHJcbiAgICAgIGMubG9vcCA9IDBcclxuXHJcbiAgICAgIGlmKHJldmVyc2UpIGMucmV2ZXJzaW5nID0gdHJ1ZVxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBhdXNlcyB0aGUgYW5pbWF0aW9uXHJcbiAgLCBwYXVzZTogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlXHJcbiAgICAgIHRoaXMuc3RvcEFuaW1GcmFtZSgpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVucGF1c2UgdGhlIGFuaW1hdGlvblxyXG4gICwgcGxheTogZnVuY3Rpb24oKXtcclxuICAgICAgaWYoIXRoaXMucGF1c2VkKSByZXR1cm4gdGhpc1xyXG4gICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlXHJcbiAgICAgIC8vIFdlIHVzZSBhbiBhYnNvbHV0ZSBwb3NpdGlvbiBoZXJlIHNvIHRoYXQgdGhlIGRlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIGNhbiBiZSBwYXVzZWRcclxuICAgICAgcmV0dXJuIHRoaXMuYXQodGhpcy5hYnNQb3MsIHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0b2dnbGUgb3Igc2V0IHRoZSBkaXJlY3Rpb24gb2YgdGhlIGFuaW1hdGlvblxyXG4gICAgICogdHJ1ZSBzZXRzIGRpcmVjdGlvbiB0byBiYWNrd2FyZHMgd2hpbGUgZmFsc2Ugc2V0cyBpdCB0byBmb3J3YXJkc1xyXG4gICAgICogQHBhcmFtIHJldmVyc2VkIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRvIHJldmVyc2UgdGhlIGFuaW1hdGlvbiBvciBub3QgKGRlZmF1bHQ6IHRvZ2dsZSB0aGUgcmV2ZXJzZSBzdGF0dXMpXHJcbiAgICAgKiBAcmV0dXJuIHRoaXNcclxuICAgICAqL1xyXG4gICwgcmV2ZXJzZTogZnVuY3Rpb24ocmV2ZXJzZWQpe1xyXG4gICAgICB2YXIgYyA9IHRoaXMubGFzdCgpXHJcblxyXG4gICAgICBpZih0eXBlb2YgcmV2ZXJzZWQgPT0gJ3VuZGVmaW5lZCcpIGMucmV2ZXJzZWQgPSAhYy5yZXZlcnNlZFxyXG4gICAgICBlbHNlIGMucmV2ZXJzZWQgPSByZXZlcnNlZFxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGEgZmxvYXQgZnJvbSAwLTEgaW5kaWNhdGluZyB0aGUgcHJvZ3Jlc3Mgb2YgdGhlIGN1cnJlbnQgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gZWFzZWQgQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHJldHVybmVkIHBvc2l0aW9uIHNob3VsZCBiZSBlYXNlZCBvciBub3RcclxuICAgICAqIEByZXR1cm4gbnVtYmVyXHJcbiAgICAgKi9cclxuICAsIHByb2dyZXNzOiBmdW5jdGlvbihlYXNlSXQpe1xyXG4gICAgICByZXR1cm4gZWFzZUl0ID8gdGhpcy5zaXR1YXRpb24uZWFzZSh0aGlzLnBvcykgOiB0aGlzLnBvc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBjdXJyZW50IGFuaW1hdGlvbiBpcyBmaW5pc2hlZFxyXG4gICAgICogQHBhcmFtIGZuIEZ1bmN0aW9uIHdoaWNoIHNob3VsZCBiZSBleGVjdXRlZCBhcyBjYWxsYmFja1xyXG4gICAgICogQHJldHVybiBudW1iZXJcclxuICAgICAqL1xyXG4gICwgYWZ0ZXI6IGZ1bmN0aW9uKGZuKXtcclxuICAgICAgdmFyIGMgPSB0aGlzLmxhc3QoKVxyXG4gICAgICAgICwgd3JhcHBlciA9IGZ1bmN0aW9uIHdyYXBwZXIoZSl7XHJcbiAgICAgICAgICAgIGlmKGUuZGV0YWlsLnNpdHVhdGlvbiA9PSBjKXtcclxuICAgICAgICAgICAgICBmbi5jYWxsKHRoaXMsIGMpXHJcbiAgICAgICAgICAgICAgdGhpcy5vZmYoJ2ZpbmlzaGVkLmZ4Jywgd3JhcHBlcikgLy8gcHJldmVudCBtZW1vcnkgbGVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRhcmdldCgpLm9uKCdmaW5pc2hlZC5meCcsIHdyYXBwZXIpXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5fY2FsbFN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGRzIGEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIHdoZW5ldmVyIG9uZSBhbmltYXRpb24gc3RlcCBpcyBwZXJmb3JtZWRcclxuICAsIGR1cmluZzogZnVuY3Rpb24oZm4pe1xyXG4gICAgICB2YXIgYyA9IHRoaXMubGFzdCgpXHJcbiAgICAgICAgLCB3cmFwcGVyID0gZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGlmKGUuZGV0YWlsLnNpdHVhdGlvbiA9PSBjKXtcclxuICAgICAgICAgICAgICBmbi5jYWxsKHRoaXMsIGUuZGV0YWlsLnBvcywgU1ZHLm1vcnBoKGUuZGV0YWlsLnBvcyksIGUuZGV0YWlsLmVhc2VkLCBjKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAvLyBzZWUgYWJvdmVcclxuICAgICAgdGhpcy50YXJnZXQoKS5vZmYoJ2R1cmluZy5meCcsIHdyYXBwZXIpLm9uKCdkdXJpbmcuZngnLCB3cmFwcGVyKVxyXG5cclxuICAgICAgdGhpcy5hZnRlcihmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMub2ZmKCdkdXJpbmcuZngnLCB3cmFwcGVyKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuX2NhbGxTdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2FsbHMgYWZ0ZXIgQUxMIGFuaW1hdGlvbnMgaW4gdGhlIHF1ZXVlIGFyZSBmaW5pc2hlZFxyXG4gICwgYWZ0ZXJBbGw6IGZ1bmN0aW9uKGZuKXtcclxuICAgICAgdmFyIHdyYXBwZXIgPSBmdW5jdGlvbiB3cmFwcGVyKGUpe1xyXG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMpXHJcbiAgICAgICAgICAgIHRoaXMub2ZmKCdhbGxmaW5pc2hlZC5meCcsIHdyYXBwZXIpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAvLyBzZWUgYWJvdmVcclxuICAgICAgdGhpcy50YXJnZXQoKS5vZmYoJ2FsbGZpbmlzaGVkLmZ4Jywgd3JhcHBlcikub24oJ2FsbGZpbmlzaGVkLmZ4Jywgd3JhcHBlcilcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLl9jYWxsU3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhbGxzIG9uIGV2ZXJ5IGFuaW1hdGlvbiBzdGVwIGZvciBhbGwgYW5pbWF0aW9uc1xyXG4gICwgZHVyaW5nQWxsOiBmdW5jdGlvbihmbil7XHJcbiAgICAgIHZhciB3cmFwcGVyID0gZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcywgZS5kZXRhaWwucG9zLCBTVkcubW9ycGgoZS5kZXRhaWwucG9zKSwgZS5kZXRhaWwuZWFzZWQsIGUuZGV0YWlsLnNpdHVhdGlvbilcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudGFyZ2V0KCkub2ZmKCdkdXJpbmcuZngnLCB3cmFwcGVyKS5vbignZHVyaW5nLmZ4Jywgd3JhcHBlcilcclxuXHJcbiAgICAgIHRoaXMuYWZ0ZXJBbGwoZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm9mZignZHVyaW5nLmZ4Jywgd3JhcHBlcilcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLl9jYWxsU3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAsIGxhc3Q6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnNpdHVhdGlvbnMubGVuZ3RoID8gdGhpcy5zaXR1YXRpb25zW3RoaXMuc2l0dWF0aW9ucy5sZW5ndGgtMV0gOiB0aGlzLnNpdHVhdGlvblxyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZHMgb25lIHByb3BlcnR5IHRvIHRoZSBhbmltYXRpb25zXHJcbiAgLCBhZGQ6IGZ1bmN0aW9uKG1ldGhvZCwgYXJncywgdHlwZSl7XHJcbiAgICAgIHRoaXMubGFzdCgpW3R5cGUgfHwgJ2FuaW1hdGlvbnMnXVttZXRob2RdID0gYXJnc1xyXG4gICAgICByZXR1cm4gdGhpcy5fY2FsbFN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICAvKiogcGVyZm9ybSBvbmUgc3RlcCBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKiAgQHBhcmFtIGlnbm9yZVRpbWUgQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gaWdub3JlIHRpbWUgYW5kIHVzZSBwb3NpdGlvbiBkaXJlY3RseSBvciByZWNhbGN1bGF0ZSBwb3NpdGlvbiBiYXNlZCBvbiB0aW1lXHJcbiAgICAgKiAgQHJldHVybiB0aGlzXHJcbiAgICAgKi9cclxuICAsIHN0ZXA6IGZ1bmN0aW9uKGlnbm9yZVRpbWUpe1xyXG5cclxuICAgICAgLy8gY29udmVydCBjdXJyZW50IHRpbWUgdG8gYW4gYWJzb2x1dGUgcG9zaXRpb25cclxuICAgICAgaWYoIWlnbm9yZVRpbWUpIHRoaXMuYWJzUG9zID0gdGhpcy50aW1lVG9BYnNQb3MoK25ldyBEYXRlKVxyXG5cclxuICAgICAgLy8gVGhpcyBwYXJ0IGNvbnZlcnQgYW4gYWJzb2x1dGUgcG9zaXRpb24gdG8gYSBwb3NpdGlvblxyXG4gICAgICBpZih0aGlzLnNpdHVhdGlvbi5sb29wcyAhPT0gZmFsc2UpIHtcclxuICAgICAgICB2YXIgYWJzUG9zLCBhYnNQb3NJbnQsIGxhc3RMb29wXHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBpcyBiZWxvdyAwLCB3ZSBqdXN0IHRyZWF0IGl0IGFzIGlmIGl0IHdhcyAwXHJcbiAgICAgICAgYWJzUG9zID0gTWF0aC5tYXgodGhpcy5hYnNQb3MsIDApXHJcbiAgICAgICAgYWJzUG9zSW50ID0gTWF0aC5mbG9vcihhYnNQb3MpXHJcblxyXG4gICAgICAgIGlmKHRoaXMuc2l0dWF0aW9uLmxvb3BzID09PSB0cnVlIHx8IGFic1Bvc0ludCA8IHRoaXMuc2l0dWF0aW9uLmxvb3BzKSB7XHJcbiAgICAgICAgICB0aGlzLnBvcyA9IGFic1BvcyAtIGFic1Bvc0ludFxyXG4gICAgICAgICAgbGFzdExvb3AgPSB0aGlzLnNpdHVhdGlvbi5sb29wXHJcbiAgICAgICAgICB0aGlzLnNpdHVhdGlvbi5sb29wID0gYWJzUG9zSW50XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuYWJzUG9zID0gdGhpcy5zaXR1YXRpb24ubG9vcHNcclxuICAgICAgICAgIHRoaXMucG9zID0gMVxyXG4gICAgICAgICAgLy8gVGhlIC0xIGhlcmUgaXMgYmVjYXVzZSB3ZSBkb24ndCB3YW50IHRvIHRvZ2dsZSByZXZlcnNlZCB3aGVuIGFsbCB0aGUgbG9vcHMgaGF2ZSBiZWVuIGNvbXBsZXRlZFxyXG4gICAgICAgICAgbGFzdExvb3AgPSB0aGlzLnNpdHVhdGlvbi5sb29wIC0gMVxyXG4gICAgICAgICAgdGhpcy5zaXR1YXRpb24ubG9vcCA9IHRoaXMuc2l0dWF0aW9uLmxvb3BzXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnNpdHVhdGlvbi5yZXZlcnNpbmcpIHtcclxuICAgICAgICAgIC8vIFRvZ2dsZSByZXZlcnNlZCBpZiBhbiBvZGQgbnVtYmVyIG9mIGxvb3BzIGFzIG9jY3VyZWQgc2luY2UgdGhlIGxhc3QgY2FsbCBvZiBzdGVwXHJcbiAgICAgICAgICB0aGlzLnNpdHVhdGlvbi5yZXZlcnNlZCA9IHRoaXMuc2l0dWF0aW9uLnJldmVyc2VkICE9IEJvb2xlYW4oKHRoaXMuc2l0dWF0aW9uLmxvb3AgLSBsYXN0TG9vcCkgJSAyKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGxvb3AsIHRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBtdXN0IG5vdCBiZSBhYm92ZSAxXHJcbiAgICAgICAgdGhpcy5hYnNQb3MgPSBNYXRoLm1pbih0aGlzLmFic1BvcywgMSlcclxuICAgICAgICB0aGlzLnBvcyA9IHRoaXMuYWJzUG9zXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHdoaWxlIHRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBjYW4gYmUgYmVsb3cgMCwgdGhlIHBvc2l0aW9uIG11c3Qgbm90IGJlIGJlbG93IDBcclxuICAgICAgaWYodGhpcy5wb3MgPCAwKSB0aGlzLnBvcyA9IDBcclxuXHJcbiAgICAgIGlmKHRoaXMuc2l0dWF0aW9uLnJldmVyc2VkKSB0aGlzLnBvcyA9IDEgLSB0aGlzLnBvc1xyXG5cclxuXHJcbiAgICAgIC8vIGFwcGx5IGVhc2luZ1xyXG4gICAgICB2YXIgZWFzZWQgPSB0aGlzLnNpdHVhdGlvbi5lYXNlKHRoaXMucG9zKVxyXG5cclxuICAgICAgLy8gY2FsbCBvbmNlLWNhbGxiYWNrc1xyXG4gICAgICBmb3IodmFyIGkgaW4gdGhpcy5zaXR1YXRpb24ub25jZSl7XHJcbiAgICAgICAgaWYoaSA+IHRoaXMubGFzdFBvcyAmJiBpIDw9IGVhc2VkKXtcclxuICAgICAgICAgIHRoaXMuc2l0dWF0aW9uLm9uY2VbaV0uY2FsbCh0aGlzLnRhcmdldCgpLCB0aGlzLnBvcywgZWFzZWQpXHJcbiAgICAgICAgICBkZWxldGUgdGhpcy5zaXR1YXRpb24ub25jZVtpXVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZmlyZSBkdXJpbmcgY2FsbGJhY2sgd2l0aCBwb3NpdGlvbiwgZWFzZWQgcG9zaXRpb24gYW5kIGN1cnJlbnQgc2l0dWF0aW9uIGFzIHBhcmFtZXRlclxyXG4gICAgICBpZih0aGlzLmFjdGl2ZSkgdGhpcy50YXJnZXQoKS5maXJlKCdkdXJpbmcnLCB7cG9zOiB0aGlzLnBvcywgZWFzZWQ6IGVhc2VkLCBmeDogdGhpcywgc2l0dWF0aW9uOiB0aGlzLnNpdHVhdGlvbn0pXHJcblxyXG4gICAgICAvLyB0aGUgdXNlciBtYXkgY2FsbCBzdG9wIG9yIGZpbmlzaCBpbiB0aGUgZHVyaW5nIGNhbGxiYWNrXHJcbiAgICAgIC8vIHNvIG1ha2Ugc3VyZSB0aGF0IHdlIHN0aWxsIGhhdmUgYSB2YWxpZCBzaXR1YXRpb25cclxuICAgICAgaWYoIXRoaXMuc2l0dWF0aW9uKXtcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhcHBseSB0aGUgYWN0dWFsIGFuaW1hdGlvbiB0byBldmVyeSBwcm9wZXJ0eVxyXG4gICAgICB0aGlzLmVhY2hBdCgpXHJcblxyXG4gICAgICAvLyBkbyBmaW5hbCBjb2RlIHdoZW4gc2l0dWF0aW9uIGlzIGZpbmlzaGVkXHJcbiAgICAgIGlmKCh0aGlzLnBvcyA9PSAxICYmICF0aGlzLnNpdHVhdGlvbi5yZXZlcnNlZCkgfHwgKHRoaXMuc2l0dWF0aW9uLnJldmVyc2VkICYmIHRoaXMucG9zID09IDApKXtcclxuXHJcbiAgICAgICAgLy8gc3RvcCBhbmltYXRpb24gY2FsbGJhY2tcclxuICAgICAgICB0aGlzLnN0b3BBbmltRnJhbWUoKVxyXG5cclxuICAgICAgICAvLyBmaXJlIGZpbmlzaGVkIGNhbGxiYWNrIHdpdGggY3VycmVudCBzaXR1YXRpb24gYXMgcGFyYW1ldGVyXHJcbiAgICAgICAgdGhpcy50YXJnZXQoKS5maXJlKCdmaW5pc2hlZCcsIHtmeDp0aGlzLCBzaXR1YXRpb246IHRoaXMuc2l0dWF0aW9ufSlcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuc2l0dWF0aW9ucy5sZW5ndGgpe1xyXG4gICAgICAgICAgdGhpcy50YXJnZXQoKS5maXJlKCdhbGxmaW5pc2hlZCcpXHJcblxyXG4gICAgICAgICAgLy8gUmVjaGVjayB0aGUgbGVuZ3RoIHNpbmNlIHRoZSB1c2VyIG1heSBjYWxsIGFuaW1hdGUgaW4gdGhlIGFmdGVyQWxsIGNhbGxiYWNrXHJcbiAgICAgICAgICBpZighdGhpcy5zaXR1YXRpb25zLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0KCkub2ZmKCcuZngnKSAvLyB0aGVyZSBzaG91bGRudCBiZSBhbnkgYmluZGluZyBsZWZ0LCBidXQgdG8gbWFrZSBzdXJlLi4uXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHN0YXJ0IG5leHQgYW5pbWF0aW9uXHJcbiAgICAgICAgaWYodGhpcy5hY3RpdmUpIHRoaXMuZGVxdWV1ZSgpXHJcbiAgICAgICAgZWxzZSB0aGlzLmNsZWFyQ3VycmVudCgpXHJcblxyXG4gICAgICB9ZWxzZSBpZighdGhpcy5wYXVzZWQgJiYgdGhpcy5hY3RpdmUpe1xyXG4gICAgICAgIC8vIHdlIGNvbnRpbnVlIGFuaW1hdGluZyB3aGVuIHdlIGFyZSBub3QgYXQgdGhlIGVuZFxyXG4gICAgICAgIHRoaXMuc3RhcnRBbmltRnJhbWUoKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzYXZlIGxhc3QgZWFzZWQgcG9zaXRpb24gZm9yIG9uY2UgY2FsbGJhY2sgdHJpZ2dlcmluZ1xyXG4gICAgICB0aGlzLmxhc3RQb3MgPSBlYXNlZFxyXG4gICAgICByZXR1cm4gdGhpc1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBjYWxjdWxhdGVzIHRoZSBzdGVwIGZvciBldmVyeSBwcm9wZXJ0eSBhbmQgY2FsbHMgYmxvY2sgd2l0aCBpdFxyXG4gICwgZWFjaEF0OiBmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgaSwgbGVuLCBhdCwgc2VsZiA9IHRoaXMsIHRhcmdldCA9IHRoaXMudGFyZ2V0KCksIHMgPSB0aGlzLnNpdHVhdGlvblxyXG5cclxuICAgICAgLy8gYXBwbHkgYW5pbWF0aW9ucyB3aGljaCBjYW4gYmUgY2FsbGVkIHRyb3VnaCBhIG1ldGhvZFxyXG4gICAgICBmb3IoaSBpbiBzLmFuaW1hdGlvbnMpe1xyXG5cclxuICAgICAgICBhdCA9IFtdLmNvbmNhdChzLmFuaW1hdGlvbnNbaV0pLm1hcChmdW5jdGlvbihlbCl7XHJcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIGVsICE9PSAnc3RyaW5nJyAmJiBlbC5hdCA/IGVsLmF0KHMuZWFzZShzZWxmLnBvcyksIHNlbGYucG9zKSA6IGVsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGFyZ2V0W2ldLmFwcGx5KHRhcmdldCwgYXQpXHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhcHBseSBhbmltYXRpb24gd2hpY2ggaGFzIHRvIGJlIGFwcGxpZWQgd2l0aCBhdHRyKClcclxuICAgICAgZm9yKGkgaW4gcy5hdHRycyl7XHJcblxyXG4gICAgICAgIGF0ID0gW2ldLmNvbmNhdChzLmF0dHJzW2ldKS5tYXAoZnVuY3Rpb24oZWwpe1xyXG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiBlbCAhPT0gJ3N0cmluZycgJiYgZWwuYXQgPyBlbC5hdChzLmVhc2Uoc2VsZi5wb3MpLCBzZWxmLnBvcykgOiBlbFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRhcmdldC5hdHRyLmFwcGx5KHRhcmdldCwgYXQpXHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhcHBseSBhbmltYXRpb24gd2hpY2ggaGFzIHRvIGJlIGFwcGxpZWQgd2l0aCBzdHlsZSgpXHJcbiAgICAgIGZvcihpIGluIHMuc3R5bGVzKXtcclxuXHJcbiAgICAgICAgYXQgPSBbaV0uY29uY2F0KHMuc3R5bGVzW2ldKS5tYXAoZnVuY3Rpb24oZWwpe1xyXG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiBlbCAhPT0gJ3N0cmluZycgJiYgZWwuYXQgPyBlbC5hdChzLmVhc2Uoc2VsZi5wb3MpLCBzZWxmLnBvcykgOiBlbFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRhcmdldC5zdHlsZS5hcHBseSh0YXJnZXQsIGF0KVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYW5pbWF0ZSBpbml0aWFsVHJhbnNmb3JtYXRpb24gd2hpY2ggaGFzIHRvIGJlIGNoYWluZWRcclxuICAgICAgaWYocy50cmFuc2Zvcm1zLmxlbmd0aCl7XHJcblxyXG4gICAgICAgIC8vIGdldCBpbml0aWFsIGluaXRpYWxUcmFuc2Zvcm1hdGlvblxyXG4gICAgICAgIGF0ID0gcy5pbml0aWFsVHJhbnNmb3JtYXRpb25cclxuICAgICAgICBmb3IoaSA9IDAsIGxlbiA9IHMudHJhbnNmb3Jtcy5sZW5ndGg7IGkgPCBsZW47IGkrKyl7XHJcblxyXG4gICAgICAgICAgLy8gZ2V0IG5leHQgdHJhbnNmb3JtYXRpb24gaW4gY2hhaW5cclxuICAgICAgICAgIHZhciBhID0gcy50cmFuc2Zvcm1zW2ldXHJcblxyXG4gICAgICAgICAgLy8gbXVsdGlwbHkgbWF0cml4IGRpcmVjdGx5XHJcbiAgICAgICAgICBpZihhIGluc3RhbmNlb2YgU1ZHLk1hdHJpeCl7XHJcblxyXG4gICAgICAgICAgICBpZihhLnJlbGF0aXZlKXtcclxuICAgICAgICAgICAgICBhdCA9IGF0Lm11bHRpcGx5KG5ldyBTVkcuTWF0cml4KCkubW9ycGgoYSkuYXQocy5lYXNlKHRoaXMucG9zKSkpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIGF0ID0gYXQubW9ycGgoYSkuYXQocy5lYXNlKHRoaXMucG9zKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIHdoZW4gdHJhbnNmb3JtYXRpb24gaXMgYWJzb2x1dGUgd2UgaGF2ZSB0byByZXNldCB0aGUgbmVlZGVkIHRyYW5zZm9ybWF0aW9uIGZpcnN0XHJcbiAgICAgICAgICBpZighYS5yZWxhdGl2ZSlcclxuICAgICAgICAgICAgYS51bmRvKGF0LmV4dHJhY3QoKSlcclxuXHJcbiAgICAgICAgICAvLyBhbmQgcmVhcHBseSBpdCBhZnRlclxyXG4gICAgICAgICAgYXQgPSBhdC5tdWx0aXBseShhLmF0KHMuZWFzZSh0aGlzLnBvcykpKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldCBuZXcgbWF0cml4IG9uIGVsZW1lbnRcclxuICAgICAgICB0YXJnZXQubWF0cml4KGF0KVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gYWRkcyBhbiBvbmNlLWNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhdCBhIHNwZWNpZmljIHBvc2l0aW9uIGFuZCBuZXZlciBhZ2FpblxyXG4gICwgb25jZTogZnVuY3Rpb24ocG9zLCBmbiwgaXNFYXNlZCl7XHJcbiAgICAgIHZhciBjID0gdGhpcy5sYXN0KClcclxuICAgICAgaWYoIWlzRWFzZWQpIHBvcyA9IGMuZWFzZShwb3MpXHJcblxyXG4gICAgICBjLm9uY2VbcG9zXSA9IGZuXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAsIF9jYWxsU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhpcy5zdGFydCgpfS5iaW5kKHRoaXMpLCAwKVxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4sIHBhcmVudDogU1ZHLkVsZW1lbnRcclxuXHJcbiAgLy8gQWRkIG1ldGhvZCB0byBwYXJlbnQgZWxlbWVudHNcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIEdldCBmeCBtb2R1bGUgb3IgY3JlYXRlIGEgbmV3IG9uZSwgdGhlbiBhbmltYXRlIHdpdGggZ2l2ZW4gZHVyYXRpb24gYW5kIGVhc2VcclxuICAgIGFuaW1hdGU6IGZ1bmN0aW9uKG8sIGVhc2UsIGRlbGF5KSB7XHJcbiAgICAgIHJldHVybiAodGhpcy5meCB8fCAodGhpcy5meCA9IG5ldyBTVkcuRlgodGhpcykpKS5hbmltYXRlKG8sIGVhc2UsIGRlbGF5KVxyXG4gICAgfVxyXG4gICwgZGVsYXk6IGZ1bmN0aW9uKGRlbGF5KXtcclxuICAgICAgcmV0dXJuICh0aGlzLmZ4IHx8ICh0aGlzLmZ4ID0gbmV3IFNWRy5GWCh0aGlzKSkpLmRlbGF5KGRlbGF5KVxyXG4gICAgfVxyXG4gICwgc3RvcDogZnVuY3Rpb24oanVtcFRvRW5kLCBjbGVhclF1ZXVlKSB7XHJcbiAgICAgIGlmICh0aGlzLmZ4KVxyXG4gICAgICAgIHRoaXMuZnguc3RvcChqdW1wVG9FbmQsIGNsZWFyUXVldWUpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICwgZmluaXNoOiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMuZngpXHJcbiAgICAgICAgdGhpcy5meC5maW5pc2goKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIFBhdXNlIGN1cnJlbnQgYW5pbWF0aW9uXHJcbiAgLCBwYXVzZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLmZ4KVxyXG4gICAgICAgIHRoaXMuZngucGF1c2UoKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIFBsYXkgcGF1c2VkIGN1cnJlbnQgYW5pbWF0aW9uXHJcbiAgLCBwbGF5OiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMuZngpXHJcbiAgICAgICAgdGhpcy5meC5wbGF5KClcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBTZXQvR2V0IHRoZSBzcGVlZCBvZiB0aGUgYW5pbWF0aW9uc1xyXG4gICwgc3BlZWQ6IGZ1bmN0aW9uKHNwZWVkKSB7XHJcbiAgICAgIGlmICh0aGlzLmZ4KVxyXG4gICAgICAgIGlmIChzcGVlZCA9PSBudWxsKVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZnguc3BlZWQoKVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHRoaXMuZnguc3BlZWQoc3BlZWQpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pXHJcblxyXG4vLyBNb3JwaE9iaiBpcyB1c2VkIHdoZW5ldmVyIG5vIG1vcnBoYWJsZSBvYmplY3QgaXMgZ2l2ZW5cclxuU1ZHLk1vcnBoT2JqID0gU1ZHLmludmVudCh7XHJcblxyXG4gIGNyZWF0ZTogZnVuY3Rpb24oZnJvbSwgdG8pe1xyXG4gICAgLy8gcHJlcGFyZSBjb2xvciBmb3IgbW9ycGhpbmdcclxuICAgIGlmKFNWRy5Db2xvci5pc0NvbG9yKHRvKSkgcmV0dXJuIG5ldyBTVkcuQ29sb3IoZnJvbSkubW9ycGgodG8pXHJcbiAgICAvLyBjaGVjayBpZiB3ZSBoYXZlIGEgbGlzdCBvZiB2YWx1ZXNcclxuICAgIGlmKFNWRy5yZWdleC5kZWxpbWl0ZXIudGVzdChmcm9tKSkge1xyXG4gICAgICAvLyBwcmVwYXJlIHBhdGggZm9yIG1vcnBoaW5nXHJcbiAgICAgIGlmKFNWRy5yZWdleC5wYXRoTGV0dGVycy50ZXN0KGZyb20pKSByZXR1cm4gbmV3IFNWRy5QYXRoQXJyYXkoZnJvbSkubW9ycGgodG8pXHJcbiAgICAgIC8vIHByZXBhcmUgdmFsdWUgbGlzdCBmb3IgbW9ycGhpbmdcclxuICAgICAgZWxzZSByZXR1cm4gbmV3IFNWRy5BcnJheShmcm9tKS5tb3JwaCh0bylcclxuICAgIH1cclxuICAgIC8vIHByZXBhcmUgbnVtYmVyIGZvciBtb3JwaGluZ1xyXG4gICAgaWYoU1ZHLnJlZ2V4Lm51bWJlckFuZFVuaXQudGVzdCh0bykpIHJldHVybiBuZXcgU1ZHLk51bWJlcihmcm9tKS5tb3JwaCh0bylcclxuXHJcbiAgICAvLyBwcmVwYXJlIGZvciBwbGFpbiBtb3JwaGluZ1xyXG4gICAgdGhpcy52YWx1ZSA9IGZyb21cclxuICAgIHRoaXMuZGVzdGluYXRpb24gPSB0b1xyXG4gIH1cclxuXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICBhdDogZnVuY3Rpb24ocG9zLCByZWFsKXtcclxuICAgICAgcmV0dXJuIHJlYWwgPCAxID8gdGhpcy52YWx1ZSA6IHRoaXMuZGVzdGluYXRpb25cclxuICAgIH0sXHJcblxyXG4gICAgdmFsdWVPZjogZnVuY3Rpb24oKXtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVcclxuICAgIH1cclxuICB9XHJcblxyXG59KVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuRlgsIHtcclxuICAvLyBBZGQgYW5pbWF0YWJsZSBhdHRyaWJ1dGVzXHJcbiAgYXR0cjogZnVuY3Rpb24oYSwgdiwgcmVsYXRpdmUpIHtcclxuICAgIC8vIGFwcGx5IGF0dHJpYnV0ZXMgaW5kaXZpZHVhbGx5XHJcbiAgICBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcpIHtcclxuICAgICAgZm9yICh2YXIga2V5IGluIGEpXHJcbiAgICAgICAgdGhpcy5hdHRyKGtleSwgYVtrZXldKVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkKGEsIHYsICdhdHRycycpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgLy8gQWRkIGFuaW1hdGFibGUgc3R5bGVzXHJcbiwgc3R5bGU6IGZ1bmN0aW9uKHMsIHYpIHtcclxuICAgIGlmICh0eXBlb2YgcyA9PSAnb2JqZWN0JylcclxuICAgICAgZm9yICh2YXIga2V5IGluIHMpXHJcbiAgICAgICAgdGhpcy5zdHlsZShrZXksIHNba2V5XSlcclxuXHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMuYWRkKHMsIHYsICdzdHlsZXMnKVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIC8vIEFuaW1hdGFibGUgeC1heGlzXHJcbiwgeDogZnVuY3Rpb24oeCwgcmVsYXRpdmUpIHtcclxuICAgIGlmKHRoaXMudGFyZ2V0KCkgaW5zdGFuY2VvZiBTVkcuRyl7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtKHt4Onh9LCByZWxhdGl2ZSlcclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbnVtID0gbmV3IFNWRy5OdW1iZXIoeClcclxuICAgIG51bS5yZWxhdGl2ZSA9IHJlbGF0aXZlXHJcbiAgICByZXR1cm4gdGhpcy5hZGQoJ3gnLCBudW0pXHJcbiAgfVxyXG4gIC8vIEFuaW1hdGFibGUgeS1heGlzXHJcbiwgeTogZnVuY3Rpb24oeSwgcmVsYXRpdmUpIHtcclxuICAgIGlmKHRoaXMudGFyZ2V0KCkgaW5zdGFuY2VvZiBTVkcuRyl7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtKHt5Onl9LCByZWxhdGl2ZSlcclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbnVtID0gbmV3IFNWRy5OdW1iZXIoeSlcclxuICAgIG51bS5yZWxhdGl2ZSA9IHJlbGF0aXZlXHJcbiAgICByZXR1cm4gdGhpcy5hZGQoJ3knLCBudW0pXHJcbiAgfVxyXG4gIC8vIEFuaW1hdGFibGUgY2VudGVyIHgtYXhpc1xyXG4sIGN4OiBmdW5jdGlvbih4KSB7XHJcbiAgICByZXR1cm4gdGhpcy5hZGQoJ2N4JywgbmV3IFNWRy5OdW1iZXIoeCkpXHJcbiAgfVxyXG4gIC8vIEFuaW1hdGFibGUgY2VudGVyIHktYXhpc1xyXG4sIGN5OiBmdW5jdGlvbih5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5hZGQoJ2N5JywgbmV3IFNWRy5OdW1iZXIoeSkpXHJcbiAgfVxyXG4gIC8vIEFkZCBhbmltYXRhYmxlIG1vdmVcclxuLCBtb3ZlOiBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICByZXR1cm4gdGhpcy54KHgpLnkoeSlcclxuICB9XHJcbiAgLy8gQWRkIGFuaW1hdGFibGUgY2VudGVyXHJcbiwgY2VudGVyOiBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5jeCh4KS5jeSh5KVxyXG4gIH1cclxuICAvLyBBZGQgYW5pbWF0YWJsZSBzaXplXHJcbiwgc2l6ZTogZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xyXG4gICAgaWYgKHRoaXMudGFyZ2V0KCkgaW5zdGFuY2VvZiBTVkcuVGV4dCkge1xyXG4gICAgICAvLyBhbmltYXRlIGZvbnQgc2l6ZSBmb3IgVGV4dCBlbGVtZW50c1xyXG4gICAgICB0aGlzLmF0dHIoJ2ZvbnQtc2l6ZScsIHdpZHRoKVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGFuaW1hdGUgYmJveCBiYXNlZCBzaXplIGZvciBhbGwgb3RoZXIgZWxlbWVudHNcclxuICAgICAgdmFyIGJveFxyXG5cclxuICAgICAgaWYoIXdpZHRoIHx8ICFoZWlnaHQpe1xyXG4gICAgICAgIGJveCA9IHRoaXMudGFyZ2V0KCkuYmJveCgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCF3aWR0aCl7XHJcbiAgICAgICAgd2lkdGggPSBib3gud2lkdGggLyBib3guaGVpZ2h0ICAqIGhlaWdodFxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZighaGVpZ2h0KXtcclxuICAgICAgICBoZWlnaHQgPSBib3guaGVpZ2h0IC8gYm94LndpZHRoICAqIHdpZHRoXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYWRkKCd3aWR0aCcgLCBuZXcgU1ZHLk51bWJlcih3aWR0aCkpXHJcbiAgICAgICAgICAuYWRkKCdoZWlnaHQnLCBuZXcgU1ZHLk51bWJlcihoZWlnaHQpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICAvLyBBZGQgYW5pbWF0YWJsZSB3aWR0aFxyXG4sIHdpZHRoOiBmdW5jdGlvbih3aWR0aCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYWRkKCd3aWR0aCcsIG5ldyBTVkcuTnVtYmVyKHdpZHRoKSlcclxuICB9XHJcbiAgLy8gQWRkIGFuaW1hdGFibGUgaGVpZ2h0XHJcbiwgaGVpZ2h0OiBmdW5jdGlvbihoZWlnaHQpIHtcclxuICAgIHJldHVybiB0aGlzLmFkZCgnaGVpZ2h0JywgbmV3IFNWRy5OdW1iZXIoaGVpZ2h0KSlcclxuICB9XHJcbiAgLy8gQWRkIGFuaW1hdGFibGUgcGxvdFxyXG4sIHBsb3Q6IGZ1bmN0aW9uKGEsIGIsIGMsIGQpIHtcclxuICAgIC8vIExpbmVzIGNhbiBiZSBwbG90dGVkIHdpdGggNCBhcmd1bWVudHNcclxuICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gNCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wbG90KFthLCBiLCBjLCBkXSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5hZGQoJ3Bsb3QnLCBuZXcgKHRoaXMudGFyZ2V0KCkubW9ycGhBcnJheSkoYSkpXHJcbiAgfVxyXG4gIC8vIEFkZCBsZWFkaW5nIG1ldGhvZFxyXG4sIGxlYWRpbmc6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdGhpcy50YXJnZXQoKS5sZWFkaW5nID9cclxuICAgICAgdGhpcy5hZGQoJ2xlYWRpbmcnLCBuZXcgU1ZHLk51bWJlcih2YWx1ZSkpIDpcclxuICAgICAgdGhpc1xyXG4gIH1cclxuICAvLyBBZGQgYW5pbWF0YWJsZSB2aWV3Ym94XHJcbiwgdmlld2JveDogZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgaWYgKHRoaXMudGFyZ2V0KCkgaW5zdGFuY2VvZiBTVkcuQ29udGFpbmVyKSB7XHJcbiAgICAgIHRoaXMuYWRkKCd2aWV3Ym94JywgbmV3IFNWRy5WaWV3Qm94KHgsIHksIHdpZHRoLCBoZWlnaHQpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4sIHVwZGF0ZTogZnVuY3Rpb24obykge1xyXG4gICAgaWYgKHRoaXMudGFyZ2V0KCkgaW5zdGFuY2VvZiBTVkcuU3RvcCkge1xyXG4gICAgICBpZiAodHlwZW9mIG8gPT0gJ251bWJlcicgfHwgbyBpbnN0YW5jZW9mIFNWRy5OdW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUoe1xyXG4gICAgICAgICAgb2Zmc2V0OiAgYXJndW1lbnRzWzBdXHJcbiAgICAgICAgLCBjb2xvcjogICBhcmd1bWVudHNbMV1cclxuICAgICAgICAsIG9wYWNpdHk6IGFyZ3VtZW50c1syXVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChvLm9wYWNpdHkgIT0gbnVsbCkgdGhpcy5hdHRyKCdzdG9wLW9wYWNpdHknLCBvLm9wYWNpdHkpXHJcbiAgICAgIGlmIChvLmNvbG9yICAgIT0gbnVsbCkgdGhpcy5hdHRyKCdzdG9wLWNvbG9yJywgby5jb2xvcilcclxuICAgICAgaWYgKG8ub2Zmc2V0ICAhPSBudWxsKSB0aGlzLmF0dHIoJ29mZnNldCcsIG8ub2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG59KVxyXG5cblNWRy5Cb3ggPSBTVkcuaW52ZW50KHtcclxuICBjcmVhdGU6IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIGlmICh0eXBlb2YgeCA9PSAnb2JqZWN0JyAmJiAhKHggaW5zdGFuY2VvZiBTVkcuRWxlbWVudCkpIHtcclxuICAgICAgLy8gY2hyb21lcyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgaGFzIG5vIHggYW5kIHkgcHJvcGVydHlcclxuICAgICAgcmV0dXJuIFNWRy5Cb3guY2FsbCh0aGlzLCB4LmxlZnQgIT0gbnVsbCA/IHgubGVmdCA6IHgueCAsIHgudG9wICE9IG51bGwgPyB4LnRvcCA6IHgueSwgeC53aWR0aCwgeC5oZWlnaHQpXHJcbiAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gNCkge1xyXG4gICAgICB0aGlzLnggPSB4XHJcbiAgICAgIHRoaXMueSA9IHlcclxuICAgICAgdGhpcy53aWR0aCA9IHdpZHRoXHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkIGNlbnRlciwgcmlnaHQsIGJvdHRvbS4uLlxyXG4gICAgZnVsbEJveCh0aGlzKVxyXG4gIH1cclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIE1lcmdlIHJlY3QgYm94IHdpdGggYW5vdGhlciwgcmV0dXJuIGEgbmV3IGluc3RhbmNlXHJcbiAgICBtZXJnZTogZnVuY3Rpb24oYm94KSB7XHJcbiAgICAgIHZhciBiID0gbmV3IHRoaXMuY29uc3RydWN0b3IoKVxyXG5cclxuICAgICAgLy8gbWVyZ2UgYm94ZXNcclxuICAgICAgYi54ICAgICAgPSBNYXRoLm1pbih0aGlzLngsIGJveC54KVxyXG4gICAgICBiLnkgICAgICA9IE1hdGgubWluKHRoaXMueSwgYm94LnkpXHJcbiAgICAgIGIud2lkdGggID0gTWF0aC5tYXgodGhpcy54ICsgdGhpcy53aWR0aCwgIGJveC54ICsgYm94LndpZHRoKSAgLSBiLnhcclxuICAgICAgYi5oZWlnaHQgPSBNYXRoLm1heCh0aGlzLnkgKyB0aGlzLmhlaWdodCwgYm94LnkgKyBib3guaGVpZ2h0KSAtIGIueVxyXG5cclxuICAgICAgcmV0dXJuIGZ1bGxCb3goYilcclxuICAgIH1cclxuXHJcbiAgLCB0cmFuc2Zvcm06IGZ1bmN0aW9uKG0pIHtcclxuICAgICAgdmFyIHhNaW4gPSBJbmZpbml0eSwgeE1heCA9IC1JbmZpbml0eSwgeU1pbiA9IEluZmluaXR5LCB5TWF4ID0gLUluZmluaXR5LCBwLCBiYm94XHJcblxyXG4gICAgICB2YXIgcHRzID0gW1xyXG4gICAgICAgIG5ldyBTVkcuUG9pbnQodGhpcy54LCB0aGlzLnkpLFxyXG4gICAgICAgIG5ldyBTVkcuUG9pbnQodGhpcy54MiwgdGhpcy55KSxcclxuICAgICAgICBuZXcgU1ZHLlBvaW50KHRoaXMueCwgdGhpcy55MiksXHJcbiAgICAgICAgbmV3IFNWRy5Qb2ludCh0aGlzLngyLCB0aGlzLnkyKVxyXG4gICAgICBdXHJcblxyXG4gICAgICBwdHMuZm9yRWFjaChmdW5jdGlvbihwKSB7XHJcbiAgICAgICAgcCA9IHAudHJhbnNmb3JtKG0pXHJcbiAgICAgICAgeE1pbiA9IE1hdGgubWluKHhNaW4scC54KVxyXG4gICAgICAgIHhNYXggPSBNYXRoLm1heCh4TWF4LHAueClcclxuICAgICAgICB5TWluID0gTWF0aC5taW4oeU1pbixwLnkpXHJcbiAgICAgICAgeU1heCA9IE1hdGgubWF4KHlNYXgscC55KVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgYmJveCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKClcclxuICAgICAgYmJveC54ID0geE1pblxyXG4gICAgICBiYm94LndpZHRoID0geE1heC14TWluXHJcbiAgICAgIGJib3gueSA9IHlNaW5cclxuICAgICAgYmJveC5oZWlnaHQgPSB5TWF4LXlNaW5cclxuXHJcbiAgICAgIGZ1bGxCb3goYmJveClcclxuXHJcbiAgICAgIHJldHVybiBiYm94XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuU1ZHLkJCb3ggPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplXHJcbiAgY3JlYXRlOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICBTVkcuQm94LmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSlcclxuXHJcbiAgICAvLyBnZXQgdmFsdWVzIGlmIGVsZW1lbnQgaXMgZ2l2ZW5cclxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHLkVsZW1lbnQpIHtcclxuICAgICAgdmFyIGJveFxyXG5cclxuICAgICAgLy8geWVzIHRoaXMgaXMgdWdseSwgYnV0IEZpcmVmb3ggY2FuIGJlIGEgcGFpbiB3aGVuIGl0IGNvbWVzIHRvIGVsZW1lbnRzIHRoYXQgYXJlIG5vdCB5ZXQgcmVuZGVyZWRcclxuICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMpe1xyXG4gICAgICAgICAgLy8gVGhpcyBpcyBJRSAtIGl0IGRvZXMgbm90IHN1cHBvcnQgY29udGFpbnMoKSBmb3IgdG9wLWxldmVsIFNWR3NcclxuICAgICAgICAgIHZhciB0b3BQYXJlbnQgPSBlbGVtZW50Lm5vZGVcclxuICAgICAgICAgIHdoaWxlICh0b3BQYXJlbnQucGFyZW50Tm9kZSl7XHJcbiAgICAgICAgICAgIHRvcFBhcmVudCA9IHRvcFBhcmVudC5wYXJlbnROb2RlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodG9wUGFyZW50ICE9IGRvY3VtZW50KSB0aHJvdyBuZXcgRXhjZXB0aW9uKCdFbGVtZW50IG5vdCBpbiB0aGUgZG9tJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gdGhlIGVsZW1lbnQgaXMgTk9UIGluIHRoZSBkb20sIHRocm93IGVycm9yXHJcbiAgICAgICAgICBpZighZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKGVsZW1lbnQubm9kZSkpIHRocm93IG5ldyBFeGNlcHRpb24oJ0VsZW1lbnQgbm90IGluIHRoZSBkb20nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZmluZCBuYXRpdmUgYmJveFxyXG4gICAgICAgIGJveCA9IGVsZW1lbnQubm9kZS5nZXRCQm94KClcclxuICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgaWYoZWxlbWVudCBpbnN0YW5jZW9mIFNWRy5TaGFwZSl7XHJcbiAgICAgICAgICB2YXIgY2xvbmUgPSBlbGVtZW50LmNsb25lKFNWRy5wYXJzZXIuZHJhdy5pbnN0YW5jZSkuc2hvdygpXHJcbiAgICAgICAgICBib3ggPSBjbG9uZS5ub2RlLmdldEJCb3goKVxyXG4gICAgICAgICAgY2xvbmUucmVtb3ZlKClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIGJveCA9IHtcclxuICAgICAgICAgICAgeDogICAgICBlbGVtZW50Lm5vZGUuY2xpZW50TGVmdFxyXG4gICAgICAgICAgLCB5OiAgICAgIGVsZW1lbnQubm9kZS5jbGllbnRUb3BcclxuICAgICAgICAgICwgd2lkdGg6ICBlbGVtZW50Lm5vZGUuY2xpZW50V2lkdGhcclxuICAgICAgICAgICwgaGVpZ2h0OiBlbGVtZW50Lm5vZGUuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBTVkcuQm94LmNhbGwodGhpcywgYm94KVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8vIERlZmluZSBhbmNlc3RvclxyXG4sIGluaGVyaXQ6IFNWRy5Cb3hcclxuXHJcbiAgLy8gRGVmaW5lIFBhcmVudFxyXG4sIHBhcmVudDogU1ZHLkVsZW1lbnRcclxuXHJcbiAgLy8gQ29uc3RydWN0b3JcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIEdldCBib3VuZGluZyBib3hcclxuICAgIGJib3g6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFNWRy5CQm94KHRoaXMpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxuXHJcblNWRy5CQm94LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNWRy5CQm94XHJcblxyXG5cclxuU1ZHLmV4dGVuZChTVkcuRWxlbWVudCwge1xyXG4gIHRib3g6IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLndhcm4oJ1VzZSBvZiBUQm94IGlzIGRlcHJlY2F0ZWQgYW5kIG1hcHBlZCB0byBSQm94LiBVc2UgLnJib3goKSBpbnN0ZWFkLicpXHJcbiAgICByZXR1cm4gdGhpcy5yYm94KHRoaXMuZG9jKCkpXHJcbiAgfVxyXG59KVxyXG5cclxuU1ZHLlJCb3ggPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplXHJcbiAgY3JlYXRlOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICBTVkcuQm94LmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSlcclxuXHJcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNWRy5FbGVtZW50KSB7XHJcbiAgICAgIFNWRy5Cb3guY2FsbCh0aGlzLCBlbGVtZW50Lm5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLCBpbmhlcml0OiBTVkcuQm94XHJcblxyXG4gIC8vIGRlZmluZSBQYXJlbnRcclxuLCBwYXJlbnQ6IFNWRy5FbGVtZW50XHJcblxyXG4sIGV4dGVuZDoge1xyXG4gICAgYWRkT2Zmc2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gb2Zmc2V0IGJ5IHdpbmRvdyBzY3JvbGwgcG9zaXRpb24sIGJlY2F1c2UgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGNoYW5nZXMgd2hlbiB3aW5kb3cgaXMgc2Nyb2xsZWRcclxuICAgICAgdGhpcy54ICs9IHdpbmRvdy5wYWdlWE9mZnNldFxyXG4gICAgICB0aGlzLnkgKz0gd2luZG93LnBhZ2VZT2Zmc2V0XHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDb25zdHJ1Y3RvclxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gR2V0IHJlY3QgYm94XHJcbiAgICByYm94OiBmdW5jdGlvbihlbCkge1xyXG4gICAgICBpZiAoZWwpIHJldHVybiBuZXcgU1ZHLlJCb3godGhpcykudHJhbnNmb3JtKGVsLnNjcmVlbkNUTSgpLmludmVyc2UoKSlcclxuICAgICAgcmV0dXJuIG5ldyBTVkcuUkJveCh0aGlzKS5hZGRPZmZzZXQoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pXHJcblxyXG5TVkcuUkJveC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTVkcuUkJveFxyXG5cblNWRy5NYXRyaXggPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplXHJcbiAgY3JlYXRlOiBmdW5jdGlvbihzb3VyY2UpIHtcclxuICAgIHZhciBpLCBiYXNlID0gYXJyYXlUb01hdHJpeChbMSwgMCwgMCwgMSwgMCwgMF0pXHJcblxyXG4gICAgLy8gZW5zdXJlIHNvdXJjZSBhcyBvYmplY3RcclxuICAgIHNvdXJjZSA9IHNvdXJjZSBpbnN0YW5jZW9mIFNWRy5FbGVtZW50ID9cclxuICAgICAgc291cmNlLm1hdHJpeGlmeSgpIDpcclxuICAgIHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnID9cclxuICAgICAgYXJyYXlUb01hdHJpeChzb3VyY2Uuc3BsaXQoU1ZHLnJlZ2V4LmRlbGltaXRlcikubWFwKHBhcnNlRmxvYXQpKSA6XHJcbiAgICBhcmd1bWVudHMubGVuZ3RoID09IDYgP1xyXG4gICAgICBhcnJheVRvTWF0cml4KFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkgOlxyXG4gICAgQXJyYXkuaXNBcnJheShzb3VyY2UpID9cclxuICAgICAgYXJyYXlUb01hdHJpeChzb3VyY2UpIDpcclxuICAgIHR5cGVvZiBzb3VyY2UgPT09ICdvYmplY3QnID9cclxuICAgICAgc291cmNlIDogYmFzZVxyXG5cclxuICAgIC8vIG1lcmdlIHNvdXJjZVxyXG4gICAgZm9yIChpID0gYWJjZGVmLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKVxyXG4gICAgICB0aGlzW2FiY2RlZltpXV0gPSBzb3VyY2VbYWJjZGVmW2ldXSAhPSBudWxsID9cclxuICAgICAgICBzb3VyY2VbYWJjZGVmW2ldXSA6IGJhc2VbYWJjZGVmW2ldXVxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIEV4dHJhY3QgaW5kaXZpZHVhbCB0cmFuc2Zvcm1hdGlvbnNcclxuICAgIGV4dHJhY3Q6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyBmaW5kIGRlbHRhIHRyYW5zZm9ybSBwb2ludHNcclxuICAgICAgdmFyIHB4ICAgID0gZGVsdGFUcmFuc2Zvcm1Qb2ludCh0aGlzLCAwLCAxKVxyXG4gICAgICAgICwgcHkgICAgPSBkZWx0YVRyYW5zZm9ybVBvaW50KHRoaXMsIDEsIDApXHJcbiAgICAgICAgLCBza2V3WCA9IDE4MCAvIE1hdGguUEkgKiBNYXRoLmF0YW4yKHB4LnksIHB4LngpIC0gOTBcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb25cclxuICAgICAgICB4OiAgICAgICAgdGhpcy5lXHJcbiAgICAgICwgeTogICAgICAgIHRoaXMuZlxyXG4gICAgICAsIHRyYW5zZm9ybWVkWDoodGhpcy5lICogTWF0aC5jb3Moc2tld1ggKiBNYXRoLlBJIC8gMTgwKSArIHRoaXMuZiAqIE1hdGguc2luKHNrZXdYICogTWF0aC5QSSAvIDE4MCkpIC8gTWF0aC5zcXJ0KHRoaXMuYSAqIHRoaXMuYSArIHRoaXMuYiAqIHRoaXMuYilcclxuICAgICAgLCB0cmFuc2Zvcm1lZFk6KHRoaXMuZiAqIE1hdGguY29zKHNrZXdYICogTWF0aC5QSSAvIDE4MCkgKyB0aGlzLmUgKiBNYXRoLnNpbigtc2tld1ggKiBNYXRoLlBJIC8gMTgwKSkgLyBNYXRoLnNxcnQodGhpcy5jICogdGhpcy5jICsgdGhpcy5kICogdGhpcy5kKVxyXG4gICAgICAgIC8vIHNrZXdcclxuICAgICAgLCBza2V3WDogICAgLXNrZXdYXHJcbiAgICAgICwgc2tld1k6ICAgIDE4MCAvIE1hdGguUEkgKiBNYXRoLmF0YW4yKHB5LnksIHB5LngpXHJcbiAgICAgICAgLy8gc2NhbGVcclxuICAgICAgLCBzY2FsZVg6ICAgTWF0aC5zcXJ0KHRoaXMuYSAqIHRoaXMuYSArIHRoaXMuYiAqIHRoaXMuYilcclxuICAgICAgLCBzY2FsZVk6ICAgTWF0aC5zcXJ0KHRoaXMuYyAqIHRoaXMuYyArIHRoaXMuZCAqIHRoaXMuZClcclxuICAgICAgICAvLyByb3RhdGlvblxyXG4gICAgICAsIHJvdGF0aW9uOiBza2V3WFxyXG4gICAgICAsIGE6IHRoaXMuYVxyXG4gICAgICAsIGI6IHRoaXMuYlxyXG4gICAgICAsIGM6IHRoaXMuY1xyXG4gICAgICAsIGQ6IHRoaXMuZFxyXG4gICAgICAsIGU6IHRoaXMuZVxyXG4gICAgICAsIGY6IHRoaXMuZlxyXG4gICAgICAsIG1hdHJpeDogbmV3IFNWRy5NYXRyaXgodGhpcylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQ2xvbmUgbWF0cml4XHJcbiAgLCBjbG9uZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBuZXcgU1ZHLk1hdHJpeCh0aGlzKVxyXG4gICAgfVxyXG4gICAgLy8gTW9ycGggb25lIG1hdHJpeCBpbnRvIGFub3RoZXJcclxuICAsIG1vcnBoOiBmdW5jdGlvbihtYXRyaXgpIHtcclxuICAgICAgLy8gc3RvcmUgbmV3IGRlc3RpbmF0aW9uXHJcbiAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBuZXcgU1ZHLk1hdHJpeChtYXRyaXgpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gR2V0IG1vcnBoZWQgbWF0cml4IGF0IGEgZ2l2ZW4gcG9zaXRpb25cclxuICAsIGF0OiBmdW5jdGlvbihwb3MpIHtcclxuICAgICAgLy8gbWFrZSBzdXJlIGEgZGVzdGluYXRpb24gaXMgZGVmaW5lZFxyXG4gICAgICBpZiAoIXRoaXMuZGVzdGluYXRpb24pIHJldHVybiB0aGlzXHJcblxyXG4gICAgICAvLyBjYWxjdWxhdGUgbW9ycGhlZCBtYXRyaXggYXQgYSBnaXZlbiBwb3NpdGlvblxyXG4gICAgICB2YXIgbWF0cml4ID0gbmV3IFNWRy5NYXRyaXgoe1xyXG4gICAgICAgIGE6IHRoaXMuYSArICh0aGlzLmRlc3RpbmF0aW9uLmEgLSB0aGlzLmEpICogcG9zXHJcbiAgICAgICwgYjogdGhpcy5iICsgKHRoaXMuZGVzdGluYXRpb24uYiAtIHRoaXMuYikgKiBwb3NcclxuICAgICAgLCBjOiB0aGlzLmMgKyAodGhpcy5kZXN0aW5hdGlvbi5jIC0gdGhpcy5jKSAqIHBvc1xyXG4gICAgICAsIGQ6IHRoaXMuZCArICh0aGlzLmRlc3RpbmF0aW9uLmQgLSB0aGlzLmQpICogcG9zXHJcbiAgICAgICwgZTogdGhpcy5lICsgKHRoaXMuZGVzdGluYXRpb24uZSAtIHRoaXMuZSkgKiBwb3NcclxuICAgICAgLCBmOiB0aGlzLmYgKyAodGhpcy5kZXN0aW5hdGlvbi5mIC0gdGhpcy5mKSAqIHBvc1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIG1hdHJpeFxyXG4gICAgfVxyXG4gICAgLy8gTXVsdGlwbGllcyBieSBnaXZlbiBtYXRyaXhcclxuICAsIG11bHRpcGx5OiBmdW5jdGlvbihtYXRyaXgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBTVkcuTWF0cml4KHRoaXMubmF0aXZlKCkubXVsdGlwbHkocGFyc2VNYXRyaXgobWF0cml4KS5uYXRpdmUoKSkpXHJcbiAgICB9XHJcbiAgICAvLyBJbnZlcnNlcyBtYXRyaXhcclxuICAsIGludmVyc2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFNWRy5NYXRyaXgodGhpcy5uYXRpdmUoKS5pbnZlcnNlKCkpXHJcbiAgICB9XHJcbiAgICAvLyBUcmFuc2xhdGUgbWF0cml4XHJcbiAgLCB0cmFuc2xhdGU6IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgICAgcmV0dXJuIG5ldyBTVkcuTWF0cml4KHRoaXMubmF0aXZlKCkudHJhbnNsYXRlKHggfHwgMCwgeSB8fCAwKSlcclxuICAgIH1cclxuICAgIC8vIFNjYWxlIG1hdHJpeFxyXG4gICwgc2NhbGU6IGZ1bmN0aW9uKHgsIHksIGN4LCBjeSkge1xyXG4gICAgICAvLyBzdXBwb3J0IHVuaWZvcm1hbCBzY2FsZVxyXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgeSA9IHhcclxuICAgICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDMpIHtcclxuICAgICAgICBjeSA9IGN4XHJcbiAgICAgICAgY3ggPSB5XHJcbiAgICAgICAgeSA9IHhcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuYXJvdW5kKGN4LCBjeSwgbmV3IFNWRy5NYXRyaXgoeCwgMCwgMCwgeSwgMCwgMCkpXHJcbiAgICB9XHJcbiAgICAvLyBSb3RhdGUgbWF0cml4XHJcbiAgLCByb3RhdGU6IGZ1bmN0aW9uKHIsIGN4LCBjeSkge1xyXG4gICAgICAvLyBjb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xyXG4gICAgICByID0gU1ZHLnV0aWxzLnJhZGlhbnMocilcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmFyb3VuZChjeCwgY3ksIG5ldyBTVkcuTWF0cml4KE1hdGguY29zKHIpLCBNYXRoLnNpbihyKSwgLU1hdGguc2luKHIpLCBNYXRoLmNvcyhyKSwgMCwgMCkpXHJcbiAgICB9XHJcbiAgICAvLyBGbGlwIG1hdHJpeCBvbiB4IG9yIHksIGF0IGEgZ2l2ZW4gb2Zmc2V0XHJcbiAgLCBmbGlwOiBmdW5jdGlvbihhLCBvKSB7XHJcbiAgICAgIHJldHVybiBhID09ICd4JyA/XHJcbiAgICAgICAgICB0aGlzLnNjYWxlKC0xLCAxLCBvLCAwKSA6XHJcbiAgICAgICAgYSA9PSAneScgP1xyXG4gICAgICAgICAgdGhpcy5zY2FsZSgxLCAtMSwgMCwgbykgOlxyXG4gICAgICAgICAgdGhpcy5zY2FsZSgtMSwgLTEsIGEsIG8gIT0gbnVsbCA/IG8gOiBhKVxyXG4gICAgfVxyXG4gICAgLy8gU2tld1xyXG4gICwgc2tldzogZnVuY3Rpb24oeCwgeSwgY3gsIGN5KSB7XHJcbiAgICAgIC8vIHN1cHBvcnQgdW5pZm9ybWFsIHNrZXdcclxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgIHkgPSB4XHJcbiAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgY3kgPSBjeFxyXG4gICAgICAgIGN4ID0geVxyXG4gICAgICAgIHkgPSB4XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGNvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXHJcbiAgICAgIHggPSBTVkcudXRpbHMucmFkaWFucyh4KVxyXG4gICAgICB5ID0gU1ZHLnV0aWxzLnJhZGlhbnMoeSlcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmFyb3VuZChjeCwgY3ksIG5ldyBTVkcuTWF0cml4KDEsIE1hdGgudGFuKHkpLCBNYXRoLnRhbih4KSwgMSwgMCwgMCkpXHJcbiAgICB9XHJcbiAgICAvLyBTa2V3WFxyXG4gICwgc2tld1g6IGZ1bmN0aW9uKHgsIGN4LCBjeSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5za2V3KHgsIDAsIGN4LCBjeSlcclxuICAgIH1cclxuICAgIC8vIFNrZXdZXHJcbiAgLCBza2V3WTogZnVuY3Rpb24oeSwgY3gsIGN5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNrZXcoMCwgeSwgY3gsIGN5KVxyXG4gICAgfVxyXG4gICAgLy8gVHJhbnNmb3JtIGFyb3VuZCBhIGNlbnRlciBwb2ludFxyXG4gICwgYXJvdW5kOiBmdW5jdGlvbihjeCwgY3ksIG1hdHJpeCkge1xyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgICAgIC5tdWx0aXBseShuZXcgU1ZHLk1hdHJpeCgxLCAwLCAwLCAxLCBjeCB8fCAwLCBjeSB8fCAwKSlcclxuICAgICAgICAubXVsdGlwbHkobWF0cml4KVxyXG4gICAgICAgIC5tdWx0aXBseShuZXcgU1ZHLk1hdHJpeCgxLCAwLCAwLCAxLCAtY3ggfHwgMCwgLWN5IHx8IDApKVxyXG4gICAgfVxyXG4gICAgLy8gQ29udmVydCB0byBuYXRpdmUgU1ZHTWF0cml4XHJcbiAgLCBuYXRpdmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyBjcmVhdGUgbmV3IG1hdHJpeFxyXG4gICAgICB2YXIgbWF0cml4ID0gU1ZHLnBhcnNlci5uYXRpdmUuY3JlYXRlU1ZHTWF0cml4KClcclxuXHJcbiAgICAgIC8vIHVwZGF0ZSB3aXRoIGN1cnJlbnQgdmFsdWVzXHJcbiAgICAgIGZvciAodmFyIGkgPSBhYmNkZWYubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcbiAgICAgICAgbWF0cml4W2FiY2RlZltpXV0gPSB0aGlzW2FiY2RlZltpXV1cclxuXHJcbiAgICAgIHJldHVybiBtYXRyaXhcclxuICAgIH1cclxuICAgIC8vIENvbnZlcnQgbWF0cml4IHRvIHN0cmluZ1xyXG4gICwgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyBDb25zdHJ1Y3QgdGhlIG1hdHJpeCBkaXJlY3RseSwgYXZvaWQgdmFsdWVzIHRoYXQgYXJlIHRvbyBzbWFsbFxyXG4gICAgICByZXR1cm4gJ21hdHJpeCgnICsgZmxvYXQzMlN0cmluZyh0aGlzLmEpICsgJywnICsgZmxvYXQzMlN0cmluZyh0aGlzLmIpXHJcbiAgICAgICAgKyAnLCcgKyBmbG9hdDMyU3RyaW5nKHRoaXMuYykgKyAnLCcgKyBmbG9hdDMyU3RyaW5nKHRoaXMuZClcclxuICAgICAgICArICcsJyArIGZsb2F0MzJTdHJpbmcodGhpcy5lKSArICcsJyArIGZsb2F0MzJTdHJpbmcodGhpcy5mKVxyXG4gICAgICAgICsgJyknXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBEZWZpbmUgcGFyZW50XHJcbiwgcGFyZW50OiBTVkcuRWxlbWVudFxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gR2V0IGN1cnJlbnQgbWF0cml4XHJcbiAgICBjdG06IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFNWRy5NYXRyaXgodGhpcy5ub2RlLmdldENUTSgpKVxyXG4gICAgfSxcclxuICAgIC8vIEdldCBjdXJyZW50IHNjcmVlbiBtYXRyaXhcclxuICAgIHNjcmVlbkNUTTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8qIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEzNDQ1MzdcclxuICAgICAgICAgVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBGRiBkb2VzIG5vdCByZXR1cm4gdGhlIHRyYW5zZm9ybWF0aW9uIG1hdHJpeFxyXG4gICAgICAgICBmb3IgdGhlIGlubmVyIGNvb3JkaW5hdGUgc3lzdGVtIHdoZW4gZ2V0U2NyZWVuQ1RNKCkgaXMgY2FsbGVkIG9uIG5lc3RlZCBzdmdzLlxyXG4gICAgICAgICBIb3dldmVyIGFsbCBvdGhlciBCcm93c2VycyBkbyB0aGF0ICovXHJcbiAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBTVkcuTmVzdGVkKSB7XHJcbiAgICAgICAgdmFyIHJlY3QgPSB0aGlzLnJlY3QoMSwxKVxyXG4gICAgICAgIHZhciBtID0gcmVjdC5ub2RlLmdldFNjcmVlbkNUTSgpXHJcbiAgICAgICAgcmVjdC5yZW1vdmUoKVxyXG4gICAgICAgIHJldHVybiBuZXcgU1ZHLk1hdHJpeChtKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXcgU1ZHLk1hdHJpeCh0aGlzLm5vZGUuZ2V0U2NyZWVuQ1RNKCkpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn0pXHJcblxuU1ZHLlBvaW50ID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZVxyXG4gIGNyZWF0ZTogZnVuY3Rpb24oeCx5KSB7XHJcbiAgICB2YXIgaSwgc291cmNlLCBiYXNlID0ge3g6MCwgeTowfVxyXG5cclxuICAgIC8vIGVuc3VyZSBzb3VyY2UgYXMgb2JqZWN0XHJcbiAgICBzb3VyY2UgPSBBcnJheS5pc0FycmF5KHgpID9cclxuICAgICAge3g6eFswXSwgeTp4WzFdfSA6XHJcbiAgICB0eXBlb2YgeCA9PT0gJ29iamVjdCcgP1xyXG4gICAgICB7eDp4LngsIHk6eC55fSA6XHJcbiAgICB4ICE9IG51bGwgP1xyXG4gICAgICB7eDp4LCB5Oih5ICE9IG51bGwgPyB5IDogeCl9IDogYmFzZSAvLyBJZiB5IGhhcyBubyB2YWx1ZSwgdGhlbiB4IGlzIHVzZWQgaGFzIGl0cyB2YWx1ZVxyXG5cclxuICAgIC8vIG1lcmdlIHNvdXJjZVxyXG4gICAgdGhpcy54ID0gc291cmNlLnhcclxuICAgIHRoaXMueSA9IHNvdXJjZS55XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gQ2xvbmUgcG9pbnRcclxuICAgIGNsb25lOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIG5ldyBTVkcuUG9pbnQodGhpcylcclxuICAgIH1cclxuICAgIC8vIE1vcnBoIG9uZSBwb2ludCBpbnRvIGFub3RoZXJcclxuICAsIG1vcnBoOiBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICAgIC8vIHN0b3JlIG5ldyBkZXN0aW5hdGlvblxyXG4gICAgICB0aGlzLmRlc3RpbmF0aW9uID0gbmV3IFNWRy5Qb2ludCh4LCB5KVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIEdldCBtb3JwaGVkIHBvaW50IGF0IGEgZ2l2ZW4gcG9zaXRpb25cclxuICAsIGF0OiBmdW5jdGlvbihwb3MpIHtcclxuICAgICAgLy8gbWFrZSBzdXJlIGEgZGVzdGluYXRpb24gaXMgZGVmaW5lZFxyXG4gICAgICBpZiAoIXRoaXMuZGVzdGluYXRpb24pIHJldHVybiB0aGlzXHJcblxyXG4gICAgICAvLyBjYWxjdWxhdGUgbW9ycGhlZCBtYXRyaXggYXQgYSBnaXZlbiBwb3NpdGlvblxyXG4gICAgICB2YXIgcG9pbnQgPSBuZXcgU1ZHLlBvaW50KHtcclxuICAgICAgICB4OiB0aGlzLnggKyAodGhpcy5kZXN0aW5hdGlvbi54IC0gdGhpcy54KSAqIHBvc1xyXG4gICAgICAsIHk6IHRoaXMueSArICh0aGlzLmRlc3RpbmF0aW9uLnkgLSB0aGlzLnkpICogcG9zXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gcG9pbnRcclxuICAgIH1cclxuICAgIC8vIENvbnZlcnQgdG8gbmF0aXZlIFNWR1BvaW50XHJcbiAgLCBuYXRpdmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyBjcmVhdGUgbmV3IHBvaW50XHJcbiAgICAgIHZhciBwb2ludCA9IFNWRy5wYXJzZXIubmF0aXZlLmNyZWF0ZVNWR1BvaW50KClcclxuXHJcbiAgICAgIC8vIHVwZGF0ZSB3aXRoIGN1cnJlbnQgdmFsdWVzXHJcbiAgICAgIHBvaW50LnggPSB0aGlzLnhcclxuICAgICAgcG9pbnQueSA9IHRoaXMueVxyXG5cclxuICAgICAgcmV0dXJuIHBvaW50XHJcbiAgICB9XHJcbiAgICAvLyB0cmFuc2Zvcm0gcG9pbnQgd2l0aCBtYXRyaXhcclxuICAsIHRyYW5zZm9ybTogZnVuY3Rpb24obWF0cml4KSB7XHJcbiAgICAgIHJldHVybiBuZXcgU1ZHLlBvaW50KHRoaXMubmF0aXZlKCkubWF0cml4VHJhbnNmb3JtKG1hdHJpeC5uYXRpdmUoKSkpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn0pXHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5FbGVtZW50LCB7XHJcblxyXG4gIC8vIEdldCBwb2ludFxyXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICByZXR1cm4gbmV3IFNWRy5Qb2ludCh4LHkpLnRyYW5zZm9ybSh0aGlzLnNjcmVlbkNUTSgpLmludmVyc2UoKSk7XHJcbiAgfVxyXG5cclxufSlcclxuXG5TVkcuZXh0ZW5kKFNWRy5FbGVtZW50LCB7XHJcbiAgLy8gU2V0IHN2ZyBlbGVtZW50IGF0dHJpYnV0ZVxyXG4gIGF0dHI6IGZ1bmN0aW9uKGEsIHYsIG4pIHtcclxuICAgIC8vIGFjdCBhcyBmdWxsIGdldHRlclxyXG4gICAgaWYgKGEgPT0gbnVsbCkge1xyXG4gICAgICAvLyBnZXQgYW4gb2JqZWN0IG9mIGF0dHJpYnV0ZXNcclxuICAgICAgYSA9IHt9XHJcbiAgICAgIHYgPSB0aGlzLm5vZGUuYXR0cmlidXRlc1xyXG4gICAgICBmb3IgKG4gPSB2Lmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKVxyXG4gICAgICAgIGFbdltuXS5ub2RlTmFtZV0gPSBTVkcucmVnZXguaXNOdW1iZXIudGVzdCh2W25dLm5vZGVWYWx1ZSkgPyBwYXJzZUZsb2F0KHZbbl0ubm9kZVZhbHVlKSA6IHZbbl0ubm9kZVZhbHVlXHJcblxyXG4gICAgICByZXR1cm4gYVxyXG5cclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcpIHtcclxuICAgICAgLy8gYXBwbHkgZXZlcnkgYXR0cmlidXRlIGluZGl2aWR1YWxseSBpZiBhbiBvYmplY3QgaXMgcGFzc2VkXHJcbiAgICAgIGZvciAodiBpbiBhKSB0aGlzLmF0dHIodiwgYVt2XSlcclxuXHJcbiAgICB9IGVsc2UgaWYgKHYgPT09IG51bGwpIHtcclxuICAgICAgICAvLyByZW1vdmUgdmFsdWVcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQXR0cmlidXRlKGEpXHJcblxyXG4gICAgfSBlbHNlIGlmICh2ID09IG51bGwpIHtcclxuICAgICAgLy8gYWN0IGFzIGEgZ2V0dGVyIGlmIHRoZSBmaXJzdCBhbmQgb25seSBhcmd1bWVudCBpcyBub3QgYW4gb2JqZWN0XHJcbiAgICAgIHYgPSB0aGlzLm5vZGUuZ2V0QXR0cmlidXRlKGEpXHJcbiAgICAgIHJldHVybiB2ID09IG51bGwgP1xyXG4gICAgICAgIFNWRy5kZWZhdWx0cy5hdHRyc1thXSA6XHJcbiAgICAgIFNWRy5yZWdleC5pc051bWJlci50ZXN0KHYpID9cclxuICAgICAgICBwYXJzZUZsb2F0KHYpIDogdlxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEJVRyBGSVg6IHNvbWUgYnJvd3NlcnMgd2lsbCByZW5kZXIgYSBzdHJva2UgaWYgYSBjb2xvciBpcyBnaXZlbiBldmVuIHRob3VnaCBzdHJva2Ugd2lkdGggaXMgMFxyXG4gICAgICBpZiAoYSA9PSAnc3Ryb2tlLXdpZHRoJylcclxuICAgICAgICB0aGlzLmF0dHIoJ3N0cm9rZScsIHBhcnNlRmxvYXQodikgPiAwID8gdGhpcy5fc3Ryb2tlIDogbnVsbClcclxuICAgICAgZWxzZSBpZiAoYSA9PSAnc3Ryb2tlJylcclxuICAgICAgICB0aGlzLl9zdHJva2UgPSB2XHJcblxyXG4gICAgICAvLyBjb252ZXJ0IGltYWdlIGZpbGwgYW5kIHN0cm9rZSB0byBwYXR0ZXJuc1xyXG4gICAgICBpZiAoYSA9PSAnZmlsbCcgfHwgYSA9PSAnc3Ryb2tlJykge1xyXG4gICAgICAgIGlmIChTVkcucmVnZXguaXNJbWFnZS50ZXN0KHYpKVxyXG4gICAgICAgICAgdiA9IHRoaXMuZG9jKCkuZGVmcygpLmltYWdlKHYsIDAsIDApXHJcblxyXG4gICAgICAgIGlmICh2IGluc3RhbmNlb2YgU1ZHLkltYWdlKVxyXG4gICAgICAgICAgdiA9IHRoaXMuZG9jKCkuZGVmcygpLnBhdHRlcm4oMCwgMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHYpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBlbnN1cmUgY29ycmVjdCBudW1lcmljIHZhbHVlcyAoYWxzbyBhY2NlcHRzIE5hTiBhbmQgSW5maW5pdHkpXHJcbiAgICAgIGlmICh0eXBlb2YgdiA9PT0gJ251bWJlcicpXHJcbiAgICAgICAgdiA9IG5ldyBTVkcuTnVtYmVyKHYpXHJcblxyXG4gICAgICAvLyBlbnN1cmUgZnVsbCBoZXggY29sb3JcclxuICAgICAgZWxzZSBpZiAoU1ZHLkNvbG9yLmlzQ29sb3IodikpXHJcbiAgICAgICAgdiA9IG5ldyBTVkcuQ29sb3IodilcclxuXHJcbiAgICAgIC8vIHBhcnNlIGFycmF5IHZhbHVlc1xyXG4gICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHYpKVxyXG4gICAgICAgIHYgPSBuZXcgU1ZHLkFycmF5KHYpXHJcblxyXG4gICAgICAvLyBpZiB0aGUgcGFzc2VkIGF0dHJpYnV0ZSBpcyBsZWFkaW5nLi4uXHJcbiAgICAgIGlmIChhID09ICdsZWFkaW5nJykge1xyXG4gICAgICAgIC8vIC4uLiBjYWxsIHRoZSBsZWFkaW5nIG1ldGhvZCBpbnN0ZWFkXHJcbiAgICAgICAgaWYgKHRoaXMubGVhZGluZylcclxuICAgICAgICAgIHRoaXMubGVhZGluZyh2KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHNldCBnaXZlbiBhdHRyaWJ1dGUgb24gbm9kZVxyXG4gICAgICAgIHR5cGVvZiBuID09PSAnc3RyaW5nJyA/XHJcbiAgICAgICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlTlMobiwgYSwgdi50b1N0cmluZygpKSA6XHJcbiAgICAgICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKGEsIHYudG9TdHJpbmcoKSlcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gcmVidWlsZCBpZiByZXF1aXJlZFxyXG4gICAgICBpZiAodGhpcy5yZWJ1aWxkICYmIChhID09ICdmb250LXNpemUnIHx8IGEgPT0gJ3gnKSlcclxuICAgICAgICB0aGlzLnJlYnVpbGQoYSwgdilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxufSlcblNWRy5leHRlbmQoU1ZHLkVsZW1lbnQsIHtcclxuICAvLyBBZGQgdHJhbnNmb3JtYXRpb25zXHJcbiAgdHJhbnNmb3JtOiBmdW5jdGlvbihvLCByZWxhdGl2ZSkge1xyXG4gICAgLy8gZ2V0IHRhcmdldCBpbiBjYXNlIG9mIHRoZSBmeCBtb2R1bGUsIG90aGVyd2lzZSByZWZlcmVuY2UgdGhpc1xyXG4gICAgdmFyIHRhcmdldCA9IHRoaXNcclxuICAgICAgLCBtYXRyaXgsIGJib3hcclxuXHJcbiAgICAvLyBhY3QgYXMgYSBnZXR0ZXJcclxuICAgIGlmICh0eXBlb2YgbyAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgLy8gZ2V0IGN1cnJlbnQgbWF0cml4XHJcbiAgICAgIG1hdHJpeCA9IG5ldyBTVkcuTWF0cml4KHRhcmdldCkuZXh0cmFjdCgpXHJcblxyXG4gICAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdzdHJpbmcnID8gbWF0cml4W29dIDogbWF0cml4XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0IGN1cnJlbnQgbWF0cml4XHJcbiAgICBtYXRyaXggPSBuZXcgU1ZHLk1hdHJpeCh0YXJnZXQpXHJcblxyXG4gICAgLy8gZW5zdXJlIHJlbGF0aXZlIGZsYWdcclxuICAgIHJlbGF0aXZlID0gISFyZWxhdGl2ZSB8fCAhIW8ucmVsYXRpdmVcclxuXHJcbiAgICAvLyBhY3Qgb24gbWF0cml4XHJcbiAgICBpZiAoby5hICE9IG51bGwpIHtcclxuICAgICAgbWF0cml4ID0gcmVsYXRpdmUgP1xyXG4gICAgICAgIC8vIHJlbGF0aXZlXHJcbiAgICAgICAgbWF0cml4Lm11bHRpcGx5KG5ldyBTVkcuTWF0cml4KG8pKSA6XHJcbiAgICAgICAgLy8gYWJzb2x1dGVcclxuICAgICAgICBuZXcgU1ZHLk1hdHJpeChvKVxyXG5cclxuICAgIC8vIGFjdCBvbiByb3RhdGlvblxyXG4gICAgfSBlbHNlIGlmIChvLnJvdGF0aW9uICE9IG51bGwpIHtcclxuICAgICAgLy8gZW5zdXJlIGNlbnRyZSBwb2ludFxyXG4gICAgICBlbnN1cmVDZW50cmUobywgdGFyZ2V0KVxyXG5cclxuICAgICAgLy8gYXBwbHkgdHJhbnNmb3JtYXRpb25cclxuICAgICAgbWF0cml4ID0gcmVsYXRpdmUgP1xyXG4gICAgICAgIC8vIHJlbGF0aXZlXHJcbiAgICAgICAgbWF0cml4LnJvdGF0ZShvLnJvdGF0aW9uLCBvLmN4LCBvLmN5KSA6XHJcbiAgICAgICAgLy8gYWJzb2x1dGVcclxuICAgICAgICBtYXRyaXgucm90YXRlKG8ucm90YXRpb24gLSBtYXRyaXguZXh0cmFjdCgpLnJvdGF0aW9uLCBvLmN4LCBvLmN5KVxyXG5cclxuICAgIC8vIGFjdCBvbiBzY2FsZVxyXG4gICAgfSBlbHNlIGlmIChvLnNjYWxlICE9IG51bGwgfHwgby5zY2FsZVggIT0gbnVsbCB8fCBvLnNjYWxlWSAhPSBudWxsKSB7XHJcbiAgICAgIC8vIGVuc3VyZSBjZW50cmUgcG9pbnRcclxuICAgICAgZW5zdXJlQ2VudHJlKG8sIHRhcmdldClcclxuXHJcbiAgICAgIC8vIGVuc3VyZSBzY2FsZSB2YWx1ZXMgb24gYm90aCBheGVzXHJcbiAgICAgIG8uc2NhbGVYID0gby5zY2FsZSAhPSBudWxsID8gby5zY2FsZSA6IG8uc2NhbGVYICE9IG51bGwgPyBvLnNjYWxlWCA6IDFcclxuICAgICAgby5zY2FsZVkgPSBvLnNjYWxlICE9IG51bGwgPyBvLnNjYWxlIDogby5zY2FsZVkgIT0gbnVsbCA/IG8uc2NhbGVZIDogMVxyXG5cclxuICAgICAgaWYgKCFyZWxhdGl2ZSkge1xyXG4gICAgICAgIC8vIGFic29sdXRlOyBtdWx0aXBseSBpbnZlcnNlZCB2YWx1ZXNcclxuICAgICAgICB2YXIgZSA9IG1hdHJpeC5leHRyYWN0KClcclxuICAgICAgICBvLnNjYWxlWCA9IG8uc2NhbGVYICogMSAvIGUuc2NhbGVYXHJcbiAgICAgICAgby5zY2FsZVkgPSBvLnNjYWxlWSAqIDEgLyBlLnNjYWxlWVxyXG4gICAgICB9XHJcblxyXG4gICAgICBtYXRyaXggPSBtYXRyaXguc2NhbGUoby5zY2FsZVgsIG8uc2NhbGVZLCBvLmN4LCBvLmN5KVxyXG5cclxuICAgIC8vIGFjdCBvbiBza2V3XHJcbiAgICB9IGVsc2UgaWYgKG8uc2tldyAhPSBudWxsIHx8IG8uc2tld1ggIT0gbnVsbCB8fCBvLnNrZXdZICE9IG51bGwpIHtcclxuICAgICAgLy8gZW5zdXJlIGNlbnRyZSBwb2ludFxyXG4gICAgICBlbnN1cmVDZW50cmUobywgdGFyZ2V0KVxyXG5cclxuICAgICAgLy8gZW5zdXJlIHNrZXcgdmFsdWVzIG9uIGJvdGggYXhlc1xyXG4gICAgICBvLnNrZXdYID0gby5za2V3ICE9IG51bGwgPyBvLnNrZXcgOiBvLnNrZXdYICE9IG51bGwgPyBvLnNrZXdYIDogMFxyXG4gICAgICBvLnNrZXdZID0gby5za2V3ICE9IG51bGwgPyBvLnNrZXcgOiBvLnNrZXdZICE9IG51bGwgPyBvLnNrZXdZIDogMFxyXG5cclxuICAgICAgaWYgKCFyZWxhdGl2ZSkge1xyXG4gICAgICAgIC8vIGFic29sdXRlOyByZXNldCBza2V3IHZhbHVlc1xyXG4gICAgICAgIHZhciBlID0gbWF0cml4LmV4dHJhY3QoKVxyXG4gICAgICAgIG1hdHJpeCA9IG1hdHJpeC5tdWx0aXBseShuZXcgU1ZHLk1hdHJpeCgpLnNrZXcoZS5za2V3WCwgZS5za2V3WSwgby5jeCwgby5jeSkuaW52ZXJzZSgpKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBtYXRyaXggPSBtYXRyaXguc2tldyhvLnNrZXdYLCBvLnNrZXdZLCBvLmN4LCBvLmN5KVxyXG5cclxuICAgIC8vIGFjdCBvbiBmbGlwXHJcbiAgICB9IGVsc2UgaWYgKG8uZmxpcCkge1xyXG4gICAgICBpZihvLmZsaXAgPT0gJ3gnIHx8IG8uZmxpcCA9PSAneScpIHtcclxuICAgICAgICBvLm9mZnNldCA9IG8ub2Zmc2V0ID09IG51bGwgPyB0YXJnZXQuYmJveCgpWydjJyArIG8uZmxpcF0gOiBvLm9mZnNldFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmKG8ub2Zmc2V0ID09IG51bGwpIHtcclxuICAgICAgICAgIGJib3ggPSB0YXJnZXQuYmJveCgpXHJcbiAgICAgICAgICBvLmZsaXAgPSBiYm94LmN4XHJcbiAgICAgICAgICBvLm9mZnNldCA9IGJib3guY3lcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgby5mbGlwID0gby5vZmZzZXRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdHJpeCA9IG5ldyBTVkcuTWF0cml4KCkuZmxpcChvLmZsaXAsIG8ub2Zmc2V0KVxyXG5cclxuICAgIC8vIGFjdCBvbiB0cmFuc2xhdGVcclxuICAgIH0gZWxzZSBpZiAoby54ICE9IG51bGwgfHwgby55ICE9IG51bGwpIHtcclxuICAgICAgaWYgKHJlbGF0aXZlKSB7XHJcbiAgICAgICAgLy8gcmVsYXRpdmVcclxuICAgICAgICBtYXRyaXggPSBtYXRyaXgudHJhbnNsYXRlKG8ueCwgby55KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGFic29sdXRlXHJcbiAgICAgICAgaWYgKG8ueCAhPSBudWxsKSBtYXRyaXguZSA9IG8ueFxyXG4gICAgICAgIGlmIChvLnkgIT0gbnVsbCkgbWF0cml4LmYgPSBvLnlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmF0dHIoJ3RyYW5zZm9ybScsIG1hdHJpeClcclxuICB9XHJcbn0pXHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5GWCwge1xyXG4gIHRyYW5zZm9ybTogZnVuY3Rpb24obywgcmVsYXRpdmUpIHtcclxuICAgIC8vIGdldCB0YXJnZXQgaW4gY2FzZSBvZiB0aGUgZnggbW9kdWxlLCBvdGhlcndpc2UgcmVmZXJlbmNlIHRoaXNcclxuICAgIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldCgpXHJcbiAgICAgICwgbWF0cml4LCBiYm94XHJcblxyXG4gICAgLy8gYWN0IGFzIGEgZ2V0dGVyXHJcbiAgICBpZiAodHlwZW9mIG8gIT09ICdvYmplY3QnKSB7XHJcbiAgICAgIC8vIGdldCBjdXJyZW50IG1hdHJpeFxyXG4gICAgICBtYXRyaXggPSBuZXcgU1ZHLk1hdHJpeCh0YXJnZXQpLmV4dHJhY3QoKVxyXG5cclxuICAgICAgcmV0dXJuIHR5cGVvZiBvID09PSAnc3RyaW5nJyA/IG1hdHJpeFtvXSA6IG1hdHJpeFxyXG4gICAgfVxyXG5cclxuICAgIC8vIGVuc3VyZSByZWxhdGl2ZSBmbGFnXHJcbiAgICByZWxhdGl2ZSA9ICEhcmVsYXRpdmUgfHwgISFvLnJlbGF0aXZlXHJcblxyXG4gICAgLy8gYWN0IG9uIG1hdHJpeFxyXG4gICAgaWYgKG8uYSAhPSBudWxsKSB7XHJcbiAgICAgIG1hdHJpeCA9IG5ldyBTVkcuTWF0cml4KG8pXHJcblxyXG4gICAgLy8gYWN0IG9uIHJvdGF0aW9uXHJcbiAgICB9IGVsc2UgaWYgKG8ucm90YXRpb24gIT0gbnVsbCkge1xyXG4gICAgICAvLyBlbnN1cmUgY2VudHJlIHBvaW50XHJcbiAgICAgIGVuc3VyZUNlbnRyZShvLCB0YXJnZXQpXHJcblxyXG4gICAgICAvLyBhcHBseSB0cmFuc2Zvcm1hdGlvblxyXG4gICAgICBtYXRyaXggPSBuZXcgU1ZHLlJvdGF0ZShvLnJvdGF0aW9uLCBvLmN4LCBvLmN5KVxyXG5cclxuICAgIC8vIGFjdCBvbiBzY2FsZVxyXG4gICAgfSBlbHNlIGlmIChvLnNjYWxlICE9IG51bGwgfHwgby5zY2FsZVggIT0gbnVsbCB8fCBvLnNjYWxlWSAhPSBudWxsKSB7XHJcbiAgICAgIC8vIGVuc3VyZSBjZW50cmUgcG9pbnRcclxuICAgICAgZW5zdXJlQ2VudHJlKG8sIHRhcmdldClcclxuXHJcbiAgICAgIC8vIGVuc3VyZSBzY2FsZSB2YWx1ZXMgb24gYm90aCBheGVzXHJcbiAgICAgIG8uc2NhbGVYID0gby5zY2FsZSAhPSBudWxsID8gby5zY2FsZSA6IG8uc2NhbGVYICE9IG51bGwgPyBvLnNjYWxlWCA6IDFcclxuICAgICAgby5zY2FsZVkgPSBvLnNjYWxlICE9IG51bGwgPyBvLnNjYWxlIDogby5zY2FsZVkgIT0gbnVsbCA/IG8uc2NhbGVZIDogMVxyXG5cclxuICAgICAgbWF0cml4ID0gbmV3IFNWRy5TY2FsZShvLnNjYWxlWCwgby5zY2FsZVksIG8uY3gsIG8uY3kpXHJcblxyXG4gICAgLy8gYWN0IG9uIHNrZXdcclxuICAgIH0gZWxzZSBpZiAoby5za2V3WCAhPSBudWxsIHx8IG8uc2tld1kgIT0gbnVsbCkge1xyXG4gICAgICAvLyBlbnN1cmUgY2VudHJlIHBvaW50XHJcbiAgICAgIGVuc3VyZUNlbnRyZShvLCB0YXJnZXQpXHJcblxyXG4gICAgICAvLyBlbnN1cmUgc2tldyB2YWx1ZXMgb24gYm90aCBheGVzXHJcbiAgICAgIG8uc2tld1ggPSBvLnNrZXdYICE9IG51bGwgPyBvLnNrZXdYIDogMFxyXG4gICAgICBvLnNrZXdZID0gby5za2V3WSAhPSBudWxsID8gby5za2V3WSA6IDBcclxuXHJcbiAgICAgIG1hdHJpeCA9IG5ldyBTVkcuU2tldyhvLnNrZXdYLCBvLnNrZXdZLCBvLmN4LCBvLmN5KVxyXG5cclxuICAgIC8vIGFjdCBvbiBmbGlwXHJcbiAgICB9IGVsc2UgaWYgKG8uZmxpcCkge1xyXG4gICAgICBpZihvLmZsaXAgPT0gJ3gnIHx8IG8uZmxpcCA9PSAneScpIHtcclxuICAgICAgICBvLm9mZnNldCA9IG8ub2Zmc2V0ID09IG51bGwgPyB0YXJnZXQuYmJveCgpWydjJyArIG8uZmxpcF0gOiBvLm9mZnNldFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmKG8ub2Zmc2V0ID09IG51bGwpIHtcclxuICAgICAgICAgIGJib3ggPSB0YXJnZXQuYmJveCgpXHJcbiAgICAgICAgICBvLmZsaXAgPSBiYm94LmN4XHJcbiAgICAgICAgICBvLm9mZnNldCA9IGJib3guY3lcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgby5mbGlwID0gby5vZmZzZXRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdHJpeCA9IG5ldyBTVkcuTWF0cml4KCkuZmxpcChvLmZsaXAsIG8ub2Zmc2V0KVxyXG5cclxuICAgIC8vIGFjdCBvbiB0cmFuc2xhdGVcclxuICAgIH0gZWxzZSBpZiAoby54ICE9IG51bGwgfHwgby55ICE9IG51bGwpIHtcclxuICAgICAgbWF0cml4ID0gbmV3IFNWRy5UcmFuc2xhdGUoby54LCBvLnkpXHJcbiAgICB9XHJcblxyXG4gICAgaWYoIW1hdHJpeCkgcmV0dXJuIHRoaXNcclxuXHJcbiAgICBtYXRyaXgucmVsYXRpdmUgPSByZWxhdGl2ZVxyXG5cclxuICAgIHRoaXMubGFzdCgpLnRyYW5zZm9ybXMucHVzaChtYXRyaXgpXHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2NhbGxTdGFydCgpXHJcbiAgfVxyXG59KVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuRWxlbWVudCwge1xyXG4gIC8vIFJlc2V0IGFsbCB0cmFuc2Zvcm1hdGlvbnNcclxuICB1bnRyYW5zZm9ybTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdHRyKCd0cmFuc2Zvcm0nLCBudWxsKVxyXG4gIH0sXHJcbiAgLy8gbWVyZ2UgdGhlIHdob2xlIHRyYW5zZm9ybWF0aW9uIGNoYWluIGludG8gb25lIG1hdHJpeCBhbmQgcmV0dXJucyBpdFxyXG4gIG1hdHJpeGlmeTogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyIG1hdHJpeCA9ICh0aGlzLmF0dHIoJ3RyYW5zZm9ybScpIHx8ICcnKVxyXG4gICAgICAvLyBzcGxpdCB0cmFuc2Zvcm1hdGlvbnNcclxuICAgICAgLnNwbGl0KFNWRy5yZWdleC50cmFuc2Zvcm1zKS5zbGljZSgwLC0xKS5tYXAoZnVuY3Rpb24oc3RyKXtcclxuICAgICAgICAvLyBnZW5lcmF0ZSBrZXkgPT4gdmFsdWUgcGFpcnNcclxuICAgICAgICB2YXIga3YgPSBzdHIudHJpbSgpLnNwbGl0KCcoJylcclxuICAgICAgICByZXR1cm4gW2t2WzBdLCBrdlsxXS5zcGxpdChTVkcucmVnZXguZGVsaW1pdGVyKS5tYXAoZnVuY3Rpb24oc3RyKXsgcmV0dXJuIHBhcnNlRmxvYXQoc3RyKSB9KV1cclxuICAgICAgfSlcclxuICAgICAgLy8gbWVyZ2UgZXZlcnkgdHJhbnNmb3JtYXRpb24gaW50byBvbmUgbWF0cml4XHJcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24obWF0cml4LCB0cmFuc2Zvcm0pe1xyXG5cclxuICAgICAgICBpZih0cmFuc2Zvcm1bMF0gPT0gJ21hdHJpeCcpIHJldHVybiBtYXRyaXgubXVsdGlwbHkoYXJyYXlUb01hdHJpeCh0cmFuc2Zvcm1bMV0pKVxyXG4gICAgICAgIHJldHVybiBtYXRyaXhbdHJhbnNmb3JtWzBdXS5hcHBseShtYXRyaXgsIHRyYW5zZm9ybVsxXSlcclxuXHJcbiAgICAgIH0sIG5ldyBTVkcuTWF0cml4KCkpXHJcblxyXG4gICAgcmV0dXJuIG1hdHJpeFxyXG4gIH0sXHJcbiAgLy8gYWRkIGFuIGVsZW1lbnQgdG8gYW5vdGhlciBwYXJlbnQgd2l0aG91dCBjaGFuZ2luZyB0aGUgdmlzdWFsIHJlcHJlc2VudGF0aW9uIG9uIHRoZSBzY3JlZW5cclxuICB0b1BhcmVudDogZnVuY3Rpb24ocGFyZW50KSB7XHJcbiAgICBpZih0aGlzID09IHBhcmVudCkgcmV0dXJuIHRoaXNcclxuICAgIHZhciBjdG0gPSB0aGlzLnNjcmVlbkNUTSgpXHJcbiAgICB2YXIgcEN0bSA9IHBhcmVudC5zY3JlZW5DVE0oKS5pbnZlcnNlKClcclxuXHJcbiAgICB0aGlzLmFkZFRvKHBhcmVudCkudW50cmFuc2Zvcm0oKS50cmFuc2Zvcm0ocEN0bS5tdWx0aXBseShjdG0pKVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfSxcclxuICAvLyBzYW1lIGFzIGFib3ZlIHdpdGggcGFyZW50IGVxdWFscyByb290LXN2Z1xyXG4gIHRvRG9jOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLnRvUGFyZW50KHRoaXMuZG9jKCkpXHJcbiAgfVxyXG5cclxufSlcclxuXHJcblNWRy5UcmFuc2Zvcm1hdGlvbiA9IFNWRy5pbnZlbnQoe1xyXG5cclxuICBjcmVhdGU6IGZ1bmN0aW9uKHNvdXJjZSwgaW52ZXJzZWQpe1xyXG5cclxuICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBpbnZlcnNlZCAhPSAnYm9vbGVhbicpe1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSlcclxuICAgIH1cclxuXHJcbiAgICBpZihBcnJheS5pc0FycmF5KHNvdXJjZSkpe1xyXG4gICAgICBmb3IodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW47ICsraSl7XHJcbiAgICAgICAgdGhpc1t0aGlzLmFyZ3VtZW50c1tpXV0gPSBzb3VyY2VbaV1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKHR5cGVvZiBzb3VyY2UgPT0gJ29iamVjdCcpe1xyXG4gICAgICBmb3IodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW47ICsraSl7XHJcbiAgICAgICAgdGhpc1t0aGlzLmFyZ3VtZW50c1tpXV0gPSBzb3VyY2VbdGhpcy5hcmd1bWVudHNbaV1dXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmludmVyc2VkID0gZmFsc2VcclxuXHJcbiAgICBpZihpbnZlcnNlZCA9PT0gdHJ1ZSl7XHJcbiAgICAgIHRoaXMuaW52ZXJzZWQgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiwgZXh0ZW5kOiB7XHJcblxyXG4gICAgYXJndW1lbnRzOiBbXVxyXG4gICwgbWV0aG9kOiAnJ1xyXG5cclxuICAsIGF0OiBmdW5jdGlvbihwb3Mpe1xyXG5cclxuICAgICAgdmFyIHBhcmFtcyA9IFtdXHJcblxyXG4gICAgICBmb3IodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW47ICsraSl7XHJcbiAgICAgICAgcGFyYW1zLnB1c2godGhpc1t0aGlzLmFyZ3VtZW50c1tpXV0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBtID0gdGhpcy5fdW5kbyB8fCBuZXcgU1ZHLk1hdHJpeCgpXHJcblxyXG4gICAgICBtID0gbmV3IFNWRy5NYXRyaXgoKS5tb3JwaChTVkcuTWF0cml4LnByb3RvdHlwZVt0aGlzLm1ldGhvZF0uYXBwbHkobSwgcGFyYW1zKSkuYXQocG9zKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuaW52ZXJzZWQgPyBtLmludmVyc2UoKSA6IG1cclxuXHJcbiAgICB9XHJcblxyXG4gICwgdW5kbzogZnVuY3Rpb24obyl7XHJcbiAgICAgIGZvcih2YXIgaSA9IDAsIGxlbiA9IHRoaXMuYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKXtcclxuICAgICAgICBvW3RoaXMuYXJndW1lbnRzW2ldXSA9IHR5cGVvZiB0aGlzW3RoaXMuYXJndW1lbnRzW2ldXSA9PSAndW5kZWZpbmVkJyA/IDAgOiBvW3RoaXMuYXJndW1lbnRzW2ldXVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUaGUgbWV0aG9kIFNWRy5NYXRyaXguZXh0cmFjdCB3aGljaCB3YXMgdXNlZCBiZWZvcmUgY2FsbGluZyB0aGlzXHJcbiAgICAgIC8vIG1ldGhvZCB0byBvYnRhaW4gYSB2YWx1ZSBmb3IgdGhlIHBhcmFtZXRlciBvIGRvZXNuJ3QgcmV0dXJuIGEgY3ggYW5kXHJcbiAgICAgIC8vIGEgY3kgc28gd2UgdXNlIHRoZSBvbmVzIHRoYXQgd2VyZSBwcm92aWRlZCB0byB0aGlzIG9iamVjdCBhdCBpdHMgY3JlYXRpb25cclxuICAgICAgby5jeCA9IHRoaXMuY3hcclxuICAgICAgby5jeSA9IHRoaXMuY3lcclxuXHJcbiAgICAgIHRoaXMuX3VuZG8gPSBuZXcgU1ZHW2NhcGl0YWxpemUodGhpcy5tZXRob2QpXShvLCB0cnVlKS5hdCgxKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufSlcclxuXHJcblNWRy5UcmFuc2xhdGUgPSBTVkcuaW52ZW50KHtcclxuXHJcbiAgcGFyZW50OiBTVkcuTWF0cml4XHJcbiwgaW5oZXJpdDogU1ZHLlRyYW5zZm9ybWF0aW9uXHJcblxyXG4sIGNyZWF0ZTogZnVuY3Rpb24oc291cmNlLCBpbnZlcnNlZCl7XHJcbiAgICB0aGlzLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSlcclxuICB9XHJcblxyXG4sIGV4dGVuZDoge1xyXG4gICAgYXJndW1lbnRzOiBbJ3RyYW5zZm9ybWVkWCcsICd0cmFuc2Zvcm1lZFknXVxyXG4gICwgbWV0aG9kOiAndHJhbnNsYXRlJ1xyXG4gIH1cclxuXHJcbn0pXHJcblxyXG5TVkcuUm90YXRlID0gU1ZHLmludmVudCh7XHJcblxyXG4gIHBhcmVudDogU1ZHLk1hdHJpeFxyXG4sIGluaGVyaXQ6IFNWRy5UcmFuc2Zvcm1hdGlvblxyXG5cclxuLCBjcmVhdGU6IGZ1bmN0aW9uKHNvdXJjZSwgaW52ZXJzZWQpe1xyXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpXHJcbiAgfVxyXG5cclxuLCBleHRlbmQ6IHtcclxuICAgIGFyZ3VtZW50czogWydyb3RhdGlvbicsICdjeCcsICdjeSddXHJcbiAgLCBtZXRob2Q6ICdyb3RhdGUnXHJcbiAgLCBhdDogZnVuY3Rpb24ocG9zKXtcclxuICAgICAgdmFyIG0gPSBuZXcgU1ZHLk1hdHJpeCgpLnJvdGF0ZShuZXcgU1ZHLk51bWJlcigpLm1vcnBoKHRoaXMucm90YXRpb24gLSAodGhpcy5fdW5kbyA/IHRoaXMuX3VuZG8ucm90YXRpb24gOiAwKSkuYXQocG9zKSwgdGhpcy5jeCwgdGhpcy5jeSlcclxuICAgICAgcmV0dXJuIHRoaXMuaW52ZXJzZWQgPyBtLmludmVyc2UoKSA6IG1cclxuICAgIH1cclxuICAsIHVuZG86IGZ1bmN0aW9uKG8pe1xyXG4gICAgICB0aGlzLl91bmRvID0gb1xyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pXHJcblxyXG5TVkcuU2NhbGUgPSBTVkcuaW52ZW50KHtcclxuXHJcbiAgcGFyZW50OiBTVkcuTWF0cml4XHJcbiwgaW5oZXJpdDogU1ZHLlRyYW5zZm9ybWF0aW9uXHJcblxyXG4sIGNyZWF0ZTogZnVuY3Rpb24oc291cmNlLCBpbnZlcnNlZCl7XHJcbiAgICB0aGlzLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSlcclxuICB9XHJcblxyXG4sIGV4dGVuZDoge1xyXG4gICAgYXJndW1lbnRzOiBbJ3NjYWxlWCcsICdzY2FsZVknLCAnY3gnLCAnY3knXVxyXG4gICwgbWV0aG9kOiAnc2NhbGUnXHJcbiAgfVxyXG5cclxufSlcclxuXHJcblNWRy5Ta2V3ID0gU1ZHLmludmVudCh7XHJcblxyXG4gIHBhcmVudDogU1ZHLk1hdHJpeFxyXG4sIGluaGVyaXQ6IFNWRy5UcmFuc2Zvcm1hdGlvblxyXG5cclxuLCBjcmVhdGU6IGZ1bmN0aW9uKHNvdXJjZSwgaW52ZXJzZWQpe1xyXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpXHJcbiAgfVxyXG5cclxuLCBleHRlbmQ6IHtcclxuICAgIGFyZ3VtZW50czogWydza2V3WCcsICdza2V3WScsICdjeCcsICdjeSddXHJcbiAgLCBtZXRob2Q6ICdza2V3J1xyXG4gIH1cclxuXHJcbn0pXHJcblxuU1ZHLmV4dGVuZChTVkcuRWxlbWVudCwge1xyXG4gIC8vIER5bmFtaWMgc3R5bGUgZ2VuZXJhdG9yXHJcbiAgc3R5bGU6IGZ1bmN0aW9uKHMsIHYpIHtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApIHtcclxuICAgICAgLy8gZ2V0IGZ1bGwgc3R5bGVcclxuICAgICAgcmV0dXJuIHRoaXMubm9kZS5zdHlsZS5jc3NUZXh0IHx8ICcnXHJcblxyXG4gICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xyXG4gICAgICAvLyBhcHBseSBldmVyeSBzdHlsZSBpbmRpdmlkdWFsbHkgaWYgYW4gb2JqZWN0IGlzIHBhc3NlZFxyXG4gICAgICBpZiAodHlwZW9mIHMgPT0gJ29iamVjdCcpIHtcclxuICAgICAgICBmb3IgKHYgaW4gcykgdGhpcy5zdHlsZSh2LCBzW3ZdKVxyXG5cclxuICAgICAgfSBlbHNlIGlmIChTVkcucmVnZXguaXNDc3MudGVzdChzKSkge1xyXG4gICAgICAgIC8vIHBhcnNlIGNzcyBzdHJpbmdcclxuICAgICAgICBzID0gcy5zcGxpdCgvXFxzKjtcXHMqLylcclxuICAgICAgICAgIC8vIGZpbHRlciBvdXQgc3VmZml4IDsgYW5kIHN0dWZmIGxpa2UgOztcclxuICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oZSkgeyByZXR1cm4gISFlIH0pXHJcbiAgICAgICAgICAubWFwKGZ1bmN0aW9uKGUpeyByZXR1cm4gZS5zcGxpdCgvXFxzKjpcXHMqLykgfSlcclxuXHJcbiAgICAgICAgLy8gYXBwbHkgZXZlcnkgZGVmaW5pdGlvbiBpbmRpdmlkdWFsbHlcclxuICAgICAgICB3aGlsZSAodiA9IHMucG9wKCkpIHtcclxuICAgICAgICAgIHRoaXMuc3R5bGUodlswXSwgdlsxXSlcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gYWN0IGFzIGEgZ2V0dGVyIGlmIHRoZSBmaXJzdCBhbmQgb25seSBhcmd1bWVudCBpcyBub3QgYW4gb2JqZWN0XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5zdHlsZVtjYW1lbENhc2UocyldXHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm5vZGUuc3R5bGVbY2FtZWxDYXNlKHMpXSA9IHYgPT09IG51bGwgfHwgU1ZHLnJlZ2V4LmlzQmxhbmsudGVzdCh2KSA/ICcnIDogdlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG59KVxuU1ZHLlBhcmVudCA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGVsZW1lbnQpXHJcbiAgfVxyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuRWxlbWVudFxyXG5cclxuICAvLyBBZGQgY2xhc3MgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gUmV0dXJucyBhbGwgY2hpbGQgZWxlbWVudHNcclxuICAgIGNoaWxkcmVuOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIFNWRy51dGlscy5tYXAoU1ZHLnV0aWxzLmZpbHRlclNWR0VsZW1lbnRzKHRoaXMubm9kZS5jaGlsZE5vZGVzKSwgZnVuY3Rpb24obm9kZSkge1xyXG4gICAgICAgIHJldHVybiBTVkcuYWRvcHQobm9kZSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vIEFkZCBnaXZlbiBlbGVtZW50IGF0IGEgcG9zaXRpb25cclxuICAsIGFkZDogZnVuY3Rpb24oZWxlbWVudCwgaSkge1xyXG4gICAgICBpZiAoaSA9PSBudWxsKVxyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChlbGVtZW50Lm5vZGUpXHJcbiAgICAgIGVsc2UgaWYgKGVsZW1lbnQubm9kZSAhPSB0aGlzLm5vZGUuY2hpbGROb2Rlc1tpXSlcclxuICAgICAgICB0aGlzLm5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQubm9kZSwgdGhpcy5ub2RlLmNoaWxkTm9kZXNbaV0pXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gQmFzaWNhbGx5IGRvZXMgdGhlIHNhbWUgYXMgYGFkZCgpYCBidXQgcmV0dXJucyB0aGUgYWRkZWQgZWxlbWVudCBpbnN0ZWFkXHJcbiAgLCBwdXQ6IGZ1bmN0aW9uKGVsZW1lbnQsIGkpIHtcclxuICAgICAgdGhpcy5hZGQoZWxlbWVudCwgaSlcclxuICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgIH1cclxuICAgIC8vIENoZWNrcyBpZiB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBhIGNoaWxkXHJcbiAgLCBoYXM6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5kZXgoZWxlbWVudCkgPj0gMFxyXG4gICAgfVxyXG4gICAgLy8gR2V0cyBpbmRleCBvZiBnaXZlbiBlbGVtZW50XHJcbiAgLCBpbmRleDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICByZXR1cm4gW10uc2xpY2UuY2FsbCh0aGlzLm5vZGUuY2hpbGROb2RlcykuaW5kZXhPZihlbGVtZW50Lm5vZGUpXHJcbiAgICB9XHJcbiAgICAvLyBHZXQgYSBlbGVtZW50IGF0IHRoZSBnaXZlbiBpbmRleFxyXG4gICwgZ2V0OiBmdW5jdGlvbihpKSB7XHJcbiAgICAgIHJldHVybiBTVkcuYWRvcHQodGhpcy5ub2RlLmNoaWxkTm9kZXNbaV0pXHJcbiAgICB9XHJcbiAgICAvLyBHZXQgZmlyc3QgY2hpbGRcclxuICAsIGZpcnN0OiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0KDApXHJcbiAgICB9XHJcbiAgICAvLyBHZXQgdGhlIGxhc3QgY2hpbGRcclxuICAsIGxhc3Q6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5ub2RlLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSlcclxuICAgIH1cclxuICAgIC8vIEl0ZXJhdGVzIG92ZXIgYWxsIGNoaWxkcmVuIGFuZCBpbnZva2VzIGEgZ2l2ZW4gYmxvY2tcclxuICAsIGVhY2g6IGZ1bmN0aW9uKGJsb2NrLCBkZWVwKSB7XHJcbiAgICAgIHZhciBpLCBpbFxyXG4gICAgICAgICwgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKClcclxuXHJcbiAgICAgIGZvciAoaSA9IDAsIGlsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xyXG4gICAgICAgIGlmIChjaGlsZHJlbltpXSBpbnN0YW5jZW9mIFNWRy5FbGVtZW50KVxyXG4gICAgICAgICAgYmxvY2suYXBwbHkoY2hpbGRyZW5baV0sIFtpLCBjaGlsZHJlbl0pXHJcblxyXG4gICAgICAgIGlmIChkZWVwICYmIChjaGlsZHJlbltpXSBpbnN0YW5jZW9mIFNWRy5Db250YWluZXIpKVxyXG4gICAgICAgICAgY2hpbGRyZW5baV0uZWFjaChibG9jaywgZGVlcClcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIFJlbW92ZSBhIGdpdmVuIGNoaWxkXHJcbiAgLCByZW1vdmVFbGVtZW50OiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHRoaXMubm9kZS5yZW1vdmVDaGlsZChlbGVtZW50Lm5vZGUpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gUmVtb3ZlIGFsbCBlbGVtZW50cyBpbiB0aGlzIGNvbnRhaW5lclxyXG4gICwgY2xlYXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyByZW1vdmUgY2hpbGRyZW5cclxuICAgICAgd2hpbGUodGhpcy5ub2RlLmhhc0NoaWxkTm9kZXMoKSlcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlLmxhc3RDaGlsZClcclxuXHJcbiAgICAgIC8vIHJlbW92ZSBkZWZzIHJlZmVyZW5jZVxyXG4gICAgICBkZWxldGUgdGhpcy5fZGVmc1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAsIC8vIEdldCBkZWZzXHJcbiAgICBkZWZzOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZG9jKCkuZGVmcygpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxuXG5TVkcuZXh0ZW5kKFNWRy5QYXJlbnQsIHtcclxuXHJcbiAgdW5ncm91cDogZnVuY3Rpb24ocGFyZW50LCBkZXB0aCkge1xyXG4gICAgaWYoZGVwdGggPT09IDAgfHwgdGhpcyBpbnN0YW5jZW9mIFNWRy5EZWZzIHx8IHRoaXMubm9kZSA9PSBTVkcucGFyc2VyLmRyYXcpIHJldHVybiB0aGlzXHJcblxyXG4gICAgcGFyZW50ID0gcGFyZW50IHx8ICh0aGlzIGluc3RhbmNlb2YgU1ZHLkRvYyA/IHRoaXMgOiB0aGlzLnBhcmVudChTVkcuUGFyZW50KSlcclxuICAgIGRlcHRoID0gZGVwdGggfHwgSW5maW5pdHlcclxuXHJcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIFNWRy5EZWZzKSByZXR1cm4gdGhpc1xyXG4gICAgICBpZih0aGlzIGluc3RhbmNlb2YgU1ZHLlBhcmVudCkgcmV0dXJuIHRoaXMudW5ncm91cChwYXJlbnQsIGRlcHRoLTEpXHJcbiAgICAgIHJldHVybiB0aGlzLnRvUGFyZW50KHBhcmVudClcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5ub2RlLmZpcnN0Q2hpbGQgfHwgdGhpcy5yZW1vdmUoKVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfSxcclxuXHJcbiAgZmxhdHRlbjogZnVuY3Rpb24ocGFyZW50LCBkZXB0aCkge1xyXG4gICAgcmV0dXJuIHRoaXMudW5ncm91cChwYXJlbnQsIGRlcHRoKVxyXG4gIH1cclxuXHJcbn0pXG5TVkcuQ29udGFpbmVyID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgZWxlbWVudClcclxuICB9XHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5QYXJlbnRcclxuXHJcbn0pXG5cclxuU1ZHLlZpZXdCb3ggPSBTVkcuaW52ZW50KHtcclxuXHJcbiAgY3JlYXRlOiBmdW5jdGlvbihzb3VyY2UpIHtcclxuICAgIHZhciBpLCBiYXNlID0gWzAsIDAsIDAsIDBdXHJcblxyXG4gICAgdmFyIHgsIHksIHdpZHRoLCBoZWlnaHQsIGJveCwgdmlldywgd2UsIGhlXHJcbiAgICAgICwgd20gICA9IDEgLy8gd2lkdGggbXVsdGlwbGllclxyXG4gICAgICAsIGhtICAgPSAxIC8vIGhlaWdodCBtdWx0aXBsaWVyXHJcbiAgICAgICwgcmVnICA9IC9bKy1dPyg/OlxcZCsoPzpcXC5cXGQqKT98XFwuXFxkKykoPzplWystXT9cXGQrKT8vZ2lcclxuXHJcbiAgICBpZihzb3VyY2UgaW5zdGFuY2VvZiBTVkcuRWxlbWVudCl7XHJcblxyXG4gICAgICB3ZSA9IHNvdXJjZVxyXG4gICAgICBoZSA9IHNvdXJjZVxyXG4gICAgICB2aWV3ID0gKHNvdXJjZS5hdHRyKCd2aWV3Qm94JykgfHwgJycpLm1hdGNoKHJlZylcclxuICAgICAgYm94ID0gc291cmNlLmJib3hcclxuXHJcbiAgICAgIC8vIGdldCBkaW1lbnNpb25zIG9mIGN1cnJlbnQgbm9kZVxyXG4gICAgICB3aWR0aCAgPSBuZXcgU1ZHLk51bWJlcihzb3VyY2Uud2lkdGgoKSlcclxuICAgICAgaGVpZ2h0ID0gbmV3IFNWRy5OdW1iZXIoc291cmNlLmhlaWdodCgpKVxyXG5cclxuICAgICAgLy8gZmluZCBuZWFyZXN0IG5vbi1wZXJjZW50dWFsIGRpbWVuc2lvbnNcclxuICAgICAgd2hpbGUgKHdpZHRoLnVuaXQgPT0gJyUnKSB7XHJcbiAgICAgICAgd20gKj0gd2lkdGgudmFsdWVcclxuICAgICAgICB3aWR0aCA9IG5ldyBTVkcuTnVtYmVyKHdlIGluc3RhbmNlb2YgU1ZHLkRvYyA/IHdlLnBhcmVudCgpLm9mZnNldFdpZHRoIDogd2UucGFyZW50KCkud2lkdGgoKSlcclxuICAgICAgICB3ZSA9IHdlLnBhcmVudCgpXHJcbiAgICAgIH1cclxuICAgICAgd2hpbGUgKGhlaWdodC51bml0ID09ICclJykge1xyXG4gICAgICAgIGhtICo9IGhlaWdodC52YWx1ZVxyXG4gICAgICAgIGhlaWdodCA9IG5ldyBTVkcuTnVtYmVyKGhlIGluc3RhbmNlb2YgU1ZHLkRvYyA/IGhlLnBhcmVudCgpLm9mZnNldEhlaWdodCA6IGhlLnBhcmVudCgpLmhlaWdodCgpKVxyXG4gICAgICAgIGhlID0gaGUucGFyZW50KClcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZW5zdXJlIGRlZmF1bHRzXHJcbiAgICAgIHRoaXMueCAgICAgID0gMFxyXG4gICAgICB0aGlzLnkgICAgICA9IDBcclxuICAgICAgdGhpcy53aWR0aCAgPSB3aWR0aCAgKiB3bVxyXG4gICAgICB0aGlzLmhlaWdodCA9IGhlaWdodCAqIGhtXHJcbiAgICAgIHRoaXMuem9vbSAgID0gMVxyXG5cclxuICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAvLyBnZXQgd2lkdGggYW5kIGhlaWdodCBmcm9tIHZpZXdib3hcclxuICAgICAgICB4ICAgICAgPSBwYXJzZUZsb2F0KHZpZXdbMF0pXHJcbiAgICAgICAgeSAgICAgID0gcGFyc2VGbG9hdCh2aWV3WzFdKVxyXG4gICAgICAgIHdpZHRoICA9IHBhcnNlRmxvYXQodmlld1syXSlcclxuICAgICAgICBoZWlnaHQgPSBwYXJzZUZsb2F0KHZpZXdbM10pXHJcblxyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB6b29tIGFjY29yaW5nIHRvIHZpZXdib3hcclxuICAgICAgICB0aGlzLnpvb20gPSAoKHRoaXMud2lkdGggLyB0aGlzLmhlaWdodCkgPiAod2lkdGggLyBoZWlnaHQpKSA/XHJcbiAgICAgICAgICB0aGlzLmhlaWdodCAvIGhlaWdodCA6XHJcbiAgICAgICAgICB0aGlzLndpZHRoICAvIHdpZHRoXHJcblxyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSByZWFsIHBpeGVsIGRpbWVuc2lvbnMgb24gcGFyZW50IFNWRy5Eb2MgZWxlbWVudFxyXG4gICAgICAgIHRoaXMueCAgICAgID0geFxyXG4gICAgICAgIHRoaXMueSAgICAgID0geVxyXG4gICAgICAgIHRoaXMud2lkdGggID0gd2lkdGhcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1lbHNle1xyXG5cclxuICAgICAgLy8gZW5zdXJlIHNvdXJjZSBhcyBvYmplY3RcclxuICAgICAgc291cmNlID0gdHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycgP1xyXG4gICAgICAgIHNvdXJjZS5tYXRjaChyZWcpLm1hcChmdW5jdGlvbihlbCl7IHJldHVybiBwYXJzZUZsb2F0KGVsKSB9KSA6XHJcbiAgICAgIEFycmF5LmlzQXJyYXkoc291cmNlKSA/XHJcbiAgICAgICAgc291cmNlIDpcclxuICAgICAgdHlwZW9mIHNvdXJjZSA9PSAnb2JqZWN0JyA/XHJcbiAgICAgICAgW3NvdXJjZS54LCBzb3VyY2UueSwgc291cmNlLndpZHRoLCBzb3VyY2UuaGVpZ2h0XSA6XHJcbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPT0gNCA/XHJcbiAgICAgICAgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpIDpcclxuICAgICAgICBiYXNlXHJcblxyXG4gICAgICB0aGlzLnggPSBzb3VyY2VbMF1cclxuICAgICAgdGhpcy55ID0gc291cmNlWzFdXHJcbiAgICAgIHRoaXMud2lkdGggPSBzb3VyY2VbMl1cclxuICAgICAgdGhpcy5oZWlnaHQgPSBzb3VyY2VbM11cclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxuXHJcbiwgZXh0ZW5kOiB7XHJcblxyXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy54ICsgJyAnICsgdGhpcy55ICsgJyAnICsgdGhpcy53aWR0aCArICcgJyArIHRoaXMuaGVpZ2h0XHJcbiAgICB9XHJcbiAgLCBtb3JwaDogZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCl7XHJcbiAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBuZXcgU1ZHLlZpZXdCb3goeCwgeSwgd2lkdGgsIGhlaWdodClcclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgLCBhdDogZnVuY3Rpb24ocG9zKSB7XHJcblxyXG4gICAgICBpZighdGhpcy5kZXN0aW5hdGlvbikgcmV0dXJuIHRoaXNcclxuXHJcbiAgICAgIHJldHVybiBuZXcgU1ZHLlZpZXdCb3goW1xyXG4gICAgICAgICAgdGhpcy54ICsgKHRoaXMuZGVzdGluYXRpb24ueCAtIHRoaXMueCkgKiBwb3NcclxuICAgICAgICAsIHRoaXMueSArICh0aGlzLmRlc3RpbmF0aW9uLnkgLSB0aGlzLnkpICogcG9zXHJcbiAgICAgICAgLCB0aGlzLndpZHRoICsgKHRoaXMuZGVzdGluYXRpb24ud2lkdGggLSB0aGlzLndpZHRoKSAqIHBvc1xyXG4gICAgICAgICwgdGhpcy5oZWlnaHQgKyAodGhpcy5kZXN0aW5hdGlvbi5oZWlnaHQgLSB0aGlzLmhlaWdodCkgKiBwb3NcclxuICAgICAgXSlcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gRGVmaW5lIHBhcmVudFxyXG4sIHBhcmVudDogU1ZHLkNvbnRhaW5lclxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG5cclxuICAgIC8vIGdldC9zZXQgdmlld2JveFxyXG4gICAgdmlld2JveDogZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgIC8vIGFjdCBhcyBhIGdldHRlciBpZiB0aGVyZSBhcmUgbm8gYXJndW1lbnRzXHJcbiAgICAgICAgcmV0dXJuIG5ldyBTVkcuVmlld0JveCh0aGlzKVxyXG5cclxuICAgICAgLy8gb3RoZXJ3aXNlIGFjdCBhcyBhIHNldHRlclxyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCd2aWV3Qm94JywgbmV3IFNWRy5WaWV3Qm94KHgsIHksIHdpZHRoLCBoZWlnaHQpKVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59KVxuLy8gQWRkIGV2ZW50cyB0byBlbGVtZW50c1xyXG5cclxuO1sgJ2NsaWNrJyxcclxuICAnZGJsY2xpY2snLFxyXG4gICdtb3VzZWRvd24nLFxyXG4gICdtb3VzZXVwJyxcclxuICAnbW91c2VvdmVyJyxcclxuICAnbW91c2VvdXQnLFxyXG4gICdtb3VzZW1vdmUnLFxyXG4gICdtb3VzZWVudGVyJyxcclxuICAnbW91c2VsZWF2ZScsXHJcbiAgJ3RvdWNoc3RhcnQnLFxyXG4gICd0b3VjaG1vdmUnLFxyXG4gICd0b3VjaGxlYXZlJyxcclxuICAndG91Y2hlbmQnLFxyXG4gICd0b3VjaGNhbmNlbCcgXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgLy8gYWRkIGV2ZW50IHRvIFNWRy5FbGVtZW50XHJcbiAgICBTVkcuRWxlbWVudC5wcm90b3R5cGVbZXZlbnRdID0gZnVuY3Rpb24gKGYpIHtcclxuICAgICAgLy8gYmluZCBldmVudCB0byBlbGVtZW50IHJhdGhlciB0aGFuIGVsZW1lbnQgbm9kZVxyXG4gICAgICBpZiAoZiA9PSBudWxsKSB7XHJcbiAgICAgICAgU1ZHLm9mZih0aGlzLCBldmVudClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBTVkcub24odGhpcywgZXZlbnQsIGYpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICB9KVxyXG5cclxuU1ZHLmxpc3RlbmVySWQgPSAwXHJcblxyXG4vLyBBZGQgZXZlbnQgYmluZGVyIGluIHRoZSBTVkcgbmFtZXNwYWNlXHJcblNWRy5vbiA9IGZ1bmN0aW9uIChub2RlLCBldmVudHMsIGxpc3RlbmVyLCBiaW5kaW5nLCBvcHRpb25zKSB7XHJcbiAgdmFyIGwgPSBsaXN0ZW5lci5iaW5kKGJpbmRpbmcgfHwgbm9kZSlcclxuICB2YXIgbiA9IG5vZGUgaW5zdGFuY2VvZiBTVkcuRWxlbWVudCA/IG5vZGUubm9kZSA6IG5vZGVcclxuXHJcbiAgLy8gZW5zdXJlIGluc3RhbmNlIG9iamVjdCBmb3Igbm9kZXMgd2hpY2ggYXJlIG5vdCBhZG9wdGVkXHJcbiAgbi5pbnN0YW5jZSA9IG4uaW5zdGFuY2UgfHwge19ldmVudHM6IHt9fVxyXG5cclxuICB2YXIgYmFnID0gbi5pbnN0YW5jZS5fZXZlbnRzXHJcblxyXG4gIC8vIGFkZCBpZCB0byBsaXN0ZW5lclxyXG4gIGlmICghbGlzdGVuZXIuX3N2Z2pzTGlzdGVuZXJJZCkgeyBsaXN0ZW5lci5fc3ZnanNMaXN0ZW5lcklkID0gKytTVkcubGlzdGVuZXJJZCB9XHJcblxyXG4gIGV2ZW50cy5zcGxpdChTVkcucmVnZXguZGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdmFyIGV2ID0gZXZlbnQuc3BsaXQoJy4nKVswXVxyXG4gICAgdmFyIG5zID0gZXZlbnQuc3BsaXQoJy4nKVsxXSB8fCAnKidcclxuXHJcbiAgICAvLyBlbnN1cmUgdmFsaWQgb2JqZWN0XHJcbiAgICBiYWdbZXZdID0gYmFnW2V2XSB8fCB7fVxyXG4gICAgYmFnW2V2XVtuc10gPSBiYWdbZXZdW25zXSB8fCB7fVxyXG5cclxuICAgIC8vIHJlZmVyZW5jZSBsaXN0ZW5lclxyXG4gICAgYmFnW2V2XVtuc11bbGlzdGVuZXIuX3N2Z2pzTGlzdGVuZXJJZF0gPSBsXHJcblxyXG4gICAgLy8gYWRkIGxpc3RlbmVyXHJcbiAgICBuLmFkZEV2ZW50TGlzdGVuZXIoZXYsIGwsIG9wdGlvbnMgfHwgZmFsc2UpXHJcbiAgfSlcclxufVxyXG5cclxuLy8gQWRkIGV2ZW50IHVuYmluZGVyIGluIHRoZSBTVkcgbmFtZXNwYWNlXHJcblNWRy5vZmYgPSBmdW5jdGlvbiAobm9kZSwgZXZlbnRzLCBsaXN0ZW5lciwgb3B0aW9ucykge1xyXG4gIHZhciBuID0gbm9kZSBpbnN0YW5jZW9mIFNWRy5FbGVtZW50ID8gbm9kZS5ub2RlIDogbm9kZVxyXG4gIGlmICghbi5pbnN0YW5jZSkgcmV0dXJuXHJcblxyXG4gIC8vIGxpc3RlbmVyIGNhbiBiZSBhIGZ1bmN0aW9uIG9yIGEgbnVtYmVyXHJcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgbGlzdGVuZXIgPSBsaXN0ZW5lci5fc3ZnanNMaXN0ZW5lcklkXHJcbiAgICBpZiAoIWxpc3RlbmVyKSByZXR1cm5cclxuICB9XHJcblxyXG4gIHZhciBiYWcgPSBuLmluc3RhbmNlLl9ldmVudHNcclxuXHJcbiAgOyhldmVudHMgfHwgJycpLnNwbGl0KFNWRy5yZWdleC5kZWxpbWl0ZXIpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB2YXIgZXYgPSBldmVudCAmJiBldmVudC5zcGxpdCgnLicpWzBdXHJcbiAgICB2YXIgbnMgPSBldmVudCAmJiBldmVudC5zcGxpdCgnLicpWzFdXHJcbiAgICB2YXIgbmFtZXNwYWNlLCBsXHJcblxyXG4gICAgaWYgKGxpc3RlbmVyKSB7XHJcbiAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lciByZWZlcmVuY2VcclxuICAgICAgaWYgKGJhZ1tldl0gJiYgYmFnW2V2XVtucyB8fCAnKiddKSB7XHJcbiAgICAgICAgLy8gcmVtb3ZlTGlzdGVuZXJcclxuICAgICAgICBuLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXYsIGJhZ1tldl1bbnMgfHwgJyonXVtsaXN0ZW5lcl0sIG9wdGlvbnMgfHwgZmFsc2UpXHJcblxyXG4gICAgICAgIGRlbGV0ZSBiYWdbZXZdW25zIHx8ICcqJ11bbGlzdGVuZXJdXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZXYgJiYgbnMpIHtcclxuICAgICAgLy8gcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZm9yIGEgbmFtZXNwYWNlZCBldmVudFxyXG4gICAgICBpZiAoYmFnW2V2XSAmJiBiYWdbZXZdW25zXSkge1xyXG4gICAgICAgIGZvciAobCBpbiBiYWdbZXZdW25zXSkgeyBTVkcub2ZmKG4sIFtldiwgbnNdLmpvaW4oJy4nKSwgbCkgfVxyXG5cclxuICAgICAgICBkZWxldGUgYmFnW2V2XVtuc11cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChucykge1xyXG4gICAgICAvLyByZW1vdmUgYWxsIGxpc3RlbmVycyBmb3IgYSBzcGVjaWZpYyBuYW1lc3BhY2VcclxuICAgICAgZm9yIChldmVudCBpbiBiYWcpIHtcclxuICAgICAgICBmb3IgKG5hbWVzcGFjZSBpbiBiYWdbZXZlbnRdKSB7XHJcbiAgICAgICAgICBpZiAobnMgPT09IG5hbWVzcGFjZSkgeyBTVkcub2ZmKG4sIFtldmVudCwgbnNdLmpvaW4oJy4nKSkgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChldikge1xyXG4gICAgICAvLyByZW1vdmUgYWxsIGxpc3RlbmVycyBmb3IgdGhlIGV2ZW50XHJcbiAgICAgIGlmIChiYWdbZXZdKSB7XHJcbiAgICAgICAgZm9yIChuYW1lc3BhY2UgaW4gYmFnW2V2XSkgeyBTVkcub2ZmKG4sIFtldiwgbmFtZXNwYWNlXS5qb2luKCcuJykpIH1cclxuXHJcbiAgICAgICAgZGVsZXRlIGJhZ1tldl1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgb24gYSBnaXZlbiBub2RlXHJcbiAgICAgIGZvciAoZXZlbnQgaW4gYmFnKSB7IFNWRy5vZmYobiwgZXZlbnQpIH1cclxuXHJcbiAgICAgIG4uaW5zdGFuY2UuX2V2ZW50cyA9IHt9XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuRWxlbWVudCwge1xyXG4gIC8vIEJpbmQgZ2l2ZW4gZXZlbnQgdG8gbGlzdGVuZXJcclxuICBvbjogZnVuY3Rpb24gKGV2ZW50LCBsaXN0ZW5lciwgYmluZGluZywgb3B0aW9ucykge1xyXG4gICAgU1ZHLm9uKHRoaXMsIGV2ZW50LCBsaXN0ZW5lciwgYmluZGluZywgb3B0aW9ucylcclxuICAgIHJldHVybiB0aGlzXHJcbiAgfSxcclxuICAvLyBVbmJpbmQgZXZlbnQgZnJvbSBsaXN0ZW5lclxyXG4gIG9mZjogZnVuY3Rpb24gKGV2ZW50LCBsaXN0ZW5lcikge1xyXG4gICAgU1ZHLm9mZih0aGlzLm5vZGUsIGV2ZW50LCBsaXN0ZW5lcilcclxuICAgIHJldHVybiB0aGlzXHJcbiAgfSxcclxuICBmaXJlOiBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcclxuICAgIC8vIERpc3BhdGNoIGV2ZW50XHJcbiAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuRXZlbnQpIHtcclxuICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChldmVudCA9IG5ldyBTVkcuQ3VzdG9tRXZlbnQoZXZlbnQsIHtkZXRhaWw6IGRhdGEsIGNhbmNlbGFibGU6IHRydWV9KSlcclxuICAgIH1cclxuICAgIHRoaXMuX2V2ZW50ID0gZXZlbnRcclxuICAgIHJldHVybiB0aGlzXHJcbiAgfSxcclxuICBldmVudDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXZlbnRcclxuICB9XHJcbn0pXHJcblxuXHJcblNWRy5EZWZzID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiAnZGVmcydcclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLkNvbnRhaW5lclxyXG5cclxufSlcblNWRy5HID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiAnZydcclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLkNvbnRhaW5lclxyXG5cclxuICAvLyBBZGQgY2xhc3MgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gTW92ZSBvdmVyIHgtYXhpc1xyXG4gICAgeDogZnVuY3Rpb24oeCkge1xyXG4gICAgICByZXR1cm4geCA9PSBudWxsID8gdGhpcy50cmFuc2Zvcm0oJ3gnKSA6IHRoaXMudHJhbnNmb3JtKHsgeDogeCAtIHRoaXMueCgpIH0sIHRydWUpXHJcbiAgICB9XHJcbiAgICAvLyBNb3ZlIG92ZXIgeS1heGlzXHJcbiAgLCB5OiBmdW5jdGlvbih5KSB7XHJcbiAgICAgIHJldHVybiB5ID09IG51bGwgPyB0aGlzLnRyYW5zZm9ybSgneScpIDogdGhpcy50cmFuc2Zvcm0oeyB5OiB5IC0gdGhpcy55KCkgfSwgdHJ1ZSlcclxuICAgIH1cclxuICAgIC8vIE1vdmUgYnkgY2VudGVyIG92ZXIgeC1heGlzXHJcbiAgLCBjeDogZnVuY3Rpb24oeCkge1xyXG4gICAgICByZXR1cm4geCA9PSBudWxsID8gdGhpcy5nYm94KCkuY3ggOiB0aGlzLngoeCAtIHRoaXMuZ2JveCgpLndpZHRoIC8gMilcclxuICAgIH1cclxuICAgIC8vIE1vdmUgYnkgY2VudGVyIG92ZXIgeS1heGlzXHJcbiAgLCBjeTogZnVuY3Rpb24oeSkge1xyXG4gICAgICByZXR1cm4geSA9PSBudWxsID8gdGhpcy5nYm94KCkuY3kgOiB0aGlzLnkoeSAtIHRoaXMuZ2JveCgpLmhlaWdodCAvIDIpXHJcbiAgICB9XHJcbiAgLCBnYm94OiBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgIHZhciBiYm94ICA9IHRoaXMuYmJveCgpXHJcbiAgICAgICAgLCB0cmFucyA9IHRoaXMudHJhbnNmb3JtKClcclxuXHJcbiAgICAgIGJib3gueCAgKz0gdHJhbnMueFxyXG4gICAgICBiYm94LngyICs9IHRyYW5zLnhcclxuICAgICAgYmJveC5jeCArPSB0cmFucy54XHJcblxyXG4gICAgICBiYm94LnkgICs9IHRyYW5zLnlcclxuICAgICAgYmJveC55MiArPSB0cmFucy55XHJcbiAgICAgIGJib3guY3kgKz0gdHJhbnMueVxyXG5cclxuICAgICAgcmV0dXJuIGJib3hcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBDcmVhdGUgYSBncm91cCBlbGVtZW50XHJcbiAgICBncm91cDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgU1ZHLkcpXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cblNWRy5Eb2MgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgIC8vIGVuc3VyZSB0aGUgcHJlc2VuY2Ugb2YgYSBkb20gZWxlbWVudFxyXG4gICAgICBlbGVtZW50ID0gdHlwZW9mIGVsZW1lbnQgPT0gJ3N0cmluZycgP1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpIDpcclxuICAgICAgICBlbGVtZW50XHJcblxyXG4gICAgICAvLyBJZiB0aGUgdGFyZ2V0IGlzIGFuIHN2ZyBlbGVtZW50LCB1c2UgdGhhdCBlbGVtZW50IGFzIHRoZSBtYWluIHdyYXBwZXIuXHJcbiAgICAgIC8vIFRoaXMgYWxsb3dzIHN2Zy5qcyB0byB3b3JrIHdpdGggc3ZnIGRvY3VtZW50cyBhcyB3ZWxsLlxyXG4gICAgICBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PSAnc3ZnJykge1xyXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBlbGVtZW50KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBTVkcuY3JlYXRlKCdzdmcnKSlcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLnNpemUoJzEwMCUnLCAnMTAwJScpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHNldCBzdmcgZWxlbWVudCBhdHRyaWJ1dGVzIGFuZCBlbnN1cmUgZGVmcyBub2RlXHJcbiAgICAgIHRoaXMubmFtZXNwYWNlKCkuZGVmcygpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuQ29udGFpbmVyXHJcblxyXG4gIC8vIEFkZCBjbGFzcyBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBBZGQgbmFtZXNwYWNlc1xyXG4gICAgbmFtZXNwYWNlOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgICAgICAuYXR0cih7IHhtbG5zOiBTVkcubnMsIHZlcnNpb246ICcxLjEnIH0pXHJcbiAgICAgICAgLmF0dHIoJ3htbG5zOnhsaW5rJywgU1ZHLnhsaW5rLCBTVkcueG1sbnMpXHJcbiAgICAgICAgLmF0dHIoJ3htbG5zOnN2Z2pzJywgU1ZHLnN2Z2pzLCBTVkcueG1sbnMpXHJcbiAgICB9XHJcbiAgICAvLyBDcmVhdGVzIGFuZCByZXR1cm5zIGRlZnMgZWxlbWVudFxyXG4gICwgZGVmczogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICghdGhpcy5fZGVmcykge1xyXG4gICAgICAgIHZhciBkZWZzXHJcblxyXG4gICAgICAgIC8vIEZpbmQgb3IgY3JlYXRlIGEgZGVmcyBlbGVtZW50IGluIHRoaXMgaW5zdGFuY2VcclxuICAgICAgICBpZiAoZGVmcyA9IHRoaXMubm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZGVmcycpWzBdKVxyXG4gICAgICAgICAgdGhpcy5fZGVmcyA9IFNWRy5hZG9wdChkZWZzKVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHRoaXMuX2RlZnMgPSBuZXcgU1ZHLkRlZnNcclxuXHJcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBkZWZzIG5vZGUgaXMgYXQgdGhlIGVuZCBvZiB0aGUgc3RhY2tcclxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5fZGVmcy5ub2RlKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5fZGVmc1xyXG4gICAgfVxyXG4gICAgLy8gY3VzdG9tIHBhcmVudCBtZXRob2RcclxuICAsIHBhcmVudDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmKCF0aGlzLm5vZGUucGFyZW50Tm9kZSB8fCB0aGlzLm5vZGUucGFyZW50Tm9kZS5ub2RlTmFtZSA9PSAnI2RvY3VtZW50JyB8fCB0aGlzLm5vZGUucGFyZW50Tm9kZS5ub2RlTmFtZSA9PSAnI2RvY3VtZW50LWZyYWdtZW50JykgcmV0dXJuIG51bGxcclxuICAgICAgcmV0dXJuIHRoaXMubm9kZS5wYXJlbnROb2RlXHJcbiAgICB9XHJcbiAgICAvLyBGaXggZm9yIHBvc3NpYmxlIHN1Yi1waXhlbCBvZmZzZXQuIFNlZTpcclxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTYwODgxMlxyXG4gICwgc3BvZjogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBwb3MgPSB0aGlzLm5vZGUuZ2V0U2NyZWVuQ1RNKClcclxuXHJcbiAgICAgIGlmIChwb3MpXHJcbiAgICAgICAgdGhpc1xyXG4gICAgICAgICAgLnN0eWxlKCdsZWZ0JywgKC1wb3MuZSAlIDEpICsgJ3B4JylcclxuICAgICAgICAgIC5zdHlsZSgndG9wJywgICgtcG9zLmYgJSAxKSArICdweCcpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgICAgLy8gUmVtb3ZlcyB0aGUgZG9jIGZyb20gdGhlIERPTVxyXG4gICwgcmVtb3ZlOiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYodGhpcy5wYXJlbnQoKSkge1xyXG4gICAgICAgIHRoaXMucGFyZW50KCkucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICwgY2xlYXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyByZW1vdmUgY2hpbGRyZW5cclxuICAgICAgd2hpbGUodGhpcy5ub2RlLmhhc0NoaWxkTm9kZXMoKSlcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlLmxhc3RDaGlsZClcclxuXHJcbiAgICAgIC8vIHJlbW92ZSBkZWZzIHJlZmVyZW5jZVxyXG4gICAgICBkZWxldGUgdGhpcy5fZGVmc1xyXG5cclxuICAgICAgLy8gYWRkIGJhY2sgcGFyc2VyXHJcbiAgICAgIGlmKCFTVkcucGFyc2VyLmRyYXcucGFyZW50Tm9kZSlcclxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoU1ZHLnBhcnNlci5kcmF3KVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAsIGNsb25lOiBmdW5jdGlvbiAocGFyZW50KSB7XHJcbiAgICAgIC8vIHdyaXRlIGRvbSBkYXRhIHRvIHRoZSBkb20gc28gdGhlIGNsb25lIGNhbiBwaWNrdXAgdGhlIGRhdGFcclxuICAgICAgdGhpcy53cml0ZURhdGFUb0RvbSgpXHJcblxyXG4gICAgICAvLyBnZXQgcmVmZXJlbmNlIHRvIG5vZGVcclxuICAgICAgdmFyIG5vZGUgPSB0aGlzLm5vZGVcclxuXHJcbiAgICAgIC8vIGNsb25lIGVsZW1lbnQgYW5kIGFzc2lnbiBuZXcgaWRcclxuICAgICAgdmFyIGNsb25lID0gYXNzaWduTmV3SWQobm9kZS5jbG9uZU5vZGUodHJ1ZSkpXHJcblxyXG4gICAgICAvLyBpbnNlcnQgdGhlIGNsb25lIGluIHRoZSBnaXZlbiBwYXJlbnQgb3IgYWZ0ZXIgbXlzZWxmXHJcbiAgICAgIGlmKHBhcmVudCkge1xyXG4gICAgICAgIChwYXJlbnQubm9kZSB8fCBwYXJlbnQpLmFwcGVuZENoaWxkKGNsb25lLm5vZGUpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZS5ub2RlLCBub2RlLm5leHRTaWJsaW5nKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY2xvbmVcclxuICAgIH1cclxuICB9XHJcblxyXG59KVxyXG5cbi8vICMjIyBUaGlzIG1vZHVsZSBhZGRzIGJhY2t3YXJkIC8gZm9yd2FyZCBmdW5jdGlvbmFsaXR5IHRvIGVsZW1lbnRzLlxyXG5cclxuLy9cclxuU1ZHLmV4dGVuZChTVkcuRWxlbWVudCwge1xyXG4gIC8vIEdldCBhbGwgc2libGluZ3MsIGluY2x1ZGluZyBteXNlbGZcclxuICBzaWJsaW5nczogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQoKS5jaGlsZHJlbigpXHJcbiAgfVxyXG4gIC8vIEdldCB0aGUgY3VyZW50IHBvc2l0aW9uIHNpYmxpbmdzXHJcbiwgcG9zaXRpb246IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50KCkuaW5kZXgodGhpcylcclxuICB9XHJcbiAgLy8gR2V0IHRoZSBuZXh0IGVsZW1lbnQgKHdpbGwgcmV0dXJuIG51bGwgaWYgdGhlcmUgaXMgbm9uZSlcclxuLCBuZXh0OiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLnNpYmxpbmdzKClbdGhpcy5wb3NpdGlvbigpICsgMV1cclxuICB9XHJcbiAgLy8gR2V0IHRoZSBuZXh0IGVsZW1lbnQgKHdpbGwgcmV0dXJuIG51bGwgaWYgdGhlcmUgaXMgbm9uZSlcclxuLCBwcmV2aW91czogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zaWJsaW5ncygpW3RoaXMucG9zaXRpb24oKSAtIDFdXHJcbiAgfVxyXG4gIC8vIFNlbmQgZ2l2ZW4gZWxlbWVudCBvbmUgc3RlcCBmb3J3YXJkXHJcbiwgZm9yd2FyZDogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgaSA9IHRoaXMucG9zaXRpb24oKSArIDFcclxuICAgICAgLCBwID0gdGhpcy5wYXJlbnQoKVxyXG5cclxuICAgIC8vIG1vdmUgbm9kZSBvbmUgc3RlcCBmb3J3YXJkXHJcbiAgICBwLnJlbW92ZUVsZW1lbnQodGhpcykuYWRkKHRoaXMsIGkpXHJcblxyXG4gICAgLy8gbWFrZSBzdXJlIGRlZnMgbm9kZSBpcyBhbHdheXMgYXQgdGhlIHRvcFxyXG4gICAgaWYgKHAgaW5zdGFuY2VvZiBTVkcuRG9jKVxyXG4gICAgICBwLm5vZGUuYXBwZW5kQ2hpbGQocC5kZWZzKCkubm9kZSlcclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICAvLyBTZW5kIGdpdmVuIGVsZW1lbnQgb25lIHN0ZXAgYmFja3dhcmRcclxuLCBiYWNrd2FyZDogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgaSA9IHRoaXMucG9zaXRpb24oKVxyXG5cclxuICAgIGlmIChpID4gMClcclxuICAgICAgdGhpcy5wYXJlbnQoKS5yZW1vdmVFbGVtZW50KHRoaXMpLmFkZCh0aGlzLCBpIC0gMSlcclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICAvLyBTZW5kIGdpdmVuIGVsZW1lbnQgYWxsIHRoZSB3YXkgdG8gdGhlIGZyb250XHJcbiwgZnJvbnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHAgPSB0aGlzLnBhcmVudCgpXHJcblxyXG4gICAgLy8gTW92ZSBub2RlIGZvcndhcmRcclxuICAgIHAubm9kZS5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpXHJcblxyXG4gICAgLy8gTWFrZSBzdXJlIGRlZnMgbm9kZSBpcyBhbHdheXMgYXQgdGhlIHRvcFxyXG4gICAgaWYgKHAgaW5zdGFuY2VvZiBTVkcuRG9jKVxyXG4gICAgICBwLm5vZGUuYXBwZW5kQ2hpbGQocC5kZWZzKCkubm9kZSlcclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICAvLyBTZW5kIGdpdmVuIGVsZW1lbnQgYWxsIHRoZSB3YXkgdG8gdGhlIGJhY2tcclxuLCBiYWNrOiBmdW5jdGlvbigpIHtcclxuICAgIGlmICh0aGlzLnBvc2l0aW9uKCkgPiAwKVxyXG4gICAgICB0aGlzLnBhcmVudCgpLnJlbW92ZUVsZW1lbnQodGhpcykuYWRkKHRoaXMsIDApXHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgLy8gSW5zZXJ0cyBhIGdpdmVuIGVsZW1lbnQgYmVmb3JlIHRoZSB0YXJnZXRlZCBlbGVtZW50XHJcbiwgYmVmb3JlOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LnJlbW92ZSgpXHJcblxyXG4gICAgdmFyIGkgPSB0aGlzLnBvc2l0aW9uKClcclxuXHJcbiAgICB0aGlzLnBhcmVudCgpLmFkZChlbGVtZW50LCBpKVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIC8vIEluc3RlcnMgYSBnaXZlbiBlbGVtZW50IGFmdGVyIHRoZSB0YXJnZXRlZCBlbGVtZW50XHJcbiwgYWZ0ZXI6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQucmVtb3ZlKClcclxuXHJcbiAgICB2YXIgaSA9IHRoaXMucG9zaXRpb24oKVxyXG5cclxuICAgIHRoaXMucGFyZW50KCkuYWRkKGVsZW1lbnQsIGkgKyAxKVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG5cclxufSlcblNWRy5NYXNrID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBTVkcuY3JlYXRlKCdtYXNrJykpXHJcblxyXG4gICAgLy8ga2VlcCByZWZlcmVuY2VzIHRvIG1hc2tlZCBlbGVtZW50c1xyXG4gICAgdGhpcy50YXJnZXRzID0gW11cclxuICB9XHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5Db250YWluZXJcclxuXHJcbiAgLy8gQWRkIGNsYXNzIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIFVubWFzayBhbGwgbWFza2VkIGVsZW1lbnRzIGFuZCByZW1vdmUgaXRzZWxmXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyB1bm1hc2sgYWxsIHRhcmdldHNcclxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudGFyZ2V0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcclxuICAgICAgICBpZiAodGhpcy50YXJnZXRzW2ldKVxyXG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLnVubWFzaygpXHJcbiAgICAgIHRoaXMudGFyZ2V0cyA9IFtdXHJcblxyXG4gICAgICAvLyByZW1vdmUgbWFzayBmcm9tIHBhcmVudFxyXG4gICAgICBTVkcuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLmNhbGwodGhpcylcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gQ3JlYXRlIG1hc2tpbmcgZWxlbWVudFxyXG4gICAgbWFzazogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRlZnMoKS5wdXQobmV3IFNWRy5NYXNrKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5FbGVtZW50LCB7XHJcbiAgLy8gRGlzdHJpYnV0ZSBtYXNrIHRvIHN2ZyBlbGVtZW50XHJcbiAgbWFza1dpdGg6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgIC8vIHVzZSBnaXZlbiBtYXNrIG9yIGNyZWF0ZSBhIG5ldyBvbmVcclxuICAgIHRoaXMubWFza2VyID0gZWxlbWVudCBpbnN0YW5jZW9mIFNWRy5NYXNrID8gZWxlbWVudCA6IHRoaXMucGFyZW50KCkubWFzaygpLmFkZChlbGVtZW50KVxyXG5cclxuICAgIC8vIHN0b3JlIHJldmVyZW5jZSBvbiBzZWxmIGluIG1hc2tcclxuICAgIHRoaXMubWFza2VyLnRhcmdldHMucHVzaCh0aGlzKVxyXG5cclxuICAgIC8vIGFwcGx5IG1hc2tcclxuICAgIHJldHVybiB0aGlzLmF0dHIoJ21hc2snLCAndXJsKFwiIycgKyB0aGlzLm1hc2tlci5hdHRyKCdpZCcpICsgJ1wiKScpXHJcbiAgfVxyXG4gIC8vIFVubWFzayBlbGVtZW50XHJcbiwgdW5tYXNrOiBmdW5jdGlvbigpIHtcclxuICAgIGRlbGV0ZSB0aGlzLm1hc2tlclxyXG4gICAgcmV0dXJuIHRoaXMuYXR0cignbWFzaycsIG51bGwpXHJcbiAgfVxyXG5cclxufSlcclxuXG5TVkcuQ2xpcFBhdGggPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIFNWRy5jcmVhdGUoJ2NsaXBQYXRoJykpXHJcblxyXG4gICAgLy8ga2VlcCByZWZlcmVuY2VzIHRvIGNsaXBwZWQgZWxlbWVudHNcclxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXHJcbiAgfVxyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuQ29udGFpbmVyXHJcblxyXG4gIC8vIEFkZCBjbGFzcyBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBVbmNsaXAgYWxsIGNsaXBwZWQgZWxlbWVudHMgYW5kIHJlbW92ZSBpdHNlbGZcclxuICAgIHJlbW92ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIHVuY2xpcCBhbGwgdGFyZ2V0c1xyXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50YXJnZXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG4gICAgICAgIGlmICh0aGlzLnRhcmdldHNbaV0pXHJcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0udW5jbGlwKClcclxuICAgICAgdGhpcy50YXJnZXRzID0gW11cclxuXHJcbiAgICAgIC8vIHJlbW92ZSBjbGlwUGF0aCBmcm9tIHBhcmVudFxyXG4gICAgICB0aGlzLnBhcmVudCgpLnJlbW92ZUVsZW1lbnQodGhpcylcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gQ3JlYXRlIGNsaXBwaW5nIGVsZW1lbnRcclxuICAgIGNsaXA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5kZWZzKCkucHV0KG5ldyBTVkcuQ2xpcFBhdGgpXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuLy9cclxuU1ZHLmV4dGVuZChTVkcuRWxlbWVudCwge1xyXG4gIC8vIERpc3RyaWJ1dGUgY2xpcFBhdGggdG8gc3ZnIGVsZW1lbnRcclxuICBjbGlwV2l0aDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgLy8gdXNlIGdpdmVuIGNsaXAgb3IgY3JlYXRlIGEgbmV3IG9uZVxyXG4gICAgdGhpcy5jbGlwcGVyID0gZWxlbWVudCBpbnN0YW5jZW9mIFNWRy5DbGlwUGF0aCA/IGVsZW1lbnQgOiB0aGlzLnBhcmVudCgpLmNsaXAoKS5hZGQoZWxlbWVudClcclxuXHJcbiAgICAvLyBzdG9yZSByZXZlcmVuY2Ugb24gc2VsZiBpbiBtYXNrXHJcbiAgICB0aGlzLmNsaXBwZXIudGFyZ2V0cy5wdXNoKHRoaXMpXHJcblxyXG4gICAgLy8gYXBwbHkgbWFza1xyXG4gICAgcmV0dXJuIHRoaXMuYXR0cignY2xpcC1wYXRoJywgJ3VybChcIiMnICsgdGhpcy5jbGlwcGVyLmF0dHIoJ2lkJykgKyAnXCIpJylcclxuICB9XHJcbiAgLy8gVW5jbGlwIGVsZW1lbnRcclxuLCB1bmNsaXA6IGZ1bmN0aW9uKCkge1xyXG4gICAgZGVsZXRlIHRoaXMuY2xpcHBlclxyXG4gICAgcmV0dXJuIHRoaXMuYXR0cignY2xpcC1wYXRoJywgbnVsbClcclxuICB9XHJcblxyXG59KVxuU1ZHLkdyYWRpZW50ID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiBmdW5jdGlvbih0eXBlKSB7XHJcbiAgICB0aGlzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgU1ZHLmNyZWF0ZSh0eXBlICsgJ0dyYWRpZW50JykpXHJcblxyXG4gICAgLy8gc3RvcmUgdHlwZVxyXG4gICAgdGhpcy50eXBlID0gdHlwZVxyXG4gIH1cclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLkNvbnRhaW5lclxyXG5cclxuICAvLyBBZGQgY2xhc3MgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gQWRkIGEgY29sb3Igc3RvcFxyXG4gICAgYXQ6IGZ1bmN0aW9uKG9mZnNldCwgY29sb3IsIG9wYWNpdHkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTVkcuU3RvcCkudXBkYXRlKG9mZnNldCwgY29sb3IsIG9wYWNpdHkpXHJcbiAgICB9XHJcbiAgICAvLyBVcGRhdGUgZ3JhZGllbnRcclxuICAsIHVwZGF0ZTogZnVuY3Rpb24oYmxvY2spIHtcclxuICAgICAgLy8gcmVtb3ZlIGFsbCBzdG9wc1xyXG4gICAgICB0aGlzLmNsZWFyKClcclxuXHJcbiAgICAgIC8vIGludm9rZSBwYXNzZWQgYmxvY2tcclxuICAgICAgaWYgKHR5cGVvZiBibG9jayA9PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgIGJsb2NrLmNhbGwodGhpcywgdGhpcylcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gdGhlIGZpbGwgaWRcclxuICAsIGZpbGw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gJ3VybCgjJyArIHRoaXMuaWQoKSArICcpJ1xyXG4gICAgfVxyXG4gICAgLy8gQWxpYXMgc3RyaW5nIGNvbnZlcnRpb24gdG8gZmlsbFxyXG4gICwgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5maWxsKClcclxuICAgIH1cclxuICAgIC8vIGN1c3RvbSBhdHRyIHRvIGhhbmRsZSB0cmFuc2Zvcm1cclxuICAsIGF0dHI6IGZ1bmN0aW9uKGEsIGIsIGMpIHtcclxuICAgICAgaWYoYSA9PSAndHJhbnNmb3JtJykgYSA9ICdncmFkaWVudFRyYW5zZm9ybSdcclxuICAgICAgcmV0dXJuIFNWRy5Db250YWluZXIucHJvdG90eXBlLmF0dHIuY2FsbCh0aGlzLCBhLCBiLCBjKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIENyZWF0ZSBncmFkaWVudCBlbGVtZW50IGluIGRlZnNcclxuICAgIGdyYWRpZW50OiBmdW5jdGlvbih0eXBlLCBibG9jaykge1xyXG4gICAgICByZXR1cm4gdGhpcy5kZWZzKCkuZ3JhZGllbnQodHlwZSwgYmxvY2spXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuLy8gQWRkIGFuaW1hdGFibGUgbWV0aG9kcyB0byBib3RoIGdyYWRpZW50IGFuZCBmeCBtb2R1bGVcclxuU1ZHLmV4dGVuZChTVkcuR3JhZGllbnQsIFNWRy5GWCwge1xyXG4gIC8vIEZyb20gcG9zaXRpb25cclxuICBmcm9tOiBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICByZXR1cm4gKHRoaXMuX3RhcmdldCB8fCB0aGlzKS50eXBlID09ICdyYWRpYWwnID9cclxuICAgICAgdGhpcy5hdHRyKHsgZng6IG5ldyBTVkcuTnVtYmVyKHgpLCBmeTogbmV3IFNWRy5OdW1iZXIoeSkgfSkgOlxyXG4gICAgICB0aGlzLmF0dHIoeyB4MTogbmV3IFNWRy5OdW1iZXIoeCksIHkxOiBuZXcgU1ZHLk51bWJlcih5KSB9KVxyXG4gIH1cclxuICAvLyBUbyBwb3NpdGlvblxyXG4sIHRvOiBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICByZXR1cm4gKHRoaXMuX3RhcmdldCB8fCB0aGlzKS50eXBlID09ICdyYWRpYWwnID9cclxuICAgICAgdGhpcy5hdHRyKHsgY3g6IG5ldyBTVkcuTnVtYmVyKHgpLCBjeTogbmV3IFNWRy5OdW1iZXIoeSkgfSkgOlxyXG4gICAgICB0aGlzLmF0dHIoeyB4MjogbmV3IFNWRy5OdW1iZXIoeCksIHkyOiBuZXcgU1ZHLk51bWJlcih5KSB9KVxyXG4gIH1cclxufSlcclxuXHJcbi8vIEJhc2UgZ3JhZGllbnQgZ2VuZXJhdGlvblxyXG5TVkcuZXh0ZW5kKFNWRy5EZWZzLCB7XHJcbiAgLy8gZGVmaW5lIGdyYWRpZW50XHJcbiAgZ3JhZGllbnQ6IGZ1bmN0aW9uKHR5cGUsIGJsb2NrKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wdXQobmV3IFNWRy5HcmFkaWVudCh0eXBlKSkudXBkYXRlKGJsb2NrKVxyXG4gIH1cclxuXHJcbn0pXHJcblxyXG5TVkcuU3RvcCA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogJ3N0b3AnXHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5FbGVtZW50XHJcblxyXG4gIC8vIEFkZCBjbGFzcyBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBhZGQgY29sb3Igc3RvcHNcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24obykge1xyXG4gICAgICBpZiAodHlwZW9mIG8gPT0gJ251bWJlcicgfHwgbyBpbnN0YW5jZW9mIFNWRy5OdW1iZXIpIHtcclxuICAgICAgICBvID0ge1xyXG4gICAgICAgICAgb2Zmc2V0OiAgYXJndW1lbnRzWzBdXHJcbiAgICAgICAgLCBjb2xvcjogICBhcmd1bWVudHNbMV1cclxuICAgICAgICAsIG9wYWNpdHk6IGFyZ3VtZW50c1syXVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gc2V0IGF0dHJpYnV0ZXNcclxuICAgICAgaWYgKG8ub3BhY2l0eSAhPSBudWxsKSB0aGlzLmF0dHIoJ3N0b3Atb3BhY2l0eScsIG8ub3BhY2l0eSlcclxuICAgICAgaWYgKG8uY29sb3IgICAhPSBudWxsKSB0aGlzLmF0dHIoJ3N0b3AtY29sb3InLCBvLmNvbG9yKVxyXG4gICAgICBpZiAoby5vZmZzZXQgICE9IG51bGwpIHRoaXMuYXR0cignb2Zmc2V0JywgbmV3IFNWRy5OdW1iZXIoby5vZmZzZXQpKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICB9XHJcblxyXG59KVxyXG5cblNWRy5QYXR0ZXJuID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiAncGF0dGVybidcclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLkNvbnRhaW5lclxyXG5cclxuICAvLyBBZGQgY2xhc3MgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gUmV0dXJuIHRoZSBmaWxsIGlkXHJcbiAgICBmaWxsOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuICd1cmwoIycgKyB0aGlzLmlkKCkgKyAnKSdcclxuICAgIH1cclxuICAgIC8vIFVwZGF0ZSBwYXR0ZXJuIGJ5IHJlYnVpbGRpbmdcclxuICAsIHVwZGF0ZTogZnVuY3Rpb24oYmxvY2spIHtcclxuICAgICAgLy8gcmVtb3ZlIGNvbnRlbnRcclxuICAgICAgdGhpcy5jbGVhcigpXHJcblxyXG4gICAgICAvLyBpbnZva2UgcGFzc2VkIGJsb2NrXHJcbiAgICAgIGlmICh0eXBlb2YgYmxvY2sgPT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICBibG9jay5jYWxsKHRoaXMsIHRoaXMpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gQWxpYXMgc3RyaW5nIGNvbnZlcnRpb24gdG8gZmlsbFxyXG4gICwgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5maWxsKClcclxuICAgIH1cclxuICAgIC8vIGN1c3RvbSBhdHRyIHRvIGhhbmRsZSB0cmFuc2Zvcm1cclxuICAsIGF0dHI6IGZ1bmN0aW9uKGEsIGIsIGMpIHtcclxuICAgICAgaWYoYSA9PSAndHJhbnNmb3JtJykgYSA9ICdwYXR0ZXJuVHJhbnNmb3JtJ1xyXG4gICAgICByZXR1cm4gU1ZHLkNvbnRhaW5lci5wcm90b3R5cGUuYXR0ci5jYWxsKHRoaXMsIGEsIGIsIGMpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIENyZWF0ZSBwYXR0ZXJuIGVsZW1lbnQgaW4gZGVmc1xyXG4gICAgcGF0dGVybjogZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgYmxvY2spIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGVmcygpLnBhdHRlcm4od2lkdGgsIGhlaWdodCwgYmxvY2spXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuRGVmcywge1xyXG4gIC8vIERlZmluZSBncmFkaWVudFxyXG4gIHBhdHRlcm46IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQsIGJsb2NrKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wdXQobmV3IFNWRy5QYXR0ZXJuKS51cGRhdGUoYmxvY2spLmF0dHIoe1xyXG4gICAgICB4OiAgICAgICAgICAgIDBcclxuICAgICwgeTogICAgICAgICAgICAwXHJcbiAgICAsIHdpZHRoOiAgICAgICAgd2lkdGhcclxuICAgICwgaGVpZ2h0OiAgICAgICBoZWlnaHRcclxuICAgICwgcGF0dGVyblVuaXRzOiAndXNlclNwYWNlT25Vc2UnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbn0pXG5TVkcuU2hhcGUgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBlbGVtZW50KVxyXG4gIH1cclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLkVsZW1lbnRcclxuXHJcbn0pXG5cclxuU1ZHLkJhcmUgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplXHJcbiAgY3JlYXRlOiBmdW5jdGlvbihlbGVtZW50LCBpbmhlcml0KSB7XHJcbiAgICAvLyBjb25zdHJ1Y3QgZWxlbWVudFxyXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIFNWRy5jcmVhdGUoZWxlbWVudCkpXHJcblxyXG4gICAgLy8gaW5oZXJpdCBjdXN0b20gbWV0aG9kc1xyXG4gICAgaWYgKGluaGVyaXQpXHJcbiAgICAgIGZvciAodmFyIG1ldGhvZCBpbiBpbmhlcml0LnByb3RvdHlwZSlcclxuICAgICAgICBpZiAodHlwZW9mIGluaGVyaXQucHJvdG90eXBlW21ldGhvZF0gPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICB0aGlzW21ldGhvZF0gPSBpbmhlcml0LnByb3RvdHlwZVttZXRob2RdXHJcbiAgfVxyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuRWxlbWVudFxyXG5cclxuICAvLyBBZGQgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gSW5zZXJ0IHNvbWUgcGxhaW4gdGV4dFxyXG4gICAgd29yZHM6IGZ1bmN0aW9uKHRleHQpIHtcclxuICAgICAgLy8gcmVtb3ZlIGNvbnRlbnRzXHJcbiAgICAgIHdoaWxlICh0aGlzLm5vZGUuaGFzQ2hpbGROb2RlcygpKVxyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUubGFzdENoaWxkKVxyXG5cclxuICAgICAgLy8gY3JlYXRlIHRleHQgbm9kZVxyXG4gICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5QYXJlbnQsIHtcclxuICAvLyBDcmVhdGUgYW4gZWxlbWVudCB0aGF0IGlzIG5vdCBkZXNjcmliZWQgYnkgU1ZHLmpzXHJcbiAgZWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCwgaW5oZXJpdCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTVkcuQmFyZShlbGVtZW50LCBpbmhlcml0KSlcclxuICB9XHJcbn0pXHJcblxuU1ZHLlN5bWJvbCA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogJ3N5bWJvbCdcclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLkNvbnRhaW5lclxyXG5cclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIGNyZWF0ZSBzeW1ib2xcclxuICAgIHN5bWJvbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgU1ZHLlN5bWJvbClcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxuU1ZHLlVzZSA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogJ3VzZSdcclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLlNoYXBlXHJcblxyXG4gIC8vIEFkZCBjbGFzcyBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBVc2UgZWxlbWVudCBhcyBhIHJlZmVyZW5jZVxyXG4gICAgZWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCwgZmlsZSkge1xyXG4gICAgICAvLyBTZXQgbGluZWQgZWxlbWVudFxyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCdocmVmJywgKGZpbGUgfHwgJycpICsgJyMnICsgZWxlbWVudCwgU1ZHLnhsaW5rKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIENyZWF0ZSBhIHVzZSBlbGVtZW50XHJcbiAgICB1c2U6IGZ1bmN0aW9uKGVsZW1lbnQsIGZpbGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTVkcuVXNlKS5lbGVtZW50KGVsZW1lbnQsIGZpbGUpXHJcbiAgICB9XHJcbiAgfVxyXG59KVxuU1ZHLlJlY3QgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6ICdyZWN0J1xyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuU2hhcGVcclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIENyZWF0ZSBhIHJlY3QgZWxlbWVudFxyXG4gICAgcmVjdDogZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFNWRy5SZWN0KCkpLnNpemUod2lkdGgsIGhlaWdodClcclxuICAgIH1cclxuICB9XHJcbn0pXG5TVkcuQ2lyY2xlID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiAnY2lyY2xlJ1xyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuU2hhcGVcclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIENyZWF0ZSBjaXJjbGUgZWxlbWVudCwgYmFzZWQgb24gZWxsaXBzZVxyXG4gICAgY2lyY2xlOiBmdW5jdGlvbihzaXplKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgU1ZHLkNpcmNsZSkucngobmV3IFNWRy5OdW1iZXIoc2l6ZSkuZGl2aWRlKDIpKS5tb3ZlKDAsIDApXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuQ2lyY2xlLCBTVkcuRlgsIHtcclxuICAvLyBSYWRpdXMgeCB2YWx1ZVxyXG4gIHJ4OiBmdW5jdGlvbihyeCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXR0cigncicsIHJ4KVxyXG4gIH1cclxuICAvLyBBbGlhcyByYWRpdXMgeCB2YWx1ZVxyXG4sIHJ5OiBmdW5jdGlvbihyeSkge1xyXG4gICAgcmV0dXJuIHRoaXMucngocnkpXHJcbiAgfVxyXG59KVxyXG5cclxuU1ZHLkVsbGlwc2UgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6ICdlbGxpcHNlJ1xyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuU2hhcGVcclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIENyZWF0ZSBhbiBlbGxpcHNlXHJcbiAgICBlbGxpcHNlOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgU1ZHLkVsbGlwc2UpLnNpemUod2lkdGgsIGhlaWdodCkubW92ZSgwLCAwKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcblNWRy5leHRlbmQoU1ZHLkVsbGlwc2UsIFNWRy5SZWN0LCBTVkcuRlgsIHtcclxuICAvLyBSYWRpdXMgeCB2YWx1ZVxyXG4gIHJ4OiBmdW5jdGlvbihyeCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXR0cigncngnLCByeClcclxuICB9XHJcbiAgLy8gUmFkaXVzIHkgdmFsdWVcclxuLCByeTogZnVuY3Rpb24ocnkpIHtcclxuICAgIHJldHVybiB0aGlzLmF0dHIoJ3J5JywgcnkpXHJcbiAgfVxyXG59KVxyXG5cclxuLy8gQWRkIGNvbW1vbiBtZXRob2RcclxuU1ZHLmV4dGVuZChTVkcuQ2lyY2xlLCBTVkcuRWxsaXBzZSwge1xyXG4gICAgLy8gTW92ZSBvdmVyIHgtYXhpc1xyXG4gICAgeDogZnVuY3Rpb24oeCkge1xyXG4gICAgICByZXR1cm4geCA9PSBudWxsID8gdGhpcy5jeCgpIC0gdGhpcy5yeCgpIDogdGhpcy5jeCh4ICsgdGhpcy5yeCgpKVxyXG4gICAgfVxyXG4gICAgLy8gTW92ZSBvdmVyIHktYXhpc1xyXG4gICwgeTogZnVuY3Rpb24oeSkge1xyXG4gICAgICByZXR1cm4geSA9PSBudWxsID8gdGhpcy5jeSgpIC0gdGhpcy5yeSgpIDogdGhpcy5jeSh5ICsgdGhpcy5yeSgpKVxyXG4gICAgfVxyXG4gICAgLy8gTW92ZSBieSBjZW50ZXIgb3ZlciB4LWF4aXNcclxuICAsIGN4OiBmdW5jdGlvbih4KSB7XHJcbiAgICAgIHJldHVybiB4ID09IG51bGwgPyB0aGlzLmF0dHIoJ2N4JykgOiB0aGlzLmF0dHIoJ2N4JywgeClcclxuICAgIH1cclxuICAgIC8vIE1vdmUgYnkgY2VudGVyIG92ZXIgeS1heGlzXHJcbiAgLCBjeTogZnVuY3Rpb24oeSkge1xyXG4gICAgICByZXR1cm4geSA9PSBudWxsID8gdGhpcy5hdHRyKCdjeScpIDogdGhpcy5hdHRyKCdjeScsIHkpXHJcbiAgICB9XHJcbiAgICAvLyBTZXQgd2lkdGggb2YgZWxlbWVudFxyXG4gICwgd2lkdGg6IGZ1bmN0aW9uKHdpZHRoKSB7XHJcbiAgICAgIHJldHVybiB3aWR0aCA9PSBudWxsID8gdGhpcy5yeCgpICogMiA6IHRoaXMucngobmV3IFNWRy5OdW1iZXIod2lkdGgpLmRpdmlkZSgyKSlcclxuICAgIH1cclxuICAgIC8vIFNldCBoZWlnaHQgb2YgZWxlbWVudFxyXG4gICwgaGVpZ2h0OiBmdW5jdGlvbihoZWlnaHQpIHtcclxuICAgICAgcmV0dXJuIGhlaWdodCA9PSBudWxsID8gdGhpcy5yeSgpICogMiA6IHRoaXMucnkobmV3IFNWRy5OdW1iZXIoaGVpZ2h0KS5kaXZpZGUoMikpXHJcbiAgICB9XHJcbiAgICAvLyBDdXN0b20gc2l6ZSBmdW5jdGlvblxyXG4gICwgc2l6ZTogZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xyXG4gICAgICB2YXIgcCA9IHByb3BvcnRpb25hbFNpemUodGhpcywgd2lkdGgsIGhlaWdodClcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICAgICAgLnJ4KG5ldyBTVkcuTnVtYmVyKHAud2lkdGgpLmRpdmlkZSgyKSlcclxuICAgICAgICAucnkobmV3IFNWRy5OdW1iZXIocC5oZWlnaHQpLmRpdmlkZSgyKSlcclxuICAgIH1cclxufSlcblNWRy5MaW5lID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiAnbGluZSdcclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLlNoYXBlXHJcblxyXG4gIC8vIEFkZCBjbGFzcyBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBHZXQgYXJyYXlcclxuICAgIGFycmF5OiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIG5ldyBTVkcuUG9pbnRBcnJheShbXHJcbiAgICAgICAgWyB0aGlzLmF0dHIoJ3gxJyksIHRoaXMuYXR0cigneTEnKSBdXHJcbiAgICAgICwgWyB0aGlzLmF0dHIoJ3gyJyksIHRoaXMuYXR0cigneTInKSBdXHJcbiAgICAgIF0pXHJcbiAgICB9XHJcbiAgICAvLyBPdmVyd3JpdGUgbmF0aXZlIHBsb3QoKSBtZXRob2RcclxuICAsIHBsb3Q6IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyKSB7XHJcbiAgICAgIGlmICh4MSA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5KClcclxuICAgICAgZWxzZSBpZiAodHlwZW9mIHkxICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgICB4MSA9IHsgeDE6IHgxLCB5MTogeTEsIHgyOiB4MiwgeTI6IHkyIH1cclxuICAgICAgZWxzZVxyXG4gICAgICAgIHgxID0gbmV3IFNWRy5Qb2ludEFycmF5KHgxKS50b0xpbmUoKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cih4MSlcclxuICAgIH1cclxuICAgIC8vIE1vdmUgYnkgbGVmdCB0b3AgY29ybmVyXHJcbiAgLCBtb3ZlOiBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIodGhpcy5hcnJheSgpLm1vdmUoeCwgeSkudG9MaW5lKCkpXHJcbiAgICB9XHJcbiAgICAvLyBTZXQgZWxlbWVudCBzaXplIHRvIGdpdmVuIHdpZHRoIGFuZCBoZWlnaHRcclxuICAsIHNpemU6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgdmFyIHAgPSBwcm9wb3J0aW9uYWxTaXplKHRoaXMsIHdpZHRoLCBoZWlnaHQpXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKHRoaXMuYXJyYXkoKS5zaXplKHAud2lkdGgsIHAuaGVpZ2h0KS50b0xpbmUoKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBDcmVhdGUgYSBsaW5lIGVsZW1lbnRcclxuICAgIGxpbmU6IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyKSB7XHJcbiAgICAgIC8vIG1ha2Ugc3VyZSBwbG90IGlzIGNhbGxlZCBhcyBhIHNldHRlclxyXG4gICAgICAvLyB4MSBpcyBub3QgbmVjZXNzYXJpbHkgYSBudW1iZXIsIGl0IGNhbiBhbHNvIGJlIGFuIGFycmF5LCBhIHN0cmluZyBhbmQgYSBTVkcuUG9pbnRBcnJheVxyXG4gICAgICByZXR1cm4gU1ZHLkxpbmUucHJvdG90eXBlLnBsb3QuYXBwbHkoXHJcbiAgICAgICAgdGhpcy5wdXQobmV3IFNWRy5MaW5lKVxyXG4gICAgICAsIHgxICE9IG51bGwgPyBbeDEsIHkxLCB4MiwgeTJdIDogWzAsIDAsIDAsIDBdXHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxuU1ZHLlBvbHlsaW5lID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiAncG9seWxpbmUnXHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5TaGFwZVxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gQ3JlYXRlIGEgd3JhcHBlZCBwb2x5bGluZSBlbGVtZW50XHJcbiAgICBwb2x5bGluZTogZnVuY3Rpb24ocCkge1xyXG4gICAgICAvLyBtYWtlIHN1cmUgcGxvdCBpcyBjYWxsZWQgYXMgYSBzZXR0ZXJcclxuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTVkcuUG9seWxpbmUpLnBsb3QocCB8fCBuZXcgU1ZHLlBvaW50QXJyYXkpXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuU1ZHLlBvbHlnb24gPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6ICdwb2x5Z29uJ1xyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuU2hhcGVcclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIENyZWF0ZSBhIHdyYXBwZWQgcG9seWdvbiBlbGVtZW50XHJcbiAgICBwb2x5Z29uOiBmdW5jdGlvbihwKSB7XHJcbiAgICAgIC8vIG1ha2Ugc3VyZSBwbG90IGlzIGNhbGxlZCBhcyBhIHNldHRlclxyXG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFNWRy5Qb2x5Z29uKS5wbG90KHAgfHwgbmV3IFNWRy5Qb2ludEFycmF5KVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbi8vIEFkZCBwb2x5Z29uLXNwZWNpZmljIGZ1bmN0aW9uc1xyXG5TVkcuZXh0ZW5kKFNWRy5Qb2x5bGluZSwgU1ZHLlBvbHlnb24sIHtcclxuICAvLyBHZXQgYXJyYXlcclxuICBhcnJheTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXJyYXkgfHwgKHRoaXMuX2FycmF5ID0gbmV3IFNWRy5Qb2ludEFycmF5KHRoaXMuYXR0cigncG9pbnRzJykpKVxyXG4gIH1cclxuICAvLyBQbG90IG5ldyBwYXRoXHJcbiwgcGxvdDogZnVuY3Rpb24ocCkge1xyXG4gICAgcmV0dXJuIChwID09IG51bGwpID9cclxuICAgICAgdGhpcy5hcnJheSgpIDpcclxuICAgICAgdGhpcy5jbGVhcigpLmF0dHIoJ3BvaW50cycsIHR5cGVvZiBwID09ICdzdHJpbmcnID8gcCA6ICh0aGlzLl9hcnJheSA9IG5ldyBTVkcuUG9pbnRBcnJheShwKSkpXHJcbiAgfVxyXG4gIC8vIENsZWFyIGFycmF5IGNhY2hlXHJcbiwgY2xlYXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgZGVsZXRlIHRoaXMuX2FycmF5XHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICAvLyBNb3ZlIGJ5IGxlZnQgdG9wIGNvcm5lclxyXG4sIG1vdmU6IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgIHJldHVybiB0aGlzLmF0dHIoJ3BvaW50cycsIHRoaXMuYXJyYXkoKS5tb3ZlKHgsIHkpKVxyXG4gIH1cclxuICAvLyBTZXQgZWxlbWVudCBzaXplIHRvIGdpdmVuIHdpZHRoIGFuZCBoZWlnaHRcclxuLCBzaXplOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB2YXIgcCA9IHByb3BvcnRpb25hbFNpemUodGhpcywgd2lkdGgsIGhlaWdodClcclxuXHJcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdwb2ludHMnLCB0aGlzLmFycmF5KCkuc2l6ZShwLndpZHRoLCBwLmhlaWdodCkpXHJcbiAgfVxyXG5cclxufSlcclxuXG4vLyB1bmlmeSBhbGwgcG9pbnQgdG8gcG9pbnQgZWxlbWVudHNcclxuU1ZHLmV4dGVuZChTVkcuTGluZSwgU1ZHLlBvbHlsaW5lLCBTVkcuUG9seWdvbiwge1xyXG4gIC8vIERlZmluZSBtb3JwaGFibGUgYXJyYXlcclxuICBtb3JwaEFycmF5OiAgU1ZHLlBvaW50QXJyYXlcclxuICAvLyBNb3ZlIGJ5IGxlZnQgdG9wIGNvcm5lciBvdmVyIHgtYXhpc1xyXG4sIHg6IGZ1bmN0aW9uKHgpIHtcclxuICAgIHJldHVybiB4ID09IG51bGwgPyB0aGlzLmJib3goKS54IDogdGhpcy5tb3ZlKHgsIHRoaXMuYmJveCgpLnkpXHJcbiAgfVxyXG4gIC8vIE1vdmUgYnkgbGVmdCB0b3AgY29ybmVyIG92ZXIgeS1heGlzXHJcbiwgeTogZnVuY3Rpb24oeSkge1xyXG4gICAgcmV0dXJuIHkgPT0gbnVsbCA/IHRoaXMuYmJveCgpLnkgOiB0aGlzLm1vdmUodGhpcy5iYm94KCkueCwgeSlcclxuICB9XHJcbiAgLy8gU2V0IHdpZHRoIG9mIGVsZW1lbnRcclxuLCB3aWR0aDogZnVuY3Rpb24od2lkdGgpIHtcclxuICAgIHZhciBiID0gdGhpcy5iYm94KClcclxuXHJcbiAgICByZXR1cm4gd2lkdGggPT0gbnVsbCA/IGIud2lkdGggOiB0aGlzLnNpemUod2lkdGgsIGIuaGVpZ2h0KVxyXG4gIH1cclxuICAvLyBTZXQgaGVpZ2h0IG9mIGVsZW1lbnRcclxuLCBoZWlnaHQ6IGZ1bmN0aW9uKGhlaWdodCkge1xyXG4gICAgdmFyIGIgPSB0aGlzLmJib3goKVxyXG5cclxuICAgIHJldHVybiBoZWlnaHQgPT0gbnVsbCA/IGIuaGVpZ2h0IDogdGhpcy5zaXplKGIud2lkdGgsIGhlaWdodClcclxuICB9XHJcbn0pXG5TVkcuUGF0aCA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogJ3BhdGgnXHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5TaGFwZVxyXG5cclxuICAvLyBBZGQgY2xhc3MgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gRGVmaW5lIG1vcnBoYWJsZSBhcnJheVxyXG4gICAgbW9ycGhBcnJheTogIFNWRy5QYXRoQXJyYXlcclxuICAgIC8vIEdldCBhcnJheVxyXG4gICwgYXJyYXk6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fYXJyYXkgfHwgKHRoaXMuX2FycmF5ID0gbmV3IFNWRy5QYXRoQXJyYXkodGhpcy5hdHRyKCdkJykpKVxyXG4gICAgfVxyXG4gICAgLy8gUGxvdCBuZXcgcGF0aFxyXG4gICwgcGxvdDogZnVuY3Rpb24oZCkge1xyXG4gICAgICByZXR1cm4gKGQgPT0gbnVsbCkgP1xyXG4gICAgICAgIHRoaXMuYXJyYXkoKSA6XHJcbiAgICAgICAgdGhpcy5jbGVhcigpLmF0dHIoJ2QnLCB0eXBlb2YgZCA9PSAnc3RyaW5nJyA/IGQgOiAodGhpcy5fYXJyYXkgPSBuZXcgU1ZHLlBhdGhBcnJheShkKSkpXHJcbiAgICB9XHJcbiAgICAvLyBDbGVhciBhcnJheSBjYWNoZVxyXG4gICwgY2xlYXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBkZWxldGUgdGhpcy5fYXJyYXlcclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIE1vdmUgYnkgbGVmdCB0b3AgY29ybmVyXHJcbiAgLCBtb3ZlOiBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ2QnLCB0aGlzLmFycmF5KCkubW92ZSh4LCB5KSlcclxuICAgIH1cclxuICAgIC8vIE1vdmUgYnkgbGVmdCB0b3AgY29ybmVyIG92ZXIgeC1heGlzXHJcbiAgLCB4OiBmdW5jdGlvbih4KSB7XHJcbiAgICAgIHJldHVybiB4ID09IG51bGwgPyB0aGlzLmJib3goKS54IDogdGhpcy5tb3ZlKHgsIHRoaXMuYmJveCgpLnkpXHJcbiAgICB9XHJcbiAgICAvLyBNb3ZlIGJ5IGxlZnQgdG9wIGNvcm5lciBvdmVyIHktYXhpc1xyXG4gICwgeTogZnVuY3Rpb24oeSkge1xyXG4gICAgICByZXR1cm4geSA9PSBudWxsID8gdGhpcy5iYm94KCkueSA6IHRoaXMubW92ZSh0aGlzLmJib3goKS54LCB5KVxyXG4gICAgfVxyXG4gICAgLy8gU2V0IGVsZW1lbnQgc2l6ZSB0byBnaXZlbiB3aWR0aCBhbmQgaGVpZ2h0XHJcbiAgLCBzaXplOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgIHZhciBwID0gcHJvcG9ydGlvbmFsU2l6ZSh0aGlzLCB3aWR0aCwgaGVpZ2h0KVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cignZCcsIHRoaXMuYXJyYXkoKS5zaXplKHAud2lkdGgsIHAuaGVpZ2h0KSlcclxuICAgIH1cclxuICAgIC8vIFNldCB3aWR0aCBvZiBlbGVtZW50XHJcbiAgLCB3aWR0aDogZnVuY3Rpb24od2lkdGgpIHtcclxuICAgICAgcmV0dXJuIHdpZHRoID09IG51bGwgPyB0aGlzLmJib3goKS53aWR0aCA6IHRoaXMuc2l6ZSh3aWR0aCwgdGhpcy5iYm94KCkuaGVpZ2h0KVxyXG4gICAgfVxyXG4gICAgLy8gU2V0IGhlaWdodCBvZiBlbGVtZW50XHJcbiAgLCBoZWlnaHQ6IGZ1bmN0aW9uKGhlaWdodCkge1xyXG4gICAgICByZXR1cm4gaGVpZ2h0ID09IG51bGwgPyB0aGlzLmJib3goKS5oZWlnaHQgOiB0aGlzLnNpemUodGhpcy5iYm94KCkud2lkdGgsIGhlaWdodClcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gQ3JlYXRlIGEgd3JhcHBlZCBwYXRoIGVsZW1lbnRcclxuICAgIHBhdGg6IGZ1bmN0aW9uKGQpIHtcclxuICAgICAgLy8gbWFrZSBzdXJlIHBsb3QgaXMgY2FsbGVkIGFzIGEgc2V0dGVyXHJcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgU1ZHLlBhdGgpLnBsb3QoZCB8fCBuZXcgU1ZHLlBhdGhBcnJheSlcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxuU1ZHLkltYWdlID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiAnaW1hZ2UnXHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5TaGFwZVxyXG5cclxuICAvLyBBZGQgY2xhc3MgbWV0aG9kc1xyXG4sIGV4dGVuZDoge1xyXG4gICAgLy8gKHJlKWxvYWQgaW1hZ2VcclxuICAgIGxvYWQ6IGZ1bmN0aW9uKHVybCkge1xyXG4gICAgICBpZiAoIXVybCkgcmV0dXJuIHRoaXNcclxuXHJcbiAgICAgIHZhciBzZWxmID0gdGhpc1xyXG4gICAgICAgICwgaW1nICA9IG5ldyB3aW5kb3cuSW1hZ2UoKVxyXG5cclxuICAgICAgLy8gcHJlbG9hZCBpbWFnZVxyXG4gICAgICBTVkcub24oaW1nLCAnbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFNWRy5vZmYoaW1nKVxyXG5cclxuICAgICAgICB2YXIgcCA9IHNlbGYucGFyZW50KFNWRy5QYXR0ZXJuKVxyXG5cclxuICAgICAgICBpZihwID09PSBudWxsKSByZXR1cm5cclxuXHJcbiAgICAgICAgLy8gZW5zdXJlIGltYWdlIHNpemVcclxuICAgICAgICBpZiAoc2VsZi53aWR0aCgpID09IDAgJiYgc2VsZi5oZWlnaHQoKSA9PSAwKVxyXG4gICAgICAgICAgc2VsZi5zaXplKGltZy53aWR0aCwgaW1nLmhlaWdodClcclxuXHJcbiAgICAgICAgLy8gZW5zdXJlIHBhdHRlcm4gc2l6ZSBpZiBub3Qgc2V0XHJcbiAgICAgICAgaWYgKHAgJiYgcC53aWR0aCgpID09IDAgJiYgcC5oZWlnaHQoKSA9PSAwKVxyXG4gICAgICAgICAgcC5zaXplKHNlbGYud2lkdGgoKSwgc2VsZi5oZWlnaHQoKSlcclxuXHJcbiAgICAgICAgLy8gY2FsbGJhY2tcclxuICAgICAgICBpZiAodHlwZW9mIHNlbGYuX2xvYWRlZCA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgIHNlbGYuX2xvYWRlZC5jYWxsKHNlbGYsIHtcclxuICAgICAgICAgICAgd2lkdGg6ICBpbWcud2lkdGhcclxuICAgICAgICAgICwgaGVpZ2h0OiBpbWcuaGVpZ2h0XHJcbiAgICAgICAgICAsIHJhdGlvOiAgaW1nLndpZHRoIC8gaW1nLmhlaWdodFxyXG4gICAgICAgICAgLCB1cmw6ICAgIHVybFxyXG4gICAgICAgICAgfSlcclxuICAgICAgfSlcclxuXHJcbiAgICAgIFNWRy5vbihpbWcsICdlcnJvcicsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIFNWRy5vZmYoaW1nKVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHNlbGYuX2Vycm9yID09PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgc2VsZi5fZXJyb3IuY2FsbChzZWxmLCBlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ2hyZWYnLCAoaW1nLnNyYyA9IHRoaXMuc3JjID0gdXJsKSwgU1ZHLnhsaW5rKVxyXG4gICAgfVxyXG4gICAgLy8gQWRkIGxvYWRlZCBjYWxsYmFja1xyXG4gICwgbG9hZGVkOiBmdW5jdGlvbihsb2FkZWQpIHtcclxuICAgICAgdGhpcy5fbG9hZGVkID0gbG9hZGVkXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICwgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgIHRoaXMuX2Vycm9yID0gZXJyb3JcclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBjcmVhdGUgaW1hZ2UgZWxlbWVudCwgbG9hZCBpbWFnZSBhbmQgc2V0IGl0cyBzaXplXHJcbiAgICBpbWFnZTogZnVuY3Rpb24oc291cmNlLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgU1ZHLkltYWdlKS5sb2FkKHNvdXJjZSkuc2l6ZSh3aWR0aCB8fCAwLCBoZWlnaHQgfHwgd2lkdGggfHwgMClcclxuICAgIH1cclxuICB9XHJcblxyXG59KVxuU1ZHLlRleHQgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIFNWRy5jcmVhdGUoJ3RleHQnKSlcclxuXHJcbiAgICB0aGlzLmRvbS5sZWFkaW5nID0gbmV3IFNWRy5OdW1iZXIoMS4zKSAgICAvLyBzdG9yZSBsZWFkaW5nIHZhbHVlIGZvciByZWJ1aWxkaW5nXHJcbiAgICB0aGlzLl9yZWJ1aWxkID0gdHJ1ZSAgICAgICAgICAgICAgICAgICAgICAvLyBlbmFibGUgYXV0b21hdGljIHVwZGF0aW5nIG9mIGR5IHZhbHVlc1xyXG4gICAgdGhpcy5fYnVpbGQgICA9IGZhbHNlICAgICAgICAgICAgICAgICAgICAgLy8gZGlzYWJsZSBidWlsZCBtb2RlIGZvciBhZGRpbmcgbXVsdGlwbGUgbGluZXNcclxuXHJcbiAgICAvLyBzZXQgZGVmYXVsdCBmb250XHJcbiAgICB0aGlzLmF0dHIoJ2ZvbnQtZmFtaWx5JywgU1ZHLmRlZmF1bHRzLmF0dHJzWydmb250LWZhbWlseSddKVxyXG4gIH1cclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLlNoYXBlXHJcblxyXG4gIC8vIEFkZCBjbGFzcyBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBNb3ZlIG92ZXIgeC1heGlzXHJcbiAgICB4OiBmdW5jdGlvbih4KSB7XHJcbiAgICAgIC8vIGFjdCBhcyBnZXR0ZXJcclxuICAgICAgaWYgKHggPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gdGhpcy5hdHRyKCd4JylcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ3gnLCB4KVxyXG4gICAgfVxyXG4gICAgLy8gTW92ZSBvdmVyIHktYXhpc1xyXG4gICwgeTogZnVuY3Rpb24oeSkge1xyXG4gICAgICB2YXIgb3kgPSB0aGlzLmF0dHIoJ3knKVxyXG4gICAgICAgICwgbyAgPSB0eXBlb2Ygb3kgPT09ICdudW1iZXInID8gb3kgLSB0aGlzLmJib3goKS55IDogMFxyXG5cclxuICAgICAgLy8gYWN0IGFzIGdldHRlclxyXG4gICAgICBpZiAoeSA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiB0eXBlb2Ygb3kgPT09ICdudW1iZXInID8gb3kgLSBvIDogb3lcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ3knLCB0eXBlb2YgeS52YWx1ZU9mKCkgPT09ICdudW1iZXInID8geSArIG8gOiB5KVxyXG4gICAgfVxyXG4gICAgLy8gTW92ZSBjZW50ZXIgb3ZlciB4LWF4aXNcclxuICAsIGN4OiBmdW5jdGlvbih4KSB7XHJcbiAgICAgIHJldHVybiB4ID09IG51bGwgPyB0aGlzLmJib3goKS5jeCA6IHRoaXMueCh4IC0gdGhpcy5iYm94KCkud2lkdGggLyAyKVxyXG4gICAgfVxyXG4gICAgLy8gTW92ZSBjZW50ZXIgb3ZlciB5LWF4aXNcclxuICAsIGN5OiBmdW5jdGlvbih5KSB7XHJcbiAgICAgIHJldHVybiB5ID09IG51bGwgPyB0aGlzLmJib3goKS5jeSA6IHRoaXMueSh5IC0gdGhpcy5iYm94KCkuaGVpZ2h0IC8gMilcclxuICAgIH1cclxuICAgIC8vIFNldCB0aGUgdGV4dCBjb250ZW50XHJcbiAgLCB0ZXh0OiBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgICAgIC8vIGFjdCBhcyBnZXR0ZXJcclxuICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgdmFyIHRleHQgPSAnJ1xyXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMubm9kZS5jaGlsZE5vZGVzXHJcbiAgICAgICAgZm9yKHZhciBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyArK2kpe1xyXG5cclxuICAgICAgICAgIC8vIGFkZCBuZXdsaW5lIGlmIGl0cyBub3QgdGhlIGZpcnN0IGNoaWxkIGFuZCBuZXdMaW5lZCBpcyBzZXQgdG8gdHJ1ZVxyXG4gICAgICAgICAgaWYoaSAhPSAwICYmIGNoaWxkcmVuW2ldLm5vZGVUeXBlICE9IDMgJiYgU1ZHLmFkb3B0KGNoaWxkcmVuW2ldKS5kb20ubmV3TGluZWQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHRleHQgKz0gJ1xcbidcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBhZGQgY29udGVudCBvZiB0aGlzIG5vZGVcclxuICAgICAgICAgIHRleHQgKz0gY2hpbGRyZW5baV0udGV4dENvbnRlbnRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHJlbW92ZSBleGlzdGluZyBjb250ZW50XHJcbiAgICAgIHRoaXMuY2xlYXIoKS5idWlsZCh0cnVlKVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgLy8gY2FsbCBibG9ja1xyXG4gICAgICAgIHRleHQuY2FsbCh0aGlzLCB0aGlzKVxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBzdG9yZSB0ZXh0IGFuZCBtYWtlIHN1cmUgdGV4dCBpcyBub3QgYmxhbmtcclxuICAgICAgICB0ZXh0ID0gdGV4dC5zcGxpdCgnXFxuJylcclxuXHJcbiAgICAgICAgLy8gYnVpbGQgbmV3IGxpbmVzXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlsID0gdGV4dC5sZW5ndGg7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgICAgdGhpcy50c3Bhbih0ZXh0W2ldKS5uZXdMaW5lKClcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZGlzYWJsZSBidWlsZCBtb2RlIGFuZCByZWJ1aWxkIGxpbmVzXHJcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGZhbHNlKS5yZWJ1aWxkKClcclxuICAgIH1cclxuICAgIC8vIFNldCBmb250IHNpemVcclxuICAsIHNpemU6IGZ1bmN0aW9uKHNpemUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cignZm9udC1zaXplJywgc2l6ZSkucmVidWlsZCgpXHJcbiAgICB9XHJcbiAgICAvLyBTZXQgLyBnZXQgbGVhZGluZ1xyXG4gICwgbGVhZGluZzogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgLy8gYWN0IGFzIGdldHRlclxyXG4gICAgICBpZiAodmFsdWUgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gdGhpcy5kb20ubGVhZGluZ1xyXG5cclxuICAgICAgLy8gYWN0IGFzIHNldHRlclxyXG4gICAgICB0aGlzLmRvbS5sZWFkaW5nID0gbmV3IFNWRy5OdW1iZXIodmFsdWUpXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5yZWJ1aWxkKClcclxuICAgIH1cclxuICAgIC8vIEdldCBhbGwgdGhlIGZpcnN0IGxldmVsIGxpbmVzXHJcbiAgLCBsaW5lczogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBub2RlID0gKHRoaXMudGV4dFBhdGggJiYgdGhpcy50ZXh0UGF0aCgpIHx8IHRoaXMpLm5vZGVcclxuXHJcbiAgICAgIC8vIGZpbHRlciB0c3BhbnMgYW5kIG1hcCB0aGVtIHRvIFNWRy5qcyBpbnN0YW5jZXNcclxuICAgICAgdmFyIGxpbmVzID0gU1ZHLnV0aWxzLm1hcChTVkcudXRpbHMuZmlsdGVyU1ZHRWxlbWVudHMobm9kZS5jaGlsZE5vZGVzKSwgZnVuY3Rpb24oZWwpe1xyXG4gICAgICAgIHJldHVybiBTVkcuYWRvcHQoZWwpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvLyByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgU1ZHLnNldFxyXG4gICAgICByZXR1cm4gbmV3IFNWRy5TZXQobGluZXMpXHJcbiAgICB9XHJcbiAgICAvLyBSZWJ1aWxkIGFwcGVhcmFuY2UgdHlwZVxyXG4gICwgcmVidWlsZDogZnVuY3Rpb24ocmVidWlsZCkge1xyXG4gICAgICAvLyBzdG9yZSBuZXcgcmVidWlsZCBmbGFnIGlmIGdpdmVuXHJcbiAgICAgIGlmICh0eXBlb2YgcmVidWlsZCA9PSAnYm9vbGVhbicpXHJcbiAgICAgICAgdGhpcy5fcmVidWlsZCA9IHJlYnVpbGRcclxuXHJcbiAgICAgIC8vIGRlZmluZSBwb3NpdGlvbiBvZiBhbGwgbGluZXNcclxuICAgICAgaWYgKHRoaXMuX3JlYnVpbGQpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICAgICwgYmxhbmtMaW5lT2Zmc2V0ID0gMFxyXG4gICAgICAgICAgLCBkeSA9IHRoaXMuZG9tLmxlYWRpbmcgKiBuZXcgU1ZHLk51bWJlcih0aGlzLmF0dHIoJ2ZvbnQtc2l6ZScpKVxyXG5cclxuICAgICAgICB0aGlzLmxpbmVzKCkuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmRvbS5uZXdMaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYudGV4dFBhdGgoKSlcclxuICAgICAgICAgICAgICB0aGlzLmF0dHIoJ3gnLCBzZWxmLmF0dHIoJ3gnKSlcclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0KCkgPT0gJ1xcbicpIHtcclxuICAgICAgICAgICAgICBibGFua0xpbmVPZmZzZXQgKz0gZHlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgdGhpcy5hdHRyKCdkeScsIGR5ICsgYmxhbmtMaW5lT2Zmc2V0KVxyXG4gICAgICAgICAgICAgIGJsYW5rTGluZU9mZnNldCA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuZmlyZSgncmVidWlsZCcpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBFbmFibGUgLyBkaXNhYmxlIGJ1aWxkIG1vZGVcclxuICAsIGJ1aWxkOiBmdW5jdGlvbihidWlsZCkge1xyXG4gICAgICB0aGlzLl9idWlsZCA9ICEhYnVpbGRcclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIG92ZXJ3cml0ZSBtZXRob2QgZnJvbSBwYXJlbnQgdG8gc2V0IGRhdGEgcHJvcGVybHlcclxuICAsIHNldERhdGE6IGZ1bmN0aW9uKG8pe1xyXG4gICAgICB0aGlzLmRvbSA9IG9cclxuICAgICAgdGhpcy5kb20ubGVhZGluZyA9IG5ldyBTVkcuTnVtYmVyKG8ubGVhZGluZyB8fCAxLjMpXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gQ3JlYXRlIHRleHQgZWxlbWVudFxyXG4gICAgdGV4dDogZnVuY3Rpb24odGV4dCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFNWRy5UZXh0KS50ZXh0KHRleHQpXHJcbiAgICB9XHJcbiAgICAvLyBDcmVhdGUgcGxhaW4gdGV4dCBlbGVtZW50XHJcbiAgLCBwbGFpbjogZnVuY3Rpb24odGV4dCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFNWRy5UZXh0KS5wbGFpbih0ZXh0KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pXHJcblxyXG5TVkcuVHNwYW4gPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6ICd0c3BhbidcclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLlNoYXBlXHJcblxyXG4gIC8vIEFkZCBjbGFzcyBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBTZXQgdGV4dCBjb250ZW50XHJcbiAgICB0ZXh0OiBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgICAgIGlmKHRleHQgPT0gbnVsbCkgcmV0dXJuIHRoaXMubm9kZS50ZXh0Q29udGVudCArICh0aGlzLmRvbS5uZXdMaW5lZCA/ICdcXG4nIDogJycpXHJcblxyXG4gICAgICB0eXBlb2YgdGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IHRleHQuY2FsbCh0aGlzLCB0aGlzKSA6IHRoaXMucGxhaW4odGV4dClcclxuXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvLyBTaG9ydGN1dCBkeFxyXG4gICwgZHg6IGZ1bmN0aW9uKGR4KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ2R4JywgZHgpXHJcbiAgICB9XHJcbiAgICAvLyBTaG9ydGN1dCBkeVxyXG4gICwgZHk6IGZ1bmN0aW9uKGR5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ2R5JywgZHkpXHJcbiAgICB9XHJcbiAgICAvLyBDcmVhdGUgbmV3IGxpbmVcclxuICAsIG5ld0xpbmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyBmZXRjaCB0ZXh0IHBhcmVudFxyXG4gICAgICB2YXIgdCA9IHRoaXMucGFyZW50KFNWRy5UZXh0KVxyXG5cclxuICAgICAgLy8gbWFyayBuZXcgbGluZVxyXG4gICAgICB0aGlzLmRvbS5uZXdMaW5lZCA9IHRydWVcclxuXHJcbiAgICAgIC8vIGFwcGx5IG5ldyBoecKhblxyXG4gICAgICByZXR1cm4gdGhpcy5keSh0LmRvbS5sZWFkaW5nICogdC5hdHRyKCdmb250LXNpemUnKSkuYXR0cigneCcsIHQueCgpKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pXHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5UZXh0LCBTVkcuVHNwYW4sIHtcclxuICAvLyBDcmVhdGUgcGxhaW4gdGV4dCBub2RlXHJcbiAgcGxhaW46IGZ1bmN0aW9uKHRleHQpIHtcclxuICAgIC8vIGNsZWFyIGlmIGJ1aWxkIG1vZGUgaXMgZGlzYWJsZWRcclxuICAgIGlmICh0aGlzLl9idWlsZCA9PT0gZmFsc2UpXHJcbiAgICAgIHRoaXMuY2xlYXIoKVxyXG5cclxuICAgIC8vIGNyZWF0ZSB0ZXh0IG5vZGVcclxuICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSlcclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICAvLyBDcmVhdGUgYSB0c3BhblxyXG4sIHRzcGFuOiBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgICB2YXIgbm9kZSAgPSAodGhpcy50ZXh0UGF0aCAmJiB0aGlzLnRleHRQYXRoKCkgfHwgdGhpcykubm9kZVxyXG4gICAgICAsIHRzcGFuID0gbmV3IFNWRy5Uc3BhblxyXG5cclxuICAgIC8vIGNsZWFyIGlmIGJ1aWxkIG1vZGUgaXMgZGlzYWJsZWRcclxuICAgIGlmICh0aGlzLl9idWlsZCA9PT0gZmFsc2UpXHJcbiAgICAgIHRoaXMuY2xlYXIoKVxyXG5cclxuICAgIC8vIGFkZCBuZXcgdHNwYW5cclxuICAgIG5vZGUuYXBwZW5kQ2hpbGQodHNwYW4ubm9kZSlcclxuXHJcbiAgICByZXR1cm4gdHNwYW4udGV4dCh0ZXh0KVxyXG4gIH1cclxuICAvLyBDbGVhciBhbGwgbGluZXNcclxuLCBjbGVhcjogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgbm9kZSA9ICh0aGlzLnRleHRQYXRoICYmIHRoaXMudGV4dFBhdGgoKSB8fCB0aGlzKS5ub2RlXHJcblxyXG4gICAgLy8gcmVtb3ZlIGV4aXN0aW5nIGNoaWxkIG5vZGVzXHJcbiAgICB3aGlsZSAobm9kZS5oYXNDaGlsZE5vZGVzKCkpXHJcbiAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5sYXN0Q2hpbGQpXHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgLy8gR2V0IGxlbmd0aCBvZiB0ZXh0IGVsZW1lbnRcclxuLCBsZW5ndGg6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubm9kZS5nZXRDb21wdXRlZFRleHRMZW5ndGgoKVxyXG4gIH1cclxufSlcclxuXG5TVkcuVGV4dFBhdGggPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6ICd0ZXh0UGF0aCdcclxuXHJcbiAgLy8gSW5oZXJpdCBmcm9tXHJcbiwgaW5oZXJpdDogU1ZHLlBhcmVudFxyXG5cclxuICAvLyBEZWZpbmUgcGFyZW50IGNsYXNzXHJcbiwgcGFyZW50OiBTVkcuVGV4dFxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgbW9ycGhBcnJheTogU1ZHLlBhdGhBcnJheVxyXG4gICAgLy8gQ3JlYXRlIHBhdGggZm9yIHRleHQgdG8gcnVuIG9uXHJcbiAgLCBwYXRoOiBmdW5jdGlvbihkKSB7XHJcbiAgICAgIC8vIGNyZWF0ZSB0ZXh0UGF0aCBlbGVtZW50XHJcbiAgICAgIHZhciBwYXRoICA9IG5ldyBTVkcuVGV4dFBhdGhcclxuICAgICAgICAsIHRyYWNrID0gdGhpcy5kb2MoKS5kZWZzKCkucGF0aChkKVxyXG5cclxuICAgICAgLy8gbW92ZSBsaW5lcyB0byB0ZXh0cGF0aFxyXG4gICAgICB3aGlsZSAodGhpcy5ub2RlLmhhc0NoaWxkTm9kZXMoKSlcclxuICAgICAgICBwYXRoLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5ub2RlLmZpcnN0Q2hpbGQpXHJcblxyXG4gICAgICAvLyBhZGQgdGV4dFBhdGggZWxlbWVudCBhcyBjaGlsZCBub2RlXHJcbiAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChwYXRoLm5vZGUpXHJcblxyXG4gICAgICAvLyBsaW5rIHRleHRQYXRoIHRvIHBhdGggYW5kIGFkZCBjb250ZW50XHJcbiAgICAgIHBhdGguYXR0cignaHJlZicsICcjJyArIHRyYWNrLCBTVkcueGxpbmspXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuIHRoZSBhcnJheSBvZiB0aGUgcGF0aCB0cmFjayBlbGVtZW50XHJcbiAgLCBhcnJheTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciB0cmFjayA9IHRoaXMudHJhY2soKVxyXG5cclxuICAgICAgcmV0dXJuIHRyYWNrID8gdHJhY2suYXJyYXkoKSA6IG51bGxcclxuICAgIH1cclxuICAgIC8vIFBsb3QgcGF0aCBpZiBhbnlcclxuICAsIHBsb3Q6IGZ1bmN0aW9uKGQpIHtcclxuICAgICAgdmFyIHRyYWNrID0gdGhpcy50cmFjaygpXHJcbiAgICAgICAgLCBwYXRoQXJyYXkgPSBudWxsXHJcblxyXG4gICAgICBpZiAodHJhY2spIHtcclxuICAgICAgICBwYXRoQXJyYXkgPSB0cmFjay5wbG90KGQpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiAoZCA9PSBudWxsKSA/IHBhdGhBcnJheSA6IHRoaXNcclxuICAgIH1cclxuICAgIC8vIEdldCB0aGUgcGF0aCB0cmFjayBlbGVtZW50XHJcbiAgLCB0cmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBwYXRoID0gdGhpcy50ZXh0UGF0aCgpXHJcblxyXG4gICAgICBpZiAocGF0aClcclxuICAgICAgICByZXR1cm4gcGF0aC5yZWZlcmVuY2UoJ2hyZWYnKVxyXG4gICAgfVxyXG4gICAgLy8gR2V0IHRoZSB0ZXh0UGF0aCBjaGlsZFxyXG4gICwgdGV4dFBhdGg6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5ub2RlLmZpcnN0Q2hpbGQgJiYgdGhpcy5ub2RlLmZpcnN0Q2hpbGQubm9kZU5hbWUgPT0gJ3RleHRQYXRoJylcclxuICAgICAgICByZXR1cm4gU1ZHLmFkb3B0KHRoaXMubm9kZS5maXJzdENoaWxkKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXG5TVkcuTmVzdGVkID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBTVkcuY3JlYXRlKCdzdmcnKSlcclxuXHJcbiAgICB0aGlzLnN0eWxlKCdvdmVyZmxvdycsICd2aXNpYmxlJylcclxuICB9XHJcblxyXG4gIC8vIEluaGVyaXQgZnJvbVxyXG4sIGluaGVyaXQ6IFNWRy5Db250YWluZXJcclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIC8vIENyZWF0ZSBuZXN0ZWQgc3ZnIGRvY3VtZW50XHJcbiAgICBuZXN0ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFNWRy5OZXN0ZWQpXHJcbiAgICB9XHJcbiAgfVxyXG59KVxuU1ZHLkEgPSBTVkcuaW52ZW50KHtcclxuICAvLyBJbml0aWFsaXplIG5vZGVcclxuICBjcmVhdGU6ICdhJ1xyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuQ29udGFpbmVyXHJcblxyXG4gIC8vIEFkZCBjbGFzcyBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBMaW5rIHVybFxyXG4gICAgdG86IGZ1bmN0aW9uKHVybCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCdocmVmJywgdXJsLCBTVkcueGxpbmspXHJcbiAgICB9XHJcbiAgICAvLyBMaW5rIHNob3cgYXR0cmlidXRlXHJcbiAgLCBzaG93OiBmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXR0cignc2hvdycsIHRhcmdldCwgU1ZHLnhsaW5rKVxyXG4gICAgfVxyXG4gICAgLy8gTGluayB0YXJnZXQgYXR0cmlidXRlXHJcbiAgLCB0YXJnZXQ6IGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCd0YXJnZXQnLCB0YXJnZXQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgcGFyZW50IG1ldGhvZFxyXG4sIGNvbnN0cnVjdDoge1xyXG4gICAgLy8gQ3JlYXRlIGEgaHlwZXJsaW5rIGVsZW1lbnRcclxuICAgIGxpbms6IGZ1bmN0aW9uKHVybCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFNWRy5BKS50byh1cmwpXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuRWxlbWVudCwge1xyXG4gIC8vIENyZWF0ZSBhIGh5cGVybGluayBlbGVtZW50XHJcbiAgbGlua1RvOiBmdW5jdGlvbih1cmwpIHtcclxuICAgIHZhciBsaW5rID0gbmV3IFNWRy5BXHJcblxyXG4gICAgaWYgKHR5cGVvZiB1cmwgPT0gJ2Z1bmN0aW9uJylcclxuICAgICAgdXJsLmNhbGwobGluaywgbGluaylcclxuICAgIGVsc2VcclxuICAgICAgbGluay50byh1cmwpXHJcblxyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50KCkucHV0KGxpbmspLnB1dCh0aGlzKVxyXG4gIH1cclxuXHJcbn0pXG5TVkcuTWFya2VyID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXHJcbiAgY3JlYXRlOiAnbWFya2VyJ1xyXG5cclxuICAvLyBJbmhlcml0IGZyb21cclxuLCBpbmhlcml0OiBTVkcuQ29udGFpbmVyXHJcblxyXG4gIC8vIEFkZCBjbGFzcyBtZXRob2RzXHJcbiwgZXh0ZW5kOiB7XHJcbiAgICAvLyBTZXQgd2lkdGggb2YgZWxlbWVudFxyXG4gICAgd2lkdGg6IGZ1bmN0aW9uKHdpZHRoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ21hcmtlcldpZHRoJywgd2lkdGgpXHJcbiAgICB9XHJcbiAgICAvLyBTZXQgaGVpZ2h0IG9mIGVsZW1lbnRcclxuICAsIGhlaWdodDogZnVuY3Rpb24oaGVpZ2h0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ21hcmtlckhlaWdodCcsIGhlaWdodClcclxuICAgIH1cclxuICAgIC8vIFNldCBtYXJrZXIgcmVmWCBhbmQgcmVmWVxyXG4gICwgcmVmOiBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ3JlZlgnLCB4KS5hdHRyKCdyZWZZJywgeSlcclxuICAgIH1cclxuICAgIC8vIFVwZGF0ZSBtYXJrZXJcclxuICAsIHVwZGF0ZTogZnVuY3Rpb24oYmxvY2spIHtcclxuICAgICAgLy8gcmVtb3ZlIGFsbCBjb250ZW50XHJcbiAgICAgIHRoaXMuY2xlYXIoKVxyXG5cclxuICAgICAgLy8gaW52b2tlIHBhc3NlZCBibG9ja1xyXG4gICAgICBpZiAodHlwZW9mIGJsb2NrID09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgYmxvY2suY2FsbCh0aGlzLCB0aGlzKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIFJldHVybiB0aGUgZmlsbCBpZFxyXG4gICwgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gJ3VybCgjJyArIHRoaXMuaWQoKSArICcpJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIHBhcmVudCBtZXRob2RcclxuLCBjb25zdHJ1Y3Q6IHtcclxuICAgIG1hcmtlcjogZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgYmxvY2spIHtcclxuICAgICAgLy8gQ3JlYXRlIG1hcmtlciBlbGVtZW50IGluIGRlZnNcclxuICAgICAgcmV0dXJuIHRoaXMuZGVmcygpLm1hcmtlcih3aWR0aCwgaGVpZ2h0LCBibG9jaylcclxuICAgIH1cclxuICB9XHJcblxyXG59KVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuRGVmcywge1xyXG4gIC8vIENyZWF0ZSBtYXJrZXJcclxuICBtYXJrZXI6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQsIGJsb2NrKSB7XHJcbiAgICAvLyBTZXQgZGVmYXVsdCB2aWV3Ym94IHRvIG1hdGNoIHRoZSB3aWR0aCBhbmQgaGVpZ2h0LCBzZXQgcmVmIHRvIGN4IGFuZCBjeSBhbmQgc2V0IG9yaWVudCB0byBhdXRvXHJcbiAgICByZXR1cm4gdGhpcy5wdXQobmV3IFNWRy5NYXJrZXIpXHJcbiAgICAgIC5zaXplKHdpZHRoLCBoZWlnaHQpXHJcbiAgICAgIC5yZWYod2lkdGggLyAyLCBoZWlnaHQgLyAyKVxyXG4gICAgICAudmlld2JveCgwLCAwLCB3aWR0aCwgaGVpZ2h0KVxyXG4gICAgICAuYXR0cignb3JpZW50JywgJ2F1dG8nKVxyXG4gICAgICAudXBkYXRlKGJsb2NrKVxyXG4gIH1cclxuXHJcbn0pXHJcblxyXG5TVkcuZXh0ZW5kKFNWRy5MaW5lLCBTVkcuUG9seWxpbmUsIFNWRy5Qb2x5Z29uLCBTVkcuUGF0aCwge1xyXG4gIC8vIENyZWF0ZSBhbmQgYXR0YWNoIG1hcmtlcnNcclxuICBtYXJrZXI6IGZ1bmN0aW9uKG1hcmtlciwgd2lkdGgsIGhlaWdodCwgYmxvY2spIHtcclxuICAgIHZhciBhdHRyID0gWydtYXJrZXInXVxyXG5cclxuICAgIC8vIEJ1aWxkIGF0dHJpYnV0ZSBuYW1lXHJcbiAgICBpZiAobWFya2VyICE9ICdhbGwnKSBhdHRyLnB1c2gobWFya2VyKVxyXG4gICAgYXR0ciA9IGF0dHIuam9pbignLScpXHJcblxyXG4gICAgLy8gU2V0IG1hcmtlciBhdHRyaWJ1dGVcclxuICAgIG1hcmtlciA9IGFyZ3VtZW50c1sxXSBpbnN0YW5jZW9mIFNWRy5NYXJrZXIgP1xyXG4gICAgICBhcmd1bWVudHNbMV0gOlxyXG4gICAgICB0aGlzLmRvYygpLm1hcmtlcih3aWR0aCwgaGVpZ2h0LCBibG9jaylcclxuXHJcbiAgICByZXR1cm4gdGhpcy5hdHRyKGF0dHIsIG1hcmtlcilcclxuICB9XHJcblxyXG59KVxuLy8gRGVmaW5lIGxpc3Qgb2YgYXZhaWxhYmxlIGF0dHJpYnV0ZXMgZm9yIHN0cm9rZSBhbmQgZmlsbFxyXG52YXIgc3VnYXIgPSB7XHJcbiAgc3Ryb2tlOiBbJ2NvbG9yJywgJ3dpZHRoJywgJ29wYWNpdHknLCAnbGluZWNhcCcsICdsaW5lam9pbicsICdtaXRlcmxpbWl0JywgJ2Rhc2hhcnJheScsICdkYXNob2Zmc2V0J11cclxuLCBmaWxsOiAgIFsnY29sb3InLCAnb3BhY2l0eScsICdydWxlJ11cclxuLCBwcmVmaXg6IGZ1bmN0aW9uKHQsIGEpIHtcclxuICAgIHJldHVybiBhID09ICdjb2xvcicgPyB0IDogdCArICctJyArIGFcclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBzdWdhciBmb3IgZmlsbCBhbmQgc3Ryb2tlXHJcbjtbJ2ZpbGwnLCAnc3Ryb2tlJ10uZm9yRWFjaChmdW5jdGlvbihtKSB7XHJcbiAgdmFyIGksIGV4dGVuc2lvbiA9IHt9XHJcblxyXG4gIGV4dGVuc2lvblttXSA9IGZ1bmN0aW9uKG8pIHtcclxuICAgIGlmICh0eXBlb2YgbyA9PSAndW5kZWZpbmVkJylcclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIGlmICh0eXBlb2YgbyA9PSAnc3RyaW5nJyB8fCBTVkcuQ29sb3IuaXNSZ2IobykgfHwgKG8gJiYgdHlwZW9mIG8uZmlsbCA9PT0gJ2Z1bmN0aW9uJykpXHJcbiAgICAgIHRoaXMuYXR0cihtLCBvKVxyXG5cclxuICAgIGVsc2VcclxuICAgICAgLy8gc2V0IGFsbCBhdHRyaWJ1dGVzIGZyb20gc3VnYXIuZmlsbCBhbmQgc3VnYXIuc3Ryb2tlIGxpc3RcclxuICAgICAgZm9yIChpID0gc3VnYXJbbV0ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcbiAgICAgICAgaWYgKG9bc3VnYXJbbV1baV1dICE9IG51bGwpXHJcbiAgICAgICAgICB0aGlzLmF0dHIoc3VnYXIucHJlZml4KG0sIHN1Z2FyW21dW2ldKSwgb1tzdWdhclttXVtpXV0pXHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcblxyXG4gIFNWRy5leHRlbmQoU1ZHLkVsZW1lbnQsIFNWRy5GWCwgZXh0ZW5zaW9uKVxyXG5cclxufSlcclxuXHJcblNWRy5leHRlbmQoU1ZHLkVsZW1lbnQsIFNWRy5GWCwge1xyXG4gIC8vIE1hcCByb3RhdGlvbiB0byB0cmFuc2Zvcm1cclxuICByb3RhdGU6IGZ1bmN0aW9uKGQsIGN4LCBjeSkge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtKHsgcm90YXRpb246IGQsIGN4OiBjeCwgY3k6IGN5IH0pXHJcbiAgfVxyXG4gIC8vIE1hcCBza2V3IHRvIHRyYW5zZm9ybVxyXG4sIHNrZXc6IGZ1bmN0aW9uKHgsIHksIGN4LCBjeSkge1xyXG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT0gMSAgfHwgYXJndW1lbnRzLmxlbmd0aCA9PSAzID9cclxuICAgICAgdGhpcy50cmFuc2Zvcm0oeyBza2V3OiB4LCBjeDogeSwgY3k6IGN4IH0pIDpcclxuICAgICAgdGhpcy50cmFuc2Zvcm0oeyBza2V3WDogeCwgc2tld1k6IHksIGN4OiBjeCwgY3k6IGN5IH0pXHJcbiAgfVxyXG4gIC8vIE1hcCBzY2FsZSB0byB0cmFuc2Zvcm1cclxuLCBzY2FsZTogZnVuY3Rpb24oeCwgeSwgY3gsIGN5KSB7XHJcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PSAxICB8fCBhcmd1bWVudHMubGVuZ3RoID09IDMgP1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybSh7IHNjYWxlOiB4LCBjeDogeSwgY3k6IGN4IH0pIDpcclxuICAgICAgdGhpcy50cmFuc2Zvcm0oeyBzY2FsZVg6IHgsIHNjYWxlWTogeSwgY3g6IGN4LCBjeTogY3kgfSlcclxuICB9XHJcbiAgLy8gTWFwIHRyYW5zbGF0ZSB0byB0cmFuc2Zvcm1cclxuLCB0cmFuc2xhdGU6IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybSh7IHg6IHgsIHk6IHkgfSlcclxuICB9XHJcbiAgLy8gTWFwIGZsaXAgdG8gdHJhbnNmb3JtXHJcbiwgZmxpcDogZnVuY3Rpb24oYSwgbykge1xyXG4gICAgbyA9IHR5cGVvZiBhID09ICdudW1iZXInID8gYSA6IG9cclxuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybSh7IGZsaXA6IGEgfHwgJ2JvdGgnLCBvZmZzZXQ6IG8gfSlcclxuICB9XHJcbiAgLy8gTWFwIG1hdHJpeCB0byB0cmFuc2Zvcm1cclxuLCBtYXRyaXg6IGZ1bmN0aW9uKG0pIHtcclxuICAgIHJldHVybiB0aGlzLmF0dHIoJ3RyYW5zZm9ybScsIG5ldyBTVkcuTWF0cml4KGFyZ3VtZW50cy5sZW5ndGggPT0gNiA/IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSA6IG0pKVxyXG4gIH1cclxuICAvLyBPcGFjaXR5XHJcbiwgb3BhY2l0eTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHJldHVybiB0aGlzLmF0dHIoJ29wYWNpdHknLCB2YWx1ZSlcclxuICB9XHJcbiAgLy8gUmVsYXRpdmUgbW92ZSBvdmVyIHggYXhpc1xyXG4sIGR4OiBmdW5jdGlvbih4KSB7XHJcbiAgICByZXR1cm4gdGhpcy54KG5ldyBTVkcuTnVtYmVyKHgpLnBsdXModGhpcyBpbnN0YW5jZW9mIFNWRy5GWCA/IDAgOiB0aGlzLngoKSksIHRydWUpXHJcbiAgfVxyXG4gIC8vIFJlbGF0aXZlIG1vdmUgb3ZlciB5IGF4aXNcclxuLCBkeTogZnVuY3Rpb24oeSkge1xyXG4gICAgcmV0dXJuIHRoaXMueShuZXcgU1ZHLk51bWJlcih5KS5wbHVzKHRoaXMgaW5zdGFuY2VvZiBTVkcuRlggPyAwIDogdGhpcy55KCkpLCB0cnVlKVxyXG4gIH1cclxuICAvLyBSZWxhdGl2ZSBtb3ZlIG92ZXIgeCBhbmQgeSBheGVzXHJcbiwgZG1vdmU6IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgIHJldHVybiB0aGlzLmR4KHgpLmR5KHkpXHJcbiAgfVxyXG59KVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuUmVjdCwgU1ZHLkVsbGlwc2UsIFNWRy5DaXJjbGUsIFNWRy5HcmFkaWVudCwgU1ZHLkZYLCB7XHJcbiAgLy8gQWRkIHggYW5kIHkgcmFkaXVzXHJcbiAgcmFkaXVzOiBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICB2YXIgdHlwZSA9ICh0aGlzLl90YXJnZXQgfHwgdGhpcykudHlwZTtcclxuICAgIHJldHVybiB0eXBlID09ICdyYWRpYWwnIHx8IHR5cGUgPT0gJ2NpcmNsZScgP1xyXG4gICAgICB0aGlzLmF0dHIoJ3InLCBuZXcgU1ZHLk51bWJlcih4KSkgOlxyXG4gICAgICB0aGlzLnJ4KHgpLnJ5KHkgPT0gbnVsbCA/IHggOiB5KVxyXG4gIH1cclxufSlcclxuXHJcblNWRy5leHRlbmQoU1ZHLlBhdGgsIHtcclxuICAvLyBHZXQgcGF0aCBsZW5ndGhcclxuICBsZW5ndGg6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubm9kZS5nZXRUb3RhbExlbmd0aCgpXHJcbiAgfVxyXG4gIC8vIEdldCBwb2ludCBhdCBsZW5ndGhcclxuLCBwb2ludEF0OiBmdW5jdGlvbihsZW5ndGgpIHtcclxuICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0UG9pbnRBdExlbmd0aChsZW5ndGgpXHJcbiAgfVxyXG59KVxyXG5cclxuU1ZHLmV4dGVuZChTVkcuUGFyZW50LCBTVkcuVGV4dCwgU1ZHLlRzcGFuLCBTVkcuRlgsIHtcclxuICAvLyBTZXQgZm9udFxyXG4gIGZvbnQ6IGZ1bmN0aW9uKGEsIHYpIHtcclxuICAgIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICBmb3IgKHYgaW4gYSkgdGhpcy5mb250KHYsIGFbdl0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGEgPT0gJ2xlYWRpbmcnID9cclxuICAgICAgICB0aGlzLmxlYWRpbmcodikgOlxyXG4gICAgICBhID09ICdhbmNob3InID9cclxuICAgICAgICB0aGlzLmF0dHIoJ3RleHQtYW5jaG9yJywgdikgOlxyXG4gICAgICBhID09ICdzaXplJyB8fCBhID09ICdmYW1pbHknIHx8IGEgPT0gJ3dlaWdodCcgfHwgYSA9PSAnc3RyZXRjaCcgfHwgYSA9PSAndmFyaWFudCcgfHwgYSA9PSAnc3R5bGUnID9cclxuICAgICAgICB0aGlzLmF0dHIoJ2ZvbnQtJysgYSwgdikgOlxyXG4gICAgICAgIHRoaXMuYXR0cihhLCB2KVxyXG4gIH1cclxufSlcclxuXG5TVkcuU2V0ID0gU1ZHLmludmVudCh7XHJcbiAgLy8gSW5pdGlhbGl6ZVxyXG4gIGNyZWF0ZTogZnVuY3Rpb24obWVtYmVycykge1xyXG4gICAgaWYgKG1lbWJlcnMgaW5zdGFuY2VvZiBTVkcuU2V0KSB7XHJcbiAgICAgIHRoaXMubWVtYmVycyA9IG1lbWJlcnMubWVtYmVycy5zbGljZSgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBBcnJheS5pc0FycmF5KG1lbWJlcnMpID8gdGhpcy5tZW1iZXJzID0gbWVtYmVycyA6IHRoaXMuY2xlYXIoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIGNsYXNzIG1ldGhvZHNcclxuLCBleHRlbmQ6IHtcclxuICAgIC8vIEFkZCBlbGVtZW50IHRvIHNldFxyXG4gICAgYWRkOiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGksIGlsLCBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxyXG5cclxuICAgICAgZm9yIChpID0gMCwgaWwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIHRoaXMubWVtYmVycy5wdXNoKGVsZW1lbnRzW2ldKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIFJlbW92ZSBlbGVtZW50IGZyb20gc2V0XHJcbiAgLCByZW1vdmU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGkgPSB0aGlzLmluZGV4KGVsZW1lbnQpXHJcblxyXG4gICAgICAvLyByZW1vdmUgZ2l2ZW4gY2hpbGRcclxuICAgICAgaWYgKGkgPiAtMSlcclxuICAgICAgICB0aGlzLm1lbWJlcnMuc3BsaWNlKGksIDEpXHJcblxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFsbCBtZW1iZXJzXHJcbiAgLCBlYWNoOiBmdW5jdGlvbihibG9jaykge1xyXG4gICAgICBmb3IgKHZhciBpID0gMCwgaWwgPSB0aGlzLm1lbWJlcnMubGVuZ3RoOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBibG9jay5hcHBseSh0aGlzLm1lbWJlcnNbaV0sIFtpLCB0aGlzLm1lbWJlcnNdKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIFJlc3RvcmUgdG8gZGVmYXVsdHNcclxuICAsIGNsZWFyOiBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gaW5pdGlhbGl6ZSBzdG9yZVxyXG4gICAgICB0aGlzLm1lbWJlcnMgPSBbXVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8vIEdldCB0aGUgbGVuZ3RoIG9mIGEgc2V0XHJcbiAgLCBsZW5ndGg6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5tZW1iZXJzLmxlbmd0aFxyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2tzIGlmIGEgZ2l2ZW4gZWxlbWVudCBpcyBwcmVzZW50IGluIHNldFxyXG4gICwgaGFzOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmluZGV4KGVsZW1lbnQpID49IDBcclxuICAgIH1cclxuICAgIC8vIHJldHVucyBpbmRleCBvZiBnaXZlbiBlbGVtZW50IGluIHNldFxyXG4gICwgaW5kZXg6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWVtYmVycy5pbmRleE9mKGVsZW1lbnQpXHJcbiAgICB9XHJcbiAgICAvLyBHZXQgbWVtYmVyIGF0IGdpdmVuIGluZGV4XHJcbiAgLCBnZXQ6IGZ1bmN0aW9uKGkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWVtYmVyc1tpXVxyXG4gICAgfVxyXG4gICAgLy8gR2V0IGZpcnN0IG1lbWJlclxyXG4gICwgZmlyc3Q6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXQoMClcclxuICAgIH1cclxuICAgIC8vIEdldCBsYXN0IG1lbWJlclxyXG4gICwgbGFzdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldCh0aGlzLm1lbWJlcnMubGVuZ3RoIC0gMSlcclxuICAgIH1cclxuICAgIC8vIERlZmF1bHQgdmFsdWVcclxuICAsIHZhbHVlT2Y6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5tZW1iZXJzXHJcbiAgICB9XHJcbiAgICAvLyBHZXQgdGhlIGJvdW5kaW5nIGJveCBvZiBhbGwgbWVtYmVycyBpbmNsdWRlZCBvciBlbXB0eSBib3ggaWYgc2V0IGhhcyBubyBpdGVtc1xyXG4gICwgYmJveDogZnVuY3Rpb24oKXtcclxuICAgICAgLy8gcmV0dXJuIGFuIGVtcHR5IGJveCBvZiB0aGVyZSBhcmUgbm8gbWVtYmVyc1xyXG4gICAgICBpZiAodGhpcy5tZW1iZXJzLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgIHJldHVybiBuZXcgU1ZHLlJCb3goKVxyXG5cclxuICAgICAgLy8gZ2V0IHRoZSBmaXJzdCByYm94IGFuZCB1cGRhdGUgdGhlIHRhcmdldCBiYm94XHJcbiAgICAgIHZhciByYm94ID0gdGhpcy5tZW1iZXJzWzBdLnJib3godGhpcy5tZW1iZXJzWzBdLmRvYygpKVxyXG5cclxuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIHVzZXIgcmJveCBmb3IgY29ycmVjdCBwb3NpdGlvbiBhbmQgdmlzdWFsIHJlcHJlc2VudGF0aW9uXHJcbiAgICAgICAgcmJveCA9IHJib3gubWVyZ2UodGhpcy5yYm94KHRoaXMuZG9jKCkpKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHJib3hcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEFkZCBwYXJlbnQgbWV0aG9kXHJcbiwgY29uc3RydWN0OiB7XHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgc2V0XHJcbiAgICBzZXQ6IGZ1bmN0aW9uKG1lbWJlcnMpIHtcclxuICAgICAgcmV0dXJuIG5ldyBTVkcuU2V0KG1lbWJlcnMpXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuU1ZHLkZYLlNldCA9IFNWRy5pbnZlbnQoe1xyXG4gIC8vIEluaXRpYWxpemUgbm9kZVxyXG4gIGNyZWF0ZTogZnVuY3Rpb24oc2V0KSB7XHJcbiAgICAvLyBzdG9yZSByZWZlcmVuY2UgdG8gc2V0XHJcbiAgICB0aGlzLnNldCA9IHNldFxyXG4gIH1cclxuXHJcbn0pXHJcblxyXG4vLyBBbGlhcyBtZXRob2RzXHJcblNWRy5TZXQuaW5oZXJpdCA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBtXHJcbiAgICAsIG1ldGhvZHMgPSBbXVxyXG5cclxuICAvLyBnYXRoZXIgc2hhcGUgbWV0aG9kc1xyXG4gIGZvcih2YXIgbSBpbiBTVkcuU2hhcGUucHJvdG90eXBlKVxyXG4gICAgaWYgKHR5cGVvZiBTVkcuU2hhcGUucHJvdG90eXBlW21dID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFNWRy5TZXQucHJvdG90eXBlW21dICE9ICdmdW5jdGlvbicpXHJcbiAgICAgIG1ldGhvZHMucHVzaChtKVxyXG5cclxuICAvLyBhcHBseSBzaGFwZSBhbGlhc3Nlc1xyXG4gIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcclxuICAgIFNWRy5TZXQucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGlsID0gdGhpcy5tZW1iZXJzLmxlbmd0aDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgaWYgKHRoaXMubWVtYmVyc1tpXSAmJiB0eXBlb2YgdGhpcy5tZW1iZXJzW2ldW21ldGhvZF0gPT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgIHRoaXMubWVtYmVyc1tpXVttZXRob2RdLmFwcGx5KHRoaXMubWVtYmVyc1tpXSwgYXJndW1lbnRzKVxyXG5cclxuICAgICAgcmV0dXJuIG1ldGhvZCA9PSAnYW5pbWF0ZScgPyAodGhpcy5meCB8fCAodGhpcy5meCA9IG5ldyBTVkcuRlguU2V0KHRoaXMpKSkgOiB0aGlzXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLy8gY2xlYXIgbWV0aG9kcyBmb3IgdGhlIG5leHQgcm91bmRcclxuICBtZXRob2RzID0gW11cclxuXHJcbiAgLy8gZ2F0aGVyIGZ4IG1ldGhvZHNcclxuICBmb3IodmFyIG0gaW4gU1ZHLkZYLnByb3RvdHlwZSlcclxuICAgIGlmICh0eXBlb2YgU1ZHLkZYLnByb3RvdHlwZVttXSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTVkcuRlguU2V0LnByb3RvdHlwZVttXSAhPSAnZnVuY3Rpb24nKVxyXG4gICAgICBtZXRob2RzLnB1c2gobSlcclxuXHJcbiAgLy8gYXBwbHkgZnggYWxpYXNzZXNcclxuICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XHJcbiAgICBTVkcuRlguU2V0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IHRoaXMuc2V0Lm1lbWJlcnMubGVuZ3RoOyBpIDwgaWw7IGkrKylcclxuICAgICAgICB0aGlzLnNldC5tZW1iZXJzW2ldLmZ4W21ldGhvZF0uYXBwbHkodGhpcy5zZXQubWVtYmVyc1tpXS5meCwgYXJndW1lbnRzKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxuXHJcblNWRy5leHRlbmQoU1ZHLkVsZW1lbnQsIHtcclxuICAvLyBTdG9yZSBkYXRhIHZhbHVlcyBvbiBzdmcgbm9kZXNcclxuICBkYXRhOiBmdW5jdGlvbihhLCB2LCByKSB7XHJcbiAgICBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcpIHtcclxuICAgICAgZm9yICh2IGluIGEpXHJcbiAgICAgICAgdGhpcy5kYXRhKHYsIGFbdl0pXHJcblxyXG4gICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuYXR0cignZGF0YS0nICsgYSkpXHJcbiAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF0dHIoJ2RhdGEtJyArIGEpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmF0dHIoXHJcbiAgICAgICAgJ2RhdGEtJyArIGFcclxuICAgICAgLCB2ID09PSBudWxsID9cclxuICAgICAgICAgIG51bGwgOlxyXG4gICAgICAgIHIgPT09IHRydWUgfHwgdHlwZW9mIHYgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2ID09PSAnbnVtYmVyJyA/XHJcbiAgICAgICAgICB2IDpcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHYpXHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxufSlcblNWRy5leHRlbmQoU1ZHLkVsZW1lbnQsIHtcclxuICAvLyBSZW1lbWJlciBhcmJpdHJhcnkgZGF0YVxyXG4gIHJlbWVtYmVyOiBmdW5jdGlvbihrLCB2KSB7XHJcbiAgICAvLyByZW1lbWJlciBldmVyeSBpdGVtIGluIGFuIG9iamVjdCBpbmRpdmlkdWFsbHlcclxuICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09ICdvYmplY3QnKVxyXG4gICAgICBmb3IgKHZhciB2IGluIGspXHJcbiAgICAgICAgdGhpcy5yZW1lbWJlcih2LCBrW3ZdKVxyXG5cclxuICAgIC8vIHJldHJpZXZlIG1lbW9yeVxyXG4gICAgZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG4gICAgICByZXR1cm4gdGhpcy5tZW1vcnkoKVtrXVxyXG5cclxuICAgIC8vIHN0b3JlIG1lbW9yeVxyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLm1lbW9yeSgpW2tdID0gdlxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG5cclxuICAvLyBFcmFzZSBhIGdpdmVuIG1lbW9yeVxyXG4sIGZvcmdldDogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG4gICAgICB0aGlzLl9tZW1vcnkgPSB7fVxyXG4gICAgZWxzZVxyXG4gICAgICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLm1lbW9yeSgpW2FyZ3VtZW50c1tpXV1cclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuXHJcbiAgLy8gSW5pdGlhbGl6ZSBvciByZXR1cm4gbG9jYWwgbWVtb3J5IG9iamVjdFxyXG4sIG1lbW9yeTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWVtb3J5IHx8ICh0aGlzLl9tZW1vcnkgPSB7fSlcclxuICB9XHJcblxyXG59KVxuLy8gTWV0aG9kIGZvciBnZXR0aW5nIGFuIGVsZW1lbnQgYnkgaWRcclxuU1ZHLmdldCA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgdmFyIG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZEZyb21SZWZlcmVuY2UoaWQpIHx8IGlkKVxyXG4gIHJldHVybiBTVkcuYWRvcHQobm9kZSlcclxufVxyXG5cclxuLy8gU2VsZWN0IGVsZW1lbnRzIGJ5IHF1ZXJ5IHN0cmluZ1xyXG5TVkcuc2VsZWN0ID0gZnVuY3Rpb24ocXVlcnksIHBhcmVudCkge1xyXG4gIHJldHVybiBuZXcgU1ZHLlNldChcclxuICAgIFNWRy51dGlscy5tYXAoKHBhcmVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChxdWVyeSksIGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgICAgcmV0dXJuIFNWRy5hZG9wdChub2RlKVxyXG4gICAgfSlcclxuICApXHJcbn1cclxuXHJcblNWRy5leHRlbmQoU1ZHLlBhcmVudCwge1xyXG4gIC8vIFNjb3BlZCBzZWxlY3QgbWV0aG9kXHJcbiAgc2VsZWN0OiBmdW5jdGlvbihxdWVyeSkge1xyXG4gICAgcmV0dXJuIFNWRy5zZWxlY3QocXVlcnksIHRoaXMubm9kZSlcclxuICB9XHJcblxyXG59KVxuZnVuY3Rpb24gcGF0aFJlZ1JlcGxhY2UoYSwgYiwgYywgZCkge1xyXG4gIHJldHVybiBjICsgZC5yZXBsYWNlKFNWRy5yZWdleC5kb3RzLCAnIC4nKVxyXG59XHJcblxyXG4vLyBjcmVhdGVzIGRlZXAgY2xvbmUgb2YgYXJyYXlcclxuZnVuY3Rpb24gYXJyYXlfY2xvbmUoYXJyKXtcclxuICB2YXIgY2xvbmUgPSBhcnIuc2xpY2UoMClcclxuICBmb3IodmFyIGkgPSBjbG9uZS5sZW5ndGg7IGktLTspe1xyXG4gICAgaWYoQXJyYXkuaXNBcnJheShjbG9uZVtpXSkpe1xyXG4gICAgICBjbG9uZVtpXSA9IGFycmF5X2Nsb25lKGNsb25lW2ldKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gY2xvbmVcclxufVxyXG5cclxuLy8gdGVzdHMgaWYgYSBnaXZlbiBlbGVtZW50IGlzIGluc3RhbmNlIG9mIGFuIG9iamVjdFxyXG5mdW5jdGlvbiBpcyhlbCwgb2JqKXtcclxuICByZXR1cm4gZWwgaW5zdGFuY2VvZiBvYmpcclxufVxyXG5cclxuLy8gdGVzdHMgaWYgYSBnaXZlbiBzZWxlY3RvciBtYXRjaGVzIGFuIGVsZW1lbnRcclxuZnVuY3Rpb24gbWF0Y2hlcyhlbCwgc2VsZWN0b3IpIHtcclxuICByZXR1cm4gKGVsLm1hdGNoZXMgfHwgZWwubWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm1vek1hdGNoZXNTZWxlY3RvciB8fCBlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZWwub01hdGNoZXNTZWxlY3RvcikuY2FsbChlbCwgc2VsZWN0b3IpO1xyXG59XHJcblxyXG4vLyBDb252ZXJ0IGRhc2gtc2VwYXJhdGVkLXN0cmluZyB0byBjYW1lbENhc2VcclxuZnVuY3Rpb24gY2FtZWxDYXNlKHMpIHtcclxuICByZXR1cm4gcy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0oLikvZywgZnVuY3Rpb24obSwgZykge1xyXG4gICAgcmV0dXJuIGcudG9VcHBlckNhc2UoKVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIENhcGl0YWxpemUgZmlyc3QgbGV0dGVyIG9mIGEgc3RyaW5nXHJcbmZ1bmN0aW9uIGNhcGl0YWxpemUocykge1xyXG4gIHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKVxyXG59XHJcblxyXG4vLyBFbnN1cmUgdG8gc2l4LWJhc2VkIGhleFxyXG5mdW5jdGlvbiBmdWxsSGV4KGhleCkge1xyXG4gIHJldHVybiBoZXgubGVuZ3RoID09IDQgP1xyXG4gICAgWyAnIycsXHJcbiAgICAgIGhleC5zdWJzdHJpbmcoMSwgMiksIGhleC5zdWJzdHJpbmcoMSwgMilcclxuICAgICwgaGV4LnN1YnN0cmluZygyLCAzKSwgaGV4LnN1YnN0cmluZygyLCAzKVxyXG4gICAgLCBoZXguc3Vic3RyaW5nKDMsIDQpLCBoZXguc3Vic3RyaW5nKDMsIDQpXHJcbiAgICBdLmpvaW4oJycpIDogaGV4XHJcbn1cclxuXHJcbi8vIENvbXBvbmVudCB0byBoZXggdmFsdWVcclxuZnVuY3Rpb24gY29tcFRvSGV4KGNvbXApIHtcclxuICB2YXIgaGV4ID0gY29tcC50b1N0cmluZygxNilcclxuICByZXR1cm4gaGV4Lmxlbmd0aCA9PSAxID8gJzAnICsgaGV4IDogaGV4XHJcbn1cclxuXHJcbi8vIENhbGN1bGF0ZSBwcm9wb3J0aW9uYWwgd2lkdGggYW5kIGhlaWdodCB2YWx1ZXMgd2hlbiBuZWNlc3NhcnlcclxuZnVuY3Rpb24gcHJvcG9ydGlvbmFsU2l6ZShlbGVtZW50LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgaWYgKHdpZHRoID09IG51bGwgfHwgaGVpZ2h0ID09IG51bGwpIHtcclxuICAgIHZhciBib3ggPSBlbGVtZW50LmJib3goKVxyXG5cclxuICAgIGlmICh3aWR0aCA9PSBudWxsKVxyXG4gICAgICB3aWR0aCA9IGJveC53aWR0aCAvIGJveC5oZWlnaHQgKiBoZWlnaHRcclxuICAgIGVsc2UgaWYgKGhlaWdodCA9PSBudWxsKVxyXG4gICAgICBoZWlnaHQgPSBib3guaGVpZ2h0IC8gYm94LndpZHRoICogd2lkdGhcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB3aWR0aDogIHdpZHRoXHJcbiAgLCBoZWlnaHQ6IGhlaWdodFxyXG4gIH1cclxufVxyXG5cclxuLy8gRGVsdGEgdHJhbnNmb3JtIHBvaW50XHJcbmZ1bmN0aW9uIGRlbHRhVHJhbnNmb3JtUG9pbnQobWF0cml4LCB4LCB5KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHg6IHggKiBtYXRyaXguYSArIHkgKiBtYXRyaXguYyArIDBcclxuICAsIHk6IHggKiBtYXRyaXguYiArIHkgKiBtYXRyaXguZCArIDBcclxuICB9XHJcbn1cclxuXHJcbi8vIE1hcCBtYXRyaXggYXJyYXkgdG8gb2JqZWN0XHJcbmZ1bmN0aW9uIGFycmF5VG9NYXRyaXgoYSkge1xyXG4gIHJldHVybiB7IGE6IGFbMF0sIGI6IGFbMV0sIGM6IGFbMl0sIGQ6IGFbM10sIGU6IGFbNF0sIGY6IGFbNV0gfVxyXG59XHJcblxyXG4vLyBQYXJzZSBtYXRyaXggaWYgcmVxdWlyZWRcclxuZnVuY3Rpb24gcGFyc2VNYXRyaXgobWF0cml4KSB7XHJcbiAgaWYgKCEobWF0cml4IGluc3RhbmNlb2YgU1ZHLk1hdHJpeCkpXHJcbiAgICBtYXRyaXggPSBuZXcgU1ZHLk1hdHJpeChtYXRyaXgpXHJcblxyXG4gIHJldHVybiBtYXRyaXhcclxufVxyXG5cclxuLy8gQWRkIGNlbnRyZSBwb2ludCB0byB0cmFuc2Zvcm0gb2JqZWN0XHJcbmZ1bmN0aW9uIGVuc3VyZUNlbnRyZShvLCB0YXJnZXQpIHtcclxuICBvLmN4ID0gby5jeCA9PSBudWxsID8gdGFyZ2V0LmJib3goKS5jeCA6IG8uY3hcclxuICBvLmN5ID0gby5jeSA9PSBudWxsID8gdGFyZ2V0LmJib3goKS5jeSA6IG8uY3lcclxufVxyXG5cclxuLy8gUGF0aEFycmF5IEhlbHBlcnNcclxuZnVuY3Rpb24gYXJyYXlUb1N0cmluZyhhKSB7XHJcbiAgZm9yICh2YXIgaSA9IDAsIGlsID0gYS5sZW5ndGgsIHMgPSAnJzsgaSA8IGlsOyBpKyspIHtcclxuICAgIHMgKz0gYVtpXVswXVxyXG5cclxuICAgIGlmIChhW2ldWzFdICE9IG51bGwpIHtcclxuICAgICAgcyArPSBhW2ldWzFdXHJcblxyXG4gICAgICBpZiAoYVtpXVsyXSAhPSBudWxsKSB7XHJcbiAgICAgICAgcyArPSAnICdcclxuICAgICAgICBzICs9IGFbaV1bMl1cclxuXHJcbiAgICAgICAgaWYgKGFbaV1bM10gIT0gbnVsbCkge1xyXG4gICAgICAgICAgcyArPSAnICdcclxuICAgICAgICAgIHMgKz0gYVtpXVszXVxyXG4gICAgICAgICAgcyArPSAnICdcclxuICAgICAgICAgIHMgKz0gYVtpXVs0XVxyXG5cclxuICAgICAgICAgIGlmIChhW2ldWzVdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcyArPSAnICdcclxuICAgICAgICAgICAgcyArPSBhW2ldWzVdXHJcbiAgICAgICAgICAgIHMgKz0gJyAnXHJcbiAgICAgICAgICAgIHMgKz0gYVtpXVs2XVxyXG5cclxuICAgICAgICAgICAgaWYgKGFbaV1bN10gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIHMgKz0gJyAnXHJcbiAgICAgICAgICAgICAgcyArPSBhW2ldWzddXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzICsgJyAnXHJcbn1cclxuXHJcbi8vIERlZXAgbmV3IGlkIGFzc2lnbm1lbnRcclxuZnVuY3Rpb24gYXNzaWduTmV3SWQobm9kZSkge1xyXG4gIC8vIGRvIHRoZSBzYW1lIGZvciBTVkcgY2hpbGQgbm9kZXMgYXMgd2VsbFxyXG4gIGZvciAodmFyIGkgPSBub2RlLmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcbiAgICBpZiAobm9kZS5jaGlsZE5vZGVzW2ldIGluc3RhbmNlb2Ygd2luZG93LlNWR0VsZW1lbnQpXHJcbiAgICAgIGFzc2lnbk5ld0lkKG5vZGUuY2hpbGROb2Rlc1tpXSlcclxuXHJcbiAgcmV0dXJuIFNWRy5hZG9wdChub2RlKS5pZChTVkcuZWlkKG5vZGUubm9kZU5hbWUpKVxyXG59XHJcblxyXG4vLyBBZGQgbW9yZSBib3VuZGluZyBib3ggcHJvcGVydGllc1xyXG5mdW5jdGlvbiBmdWxsQm94KGIpIHtcclxuICBpZiAoYi54ID09IG51bGwpIHtcclxuICAgIGIueCAgICAgID0gMFxyXG4gICAgYi55ICAgICAgPSAwXHJcbiAgICBiLndpZHRoICA9IDBcclxuICAgIGIuaGVpZ2h0ID0gMFxyXG4gIH1cclxuXHJcbiAgYi53ICA9IGIud2lkdGhcclxuICBiLmggID0gYi5oZWlnaHRcclxuICBiLngyID0gYi54ICsgYi53aWR0aFxyXG4gIGIueTIgPSBiLnkgKyBiLmhlaWdodFxyXG4gIGIuY3ggPSBiLnggKyBiLndpZHRoIC8gMlxyXG4gIGIuY3kgPSBiLnkgKyBiLmhlaWdodCAvIDJcclxuXHJcbiAgcmV0dXJuIGJcclxufVxyXG5cclxuLy8gR2V0IGlkIGZyb20gcmVmZXJlbmNlIHN0cmluZ1xyXG5mdW5jdGlvbiBpZEZyb21SZWZlcmVuY2UodXJsKSB7XHJcbiAgdmFyIG0gPSAodXJsIHx8ICcnKS50b1N0cmluZygpLm1hdGNoKFNWRy5yZWdleC5yZWZlcmVuY2UpXHJcblxyXG4gIGlmIChtKSByZXR1cm4gbVsxXVxyXG59XHJcblxyXG4vLyBJZiB2YWx1ZXMgbGlrZSAxZS04OCBhcmUgcGFzc2VkLCB0aGlzIGlzIG5vdCBhIHZhbGlkIDMyIGJpdCBmbG9hdCxcclxuLy8gYnV0IGluIHRob3NlIGNhc2VzLCB3ZSBhcmUgc28gY2xvc2UgdG8gMCB0aGF0IDAgd29ya3Mgd2VsbCFcclxuZnVuY3Rpb24gZmxvYXQzMlN0cmluZyh2KSB7XHJcbiAgcmV0dXJuIE1hdGguYWJzKHYpID4gMWUtMzcgPyB2IDogMFxyXG59XHJcblxyXG4vLyBDcmVhdGUgbWF0cml4IGFycmF5IGZvciBsb29waW5nXHJcbnZhciBhYmNkZWYgPSAnYWJjZGVmJy5zcGxpdCgnJylcclxuXG4vLyBBZGQgQ3VzdG9tRXZlbnQgdG8gSUU5IGFuZCBJRTEwXHJcbmlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgLy8gQ29kZSBmcm9tOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ3VzdG9tRXZlbnRcclxuICB2YXIgQ3VzdG9tRXZlbnRQb2x5ID0gZnVuY3Rpb24oZXZlbnQsIG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHsgYnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IHVuZGVmaW5lZCB9XHJcbiAgICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXHJcbiAgICBlLmluaXRDdXN0b21FdmVudChldmVudCwgb3B0aW9ucy5idWJibGVzLCBvcHRpb25zLmNhbmNlbGFibGUsIG9wdGlvbnMuZGV0YWlsKVxyXG4gICAgcmV0dXJuIGVcclxuICB9XHJcblxyXG4gIEN1c3RvbUV2ZW50UG9seS5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlXHJcblxyXG4gIFNWRy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50UG9seVxyXG59IGVsc2Uge1xyXG4gIFNWRy5DdXN0b21FdmVudCA9IHdpbmRvdy5DdXN0b21FdmVudFxyXG59XHJcblxyXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgLyBjYW5jZWxBbmltYXRpb25GcmFtZSBQb2x5ZmlsbCB3aXRoIGZhbGxiYWNrIGJhc2VkIG9uIFBhdWwgSXJpc2hcclxuKGZ1bmN0aW9uKHcpIHtcclxuICB2YXIgbGFzdFRpbWUgPSAwXHJcbiAgdmFyIHZlbmRvcnMgPSBbJ21veicsICd3ZWJraXQnXVxyXG5cclxuICBmb3IodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xyXG4gICAgdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3W3ZlbmRvcnNbeF0gKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ11cclxuICAgIHcuY2FuY2VsQW5pbWF0aW9uRnJhbWUgID0gd1t2ZW5kb3JzW3hdICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd1t2ZW5kb3JzW3hdICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddXHJcbiAgfVxyXG5cclxuICB3LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHcucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKVxyXG5cclxuICAgICAgdmFyIGlkID0gdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbClcclxuICAgICAgfSwgdGltZVRvQ2FsbClcclxuXHJcbiAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsXHJcbiAgICAgIHJldHVybiBpZFxyXG4gICAgfVxyXG5cclxuICB3LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3LmNsZWFyVGltZW91dDtcclxuXHJcbn0od2luZG93KSlcclxuXHJcbnJldHVybiBTVkdcclxuXHJcbn0pKTtcciIsIi8vIEB0cy1pZ25vcmVcbmltcG9ydCAqIGFzIFNWRyBmcm9tICdzdmcuanMnO1xuaW1wb3J0IFJldGlsaW5lYXIgZnJvbSAnLi9yZXRpbGluZWFyJztcblxubGV0IGF1ZGlvQ29udGV4dDogQXVkaW9Db250ZXh0O1xuY29uc3QgZHJhd1cgPSAyOTc7XG5jb25zdCBkcmF3SCA9IDQ1MDtcbmxldCBjYW52YXMgPSBTVkcoJ2NvbnRhaW5lcicpLnNpemUoJzEwMCUnLCAnMTAwJScpLnZpZXdib3goMCwgMCwgZHJhd1csIGRyYXdIKTtcblxuY29uc3QgcmV0aWxpbmVhcmVzID0gbmV3IE1hcDxzdHJpbmcsIFJldGlsaW5lYXI+KCk7XG5cbnR5cGUgUG9pbnQgPSBbbnVtYmVyLCBudW1iZXJdO1xuXG5jb25zdCByZWN0TWluID0gKHI6IFNWRy5SZWN0KTogUG9pbnQgPT4ge1xuICAgIGNvbnN0IHBvczogUG9pbnQgPSBbci54KCksIHIueSgpXTtcbiAgICBjb25zdCBzaXplOiBQb2ludCA9IFtyLndpZHRoKCksIHIuaGVpZ2h0KCldO1xuICAgIGNvbnN0IHBvaW50czogQXJyYXk8UG9pbnQ+ID0gW1xuICAgICAgICBwb3MsXG4gICAgICAgIFtwb3NbMF0gKyBzaXplWzBdLCBwb3NbMV1dLFxuICAgICAgICBbcG9zWzBdICsgc2l6ZVswXSwgcG9zWzFdICsgc2l6ZVsxXV0sXG4gICAgICAgIFtwb3NbMF0sIHBvc1sxXSArIHNpemVbMV1dXG4gICAgXTtcbiAgICBjb25zdCBjb29yZHM6IFtudW1iZXJbXSwgbnVtYmVyW11dID0gW3BvaW50cy5tYXAocCA9PiBwWzBdKSwgcG9pbnRzLm1hcChwID0+IHBbMV0pXTtcbiAgICByZXR1cm4gW01hdGgubWluKC4uLmNvb3Jkc1swXSksIE1hdGgubWluKC4uLmNvb3Jkc1sxXSldO1xufTtcblxuY29uc3QgcGF0aE1pbiA9IChwOiBTVkcuUGF0aCk6IFBvaW50ID0+IHtcbiAgICBjb25zdCBpZCA9IHAuaWQoKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgY29sb3IgPSBuZXcgU1ZHLkNvbG9yKHAuc3R5bGUoJ2ZpbGwnKSk7XG4gICAgY29uc3QgcG9zOiBQb2ludCA9IFtwLngoKSwgcC55KCldO1xuXG4gICAgY29uc3QgcG9pbnRzOiBBcnJheTxQb2ludD4gPSBbXTtcbiAgICBsZXQgY3VyciA9IHBvcztcbiAgICBsZXQgcHJldiA9IHBvcztcbiAgICBmb3IgKGNvbnN0IG9wIG9mIHAuYXJyYXkoKS52YWx1ZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhvcCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKG9wWzBdID09PSAnTScpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IFtfLCB4LCB5XTogW3N0cmluZywgbnVtYmVyLCBudW1iZXJdID0gb3A7XG4gICAgICAgICAgICBwcmV2ID0gY3VycjtcbiAgICAgICAgICAgIGN1cnIgPSBbeCwgeV07XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgfSBlbHNlIGlmIChvcFswXSA9PT0gJ0wnKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBbXywgeCwgeV06IFtzdHJpbmcsIG51bWJlciwgbnVtYmVyXSA9IG9wO1xuICAgICAgICAgICAgcHJldiA9IGN1cnI7XG4gICAgICAgICAgICBjdXJyID0gW3gsIHldO1xuICAgICAgICAgICAgaWYgKHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV0gIT09IHByZXYpIHtcbiAgICAgICAgICAgICAgICBwb2ludHMucHVzaChwcmV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50cy5wdXNoKGN1cnIpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIH0gZWxzZSBpZiAob3BbMF0gPT09ICdDJykge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgW28sIGF4LCBheSwgYngsIGJ5LCB4LCB5XTogW3N0cmluZywgbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gPSBvcDtcbiAgICAgICAgICAgIHByZXYgPSBjdXJyO1xuICAgICAgICAgICAgY3VyciA9IFt4LCB5XTtcbiAgICAgICAgICAgIGlmIChwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdICE9PSBwcmV2KSB7XG4gICAgICAgICAgICAgICAgcG9pbnRzLnB1c2gocHJldik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludHMucHVzaChjdXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjb29yZHM6IFtudW1iZXJbXSwgbnVtYmVyW11dID0gW3BvaW50cy5tYXAocCA9PiBwWzBdKSwgcG9pbnRzLm1hcChwID0+IHBbMV0pXTtcbiAgICByZXR1cm4gW01hdGgubWluKC4uLmNvb3Jkc1swXSksIE1hdGgubWluKC4uLmNvb3Jkc1sxXSldO1xufTtcblxuY29uc3QgbWluUG9pbnQgPSAoW2F4LCBheV06IFBvaW50LCBbYngsIGJ5XTogUG9pbnQpOiBQb2ludCA9PiB7XG4gICAgcmV0dXJuIFtNYXRoLm1pbihheCwgYngpLCBNYXRoLm1pbihheSwgYnkpXTtcbn07XG5cbmNvbnN0IGRpc3QgPSAoW2F4LCBheV06IFBvaW50LCBbYngsIGJ5XTogUG9pbnQpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coYXggLSBieCwgMikgKyBNYXRoLnBvdyhheSArIGJ5LCAyKSk7XG59O1xuXG5jb25zdCBwYXJzZVJlY3QgPSAocjogU1ZHLlJlY3QpOiBbc3RyaW5nLCBBcnJheTxQb2ludD4sIFNWRy5Db2xvcl0gPT4ge1xuICAgIGNvbnN0IGlkID0gci5pZCgpO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBjb2xvciA9IG5ldyBTVkcuQ29sb3Ioci5zdHlsZSgnZmlsbCcpKTtcbiAgICBjb25zdCBwb3M6IFBvaW50ID0gW3IueCgpLCByLnkoKV07XG4gICAgY29uc3Qgc2l6ZTogUG9pbnQgPSBbci53aWR0aCgpLCByLmhlaWdodCgpXTtcbiAgICBjb25zdCBwb2ludHM6IEFycmF5PFBvaW50PiA9IFtcbiAgICAgICAgcG9zLFxuICAgICAgICBbcG9zWzBdICsgc2l6ZVswXSwgcG9zWzFdXSxcbiAgICAgICAgW3Bvc1swXSArIHNpemVbMF0sIHBvc1sxXSArIHNpemVbMV1dLFxuICAgICAgICBbcG9zWzBdLCBwb3NbMV0gKyBzaXplWzFdXVxuICAgIF07XG4gICAgcmV0dXJuIFtpZCwgcG9pbnRzLCBjb2xvcl07XG59O1xuXG5jb25zdCBwYXJzZVBhdGggPSAocDogU1ZHLlBhdGgpOiBbc3RyaW5nLCBBcnJheTxQb2ludD4sIFNWRy5Db2xvcl0gPT4ge1xuICAgIGNvbnN0IGlkID0gcC5pZCgpO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBjb2xvciA9IG5ldyBTVkcuQ29sb3IocC5zdHlsZSgnZmlsbCcpKTtcbiAgICBjb25zdCBwb3M6IFBvaW50ID0gW3AueCgpLCBwLnkoKV07XG5cbiAgICBjb25zdCBwb2ludHM6IEFycmF5PFBvaW50PiA9IFtdO1xuICAgIGxldCBjdXJyID0gcG9zO1xuICAgIGxldCBwcmV2ID0gcG9zO1xuICAgIGZvciAoY29uc3Qgb3Agb2YgcC5hcnJheSgpLnZhbHVlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG9wKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAob3BbMF0gPT09ICdNJykge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgW18sIHgsIHldOiBbc3RyaW5nLCBudW1iZXIsIG51bWJlcl0gPSBvcDtcbiAgICAgICAgICAgIHByZXYgPSBjdXJyO1xuICAgICAgICAgICAgY3VyciA9IFt4LCB5XTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB9IGVsc2UgaWYgKG9wWzBdID09PSAnTCcpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IFtfLCB4LCB5XTogW3N0cmluZywgbnVtYmVyLCBudW1iZXJdID0gb3A7XG4gICAgICAgICAgICBwcmV2ID0gY3VycjtcbiAgICAgICAgICAgIGN1cnIgPSBbeCwgeV07XG4gICAgICAgICAgICBpZiAoZGlzdChjdXJyLCBwcmV2KSA+IDEpIHtcbiAgICAgICAgICAgICAgICBwb2ludHMucHVzaChwcmV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50cy5wdXNoKGN1cnIpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIH0gZWxzZSBpZiAob3BbMF0gPT09ICdDJykge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgW28sIGF4LCBheSwgYngsIGJ5LCB4LCB5XTogW3N0cmluZywgbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gPSBvcDtcbiAgICAgICAgICAgIHByZXYgPSBjdXJyO1xuICAgICAgICAgICAgY3VyciA9IFt4LCB5XTtcbiAgICAgICAgICAgIGlmIChkaXN0KGN1cnIsIHByZXYpID4gMSkge1xuICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKHByZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9pbnRzLnB1c2goY3Vycik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtpZCwgcG9pbnRzLCBjb2xvcl07XG59O1xuXG4vLyBzdmcgc3R1ZmZcbmNvbnN0IGxvYWRTVkcgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdXJpID0gJy9maXguc3ZnJztcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2godXJpKTtcbiAgICBjb25zdCBzdmdEYXRhID0gYXdhaXQgcmVzcC50ZXh0KCk7XG5cbiAgICBjb25zdCBkcmF3ID0gU1ZHKCdjb250YWluZXInKS5zaXplKCcxMDAlJywgJzEwMCUnKS52aWV3Ym94KDAsIDAsIGRyYXdXLCBkcmF3SCk7XG5cbiAgICBkcmF3LnN2ZyhzdmdEYXRhKTtcblxuICAgIGxldCBvZmZzZXQ6IFBvaW50ID0gWzAsIDBdO1xuICAgIGRyYXcuc2VsZWN0KCdwYXRoJykuZWFjaChmdW5jdGlvbihpOiBudW1iZXIsIG1lbWJlcnM6IFNWRy5FbGVtZW50W10pIHtcbiAgICAgICAgY29uc3QgcE9mZiA9IHBhdGhNaW4odGhpcyk7XG4gICAgICAgIG9mZnNldCA9IG1pblBvaW50KG9mZnNldCwgcE9mZik7XG4gICAgfSk7XG4gICAgZHJhdy5zZWxlY3QoJ3JlY3QnKS5lYWNoKGZ1bmN0aW9uKGk6IG51bWJlciwgbWVtYmVyczogU1ZHLkVsZW1lbnRbXSkge1xuICAgICAgICBjb25zdCByT2ZmID0gcmVjdE1pbih0aGlzKTtcbiAgICAgICAgb2Zmc2V0ID0gbWluUG9pbnQob2Zmc2V0LCByT2ZmKTtcbiAgICB9KTtcbiAgICBvZmZzZXQgPSBbb2Zmc2V0WzBdIC0gNSwgb2Zmc2V0WzFdIC0gNV07XG5cbiAgICBkcmF3LnNlbGVjdCgncGF0aCcpLmVhY2goZnVuY3Rpb24oaTogbnVtYmVyLCBtZW1iZXJzOiBTVkcuRWxlbWVudFtdKSB7XG4gICAgICAgIGNvbnN0IHBhdGg6IFNWRy5QYXRoID0gdGhpcztcbiAgICAgICAgY29uc3QgW2lkLCBwb2ludHMsIGNvbG9yXSA9IHBhcnNlUGF0aChwYXRoKTtcbiAgICAgICAgY29uc3QgYWJzUG9pbnRzOiBQb2ludFtdID0gcG9pbnRzLm1hcCgoW3B4LCBweV0pOiBQb2ludCA9PiBbcHggLSBvZmZzZXRbMF0sIHB5IC0gb2Zmc2V0WzFdXSk7XG4gICAgICAgIGNvbnN0IHJldCA9IG5ldyBSZXRpbGluZWFyKGF1ZGlvQ29udGV4dCwgY2FudmFzLCBjb2xvciwgYWJzUG9pbnRzKTtcbiAgICAgICAgcmV0aWxpbmVhcmVzLnNldChpZCwgcmV0KTtcbiAgICB9KTtcbiAgICBkcmF3LnNlbGVjdCgncmVjdCcpLmVhY2goZnVuY3Rpb24oaTogbnVtYmVyLCBtZW1iZXJzOiBTVkcuRWxlbWVudFtdKSB7XG4gICAgICAgIGNvbnN0IHJlY3Q6IFNWRy5SZWN0ID0gdGhpcztcbiAgICAgICAgY29uc3QgW2lkLCBwb2ludHMsIGNvbG9yXSA9IHBhcnNlUmVjdChyZWN0KTtcbiAgICAgICAgY29uc3QgYWJzUG9pbnRzOiBQb2ludFtdID0gcG9pbnRzLm1hcCgoW3B4LCBweV0pOiBQb2ludCA9PiBbcHggLSBvZmZzZXRbMF0sIHB5IC0gb2Zmc2V0WzFdXSk7XG4gICAgICAgIGNvbnN0IHJldCA9IG5ldyBSZXRpbGluZWFyKGF1ZGlvQ29udGV4dCwgY2FudmFzLCBjb2xvciwgYWJzUG9pbnRzKTtcbiAgICAgICAgcmV0aWxpbmVhcmVzLnNldChpZCwgcmV0KTtcbiAgICB9KTtcblxuICAgIGRyYXcucmVtb3ZlKCk7XG59O1xuXG5jb25zdCBwbGF5UmFuZCA9IChldjogTW91c2VFdmVudCkgPT4ge1xuICAgIHJldGlsaW5lYXJlcy5mb3JFYWNoKChyZXQpID0+IHtcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjIpIHtcbiAgICAgICAgICAgIHJldC5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHN0b3BBbGwgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcbiAgICByZXRpbGluZWFyZXMuZm9yRWFjaCgocmV0KSA9PiByZXQuc3RvcCgpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgaWYgKCFsb2FkZWQpIHtcbiAgICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCd3ZWJraXRBdWRpb0NvbnRleHQnIGluIHdpbmRvdykge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgYXVkaW9Db250ZXh0ID0gbmV3IHdlYmtpdEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRTVkcoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmQnKS5vbmNsaWNrID0gcGxheVJhbmQ7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9wJykub25jbGljayA9IHN0b3BBbGw7XG4gICAgfVxufTtcblxuY2FudmFzLmNsaWNrKGluaXQpOyIsIi8vIEB0cy1pZ25vcmVcbmltcG9ydCAqIGFzIFNWRyBmcm9tICdzdmcuanMnO1xuaW1wb3J0IHsgbW9kIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IEJsZWVwU3ludGggfSBmcm9tICcuL3N5bnRoJztcblxuY2xhc3MgUmV0aWxpbmVhciB7XG4gICAgaXNQbGF5aW5nOiBib29sZWFuO1xuICAgIG5vdGU6IG51bWJlcjtcblxuICAgIGF1ZGlvQ3R4OiBBdWRpb0NvbnRleHQ7XG4gICAgc3ludGg6IEJsZWVwU3ludGg7XG5cbiAgICBjYW52YXM6IFNWRy5Eb2M7XG4gICAgY29sb3I6IFNWRy5Db2xvcjtcblxuICAgIHBvaW50czogQXJyYXk8W251bWJlciwgbnVtYmVyXT47XG4gICAgcG9seTogU1ZHLlBvbHlnb247XG4gICAgY3Vyc29yOiBTVkcuU2hhcGU7XG5cbiAgICBjb25zdHJ1Y3RvcihhdWRpb0N0eDogQXVkaW9Db250ZXh0LCBjYW52YXM6IFNWRy5Eb2MsIGNvbG9yOiBTVkcuQ29sb3IsIHBvaW50czogQXJyYXk8W251bWJlciwgbnVtYmVyXT4pIHtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBiID0gY29sb3IuYnJpZ2h0bmVzcygpO1xuXG4gICAgICAgIC8vIGNvbnN0IHBpdGNoQmFzZSA9IDQ0MDtcbiAgICAgICAgY29uc3QgcGl0Y2hCYXNlID0gMzAwO1xuICAgICAgICB0aGlzLm5vdGUgPSBiICogcGl0Y2hCYXNlICsgNjA7XG5cbiAgICAgICAgLy8gY29uc3QgW2gsIHMsIGxdID0gcmdiMmhzbChjb2wpO1xuICAgICAgICAvLyBjb25zdCBtb2QgPSBoIC8gMTAwO1xuICAgICAgICB0aGlzLmF1ZGlvQ3R4ID0gYXVkaW9DdHg7XG4gICAgICAgIHRoaXMuc3ludGggPSBuZXcgQmxlZXBTeW50aCh0aGlzLm5vdGUsIHRoaXMuYXVkaW9DdHgpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnBvaW50cyA9IHBvaW50cztcblxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMucG9seSA9IHRoaXMuY2FudmFzLnBvbHlnb24odGhpcy5wb2ludHMpLmF0dHIoJ2ZpbGwnLCB0aGlzLmNvbG9yLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZWxmLmlzUGxheWluZyA/IHNlbGYuc3RvcCgpIDogc2VsZi5wbGF5KCk7XG4gICAgICAgIHRoaXMucG9seS5jbGljayh0b2dnbGUpO1xuICAgIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLnBvaW50c1swXTtcblxuICAgICAgICBjb25zdCBbY3csIGNoXSA9IFs1LCA1XTtcbiAgICAgICAgY29uc3QgW2t4LCBreV0gPSBbLWN3IC8gMiwgLWNoIC8gMl07XG4gICAgICAgIHRoaXMuY3Vyc29yID0gdGhpcy5jYW52YXMuZWxsaXBzZShjdywgY2gpXG4gICAgICAgICAgICAueCh4ICsga3gpLnkoeSArIGt5KVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCB0aGlzLmNvbG9yLnRvU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLmN1cnNvci5mcm9udCgpO1xuXG4gICAgICAgIGNvbnN0IGRlYyA9IChsOiBudW1iZXIpID0+IE1hdGguYWJzKGwpIC8gMjAwO1xuICAgICAgICAvLyBjb25zdCBkdXIgPSAobDogbnVtYmVyKSA9PiBsICogNjtcbiAgICAgICAgY29uc3QgZHVyID0gKGw6IG51bWJlcikgPT4gTWF0aC5hYnMobCkgKiAxODtcbiAgICAgICAgY29uc3Qgb2N0ID0gKGw6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWwgPSBNYXRoLmFicyhsKTtcbiAgICAgICAgICAgIGxldCBtdWwgPSAtMjtcbiAgICAgICAgICAgIGlmIChhbCA8IDI1KSB7XG4gICAgICAgICAgICAgICAgbXVsID0gMjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWwgPCA4MCkge1xuICAgICAgICAgICAgICAgIG11bCA9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFsIDwgMTYwKSB7XG4gICAgICAgICAgICAgICAgbXVsID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWwgPCAyNTApIHtcbiAgICAgICAgICAgICAgICBtdWwgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdygyLCBtdWwpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGNvbnN0IHBvaW50cyA9IHRoaXMucG9seS5hcnJheSgpO1xuICAgICAgICBjb25zdCBhbmltYXRlID0gKHN0ZXA6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJzb3IuZnJvbnQoKTtcblxuICAgICAgICAgICAgY29uc3QgbGVuID0gdGhpcy5wb2ludHMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgcCA9IG1vZChzdGVwIC0gMSwgbGVuKTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IFtweCwgcHldID0gdGhpcy5wb2ludHNbcF07XG5cbiAgICAgICAgICAgIGNvbnN0IG4gPSBtb2Qoc3RlcCwgbGVuKTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IFtueCwgbnldID0gdGhpcy5wb2ludHNbbl07XG4gICAgICAgICAgICBjb25zdCBbZHgsIGR5XSA9IFtueCAtIHB4LCBueSAtIHB5XTtcblxuICAgICAgICAgICAgLy8gc2tpcCB6ZXJvIHN0ZXBzXG4gICAgICAgICAgICBpZiAoZHggKyBkeSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoc3RlcCArIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zeW50aC5wbGF5KHRoaXMubm90ZSAqIG9jdChkeCArIGR5KSwgZGVjKGR4ICsgZHkpKTtcblxuICAgICAgICAgICAgY29uc3QgZmxhc2hDb2xvciA9ICcjZmZmJztcbiAgICAgICAgICAgIGNvbnN0IHNoYXBlQ29sb3IgPSB0aGlzLmNvbG9yLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRoaXMucG9seS5hdHRyKCdmaWxsJywgZmxhc2hDb2xvcik7XG4gICAgICAgICAgICBjb25zdCBwb2x5Rmxhc2ggPSB0aGlzLnBvbHkuYW5pbWF0ZShkdXIoZHggKyBkeSksICc+JylcbiAgICAgICAgICAgICAgICAuYXR0cih7IGZpbGw6IHNoYXBlQ29sb3IgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuY3Vyc29yLmF0dHIoJ2ZpbGwnLCBmbGFzaENvbG9yKTtcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yLmFuaW1hdGUoZHVyKGR4ICsgZHkpLCAnPicpXG4gICAgICAgICAgICAgICAgLm1vdmUobnggKyBreCwgbnkgKyBreSlcbiAgICAgICAgICAgICAgICAuYXR0cih7IGZpbGw6IHNoYXBlQ29sb3IgfSlcbiAgICAgICAgICAgICAgICAuYWZ0ZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwb2x5Rmxhc2guc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNQbGF5aW5nKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZShzdGVwICsgMSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGFuaW1hdGUoMSk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3Vyc29yKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnNvci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJldGlsaW5lYXI7IiwiY2xhc3MgQmxlZXBTeW50aCB7XG4gICAgYXVkaW9DdHg6IEF1ZGlvQ29udGV4dDtcbiAgICBmaWx0ZXI6IEJpcXVhZEZpbHRlck5vZGU7XG4gICAgZnJlcTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZnJlcTogbnVtYmVyLCBhdWRpb0N0eDogQXVkaW9Db250ZXh0KSB7XG4gICAgICAgIHRoaXMuZnJlcSA9IGZyZXE7XG4gICAgICAgIHRoaXMuYXVkaW9DdHggPSBhdWRpb0N0eDtcbiAgICB9XG5cbiAgICBwbGF5KGZyZXE6IG51bWJlciwgZGVjOiBudW1iZXIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3BsYXkhJywgZnJlcSwgZGVjKTtcblxuICAgICAgICBjb25zdCBvc2MgPSB0aGlzLmF1ZGlvQ3R4LmNyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICAgICAgb3NjLnR5cGUgPSBmcmVxIDwgMjUwID8gJ3Nhd3Rvb3RoJyA6IGZyZXEgPCA0NDAgPyAnc2luZScgOiAndHJpYW5nbGUnO1xuICAgICAgICBjb25zdCBhZHNyID0gdGhpcy5hdWRpb0N0eC5jcmVhdGVHYWluKCk7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuYXVkaW9DdHguY3JlYXRlQmlxdWFkRmlsdGVyKCk7XG5cbiAgICAgICAgb3NjLmNvbm5lY3QoYWRzcik7XG4gICAgICAgIGFkc3IuY29ubmVjdChmaWx0ZXIpO1xuICAgICAgICBmaWx0ZXIuY29ubmVjdCh0aGlzLmF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcblxuICAgICAgICAvLyBhZHNyXG4gICAgICAgIGNvbnN0IHQwID0gdGhpcy5hdWRpb0N0eC5jdXJyZW50VGltZTtcbiAgICAgICAgb3NjLnN0YXJ0KHQwKTtcbiAgICAgICAgLy8gdm9sOjBcbiAgICAgICAgYWRzci5nYWluLnNldFZhbHVlQXRUaW1lKDAsIHQwKTtcbiAgICAgICAgLy8gYXR0YWNrXG4gICAgICAgIGNvbnN0IHQxID0gdDAgKyAwLjAxO1xuICAgICAgICBhZHNyLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUoMC40LCB0MSk7XG4gICAgICAgIC8vIGRlY2F5XG4gICAgICAgIGNvbnN0IHQyID0gdDEgKyBkZWM7XG4gICAgICAgIGNvbnN0IHN1cyA9IDAuMDE7XG4gICAgICAgIGFkc3IuZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKHN1cywgdDIpO1xuICAgICAgICAvLyBnYXRlXG4gICAgICAgIGNvbnN0IHN0b3AgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoYWRzci5nYWluLnZhbHVlIDwgMC4wMSkge1xuICAgICAgICAgICAgICAgIG9zYy5zdG9wKCk7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzdG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICBvc2MuZnJlcXVlbmN5LnZhbHVlID0gZnJlcTtcbiAgICAgICAgZmlsdGVyLmZyZXF1ZW5jeS52YWx1ZSA9IGZyZXEgKiAyO1xuICAgICAgICB0aGlzLmZpbHRlciA9IGZpbHRlcjtcbiAgICAgICAgdGhpcy5mcmVxID0gZnJlcTtcbiAgICB9XG5cbiAgICBzZXRGaWx0ZXJQcm9wcyhtdWw6IG51bWJlciwgcTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyLlEudmFsdWUgPSBxO1xuICAgICAgICB0aGlzLmZpbHRlci5mcmVxdWVuY3kudmFsdWUgPSB0aGlzLmZyZXEgKiBtdWw7XG4gICAgfVxufVxuXG5leHBvcnQgeyBCbGVlcFN5bnRoIH07XG4iLCIvLyBAdHMtaWdub3JlXG5pbXBvcnQgKiBhcyBTVkcgZnJvbSAnc3ZnLmpzJztcblxudHlwZSBIU1ZDb2xvciA9IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbmNvbnN0IHJnYjJoc2wgPSAoY29sOiBTVkcuQ29sb3IpOiBIU1ZDb2xvciA9PiB7XG4gICAgLy8gTWFrZSByLCBnLCBhbmQgYiBmcmFjdGlvbnMgb2YgMVxuICAgIGNvbnN0IHIgPSBjb2wuciAvIDI1NTtcbiAgICBjb25zdCBnID0gY29sLmcgLyAyNTU7XG4gICAgY29uc3QgYiA9IGNvbC5iIC8gMjU1O1xuXG4gICAgLy8gRmluZCBncmVhdGVzdCBhbmQgc21hbGxlc3QgY2hhbm5lbCB2YWx1ZXNcbiAgICBsZXQgY21pbiA9IE1hdGgubWluKHIsIGcgLCBiKSxcbiAgICAgICAgY21heCA9IE1hdGgubWF4KHIsIGcsIGIpLFxuICAgICAgICBkZWx0YSA9IGNtYXggLSBjbWluLFxuICAgICAgICBoID0gMCxcbiAgICAgICAgcyA9IDAsXG4gICAgICAgIGwgPSAwO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGh1ZVxuICAgIC8vIE5vIGRpZmZlcmVuY2VcbiAgICBpZiAoZGVsdGEgPT09IDApXG4gICAgaCA9IDA7XG4gICAgLy8gUmVkIGlzIG1heFxuICAgIGVsc2UgaWYgKGNtYXggPT09IHIpXG4gICAgaCA9ICgoZyAtIGIpIC8gZGVsdGEpICUgNjtcbiAgICAvLyBHcmVlbiBpcyBtYXhcbiAgICBlbHNlIGlmIChjbWF4ID09PSBnKVxuICAgIGggPSAoYiAtIHIpIC8gZGVsdGEgKyAyO1xuICAgIC8vIEJsdWUgaXMgbWF4XG4gICAgZWxzZVxuICAgIGggPSAociAtIGcpIC8gZGVsdGEgKyA0O1xuXG4gICAgaCA9IE1hdGgucm91bmQoaCAqIDYwKTtcblxuICAgIC8vIE1ha2UgbmVnYXRpdmUgaHVlcyBwb3NpdGl2ZSBiZWhpbmQgMzYwwrBcbiAgICBpZiAoaCA8IDApXG4gICAgICAgIGggKz0gMzYwO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGxpZ2h0bmVzc1xuICAgIGwgPSAoY21heCArIGNtaW4pIC8gMjtcblxuICAgIC8vIENhbGN1bGF0ZSBzYXR1cmF0aW9uXG4gICAgcyA9IGRlbHRhID09PSAwID8gMCA6IGRlbHRhIC8gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKTtcblxuICAgIC8vIE11bHRpcGx5IGwgYW5kIHMgYnkgMTAwXG4gICAgcyA9ICsocyAqIDEwMCkudG9GaXhlZCgxKTtcbiAgICBsID0gKyhsICogMTAwKS50b0ZpeGVkKDEpO1xuXG4gICAgcmV0dXJuIFtoIC8gMjU1LCBzIC8gMjU1LCBsIC8gMjU1XTtcbn07XG5cbmNvbnN0IG1vZCA9IChtOiBudW1iZXIsIG46IG51bWJlcikgPT4gKChtICUgbikgKyBuKSAlIG47XG5cbmV4cG9ydCB7IHJnYjJoc2wsIG1vZCB9OyJdLCJzb3VyY2VSb290IjoiIn0=