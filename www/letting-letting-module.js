(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["letting-letting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/letting/letting.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/letting/letting.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons color=\"balance\" slot=\"start\">\n      <ion-menu-button color=\"tertiary\" ></ion-menu-button>\n    </ion-buttons>\n    <ion-text color=\"secondary\">\n    <ion-title><b>Leasing</b></ion-title>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n  <ion-button disabled=\"true\" expand=\"block\" color=\"secondary\"></ion-button>\n  <ion-button expand=\"block\" color=\"tertiary\" routerLink='/menu/letting/registeragreementtolet' routerDirection=\"forward\">\n    Please Make Selection \n   </ion-button>\n \n  <ion-list>\n    <ion-radio-group\n      allow-empty-selection = \"true\"\n      name=\"radio-group\"\n      (ionChange)=\"radioGroupChange($event)\"\n    >\n      <ion-list-header>\n        <ion-label>Leasing Menu</ion-label>\n      </ion-list-header>\n  \n      <ion-item \n      *ngFor=\"let item of radio_list\" \n      (ionFocus)=\"radioFocus()\"\n      (ionSelect)=\"radioSelect($event)\"\n      (ionBlur)=\"radioBlur()\"\n      >\n        <ion-label>{{item.text}}</ion-label>\n        <ion-radio \n        slot=\"start\" \n        name=\"{{item.name}}\" \n        value=\"{{item.value}}\" \n        checked=\"{{item.checked}}\" \n        color=\"{{item.color}}\" \n        disabled=\"{{item.disabled}}\"\n        ></ion-radio>\n      </ion-item>\n  \n    </ion-radio-group>\n  </ion-list>\n \n  <p><b>Radio Group Event</b><br/>\n    {{selectedRadioGroup | json}}</p>\n  <p><b>Radio Item Event</b><br/>\n    {{selectedRadioItem | json}}</p>\n\n    <ion-button expand=\"block\" color=\"tertiary\" routerLink='/menu/letting/registeragreementtolet' routerDirection=\"forward\">\n     Please Make Selection \n    </ion-button>\n    <ion-button disabled=\"true\" expand=\"block\" color=\"secondary\"></ion-button>\n   \n</ion-content>");

/***/ }),

/***/ "./src/app/pages/letting/letting.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/letting/letting.module.ts ***!
  \*************************************************/
/*! exports provided: LettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettingPageModule", function() { return LettingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _letting_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./letting.page */ "./src/app/pages/letting/letting.page.ts");
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
        component: _letting_page__WEBPACK_IMPORTED_MODULE_5__["LettingPage"]
    }
];
var LettingPageModule = /** @class */ (function () {
    function LettingPageModule() {
    }
    LettingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_letting_page__WEBPACK_IMPORTED_MODULE_5__["LettingPage"]]
        })
    ], LettingPageModule);
    return LettingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/letting/letting.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/letting/letting.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item ion-label {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-datetime {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-input {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-textarea {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-radio-group {\n  border: solid 1px #662861;\n  border-radius: 5px; }\n\nion-item ion-radio {\n  border: solid 1px #662861;\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvaG9tZS9wb3N0Z3Jlcy9QdWJsaWMvYXUuY29tLml0Y3NvbHV0aW9ucy5jaGVpcnJzLjAuMDEvc3JjL2FwcC9wYWdlcy9sZXR0aW5nL2xldHRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixrQkFBa0IsRUFBQTs7QUFFekI7RUFFTyx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLGtCQUFrQixFQUFBOztBQUcxQjtFQUVRLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsbUJBQW1CLEVBQUE7O0FBRXpCO0VBRU0seUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixtQkFBbUIsRUFBQTs7QUFFekI7RUFFTSx5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBRXhCO0VBRU0seUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGV0dGluZy9sZXR0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgICB9XG59aW9uLWl0ZW17XG4gICAgaW9uLWRhdGV0aW1le1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAjZjVjZmI1O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxuICAgIH1cbn1cbmlvbi1pdGVte1xuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gfWlvbi1pdGVte1xuICAgIGlvbi10ZXh0YXJlYXtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gfWlvbi1pdGVte1xuICAgIGlvbi1yYWRpby1ncm91cHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiB9aW9uLWl0ZW17XG4gICAgaW9uLXJhZGlve1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiB9Il19 */");

/***/ }),

/***/ "./src/app/pages/letting/letting.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/letting/letting.page.ts ***!
  \***********************************************/
/*! exports provided: LettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettingPage", function() { return LettingPage; });
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

var LettingPage = /** @class */ (function () {
    function LettingPage() {
        this.defaultSelectedRadio = "radio_2";
        this.radio_list = [
            {
                id: '0',
                name: 'radio_list',
                value: '/menu/letting/importregproptoletletting',
                text: 'Import & Register Property to Let',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '1',
                name: 'radio_list',
                value: '/menu/letting/registeragreementtoletletting',
                text: 'Register Letting Agreement Type',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '2',
                name: 'radio_list',
                value: '/menu/letting/searchpropsletting',
                text: 'Search Properties',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '3',
                name: 'radio_list',
                value: '/menu/letting/searchproptxletting',
                text: 'Search Property Transactions',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '4',
                name: 'radio_list',
                value: '/menu/letting/searchownersletting',
                text: 'Search Owners by Name or Property Address',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '5',
                name: 'radio_list',
                value: '/menu/letting/searchrepairsmainthistbypropletting',
                text: 'Search Repairs & Maintenance Histories of Properties',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '6',
                name: 'radio_list',
                value: '/menu/letting/searchextenantsofproperty',
                text: 'Search ex-Tenants of Property',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '7',
                name: 'radio_list',
                value: '/menu/letting/regapplicationforlease',
                text: 'Register Application for Lease',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '8',
                name: 'radio_list',
                value: '/menu/letting/accessanddemand',
                text: 'Access and Demand',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '9',
                name: 'radio_list',
                value: '/menu/letting/checkapplicantsbackgroundbyproperty',
                text: 'Check Applicants',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '10',
                name: 'radio_list',
                value: '/menu/letting/allocations',
                text: 'Allocations',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '11',
                name: 'radio_list',
                value: '/menu/letting/offertotenant',
                text: 'Make Offer to Lease Applicant',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '12',
                name: 'radio_list',
                value: '/menu/letting/signlease',
                text: 'Sign Lease for Rental of Property',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '13',
                name: 'radio_list',
                value: '/menu/letting/chargebondandrentinadvance',
                text: 'Charge Bond & Rent in Advance',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '14',
                name: 'radio_list',
                value: '/menu/letting/receivebondandrent',
                text: 'Receive Bond & Rent',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '15',
                name: 'radio_list',
                value: '/menu/letting/issuebondrentreceipts',
                text: 'Issue Initial Bond & Rent Receipts',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '16',
                name: 'radio_list',
                value: '/menu/letting/setuprentcharging',
                text: 'Set Up Regular Rent Charging',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '17',
                name: 'radio_list',
                value: '/menu/letting/issuerentreceipts',
                text: 'Issue Rent Receipts',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '18',
                name: 'radio_list',
                value: '/menu/letting/keyregisterletting',
                text: 'Key Register',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '19',
                name: 'radio_list',
                value: '/menu/letting/leaseapplicantcomplaint',
                text: 'Lease Applicant Complaint',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '20',
                name: 'radio_list',
                value: '/menu/letting/filingletting',
                text: 'Filing',
                disabled: false,
                checked: false,
                color: 'primary'
            }
        ];
    }
    LettingPage.prototype.ngOnInit = function () {
    };
    LettingPage.prototype.radioGroupChange = function (event) {
        console.log("radioGroupChange", event.detail);
        this.selectedRadioGroup = event.detail;
    };
    LettingPage.prototype.radioFocus = function () {
        console.log("radioFocus");
    };
    LettingPage.prototype.radioSelect = function (event) {
        console.log("radioSelect", event.detail);
        this.selectedRadioItem = event.detail;
    };
    LettingPage.prototype.radioBlur = function () {
        console.log("radioBlur");
    };
    LettingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-letting',
            template: __importDefault(__webpack_require__(/*! raw-loader!./letting.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/letting/letting.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./letting.page.scss */ "./src/app/pages/letting/letting.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], LettingPage);
    return LettingPage;
}());



/***/ })

}]);
//# sourceMappingURL=letting-letting-module.js.map