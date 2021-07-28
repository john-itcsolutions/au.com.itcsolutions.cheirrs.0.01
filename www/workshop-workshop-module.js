(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workshop-workshop-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workshop/workshop.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workshop/workshop.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons color=\"balance\" slot=\"start\">\n      <ion-menu-button color=\"tertiary\" ></ion-menu-button>\n    </ion-buttons>\n    <ion-text color=\"secondary\">\n    <ion-title><b>Workshop</b></ion-title>\n    </ion-text>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n  <ion-button disabled=\"true\" expand=\"block\" color=\"secondary\"></ion-button>\n  <ion-button expand=\"block\" color=\"tertiary\" routerLink='/menu/workshop/workshopjobs' routerDirection=\"forward\">\n    Please Make Selection \n   </ion-button>\n \n  <ion-list>\n    <ion-radio-group\n      allow-empty-selection = \"true\"\n      name=\"radio-group\"\n      (ionChange)=\"radioGroupChange($event)\"\n    >\n      <ion-list-header>\n        <ion-label>Workshop Menu</ion-label>\n      </ion-list-header>\n  \n      <ion-item \n      *ngFor=\"let item of radio_list\" \n      (ionFocus)=\"radioFocus()\"\n      (ionSelect)=\"radioSelect($event)\"\n      (ionBlur)=\"radioBlur()\"\n      >\n        <ion-label>{{item.text}}</ion-label>\n        <ion-radio \n        slot=\"start\" \n        name=\"{{item.name}}\" \n        value=\"{{item.value}}\" \n        checked=\"{{item.checked}}\" \n        color=\"{{item.color}}\" \n        disabled=\"{{item.disabled}}\"\n        ></ion-radio>\n      </ion-item>\n  \n    </ion-radio-group>\n  </ion-list>\n \n  <p><b>Radio Group Event</b><br/>\n    {{selectedRadioGroup | json}}</p>\n  <p><b>Radio Item Event</b><br/>\n    {{selectedRadioItem | json}}</p>\n\n    <ion-button expand=\"block\" color=\"tertiary\" routerLink='/menu/workshop/workshopjobs' routerDirection=\"forward\">\n     Please Make Selection \n    </ion-button>\n    <ion-button disabled=\"true\" expand=\"block\" color=\"secondary\"></ion-button>\n    \n  </ion-content>");

/***/ }),

/***/ "./src/app/pages/workshop/workshop.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/workshop/workshop.module.ts ***!
  \***************************************************/
/*! exports provided: WorkshopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkshopPageModule", function() { return WorkshopPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _workshop_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workshop.page */ "./src/app/pages/workshop/workshop.page.ts");
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
        component: _workshop_page__WEBPACK_IMPORTED_MODULE_5__["WorkshopPage"]
    }
];
var WorkshopPageModule = /** @class */ (function () {
    function WorkshopPageModule() {
    }
    WorkshopPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_workshop_page__WEBPACK_IMPORTED_MODULE_5__["WorkshopPage"]]
        })
    ], WorkshopPageModule);
    return WorkshopPageModule;
}());



/***/ }),

/***/ "./src/app/pages/workshop/workshop.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/workshop/workshop.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item ion-label {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-datetime {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-input {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-textarea {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-radio-group {\n  border: solid 1px #662861;\n  border-radius: 5px; }\n\nion-item ion-radio {\n  border: solid 1px #662861;\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvaG9tZS9wb3N0Z3Jlcy9QdWJsaWMvYXUuY29tLml0Y3NvbHV0aW9ucy5jaGVpcnJzLjAuMDEvc3JjL2FwcC9wYWdlcy93b3Jrc2hvcC93b3Jrc2hvcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLGtCQUFrQixFQUFBOztBQUV6QjtFQUVPLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0Isa0JBQWtCLEVBQUE7O0FBRzFCO0VBRVEseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixtQkFBbUIsRUFBQTs7QUFFekI7RUFFTSx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLG1CQUFtQixFQUFBOztBQUV6QjtFQUVNLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFFeEI7RUFFTSx5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93b3Jrc2hvcC93b3Jrc2hvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXG4gICAgfVxufWlvbi1pdGVte1xuICAgIGlvbi1kYXRldGltZXtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgICB9XG59XG5pb24taXRlbXtcbiAgICBpb24taW5wdXR7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuIH1pb24taXRlbXtcbiAgICBpb24tdGV4dGFyZWF7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuIH1pb24taXRlbXtcbiAgICBpb24tcmFkaW8tZ3JvdXB7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gfWlvbi1pdGVte1xuICAgIGlvbi1yYWRpb3tcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/workshop/workshop.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/workshop/workshop.page.ts ***!
  \*************************************************/
/*! exports provided: WorkshopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkshopPage", function() { return WorkshopPage; });
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

var WorkshopPage = /** @class */ (function () {
    function WorkshopPage() {
        this.defaultSelectedRadio = "radio_2";
        this.radio_list = [
            {
                id: '0',
                name: 'radio_list',
                value: '/menu/workshop/workshopjobs',
                text: 'Current Jobs',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '1',
                name: 'radio_list',
                value: '/menu/workshop/workshopitems',
                text: 'Inventory Items (incl Tools)',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '2',
                name: 'radio_list',
                value: '/menu/workshop/workshopassembliestoplevel',
                text: 'Top Level Assemblies - eg entire housing unit',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '3',
                name: 'radio_list',
                value: '/menu/workshop/workshopassembliessecondlevel',
                text: 'Second Level Assemblies',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '4',
                name: 'radio_list',
                value: '/menu/workshop/workshopassembliethirdlevel',
                text: 'Third Level Assemblies',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '5',
                name: 'radio_list',
                value: '/menu/workshop/workshopassembliefourthlevel',
                text: 'Fourth Level Assemblies',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '6',
                name: 'radio_list',
                value: '/menu/workshop/workshopassembliefifthlevel',
                text: 'Fifth Level Assemblies',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '5',
                name: 'radio_list',
                value: '/menu/workshop/workshopassembliesixthlevel',
                text: 'Sixth Level Assemblies',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '6',
                name: 'radio_list',
                value: '/menu/workshop/workshopengineeringanddesign',
                text: 'Engineering and Design',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '7',
                name: 'radio_list',
                value: '/menu/workshop/workshopordersrec',
                text: 'Orders Received',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '8',
                name: 'radio_list',
                value: '/menu/workshop/workshoppurchreq',
                text: 'Purchase Requests',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '9',
                name: 'radio_list',
                value: '/menu/workshop/workshoppurchorders',
                text: 'Purchase Orders',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '10',
                name: 'radio_list',
                value: '/menu/workshop/workshopfirstaid',
                text: 'First Aid',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '11',
                name: 'radio_list',
                value: '/menu/workshop/workshopqualassurance',
                text: 'Quality Assurance',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '12',
                name: 'radio_list',
                value: '/menu/workshop/workshopteamboards',
                text: 'Teamboards',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '13',
                name: 'radio_list',
                value: '/menu/workshop/workshopprodschedules',
                text: 'Production Schedules',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '14',
                name: 'radio_list',
                value: '/menu/workshop/workshopproductionrequirements',
                text: 'Production Requirements: Jobs and Items (Requ Templates + Customised Requ)',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '15',
                name: 'radio_list',
                value: '/menu/workshop/workshoptrackshipmentsin',
                text: 'Track Inbound Shipments',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '16',
                name: 'radio_list',
                value: '/menu/workshop/workshoptrackshipmentsout',
                text: 'Track Outbound Shipments',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '17',
                name: 'radio_list',
                value: '/menu/workshop/workshopprocesses',
                text: 'Safe Workshop Processes',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '18',
                name: 'radio_list',
                value: '/menu/workshop/workshopinventory',
                text: 'Inventory Control',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '19',
                name: 'radio_list',
                value: '/menu/workshop/factorymaintenance',
                text: 'Factory Maintenance',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '20',
                name: 'radio_list',
                value: '/menu/workshop/productcomplaintsrecd',
                text: 'Product Complaints Received',
                disabled: false,
                checked: false,
                color: 'primary'
            }, {
                id: '21',
                name: 'radio_list',
                value: '/menu/workshop/productcomplaintstosupplier',
                text: 'Product Complaints to Supplier',
                disabled: false,
                checked: false,
                color: 'secondary'
            }, {
                id: '22',
                name: 'radio_list',
                value: '/menu/workshop/filingwkshp',
                text: 'Filing',
                disabled: false,
                checked: false,
                color: 'primary'
            }
        ];
    }
    WorkshopPage.prototype.ngOnInit = function () {
    };
    WorkshopPage.prototype.radioGroupChange = function (event) {
        console.log("radioGroupChange", event.detail);
        this.selectedRadioGroup = event.detail;
    };
    WorkshopPage.prototype.radioFocus = function () {
        console.log("radioFocus");
    };
    WorkshopPage.prototype.radioSelect = function (event) {
        console.log("radioSelect", event.detail);
        this.selectedRadioItem = event.detail;
    };
    WorkshopPage.prototype.radioBlur = function () {
        console.log("radioBlur");
    };
    WorkshopPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workshop',
            template: __importDefault(__webpack_require__(/*! raw-loader!./workshop.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workshop/workshop.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./workshop.page.scss */ "./src/app/pages/workshop/workshop.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], WorkshopPage);
    return WorkshopPage;
}());



/***/ })

}]);
//# sourceMappingURL=workshop-workshop-module.js.map