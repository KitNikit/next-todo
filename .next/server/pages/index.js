"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\JS\\LEARN\\NEXT\\todoNext\\pages\\index.js";


const Index = () => {
  const {
    0: userInput,
    1: setUserInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: todoList,
    1: setTodoList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  const handleChange = e => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (userInput.length !== 0) {
      setTodoList([userInput, ...todoList]);
      setUserInput('');
    }
  };

  const handleDelete = todo => {
    setTodoList([...todoList.filter(item => item != todo)]);
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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
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
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "container__btn",
        onClick: handleSubmit,
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ol", {
      className: "container__list",
      children: todoList.length >= 1 ? todoList.map((todo, idx) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: [todo, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: e => {
              e.preventDefault();
              handleDelete(todo);
            },
            children: "Delete"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 10
          }, undefined)]
        }, idx, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }, undefined);
      }) : 'Enter a todo item'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQyxLQUFLLEdBQUcsTUFBTTtBQUNuQixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJILCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDSSxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkwsK0NBQVEsQ0FBQyxFQUFELENBQXhDOztBQUVBLFFBQU1NLFlBQVksR0FBSUMsQ0FBRCxJQUFPO0FBQzNCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUwsSUFBQUEsWUFBWSxDQUFDSSxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFaO0FBQ0EsR0FIRDs7QUFLQSxRQUFNQyxZQUFZLEdBQUlKLENBQUQsSUFBTztBQUMzQkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUlOLFNBQVMsQ0FBQ1UsTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUMzQlAsTUFBQUEsV0FBVyxDQUFDLENBQUNILFNBQUQsRUFBWSxHQUFHRSxRQUFmLENBQUQsQ0FBWDtBQUNBRCxNQUFBQSxZQUFZLENBQUMsRUFBRCxDQUFaO0FBQ0E7QUFDRCxHQU5EOztBQVFBLFFBQU1VLFlBQVksR0FBSUMsSUFBRCxJQUFVO0FBQzlCVCxJQUFBQSxXQUFXLENBQUMsQ0FBQyxHQUFHRCxRQUFRLENBQUNXLE1BQVQsQ0FBaUJDLElBQUQsSUFBVUEsSUFBSSxJQUFJRixJQUFsQyxDQUFKLENBQUQsQ0FBWDtBQUNBLEdBRkQ7O0FBSUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNDO0FBQUksZUFBUyxFQUFDLGtCQUFkO0FBQUEsd0NBQ3FCVixRQUFRLENBQUNRLE1BQVQsR0FBa0JSLFFBQVEsQ0FBQ1EsTUFBM0IsR0FBb0MsYUFEekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBSUM7QUFBTSxlQUFTLEVBQUMsaUJBQWhCO0FBQUEsOEJBQ0M7QUFDQyxpQkFBUyxFQUFDLGtCQURYO0FBRUMsWUFBSSxFQUFDLE1BRk47QUFHQyxhQUFLLEVBQUVWLFNBSFI7QUFJQyxtQkFBVyxFQUFDLG1CQUpiO0FBS0MsZ0JBQVEsRUFBRUk7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBUUM7QUFBUSxpQkFBUyxFQUFDLGdCQUFsQjtBQUFtQyxlQUFPLEVBQUVLLFlBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRCxlQWdCQztBQUFJLGVBQVMsRUFBQyxpQkFBZDtBQUFBLGdCQUNFUCxRQUFRLENBQUNRLE1BQVQsSUFBbUIsQ0FBbkIsR0FDRVIsUUFBUSxDQUFDYSxHQUFULENBQWEsQ0FBQ0gsSUFBRCxFQUFPSSxHQUFQLEtBQWU7QUFDNUIsNEJBQ0M7QUFBQSxxQkFDRUosSUFERixlQUVDO0FBQ0MsbUJBQU8sRUFBR1AsQ0FBRCxJQUFPO0FBQ2ZBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBSyxjQUFBQSxZQUFZLENBQUNDLElBQUQsQ0FBWjtBQUNBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkQ7QUFBQSxXQUFTSSxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQ7QUFhQyxPQWRELENBREYsR0FnQkU7QUFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFzQ0EsQ0EzREQ7O0FBNkRBLGlFQUFlakIsS0FBZjs7Ozs7Ozs7OztBQy9EQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb25leHQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbmV4dC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdG9kb25leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cdGNvbnN0IFt1c2VySW5wdXQsIHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW3RvZG9MaXN0LCBzZXRUb2RvTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRpZiAodXNlcklucHV0Lmxlbmd0aCAhPT0gMCkge1xyXG5cdFx0XHRzZXRUb2RvTGlzdChbdXNlcklucHV0LCAuLi50b2RvTGlzdF0pO1xyXG5cdFx0XHRzZXRVc2VySW5wdXQoJycpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9ICh0b2RvKSA9PiB7XHJcblx0XHRzZXRUb2RvTGlzdChbLi4udG9kb0xpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9IHRvZG8pXSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHQ8aDEgY2xhc3NOYW1lPSdjb250YWluZXJfX3RpdGxlJz5cclxuXHRcdFx0XHROZXh0IEpTIFRvRG8gTGlzdDoge3RvZG9MaXN0Lmxlbmd0aCA/IHRvZG9MaXN0Lmxlbmd0aCA6ICdubyBidXNpbmVzcyd9XHJcblx0XHRcdDwvaDE+XHJcblx0XHRcdDxmb3JtIGNsYXNzTmFtZT0nY29udGFpbmVyX19mb3JtJz5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0nY29udGFpbmVyX19pbnB1dCdcclxuXHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHR2YWx1ZT17dXNlcklucHV0fVxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0VudGVyIGEgdG9kbyBpdGVtJ1xyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdjb250YWluZXJfX2J0bicgb25DbGljaz17aGFuZGxlU3VibWl0fT5cclxuXHRcdFx0XHRcdFN1Ym1pdFxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDxvbCBjbGFzc05hbWU9J2NvbnRhaW5lcl9fbGlzdCc+XHJcblx0XHRcdFx0e3RvZG9MaXN0Lmxlbmd0aCA+PSAxXHJcblx0XHRcdFx0XHQ/IHRvZG9MaXN0Lm1hcCgodG9kbywgaWR4KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e2lkeH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHt0b2RvfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZURlbGV0ZSh0b2RvKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0RGVsZXRlXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0ICB9KVxyXG5cdFx0XHRcdFx0OiAnRW50ZXIgYSB0b2RvIGl0ZW0nfVxyXG5cdFx0XHQ8L29sPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW5kZXgiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJ0b2RvTGlzdCIsInNldFRvZG9MaXN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJsZW5ndGgiLCJoYW5kbGVEZWxldGUiLCJ0b2RvIiwiZmlsdGVyIiwiaXRlbSIsIm1hcCIsImlkeCJdLCJzb3VyY2VSb290IjoiIn0=