self["webpackHotUpdate_N_E"]("pages/404",{

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__.r, __webpack_require__.* */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Wrapper */ "./components/Wrapper/index.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Typography */ "./components/Typography/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\work\\dasha\\steam-redesign-nextjs\\pages\\404.js",
    _this = undefined;






 // import LinkComponent from '../components/Link';

var NotFoundPage = function NotFoundPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_2__.default, {
    withVerticalPadding: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Typography__WEBPACK_IMPORTED_MODULE_3__.default, {
      marginBottom: 2,
      variant: "h1",
      center: true,
      bold: true,
      children: "404"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Typography__WEBPACK_IMPORTED_MODULE_3__.default, {
      marginBottom: 2,
      variant: "h4",
      center: true,
      children: "Whoops...!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Typography__WEBPACK_IMPORTED_MODULE_3__.default, {
      marginBottom: 2,
      center: true,
      children: "Sorry, we are not able to find what you were looking for"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {
      align: "center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.default, {
        href: "/",
        size: "large",
        color: "secondary",
        variant: "contained",
        component: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
        children: "Back to home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, _this);
};

_c = NotFoundPage;
/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

var _c;

$RefreshReg$(_c, "NotFoundPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0LmpzIl0sIm5hbWVzIjpbIk5vdEZvdW5kUGFnZSIsIkxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0NBRUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxzQkFDbkIsOERBQUMsd0RBQUQ7QUFBUyx1QkFBbUIsTUFBNUI7QUFBQSw0QkFDRSw4REFBQywyREFBRDtBQUNFLGtCQUFZLEVBQUUsQ0FEaEI7QUFFRSxhQUFPLEVBQUMsSUFGVjtBQUdFLFlBQU0sTUFIUjtBQUlFLFVBQUksTUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBVUUsOERBQUMsMkRBQUQ7QUFDRSxrQkFBWSxFQUFFLENBRGhCO0FBRUUsYUFBTyxFQUFDLElBRlY7QUFHRSxZQUFNLE1BSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRixlQWtCRSw4REFBQywyREFBRDtBQUNFLGtCQUFZLEVBQUUsQ0FEaEI7QUFFRSxZQUFNLE1BRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkYsZUF5QkUsOERBQUMsMkRBQUQ7QUFBTSxXQUFLLEVBQUMsUUFBWjtBQUFBLDZCQUNFLDhEQUFDLDZEQUFEO0FBQ0UsWUFBSSxFQUFDLEdBRFA7QUFFRSxZQUFJLEVBQUMsT0FGUDtBQUdFLGFBQUssRUFBQyxXQUhSO0FBSUUsZUFBTyxFQUFDLFdBSlY7QUFLRSxpQkFBUyxFQUFFQyxrREFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRG1CO0FBQUEsQ0FBckI7O0tBQU1ELFk7QUF3Q04sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvNDA0LmFlZTBhODRjN2Y4NTNkNzYyMGNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuXHJcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvV3JhcHBlcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL2NvbXBvbmVudHMvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8vIGltcG9ydCBMaW5rQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvTGluayc7XHJcblxyXG5jb25zdCBOb3RGb3VuZFBhZ2UgPSAoKSA9PiAoXHJcbiAgPFdyYXBwZXIgd2l0aFZlcnRpY2FsUGFkZGluZz5cclxuICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgIG1hcmdpbkJvdHRvbT17Mn1cclxuICAgICAgdmFyaWFudD1cImgxXCJcclxuICAgICAgY2VudGVyXHJcbiAgICAgIGJvbGRcclxuICAgID5cclxuICAgICAgNDA0XHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgPFR5cG9ncmFwaHlcclxuICAgICAgbWFyZ2luQm90dG9tPXsyfVxyXG4gICAgICB2YXJpYW50PVwiaDRcIlxyXG4gICAgICBjZW50ZXJcclxuICAgID5cclxuICAgICAgV2hvb3BzLi4uIVxyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgIG1hcmdpbkJvdHRvbT17Mn1cclxuICAgICAgY2VudGVyXHJcbiAgICA+XHJcbiAgICAgIFNvcnJ5LCB3ZSBhcmUgbm90IGFibGUgdG8gZmluZCB3aGF0IHlvdSB3ZXJlIGxvb2tpbmcgZm9yXHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgPEdyaWQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgID5cclxuICAgICAgICBCYWNrIHRvIGhvbWVcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L0dyaWQ+XHJcbiAgPC9XcmFwcGVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmRQYWdlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=