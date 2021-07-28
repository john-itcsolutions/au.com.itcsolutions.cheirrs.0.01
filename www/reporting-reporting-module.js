(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reporting-reporting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reporting/reporting.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reporting/reporting.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons color=\"balance\" slot=\"start\">\n      <ion-menu-button color=\"tertiary\" ></ion-menu-button>\n    </ion-buttons>\n    <ion-text color=\"secondary\">\n    <ion-title><b>Reporting</b></ion-title>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n  <ion-button disabled=\"true\" expand=\"block\" color=\"secondary\"></ion-button>\n  <ion-button expand=\"block\" color=\"tertiary\" routerLink='/menu/reporting/reportingacctspayableauditing' routerDirection=\"forward\">\n    Please Make Selection \n   </ion-button>\n \n  <ion-list>\n    <ion-radio-group\n      allow-empty-selection = \"true\"\n      name=\"radio-group\"\n      (ionChange)=\"radioGroupChange($event)\"\n    >\n      <ion-list-header>\n        <ion-label>Reporting Menu</ion-label>\n      </ion-list-header>\n  \n      <ion-item \n      *ngFor=\"let item of radio_list\" \n      (ionFocus)=\"radioFocus()\"\n      (ionSelect)=\"radioSelect($event)\"\n      (ionBlur)=\"radioBlur()\"\n      >\n        <ion-label>{{item.text}}</ion-label>\n        <ion-radio \n        slot=\"start\" \n        name=\"{{item.name}}\" \n        value=\"{{item.value}}\" \n        checked=\"{{item.checked}}\" \n        color=\"{{item.color}}\" \n        disabled=\"{{item.disabled}}\"\n        ></ion-radio>\n      </ion-item>\n  \n    </ion-radio-group>\n  </ion-list>\n \n  <p><b>Radio Group Event</b><br/>\n    {{selectedRadioGroup | json}}</p>\n  <p><b>Radio Item Event</b><br/>\n    {{selectedRadioItem | json}}</p>\n\n    <ion-button expand=\"block\" color=\"tertiary\" routerLink='/menu/reporting/reportingacctspayableauditing' routerDirection=\"forward\">\n     Please Make Selection \n    </ion-button>\n    <ion-button disabled=\"true\" expand=\"block\" color=\"secondary\"></ion-button>\n    \n</ion-content>");

/***/ }),

/***/ "./src/app/pages/reporting/reporting.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/reporting/reporting.module.ts ***!
  \*****************************************************/
/*! exports provided: ReportingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingPageModule", function() { return ReportingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reporting_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reporting.page */ "./src/app/pages/reporting/reporting.page.ts");
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
        component: _reporting_page__WEBPACK_IMPORTED_MODULE_5__["ReportingPage"]
    }
];
var ReportingPageModule = /** @class */ (function () {
    function ReportingPageModule() {
    }
    ReportingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_reporting_page__WEBPACK_IMPORTED_MODULE_5__["ReportingPage"]]
        })
    ], ReportingPageModule);
    return ReportingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/reporting/reporting.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/reporting/reporting.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item ion-label {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-datetime {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-input {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-textarea {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-radio-group {\n  border: solid 1px #662861;\n  border-radius: 5px; }\n\nion-item ion-radio {\n  border: solid 1px #662861;\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvaG9tZS9wb3N0Z3Jlcy9QdWJsaWMvYXUuY29tLml0Y3NvbHV0aW9ucy5jaGVpcnJzLjAuMDEvc3JjL2FwcC9wYWdlcy9yZXBvcnRpbmcvcmVwb3J0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0Isa0JBQWtCLEVBQUE7O0FBRXpCO0VBRU8seUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixrQkFBa0IsRUFBQTs7QUFHMUI7RUFFUSx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLG1CQUFtQixFQUFBOztBQUV6QjtFQUVNLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsbUJBQW1CLEVBQUE7O0FBRXpCO0VBRU0seUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUV4QjtFQUVNLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcG9ydGluZy9yZXBvcnRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAjZjVjZmI1O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxuICAgIH1cbn1pb24taXRlbXtcbiAgICBpb24tZGF0ZXRpbWV7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXG4gICAgfVxufVxuaW9uLWl0ZW17XG4gICAgaW9uLWlucHV0e1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAjZjVjZmI1O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiB9aW9uLWl0ZW17XG4gICAgaW9uLXRleHRhcmVhe1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAjZjVjZmI1O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiB9aW9uLWl0ZW17XG4gICAgaW9uLXJhZGlvLWdyb3Vwe1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuIH1pb24taXRlbXtcbiAgICBpb24tcmFkaW97XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/reporting/reporting.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/reporting/reporting.page.ts ***!
  \***************************************************/
/*! exports provided: ReportingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingPage", function() { return ReportingPage; });
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

var ReportingPage = /** @class */ (function () {
    function ReportingPage() {
        this.defaultSelectedRadio = "radio_2";
        this.radio_list = [
            {
                id: '0',
                name: 'radio_list',
                value: '/menu/reporting/reportsinfiniflex',
                text: 'Multiflex Reporting',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '1',
                name: 'radio_list',
                value: '/menu/reporting/datasecurityanalysis',
                text: 'Third Party Data Security Report',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '2',
                name: 'radio_list',
                value: '/menu/reporting/profitlossreport',
                text: 'Profit and Loss Report',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '3',
                name: 'radio_list',
                value: '/menu/reporting/cashflowanalysisandreport',
                text: 'Cash Flow Analysis and Report',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '4',
                name: 'radio_list',
                value: '/menu/reporting/balancesheet',
                text: 'Balance Sheet',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '5',
                name: 'radio_list',
                value: '/menu/reporting/budgets',
                text: 'Budget Forecasts',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '6',
                name: 'radio_list',
                value: '/menu/reporting/trialbalancereporting',
                text: 'Trial Balance',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '7',
                name: 'radio_list',
                value: '/menu/reporting/tenantsledger',
                text: 'Tenants Ledger by Tenant or Address',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '8',
                name: 'radio_list',
                value: '/menu/reporting/arrearsbyaddressandtenant',
                text: 'Arrears and Non-Rent Debt by Address and Tenant',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '9',
                name: 'radio_list',
                value: '/menu/reporting/arrearsbyportfolio',
                text: 'Arrears and Non-Rent Debt by Portfolio',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '10',
                name: 'radio_list',
                value: '/menu/reporting/cyclicalrepairsbyproperty',
                text: 'Cyclical Repairs by Property',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '11',
                name: 'radio_list',
                value: '/menu/reporting/responsiverepairsbyproperty',
                text: 'Responsive Repairs by Property',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '12',
                name: 'radio_list',
                value: '/menu/reporting/propertyinspbyhousingmanager',
                text: 'Property Inspections by Housing Manager',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '13',
                name: 'radio_list',
                value: '/menu/reporting/leavetakenandowingperemployee',
                text: 'Leave Taken & Owing per Employee',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '14',
                name: 'radio_list',
                value: '/menu/reporting/reportstrategicplan',
                text: 'Strategic Plan (Report)',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '15',
                name: 'radio_list',
                value: '/menu/reporting/reportbusinessplan',
                text: 'Business Plan (Report)',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '16',
                name: 'radio_list',
                value: '/menu/reporting/reportoperationalplan',
                text: 'Operational Plan (Report)',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '17',
                name: 'radio_list',
                value: '/menu/reporting/riskmanagementplanreport',
                text: 'Risk Management Plan (Report)',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '18',
                name: 'radio_list',
                value: '/menu/reporting/emergingrisksreport',
                text: 'Emerging Risks Report',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '19',
                name: 'radio_list',
                value: '/menu/reporting/propertiesbycategory',
                text: 'Properties by Project/Class/Program',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '20',
                name: 'radio_list',
                value: '/menu/reporting/safetyincidents',
                text: 'Safety Incidents',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '21',
                name: 'radio_list',
                value: '/menu/reporting/incomeexpensebybranch',
                text: 'Income & Expense by Branch',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '22',
                name: 'radio_list',
                value: '/menu/reporting/incomeexpensebypropprogram',
                text: 'Income & Expense by Property Program',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '23',
                name: 'radio_list',
                value: '/menu/reporting/incomeexpensebypropclass',
                text: 'Income & Expense by Property Class',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '24',
                name: 'radio_list',
                value: '/menu/reporting/reportingwhsauditing',
                text: 'Work Health & Safety Auditing Report',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '25',
                name: 'radio_list',
                value: '/menu/reporting/reportingacctspayableauditing',
                text: 'Accounts Payable Auditing Report',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '26',
                name: 'radio_list',
                value: '/menu/reporting/reportingacctsrecvableauditing',
                text: 'Accounts Receivable Auditing Report',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '27',
                name: 'radio_list',
                value: '/menu/reporting/vacantsvoidsreport',
                text: 'Vacants & Voids Report',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '28',
                name: 'radio_list',
                value: '/menu/reporting/reportceomultiflex',
                text: 'CEO Multiflex Report',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '29',
                name: 'radio_list',
                value: '/menu/reporting/reportcfomultiflex',
                text: 'CFO Multiflex Report',
                disabled: false,
                checked: false,
                color: 'secondary'
            }
        ];
    }
    ReportingPage.prototype.ngOnInit = function () {
    };
    ReportingPage.prototype.radioGroupChange = function (event) {
        console.log("radioGroupChange", event.detail);
        this.selectedRadioGroup = event.detail;
    };
    ReportingPage.prototype.radioFocus = function () {
        console.log("radioFocus");
    };
    ReportingPage.prototype.radioSelect = function (event) {
        console.log("radioSelect", event.detail);
        this.selectedRadioItem = event.detail;
    };
    ReportingPage.prototype.radioBlur = function () {
        console.log("radioBlur");
    };
    ReportingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reporting',
            template: __importDefault(__webpack_require__(/*! raw-loader!./reporting.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reporting/reporting.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./reporting.page.scss */ "./src/app/pages/reporting/reporting.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ReportingPage);
    return ReportingPage;
}());



/***/ })

}]);
//# sourceMappingURL=reporting-reporting-module.js.map