(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-help-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/help/help.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/help/help.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Help @ IT Cloud Solutions Australia                                                                                                                                                                </ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding><ion-text color=\"primary\">Please search the Frequently Asked Questions page to find a quick possible solution for your problem.<br>It is recommended to use a minimum of keywords (single word or phrase)!\n</ion-text>\n  <ion-item>\n    <ion-button color=\"primary\">Search FAQ</ion-button>\n    &nbsp;&nbsp;\n    <ion-searchbar></ion-searchbar>\n  </ion-item>\n<ion-text color=\"secondary\">\n  <b>Or you can directly view the FAQ list here:</b>\n</ion-text>\n  <ion-item>\n    <ion-button color=\"secondary\">See FAQ List</ion-button>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ion-icon name=\"glasses\"></ion-icon>\n  </ion-item>\n    <div class = \"button button-stable\">\n      <ion-item>\n        <ion-button color=\"tertiary\">Documentation</ion-button>\n        &nbsp;&nbsp;<ion-icon name=\"book\"></ion-icon>\n        <ion-searchbar></ion-searchbar>\n      </ion-item>\n    </div>\n    <ion-text color=\"tertiary\">\n  <br>Alternatively you may submit an Ezy Tech Support Ticket here.<br> We will attend to you according to the priorities of our<br>Service Level Agreement with your company<br>and the severity of the problem.\n</ion-text>\n  <ion-item>\n    <ion-icon name=\"information-circle-outline\" color=\"tertiary\"></ion-icon>\n    <ion-textarea rows=\"4\" cols=\"75\" placeholder=\"Have you tried turning your device off and then on again? (Please do so)\"></ion-textarea><br>\n  </ion-item>\n  <ion-item>\n        <ion-icon name=\"information-circle-outline\" color=\"tertiary\"></ion-icon>\n    <ion-textarea rows=\"4\" cols=\"75\" placeholder=\"Please quote device manufacturer and full model ID (not serial number). Not applicable if problem is broader than one device class.\"></ion-textarea><br>\n  </ion-item>\n  <ion-item>\n    <ion-icon name=\"information-circle-outline\" color=\"tertiary\"></ion-icon>\n    <ion-textarea rows=\"8\" cols=\"100\" placeholder=\"Is there more than one device involved? Do all devices or only some seem to be involved? Is the problem applicable to a certain role or roles alone?\"></ion-textarea><br>\n  </ion-item>\n  <ion-item>\n        <ion-icon name=\"information-circle-outline\" color=\"tertiary\"></ion-icon>\n    <ion-textarea rows=\"8\" cols=\"100\" placeholder=\"Screen Heading(s) at start problem, + which Menu Selection/s are the 'ancestors' (the 'Parent' and 'Grandparent', etc), of this menu selection? ..\"></ion-textarea><br>\n      </ion-item>\n      <ion-item>\n    <ion-icon name=\"information-circle-outline\" color=\"tertiary\"></ion-icon>\n    <ion-textarea rows=\"12\" cols=\"100\" placeholder=\"Please give an outline of the problem. [REBOOTING: Does the system appear dead? Check networks. Are you connected to your ISP? Are the ISP's servers down? Are there wider network problems, outside your environment? Reboot all routers, modems & network switches, then mobiles and computers. By this stage your office should be connected to the Elastos Network - complete rebooting often is the answer. We can also reboot our Cloud System easily, if the problem appears to be system-wide; otherwise begin outline here..]. eg. What should happen? What does happen? If you are just stuck; what are you trying to achieve?\"></ion-textarea>\n  </ion-item>\n  <ion-item>\n    <ion-icon name=\"information-circle-outline\" color=\"tertiary\"></ion-icon>\n    <ion-textarea rows=\"8\" cols=\"100\" placeholder=\"Is there a known work-around? Please give details. What percent extra resources does this require?\"></ion-textarea>\n  </ion-item>\n  <ion-item>\n      <ion-icon name=\"information-circle-outline\" color=\"tertiary\"></ion-icon>\n      <ion-textarea rows=\"8\" cols=\"100\" placeholder=\"Is this dysfunction affecting critical parts of business? What proportion of normal average daily revenue is affected? Give details.\"></ion-textarea>\n    </ion-item>\n      <ion-grid>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-item>\n          <ion-button expand=\"block\" color=\"tertiary\" routerLink='/menu/settings/notifications' routerDirection=\"forward\">\n          <ion-icon size=\"medium\" name=\"help\" color=\"\"></ion-icon>\n          &nbsp;&nbsp;Submit Ezy Ticket\n    </ion-button>\n  </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"5\">\n        <ion-button color=\"primary\">Clear Form</ion-button>\n    </ion-col>\n  </ion-row>\n    <ion-row>\n      <ion-col size=\"7\">\n        <ion-item>\n          <ion-text color=\"primary\">A link to your request will be available to you in Home/Dashboard/Notifications. Correspondence will occur on the Home/Dashboard/Notifications page also.</ion-text>\n        </ion-item>\n    </ion-col>\n    </ion-row>\n      </ion-grid>\n      <ion-button expand=\"block\" disabled=\"true\"></ion-button>\n  </ion-content>");

/***/ }),

/***/ "./src/app/pages/help/help.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/help/help.module.ts ***!
  \*******************************************/
/*! exports provided: HelpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help.page */ "./src/app/pages/help/help.page.ts");
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
        component: _help_page__WEBPACK_IMPORTED_MODULE_5__["HelpPage"]
    }
];
var HelpPageModule = /** @class */ (function () {
    function HelpPageModule() {
    }
    HelpPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_help_page__WEBPACK_IMPORTED_MODULE_5__["HelpPage"]]
        })
    ], HelpPageModule);
    return HelpPageModule;
}());



/***/ }),

/***/ "./src/app/pages/help/help.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/help/help.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item ion-label {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-datetime {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-input {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-textarea {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-radio-group {\n  border: solid 1px #662861;\n  border-radius: 5px; }\n\nion-item ion-radio {\n  border: solid 1px #662861;\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvaG9tZS9wb3N0Z3Jlcy9QdWJsaWMvYXUuY29tLml0Y3NvbHV0aW9ucy5jaGVpcnJzLjAuMDEvc3JjL2FwcC9wYWdlcy9oZWxwL2hlbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixrQkFBa0IsRUFBQTs7QUFFdkI7RUFFSyx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLGtCQUFrQixFQUFBOztBQUd4QjtFQUVNLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsbUJBQW1CLEVBQUE7O0FBRXhCO0VBRUsseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixtQkFBbUIsRUFBQTs7QUFFeEI7RUFFSyx5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBRXZCO0VBRUsseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGVscC9oZWxwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgICB9XG4gIH1pb24taXRlbXtcbiAgICBpb24tZGF0ZXRpbWV7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXG4gICAgfVxuICB9XG4gIGlvbi1pdGVte1xuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gIH1pb24taXRlbXtcbiAgICBpb24tdGV4dGFyZWF7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuICB9aW9uLWl0ZW17XG4gICAgaW9uLXJhZGlvLWdyb3Vwe1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICB9aW9uLWl0ZW17XG4gICAgaW9uLXJhZGlve1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/help/help.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/help/help.page.ts ***!
  \*****************************************/
/*! exports provided: HelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPage", function() { return HelpPage; });
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

var HelpPage = /** @class */ (function () {
    function HelpPage() {
    }
    HelpPage.prototype.ngOnInit = function () {
    };
    HelpPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __importDefault(__webpack_require__(/*! raw-loader!./help.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/help/help.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./help.page.scss */ "./src/app/pages/help/help.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HelpPage);
    return HelpPage;
}());



/***/ })

}]);
//# sourceMappingURL=help-help-module.js.map