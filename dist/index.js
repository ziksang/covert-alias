!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((r=r||self).cAlias={})}(this,function(r){"use strict";r.covertAliasPur=function(r,e){if(!Array.isArray(r))throw new TypeError("["+r+"] Only array conversion is supporteds");if(!Array.isArray(e))throw new TypeError("["+e+"] must be an array store");if(0===e.length)throw new TypeError("["+e+"]is not allowed to be an empty array");var n=e.reduce(function(r,e){if("string"!=typeof e)throw new TypeError(e+" must type of string");return r[e]=null,r},{});return r.map(function(r){var e=JSON.parse(JSON.stringify(n));for(var t in e)e[t]=r;return e})},Object.defineProperty(r,"__esModule",{value:!0})});
