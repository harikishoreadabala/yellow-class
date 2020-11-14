webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-infinite-scroll-component */ "./node_modules/react-infinite-scroll-component/dist/index.es.js");




var _jsxFileName = "C:\\Users\\91970\\Desktop\\first-next\\pages\\index.js",
    _this = undefined;




var temp = {};


var fetchMoreData = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var r, r2;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("https://api.unsplash.com/photos/random?client_id=oPeX2b24aAVWiEmjKq0I2RRr6XbF_KpwUutWmFufaGU&count=41");

          case 2:
            r = _context.sent;
            r2 = r.data;
            temp = Object.assign(temp, r2);
            return _context.abrupt("return", temp);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchMoreData() {
    return _ref.apply(this, arguments);
  };
}();

var Index = function Index(_ref2) {
  var photos = _ref2.photos;
  // getting the photos as a parameter from the initialprops method and assigning it to the global temp object
  temp = photos;
  console.log("in index");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
      children: "Yellow Class React Assignment"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_6__["default"], {
      dataLength: temp.length,
      next: fetchMoreData,
      hasMore: true,
      loader: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
        children: "Loading more images please wait......"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this),
      children: temp.map(function (photo) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/photo?id=".concat(photo.urls.small),
            as: "photo",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
              src: photo.urls.small,
              width: "500",
              height: "300"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this)
        }, photo.id, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_c = Index;

Index.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ctx) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("https://api.unsplash.com/photos/random?client_id=oPeX2b24aAVWiEmjKq0I2RRr6XbF_KpwUutWmFufaGU&count=30");

          case 2:
            res = _context2.sent;
            data = res.data;
            temp = Object.assign({}, res);
            console.log("In initial props"); // returning the object containing information about the images

            return _context2.abrupt("return", {
              photos: data
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidGVtcCIsImZldGNoTW9yZURhdGEiLCJheGlvcyIsImdldCIsInIiLCJyMiIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJJbmRleCIsInBob3RvcyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtYXAiLCJwaG90byIsInVybHMiLCJzbWFsbCIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxJQUFJLEdBQUcsRUFBWDtBQUNBOztBQUNBLElBQU1DLGFBQWE7QUFBQSw4TEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNKQyw0Q0FBSyxDQUFDQyxHQUFOLENBQ2QsdUdBRGMsQ0FESTs7QUFBQTtBQUNkQyxhQURjO0FBSWhCQyxjQUpnQixHQUlYRCxDQUFDLENBQUNFLElBSlM7QUFLcEJOLGdCQUFJLEdBQUdPLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUixJQUFkLEVBQW9CSyxFQUFwQixDQUFQO0FBTG9CLDZDQU1iTCxJQU5hOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWJDLGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkI7O0FBU0EsSUFBTVEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsUUFBZ0I7QUFBQSxNQUFiQyxNQUFhLFNBQWJBLE1BQWE7QUFDNUI7QUFDQVYsTUFBSSxHQUFHVSxNQUFQO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSxxRUFBQyx1RUFBRDtBQUNFLGdCQUFVLEVBQUVaLElBQUksQ0FBQ2EsTUFEbkI7QUFFRSxVQUFJLEVBQUVaLGFBRlI7QUFHRSxhQUFPLEVBQUUsSUFIWDtBQUlFLFlBQU0sZUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpWO0FBQUEsZ0JBTUdELElBQUksQ0FBQ2MsR0FBTCxDQUFTLFVBQUNDLEtBQUQ7QUFBQSw0QkFDUjtBQUFBLGlDQUNFLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksc0JBQWVBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQUExQixDQUFWO0FBQTZDLGNBQUUsRUFBQyxPQUFoRDtBQUFBLG1DQUVFO0FBQUssaUJBQUcsRUFBRUYsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEtBQXJCO0FBQTRCLG1CQUFLLEVBQUMsS0FBbEM7QUFBd0Msb0JBQU0sRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQVVGLEtBQUssQ0FBQ0csRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVQ7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0F6QkQ7O0tBQU1ULEs7O0FBMEJOQSxLQUFLLENBQUNVLGVBQU47QUFBQSwrTEFBd0Isa0JBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFSmxCLDRDQUFLLENBQUNDLEdBQU4sQ0FDaEIsdUdBRGdCLENBRkk7O0FBQUE7QUFFaEJrQixlQUZnQjtBQUtkZixnQkFMYyxHQUtMZSxHQUxLLENBS2RmLElBTGM7QUFNdEJOLGdCQUFJLEdBQUdPLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JhLEdBQWxCLENBQVA7QUFDQVYsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBUHNCLENBUXRCOztBQVJzQiw4Q0FTZjtBQUFFRixvQkFBTSxFQUFFSjtBQUFWLGFBVGU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBV2VHLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY0M2IxZmYyMDUxM2YyZjc2MDVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG52YXIgdGVtcCA9IHt9O1xyXG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSBcInJlYWN0LWluZmluaXRlLXNjcm9sbC1jb21wb25lbnRcIjtcclxuY29uc3QgZmV0Y2hNb3JlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgXCJodHRwczovL2FwaS51bnNwbGFzaC5jb20vcGhvdG9zL3JhbmRvbT9jbGllbnRfaWQ9b1BlWDJiMjRhQVZXaUVtaktxMEkyUlJyNlhiRl9LcHdVdXRXbUZ1ZmFHVSZjb3VudD00MVwiXHJcbiAgKTtcclxuICB2YXIgcjIgPSByLmRhdGE7XHJcbiAgdGVtcCA9IE9iamVjdC5hc3NpZ24odGVtcCwgcjIpO1xyXG4gIHJldHVybiB0ZW1wO1xyXG59O1xyXG5cclxuY29uc3QgSW5kZXggPSAoeyBwaG90b3MgfSkgPT4ge1xyXG4gIC8vIGdldHRpbmcgdGhlIHBob3RvcyBhcyBhIHBhcmFtZXRlciBmcm9tIHRoZSBpbml0aWFscHJvcHMgbWV0aG9kIGFuZCBhc3NpZ25pbmcgaXQgdG8gdGhlIGdsb2JhbCB0ZW1wIG9iamVjdFxyXG4gIHRlbXAgPSBwaG90b3M7XHJcbiAgY29uc29sZS5sb2coXCJpbiBpbmRleFwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlllbGxvdyBDbGFzcyBSZWFjdCBBc3NpZ25tZW50PC9oMT5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIDxJbmZpbml0ZVNjcm9sbFxyXG4gICAgICAgIGRhdGFMZW5ndGg9e3RlbXAubGVuZ3RofVxyXG4gICAgICAgIG5leHQ9e2ZldGNoTW9yZURhdGF9XHJcbiAgICAgICAgaGFzTW9yZT17dHJ1ZX1cclxuICAgICAgICBsb2FkZXI9ezxoMz5Mb2FkaW5nIG1vcmUgaW1hZ2VzIHBsZWFzZSB3YWl0Li4uLi4uPC9oMz59XHJcbiAgICAgID5cclxuICAgICAgICB7dGVtcC5tYXAoKHBob3RvKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17cGhvdG8uaWR9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3Bob3RvP2lkPSR7cGhvdG8udXJscy5zbWFsbH1gfSBhcz1cInBob3RvXCI+XHJcbiAgICAgICAgICAgICAgey8qIDxwPntwaG90by5pZH08L3A+ICovfVxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtwaG90by51cmxzLnNtYWxsfSB3aWR0aD1cIjUwMFwiIGhlaWdodD1cIjMwMFwiPjwvaW1nPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9JbmZpbml0ZVNjcm9sbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAvL0NhbGxpbmcgdGhlIHVuc3BsYXNoIGFwaSB1c2luZyBheGlvc1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIFwiaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3Bob3Rvcy9yYW5kb20/Y2xpZW50X2lkPW9QZVgyYjI0YUFWV2lFbWpLcTBJMlJScjZYYkZfS3B3VXV0V21GdWZhR1UmY291bnQ9MzBcIlxyXG4gICk7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSByZXM7XHJcbiAgdGVtcCA9IE9iamVjdC5hc3NpZ24oe30sIHJlcyk7XHJcbiAgY29uc29sZS5sb2coXCJJbiBpbml0aWFsIHByb3BzXCIpO1xyXG4gIC8vIHJldHVybmluZyB0aGUgb2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGltYWdlc1xyXG4gIHJldHVybiB7IHBob3RvczogZGF0YSB9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==