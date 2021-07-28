(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["talk-invitereply-invitereply-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/talk/invitereply/invitereply.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/talk/invitereply/invitereply.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaulthref=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Invite and Reply</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\n\n  <ion-list>\n    <ion-radio-group\n      allow-empty-selection = \"true\"\n      name=\"radio-group\"\n      (ionChange)=\"radioGroupChange($event)\"\n    >\n      <ion-list-header>\n        <ion-label color=\"tertiary\"><b>Invitations Sent & Replies Received</b></ion-label>\n      </ion-list-header>\n      <ion-item>\n        <ion-textarea rows=\"4\" cols=\"100\" placeholder=\"details of invitations sent & replies received\"></ion-textarea>\n      </ion-item>\n      <ion-item \n      *ngFor=\"let item of radio_list\" \n      (ionFocus)=\"radioFocus()\"\n      (ionSelect)=\"radioSelect($event)\"\n      (ionBlur)=\"radioBlur()\"\n      >\n        <ion-label>{{item.text}}</ion-label>\n        <ion-radio \n        slot=\"start\" \n        name=\"{{item.name}}\" \n        value=\"{{item.value}}\" \n        checked=\"{{item.checked}}\" \n        color=\"{{item.color}}\" \n        disabled=\"{{item.disabled}}\"\n        ></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n  <ion-item>\n  <ion-button size=\"medium\"color=\"primary\" slot=\"end\">View marked item</ion-button>\n  <ion-button size=\"medium\"color=\"tertiary\" slot=\"end\">Reply to this item</ion-button>\n</ion-item>\n  <ion-item>\n    <ion-label color=\"tertiary\">Your entire archive is always available to search<br>from, so use begin-date filter, below, carefully!<br>Also please check note on Tasks page regarding<br>usage of names & quoted hints eg NOT(me)</ion-label>\n    <ion-button size=\"medium\"color=\"tertiary\" slot=\"end\">Archive marked items</ion-button>\n  </ion-item>\n  <ion-item>\n    <ion-text color=\"primary\">\n    <ion-label>Filter Invitations & Replies&nbsp;&nbsp;&nbsp;</ion-label></ion-text>\n    <ion-input placeholder=\"Authors - First '+' Last Name or 'NOT(me)'\"></ion-input>\n    <ion-input placeholder=\"Recipients by First '+' Last Name\"></ion-input>\n    </ion-item>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 \n  <ion-item>\n    <ion-text color=\"primary\">\n    <ion-label>You can use<br>comma-separated<br>lists of names,<br>phrases etc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-label>\n  </ion-text>\n    <ion-input placeholder=\"Invitation Headers by Word or Phrase\"></ion-input>\n    <ion-input placeholder=\"Invitation Body by Word or Phrase\"></ion-input> \n  </ion-item>\n    <ion-item>\n    <ion-button>Filter</ion-button>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <ion-input placeholder=\"Links by Filename with extension\"></ion-input>\n    <ion-input placeholder=\"Invitations by 'Archived' or 'Not Archived'\"></ion-input>\n  </ion-item>\n    <ion-item>\n      <ion-text color=\"primary\">\n      <ion-label color=\"dark-tint\">Use Begin-Date Filter Here!</ion-label></ion-text>\n      &nbsp;&nbsp;&nbsp;<ion-datetime color=\"tertiary\" displayFormat=\"DD MM YYYY\" pickerFormat=\"DD MM YYYY\" value=\"today\"></ion-datetime>\n    </ion-item>\n    <ion-button expand=\"block\">Clear Form</ion-button>\n\n\n\n    <ion-list>\n      <ion-radio-group\n        allow-empty-selection = \"true\"\n        name=\"radio-group\"\n        (ionChange)=\"radioGroupChange($event)\"\n      >\n    <ion-list-header>\n      <ion-label color=\"tertiary\"><b>Invitations Received & Replies Sent</b></ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-textarea rows=\"4\" cols=\"100\" placeholder=\"details of invitations received & replies sent\"></ion-textarea>\n    </ion-item>\n    <ion-item \n    *ngFor=\"let item of radio_list\" \n    (ionFocus)=\"radioFocus()\"\n    (ionSelect)=\"radioSelect($event)\"\n    (ionBlur)=\"radioBlur()\"\n    >\n      <ion-label>{{item.text}}</ion-label>\n      <ion-radio \n      slot=\"start\" \n      name=\"{{item.name}}\" \n      value=\"{{item.value}}\" \n      checked=\"{{item.checked}}\" \n      color=\"{{item.color}}\" \n      disabled=\"{{item.disabled}}\"\n      ></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n</ion-list>\n<ion-item>\n<ion-button size=\"medium\"color=\"primary\" slot=\"end\">View marked item</ion-button>\n<ion-button size=\"medium\"color=\"tertiary\" slot=\"end\">Reply to this item</ion-button>\n</ion-item>\n<ion-item>\n  <ion-label color=\"tertiary\">Your entire archive is always available to search<br>from, so use begin-date filter, below, carefully!<br>Also please check note on Tasks page regarding<br>usage of names & quoted hints eg NOT(me)</ion-label>\n  <ion-button size=\"medium\"color=\"tertiary\" slot=\"end\">Archive marked items</ion-button>\n</ion-item>\n<ion-item>\n  <ion-text color=\"primary\">\n  <ion-label>Filter Invitations & Replies&nbsp;&nbsp;&nbsp;</ion-label></ion-text>\n  <ion-input placeholder=\"Authors - First '+' Last Name or 'NOT(me)'\"></ion-input>\n  <ion-input placeholder=\"Recipients by First '+' Last Name\"></ion-input>\n  </ion-item>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 \n<ion-item>\n  <ion-text color=\"primary\">\n  <ion-label>You can use<br>comma-separated<br>lists of names,<br>phrases etc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-label>\n</ion-text>\n  <ion-input placeholder=\"Invitation Headers by Word or Phrase\"></ion-input>\n  <ion-input placeholder=\"Invitation Body by Word or Phrase\"></ion-input> \n</ion-item>\n  <ion-item>\n  <ion-button>Filter</ion-button>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  <ion-input placeholder=\"Links by Filename with extension\"></ion-input>\n  <ion-input placeholder=\"Invitations by 'Archived' or 'Not Archived'\"></ion-input>\n</ion-item>\n  <ion-item>\n    <ion-text color=\"primary\">\n    <ion-label color=\"dark-tint\">Use Begin-Date Filter Here!</ion-label></ion-text>\n    &nbsp;&nbsp;&nbsp;<ion-datetime color=\"tertiary\" displayFormat=\"DD MM YYYY\" pickerFormat=\"DD MM YYYY\" value=\"today\"></ion-datetime>\n  </ion-item>\n  <ion-button expand=\"block\">Clear Form</ion-button>\n\n\n  \n  <ion-item>\n    <ion-button size=\"medium\"color=\"tertiary\" slot=\"start\">Send Invitation or Reply</ion-button>\n    <ion-button size=\"medium\"color=\"primary\" slot=\"start\">Send Invitation or Reply as Int. Serv. Requ.</ion-button>\n  </ion-item>\n  <ion-item>\n      <ion-textarea placeholder=\"Files Linked\"></ion-textarea>\n      <ion-input placeholder=\" Originating Invitation id (if reply)\"></ion-input>\n    </ion-item>\n    <ion-item>\n    <ion-button size=\"medium\"color=\"tertiary\" slot=\"end\">Link File(s)</ion-button>\n    <ion-button size=\"medium\"color=\"primary\" slot=\"end\">Clear from End</ion-button>\n  </ion-item>\n    <ion-item>\n      <ion-textarea placeholder=\"Recipients Selected\"></ion-textarea>\n    </ion-item>\n  <ion-item>\n    <ion-button size=\"medium\"color=\"tertiary\" slot=\"end\">Select Recipient(s)</ion-button>\n    <ion-button size=\"medium\"color=\"primary\" slot=\"end\">Clear from End</ion-button>\n  </ion-item>\n  <ion-item>\n    <ion-textarea rows=\"4\" cols=\"100\" placeholder=\"Enter message ..\"></ion-textarea>\n  </ion-item>\n  <ion-button expand=\"block\" color=\"tertiary\">Clear Form</ion-button>\n  <ion-button disabled=\"true\" expand=\"block\"></ion-button>  \n</ion-content>");

/***/ }),

/***/ "./src/app/pages/talk/invitereply/invitereply.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/talk/invitereply/invitereply.module.ts ***!
  \**************************************************************/
/*! exports provided: InvitereplyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitereplyPageModule", function() { return InvitereplyPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _invitereply_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invitereply.page */ "./src/app/pages/talk/invitereply/invitereply.page.ts");
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
        component: _invitereply_page__WEBPACK_IMPORTED_MODULE_5__["InvitereplyPage"]
    }
];
var InvitereplyPageModule = /** @class */ (function () {
    function InvitereplyPageModule() {
    }
    InvitereplyPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_invitereply_page__WEBPACK_IMPORTED_MODULE_5__["InvitereplyPage"]]
        })
    ], InvitereplyPageModule);
    return InvitereplyPageModule;
}());



/***/ }),

/***/ "./src/app/pages/talk/invitereply/invitereply.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/talk/invitereply/invitereply.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item ion-label {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-datetime {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-input {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-textarea {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-radio-group {\n  border: solid 1px #662861;\n  border-radius: 5px; }\n\nion-item ion-radio {\n  border: solid 1px #662861;\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvaG9tZS9wb3N0Z3Jlcy9QdWJsaWMvYXUuY29tLml0Y3NvbHV0aW9ucy5jaGVpcnJzLjAuMDEvc3JjL2FwcC9wYWdlcy90YWxrL2ludml0ZXJlcGx5L2ludml0ZXJlcGx5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0Isa0JBQWtCLEVBQUE7O0FBRXpCO0VBRU8seUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixrQkFBa0IsRUFBQTs7QUFHMUI7RUFFUSx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLG1CQUFtQixFQUFBOztBQUV6QjtFQUVNLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsbUJBQW1CLEVBQUE7O0FBRXpCO0VBRU0seUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUV4QjtFQUVNLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhbGsvaW52aXRlcmVwbHkvaW52aXRlcmVwbHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAjZjVjZmI1O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxuICAgIH1cbn1pb24taXRlbXtcbiAgICBpb24tZGF0ZXRpbWV7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXG4gICAgfVxufVxuaW9uLWl0ZW17XG4gICAgaW9uLWlucHV0e1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAjZjVjZmI1O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiB9aW9uLWl0ZW17XG4gICAgaW9uLXRleHRhcmVhe1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAjZjVjZmI1O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiB9aW9uLWl0ZW17XG4gICAgaW9uLXJhZGlvLWdyb3Vwe1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuIH1pb24taXRlbXtcbiAgICBpb24tcmFkaW97XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/talk/invitereply/invitereply.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/talk/invitereply/invitereply.page.ts ***!
  \************************************************************/
/*! exports provided: InvitereplyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitereplyPage", function() { return InvitereplyPage; });
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

var InvitereplyPage = /** @class */ (function () {
    function InvitereplyPage() {
    }
    InvitereplyPage.prototype.ngOnInit = function () {
    };
    InvitereplyPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invitereply',
            template: __importDefault(__webpack_require__(/*! raw-loader!./invitereply.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/talk/invitereply/invitereply.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./invitereply.page.scss */ "./src/app/pages/talk/invitereply/invitereply.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], InvitereplyPage);
    return InvitereplyPage;
}());



/***/ })

}]);
//# sourceMappingURL=talk-invitereply-invitereply-module.js.map