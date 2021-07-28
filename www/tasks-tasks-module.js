(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-tasks-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tasks/tasks.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tasks/tasks.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Service Requests & My Tasks</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n\n  <ion-list>\n    <ion-radio-group\n      allow-empty-selection = \"true\"\n      name=\"radio-group\"\n      (ionChange)=\"radioGroupChange($event)\"\n    >\n      <ion-list-header>\n        <ion-label color=\"primary\"><b>Internal Service Requests & Responses Received and my Own Tasks</b></ion-label>\n      </ion-list-header>\n      <ion-item>\n        <ion-textarea rows=\"4\" cols=\"100\" placeholder=\"List/Details of requests & responses received and own tasks\"></ion-textarea>\n      </ion-item>\n      <ion-item \n      *ngFor=\"let item of radio_list\" \n      (ionFocus)=\"radioFocus()\"\n      (ionSelect)=\"radioSelect($event)\"\n      (ionBlur)=\"radioBlur()\"\n      >\n        <ion-label>{{item.text}}</ion-label>\n        <ion-radio \n        slot=\"start\" \n        name=\"{{item.name}}\" \n        value=\"{{item.value}}\" \n        checked=\"{{item.checked}}\" \n        color=\"{{item.color}}\" \n        disabled=\"{{item.disabled}}\"\n        ></ion-radio>\n      </ion-item>\n  \n    </ion-radio-group>\n  </ion-list>\n \n  <ion-item>\n    <ion-button size=\"small\" color=\"primary\" slot=\"end\">View marked task</ion-button> \n\n    <ion-button class=\"button1\" color=\"secondary\" size=\"medium\" slot=\"end\">Copy Task to Response Form</ion-button>\n\n    <ion-button size=\"small\" color=\"tertiary\" slot=\"end\">Mark Task Complete</ion-button>\n  </ion-item>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          \n    <ion-grid>\n    <ion-row>\n<ion-col size=\"6\"> \n  <ion-text color=\"tertiary\">\n    <ion-label><b>Your entire archive is always available to search from, so use begin-date filter, below, carefully!</b>                              </ion-label>\n  </ion-text>\n</ion-col><ion-col size=\"6\"> \n    <ion-text color=\"primary\">\n      <ion-label><b>Searching Assignors & Assignees:<br></b>Please <strong>use any quoted hints without the quotes</strong> - put <b>Bob + Dylan</b>, or even <b><br>Alice + St John, Isaac + Thorpe</b>- (the latter comma-separated for 2 selectees). <b>'me'</b> can be assignor, assignee or both. <b>NOT(me)</b> or <b>NOT(whatever)</b> are all possible. <b>Group + whatever</b> is possible also, including <b>NOT(Group + whatever)</b> and <b>NOT(Group + group1, Group + group2, etc)</b>. You get everyone/every message group/role/team in your company not included within the \"NOT\" brackets. However you get the NOT set which intersects any other fields in the search, ie any field will reduce the returned set from all other fields in the filter (as appropriate), including any \"NOT\" fields. Use NOT with great care!<br>(Role + role1, Role + role2) is fine as is (Role + role1, Group + group1), for example.<br>Look in the Human Resources menu for groups, teams, employees and roles.</ion-label></ion-text>\n</ion-col></ion-row>                                                                                \n</ion-grid>     \n  <ion-item>\n    <ion-text color=\"secondary\">\n    <ion-label>Filter Tasks Archive</ion-label></ion-text>&nbsp;\n    <ion-input placeholder=\"(Assignors:) Alice + St John\"></ion-input>\n    <ion-input placeholder=\"(Assignees:) Group + Property Managers\"></ion-input>\n    </ion-item>\n  \n  <ion-item>\n    <ion-text color=\"secondary\">\n    <ion-label>You can use<br>comma-separated<br>lists of names,<br>phrases etc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-label>\n  </ion-text>\n    <ion-input placeholder=\" Tasks by id\"></ion-input>\n    <ion-input placeholder=\" Tasks by Word or Phrase\"></ion-input>\n  </ion-item>\n    <ion-item>\n    <ion-button size=\"large\">Filter</ion-button>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <ion-input placeholder=\" Links by (partial) Filename\"></ion-input>\n    <ion-input placeholder=\" 'Complete'/ 'Not Complete'\"></ion-input>  \n    <ion-input placeholder=\" 'resp' or 'SRQ'\"></ion-input>  \n  </ion-item>\n    <ion-item>\n      <ion-text color=\"danger\">\n      <ion-label color=\"dark-tint\">Use Begin-Date Filter Here!</ion-label></ion-text>\n      &nbsp;&nbsp;&nbsp;<ion-datetime color=\"tertiary\" displayFormat=\"DD MM YYYY\" pickerFormat=\"DD MM YYYY\" value=\"today\"></ion-datetime>\n    </ion-item>\n    <ion-button expand=\"block\">Clear Form</ion-button>\n    <ion-list>\n      <ion-radio-group\n        allow-empty-selection = \"true\"\n        name=\"radio-group2\"\n        (ionChange)=\"radioGroupChange($event)\"\n      >\n\n      <ion-item>\n        <ion-button size=\"medium\"color=\"tertiary\" slot=\"start\">Issue Internal Service Request or Response</ion-button>\n        <ion-input placeholder=\" Originating SRQ id (if response)\"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-textarea placeholder=\"Files Linked\"></ion-textarea>\n        </ion-item>\n        <ion-item>\n          <ion-button size=\"medium\" color=\"secondary\" slot=\"end\">Clear from End</ion-button>\n        <ion-button size=\"medium\" color=\"light\" color=\"tertiary\" slot=\"end\">Link File(s)</ion-button>\n      </ion-item>\n        <ion-item>\n          <ion-textarea placeholder=\"Recipients Selected\"></ion-textarea>\n        </ion-item>\n      <ion-item>\n        <ion-button size=\"medium\"color=\"secondary\" slot=\"end\">Clear from End</ion-button>\n        <ion-button size=\"medium\" color=\"light\" color=\"tertiary\" slot=\"end\">Select Recipient(s)</ion-button>\n      </ion-item>\n      <ion-item>\n        <ion-textarea rows=\"4\" cols=\"100\" placeholder=\"Enter message ..\"></ion-textarea>\n      </ion-item>\n      <ion-button expand=\"block\" color=\"primary\">Clear Form</ion-button>\n      <ion-button disabled=\"true\" expand=\"block\" color=\"primary\"></ion-button>\n        <ion-list-header>\n          <ion-label color=\"primary\"><b>Internal Service Requests and Responses Sent</b></ion-label>\n        </ion-list-header>\n        <ion-item>\n          <ion-textarea rows=\"4\" cols=\"100\" placeholder=\"List/Details of requests/responses sent\"></ion-textarea>\n        </ion-item>\n        <ion-item \n        *ngFor=\"let item of radio_list2\" \n        (ionFocus)=\"radioFocus()\"\n        (ionSelect)=\"radioSelect($event)\"\n        (ionBlur)=\"radioBlur()\"\n        >\n          <ion-label>{{item.text}}</ion-label>\n          <ion-radio \n          slot=\"start\" \n          name=\"{{item.name}}\" \n          value=\"{{item.value}}\" \n          checked=\"{{item.checked}}\" \n          color=\"{{item.color}}\" \n          disabled=\"{{item.disabled}}\"\n          ></ion-radio>\n        </ion-item>\n    \n      </ion-radio-group>\n    </ion-list>\n      <ion-item>\n        <ion-text color=\"tertiary\">\n        <ion-label>Filter Requests Sent</ion-label></ion-text>\n        <ion-input placeholder=\"(Assignees:) Alice + St John, Group + Sales, Group + Property Managers, Isaac + Thorpe\"></ion-input>\n        </ion-item>\n      \n      <ion-item>\n        <ion-text color=\"tertiary\">\n        <ion-label>You can use<br>comma-separated<br>lists of names,<br>phrases etc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-label>\n      </ion-text>\n        <ion-input placeholder=\" SRQ/resp sent by SRQid\"></ion-input>\n        <ion-input placeholder=\" SRQ/resp  by selectee(s)\"></ion-input>\n        <ion-input placeholder=\" SRQ/resp by Word or Phrase\"></ion-input>\n      </ion-item>\n        <ion-item>\n        <ion-button size=\"large\" color=\"tertiary\">Filter</ion-button>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <ion-input placeholder=\" Links by (partial) Filename\"></ion-input>\n        <ion-input placeholder=\" 'Complete'/ 'Not Complete'\"></ion-input>  \n        <ion-input placeholder=\" 'resp' or 'SRQ'\"></ion-input>  \n      </ion-item>\n        <ion-item>\n          <ion-text color=\"danger\">\n          <ion-label color=\"dark-tint\">Use Begin-Date Filter Here!</ion-label></ion-text>\n          &nbsp;&nbsp;&nbsp;<ion-datetime color=\"tertiary\" displayFormat=\"DD MM YYYY\" pickerFormat=\"DD MM YYYY\" value=\"today\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          &nbsp;&nbsp;<ion-button size=\"medium\" color=\"secondary\">View Selected Req/Resp</ion-button>\n        <ion-button size=\"medium\">Send Selected Req/Resp to Response Form</ion-button>\n       </ion-item>\n          <ion-button expand=\"block\" color=\"tertiary\">Clear Form</ion-button>\n          <ion-button expand=\"block\" disabled=\"true\"></ion-button>\n      </ion-content>");

/***/ }),

/***/ "./src/app/pages/tasks/tasks.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/tasks/tasks.module.ts ***!
  \*********************************************/
/*! exports provided: TasksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksPageModule", function() { return TasksPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tasks_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks.page */ "./src/app/pages/tasks/tasks.page.ts");
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
        component: _tasks_page__WEBPACK_IMPORTED_MODULE_5__["TasksPage"]
    }
];
var TasksPageModule = /** @class */ (function () {
    function TasksPageModule() {
    }
    TasksPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_tasks_page__WEBPACK_IMPORTED_MODULE_5__["TasksPage"]]
        })
    ], TasksPageModule);
    return TasksPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tasks/tasks.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/tasks/tasks.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item ion-label {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-datetime {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 5px; }\n\nion-item ion-input {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-textarea {\n  border: solid 1px #662861;\n  box-shadow: 0px 4px 5px #f5cfb5;\n  border-radius: 10px; }\n\nion-item ion-radio-group {\n  border: solid 1px #662861;\n  border-radius: 5px; }\n\nion-item ion-radio {\n  border: solid 1px #662861;\n  border-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvaG9tZS9wb3N0Z3Jlcy9QdWJsaWMvYXUuY29tLml0Y3NvbHV0aW9ucy5jaGVpcnJzLjAuMDEvc3JjL2FwcC9wYWdlcy90YXNrcy90YXNrcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLGtCQUFrQixFQUFBOztBQUV6QjtFQUVPLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0Isa0JBQWtCLEVBQUE7O0FBRzFCO0VBRVEseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixtQkFBbUIsRUFBQTs7QUFFekI7RUFFTSx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLG1CQUFtQixFQUFBOztBQUV6QjtFQUVNLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFFeEI7RUFFTSx5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YXNrcy90YXNrcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXG4gICAgfVxufWlvbi1pdGVte1xuICAgIGlvbi1kYXRldGltZXtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggI2Y1Y2ZiNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgICB9XG59XG5pb24taXRlbXtcbiAgICBpb24taW5wdXR7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuIH1pb24taXRlbXtcbiAgICBpb24tdGV4dGFyZWF7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4ICNmNWNmYjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuIH1pb24taXRlbXtcbiAgICBpb24tcmFkaW8tZ3JvdXB7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM2NjI4NjE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gfWlvbi1pdGVte1xuICAgIGlvbi1yYWRpb3tcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2Mjg2MTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/tasks/tasks.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tasks/tasks.page.ts ***!
  \*******************************************/
/*! exports provided: TasksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksPage", function() { return TasksPage; });
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

var TasksPage = /** @class */ (function () {
    function TasksPage() {
    }
    TasksPage.prototype.ngOnInit = function () {
    };
    TasksPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasks',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tasks.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tasks/tasks.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tasks.page.scss */ "./src/app/pages/tasks/tasks.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TasksPage);
    return TasksPage;
}());



/***/ })

}]);
//# sourceMappingURL=tasks-tasks-module.js.map