(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-privateinspectionsadmincrm-privateinspectionsadmincrm-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privateinspectionsadmincrm/privateinspectionsadmincrm.page.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privateinspectionsadmincrm/privateinspectionsadmincrm.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menu/crm\"></ion-back-button>\n    </ion-buttons>\n    <ion-text>\n    <ion-title>Private Inspections Administration</ion-title>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/privateinspectionsadmincrm/privateinspectionsadmincrm.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/privateinspectionsadmincrm/privateinspectionsadmincrm.module.ts ***!
  \***************************************************************************************/
/*! exports provided: PrivateinspectionsadmincrmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateinspectionsadmincrmPageModule", function() { return PrivateinspectionsadmincrmPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _privateinspectionsadmincrm_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./privateinspectionsadmincrm.page */ "./src/app/pages/privateinspectionsadmincrm/privateinspectionsadmincrm.page.ts");
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
        component: _privateinspectionsadmincrm_page__WEBPACK_IMPORTED_MODULE_5__["PrivateinspectionsadmincrmPage"]
    }
];
var PrivateinspectionsadmincrmPageModule = /** @class */ (function () {
    function PrivateinspectionsadmincrmPageModule() {
    }
    PrivateinspectionsadmincrmPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_privateinspectionsadmincrm_page__WEBPACK_IMPORTED_MODULE_5__["PrivateinspectionsadmincrmPage"]]
        })
    ], PrivateinspectionsadmincrmPageModule);
    return PrivateinspectionsadmincrmPageModule;
}());



/***/ }),

/***/ "./src/app/pages/privateinspectionsadmincrm/privateinspectionsadmincrm.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/privateinspectionsadmincrm/privateinspectionsadmincrm.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGVpbnNwZWN0aW9uc2FkbWluY3JtL3ByaXZhdGVpbnNwZWN0aW9uc2FkbWluY3JtLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/privateinspectionsadmincrm/privateinspectionsadmincrm.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/privateinspectionsadmincrm/privateinspectionsadmincrm.page.ts ***!
  \*************************************************************************************/
/*! exports provided: PrivateinspectionsadmincrmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateinspectionsadmincrmPage", function() { return PrivateinspectionsadmincrmPage; });
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

var PrivateinspectionsadmincrmPage = /** @class */ (function () {
    function PrivateinspectionsadmincrmPage() {
    }
    PrivateinspectionsadmincrmPage.prototype.ngOnInit = function () {
    };
    PrivateinspectionsadmincrmPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privateinspectionsadmincrm',
            template: __importDefault(__webpack_require__(/*! raw-loader!./privateinspectionsadmincrm.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privateinspectionsadmincrm/privateinspectionsadmincrm.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./privateinspectionsadmincrm.page.scss */ "./src/app/pages/privateinspectionsadmincrm/privateinspectionsadmincrm.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PrivateinspectionsadmincrmPage);
    return PrivateinspectionsadmincrmPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-privateinspectionsadmincrm-privateinspectionsadmincrm-module.js.map