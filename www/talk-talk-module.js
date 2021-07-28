(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["talk-talk-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/talk/talk.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/talk/talk.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Work Talk .. not chat, please</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n  <ion-button expand=\"block\" color=\"tertiary\" routerLink=\"/menu/talk/invitereply\" routerDirection=\"forward\">\n    Invite and Reply\n  </ion-button>\n  <ion-list>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-item>\n            <ion-label color=\"primary\">Register&nbsp;&nbsp;<br>Room&nbsp;&nbsp;&nbsp;</ion-label>\n<ion-input placeholder=\"Room by Topic\"></ion-input>\n</ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n        <ion-label color=\"primary\">Room<br>Login&nbsp;&nbsp;&nbsp;</ion-label>\n<ion-input placeholder=\"Username\"></ion-input>\n</ion-item>\n</ion-col>\n</ion-row>\n<ion-row><ion-col size=\"6\">\n\n  <ion-item>\n    <ion-label color=\"primary\">Scheduled Start:</ion-label>\n    <ion-datetime color=\"tertiary\" displayFormat=\"h mm a DDD DD MMM YYYY\" pickerFormat=\"h mm a DDD DD MMM YYYY\"></ion-datetime>\n  </ion-item>\n\n</ion-col>\n<ion-col size=\"3\">\n  <ion-item>\n    <ion-text color=\"primary\"></ion-text>\n    <ion-button slot=\"end\">Save this Discussion</ion-button>\n</ion-item>\n</ion-col>\n<ion-col size=\"3\">\n  <ion-item>\n    <ion-button slot=\"end\" color=\"danger\">Close Room</ion-button>\n</ion-item>\n</ion-col>\n</ion-row>\n<ion-row>\n  <ion-col size=\"7\">\n    <ion-item>\n    <ion-label slot=\"end\" color=\"primary\">Room</ion-label>\n    <ion-textarea rows=\"12\" cols=\"150\" placeholder=\"Scrolling text:\"></ion-textarea>\n</ion-item>\n</ion-col>\n<ion-col size=\"5\">\n  <ion-item>\n  <ion-label slot=\"start\" color=\"primary\">Attendees</ion-label>\n  <ion-textarea rows=\"12\" cols=\"60\" placeholder=\"DATA GRID:\"></ion-textarea>\n</ion-item>\n</ion-col>\n</ion-row>\n<ion-row>\n  <ion-col size=\"12\">\n    <ion-item>\n      <ion-button size=\"medium\"color=\"primary\" slot=\"end\" fill=\"outline\">Send</ion-button>\n    <ion-textarea rows=\"3\" cols=\"150\" placeholder=\"Type here ..\"></ion-textarea>\n</ion-item>\n</ion-col>\n</ion-row>\n<ion-row><ion-col size=\"12\"><ion-item color=\"tertiary\">If your discussion is saved, all participants will find a link to the text in Home/Dashboard/Notifications.<br>The entire archive of Work Talk is searchable by Senior Management.</ion-item>\n</ion-col>\n</ion-row>\n<ion-row>\n  <ion-col size=12>\n    <ion-item>\n  <ion-label slot=\"end\" color=\"primary\">Invitations<br>Sent</ion-label>\n  <ion-textarea rows=\"5\" cols=\"150\" placeholder=\"DATA GRID:Invitee/Topic/ScheduledStart/Accepted/Apologised\"></ion-textarea>\n  </ion-item>\n</ion-col></ion-row>\n<ion-row>\n<ion-col size=\"6\"                                                                                                  >\n  <ion-item>\n    <ion-button size=\"medium\" color=\"success\" slot=\"end\" fill=\"outline\">5 Minute Warning</ion-button>\n  </ion-item>\n</ion-col>\n<ion-col size=\"6\"                                                                                                  >\n  <ion-item>\n    <ion-button size=\"medium\" color=\"danger\" slot=\"end\" fill=\"outline\">Shut Down All</ion-button>\n  </ion-item>\n</ion-col>\n</ion-row>\n<ion-row>\n  <ion-col size=\"10\"                                                                                                  >\n   <ion-item>   \n  <ion-textarea rows=\"5\" cols=\"100\" placeholder=\"DATA GRID:Moderator/Topic/ScheduledStart/Accepted?/Currently Open?\"></ion-textarea>\n</ion-item>\n</ion-col>\n<ion-col size=\"2\"                                                                                                  >\n  <ion-item>\n    <ion-button size=\"medium\"color=\"tertiary\" slot=\"end\">Enter<br>Room</ion-button>\n  </ion-item>\n</ion-col>\n</ion-row>\n      </ion-grid>\n      <ion-button expand=\"block\" disabled=\"true\"></ion-button>\n</ion-list>                   \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/talk/talk.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/talk/talk.module.ts ***!
  \*******************************************/
/*! exports provided: TalkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalkPageModule", function() { return TalkPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _talk_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./talk.page */ "./src/app/pages/talk/talk.page.ts");
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
        component: _talk_page__WEBPACK_IMPORTED_MODULE_5__["TalkPage"]
    }
];
var TalkPageModule = /** @class */ (function () {
    function TalkPageModule() {
    }
    TalkPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_talk_page__WEBPACK_IMPORTED_MODULE_5__["TalkPage"]]
        })
    ], TalkPageModule);
    return TalkPageModule;
}());



/***/ }),

/***/ "./src/app/pages/talk/talk.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/talk/talk.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item ion-label {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-datetime {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-input {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-textarea {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-radio-group {\n  border: solid 1px #662861;\n  border-radius: 5px; }\n\nion-item ion-radio {\n  border: solid 1px #662861;\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvaG9tZS9wb3N0Z3Jlcy9QdWJsaWMvYXUuY29tLml0Y3NvbHV0aW9ucy5jaGVpcnJzLjAuMDEvc3JjL2FwcC9wYWdlcy90YWxrL3RhbGsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixrQkFBa0IsRUFBQTs7QUFFekI7RUFFTyx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLGtCQUFrQixFQUFBOztBQUcxQjtFQUVRLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsbUJBQW1CLEVBQUE7O0FBRXpCO0VBRU0seUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixtQkFBbUIsRUFBQTs7QUFFekI7RUFFTSx5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBRXhCO0VBRU0seUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFsay90YWxrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgICB9XG59aW9uLWl0ZW17XG4gICAgaW9uLWRhdGV0aW1le1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAjZjVjZmI1O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxuICAgIH1cbn1cbmlvbi1pdGVte1xuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gfWlvbi1pdGVte1xuICAgIGlvbi10ZXh0YXJlYXtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gfWlvbi1pdGVte1xuICAgIGlvbi1yYWRpby1ncm91cHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiB9aW9uLWl0ZW17XG4gICAgaW9uLXJhZGlve1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYyODYxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiB9Il19 */");

/***/ }),

/***/ "./src/app/pages/talk/talk.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/talk/talk.page.ts ***!
  \*****************************************/
/*! exports provided: TalkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalkPage", function() { return TalkPage; });
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

var TalkPage = /** @class */ (function () {
    function TalkPage() {
    }
    TalkPage.prototype.ngOnInit = function () {
    };
    TalkPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-talk',
            template: __importDefault(__webpack_require__(/*! raw-loader!./talk.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/talk/talk.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./talk.page.scss */ "./src/app/pages/talk/talk.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TalkPage);
    return TalkPage;
}());



/***/ })

}]);
//# sourceMappingURL=talk-talk-module.js.map