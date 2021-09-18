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

    if (e.target.length != 0) {
      setUserInput(e.target.value);
    }
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
      lineNumber: 26,
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
        lineNumber: 30,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "container__btn",
        onClick: handleSubmit,
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
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
            lineNumber: 47,
            columnNumber: 10
          }, _this)]
        }, idx, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }, _this);
      }) : 'Enter a todo item'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGIxMzM4OWIzYzZjNzhkZWUyMzAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDZUQsK0NBQVEsQ0FBQyxFQUFELENBRHZCO0FBQUEsTUFDWkUsU0FEWTtBQUFBLE1BQ0RDLFlBREM7O0FBQUEsbUJBRWFILCtDQUFRLENBQUMsRUFBRCxDQUZyQjtBQUFBLE1BRVpJLFFBRlk7QUFBQSxNQUVGQyxXQUZFOztBQUluQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDM0JBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxRQUFJRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsTUFBVCxJQUFtQixDQUF2QixFQUEwQjtBQUN6QlAsTUFBQUEsWUFBWSxDQUFDSSxDQUFDLENBQUNFLE1BQUYsQ0FBU0UsS0FBVixDQUFaO0FBQ0E7QUFDRCxHQUxEOztBQU9BLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNMLENBQUQsRUFBTztBQUMzQkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FILElBQUFBLFdBQVcsRUFBRUgsU0FBRixvSUFBZ0JFLFFBQWhCLEdBQVg7QUFDQUQsSUFBQUEsWUFBWSxDQUFDLEVBQUQsQ0FBWjtBQUNBLEdBSkQ7O0FBTUEsTUFBTVUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFVO0FBQzlCVCxJQUFBQSxXQUFXLENBQUMsMkhBQUlELFFBQVEsQ0FBQ1csTUFBVCxDQUFnQixVQUFDQyxJQUFEO0FBQUEsYUFBVUEsSUFBSSxJQUFJRixJQUFsQjtBQUFBLEtBQWhCLENBQUwsRUFBWDtBQUNBLEdBRkQ7O0FBSUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNDO0FBQUksZUFBUyxFQUFDLGtCQUFkO0FBQUEsd0NBQ3FCVixRQUFRLENBQUNNLE1BQVQsR0FBa0JOLFFBQVEsQ0FBQ00sTUFBM0IsR0FBb0MsYUFEekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFJQztBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQSw4QkFDQztBQUNDLGlCQUFTLEVBQUMsa0JBRFg7QUFFQyxZQUFJLEVBQUMsTUFGTjtBQUdDLGFBQUssRUFBRVIsU0FIUjtBQUlDLG1CQUFXLEVBQUMsbUJBSmI7QUFLQyxnQkFBUSxFQUFFSTtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQVFDO0FBQVEsaUJBQVMsRUFBQyxnQkFBbEI7QUFBbUMsZUFBTyxFQUFFTSxZQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpELGVBZ0JDO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUEsZ0JBQ0VSLFFBQVEsQ0FBQ00sTUFBVCxJQUFtQixDQUFuQixHQUNFTixRQUFRLENBQUNhLEdBQVQsQ0FBYSxVQUFDSCxJQUFELEVBQU9JLEdBQVAsRUFBZTtBQUM1Qiw0QkFDQztBQUFBLHFCQUNFSixJQURGLGVBRUM7QUFDQyxtQkFBTyxFQUFFLGlCQUFDUCxDQUFELEVBQU87QUFDZkEsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FLLGNBQUFBLFlBQVksQ0FBQ0MsSUFBRCxDQUFaO0FBQ0EsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRDtBQUFBLFdBQVNJLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQWFDLE9BZEQsQ0FERixHQWdCRTtBQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBc0NBLENBM0REOztHQUFNakI7O0tBQUFBO0FBNkROLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblx0Y29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGlmIChlLnRhcmdldC5sZW5ndGggIT0gMCkge1xyXG5cdFx0XHRzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRzZXRUb2RvTGlzdChbdXNlcklucHV0LCAuLi50b2RvTGlzdF0pO1xyXG5cdFx0c2V0VXNlcklucHV0KCcnKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSAodG9kbykgPT4ge1xyXG5cdFx0c2V0VG9kb0xpc3QoWy4uLnRvZG9MaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPSB0b2RvKV0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0PGgxIGNsYXNzTmFtZT0nY29udGFpbmVyX190aXRsZSc+XHJcblx0XHRcdFx0TmV4dCBKUyBUb0RvIExpc3Q6IHt0b2RvTGlzdC5sZW5ndGggPyB0b2RvTGlzdC5sZW5ndGggOiAnbm8gYnVzaW5lc3MnfVxyXG5cdFx0XHQ8L2gxPlxyXG5cdFx0XHQ8Zm9ybSBjbGFzc05hbWU9J2NvbnRhaW5lcl9fZm9ybSc+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2NvbnRhaW5lcl9faW5wdXQnXHJcblx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0dmFsdWU9e3VzZXJJbnB1dH1cclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdFbnRlciBhIHRvZG8gaXRlbSdcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nY29udGFpbmVyX19idG4nIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdFx0XHRTdWJtaXRcclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0XHQ8b2wgY2xhc3NOYW1lPSdjb250YWluZXJfX2xpc3QnPlxyXG5cdFx0XHRcdHt0b2RvTGlzdC5sZW5ndGggPj0gMVxyXG5cdFx0XHRcdFx0PyB0b2RvTGlzdC5tYXAoKHRvZG8sIGlkeCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpZHh9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7dG9kb31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVEZWxldGUodG9kbyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdERlbGV0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdCAgfSlcclxuXHRcdFx0XHRcdDogJ0VudGVyIGEgdG9kbyBpdGVtJ31cclxuXHRcdFx0PC9vbD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW5kZXgiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJ0b2RvTGlzdCIsInNldFRvZG9MaXN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwibGVuZ3RoIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVEZWxldGUiLCJ0b2RvIiwiZmlsdGVyIiwiaXRlbSIsIm1hcCIsImlkeCJdLCJzb3VyY2VSb290IjoiIn0=