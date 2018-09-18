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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Server/Server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\nvar cachedSetTimeout;\nvar cachedClearTimeout;\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout() {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        }\n        else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    }\n    catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        }\n        else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    }\n    catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n}());\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    }\n    catch (e) {\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        }\n        catch (e) {\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    }\n    catch (e) {\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        }\n        catch (e) {\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    }\n    else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n    var len = queue.length;\n    while (len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\nfunction noop() { }\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\nprocess.listeners = function (name) { return []; };\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\nprocess.cwd = function () { return '/'; };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function () { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./src/Server/Base/BaseServer.ts":
/*!***************************************!*\
  !*** ./src/Server/Base/BaseServer.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar http_1 = __webpack_require__(/*! http */ \"http\");\nvar express = __webpack_require__(/*! express */ \"express\");\nvar socketIo = __webpack_require__(/*! socket.io */ \"socket.io\");\nvar _649_1 = __webpack_require__(/*! ../Handlers/649 */ \"./src/Server/Handlers/649/index.ts\");\nvar Controller_1 = __webpack_require__(/*! ../Controller */ \"./src/Server/Controller/index.ts\");\nvar BaseApp = /** @class */ (function () {\n    function BaseApp() {\n        this.initConfig();\n        this.createApp();\n        this.createConfigMiddleWare();\n        this.createServer();\n        this.createIo();\n        this.startService();\n    }\n    BaseApp.prototype.initConfig = function () {\n        this.port = process.env.PORT || BaseApp.PORT;\n    };\n    BaseApp.prototype.createApp = function () {\n        this.app = express();\n        new Controller_1.default(this.app);\n    };\n    BaseApp.prototype.createConfigMiddleWare = function () {\n        this.app.use(express.static(\"dist\"));\n    };\n    BaseApp.prototype.createServer = function () {\n        this.server = http_1.createServer(this.app);\n    };\n    BaseApp.prototype.createIo = function () {\n        this.io = socketIo(this.server);\n        new _649_1.default(this.io);\n    };\n    BaseApp.prototype.startService = function () {\n        var _this = this;\n        this.server.listen(this.port, function (res, err) {\n            console.log(\"SERVER IS RUNNING ON \" + _this.port);\n        });\n    };\n    BaseApp.PORT = 3000;\n    BaseApp.DOMAIN = 'http://localhost:3000';\n    return BaseApp;\n}());\nexports.default = BaseApp;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./src/Server/Base/BaseServer.ts?");

/***/ }),

/***/ "./src/Server/Controller/index.ts":
/*!****************************************!*\
  !*** ./src/Server/Controller/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar renderHtml = function () { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">\\n    <head><link rel=\\\"stylesheet\\\" href=\\\"https://unpkg.com/react-md@1.5.0/dist/react-md.indigo-pink.min.css\\\"></head>\\n    <title>Document</title>\\n</head>\\n<body>\\n    <div id=\\\"root\\\"/>\\n    <script src=\\\"/browser.js\\\"></script>\\n</body>\\n</html>\\n\"; };\nvar Root = /** @class */ (function () {\n    function Root(serverInstance) {\n        var _this = this;\n        this.moduleUser = function (req, res, next) { };\n        this.moduleDraw = function (req, res, next) { };\n        this.userAction = function (action) {\n            switch (action) {\n                case \"buyerLimit\":\n                    return {};\n                case \"prizesList\":\n                    return {};\n                case \"summaryTotal\":\n                    return {};\n                case \"summaryList\":\n                    return {};\n                case \"ticketsList\":\n            }\n        };\n        this.drawAction = function (action) {\n            switch (action) {\n                case \"info\":\n                    return {\n                        status: 1,\n                        message: \"OK\",\n                        result: {\n                            draw: 28,\n                            stage: \"FinishSelling\",\n                            jackpotNumbers: {\n                                jackpot: null,\n                                bonus: null\n                            },\n                            jackpotAmount: \"131524220550000000000\",\n                            jackpotAmountInUSD: \"26907.98801212241055\",\n                            winningJackpotTotal: 0,\n                            prizePool: \"131524252400000000000\",\n                            columnPrice: \"10000000000000\",\n                            fiatRate: \"20458580100\",\n                            _2ndPrize: \"10000000000000000000\",\n                            _3rdPrize: \"8000000000000000000\",\n                            _4thPrize: \"7000000000000000000\",\n                            _5thPrize: \"5000000000000000000\",\n                            winningPrize2Total: 0,\n                            winningPrize3Total: 0,\n                            winningPrize4Total: 0,\n                            winningPrize5Total: 0\n                        }\n                    };\n                case \"completeStage\":\n                    return {\n                        status: 1,\n                        message: \"OK\",\n                        result: {\n                            calculateJackpot: [\n                                1,\n                                3,\n                                4,\n                                5,\n                                6,\n                                7,\n                                8,\n                                9,\n                                10,\n                                11,\n                                12,\n                                13,\n                                14,\n                                15,\n                                16\n                            ]\n                        }\n                    };\n                case \"prizesList\":\n                    return {};\n                case \"summaryTotal\":\n                    return {};\n                case \"summaryList\":\n                    return {};\n                case \"ticketsList\":\n            }\n        };\n        this.drawInfo = function (req, res, next) {\n            res.json({\n                status: 1,\n                message: \"OK\",\n                result: {\n                    draw: 28,\n                    stage: \"FinishSelling\",\n                    jackpotNumbers: {\n                        jackpot: null,\n                        bonus: null\n                    },\n                    jackpotAmount: \"131524220550000000000\",\n                    jackpotAmountInUSD: \"26907.98801212241055\",\n                    winningJackpotTotal: 0,\n                    prizePool: \"131524252400000000000\",\n                    columnPrice: \"10000000000000\",\n                    fiatRate: \"20458580100\",\n                    _2ndPrize: \"10000000000000000000\",\n                    _3rdPrize: \"8000000000000000000\",\n                    _4thPrize: \"7000000000000000000\",\n                    _5thPrize: \"5000000000000000000\",\n                    winningPrize2Total: 0,\n                    winningPrize3Total: 0,\n                    winningPrize4Total: 0,\n                    winningPrize5Total: 0\n                }\n            });\n        };\n        this.getRouter = function () { return _this.server; };\n        this.server = serverInstance;\n        this.server.get(\"/lotto/api?game=lotto-5-45\", this.drawInfo);\n    }\n    return Root;\n}());\nexports.default = Root;\n\n\n//# sourceURL=webpack:///./src/Server/Controller/index.ts?");

/***/ }),

/***/ "./src/Server/Handlers/649/index.ts":
/*!******************************************!*\
  !*** ./src/Server/Handlers/649/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar HandleEvents = /** @class */ (function () {\n    function HandleEvents(socketInstance) {\n        var _this = this;\n        this.onDisconnect = function (client) {\n            client.on(\"disconnect\", function (reason) {\n                console.log(\"client-disconnect\", reason);\n            });\n        };\n        this.sendFactory = function (event, client) {\n            client.on(event, function (data) {\n                console.log(\"new_event\", data);\n                client.broadcast.emit(event, data);\n            });\n        };\n        this.io = socketInstance;\n        this.io.of(\"/\" + HandleEvents.game).on(\"connect\", function (client) {\n            console.log(\"connectSuccess\");\n            _this.onDisconnect(client);\n            _this.sendFactory('NEW_EVENT', client);\n        });\n    }\n    HandleEvents.game = \"649\";\n    return HandleEvents;\n}());\nexports.default = HandleEvents;\n\n\n//# sourceURL=webpack:///./src/Server/Handlers/649/index.ts?");

/***/ }),

/***/ "./src/Server/Server.ts":
/*!******************************!*\
  !*** ./src/Server/Server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar BaseServer_1 = __webpack_require__(/*! ./Base/BaseServer */ \"./src/Server/Base/BaseServer.ts\");\nnew BaseServer_1.default();\n\n\n//# sourceURL=webpack:///./src/Server/Server.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ })

/******/ });