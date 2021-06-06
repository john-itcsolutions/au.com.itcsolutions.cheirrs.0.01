(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rdevelopjobs-rdevelopjobs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rdevelopjobs/rdevelopjobs.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rdevelopjobs/rdevelopjobs.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menu/rdevelop\"></ion-back-button>\n    </ion-buttons>\n    <ion-text>\n    <ion-title>Construction Jobs</ion-title>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/rdevelopjobs/rdevelopjobs.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/rdevelopjobs/rdevelopjobs.module.ts ***!
  \***********************************************************/
/*! exports provided: RdevelopjobsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RdevelopjobsPageModule", function() { return RdevelopjobsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rdevelopjobs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rdevelopjobs.page */ "./src/app/pages/rdevelopjobs/rdevelopjobs.page.ts");
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
        component: _rdevelopjobs_page__WEBPACK_IMPORTED_MODULE_5__["RdevelopjobsPage"]
    }
];
var RdevelopjobsPageModule = /** @class */ (function () {
    function RdevelopjobsPageModule() {
    }
    RdevelopjobsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_rdevelopjobs_page__WEBPACK_IMPORTED_MODULE_5__["RdevelopjobsPage"]]
        })
    ], RdevelopjobsPageModule);
    return RdevelopjobsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/rdevelopjobs/rdevelopjobs.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/rdevelopjobs/rdevelopjobs.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JkZXZlbG9wam9icy9yZGV2ZWxvcGpvYnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/rdevelopjobs/rdevelopjobs.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/rdevelopjobs/rdevelopjobs.page.ts ***!
  \*********************************************************/
/*! exports provided: RdevelopjobsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RdevelopjobsPage", function() { return RdevelopjobsPage; });
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

var RdevelopjobsPage = /** @class */ (function () {
    function RdevelopjobsPage() {
    }
    RdevelopjobsPage.prototype.ngOnInit = function () {
    };
    RdevelopjobsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rdevelopjobs',
            template: __importDefault(__webpack_require__(/*! raw-loader!./rdevelopjobs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rdevelopjobs/rdevelopjobs.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./rdevelopjobs.page.scss */ "./src/app/pages/rdevelopjobs/rdevelopjobs.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], RdevelopjobsPage);
    return RdevelopjobsPage;
}());



/***/ })

}]);
//# sourceMappingURL=rdevelopjobs-rdevelopjobs-module.js.map