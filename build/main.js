require('source-map-support/register')
module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Koa = __webpack_require__(2);
const mount = __webpack_require__(3);
const gql = __webpack_require__(4);
const { schema, resolvers } = __webpack_require__(5);

const app = new Koa();
const routes = __webpack_require__(12);

if (true) __webpack_require__(18).config();

const { PORT, HOST } = process.env;

app.use(routes);
app.use(mount('/graphql', gql({
  schema,
  rootValue: resolvers,
  graphiql: true
})));
app.listen(PORT, () => {
  console.log(`started in http://${HOST}:${PORT}`);
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("koa-mount");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("koa-graphql");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const schema = __webpack_require__(6);
const resolvers = __webpack_require__(10);

module.exports = {
  schema,
  resolvers
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const path = __webpack_require__(7);
const fs = __webpack_require__(8);
const { buildSchema } = __webpack_require__(9);

const schema = fs.readFileSync(path.resolve(__dirname, 'schema.gql'), 'utf-8');

module.exports = buildSchema(schema);
/* WEBPACK VAR INJECTION */}.call(exports, "src\\gql"))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

const db = __webpack_require__(11);

module.exports = {
  post: ({ id }) => db.posts.find(post => post.id == id),
  posts: ({ author }) => db.posts.filter(post => post.author == author)
  // posts: param => console.log(param),
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {"posts":[{"title":"Post 1","id":1,"public":true,"author":"vamosgs","content":"sheets containing Lorem Ipsum passages, and moresheets containing Lorem Ipsum passages, and more sheets containing Lorem Ipsum passages, and more sheets containing Lorem Ipsum passages, and more"},{"title":"Post 2","id":2,"author":"vamosgs","public":true,"content":"sheets containing Lorem Ipsum passages, and moresheets containing Lorem Ipsum passages, and more sheets containing Lorem Ipsum passages, and more sheets containing Lorem Ipsum passages, and more"},{"title":"Post 3","id":3,"author":"admin","public":false,"content":"sheets containing Lorem Ipsum passages, and moresheets containing Lorem Ipsum passages, and more sheets containing Lorem Ipsum passages, and more sheets containing Lorem Ipsum passages, and more"}]}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

const { combineRouters } = __webpack_require__(13);
const root = __webpack_require__(16);

const routes = combineRouters([root]);

module.exports = routes;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

const combineRouters = __webpack_require__(14);

module.exports = {
  combineRouters
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

const compose = __webpack_require__(15);

module.exports = function combine(routers) {
  if (!Array.isArray(routers)) throw Error('Argument of combine() must be array of Routers');
  let middleware = [];
  routers.forEach(router => {
    middleware = [...middleware, router.routes(), router.allowedMethods()];
  });
  return compose(middleware);
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("koa-compose");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

const Router = __webpack_require__(17);

const root = new Router();

root.get('/', async ctx => {
  ctx.body = '<h2>Working..</h2>';
});

module.exports = root;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map