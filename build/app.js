(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ "./scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_closest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/closest */ "./js/components/closest.js");
/* harmony import */ var _components_closest__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_closest__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/share */ "./js/components/share.js");
/* harmony import */ var _components_share__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_share__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./js/components/closest.js":
/*!**********************************!*\
  !*** ./js/components/closest.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Element.closest() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */
if (!Element.prototype.closest) {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  Element.prototype.closest = function (s) {
    var el = this;
    var ancestor = this;
    if (!document.documentElement.contains(el)) return null;

    do {
      if (ancestor.matches(s)) return ancestor;
      ancestor = ancestor.parentElement;
    } while (ancestor !== null);

    return null;
  };
}

/***/ }),

/***/ "./js/components/share.js":
/*!********************************!*\
  !*** ./js/components/share.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('click', function (evt) {
  var share = evt.target.closest('.js-share');

  if (!share) {
    return;
  }

  if (!share.dataset.title) {
    return;
  }

  navigator.share({
    title: share.dataset.title,
    text: share.dataset.text,
    url: share.dataset.url || location.href
  });
  evt.preventDefault();
});

/***/ }),

/***/ "./scss/app.scss":
/*!***********************!*\
  !*** ./scss/app.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9jbG9zZXN0LmpzIiwid2VicGFjazovLy8uL2pzL2NvbXBvbmVudHMvc2hhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9hcHAuc2NzcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicHJvdG90eXBlIiwiY2xvc2VzdCIsIm1hdGNoZXMiLCJtc01hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsInMiLCJlbCIsImFuY2VzdG9yIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjb250YWlucyIsInBhcmVudEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0Iiwic2hhcmUiLCJ0YXJnZXQiLCJkYXRhc2V0IiwidGl0bGUiLCJuYXZpZ2F0b3IiLCJ0ZXh0IiwidXJsIiwibG9jYXRpb24iLCJocmVmIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxTQUFSLENBQWtCQyxPQUF2QixFQUFnQztBQUM5QixNQUFJLENBQUNGLE9BQU8sQ0FBQ0MsU0FBUixDQUFrQkUsT0FBdkIsRUFBZ0M7QUFDOUJILFdBQU8sQ0FBQ0MsU0FBUixDQUFrQkUsT0FBbEIsR0FBNEJILE9BQU8sQ0FBQ0MsU0FBUixDQUFrQkcsaUJBQWxCLElBQXVDSixPQUFPLENBQUNDLFNBQVIsQ0FBa0JJLHFCQUFyRjtBQUNEOztBQUNETCxTQUFPLENBQUNDLFNBQVIsQ0FBa0JDLE9BQWxCLEdBQTRCLFVBQVVJLENBQVYsRUFBYTtBQUN2QyxRQUFJQyxFQUFFLEdBQUcsSUFBVDtBQUNBLFFBQUlDLFFBQVEsR0FBRyxJQUFmO0FBQ0EsUUFBSSxDQUFDQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFFBQXpCLENBQWtDSixFQUFsQyxDQUFMLEVBQTRDLE9BQU8sSUFBUDs7QUFDNUMsT0FBRztBQUNELFVBQUlDLFFBQVEsQ0FBQ0wsT0FBVCxDQUFpQkcsQ0FBakIsQ0FBSixFQUF5QixPQUFPRSxRQUFQO0FBQ3pCQSxjQUFRLEdBQUdBLFFBQVEsQ0FBQ0ksYUFBcEI7QUFDRCxLQUhELFFBR1NKLFFBQVEsS0FBSyxJQUh0Qjs7QUFJQSxXQUFPLElBQVA7QUFDRCxHQVREO0FBVUQsQzs7Ozs7Ozs7Ozs7QUNsQkRDLFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsR0FBRCxFQUFTO0FBQzFDLE1BQU1DLEtBQUssR0FBR0QsR0FBRyxDQUFDRSxNQUFKLENBQVdkLE9BQVgsQ0FBbUIsV0FBbkIsQ0FBZDs7QUFDQSxNQUFJLENBQUNhLEtBQUwsRUFBWTtBQUNWO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDQSxLQUFLLENBQUNFLE9BQU4sQ0FBY0MsS0FBbkIsRUFBMEI7QUFDeEI7QUFDRDs7QUFFREMsV0FBUyxDQUFDSixLQUFWLENBQWdCO0FBQ2RHLFNBQUssRUFBRUgsS0FBSyxDQUFDRSxPQUFOLENBQWNDLEtBRFA7QUFFZEUsUUFBSSxFQUFFTCxLQUFLLENBQUNFLE9BQU4sQ0FBY0csSUFGTjtBQUdkQyxPQUFHLEVBQUVOLEtBQUssQ0FBQ0UsT0FBTixDQUFjSSxHQUFkLElBQXFCQyxRQUFRLENBQUNDO0FBSHJCLEdBQWhCO0FBTUFULEtBQUcsQ0FBQ1UsY0FBSjtBQUNELENBakJELEU7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJztcbmltcG9ydCAncG9wcGVyLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2Nsb3Nlc3QnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2hhcmUnO1xuIiwiLyoqXG4gKiBFbGVtZW50LmNsb3Nlc3QoKSBwb2x5ZmlsbFxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvY2xvc2VzdCNQb2x5ZmlsbFxuICovXG5pZiAoIUVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QpIHtcbiAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gICAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcbiAgfVxuICBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24gKHMpIHtcbiAgICB2YXIgZWwgPSB0aGlzO1xuICAgIHZhciBhbmNlc3RvciA9IHRoaXM7XG4gICAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMoZWwpKSByZXR1cm4gbnVsbDtcbiAgICBkbyB7XG4gICAgICBpZiAoYW5jZXN0b3IubWF0Y2hlcyhzKSkgcmV0dXJuIGFuY2VzdG9yO1xuICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnRFbGVtZW50O1xuICAgIH0gd2hpbGUgKGFuY2VzdG9yICE9PSBudWxsKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICBjb25zdCBzaGFyZSA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmpzLXNoYXJlJyk7XG4gIGlmICghc2hhcmUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXNoYXJlLmRhdGFzZXQudGl0bGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBuYXZpZ2F0b3Iuc2hhcmUoe1xuICAgIHRpdGxlOiBzaGFyZS5kYXRhc2V0LnRpdGxlLFxuICAgIHRleHQ6IHNoYXJlLmRhdGFzZXQudGV4dCxcbiAgICB1cmw6IHNoYXJlLmRhdGFzZXQudXJsIHx8IGxvY2F0aW9uLmhyZWZcbiAgfSk7XG5cbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=