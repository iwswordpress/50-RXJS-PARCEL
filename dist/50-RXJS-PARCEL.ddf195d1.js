// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__spreadArrays = __spreadArrays;
exports.__spreadArray = __spreadArray;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__createBinding = exports.__assign = void 0;

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
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
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
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
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
          op = [0];
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
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};

exports.__createBinding = __createBinding;

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
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
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
/** @deprecated */


function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}
/** @deprecated */


function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

function __spreadArray(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

  return to;
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
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
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}

function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
}
},{}],"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = isFunction;

function isFunction(value) {
  return typeof value === 'function';
}
},{}],"../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createErrorClass = createErrorClass;

function createErrorClass(createImpl) {
  var _super = function (instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  };

  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}
},{}],"../../node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsubscriptionError = void 0;

var _createErrorClass = require("./createErrorClass");

var UnsubscriptionError = (0, _createErrorClass.createErrorClass)(function (_super) {
  return function UnsubscriptionErrorImpl(errors) {
    _super(this);

    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
      return i + 1 + ") " + err.toString();
    }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
  };
});
exports.UnsubscriptionError = UnsubscriptionError;
},{"./createErrorClass":"../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrRemove = arrRemove;

function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}
},{}],"../../node_modules/rxjs/dist/esm5/internal/Subscription.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSubscription = isSubscription;
exports.EMPTY_SUBSCRIPTION = exports.Subscription = void 0;

var _tslib = require("tslib");

var _isFunction = require("./util/isFunction");

var _UnsubscriptionError = require("./util/UnsubscriptionError");

var _arrRemove = require("./util/arrRemove");

var Subscription = function () {
  function Subscription(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._teardowns = null;
  }

  Subscription.prototype.unsubscribe = function () {
    var e_1, _a, e_2, _b;

    var errors;

    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;

      if (_parentage) {
        this._parentage = null;

        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = (0, _tslib.__values)(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }

      var initialTeardown = this.initialTeardown;

      if ((0, _isFunction.isFunction)(initialTeardown)) {
        try {
          initialTeardown();
        } catch (e) {
          errors = e instanceof _UnsubscriptionError.UnsubscriptionError ? e.errors : [e];
        }
      }

      var _teardowns = this._teardowns;

      if (_teardowns) {
        this._teardowns = null;

        try {
          for (var _teardowns_1 = (0, _tslib.__values)(_teardowns), _teardowns_1_1 = _teardowns_1.next(); !_teardowns_1_1.done; _teardowns_1_1 = _teardowns_1.next()) {
            var teardown_1 = _teardowns_1_1.value;

            try {
              execTeardown(teardown_1);
            } catch (err) {
              errors = errors !== null && errors !== void 0 ? errors : [];

              if (err instanceof _UnsubscriptionError.UnsubscriptionError) {
                errors = (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], (0, _tslib.__read)(errors)), (0, _tslib.__read)(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_teardowns_1_1 && !_teardowns_1_1.done && (_b = _teardowns_1.return)) _b.call(_teardowns_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }

      if (errors) {
        throw new _UnsubscriptionError.UnsubscriptionError(errors);
      }
    }
  };

  Subscription.prototype.add = function (teardown) {
    var _a;

    if (teardown && teardown !== this) {
      if (this.closed) {
        execTeardown(teardown);
      } else {
        if (teardown instanceof Subscription) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }

          teardown._addParent(this);
        }

        (this._teardowns = (_a = this._teardowns) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  };

  Subscription.prototype._hasParent = function (parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };

  Subscription.prototype._addParent = function (parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };

  Subscription.prototype._removeParent = function (parent) {
    var _parentage = this._parentage;

    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      (0, _arrRemove.arrRemove)(_parentage, parent);
    }
  };

  Subscription.prototype.remove = function (teardown) {
    var _teardowns = this._teardowns;
    _teardowns && (0, _arrRemove.arrRemove)(_teardowns, teardown);

    if (teardown instanceof Subscription) {
      teardown._removeParent(this);
    }
  };

  Subscription.EMPTY = function () {
    var empty = new Subscription();
    empty.closed = true;
    return empty;
  }();

  return Subscription;
}();

exports.Subscription = Subscription;
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
exports.EMPTY_SUBSCRIPTION = EMPTY_SUBSCRIPTION;

function isSubscription(value) {
  return value instanceof Subscription || value && 'closed' in value && (0, _isFunction.isFunction)(value.remove) && (0, _isFunction.isFunction)(value.add) && (0, _isFunction.isFunction)(value.unsubscribe);
}

function execTeardown(teardown) {
  if ((0, _isFunction.isFunction)(teardown)) {
    teardown();
  } else {
    teardown.unsubscribe();
  }
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./util/isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js","./util/UnsubscriptionError":"../../node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js","./util/arrRemove":"../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js"}],"../../node_modules/rxjs/dist/esm5/internal/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
var config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: undefined,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};
exports.config = config;
},{}],"../../node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeoutProvider = void 0;

var _tslib = require("tslib");

var timeoutProvider = {
  setTimeout: function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) || setTimeout).apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args)));
  },
  clearTimeout: function (handle) {
    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: undefined
};
exports.timeoutProvider = timeoutProvider;
},{"tslib":"../../node_modules/tslib/tslib.es6.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reportUnhandledError = reportUnhandledError;

var _config = require("../config");

var _timeoutProvider = require("../scheduler/timeoutProvider");

function reportUnhandledError(err) {
  _timeoutProvider.timeoutProvider.setTimeout(function () {
    var onUnhandledError = _config.config.onUnhandledError;

    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}
},{"../config":"../../node_modules/rxjs/dist/esm5/internal/config.js","../scheduler/timeoutProvider":"../../node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/noop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noop = noop;

function noop() {}
},{}],"../../node_modules/rxjs/dist/esm5/internal/NotificationFactories.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorNotification = errorNotification;
exports.nextNotification = nextNotification;
exports.createNotification = createNotification;
exports.COMPLETE_NOTIFICATION = void 0;

var COMPLETE_NOTIFICATION = function () {
  return createNotification('C', undefined, undefined);
}();

exports.COMPLETE_NOTIFICATION = COMPLETE_NOTIFICATION;

function errorNotification(error) {
  return createNotification('E', undefined, error);
}

function nextNotification(value) {
  return createNotification('N', value, undefined);
}

function createNotification(kind, value, error) {
  return {
    kind: kind,
    value: value,
    error: error
  };
}
},{}],"../../node_modules/rxjs/dist/esm5/internal/Subscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EMPTY_OBSERVER = exports.SafeSubscriber = exports.Subscriber = void 0;

var _tslib = require("tslib");

var _isFunction = require("./util/isFunction");

var _Subscription = require("./Subscription");

var _config = require("./config");

var _reportUnhandledError = require("./util/reportUnhandledError");

var _noop = require("./util/noop");

var _NotificationFactories = require("./NotificationFactories");

var _timeoutProvider = require("./scheduler/timeoutProvider");

var Subscriber = function (_super) {
  (0, _tslib.__extends)(Subscriber, _super);

  function Subscriber(destination) {
    var _this = _super.call(this) || this;

    _this.isStopped = false;

    if (destination) {
      _this.destination = destination;

      if ((0, _Subscription.isSubscription)(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = EMPTY_OBSERVER;
    }

    return _this;
  }

  Subscriber.create = function (next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  };

  Subscriber.prototype.next = function (value) {
    if (this.isStopped) {
      handleStoppedNotification((0, _NotificationFactories.nextNotification)(value), this);
    } else {
      this._next(value);
    }
  };

  Subscriber.prototype.error = function (err) {
    if (this.isStopped) {
      handleStoppedNotification((0, _NotificationFactories.errorNotification)(err), this);
    } else {
      this.isStopped = true;

      this._error(err);
    }
  };

  Subscriber.prototype.complete = function () {
    if (this.isStopped) {
      handleStoppedNotification(_NotificationFactories.COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;

      this._complete();
    }
  };

  Subscriber.prototype.unsubscribe = function () {
    if (!this.closed) {
      this.isStopped = true;

      _super.prototype.unsubscribe.call(this);

      this.destination = null;
    }
  };

  Subscriber.prototype._next = function (value) {
    this.destination.next(value);
  };

  Subscriber.prototype._error = function (err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };

  Subscriber.prototype._complete = function () {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };

  return Subscriber;
}(_Subscription.Subscription);

exports.Subscriber = Subscriber;

var SafeSubscriber = function (_super) {
  (0, _tslib.__extends)(SafeSubscriber, _super);

  function SafeSubscriber(observerOrNext, error, complete) {
    var _this = _super.call(this) || this;

    var next;

    if ((0, _isFunction.isFunction)(observerOrNext)) {
      next = observerOrNext;
    } else if (observerOrNext) {
      next = observerOrNext.next, error = observerOrNext.error, complete = observerOrNext.complete;
      var context_1;

      if (_this && _config.config.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);

        context_1.unsubscribe = function () {
          return _this.unsubscribe();
        };
      } else {
        context_1 = observerOrNext;
      }

      next = next === null || next === void 0 ? void 0 : next.bind(context_1);
      error = error === null || error === void 0 ? void 0 : error.bind(context_1);
      complete = complete === null || complete === void 0 ? void 0 : complete.bind(context_1);
    }

    _this.destination = {
      next: next ? wrapForErrorHandling(next, _this) : _noop.noop,
      error: wrapForErrorHandling(error !== null && error !== void 0 ? error : defaultErrorHandler, _this),
      complete: complete ? wrapForErrorHandling(complete, _this) : _noop.noop
    };
    return _this;
  }

  return SafeSubscriber;
}(Subscriber);

exports.SafeSubscriber = SafeSubscriber;

function wrapForErrorHandling(handler, instance) {
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    try {
      handler.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args)));
    } catch (err) {
      if (_config.config.useDeprecatedSynchronousErrorHandling) {
        if (instance._syncErrorHack_isSubscribing) {
          instance.__syncError = err;
        } else {
          throw err;
        }
      } else {
        (0, _reportUnhandledError.reportUnhandledError)(err);
      }
    }
  };
}

function defaultErrorHandler(err) {
  throw err;
}

function handleStoppedNotification(notification, subscriber) {
  var onStoppedNotification = _config.config.onStoppedNotification;
  onStoppedNotification && _timeoutProvider.timeoutProvider.setTimeout(function () {
    return onStoppedNotification(notification, subscriber);
  });
}

var EMPTY_OBSERVER = {
  closed: true,
  next: _noop.noop,
  error: defaultErrorHandler,
  complete: _noop.noop
};
exports.EMPTY_OBSERVER = EMPTY_OBSERVER;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./util/isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js","./Subscription":"../../node_modules/rxjs/dist/esm5/internal/Subscription.js","./config":"../../node_modules/rxjs/dist/esm5/internal/config.js","./util/reportUnhandledError":"../../node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js","./util/noop":"../../node_modules/rxjs/dist/esm5/internal/util/noop.js","./NotificationFactories":"../../node_modules/rxjs/dist/esm5/internal/NotificationFactories.js","./scheduler/timeoutProvider":"../../node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js"}],"../../node_modules/rxjs/dist/esm5/internal/symbol/observable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observable = void 0;

var observable = function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();

exports.observable = observable;
},{}],"../../node_modules/rxjs/dist/esm5/internal/util/identity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identity = identity;

function identity(x) {
  return x;
}
},{}],"../../node_modules/rxjs/dist/esm5/internal/util/pipe.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pipe = pipe;
exports.pipeFromArray = pipeFromArray;

var _identity = require("./identity");

function pipe() {
  var fns = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }

  return pipeFromArray(fns);
}

function pipeFromArray(fns) {
  if (fns.length === 0) {
    return _identity.identity;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return function piped(input) {
    return fns.reduce(function (prev, fn) {
      return fn(prev);
    }, input);
  };
}
},{"./identity":"../../node_modules/rxjs/dist/esm5/internal/util/identity.js"}],"../../node_modules/rxjs/dist/esm5/internal/Observable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Observable = void 0;

var _Subscriber = require("./Subscriber");

var _Subscription = require("./Subscription");

var _observable = require("./symbol/observable");

var _pipe = require("./util/pipe");

var _config = require("./config");

var _isFunction = require("./util/isFunction");

var Observable = function () {
  function Observable(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }

  Observable.prototype.lift = function (operator) {
    var observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  };

  Observable.prototype.subscribe = function (observerOrNext, error, complete) {
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new _Subscriber.SafeSubscriber(observerOrNext, error, complete);

    if (_config.config.useDeprecatedSynchronousErrorHandling) {
      this._deprecatedSyncErrorSubscribe(subscriber);
    } else {
      var _a = this,
          operator = _a.operator,
          source = _a.source;

      subscriber.add(operator ? operator.call(subscriber, source) : source ? this._subscribe(subscriber) : this._trySubscribe(subscriber));
    }

    return subscriber;
  };

  Observable.prototype._deprecatedSyncErrorSubscribe = function (subscriber) {
    var localSubscriber = subscriber;
    localSubscriber._syncErrorHack_isSubscribing = true;
    var operator = this.operator;

    if (operator) {
      subscriber.add(operator.call(subscriber, this.source));
    } else {
      try {
        subscriber.add(this._subscribe(subscriber));
      } catch (err) {
        localSubscriber.__syncError = err;
      }
    }

    var dest = localSubscriber;

    while (dest) {
      if ('__syncError' in dest) {
        try {
          throw dest.__syncError;
        } finally {
          subscriber.unsubscribe();
        }
      }

      dest = dest.destination;
    }

    localSubscriber._syncErrorHack_isSubscribing = false;
  };

  Observable.prototype._trySubscribe = function (sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };

  Observable.prototype.forEach = function (next, promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var subscription;
      subscription = _this.subscribe(function (value) {
        try {
          next(value);
        } catch (err) {
          reject(err);
          subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe();
        }
      }, reject, resolve);
    });
  };

  Observable.prototype._subscribe = function (subscriber) {
    var _a;

    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  };

  Observable.prototype[_observable.observable] = function () {
    return this;
  };

  Observable.prototype.pipe = function () {
    var operations = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }

    return operations.length ? (0, _pipe.pipeFromArray)(operations)(this) : this;
  };

  Observable.prototype.toPromise = function (promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var value;

      _this.subscribe(function (x) {
        return value = x;
      }, function (err) {
        return reject(err);
      }, function () {
        return resolve(value);
      });
    });
  };

  Observable.create = function (subscribe) {
    return new Observable(subscribe);
  };

  return Observable;
}();

exports.Observable = Observable;

function getPromiseCtor(promiseCtor) {
  var _a;

  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : _config.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}

function isObserver(value) {
  return value && (0, _isFunction.isFunction)(value.next) && (0, _isFunction.isFunction)(value.error) && (0, _isFunction.isFunction)(value.complete);
}

function isSubscriber(value) {
  return value && value instanceof _Subscriber.Subscriber || isObserver(value) && (0, _Subscription.isSubscription)(value);
}
},{"./Subscriber":"../../node_modules/rxjs/dist/esm5/internal/Subscriber.js","./Subscription":"../../node_modules/rxjs/dist/esm5/internal/Subscription.js","./symbol/observable":"../../node_modules/rxjs/dist/esm5/internal/symbol/observable.js","./util/pipe":"../../node_modules/rxjs/dist/esm5/internal/util/pipe.js","./config":"../../node_modules/rxjs/dist/esm5/internal/config.js","./util/isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/lift.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasLift = hasLift;
exports.operate = operate;

var _isFunction = require("./isFunction");

function hasLift(source) {
  return (0, _isFunction.isFunction)(source === null || source === void 0 ? void 0 : source.lift);
}

function operate(init) {
  return function (source) {
    if (hasLift(source)) {
      return source.lift(function (liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }

    throw new TypeError('Unable to lift unknown Observable type');
  };
}
},{"./isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OperatorSubscriber = void 0;

var _tslib = require("tslib");

var _Subscriber = require("../Subscriber");

var OperatorSubscriber = function (_super) {
  (0, _tslib.__extends)(OperatorSubscriber, _super);

  function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    var _this = _super.call(this, destination) || this;

    _this.onFinalize = onFinalize;
    _this._next = onNext ? function (value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : _super.prototype._next;
    _this._error = onError ? function (err) {
      try {
        onError(err);
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._error;
    _this._complete = onComplete ? function () {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._complete;
    return _this;
  }

  OperatorSubscriber.prototype.unsubscribe = function () {
    var _a;

    var closed = this.closed;

    _super.prototype.unsubscribe.call(this);

    !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
  };

  return OperatorSubscriber;
}(_Subscriber.Subscriber);

exports.OperatorSubscriber = OperatorSubscriber;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscriber":"../../node_modules/rxjs/dist/esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/refCount.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refCount = refCount;

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function refCount() {
  return (0, _lift.operate)(function (source, subscriber) {
    var connection = null;
    source._refCount++;
    var refCounter = new _OperatorSubscriber.OperatorSubscriber(subscriber, undefined, undefined, undefined, function () {
      if (!source || source._refCount <= 0 || 0 < --source._refCount) {
        connection = null;
        return;
      }

      var sharedConnection = source._connection;
      var conn = connection;
      connection = null;

      if (sharedConnection && (!conn || sharedConnection === conn)) {
        sharedConnection.unsubscribe();
      }

      subscriber.unsubscribe();
    });
    source.subscribe(refCounter);

    if (!refCounter.closed) {
      connection = source.connect();
    }
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectableObservable = void 0;

var _tslib = require("tslib");

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

var _refCount = require("../operators/refCount");

var _OperatorSubscriber = require("../operators/OperatorSubscriber");

var _lift = require("../util/lift");

var ConnectableObservable = function (_super) {
  (0, _tslib.__extends)(ConnectableObservable, _super);

  function ConnectableObservable(source, subjectFactory) {
    var _this = _super.call(this) || this;

    _this.source = source;
    _this.subjectFactory = subjectFactory;
    _this._subject = null;
    _this._refCount = 0;
    _this._connection = null;

    if ((0, _lift.hasLift)(source)) {
      _this.lift = source.lift;
    }

    return _this;
  }

  ConnectableObservable.prototype._subscribe = function (subscriber) {
    return this.getSubject().subscribe(subscriber);
  };

  ConnectableObservable.prototype.getSubject = function () {
    var subject = this._subject;

    if (!subject || subject.isStopped) {
      this._subject = this.subjectFactory();
    }

    return this._subject;
  };

  ConnectableObservable.prototype._teardown = function () {
    this._refCount = 0;
    var _connection = this._connection;
    this._subject = this._connection = null;
    _connection === null || _connection === void 0 ? void 0 : _connection.unsubscribe();
  };

  ConnectableObservable.prototype.connect = function () {
    var _this = this;

    var connection = this._connection;

    if (!connection) {
      connection = this._connection = new _Subscription.Subscription();
      var subject_1 = this.getSubject();
      connection.add(this.source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subject_1, undefined, function () {
        _this._teardown();

        subject_1.complete();
      }, function (err) {
        _this._teardown();

        subject_1.error(err);
      }, function () {
        return _this._teardown();
      })));

      if (connection.closed) {
        this._connection = null;
        connection = _Subscription.Subscription.EMPTY;
      }
    }

    return connection;
  };

  ConnectableObservable.prototype.refCount = function () {
    return (0, _refCount.refCount)()(this);
  };

  return ConnectableObservable;
}(_Observable.Observable);

exports.ConnectableObservable = ConnectableObservable;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","../Subscription":"../../node_modules/rxjs/dist/esm5/internal/Subscription.js","../operators/refCount":"../../node_modules/rxjs/dist/esm5/internal/operators/refCount.js","../operators/OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduler/performanceTimestampProvider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.performanceTimestampProvider = void 0;
var performanceTimestampProvider = {
  now: function () {
    return (performanceTimestampProvider.delegate || performance).now();
  },
  delegate: undefined
};
exports.performanceTimestampProvider = performanceTimestampProvider;
},{}],"../../node_modules/rxjs/dist/esm5/internal/scheduler/animationFrameProvider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationFrameProvider = void 0;

var _tslib = require("tslib");

var _Subscription = require("../Subscription");

var animationFrameProvider = {
  schedule: function (callback) {
    var request = requestAnimationFrame;
    var cancel = cancelAnimationFrame;
    var delegate = animationFrameProvider.delegate;

    if (delegate) {
      request = delegate.requestAnimationFrame;
      cancel = delegate.cancelAnimationFrame;
    }

    var handle = request(function (timestamp) {
      cancel = undefined;
      callback(timestamp);
    });
    return new _Subscription.Subscription(function () {
      return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
    });
  },
  requestAnimationFrame: function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var delegate = animationFrameProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args)));
  },
  cancelAnimationFrame: function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var delegate = animationFrameProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args)));
  },
  delegate: undefined
};
exports.animationFrameProvider = animationFrameProvider;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscription":"../../node_modules/rxjs/dist/esm5/internal/Subscription.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/dom/animationFrames.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationFrames = animationFrames;

var _Observable = require("../../Observable");

var _Subscription = require("../../Subscription");

var _performanceTimestampProvider = require("../../scheduler/performanceTimestampProvider");

var _animationFrameProvider = require("../../scheduler/animationFrameProvider");

function animationFrames(timestampProvider) {
  return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
}

function animationFramesFactory(timestampProvider) {
  var schedule = _animationFrameProvider.animationFrameProvider.schedule;
  return new _Observable.Observable(function (subscriber) {
    var subscription = new _Subscription.Subscription();
    var provider = timestampProvider || _performanceTimestampProvider.performanceTimestampProvider;
    var start = provider.now();

    var run = function (timestamp) {
      var now = provider.now();
      subscriber.next({
        timestamp: timestampProvider ? now : timestamp,
        elapsed: now - start
      });

      if (!subscriber.closed) {
        subscription.add(schedule(run));
      }
    };

    subscription.add(schedule(run));
    return subscription;
  });
}

var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();
},{"../../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","../../Subscription":"../../node_modules/rxjs/dist/esm5/internal/Subscription.js","../../scheduler/performanceTimestampProvider":"../../node_modules/rxjs/dist/esm5/internal/scheduler/performanceTimestampProvider.js","../../scheduler/animationFrameProvider":"../../node_modules/rxjs/dist/esm5/internal/scheduler/animationFrameProvider.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectUnsubscribedError = void 0;

var _createErrorClass = require("./createErrorClass");

var ObjectUnsubscribedError = (0, _createErrorClass.createErrorClass)(function (_super) {
  return function ObjectUnsubscribedErrorImpl() {
    _super(this);

    this.name = 'ObjectUnsubscribedError';
    this.message = 'object unsubscribed';
  };
});
exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
},{"./createErrorClass":"../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js"}],"../../node_modules/rxjs/dist/esm5/internal/Subject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnonymousSubject = exports.Subject = void 0;

var _tslib = require("tslib");

var _Observable = require("./Observable");

var _Subscription = require("./Subscription");

var _ObjectUnsubscribedError = require("./util/ObjectUnsubscribedError");

var _arrRemove = require("./util/arrRemove");

var Subject = function (_super) {
  (0, _tslib.__extends)(Subject, _super);

  function Subject() {
    var _this = _super.call(this) || this;

    _this.closed = false;
    _this.observers = [];
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }

  Subject.prototype.lift = function (operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };

  Subject.prototype._throwIfClosed = function () {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    }
  };

  Subject.prototype.next = function (value) {
    var e_1, _a;

    this._throwIfClosed();

    if (!this.isStopped) {
      var copy = this.observers.slice();

      try {
        for (var copy_1 = (0, _tslib.__values)(copy), copy_1_1 = copy_1.next(); !copy_1_1.done; copy_1_1 = copy_1.next()) {
          var observer = copy_1_1.value;
          observer.next(value);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (copy_1_1 && !copy_1_1.done && (_a = copy_1.return)) _a.call(copy_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }
  };

  Subject.prototype.error = function (err) {
    this._throwIfClosed();

    if (!this.isStopped) {
      this.hasError = this.isStopped = true;
      this.thrownError = err;
      var observers = this.observers;

      while (observers.length) {
        observers.shift().error(err);
      }
    }
  };

  Subject.prototype.complete = function () {
    this._throwIfClosed();

    if (!this.isStopped) {
      this.isStopped = true;
      var observers = this.observers;

      while (observers.length) {
        observers.shift().complete();
      }
    }
  };

  Subject.prototype.unsubscribe = function () {
    this.isStopped = this.closed = true;
    this.observers = null;
  };

  Object.defineProperty(Subject.prototype, "observed", {
    get: function () {
      var _a;

      return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
    },
    enumerable: false,
    configurable: true
  });

  Subject.prototype._trySubscribe = function (subscriber) {
    this._throwIfClosed();

    return _super.prototype._trySubscribe.call(this, subscriber);
  };

  Subject.prototype._subscribe = function (subscriber) {
    this._throwIfClosed();

    this._checkFinalizedStatuses(subscriber);

    return this._innerSubscribe(subscriber);
  };

  Subject.prototype._innerSubscribe = function (subscriber) {
    var _a = this,
        hasError = _a.hasError,
        isStopped = _a.isStopped,
        observers = _a.observers;

    return hasError || isStopped ? _Subscription.EMPTY_SUBSCRIPTION : (observers.push(subscriber), new _Subscription.Subscription(function () {
      return (0, _arrRemove.arrRemove)(observers, subscriber);
    }));
  };

  Subject.prototype._checkFinalizedStatuses = function (subscriber) {
    var _a = this,
        hasError = _a.hasError,
        thrownError = _a.thrownError,
        isStopped = _a.isStopped;

    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  };

  Subject.prototype.asObservable = function () {
    var observable = new _Observable.Observable();
    observable.source = this;
    return observable;
  };

  Subject.create = function (destination, source) {
    return new AnonymousSubject(destination, source);
  };

  return Subject;
}(_Observable.Observable);

exports.Subject = Subject;

var AnonymousSubject = function (_super) {
  (0, _tslib.__extends)(AnonymousSubject, _super);

  function AnonymousSubject(destination, source) {
    var _this = _super.call(this) || this;

    _this.destination = destination;
    _this.source = source;
    return _this;
  }

  AnonymousSubject.prototype.next = function (value) {
    var _a, _b;

    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  };

  AnonymousSubject.prototype.error = function (err) {
    var _a, _b;

    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  };

  AnonymousSubject.prototype.complete = function () {
    var _a, _b;

    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  };

  AnonymousSubject.prototype._subscribe = function (subscriber) {
    var _a, _b;

    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : _Subscription.EMPTY_SUBSCRIPTION;
  };

  return AnonymousSubject;
}(Subject);

exports.AnonymousSubject = AnonymousSubject;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","./Subscription":"../../node_modules/rxjs/dist/esm5/internal/Subscription.js","./util/ObjectUnsubscribedError":"../../node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js","./util/arrRemove":"../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js"}],"../../node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BehaviorSubject = void 0;

var _tslib = require("tslib");

var _Subject = require("./Subject");

var BehaviorSubject = function (_super) {
  (0, _tslib.__extends)(BehaviorSubject, _super);

  function BehaviorSubject(_value) {
    var _this = _super.call(this) || this;

    _this._value = _value;
    return _this;
  }

  Object.defineProperty(BehaviorSubject.prototype, "value", {
    get: function () {
      return this.getValue();
    },
    enumerable: false,
    configurable: true
  });

  BehaviorSubject.prototype._subscribe = function (subscriber) {
    var subscription = _super.prototype._subscribe.call(this, subscriber);

    !subscription.closed && subscriber.next(this._value);
    return subscription;
  };

  BehaviorSubject.prototype.getValue = function () {
    var _a = this,
        hasError = _a.hasError,
        thrownError = _a.thrownError,
        _value = _a._value;

    if (hasError) {
      throw thrownError;
    }

    this._throwIfClosed();

    return _value;
  };

  BehaviorSubject.prototype.next = function (value) {
    _super.prototype.next.call(this, this._value = value);
  };

  return BehaviorSubject;
}(_Subject.Subject);

exports.BehaviorSubject = BehaviorSubject;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./Subject":"../../node_modules/rxjs/dist/esm5/internal/Subject.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateTimestampProvider = void 0;
var dateTimestampProvider = {
  now: function () {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: undefined
};
exports.dateTimestampProvider = dateTimestampProvider;
},{}],"../../node_modules/rxjs/dist/esm5/internal/ReplaySubject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReplaySubject = void 0;

var _tslib = require("tslib");

var _Subject = require("./Subject");

var _dateTimestampProvider = require("./scheduler/dateTimestampProvider");

var ReplaySubject = function (_super) {
  (0, _tslib.__extends)(ReplaySubject, _super);

  function ReplaySubject(_bufferSize, _windowTime, _timestampProvider) {
    if (_bufferSize === void 0) {
      _bufferSize = Infinity;
    }

    if (_windowTime === void 0) {
      _windowTime = Infinity;
    }

    if (_timestampProvider === void 0) {
      _timestampProvider = _dateTimestampProvider.dateTimestampProvider;
    }

    var _this = _super.call(this) || this;

    _this._bufferSize = _bufferSize;
    _this._windowTime = _windowTime;
    _this._timestampProvider = _timestampProvider;
    _this._buffer = [];
    _this._infiniteTimeWindow = true;
    _this._infiniteTimeWindow = _windowTime === Infinity;
    _this._bufferSize = Math.max(1, _bufferSize);
    _this._windowTime = Math.max(1, _windowTime);
    return _this;
  }

  ReplaySubject.prototype.next = function (value) {
    var _a = this,
        isStopped = _a.isStopped,
        _buffer = _a._buffer,
        _infiniteTimeWindow = _a._infiniteTimeWindow,
        _timestampProvider = _a._timestampProvider,
        _windowTime = _a._windowTime;

    if (!isStopped) {
      _buffer.push(value);

      !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
    }

    this._trimBuffer();

    _super.prototype.next.call(this, value);
  };

  ReplaySubject.prototype._subscribe = function (subscriber) {
    this._throwIfClosed();

    this._trimBuffer();

    var subscription = this._innerSubscribe(subscriber);

    var _a = this,
        _infiniteTimeWindow = _a._infiniteTimeWindow,
        _buffer = _a._buffer;

    var copy = _buffer.slice();

    for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
      subscriber.next(copy[i]);
    }

    this._checkFinalizedStatuses(subscriber);

    return subscription;
  };

  ReplaySubject.prototype._trimBuffer = function () {
    var _a = this,
        _bufferSize = _a._bufferSize,
        _timestampProvider = _a._timestampProvider,
        _buffer = _a._buffer,
        _infiniteTimeWindow = _a._infiniteTimeWindow;

    var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
    _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);

    if (!_infiniteTimeWindow) {
      var now = _timestampProvider.now();

      var last = 0;

      for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
        last = i;
      }

      last && _buffer.splice(0, last + 1);
    }
  };

  return ReplaySubject;
}(_Subject.Subject);

exports.ReplaySubject = ReplaySubject;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./Subject":"../../node_modules/rxjs/dist/esm5/internal/Subject.js","./scheduler/dateTimestampProvider":"../../node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js"}],"../../node_modules/rxjs/dist/esm5/internal/AsyncSubject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncSubject = void 0;

var _tslib = require("tslib");

var _Subject = require("./Subject");

var AsyncSubject = function (_super) {
  (0, _tslib.__extends)(AsyncSubject, _super);

  function AsyncSubject() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._value = null;
    _this._hasValue = false;
    _this._isComplete = false;
    return _this;
  }

  AsyncSubject.prototype._checkFinalizedStatuses = function (subscriber) {
    var _a = this,
        hasError = _a.hasError,
        _hasValue = _a._hasValue,
        _value = _a._value,
        thrownError = _a.thrownError,
        isStopped = _a.isStopped;

    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      _hasValue && subscriber.next(_value);
      subscriber.complete();
    }
  };

  AsyncSubject.prototype.next = function (value) {
    if (!this.isStopped) {
      this._value = value;
      this._hasValue = true;
    }
  };

  AsyncSubject.prototype.complete = function () {
    var _a = this,
        _hasValue = _a._hasValue,
        _value = _a._value,
        _isComplete = _a._isComplete;

    if (!_isComplete) {
      this._isComplete = true;
      _hasValue && _super.prototype.next.call(this, _value);

      _super.prototype.complete.call(this);
    }
  };

  return AsyncSubject;
}(_Subject.Subject);

exports.AsyncSubject = AsyncSubject;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./Subject":"../../node_modules/rxjs/dist/esm5/internal/Subject.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduler/Action.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Action = void 0;

var _tslib = require("tslib");

var _Subscription = require("../Subscription");

var Action = function (_super) {
  (0, _tslib.__extends)(Action, _super);

  function Action(scheduler, work) {
    return _super.call(this) || this;
  }

  Action.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return this;
  };

  return Action;
}(_Subscription.Subscription);

exports.Action = Action;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscription":"../../node_modules/rxjs/dist/esm5/internal/Subscription.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intervalProvider = void 0;

var _tslib = require("tslib");

var intervalProvider = {
  setInterval: function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var delegate = intervalProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) || setInterval).apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args)));
  },
  clearInterval: function (handle) {
    var delegate = intervalProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: undefined
};
exports.intervalProvider = intervalProvider;
},{"tslib":"../../node_modules/tslib/tslib.es6.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncAction = void 0;

var _tslib = require("tslib");

var _Action = require("./Action");

var _intervalProvider = require("./intervalProvider");

var _arrRemove = require("../util/arrRemove");

var AsyncAction = function (_super) {
  (0, _tslib.__extends)(AsyncAction, _super);

  function AsyncAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }

  AsyncAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (this.closed) {
      return this;
    }

    this.state = state;
    var id = this.id;
    var scheduler = this.scheduler;

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }

    this.pending = true;
    this.delay = delay;
    this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
    return this;
  };

  AsyncAction.prototype.requestAsyncId = function (scheduler, _id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return _intervalProvider.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  };

  AsyncAction.prototype.recycleAsyncId = function (_scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }

    _intervalProvider.intervalProvider.clearInterval(id);

    return undefined;
  };

  AsyncAction.prototype.execute = function (state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }

    this.pending = false;

    var error = this._execute(state, delay);

    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };

  AsyncAction.prototype._execute = function (state, _delay) {
    var errored = false;
    var errorValue;

    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = !!e && e || new Error(e);
    }

    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };

  AsyncAction.prototype.unsubscribe = function () {
    if (!this.closed) {
      var _a = this,
          id = _a.id,
          scheduler = _a.scheduler;

      var actions = scheduler.actions;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0, _arrRemove.arrRemove)(actions, this);

      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }

      this.delay = null;

      _super.prototype.unsubscribe.call(this);
    }
  };

  return AsyncAction;
}(_Action.Action);

exports.AsyncAction = AsyncAction;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./Action":"../../node_modules/rxjs/dist/esm5/internal/scheduler/Action.js","./intervalProvider":"../../node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js","../util/arrRemove":"../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/Immediate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestTools = exports.Immediate = void 0;
var nextHandle = 1;
var resolved;
var activeHandles = {};

function findAndClearHandle(handle) {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }

  return false;
}

var Immediate = {
  setImmediate: function (cb) {
    var handle = nextHandle++;
    activeHandles[handle] = true;

    if (!resolved) {
      resolved = Promise.resolve();
    }

    resolved.then(function () {
      return findAndClearHandle(handle) && cb();
    });
    return handle;
  },
  clearImmediate: function (handle) {
    findAndClearHandle(handle);
  }
};
exports.Immediate = Immediate;
var TestTools = {
  pending: function () {
    return Object.keys(activeHandles).length;
  }
};
exports.TestTools = TestTools;
},{}],"../../node_modules/rxjs/dist/esm5/internal/scheduler/immediateProvider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.immediateProvider = void 0;

var _tslib = require("tslib");

var _Immediate = require("../util/Immediate");

var setImmediate = _Immediate.Immediate.setImmediate,
    clearImmediate = _Immediate.Immediate.clearImmediate;
var immediateProvider = {
  setImmediate: function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var delegate = immediateProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate).apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args)));
  },
  clearImmediate: function (handle) {
    var delegate = immediateProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
  },
  delegate: undefined
};
exports.immediateProvider = immediateProvider;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../util/Immediate":"../../node_modules/rxjs/dist/esm5/internal/util/Immediate.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduler/AsapAction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsapAction = void 0;

var _tslib = require("tslib");

var _AsyncAction = require("./AsyncAction");

var _immediateProvider = require("./immediateProvider");

var AsapAction = function (_super) {
  (0, _tslib.__extends)(AsapAction, _super);

  function AsapAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = _immediateProvider.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, undefined)));
  };

  AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay != null && delay > 0 || delay == null && this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
    }

    if (scheduler.actions.length === 0) {
      _immediateProvider.immediateProvider.clearImmediate(id);

      scheduler._scheduled = undefined;
    }

    return undefined;
  };

  return AsapAction;
}(_AsyncAction.AsyncAction);

exports.AsapAction = AsapAction;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./AsyncAction":"../../node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js","./immediateProvider":"../../node_modules/rxjs/dist/esm5/internal/scheduler/immediateProvider.js"}],"../../node_modules/rxjs/dist/esm5/internal/Scheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scheduler = void 0;

var _dateTimestampProvider = require("./scheduler/dateTimestampProvider");

var Scheduler = function () {
  function Scheduler(schedulerActionCtor, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }

    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }

  Scheduler.prototype.schedule = function (work, delay, state) {
    if (delay === void 0) {
      delay = 0;
    }

    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  };

  Scheduler.now = _dateTimestampProvider.dateTimestampProvider.now;
  return Scheduler;
}();

exports.Scheduler = Scheduler;
},{"./scheduler/dateTimestampProvider":"../../node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncScheduler = void 0;

var _tslib = require("tslib");

var _Scheduler = require("../Scheduler");

var AsyncScheduler = function (_super) {
  (0, _tslib.__extends)(AsyncScheduler, _super);

  function AsyncScheduler(SchedulerAction, now) {
    if (now === void 0) {
      now = _Scheduler.Scheduler.now;
    }

    var _this = _super.call(this, SchedulerAction, now) || this;

    _this.actions = [];
    _this._active = false;
    _this._scheduled = undefined;
    return _this;
  }

  AsyncScheduler.prototype.flush = function (action) {
    var actions = this.actions;

    if (this._active) {
      actions.push(action);
      return;
    }

    var error;
    this._active = true;

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());

    this._active = false;

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AsyncScheduler;
}(_Scheduler.Scheduler);

exports.AsyncScheduler = AsyncScheduler;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Scheduler":"../../node_modules/rxjs/dist/esm5/internal/Scheduler.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduler/AsapScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsapScheduler = void 0;

var _tslib = require("tslib");

var _AsyncScheduler = require("./AsyncScheduler");

var AsapScheduler = function (_super) {
  (0, _tslib.__extends)(AsapScheduler, _super);

  function AsapScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AsapScheduler.prototype.flush = function (action) {
    this._active = true;
    this._scheduled = undefined;
    var actions = this.actions;
    var error;
    var index = -1;
    action = action || actions.shift();
    var count = actions.length;

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (++index < count && (action = actions.shift()));

    this._active = false;

    if (error) {
      while (++index < count && (action = actions.shift())) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AsapScheduler;
}(_AsyncScheduler.AsyncScheduler);

exports.AsapScheduler = AsapScheduler;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./AsyncScheduler":"../../node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduler/asap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asap = exports.asapScheduler = void 0;

var _AsapAction = require("./AsapAction");

var _AsapScheduler = require("./AsapScheduler");

var asapScheduler = new _AsapScheduler.AsapScheduler(_AsapAction.AsapAction);
exports.asapScheduler = asapScheduler;
var asap = asapScheduler;
exports.asap = asap;
},{"./AsapAction":"../../node_modules/rxjs/dist/esm5/internal/scheduler/AsapAction.js","./AsapScheduler":"../../node_modules/rxjs/dist/esm5/internal/scheduler/AsapScheduler.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduler/async.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.async = exports.asyncScheduler = void 0;

var _AsyncAction = require("./AsyncAction");

var _AsyncScheduler = require("./AsyncScheduler");

var asyncScheduler = new _AsyncScheduler.AsyncScheduler(_AsyncAction.AsyncAction);
exports.asyncScheduler = asyncScheduler;
var async = asyncScheduler;
exports.async = async;
},{"./AsyncAction":"../../node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js","./AsyncScheduler":"../../node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduler/QueueAction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueueAction = void 0;

var _tslib = require("tslib");

var _AsyncAction = require("./AsyncAction");

var QueueAction = function (_super) {
  (0, _tslib.__extends)(QueueAction, _super);

  function QueueAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  QueueAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay > 0) {
      return _super.prototype.schedule.call(this, state, delay);
    }

    this.delay = delay;
    this.state = state;
    this.scheduler.flush(this);
    return this;
  };

  QueueAction.prototype.execute = function (state, delay) {
    return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
  };

  QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay != null && delay > 0 || delay == null && this.delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    return scheduler.flush(this);
  };

  return QueueAction;
}(_AsyncAction.AsyncAction);

exports.QueueAction = QueueAction;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./AsyncAction":"../../node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduler/QueueScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueueScheduler = void 0;

var _tslib = require("tslib");

var _AsyncScheduler = require("./AsyncScheduler");

var QueueScheduler = function (_super) {
  (0, _tslib.__extends)(QueueScheduler, _super);

  function QueueScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return QueueScheduler;
}(_AsyncScheduler.AsyncScheduler);

exports.QueueScheduler = QueueScheduler;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./AsyncScheduler":"../../node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduler/queue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queue = exports.queueScheduler = void 0;

var _QueueAction = require("./QueueAction");

var _QueueScheduler = require("./QueueScheduler");

var queueScheduler = new _QueueScheduler.QueueScheduler(_QueueAction.QueueAction);
exports.queueScheduler = queueScheduler;
var queue = queueScheduler;
exports.queue = queue;
},{"./QueueAction":"../../node_modules/rxjs/dist/esm5/internal/scheduler/QueueAction.js","./QueueScheduler":"../../node_modules/rxjs/dist/esm5/internal/scheduler/QueueScheduler.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameAction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationFrameAction = void 0;

var _tslib = require("tslib");

var _AsyncAction = require("./AsyncAction");

var _animationFrameProvider = require("./animationFrameProvider");

var AnimationFrameAction = function (_super) {
  (0, _tslib.__extends)(AnimationFrameAction, _super);

  function AnimationFrameAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = _animationFrameProvider.animationFrameProvider.requestAnimationFrame(function () {
      return scheduler.flush(undefined);
    }));
  };

  AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay != null && delay > 0 || delay == null && this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
    }

    if (scheduler.actions.length === 0) {
      _animationFrameProvider.animationFrameProvider.cancelAnimationFrame(id);

      scheduler._scheduled = undefined;
    }

    return undefined;
  };

  return AnimationFrameAction;
}(_AsyncAction.AsyncAction);

exports.AnimationFrameAction = AnimationFrameAction;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./AsyncAction":"../../node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js","./animationFrameProvider":"../../node_modules/rxjs/dist/esm5/internal/scheduler/animationFrameProvider.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationFrameScheduler = void 0;

var _tslib = require("tslib");

var _AsyncScheduler = require("./AsyncScheduler");

var AnimationFrameScheduler = function (_super) {
  (0, _tslib.__extends)(AnimationFrameScheduler, _super);

  function AnimationFrameScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AnimationFrameScheduler.prototype.flush = function (action) {
    this._active = true;
    this._scheduled = undefined;
    var actions = this.actions;
    var error;
    var index = -1;
    action = action || actions.shift();
    var count = actions.length;

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (++index < count && (action = actions.shift()));

    this._active = false;

    if (error) {
      while (++index < count && (action = actions.shift())) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AnimationFrameScheduler;
}(_AsyncScheduler.AsyncScheduler);

exports.AnimationFrameScheduler = AnimationFrameScheduler;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./AsyncScheduler":"../../node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationFrame = exports.animationFrameScheduler = void 0;

var _AnimationFrameAction = require("./AnimationFrameAction");

var _AnimationFrameScheduler = require("./AnimationFrameScheduler");

var animationFrameScheduler = new _AnimationFrameScheduler.AnimationFrameScheduler(_AnimationFrameAction.AnimationFrameAction);
exports.animationFrameScheduler = animationFrameScheduler;
var animationFrame = animationFrameScheduler;
exports.animationFrame = animationFrame;
},{"./AnimationFrameAction":"../../node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameAction.js","./AnimationFrameScheduler":"../../node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameScheduler.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduler/VirtualTimeScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VirtualAction = exports.VirtualTimeScheduler = void 0;

var _tslib = require("tslib");

var _AsyncAction = require("./AsyncAction");

var _Subscription = require("../Subscription");

var _AsyncScheduler = require("./AsyncScheduler");

var VirtualTimeScheduler = function (_super) {
  (0, _tslib.__extends)(VirtualTimeScheduler, _super);

  function VirtualTimeScheduler(schedulerActionCtor, maxFrames) {
    if (schedulerActionCtor === void 0) {
      schedulerActionCtor = VirtualAction;
    }

    if (maxFrames === void 0) {
      maxFrames = Infinity;
    }

    var _this = _super.call(this, schedulerActionCtor, function () {
      return _this.frame;
    }) || this;

    _this.maxFrames = maxFrames;
    _this.frame = 0;
    _this.index = -1;
    return _this;
  }

  VirtualTimeScheduler.prototype.flush = function () {
    var _a = this,
        actions = _a.actions,
        maxFrames = _a.maxFrames;

    var error;
    var action;

    while ((action = actions[0]) && action.delay <= maxFrames) {
      actions.shift();
      this.frame = action.delay;

      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    }

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  VirtualTimeScheduler.frameTimeFactor = 10;
  return VirtualTimeScheduler;
}(_AsyncScheduler.AsyncScheduler);

exports.VirtualTimeScheduler = VirtualTimeScheduler;

var VirtualAction = function (_super) {
  (0, _tslib.__extends)(VirtualAction, _super);

  function VirtualAction(scheduler, work, index) {
    if (index === void 0) {
      index = scheduler.index += 1;
    }

    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    _this.index = index;
    _this.active = true;
    _this.index = scheduler.index = index;
    return _this;
  }

  VirtualAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (Number.isFinite(delay)) {
      if (!this.id) {
        return _super.prototype.schedule.call(this, state, delay);
      }

      this.active = false;
      var action = new VirtualAction(this.scheduler, this.work);
      this.add(action);
      return action.schedule(state, delay);
    } else {
      return _Subscription.Subscription.EMPTY;
    }
  };

  VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    this.delay = scheduler.frame + delay;
    var actions = scheduler.actions;
    actions.push(this);
    actions.sort(VirtualAction.sortActions);
    return true;
  };

  VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return undefined;
  };

  VirtualAction.prototype._execute = function (state, delay) {
    if (this.active === true) {
      return _super.prototype._execute.call(this, state, delay);
    }
  };

  VirtualAction.sortActions = function (a, b) {
    if (a.delay === b.delay) {
      if (a.index === b.index) {
        return 0;
      } else if (a.index > b.index) {
        return 1;
      } else {
        return -1;
      }
    } else if (a.delay > b.delay) {
      return 1;
    } else {
      return -1;
    }
  };

  return VirtualAction;
}(_AsyncAction.AsyncAction);

exports.VirtualAction = VirtualAction;
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./AsyncAction":"../../node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js","../Subscription":"../../node_modules/rxjs/dist/esm5/internal/Subscription.js","./AsyncScheduler":"../../node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/empty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.EMPTY = void 0;

var _Observable = require("../Observable");

var EMPTY = new _Observable.Observable(function (subscriber) {
  return subscriber.complete();
});
exports.EMPTY = EMPTY;

function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}

function emptyScheduled(scheduler) {
  return new _Observable.Observable(function (subscriber) {
    return scheduler.schedule(function () {
      return subscriber.complete();
    });
  });
}
},{"../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduleArray = scheduleArray;

var _Observable = require("../Observable");

function scheduleArray(input, scheduler) {
  return new _Observable.Observable(function (subscriber) {
    var i = 0;
    return scheduler.schedule(function () {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);

        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}
},{"../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrayLike = void 0;

var isArrayLike = function (x) {
  return x && typeof x.length === 'number' && typeof x !== 'function';
};

exports.isArrayLike = isArrayLike;
},{}],"../../node_modules/rxjs/dist/esm5/internal/util/isPromise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPromise = isPromise;

var _isFunction = require("./isFunction");

function isPromise(value) {
  return (0, _isFunction.isFunction)(value === null || value === void 0 ? void 0 : value.then);
}
},{"./isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduleObservable = scheduleObservable;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

var _observable = require("../symbol/observable");

function scheduleObservable(input, scheduler) {
  return new _Observable.Observable(function (subscriber) {
    var sub = new _Subscription.Subscription();
    sub.add(scheduler.schedule(function () {
      var observable = input[_observable.observable]();

      sub.add(observable.subscribe({
        next: function (value) {
          sub.add(scheduler.schedule(function () {
            return subscriber.next(value);
          }));
        },
        error: function (err) {
          sub.add(scheduler.schedule(function () {
            return subscriber.error(err);
          }));
        },
        complete: function () {
          sub.add(scheduler.schedule(function () {
            return subscriber.complete();
          }));
        }
      }));
    }));
    return sub;
  });
}
},{"../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","../Subscription":"../../node_modules/rxjs/dist/esm5/internal/Subscription.js","../symbol/observable":"../../node_modules/rxjs/dist/esm5/internal/symbol/observable.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schedulePromise = schedulePromise;

var _Observable = require("../Observable");

function schedulePromise(input, scheduler) {
  return new _Observable.Observable(function (subscriber) {
    return scheduler.schedule(function () {
      return input.then(function (value) {
        subscriber.add(scheduler.schedule(function () {
          subscriber.next(value);
          subscriber.add(scheduler.schedule(function () {
            return subscriber.complete();
          }));
        }));
      }, function (err) {
        subscriber.add(scheduler.schedule(function () {
          return subscriber.error(err);
        }));
      });
    });
  });
}
},{"../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js"}],"../../node_modules/rxjs/dist/esm5/internal/symbol/iterator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSymbolIterator = getSymbolIterator;
exports.iterator = void 0;

function getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }

  return Symbol.iterator;
}

var iterator = getSymbolIterator();
exports.iterator = iterator;
},{}],"../../node_modules/rxjs/dist/esm5/internal/util/caughtSchedule.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.caughtSchedule = caughtSchedule;

function caughtSchedule(subscriber, scheduler, execute, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  var subscription = scheduler.schedule(function () {
    try {
      execute.call(this);
    } catch (err) {
      subscriber.error(err);
    }
  }, delay);
  subscriber.add(subscription);
  return subscription;
}
},{}],"../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduleIterable = scheduleIterable;

var _Observable = require("../Observable");

var _iterator = require("../symbol/iterator");

var _isFunction = require("../util/isFunction");

var _caughtSchedule = require("../util/caughtSchedule");

function scheduleIterable(input, scheduler) {
  return new _Observable.Observable(function (subscriber) {
    var iterator;
    subscriber.add(scheduler.schedule(function () {
      iterator = input[_iterator.iterator]();
      (0, _caughtSchedule.caughtSchedule)(subscriber, scheduler, function () {
        var _a = iterator.next(),
            value = _a.value,
            done = _a.done;

        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
          this.schedule();
        }
      });
    }));
    return function () {
      return (0, _isFunction.isFunction)(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
    };
  });
}
},{"../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","../symbol/iterator":"../../node_modules/rxjs/dist/esm5/internal/symbol/iterator.js","../util/isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js","../util/caughtSchedule":"../../node_modules/rxjs/dist/esm5/internal/util/caughtSchedule.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduleAsyncIterable = scheduleAsyncIterable;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error('Iterable cannot be null');
  }

  return new _Observable.Observable(function (subscriber) {
    var sub = new _Subscription.Subscription();
    sub.add(scheduler.schedule(function () {
      var iterator = input[Symbol.asyncIterator]();
      sub.add(scheduler.schedule(function () {
        var _this = this;

        iterator.next().then(function (result) {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);

            _this.schedule();
          }
        });
      }));
    }));
    return sub;
  });
}
},{"../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","../Subscription":"../../node_modules/rxjs/dist/esm5/internal/Subscription.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInteropObservable = isInteropObservable;

var _observable = require("../symbol/observable");

var _isFunction = require("./isFunction");

function isInteropObservable(input) {
  return (0, _isFunction.isFunction)(input[_observable.observable]);
}
},{"../symbol/observable":"../../node_modules/rxjs/dist/esm5/internal/symbol/observable.js","./isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/isIterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIterable = isIterable;

var _iterator = require("../symbol/iterator");

var _isFunction = require("./isFunction");

function isIterable(input) {
  return (0, _isFunction.isFunction)(input === null || input === void 0 ? void 0 : input[_iterator.iterator]);
}
},{"../symbol/iterator":"../../node_modules/rxjs/dist/esm5/internal/symbol/iterator.js","./isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAsyncIterable = isAsyncIterable;

var _isFunction = require("./isFunction");

function isAsyncIterable(obj) {
  return Symbol.asyncIterator && (0, _isFunction.isFunction)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
},{"./isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInvalidObservableTypeError = createInvalidObservableTypeError;

function createInvalidObservableTypeError(input) {
  return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
},{}],"../../node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readableStreamLikeToAsyncGenerator = readableStreamLikeToAsyncGenerator;
exports.isReadableStreamLike = isReadableStreamLike;

var _tslib = require("tslib");

var _isFunction = require("./isFunction");

function readableStreamLikeToAsyncGenerator(readableStream) {
  return (0, _tslib.__asyncGenerator)(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
    var reader, _a, value, done;

    return (0, _tslib.__generator)(this, function (_b) {
      switch (_b.label) {
        case 0:
          reader = readableStream.getReader();
          _b.label = 1;

        case 1:
          _b.trys.push([1,, 9, 10]);

          _b.label = 2;

        case 2:
          if (!true) return [3, 8];
          return [4, (0, _tslib.__await)(reader.read())];

        case 3:
          _a = _b.sent(), value = _a.value, done = _a.done;
          if (!done) return [3, 5];
          return [4, (0, _tslib.__await)(void 0)];

        case 4:
          return [2, _b.sent()];

        case 5:
          return [4, (0, _tslib.__await)(value)];

        case 6:
          return [4, _b.sent()];

        case 7:
          _b.sent();

          return [3, 2];

        case 8:
          return [3, 10];

        case 9:
          reader.releaseLock();
          return [7];

        case 10:
          return [2];
      }
    });
  });
}

function isReadableStreamLike(obj) {
  return (0, _isFunction.isFunction)(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduleReadableStreamLike = scheduleReadableStreamLike;

var _scheduleAsyncIterable = require("./scheduleAsyncIterable");

var _isReadableStreamLike = require("../util/isReadableStreamLike");

function scheduleReadableStreamLike(input, scheduler) {
  return (0, _scheduleAsyncIterable.scheduleAsyncIterable)((0, _isReadableStreamLike.readableStreamLikeToAsyncGenerator)(input), scheduler);
}
},{"./scheduleAsyncIterable":"../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js","../util/isReadableStreamLike":"../../node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js"}],"../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduled = scheduled;

var _scheduleObservable = require("./scheduleObservable");

var _schedulePromise = require("./schedulePromise");

var _scheduleArray = require("./scheduleArray");

var _scheduleIterable = require("./scheduleIterable");

var _scheduleAsyncIterable = require("./scheduleAsyncIterable");

var _isInteropObservable = require("../util/isInteropObservable");

var _isPromise = require("../util/isPromise");

var _isArrayLike = require("../util/isArrayLike");

var _isIterable = require("../util/isIterable");

var _isAsyncIterable = require("../util/isAsyncIterable");

var _throwUnobservableError = require("../util/throwUnobservableError");

var _isReadableStreamLike = require("../util/isReadableStreamLike");

var _scheduleReadableStreamLike = require("./scheduleReadableStreamLike");

function scheduled(input, scheduler) {
  if (input != null) {
    if ((0, _isInteropObservable.isInteropObservable)(input)) {
      return (0, _scheduleObservable.scheduleObservable)(input, scheduler);
    }

    if ((0, _isArrayLike.isArrayLike)(input)) {
      return (0, _scheduleArray.scheduleArray)(input, scheduler);
    }

    if ((0, _isPromise.isPromise)(input)) {
      return (0, _schedulePromise.schedulePromise)(input, scheduler);
    }

    if ((0, _isAsyncIterable.isAsyncIterable)(input)) {
      return (0, _scheduleAsyncIterable.scheduleAsyncIterable)(input, scheduler);
    }

    if ((0, _isIterable.isIterable)(input)) {
      return (0, _scheduleIterable.scheduleIterable)(input, scheduler);
    }

    if ((0, _isReadableStreamLike.isReadableStreamLike)(input)) {
      return (0, _scheduleReadableStreamLike.scheduleReadableStreamLike)(input, scheduler);
    }
  }

  throw (0, _throwUnobservableError.createInvalidObservableTypeError)(input);
}
},{"./scheduleObservable":"../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js","./schedulePromise":"../../node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js","./scheduleArray":"../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js","./scheduleIterable":"../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js","./scheduleAsyncIterable":"../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js","../util/isInteropObservable":"../../node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js","../util/isPromise":"../../node_modules/rxjs/dist/esm5/internal/util/isPromise.js","../util/isArrayLike":"../../node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js","../util/isIterable":"../../node_modules/rxjs/dist/esm5/internal/util/isIterable.js","../util/isAsyncIterable":"../../node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js","../util/throwUnobservableError":"../../node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js","../util/isReadableStreamLike":"../../node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js","./scheduleReadableStreamLike":"../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js"}],"../../node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../../node_modules/rxjs/dist/esm5/internal/observable/from.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.from = from;
exports.innerFrom = innerFrom;
exports.fromArrayLike = fromArrayLike;

var _tslib = require("tslib");

var _isArrayLike = require("../util/isArrayLike");

var _isPromise = require("../util/isPromise");

var _observable = require("../symbol/observable");

var _Observable = require("../Observable");

var _scheduled = require("../scheduled/scheduled");

var _isFunction = require("../util/isFunction");

var _reportUnhandledError = require("../util/reportUnhandledError");

var _isInteropObservable = require("../util/isInteropObservable");

var _isAsyncIterable = require("../util/isAsyncIterable");

var _throwUnobservableError = require("../util/throwUnobservableError");

var _isIterable = require("../util/isIterable");

var _isReadableStreamLike = require("../util/isReadableStreamLike");

function from(input, scheduler) {
  return scheduler ? (0, _scheduled.scheduled)(input, scheduler) : innerFrom(input);
}

function innerFrom(input) {
  if (input instanceof _Observable.Observable) {
    return input;
  }

  if (input != null) {
    if ((0, _isInteropObservable.isInteropObservable)(input)) {
      return fromInteropObservable(input);
    }

    if ((0, _isArrayLike.isArrayLike)(input)) {
      return fromArrayLike(input);
    }

    if ((0, _isPromise.isPromise)(input)) {
      return fromPromise(input);
    }

    if ((0, _isAsyncIterable.isAsyncIterable)(input)) {
      return fromAsyncIterable(input);
    }

    if ((0, _isIterable.isIterable)(input)) {
      return fromIterable(input);
    }

    if ((0, _isReadableStreamLike.isReadableStreamLike)(input)) {
      return fromReadableStreamLike(input);
    }
  }

  throw (0, _throwUnobservableError.createInvalidObservableTypeError)(input);
}

function fromInteropObservable(obj) {
  return new _Observable.Observable(function (subscriber) {
    var obs = obj[_observable.observable]();

    if ((0, _isFunction.isFunction)(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }

    throw new TypeError('Provided object does not correctly implement Symbol.observable');
  });
}

function fromArrayLike(array) {
  return new _Observable.Observable(function (subscriber) {
    for (var i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }

    subscriber.complete();
  });
}

function fromPromise(promise) {
  return new _Observable.Observable(function (subscriber) {
    promise.then(function (value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function (err) {
      return subscriber.error(err);
    }).then(null, _reportUnhandledError.reportUnhandledError);
  });
}

function fromIterable(iterable) {
  return new _Observable.Observable(function (subscriber) {
    var e_1, _a;

    try {
      for (var iterable_1 = (0, _tslib.__values)(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
        var value = iterable_1_1.value;
        subscriber.next(value);

        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    subscriber.complete();
  });
}

function fromAsyncIterable(asyncIterable) {
  return new _Observable.Observable(function (subscriber) {
    process(asyncIterable, subscriber).catch(function (err) {
      return subscriber.error(err);
    });
  });
}

function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable((0, _isReadableStreamLike.readableStreamLikeToAsyncGenerator)(readableStream));
}

function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;

  var e_2, _a;

  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var value, e_2_1;
    return (0, _tslib.__generator)(this, function (_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 5, 6, 11]);

          asyncIterable_1 = (0, _tslib.__asyncValues)(asyncIterable);
          _b.label = 1;

        case 1:
          return [4, asyncIterable_1.next()];

        case 2:
          if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
          value = asyncIterable_1_1.value;
          subscriber.next(value);

          if (subscriber.closed) {
            return [2];
          }

          _b.label = 3;

        case 3:
          return [3, 1];

        case 4:
          return [3, 11];

        case 5:
          e_2_1 = _b.sent();
          e_2 = {
            error: e_2_1
          };
          return [3, 11];

        case 6:
          _b.trys.push([6,, 9, 10]);

          if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
          return [4, _a.call(asyncIterable_1)];

        case 7:
          _b.sent();

          _b.label = 8;

        case 8:
          return [3, 10];

        case 9:
          if (e_2) throw e_2.error;
          return [7];

        case 10:
          return [7];

        case 11:
          subscriber.complete();
          return [2];
      }
    });
  });
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../util/isArrayLike":"../../node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js","../util/isPromise":"../../node_modules/rxjs/dist/esm5/internal/util/isPromise.js","../symbol/observable":"../../node_modules/rxjs/dist/esm5/internal/symbol/observable.js","../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","../scheduled/scheduled":"../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js","../util/isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js","../util/reportUnhandledError":"../../node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js","../util/isInteropObservable":"../../node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js","../util/isAsyncIterable":"../../node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js","../util/throwUnobservableError":"../../node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js","../util/isIterable":"../../node_modules/rxjs/dist/esm5/internal/util/isIterable.js","../util/isReadableStreamLike":"../../node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js","process":"../../node_modules/process/browser.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/fromArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.internalFromArray = internalFromArray;

var _scheduleArray = require("../scheduled/scheduleArray");

var _from = require("./from");

function internalFromArray(input, scheduler) {
  return scheduler ? (0, _scheduleArray.scheduleArray)(input, scheduler) : (0, _from.fromArrayLike)(input);
}
},{"../scheduled/scheduleArray":"../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js","./from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/isScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isScheduler = isScheduler;

var _isFunction = require("./isFunction");

function isScheduler(value) {
  return value && (0, _isFunction.isFunction)(value.schedule);
}
},{"./isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/args.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popResultSelector = popResultSelector;
exports.popScheduler = popScheduler;
exports.popNumber = popNumber;

var _isFunction = require("./isFunction");

var _isScheduler = require("./isScheduler");

function last(arr) {
  return arr[arr.length - 1];
}

function popResultSelector(args) {
  return (0, _isFunction.isFunction)(last(args)) ? args.pop() : undefined;
}

function popScheduler(args) {
  return (0, _isScheduler.isScheduler)(last(args)) ? args.pop() : undefined;
}

function popNumber(args, defaultValue) {
  return typeof last(args) === 'number' ? args.pop() : defaultValue;
}
},{"./isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js","./isScheduler":"../../node_modules/rxjs/dist/esm5/internal/util/isScheduler.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/of.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.of = of;

var _fromArray = require("./fromArray");

var _scheduleArray = require("../scheduled/scheduleArray");

var _args = require("../util/args");

function of() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var scheduler = (0, _args.popScheduler)(args);
  return scheduler ? (0, _scheduleArray.scheduleArray)(args, scheduler) : (0, _fromArray.internalFromArray)(args);
}
},{"./fromArray":"../../node_modules/rxjs/dist/esm5/internal/observable/fromArray.js","../scheduled/scheduleArray":"../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js","../util/args":"../../node_modules/rxjs/dist/esm5/internal/util/args.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/throwError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throwError = throwError;

var _Observable = require("../Observable");

var _isFunction = require("../util/isFunction");

function throwError(errorOrErrorFactory, scheduler) {
  var errorFactory = (0, _isFunction.isFunction)(errorOrErrorFactory) ? errorOrErrorFactory : function () {
    return errorOrErrorFactory;
  };

  var init = function (subscriber) {
    return subscriber.error(errorFactory());
  };

  return new _Observable.Observable(scheduler ? function (subscriber) {
    return scheduler.schedule(init, 0, subscriber);
  } : init);
}
},{"../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","../util/isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js"}],"../../node_modules/rxjs/dist/esm5/internal/Notification.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observeNotification = observeNotification;
exports.Notification = exports.NotificationKind = void 0;

var _empty = require("./observable/empty");

var _of = require("./observable/of");

var _throwError = require("./observable/throwError");

var _isFunction = require("./util/isFunction");

var NotificationKind;
exports.NotificationKind = NotificationKind;

(function (NotificationKind) {
  NotificationKind["NEXT"] = "N";
  NotificationKind["ERROR"] = "E";
  NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (exports.NotificationKind = NotificationKind = {}));

var Notification = function () {
  function Notification(kind, value, error) {
    this.kind = kind;
    this.value = value;
    this.error = error;
    this.hasValue = kind === 'N';
  }

  Notification.prototype.observe = function (observer) {
    return observeNotification(this, observer);
  };

  Notification.prototype.do = function (nextHandler, errorHandler, completeHandler) {
    var _a = this,
        kind = _a.kind,
        value = _a.value,
        error = _a.error;

    return kind === 'N' ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === 'E' ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
  };

  Notification.prototype.accept = function (nextOrObserver, error, complete) {
    var _a;

    return (0, _isFunction.isFunction)((_a = nextOrObserver) === null || _a === void 0 ? void 0 : _a.next) ? this.observe(nextOrObserver) : this.do(nextOrObserver, error, complete);
  };

  Notification.prototype.toObservable = function () {
    var _a = this,
        kind = _a.kind,
        value = _a.value,
        error = _a.error;

    var result = kind === 'N' ? (0, _of.of)(value) : kind === 'E' ? (0, _throwError.throwError)(function () {
      return error;
    }) : kind === 'C' ? _empty.EMPTY : 0;

    if (!result) {
      throw new TypeError("Unexpected notification kind " + kind);
    }

    return result;
  };

  Notification.createNext = function (value) {
    return new Notification('N', value);
  };

  Notification.createError = function (err) {
    return new Notification('E', undefined, err);
  };

  Notification.createComplete = function () {
    return Notification.completeNotification;
  };

  Notification.completeNotification = new Notification('C');
  return Notification;
}();

exports.Notification = Notification;

function observeNotification(notification, observer) {
  var _a, _b, _c;

  var _d = notification,
      kind = _d.kind,
      value = _d.value,
      error = _d.error;

  if (typeof kind !== 'string') {
    throw new TypeError('Invalid notification, missing "kind"');
  }

  kind === 'N' ? (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, value) : kind === 'E' ? (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, error) : (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
}
},{"./observable/empty":"../../node_modules/rxjs/dist/esm5/internal/observable/empty.js","./observable/of":"../../node_modules/rxjs/dist/esm5/internal/observable/of.js","./observable/throwError":"../../node_modules/rxjs/dist/esm5/internal/observable/throwError.js","./util/isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/isObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObservable = isObservable;

var _Observable = require("../Observable");

var _isFunction = require("./isFunction");

function isObservable(obj) {
  return !!obj && (obj instanceof _Observable.Observable || (0, _isFunction.isFunction)(obj.lift) && (0, _isFunction.isFunction)(obj.subscribe));
}
},{"../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","./isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/EmptyError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyError = void 0;

var _createErrorClass = require("./createErrorClass");

var EmptyError = (0, _createErrorClass.createErrorClass)(function (_super) {
  return function EmptyErrorImpl() {
    _super(this);

    this.name = 'EmptyError';
    this.message = 'no elements in sequence';
  };
});
exports.EmptyError = EmptyError;
},{"./createErrorClass":"../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js"}],"../../node_modules/rxjs/dist/esm5/internal/lastValueFrom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lastValueFrom = lastValueFrom;

var _EmptyError = require("./util/EmptyError");

function lastValueFrom(source, config) {
  var hasConfig = typeof config === 'object';
  return new Promise(function (resolve, reject) {
    var _hasValue = false;

    var _value;

    source.subscribe({
      next: function (value) {
        _value = value;
        _hasValue = true;
      },
      error: reject,
      complete: function () {
        if (_hasValue) {
          resolve(_value);
        } else if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _EmptyError.EmptyError());
        }
      }
    });
  });
}
},{"./util/EmptyError":"../../node_modules/rxjs/dist/esm5/internal/util/EmptyError.js"}],"../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firstValueFrom = firstValueFrom;

var _EmptyError = require("./util/EmptyError");

var _Subscriber = require("./Subscriber");

function firstValueFrom(source, config) {
  var hasConfig = typeof config === 'object';
  return new Promise(function (resolve, reject) {
    var subscriber = new _Subscriber.SafeSubscriber({
      next: function (value) {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: function () {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _EmptyError.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}
},{"./util/EmptyError":"../../node_modules/rxjs/dist/esm5/internal/util/EmptyError.js","./Subscriber":"../../node_modules/rxjs/dist/esm5/internal/Subscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/ArgumentOutOfRangeError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArgumentOutOfRangeError = void 0;

var _createErrorClass = require("./createErrorClass");

var ArgumentOutOfRangeError = (0, _createErrorClass.createErrorClass)(function (_super) {
  return function ArgumentOutOfRangeErrorImpl() {
    _super(this);

    this.name = 'ArgumentOutOfRangeError';
    this.message = 'argument out of range';
  };
});
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
},{"./createErrorClass":"../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/NotFoundError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFoundError = void 0;

var _createErrorClass = require("./createErrorClass");

var NotFoundError = (0, _createErrorClass.createErrorClass)(function (_super) {
  return function NotFoundErrorImpl(message) {
    _super(this);

    this.name = 'NotFoundError';
    this.message = message;
  };
});
exports.NotFoundError = NotFoundError;
},{"./createErrorClass":"../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/SequenceError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SequenceError = void 0;

var _createErrorClass = require("./createErrorClass");

var SequenceError = (0, _createErrorClass.createErrorClass)(function (_super) {
  return function SequenceErrorImpl(message) {
    _super(this);

    this.name = 'SequenceError';
    this.message = message;
  };
});
exports.SequenceError = SequenceError;
},{"./createErrorClass":"../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/isDate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidDate = isValidDate;

function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}
},{}],"../../node_modules/rxjs/dist/esm5/internal/operators/timeout.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeout = timeout;
exports.TimeoutError = void 0;

var _async = require("../scheduler/async");

var _isDate = require("../util/isDate");

var _lift = require("../util/lift");

var _from = require("../observable/from");

var _createErrorClass = require("../util/createErrorClass");

var _caughtSchedule = require("../util/caughtSchedule");

var _OperatorSubscriber = require("./OperatorSubscriber");

var TimeoutError = (0, _createErrorClass.createErrorClass)(function (_super) {
  return function TimeoutErrorImpl(info) {
    if (info === void 0) {
      info = null;
    }

    _super(this);

    this.message = 'Timeout has occurred';
    this.name = 'TimeoutError';
    this.info = info;
  };
});
exports.TimeoutError = TimeoutError;

function timeout(config, schedulerArg) {
  var _a = (0, _isDate.isValidDate)(config) ? {
    first: config
  } : typeof config === 'number' ? {
    each: config
  } : config,
      first = _a.first,
      each = _a.each,
      _b = _a.with,
      _with = _b === void 0 ? timeoutErrorFactory : _b,
      _c = _a.scheduler,
      scheduler = _c === void 0 ? schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : _async.asyncScheduler : _c,
      _d = _a.meta,
      meta = _d === void 0 ? null : _d;

  if (first == null && each == null) {
    throw new TypeError('No timeout provided.');
  }

  return (0, _lift.operate)(function (source, subscriber) {
    var originalSourceSubscription;
    var timerSubscription;
    var lastValue = null;
    var seen = 0;

    var startTimer = function (delay) {
      timerSubscription = (0, _caughtSchedule.caughtSchedule)(subscriber, scheduler, function () {
        originalSourceSubscription.unsubscribe();
        (0, _from.innerFrom)(_with({
          meta: meta,
          lastValue: lastValue,
          seen: seen
        })).subscribe(subscriber);
      }, delay);
    };

    originalSourceSubscription = source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
      seen++;
      subscriber.next(lastValue = value);
      each > 0 && startTimer(each);
    }, undefined, undefined, function () {
      if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) {
        timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
      }

      lastValue = null;
    }));
    startTimer(first != null ? typeof first === 'number' ? first : +first - scheduler.now() : each);
  });
}

function timeoutErrorFactory(info) {
  throw new TimeoutError(info);
}
},{"../scheduler/async":"../../node_modules/rxjs/dist/esm5/internal/scheduler/async.js","../util/isDate":"../../node_modules/rxjs/dist/esm5/internal/util/isDate.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","../util/createErrorClass":"../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js","../util/caughtSchedule":"../../node_modules/rxjs/dist/esm5/internal/util/caughtSchedule.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeOn = subscribeOn;

var _lift = require("../util/lift");

function subscribeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return (0, _lift.operate)(function (source, subscriber) {
    subscriber.add(scheduler.schedule(function () {
      return source.subscribe(subscriber);
    }, delay));
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function map(project, thisArg) {
  return (0, _lift.operate)(function (source, subscriber) {
    var index = 0;
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapOneOrManyArgs = mapOneOrManyArgs;

var _tslib = require("tslib");

var _map = require("../operators/map");

var isArray = Array.isArray;

function callOrApply(fn, args) {
  return isArray(args) ? fn.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args))) : fn(args);
}

function mapOneOrManyArgs(fn) {
  return (0, _map.map)(function (args) {
    return callOrApply(fn, args);
  });
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../operators/map":"../../node_modules/rxjs/dist/esm5/internal/operators/map.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/observeOn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observeOn = observeOn;

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function observeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return (0, _lift.operate)(function (source, subscriber) {
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      return subscriber.add(scheduler.schedule(function () {
        return subscriber.next(value);
      }, delay));
    }, function () {
      return subscriber.add(scheduler.schedule(function () {
        return subscriber.complete();
      }, delay));
    }, function (err) {
      return subscriber.add(scheduler.schedule(function () {
        return subscriber.error(err);
      }, delay));
    }));
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/bindCallbackInternals.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindCallbackInternals = bindCallbackInternals;

var _tslib = require("tslib");

var _isScheduler = require("../util/isScheduler");

var _Observable = require("../Observable");

var _subscribeOn = require("../operators/subscribeOn");

var _mapOneOrManyArgs = require("../util/mapOneOrManyArgs");

var _observeOn = require("../operators/observeOn");

var _AsyncSubject = require("../AsyncSubject");

function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if ((0, _isScheduler.isScheduler)(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler).apply(this, args).pipe((0, _mapOneOrManyArgs.mapOneOrManyArgs)(resultSelector));
      };
    }
  }

  if (scheduler) {
    return function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return bindCallbackInternals(isNodeStyle, callbackFunc).apply(this, args).pipe((0, _subscribeOn.subscribeOn)(scheduler), (0, _observeOn.observeOn)(scheduler));
    };
  }

  return function () {
    var _this = this;

    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var subject = new _AsyncSubject.AsyncSubject();
    var uninitialized = true;
    return new _Observable.Observable(function (subscriber) {
      var subs = subject.subscribe(subscriber);

      if (uninitialized) {
        uninitialized = false;
        var isAsync_1 = false;
        var isComplete_1 = false;
        callbackFunc.apply(_this, (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], (0, _tslib.__read)(args)), [function () {
          var results = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            results[_i] = arguments[_i];
          }

          if (isNodeStyle) {
            var err = results.shift();

            if (err != null) {
              subject.error(err);
              return;
            }
          }

          subject.next(1 < results.length ? results : results[0]);
          isComplete_1 = true;

          if (isAsync_1) {
            subject.complete();
          }
        }]));

        if (isComplete_1) {
          subject.complete();
        }

        isAsync_1 = true;
      }

      return subs;
    });
  };
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../util/isScheduler":"../../node_modules/rxjs/dist/esm5/internal/util/isScheduler.js","../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","../operators/subscribeOn":"../../node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js","../util/mapOneOrManyArgs":"../../node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js","../operators/observeOn":"../../node_modules/rxjs/dist/esm5/internal/operators/observeOn.js","../AsyncSubject":"../../node_modules/rxjs/dist/esm5/internal/AsyncSubject.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/bindCallback.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindCallback = bindCallback;

var _bindCallbackInternals = require("./bindCallbackInternals");

function bindCallback(callbackFunc, resultSelector, scheduler) {
  return (0, _bindCallbackInternals.bindCallbackInternals)(false, callbackFunc, resultSelector, scheduler);
}
},{"./bindCallbackInternals":"../../node_modules/rxjs/dist/esm5/internal/observable/bindCallbackInternals.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/bindNodeCallback.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindNodeCallback = bindNodeCallback;

var _bindCallbackInternals = require("./bindCallbackInternals");

function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
  return (0, _bindCallbackInternals.bindCallbackInternals)(true, callbackFunc, resultSelector, scheduler);
}
},{"./bindCallbackInternals":"../../node_modules/rxjs/dist/esm5/internal/observable/bindCallbackInternals.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.argsArgArrayOrObject = argsArgArrayOrObject;
var isArray = Array.isArray;
var getPrototypeOf = Object.getPrototypeOf,
    objectProto = Object.prototype,
    getKeys = Object.keys;

function argsArgArrayOrObject(args) {
  if (args.length === 1) {
    var first_1 = args[0];

    if (isArray(first_1)) {
      return {
        args: first_1,
        keys: null
      };
    }

    if (isPOJO(first_1)) {
      var keys = getKeys(first_1);
      return {
        args: keys.map(function (key) {
          return first_1[key];
        }),
        keys: keys
      };
    }
  }

  return {
    args: args,
    keys: null
  };
}

function isPOJO(obj) {
  return obj && typeof obj === 'object' && getPrototypeOf(obj) === objectProto;
}
},{}],"../../node_modules/rxjs/dist/esm5/internal/util/createObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createObject = createObject;

function createObject(keys, values) {
  return keys.reduce(function (result, key, i) {
    return result[key] = values[i], result;
  }, {});
}
},{}],"../../node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineLatest = combineLatest;
exports.combineLatestInit = combineLatestInit;

var _Observable = require("../Observable");

var _argsArgArrayOrObject = require("../util/argsArgArrayOrObject");

var _from = require("./from");

var _identity = require("../util/identity");

var _mapOneOrManyArgs = require("../util/mapOneOrManyArgs");

var _args = require("../util/args");

var _createObject = require("../util/createObject");

var _OperatorSubscriber = require("../operators/OperatorSubscriber");

function combineLatest() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var scheduler = (0, _args.popScheduler)(args);
  var resultSelector = (0, _args.popResultSelector)(args);

  var _a = (0, _argsArgArrayOrObject.argsArgArrayOrObject)(args),
      observables = _a.args,
      keys = _a.keys;

  if (observables.length === 0) {
    return (0, _from.from)([], scheduler);
  }

  var result = new _Observable.Observable(combineLatestInit(observables, scheduler, keys ? function (values) {
    return (0, _createObject.createObject)(keys, values);
  } : _identity.identity));
  return resultSelector ? result.pipe((0, _mapOneOrManyArgs.mapOneOrManyArgs)(resultSelector)) : result;
}

function combineLatestInit(observables, scheduler, valueTransform) {
  if (valueTransform === void 0) {
    valueTransform = _identity.identity;
  }

  return function (subscriber) {
    maybeSchedule(scheduler, function () {
      var length = observables.length;
      var values = new Array(length);
      var active = length;
      var remainingFirstValues = length;

      var _loop_1 = function (i) {
        maybeSchedule(scheduler, function () {
          var source = (0, _from.from)(observables[i], scheduler);
          var hasFirstValue = false;
          source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
            values[i] = value;

            if (!hasFirstValue) {
              hasFirstValue = true;
              remainingFirstValues--;
            }

            if (!remainingFirstValues) {
              subscriber.next(valueTransform(values.slice()));
            }
          }, function () {
            if (! --active) {
              subscriber.complete();
            }
          }));
        }, subscriber);
      };

      for (var i = 0; i < length; i++) {
        _loop_1(i);
      }
    }, subscriber);
  };
}

function maybeSchedule(scheduler, execute, subscription) {
  if (scheduler) {
    subscription.add(scheduler.schedule(execute));
  } else {
    execute();
  }
}
},{"../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","../util/argsArgArrayOrObject":"../../node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js","./from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","../util/identity":"../../node_modules/rxjs/dist/esm5/internal/util/identity.js","../util/mapOneOrManyArgs":"../../node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js","../util/args":"../../node_modules/rxjs/dist/esm5/internal/util/args.js","../util/createObject":"../../node_modules/rxjs/dist/esm5/internal/util/createObject.js","../operators/OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeInternals = mergeInternals;

var _from = require("../observable/from");

var _OperatorSubscriber = require("./OperatorSubscriber");

function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalTeardown) {
  var buffer = [];
  var active = 0;
  var index = 0;
  var isComplete = false;

  var checkComplete = function () {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  };

  var outerNext = function (value) {
    return active < concurrent ? doInnerSub(value) : buffer.push(value);
  };

  var doInnerSub = function (value) {
    expand && subscriber.next(value);
    active++;
    var innerComplete = false;
    (0, _from.innerFrom)(project(value, index++)).subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (innerValue) {
      onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);

      if (expand) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, function () {
      innerComplete = true;
    }, undefined, function () {
      if (innerComplete) {
        try {
          active--;

          var _loop_1 = function () {
            var bufferedValue = buffer.shift();
            innerSubScheduler ? subscriber.add(innerSubScheduler.schedule(function () {
              return doInnerSub(bufferedValue);
            })) : doInnerSub(bufferedValue);
          };

          while (buffer.length && active < concurrent) {
            _loop_1();
          }

          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };

  source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, outerNext, function () {
    isComplete = true;
    checkComplete();
  }));
  return function () {
    additionalTeardown === null || additionalTeardown === void 0 ? void 0 : additionalTeardown();
  };
}
},{"../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMap = mergeMap;

var _map = require("./map");

var _from = require("../observable/from");

var _lift = require("../util/lift");

var _mergeInternals = require("./mergeInternals");

var _isFunction = require("../util/isFunction");

function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }

  if ((0, _isFunction.isFunction)(resultSelector)) {
    return mergeMap(function (a, i) {
      return (0, _map.map)(function (b, ii) {
        return resultSelector(a, b, i, ii);
      })((0, _from.innerFrom)(project(a, i)));
    }, concurrent);
  } else if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }

  return (0, _lift.operate)(function (source, subscriber) {
    return (0, _mergeInternals.mergeInternals)(source, subscriber, project, concurrent);
  });
}
},{"./map":"../../node_modules/rxjs/dist/esm5/internal/operators/map.js","../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./mergeInternals":"../../node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js","../util/isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeAll = mergeAll;

var _mergeMap = require("./mergeMap");

var _identity = require("../util/identity");

function mergeAll(concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }

  return (0, _mergeMap.mergeMap)(_identity.identity, concurrent);
}
},{"./mergeMap":"../../node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js","../util/identity":"../../node_modules/rxjs/dist/esm5/internal/util/identity.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/concatAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatAll = concatAll;

var _mergeAll = require("./mergeAll");

function concatAll() {
  return (0, _mergeAll.mergeAll)(1);
}
},{"./mergeAll":"../../node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/concat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concat = concat;

var _concatAll = require("../operators/concatAll");

var _fromArray = require("./fromArray");

var _args = require("../util/args");

function concat() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return (0, _concatAll.concatAll)()((0, _fromArray.internalFromArray)(args, (0, _args.popScheduler)(args)));
}
},{"../operators/concatAll":"../../node_modules/rxjs/dist/esm5/internal/operators/concatAll.js","./fromArray":"../../node_modules/rxjs/dist/esm5/internal/observable/fromArray.js","../util/args":"../../node_modules/rxjs/dist/esm5/internal/util/args.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/defer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defer = defer;

var _Observable = require("../Observable");

var _from = require("./from");

function defer(observableFactory) {
  return new _Observable.Observable(function (subscriber) {
    (0, _from.innerFrom)(observableFactory()).subscribe(subscriber);
  });
}
},{"../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","./from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/connectable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectable = connectable;

var _Subject = require("../Subject");

var _Observable = require("../Observable");

var _defer = require("./defer");

var DEFAULT_CONFIG = {
  connector: function () {
    return new _Subject.Subject();
  },
  resetOnDisconnect: true
};

function connectable(source, config) {
  if (config === void 0) {
    config = DEFAULT_CONFIG;
  }

  var connection = null;
  var connector = config.connector,
      _a = config.resetOnDisconnect,
      resetOnDisconnect = _a === void 0 ? true : _a;
  var subject = connector();
  var result = new _Observable.Observable(function (subscriber) {
    return subject.subscribe(subscriber);
  });

  result.connect = function () {
    if (!connection || connection.closed) {
      connection = (0, _defer.defer)(function () {
        return source;
      }).subscribe(subject);

      if (resetOnDisconnect) {
        connection.add(function () {
          return subject = connector();
        });
      }
    }

    return connection;
  };

  return result;
}
},{"../Subject":"../../node_modules/rxjs/dist/esm5/internal/Subject.js","../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","./defer":"../../node_modules/rxjs/dist/esm5/internal/observable/defer.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forkJoin = forkJoin;

var _Observable = require("../Observable");

var _argsArgArrayOrObject = require("../util/argsArgArrayOrObject");

var _from = require("./from");

var _args = require("../util/args");

var _OperatorSubscriber = require("../operators/OperatorSubscriber");

var _mapOneOrManyArgs = require("../util/mapOneOrManyArgs");

var _createObject = require("../util/createObject");

function forkJoin() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var resultSelector = (0, _args.popResultSelector)(args);

  var _a = (0, _argsArgArrayOrObject.argsArgArrayOrObject)(args),
      sources = _a.args,
      keys = _a.keys;

  var result = new _Observable.Observable(function (subscriber) {
    var length = sources.length;

    if (!length) {
      subscriber.complete();
      return;
    }

    var values = new Array(length);
    var remainingCompletions = length;
    var remainingEmissions = length;

    var _loop_1 = function (sourceIndex) {
      var hasValue = false;
      (0, _from.innerFrom)(sources[sourceIndex]).subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
        if (!hasValue) {
          hasValue = true;
          remainingEmissions--;
        }

        values[sourceIndex] = value;
      }, function () {
        if (! --remainingCompletions || !hasValue) {
          if (!remainingEmissions) {
            subscriber.next(keys ? (0, _createObject.createObject)(keys, values) : values);
          }

          subscriber.complete();
        }
      }));
    };

    for (var sourceIndex = 0; sourceIndex < length; sourceIndex++) {
      _loop_1(sourceIndex);
    }
  });
  return resultSelector ? result.pipe((0, _mapOneOrManyArgs.mapOneOrManyArgs)(resultSelector)) : result;
}
},{"../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","../util/argsArgArrayOrObject":"../../node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js","./from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","../util/args":"../../node_modules/rxjs/dist/esm5/internal/util/args.js","../operators/OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../util/mapOneOrManyArgs":"../../node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js","../util/createObject":"../../node_modules/rxjs/dist/esm5/internal/util/createObject.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromEvent = fromEvent;

var _tslib = require("tslib");

var _Observable = require("../Observable");

var _mergeMap = require("../operators/mergeMap");

var _isArrayLike = require("../util/isArrayLike");

var _isFunction = require("../util/isFunction");

var _mapOneOrManyArgs = require("../util/mapOneOrManyArgs");

var _fromArray = require("./fromArray");

var nodeEventEmitterMethods = ['addListener', 'removeListener'];
var eventTargetMethods = ['addEventListener', 'removeEventListener'];
var jqueryMethods = ['on', 'off'];

function fromEvent(target, eventName, options, resultSelector) {
  if ((0, _isFunction.isFunction)(options)) {
    resultSelector = options;
    options = undefined;
  }

  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe((0, _mapOneOrManyArgs.mapOneOrManyArgs)(resultSelector));
  }

  var _a = (0, _tslib.__read)(isEventTarget(target) ? eventTargetMethods.map(function (methodName) {
    return function (handler) {
      return target[methodName](eventName, handler, options);
    };
  }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2),
      add = _a[0],
      remove = _a[1];

  if (!add) {
    if ((0, _isArrayLike.isArrayLike)(target)) {
      return (0, _mergeMap.mergeMap)(function (subTarget) {
        return fromEvent(subTarget, eventName, options);
      })((0, _fromArray.internalFromArray)(target));
    }
  }

  if (!add) {
    throw new TypeError('Invalid event target');
  }

  return new _Observable.Observable(function (subscriber) {
    var handler = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return subscriber.next(1 < args.length ? args : args[0]);
    };

    add(handler);
    return function () {
      return remove(handler);
    };
  });
}

function toCommonHandlerRegistry(target, eventName) {
  return function (methodName) {
    return function (handler) {
      return target[methodName](eventName, handler);
    };
  };
}

function isNodeStyleEventEmitter(target) {
  return (0, _isFunction.isFunction)(target.addListener) && (0, _isFunction.isFunction)(target.removeListener);
}

function isJQueryStyleEventEmitter(target) {
  return (0, _isFunction.isFunction)(target.on) && (0, _isFunction.isFunction)(target.off);
}

function isEventTarget(target) {
  return (0, _isFunction.isFunction)(target.addEventListener) && (0, _isFunction.isFunction)(target.removeEventListener);
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","../operators/mergeMap":"../../node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js","../util/isArrayLike":"../../node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js","../util/isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js","../util/mapOneOrManyArgs":"../../node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js","./fromArray":"../../node_modules/rxjs/dist/esm5/internal/observable/fromArray.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/fromEventPattern.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromEventPattern = fromEventPattern;

var _Observable = require("../Observable");

var _isFunction = require("../util/isFunction");

var _mapOneOrManyArgs = require("../util/mapOneOrManyArgs");

function fromEventPattern(addHandler, removeHandler, resultSelector) {
  if (resultSelector) {
    return fromEventPattern(addHandler, removeHandler).pipe((0, _mapOneOrManyArgs.mapOneOrManyArgs)(resultSelector));
  }

  return new _Observable.Observable(function (subscriber) {
    var handler = function () {
      var e = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
      }

      return subscriber.next(e.length === 1 ? e[0] : e);
    };

    var retValue = addHandler(handler);
    return (0, _isFunction.isFunction)(removeHandler) ? function () {
      return removeHandler(handler, retValue);
    } : undefined;
  });
}
},{"../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","../util/isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js","../util/mapOneOrManyArgs":"../../node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/generate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generate = generate;

var _tslib = require("tslib");

var _identity = require("../util/identity");

var _isScheduler = require("../util/isScheduler");

var _defer = require("./defer");

var _scheduleIterable = require("../scheduled/scheduleIterable");

function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
  var _a, _b;

  var resultSelector;
  var initialState;

  if (arguments.length === 1) {
    _a = initialStateOrOptions, initialState = _a.initialState, condition = _a.condition, iterate = _a.iterate, _b = _a.resultSelector, resultSelector = _b === void 0 ? _identity.identity : _b, scheduler = _a.scheduler;
  } else {
    initialState = initialStateOrOptions;

    if (!resultSelectorOrScheduler || (0, _isScheduler.isScheduler)(resultSelectorOrScheduler)) {
      resultSelector = _identity.identity;
      scheduler = resultSelectorOrScheduler;
    } else {
      resultSelector = resultSelectorOrScheduler;
    }
  }

  function gen() {
    var state;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          state = initialState;
          _a.label = 1;

        case 1:
          if (!(!condition || condition(state))) return [3, 4];
          return [4, resultSelector(state)];

        case 2:
          _a.sent();

          _a.label = 3;

        case 3:
          state = iterate(state);
          return [3, 1];

        case 4:
          return [2];
      }
    });
  }

  return (0, _defer.defer)(scheduler ? function () {
    return (0, _scheduleIterable.scheduleIterable)(gen(), scheduler);
  } : gen);
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../util/identity":"../../node_modules/rxjs/dist/esm5/internal/util/identity.js","../util/isScheduler":"../../node_modules/rxjs/dist/esm5/internal/util/isScheduler.js","./defer":"../../node_modules/rxjs/dist/esm5/internal/observable/defer.js","../scheduled/scheduleIterable":"../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/iif.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iif = iif;

var _defer = require("./defer");

function iif(condition, trueResult, falseResult) {
  return (0, _defer.defer)(function () {
    return condition() ? trueResult : falseResult;
  });
}
},{"./defer":"../../node_modules/rxjs/dist/esm5/internal/observable/defer.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/timer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timer = timer;

var _Observable = require("../Observable");

var _async = require("../scheduler/async");

var _isScheduler = require("../util/isScheduler");

var _isDate = require("../util/isDate");

function timer(dueTime, intervalOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }

  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  var intervalDuration = -1;

  if (intervalOrScheduler != null) {
    if ((0, _isScheduler.isScheduler)(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }

  return new _Observable.Observable(function (subscriber) {
    var due = (0, _isDate.isValidDate)(dueTime) ? +dueTime - scheduler.now() : dueTime;

    if (due < 0) {
      due = 0;
    }

    var n = 0;
    return scheduler.schedule(function () {
      if (!subscriber.closed) {
        subscriber.next(n++);

        if (0 <= intervalDuration) {
          this.schedule(undefined, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}
},{"../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","../scheduler/async":"../../node_modules/rxjs/dist/esm5/internal/scheduler/async.js","../util/isScheduler":"../../node_modules/rxjs/dist/esm5/internal/util/isScheduler.js","../util/isDate":"../../node_modules/rxjs/dist/esm5/internal/util/isDate.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/interval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interval = interval;

var _async = require("../scheduler/async");

var _timer = require("./timer");

function interval(period, scheduler) {
  if (period === void 0) {
    period = 0;
  }

  if (scheduler === void 0) {
    scheduler = _async.asyncScheduler;
  }

  if (period < 0) {
    period = 0;
  }

  return (0, _timer.timer)(period, period, scheduler);
}
},{"../scheduler/async":"../../node_modules/rxjs/dist/esm5/internal/scheduler/async.js","./timer":"../../node_modules/rxjs/dist/esm5/internal/observable/timer.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/merge.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = merge;

var _mergeAll = require("../operators/mergeAll");

var _fromArray = require("./fromArray");

var _from = require("./from");

var _empty = require("./empty");

var _args = require("../util/args");

function merge() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var scheduler = (0, _args.popScheduler)(args);
  var concurrent = (0, _args.popNumber)(args, Infinity);
  var sources = args;
  return !sources.length ? _empty.EMPTY : sources.length === 1 ? (0, _from.innerFrom)(sources[0]) : (0, _mergeAll.mergeAll)(concurrent)((0, _fromArray.internalFromArray)(sources, scheduler));
}
},{"../operators/mergeAll":"../../node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js","./fromArray":"../../node_modules/rxjs/dist/esm5/internal/observable/fromArray.js","./from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","./empty":"../../node_modules/rxjs/dist/esm5/internal/observable/empty.js","../util/args":"../../node_modules/rxjs/dist/esm5/internal/util/args.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/never.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.never = never;
exports.NEVER = void 0;

var _Observable = require("../Observable");

var _noop = require("../util/noop");

var NEVER = new _Observable.Observable(_noop.noop);
exports.NEVER = NEVER;

function never() {
  return NEVER;
}
},{"../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","../util/noop":"../../node_modules/rxjs/dist/esm5/internal/util/noop.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.argsOrArgArray = argsOrArgArray;
var isArray = Array.isArray;

function argsOrArgArray(args) {
  return args.length === 1 && isArray(args[0]) ? args[0] : args;
}
},{}],"../../node_modules/rxjs/dist/esm5/internal/operators/onErrorResumeNext.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onErrorResumeNext = onErrorResumeNext;

var _tslib = require("tslib");

var _lift = require("../util/lift");

var _from = require("../observable/from");

var _argsOrArgArray = require("../util/argsOrArgArray");

var _OperatorSubscriber = require("./OperatorSubscriber");

var _noop = require("../util/noop");

function onErrorResumeNext() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  var nextSources = (0, _argsOrArgArray.argsOrArgArray)(sources);
  return (0, _lift.operate)(function (source, subscriber) {
    var remaining = (0, _tslib.__spreadArray)([source], (0, _tslib.__read)(nextSources));

    var subscribeNext = function () {
      if (!subscriber.closed) {
        if (remaining.length > 0) {
          var nextSource = void 0;

          try {
            nextSource = (0, _from.innerFrom)(remaining.shift());
          } catch (err) {
            subscribeNext();
            return;
          }

          var innerSub = new _OperatorSubscriber.OperatorSubscriber(subscriber, undefined, _noop.noop, _noop.noop);
          subscriber.add(nextSource.subscribe(innerSub));
          innerSub.add(subscribeNext);
        } else {
          subscriber.complete();
        }
      }
    };

    subscribeNext();
  });
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","../util/argsOrArgArray":"../../node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../util/noop":"../../node_modules/rxjs/dist/esm5/internal/util/noop.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/onErrorResumeNext.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onErrorResumeNext = onErrorResumeNext;

var _empty = require("./empty");

var _onErrorResumeNext = require("../operators/onErrorResumeNext");

var _argsOrArgArray = require("../util/argsOrArgArray");

function onErrorResumeNext() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  return (0, _onErrorResumeNext.onErrorResumeNext)((0, _argsOrArgArray.argsOrArgArray)(sources))(_empty.EMPTY);
}
},{"./empty":"../../node_modules/rxjs/dist/esm5/internal/observable/empty.js","../operators/onErrorResumeNext":"../../node_modules/rxjs/dist/esm5/internal/operators/onErrorResumeNext.js","../util/argsOrArgArray":"../../node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/pairs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pairs = pairs;

var _from = require("./from");

function pairs(obj, scheduler) {
  return (0, _from.from)(Object.entries(obj), scheduler);
}
},{"./from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js"}],"../../node_modules/rxjs/dist/esm5/internal/util/not.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.not = not;

function not(pred, thisArg) {
  return function (value, index) {
    return !pred.call(thisArg, value, index);
  };
}
},{}],"../../node_modules/rxjs/dist/esm5/internal/operators/filter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filter = filter;

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function filter(predicate, thisArg) {
  return (0, _lift.operate)(function (source, subscriber) {
    var index = 0;
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      return predicate.call(thisArg, value, index++) && subscriber.next(value);
    }));
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/partition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partition = partition;

var _not = require("../util/not");

var _filter = require("../operators/filter");

var _from = require("./from");

function partition(source, predicate, thisArg) {
  return [(0, _filter.filter)(predicate, thisArg)((0, _from.innerFrom)(source)), (0, _filter.filter)((0, _not.not)(predicate, thisArg))((0, _from.innerFrom)(source))];
}
},{"../util/not":"../../node_modules/rxjs/dist/esm5/internal/util/not.js","../operators/filter":"../../node_modules/rxjs/dist/esm5/internal/operators/filter.js","./from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/race.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.race = race;
exports.raceInit = raceInit;

var _Observable = require("../Observable");

var _from = require("./from");

var _argsOrArgArray = require("../util/argsOrArgArray");

var _OperatorSubscriber = require("../operators/OperatorSubscriber");

function race() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  sources = (0, _argsOrArgArray.argsOrArgArray)(sources);
  return sources.length === 1 ? (0, _from.innerFrom)(sources[0]) : new _Observable.Observable(raceInit(sources));
}

function raceInit(sources) {
  return function (subscriber) {
    var subscriptions = [];

    var _loop_1 = function (i) {
      subscriptions.push((0, _from.innerFrom)(sources[i]).subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
        if (subscriptions) {
          for (var s = 0; s < subscriptions.length; s++) {
            s !== i && subscriptions[s].unsubscribe();
          }

          subscriptions = null;
        }

        subscriber.next(value);
      })));
    };

    for (var i = 0; subscriptions && !subscriber.closed && i < sources.length; i++) {
      _loop_1(i);
    }
  };
}
},{"../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","./from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","../util/argsOrArgArray":"../../node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js","../operators/OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/range.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;

var _Observable = require("../Observable");

var _empty = require("./empty");

function range(start, count, scheduler) {
  if (count == null) {
    count = start;
    start = 0;
  }

  if (count <= 0) {
    return _empty.EMPTY;
  }

  var end = count + start;
  return new _Observable.Observable(scheduler ? function (subscriber) {
    var n = start;
    return scheduler.schedule(function () {
      if (n < end) {
        subscriber.next(n++);
        this.schedule();
      } else {
        subscriber.complete();
      }
    });
  } : function (subscriber) {
    var n = start;

    while (n < end && !subscriber.closed) {
      subscriber.next(n++);
    }

    subscriber.complete();
  });
}
},{"../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","./empty":"../../node_modules/rxjs/dist/esm5/internal/observable/empty.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/using.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.using = using;

var _Observable = require("../Observable");

var _from = require("./from");

var _empty = require("./empty");

function using(resourceFactory, observableFactory) {
  return new _Observable.Observable(function (subscriber) {
    var resource = resourceFactory();
    var result = observableFactory(resource);
    var source = result ? (0, _from.innerFrom)(result) : _empty.EMPTY;
    source.subscribe(subscriber);
    return function () {
      if (resource) {
        resource.unsubscribe();
      }
    };
  });
}
},{"../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","./from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","./empty":"../../node_modules/rxjs/dist/esm5/internal/observable/empty.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/zip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = zip;

var _tslib = require("tslib");

var _Observable = require("../Observable");

var _from = require("./from");

var _argsOrArgArray = require("../util/argsOrArgArray");

var _empty = require("./empty");

var _OperatorSubscriber = require("../operators/OperatorSubscriber");

var _args = require("../util/args");

function zip() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var resultSelector = (0, _args.popResultSelector)(args);
  var sources = (0, _argsOrArgArray.argsOrArgArray)(args);
  return sources.length ? new _Observable.Observable(function (subscriber) {
    var buffers = sources.map(function () {
      return [];
    });
    var completed = sources.map(function () {
      return false;
    });
    subscriber.add(function () {
      buffers = completed = null;
    });

    var _loop_1 = function (sourceIndex) {
      (0, _from.innerFrom)(sources[sourceIndex]).subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
        buffers[sourceIndex].push(value);

        if (buffers.every(function (buffer) {
          return buffer.length;
        })) {
          var result = buffers.map(function (buffer) {
            return buffer.shift();
          });
          subscriber.next(resultSelector ? resultSelector.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(result))) : result);

          if (buffers.some(function (buffer, i) {
            return !buffer.length && completed[i];
          })) {
            subscriber.complete();
          }
        }
      }, function () {
        completed[sourceIndex] = true;
        !buffers[sourceIndex].length && subscriber.complete();
      }));
    };

    for (var sourceIndex = 0; !subscriber.closed && sourceIndex < sources.length; sourceIndex++) {
      _loop_1(sourceIndex);
    }

    return function () {
      buffers = completed = null;
    };
  }) : _empty.EMPTY;
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","./from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","../util/argsOrArgArray":"../../node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js","./empty":"../../node_modules/rxjs/dist/esm5/internal/observable/empty.js","../operators/OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../util/args":"../../node_modules/rxjs/dist/esm5/internal/util/args.js"}],"../../node_modules/rxjs/dist/esm5/internal/types.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"../../node_modules/rxjs/dist/esm5/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Observable: true,
  ConnectableObservable: true,
  observable: true,
  animationFrames: true,
  Subject: true,
  BehaviorSubject: true,
  ReplaySubject: true,
  AsyncSubject: true,
  asap: true,
  asapScheduler: true,
  async: true,
  asyncScheduler: true,
  queue: true,
  queueScheduler: true,
  animationFrame: true,
  animationFrameScheduler: true,
  VirtualTimeScheduler: true,
  VirtualAction: true,
  Scheduler: true,
  Subscription: true,
  Subscriber: true,
  Notification: true,
  NotificationKind: true,
  pipe: true,
  noop: true,
  identity: true,
  isObservable: true,
  lastValueFrom: true,
  firstValueFrom: true,
  ArgumentOutOfRangeError: true,
  EmptyError: true,
  NotFoundError: true,
  ObjectUnsubscribedError: true,
  SequenceError: true,
  TimeoutError: true,
  UnsubscriptionError: true,
  bindCallback: true,
  bindNodeCallback: true,
  combineLatest: true,
  concat: true,
  connectable: true,
  defer: true,
  empty: true,
  EMPTY: true,
  forkJoin: true,
  from: true,
  fromEvent: true,
  fromEventPattern: true,
  generate: true,
  iif: true,
  interval: true,
  merge: true,
  never: true,
  NEVER: true,
  of: true,
  onErrorResumeNext: true,
  pairs: true,
  partition: true,
  race: true,
  range: true,
  throwError: true,
  timer: true,
  using: true,
  zip: true,
  scheduled: true,
  config: true
};
Object.defineProperty(exports, "Observable", {
  enumerable: true,
  get: function () {
    return _Observable.Observable;
  }
});
Object.defineProperty(exports, "ConnectableObservable", {
  enumerable: true,
  get: function () {
    return _ConnectableObservable.ConnectableObservable;
  }
});
Object.defineProperty(exports, "observable", {
  enumerable: true,
  get: function () {
    return _observable.observable;
  }
});
Object.defineProperty(exports, "animationFrames", {
  enumerable: true,
  get: function () {
    return _animationFrames.animationFrames;
  }
});
Object.defineProperty(exports, "Subject", {
  enumerable: true,
  get: function () {
    return _Subject.Subject;
  }
});
Object.defineProperty(exports, "BehaviorSubject", {
  enumerable: true,
  get: function () {
    return _BehaviorSubject.BehaviorSubject;
  }
});
Object.defineProperty(exports, "ReplaySubject", {
  enumerable: true,
  get: function () {
    return _ReplaySubject.ReplaySubject;
  }
});
Object.defineProperty(exports, "AsyncSubject", {
  enumerable: true,
  get: function () {
    return _AsyncSubject.AsyncSubject;
  }
});
Object.defineProperty(exports, "asap", {
  enumerable: true,
  get: function () {
    return _asap.asap;
  }
});
Object.defineProperty(exports, "asapScheduler", {
  enumerable: true,
  get: function () {
    return _asap.asapScheduler;
  }
});
Object.defineProperty(exports, "async", {
  enumerable: true,
  get: function () {
    return _async.async;
  }
});
Object.defineProperty(exports, "asyncScheduler", {
  enumerable: true,
  get: function () {
    return _async.asyncScheduler;
  }
});
Object.defineProperty(exports, "queue", {
  enumerable: true,
  get: function () {
    return _queue.queue;
  }
});
Object.defineProperty(exports, "queueScheduler", {
  enumerable: true,
  get: function () {
    return _queue.queueScheduler;
  }
});
Object.defineProperty(exports, "animationFrame", {
  enumerable: true,
  get: function () {
    return _animationFrame.animationFrame;
  }
});
Object.defineProperty(exports, "animationFrameScheduler", {
  enumerable: true,
  get: function () {
    return _animationFrame.animationFrameScheduler;
  }
});
Object.defineProperty(exports, "VirtualTimeScheduler", {
  enumerable: true,
  get: function () {
    return _VirtualTimeScheduler.VirtualTimeScheduler;
  }
});
Object.defineProperty(exports, "VirtualAction", {
  enumerable: true,
  get: function () {
    return _VirtualTimeScheduler.VirtualAction;
  }
});
Object.defineProperty(exports, "Scheduler", {
  enumerable: true,
  get: function () {
    return _Scheduler.Scheduler;
  }
});
Object.defineProperty(exports, "Subscription", {
  enumerable: true,
  get: function () {
    return _Subscription.Subscription;
  }
});
Object.defineProperty(exports, "Subscriber", {
  enumerable: true,
  get: function () {
    return _Subscriber.Subscriber;
  }
});
Object.defineProperty(exports, "Notification", {
  enumerable: true,
  get: function () {
    return _Notification.Notification;
  }
});
Object.defineProperty(exports, "NotificationKind", {
  enumerable: true,
  get: function () {
    return _Notification.NotificationKind;
  }
});
Object.defineProperty(exports, "pipe", {
  enumerable: true,
  get: function () {
    return _pipe.pipe;
  }
});
Object.defineProperty(exports, "noop", {
  enumerable: true,
  get: function () {
    return _noop.noop;
  }
});
Object.defineProperty(exports, "identity", {
  enumerable: true,
  get: function () {
    return _identity.identity;
  }
});
Object.defineProperty(exports, "isObservable", {
  enumerable: true,
  get: function () {
    return _isObservable.isObservable;
  }
});
Object.defineProperty(exports, "lastValueFrom", {
  enumerable: true,
  get: function () {
    return _lastValueFrom.lastValueFrom;
  }
});
Object.defineProperty(exports, "firstValueFrom", {
  enumerable: true,
  get: function () {
    return _firstValueFrom.firstValueFrom;
  }
});
Object.defineProperty(exports, "ArgumentOutOfRangeError", {
  enumerable: true,
  get: function () {
    return _ArgumentOutOfRangeError.ArgumentOutOfRangeError;
  }
});
Object.defineProperty(exports, "EmptyError", {
  enumerable: true,
  get: function () {
    return _EmptyError.EmptyError;
  }
});
Object.defineProperty(exports, "NotFoundError", {
  enumerable: true,
  get: function () {
    return _NotFoundError.NotFoundError;
  }
});
Object.defineProperty(exports, "ObjectUnsubscribedError", {
  enumerable: true,
  get: function () {
    return _ObjectUnsubscribedError.ObjectUnsubscribedError;
  }
});
Object.defineProperty(exports, "SequenceError", {
  enumerable: true,
  get: function () {
    return _SequenceError.SequenceError;
  }
});
Object.defineProperty(exports, "TimeoutError", {
  enumerable: true,
  get: function () {
    return _timeout.TimeoutError;
  }
});
Object.defineProperty(exports, "UnsubscriptionError", {
  enumerable: true,
  get: function () {
    return _UnsubscriptionError.UnsubscriptionError;
  }
});
Object.defineProperty(exports, "bindCallback", {
  enumerable: true,
  get: function () {
    return _bindCallback.bindCallback;
  }
});
Object.defineProperty(exports, "bindNodeCallback", {
  enumerable: true,
  get: function () {
    return _bindNodeCallback.bindNodeCallback;
  }
});
Object.defineProperty(exports, "combineLatest", {
  enumerable: true,
  get: function () {
    return _combineLatest.combineLatest;
  }
});
Object.defineProperty(exports, "concat", {
  enumerable: true,
  get: function () {
    return _concat.concat;
  }
});
Object.defineProperty(exports, "connectable", {
  enumerable: true,
  get: function () {
    return _connectable.connectable;
  }
});
Object.defineProperty(exports, "defer", {
  enumerable: true,
  get: function () {
    return _defer.defer;
  }
});
Object.defineProperty(exports, "empty", {
  enumerable: true,
  get: function () {
    return _empty.empty;
  }
});
Object.defineProperty(exports, "EMPTY", {
  enumerable: true,
  get: function () {
    return _empty.EMPTY;
  }
});
Object.defineProperty(exports, "forkJoin", {
  enumerable: true,
  get: function () {
    return _forkJoin.forkJoin;
  }
});
Object.defineProperty(exports, "from", {
  enumerable: true,
  get: function () {
    return _from.from;
  }
});
Object.defineProperty(exports, "fromEvent", {
  enumerable: true,
  get: function () {
    return _fromEvent.fromEvent;
  }
});
Object.defineProperty(exports, "fromEventPattern", {
  enumerable: true,
  get: function () {
    return _fromEventPattern.fromEventPattern;
  }
});
Object.defineProperty(exports, "generate", {
  enumerable: true,
  get: function () {
    return _generate.generate;
  }
});
Object.defineProperty(exports, "iif", {
  enumerable: true,
  get: function () {
    return _iif.iif;
  }
});
Object.defineProperty(exports, "interval", {
  enumerable: true,
  get: function () {
    return _interval.interval;
  }
});
Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function () {
    return _merge.merge;
  }
});
Object.defineProperty(exports, "never", {
  enumerable: true,
  get: function () {
    return _never.never;
  }
});
Object.defineProperty(exports, "NEVER", {
  enumerable: true,
  get: function () {
    return _never.NEVER;
  }
});
Object.defineProperty(exports, "of", {
  enumerable: true,
  get: function () {
    return _of.of;
  }
});
Object.defineProperty(exports, "onErrorResumeNext", {
  enumerable: true,
  get: function () {
    return _onErrorResumeNext.onErrorResumeNext;
  }
});
Object.defineProperty(exports, "pairs", {
  enumerable: true,
  get: function () {
    return _pairs.pairs;
  }
});
Object.defineProperty(exports, "partition", {
  enumerable: true,
  get: function () {
    return _partition.partition;
  }
});
Object.defineProperty(exports, "race", {
  enumerable: true,
  get: function () {
    return _race.race;
  }
});
Object.defineProperty(exports, "range", {
  enumerable: true,
  get: function () {
    return _range.range;
  }
});
Object.defineProperty(exports, "throwError", {
  enumerable: true,
  get: function () {
    return _throwError.throwError;
  }
});
Object.defineProperty(exports, "timer", {
  enumerable: true,
  get: function () {
    return _timer.timer;
  }
});
Object.defineProperty(exports, "using", {
  enumerable: true,
  get: function () {
    return _using.using;
  }
});
Object.defineProperty(exports, "zip", {
  enumerable: true,
  get: function () {
    return _zip.zip;
  }
});
Object.defineProperty(exports, "scheduled", {
  enumerable: true,
  get: function () {
    return _scheduled.scheduled;
  }
});
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function () {
    return _config.config;
  }
});

var _Observable = require("./internal/Observable");

var _ConnectableObservable = require("./internal/observable/ConnectableObservable");

var _observable = require("./internal/symbol/observable");

var _animationFrames = require("./internal/observable/dom/animationFrames");

var _Subject = require("./internal/Subject");

var _BehaviorSubject = require("./internal/BehaviorSubject");

var _ReplaySubject = require("./internal/ReplaySubject");

var _AsyncSubject = require("./internal/AsyncSubject");

var _asap = require("./internal/scheduler/asap");

var _async = require("./internal/scheduler/async");

var _queue = require("./internal/scheduler/queue");

var _animationFrame = require("./internal/scheduler/animationFrame");

var _VirtualTimeScheduler = require("./internal/scheduler/VirtualTimeScheduler");

var _Scheduler = require("./internal/Scheduler");

var _Subscription = require("./internal/Subscription");

var _Subscriber = require("./internal/Subscriber");

var _Notification = require("./internal/Notification");

var _pipe = require("./internal/util/pipe");

var _noop = require("./internal/util/noop");

var _identity = require("./internal/util/identity");

var _isObservable = require("./internal/util/isObservable");

var _lastValueFrom = require("./internal/lastValueFrom");

var _firstValueFrom = require("./internal/firstValueFrom");

var _ArgumentOutOfRangeError = require("./internal/util/ArgumentOutOfRangeError");

var _EmptyError = require("./internal/util/EmptyError");

var _NotFoundError = require("./internal/util/NotFoundError");

var _ObjectUnsubscribedError = require("./internal/util/ObjectUnsubscribedError");

var _SequenceError = require("./internal/util/SequenceError");

var _timeout = require("./internal/operators/timeout");

var _UnsubscriptionError = require("./internal/util/UnsubscriptionError");

var _bindCallback = require("./internal/observable/bindCallback");

var _bindNodeCallback = require("./internal/observable/bindNodeCallback");

var _combineLatest = require("./internal/observable/combineLatest");

var _concat = require("./internal/observable/concat");

var _connectable = require("./internal/observable/connectable");

var _defer = require("./internal/observable/defer");

var _empty = require("./internal/observable/empty");

var _forkJoin = require("./internal/observable/forkJoin");

var _from = require("./internal/observable/from");

var _fromEvent = require("./internal/observable/fromEvent");

var _fromEventPattern = require("./internal/observable/fromEventPattern");

var _generate = require("./internal/observable/generate");

var _iif = require("./internal/observable/iif");

var _interval = require("./internal/observable/interval");

var _merge = require("./internal/observable/merge");

var _never = require("./internal/observable/never");

var _of = require("./internal/observable/of");

var _onErrorResumeNext = require("./internal/observable/onErrorResumeNext");

var _pairs = require("./internal/observable/pairs");

var _partition = require("./internal/observable/partition");

var _race = require("./internal/observable/race");

var _range = require("./internal/observable/range");

var _throwError = require("./internal/observable/throwError");

var _timer = require("./internal/observable/timer");

var _using = require("./internal/observable/using");

var _zip = require("./internal/observable/zip");

var _scheduled = require("./internal/scheduled/scheduled");

var _types = require("./internal/types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

var _config = require("./internal/config");
},{"./internal/Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","./internal/observable/ConnectableObservable":"../../node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js","./internal/symbol/observable":"../../node_modules/rxjs/dist/esm5/internal/symbol/observable.js","./internal/observable/dom/animationFrames":"../../node_modules/rxjs/dist/esm5/internal/observable/dom/animationFrames.js","./internal/Subject":"../../node_modules/rxjs/dist/esm5/internal/Subject.js","./internal/BehaviorSubject":"../../node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js","./internal/ReplaySubject":"../../node_modules/rxjs/dist/esm5/internal/ReplaySubject.js","./internal/AsyncSubject":"../../node_modules/rxjs/dist/esm5/internal/AsyncSubject.js","./internal/scheduler/asap":"../../node_modules/rxjs/dist/esm5/internal/scheduler/asap.js","./internal/scheduler/async":"../../node_modules/rxjs/dist/esm5/internal/scheduler/async.js","./internal/scheduler/queue":"../../node_modules/rxjs/dist/esm5/internal/scheduler/queue.js","./internal/scheduler/animationFrame":"../../node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js","./internal/scheduler/VirtualTimeScheduler":"../../node_modules/rxjs/dist/esm5/internal/scheduler/VirtualTimeScheduler.js","./internal/Scheduler":"../../node_modules/rxjs/dist/esm5/internal/Scheduler.js","./internal/Subscription":"../../node_modules/rxjs/dist/esm5/internal/Subscription.js","./internal/Subscriber":"../../node_modules/rxjs/dist/esm5/internal/Subscriber.js","./internal/Notification":"../../node_modules/rxjs/dist/esm5/internal/Notification.js","./internal/util/pipe":"../../node_modules/rxjs/dist/esm5/internal/util/pipe.js","./internal/util/noop":"../../node_modules/rxjs/dist/esm5/internal/util/noop.js","./internal/util/identity":"../../node_modules/rxjs/dist/esm5/internal/util/identity.js","./internal/util/isObservable":"../../node_modules/rxjs/dist/esm5/internal/util/isObservable.js","./internal/lastValueFrom":"../../node_modules/rxjs/dist/esm5/internal/lastValueFrom.js","./internal/firstValueFrom":"../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js","./internal/util/ArgumentOutOfRangeError":"../../node_modules/rxjs/dist/esm5/internal/util/ArgumentOutOfRangeError.js","./internal/util/EmptyError":"../../node_modules/rxjs/dist/esm5/internal/util/EmptyError.js","./internal/util/NotFoundError":"../../node_modules/rxjs/dist/esm5/internal/util/NotFoundError.js","./internal/util/ObjectUnsubscribedError":"../../node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js","./internal/util/SequenceError":"../../node_modules/rxjs/dist/esm5/internal/util/SequenceError.js","./internal/operators/timeout":"../../node_modules/rxjs/dist/esm5/internal/operators/timeout.js","./internal/util/UnsubscriptionError":"../../node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js","./internal/observable/bindCallback":"../../node_modules/rxjs/dist/esm5/internal/observable/bindCallback.js","./internal/observable/bindNodeCallback":"../../node_modules/rxjs/dist/esm5/internal/observable/bindNodeCallback.js","./internal/observable/combineLatest":"../../node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js","./internal/observable/concat":"../../node_modules/rxjs/dist/esm5/internal/observable/concat.js","./internal/observable/connectable":"../../node_modules/rxjs/dist/esm5/internal/observable/connectable.js","./internal/observable/defer":"../../node_modules/rxjs/dist/esm5/internal/observable/defer.js","./internal/observable/empty":"../../node_modules/rxjs/dist/esm5/internal/observable/empty.js","./internal/observable/forkJoin":"../../node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js","./internal/observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","./internal/observable/fromEvent":"../../node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js","./internal/observable/fromEventPattern":"../../node_modules/rxjs/dist/esm5/internal/observable/fromEventPattern.js","./internal/observable/generate":"../../node_modules/rxjs/dist/esm5/internal/observable/generate.js","./internal/observable/iif":"../../node_modules/rxjs/dist/esm5/internal/observable/iif.js","./internal/observable/interval":"../../node_modules/rxjs/dist/esm5/internal/observable/interval.js","./internal/observable/merge":"../../node_modules/rxjs/dist/esm5/internal/observable/merge.js","./internal/observable/never":"../../node_modules/rxjs/dist/esm5/internal/observable/never.js","./internal/observable/of":"../../node_modules/rxjs/dist/esm5/internal/observable/of.js","./internal/observable/onErrorResumeNext":"../../node_modules/rxjs/dist/esm5/internal/observable/onErrorResumeNext.js","./internal/observable/pairs":"../../node_modules/rxjs/dist/esm5/internal/observable/pairs.js","./internal/observable/partition":"../../node_modules/rxjs/dist/esm5/internal/observable/partition.js","./internal/observable/race":"../../node_modules/rxjs/dist/esm5/internal/observable/race.js","./internal/observable/range":"../../node_modules/rxjs/dist/esm5/internal/observable/range.js","./internal/observable/throwError":"../../node_modules/rxjs/dist/esm5/internal/observable/throwError.js","./internal/observable/timer":"../../node_modules/rxjs/dist/esm5/internal/observable/timer.js","./internal/observable/using":"../../node_modules/rxjs/dist/esm5/internal/observable/using.js","./internal/observable/zip":"../../node_modules/rxjs/dist/esm5/internal/observable/zip.js","./internal/scheduled/scheduled":"../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js","./internal/types":"../../node_modules/rxjs/dist/esm5/internal/types.js","./internal/config":"../../node_modules/rxjs/dist/esm5/internal/config.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/audit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.audit = audit;

var _lift = require("../util/lift");

var _from = require("../observable/from");

var _OperatorSubscriber = require("./OperatorSubscriber");

function audit(durationSelector) {
  return (0, _lift.operate)(function (source, subscriber) {
    var hasValue = false;
    var lastValue = null;
    var durationSubscriber = null;
    var isComplete = false;

    var endDuration = function () {
      durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
      durationSubscriber = null;

      if (hasValue) {
        hasValue = false;
        var value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }

      isComplete && subscriber.complete();
    };

    var cleanupDuration = function () {
      durationSubscriber = null;
      isComplete && subscriber.complete();
    };

    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      hasValue = true;
      lastValue = value;

      if (!durationSubscriber) {
        (0, _from.innerFrom)(durationSelector(value)).subscribe(durationSubscriber = new _OperatorSubscriber.OperatorSubscriber(subscriber, endDuration, cleanupDuration));
      }
    }, function () {
      isComplete = true;
      (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
    }));
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/auditTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auditTime = auditTime;

var _async = require("../scheduler/async");

var _audit = require("./audit");

var _timer = require("../observable/timer");

function auditTime(duration, scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  return (0, _audit.audit)(function () {
    return (0, _timer.timer)(duration, scheduler);
  });
}
},{"../scheduler/async":"../../node_modules/rxjs/dist/esm5/internal/scheduler/async.js","./audit":"../../node_modules/rxjs/dist/esm5/internal/operators/audit.js","../observable/timer":"../../node_modules/rxjs/dist/esm5/internal/observable/timer.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/buffer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buffer = buffer;

var _lift = require("../util/lift");

var _noop = require("../util/noop");

var _OperatorSubscriber = require("./OperatorSubscriber");

function buffer(closingNotifier) {
  return (0, _lift.operate)(function (source, subscriber) {
    var currentBuffer = [];
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      return currentBuffer.push(value);
    }, function () {
      subscriber.next(currentBuffer);
      subscriber.complete();
    }));
    closingNotifier.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function () {
      var b = currentBuffer;
      currentBuffer = [];
      subscriber.next(b);
    }, _noop.noop));
    return function () {
      currentBuffer = null;
    };
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","../util/noop":"../../node_modules/rxjs/dist/esm5/internal/util/noop.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/bufferCount.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bufferCount = bufferCount;

var _tslib = require("tslib");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

var _arrRemove = require("../util/arrRemove");

function bufferCount(bufferSize, startBufferEvery) {
  if (startBufferEvery === void 0) {
    startBufferEvery = null;
  }

  startBufferEvery = startBufferEvery !== null && startBufferEvery !== void 0 ? startBufferEvery : bufferSize;
  return (0, _lift.operate)(function (source, subscriber) {
    var buffers = [];
    var count = 0;
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      var e_1, _a, e_2, _b;

      var toEmit = null;

      if (count++ % startBufferEvery === 0) {
        buffers.push([]);
      }

      try {
        for (var buffers_1 = (0, _tslib.__values)(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
          var buffer = buffers_1_1.value;
          buffer.push(value);

          if (bufferSize <= buffer.length) {
            toEmit = toEmit !== null && toEmit !== void 0 ? toEmit : [];
            toEmit.push(buffer);
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      if (toEmit) {
        try {
          for (var toEmit_1 = (0, _tslib.__values)(toEmit), toEmit_1_1 = toEmit_1.next(); !toEmit_1_1.done; toEmit_1_1 = toEmit_1.next()) {
            var buffer = toEmit_1_1.value;
            (0, _arrRemove.arrRemove)(buffers, buffer);
            subscriber.next(buffer);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (toEmit_1_1 && !toEmit_1_1.done && (_b = toEmit_1.return)) _b.call(toEmit_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
    }, function () {
      var e_3, _a;

      try {
        for (var buffers_2 = (0, _tslib.__values)(buffers), buffers_2_1 = buffers_2.next(); !buffers_2_1.done; buffers_2_1 = buffers_2.next()) {
          var buffer = buffers_2_1.value;
          subscriber.next(buffer);
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (buffers_2_1 && !buffers_2_1.done && (_a = buffers_2.return)) _a.call(buffers_2);
        } finally {
          if (e_3) throw e_3.error;
        }
      }

      subscriber.complete();
    }, undefined, function () {
      buffers = null;
    }));
  });
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../util/arrRemove":"../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/bufferTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bufferTime = bufferTime;

var _tslib = require("tslib");

var _Subscription = require("../Subscription");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

var _arrRemove = require("../util/arrRemove");

var _async = require("../scheduler/async");

var _args = require("../util/args");

function bufferTime(bufferTimeSpan) {
  var _a, _b;

  var otherArgs = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    otherArgs[_i - 1] = arguments[_i];
  }

  var scheduler = (_a = (0, _args.popScheduler)(otherArgs)) !== null && _a !== void 0 ? _a : _async.asyncScheduler;
  var bufferCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
  var maxBufferSize = otherArgs[1] || Infinity;
  return (0, _lift.operate)(function (source, subscriber) {
    var bufferRecords = [];
    var restartOnEmit = false;

    var emit = function (record) {
      var buffer = record.buffer,
          subs = record.subs;
      subs.unsubscribe();
      (0, _arrRemove.arrRemove)(bufferRecords, record);
      subscriber.next(buffer);
      restartOnEmit && startBuffer();
    };

    var startBuffer = function () {
      if (bufferRecords) {
        var subs = new _Subscription.Subscription();
        subscriber.add(subs);
        var buffer = [];
        var record_1 = {
          buffer: buffer,
          subs: subs
        };
        bufferRecords.push(record_1);
        subs.add(scheduler.schedule(function () {
          return emit(record_1);
        }, bufferTimeSpan));
      }
    };

    bufferCreationInterval !== null && bufferCreationInterval >= 0 ? subscriber.add(scheduler.schedule(function () {
      startBuffer();
      !this.closed && subscriber.add(this.schedule(null, bufferCreationInterval));
    }, bufferCreationInterval)) : restartOnEmit = true;
    startBuffer();
    var bufferTimeSubscriber = new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      var e_1, _a;

      var recordsCopy = bufferRecords.slice();

      try {
        for (var recordsCopy_1 = (0, _tslib.__values)(recordsCopy), recordsCopy_1_1 = recordsCopy_1.next(); !recordsCopy_1_1.done; recordsCopy_1_1 = recordsCopy_1.next()) {
          var record = recordsCopy_1_1.value;
          var buffer = record.buffer;
          buffer.push(value);
          maxBufferSize <= buffer.length && emit(record);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (recordsCopy_1_1 && !recordsCopy_1_1.done && (_a = recordsCopy_1.return)) _a.call(recordsCopy_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }, function () {
      while (bufferRecords === null || bufferRecords === void 0 ? void 0 : bufferRecords.length) {
        subscriber.next(bufferRecords.shift().buffer);
      }

      bufferTimeSubscriber === null || bufferTimeSubscriber === void 0 ? void 0 : bufferTimeSubscriber.unsubscribe();
      subscriber.complete();
      subscriber.unsubscribe();
    }, undefined, function () {
      return bufferRecords = null;
    });
    source.subscribe(bufferTimeSubscriber);
  });
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscription":"../../node_modules/rxjs/dist/esm5/internal/Subscription.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../util/arrRemove":"../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js","../scheduler/async":"../../node_modules/rxjs/dist/esm5/internal/scheduler/async.js","../util/args":"../../node_modules/rxjs/dist/esm5/internal/util/args.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/bufferToggle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bufferToggle = bufferToggle;

var _tslib = require("tslib");

var _Subscription = require("../Subscription");

var _lift = require("../util/lift");

var _from = require("../observable/from");

var _OperatorSubscriber = require("./OperatorSubscriber");

var _noop = require("../util/noop");

var _arrRemove = require("../util/arrRemove");

function bufferToggle(openings, closingSelector) {
  return (0, _lift.operate)(function (source, subscriber) {
    var buffers = [];
    (0, _from.innerFrom)(openings).subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (openValue) {
      var buffer = [];
      buffers.push(buffer);
      var closingSubscription = new _Subscription.Subscription();

      var emitBuffer = function () {
        (0, _arrRemove.arrRemove)(buffers, buffer);
        subscriber.next(buffer);
        closingSubscription.unsubscribe();
      };

      closingSubscription.add((0, _from.innerFrom)(closingSelector(openValue)).subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, emitBuffer, _noop.noop)));
    }, _noop.noop));
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      var e_1, _a;

      try {
        for (var buffers_1 = (0, _tslib.__values)(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
          var buffer = buffers_1_1.value;
          buffer.push(value);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }, function () {
      while (buffers.length > 0) {
        subscriber.next(buffers.shift());
      }

      subscriber.complete();
    }));
  });
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subscription":"../../node_modules/rxjs/dist/esm5/internal/Subscription.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../util/noop":"../../node_modules/rxjs/dist/esm5/internal/util/noop.js","../util/arrRemove":"../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/bufferWhen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bufferWhen = bufferWhen;

var _lift = require("../util/lift");

var _noop = require("../util/noop");

var _OperatorSubscriber = require("./OperatorSubscriber");

var _from = require("../observable/from");

function bufferWhen(closingSelector) {
  return (0, _lift.operate)(function (source, subscriber) {
    var buffer = null;
    var closingSubscriber = null;

    var openBuffer = function () {
      closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
      var b = buffer;
      buffer = [];
      b && subscriber.next(b);
      (0, _from.innerFrom)(closingSelector()).subscribe(closingSubscriber = new _OperatorSubscriber.OperatorSubscriber(subscriber, openBuffer, _noop.noop));
    };

    openBuffer();
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      return buffer === null || buffer === void 0 ? void 0 : buffer.push(value);
    }, function () {
      buffer && subscriber.next(buffer);
      subscriber.complete();
    }, undefined, function () {
      return buffer = closingSubscriber = null;
    }));
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","../util/noop":"../../node_modules/rxjs/dist/esm5/internal/util/noop.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/catchError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.catchError = catchError;

var _from = require("../observable/from");

var _OperatorSubscriber = require("./OperatorSubscriber");

var _lift = require("../util/lift");

function catchError(selector) {
  return (0, _lift.operate)(function (source, subscriber) {
    var innerSub = null;
    var syncUnsub = false;
    var handledResult;
    innerSub = source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, undefined, undefined, function (err) {
      handledResult = (0, _from.innerFrom)(selector(err, catchError(selector)(source)));

      if (innerSub) {
        innerSub.unsubscribe();
        innerSub = null;
        handledResult.subscribe(subscriber);
      } else {
        syncUnsub = true;
      }
    }));

    if (syncUnsub) {
      innerSub.unsubscribe();
      innerSub = null;
      handledResult.subscribe(subscriber);
    }
  });
}
},{"../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/scanInternals.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scanInternals = scanInternals;

var _OperatorSubscriber = require("./OperatorSubscriber");

function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
  return function (source, subscriber) {
    var hasState = hasSeed;
    var state = seed;
    var index = 0;
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      var i = index++;
      state = hasState ? accumulator(state, value, i) : (hasState = true, value);
      emitOnNext && subscriber.next(state);
    }, emitBeforeComplete && function () {
      hasState && subscriber.next(state);
      subscriber.complete();
    }));
  };
}
},{"./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/reduce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reduce = reduce;

var _scanInternals = require("./scanInternals");

var _lift = require("../util/lift");

function reduce(accumulator, seed) {
  return (0, _lift.operate)((0, _scanInternals.scanInternals)(accumulator, seed, arguments.length >= 2, false, true));
}
},{"./scanInternals":"../../node_modules/rxjs/dist/esm5/internal/operators/scanInternals.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/toArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toArray = toArray;

var _reduce = require("./reduce");

var _lift = require("../util/lift");

var arrReducer = function (arr, value) {
  return arr.push(value), arr;
};

function toArray() {
  return (0, _lift.operate)(function (source, subscriber) {
    (0, _reduce.reduce)(arrReducer, [])(source).subscribe(subscriber);
  });
}
},{"./reduce":"../../node_modules/rxjs/dist/esm5/internal/operators/reduce.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/joinAllInternals.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.joinAllInternals = joinAllInternals;

var _identity = require("../util/identity");

var _mapOneOrManyArgs = require("../util/mapOneOrManyArgs");

var _pipe = require("../util/pipe");

var _mergeMap = require("./mergeMap");

var _toArray = require("./toArray");

function joinAllInternals(joinFn, project) {
  return (0, _pipe.pipe)((0, _toArray.toArray)(), (0, _mergeMap.mergeMap)(function (sources) {
    return joinFn(sources);
  }), project ? (0, _mapOneOrManyArgs.mapOneOrManyArgs)(project) : _identity.identity);
}
},{"../util/identity":"../../node_modules/rxjs/dist/esm5/internal/util/identity.js","../util/mapOneOrManyArgs":"../../node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js","../util/pipe":"../../node_modules/rxjs/dist/esm5/internal/util/pipe.js","./mergeMap":"../../node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js","./toArray":"../../node_modules/rxjs/dist/esm5/internal/operators/toArray.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/combineLatestAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineLatestAll = combineLatestAll;

var _combineLatest = require("../observable/combineLatest");

var _joinAllInternals = require("./joinAllInternals");

function combineLatestAll(project) {
  return (0, _joinAllInternals.joinAllInternals)(_combineLatest.combineLatest, project);
}
},{"../observable/combineLatest":"../../node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js","./joinAllInternals":"../../node_modules/rxjs/dist/esm5/internal/operators/joinAllInternals.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/combineAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineAll = void 0;

var _combineLatestAll = require("./combineLatestAll");

var combineAll = _combineLatestAll.combineLatestAll;
exports.combineAll = combineAll;
},{"./combineLatestAll":"../../node_modules/rxjs/dist/esm5/internal/operators/combineLatestAll.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/combineLatest.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineLatest = combineLatest;

var _tslib = require("tslib");

var _combineLatest = require("../observable/combineLatest");

var _lift = require("../util/lift");

var _argsOrArgArray = require("../util/argsOrArgArray");

var _mapOneOrManyArgs = require("../util/mapOneOrManyArgs");

var _pipe = require("../util/pipe");

var _args = require("../util/args");

function combineLatest() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var resultSelector = (0, _args.popResultSelector)(args);
  return resultSelector ? (0, _pipe.pipe)(combineLatest.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args))), (0, _mapOneOrManyArgs.mapOneOrManyArgs)(resultSelector)) : (0, _lift.operate)(function (source, subscriber) {
    (0, _combineLatest.combineLatestInit)((0, _tslib.__spreadArray)([source], (0, _tslib.__read)((0, _argsOrArgArray.argsOrArgArray)(args))))(subscriber);
  });
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../observable/combineLatest":"../../node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","../util/argsOrArgArray":"../../node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js","../util/mapOneOrManyArgs":"../../node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js","../util/pipe":"../../node_modules/rxjs/dist/esm5/internal/util/pipe.js","../util/args":"../../node_modules/rxjs/dist/esm5/internal/util/args.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/combineLatestWith.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineLatestWith = combineLatestWith;

var _tslib = require("tslib");

var _combineLatest = require("./combineLatest");

function combineLatestWith() {
  var otherSources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    otherSources[_i] = arguments[_i];
  }

  return _combineLatest.combineLatest.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(otherSources)));
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./combineLatest":"../../node_modules/rxjs/dist/esm5/internal/operators/combineLatest.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/concat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concat = concat;

var _tslib = require("tslib");

var _lift = require("../util/lift");

var _concatAll = require("./concatAll");

var _fromArray = require("../observable/fromArray");

var _args = require("../util/args");

function concat() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var scheduler = (0, _args.popScheduler)(args);
  return (0, _lift.operate)(function (source, subscriber) {
    (0, _concatAll.concatAll)()((0, _fromArray.internalFromArray)((0, _tslib.__spreadArray)([source], (0, _tslib.__read)(args)), scheduler)).subscribe(subscriber);
  });
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./concatAll":"../../node_modules/rxjs/dist/esm5/internal/operators/concatAll.js","../observable/fromArray":"../../node_modules/rxjs/dist/esm5/internal/observable/fromArray.js","../util/args":"../../node_modules/rxjs/dist/esm5/internal/util/args.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/concatMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatMap = concatMap;

var _mergeMap = require("./mergeMap");

var _isFunction = require("../util/isFunction");

function concatMap(project, resultSelector) {
  return (0, _isFunction.isFunction)(resultSelector) ? (0, _mergeMap.mergeMap)(project, resultSelector, 1) : (0, _mergeMap.mergeMap)(project, 1);
}
},{"./mergeMap":"../../node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js","../util/isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/concatMapTo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatMapTo = concatMapTo;

var _concatMap = require("./concatMap");

var _isFunction = require("../util/isFunction");

function concatMapTo(innerObservable, resultSelector) {
  return (0, _isFunction.isFunction)(resultSelector) ? (0, _concatMap.concatMap)(function () {
    return innerObservable;
  }, resultSelector) : (0, _concatMap.concatMap)(function () {
    return innerObservable;
  });
}
},{"./concatMap":"../../node_modules/rxjs/dist/esm5/internal/operators/concatMap.js","../util/isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/concatWith.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatWith = concatWith;

var _tslib = require("tslib");

var _concat = require("./concat");

function concatWith() {
  var otherSources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    otherSources[_i] = arguments[_i];
  }

  return _concat.concat.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(otherSources)));
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./concat":"../../node_modules/rxjs/dist/esm5/internal/operators/concat.js"}],"../../node_modules/rxjs/dist/esm5/internal/observable/fromSubscribable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromSubscribable = fromSubscribable;

var _Observable = require("../Observable");

function fromSubscribable(subscribable) {
  return new _Observable.Observable(function (subscriber) {
    return subscribable.subscribe(subscriber);
  });
}
},{"../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/connect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = connect;

var _Subject = require("../Subject");

var _from = require("../observable/from");

var _lift = require("../util/lift");

var _fromSubscribable = require("../observable/fromSubscribable");

var DEFAULT_CONFIG = {
  connector: function () {
    return new _Subject.Subject();
  }
};

function connect(selector, config) {
  if (config === void 0) {
    config = DEFAULT_CONFIG;
  }

  var connector = config.connector;
  return (0, _lift.operate)(function (source, subscriber) {
    var subject = connector();
    (0, _from.from)(selector((0, _fromSubscribable.fromSubscribable)(subject))).subscribe(subscriber);
    subscriber.add(source.subscribe(subject));
  });
}
},{"../Subject":"../../node_modules/rxjs/dist/esm5/internal/Subject.js","../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","../observable/fromSubscribable":"../../node_modules/rxjs/dist/esm5/internal/observable/fromSubscribable.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/count.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.count = count;

var _reduce = require("./reduce");

function count(predicate) {
  return (0, _reduce.reduce)(function (total, value, i) {
    return !predicate || predicate(value, i) ? total + 1 : total;
  }, 0);
}
},{"./reduce":"../../node_modules/rxjs/dist/esm5/internal/operators/reduce.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/debounce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = debounce;

var _lift = require("../util/lift");

var _noop = require("../util/noop");

var _OperatorSubscriber = require("./OperatorSubscriber");

var _from = require("../observable/from");

function debounce(durationSelector) {
  return (0, _lift.operate)(function (source, subscriber) {
    var hasValue = false;
    var lastValue = null;
    var durationSubscriber = null;

    var emit = function () {
      durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
      durationSubscriber = null;

      if (hasValue) {
        hasValue = false;
        var value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };

    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
      hasValue = true;
      lastValue = value;
      durationSubscriber = new _OperatorSubscriber.OperatorSubscriber(subscriber, emit, _noop.noop);
      (0, _from.innerFrom)(durationSelector(value)).subscribe(durationSubscriber);
    }, function () {
      emit();
      subscriber.complete();
    }, undefined, function () {
      lastValue = durationSubscriber = null;
    }));
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","../util/noop":"../../node_modules/rxjs/dist/esm5/internal/util/noop.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounceTime = debounceTime;

var _async = require("../scheduler/async");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function debounceTime(dueTime, scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.asyncScheduler;
  }

  return (0, _lift.operate)(function (source, subscriber) {
    var activeTask = null;
    var lastValue = null;
    var lastTime = null;

    var emit = function () {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        var value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };

    function emitWhenIdle() {
      var targetTime = lastTime + dueTime;
      var now = scheduler.now();

      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        return;
      }

      emit();
    }

    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      lastValue = value;
      lastTime = scheduler.now();

      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
      }
    }, function () {
      emit();
      subscriber.complete();
    }, undefined, function () {
      lastValue = activeTask = null;
    }));
  });
}
},{"../scheduler/async":"../../node_modules/rxjs/dist/esm5/internal/scheduler/async.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/defaultIfEmpty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultIfEmpty = defaultIfEmpty;

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function defaultIfEmpty(defaultValue) {
  return (0, _lift.operate)(function (source, subscriber) {
    var hasValue = false;
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      hasValue = true;
      subscriber.next(value);
    }, function () {
      if (!hasValue) {
        subscriber.next(defaultValue);
      }

      subscriber.complete();
    }));
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/take.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.take = take;

var _empty = require("../observable/empty");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function take(count) {
  return count <= 0 ? function () {
    return _empty.EMPTY;
  } : (0, _lift.operate)(function (source, subscriber) {
    var seen = 0;
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      if (++seen <= count) {
        subscriber.next(value);

        if (count <= seen) {
          subscriber.complete();
        }
      }
    }));
  });
}
},{"../observable/empty":"../../node_modules/rxjs/dist/esm5/internal/observable/empty.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/ignoreElements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ignoreElements = ignoreElements;

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

var _noop = require("../util/noop");

function ignoreElements() {
  return (0, _lift.operate)(function (source, subscriber) {
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, _noop.noop));
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../util/noop":"../../node_modules/rxjs/dist/esm5/internal/util/noop.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/mapTo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapTo = mapTo;

var _map = require("./map");

function mapTo(value) {
  return (0, _map.map)(function () {
    return value;
  });
}
},{"./map":"../../node_modules/rxjs/dist/esm5/internal/operators/map.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/delayWhen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delayWhen = delayWhen;

var _concat = require("../observable/concat");

var _take = require("./take");

var _ignoreElements = require("./ignoreElements");

var _mapTo = require("./mapTo");

var _mergeMap = require("./mergeMap");

function delayWhen(delayDurationSelector, subscriptionDelay) {
  if (subscriptionDelay) {
    return function (source) {
      return (0, _concat.concat)(subscriptionDelay.pipe((0, _take.take)(1), (0, _ignoreElements.ignoreElements)()), source.pipe(delayWhen(delayDurationSelector)));
    };
  }

  return (0, _mergeMap.mergeMap)(function (value, index) {
    return delayDurationSelector(value, index).pipe((0, _take.take)(1), (0, _mapTo.mapTo)(value));
  });
}
},{"../observable/concat":"../../node_modules/rxjs/dist/esm5/internal/observable/concat.js","./take":"../../node_modules/rxjs/dist/esm5/internal/operators/take.js","./ignoreElements":"../../node_modules/rxjs/dist/esm5/internal/operators/ignoreElements.js","./mapTo":"../../node_modules/rxjs/dist/esm5/internal/operators/mapTo.js","./mergeMap":"../../node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/delay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delay = delay;

var _async = require("../scheduler/async");

var _delayWhen = require("./delayWhen");

var _timer = require("../observable/timer");

function delay(due, scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.asyncScheduler;
  }

  var duration = (0, _timer.timer)(due, scheduler);
  return (0, _delayWhen.delayWhen)(function () {
    return duration;
  });
}
},{"../scheduler/async":"../../node_modules/rxjs/dist/esm5/internal/scheduler/async.js","./delayWhen":"../../node_modules/rxjs/dist/esm5/internal/operators/delayWhen.js","../observable/timer":"../../node_modules/rxjs/dist/esm5/internal/observable/timer.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/dematerialize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dematerialize = dematerialize;

var _Notification = require("../Notification");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function dematerialize() {
  return (0, _lift.operate)(function (source, subscriber) {
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (notification) {
      return (0, _Notification.observeNotification)(notification, subscriber);
    }));
  });
}
},{"../Notification":"../../node_modules/rxjs/dist/esm5/internal/Notification.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/distinct.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distinct = distinct;

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

var _noop = require("../util/noop");

function distinct(keySelector, flushes) {
  return (0, _lift.operate)(function (source, subscriber) {
    var distinctKeys = new Set();
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      var key = keySelector ? keySelector(value) : value;

      if (!distinctKeys.has(key)) {
        distinctKeys.add(key);
        subscriber.next(value);
      }
    }));
    flushes === null || flushes === void 0 ? void 0 : flushes.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function () {
      return distinctKeys.clear();
    }, _noop.noop));
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../util/noop":"../../node_modules/rxjs/dist/esm5/internal/util/noop.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distinctUntilChanged = distinctUntilChanged;

var _identity = require("../util/identity");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function distinctUntilChanged(comparator, keySelector) {
  if (keySelector === void 0) {
    keySelector = _identity.identity;
  }

  comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
  return (0, _lift.operate)(function (source, subscriber) {
    var previousKey;
    var first = true;
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      var currentKey = keySelector(value);

      if (first || !comparator(previousKey, currentKey)) {
        first = false;
        previousKey = currentKey;
        subscriber.next(value);
      }
    }));
  });
}

function defaultCompare(a, b) {
  return a === b;
}
},{"../util/identity":"../../node_modules/rxjs/dist/esm5/internal/util/identity.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/distinctUntilKeyChanged.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distinctUntilKeyChanged = distinctUntilKeyChanged;

var _distinctUntilChanged = require("./distinctUntilChanged");

function distinctUntilKeyChanged(key, compare) {
  return (0, _distinctUntilChanged.distinctUntilChanged)(function (x, y) {
    return compare ? compare(x[key], y[key]) : x[key] === y[key];
  });
}
},{"./distinctUntilChanged":"../../node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/throwIfEmpty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throwIfEmpty = throwIfEmpty;

var _EmptyError = require("../util/EmptyError");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function throwIfEmpty(errorFactory) {
  if (errorFactory === void 0) {
    errorFactory = defaultErrorFactory;
  }

  return (0, _lift.operate)(function (source, subscriber) {
    var hasValue = false;
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      hasValue = true;
      subscriber.next(value);
    }, function () {
      return hasValue ? subscriber.complete() : subscriber.error(errorFactory());
    }));
  });
}

function defaultErrorFactory() {
  return new _EmptyError.EmptyError();
}
},{"../util/EmptyError":"../../node_modules/rxjs/dist/esm5/internal/util/EmptyError.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/elementAt.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementAt = elementAt;

var _ArgumentOutOfRangeError = require("../util/ArgumentOutOfRangeError");

var _filter = require("./filter");

var _throwIfEmpty = require("./throwIfEmpty");

var _defaultIfEmpty = require("./defaultIfEmpty");

var _take = require("./take");

function elementAt(index, defaultValue) {
  if (index < 0) {
    throw new _ArgumentOutOfRangeError.ArgumentOutOfRangeError();
  }

  var hasDefaultValue = arguments.length >= 2;
  return function (source) {
    return source.pipe((0, _filter.filter)(function (v, i) {
      return i === index;
    }), (0, _take.take)(1), hasDefaultValue ? (0, _defaultIfEmpty.defaultIfEmpty)(defaultValue) : (0, _throwIfEmpty.throwIfEmpty)(function () {
      return new _ArgumentOutOfRangeError.ArgumentOutOfRangeError();
    }));
  };
}
},{"../util/ArgumentOutOfRangeError":"../../node_modules/rxjs/dist/esm5/internal/util/ArgumentOutOfRangeError.js","./filter":"../../node_modules/rxjs/dist/esm5/internal/operators/filter.js","./throwIfEmpty":"../../node_modules/rxjs/dist/esm5/internal/operators/throwIfEmpty.js","./defaultIfEmpty":"../../node_modules/rxjs/dist/esm5/internal/operators/defaultIfEmpty.js","./take":"../../node_modules/rxjs/dist/esm5/internal/operators/take.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/endWith.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endWith = endWith;

var _tslib = require("tslib");

var _concat = require("../observable/concat");

var _of = require("../observable/of");

function endWith() {
  var values = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    values[_i] = arguments[_i];
  }

  return function (source) {
    return (0, _concat.concat)(source, _of.of.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(values))));
  };
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../observable/concat":"../../node_modules/rxjs/dist/esm5/internal/observable/concat.js","../observable/of":"../../node_modules/rxjs/dist/esm5/internal/observable/of.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/every.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.every = every;

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function every(predicate, thisArg) {
  return (0, _lift.operate)(function (source, subscriber) {
    var index = 0;
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      if (!predicate.call(thisArg, value, index++, source)) {
        subscriber.next(false);
        subscriber.complete();
      }
    }, function () {
      subscriber.next(true);
      subscriber.complete();
    }));
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/exhaustAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exhaustAll = exhaustAll;

var _lift = require("../util/lift");

var _from = require("../observable/from");

var _OperatorSubscriber = require("./OperatorSubscriber");

function exhaustAll() {
  return (0, _lift.operate)(function (source, subscriber) {
    var isComplete = false;
    var innerSub = null;
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (inner) {
      if (!innerSub) {
        innerSub = (0, _from.innerFrom)(inner).subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, undefined, function () {
          innerSub = null;
          isComplete && subscriber.complete();
        }));
      }
    }, function () {
      isComplete = true;
      !innerSub && subscriber.complete();
    }));
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/exhaust.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exhaust = void 0;

var _exhaustAll = require("./exhaustAll");

var exhaust = _exhaustAll.exhaustAll;
exports.exhaust = exhaust;
},{"./exhaustAll":"../../node_modules/rxjs/dist/esm5/internal/operators/exhaustAll.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/exhaustMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exhaustMap = exhaustMap;

var _map = require("./map");

var _from = require("../observable/from");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function exhaustMap(project, resultSelector) {
  if (resultSelector) {
    return function (source) {
      return source.pipe(exhaustMap(function (a, i) {
        return (0, _from.innerFrom)(project(a, i)).pipe((0, _map.map)(function (b, ii) {
          return resultSelector(a, b, i, ii);
        }));
      }));
    };
  }

  return (0, _lift.operate)(function (source, subscriber) {
    var index = 0;
    var innerSub = null;
    var isComplete = false;
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (outerValue) {
      if (!innerSub) {
        innerSub = new _OperatorSubscriber.OperatorSubscriber(subscriber, undefined, function () {
          innerSub = null;
          isComplete && subscriber.complete();
        });
        (0, _from.innerFrom)(project(outerValue, index++)).subscribe(innerSub);
      }
    }, function () {
      isComplete = true;
      !innerSub && subscriber.complete();
    }));
  });
}
},{"./map":"../../node_modules/rxjs/dist/esm5/internal/operators/map.js","../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/expand.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expand = expand;

var _lift = require("../util/lift");

var _mergeInternals = require("./mergeInternals");

function expand(project, concurrent, scheduler) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }

  concurrent = (concurrent || 0) < 1 ? Infinity : concurrent;
  return (0, _lift.operate)(function (source, subscriber) {
    return (0, _mergeInternals.mergeInternals)(source, subscriber, project, concurrent, undefined, true, scheduler);
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./mergeInternals":"../../node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/finalize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.finalize = finalize;

var _lift = require("../util/lift");

function finalize(callback) {
  return (0, _lift.operate)(function (source, subscriber) {
    try {
      source.subscribe(subscriber);
    } finally {
      subscriber.add(callback);
    }
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/find.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = find;
exports.createFind = createFind;

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function find(predicate, thisArg) {
  return (0, _lift.operate)(createFind(predicate, thisArg, 'value'));
}

function createFind(predicate, thisArg, emit) {
  var findIndex = emit === 'index';
  return function (source, subscriber) {
    var index = 0;
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      var i = index++;

      if (predicate.call(thisArg, value, i, source)) {
        subscriber.next(findIndex ? i : value);
        subscriber.complete();
      }
    }, function () {
      subscriber.next(findIndex ? -1 : undefined);
      subscriber.complete();
    }));
  };
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/findIndex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findIndex = findIndex;

var _lift = require("../util/lift");

var _find = require("./find");

function findIndex(predicate, thisArg) {
  return (0, _lift.operate)((0, _find.createFind)(predicate, thisArg, 'index'));
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./find":"../../node_modules/rxjs/dist/esm5/internal/operators/find.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/first.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.first = first;

var _EmptyError = require("../util/EmptyError");

var _filter = require("./filter");

var _take = require("./take");

var _defaultIfEmpty = require("./defaultIfEmpty");

var _throwIfEmpty = require("./throwIfEmpty");

var _identity = require("../util/identity");

function first(predicate, defaultValue) {
  var hasDefaultValue = arguments.length >= 2;
  return function (source) {
    return source.pipe(predicate ? (0, _filter.filter)(function (v, i) {
      return predicate(v, i, source);
    }) : _identity.identity, (0, _take.take)(1), hasDefaultValue ? (0, _defaultIfEmpty.defaultIfEmpty)(defaultValue) : (0, _throwIfEmpty.throwIfEmpty)(function () {
      return new _EmptyError.EmptyError();
    }));
  };
}
},{"../util/EmptyError":"../../node_modules/rxjs/dist/esm5/internal/util/EmptyError.js","./filter":"../../node_modules/rxjs/dist/esm5/internal/operators/filter.js","./take":"../../node_modules/rxjs/dist/esm5/internal/operators/take.js","./defaultIfEmpty":"../../node_modules/rxjs/dist/esm5/internal/operators/defaultIfEmpty.js","./throwIfEmpty":"../../node_modules/rxjs/dist/esm5/internal/operators/throwIfEmpty.js","../util/identity":"../../node_modules/rxjs/dist/esm5/internal/util/identity.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/groupBy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupBy = groupBy;

var _tslib = require("tslib");

var _Observable = require("../Observable");

var _from = require("../observable/from");

var _Subject = require("../Subject");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function groupBy(keySelector, elementOrOptions, duration, connector) {
  return (0, _lift.operate)(function (source, subscriber) {
    var element;

    if (!elementOrOptions || typeof elementOrOptions === 'function') {
      element = elementOrOptions;
    } else {
      duration = elementOrOptions.duration, element = elementOrOptions.element, connector = elementOrOptions.connector;
    }

    var groups = new Map();

    var notify = function (cb) {
      groups.forEach(cb);
      cb(subscriber);
    };

    var handleError = function (err) {
      return notify(function (consumer) {
        return consumer.error(err);
      });
    };

    var groupBySourceSubscriber = new GroupBySubscriber(subscriber, function (value) {
      try {
        var key_1 = keySelector(value);
        var group_1 = groups.get(key_1);

        if (!group_1) {
          groups.set(key_1, group_1 = connector ? connector() : new _Subject.Subject());
          var grouped = createGroupedObservable(key_1, group_1);
          subscriber.next(grouped);

          if (duration) {
            var durationSubscriber_1 = new _OperatorSubscriber.OperatorSubscriber(group_1, function () {
              group_1.complete();
              durationSubscriber_1 === null || durationSubscriber_1 === void 0 ? void 0 : durationSubscriber_1.unsubscribe();
            }, undefined, undefined, function () {
              return groups.delete(key_1);
            });
            groupBySourceSubscriber.add((0, _from.innerFrom)(duration(grouped)).subscribe(durationSubscriber_1));
          }
        }

        group_1.next(element ? element(value) : value);
      } catch (err) {
        handleError(err);
      }
    }, function () {
      return notify(function (consumer) {
        return consumer.complete();
      });
    }, handleError, function () {
      return groups.clear();
    });
    source.subscribe(groupBySourceSubscriber);

    function createGroupedObservable(key, groupSubject) {
      var result = new _Observable.Observable(function (groupSubscriber) {
        groupBySourceSubscriber.activeGroups++;
        var innerSub = groupSubject.subscribe(groupSubscriber);
        return function () {
          innerSub.unsubscribe();
          --groupBySourceSubscriber.activeGroups === 0 && groupBySourceSubscriber.teardownAttempted && groupBySourceSubscriber.unsubscribe();
        };
      });
      result.key = key;
      return result;
    }
  });
}

var GroupBySubscriber = function (_super) {
  (0, _tslib.__extends)(GroupBySubscriber, _super);

  function GroupBySubscriber() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.activeGroups = 0;
    _this.teardownAttempted = false;
    return _this;
  }

  GroupBySubscriber.prototype.unsubscribe = function () {
    this.teardownAttempted = true;
    this.activeGroups === 0 && _super.prototype.unsubscribe.call(this);
  };

  return GroupBySubscriber;
}(_OperatorSubscriber.OperatorSubscriber);
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","../Subject":"../../node_modules/rxjs/dist/esm5/internal/Subject.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/isEmpty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmpty = isEmpty;

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function isEmpty() {
  return (0, _lift.operate)(function (source, subscriber) {
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function () {
      subscriber.next(false);
      subscriber.complete();
    }, function () {
      subscriber.next(true);
      subscriber.complete();
    }));
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/takeLast.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeLast = takeLast;

var _tslib = require("tslib");

var _empty = require("../observable/empty");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function takeLast(count) {
  return count <= 0 ? function () {
    return _empty.EMPTY;
  } : (0, _lift.operate)(function (source, subscriber) {
    var buffer = [];
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      buffer.push(value);
      count < buffer.length && buffer.shift();
    }, function () {
      var e_1, _a;

      try {
        for (var buffer_1 = (0, _tslib.__values)(buffer), buffer_1_1 = buffer_1.next(); !buffer_1_1.done; buffer_1_1 = buffer_1.next()) {
          var value = buffer_1_1.value;
          subscriber.next(value);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (buffer_1_1 && !buffer_1_1.done && (_a = buffer_1.return)) _a.call(buffer_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      subscriber.complete();
    }, undefined, function () {
      buffer = null;
    }));
  });
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../observable/empty":"../../node_modules/rxjs/dist/esm5/internal/observable/empty.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.last = last;

var _EmptyError = require("../util/EmptyError");

var _filter = require("./filter");

var _takeLast = require("./takeLast");

var _throwIfEmpty = require("./throwIfEmpty");

var _defaultIfEmpty = require("./defaultIfEmpty");

var _identity = require("../util/identity");

function last(predicate, defaultValue) {
  var hasDefaultValue = arguments.length >= 2;
  return function (source) {
    return source.pipe(predicate ? (0, _filter.filter)(function (v, i) {
      return predicate(v, i, source);
    }) : _identity.identity, (0, _takeLast.takeLast)(1), hasDefaultValue ? (0, _defaultIfEmpty.defaultIfEmpty)(defaultValue) : (0, _throwIfEmpty.throwIfEmpty)(function () {
      return new _EmptyError.EmptyError();
    }));
  };
}
},{"../util/EmptyError":"../../node_modules/rxjs/dist/esm5/internal/util/EmptyError.js","./filter":"../../node_modules/rxjs/dist/esm5/internal/operators/filter.js","./takeLast":"../../node_modules/rxjs/dist/esm5/internal/operators/takeLast.js","./throwIfEmpty":"../../node_modules/rxjs/dist/esm5/internal/operators/throwIfEmpty.js","./defaultIfEmpty":"../../node_modules/rxjs/dist/esm5/internal/operators/defaultIfEmpty.js","../util/identity":"../../node_modules/rxjs/dist/esm5/internal/util/identity.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/materialize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.materialize = materialize;

var _Notification = require("../Notification");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function materialize() {
  return (0, _lift.operate)(function (source, subscriber) {
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      subscriber.next(_Notification.Notification.createNext(value));
    }, function () {
      subscriber.next(_Notification.Notification.createComplete());
      subscriber.complete();
    }, function (err) {
      subscriber.next(_Notification.Notification.createError(err));
      subscriber.complete();
    }));
  });
}
},{"../Notification":"../../node_modules/rxjs/dist/esm5/internal/Notification.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/max.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.max = max;

var _reduce = require("./reduce");

var _isFunction = require("../util/isFunction");

function max(comparer) {
  return (0, _reduce.reduce)((0, _isFunction.isFunction)(comparer) ? function (x, y) {
    return comparer(x, y) > 0 ? x : y;
  } : function (x, y) {
    return x > y ? x : y;
  });
}
},{"./reduce":"../../node_modules/rxjs/dist/esm5/internal/operators/reduce.js","../util/isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/merge.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = merge;

var _tslib = require("tslib");

var _lift = require("../util/lift");

var _argsOrArgArray = require("../util/argsOrArgArray");

var _fromArray = require("../observable/fromArray");

var _mergeAll = require("./mergeAll");

var _args = require("../util/args");

function merge() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var scheduler = (0, _args.popScheduler)(args);
  var concurrent = (0, _args.popNumber)(args, Infinity);
  args = (0, _argsOrArgArray.argsOrArgArray)(args);
  return (0, _lift.operate)(function (source, subscriber) {
    (0, _mergeAll.mergeAll)(concurrent)((0, _fromArray.internalFromArray)((0, _tslib.__spreadArray)([source], (0, _tslib.__read)(args)), scheduler)).subscribe(subscriber);
  });
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","../util/argsOrArgArray":"../../node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js","../observable/fromArray":"../../node_modules/rxjs/dist/esm5/internal/observable/fromArray.js","./mergeAll":"../../node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js","../util/args":"../../node_modules/rxjs/dist/esm5/internal/util/args.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/flatMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flatMap = void 0;

var _mergeMap = require("./mergeMap");

var flatMap = _mergeMap.mergeMap;
exports.flatMap = flatMap;
},{"./mergeMap":"../../node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/mergeMapTo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMapTo = mergeMapTo;

var _mergeMap = require("./mergeMap");

var _isFunction = require("../util/isFunction");

function mergeMapTo(innerObservable, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }

  if ((0, _isFunction.isFunction)(resultSelector)) {
    return (0, _mergeMap.mergeMap)(function () {
      return innerObservable;
    }, resultSelector, concurrent);
  }

  if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }

  return (0, _mergeMap.mergeMap)(function () {
    return innerObservable;
  }, concurrent);
}
},{"./mergeMap":"../../node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js","../util/isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/mergeScan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeScan = mergeScan;

var _lift = require("../util/lift");

var _mergeInternals = require("./mergeInternals");

function mergeScan(accumulator, seed, concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }

  return (0, _lift.operate)(function (source, subscriber) {
    var state = seed;
    return (0, _mergeInternals.mergeInternals)(source, subscriber, function (value, index) {
      return accumulator(state, value, index);
    }, concurrent, function (value) {
      state = value;
    }, false, undefined, function () {
      return state = null;
    });
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./mergeInternals":"../../node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/mergeWith.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeWith = mergeWith;

var _tslib = require("tslib");

var _merge = require("./merge");

function mergeWith() {
  var otherSources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    otherSources[_i] = arguments[_i];
  }

  return _merge.merge.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(otherSources)));
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./merge":"../../node_modules/rxjs/dist/esm5/internal/operators/merge.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/min.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.min = min;

var _reduce = require("./reduce");

var _isFunction = require("../util/isFunction");

function min(comparer) {
  return (0, _reduce.reduce)((0, _isFunction.isFunction)(comparer) ? function (x, y) {
    return comparer(x, y) < 0 ? x : y;
  } : function (x, y) {
    return x < y ? x : y;
  });
}
},{"./reduce":"../../node_modules/rxjs/dist/esm5/internal/operators/reduce.js","../util/isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/multicast.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multicast = multicast;

var _ConnectableObservable = require("../observable/ConnectableObservable");

var _isFunction = require("../util/isFunction");

var _connect = require("./connect");

function multicast(subjectOrSubjectFactory, selector) {
  var subjectFactory = (0, _isFunction.isFunction)(subjectOrSubjectFactory) ? subjectOrSubjectFactory : function () {
    return subjectOrSubjectFactory;
  };

  if ((0, _isFunction.isFunction)(selector)) {
    return (0, _connect.connect)(selector, {
      connector: subjectFactory
    });
  }

  return function (source) {
    return new _ConnectableObservable.ConnectableObservable(source, subjectFactory);
  };
}
},{"../observable/ConnectableObservable":"../../node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js","../util/isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js","./connect":"../../node_modules/rxjs/dist/esm5/internal/operators/connect.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/pairwise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pairwise = pairwise;

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function pairwise() {
  return (0, _lift.operate)(function (source, subscriber) {
    var prev;
    var hasPrev = false;
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      var p = prev;
      prev = value;
      hasPrev && subscriber.next([p, value]);
      hasPrev = true;
    }));
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/partition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partition = partition;

var _not = require("../util/not");

var _filter = require("./filter");

function partition(predicate, thisArg) {
  return function (source) {
    return [(0, _filter.filter)(predicate, thisArg)(source), (0, _filter.filter)((0, _not.not)(predicate, thisArg))(source)];
  };
}
},{"../util/not":"../../node_modules/rxjs/dist/esm5/internal/util/not.js","./filter":"../../node_modules/rxjs/dist/esm5/internal/operators/filter.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/pluck.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pluck = pluck;

var _map = require("./map");

function pluck() {
  var properties = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    properties[_i] = arguments[_i];
  }

  var length = properties.length;

  if (length === 0) {
    throw new Error('list of properties cannot be empty.');
  }

  return (0, _map.map)(function (x) {
    var currentProp = x;

    for (var i = 0; i < length; i++) {
      var p = currentProp === null || currentProp === void 0 ? void 0 : currentProp[properties[i]];

      if (typeof p !== 'undefined') {
        currentProp = p;
      } else {
        return undefined;
      }
    }

    return currentProp;
  });
}
},{"./map":"../../node_modules/rxjs/dist/esm5/internal/operators/map.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/publish.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publish = publish;

var _Subject = require("../Subject");

var _multicast = require("./multicast");

var _connect = require("./connect");

function publish(selector) {
  return selector ? function (source) {
    return (0, _connect.connect)(selector)(source);
  } : function (source) {
    return (0, _multicast.multicast)(new _Subject.Subject())(source);
  };
}
},{"../Subject":"../../node_modules/rxjs/dist/esm5/internal/Subject.js","./multicast":"../../node_modules/rxjs/dist/esm5/internal/operators/multicast.js","./connect":"../../node_modules/rxjs/dist/esm5/internal/operators/connect.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/publishBehavior.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publishBehavior = publishBehavior;

var _BehaviorSubject = require("../BehaviorSubject");

var _ConnectableObservable = require("../observable/ConnectableObservable");

function publishBehavior(initialValue) {
  return function (source) {
    var subject = new _BehaviorSubject.BehaviorSubject(initialValue);
    return new _ConnectableObservable.ConnectableObservable(source, function () {
      return subject;
    });
  };
}
},{"../BehaviorSubject":"../../node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js","../observable/ConnectableObservable":"../../node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/publishLast.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publishLast = publishLast;

var _AsyncSubject = require("../AsyncSubject");

var _ConnectableObservable = require("../observable/ConnectableObservable");

function publishLast() {
  return function (source) {
    var subject = new _AsyncSubject.AsyncSubject();
    return new _ConnectableObservable.ConnectableObservable(source, function () {
      return subject;
    });
  };
}
},{"../AsyncSubject":"../../node_modules/rxjs/dist/esm5/internal/AsyncSubject.js","../observable/ConnectableObservable":"../../node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/publishReplay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publishReplay = publishReplay;

var _ReplaySubject = require("../ReplaySubject");

var _multicast = require("./multicast");

var _isFunction = require("../util/isFunction");

function publishReplay(bufferSize, windowTime, selectorOrScheduler, timestampProvider) {
  if (selectorOrScheduler && !(0, _isFunction.isFunction)(selectorOrScheduler)) {
    timestampProvider = selectorOrScheduler;
  }

  var selector = (0, _isFunction.isFunction)(selectorOrScheduler) ? selectorOrScheduler : undefined;
  return function (source) {
    return (0, _multicast.multicast)(new _ReplaySubject.ReplaySubject(bufferSize, windowTime, timestampProvider), selector)(source);
  };
}
},{"../ReplaySubject":"../../node_modules/rxjs/dist/esm5/internal/ReplaySubject.js","./multicast":"../../node_modules/rxjs/dist/esm5/internal/operators/multicast.js","../util/isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/raceWith.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.raceWith = raceWith;

var _tslib = require("tslib");

var _race = require("../observable/race");

var _lift = require("../util/lift");

var _identity = require("../util/identity");

function raceWith() {
  var otherSources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    otherSources[_i] = arguments[_i];
  }

  return !otherSources.length ? _identity.identity : (0, _lift.operate)(function (source, subscriber) {
    (0, _race.raceInit)((0, _tslib.__spreadArray)([source], (0, _tslib.__read)(otherSources)))(subscriber);
  });
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../observable/race":"../../node_modules/rxjs/dist/esm5/internal/observable/race.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","../util/identity":"../../node_modules/rxjs/dist/esm5/internal/util/identity.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/race.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.race = race;

var _tslib = require("tslib");

var _argsOrArgArray = require("../util/argsOrArgArray");

var _raceWith = require("./raceWith");

function race() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return _raceWith.raceWith.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)((0, _argsOrArgArray.argsOrArgArray)(args))));
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../util/argsOrArgArray":"../../node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js","./raceWith":"../../node_modules/rxjs/dist/esm5/internal/operators/raceWith.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/repeat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeat = repeat;

var _empty = require("../observable/empty");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function repeat(count) {
  if (count === void 0) {
    count = Infinity;
  }

  return count <= 0 ? function () {
    return _empty.EMPTY;
  } : (0, _lift.operate)(function (source, subscriber) {
    var soFar = 0;
    var innerSub;

    var subscribeForRepeat = function () {
      var syncUnsub = false;
      innerSub = source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, undefined, function () {
        if (++soFar < count) {
          if (innerSub) {
            innerSub.unsubscribe();
            innerSub = null;
            subscribeForRepeat();
          } else {
            syncUnsub = true;
          }
        } else {
          subscriber.complete();
        }
      }));

      if (syncUnsub) {
        innerSub.unsubscribe();
        innerSub = null;
        subscribeForRepeat();
      }
    };

    subscribeForRepeat();
  });
}
},{"../observable/empty":"../../node_modules/rxjs/dist/esm5/internal/observable/empty.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/repeatWhen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeatWhen = repeatWhen;

var _Subject = require("../Subject");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function repeatWhen(notifier) {
  return (0, _lift.operate)(function (source, subscriber) {
    var innerSub;
    var syncResub = false;
    var completions$;
    var isNotifierComplete = false;
    var isMainComplete = false;

    var checkComplete = function () {
      return isMainComplete && isNotifierComplete && (subscriber.complete(), true);
    };

    var getCompletionSubject = function () {
      if (!completions$) {
        completions$ = new _Subject.Subject();
        notifier(completions$).subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function () {
          if (innerSub) {
            subscribeForRepeatWhen();
          } else {
            syncResub = true;
          }
        }, function () {
          isNotifierComplete = true;
          checkComplete();
        }));
      }

      return completions$;
    };

    var subscribeForRepeatWhen = function () {
      isMainComplete = false;
      innerSub = source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, undefined, function () {
        isMainComplete = true;
        !checkComplete() && getCompletionSubject().next();
      }));

      if (syncResub) {
        innerSub.unsubscribe();
        innerSub = null;
        syncResub = false;
        subscribeForRepeatWhen();
      }
    };

    subscribeForRepeatWhen();
  });
}
},{"../Subject":"../../node_modules/rxjs/dist/esm5/internal/Subject.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/retry.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retry = retry;

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

var _identity = require("../util/identity");

function retry(configOrCount) {
  if (configOrCount === void 0) {
    configOrCount = Infinity;
  }

  var config;

  if (configOrCount && typeof configOrCount === 'object') {
    config = configOrCount;
  } else {
    config = {
      count: configOrCount
    };
  }

  var count = config.count,
      _a = config.resetOnSuccess,
      resetOnSuccess = _a === void 0 ? false : _a;
  return count <= 0 ? _identity.identity : (0, _lift.operate)(function (source, subscriber) {
    var soFar = 0;
    var innerSub;

    var subscribeForRetry = function () {
      var syncUnsub = false;
      innerSub = source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
        if (resetOnSuccess) {
          soFar = 0;
        }

        subscriber.next(value);
      }, undefined, function (err) {
        if (soFar++ < count) {
          if (innerSub) {
            innerSub.unsubscribe();
            innerSub = null;
            subscribeForRetry();
          } else {
            syncUnsub = true;
          }
        } else {
          subscriber.error(err);
        }
      }));

      if (syncUnsub) {
        innerSub.unsubscribe();
        innerSub = null;
        subscribeForRetry();
      }
    };

    subscribeForRetry();
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../util/identity":"../../node_modules/rxjs/dist/esm5/internal/util/identity.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/retryWhen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retryWhen = retryWhen;

var _Subject = require("../Subject");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function retryWhen(notifier) {
  return (0, _lift.operate)(function (source, subscriber) {
    var innerSub;
    var syncResub = false;
    var errors$;

    var subscribeForRetryWhen = function () {
      innerSub = source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, undefined, undefined, function (err) {
        if (!errors$) {
          errors$ = new _Subject.Subject();
          notifier(errors$).subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function () {
            return innerSub ? subscribeForRetryWhen() : syncResub = true;
          }));
        }

        if (errors$) {
          errors$.next(err);
        }
      }));

      if (syncResub) {
        innerSub.unsubscribe();
        innerSub = null;
        syncResub = false;
        subscribeForRetryWhen();
      }
    };

    subscribeForRetryWhen();
  });
}
},{"../Subject":"../../node_modules/rxjs/dist/esm5/internal/Subject.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/sample.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sample = sample;

var _lift = require("../util/lift");

var _noop = require("../util/noop");

var _OperatorSubscriber = require("./OperatorSubscriber");

function sample(notifier) {
  return (0, _lift.operate)(function (source, subscriber) {
    var hasValue = false;
    var lastValue = null;
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      hasValue = true;
      lastValue = value;
    }));

    var emit = function () {
      if (hasValue) {
        hasValue = false;
        var value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };

    notifier.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, emit, _noop.noop));
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","../util/noop":"../../node_modules/rxjs/dist/esm5/internal/util/noop.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/sampleTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sampleTime = sampleTime;

var _async = require("../scheduler/async");

var _sample = require("./sample");

var _interval = require("../observable/interval");

function sampleTime(period, scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.asyncScheduler;
  }

  return (0, _sample.sample)((0, _interval.interval)(period, scheduler));
}
},{"../scheduler/async":"../../node_modules/rxjs/dist/esm5/internal/scheduler/async.js","./sample":"../../node_modules/rxjs/dist/esm5/internal/operators/sample.js","../observable/interval":"../../node_modules/rxjs/dist/esm5/internal/observable/interval.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/scan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scan = scan;

var _lift = require("../util/lift");

var _scanInternals = require("./scanInternals");

function scan(accumulator, seed) {
  return (0, _lift.operate)((0, _scanInternals.scanInternals)(accumulator, seed, arguments.length >= 2, true));
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./scanInternals":"../../node_modules/rxjs/dist/esm5/internal/operators/scanInternals.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/sequenceEqual.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequenceEqual = sequenceEqual;

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function sequenceEqual(compareTo, comparator) {
  if (comparator === void 0) {
    comparator = function (a, b) {
      return a === b;
    };
  }

  return (0, _lift.operate)(function (source, subscriber) {
    var aState = createState();
    var bState = createState();

    var emit = function (isEqual) {
      subscriber.next(isEqual);
      subscriber.complete();
    };

    var createSubscriber = function (selfState, otherState) {
      var sequenceEqualSubscriber = new _OperatorSubscriber.OperatorSubscriber(subscriber, function (a) {
        var buffer = otherState.buffer,
            complete = otherState.complete;

        if (buffer.length === 0) {
          complete ? emit(false) : selfState.buffer.push(a);
        } else {
          !comparator(a, buffer.shift()) && emit(false);
        }
      }, function () {
        selfState.complete = true;
        var complete = otherState.complete,
            buffer = otherState.buffer;
        complete && emit(buffer.length === 0);
        sequenceEqualSubscriber === null || sequenceEqualSubscriber === void 0 ? void 0 : sequenceEqualSubscriber.unsubscribe();
      });
      return sequenceEqualSubscriber;
    };

    source.subscribe(createSubscriber(aState, bState));
    compareTo.subscribe(createSubscriber(bState, aState));
  });
}

function createState() {
  return {
    buffer: [],
    complete: false
  };
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/share.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.share = share;

var _tslib = require("tslib");

var _from = require("../observable/from");

var _take = require("../operators/take");

var _Subject = require("../Subject");

var _Subscriber = require("../Subscriber");

var _lift = require("../util/lift");

function share(options) {
  if (options === void 0) {
    options = {};
  }

  var _a = options.connector,
      connector = _a === void 0 ? function () {
    return new _Subject.Subject();
  } : _a,
      _b = options.resetOnError,
      resetOnError = _b === void 0 ? true : _b,
      _c = options.resetOnComplete,
      resetOnComplete = _c === void 0 ? true : _c,
      _d = options.resetOnRefCountZero,
      resetOnRefCountZero = _d === void 0 ? true : _d;
  return function (wrapperSource) {
    var connection = null;
    var resetConnection = null;
    var subject = null;
    var refCount = 0;
    var hasCompleted = false;
    var hasErrored = false;

    var cancelReset = function () {
      resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
      resetConnection = null;
    };

    var reset = function () {
      cancelReset();
      connection = subject = null;
      hasCompleted = hasErrored = false;
    };

    var resetAndUnsubscribe = function () {
      var conn = connection;
      reset();
      conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
    };

    return (0, _lift.operate)(function (source, subscriber) {
      refCount++;

      if (!hasErrored && !hasCompleted) {
        cancelReset();
      }

      var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
      subscriber.add(function () {
        refCount--;

        if (refCount === 0 && !hasErrored && !hasCompleted) {
          resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
        }
      });
      dest.subscribe(subscriber);

      if (!connection) {
        connection = new _Subscriber.SafeSubscriber({
          next: function (value) {
            return dest.next(value);
          },
          error: function (err) {
            hasErrored = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnError, err);
            dest.error(err);
          },
          complete: function () {
            hasCompleted = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnComplete);
            dest.complete();
          }
        });
        (0, _from.from)(source).subscribe(connection);
      }
    })(wrapperSource);
  };
}

function handleReset(reset, on) {
  var args = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }

  if (on === true) {
    reset();
    return null;
  }

  if (on === false) {
    return null;
  }

  return on.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args))).pipe((0, _take.take)(1)).subscribe(function () {
    return reset();
  });
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","../operators/take":"../../node_modules/rxjs/dist/esm5/internal/operators/take.js","../Subject":"../../node_modules/rxjs/dist/esm5/internal/Subject.js","../Subscriber":"../../node_modules/rxjs/dist/esm5/internal/Subscriber.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shareReplay = shareReplay;

var _ReplaySubject = require("../ReplaySubject");

var _share = require("./share");

function shareReplay(configOrBufferSize, windowTime, scheduler) {
  var _a, _b;

  var bufferSize;
  var refCount = false;

  if (configOrBufferSize && typeof configOrBufferSize === 'object') {
    bufferSize = (_a = configOrBufferSize.bufferSize) !== null && _a !== void 0 ? _a : Infinity;
    windowTime = (_b = configOrBufferSize.windowTime) !== null && _b !== void 0 ? _b : Infinity;
    refCount = !!configOrBufferSize.refCount;
    scheduler = configOrBufferSize.scheduler;
  } else {
    bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
  }

  return (0, _share.share)({
    connector: function () {
      return new _ReplaySubject.ReplaySubject(bufferSize, windowTime, scheduler);
    },
    resetOnError: true,
    resetOnComplete: false,
    resetOnRefCountZero: refCount
  });
}
},{"../ReplaySubject":"../../node_modules/rxjs/dist/esm5/internal/ReplaySubject.js","./share":"../../node_modules/rxjs/dist/esm5/internal/operators/share.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/single.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.single = single;

var _EmptyError = require("../util/EmptyError");

var _SequenceError = require("../util/SequenceError");

var _NotFoundError = require("../util/NotFoundError");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function single(predicate) {
  return (0, _lift.operate)(function (source, subscriber) {
    var hasValue = false;
    var singleValue;
    var seenValue = false;
    var index = 0;
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      seenValue = true;

      if (!predicate || predicate(value, index++, source)) {
        hasValue && subscriber.error(new _SequenceError.SequenceError('Too many matching values'));
        hasValue = true;
        singleValue = value;
      }
    }, function () {
      if (hasValue) {
        subscriber.next(singleValue);
        subscriber.complete();
      } else {
        subscriber.error(seenValue ? new _NotFoundError.NotFoundError('No matching values') : new _EmptyError.EmptyError());
      }
    }));
  });
}
},{"../util/EmptyError":"../../node_modules/rxjs/dist/esm5/internal/util/EmptyError.js","../util/SequenceError":"../../node_modules/rxjs/dist/esm5/internal/util/SequenceError.js","../util/NotFoundError":"../../node_modules/rxjs/dist/esm5/internal/util/NotFoundError.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/skip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skip = skip;

var _filter = require("./filter");

function skip(count) {
  return (0, _filter.filter)(function (_, index) {
    return count <= index;
  });
}
},{"./filter":"../../node_modules/rxjs/dist/esm5/internal/operators/filter.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/skipLast.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skipLast = skipLast;

var _identity = require("../util/identity");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function skipLast(skipCount) {
  return skipCount <= 0 ? _identity.identity : (0, _lift.operate)(function (source, subscriber) {
    var ring = new Array(skipCount);
    var seen = 0;
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      var valueIndex = seen++;

      if (valueIndex < skipCount) {
        ring[valueIndex] = value;
      } else {
        var index = valueIndex % skipCount;
        var oldValue = ring[index];
        ring[index] = value;
        subscriber.next(oldValue);
      }
    }));
    return function () {
      ring = null;
    };
  });
}
},{"../util/identity":"../../node_modules/rxjs/dist/esm5/internal/util/identity.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/skipUntil.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skipUntil = skipUntil;

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

var _from = require("../observable/from");

var _noop = require("../util/noop");

function skipUntil(notifier) {
  return (0, _lift.operate)(function (source, subscriber) {
    var taking = false;
    var skipSubscriber = new _OperatorSubscriber.OperatorSubscriber(subscriber, function () {
      skipSubscriber === null || skipSubscriber === void 0 ? void 0 : skipSubscriber.unsubscribe();
      taking = true;
    }, _noop.noop);
    (0, _from.innerFrom)(notifier).subscribe(skipSubscriber);
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      return taking && subscriber.next(value);
    }));
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","../util/noop":"../../node_modules/rxjs/dist/esm5/internal/util/noop.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/skipWhile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skipWhile = skipWhile;

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function skipWhile(predicate) {
  return (0, _lift.operate)(function (source, subscriber) {
    var taking = false;
    var index = 0;
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      return (taking || (taking = !predicate(value, index++))) && subscriber.next(value);
    }));
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/startWith.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startWith = startWith;

var _concat = require("../observable/concat");

var _args = require("../util/args");

var _lift = require("../util/lift");

function startWith() {
  var values = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    values[_i] = arguments[_i];
  }

  var scheduler = (0, _args.popScheduler)(values);
  return (0, _lift.operate)(function (source, subscriber) {
    (scheduler ? (0, _concat.concat)(values, source, scheduler) : (0, _concat.concat)(values, source)).subscribe(subscriber);
  });
}
},{"../observable/concat":"../../node_modules/rxjs/dist/esm5/internal/observable/concat.js","../util/args":"../../node_modules/rxjs/dist/esm5/internal/util/args.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchMap = switchMap;

var _from = require("../observable/from");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function switchMap(project, resultSelector) {
  return (0, _lift.operate)(function (source, subscriber) {
    var innerSubscriber = null;
    var index = 0;
    var isComplete = false;

    var checkComplete = function () {
      return isComplete && !innerSubscriber && subscriber.complete();
    };

    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
      var innerIndex = 0;
      var outerIndex = index++;
      (0, _from.innerFrom)(project(value, outerIndex)).subscribe(innerSubscriber = new _OperatorSubscriber.OperatorSubscriber(subscriber, function (innerValue) {
        return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
      }, function () {
        innerSubscriber = null;
        checkComplete();
      }));
    }, function () {
      isComplete = true;
      checkComplete();
    }));
  });
}
},{"../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/switchAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchAll = switchAll;

var _switchMap = require("./switchMap");

var _identity = require("../util/identity");

function switchAll() {
  return (0, _switchMap.switchMap)(_identity.identity);
}
},{"./switchMap":"../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js","../util/identity":"../../node_modules/rxjs/dist/esm5/internal/util/identity.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/switchMapTo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchMapTo = switchMapTo;

var _switchMap = require("./switchMap");

var _isFunction = require("../util/isFunction");

function switchMapTo(innerObservable, resultSelector) {
  return (0, _isFunction.isFunction)(resultSelector) ? (0, _switchMap.switchMap)(function () {
    return innerObservable;
  }, resultSelector) : (0, _switchMap.switchMap)(function () {
    return innerObservable;
  });
}
},{"./switchMap":"../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js","../util/isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/switchScan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchScan = switchScan;

var _switchMap = require("./switchMap");

var _lift = require("../util/lift");

function switchScan(accumulator, seed) {
  return (0, _lift.operate)(function (source, subscriber) {
    var state = seed;
    (0, _switchMap.switchMap)(function (value, index) {
      return accumulator(state, value, index);
    }, function (_, innerValue) {
      return state = innerValue, innerValue;
    })(source).subscribe(subscriber);
    return function () {
      state = null;
    };
  });
}
},{"./switchMap":"../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeUntil = takeUntil;

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

var _from = require("../observable/from");

var _noop = require("../util/noop");

function takeUntil(notifier) {
  return (0, _lift.operate)(function (source, subscriber) {
    (0, _from.innerFrom)(notifier).subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function () {
      return subscriber.complete();
    }, _noop.noop));
    !subscriber.closed && source.subscribe(subscriber);
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","../util/noop":"../../node_modules/rxjs/dist/esm5/internal/util/noop.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeWhile = takeWhile;

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function takeWhile(predicate, inclusive) {
  if (inclusive === void 0) {
    inclusive = false;
  }

  return (0, _lift.operate)(function (source, subscriber) {
    var index = 0;
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      var result = predicate(value, index++);
      (result || inclusive) && subscriber.next(value);
      !result && subscriber.complete();
    }));
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/tap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tap = tap;

var _isFunction = require("../util/isFunction");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

var _identity = require("../util/identity");

function tap(observerOrNext, error, complete) {
  var tapObserver = (0, _isFunction.isFunction)(observerOrNext) || error || complete ? {
    next: observerOrNext,
    error: error,
    complete: complete
  } : observerOrNext;
  return tapObserver ? (0, _lift.operate)(function (source, subscriber) {
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      var _a;

      (_a = tapObserver.next) === null || _a === void 0 ? void 0 : _a.call(tapObserver, value);
      subscriber.next(value);
    }, function () {
      var _a;

      (_a = tapObserver.complete) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
      subscriber.complete();
    }, function (err) {
      var _a;

      (_a = tapObserver.error) === null || _a === void 0 ? void 0 : _a.call(tapObserver, err);
      subscriber.error(err);
    }));
  }) : _identity.identity;
}
},{"../util/isFunction":"../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../util/identity":"../../node_modules/rxjs/dist/esm5/internal/util/identity.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/throttle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = throttle;
exports.defaultThrottleConfig = void 0;

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

var _from = require("../observable/from");

var defaultThrottleConfig = {
  leading: true,
  trailing: false
};
exports.defaultThrottleConfig = defaultThrottleConfig;

function throttle(durationSelector, _a) {
  var _b = _a === void 0 ? defaultThrottleConfig : _a,
      leading = _b.leading,
      trailing = _b.trailing;

  return (0, _lift.operate)(function (source, subscriber) {
    var hasValue = false;
    var sendValue = null;
    var throttled = null;
    var isComplete = false;

    var endThrottling = function () {
      throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
      throttled = null;

      if (trailing) {
        send();
        isComplete && subscriber.complete();
      }
    };

    var cleanupThrottling = function () {
      throttled = null;
      isComplete && subscriber.complete();
    };

    var startThrottle = function (value) {
      return throttled = (0, _from.innerFrom)(durationSelector(value)).subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, endThrottling, cleanupThrottling));
    };

    var send = function () {
      if (hasValue) {
        hasValue = false;
        var value = sendValue;
        sendValue = null;
        subscriber.next(value);
        !isComplete && startThrottle(value);
      }
    };

    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      hasValue = true;
      sendValue = value;
      !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
    }, function () {
      isComplete = true;
      !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
    }));
  });
}
},{"../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/throttleTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttleTime = throttleTime;

var _async = require("../scheduler/async");

var _throttle = require("./throttle");

var _timer = require("../observable/timer");

function throttleTime(duration, scheduler, config) {
  if (scheduler === void 0) {
    scheduler = _async.asyncScheduler;
  }

  if (config === void 0) {
    config = _throttle.defaultThrottleConfig;
  }

  var duration$ = (0, _timer.timer)(duration, scheduler);
  return (0, _throttle.throttle)(function () {
    return duration$;
  }, config);
}
},{"../scheduler/async":"../../node_modules/rxjs/dist/esm5/internal/scheduler/async.js","./throttle":"../../node_modules/rxjs/dist/esm5/internal/operators/throttle.js","../observable/timer":"../../node_modules/rxjs/dist/esm5/internal/observable/timer.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/timeInterval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeInterval = timeInterval;
exports.TimeInterval = void 0;

var _async = require("../scheduler/async");

var _scan = require("./scan");

var _defer = require("../observable/defer");

var _map = require("./map");

function timeInterval(scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  return function (source) {
    return (0, _defer.defer)(function () {
      return source.pipe((0, _scan.scan)(function (_a, value) {
        var current = _a.current;
        return {
          value: value,
          current: scheduler.now(),
          last: current
        };
      }, {
        current: scheduler.now(),
        value: undefined,
        last: undefined
      }), (0, _map.map)(function (_a) {
        var current = _a.current,
            last = _a.last,
            value = _a.value;
        return new TimeInterval(value, current - last);
      }));
    });
  };
}

var TimeInterval = function () {
  function TimeInterval(value, interval) {
    this.value = value;
    this.interval = interval;
  }

  return TimeInterval;
}();

exports.TimeInterval = TimeInterval;
},{"../scheduler/async":"../../node_modules/rxjs/dist/esm5/internal/scheduler/async.js","./scan":"../../node_modules/rxjs/dist/esm5/internal/operators/scan.js","../observable/defer":"../../node_modules/rxjs/dist/esm5/internal/observable/defer.js","./map":"../../node_modules/rxjs/dist/esm5/internal/operators/map.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/timeoutWith.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeoutWith = timeoutWith;

var _async = require("../scheduler/async");

var _isDate = require("../util/isDate");

var _timeout = require("./timeout");

function timeoutWith(due, withObservable, scheduler) {
  var first;
  var each;

  var _with;

  scheduler = scheduler !== null && scheduler !== void 0 ? scheduler : _async.async;

  if ((0, _isDate.isValidDate)(due)) {
    first = due;
  } else if (typeof due === 'number') {
    each = due;
  }

  if (withObservable) {
    _with = function () {
      return withObservable;
    };
  } else {
    throw new TypeError('No observable provided to switch to');
  }

  if (first == null && each == null) {
    throw new TypeError('No timeout provided.');
  }

  return (0, _timeout.timeout)({
    first: first,
    each: each,
    scheduler: scheduler,
    with: _with
  });
}
},{"../scheduler/async":"../../node_modules/rxjs/dist/esm5/internal/scheduler/async.js","../util/isDate":"../../node_modules/rxjs/dist/esm5/internal/util/isDate.js","./timeout":"../../node_modules/rxjs/dist/esm5/internal/operators/timeout.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/timestamp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timestamp = timestamp;

var _dateTimestampProvider = require("../scheduler/dateTimestampProvider");

var _map = require("./map");

function timestamp(timestampProvider) {
  if (timestampProvider === void 0) {
    timestampProvider = _dateTimestampProvider.dateTimestampProvider;
  }

  return (0, _map.map)(function (value) {
    return {
      value: value,
      timestamp: timestampProvider.now()
    };
  });
}
},{"../scheduler/dateTimestampProvider":"../../node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js","./map":"../../node_modules/rxjs/dist/esm5/internal/operators/map.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/window.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.window = window;

var _Subject = require("../Subject");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

var _noop = require("../util/noop");

function window(windowBoundaries) {
  return (0, _lift.operate)(function (source, subscriber) {
    var windowSubject = new _Subject.Subject();
    subscriber.next(windowSubject.asObservable());

    var errorHandler = function (err) {
      windowSubject.error(err);
      subscriber.error(err);
    };

    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      return windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.next(value);
    }, function () {
      windowSubject.complete();
      subscriber.complete();
    }, errorHandler));
    windowBoundaries.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function () {
      windowSubject.complete();
      subscriber.next(windowSubject = new _Subject.Subject());
    }, _noop.noop, errorHandler));
    return function () {
      windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.unsubscribe();
      windowSubject = null;
    };
  });
}
},{"../Subject":"../../node_modules/rxjs/dist/esm5/internal/Subject.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../util/noop":"../../node_modules/rxjs/dist/esm5/internal/util/noop.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/windowCount.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowCount = windowCount;

var _tslib = require("tslib");

var _Subject = require("../Subject");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

function windowCount(windowSize, startWindowEvery) {
  if (startWindowEvery === void 0) {
    startWindowEvery = 0;
  }

  var startEvery = startWindowEvery > 0 ? startWindowEvery : windowSize;
  return (0, _lift.operate)(function (source, subscriber) {
    var windows = [new _Subject.Subject()];
    var starts = [];
    var count = 0;
    subscriber.next(windows[0].asObservable());
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      var e_1, _a;

      try {
        for (var windows_1 = (0, _tslib.__values)(windows), windows_1_1 = windows_1.next(); !windows_1_1.done; windows_1_1 = windows_1.next()) {
          var window_1 = windows_1_1.value;
          window_1.next(value);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (windows_1_1 && !windows_1_1.done && (_a = windows_1.return)) _a.call(windows_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      var c = count - windowSize + 1;

      if (c >= 0 && c % startEvery === 0) {
        windows.shift().complete();
      }

      if (++count % startEvery === 0) {
        var window_2 = new _Subject.Subject();
        windows.push(window_2);
        subscriber.next(window_2.asObservable());
      }
    }, function () {
      while (windows.length > 0) {
        windows.shift().complete();
      }

      subscriber.complete();
    }, function (err) {
      while (windows.length > 0) {
        windows.shift().error(err);
      }

      subscriber.error(err);
    }, function () {
      starts = null;
      windows = null;
    }));
  });
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subject":"../../node_modules/rxjs/dist/esm5/internal/Subject.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/windowTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowTime = windowTime;

var _Subject = require("../Subject");

var _async = require("../scheduler/async");

var _Subscription = require("../Subscription");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

var _arrRemove = require("../util/arrRemove");

var _args = require("../util/args");

function windowTime(windowTimeSpan) {
  var _a, _b;

  var otherArgs = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    otherArgs[_i - 1] = arguments[_i];
  }

  var scheduler = (_a = (0, _args.popScheduler)(otherArgs)) !== null && _a !== void 0 ? _a : _async.asyncScheduler;
  var windowCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
  var maxWindowSize = otherArgs[1] || Infinity;
  return (0, _lift.operate)(function (source, subscriber) {
    var windowRecords = [];
    var restartOnClose = false;

    var closeWindow = function (record) {
      var window = record.window,
          subs = record.subs;
      window.complete();
      subs.unsubscribe();
      (0, _arrRemove.arrRemove)(windowRecords, record);
      restartOnClose && startWindow();
    };

    var startWindow = function () {
      if (windowRecords) {
        var subs = new _Subscription.Subscription();
        subscriber.add(subs);
        var window_1 = new _Subject.Subject();
        var record_1 = {
          window: window_1,
          subs: subs,
          seen: 0
        };
        windowRecords.push(record_1);
        subscriber.next(window_1.asObservable());
        subs.add(scheduler.schedule(function () {
          return closeWindow(record_1);
        }, windowTimeSpan));
      }
    };

    windowCreationInterval !== null && windowCreationInterval >= 0 ? subscriber.add(scheduler.schedule(function () {
      startWindow();
      !this.closed && subscriber.add(this.schedule(null, windowCreationInterval));
    }, windowCreationInterval)) : restartOnClose = true;
    startWindow();

    var loop = function (cb) {
      return windowRecords.slice().forEach(cb);
    };

    var terminate = function (cb) {
      loop(function (_a) {
        var window = _a.window;
        return cb(window);
      });
      cb(subscriber);
      subscriber.unsubscribe();
    };

    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      loop(function (record) {
        record.window.next(value);
        maxWindowSize <= ++record.seen && closeWindow(record);
      });
    }, function () {
      return terminate(function (consumer) {
        return consumer.complete();
      });
    }, function (err) {
      return terminate(function (consumer) {
        return consumer.error(err);
      });
    }));
    return function () {
      windowRecords = null;
    };
  });
}
},{"../Subject":"../../node_modules/rxjs/dist/esm5/internal/Subject.js","../scheduler/async":"../../node_modules/rxjs/dist/esm5/internal/scheduler/async.js","../Subscription":"../../node_modules/rxjs/dist/esm5/internal/Subscription.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../util/arrRemove":"../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js","../util/args":"../../node_modules/rxjs/dist/esm5/internal/util/args.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/windowToggle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowToggle = windowToggle;

var _tslib = require("tslib");

var _Subject = require("../Subject");

var _Subscription = require("../Subscription");

var _lift = require("../util/lift");

var _from = require("../observable/from");

var _OperatorSubscriber = require("./OperatorSubscriber");

var _noop = require("../util/noop");

var _arrRemove = require("../util/arrRemove");

function windowToggle(openings, closingSelector) {
  return (0, _lift.operate)(function (source, subscriber) {
    var windows = [];

    var handleError = function (err) {
      while (0 < windows.length) {
        windows.shift().error(err);
      }

      subscriber.error(err);
    };

    (0, _from.innerFrom)(openings).subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (openValue) {
      var window = new _Subject.Subject();
      windows.push(window);
      var closingSubscription = new _Subscription.Subscription();

      var closeWindow = function () {
        (0, _arrRemove.arrRemove)(windows, window);
        window.complete();
        closingSubscription.unsubscribe();
      };

      var closingNotifier;

      try {
        closingNotifier = (0, _from.innerFrom)(closingSelector(openValue));
      } catch (err) {
        handleError(err);
        return;
      }

      subscriber.next(window.asObservable());
      closingSubscription.add(closingNotifier.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, closeWindow, _noop.noop, handleError)));
    }, _noop.noop));
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      var e_1, _a;

      var windowsCopy = windows.slice();

      try {
        for (var windowsCopy_1 = (0, _tslib.__values)(windowsCopy), windowsCopy_1_1 = windowsCopy_1.next(); !windowsCopy_1_1.done; windowsCopy_1_1 = windowsCopy_1.next()) {
          var window_1 = windowsCopy_1_1.value;
          window_1.next(value);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (windowsCopy_1_1 && !windowsCopy_1_1.done && (_a = windowsCopy_1.return)) _a.call(windowsCopy_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }, function () {
      while (0 < windows.length) {
        windows.shift().complete();
      }

      subscriber.complete();
    }, handleError, function () {
      while (0 < windows.length) {
        windows.shift().unsubscribe();
      }
    }));
  });
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../Subject":"../../node_modules/rxjs/dist/esm5/internal/Subject.js","../Subscription":"../../node_modules/rxjs/dist/esm5/internal/Subscription.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../util/noop":"../../node_modules/rxjs/dist/esm5/internal/util/noop.js","../util/arrRemove":"../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/windowWhen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowWhen = windowWhen;

var _Subject = require("../Subject");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

var _from = require("../observable/from");

function windowWhen(closingSelector) {
  return (0, _lift.operate)(function (source, subscriber) {
    var window;
    var closingSubscriber;

    var handleError = function (err) {
      window.error(err);
      subscriber.error(err);
    };

    var openWindow = function () {
      closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
      window === null || window === void 0 ? void 0 : window.complete();
      window = new _Subject.Subject();
      subscriber.next(window.asObservable());
      var closingNotifier;

      try {
        closingNotifier = (0, _from.innerFrom)(closingSelector());
      } catch (err) {
        handleError(err);
        return;
      }

      closingNotifier.subscribe(closingSubscriber = new _OperatorSubscriber.OperatorSubscriber(subscriber, openWindow, openWindow, handleError));
    };

    openWindow();
    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      return window.next(value);
    }, function () {
      window.complete();
      subscriber.complete();
    }, handleError, function () {
      closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
      window = null;
    }));
  });
}
},{"../Subject":"../../node_modules/rxjs/dist/esm5/internal/Subject.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/withLatestFrom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withLatestFrom = withLatestFrom;

var _tslib = require("tslib");

var _lift = require("../util/lift");

var _OperatorSubscriber = require("./OperatorSubscriber");

var _from = require("../observable/from");

var _identity = require("../util/identity");

var _noop = require("../util/noop");

var _args = require("../util/args");

function withLatestFrom() {
  var inputs = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    inputs[_i] = arguments[_i];
  }

  var project = (0, _args.popResultSelector)(inputs);
  return (0, _lift.operate)(function (source, subscriber) {
    var len = inputs.length;
    var otherValues = new Array(len);
    var hasValue = inputs.map(function () {
      return false;
    });
    var ready = false;

    var _loop_1 = function (i) {
      (0, _from.innerFrom)(inputs[i]).subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
        otherValues[i] = value;

        if (!ready && !hasValue[i]) {
          hasValue[i] = true;
          (ready = hasValue.every(_identity.identity)) && (hasValue = null);
        }
      }, _noop.noop));
    };

    for (var i = 0; i < len; i++) {
      _loop_1(i);
    }

    source.subscribe(new _OperatorSubscriber.OperatorSubscriber(subscriber, function (value) {
      if (ready) {
        var values = (0, _tslib.__spreadArray)([value], (0, _tslib.__read)(otherValues));
        subscriber.next(project ? project.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(values))) : values);
      }
    }));
  });
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js","./OperatorSubscriber":"../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js","../observable/from":"../../node_modules/rxjs/dist/esm5/internal/observable/from.js","../util/identity":"../../node_modules/rxjs/dist/esm5/internal/util/identity.js","../util/noop":"../../node_modules/rxjs/dist/esm5/internal/util/noop.js","../util/args":"../../node_modules/rxjs/dist/esm5/internal/util/args.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/zip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = zip;

var _tslib = require("tslib");

var _zip = require("../observable/zip");

var _lift = require("../util/lift");

function zip() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  return (0, _lift.operate)(function (source, subscriber) {
    _zip.zip.apply(void 0, (0, _tslib.__spreadArray)([source], (0, _tslib.__read)(sources))).subscribe(subscriber);
  });
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../observable/zip":"../../node_modules/rxjs/dist/esm5/internal/observable/zip.js","../util/lift":"../../node_modules/rxjs/dist/esm5/internal/util/lift.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/zipAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipAll = zipAll;

var _zip = require("../observable/zip");

var _joinAllInternals = require("./joinAllInternals");

function zipAll(project) {
  return (0, _joinAllInternals.joinAllInternals)(_zip.zip, project);
}
},{"../observable/zip":"../../node_modules/rxjs/dist/esm5/internal/observable/zip.js","./joinAllInternals":"../../node_modules/rxjs/dist/esm5/internal/operators/joinAllInternals.js"}],"../../node_modules/rxjs/dist/esm5/internal/operators/zipWith.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipWith = zipWith;

var _tslib = require("tslib");

var _zip = require("./zip");

function zipWith() {
  var otherInputs = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    otherInputs[_i] = arguments[_i];
  }

  return _zip.zip.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(otherInputs)));
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","./zip":"../../node_modules/rxjs/dist/esm5/internal/operators/zip.js"}],"../../node_modules/rxjs/dist/esm5/operators/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "audit", {
  enumerable: true,
  get: function () {
    return _audit.audit;
  }
});
Object.defineProperty(exports, "auditTime", {
  enumerable: true,
  get: function () {
    return _auditTime.auditTime;
  }
});
Object.defineProperty(exports, "buffer", {
  enumerable: true,
  get: function () {
    return _buffer.buffer;
  }
});
Object.defineProperty(exports, "bufferCount", {
  enumerable: true,
  get: function () {
    return _bufferCount.bufferCount;
  }
});
Object.defineProperty(exports, "bufferTime", {
  enumerable: true,
  get: function () {
    return _bufferTime.bufferTime;
  }
});
Object.defineProperty(exports, "bufferToggle", {
  enumerable: true,
  get: function () {
    return _bufferToggle.bufferToggle;
  }
});
Object.defineProperty(exports, "bufferWhen", {
  enumerable: true,
  get: function () {
    return _bufferWhen.bufferWhen;
  }
});
Object.defineProperty(exports, "catchError", {
  enumerable: true,
  get: function () {
    return _catchError.catchError;
  }
});
Object.defineProperty(exports, "combineAll", {
  enumerable: true,
  get: function () {
    return _combineAll.combineAll;
  }
});
Object.defineProperty(exports, "combineLatestAll", {
  enumerable: true,
  get: function () {
    return _combineLatestAll.combineLatestAll;
  }
});
Object.defineProperty(exports, "combineLatest", {
  enumerable: true,
  get: function () {
    return _combineLatest.combineLatest;
  }
});
Object.defineProperty(exports, "combineLatestWith", {
  enumerable: true,
  get: function () {
    return _combineLatestWith.combineLatestWith;
  }
});
Object.defineProperty(exports, "concat", {
  enumerable: true,
  get: function () {
    return _concat.concat;
  }
});
Object.defineProperty(exports, "concatAll", {
  enumerable: true,
  get: function () {
    return _concatAll.concatAll;
  }
});
Object.defineProperty(exports, "concatMap", {
  enumerable: true,
  get: function () {
    return _concatMap.concatMap;
  }
});
Object.defineProperty(exports, "concatMapTo", {
  enumerable: true,
  get: function () {
    return _concatMapTo.concatMapTo;
  }
});
Object.defineProperty(exports, "concatWith", {
  enumerable: true,
  get: function () {
    return _concatWith.concatWith;
  }
});
Object.defineProperty(exports, "connect", {
  enumerable: true,
  get: function () {
    return _connect.connect;
  }
});
Object.defineProperty(exports, "count", {
  enumerable: true,
  get: function () {
    return _count.count;
  }
});
Object.defineProperty(exports, "debounce", {
  enumerable: true,
  get: function () {
    return _debounce.debounce;
  }
});
Object.defineProperty(exports, "debounceTime", {
  enumerable: true,
  get: function () {
    return _debounceTime.debounceTime;
  }
});
Object.defineProperty(exports, "defaultIfEmpty", {
  enumerable: true,
  get: function () {
    return _defaultIfEmpty.defaultIfEmpty;
  }
});
Object.defineProperty(exports, "delay", {
  enumerable: true,
  get: function () {
    return _delay.delay;
  }
});
Object.defineProperty(exports, "delayWhen", {
  enumerable: true,
  get: function () {
    return _delayWhen.delayWhen;
  }
});
Object.defineProperty(exports, "dematerialize", {
  enumerable: true,
  get: function () {
    return _dematerialize.dematerialize;
  }
});
Object.defineProperty(exports, "distinct", {
  enumerable: true,
  get: function () {
    return _distinct.distinct;
  }
});
Object.defineProperty(exports, "distinctUntilChanged", {
  enumerable: true,
  get: function () {
    return _distinctUntilChanged.distinctUntilChanged;
  }
});
Object.defineProperty(exports, "distinctUntilKeyChanged", {
  enumerable: true,
  get: function () {
    return _distinctUntilKeyChanged.distinctUntilKeyChanged;
  }
});
Object.defineProperty(exports, "elementAt", {
  enumerable: true,
  get: function () {
    return _elementAt.elementAt;
  }
});
Object.defineProperty(exports, "endWith", {
  enumerable: true,
  get: function () {
    return _endWith.endWith;
  }
});
Object.defineProperty(exports, "every", {
  enumerable: true,
  get: function () {
    return _every.every;
  }
});
Object.defineProperty(exports, "exhaust", {
  enumerable: true,
  get: function () {
    return _exhaust.exhaust;
  }
});
Object.defineProperty(exports, "exhaustAll", {
  enumerable: true,
  get: function () {
    return _exhaustAll.exhaustAll;
  }
});
Object.defineProperty(exports, "exhaustMap", {
  enumerable: true,
  get: function () {
    return _exhaustMap.exhaustMap;
  }
});
Object.defineProperty(exports, "expand", {
  enumerable: true,
  get: function () {
    return _expand.expand;
  }
});
Object.defineProperty(exports, "filter", {
  enumerable: true,
  get: function () {
    return _filter.filter;
  }
});
Object.defineProperty(exports, "finalize", {
  enumerable: true,
  get: function () {
    return _finalize.finalize;
  }
});
Object.defineProperty(exports, "find", {
  enumerable: true,
  get: function () {
    return _find.find;
  }
});
Object.defineProperty(exports, "findIndex", {
  enumerable: true,
  get: function () {
    return _findIndex.findIndex;
  }
});
Object.defineProperty(exports, "first", {
  enumerable: true,
  get: function () {
    return _first.first;
  }
});
Object.defineProperty(exports, "groupBy", {
  enumerable: true,
  get: function () {
    return _groupBy.groupBy;
  }
});
Object.defineProperty(exports, "ignoreElements", {
  enumerable: true,
  get: function () {
    return _ignoreElements.ignoreElements;
  }
});
Object.defineProperty(exports, "isEmpty", {
  enumerable: true,
  get: function () {
    return _isEmpty.isEmpty;
  }
});
Object.defineProperty(exports, "last", {
  enumerable: true,
  get: function () {
    return _last.last;
  }
});
Object.defineProperty(exports, "map", {
  enumerable: true,
  get: function () {
    return _map.map;
  }
});
Object.defineProperty(exports, "mapTo", {
  enumerable: true,
  get: function () {
    return _mapTo.mapTo;
  }
});
Object.defineProperty(exports, "materialize", {
  enumerable: true,
  get: function () {
    return _materialize.materialize;
  }
});
Object.defineProperty(exports, "max", {
  enumerable: true,
  get: function () {
    return _max.max;
  }
});
Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function () {
    return _merge.merge;
  }
});
Object.defineProperty(exports, "mergeAll", {
  enumerable: true,
  get: function () {
    return _mergeAll.mergeAll;
  }
});
Object.defineProperty(exports, "flatMap", {
  enumerable: true,
  get: function () {
    return _flatMap.flatMap;
  }
});
Object.defineProperty(exports, "mergeMap", {
  enumerable: true,
  get: function () {
    return _mergeMap.mergeMap;
  }
});
Object.defineProperty(exports, "mergeMapTo", {
  enumerable: true,
  get: function () {
    return _mergeMapTo.mergeMapTo;
  }
});
Object.defineProperty(exports, "mergeScan", {
  enumerable: true,
  get: function () {
    return _mergeScan.mergeScan;
  }
});
Object.defineProperty(exports, "mergeWith", {
  enumerable: true,
  get: function () {
    return _mergeWith.mergeWith;
  }
});
Object.defineProperty(exports, "min", {
  enumerable: true,
  get: function () {
    return _min.min;
  }
});
Object.defineProperty(exports, "multicast", {
  enumerable: true,
  get: function () {
    return _multicast.multicast;
  }
});
Object.defineProperty(exports, "observeOn", {
  enumerable: true,
  get: function () {
    return _observeOn.observeOn;
  }
});
Object.defineProperty(exports, "onErrorResumeNext", {
  enumerable: true,
  get: function () {
    return _onErrorResumeNext.onErrorResumeNext;
  }
});
Object.defineProperty(exports, "pairwise", {
  enumerable: true,
  get: function () {
    return _pairwise.pairwise;
  }
});
Object.defineProperty(exports, "partition", {
  enumerable: true,
  get: function () {
    return _partition.partition;
  }
});
Object.defineProperty(exports, "pluck", {
  enumerable: true,
  get: function () {
    return _pluck.pluck;
  }
});
Object.defineProperty(exports, "publish", {
  enumerable: true,
  get: function () {
    return _publish.publish;
  }
});
Object.defineProperty(exports, "publishBehavior", {
  enumerable: true,
  get: function () {
    return _publishBehavior.publishBehavior;
  }
});
Object.defineProperty(exports, "publishLast", {
  enumerable: true,
  get: function () {
    return _publishLast.publishLast;
  }
});
Object.defineProperty(exports, "publishReplay", {
  enumerable: true,
  get: function () {
    return _publishReplay.publishReplay;
  }
});
Object.defineProperty(exports, "race", {
  enumerable: true,
  get: function () {
    return _race.race;
  }
});
Object.defineProperty(exports, "raceWith", {
  enumerable: true,
  get: function () {
    return _raceWith.raceWith;
  }
});
Object.defineProperty(exports, "reduce", {
  enumerable: true,
  get: function () {
    return _reduce.reduce;
  }
});
Object.defineProperty(exports, "repeat", {
  enumerable: true,
  get: function () {
    return _repeat.repeat;
  }
});
Object.defineProperty(exports, "repeatWhen", {
  enumerable: true,
  get: function () {
    return _repeatWhen.repeatWhen;
  }
});
Object.defineProperty(exports, "retry", {
  enumerable: true,
  get: function () {
    return _retry.retry;
  }
});
Object.defineProperty(exports, "retryWhen", {
  enumerable: true,
  get: function () {
    return _retryWhen.retryWhen;
  }
});
Object.defineProperty(exports, "refCount", {
  enumerable: true,
  get: function () {
    return _refCount.refCount;
  }
});
Object.defineProperty(exports, "sample", {
  enumerable: true,
  get: function () {
    return _sample.sample;
  }
});
Object.defineProperty(exports, "sampleTime", {
  enumerable: true,
  get: function () {
    return _sampleTime.sampleTime;
  }
});
Object.defineProperty(exports, "scan", {
  enumerable: true,
  get: function () {
    return _scan.scan;
  }
});
Object.defineProperty(exports, "sequenceEqual", {
  enumerable: true,
  get: function () {
    return _sequenceEqual.sequenceEqual;
  }
});
Object.defineProperty(exports, "share", {
  enumerable: true,
  get: function () {
    return _share.share;
  }
});
Object.defineProperty(exports, "shareReplay", {
  enumerable: true,
  get: function () {
    return _shareReplay.shareReplay;
  }
});
Object.defineProperty(exports, "single", {
  enumerable: true,
  get: function () {
    return _single.single;
  }
});
Object.defineProperty(exports, "skip", {
  enumerable: true,
  get: function () {
    return _skip.skip;
  }
});
Object.defineProperty(exports, "skipLast", {
  enumerable: true,
  get: function () {
    return _skipLast.skipLast;
  }
});
Object.defineProperty(exports, "skipUntil", {
  enumerable: true,
  get: function () {
    return _skipUntil.skipUntil;
  }
});
Object.defineProperty(exports, "skipWhile", {
  enumerable: true,
  get: function () {
    return _skipWhile.skipWhile;
  }
});
Object.defineProperty(exports, "startWith", {
  enumerable: true,
  get: function () {
    return _startWith.startWith;
  }
});
Object.defineProperty(exports, "subscribeOn", {
  enumerable: true,
  get: function () {
    return _subscribeOn.subscribeOn;
  }
});
Object.defineProperty(exports, "switchAll", {
  enumerable: true,
  get: function () {
    return _switchAll.switchAll;
  }
});
Object.defineProperty(exports, "switchMap", {
  enumerable: true,
  get: function () {
    return _switchMap.switchMap;
  }
});
Object.defineProperty(exports, "switchMapTo", {
  enumerable: true,
  get: function () {
    return _switchMapTo.switchMapTo;
  }
});
Object.defineProperty(exports, "switchScan", {
  enumerable: true,
  get: function () {
    return _switchScan.switchScan;
  }
});
Object.defineProperty(exports, "take", {
  enumerable: true,
  get: function () {
    return _take.take;
  }
});
Object.defineProperty(exports, "takeLast", {
  enumerable: true,
  get: function () {
    return _takeLast.takeLast;
  }
});
Object.defineProperty(exports, "takeUntil", {
  enumerable: true,
  get: function () {
    return _takeUntil.takeUntil;
  }
});
Object.defineProperty(exports, "takeWhile", {
  enumerable: true,
  get: function () {
    return _takeWhile.takeWhile;
  }
});
Object.defineProperty(exports, "tap", {
  enumerable: true,
  get: function () {
    return _tap.tap;
  }
});
Object.defineProperty(exports, "throttle", {
  enumerable: true,
  get: function () {
    return _throttle.throttle;
  }
});
Object.defineProperty(exports, "throttleTime", {
  enumerable: true,
  get: function () {
    return _throttleTime.throttleTime;
  }
});
Object.defineProperty(exports, "throwIfEmpty", {
  enumerable: true,
  get: function () {
    return _throwIfEmpty.throwIfEmpty;
  }
});
Object.defineProperty(exports, "timeInterval", {
  enumerable: true,
  get: function () {
    return _timeInterval.timeInterval;
  }
});
Object.defineProperty(exports, "timeout", {
  enumerable: true,
  get: function () {
    return _timeout.timeout;
  }
});
Object.defineProperty(exports, "timeoutWith", {
  enumerable: true,
  get: function () {
    return _timeoutWith.timeoutWith;
  }
});
Object.defineProperty(exports, "timestamp", {
  enumerable: true,
  get: function () {
    return _timestamp.timestamp;
  }
});
Object.defineProperty(exports, "toArray", {
  enumerable: true,
  get: function () {
    return _toArray.toArray;
  }
});
Object.defineProperty(exports, "window", {
  enumerable: true,
  get: function () {
    return _window.window;
  }
});
Object.defineProperty(exports, "windowCount", {
  enumerable: true,
  get: function () {
    return _windowCount.windowCount;
  }
});
Object.defineProperty(exports, "windowTime", {
  enumerable: true,
  get: function () {
    return _windowTime.windowTime;
  }
});
Object.defineProperty(exports, "windowToggle", {
  enumerable: true,
  get: function () {
    return _windowToggle.windowToggle;
  }
});
Object.defineProperty(exports, "windowWhen", {
  enumerable: true,
  get: function () {
    return _windowWhen.windowWhen;
  }
});
Object.defineProperty(exports, "withLatestFrom", {
  enumerable: true,
  get: function () {
    return _withLatestFrom.withLatestFrom;
  }
});
Object.defineProperty(exports, "zip", {
  enumerable: true,
  get: function () {
    return _zip.zip;
  }
});
Object.defineProperty(exports, "zipAll", {
  enumerable: true,
  get: function () {
    return _zipAll.zipAll;
  }
});
Object.defineProperty(exports, "zipWith", {
  enumerable: true,
  get: function () {
    return _zipWith.zipWith;
  }
});

var _audit = require("../internal/operators/audit");

var _auditTime = require("../internal/operators/auditTime");

var _buffer = require("../internal/operators/buffer");

var _bufferCount = require("../internal/operators/bufferCount");

var _bufferTime = require("../internal/operators/bufferTime");

var _bufferToggle = require("../internal/operators/bufferToggle");

var _bufferWhen = require("../internal/operators/bufferWhen");

var _catchError = require("../internal/operators/catchError");

var _combineAll = require("../internal/operators/combineAll");

var _combineLatestAll = require("../internal/operators/combineLatestAll");

var _combineLatest = require("../internal/operators/combineLatest");

var _combineLatestWith = require("../internal/operators/combineLatestWith");

var _concat = require("../internal/operators/concat");

var _concatAll = require("../internal/operators/concatAll");

var _concatMap = require("../internal/operators/concatMap");

var _concatMapTo = require("../internal/operators/concatMapTo");

var _concatWith = require("../internal/operators/concatWith");

var _connect = require("../internal/operators/connect");

var _count = require("../internal/operators/count");

var _debounce = require("../internal/operators/debounce");

var _debounceTime = require("../internal/operators/debounceTime");

var _defaultIfEmpty = require("../internal/operators/defaultIfEmpty");

var _delay = require("../internal/operators/delay");

var _delayWhen = require("../internal/operators/delayWhen");

var _dematerialize = require("../internal/operators/dematerialize");

var _distinct = require("../internal/operators/distinct");

var _distinctUntilChanged = require("../internal/operators/distinctUntilChanged");

var _distinctUntilKeyChanged = require("../internal/operators/distinctUntilKeyChanged");

var _elementAt = require("../internal/operators/elementAt");

var _endWith = require("../internal/operators/endWith");

var _every = require("../internal/operators/every");

var _exhaust = require("../internal/operators/exhaust");

var _exhaustAll = require("../internal/operators/exhaustAll");

var _exhaustMap = require("../internal/operators/exhaustMap");

var _expand = require("../internal/operators/expand");

var _filter = require("../internal/operators/filter");

var _finalize = require("../internal/operators/finalize");

var _find = require("../internal/operators/find");

var _findIndex = require("../internal/operators/findIndex");

var _first = require("../internal/operators/first");

var _groupBy = require("../internal/operators/groupBy");

var _ignoreElements = require("../internal/operators/ignoreElements");

var _isEmpty = require("../internal/operators/isEmpty");

var _last = require("../internal/operators/last");

var _map = require("../internal/operators/map");

var _mapTo = require("../internal/operators/mapTo");

var _materialize = require("../internal/operators/materialize");

var _max = require("../internal/operators/max");

var _merge = require("../internal/operators/merge");

var _mergeAll = require("../internal/operators/mergeAll");

var _flatMap = require("../internal/operators/flatMap");

var _mergeMap = require("../internal/operators/mergeMap");

var _mergeMapTo = require("../internal/operators/mergeMapTo");

var _mergeScan = require("../internal/operators/mergeScan");

var _mergeWith = require("../internal/operators/mergeWith");

var _min = require("../internal/operators/min");

var _multicast = require("../internal/operators/multicast");

var _observeOn = require("../internal/operators/observeOn");

var _onErrorResumeNext = require("../internal/operators/onErrorResumeNext");

var _pairwise = require("../internal/operators/pairwise");

var _partition = require("../internal/operators/partition");

var _pluck = require("../internal/operators/pluck");

var _publish = require("../internal/operators/publish");

var _publishBehavior = require("../internal/operators/publishBehavior");

var _publishLast = require("../internal/operators/publishLast");

var _publishReplay = require("../internal/operators/publishReplay");

var _race = require("../internal/operators/race");

var _raceWith = require("../internal/operators/raceWith");

var _reduce = require("../internal/operators/reduce");

var _repeat = require("../internal/operators/repeat");

var _repeatWhen = require("../internal/operators/repeatWhen");

var _retry = require("../internal/operators/retry");

var _retryWhen = require("../internal/operators/retryWhen");

var _refCount = require("../internal/operators/refCount");

var _sample = require("../internal/operators/sample");

var _sampleTime = require("../internal/operators/sampleTime");

var _scan = require("../internal/operators/scan");

var _sequenceEqual = require("../internal/operators/sequenceEqual");

var _share = require("../internal/operators/share");

var _shareReplay = require("../internal/operators/shareReplay");

var _single = require("../internal/operators/single");

var _skip = require("../internal/operators/skip");

var _skipLast = require("../internal/operators/skipLast");

var _skipUntil = require("../internal/operators/skipUntil");

var _skipWhile = require("../internal/operators/skipWhile");

var _startWith = require("../internal/operators/startWith");

var _subscribeOn = require("../internal/operators/subscribeOn");

var _switchAll = require("../internal/operators/switchAll");

var _switchMap = require("../internal/operators/switchMap");

var _switchMapTo = require("../internal/operators/switchMapTo");

var _switchScan = require("../internal/operators/switchScan");

var _take = require("../internal/operators/take");

var _takeLast = require("../internal/operators/takeLast");

var _takeUntil = require("../internal/operators/takeUntil");

var _takeWhile = require("../internal/operators/takeWhile");

var _tap = require("../internal/operators/tap");

var _throttle = require("../internal/operators/throttle");

var _throttleTime = require("../internal/operators/throttleTime");

var _throwIfEmpty = require("../internal/operators/throwIfEmpty");

var _timeInterval = require("../internal/operators/timeInterval");

var _timeout = require("../internal/operators/timeout");

var _timeoutWith = require("../internal/operators/timeoutWith");

var _timestamp = require("../internal/operators/timestamp");

var _toArray = require("../internal/operators/toArray");

var _window = require("../internal/operators/window");

var _windowCount = require("../internal/operators/windowCount");

var _windowTime = require("../internal/operators/windowTime");

var _windowToggle = require("../internal/operators/windowToggle");

var _windowWhen = require("../internal/operators/windowWhen");

var _withLatestFrom = require("../internal/operators/withLatestFrom");

var _zip = require("../internal/operators/zip");

var _zipAll = require("../internal/operators/zipAll");

var _zipWith = require("../internal/operators/zipWith");
},{"../internal/operators/audit":"../../node_modules/rxjs/dist/esm5/internal/operators/audit.js","../internal/operators/auditTime":"../../node_modules/rxjs/dist/esm5/internal/operators/auditTime.js","../internal/operators/buffer":"../../node_modules/rxjs/dist/esm5/internal/operators/buffer.js","../internal/operators/bufferCount":"../../node_modules/rxjs/dist/esm5/internal/operators/bufferCount.js","../internal/operators/bufferTime":"../../node_modules/rxjs/dist/esm5/internal/operators/bufferTime.js","../internal/operators/bufferToggle":"../../node_modules/rxjs/dist/esm5/internal/operators/bufferToggle.js","../internal/operators/bufferWhen":"../../node_modules/rxjs/dist/esm5/internal/operators/bufferWhen.js","../internal/operators/catchError":"../../node_modules/rxjs/dist/esm5/internal/operators/catchError.js","../internal/operators/combineAll":"../../node_modules/rxjs/dist/esm5/internal/operators/combineAll.js","../internal/operators/combineLatestAll":"../../node_modules/rxjs/dist/esm5/internal/operators/combineLatestAll.js","../internal/operators/combineLatest":"../../node_modules/rxjs/dist/esm5/internal/operators/combineLatest.js","../internal/operators/combineLatestWith":"../../node_modules/rxjs/dist/esm5/internal/operators/combineLatestWith.js","../internal/operators/concat":"../../node_modules/rxjs/dist/esm5/internal/operators/concat.js","../internal/operators/concatAll":"../../node_modules/rxjs/dist/esm5/internal/operators/concatAll.js","../internal/operators/concatMap":"../../node_modules/rxjs/dist/esm5/internal/operators/concatMap.js","../internal/operators/concatMapTo":"../../node_modules/rxjs/dist/esm5/internal/operators/concatMapTo.js","../internal/operators/concatWith":"../../node_modules/rxjs/dist/esm5/internal/operators/concatWith.js","../internal/operators/connect":"../../node_modules/rxjs/dist/esm5/internal/operators/connect.js","../internal/operators/count":"../../node_modules/rxjs/dist/esm5/internal/operators/count.js","../internal/operators/debounce":"../../node_modules/rxjs/dist/esm5/internal/operators/debounce.js","../internal/operators/debounceTime":"../../node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js","../internal/operators/defaultIfEmpty":"../../node_modules/rxjs/dist/esm5/internal/operators/defaultIfEmpty.js","../internal/operators/delay":"../../node_modules/rxjs/dist/esm5/internal/operators/delay.js","../internal/operators/delayWhen":"../../node_modules/rxjs/dist/esm5/internal/operators/delayWhen.js","../internal/operators/dematerialize":"../../node_modules/rxjs/dist/esm5/internal/operators/dematerialize.js","../internal/operators/distinct":"../../node_modules/rxjs/dist/esm5/internal/operators/distinct.js","../internal/operators/distinctUntilChanged":"../../node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js","../internal/operators/distinctUntilKeyChanged":"../../node_modules/rxjs/dist/esm5/internal/operators/distinctUntilKeyChanged.js","../internal/operators/elementAt":"../../node_modules/rxjs/dist/esm5/internal/operators/elementAt.js","../internal/operators/endWith":"../../node_modules/rxjs/dist/esm5/internal/operators/endWith.js","../internal/operators/every":"../../node_modules/rxjs/dist/esm5/internal/operators/every.js","../internal/operators/exhaust":"../../node_modules/rxjs/dist/esm5/internal/operators/exhaust.js","../internal/operators/exhaustAll":"../../node_modules/rxjs/dist/esm5/internal/operators/exhaustAll.js","../internal/operators/exhaustMap":"../../node_modules/rxjs/dist/esm5/internal/operators/exhaustMap.js","../internal/operators/expand":"../../node_modules/rxjs/dist/esm5/internal/operators/expand.js","../internal/operators/filter":"../../node_modules/rxjs/dist/esm5/internal/operators/filter.js","../internal/operators/finalize":"../../node_modules/rxjs/dist/esm5/internal/operators/finalize.js","../internal/operators/find":"../../node_modules/rxjs/dist/esm5/internal/operators/find.js","../internal/operators/findIndex":"../../node_modules/rxjs/dist/esm5/internal/operators/findIndex.js","../internal/operators/first":"../../node_modules/rxjs/dist/esm5/internal/operators/first.js","../internal/operators/groupBy":"../../node_modules/rxjs/dist/esm5/internal/operators/groupBy.js","../internal/operators/ignoreElements":"../../node_modules/rxjs/dist/esm5/internal/operators/ignoreElements.js","../internal/operators/isEmpty":"../../node_modules/rxjs/dist/esm5/internal/operators/isEmpty.js","../internal/operators/last":"../../node_modules/rxjs/dist/esm5/internal/operators/last.js","../internal/operators/map":"../../node_modules/rxjs/dist/esm5/internal/operators/map.js","../internal/operators/mapTo":"../../node_modules/rxjs/dist/esm5/internal/operators/mapTo.js","../internal/operators/materialize":"../../node_modules/rxjs/dist/esm5/internal/operators/materialize.js","../internal/operators/max":"../../node_modules/rxjs/dist/esm5/internal/operators/max.js","../internal/operators/merge":"../../node_modules/rxjs/dist/esm5/internal/operators/merge.js","../internal/operators/mergeAll":"../../node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js","../internal/operators/flatMap":"../../node_modules/rxjs/dist/esm5/internal/operators/flatMap.js","../internal/operators/mergeMap":"../../node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js","../internal/operators/mergeMapTo":"../../node_modules/rxjs/dist/esm5/internal/operators/mergeMapTo.js","../internal/operators/mergeScan":"../../node_modules/rxjs/dist/esm5/internal/operators/mergeScan.js","../internal/operators/mergeWith":"../../node_modules/rxjs/dist/esm5/internal/operators/mergeWith.js","../internal/operators/min":"../../node_modules/rxjs/dist/esm5/internal/operators/min.js","../internal/operators/multicast":"../../node_modules/rxjs/dist/esm5/internal/operators/multicast.js","../internal/operators/observeOn":"../../node_modules/rxjs/dist/esm5/internal/operators/observeOn.js","../internal/operators/onErrorResumeNext":"../../node_modules/rxjs/dist/esm5/internal/operators/onErrorResumeNext.js","../internal/operators/pairwise":"../../node_modules/rxjs/dist/esm5/internal/operators/pairwise.js","../internal/operators/partition":"../../node_modules/rxjs/dist/esm5/internal/operators/partition.js","../internal/operators/pluck":"../../node_modules/rxjs/dist/esm5/internal/operators/pluck.js","../internal/operators/publish":"../../node_modules/rxjs/dist/esm5/internal/operators/publish.js","../internal/operators/publishBehavior":"../../node_modules/rxjs/dist/esm5/internal/operators/publishBehavior.js","../internal/operators/publishLast":"../../node_modules/rxjs/dist/esm5/internal/operators/publishLast.js","../internal/operators/publishReplay":"../../node_modules/rxjs/dist/esm5/internal/operators/publishReplay.js","../internal/operators/race":"../../node_modules/rxjs/dist/esm5/internal/operators/race.js","../internal/operators/raceWith":"../../node_modules/rxjs/dist/esm5/internal/operators/raceWith.js","../internal/operators/reduce":"../../node_modules/rxjs/dist/esm5/internal/operators/reduce.js","../internal/operators/repeat":"../../node_modules/rxjs/dist/esm5/internal/operators/repeat.js","../internal/operators/repeatWhen":"../../node_modules/rxjs/dist/esm5/internal/operators/repeatWhen.js","../internal/operators/retry":"../../node_modules/rxjs/dist/esm5/internal/operators/retry.js","../internal/operators/retryWhen":"../../node_modules/rxjs/dist/esm5/internal/operators/retryWhen.js","../internal/operators/refCount":"../../node_modules/rxjs/dist/esm5/internal/operators/refCount.js","../internal/operators/sample":"../../node_modules/rxjs/dist/esm5/internal/operators/sample.js","../internal/operators/sampleTime":"../../node_modules/rxjs/dist/esm5/internal/operators/sampleTime.js","../internal/operators/scan":"../../node_modules/rxjs/dist/esm5/internal/operators/scan.js","../internal/operators/sequenceEqual":"../../node_modules/rxjs/dist/esm5/internal/operators/sequenceEqual.js","../internal/operators/share":"../../node_modules/rxjs/dist/esm5/internal/operators/share.js","../internal/operators/shareReplay":"../../node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js","../internal/operators/single":"../../node_modules/rxjs/dist/esm5/internal/operators/single.js","../internal/operators/skip":"../../node_modules/rxjs/dist/esm5/internal/operators/skip.js","../internal/operators/skipLast":"../../node_modules/rxjs/dist/esm5/internal/operators/skipLast.js","../internal/operators/skipUntil":"../../node_modules/rxjs/dist/esm5/internal/operators/skipUntil.js","../internal/operators/skipWhile":"../../node_modules/rxjs/dist/esm5/internal/operators/skipWhile.js","../internal/operators/startWith":"../../node_modules/rxjs/dist/esm5/internal/operators/startWith.js","../internal/operators/subscribeOn":"../../node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js","../internal/operators/switchAll":"../../node_modules/rxjs/dist/esm5/internal/operators/switchAll.js","../internal/operators/switchMap":"../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js","../internal/operators/switchMapTo":"../../node_modules/rxjs/dist/esm5/internal/operators/switchMapTo.js","../internal/operators/switchScan":"../../node_modules/rxjs/dist/esm5/internal/operators/switchScan.js","../internal/operators/take":"../../node_modules/rxjs/dist/esm5/internal/operators/take.js","../internal/operators/takeLast":"../../node_modules/rxjs/dist/esm5/internal/operators/takeLast.js","../internal/operators/takeUntil":"../../node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js","../internal/operators/takeWhile":"../../node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js","../internal/operators/tap":"../../node_modules/rxjs/dist/esm5/internal/operators/tap.js","../internal/operators/throttle":"../../node_modules/rxjs/dist/esm5/internal/operators/throttle.js","../internal/operators/throttleTime":"../../node_modules/rxjs/dist/esm5/internal/operators/throttleTime.js","../internal/operators/throwIfEmpty":"../../node_modules/rxjs/dist/esm5/internal/operators/throwIfEmpty.js","../internal/operators/timeInterval":"../../node_modules/rxjs/dist/esm5/internal/operators/timeInterval.js","../internal/operators/timeout":"../../node_modules/rxjs/dist/esm5/internal/operators/timeout.js","../internal/operators/timeoutWith":"../../node_modules/rxjs/dist/esm5/internal/operators/timeoutWith.js","../internal/operators/timestamp":"../../node_modules/rxjs/dist/esm5/internal/operators/timestamp.js","../internal/operators/toArray":"../../node_modules/rxjs/dist/esm5/internal/operators/toArray.js","../internal/operators/window":"../../node_modules/rxjs/dist/esm5/internal/operators/window.js","../internal/operators/windowCount":"../../node_modules/rxjs/dist/esm5/internal/operators/windowCount.js","../internal/operators/windowTime":"../../node_modules/rxjs/dist/esm5/internal/operators/windowTime.js","../internal/operators/windowToggle":"../../node_modules/rxjs/dist/esm5/internal/operators/windowToggle.js","../internal/operators/windowWhen":"../../node_modules/rxjs/dist/esm5/internal/operators/windowWhen.js","../internal/operators/withLatestFrom":"../../node_modules/rxjs/dist/esm5/internal/operators/withLatestFrom.js","../internal/operators/zip":"../../node_modules/rxjs/dist/esm5/internal/operators/zip.js","../internal/operators/zipAll":"../../node_modules/rxjs/dist/esm5/internal/operators/zipAll.js","../internal/operators/zipWith":"../../node_modules/rxjs/dist/esm5/internal/operators/zipWith.js"}],"../../node_modules/rxjs/dist/esm5/internal/ajax/getXHRResponse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getXHRResponse = getXHRResponse;

function getXHRResponse(xhr) {
  switch (xhr.responseType) {
    case 'json':
      {
        if ('response' in xhr) {
          return xhr.response;
        } else {
          var ieXHR = xhr;
          return JSON.parse(ieXHR.responseText);
        }
      }

    case 'document':
      return xhr.responseXML;

    case 'text':
    default:
      {
        if ('response' in xhr) {
          return xhr.response;
        } else {
          var ieXHR = xhr;
          return ieXHR.responseText;
        }
      }
  }
}
},{}],"../../node_modules/rxjs/dist/esm5/internal/ajax/AjaxResponse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AjaxResponse = void 0;

var _getXHRResponse = require("./getXHRResponse");

var AjaxResponse = function () {
  function AjaxResponse(originalEvent, xhr, request, type) {
    if (type === void 0) {
      type = 'download_load';
    }

    this.originalEvent = originalEvent;
    this.xhr = xhr;
    this.request = request;
    this.type = type;
    var status = xhr.status,
        responseType = xhr.responseType;
    this.status = status !== null && status !== void 0 ? status : 0;
    this.responseType = responseType !== null && responseType !== void 0 ? responseType : '';
    var allHeaders = xhr.getAllResponseHeaders();
    this.responseHeaders = allHeaders ? allHeaders.split('\n').reduce(function (headers, line) {
      var index = line.indexOf(': ');
      headers[line.slice(0, index)] = line.slice(index + 2);
      return headers;
    }, {}) : {};
    this.response = (0, _getXHRResponse.getXHRResponse)(xhr);
    var loaded = originalEvent.loaded,
        total = originalEvent.total;
    this.loaded = loaded;
    this.total = total;
  }

  return AjaxResponse;
}();

exports.AjaxResponse = AjaxResponse;
},{"./getXHRResponse":"../../node_modules/rxjs/dist/esm5/internal/ajax/getXHRResponse.js"}],"../../node_modules/rxjs/dist/esm5/internal/ajax/errors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AjaxTimeoutError = exports.AjaxError = void 0;

var _getXHRResponse = require("./getXHRResponse");

var _createErrorClass = require("../util/createErrorClass");

var AjaxError = (0, _createErrorClass.createErrorClass)(function (_super) {
  return function AjaxErrorImpl(message, xhr, request) {
    this.message = message;
    this.name = 'AjaxError';
    this.xhr = xhr;
    this.request = request;
    this.status = xhr.status;
    this.responseType = xhr.responseType;
    var response;

    try {
      response = (0, _getXHRResponse.getXHRResponse)(xhr);
    } catch (err) {
      response = xhr.responseText;
    }

    this.response = response;
  };
});
exports.AjaxError = AjaxError;

var AjaxTimeoutError = function () {
  function AjaxTimeoutErrorImpl(xhr, request) {
    AjaxError.call(this, 'ajax timeout', xhr, request);
    this.name = 'AjaxTimeoutError';
    return this;
  }

  AjaxTimeoutErrorImpl.prototype = Object.create(AjaxError.prototype);
  return AjaxTimeoutErrorImpl;
}();

exports.AjaxTimeoutError = AjaxTimeoutError;
},{"./getXHRResponse":"../../node_modules/rxjs/dist/esm5/internal/ajax/getXHRResponse.js","../util/createErrorClass":"../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js"}],"../../node_modules/rxjs/dist/esm5/internal/ajax/ajax.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromAjax = fromAjax;
exports.ajax = void 0;

var _tslib = require("tslib");

var _map = require("../operators/map");

var _Observable = require("../Observable");

var _AjaxResponse = require("./AjaxResponse");

var _errors = require("./errors");

function ajaxGet(url, headers) {
  return ajax({
    method: 'GET',
    url: url,
    headers: headers
  });
}

function ajaxPost(url, body, headers) {
  return ajax({
    method: 'POST',
    url: url,
    body: body,
    headers: headers
  });
}

function ajaxDelete(url, headers) {
  return ajax({
    method: 'DELETE',
    url: url,
    headers: headers
  });
}

function ajaxPut(url, body, headers) {
  return ajax({
    method: 'PUT',
    url: url,
    body: body,
    headers: headers
  });
}

function ajaxPatch(url, body, headers) {
  return ajax({
    method: 'PATCH',
    url: url,
    body: body,
    headers: headers
  });
}

var mapResponse = (0, _map.map)(function (x) {
  return x.response;
});

function ajaxGetJSON(url, headers) {
  return mapResponse(ajax({
    method: 'GET',
    url: url,
    headers: headers
  }));
}

var ajax = function () {
  var create = function (urlOrConfig) {
    var config = typeof urlOrConfig === 'string' ? {
      url: urlOrConfig
    } : urlOrConfig;
    return fromAjax(config);
  };

  create.get = ajaxGet;
  create.post = ajaxPost;
  create.delete = ajaxDelete;
  create.put = ajaxPut;
  create.patch = ajaxPatch;
  create.getJSON = ajaxGetJSON;
  return create;
}();

exports.ajax = ajax;
var UPLOAD = 'upload';
var DOWNLOAD = 'download';
var LOADSTART = 'loadstart';
var PROGRESS = 'progress';
var LOAD = 'load';

function fromAjax(config) {
  return new _Observable.Observable(function (destination) {
    var _a, _b;

    var queryParams = config.queryParams,
        configuredBody = config.body,
        configuredHeaders = config.headers,
        remainingConfig = (0, _tslib.__rest)(config, ["queryParams", "body", "headers"]);
    var url = remainingConfig.url;

    if (!url) {
      throw new TypeError('url is required');
    }

    if (queryParams) {
      var searchParams_1;

      if (url.includes('?')) {
        var parts = url.split('?');

        if (2 < parts.length) {
          throw new TypeError('invalid url');
        }

        searchParams_1 = new URLSearchParams(parts[1]);
        new URLSearchParams(queryParams).forEach(function (value, key) {
          return searchParams_1.set(key, value);
        });
        url = parts[0] + '?' + searchParams_1;
      } else {
        searchParams_1 = new URLSearchParams(queryParams);
        url = url + '?' + searchParams_1;
      }
    }

    var headers = {};

    if (configuredHeaders) {
      for (var key in configuredHeaders) {
        if (configuredHeaders.hasOwnProperty(key)) {
          headers[key.toLowerCase()] = configuredHeaders[key];
        }
      }
    }

    if (!config.crossDomain && !('x-requested-with' in headers)) {
      headers['x-requested-with'] = 'XMLHttpRequest';
    }

    var withCredentials = remainingConfig.withCredentials,
        xsrfCookieName = remainingConfig.xsrfCookieName,
        xsrfHeaderName = remainingConfig.xsrfHeaderName;

    if ((withCredentials || !remainingConfig.crossDomain) && xsrfCookieName && xsrfHeaderName) {
      var xsrfCookie = (_b = (_a = document === null || document === void 0 ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + xsrfCookieName + ")=([^;]*)"))) === null || _a === void 0 ? void 0 : _a.pop()) !== null && _b !== void 0 ? _b : '';

      if (xsrfCookie) {
        headers[xsrfHeaderName] = xsrfCookie;
      }
    }

    var body = extractContentTypeAndMaybeSerializeBody(configuredBody, headers);

    var _request = (0, _tslib.__assign)((0, _tslib.__assign)({
      async: true,
      crossDomain: true,
      withCredentials: false,
      method: 'GET',
      timeout: 0,
      responseType: 'json'
    }, remainingConfig), {
      url: url,
      headers: headers,
      body: body
    });

    var xhr;
    xhr = config.createXHR ? config.createXHR() : new XMLHttpRequest();
    {
      var progressSubscriber_1 = config.progressSubscriber,
          _c = config.includeDownloadProgress,
          includeDownloadProgress = _c === void 0 ? false : _c,
          _d = config.includeUploadProgress,
          includeUploadProgress = _d === void 0 ? false : _d;

      var addErrorEvent = function (type, errorFactory) {
        xhr.addEventListener(type, function () {
          var _a;

          var error = errorFactory();
          (_a = progressSubscriber_1 === null || progressSubscriber_1 === void 0 ? void 0 : progressSubscriber_1.error) === null || _a === void 0 ? void 0 : _a.call(progressSubscriber_1, error);
          destination.error(error);
        });
      };

      addErrorEvent('timeout', function () {
        return new _errors.AjaxTimeoutError(xhr, _request);
      });
      addErrorEvent('abort', function () {
        return new _errors.AjaxError('aborted', xhr, _request);
      });

      var createResponse_1 = function (direction, event) {
        return new _AjaxResponse.AjaxResponse(event, xhr, _request, direction + "_" + event.type);
      };

      var addProgressEvent_1 = function (target, type, direction) {
        target.addEventListener(type, function (event) {
          destination.next(createResponse_1(direction, event));
        });
      };

      if (includeUploadProgress) {
        [LOADSTART, PROGRESS, LOAD].forEach(function (type) {
          return addProgressEvent_1(xhr.upload, type, UPLOAD);
        });
      }

      if (progressSubscriber_1) {
        [LOADSTART, PROGRESS].forEach(function (type) {
          return xhr.upload.addEventListener(type, function (e) {
            var _a;

            return (_a = progressSubscriber_1 === null || progressSubscriber_1 === void 0 ? void 0 : progressSubscriber_1.next) === null || _a === void 0 ? void 0 : _a.call(progressSubscriber_1, e);
          });
        });
      }

      if (includeDownloadProgress) {
        [LOADSTART, PROGRESS].forEach(function (type) {
          return addProgressEvent_1(xhr, type, DOWNLOAD);
        });
      }

      var emitError_1 = function (status) {
        var msg = 'ajax error' + (status ? ' ' + status : '');
        destination.error(new _errors.AjaxError(msg, xhr, _request));
      };

      xhr.addEventListener('error', function (e) {
        var _a;

        (_a = progressSubscriber_1 === null || progressSubscriber_1 === void 0 ? void 0 : progressSubscriber_1.error) === null || _a === void 0 ? void 0 : _a.call(progressSubscriber_1, e);
        emitError_1();
      });
      xhr.addEventListener(LOAD, function (event) {
        var _a, _b;

        var status = xhr.status;

        if (status < 400) {
          (_a = progressSubscriber_1 === null || progressSubscriber_1 === void 0 ? void 0 : progressSubscriber_1.complete) === null || _a === void 0 ? void 0 : _a.call(progressSubscriber_1);
          var response = void 0;

          try {
            response = createResponse_1(DOWNLOAD, event);
          } catch (err) {
            destination.error(err);
            return;
          }

          destination.next(response);
          destination.complete();
        } else {
          (_b = progressSubscriber_1 === null || progressSubscriber_1 === void 0 ? void 0 : progressSubscriber_1.error) === null || _b === void 0 ? void 0 : _b.call(progressSubscriber_1, event);
          emitError_1(status);
        }
      });
    }
    var user = _request.user,
        method = _request.method,
        async = _request.async;

    if (user) {
      xhr.open(method, url, async, user, _request.password);
    } else {
      xhr.open(method, url, async);
    }

    if (async) {
      xhr.timeout = _request.timeout;
      xhr.responseType = _request.responseType;
    }

    if ('withCredentials' in xhr) {
      xhr.withCredentials = _request.withCredentials;
    }

    for (var key in headers) {
      if (headers.hasOwnProperty(key)) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }

    if (body) {
      xhr.send(body);
    } else {
      xhr.send();
    }

    return function () {
      if (xhr && xhr.readyState !== 4) {
        xhr.abort();
      }
    };
  });
}

function extractContentTypeAndMaybeSerializeBody(body, headers) {
  var _a;

  if (!body || typeof body === 'string' || isFormData(body) || isURLSearchParams(body) || isArrayBuffer(body) || isFile(body) || isBlob(body) || isReadableStream(body)) {
    return body;
  }

  if (isArrayBufferView(body)) {
    return body.buffer;
  }

  if (typeof body === 'object') {
    headers['content-type'] = (_a = headers['content-type']) !== null && _a !== void 0 ? _a : 'application/json;charset=utf-8';
    return JSON.stringify(body);
  }

  throw new TypeError('Unknown body type');
}

var _toString = Object.prototype.toString;

function toStringCheck(obj, name) {
  return _toString.call(obj) === "[object " + name + "]";
}

function isArrayBuffer(body) {
  return toStringCheck(body, 'ArrayBuffer');
}

function isFile(body) {
  return toStringCheck(body, 'File');
}

function isBlob(body) {
  return toStringCheck(body, 'Blob');
}

function isArrayBufferView(body) {
  return typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView(body);
}

function isFormData(body) {
  return typeof FormData !== 'undefined' && body instanceof FormData;
}

function isURLSearchParams(body) {
  return typeof URLSearchParams !== 'undefined' && body instanceof URLSearchParams;
}

function isReadableStream(body) {
  return typeof ReadableStream !== 'undefined' && body instanceof ReadableStream;
}
},{"tslib":"../../node_modules/tslib/tslib.es6.js","../operators/map":"../../node_modules/rxjs/dist/esm5/internal/operators/map.js","../Observable":"../../node_modules/rxjs/dist/esm5/internal/Observable.js","./AjaxResponse":"../../node_modules/rxjs/dist/esm5/internal/ajax/AjaxResponse.js","./errors":"../../node_modules/rxjs/dist/esm5/internal/ajax/errors.js"}],"../../node_modules/rxjs/dist/esm5/ajax/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ajax", {
  enumerable: true,
  get: function () {
    return _ajax.ajax;
  }
});
Object.defineProperty(exports, "AjaxError", {
  enumerable: true,
  get: function () {
    return _errors.AjaxError;
  }
});
Object.defineProperty(exports, "AjaxTimeoutError", {
  enumerable: true,
  get: function () {
    return _errors.AjaxTimeoutError;
  }
});
Object.defineProperty(exports, "AjaxResponse", {
  enumerable: true,
  get: function () {
    return _AjaxResponse.AjaxResponse;
  }
});

var _ajax = require("../internal/ajax/ajax");

var _errors = require("../internal/ajax/errors");

var _AjaxResponse = require("../internal/ajax/AjaxResponse");
},{"../internal/ajax/ajax":"../../node_modules/rxjs/dist/esm5/internal/ajax/ajax.js","../internal/ajax/errors":"../../node_modules/rxjs/dist/esm5/internal/ajax/errors.js","../internal/ajax/AjaxResponse":"../../node_modules/rxjs/dist/esm5/internal/ajax/AjaxResponse.js"}],"../util/helpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.btnShow = btnShow;
exports.getUsers = getUsers;
exports.getRandomUsers = getRandomUsers;
exports.getLocations = getLocations;
exports.emailExists = emailExists;
exports.registerEmail = registerEmail;
exports.validNumberOfusers = validNumberOfusers;
exports.validEmail = validEmail;
exports.validPassword = validPassword;
exports.validNotes = validNotes;
exports.inStock = inStock;
exports.printLatLon = printLatLon;

function btnShow() {
  button.style.display = 'inline';
  console.log('showing button...');
}

function getUsers(x) {
  var url = 'https://api.github.com/users?per_page=' + x.target.value;
  console.log('URL is  ', url);
  return url;
}

function getRandomUsers(x) {
  var url = 'https://randomuser.me/api/?results=' + x.target.value;
  console.log('URL is  ', url);
  return url;
}

function getLocations(x) {
  var url = 'https://reqres.in/api/user';
  console.log('URL is  ', url);
  return url;
} // function emailExistsGOOD(regEmail) {
// 	return {
// 		url: 'https://wp-html.co.uk/api/wp-json/api/v1/email-available',
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify({ data: JSON.stringify({ email: regEmail }) }),
// 	};
// }


function emailExists(regEmail) {
  var formData = new FormData();
  formData.append('email', regEmail);
  return {
    url: 'https://reqres.in/api/user',
    method: 'POST',
    body: formData
  };
}

function registerEmail(regEmail) {
  var formData = new FormData();
  formData.append('data', regEmail);
  return {
    url: 'https://reqres.in/api/user',
    method: 'POST',
    body: formData
  };
}

function validNumberOfusers(val, el) {
  if (val < 3) {
    el.innerHTML = 'INVALID entry';
  } else {
    el.innerHTML = 'Valid entry...thank you.';
  }
}

function validEmail(val, el) {
  // console.log('validEmail check');
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val)) {
    // console.log('VALID EMAIL');
    el.innerHTML = '<span>VALID</span>';
    return true;
  } else {
    // console.log('!!!INVALID EMAIL');
    el.innerHTML = '<span>NOT VALID</span>';
    return false;
  }
}

function validPassword(val, el) {
  if (val.length < 6) {
    //    console.log('!!!INVALID PWD');
    el.innerHTML = '<span >6 or more characters required</span>';
    return false;
  } else {
    //   console.log('VALID LENGTH ');
    el.innerHTML = '<span>VALID LENGTH</span>';
    return true;
  }
}

function validNotes(val, el) {
  if (val.length < 6) {
    //    console.log('!!!INVALID PWD');
    el.innerHTML = '<span>6 or more characters required</span>';
    return false;
  } else {
    //   console.log('VALID LENGTH ');
    el.innerHTML = '<span>VALID LENGTH</span>';
    return true;
  }
}

function inStock() {
  return Math.random() > 0.5;
}

function printLatLon(value, id, city, lat, lon) {
  var container = document.getElementById('results-container');
  var item = document.createElement('a');
  item.innerHTML = "".concat(value, "<br>");
  item.setAttribute('id', id);
  item.setAttribute('city', city);
  item.setAttribute('lat', lat);
  item.setAttribute('lon', lon);
  item.setAttribute('href', '#!');
  item.className = '';
  container.appendChild(item);
}
},{}],"../lessons/register.js":[function(require,module,exports) {
"use strict";

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _ajax = require("rxjs/ajax");

var _helpers = require("../util/helpers.js");

console.log("%cREGISTER with JSON SERVER and Users...", 'color:blue; font-size:18px'); // Store form data

var formData = {
  email: '',
  password: '',
  agree: false,
  emailAvailable: false
};
var regEmail = new FormData(); // DOM elements

var button = document.getElementById('btnSubmit');
var output = document.getElementById('output');
var email = document.getElementById('email');
var password = document.getElementById('password');
var cbo = document.getElementById('cbo');
var validationEmail = document.getElementById('validation-email');
var validationPassword = document.getElementById('validation-password');
var email$ = (0, _rxjs.fromEvent)(email, 'keydown').pipe((0, _operators.debounceTime)(750), (0, _operators.filter)(function (e) {
  return e.target.value.length > 3;
}), (0, _operators.map)(function (x) {
  return x.target.value;
}), (0, _operators.map)(function checkEmailIsValid(email) {
  formData.validEmail = (0, _helpers.validEmail)(email, validationEmail);
  formData.email = email;
  return (0, _helpers.validEmail)(email, validationEmail);
}), (0, _operators.filter)(function (x) {
  return x;
}), // if it is not a valid email no need to run ajax check
(0, _operators.switchMap)(function () {
  return (0, _ajax.ajax)((0, _helpers.emailExists)(formData.email));
}), (0, _operators.tap)(function (jsonData) {
  var result = jsonData.response;
  console.log('EMAIL EXISTS', result); // let result = { email: 'p@c.com', valid: true, message: 'ALL OK' };
  // console.log(result);
  // console.log(`%c${result.email} available? ${result.valid}`, 'color:green;font-size:18px;');

  validationEmail.innerHTML += "<b> ".concat(formData.email, " ").concat(result.id, " available</b>");
}), (0, _operators.tap)(function (result) {
  console.log('L87', result.status);

  if (result.status) {
    formData.emailAvailable = true;
    console.log('email avail');
  } else {
    formData.emailAvailable = false;
    console.log('email NOT avail');
  }
}));
var password$ = (0, _rxjs.fromEvent)(password, 'keyup').pipe((0, _operators.debounceTime)(750), (0, _operators.map)(function (x) {
  return x.target.value;
}), (0, _operators.map)(function checkPassword(password) {
  formData.validPassword = (0, _helpers.validPassword)(password, validationPassword);
  formData.password = password;
  return (0, _helpers.validPassword)(password, validationPassword);
}) // tap(password => (formData.password = password)),
);
var cbo$ = (0, _rxjs.fromEvent)(cbo, 'click').pipe((0, _operators.tap)(function () {
  return formData.agree = cbo.checked;
}));
var ajaxOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'p@c.com'
  })
};
var button$ = (0, _rxjs.fromEvent)(button, 'click').pipe((0, _operators.switchMap)(function () {
  return (0, _ajax.ajax)('https://reqres.in/api/user', ajaxOptions);
}), (0, _operators.tap)(function (jsonData) {
  var result = jsonData.response;
  console.log(result);
  output.innerHTML = "Form data sent to server:<br>\n\t\t  email: ".concat(formData.email, "<br>\n\t\t  password: ").concat(formData.password, "<br>\n\t\t  agree:  ").concat(formData.agree, "<br>\n\n\t\t  <b>\n\t\t\tAPI: ").concat(result.data[0].id, "<br>\n\t\t\tRegistration status: ").concat(result.data[0].name, "<br>\n\t\t  Message: ").concat(result.data[0].color, "</br>\n\t\t  Email: ").concat(result.data[0].pantone_value, "</b>\n\n\t\t  ");
}));
(0, _rxjs.combineLatest)([email$, password$, cbo$]).subscribe(function () {
  console.log("%C Form Data: ", formData);

  if (formData.validEmail && formData.emailAvailable && formData.validPassword && formData.agree) {
    // console.log('VALID FORM');
    button.removeAttribute('disabled');
    button.textContent = 'SUBMIT';
    output.innerHTML = '';
  } else {
    // console.log('INVALID FORM');
    var errMsg = '';
    button.setAttribute('disabled', true);
    button.textContent = 'DISABLED';

    if (!formData.emailAvailable) {
      errMsg += "<li>".concat(formData.email, " is already registered.</li>");
    }

    if (!formData.agree) {
      errMsg += '<li>You cannot register unless you agree to the site rules.</li>';
    }

    output.innerHTML = errMsg;
  }
}); // Subscribers

button$.subscribe({
  next: function next(x) {
    console.log("[BUTTON SUBSCRIBE] BUTTON was clicked");
  },
  error: function error(err) {
    console.log('[BTN SUBSCRIBE]', err.message);
  },
  complete: function complete() {
    console.log('Button Completed');
  }
});
},{"rxjs":"../../node_modules/rxjs/dist/esm5/index.js","rxjs/operators":"../../node_modules/rxjs/dist/esm5/operators/index.js","rxjs/ajax":"../../node_modules/rxjs/dist/esm5/ajax/index.js","../util/helpers.js":"../util/helpers.js"}],"../../index.js":[function(require,module,exports) {
"use strict";

require("./src/lessons/register.js");
},{"./src/lessons/register.js":"../lessons/register.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55429" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../../index.js"], null)
//# sourceMappingURL=/50-RXJS-PARCEL.ddf195d1.js.map