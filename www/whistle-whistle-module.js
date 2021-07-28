(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["whistle-whistle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/whistle/whistle.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/whistle/whistle.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>You Can Report a Compliance Breach</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content class=padding color=\"warning\">\n  <ion-text color=\"tertiary\">\n  <br> If you feel there is an issue with Legal or Policy Compliance you should report,<br> &nbsp;&nbsp;&nbsp;including Workplace Health & Safety issues,<br> &nbsp;&nbsp;&nbsp;you can do so confidentially (and anonymously, if desired) here.<br> &nbsp;&nbsp;&nbsp;Your confidential report is passed directly with your submission<br> &nbsp;&nbsp;&nbsp;to a senior office bearer of your choice within your company.<br>&nbsp;&nbsp;&nbsp;Please note that investigation of your submission may be hindered if you choose to report anonymously.<br> &nbsp;&nbsp;&nbsp;ITCSA has no access to the report in the normal course of duties.<br> &nbsp;&nbsp;&nbsp;You will find a link to your report in your Home/Dashboard/Notifications page,<br> &nbsp;&nbsp;&nbsp;(technically at /menu/settings/notifications), which you may keep as long as needed.<br> &nbsp;&nbsp;&nbsp;If you reported anonymously, your report remains private notwithstanding a legal order.\n \n  <ion-content padding>\n    <ion-button disabled=\"true\" expand=\"block\" color=\"secondary\"></ion-button>\n    \n    <ion-list>\n      <ion-radio-group\n        allow-empty-selection = \"true\"\n        name=\"radio-group\"\n        (ionChange)=\"radioGroupChange($event)\"\n      >\n        <ion-list-header>\n          <ion-label>Compliance or WHS Problems</ion-label>\n        </ion-list-header>\n    \n        <ion-item \n        *ngFor=\"let item of radio_list\" \n        (ionFocus)=\"radioFocus()\"\n        (ionSelect)=\"radioSelect($event)\"\n        (ionBlur)=\"radioBlur()\"\n        >\n          <ion-label>{{item.text}}</ion-label>\n          <ion-radio \n          slot=\"start\" \n          name=\"{{item.name}}\" \n          value=\"{{item.value}}\" \n          checked=\"{{item.checked}}\" \n          color=\"{{item.color}}\" \n          disabled=\"{{item.disabled}}\"\n          ></ion-radio>\n        </ion-item>\n    \n      </ion-radio-group>\n    </ion-list>\n   \n    <p><b>Radio Group Event</b><br/>\n      {{selectedRadioGroup | json}}</p>\n    <p><b>Radio Item Event</b><br/>\n      {{selectedRadioItem | json}}<br/></p>\n\n      <ion-button disabled=\"true\" expand=\"block\" color=\"secondary\"></ion-button>\n<ion-grid><ion-row><ion-col>\n  <ion-button color=\"danger\" routerLink='/menu/settings/notifications' routerDirection=\"forward\">\n    Submit Report<br>Anonymously\n  </ion-button>\n  <ion-button color=\"primary\" routerLink='/menu/settings/notifications' routerDirection=\"forward\">\n    Submit Report<br>including Id\n   </ion-button>\n  \n</ion-col><ion-col>\n  <ion-icon name=\"alarm\" color=\"danger\" slot=\"start\"></ion-icon>\n</ion-col>\n</ion-row></ion-grid>\n  <ion-item>\n  <ion-textarea rows=\"12\" cols=\"100\" color=\"tertiary\" placeholder=\"Please enter all details here ..\"></ion-textarea>\n</ion-item>\n\n<ion-button color=\"tertiary\">Clear Form</ion-button>\n</ion-content>\n</ion-text>");

/***/ }),

/***/ "./src/app/pages/whistle/whistle.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/whistle/whistle.module.ts ***!
  \*************************************************/
/*! exports provided: WhistlePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhistlePageModule", function() { return WhistlePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _whistle_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./whistle.page */ "./src/app/pages/whistle/whistle.page.ts");
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
        component: _whistle_page__WEBPACK_IMPORTED_MODULE_5__["WhistlePage"]
    }
];
var WhistlePageModule = /** @class */ (function () {
    function WhistlePageModule() {
    }
    WhistlePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_whistle_page__WEBPACK_IMPORTED_MODULE_5__["WhistlePage"]]
        })
    ], WhistlePageModule);
    return WhistlePageModule;
}());



/***/ }),

/***/ "./src/app/pages/whistle/whistle.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/whistle/whistle.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item ion-label {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-datetime {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-input {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-textarea {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-radio-group {\n  border: solid 1px #662861;\n  border-radius: 5px; }\n\nion-item ion-radio {\n  border: solid 1px #662861;\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvaG9tZS9wb3N0Z3Jlcy9QdWJsaWMvYXUuY29tLml0Y3NvbHV0aW9ucy5jaGVpcnJzLjAuMDEvc3JjL2FwcC9wYWdlcy93aGlzdGxlL3doaXN0bGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixrQkFBa0IsRUFBQTs7QUFFdkI7RUFFSyx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLGtCQUFrQixFQUFBOztBQUd4QjtFQUVNLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsbUJBQW1CLEVBQUE7O0FBRXhCO0VBRUsseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixtQkFBbUIsRUFBQTs7QUFFeEI7RUFFSyx5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBRXZCO0VBRUsseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2hpc3RsZS93aGlzdGxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgICB9XG4gIH1pb24taXRlbXtcbiAgICBpb24tZGF0ZXRpbWV7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXG4gICAgfVxuICB9XG4gIGlvbi1pdGVte1xuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gIH1pb24taXRlbXtcbiAgICBpb24tdGV4dGFyZWF7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuICB9aW9uLWl0ZW17XG4gICAgaW9uLXJhZGlvLWdyb3Vwe1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICB9aW9uLWl0ZW17XG4gICAgaW9uLXJhZGlve1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/whistle/whistle.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/whistle/whistle.page.ts ***!
  \***********************************************/
/*! exports provided: WhistlePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhistlePage", function() { return WhistlePage; });
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

var WhistlePage = /** @class */ (function () {
    function WhistlePage() {
        this.defaultSelectedRadio = "radio_2";
        this.radio_list = [
            {
                id: '0',
                name: 'radio_list',
                value: '1',
                text: 'Report to CEO',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '1',
                name: 'radio_list',
                value: '2',
                text: 'Report to Board Chair',
                disabled: false,
                checked: false,
                color: 'secondary'
            }
        ];
    }
    WhistlePage.prototype.ngOnInit = function () {
    };
    WhistlePage.prototype.radioGroupChange = function (event) {
        console.log("radioGroupChange", event.detail);
        this.selectedRadioGroup = event.detail;
    };
    WhistlePage.prototype.radioFocus = function () {
        console.log("radioFocus");
    };
    WhistlePage.prototype.radioSelect = function (event) {
        console.log("radioSelect", event.detail);
        this.selectedRadioItem = event.detail;
    };
    WhistlePage.prototype.radioBlur = function () {
        console.log("radioBlur");
    };
    WhistlePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-whistle',
            template: __importDefault(__webpack_require__(/*! raw-loader!./whistle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/whistle/whistle.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./whistle.page.scss */ "./src/app/pages/whistle/whistle.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], WhistlePage);
    return WhistlePage;
}());



/***/ })

}]);
//# sourceMappingURL=whistle-whistle-module.js.map