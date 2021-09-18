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
        onfocus: "this.placeholder = ''",
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: handleSubmit,
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ol", {
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
            lineNumber: 44,
            columnNumber: 10
          }, _this)]
        }, idx, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }, _this);
      }) : 'Enter a todo item'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjNlZWMwYzM1YjEzMmRjZGQzZWMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDZUQsK0NBQVEsQ0FBQyxFQUFELENBRHZCO0FBQUEsTUFDWkUsU0FEWTtBQUFBLE1BQ0RDLFlBREM7O0FBQUEsbUJBRWFILCtDQUFRLENBQUMsRUFBRCxDQUZyQjtBQUFBLE1BRVpJLFFBRlk7QUFBQSxNQUVGQyxXQUZFOztBQUluQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDM0JBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBTCxJQUFBQSxZQUFZLENBQUNJLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQVo7QUFDQSxHQUhEOztBQUtBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNKLENBQUQsRUFBTztBQUMzQkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FILElBQUFBLFdBQVcsRUFBRUgsU0FBRixvSUFBZ0JFLFFBQWhCLEdBQVg7QUFDQUQsSUFBQUEsWUFBWSxDQUFDLEVBQUQsQ0FBWjtBQUNBLEdBSkQ7O0FBTUEsTUFBTVMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFVO0FBQzlCUixJQUFBQSxXQUFXLENBQUMsMkhBQUlELFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQixVQUFDQyxJQUFEO0FBQUEsYUFBVUEsSUFBSSxJQUFJRixJQUFsQjtBQUFBLEtBQWhCLENBQUwsRUFBWDtBQUNBLEdBRkQ7O0FBSUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNDO0FBQUksZUFBUyxFQUFDLGtCQUFkO0FBQUEsd0NBQ3FCVCxRQUFRLENBQUNZLE1BQVQsR0FBa0JaLFFBQVEsQ0FBQ1ksTUFBM0IsR0FBb0MsYUFEekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFJQztBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQSw4QkFDQztBQUNDLGlCQUFTLEVBQUMsa0JBRFg7QUFFQyxZQUFJLEVBQUMsTUFGTjtBQUdDLGFBQUssRUFBRWQsU0FIUjtBQUlDLG1CQUFXLEVBQUMsbUJBSmI7QUFLQyxlQUFPLEVBQUMsdUJBTFQ7QUFNQyxnQkFBUSxFQUFFSTtBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQVNDO0FBQVEsZUFBTyxFQUFFSyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpELGVBZUM7QUFBQSxnQkFDRVAsUUFBUSxDQUFDWSxNQUFULElBQW1CLENBQW5CLEdBQ0VaLFFBQVEsQ0FBQ2EsR0FBVCxDQUFhLFVBQUNKLElBQUQsRUFBT0ssR0FBUCxFQUFlO0FBQzVCLDRCQUNDO0FBQUEscUJBQ0VMLElBREYsZUFFQztBQUNDLG1CQUFPLEVBQUUsaUJBQUNOLENBQUQsRUFBTztBQUNmQSxjQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUksY0FBQUEsWUFBWSxDQUFDQyxJQUFELENBQVo7QUFDQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZEO0FBQUEsV0FBU0ssR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBYUMsT0FkRCxDQURGLEdBZ0JFO0FBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXFDQSxDQXhERDs7R0FBTWpCOztLQUFBQTtBQTBETiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cdGNvbnN0IFt1c2VySW5wdXQsIHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW3RvZG9MaXN0LCBzZXRUb2RvTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRzZXRUb2RvTGlzdChbdXNlcklucHV0LCAuLi50b2RvTGlzdF0pO1xyXG5cdFx0c2V0VXNlcklucHV0KCcnKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSAodG9kbykgPT4ge1xyXG5cdFx0c2V0VG9kb0xpc3QoWy4uLnRvZG9MaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPSB0b2RvKV0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0PGgxIGNsYXNzTmFtZT0nY29udGFpbmVyX190aXRsZSc+XHJcblx0XHRcdFx0TmV4dCBKUyBUb0RvIExpc3Q6IHt0b2RvTGlzdC5sZW5ndGggPyB0b2RvTGlzdC5sZW5ndGggOiAnbm8gYnVzaW5lc3MnfVxyXG5cdFx0XHQ8L2gxPlxyXG5cdFx0XHQ8Zm9ybSBjbGFzc05hbWU9J2NvbnRhaW5lcl9fZm9ybSc+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2NvbnRhaW5lcl9faW5wdXQnXHJcblx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0dmFsdWU9e3VzZXJJbnB1dH1cclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdFbnRlciBhIHRvZG8gaXRlbSdcclxuXHRcdFx0XHRcdG9uZm9jdXM9XCJ0aGlzLnBsYWNlaG9sZGVyID0gJydcIlxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0XHQ8b2w+XHJcblx0XHRcdFx0e3RvZG9MaXN0Lmxlbmd0aCA+PSAxXHJcblx0XHRcdFx0XHQ/IHRvZG9MaXN0Lm1hcCgodG9kbywgaWR4KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e2lkeH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHt0b2RvfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZURlbGV0ZSh0b2RvKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0RGVsZXRlXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0ICB9KVxyXG5cdFx0XHRcdFx0OiAnRW50ZXIgYSB0b2RvIGl0ZW0nfVxyXG5cdFx0XHQ8L29sPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbmRleCIsInVzZXJJbnB1dCIsInNldFVzZXJJbnB1dCIsInRvZG9MaXN0Iiwic2V0VG9kb0xpc3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZURlbGV0ZSIsInRvZG8iLCJmaWx0ZXIiLCJpdGVtIiwibGVuZ3RoIiwibWFwIiwiaWR4Il0sInNvdXJjZVJvb3QiOiIifQ==