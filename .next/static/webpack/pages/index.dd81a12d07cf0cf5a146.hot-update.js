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

    if (e.target.length === 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGQ4MWExMmQwN2NmMGNmNWExNDYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDZUQsK0NBQVEsQ0FBQyxFQUFELENBRHZCO0FBQUEsTUFDWkUsU0FEWTtBQUFBLE1BQ0RDLFlBREM7O0FBQUEsbUJBRWFILCtDQUFRLENBQUMsRUFBRCxDQUZyQjtBQUFBLE1BRVpJLFFBRlk7QUFBQSxNQUVGQyxXQUZFOztBQUluQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDM0JBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxRQUFJRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsTUFBVCxLQUFvQixDQUF4QixFQUEyQjtBQUMxQlAsTUFBQUEsWUFBWSxDQUFDSSxDQUFDLENBQUNFLE1BQUYsQ0FBU0UsS0FBVixDQUFaO0FBQ0E7QUFDRCxHQUxEOztBQU9BLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNMLENBQUQsRUFBTztBQUMzQkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FILElBQUFBLFdBQVcsRUFBRUgsU0FBRixvSUFBZ0JFLFFBQWhCLEdBQVg7QUFDQUQsSUFBQUEsWUFBWSxDQUFDLEVBQUQsQ0FBWjtBQUNBLEdBSkQ7O0FBTUEsTUFBTVUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFVO0FBQzlCVCxJQUFBQSxXQUFXLENBQUMsMkhBQUlELFFBQVEsQ0FBQ1csTUFBVCxDQUFnQixVQUFDQyxJQUFEO0FBQUEsYUFBVUEsSUFBSSxJQUFJRixJQUFsQjtBQUFBLEtBQWhCLENBQUwsRUFBWDtBQUNBLEdBRkQ7O0FBSUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNDO0FBQUksZUFBUyxFQUFDLGtCQUFkO0FBQUEsd0NBQ3FCVixRQUFRLENBQUNNLE1BQVQsR0FBa0JOLFFBQVEsQ0FBQ00sTUFBM0IsR0FBb0MsYUFEekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFJQztBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQSw4QkFDQztBQUNDLGlCQUFTLEVBQUMsa0JBRFg7QUFFQyxZQUFJLEVBQUMsTUFGTjtBQUdDLGFBQUssRUFBRVIsU0FIUjtBQUlDLG1CQUFXLEVBQUMsbUJBSmI7QUFLQyxnQkFBUSxFQUFFSTtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQVFDO0FBQVEsaUJBQVMsRUFBQyxnQkFBbEI7QUFBbUMsZUFBTyxFQUFFTSxZQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpELGVBZ0JDO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUEsZ0JBQ0VSLFFBQVEsQ0FBQ00sTUFBVCxJQUFtQixDQUFuQixHQUNFTixRQUFRLENBQUNhLEdBQVQsQ0FBYSxVQUFDSCxJQUFELEVBQU9JLEdBQVAsRUFBZTtBQUM1Qiw0QkFDQztBQUFBLHFCQUNFSixJQURGLGVBRUM7QUFDQyxtQkFBTyxFQUFFLGlCQUFDUCxDQUFELEVBQU87QUFDZkEsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FLLGNBQUFBLFlBQVksQ0FBQ0MsSUFBRCxDQUFaO0FBQ0EsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRDtBQUFBLFdBQVNJLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQWFDLE9BZEQsQ0FERixHQWdCRTtBQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBc0NBLENBM0REOztHQUFNakI7O0tBQUFBO0FBNkROLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblx0Y29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGlmIChlLnRhcmdldC5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0c2V0VXNlcklucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0c2V0VG9kb0xpc3QoW3VzZXJJbnB1dCwgLi4udG9kb0xpc3RdKTtcclxuXHRcdHNldFVzZXJJbnB1dCgnJyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gKHRvZG8pID0+IHtcclxuXHRcdHNldFRvZG9MaXN0KFsuLi50b2RvTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT0gdG9kbyldKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdDxoMSBjbGFzc05hbWU9J2NvbnRhaW5lcl9fdGl0bGUnPlxyXG5cdFx0XHRcdE5leHQgSlMgVG9EbyBMaXN0OiB7dG9kb0xpc3QubGVuZ3RoID8gdG9kb0xpc3QubGVuZ3RoIDogJ25vIGJ1c2luZXNzJ31cclxuXHRcdFx0PC9oMT5cclxuXHRcdFx0PGZvcm0gY2xhc3NOYW1lPSdjb250YWluZXJfX2Zvcm0nPlxyXG5cdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb250YWluZXJfX2lucHV0J1xyXG5cdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdHZhbHVlPXt1c2VySW5wdXR9XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nRW50ZXIgYSB0b2RvIGl0ZW0nXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J2NvbnRhaW5lcl9fYnRuJyBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxyXG5cdFx0XHRcdFx0U3VibWl0XHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdFx0PG9sIGNsYXNzTmFtZT0nY29udGFpbmVyX19saXN0Jz5cclxuXHRcdFx0XHR7dG9kb0xpc3QubGVuZ3RoID49IDFcclxuXHRcdFx0XHRcdD8gdG9kb0xpc3QubWFwKCh0b2RvLCBpZHgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17aWR4fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3RvZG99XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRGVsZXRlKHRvZG8pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHREZWxldGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHQgIH0pXHJcblx0XHRcdFx0XHQ6ICdFbnRlciBhIHRvZG8gaXRlbSd9XHJcblx0XHRcdDwvb2w+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkluZGV4IiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwidG9kb0xpc3QiLCJzZXRUb2RvTGlzdCIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImxlbmd0aCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlRGVsZXRlIiwidG9kbyIsImZpbHRlciIsIml0ZW0iLCJtYXAiLCJpZHgiXSwic291cmNlUm9vdCI6IiJ9