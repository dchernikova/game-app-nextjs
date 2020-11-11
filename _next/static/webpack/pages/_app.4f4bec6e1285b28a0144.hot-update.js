self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Actions/CartButton/index.js":
/*!************************************************!*\
  !*** ./components/Actions/CartButton/index.js ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__.r, __webpack_require__.* */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/Badge.js");
/* harmony import */ var _material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ShoppingBasket */ "./node_modules/@material-ui/icons/ShoppingBasket.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Link */ "./components/Link/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_components/Button */ "./components/Actions/_components/Button.js");
/* harmony import */ var _contexts_Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../contexts/Cart */ "./contexts/Cart/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\work\\dasha\\steam-redesign-nextjs\\components\\Actions\\CartButton\\index.js",
    _this = undefined,
    _s = $RefreshSig$();








var StyledBadge = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.default)(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6__.default).withConfig({
  componentId: "p87m8z-0"
})(["& > .MuiBadge-badge{color:", ";background-color:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.secondary;
});
_c = StyledBadge;

var CartButton = function CartButton() {
  _s();

  var _useCart = (0,_contexts_Cart__WEBPACK_IMPORTED_MODULE_4__.useCart)(),
      cart = _useCart.cart;

  var count = cart && cart.length || 0;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: "/cart",
    component: _Link__WEBPACK_IMPORTED_MODULE_2__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledBadge, {
      badgeContent: count,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this);
};

_s(CartButton, "GQSP7DAu2z+QzdS9621Ip+kHB6w=", false, function () {
  return [_contexts_Cart__WEBPACK_IMPORTED_MODULE_4__.useCart];
});

_c2 = CartButton;
/* harmony default export */ __webpack_exports__["default"] = (CartButton);

var _c, _c2;

$RefreshReg$(_c, "StyledBadge");
$RefreshReg$(_c2, "CartButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY3Rpb25zL0NhcnRCdXR0b24vaW5kZXguanMiXSwibmFtZXMiOlsiU3R5bGVkQmFkZ2UiLCJzdHlsZWQiLCJCYWRnZSIsInRoZW1lIiwiY29sb3IiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiQ2FydEJ1dHRvbiIsInVzZUNhcnQiLCJjYXJ0IiwiY291bnQiLCJsZW5ndGgiLCJMaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQywwREFBTSxDQUFDQyw0REFBRCxDQUFUO0FBQUE7QUFBQSwrREFFSjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUEzQjtBQUFBLENBRkksRUFHTztBQUFBLE1BQUdGLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxTQUEzQjtBQUFBLENBSFAsQ0FBakI7S0FBTU4sVzs7QUFPTixJQUFNTyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsaUJBQ05DLHVEQUFPLEVBREQ7QUFBQSxNQUNmQyxJQURlLFlBQ2ZBLElBRGU7O0FBRXZCLE1BQU1DLEtBQUssR0FBR0QsSUFBSSxJQUFJQSxJQUFJLENBQUNFLE1BQWIsSUFBdUIsQ0FBckM7QUFFQSxzQkFDRSw4REFBQyx1REFBRDtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsYUFBUyxFQUFFQywwQ0FGYjtBQUFBLDJCQUlFLDhEQUFDLFdBQUQ7QUFBYSxrQkFBWSxFQUFFRixLQUEzQjtBQUFBLDZCQUNFLDhEQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FkRDs7R0FBTUgsVTtVQUNhQyxtRDs7O01BRGJELFU7QUFnQk4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40ZjRiZWM2ZTEyODViMjhhMDE0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2UnO1xyXG5pbXBvcnQgU2hvcHBpbmdCYXNrZXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TaG9wcGluZ0Jhc2tldCc7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9MaW5rJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLy4uL19jb21wb25lbnRzL0J1dHRvbic7XHJcblxyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dHMvQ2FydCc7XHJcblxyXG5jb25zdCBTdHlsZWRCYWRnZSA9IHN0eWxlZChCYWRnZSlgXHJcbiAgJiA+IC5NdWlCYWRnZS1iYWRnZSB7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5wcmltYXJ5fTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3Iuc2Vjb25kYXJ5fTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJ0QnV0dG9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY2FydCB9ID0gdXNlQ2FydCgpO1xyXG4gIGNvbnN0IGNvdW50ID0gY2FydCAmJiBjYXJ0Lmxlbmd0aCB8fCAwO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblxyXG4gICAgICBocmVmPVwiL2NhcnRcIlxyXG4gICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICA+XHJcbiAgICAgIDxTdHlsZWRCYWRnZSBiYWRnZUNvbnRlbnQ9e2NvdW50fT5cclxuICAgICAgICA8U2hvcHBpbmdCYXNrZXRJY29uIC8+XHJcbiAgICAgIDwvU3R5bGVkQmFkZ2U+XHJcbiAgICA8L0J1dHRvbj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0QnV0dG9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=