(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["currentmaintquotes-currentmaintquotes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/currentmaintquotes/currentmaintquotes.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/currentmaintquotes/currentmaintquotes.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>currentmaintquotes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/currentmaintquotes/currentmaintquotes.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/currentmaintquotes/currentmaintquotes.module.ts ***!
  \***********************************************************************/
/*! exports provided: CurrentmaintquotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentmaintquotesPageModule", function() { return CurrentmaintquotesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _currentmaintquotes_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currentmaintquotes.page */ "./src/app/pages/currentmaintquotes/currentmaintquotes.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var routes = [
    {
        path: '',
        component: _currentmaintquotes_page__WEBPACK_IMPORTED_MODULE_5__["CurrentmaintquotesPage"]
    }
];
var CurrentmaintquotesPageModule = /** @class */ (function () {
    function CurrentmaintquotesPageModule() {
    }
    CurrentmaintquotesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_currentmaintquotes_page__WEBPACK_IMPORTED_MODULE_5__["CurrentmaintquotesPage"]]
        })
    ], CurrentmaintquotesPageModule);
    return CurrentmaintquotesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/currentmaintquotes/currentmaintquotes.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/currentmaintquotes/currentmaintquotes.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1cnJlbnRtYWludHF1b3Rlcy9jdXJyZW50bWFpbnRxdW90ZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/currentmaintquotes/currentmaintquotes.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/currentmaintquotes/currentmaintquotes.page.ts ***!
  \*********************************************************************/
/*! exports provided: CurrentmaintquotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentmaintquotesPage", function() { return CurrentmaintquotesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var CurrentmaintquotesPage = /** @class */ (function () {
    function CurrentmaintquotesPage() {
    }
    CurrentmaintquotesPage.prototype.ngOnInit = function () {
    };
    CurrentmaintquotesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-currentmaintquotes',
            template: __importDefault(__webpack_require__(/*! raw-loader!./currentmaintquotes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/currentmaintquotes/currentmaintquotes.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./currentmaintquotes.page.scss */ "./src/app/pages/currentmaintquotes/currentmaintquotes.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], CurrentmaintquotesPage);
    return CurrentmaintquotesPage;
}());



/***/ })

}]);
//# sourceMappingURL=currentmaintquotes-currentmaintquotes-module.js.map