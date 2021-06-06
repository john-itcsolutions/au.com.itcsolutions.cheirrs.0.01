(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["financeworkshop-financeworkshop-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/financeworkshop/financeworkshop.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/financeworkshop/financeworkshop.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>financeworkshop</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/financeworkshop/financeworkshop.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/financeworkshop/financeworkshop.module.ts ***!
  \*****************************************************************/
/*! exports provided: FinanceworkshopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceworkshopPageModule", function() { return FinanceworkshopPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _financeworkshop_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./financeworkshop.page */ "./src/app/pages/financeworkshop/financeworkshop.page.ts");
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
        component: _financeworkshop_page__WEBPACK_IMPORTED_MODULE_5__["FinanceworkshopPage"]
    }
];
var FinanceworkshopPageModule = /** @class */ (function () {
    function FinanceworkshopPageModule() {
    }
    FinanceworkshopPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_financeworkshop_page__WEBPACK_IMPORTED_MODULE_5__["FinanceworkshopPage"]]
        })
    ], FinanceworkshopPageModule);
    return FinanceworkshopPageModule;
}());



/***/ }),

/***/ "./src/app/pages/financeworkshop/financeworkshop.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/financeworkshop/financeworkshop.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpbmFuY2V3b3Jrc2hvcC9maW5hbmNld29ya3Nob3AucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/financeworkshop/financeworkshop.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/financeworkshop/financeworkshop.page.ts ***!
  \***************************************************************/
/*! exports provided: FinanceworkshopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceworkshopPage", function() { return FinanceworkshopPage; });
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

var FinanceworkshopPage = /** @class */ (function () {
    function FinanceworkshopPage() {
    }
    FinanceworkshopPage.prototype.ngOnInit = function () {
    };
    FinanceworkshopPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-financeworkshop',
            template: __importDefault(__webpack_require__(/*! raw-loader!./financeworkshop.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/financeworkshop/financeworkshop.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./financeworkshop.page.scss */ "./src/app/pages/financeworkshop/financeworkshop.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FinanceworkshopPage);
    return FinanceworkshopPage;
}());



/***/ })

}]);
//# sourceMappingURL=financeworkshop-financeworkshop-module.js.map