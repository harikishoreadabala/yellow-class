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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_6__["default"] // using the infinte scroll fro the infinite scrolling
    , {
      dataLength: temp.length,
      next: fetchMoreData,
      hasMore: true,
      loader: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
        children: "Loading more images please wait......"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
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
              lineNumber: 35,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this)
        }, photo.id, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidGVtcCIsImZldGNoTW9yZURhdGEiLCJheGlvcyIsImdldCIsInIiLCJyMiIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJJbmRleCIsInBob3RvcyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtYXAiLCJwaG90byIsInVybHMiLCJzbWFsbCIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxJQUFJLEdBQUcsRUFBWDtBQUNBOztBQUNBLElBQU1DLGFBQWE7QUFBQSw4TEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNKQyw0Q0FBSyxDQUFDQyxHQUFOLENBQ2QsdUdBRGMsQ0FESTs7QUFBQTtBQUNkQyxhQURjO0FBSWhCQyxjQUpnQixHQUlYRCxDQUFDLENBQUNFLElBSlM7QUFLcEJOLGdCQUFJLEdBQUdPLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUixJQUFkLEVBQW9CSyxFQUFwQixDQUFQO0FBTG9CLDZDQU1iTCxJQU5hOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWJDLGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkI7O0FBU0EsSUFBTVEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsUUFBZ0I7QUFBQSxNQUFiQyxNQUFhLFNBQWJBLE1BQWE7QUFDNUI7QUFDQVYsTUFBSSxHQUFHVSxNQUFQO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSxxRUFBQyx1RUFBRCxDQUNFO0FBREY7QUFFRSxnQkFBVSxFQUFFWixJQUFJLENBQUNhLE1BRm5CO0FBR0UsVUFBSSxFQUFFWixhQUhSO0FBSUUsYUFBTyxFQUFFLElBSlg7QUFLRSxZQUFNLGVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMVjtBQUFBLGdCQVFHRCxJQUFJLENBQUNjLEdBQUwsQ0FBUyxVQUFDQyxLQUFEO0FBQUEsNEJBQ1I7QUFBQSxpQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLHNCQUFlQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsS0FBMUIsQ0FBVjtBQUE2QyxjQUFFLEVBQUMsT0FBaEQ7QUFBQSxtQ0FFRTtBQUFLLGlCQUFHLEVBQUVGLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQUFyQjtBQUE0QixtQkFBSyxFQUFDLEtBQWxDO0FBQXdDLG9CQUFNLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFVRixLQUFLLENBQUNHLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFUO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBM0JEOztLQUFNVCxLOztBQTRCTkEsS0FBSyxDQUFDVSxlQUFOO0FBQUEsK0xBQXdCLGtCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUpsQiw0Q0FBSyxDQUFDQyxHQUFOLENBQ2hCLHVHQURnQixDQUZJOztBQUFBO0FBRWhCa0IsZUFGZ0I7QUFLZGYsZ0JBTGMsR0FLTGUsR0FMSyxDQUtkZixJQUxjO0FBTXRCTixnQkFBSSxHQUFHTyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCYSxHQUFsQixDQUFQO0FBQ0FWLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQVBzQixDQVF0Qjs7QUFSc0IsOENBU2Y7QUFBRUYsb0JBQU0sRUFBRUo7QUFBVixhQVRlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVdlRyxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYzk4MzVjNmUwMGY1NDE2ZTAxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxudmFyIHRlbXAgPSB7fTtcclxuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCI7XHJcbmNvbnN0IGZldGNoTW9yZURhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgciA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIFwiaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3Bob3Rvcy9yYW5kb20/Y2xpZW50X2lkPW9QZVgyYjI0YUFWV2lFbWpLcTBJMlJScjZYYkZfS3B3VXV0V21GdWZhR1UmY291bnQ9NDFcIlxyXG4gICk7XHJcbiAgdmFyIHIyID0gci5kYXRhO1xyXG4gIHRlbXAgPSBPYmplY3QuYXNzaWduKHRlbXAsIHIyKTtcclxuICByZXR1cm4gdGVtcDtcclxufTtcclxuXHJcbmNvbnN0IEluZGV4ID0gKHsgcGhvdG9zIH0pID0+IHtcclxuICAvLyBnZXR0aW5nIHRoZSBwaG90b3MgYXMgYSBwYXJhbWV0ZXIgZnJvbSB0aGUgaW5pdGlhbHByb3BzIG1ldGhvZCBhbmQgYXNzaWduaW5nIGl0IHRvIHRoZSBnbG9iYWwgdGVtcCBvYmplY3RcclxuICB0ZW1wID0gcGhvdG9zO1xyXG4gIGNvbnNvbGUubG9nKFwiaW4gaW5kZXhcIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5ZZWxsb3cgQ2xhc3MgUmVhY3QgQXNzaWdubWVudDwvaDE+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICA8SW5maW5pdGVTY3JvbGxcclxuICAgICAgICAvLyB1c2luZyB0aGUgaW5maW50ZSBzY3JvbGwgZnJvIHRoZSBpbmZpbml0ZSBzY3JvbGxpbmdcclxuICAgICAgICBkYXRhTGVuZ3RoPXt0ZW1wLmxlbmd0aH1cclxuICAgICAgICBuZXh0PXtmZXRjaE1vcmVEYXRhfVxyXG4gICAgICAgIGhhc01vcmU9e3RydWV9XHJcbiAgICAgICAgbG9hZGVyPXs8aDM+TG9hZGluZyBtb3JlIGltYWdlcyBwbGVhc2Ugd2FpdC4uLi4uLjwvaDM+fVxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIG1hcHBpbmcgb3ZlciB0aGUgaW1hZ2VzIGFuZCBkaXNwbGF5aW5nIHRoZW0gKi99XHJcbiAgICAgICAge3RlbXAubWFwKChwaG90bykgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3Bob3RvLmlkfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9waG90bz9pZD0ke3Bob3RvLnVybHMuc21hbGx9YH0gYXM9XCJwaG90b1wiPlxyXG4gICAgICAgICAgICAgIHsvKiA8cD57cGhvdG8uaWR9PC9wPiAqL31cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17cGhvdG8udXJscy5zbWFsbH0gd2lkdGg9XCI1MDBcIiBoZWlnaHQ9XCIzMDBcIj48L2ltZz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvSW5maW5pdGVTY3JvbGw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgLy9DYWxsaW5nIHRoZSB1bnNwbGFzaCBhcGkgdXNpbmcgYXhpb3NcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBcImh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvcmFuZG9tP2NsaWVudF9pZD1vUGVYMmIyNGFBVldpRW1qS3EwSTJSUnI2WGJGX0twd1V1dFdtRnVmYUdVJmNvdW50PTMwXCJcclxuICApO1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gcmVzO1xyXG4gIHRlbXAgPSBPYmplY3QuYXNzaWduKHt9LCByZXMpO1xyXG4gIGNvbnNvbGUubG9nKFwiSW4gaW5pdGlhbCBwcm9wc1wiKTtcclxuICAvLyByZXR1cm5pbmcgdGhlIG9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBpbWFnZXNcclxuICByZXR1cm4geyBwaG90b3M6IGRhdGEgfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=