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
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar data = __webpack_require__(/*! ./json */ \"./src/Server/Controller/json/index.ts\");\nvar renderHtml = function () { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">\\n    <head><link rel=\\\"stylesheet\\\" href=\\\"https://unpkg.com/react-md@1.5.0/dist/react-md.indigo-pink.min.css\\\"></head>\\n    <title>Document</title>\\n</head>\\n<body>\\n    <div id=\\\"root\\\"/>\\n    <script src=\\\"/browser.js\\\"></script>\\n</body>\\n</html>\\n\"; };\nvar Root = /** @class */ (function () {\n    function Root(serverInstance) {\n        var _this = this;\n        this.socketEvent = function (req, res, next) {\n            res.send(renderHtml());\n        };\n        this.userAction = function (action) {\n            switch (action) {\n                case \"buyerLimit\":\n                    return {};\n                case \"prizesList\":\n                    return {};\n                case \"summaryTotal\":\n                    return {};\n                case \"summaryList\":\n                    return {};\n                case \"ticketsList\":\n            }\n            return {\n                status: 0,\n                code: \"SERVER_ERROR\",\n                message: \"error\"\n            };\n        };\n        this.drawAction = function (action) {\n            switch (action) {\n                case \"info\":\n                    return data.drawInfo;\n                case \"completeStage\":\n                    return data.countedDraw;\n                case \"prizesList\": //ticket me win\n                    return data.ticketMeWin;\n                case \"summaryTotal\": //claim total\n                    return data.summaryTotal;\n                case \"summaryList\": // draw me bought\n                    return data.drawMeBought;\n                case \"ticketsList\": { //ticket me bought\n                    return data.ticketMeBought;\n                }\n            }\n            return {\n                status: 0,\n                code: \"SERVER_ERROR\",\n                message: \"error\"\n            };\n        };\n        this.apiStation = function (req, res, next) {\n            var _a = req.query, action = _a.action, module = _a.module;\n            switch (module) {\n                case 'draw':\n                    return res.json(_this.drawAction(action));\n                case 'action':\n                    return res.json(_this.userAction(action));\n            }\n            res.send({\n                status: 0,\n                code: \"SERVER_ERROR\",\n                message: \"error\"\n            });\n        };\n        this.getRouter = function () { return _this.server; };\n        this.server = serverInstance;\n        this.server.get(\"/\", this.socketEvent);\n        this.server.get(\"/lotto/api\", this.apiStation);\n    }\n    return Root;\n}());\nexports.default = Root;\n\n\n//# sourceURL=webpack:///./src/Server/Controller/index.ts?");

/***/ }),

/***/ "./src/Server/Controller/json/counted-draw.ts":
/*!****************************************************!*\
  !*** ./src/Server/Controller/json/counted-draw.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    status: 1,\n    message: \"OK\",\n    result: {\n        calculateJackpot: [\n            1\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./src/Server/Controller/json/counted-draw.ts?");

/***/ }),

/***/ "./src/Server/Controller/json/draw-info.ts":
/*!*************************************************!*\
  !*** ./src/Server/Controller/json/draw-info.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    \"status\": 1,\n    \"message\": \"OK\",\n    \"result\": {\n        \"draw\": 4,\n        \"startSellingTimestamp\": 1537329525,\n        \"finishSellingTimestamp\": 1537415925,\n        \"stage\": \"ResumeSelling\",\n        \"isMovedTotalSales\": false,\n        \"jackpotCounterState\": \"Inactived\",\n        \"jackpotNumbers\": {\n            \"jackpot\": null,\n            \"bonus\": null\n        },\n        \"jackpotAmount\": \"102522128000000000000\",\n        \"jackpotAmountInUSD\": \"21796.0967645656\",\n        \"winningJackpotTotal\": 0,\n        \"prizePool\": \"102522128000000000000\",\n        \"totalTicketSold\": 0,\n        \"totalStandardSold\": 0,\n        \"totalPowerBuySold\": 0,\n        \"totalTicketAmount\": \"0\",\n        \"totalTicketAmountInUSD\": \"0\",\n        \"totalWinningTickets\": 0,\n        \"totalWinningAmount\": \"0\",\n        \"totalWinningAmountInUSD\": \"0\",\n        \"totalClaimedAmount\": \"0\",\n        \"totalClaimedAmountInUSD\": \"0\",\n        \"totalPendingClaimedAmount\": \"0\",\n        \"totalPendingClaimedAmountInUSD\": \"0\",\n        \"totalAvailableAmount\": \"0\",\n        \"totalAvailableAmountInUSD\": \"0\",\n        \"totalHoldingAmount\": \"0\",\n        \"totalHoldingAmountInUSD\": \"0\",\n        \"totalOverdueAmount\": \"0\",\n        \"totalOverdueAmountInUSD\": \"0\",\n        \"columnPrice\": \"1000000000000\",\n        \"fiatRate\": \"21259895000\",\n        \"_2ndPrize\": \"4000000000000000000\",\n        \"_3rdPrize\": \"3000000000000000000\",\n        \"_4thPrize\": \"2000000000000000000\",\n        \"_5thPrize\": \"1000000000000000000\",\n        \"prizeRate\": \"70000000\",\n        \"systemCostRate\": \"28000000\",\n        \"royaltyRate\": \"1000000\",\n        \"randaoBountyRate\": \"1000000\",\n        \"jackpotRate\": \"35000000\",\n        \"minJackpotAmount\": \"100000000000000000000\",\n        \"sellingTime\": \"86400\",\n        \"requiredKYC\": \"1\",\n        \"winningPrize2Total\": 0,\n        \"winningPrize3Total\": 0,\n        \"winningPrize4Total\": 0,\n        \"winningPrize5Total\": 0\n    }\n};\n\n\n//# sourceURL=webpack:///./src/Server/Controller/json/draw-info.ts?");

/***/ }),

/***/ "./src/Server/Controller/json/draw-me-bought.ts":
/*!******************************************************!*\
  !*** ./src/Server/Controller/json/draw-me-bought.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    status: 1,\n    message: 'OK',\n    result: {\n        totalRecords: 2,\n        totalPages: 1,\n        page: 1,\n        offset: 6,\n        data: [\n            {\n                draw: 3,\n                stage: 'CountedJackpotTickets',\n                startTimestamp: 1537256594,\n                finishTimestamp: 1537329225,\n                columnPrice: '100000000000000',\n                columnPriceInUSD: '0.0198272711',\n                prizePool: '107204487500000000000',\n                jackpotAmount: '102522128000000000000',\n                winningJackpotTotal: 0,\n                movedTotalSales: true,\n                totalTicketSold: 7,\n                totalStandardSold: 0,\n                totalPowerBuySold: 7,\n                totalTicketAmount: '196000000000000000',\n                totalTicketAmountInUSD: '38.861451356',\n                totalWinningTickets: 0,\n                totalWiningTicketsAmount: '0',\n                totalWiningTicketsAmountInUSD: '0',\n                totalWinningAmount: '0',\n                totalWinningAmountInUSD: '0',\n                totalClaimedAmount: '0',\n                totalClaimedAmountInUSD: '0',\n                totalPendingClaimedAmount: '0',\n                totalPendingClaimedAmountInUSD: '0',\n                totalAvailableAmount: '0',\n                totalAvailableAmountInUSD: '0',\n                totalHoldingAmount: '0',\n                totalHoldingAmountInUSD: '0',\n                totalOverdueAmount: '0',\n                totalOverdueAmountInUSD: '0'\n            },\n            {\n                draw: 1,\n                stage: 'CountedJackpotTickets',\n                startTimestamp: 1537252739,\n                finishTimestamp: 1537256114,\n                columnPrice: '100000000000000',\n                columnPriceInUSD: '0.0197842153',\n                prizePool: '100002450000000000000',\n                jackpotAmount: '100000857500000000000',\n                winningJackpotTotal: 0,\n                movedTotalSales: true,\n                totalTicketSold: 2,\n                totalStandardSold: 1,\n                totalPowerBuySold: 1,\n                totalTicketAmount: '800000000000000',\n                totalTicketAmountInUSD: '0.1582737224',\n                totalWinningTickets: 0,\n                totalWiningTicketsAmount: '0',\n                totalWiningTicketsAmountInUSD: '0',\n                totalWinningAmount: '0',\n                totalWinningAmountInUSD: '0',\n                totalClaimedAmount: '0',\n                totalClaimedAmountInUSD: '0',\n                totalPendingClaimedAmount: '0',\n                totalPendingClaimedAmountInUSD: '0',\n                totalAvailableAmount: '0',\n                totalAvailableAmountInUSD: '0',\n                totalHoldingAmount: '0',\n                totalHoldingAmountInUSD: '0',\n                totalOverdueAmount: '0',\n                totalOverdueAmountInUSD: '0'\n            }\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./src/Server/Controller/json/draw-me-bought.ts?");

/***/ }),

/***/ "./src/Server/Controller/json/index.ts":
/*!*********************************************!*\
  !*** ./src/Server/Controller/json/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ticket_me_win_1 = __webpack_require__(/*! ./ticket-me-win */ \"./src/Server/Controller/json/ticket-me-win.ts\");\nexports.ticketMeWin = ticket_me_win_1.default;\nvar ticket_me_bought_1 = __webpack_require__(/*! ./ticket-me-bought */ \"./src/Server/Controller/json/ticket-me-bought.ts\");\nexports.ticketMeBought = ticket_me_bought_1.default;\nvar draw_me_bought_1 = __webpack_require__(/*! ./draw-me-bought */ \"./src/Server/Controller/json/draw-me-bought.ts\");\nexports.drawMeBought = draw_me_bought_1.default;\nvar draw_info_1 = __webpack_require__(/*! ./draw-info */ \"./src/Server/Controller/json/draw-info.ts\");\nexports.drawInfo = draw_info_1.default;\nvar counted_draw_1 = __webpack_require__(/*! ./counted-draw */ \"./src/Server/Controller/json/counted-draw.ts\");\nexports.countedDraw = counted_draw_1.default;\nvar total_summary_1 = __webpack_require__(/*! ./total-summary */ \"./src/Server/Controller/json/total-summary.ts\");\nexports.summaryTotal = total_summary_1.default;\n\n\n//# sourceURL=webpack:///./src/Server/Controller/json/index.ts?");

/***/ }),

/***/ "./src/Server/Controller/json/ticket-me-bought.ts":
/*!********************************************************!*\
  !*** ./src/Server/Controller/json/ticket-me-bought.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    data: {\n        status: 1,\n        message: 'OK',\n        result: {\n            totalRecords: 7,\n            totalPages: 1,\n            page: 1,\n            offset: 10,\n            data: [\n                {\n                    event: 'BuyParticipation',\n                    args: {\n                        drawFrom: '3',\n                        drawTo: '3',\n                        participation: '0x000000000000000000000000000000000000000000000005080c0e16191f232a',\n                        buyer: '0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea',\n                        seller: '0x1f2f5aebde7224affcfb76b1d7c9d9b621a82492',\n                        draw: 3,\n                        orgParticipation: '5,8,12,14,22,25,31,35,42'\n                    },\n                    blockNumber: 3013474,\n                    blockHash: '0xdd9ed2fa37c6086b2437af2fc0d7cf12d6a501220f9fbf90b6df8b384543cf9d',\n                    transactionHash: '0x0237f58016256d10dfbea895f430b1ae1ad6c1e4ba2ed504ef06c277f4aed484',\n                    transactionIndex: 1,\n                    logIndex: 0,\n                    address: '0x4b116173013e82e14f61c3689cfd98dd0bbb45c6',\n                    from: '0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea',\n                    to: '0x1f2f5aebde7224affcfb76b1d7c9d9b621a82492',\n                    gas: '167617',\n                    gasPrice: '16000000000',\n                    gasUsed: '165571',\n                    timestamp: 1537328895,\n                    id: '5ba1c7017155577c0b5e2fc7',\n                    prizesList: [],\n                    sellerName: 'DEFAULT SELLER',\n                    receivedAmount: '8400000000000000',\n                    payment: '8400000000000000'\n                },\n                {\n                    event: 'BuyParticipation',\n                    args: {\n                        drawFrom: '3',\n                        drawTo: '3',\n                        participation: '0x000000000000000000000000000000000000000006080a0f1113171e22242729',\n                        buyer: '0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea',\n                        seller: '0x1f2f5aebde7224affcfb76b1d7c9d9b621a82492',\n                        draw: 3,\n                        orgParticipation: '6,8,10,15,17,19,23,30,34,36,39,41'\n                    },\n                    blockNumber: 3009175,\n                    blockHash: '0x459a9b860167a910264473379d605e3a61a3e4694e6933aebc39612d6a134a3c',\n                    transactionHash: '0x91ab93a1908327362ce310b34d469a79de8ff55480924d0d6251ea0f17675484',\n                    transactionIndex: 1,\n                    logIndex: 2,\n                    address: '0x4b116173013e82e14f61c3689cfd98dd0bbb45c6',\n                    from: '0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea',\n                    to: '0x1f2f5aebde7224affcfb76b1d7c9d9b621a82492',\n                    gas: '113459',\n                    gasPrice: '10000000000',\n                    gasUsed: '112262',\n                    timestamp: 1537264410,\n                    id: '5ba0cb1c7155577c0b5e2fb6',\n                    prizesList: [],\n                    sellerName: 'DEFAULT SELLER',\n                    receivedAmount: '92400000000000000',\n                    payment: '92400000000000000'\n                },\n                {\n                    event: 'BuyParticipation',\n                    args: {\n                        drawFrom: '3',\n                        drawTo: '3',\n                        participation: '0x000000000000000000000000000000000000000006080a0f1113171e22242729',\n                        buyer: '0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea',\n                        seller: '0x1f2f5aebde7224affcfb76b1d7c9d9b621a82492',\n                        draw: 3,\n                        orgParticipation: '6,8,10,15,17,19,23,30,34,36,39,41'\n                    },\n                    blockNumber: 3009175,\n                    blockHash: '0x459a9b860167a910264473379d605e3a61a3e4694e6933aebc39612d6a134a3c',\n                    transactionHash: '0xee95594af9e73ce4a88078d90f63804f5de8b01f1839dc44fdecd86bd2f37281',\n                    transactionIndex: 0,\n                    logIndex: 0,\n                    address: '0x4b116173013e82e14f61c3689cfd98dd0bbb45c6',\n                    from: '0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea',\n                    to: '0x1f2f5aebde7224affcfb76b1d7c9d9b621a82492',\n                    gas: '169845',\n                    gasPrice: '10000000000',\n                    gasUsed: '167767',\n                    timestamp: 1537264410,\n                    id: '5ba0cb1c7155577c0b5e2fb5',\n                    prizesList: [],\n                    sellerName: 'DEFAULT SELLER',\n                    receivedAmount: '92400000000000000',\n                    payment: '92400000000000000'\n                },\n                {\n                    event: 'BuyParticipation',\n                    args: {\n                        drawFrom: '3',\n                        drawTo: '3',\n                        participation: '0x0000000000000000000000000000000000000000000000000006071219252731',\n                        buyer: '0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea',\n                        seller: '0x1f2f5aebde7224affcfb76b1d7c9d9b621a82492',\n                        draw: 3,\n                        orgParticipation: '6,7,18,25,37,39,49'\n                    },\n                    blockNumber: 3008984,\n                    blockHash: '0xf490c036e57232741371b57c867f187b0835122d67e2b1a59a1e63bcca90a4c2',\n                    transactionHash: '0xb009407b148987411b6ad023a7702d1936cce3114a4ac09d8b605a5ef8ec364a',\n                    transactionIndex: 4,\n                    logIndex: 17,\n                    address: '0x4b116173013e82e14f61c3689cfd98dd0bbb45c6',\n                    from: '0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea',\n                    to: '0x1f2f5aebde7224affcfb76b1d7c9d9b621a82492',\n                    gas: '109453',\n                    gasPrice: '10000000000',\n                    gasUsed: '108313',\n                    timestamp: 1537261544,\n                    id: '5ba0bfe97155577c0b5e2fad',\n                    prizesList: [],\n                    sellerName: 'DEFAULT SELLER',\n                    receivedAmount: '700000000000000',\n                    payment: '700000000000000'\n                },\n                {\n                    event: 'BuyParticipation',\n                    args: {\n                        drawFrom: '3',\n                        drawTo: '3',\n                        participation: '0x0000000000000000000000000000000000000000000000000006071219252731',\n                        buyer: '0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea',\n                        seller: '0x1f2f5aebde7224affcfb76b1d7c9d9b621a82492',\n                        draw: 3,\n                        orgParticipation: '6,7,18,25,37,39,49'\n                    },\n                    blockNumber: 3008984,\n                    blockHash: '0xf490c036e57232741371b57c867f187b0835122d67e2b1a59a1e63bcca90a4c2',\n                    transactionHash: '0x620473ffee3d4c2e8197fc9fa75a7b8364aa0f49a26145458483b3dcf1e07de1',\n                    transactionIndex: 3,\n                    logIndex: 15,\n                    address: '0x4b116173013e82e14f61c3689cfd98dd0bbb45c6',\n                    from: '0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea',\n                    to: '0x1f2f5aebde7224affcfb76b1d7c9d9b621a82492',\n                    gas: '139929',\n                    gasPrice: '10000000000',\n                    gasUsed: '138313',\n                    timestamp: 1537261544,\n                    id: '5ba0bfe97155577c0b5e2fac',\n                    prizesList: [],\n                    sellerName: 'DEFAULT SELLER',\n                    receivedAmount: '700000000000000',\n                    payment: '700000000000000'\n                },\n                {\n                    event: 'BuyParticipation',\n                    args: {\n                        drawFrom: '3',\n                        drawTo: '3',\n                        participation: '0x00000000000000000000000000000000000000000000000000121b1d1e2b3031',\n                        buyer: '0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea',\n                        seller: '0x1f2f5aebde7224affcfb76b1d7c9d9b621a82492',\n                        draw: 3,\n                        orgParticipation: '18,27,29,30,43,48,49'\n                    },\n                    blockNumber: 3008977,\n                    blockHash: '0x7c785af3470f12ae6eff0767fcd878d9c04477686e723ef33fe361782dec74d0',\n                    transactionHash: '0xfd487e39d3ca91c2cfa42885bbeff0aa7ca98b068ecfd1e2855168c0c8d9155a',\n                    transactionIndex: 2,\n                    logIndex: 2,\n                    address: '0x4b116173013e82e14f61c3689cfd98dd0bbb45c6',\n                    from: '0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea',\n                    to: '0x1f2f5aebde7224affcfb76b1d7c9d9b621a82492',\n                    gas: '109453',\n                    gasPrice: '10000000000',\n                    gasUsed: '108313',\n                    timestamp: 1537261439,\n                    id: '5ba0bf7f7155577c0b5e2fa4',\n                    prizesList: [],\n                    sellerName: 'DEFAULT SELLER',\n                    receivedAmount: '700000000000000',\n                    payment: '700000000000000'\n                },\n                {\n                    event: 'BuyParticipation',\n                    args: {\n                        drawFrom: '3',\n                        drawTo: '3',\n                        participation: '0x00000000000000000000000000000000000000000000000000121b1d1e2b3031',\n                        buyer: '0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea',\n                        seller: '0x1f2f5aebde7224affcfb76b1d7c9d9b621a82492',\n                        draw: 3,\n                        orgParticipation: '18,27,29,30,43,48,49'\n                    },\n                    blockNumber: 3008977,\n                    blockHash: '0x7c785af3470f12ae6eff0767fcd878d9c04477686e723ef33fe361782dec74d0',\n                    transactionHash: '0x187506c9b406b4f1f911c9e48a40301450e4dc0bb3f3e99cd6720b8fa11e8b25',\n                    transactionIndex: 1,\n                    logIndex: 0,\n                    address: '0x4b116173013e82e14f61c3689cfd98dd0bbb45c6',\n                    from: '0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea',\n                    to: '0x1f2f5aebde7224affcfb76b1d7c9d9b621a82492',\n                    gas: '139929',\n                    gasPrice: '10000000000',\n                    gasUsed: '138313',\n                    timestamp: 1537261439,\n                    id: '5ba0bf7f7155577c0b5e2fa3',\n                    prizesList: [],\n                    sellerName: 'DEFAULT SELLER',\n                    receivedAmount: '700000000000000',\n                    payment: '700000000000000'\n                }\n            ]\n        }\n    },\n    draw: '3'\n};\n\n\n//# sourceURL=webpack:///./src/Server/Controller/json/ticket-me-bought.ts?");

/***/ }),

/***/ "./src/Server/Controller/json/ticket-me-win.ts":
/*!*****************************************************!*\
  !*** ./src/Server/Controller/json/ticket-me-win.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {};\n\n\n//# sourceURL=webpack:///./src/Server/Controller/json/ticket-me-win.ts?");

/***/ }),

/***/ "./src/Server/Controller/json/total-summary.ts":
/*!*****************************************************!*\
  !*** ./src/Server/Controller/json/total-summary.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    \"status\": 1,\n    \"message\": \"OK\",\n    \"result\": {\n        \"totalTicketSold\": 17,\n        \"totalStandardSold\": 8,\n        \"totalPowerBuySold\": 9,\n        \"totalTicketAmount\": \"170000000000000000\",\n        \"totalTicketAmountInUSD\": \"102.935\",\n        \"totalWinningTickets\": 5,\n        \"totalWinningAmount\": \"148722950000000000000.00000000000000667\",\n        \"totalWinningAmountInUSD\": \"90051.74622500000667\",\n        \"totalClaimedAmount\": \"4200000000000000000\",\n        \"totalClaimedAmountInUSD\": \"2543.1\",\n        \"totalHoldingAmount\": \"144522950000000000000.00000000000000667\",\n        \"totalHoldingAmountInUSD\": \"87508.64622500000667\",\n        \"totalOverdueAmount\": \"0\",\n        \"totalOverdueAmountInUSD\": \"0\"\n    }\n};\n\n\n//# sourceURL=webpack:///./src/Server/Controller/json/total-summary.ts?");

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