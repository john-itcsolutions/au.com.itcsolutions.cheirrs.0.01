(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employmentdutydescriptions-employmentdutydescriptions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/employmentdutydescriptions/employmentdutydescriptions.page.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/employmentdutydescriptions/employmentdutydescriptions.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>employmentdutydescriptions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/employmentdutydescriptions/employmentdutydescriptions.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/employmentdutydescriptions/employmentdutydescriptions.module.ts ***!
  \***************************************************************************************/
/*! exports provided: EmploymentdutydescriptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentdutydescriptionsPageModule", function() { return EmploymentdutydescriptionsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employmentdutydescriptions_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employmentdutydescriptions.page */ "./src/app/pages/employmentdutydescriptions/employmentdutydescriptions.page.ts");
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
        component: _employmentdutydescriptions_page__WEBPACK_IMPORTED_MODULE_5__["EmploymentdutydescriptionsPage"]
    }
];
var EmploymentdutydescriptionsPageModule = /** @class */ (function () {
    function EmploymentdutydescriptionsPageModule() {
    }
    EmploymentdutydescriptionsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_employmentdutydescriptions_page__WEBPACK_IMPORTED_MODULE_5__["EmploymentdutydescriptionsPage"]]
        })
    ], EmploymentdutydescriptionsPageModule);
    return EmploymentdutydescriptionsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/employmentdutydescriptions/employmentdutydescriptions.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/employmentdutydescriptions/employmentdutydescriptions.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtcGxveW1lbnRkdXR5ZGVzY3JpcHRpb25zL2VtcGxveW1lbnRkdXR5ZGVzY3JpcHRpb25zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/employmentdutydescriptions/employmentdutydescriptions.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/employmentdutydescriptions/employmentdutydescriptions.page.ts ***!
  \*************************************************************************************/
/*! exports provided: EmploymentdutydescriptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentdutydescriptionsPage", function() { return EmploymentdutydescriptionsPage; });
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

var EmploymentdutydescriptionsPage = /** @class */ (function () {
    function EmploymentdutydescriptionsPage() {
    }
    EmploymentdutydescriptionsPage.prototype.ngOnInit = function () {
    };
    EmploymentdutydescriptionsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employmentdutydescriptions',
            template: __importDefault(__webpack_require__(/*! raw-loader!./employmentdutydescriptions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/employmentdutydescriptions/employmentdutydescriptions.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./employmentdutydescriptions.page.scss */ "./src/app/pages/employmentdutydescriptions/employmentdutydescriptions.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], EmploymentdutydescriptionsPage);
    return EmploymentdutydescriptionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=employmentdutydescriptions-employmentdutydescriptions-module.js.map