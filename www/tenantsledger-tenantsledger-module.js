(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tenantsledger-tenantsledger-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tenantsledger/tenantsledger.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tenantsledger/tenantsledger.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-text>\n    <ion-title>Tenants Ledger by Tenant or Address or Arrears-Rank</ion-title>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/tenantsledger/tenantsledger.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/tenantsledger/tenantsledger.module.ts ***!
  \*************************************************************/
/*! exports provided: TenantsledgerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantsledgerPageModule", function() { return TenantsledgerPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tenantsledger_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tenantsledger.page */ "./src/app/pages/tenantsledger/tenantsledger.page.ts");
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
        component: _tenantsledger_page__WEBPACK_IMPORTED_MODULE_5__["TenantsledgerPage"]
    }
];
var TenantsledgerPageModule = /** @class */ (function () {
    function TenantsledgerPageModule() {
    }
    TenantsledgerPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_tenantsledger_page__WEBPACK_IMPORTED_MODULE_5__["TenantsledgerPage"]]
        })
    ], TenantsledgerPageModule);
    return TenantsledgerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tenantsledger/tenantsledger.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/tenantsledger/tenantsledger.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item ion-label {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-datetime {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-input {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-textarea {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-radio-group {\n  border: solid 1px #662861;\n  border-radius: 5px; }\n\nion-item ion-radio {\n  border: solid 1px #662861;\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvaG9tZS9wb3N0Z3Jlcy9QdWJsaWMvYXUuY29tLml0Y3NvbHV0aW9ucy5jaGVpcnJzL3NyYy9hcHAvcGFnZXMvdGVuYW50c2xlZGdlci90ZW5hbnRzbGVkZ2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0Isa0JBQWtCLEVBQUE7O0FBRXpCO0VBRU8seUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixrQkFBa0IsRUFBQTs7QUFHMUI7RUFFUSx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLG1CQUFtQixFQUFBOztBQUV6QjtFQUVNLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsbUJBQW1CLEVBQUE7O0FBRXpCO0VBRU0seUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUV4QjtFQUVNLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlbmFudHNsZWRnZXIvdGVuYW50c2xlZGdlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXG4gICAgfVxufWlvbi1pdGVte1xuICAgIGlvbi1kYXRldGltZXtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgICB9XG59XG5pb24taXRlbXtcbiAgICBpb24taW5wdXR7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuIH1pb24taXRlbXtcbiAgICBpb24tdGV4dGFyZWF7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuIH1pb24taXRlbXtcbiAgICBpb24tcmFkaW8tZ3JvdXB7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gfWlvbi1pdGVte1xuICAgIGlvbi1yYWRpb3tcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/tenantsledger/tenantsledger.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/tenantsledger/tenantsledger.page.ts ***!
  \***********************************************************/
/*! exports provided: TenantsledgerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantsledgerPage", function() { return TenantsledgerPage; });
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

var TenantsledgerPage = /** @class */ (function () {
    function TenantsledgerPage() {
    }
    TenantsledgerPage.prototype.ngOnInit = function () {
    };
    TenantsledgerPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tenantsledger',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tenantsledger.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tenantsledger/tenantsledger.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tenantsledger.page.scss */ "./src/app/pages/tenantsledger/tenantsledger.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TenantsledgerPage);
    return TenantsledgerPage;
}());



/***/ })

}]);
//# sourceMappingURL=tenantsledger-tenantsledger-module.js.map