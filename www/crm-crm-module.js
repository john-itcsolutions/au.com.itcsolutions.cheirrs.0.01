(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crm-crm-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crm/crm.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crm/crm.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons color=\"balance\" slot=\"start\">\n      <ion-menu-button color=\"tertiary\" ></ion-menu-button>\n    </ion-buttons>\n    <ion-text color=\"secondary\">\n    <ion-title><b>Customer Relations Management</b></ion-title>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-button disabled=\"true\" expand=\"block\" color=\"secondary\"></ion-button>\n  <ion-button expand=\"block\" color=\"tertiary\" routerLink='/menu/crm/registerlead' routerDirection=\"forward\">\n    Please Make Selection \n   </ion-button>\n\n<ion-text color=\"primary\">\n  <ion-list>\n    <ion-radio-group\n      allow-empty-selection = \"true\"\n      name=\"radio-group\"\n      (ionChange)=\"radioGroupChange($event)\"\n    >\n      <ion-list-header>\n        <ion-label>CRM Menu</ion-label>\n      </ion-list-header>\n  \n      <ion-item \n      *ngFor=\"let item of radio_list\" \n      (ionFocus)=\"radioFocus()\"\n      (ionSelect)=\"radioSelect($event)\"\n      (ionBlur)=\"radioBlur()\"\n      >\n        <ion-label>{{item.text}}</ion-label>\n        <ion-radio \n        slot=\"start\" \n        name=\"{{item.name}}\" \n        value=\"{{item.value}}\"\n        checked=\"{{item.checked}}\" \n        color=\"{{item.color}}\" \n        disabled=\"{{item.disabled}}\"\n        ></ion-radio>\n      </ion-item>\n  \n    </ion-radio-group>\n  </ion-list>\n</ion-text>\n  <p><b>Radio Group Event</b><br/>\n    {{selectedRadioGroup | json}}</p>\n  <p><b>Radio Item Event</b><br/>\n    {{selectedRadioItem | json}}</p>\n    <ion-button expand=\"block\" color=\"tertiary\" routerLink='/menu/crm/registerlead' routerDirection=\"forward\">\n     Please Make Selection \n    </ion-button>\n    <ion-button disabled=\"true\" expand=\"block\" color=\"secondary\"></ion-button>\n     <router-outlet></router-outlet>\n  </ion-content>");

/***/ }),

/***/ "./src/app/pages/crm/crm.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/crm/crm.module.ts ***!
  \*****************************************/
/*! exports provided: CrmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmPageModule", function() { return CrmPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _crm_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crm.page */ "./src/app/pages/crm/crm.page.ts");
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
        component: _crm_page__WEBPACK_IMPORTED_MODULE_5__["CrmPage"]
    }
];
var CrmPageModule = /** @class */ (function () {
    function CrmPageModule() {
    }
    CrmPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_crm_page__WEBPACK_IMPORTED_MODULE_5__["CrmPage"]]
        })
    ], CrmPageModule);
    return CrmPageModule;
}());



/***/ }),

/***/ "./src/app/pages/crm/crm.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/crm/crm.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item ion-label {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-datetime {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-input {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-textarea {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-radio-group {\n  border: solid 1px #662861;\n  border-radius: 5px; }\n\nion-item ion-radio {\n  border: solid 1px #662861;\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvaG9tZS9wb3N0Z3Jlcy9QdWJsaWMvYXUuY29tLml0Y3NvbHV0aW9ucy5jaGVpcnJzLjAuMDEvc3JjL2FwcC9wYWdlcy9jcm0vY3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0Isa0JBQWtCLEVBQUE7O0FBRXpCO0VBRU8seUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixrQkFBa0IsRUFBQTs7QUFHMUI7RUFFUSx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLG1CQUFtQixFQUFBOztBQUV6QjtFQUVNLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsbUJBQW1CLEVBQUE7O0FBRXpCO0VBRU0seUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUV4QjtFQUVNLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NybS9jcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAjZjVjZmI1O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxuICAgIH1cbn1pb24taXRlbXtcbiAgICBpb24tZGF0ZXRpbWV7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXG4gICAgfVxufVxuaW9uLWl0ZW17XG4gICAgaW9uLWlucHV0e1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAjZjVjZmI1O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiB9aW9uLWl0ZW17XG4gICAgaW9uLXRleHRhcmVhe1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAjZjVjZmI1O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiB9aW9uLWl0ZW17XG4gICAgaW9uLXJhZGlvLWdyb3Vwe1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuIH1pb24taXRlbXtcbiAgICBpb24tcmFkaW97XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/crm/crm.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/crm/crm.page.ts ***!
  \***************************************/
/*! exports provided: CrmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmPage", function() { return CrmPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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


var CrmPage = /** @class */ (function () {
    function CrmPage(any) {
        this.any = any;
        this.defaultSelectedRadio = "Registercustomer";
        this.radio_list = [
            {
                id: '0',
                name: 'radio_list',
                value: '/menu/crm/tenantprivinterface',
                text: 'Tenant Private Interface',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '1',
                name: 'radio_list',
                value: '/menu/crm/registercustomer',
                text: 'Register Customer',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '2',
                name: 'radio_list',
                value: '/menu/crm/importregwebcustomer',
                text: 'Import & Register Web Customer',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '3',
                name: 'radio_list',
                value: '/menu/crm/searchcustomer',
                text: 'Search Customer Database',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '4',
                name: 'radio_list',
                value: '/menu/crm/searchcusttxes',
                text: 'Search Customer Transaction Database',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '5',
                name: 'radio_list',
                value: '/menu/crm/searchmatchbuyers',
                text: 'Search/Match Buyers to Properties',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '6',
                name: 'radio_list',
                value: '/menu/crm/searchsellers',
                text: 'Search Sellers',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '7',
                name: 'radio_list',
                value: '/menu/crm/searchownerscrm',
                text: 'Search Owners by Name or Property Address',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '8',
                name: 'radio_list',
                value: '/menu/crm/registerlead',
                text: 'Register Lead',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '9',
                name: 'radio_list',
                value: '/menu/crm/schmatchleadstoprops',
                text: 'Search/Match Leads to Properties',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '10',
                name: 'radio_list',
                value: '/menu/crm/schmchllordstotenants',
                text: 'Search/Match Landlords to Tenants',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '11',
                name: 'radio_list',
                value: '/menu/crm/schmtchinvestorstopropscrm',
                text: 'Search/Match Investors to Properties',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '12',
                name: 'radio_list',
                value: '/menu/crm/schmatchtenantstoprops',
                text: 'Search/Match Tenants to Properties',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '13',
                name: 'radio_list',
                value: '/menu/crm/advsignagecrm',
                text: 'Advertising & Signage',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '14',
                name: 'radio_list',
                value: '/menu/crm/marketnets',
                text: 'Marketing  to a Network',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '15',
                name: 'radio_list',
                value: '/menu/crm/openhouses',
                text: 'Open House Inspections Administration',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '16',
                name: 'radio_list',
                value: '/menu/crm/privateinspectionsadmincrm',
                text: 'Private Inspections Administration',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '17',
                name: 'radio_list',
                value: '/menu/crm/auctionsadmincrm',
                text: 'Auctions Administration',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '18',
                name: 'radio_list',
                value: '/menu/crm/supportagenciesandpartners',
                text: 'Support Agencies and Partners',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '19',
                name: 'radio_list',
                value: '/menu/crm/sharedequitycustomers',
                text: 'Shared Equity Customers',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '20',
                name: 'radio_list',
                value: '/menu/crm/customercomplaint',
                text: 'Customer Complaint',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '21',
                name: 'radio_list',
                value: '/menu/crm/filingcrm',
                text: 'Filing',
                disabled: false,
                checked: false,
                color: 'secondary'
            }
        ];
    }
    CrmPage.prototype.ngOnInit = function () {
    };
    CrmPage.prototype.radioGroupChange = function (event) {
        console.log("radioGroupChange", event.detail);
        this.selectedRadioGroup = event.detail;
    };
    CrmPage.prototype.radioFocus = function () {
        console.log("radioFocus");
    };
    CrmPage.prototype.radioSelect = function (event) {
        console.log("radioSelect", event.detail);
        this.selectedRadioItem = event.detail;
    };
    CrmPage.prototype.radioBlur = function () {
        console.log("radioBlur");
    };
    CrmPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    CrmPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crm',
            template: __importDefault(__webpack_require__(/*! raw-loader!./crm.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crm/crm.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./crm.page.scss */ "./src/app/pages/crm/crm.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CrmPage);
    return CrmPage;
}());



/***/ })

}]);
//# sourceMappingURL=crm-crm-module.js.map