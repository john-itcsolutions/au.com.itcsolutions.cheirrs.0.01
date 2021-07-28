(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administration-administration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/administration/administration.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/administration/administration.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons color=\"balance\" slot=\"start\">\n      <ion-menu-button color=\"tertiary\" ></ion-menu-button>\n    </ion-buttons>\n    <ion-text color=\"secondary\">\n    <ion-title><b>Administration</b></ion-title>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n  <ion-button disabled=\"true\" expand=\"block\" color=\"secondary\"></ion-button>\n  <ion-button expand=\"block\" color=\"tertiary\" routerLink={{{value}}} routerDirection=\"forward\">\n    Please Make Selection \n   </ion-button>\n \n  <ion-list>\n    <ion-radio-group\n      allow-empty-selection = \"true\"\n      name=\"radio-group\"\n      (ionChange)=\"radioGroupChange($event)\"\n    >\n      <ion-list-header>\n        <ion-label>Administration Menu</ion-label>\n      </ion-list-header>\n  \n      <ion-item \n      *ngFor=\"let item of radio_list\" \n      (ionFocus)=\"radioFocus()\"\n      (ionSelect)=\"radioSelect($event)\"\n      (ionBlur)=\"radioBlur()\"\n      >\n        <ion-label>{{item.text}}</ion-label>\n        <ion-radio \n        slot=\"start\" \n        name=\"{{item.name}}\" \n        value=\"{{item.value}}\" \n        checked=\"{{item.checked}}\" \n        color=\"{{item.color}}\" \n        disabled=\"{{item.disabled}}\"\n        ></ion-radio>\n      </ion-item>\n  \n    </ion-radio-group>\n  </ion-list>\n \n  <p><b>Radio Group Event</b><br/>\n    {{selectedRadioGroup | json}}</p>\n  <p><b>Radio Item Event</b><br/>\n    {{selectedRadioItem | json}}</p>\n\n    <ion-button expand=\"block\" color=\"tertiary\" routerLink={{{value}}} routerDirection=\"forward\">\n     Please Make Selection \n    </ion-button>\n    <ion-button disabled=\"true\" expand=\"block\" color=\"secondary\"></ion-button>\n    \n</ion-content>");

/***/ }),

/***/ "./src/app/pages/administration/administration.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/administration/administration.module.ts ***!
  \***************************************************************/
/*! exports provided: AdministrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationPageModule", function() { return AdministrationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _administration_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./administration.page */ "./src/app/pages/administration/administration.page.ts");
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
        component: _administration_page__WEBPACK_IMPORTED_MODULE_5__["AdministrationPage"]
    }
];
var AdministrationPageModule = /** @class */ (function () {
    function AdministrationPageModule() {
    }
    AdministrationPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_administration_page__WEBPACK_IMPORTED_MODULE_5__["AdministrationPage"]]
        })
    ], AdministrationPageModule);
    return AdministrationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/administration/administration.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/administration/administration.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item ion-label {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-datetime {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-input {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-textarea {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-radio-group {\n  border: solid 1px #662861;\n  border-radius: 5px; }\n\nion-item ion-radio {\n  border: solid 1px #662861;\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvaG9tZS9wb3N0Z3Jlcy9QdWJsaWMvYXUuY29tLml0Y3NvbHV0aW9ucy5jaGVpcnJzLjAuMDEvc3JjL2FwcC9wYWdlcy9hZG1pbmlzdHJhdGlvbi9hZG1pbmlzdHJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLGtCQUFrQixFQUFBOztBQUV6QjtFQUVPLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0Isa0JBQWtCLEVBQUE7O0FBRzFCO0VBRVEseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixtQkFBbUIsRUFBQTs7QUFFekI7RUFFTSx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLG1CQUFtQixFQUFBOztBQUV6QjtFQUVNLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFFeEI7RUFFTSx5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbmlzdHJhdGlvbi9hZG1pbmlzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXG4gICAgfVxufWlvbi1pdGVte1xuICAgIGlvbi1kYXRldGltZXtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgICB9XG59XG5pb24taXRlbXtcbiAgICBpb24taW5wdXR7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuIH1pb24taXRlbXtcbiAgICBpb24tdGV4dGFyZWF7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuIH1pb24taXRlbXtcbiAgICBpb24tcmFkaW8tZ3JvdXB7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gfWlvbi1pdGVte1xuICAgIGlvbi1yYWRpb3tcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/administration/administration.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/administration/administration.page.ts ***!
  \*************************************************************/
/*! exports provided: AdministrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationPage", function() { return AdministrationPage; });
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


var AdministrationPage = /** @class */ (function () {
    function AdministrationPage(any) {
        this.any = any;
        this.defaultSelectedRadio = "radio_list";
        this.radio_list = [
            {
                id: '0',
                name: 'radio_list',
                value: '/menu/administration/notifypropertyinspection',
                text: 'Arrange/Notify Property Inspection',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '1',
                name: 'radio_list',
                value: '/menu/administration/issuerentreceiptsadmin',
                text: 'Issue Rent Receipts',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '2',
                name: 'radio_list',
                value: '/menu/administration/correspondence',
                text: 'Correspondence',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '3',
                name: 'radio_list',
                value: '/menu/administration/employeeorsalesagentcontact',
                text: 'Employee or Sales Agent Contact',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '4',
                name: 'radio_list',
                value: '/menu/administration/employeeheaders',
                text: 'Employee Headers',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '5',
                name: 'radio_list',
                value: '/menu/administration/employeetransax',
                text: 'Employee Transactions',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '6',
                name: 'radio_list',
                value: '/menu/administration/ownercontact',
                text: 'Owner Contact',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '7',
                name: 'radio_list',
                value: '/menu/administration/ownerheader',
                text: 'Owner Header',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '8',
                name: 'radio_list',
                value: '/menu/administration/ownertxes',
                text: 'Owner Transactions',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '9',
                name: 'radio_list',
                value: '/menu/administration/partnercontact',
                text: 'Partner Contact',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '10',
                name: 'radio_list',
                value: '/menu/administration/partnerheaders',
                text: 'Partner Headers',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '11',
                name: 'radio_list',
                value: '/menu/administration/partnertxes',
                text: 'Partner Transactions',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '12',
                name: 'radio_list',
                value: '/menu/administration/suppliercontact',
                text: 'Supplier Contact',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '13',
                name: 'radio_list',
                value: '/menu/administration/supplierheaders',
                text: 'Supplier Headers',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '14',
                name: 'radio_list',
                value: '/menu/administration/suppliertxes',
                text: 'Supplier Transactions',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '15',
                name: 'radio_list',
                value: '/menu/administration/maintreq',
                text: 'Maintenance Request',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '16',
                name: 'radio_list',
                value: '/menu/administration/salescontact',
                text: 'Sales Contact',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '17',
                name: 'radio_list',
                value: '/menu/administration/buyercontact',
                text: 'Buyer Contact',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '18',
                name: 'radio_list',
                value: '/menu/administration/propertyheaders',
                text: 'Property Headers',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '19',
                name: 'radio_list',
                value: '/menu/administration/propertytx',
                text: 'Property Transactions',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '20',
                name: 'radio_list',
                value: '/menu/administration/customerheaders',
                text: 'Customer Headers',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '21',
                name: 'radio_list',
                value: '/menu/administration/custtransax',
                text: 'Customer Transactions',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '22',
                name: 'radio_list',
                value: '/menu/administration/employapplicantcontact',
                text: 'Employment Applicant Contact',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '23',
                name: 'radio_list',
                value: '/menu/administration/tenantcontact',
                text: 'Tenant Contact',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '24',
                name: 'radio_list',
                value: '/menu/administration/leaseapplicantcontact',
                text: 'Lease Applicant Contact',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '25',
                name: 'radio_list',
                value: '/menu/administration/auditorcontact',
                text: 'Auditor Contact',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '26',
                name: 'radio_list',
                value: '/menu/administration/communitycontact',
                text: 'Community Contact',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '27',
                name: 'radio_list',
                value: '/menu/administration/communityheaders',
                text: 'Community Headers',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '28',
                name: 'radio_list',
                value: '/menu/administration/communitytxes',
                text: 'Community Transactions',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '29',
                name: 'radio_list',
                value: '/menu/administration/mediacontact',
                text: 'Media Contact',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '30',
                name: 'radio_list',
                value: '/menu/administration/mediaheaders',
                text: 'Media Headers',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '31',
                name: 'radio_list',
                value: '/menu/administration/mediatxes',
                text: 'Media Transactions',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '32',
                name: 'radio_list',
                value: '/menu/administration/govcontact',
                text: 'Government Contact',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '33',
                name: 'radio_list',
                value: '/menu/administration/govheaders',
                text: 'Government Headers',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '34',
                name: 'radio_list',
                value: '/menu/administration/govtxes',
                text: 'Government Transactions',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '35',
                name: 'radio_list',
                value: '/menu/administration/customercomplaint',
                text: 'Customer Complaint',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '36',
                name: 'radio_list',
                value: '/menu/administration/llordinvestorcomplaint',
                text: 'Landlord/Investor Complaint',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '37',
                name: 'radio_list',
                value: '/menu/administration/leaseapplicantcomplaint',
                text: 'Lease Applicant Complaint',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '38',
                name: 'radio_list',
                value: '/menu/administration/employmentapplicantcomplaint',
                text: 'Employment Applicant Complaint',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '39',
                name: 'radio_list',
                value: '/menu/administration/tenantcomplaint',
                text: 'Tenant Complaint',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '40',
                name: 'radio_list',
                value: '/menu/administration/suppliercomplaint',
                text: 'Supplier Complaint',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '41',
                name: 'radio_list',
                value: '/menu/administration/supportpartnercomplaint',
                text: 'Support Partner Complaint',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '42',
                name: 'radio_list',
                value: '/menu/administration/governmentcomplaint',
                text: 'Government Complaint',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '43',
                name: 'radio_list',
                value: '/menu/administration/communitycomplaint',
                text: 'Community Complaint',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '44',
                name: 'radio_list',
                value: '/menu/administration/mediacomplaint',
                text: 'Media Complaint',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '45',
                name: 'radio_list',
                value: '/menu/administration/employeecomplaint',
                text: 'Employee Complaint',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '46',
                name: 'radio_list',
                value: '/menu/administration/maintenancecomplaint',
                text: 'Maintenance Complaint',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '47',
                name: 'radio_list',
                value: '/menu/administration/firstaidadmin',
                text: 'First Aid',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '48',
                name: 'radio_list',
                value: '/menu/administration/filingadmin',
                text: 'Filing',
                disabled: false,
                checked: false,
                color: 'primary'
            }
        ];
    }
    AdministrationPage.prototype.ngOnInit = function () {
    };
    AdministrationPage.prototype.radioGroupChange = function (event) {
        console.log("radioGroupChange", event.detail);
        this.selectedRadioGroup = event.detail;
    };
    AdministrationPage.prototype.radioFocus = function () {
        console.log("radioFocus");
    };
    AdministrationPage.prototype.radioSelect = function (event) {
        console.log("radioSelect", event.detail);
        this.selectedRadioItem = event.detail;
        if (this.selectedRadioItem.checked == true) {
            this.router.navigate(['this.selectedRadioItem.value']);
        }
        ;
    };
    AdministrationPage.prototype.radioBlur = function () {
        console.log("radioBlur");
    };
    AdministrationPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AdministrationPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-administration',
            template: __importDefault(__webpack_require__(/*! raw-loader!./administration.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/administration/administration.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./administration.page.scss */ "./src/app/pages/administration/administration.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdministrationPage);
    return AdministrationPage;
}());



/***/ })

}]);
//# sourceMappingURL=administration-administration-module.js.map