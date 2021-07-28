(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assetmngmnt-assetmngmnt-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assetmngmnt/assetmngmnt.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assetmngmnt/assetmngmnt.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons color=\"balance\" slot=\"start\">\n      <ion-menu-button color=\"tertiary\" ></ion-menu-button>\n    </ion-buttons>\n    <ion-text color=\"secondary\">\n    <ion-title><b>Asset Management</b></ion-title>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n  <ion-button disabled=\"true\" expand=\"block\" color=\"secondary\"></ion-button>\n  <ion-button expand=\"block\" color=\"tertiary\" routerLink=\"/menu/assetmngmnt/maintenancecomplaint\" routerDirection=\"forward\">\n    Please Make Selection \n   </ion-button>\n \n  <ion-list>\n    <ion-radio-group\n      allow-empty-selection = \"true\"\n      name=\"radio-group\"\n      (ionChange)=\"radioGroupChange($event)\"\n    >\n      <ion-list-header>\n        <ion-label>Asset Management Menu</ion-label>\n      </ion-list-header>\n  \n      <ion-item \n      *ngFor=\"let item of radio_list\" \n      (ionFocus)=\"radioFocus()\"\n      (ionSelect)=\"radioSelect($event)\"\n      (ionBlur)=\"radioBlur()\"\n      >\n        <ion-label>{{item.text}}</ion-label>\n        <ion-radio \n        slot=\"start\" \n        name=\"{{item.name}}\" \n        value=\"{{item.value}}\" \n        checked=\"{{item.checked}}\" \n        color=\"{{item.color}}\" \n        disabled=\"{{item.disabled}}\"\n        ></ion-radio>\n      </ion-item>\n  \n    </ion-radio-group>\n  </ion-list>\n \n  <p><b>Radio Group Event</b><br/>\n    {{selectedRadioGroup | json}}</p>\n  <p><b>Radio Item Event</b><br/>\n    {{selectedRadioItem | json}}</p>\n\n    <ion-button expand=\"block\" color=\"tertiary\" routerLink=\"/menu/assetmngmnt/maintenancecomplaint\" routerDirection=\"forward\">\n     Please Make Selection \n    </ion-button>\n    <ion-button disabled=\"true\" expand=\"block\" color=\"secondary\"></ion-button>\n    \n</ion-content>");

/***/ }),

/***/ "./src/app/pages/assetmngmnt/assetmngmnt.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/assetmngmnt/assetmngmnt.module.ts ***!
  \*********************************************************/
/*! exports provided: AssetmngmntPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetmngmntPageModule", function() { return AssetmngmntPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _assetmngmnt_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assetmngmnt.page */ "./src/app/pages/assetmngmnt/assetmngmnt.page.ts");
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
        component: _assetmngmnt_page__WEBPACK_IMPORTED_MODULE_5__["AssetmngmntPage"]
    }
];
var AssetmngmntPageModule = /** @class */ (function () {
    function AssetmngmntPageModule() {
    }
    AssetmngmntPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_assetmngmnt_page__WEBPACK_IMPORTED_MODULE_5__["AssetmngmntPage"]]
        })
    ], AssetmngmntPageModule);
    return AssetmngmntPageModule;
}());



/***/ }),

/***/ "./src/app/pages/assetmngmnt/assetmngmnt.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/assetmngmnt/assetmngmnt.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item ion-label {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-datetime {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-input {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-textarea {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-radio-group {\n  border: solid 1px #662861;\n  border-radius: 5px; }\n\nion-item ion-radio {\n  border: solid 1px #662861;\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvaG9tZS9wb3N0Z3Jlcy9QdWJsaWMvYXUuY29tLml0Y3NvbHV0aW9ucy5jaGVpcnJzLjAuMDEvc3JjL2FwcC9wYWdlcy9hc3NldG1uZ21udC9hc3NldG1uZ21udC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLGtCQUFrQixFQUFBOztBQUV6QjtFQUVPLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0Isa0JBQWtCLEVBQUE7O0FBRzFCO0VBRVEseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixtQkFBbUIsRUFBQTs7QUFFekI7RUFFTSx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLG1CQUFtQixFQUFBOztBQUV6QjtFQUVNLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFFeEI7RUFFTSx5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hc3NldG1uZ21udC9hc3NldG1uZ21udC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXG4gICAgfVxufWlvbi1pdGVte1xuICAgIGlvbi1kYXRldGltZXtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgICB9XG59XG5pb24taXRlbXtcbiAgICBpb24taW5wdXR7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuIH1pb24taXRlbXtcbiAgICBpb24tdGV4dGFyZWF7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuIH1pb24taXRlbXtcbiAgICBpb24tcmFkaW8tZ3JvdXB7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gfWlvbi1pdGVte1xuICAgIGlvbi1yYWRpb3tcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/assetmngmnt/assetmngmnt.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/assetmngmnt/assetmngmnt.page.ts ***!
  \*******************************************************/
/*! exports provided: AssetmngmntPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetmngmntPage", function() { return AssetmngmntPage; });
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


var AssetmngmntPage = /** @class */ (function () {
    function AssetmngmntPage(any) {
        this.any = any;
        this.defaultSelectedRadio = "radio_list";
        this.radio_list = [
            {
                id: '0',
                name: 'radio_list',
                value: '/menu/assetmngmnt/rollingassetmaintbudgets',
                text: 'Rolling Asset Maintenance Budgets',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '1',
                name: 'radio_list',
                value: '/menu/assetmngmnt/maintenancescheduling',
                text: 'Maintenance Scheduling',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '2',
                name: 'radio_list',
                value: '/menu/assetmngmnt/propertyinspections',
                text: 'Property Inspections',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '3',
                name: 'radio_list',
                value: '/menu/assetmngmnt/summaryofpropertyissuesbyprop',
                text: 'Summary of Property Issues by Property',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '4',
                name: 'radio_list',
                value: '/menu/assetmngmnt/searchpropsassets',
                text: 'Search Properties',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '5',
                name: 'radio_list',
                value: '/menu/assetmngmnt/searchproptxesassets',
                text: 'Search Property Transactions',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '6',
                name: 'radio_list',
                value: '/menu/assetmngmnt/searchownersassets',
                text: 'Search Owners of Properties',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '7',
                name: 'radio_list',
                value: '/menu/assetmngmnt/searchrepmainthistbypropassets',
                text: 'Search Repairs & Maintenance Histories of Properties',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '8',
                name: 'radio_list',
                value: '/menu/assetmngmnt/searchtenantsbypropassets',
                text: 'Search Tenants by Property',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '9',
                name: 'radio_list',
                value: '/menu/assetmngmnt/searchacctrecordsbypropassets',
                text: 'Search Accounts Records by Property',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '10',
                name: 'radio_list',
                value: '/menu/assetmngmnt/searchdocsbypropassets',
                text: 'Search Documents by Property',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '11',
                name: 'radio_list',
                value: '/menu/assetmngmnt/maintreq',
                text: 'Receive Maintenance Request',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '12',
                name: 'radio_list',
                value: '/menu/assetmngmnt/issuemaintrequest',
                text: 'Issue Maintenance Request',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '13',
                name: 'radio_list',
                value: '/menu/assetmngmnt/searchsuppliersassets',
                text: 'Search Suppliers',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '14',
                name: 'radio_list',
                value: '/menu/assetmngmnt/gathermaintenancequotes',
                text: 'Gather Quotes for Maintenance',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '15',
                name: 'radio_list',
                value: '/menu/assetmngmnt/currentmaintquotes',
                text: 'Current Maintenance Quotes',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '16',
                name: 'radio_list',
                value: '/menu/assetmngmnt/proposemaintsupplier',
                text: 'Propose Supplier for Maintenance',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '17',
                name: 'radio_list',
                value: '/menu/assetmngmnt/issuepurchorder',
                text: 'Issue Purchase Order',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '18',
                name: 'radio_list',
                value: '/menu/assetmngmnt/inspectwork',
                text: 'Inspect Maintenance Work',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '19',
                name: 'radio_list',
                value: '/menu/assetmngmnt/receivebillformaintworkassets',
                text: 'Receive Bill for Maintenance on Property',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '20',
                name: 'radio_list',
                value: '/menu/assetmngmnt/paybillformaintworkassets',
                text: 'Pay Bill for Maintenance on Property',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '21',
                name: 'radio_list',
                value: '/menu/assetmngmnt/complaintaboutmaintenancedone',
                text: 'Complaints About Maintenance Performed',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '22',
                name: 'radio_list',
                value: '/menu/assetmngmnt/registervacantorvoid',
                text: 'Register Vacant or Void Property',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '23',
                name: 'radio_list',
                value: '/menu/assetmngmnt/vacantsandvoids',
                text: 'Vacants and Voids',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '24',
                name: 'radio_list',
                value: '/menu/assetmngmnt/cleanupvacatedproperty',
                text: 'Cleanup Vacated Property - Charge Against Bond',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '25',
                name: 'radio_list',
                value: '/menu/assetmngmnt/supplierheadersassets',
                text: 'Supplier Headers',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '26',
                name: 'radio_list',
                value: '/menu/assetmngmnt/suppliertxassets',
                text: 'Supplier Transactions',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '27',
                name: 'radio_list',
                value: '/menu/assetmngmnt/keyregisterassets',
                text: 'Key Register',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '28',
                name: 'radio_list',
                value: '/menu/assetmngmnt/maintenancecomplaint',
                text: 'Maintenance Not Done Complaints',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '29',
                name: 'radio_list',
                value: '/menu/assetmngmnt/filingassets',
                text: 'Filing',
                disabled: false,
                checked: false,
                color: 'secondary'
            }
        ];
    }
    AssetmngmntPage.prototype.ngOnInit = function () {
    };
    AssetmngmntPage.prototype.radioGroupChange = function (event) {
        console.log("radioGroupChange", event.detail);
        this.selectedRadioGroup = event.detail;
    };
    AssetmngmntPage.prototype.radioFocus = function () {
        console.log("radioFocus");
    };
    AssetmngmntPage.prototype.radioSelect = function (event) {
        console.log("radioSelect", event.detail);
        this.selectedRadioItem = event.detail;
        if (this.selectedRadioItem.checked == true) {
            this.router.navigate(['this.selectedRadioItem.value']);
        }
        ;
    };
    AssetmngmntPage.prototype.radioBlur = function () {
        console.log("radioBlur");
    };
    AssetmngmntPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AssetmngmntPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assetmngmnt',
            template: __importDefault(__webpack_require__(/*! raw-loader!./assetmngmnt.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assetmngmnt/assetmngmnt.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./assetmngmnt.page.scss */ "./src/app/pages/assetmngmnt/assetmngmnt.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AssetmngmntPage);
    return AssetmngmntPage;
}());



/***/ })

}]);
//# sourceMappingURL=assetmngmnt-assetmngmnt-module.js.map