(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-tasks-user-tasks-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/user-tasks/user-tasks.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/user-tasks/user-tasks.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid no-padding ion-no-margin>\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"6\" offset-med=\"3\" offset-lg=\"3\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-buttons slot=\"start\">\n                <ion-back-button\n                  text=\"\"\n                  defaultHref=\"tasktracker/team-progress\"\n                ></ion-back-button>\n              </ion-buttons>\n\n              <ion-label slot=\"\" color=\"primary\">\n                <b> {{user.userName}}</b>\n              </ion-label>\n              <ion-avatar slot=\"start\" name=\"avatar\">\n                <img src=\"../assets/images/avatar.svg\" />\n              </ion-avatar>\n            </ion-item>\n          </ion-col> </ion-row\n        ><ion-row>\n          <ion-col size=\"auto\">\n            <ion-chip outline color=\"primary\">\n              <ion-label> Tasks <b>({{userProgress.length}}) </b></ion-label>\n            </ion-chip>\n          </ion-col>\n          <ion-col size=\"auto\">\n            <ion-chip outline color=\"warning\">\n              <ion-label>\n                In-Progress <b>({{getTotalInProgress()}}) </b>\n              </ion-label>\n            </ion-chip>\n          </ion-col>\n          <ion-col size=\"auto\">\n            <ion-chip outline color=\"success\">\n              <ion-label> Done <b>({{getTotalCompleted()}}) </b> </ion-label>\n            </ion-chip>\n          </ion-col>\n        </ion-row>\n        <ion-list>\n          <ion-row\n            *ngFor=\"let item of userProgress; let i = index\"\n            style=\"justify-items: left;\"\n          >\n            <ion-col>\n              <ion-item>\n                <ion-label\n                  class=\"ion-text-start ion-text-capitalize ion-text-wrap\"\n                >\n                  <h3><b> {{i+1}}- </b>{{ item.task }}</h3>\n\n                  <ion-note size=\"samll\" slot=\"start\" class=\"default\">\n                    <i style=\"font-size: smaller;\"> {{item.taskdate}}</i>\n                  </ion-note>\n                </ion-label>\n\n                <ion-badge\n                  [color]=\"\n                      item.progress > 0.99\n                        ? 'success'\n                        : item.progress < 0.50\n                        ? 'warning'\n                        : 'primary'\n                    \"\n                >\n                  {{ item.progress|percent }}\n                </ion-badge>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Pages/user-tasks/user-tasks-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/Pages/user-tasks/user-tasks-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: UserTasksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTasksRoutingModule", function() { return UserTasksRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_tasks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-tasks.page */ "./src/app/Pages/user-tasks/user-tasks.page.ts");




const routes = [
    {
        path: '',
        component: _user_tasks_page__WEBPACK_IMPORTED_MODULE_3__["UserTasksPage"],
    }
];
let UserTasksRoutingModule = class UserTasksRoutingModule {
};
UserTasksRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserTasksRoutingModule);



/***/ }),

/***/ "./src/app/Pages/user-tasks/user-tasks.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Pages/user-tasks/user-tasks.module.ts ***!
  \*******************************************************/
/*! exports provided: UserTasksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTasksModule", function() { return UserTasksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _Pages_user_tasks_user_tasks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Pages/user-tasks/user-tasks-routing.module */ "./src/app/Pages/user-tasks/user-tasks-routing.module.ts");
/* harmony import */ var _Pages_user_tasks_user_tasks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Pages/user-tasks/user-tasks.page */ "./src/app/Pages/user-tasks/user-tasks.page.ts");







let UserTasksModule = class UserTasksModule {
};
UserTasksModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _Pages_user_tasks_user_tasks_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserTasksRoutingModule"]
        ],
        declarations: [_Pages_user_tasks_user_tasks_page__WEBPACK_IMPORTED_MODULE_6__["UserTasksPage"]]
    })
], UserTasksModule);



/***/ }),

/***/ "./src/app/Pages/user-tasks/user-tasks.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/Pages/user-tasks/user-tasks.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".popover-content {\n  background: #222;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .popover-content {\n  background: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvdXNlci10YXNrcy9EOlxcV29ya1xcTFRJXFxQcm9qZWN0c1xcSW9uaWNcXFRhc2tUcmFja2VyL3NyY1xcYXBwXFxQYWdlc1xcdXNlci10YXNrc1xcdXNlci10YXNrcy5wYWdlLnNjc3MiLCJzcmMvYXBwL1BhZ2VzL3VzZXItdGFza3MvdXNlci10YXNrcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBREVFLHVFQUFBOztBQUNBO0VBQ0UsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3VzZXItdGFza3MvdXNlci10YXNrcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wb3Zlci1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXHJcbiAgLm15LWN1c3RvbS1jbGFzcyAucG9wb3Zlci1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgfSIsIi5wb3BvdmVyLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xufVxuXG4vKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xuLm15LWN1c3RvbS1jbGFzcyAucG9wb3Zlci1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzIyMjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Pages/user-tasks/user-tasks.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/Pages/user-tasks/user-tasks.page.ts ***!
  \*****************************************************/
/*! exports provided: UserTasksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTasksPage", function() { return UserTasksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Services_task_progress_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/task-progress-service.service */ "./src/app/Services/task-progress-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_Models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/user */ "./src/app/Models/user.ts");
/* harmony import */ var src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/authService.service */ "./src/app/Services/authService.service.ts");
/* harmony import */ var src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/users.service */ "./src/app/Services/users.service.ts");
/* harmony import */ var src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/tasks.service */ "./src/app/Services/tasks.service.ts");








let UserTasksPage = class UserTasksPage {
    //  listingdata:Array<any> = [];
    constructor(datasev, activeroute, aut, usrServ, taskServ) {
        this.datasev = datasev;
        this.activeroute = activeroute;
        this.aut = aut;
        this.usrServ = usrServ;
        this.taskServ = taskServ;
        this.userProgress = [];
        this.tasks = new Array();
        this.user = Object.create(src_app_Models_user__WEBPACK_IMPORTED_MODULE_4__["User"]);
    }
    getUserTasks() {
        let userid;
        this.activeroute.paramMap.subscribe((param) => {
            if (!param.has("userid")) {
                //console.log("return");
                return;
            }
            userid = Number.parseInt(param.get("userid"));
            this.user.userId = userid;
            // console.log(userid);
            this.taskServ.fetchMyTasks("" + userid).subscribe((tasks) => {
                this.userProgress = tasks.slice();
            });
        });
    }
    ngOnInit() { }
    ionViewWillEnter() {
        //  console.log("this.ionViewWillEnter");
        this.getUserTasks();
        this.user = this.usrServ.getUserById(this.user.userId);
        //console.log(this.userProgress);
    }
    ionViewDidLoad() {
        // console.log("this.ionViewDidLoad");
    }
    getTotalInProgress() {
        return this.userProgress.filter((x) => this.parsPercentage(x.progress) < 100).slice().length;
    }
    getTotalCompleted() {
        return this.userProgress.filter((x) => this.parsPercentage(x.progress) >= 100).slice().length;
    }
    parsPercentage(val) {
        return parseFloat(val) > 1 ? parseFloat(val) : parseFloat(val) * 100;
    }
};
UserTasksPage.ctorParameters = () => [
    { type: src_app_Services_task_progress_service_service__WEBPACK_IMPORTED_MODULE_2__["TaskProgressService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] },
    { type: src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_7__["TasksService"] }
];
UserTasksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-user-tasks",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-tasks.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/user-tasks/user-tasks.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-tasks.page.scss */ "./src/app/Pages/user-tasks/user-tasks.page.scss")).default]
    })
], UserTasksPage);



/***/ })

}]);
//# sourceMappingURL=user-tasks-user-tasks-module-es2015.js.map