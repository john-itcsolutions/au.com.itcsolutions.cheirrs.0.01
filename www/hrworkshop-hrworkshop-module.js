(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hrworkshop-hrworkshop-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hrworkshop/hrworkshop.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hrworkshop/hrworkshop.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>hrworkshop</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/hrworkshop/hrworkshop.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/hrworkshop/hrworkshop.module.ts ***!
  \*******************************************************/
/*! exports provided: HrworkshopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrworkshopPageModule", function() { return HrworkshopPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hrworkshop_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hrworkshop.page */ "./src/app/pages/hrworkshop/hrworkshop.page.ts");
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
        component: _hrworkshop_page__WEBPACK_IMPORTED_MODULE_5__["HrworkshopPage"]
    }
];
var HrworkshopPageModule = /** @class */ (function () {
    function HrworkshopPageModule() {
    }
    HrworkshopPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_hrworkshop_page__WEBPACK_IMPORTED_MODULE_5__["HrworkshopPage"]]
        })
    ], HrworkshopPageModule);
    return HrworkshopPageModule;
}());



/***/ }),

/***/ "./src/app/pages/hrworkshop/hrworkshop.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/hrworkshop/hrworkshop.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyd29ya3Nob3AvaHJ3b3Jrc2hvcC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/hrworkshop/hrworkshop.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/hrworkshop/hrworkshop.page.ts ***!
  \*****************************************************/
/*! exports provided: HrworkshopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrworkshopPage", function() { return HrworkshopPage; });
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

var HrworkshopPage = /** @class */ (function () {
    function HrworkshopPage() {
    }
    HrworkshopPage.prototype.ngOnInit = function () {
    };
    HrworkshopPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hrworkshop',
            template: __importDefault(__webpack_require__(/*! raw-loader!./hrworkshop.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hrworkshop/hrworkshop.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./hrworkshop.page.scss */ "./src/app/pages/hrworkshop/hrworkshop.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HrworkshopPage);
    return HrworkshopPage;
}());



/***/ })

}]);
//# sourceMappingURL=hrworkshop-hrworkshop-module.js.map