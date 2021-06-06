(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-importregproptoletletting-importregproptoletletting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/importregproptoletletting/importregproptoletletting.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/importregproptoletletting/importregproptoletletting.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menu/letting\"></ion-back-button>\n    </ion-buttons>\n    <ion-text>\n    <ion-title>Import & Register Property to Let</ion-title>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/importregproptoletletting/importregproptoletletting.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/importregproptoletletting/importregproptoletletting.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ImportregproptoletlettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportregproptoletlettingPageModule", function() { return ImportregproptoletlettingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _importregproptoletletting_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./importregproptoletletting.page */ "./src/app/pages/importregproptoletletting/importregproptoletletting.page.ts");
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
        component: _importregproptoletletting_page__WEBPACK_IMPORTED_MODULE_5__["ImportregproptoletlettingPage"]
    }
];
var ImportregproptoletlettingPageModule = /** @class */ (function () {
    function ImportregproptoletlettingPageModule() {
    }
    ImportregproptoletlettingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_importregproptoletletting_page__WEBPACK_IMPORTED_MODULE_5__["ImportregproptoletlettingPage"]]
        })
    ], ImportregproptoletlettingPageModule);
    return ImportregproptoletlettingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/importregproptoletletting/importregproptoletletting.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/importregproptoletletting/importregproptoletletting.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltcG9ydHJlZ3Byb3B0b2xldGxldHRpbmcvaW1wb3J0cmVncHJvcHRvbGV0bGV0dGluZy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/importregproptoletletting/importregproptoletletting.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/importregproptoletletting/importregproptoletletting.page.ts ***!
  \***********************************************************************************/
/*! exports provided: ImportregproptoletlettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportregproptoletlettingPage", function() { return ImportregproptoletlettingPage; });
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

var ImportregproptoletlettingPage = /** @class */ (function () {
    function ImportregproptoletlettingPage() {
    }
    ImportregproptoletlettingPage.prototype.ngOnInit = function () {
    };
    ImportregproptoletlettingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-importregproptoletletting',
            template: __importDefault(__webpack_require__(/*! raw-loader!./importregproptoletletting.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/importregproptoletletting/importregproptoletletting.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./importregproptoletletting.page.scss */ "./src/app/pages/importregproptoletletting/importregproptoletletting.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ImportregproptoletlettingPage);
    return ImportregproptoletlettingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-importregproptoletletting-importregproptoletletting-module.js.map