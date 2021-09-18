"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_JS_LEARN_NEXT_todoNext_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\JS\\LEARN\\NEXT\\todoNext\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();



var Index = function Index() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      userInput = _useState[0],
      setUserInput = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      todoList = _useState2[0],
      setTodoList = _useState2[1];

  var handleChange = function handleChange(e) {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setTodoList([userInput].concat((0,E_JS_LEARN_NEXT_todoNext_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(todoList)));
    setUserInput('');
  };

  var handleDelete = function handleDelete(todo) {
    setTodoList((0,E_JS_LEARN_NEXT_todoNext_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(todoList.filter(function (item) {
      return item != todo;
    })));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "container__title",
      children: ["Next JS ToDo List: ", todoList.length ? todoList.length : 'no business']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      className: "container__form",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        className: "container__input",
        type: "text",
        value: userInput,
        placeholder: "Enter a todo item",
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "container__btn",
        onClick: handleSubmit,
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ol", {
      className: "container__list",
      children: todoList.length >= 1 ? todoList.map(function (todo, idx) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: [todo, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: function onClick(e) {
              e.preventDefault();
              handleDelete(todo);
            },
            children: "Delete"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 10
          }, _this)]
        }, idx, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }, _this);
      }) : 'Enter a todo item'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }, _this);
};

_s(Index, "In0CfmjzHYwZeIgaI5r9wD0TDjs=");

_c = Index;
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDdlYzhiYmE4MzQ3ZTE5OWI2ODUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDZUQsK0NBQVEsQ0FBQyxFQUFELENBRHZCO0FBQUEsTUFDWkUsU0FEWTtBQUFBLE1BQ0RDLFlBREM7O0FBQUEsbUJBRWFILCtDQUFRLENBQUMsRUFBRCxDQUZyQjtBQUFBLE1BRVpJLFFBRlk7QUFBQSxNQUVGQyxXQUZFOztBQUluQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDM0JBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBTCxJQUFBQSxZQUFZLENBQUNJLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQVo7QUFDQSxHQUhEOztBQUtBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNKLENBQUQsRUFBTztBQUMzQkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FILElBQUFBLFdBQVcsRUFBRUgsU0FBRixvSUFBZ0JFLFFBQWhCLEdBQVg7QUFDQUQsSUFBQUEsWUFBWSxDQUFDLEVBQUQsQ0FBWjtBQUNBLEdBSkQ7O0FBTUEsTUFBTVMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFVO0FBQzlCUixJQUFBQSxXQUFXLENBQUMsMkhBQUlELFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQixVQUFDQyxJQUFEO0FBQUEsYUFBVUEsSUFBSSxJQUFJRixJQUFsQjtBQUFBLEtBQWhCLENBQUwsRUFBWDtBQUNBLEdBRkQ7O0FBSUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNDO0FBQUksZUFBUyxFQUFDLGtCQUFkO0FBQUEsd0NBQ3FCVCxRQUFRLENBQUNZLE1BQVQsR0FBa0JaLFFBQVEsQ0FBQ1ksTUFBM0IsR0FBb0MsYUFEekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFJQztBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQSw4QkFDQztBQUNDLGlCQUFTLEVBQUMsa0JBRFg7QUFFQyxZQUFJLEVBQUMsTUFGTjtBQUdDLGFBQUssRUFBRWQsU0FIUjtBQUlDLG1CQUFXLEVBQUMsbUJBSmI7QUFLQyxnQkFBUSxFQUFFSTtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQVFDO0FBQVEsaUJBQVMsRUFBQyxnQkFBbEI7QUFBbUMsZUFBTyxFQUFFSyxZQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpELGVBZ0JDO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUEsZ0JBQ0VQLFFBQVEsQ0FBQ1ksTUFBVCxJQUFtQixDQUFuQixHQUNFWixRQUFRLENBQUNhLEdBQVQsQ0FBYSxVQUFDSixJQUFELEVBQU9LLEdBQVAsRUFBZTtBQUM1Qiw0QkFDQztBQUFBLHFCQUNFTCxJQURGLGVBRUM7QUFDQyxtQkFBTyxFQUFFLGlCQUFDTixDQUFELEVBQU87QUFDZkEsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FJLGNBQUFBLFlBQVksQ0FBQ0MsSUFBRCxDQUFaO0FBQ0EsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRDtBQUFBLFdBQVNLLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQWFDLE9BZEQsQ0FERixHQWdCRTtBQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBc0NBLENBekREOztHQUFNakI7O0tBQUFBO0FBMkROLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblx0Y29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHNldFVzZXJJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHNldFRvZG9MaXN0KFt1c2VySW5wdXQsIC4uLnRvZG9MaXN0XSk7XHJcblx0XHRzZXRVc2VySW5wdXQoJycpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9ICh0b2RvKSA9PiB7XHJcblx0XHRzZXRUb2RvTGlzdChbLi4udG9kb0xpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9IHRvZG8pXSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHQ8aDEgY2xhc3NOYW1lPSdjb250YWluZXJfX3RpdGxlJz5cclxuXHRcdFx0XHROZXh0IEpTIFRvRG8gTGlzdDoge3RvZG9MaXN0Lmxlbmd0aCA/IHRvZG9MaXN0Lmxlbmd0aCA6ICdubyBidXNpbmVzcyd9XHJcblx0XHRcdDwvaDE+XHJcblx0XHRcdDxmb3JtIGNsYXNzTmFtZT0nY29udGFpbmVyX19mb3JtJz5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0nY29udGFpbmVyX19pbnB1dCdcclxuXHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHR2YWx1ZT17dXNlcklucHV0fVxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0VudGVyIGEgdG9kbyBpdGVtJ1xyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdjb250YWluZXJfX2J0bicgb25DbGljaz17aGFuZGxlU3VibWl0fT5cclxuXHRcdFx0XHRcdFN1Ym1pdFxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDxvbCBjbGFzc05hbWU9J2NvbnRhaW5lcl9fbGlzdCc+XHJcblx0XHRcdFx0e3RvZG9MaXN0Lmxlbmd0aCA+PSAxXHJcblx0XHRcdFx0XHQ/IHRvZG9MaXN0Lm1hcCgodG9kbywgaWR4KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e2lkeH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHt0b2RvfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZURlbGV0ZSh0b2RvKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0RGVsZXRlXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0ICB9KVxyXG5cdFx0XHRcdFx0OiAnRW50ZXIgYSB0b2RvIGl0ZW0nfVxyXG5cdFx0XHQ8L29sPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbmRleCIsInVzZXJJbnB1dCIsInNldFVzZXJJbnB1dCIsInRvZG9MaXN0Iiwic2V0VG9kb0xpc3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZURlbGV0ZSIsInRvZG8iLCJmaWx0ZXIiLCJpdGVtIiwibGVuZ3RoIiwibWFwIiwiaWR4Il0sInNvdXJjZVJvb3QiOiIifQ==