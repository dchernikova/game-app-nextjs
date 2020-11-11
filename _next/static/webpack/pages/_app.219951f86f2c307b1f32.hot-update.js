self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Actions/ProfileButton/index.js":
/*!***************************************************!*\
  !*** ./components/Actions/ProfileButton/index.js ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__.r, __webpack_require__.* */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_PersonOutline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/PersonOutline */ "./node_modules/@material-ui/icons/PersonOutline.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Link */ "./components/Link/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../_components/Button */ "./components/Actions/_components/Button.js");
/* harmony import */ var _contexts_Authentication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../contexts/Authentication */ "./contexts/Authentication/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\work\\dasha\\steam-redesign-nextjs\\components\\Actions\\ProfileButton\\index.js",
    _this = undefined,
    _s = $RefreshSig$();









var ProfileButton = function ProfileButton() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  var _useAuthentication = (0,_contexts_Authentication__WEBPACK_IMPORTED_MODULE_6__.useAuthentication)(),
      user = _useAuthentication.user,
      setUser = _useAuthentication.setUser,
      isLogged = _useAuthentication.isLogged;

  var handleSuccess = function handleSuccess(response) {
    setUser(response.profileObj);
    router.push('/profile');
  };

  var handleFailure = function handleFailure(response) {
    return console.error(response);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: user && isLogged ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__.default, {
      href: "/profile",
      component: _Link__WEBPACK_IMPORTED_MODULE_4__.default,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_PersonOutline__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_google_login__WEBPACK_IMPORTED_MODULE_3__.GoogleLogin, {
      clientId: "153231177102-ogdiu0sjtjhrul8e1nst0jkl3jhnterb.apps.googleusercontent.com",
      onSuccess: handleSuccess,
      onFailure: handleFailure,
      render: function render(renderProps) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__.default, {
          onClick: renderProps.onClick,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_PersonOutline__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_s(ProfileButton, "yud3vDcekuY4NQKhDH5Wm/HcpEY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, _contexts_Authentication__WEBPACK_IMPORTED_MODULE_6__.useAuthentication];
});

_c = ProfileButton;
/* harmony default export */ __webpack_exports__["default"] = (ProfileButton);

var _c;

$RefreshReg$(_c, "ProfileButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY3Rpb25zL1Byb2ZpbGVCdXR0b24vaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZUJ1dHRvbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUF1dGhlbnRpY2F0aW9uIiwidXNlciIsInNldFVzZXIiLCJpc0xvZ2dlZCIsImhhbmRsZVN1Y2Nlc3MiLCJyZXNwb25zZSIsInByb2ZpbGVPYmoiLCJwdXNoIiwiaGFuZGxlRmFpbHVyZSIsImNvbnNvbGUiLCJlcnJvciIsIkxpbmsiLCJyZW5kZXJQcm9wcyIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQzFCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRDBCLDJCQUVVQywyRUFBaUIsRUFGM0I7QUFBQSxNQUVsQkMsSUFGa0Isc0JBRWxCQSxJQUZrQjtBQUFBLE1BRVpDLE9BRlksc0JBRVpBLE9BRlk7QUFBQSxNQUVIQyxRQUZHLHNCQUVIQSxRQUZHOztBQUkxQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFFBQUQsRUFBYztBQUNsQ0gsV0FBTyxDQUFDRyxRQUFRLENBQUNDLFVBQVYsQ0FBUDtBQUNBUixVQUFNLENBQUNTLElBQVAsQ0FBWSxVQUFaO0FBQ0QsR0FIRDs7QUFLQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNILFFBQUQ7QUFBQSxXQUFjSSxPQUFPLENBQUNDLEtBQVIsQ0FBY0wsUUFBZCxDQUFkO0FBQUEsR0FBdEI7O0FBRUEsc0JBQ0U7QUFBQSxjQUNHSixJQUFJLElBQUlFLFFBQVIsZ0JBQ0MsOERBQUMsdURBQUQ7QUFDRSxVQUFJLEVBQUMsVUFEUDtBQUVFLGVBQVMsRUFBRVEsMENBRmI7QUFBQSw2QkFJRSw4REFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGdCQVFDLDhEQUFDLDJEQUFEO0FBQ0UsY0FBUSxFQUFDLDBFQURYO0FBRUUsZUFBUyxFQUFFUCxhQUZiO0FBR0UsZUFBUyxFQUFFSSxhQUhiO0FBSUUsWUFBTSxFQUFFLGdCQUFBSSxXQUFXO0FBQUEsNEJBQ2pCLDhEQUFDLHVEQUFEO0FBQVEsaUJBQU8sRUFBRUEsV0FBVyxDQUFDQyxPQUE3QjtBQUFBLGlDQUNFLDhEQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURpQjtBQUFBO0FBSnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUSixtQkFERjtBQXVCRCxDQWxDRDs7R0FBTWhCLGE7VUFDV0Usa0QsRUFDcUJDLHVFOzs7S0FGaENILGE7QUFvQ04sK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yMTk5NTFmODZmMmMzMDdiMWYzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgR29vZ2xlTG9naW4gfSBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nO1xyXG5cclxuaW1wb3J0IFBlcnNvbk91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QZXJzb25PdXRsaW5lJztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL0xpbmsnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vLi4vX2NvbXBvbmVudHMvQnV0dG9uJztcclxuXHJcbmltcG9ydCB7IHVzZUF1dGhlbnRpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dHMvQXV0aGVudGljYXRpb24nO1xyXG5cclxuY29uc3QgUHJvZmlsZUJ1dHRvbiA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHVzZXIsIHNldFVzZXIsIGlzTG9nZ2VkIH0gPSB1c2VBdXRoZW50aWNhdGlvbigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWNjZXNzID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICBzZXRVc2VyKHJlc3BvbnNlLnByb2ZpbGVPYmopO1xyXG4gICAgcm91dGVyLnB1c2goJy9wcm9maWxlJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmFpbHVyZSA9IChyZXNwb25zZSkgPT4gY29uc29sZS5lcnJvcihyZXNwb25zZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7dXNlciAmJiBpc0xvZ2dlZCA/IChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBocmVmPVwiL3Byb2ZpbGVcIlxyXG4gICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQZXJzb25PdXRsaW5lSWNvbiAvPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxHb29nbGVMb2dpblxyXG4gICAgICAgICAgY2xpZW50SWQ9XCIxNTMyMzExNzcxMDItb2dkaXUwc2p0amhydWw4ZTFuc3QwamtsM2pobnRlcmIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxyXG4gICAgICAgICAgb25TdWNjZXNzPXtoYW5kbGVTdWNjZXNzfVxyXG4gICAgICAgICAgb25GYWlsdXJlPXtoYW5kbGVGYWlsdXJlfVxyXG4gICAgICAgICAgcmVuZGVyPXtyZW5kZXJQcm9wcyA9PiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17cmVuZGVyUHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgICAgPFBlcnNvbk91dGxpbmVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUJ1dHRvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9