(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["filingshequ-filingshequ-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filingshequ/filingshequ.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filingshequ/filingshequ.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>filingshequ</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/filingshequ/filingshequ.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/filingshequ/filingshequ.module.ts ***!
  \*********************************************************/
/*! exports provided: FilingshequPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilingshequPageModule", function() { return FilingshequPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _filingshequ_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filingshequ.page */ "./src/app/pages/filingshequ/filingshequ.page.ts");
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
        component: _filingshequ_page__WEBPACK_IMPORTED_MODULE_5__["FilingshequPage"]
    }
];
var FilingshequPageModule = /** @class */ (function () {
    function FilingshequPageModule() {
    }
    FilingshequPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_filingshequ_page__WEBPACK_IMPORTED_MODULE_5__["FilingshequPage"]]
        })
    ], FilingshequPageModule);
    return FilingshequPageModule;
}());



/***/ }),

/***/ "./src/app/pages/filingshequ/filingshequ.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/filingshequ/filingshequ.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpbGluZ3NoZXF1L2ZpbGluZ3NoZXF1LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/filingshequ/filingshequ.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/filingshequ/filingshequ.page.ts ***!
  \*******************************************************/
/*! exports provided: FilingshequPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilingshequPage", function() { return FilingshequPage; });
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

var FilingshequPage = /** @class */ (function () {
    function FilingshequPage() {
    }
    FilingshequPage.prototype.ngOnInit = function () {
    };
    FilingshequPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filingshequ',
            template: __importDefault(__webpack_require__(/*! raw-loader!./filingshequ.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filingshequ/filingshequ.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./filingshequ.page.scss */ "./src/app/pages/filingshequ/filingshequ.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FilingshequPage);
    return FilingshequPage;
}());



/***/ })

}]);
//# sourceMappingURL=filingshequ-filingshequ-module.js.map