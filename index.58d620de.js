// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"j2JkV":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "78e780b858d620de";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5mvL2":[function(require,module,exports) {
var _arcgisRestFeatureLayer = require("@esri/arcgis-rest-feature-layer");
var _uiJs = require("./ui.js");
// feature layer
const municipalFSUrl = 'https://services1.arcgis.com/1Cfo0re3un0w6a30/ArcGIS/rest/services/Municipal_Boundaries/FeatureServer/0';
// get features from service
_arcgisRestFeatureLayer.queryFeatures({
    url: municipalFSUrl,
    where: "1=1",
    f: "json",
    returnGeometry: false,
    orderByFields: 'MUNI'
}).then((response)=>{
    // populate rows in table
    _uiJs.buildTable(document.getElementById('records'), response.features);
}).catch((error)=>{
    console.log(`Error fetching service: ${error}`);
    _uiJs.generateErrorMsg(document.getElementById('error'), error);
});

},{"@esri/arcgis-rest-feature-layer":"8GahD","./ui.js":"2DR6j"}],"8GahD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ var _query = require("./query");
parcelHelpers.exportAll(_query, exports);
var _add = require("./add");
parcelHelpers.exportAll(_add, exports);
var _update = require("./update");
parcelHelpers.exportAll(_update, exports);
var _delete = require("./delete");
parcelHelpers.exportAll(_delete, exports);
var _applyEdits = require("./applyEdits");
parcelHelpers.exportAll(_applyEdits, exports);
var _getAllLayersAndTables = require("./getAllLayersAndTables");
parcelHelpers.exportAll(_getAllLayersAndTables, exports);
var _getAttachments = require("./getAttachments");
parcelHelpers.exportAll(_getAttachments, exports);
var _addAttachment = require("./addAttachment");
parcelHelpers.exportAll(_addAttachment, exports);
var _updateAttachment = require("./updateAttachment");
parcelHelpers.exportAll(_updateAttachment, exports);
var _deleteAttachments = require("./deleteAttachments");
parcelHelpers.exportAll(_deleteAttachments, exports);
var _queryRelated = require("./queryRelated");
parcelHelpers.exportAll(_queryRelated, exports);
var _getLayer = require("./getLayer");
parcelHelpers.exportAll(_getLayer, exports);
var _getService = require("./getService");
parcelHelpers.exportAll(_getService, exports);
var _decodeValues = require("./decodeValues");
parcelHelpers.exportAll(_decodeValues, exports);
var _helpers = require("./helpers");
parcelHelpers.exportAll(_helpers, exports);

},{"./query":"a2FcN","./add":"ii4HO","./update":"jyG8Z","./delete":"5s7uJ","./applyEdits":"8iYMs","./getAllLayersAndTables":"4lOYF","./getAttachments":"hzfGB","./addAttachment":"5C7jq","./updateAttachment":"jJjxM","./deleteAttachments":"bR6lm","./queryRelated":"66DTw","./getLayer":"kAlQS","./getService":"8KwqC","./decodeValues":"5VQ9l","./helpers":"32hd7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"a2FcN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ```js
 * import { getFeature } from '@esri/arcgis-rest-feature-layer';
 * //
 * const url = "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0";
 * //
 * getFeature({
 *   url,
 *   id: 42
 * }).then(feature => {
 *  console.log(feature.attributes.FID); // 42
 * });
 * ```
 * Get a feature by id.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the feature or the [response](https://developer.mozilla.org/en-US/docs/Web/API/Response) itself if `rawResponse: true` was passed in.
 */ parcelHelpers.export(exports, "getFeature", ()=>getFeature
);
/**
 * ```js
 * import { queryFeatures } from '@esri/arcgis-rest-feature-layer';
 * //
 * queryFeatures({
 *   url: "http://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/3",
 *   where: "STATE_NAME = 'Alaska'"
 * })
 *   .then(result)
 * ```
 * Query a feature service. See [REST Documentation](https://developers.arcgis.com/rest/services-reference/query-feature-service-layer-.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the query response.
 */ parcelHelpers.export(exports, "queryFeatures", ()=>queryFeatures
);
/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ var _tslib = require("tslib");
var _arcgisRestRequest = require("@esri/arcgis-rest-request");
function getFeature(requestOptions) {
    var url = _arcgisRestRequest.cleanUrl(requestOptions.url) + "/" + requestOptions.id;
    // default to a GET request
    var options = _tslib.__assign({
        httpMethod: "GET"
    }, requestOptions);
    return _arcgisRestRequest.request(url, options).then(function(response) {
        if (options.rawResponse) return response;
        return response.feature;
    });
}
function queryFeatures(requestOptions) {
    var queryOptions = _arcgisRestRequest.appendCustomParams(requestOptions, [
        "where",
        "objectIds",
        "relationParam",
        "time",
        "distance",
        "units",
        "outFields",
        "geometry",
        "geometryType",
        "spatialRel",
        "returnGeometry",
        "maxAllowableOffset",
        "geometryPrecision",
        "inSR",
        "outSR",
        "gdbVersion",
        "returnDistinctValues",
        "returnIdsOnly",
        "returnCountOnly",
        "returnExtentOnly",
        "orderByFields",
        "groupByFieldsForStatistics",
        "outStatistics",
        "returnZ",
        "returnM",
        "multipatchOption",
        "resultOffset",
        "resultRecordCount",
        "quantizationParameters",
        "returnCentroid",
        "resultType",
        "historicMoment",
        "returnTrueCurves",
        "sqlFormat",
        "returnExceededLimitFeatures",
        "f"
    ], {
        httpMethod: "GET",
        params: _tslib.__assign({
            // set default query parameters
            where: "1=1",
            outFields: "*"
        }, requestOptions.params)
    });
    return _arcgisRestRequest.request(_arcgisRestRequest.cleanUrl(requestOptions.url) + "/query", queryOptions);
}

},{"tslib":"j55WF","@esri/arcgis-rest-request":"d5hrO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"j55WF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends
);
parcelHelpers.export(exports, "__assign", ()=>__assign
);
parcelHelpers.export(exports, "__rest", ()=>__rest
);
parcelHelpers.export(exports, "__decorate", ()=>__decorate
);
parcelHelpers.export(exports, "__param", ()=>__param
);
parcelHelpers.export(exports, "__metadata", ()=>__metadata
);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter
);
parcelHelpers.export(exports, "__generator", ()=>__generator
);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding
);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar
);
parcelHelpers.export(exports, "__values", ()=>__values
);
parcelHelpers.export(exports, "__read", ()=>__read
);
parcelHelpers.export(exports, "__spread", ()=>__spread
);
parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays
);
parcelHelpers.export(exports, "__await", ()=>__await
);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator
);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator
);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues
);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject
);
parcelHelpers.export(exports, "__importStar", ()=>__importStar
);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault
);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet
);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet
);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d1, b1) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d1, b1);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {
    };
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
}
function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}
function __exportStar(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
    return i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
}
function __asyncDelegator(o) {
    var i, p;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
    return i = {
    }, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v1) {
        Promise.resolve(v1).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result.default = mod;
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    privateMap.set(receiver, value);
    return value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"d5hrO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ var _request = require("./request");
parcelHelpers.exportAll(_request, exports);
var _appendCustomParams = require("./utils/append-custom-params");
parcelHelpers.exportAll(_appendCustomParams, exports);
var _arcGISRequestError = require("./utils/ArcGISRequestError");
parcelHelpers.exportAll(_arcGISRequestError, exports);
var _cleanUrl = require("./utils/clean-url");
parcelHelpers.exportAll(_cleanUrl, exports);
var _encodeFormData = require("./utils/encode-form-data");
parcelHelpers.exportAll(_encodeFormData, exports);
var _encodeQueryString = require("./utils/encode-query-string");
parcelHelpers.exportAll(_encodeQueryString, exports);
var _decodeQueryString = require("./utils/decode-query-string");
parcelHelpers.exportAll(_decodeQueryString, exports);
var _errorTypes = require("./utils/ErrorTypes");
parcelHelpers.exportAll(_errorTypes, exports);
var _grantTypes = require("./utils/GrantTypes");
parcelHelpers.exportAll(_grantTypes, exports);
var _httpmethods = require("./utils/HTTPMethods");
parcelHelpers.exportAll(_httpmethods, exports);
var _iauthenticationManager = require("./utils/IAuthenticationManager");
parcelHelpers.exportAll(_iauthenticationManager, exports);
var _ifetchTokenParams = require("./utils/IFetchTokenParams");
parcelHelpers.exportAll(_ifetchTokenParams, exports);
var _igenerateTokenParams = require("./utils/IGenerateTokenParams");
parcelHelpers.exportAll(_igenerateTokenParams, exports);
var _iparams = require("./utils/IParams");
parcelHelpers.exportAll(_iparams, exports);
var _iparamBuilder = require("./utils/IParamBuilder");
parcelHelpers.exportAll(_iparamBuilder, exports);
var _iparamsBuilder = require("./utils/IParamsBuilder");
parcelHelpers.exportAll(_iparamsBuilder, exports);
var _irequestOptions = require("./utils/IRequestOptions");
parcelHelpers.exportAll(_irequestOptions, exports);
var _itokenRequestOptions = require("./utils/ITokenRequestOptions");
parcelHelpers.exportAll(_itokenRequestOptions, exports);
var _processParams = require("./utils/process-params");
parcelHelpers.exportAll(_processParams, exports);
var _responseFormats = require("./utils/ResponseFormats");
parcelHelpers.exportAll(_responseFormats, exports);
var _retryAuthError = require("./utils/retryAuthError");
parcelHelpers.exportAll(_retryAuthError, exports);
var _warn = require("./utils/warn");
parcelHelpers.exportAll(_warn, exports);

},{"./request":"gtyMa","./utils/append-custom-params":"cgMjY","./utils/ArcGISRequestError":"jcAi3","./utils/clean-url":"c6lpH","./utils/encode-form-data":"gZVvY","./utils/encode-query-string":"lnTII","./utils/decode-query-string":"huj0j","./utils/ErrorTypes":"5XWSp","./utils/GrantTypes":"4XGgL","./utils/HTTPMethods":"3beRY","./utils/IAuthenticationManager":"4Dal1","./utils/IFetchTokenParams":"blaMu","./utils/IGenerateTokenParams":"b6YDk","./utils/IParams":"53U3y","./utils/IParamBuilder":"jnUPH","./utils/IParamsBuilder":"zJ4Pj","./utils/IRequestOptions":"allwV","./utils/ITokenRequestOptions":"ccPeE","./utils/process-params":"8w6yz","./utils/ResponseFormats":"eTUQI","./utils/retryAuthError":"2lHTg","./utils/warn":"hqNNI","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gtyMa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NODEJS_DEFAULT_REFERER_HEADER", ()=>NODEJS_DEFAULT_REFERER_HEADER
);
/**
 * Sets the default options that will be passed in **all requests across all `@esri/arcgis-rest-js` modules**.
 *
 *
 * ```js
 * import { setDefaultRequestOptions } from "@esri/arcgis-rest-request";
 * setDefaultRequestOptions({
 *   authentication: userSession // all requests will use this session by default
 * })
 * ```
 * You should **never** set a default `authentication` when you are in a server side environment where you may be handling requests for many different authenticated users.
 *
 * @param options The default options to pass with every request. Existing default will be overwritten.
 * @param hideWarnings Silence warnings about setting default `authentication` in shared environments.
 */ parcelHelpers.export(exports, "setDefaultRequestOptions", ()=>setDefaultRequestOptions
);
parcelHelpers.export(exports, "ArcGISAuthError", ()=>ArcGISAuthError1
);
/**
 * Checks for errors in a JSON response from the ArcGIS REST API. If there are no errors, it will return the `data` passed in. If there is an error, it will throw an `ArcGISRequestError` or `ArcGISAuthError`.
 *
 * @param data The response JSON to check for errors.
 * @param url The url of the original request
 * @param params The parameters of the original request
 * @param options The options of the original request
 * @returns The data that was passed in the `data` parameter
 */ parcelHelpers.export(exports, "checkForErrors", ()=>checkForErrors
);
/**
 * ```js
 * import { request } from '@esri/arcgis-rest-request';
 * //
 * request('https://www.arcgis.com/sharing/rest')
 *   .then(response) // response.currentVersion === 5.2
 * //
 * request('https://www.arcgis.com/sharing/rest', {
 *   httpMethod: "GET"
 * })
 * //
 * request('https://www.arcgis.com/sharing/rest/search', {
 *   params: { q: 'parks' }
 * })
 *   .then(response) // response.total => 78379
 * ```
 * Generic method for making HTTP requests to ArcGIS REST API endpoints.
 *
 * @param url - The URL of the ArcGIS REST API endpoint.
 * @param requestOptions - Options for the request, including parameters relevant to the endpoint.
 * @returns A Promise that will resolve with the data from the response.
 */ parcelHelpers.export(exports, "request", ()=>request
);
/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ var _tslib = require("tslib");
var _encodeFormData = require("./utils/encode-form-data");
var _encodeQueryString = require("./utils/encode-query-string");
var _processParams = require("./utils/process-params");
var _arcGISRequestError = require("./utils/ArcGISRequestError");
var _warn = require("./utils/warn");
var NODEJS_DEFAULT_REFERER_HEADER = "@esri/arcgis-rest-js";
var DEFAULT_ARCGIS_REQUEST_OPTIONS = {
    httpMethod: "POST",
    params: {
        f: "json"
    }
};
function setDefaultRequestOptions(options, hideWarnings) {
    if (options.authentication && !hideWarnings) _warn.warn("You should not set `authentication` as a default in a shared environment such as a web server which will process multiple users requests. You can call `setDefaultRequestOptions` with `true` as a second argument to disable this warning.");
    DEFAULT_ARCGIS_REQUEST_OPTIONS = options;
}
var ArcGISAuthError1 = function(_super) {
    _tslib.__extends(ArcGISAuthError, _super);
    /**
     * Create a new `ArcGISAuthError`  object.
     *
     * @param message - The error message from the API
     * @param code - The error code from the API
     * @param response - The original response from the API that caused the error
     * @param url - The original url of the request
     * @param options - The original options of the request
     */ function ArcGISAuthError(message, code, response, url, options) {
        if (message === void 0) message = "AUTHENTICATION_ERROR";
        if (code === void 0) code = "AUTHENTICATION_ERROR_CODE";
        var _this = _super.call(this, message, code, response, url, options) || this;
        _this.name = "ArcGISAuthError";
        _this.message = code === "AUTHENTICATION_ERROR_CODE" ? message : code + ": " + message;
        return _this;
    }
    ArcGISAuthError.prototype.retry = function(getSession, retryLimit) {
        var _this = this;
        if (retryLimit === void 0) retryLimit = 3;
        var tries = 0;
        var retryRequest = function(resolve, reject) {
            getSession(_this.url, _this.options).then(function(session) {
                var newOptions = _tslib.__assign(_tslib.__assign({
                }, _this.options), {
                    authentication: session
                });
                tries = tries + 1;
                return request(_this.url, newOptions);
            }).then(function(response) {
                resolve(response);
            }).catch(function(e) {
                if (e.name === "ArcGISAuthError" && tries < retryLimit) retryRequest(resolve, reject);
                else if (e.name === "ArcGISAuthError" && tries >= retryLimit) reject(_this);
                else reject(e);
            });
        };
        return new Promise(function(resolve, reject) {
            retryRequest(resolve, reject);
        });
    };
    return ArcGISAuthError;
}(_arcGISRequestError.ArcGISRequestError);
function checkForErrors(response, url, params, options, originalAuthError) {
    // this is an error message from billing.arcgis.com backend
    if (response.code >= 400) {
        var message = response.message, code = response.code;
        throw new _arcGISRequestError.ArcGISRequestError(message, code, response, url, options);
    }
    // error from ArcGIS Online or an ArcGIS Portal or server instance.
    if (response.error) {
        var _a = response.error, message = _a.message, code = _a.code, messageCode = _a.messageCode;
        var errorCode = messageCode || code || "UNKNOWN_ERROR_CODE";
        if (code === 498 || code === 499 || messageCode === "GWM_0003" || code === 400 && message === "Unable to generate token.") {
            if (originalAuthError) throw originalAuthError;
            else throw new ArcGISAuthError1(message, errorCode, response, url, options);
        }
        throw new _arcGISRequestError.ArcGISRequestError(message, errorCode, response, url, options);
    }
    // error from a status check
    if (response.status === "failed" || response.status === "failure") {
        var message = void 0;
        var code = "UNKNOWN_ERROR_CODE";
        try {
            message = JSON.parse(response.statusMessage).message;
            code = JSON.parse(response.statusMessage).code;
        } catch (e) {
            message = response.statusMessage || response.message;
        }
        throw new _arcGISRequestError.ArcGISRequestError(message, code, response, url, options);
    }
    return response;
}
function request(url, requestOptions) {
    if (requestOptions === void 0) requestOptions = {
        params: {
            f: "json"
        }
    };
    var options = _tslib.__assign(_tslib.__assign(_tslib.__assign({
        httpMethod: "POST"
    }, DEFAULT_ARCGIS_REQUEST_OPTIONS), requestOptions), {
        params: _tslib.__assign(_tslib.__assign({
        }, DEFAULT_ARCGIS_REQUEST_OPTIONS.params), requestOptions.params),
        headers: _tslib.__assign(_tslib.__assign({
        }, DEFAULT_ARCGIS_REQUEST_OPTIONS.headers), requestOptions.headers)
    });
    var missingGlobals = [];
    var recommendedPackages = [];
    // don't check for a global fetch if a custom implementation was passed through
    if (!options.fetch && typeof fetch !== "undefined") options.fetch = fetch.bind(Function("return this")());
    else {
        missingGlobals.push("`fetch`");
        recommendedPackages.push("`node-fetch`");
    }
    if (typeof Promise === "undefined") {
        missingGlobals.push("`Promise`");
        recommendedPackages.push("`es6-promise`");
    }
    if (typeof FormData === "undefined") {
        missingGlobals.push("`FormData`");
        recommendedPackages.push("`isomorphic-form-data`");
    }
    if (!options.fetch || typeof Promise === "undefined" || typeof FormData === "undefined") throw new Error("`arcgis-rest-request` requires a `fetch` implementation and global variables for `Promise` and `FormData` to be present in the global scope. You are missing " + missingGlobals.join(", ") + ". We recommend installing the " + recommendedPackages.join(", ") + " modules at the root of your application to add these to the global scope. See https://bit.ly/2KNwWaJ for more info.");
    var httpMethod = options.httpMethod, authentication = options.authentication, rawResponse = options.rawResponse;
    var params = _tslib.__assign({
        f: "json"
    }, options.params);
    var originalAuthError = null;
    var fetchOptions = {
        method: httpMethod,
        /* ensures behavior mimics XMLHttpRequest.
        needed to support sending IWA cookies */ credentials: options.credentials || "same-origin"
    };
    // the /oauth2/platformSelf route will add X-Esri-Auth-Client-Id header
    // and that request needs to send cookies cross domain
    // so we need to set the credentials to "include"
    if (options.headers && options.headers["X-Esri-Auth-Client-Id"] && url.indexOf("/oauth2/platformSelf") > -1) fetchOptions.credentials = "include";
    return (authentication ? authentication.getToken(url, {
        fetch: options.fetch
    }).catch(function(err) {
        /**
             * append original request url and requestOptions
             * to the error thrown by getToken()
             * to assist with retrying
             */ err.url = url;
        err.options = options;
        /**
             * if an attempt is made to talk to an unfederated server
             * first try the request anonymously. if a 'token required'
             * error is thrown, throw the UNFEDERATED error then.
             */ originalAuthError = err;
        return Promise.resolve("");
    }) : Promise.resolve("")).then(function(token) {
        if (token.length) params.token = token;
        if (authentication && authentication.getDomainCredentials) fetchOptions.credentials = authentication.getDomainCredentials(url);
        // Custom headers to add to request. IRequestOptions.headers with merge over requestHeaders.
        var requestHeaders = {
        };
        if (fetchOptions.method === "GET") {
            // Prevents token from being passed in query params when hideToken option is used.
            /* istanbul ignore if - window is always defined in a browser. Test case is covered by Jasmine in node test */ if (params.token && options.hideToken && // Sharing API does not support preflight check required by modern browsers https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request
            typeof window === "undefined") {
                requestHeaders["X-Esri-Authorization"] = "Bearer " + params.token;
                delete params.token;
            }
            // encode the parameters into the query string
            var queryParams = _encodeQueryString.encodeQueryString(params);
            // dont append a '?' unless parameters are actually present
            var urlWithQueryString = queryParams === "" ? url : url + "?" + _encodeQueryString.encodeQueryString(params);
            if (// This would exceed the maximum length for URLs specified by the consumer and requires POST
            options.maxUrlLength && urlWithQueryString.length > options.maxUrlLength || params.token && options.hideToken) {
                // the consumer specified a maximum length for URLs
                // and this would exceed it, so use post instead
                fetchOptions.method = "POST";
                // If the token was already added as a Auth header, add the token back to body with other params instead of header
                if (token.length && options.hideToken) {
                    params.token = token;
                    // Remove existing header that was added before url query length was checked
                    delete requestHeaders["X-Esri-Authorization"];
                }
            } else // just use GET
            url = urlWithQueryString;
        }
        /* updateResources currently requires FormData even when the input parameters dont warrant it.
    https://developers.arcgis.com/rest/users-groups-and-items/update-resources.htm
        see https://github.com/Esri/arcgis-rest-js/pull/500 for more info. */ var forceFormData = new RegExp("/items/.+/updateResources").test(url);
        if (fetchOptions.method === "POST") fetchOptions.body = _encodeFormData.encodeFormData(params, forceFormData);
        // Mixin headers from request options
        fetchOptions.headers = _tslib.__assign(_tslib.__assign({
        }, requestHeaders), options.headers);
        /* istanbul ignore next - karma reports coverage on browser tests only */ if (typeof window === "undefined" && !fetchOptions.headers.referer) fetchOptions.headers.referer = NODEJS_DEFAULT_REFERER_HEADER;
        /* istanbul ignore else blob responses are difficult to make cross platform we will just have to trust the isomorphic fetch will do its job */ if (!_processParams.requiresFormData(params) && !forceFormData) fetchOptions.headers["Content-Type"] = "application/x-www-form-urlencoded";
        return options.fetch(url, fetchOptions);
    }).then(function(response) {
        if (!response.ok) {
            // server responded w/ an actual error (404, 500, etc)
            var status_1 = response.status, statusText = response.statusText;
            throw new _arcGISRequestError.ArcGISRequestError(statusText, "HTTP " + status_1, response, url, options);
        }
        if (rawResponse) return response;
        switch(params.f){
            case "json":
                return response.json();
            case "geojson":
                return response.json();
            case "html":
                return response.text();
            case "text":
                return response.text();
            /* istanbul ignore next blob responses are difficult to make cross platform we will just have to trust that isomorphic fetch will do its job */ default:
                return response.blob();
        }
    }).then(function(data) {
        if ((params.f === "json" || params.f === "geojson") && !rawResponse) {
            var response = checkForErrors(data, url, params, options, originalAuthError);
            if (originalAuthError) {
                /* If the request was made to an unfederated service that
                didn't require authentication, add the base url and a dummy token
                to the list of trusted servers to avoid another federation check
                in the event of a repeat request */ var truncatedUrl = url.toLowerCase().split(/\/rest(\/admin)?\/services\//)[0];
                options.authentication.federatedServers[truncatedUrl] = {
                    token: [],
                    // default to 24 hours
                    expires: new Date(Date.now() + 86400000)
                };
                originalAuthError = null;
            }
            return response;
        } else return data;
    });
}

},{"tslib":"j55WF","./utils/encode-form-data":"gZVvY","./utils/encode-query-string":"lnTII","./utils/process-params":"8w6yz","./utils/ArcGISRequestError":"jcAi3","./utils/warn":"hqNNI","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gZVvY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Encodes parameters in a [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object in browsers or in a [FormData](https://github.com/form-data/form-data) in Node.js
 *
 * @param params An object to be encoded.
 * @returns The complete [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object.
 */ parcelHelpers.export(exports, "encodeFormData", ()=>encodeFormData
);
/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ var _processParams = require("./process-params");
var _encodeQueryString = require("./encode-query-string");
function encodeFormData(params, forceFormData) {
    // see https://github.com/Esri/arcgis-rest-js/issues/499 for more info.
    var useFormData = _processParams.requiresFormData(params) || forceFormData;
    var newParams = _processParams.processParams(params);
    if (useFormData) {
        var formData_1 = new FormData();
        Object.keys(newParams).forEach(function(key) {
            if (typeof Blob !== "undefined" && newParams[key] instanceof Blob) {
                /* To name the Blob:
                 1. look to an alternate request parameter called 'fileName'
                 2. see if 'name' has been tacked onto the Blob manually
                 3. if all else fails, use the request parameter
                */ var filename = newParams["fileName"] || newParams[key].name || key;
                formData_1.append(key, newParams[key], filename);
            } else formData_1.append(key, newParams[key]);
        });
        return formData_1;
    } else return _encodeQueryString.encodeQueryString(params);
}

},{"./process-params":"8w6yz","./encode-query-string":"lnTII","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8w6yz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ /**
 * Checks parameters to see if we should use FormData to send the request
 * @param params The object whose keys will be encoded.
 * @return A boolean indicating if FormData will be required.
 */ parcelHelpers.export(exports, "requiresFormData", ()=>requiresFormData
);
/**
 * Converts parameters to the proper representation to send to the ArcGIS REST API.
 * @param params The object whose keys will be encoded.
 * @return A new object with properly encoded values.
 */ parcelHelpers.export(exports, "processParams", ()=>processParams
);
function requiresFormData(params) {
    return Object.keys(params).some(function(key) {
        var value = params[key];
        if (!value) return false;
        if (value && value.toParam) value = value.toParam();
        var type = value.constructor.name;
        switch(type){
            case "Array":
                return false;
            case "Object":
                return false;
            case "Date":
                return false;
            case "Function":
                return false;
            case "Boolean":
                return false;
            case "String":
                return false;
            case "Number":
                return false;
            default:
                return true;
        }
    });
}
function processParams(params) {
    var newParams = {
    };
    Object.keys(params).forEach(function(key) {
        var _a, _b;
        var param = params[key];
        if (param && param.toParam) param = param.toParam();
        if (!param && param !== 0 && typeof param !== "boolean" && typeof param !== "string") return;
        var type = param.constructor.name;
        var value;
        // properly encodes objects, arrays and dates for arcgis.com and other services.
        // ported from https://github.com/Esri/esri-leaflet/blob/master/src/Request.js#L22-L30
        // also see https://github.com/Esri/arcgis-rest-js/issues/18:
        // null, undefined, function are excluded. If you want to send an empty key you need to send an empty string "".
        switch(type){
            case "Array":
                // Based on the first element of the array, classify array as an array of arrays, an array of objects
                // to be stringified, or an array of non-objects to be comma-separated
                // eslint-disable-next-line no-case-declarations
                var firstElementType = (_b = (_a = param[0]) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name;
                value = firstElementType === "Array" ? param : firstElementType === "Object" ? JSON.stringify(param) : param.join(","); // join other types of array elements
                break;
            case "Object":
                value = JSON.stringify(param);
                break;
            case "Date":
                value = param.valueOf();
                break;
            case "Function":
                value = null;
                break;
            case "Boolean":
                value = param + "";
                break;
            default:
                value = param;
                break;
        }
        if (value || value === 0 || typeof value === "string" || Array.isArray(value)) newParams[key] = value;
    });
    return newParams;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lnTII":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Encodes keys and parameters for use in a URL's query string.
 *
 * @param key Parameter's key
 * @param value Parameter's value
 * @returns Query string with key and value pairs separated by "&"
 */ parcelHelpers.export(exports, "encodeParam", ()=>encodeParam
);
/**
 * Encodes the passed object as a query string.
 *
 * @param params An object to be encoded.
 * @returns An encoded query string.
 */ parcelHelpers.export(exports, "encodeQueryString", ()=>encodeQueryString
);
/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ var _processParams = require("./process-params");
function encodeParam(key, value) {
    // For array of arrays, repeat key=value for each element of containing array
    if (Array.isArray(value) && value[0] && Array.isArray(value[0])) return value.map(function(arrayElem) {
        return encodeParam(key, arrayElem);
    }).join("&");
    return encodeURIComponent(key) + "=" + encodeURIComponent(value);
}
function encodeQueryString(params) {
    var newParams = _processParams.processParams(params);
    return Object.keys(newParams).map(function(key) {
        return encodeParam(key, newParams[key]);
    }).join("&");
}

},{"./process-params":"8w6yz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jcAi3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ArcGISRequestError", ()=>ArcGISRequestError1
);
/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ // TypeScript 2.1 no longer allows you to extend built in types. See https://github.com/Microsoft/TypeScript/issues/12790#issuecomment-265981442
// and https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
//
// This code is from MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types.
var ArcGISRequestError1 = function() {
    /**
     * Create a new `ArcGISRequestError`  object.
     *
     * @param message - The error message from the API
     * @param code - The error code from the API
     * @param response - The original response from the API that caused the error
     * @param url - The original url of the request
     * @param options - The original options and parameters of the request
     */ function ArcGISRequestError(message, code, response, url, options) {
        message = message || "UNKNOWN_ERROR";
        code = code || "UNKNOWN_ERROR_CODE";
        this.name = "ArcGISRequestError";
        this.message = code === "UNKNOWN_ERROR_CODE" ? message : code + ": " + message;
        this.originalMessage = message;
        this.code = code;
        this.response = response;
        this.url = url;
        this.options = options;
    }
    return ArcGISRequestError;
}();
ArcGISRequestError1.prototype = Object.create(Error.prototype);
ArcGISRequestError1.prototype.constructor = ArcGISRequestError1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hqNNI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ /**
 * Method used internally to surface messages to developers.
 */ parcelHelpers.export(exports, "warn", ()=>warn
);
function warn(message) {
    if (console && console.warn) console.warn.apply(console, [
        message
    ]);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cgMjY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Helper for methods with lots of first order request options to pass through as request parameters.
 */ parcelHelpers.export(exports, "appendCustomParams", ()=>appendCustomParams
);
/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ var _tslib = require("tslib");
function appendCustomParams(customOptions, keys, baseOptions) {
    var requestOptionsKeys = [
        "params",
        "httpMethod",
        "rawResponse",
        "authentication",
        "portal",
        "fetch",
        "maxUrlLength",
        "headers"
    ];
    var options = _tslib.__assign(_tslib.__assign({
        params: {
        }
    }, baseOptions), customOptions);
    // merge all keys in customOptions into options.params
    options.params = keys.reduce(function(value, key) {
        if (customOptions[key] || typeof customOptions[key] === "boolean") value[key] = customOptions[key];
        return value;
    }, options.params);
    // now remove all properties in options that don't exist in IRequestOptions
    return requestOptionsKeys.reduce(function(value, key) {
        if (options[key]) value[key] = options[key];
        return value;
    }, {
    });
}

},{"tslib":"j55WF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"c6lpH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ /**
 * Helper method to ensure that user supplied urls don't include whitespace or a trailing slash.
 */ parcelHelpers.export(exports, "cleanUrl", ()=>cleanUrl
);
function cleanUrl(url) {
    // Guard so we don't try to trim something that's not a string
    if (typeof url !== "string") return url;
    // trim leading and trailing spaces, but not spaces inside the url
    url = url.trim();
    // remove the trailing slash to the url if one was included
    if (url[url.length - 1] === "/") url = url.slice(0, -1);
    return url;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"huj0j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* Copyright (c) 2017-2020 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ parcelHelpers.export(exports, "decodeParam", ()=>decodeParam
);
/**
 * Decodes the passed query string as an object.
 *
 * @param query A string to be decoded.
 * @returns A decoded query param object.
 */ parcelHelpers.export(exports, "decodeQueryString", ()=>decodeQueryString
);
function decodeParam(param) {
    var _a = param.split("="), key = _a[0], value = _a[1];
    return {
        key: decodeURIComponent(key),
        value: decodeURIComponent(value)
    };
}
function decodeQueryString(query) {
    return query.replace(/^#/, "").split("&").reduce(function(acc, entry) {
        var _a = decodeParam(entry), key = _a.key, value = _a.value;
        acc[key] = value;
        return acc;
    }, {
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5XWSp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ErrorTypes", ()=>ErrorTypes1
);
var ErrorTypes1;
(function(ErrorTypes) {
    ErrorTypes["ArcGISRequestError"] = "ArcGISRequestError";
    ErrorTypes["ArcGISAuthError"] = "ArcGISAuthError";
})(ErrorTypes1 || (ErrorTypes1 = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4XGgL":[function(require,module,exports) {

},{}],"3beRY":[function(require,module,exports) {

},{}],"4Dal1":[function(require,module,exports) {

},{}],"blaMu":[function(require,module,exports) {

},{}],"b6YDk":[function(require,module,exports) {

},{}],"53U3y":[function(require,module,exports) {

},{}],"jnUPH":[function(require,module,exports) {

},{}],"zJ4Pj":[function(require,module,exports) {

},{}],"allwV":[function(require,module,exports) {

},{}],"ccPeE":[function(require,module,exports) {

},{}],"eTUQI":[function(require,module,exports) {

},{}],"2lHTg":[function(require,module,exports) {

},{}],"ii4HO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ```js
 * import { addFeatures } from '@esri/arcgis-rest-feature-layer';
 * //
 * addFeatures({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   features: [{
 *     geometry: { x: -120, y: 45, spatialReference: { wkid: 4326 } },
 *     attributes: { status: "alive" }
 *   }]
 * })
 *   .then(response)
 * ```
 * Add features request. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/add-features.htm) for more information.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the addFeatures response.
 */ parcelHelpers.export(exports, "addFeatures", ()=>addFeatures
);
/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ var _tslib = require("tslib");
var _arcgisRestRequest = require("@esri/arcgis-rest-request");
function addFeatures(requestOptions) {
    var url = _arcgisRestRequest.cleanUrl(requestOptions.url) + "/addFeatures";
    // edit operations are POST only
    var options = _arcgisRestRequest.appendCustomParams(requestOptions, [
        "features",
        "gdbVersion",
        "returnEditMoment",
        "rollbackOnFailure"
    ], {
        params: _tslib.__assign({
        }, requestOptions.params)
    });
    return _arcgisRestRequest.request(url, options);
}

},{"tslib":"j55WF","@esri/arcgis-rest-request":"d5hrO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jyG8Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 *
 * ```js
 * import { updateFeatures } from '@esri/arcgis-rest-feature-layer';
 * //
 * updateFeatures({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   features: [{
 *     geometry: { x: -120, y: 45, spatialReference: { wkid: 4326 } },
 *     attributes: { status: "alive" }
 *   }]
 * });
 * ```
 * Update features request. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/update-features.htm) for more information.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the updateFeatures response.
 */ parcelHelpers.export(exports, "updateFeatures", ()=>updateFeatures
);
/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ var _tslib = require("tslib");
var _arcgisRestRequest = require("@esri/arcgis-rest-request");
function updateFeatures(requestOptions) {
    var url = _arcgisRestRequest.cleanUrl(requestOptions.url) + "/updateFeatures";
    // edit operations are POST only
    var options = _arcgisRestRequest.appendCustomParams(requestOptions, [
        "features",
        "gdbVersion",
        "returnEditMoment",
        "rollbackOnFailure",
        "trueCurveClient"
    ], {
        params: _tslib.__assign({
        }, requestOptions.params)
    });
    return _arcgisRestRequest.request(url, options);
}

},{"tslib":"j55WF","@esri/arcgis-rest-request":"d5hrO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5s7uJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ```js
 * import { deleteFeatures } from '@esri/arcgis-rest-feature-layer';
 * //
 * deleteFeatures({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   objectIds: [1,2,3]
 * });
 * ```
 * Delete features request. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/delete-features.htm) for more information.
 *
 * @param deleteFeaturesRequestOptions - Options for the request.
 * @returns A Promise that will resolve with the deleteFeatures response.
 */ parcelHelpers.export(exports, "deleteFeatures", ()=>deleteFeatures
);
/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ var _tslib = require("tslib");
var _arcgisRestRequest = require("@esri/arcgis-rest-request");
function deleteFeatures(requestOptions) {
    var url = _arcgisRestRequest.cleanUrl(requestOptions.url) + "/deleteFeatures";
    // edit operations POST only
    var options = _arcgisRestRequest.appendCustomParams(requestOptions, [
        "where",
        "objectIds",
        "gdbVersion",
        "returnEditMoment",
        "rollbackOnFailure"
    ], {
        params: _tslib.__assign({
        }, requestOptions.params)
    });
    return _arcgisRestRequest.request(url, options);
}

},{"tslib":"j55WF","@esri/arcgis-rest-request":"d5hrO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8iYMs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ```js
 * import { applyEdits } from '@esri/arcgis-rest-feature-layer';
 * //
 * applyEdits({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   adds: [{
 *     geometry: { x: -120, y: 45, spatialReference: { wkid: 4326 } },
 *     attributes: { status: "alive" }
 *   }],
 *   updates: [{
 *     attributes: { OBJECTID: 1004, status: "alive" }
 *   }],
 *   deletes: [862, 1548]
 * })
 *   .then(response)
 * ```
 * Apply edits request. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/apply-edits-feature-service-layer-.htm) for more information.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the applyEdits response.
 */ parcelHelpers.export(exports, "applyEdits", ()=>applyEdits
);
/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ var _tslib = require("tslib");
var _arcgisRestRequest = require("@esri/arcgis-rest-request");
function applyEdits(requestOptions) {
    var url = _arcgisRestRequest.cleanUrl(requestOptions.url) + "/applyEdits";
    // edit operations are POST only
    var options = _arcgisRestRequest.appendCustomParams(requestOptions, [
        "adds",
        "updates",
        "deletes",
        "useGlobalIds",
        "attachments",
        "gdbVersion",
        "returnEditMoment",
        "rollbackOnFailure",
        "trueCurveClient", 
    ], {
        params: _tslib.__assign({
        }, requestOptions.params)
    });
    return _arcgisRestRequest.request(url, options);
}

},{"tslib":"j55WF","@esri/arcgis-rest-request":"d5hrO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4lOYF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ```js
 * import { getAllLayersAndTables } from '@esri/arcgis-rest-feature-layer';
 * getAllLayersAndTables({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0"
 * })
 *   .then(response) // { layers: [...], tables: [...] }
 * ```
 * Fetches all the layers and tables associated with a given layer service.
 * Wrapper for https://developers.arcgis.com/rest/services-reference/all-layers-and-tables.htm
 *
 * @param options - Request options, including the url for the layer service
 * @returns A Promise that will resolve with the layers and tables for the given service
 */ // TODO: should we expand this to support other valid params of the endpoint?
parcelHelpers.export(exports, "getAllLayersAndTables", ()=>getAllLayersAndTables
);
var _tslib = require("tslib");
var _helpers = require("./helpers");
var _arcgisRestRequest = require("@esri/arcgis-rest-request");
function getAllLayersAndTables(options) {
    var url = options.url, requestOptions = _tslib.__rest(options, [
        "url"
    ]);
    var layersUrl = _helpers.parseServiceUrl(url) + "/layers";
    return _arcgisRestRequest.request(layersUrl, requestOptions);
}

},{"tslib":"j55WF","./helpers":"32hd7","@esri/arcgis-rest-request":"d5hrO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"32hd7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Return the service url. If not matched, returns what was passed in
 */ parcelHelpers.export(exports, "parseServiceUrl", ()=>parseServiceUrl
);
/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ var _arcgisRestRequest = require("@esri/arcgis-rest-request");
var serviceRegex = new RegExp(/.+(?:map|feature|image)server/i);
function parseServiceUrl(url) {
    var match = url.match(serviceRegex);
    if (match) return match[0];
    else return stripQueryString(url);
}
function stripQueryString(url) {
    var stripped = url.split('?')[0];
    return _arcgisRestRequest.cleanUrl(stripped);
}

},{"@esri/arcgis-rest-request":"d5hrO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hzfGB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ```js
 * import { getAttachments } from '@esri/arcgis-rest-feature-layer';
 * //
 * getAttachments({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   featureId: 8484
 * });
 * ```
 * Request `attachmentInfos` of a feature by id. See [Attachment Infos](https://developers.arcgis.com/rest/services-reference/attachment-infos-feature-service-.htm) for more information.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the `getAttachments()` response.
 */ parcelHelpers.export(exports, "getAttachments", ()=>getAttachments
);
/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ var _tslib = require("tslib");
var _arcgisRestRequest = require("@esri/arcgis-rest-request");
function getAttachments(requestOptions) {
    var options = _tslib.__assign({
        httpMethod: "GET"
    }, requestOptions);
    // pass through
    return _arcgisRestRequest.request(_arcgisRestRequest.cleanUrl(options.url) + "/" + options.featureId + "/attachments", options);
}

},{"tslib":"j55WF","@esri/arcgis-rest-request":"d5hrO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5C7jq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ```js
 * import { addAttachment } from '@esri/arcgis-rest-feature-layer';
 * //
 * addAttachment({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   featureId: 8484,
 *   attachment: myFileInput.files[0]
 * })
 *   .then(response)
 * ```
 * Attach a file to a feature by id. See [Add Attachment](https://developers.arcgis.com/rest/services-reference/add-attachment.htm) for more information.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the `addAttachment()` response.
 */ parcelHelpers.export(exports, "addAttachment", ()=>addAttachment
);
/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ var _tslib = require("tslib");
var _arcgisRestRequest = require("@esri/arcgis-rest-request");
function addAttachment(requestOptions) {
    var options = _tslib.__assign({
        params: {
        }
    }, requestOptions);
    // `attachment` --> params: {}
    options.params.attachment = requestOptions.attachment;
    return _arcgisRestRequest.request(_arcgisRestRequest.cleanUrl(options.url) + "/" + options.featureId + "/addAttachment", options);
}

},{"tslib":"j55WF","@esri/arcgis-rest-request":"d5hrO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jJjxM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 *
 * ```js
 * import { updateAttachment } from '@esri/arcgis-rest-feature-layer';
 * //
 * updateAttachment({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   featureId: 8484,
 *   attachment: myFileInput.files[0],
 *   attachmentId: 306
 * });
 * ```
 * Update a related attachment to a feature by id. See [Update Attachment](https://developers.arcgis.com/rest/services-reference/update-attachment.htm) for more information.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the `updateAttachment()` response.
 */ parcelHelpers.export(exports, "updateAttachment", ()=>updateAttachment
);
/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ var _tslib = require("tslib");
var _arcgisRestRequest = require("@esri/arcgis-rest-request");
function updateAttachment(requestOptions) {
    var options = _tslib.__assign({
        params: {
        }
    }, requestOptions);
    // `attachment` and `attachmentId` --> params: {}
    options.params.attachment = requestOptions.attachment;
    options.params.attachmentId = requestOptions.attachmentId;
    return _arcgisRestRequest.request(_arcgisRestRequest.cleanUrl(options.url) + "/" + options.featureId + "/updateAttachment", options);
}

},{"tslib":"j55WF","@esri/arcgis-rest-request":"d5hrO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bR6lm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ```js
 * import { deleteAttachments } from '@esri/arcgis-rest-feature-layer';
 * //
 * deleteAttachments({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   featureId: 8484,
 *   attachmentIds: [306]
 * });
 * ```
 * Delete existing attachment files of a feature by id. See [Delete Attachments](https://developers.arcgis.com/rest/services-reference/delete-attachments.htm) for more information.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the `deleteAttachments()` response.
 */ parcelHelpers.export(exports, "deleteAttachments", ()=>deleteAttachments
);
/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ var _tslib = require("tslib");
var _arcgisRestRequest = require("@esri/arcgis-rest-request");
function deleteAttachments(requestOptions) {
    var options = _tslib.__assign({
        params: {
        }
    }, requestOptions);
    // `attachmentIds` --> params: {}
    options.params.attachmentIds = requestOptions.attachmentIds;
    return _arcgisRestRequest.request(_arcgisRestRequest.cleanUrl(options.url) + "/" + options.featureId + "/deleteAttachments", options);
}

},{"tslib":"j55WF","@esri/arcgis-rest-request":"d5hrO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"66DTw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 *
 * ```js
 * import { queryRelated } from '@esri/arcgis-rest-feature-layer'
 * //
 * queryRelated({
 *  url: "http://services.myserver/OrgID/ArcGIS/rest/services/Petroleum/KSPetro/FeatureServer/0",
 *  relationshipId: 1,
 *  params: { returnCountOnly: true }
 * })
 *  .then(response) // response.relatedRecords
 * ```
 * Query the related records for a feature service. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/query-related-records-feature-service-.htm) for more information.
 *
 * @param requestOptions
 * @returns A Promise that will resolve with the query response
 */ parcelHelpers.export(exports, "queryRelated", ()=>queryRelated
);
/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ var _tslib = require("tslib");
var _arcgisRestRequest = require("@esri/arcgis-rest-request");
function queryRelated(requestOptions) {
    var options = _arcgisRestRequest.appendCustomParams(requestOptions, [
        "objectIds",
        "relationshipId",
        "definitionExpression",
        "outFields"
    ], {
        httpMethod: "GET",
        params: _tslib.__assign({
            // set default query parameters
            definitionExpression: "1=1",
            outFields: "*",
            relationshipId: 0
        }, requestOptions.params)
    });
    return _arcgisRestRequest.request(_arcgisRestRequest.cleanUrl(requestOptions.url) + "/queryRelatedRecords", options);
}

},{"tslib":"j55WF","@esri/arcgis-rest-request":"d5hrO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kAlQS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ```js
 * import { getLayer } from '@esri/arcgis-rest-feature-layer';
 * //
 * getLayer({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0"
 * })
 *   .then(response) // { name: "311", id: 0, ... }
 * ```
 * Layer (Feature Service) request. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/layer-feature-service-.htm) for more information.
 *
 * @param options - Options for the request.
 * @returns A Promise that will resolve with the addFeatures response.
 */ parcelHelpers.export(exports, "getLayer", ()=>getLayer
);
/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ var _arcgisRestRequest = require("@esri/arcgis-rest-request");
function getLayer(options) {
    return _arcgisRestRequest.request(_arcgisRestRequest.cleanUrl(options.url), options);
}

},{"@esri/arcgis-rest-request":"d5hrO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8KwqC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ```js
 * import { getService } from '@esri/arcgis-rest-feature-layer';
 * //
 * getService({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer"
 * })
 *   .then(response) // { name: "311", id: 0, ... }
 * ```
 * Feature Service request. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/feature-service.htm) for more information.
 *
 * @param options - Options for the request.
 * @returns A Promise that will resolve with the getService response.
 */ parcelHelpers.export(exports, "getService", ()=>getService
);
/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ var _arcgisRestRequest = require("@esri/arcgis-rest-request");
function getService(options) {
    return _arcgisRestRequest.request(_arcgisRestRequest.cleanUrl(options.url), options);
}

},{"@esri/arcgis-rest-request":"d5hrO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5VQ9l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * ```js
 * import { queryFeatures, decodeValues } from '@esri/arcgis-rest-feature-layer';
 * //
 * const url = `https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0`
 * queryFeatures({ url })
 *   .then(queryResponse => {
 *     decodeValues({
 *       url,
 *       queryResponse
 *     })
 *       .then(decodedResponse)
 *   })
 * ```
 * Replaces the raw coded domain values in a query response with descriptions (for legibility).
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the addFeatures response.
 */ parcelHelpers.export(exports, "decodeValues", ()=>decodeValues
);
/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */ var _tslib = require("tslib");
var _getLayer = require("./getLayer");
function decodeValues(requestOptions) {
    var prms;
    if (requestOptions.fields) prms = Promise.resolve(requestOptions.fields);
    else prms = _getLayer.getLayer({
        url: requestOptions.url
    }).then(function(metadata) {
        return metadata.fields;
    });
    return prms.then(function(fields) {
        // extract coded value domains
        var domains = extractCodedValueDomains(fields);
        if (Object.keys(domains).length < 1) // no values to decode
        return requestOptions.queryResponse;
        // don't mutate original features
        var decodedFeatures = requestOptions.queryResponse.features.map(function(feature) {
            var decodedAttributes = {
            };
            for(var key in feature.attributes){
                /* istanbul ignore next */ if (!Object.prototype.hasOwnProperty.call(feature.attributes, key)) continue;
                var value = feature.attributes[key];
                var domain = domains[key];
                decodedAttributes[key] = value !== null && domain ? decodeValue(value, domain) : value;
            }
            // merge decoded attributes into the feature
            return _tslib.__assign(_tslib.__assign({
            }, feature), {
                attributes: decodedAttributes
            });
        });
        // merge decoded features into the response
        return _tslib.__assign(_tslib.__assign({
        }, requestOptions.queryResponse), {
            features: decodedFeatures
        });
    });
}
function extractCodedValueDomains(fields) {
    return fields.reduce(function(domains, field) {
        var domain = field.domain;
        if (domain && domain.type === "codedValue") domains[field.name] = domain;
        return domains;
    }, {
    });
}
// TODO: add type for domain?
function decodeValue(value, domain) {
    var codedValue = domain.codedValues.find(function(d) {
        return value === d.code;
    });
    return codedValue ? codedValue.name : value;
}

},{"tslib":"j55WF","./getLayer":"kAlQS","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2DR6j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildTable", ()=>buildTable
);
parcelHelpers.export(exports, "generateErrorMsg", ()=>generateErrorMsg
);
const buildTable = (table, features)=>{
    for (const element of features){
        let newRow = table.insertRow(-1);
        addRow(newRow, element.attributes.MUNI);
        addRow(newRow, Number(element.attributes.POP_2020).toLocaleString());
        addRow(newRow, element.attributes.MAG_DJ);
    }
};
// insert a new row into table
const addRow = (row, value)=>{
    let newCell = row.insertCell(-1);
    let div = document.createElement('div');
    div.innerHTML = value;
    newCell.appendChild(div);
};
const generateErrorMsg = (element, error)=>{
    // create element to contain error message
    const container = document.createElement('p');
    // set content of error message
    container.innerHTML = error;
    // append message to parent element
    element.appendChild(container);
    // show error message
    element.style.display = 'block';
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["j2JkV","5mvL2"], "5mvL2", "parcelRequire0a0a")

//# sourceMappingURL=index.58d620de.js.map
