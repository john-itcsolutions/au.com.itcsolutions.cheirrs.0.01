(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quality-quality-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quality/quality.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quality/quality.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Quality Assurance .. bugs? let us know</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content color=\"medium\"><br><ion-text color=\"dark\">&nbsp;&nbsp;&nbsp;You are welcome to report issues you have with our software.<br>&nbsp;&nbsp;&nbsp;We take all issues seriously, and will deal with yours according to<br>&nbsp;&nbsp;&nbsp;severity and our SLA agreement priorities.<br>&nbsp;&nbsp;&nbsp;<b>(for urgent issues please refer to the Cheirful Help '?' tab below)</b>\n </ion-text>\n  <ion-item>\n    <ion-button color=\"tertiary\" routerLink='/menu/settings/notifications' routerDirection=\"forward\">Report Bug</ion-button>\n    &nbsp;&nbsp;<ion-icon name=\"bug\" color=\"primary\"></ion-icon>\n    <ion-textarea rows=\"12\" cols=\"100\" placeholder=\"Simply enter all details, for example 'what should  or should not happen?', 'what does happen?', 'how could things be improved?', 'what, if anything, is missing?' We are also open for compliments here ..\"></ion-textarea>\n  </ion-item>\n  <ion-item></ion-item>\n  <ion-button color=\"primary\">Clear Form</ion-button>\n  <ion-text color=\"primary\">\n  <ion-item>\n   <ion-text color=\"primary\">A link to your notification can be found at Home/Dashboard/Notifications.<br>Correspondence will also occur there.</ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-text color=\"tertiary\">CHEIRRS stands for \"Community Housing Enterprise Information Recording & Reporting System\".<br>CHEIRRS was developed on the <a href=\"https://www.elastos.org/\" target=\"_blank\"><u>Elastos Blockchains/Carrier</u></a> 'Smart-Web' System<br> by IT Cloud Solutions Australia <a href=\"https://itcsolutions.com.au/\" target=\"_blank\"><u>ITCSA: itcsolutions.com.au</u></a><br>Founded by John Olsen & Ted Whittle</ion-text>\n       </ion-item>\n  </ion-text>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/quality/quality.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/quality/quality.module.ts ***!
  \*************************************************/
/*! exports provided: QualityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityPageModule", function() { return QualityPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _quality_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quality.page */ "./src/app/pages/quality/quality.page.ts");
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
        component: _quality_page__WEBPACK_IMPORTED_MODULE_5__["QualityPage"]
    }
];
var QualityPageModule = /** @class */ (function () {
    function QualityPageModule() {
    }
    QualityPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_quality_page__WEBPACK_IMPORTED_MODULE_5__["QualityPage"]]
        })
    ], QualityPageModule);
    return QualityPageModule;
}());



/***/ }),

/***/ "./src/app/pages/quality/quality.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/quality/quality.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item ion-label {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-datetime {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-input {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-textarea {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-radio-group {\n  border: solid 1px #662861;\n  border-radius: 5px; }\n\nion-item ion-radio {\n  border: solid 1px #662861;\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvaG9tZS9wb3N0Z3Jlcy9QdWJsaWMvYXUuY29tLml0Y3NvbHV0aW9ucy5jaGVpcnJzLjAuMDEvc3JjL2FwcC9wYWdlcy9xdWFsaXR5L3F1YWxpdHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRU0seUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixrQkFBa0IsRUFBQTs7QUFFdkI7RUFFSyx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLGtCQUFrQixFQUFBOztBQUd4QjtFQUVNLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsbUJBQW1CLEVBQUE7O0FBRXhCO0VBRUsseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixtQkFBbUIsRUFBQTs7QUFFeEI7RUFFSyx5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBRXZCO0VBRUsseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcXVhbGl0eS9xdWFsaXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICBpb24tbGFiZWx7XG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXG4gIH1cbn1pb24taXRlbXtcbiAgaW9uLWRhdGV0aW1le1xuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxuICB9XG59XG5pb24taXRlbXtcbiAgaW9uLWlucHV0e1xuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG59aW9uLWl0ZW17XG4gIGlvbi10ZXh0YXJlYXtcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAjZjVjZmI1O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxufWlvbi1pdGVte1xuICBpb24tcmFkaW8tZ3JvdXB7XG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG59aW9uLWl0ZW17XG4gIGlvbi1yYWRpb3tcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/quality/quality.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/quality/quality.page.ts ***!
  \***********************************************/
/*! exports provided: QualityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityPage", function() { return QualityPage; });
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

var QualityPage = /** @class */ (function () {
    function QualityPage() {
    }
    QualityPage.prototype.ngOnInit = function () {
    };
    QualityPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quality',
            template: __importDefault(__webpack_require__(/*! raw-loader!./quality.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quality/quality.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./quality.page.scss */ "./src/app/pages/quality/quality.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], QualityPage);
    return QualityPage;
}());



/***/ })

}]);
//# sourceMappingURL=quality-quality-module.js.map