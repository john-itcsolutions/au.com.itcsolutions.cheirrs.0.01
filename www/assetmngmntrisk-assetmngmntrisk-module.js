(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assetmngmntrisk-assetmngmntrisk-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assetmngmntrisk/assetmngmntrisk.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assetmngmntrisk/assetmngmntrisk.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>assetmngmntrisk</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/assetmngmntrisk/assetmngmntrisk.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/assetmngmntrisk/assetmngmntrisk.module.ts ***!
  \*****************************************************************/
/*! exports provided: AssetmngmntriskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetmngmntriskPageModule", function() { return AssetmngmntriskPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _assetmngmntrisk_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assetmngmntrisk.page */ "./src/app/pages/assetmngmntrisk/assetmngmntrisk.page.ts");
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
        component: _assetmngmntrisk_page__WEBPACK_IMPORTED_MODULE_5__["AssetmngmntriskPage"]
    }
];
var AssetmngmntriskPageModule = /** @class */ (function () {
    function AssetmngmntriskPageModule() {
    }
    AssetmngmntriskPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_assetmngmntrisk_page__WEBPACK_IMPORTED_MODULE_5__["AssetmngmntriskPage"]]
        })
    ], AssetmngmntriskPageModule);
    return AssetmngmntriskPageModule;
}());



/***/ }),

/***/ "./src/app/pages/assetmngmntrisk/assetmngmntrisk.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/assetmngmntrisk/assetmngmntrisk.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0bW5nbW50cmlzay9hc3NldG1uZ21udHJpc2sucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/assetmngmntrisk/assetmngmntrisk.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/assetmngmntrisk/assetmngmntrisk.page.ts ***!
  \***************************************************************/
/*! exports provided: AssetmngmntriskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetmngmntriskPage", function() { return AssetmngmntriskPage; });
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

var AssetmngmntriskPage = /** @class */ (function () {
    function AssetmngmntriskPage() {
    }
    AssetmngmntriskPage.prototype.ngOnInit = function () {
    };
    AssetmngmntriskPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assetmngmntrisk',
            template: __importDefault(__webpack_require__(/*! raw-loader!./assetmngmntrisk.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assetmngmntrisk/assetmngmntrisk.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./assetmngmntrisk.page.scss */ "./src/app/pages/assetmngmntrisk/assetmngmntrisk.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AssetmngmntriskPage);
    return AssetmngmntriskPage;
}());



/***/ })

}]);
//# sourceMappingURL=assetmngmntrisk-assetmngmntrisk-module.js.map