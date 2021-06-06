(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tenancymngmntrisk-tenancymngmntrisk-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tenancymngmntrisk/tenancymngmntrisk.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tenancymngmntrisk/tenancymngmntrisk.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>tenancymngmntrisk</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/tenancymngmntrisk/tenancymngmntrisk.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tenancymngmntrisk/tenancymngmntrisk.module.ts ***!
  \*********************************************************************/
/*! exports provided: TenancymngmntriskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenancymngmntriskPageModule", function() { return TenancymngmntriskPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tenancymngmntrisk_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tenancymngmntrisk.page */ "./src/app/pages/tenancymngmntrisk/tenancymngmntrisk.page.ts");
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
        component: _tenancymngmntrisk_page__WEBPACK_IMPORTED_MODULE_5__["TenancymngmntriskPage"]
    }
];
var TenancymngmntriskPageModule = /** @class */ (function () {
    function TenancymngmntriskPageModule() {
    }
    TenancymngmntriskPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_tenancymngmntrisk_page__WEBPACK_IMPORTED_MODULE_5__["TenancymngmntriskPage"]]
        })
    ], TenancymngmntriskPageModule);
    return TenancymngmntriskPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tenancymngmntrisk/tenancymngmntrisk.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tenancymngmntrisk/tenancymngmntrisk.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlbmFuY3ltbmdtbnRyaXNrL3RlbmFuY3ltbmdtbnRyaXNrLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/tenancymngmntrisk/tenancymngmntrisk.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tenancymngmntrisk/tenancymngmntrisk.page.ts ***!
  \*******************************************************************/
/*! exports provided: TenancymngmntriskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenancymngmntriskPage", function() { return TenancymngmntriskPage; });
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

var TenancymngmntriskPage = /** @class */ (function () {
    function TenancymngmntriskPage() {
    }
    TenancymngmntriskPage.prototype.ngOnInit = function () {
    };
    TenancymngmntriskPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tenancymngmntrisk',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tenancymngmntrisk.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tenancymngmntrisk/tenancymngmntrisk.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tenancymngmntrisk.page.scss */ "./src/app/pages/tenancymngmntrisk/tenancymngmntrisk.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TenancymngmntriskPage);
    return TenancymngmntriskPage;
}());



/***/ })

}]);
//# sourceMappingURL=tenancymngmntrisk-tenancymngmntrisk-module.js.map