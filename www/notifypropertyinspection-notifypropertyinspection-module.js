(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifypropertyinspection-notifypropertyinspection-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notifypropertyinspection/notifypropertyinspection.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notifypropertyinspection/notifypropertyinspection.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menu/administration\"></ion-back-button>\n    </ion-buttons>\n    <ion-text>\n    <ion-title>Arrange/Notify Property Inspection</ion-title>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/notifypropertyinspection/notifypropertyinspection.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/notifypropertyinspection/notifypropertyinspection.module.ts ***!
  \***********************************************************************************/
/*! exports provided: NotifypropertyinspectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifypropertyinspectionPageModule", function() { return NotifypropertyinspectionPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifypropertyinspection_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifypropertyinspection.page */ "./src/app/pages/notifypropertyinspection/notifypropertyinspection.page.ts");
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
        component: _notifypropertyinspection_page__WEBPACK_IMPORTED_MODULE_5__["NotifypropertyinspectionPage"]
    }
];
var NotifypropertyinspectionPageModule = /** @class */ (function () {
    function NotifypropertyinspectionPageModule() {
    }
    NotifypropertyinspectionPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_notifypropertyinspection_page__WEBPACK_IMPORTED_MODULE_5__["NotifypropertyinspectionPage"]]
        })
    ], NotifypropertyinspectionPageModule);
    return NotifypropertyinspectionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/notifypropertyinspection/notifypropertyinspection.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/notifypropertyinspection/notifypropertyinspection.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item ion-label {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-datetime {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-input {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-textarea {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-radio-group {\n  border: solid 1px #662861;\n  border-radius: 5px; }\n\nion-item ion-radio {\n  border: solid 1px #662861;\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvaG9tZS9wb3N0Z3Jlcy9QdWJsaWMvYXUuY29tLml0Y3NvbHV0aW9ucy5jaGVpcnJzL3NyYy9hcHAvcGFnZXMvbm90aWZ5cHJvcGVydHlpbnNwZWN0aW9uL25vdGlmeXByb3BlcnR5aW5zcGVjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLGtCQUFrQixFQUFBOztBQUV6QjtFQUVPLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0Isa0JBQWtCLEVBQUE7O0FBRzFCO0VBRVEseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixtQkFBbUIsRUFBQTs7QUFFekI7RUFFTSx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLG1CQUFtQixFQUFBOztBQUV6QjtFQUVNLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFFeEI7RUFFTSx5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ub3RpZnlwcm9wZXJ0eWluc3BlY3Rpb24vbm90aWZ5cHJvcGVydHlpbnNwZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgICB9XG59aW9uLWl0ZW17XG4gICAgaW9uLWRhdGV0aW1le1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAjZjVjZmI1O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxuICAgIH1cbn1cbmlvbi1pdGVte1xuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gfWlvbi1pdGVte1xuICAgIGlvbi10ZXh0YXJlYXtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gfWlvbi1pdGVte1xuICAgIGlvbi1yYWRpby1ncm91cHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiB9aW9uLWl0ZW17XG4gICAgaW9uLXJhZGlve1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiB9Il19 */");

/***/ }),

/***/ "./src/app/pages/notifypropertyinspection/notifypropertyinspection.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/notifypropertyinspection/notifypropertyinspection.page.ts ***!
  \*********************************************************************************/
/*! exports provided: NotifypropertyinspectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifypropertyinspectionPage", function() { return NotifypropertyinspectionPage; });
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

var NotifypropertyinspectionPage = /** @class */ (function () {
    function NotifypropertyinspectionPage() {
    }
    NotifypropertyinspectionPage.prototype.ngOnInit = function () {
    };
    NotifypropertyinspectionPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifypropertyinspection',
            template: __importDefault(__webpack_require__(/*! raw-loader!./notifypropertyinspection.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notifypropertyinspection/notifypropertyinspection.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./notifypropertyinspection.page.scss */ "./src/app/pages/notifypropertyinspection/notifypropertyinspection.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], NotifypropertyinspectionPage);
    return NotifypropertyinspectionPage;
}());



/***/ })

}]);
//# sourceMappingURL=notifypropertyinspection-notifypropertyinspection-module.js.map