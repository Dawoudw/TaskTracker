function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "../home/home.module": ["./src/app/Pages/home/home.module.ts", "home-home-module"],
      "../login/login.module": ["./src/app/Pages/login/login.module.ts", "login-login-module"],
      "../tab1/tab1.module": ["./src/app/Pages/tab1/tab1.module.ts", "tab1-tab1-module"],
      "../tab2/tab2.module": ["./src/app/Pages/tab2/tab2.module.ts", "tab2-tab2-module"],
      "../tab3/tab3.module": ["./src/app/Pages/tab3/tab3.module.ts", "tab3-tab3-module"],
      "./Pages/home/home.module": ["./src/app/Pages/home/home.module.ts", "home-home-module"],
      "./Pages/tabs/tabs.module": ["./src/app/Pages/tabs/tabs.module.ts", "Pages-tabs-tabs-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-toggle hidden=\"true\" color=\"dark\"> </ion-toggle>\r\n    <ion-buttons slot=\"start\">\r\n      <!-- <ion-back-button text=\"\" defaultHref=\"/\"> </ion-back-button> -->\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-label\r\n      *ngIf=\"getIsLogged()\"\r\n      name=\"spntime\"\r\n      position=\"stacked\"\r\n      id=\"spntime\"\r\n      [(ngModel)]=\"userName\"\r\n      ngDefaultControl\r\n    >\r\n      <h3 style=\"padding-left: 3px;\">{{ userName }}</h3>\r\n    </ion-label>\r\n    <ion-buttons slot=\"end\" *ngIf=\"getIsLogged()\">\r\n      <ion-button (click)=\"logout()\" slot=\"secondary\">\r\n        <ion-icon\r\n  \r\n          name=\"lock-closed-outline\"\r\n        ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <!-- \r\n    <ion-title name=\"spntime\" id=\"spntime\"></ion-title> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/create-task/create-task.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/create-task/create-task.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCreateTaskCreateTaskPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header  >\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onCancel()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title size=\"small\" color=\"primary\" class=\"ion-text-center\"\n      ><h4>Create Task</h4></ion-title\n    >\n  </ion-toolbar>\n</ion-header> -->\n<ion-header  class=\"ion-no-margin\"  >\n  <ion-toolbar color=\"primary\">\n    <ion-icon\n      name=\"document-text-outline\"\n  \n      size=\"large\"\n      slot=\"start\"\n      style=\"width: 24px !important;height: 24px !important;margin-right: 5px;margin-left: 5px;\"\n    ></ion-icon>\n    <ion-label slot=\"start\" color=\"light\"> <p>Create Task</p></ion-label>\n    <ion-buttons slot=\"end\">\n      <ion-button   (click)=\"onCancel()\">\n        <ion-icon name=\"close-sharp\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-text-center\"  [fullscreen]=\"true\" >\n  <form [formGroup]=\"form\">\n    <ion-grid>\n      <ion-row>\n        <ion-col\n          size-xs=\"12\"\n          size-sm=\"12\"\n          size-med=\"10\"\n          offset-med=\"1\"\n          size-lg=\"8\"\n          offset-lg=\"2\"\n          size-xlg=\"6\"\n          offset-xlg=\"3\"\n        >\n          <ion-card>\n            <ion-row>\n              <ion-col >\n                <ion-item>\n                  <ion-label color=\"medium\" position=\"floating\">Task Title</ion-label>\n                  <ion-input\n                    type=\"text\"\n                    autocomplete\n                    autocorrect\n                    formControlName=\"title\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col  >\n                <ion-item>\n                  <ion-label color=\"medium\"  position=\"floating\">Task Details</ion-label>\n                  <ion-textarea\n                    rows=\"10\"\n                    cols=\"20\"\n                    autocomplete\n                    autocorrect\n                    formControlName=\"description\"\n                  ></ion-textarea>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-button\n                  class=\"primary\"\n                  expand=\"block\"\n                  style=\"\n                    margin-left: 20%;\n                    margin-right: 20%;\n                    text-align: center !important;\n                  \"\n                  (click)=\"onCreateTask()\"\n                  [disabled]=\"!form.valid\"\n                  >Create</ion-button\n                >\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <app-header></app-header>\r\n  <ion-content>\r\n    <ion-menu content-id=\"menu\" side=\"start\" menuId=\"main-menu\" type=\"overlay\">\r\n      <!-- <ion-header>\r\n        <ion-toolbar color=\"primary\">\r\n          <ion-title>Start Menu</ion-title>\r\n        </ion-toolbar>\r\n      </ion-header> -->\r\n      <ion-content>\r\n        <ion-list>\r\n          <!-- <ion-item\r\n            detail=\"false\"\r\n            [routerLink]=\"auth.isLoggedIn() ? 'tasktracker' : '/'\"\r\n            (click)=\"closeMenu()\"\r\n          >\r\n            <ion-label id=\"lblHome\">\r\n              <ion-icon name=\"home\"></ion-icon>\r\n              Home\r\n            </ion-label>\r\n          </ion-item> -->\r\n          <ion-item\r\n            detail=\"false\"\r\n            [routerLink]=\"auth.isLoggedIn() ? 'tasktracker/home' : 'index'\"\r\n            (click)=\"closeMenu()\"\r\n          >\r\n            <ion-label id=\"lblHome\">\r\n              <ion-icon name=\"home\"></ion-icon>\r\n              Home\r\n            </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item\r\n            [routerLink]\r\n            detail=\"false\"\r\n            *ngIf=\"getIsLogged()\"\r\n            (click)=\"openNewTaskModal()\"\r\n          >\r\n            <ion-label id=\"lblnewtask\">\r\n              <ion-icon name=\"document-text-outline\"></ion-icon>\r\n              New Task\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item\r\n            detail=\"false\"\r\n            [routerLink]=\"['tasktracker/mytasks']\"\r\n            (click)=\"closeMenu()\"\r\n            *ngIf=\"getIsLogged()\"\r\n          >\r\n            <ion-label id=\"lblmytasks\">\r\n              <ion-icon name=\"document-text-outline\"></ion-icon>\r\n              My Tasks\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item\r\n            detail=\"false\"\r\n            [routerLink]\r\n            (click)=\"openTeamProgress(); closeMenu()\"\r\n          >\r\n            <ion-label id=\"lblusers-progress\">\r\n              <ion-icon name=\"people-outline\"></ion-icon>\r\n              Team Progress\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item\r\n            detail=\"false\"\r\n            routerLink=\"tasktracker/reports\"\r\n            (click)=\"closeMenu()\"\r\n          >\r\n            <ion-label id=\"lblReports\">\r\n              <ion-icon name=\"bar-chart-outline\"></ion-icon>\r\n              Reports\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item [routerLink] (click)=\"logout()\" *ngIf=\"getIsLogged()\">\r\n            <ion-label id=\"lbllogout\">\r\n              <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n              logout\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item\r\n            [routerLink]=\"['tasktracker/login']\"\r\n            (click)=\"closeMenu()\"\r\n            *ngIf=\"!getIsLogged()\"\r\n          >\r\n            <ion-label id=\"lblSignIn\">\r\n              <ion-icon name=\"lock-open-outline\"></ion-icon> SignIn\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet\r\n      id=\"menu\"\r\n      style=\"text-align: center; padding: 0px; margin: 0px;\"\r\n    >\r\n    </ion-router-outlet\r\n  ></ion-content>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./src/app/Components/header/header.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/Components/header/header.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/Components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Services/authService.service */
    "./src/app/Services/authService.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(auth) {
        _classCallCheck(this, HeaderComponent);

        this.auth = auth;
        this.isLogged = false;
      } // public currentDateTime: any = moment().format("MM-DD-YYYY HH:mm:ss");


      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.auth.userChange.subscribe(function (user) {
            _this.userName = user != null ? "Hi," + user.userName : ""; // this.isLogged = user != null
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {// console.log("ionViewWillEnter", this.getIsLogged());
        }
      }, {
        key: "logout",
        value: function logout() {
          if (this.getIsLogged()) {
            this.auth.logOut();
            this.userName = "";
          } // console.log("logout" , this.getIsLogged())
          // if (this.getIsLogged()) this.authServ.userLogout();
          // else return;

        }
      }, {
        key: "getIsLogged",
        value: function getIsLogged() {
          return this.auth.isLoggedIn();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-header",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/header/header.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/Components/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/Models/task.ts":
  /*!********************************!*\
    !*** ./src/app/Models/task.ts ***!
    \********************************/

  /*! exports provided: Task */

  /***/
  function srcAppModelsTaskTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Task", function () {
      return Task;
    });

    var Task = function Task(task, id, taskdate, details, userid, progress) {
      _classCallCheck(this, Task);

      this.task = task;
      this.id = id;
      this.taskdate = taskdate;
      this.details = details;
      this.userid = userid;
      this.progress = progress;
    };
    /***/

  },

  /***/
  "./src/app/Models/user.ts":
  /*!********************************!*\
    !*** ./src/app/Models/user.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User(userid, username, email, avatar) {
      _classCallCheck(this, User);

      this.userId = userid;
      this.userName = username;
      this.email = email;
      this.avatar = avatar;
    };
    /***/

  },

  /***/
  "./src/app/Pages/create-task/create-task.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/Pages/create-task/create-task.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCreateTaskCreateTaskPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2NyZWF0ZS10YXNrL2NyZWF0ZS10YXNrLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/Pages/create-task/create-task.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Pages/create-task/create-task.page.ts ***!
    \*******************************************************/

  /*! exports provided: CreateTaskPage */

  /***/
  function srcAppPagesCreateTaskCreateTaskPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateTaskPage", function () {
      return CreateTaskPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/tasks.service */
    "./src/app/Services/tasks.service.ts");

    var CreateTaskPage = /*#__PURE__*/function () {
      function CreateTaskPage(modalCtrl, tasksService) {
        _classCallCheck(this, CreateTaskPage);

        this.modalCtrl = modalCtrl;
        this.tasksService = tasksService;
      }

      _createClass(CreateTaskPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
          });
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.modalCtrl.dismiss(null, 'cancel');
        }
      }, {
        key: "onCreateTask",
        value: function onCreateTask() {
          console.log("New-Task Page From FORM: ", this.form.value.title, this.form.value.description);
          this.tasksService.addTask(this.form.value.title, this.form.value.description).subscribe();
          this.form.reset();
          this.modalCtrl.dismiss(null, 'task created');
        }
      }]);

      return CreateTaskPage;
    }();

    CreateTaskPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_4__["TasksService"]
      }];
    };

    CreateTaskPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-task',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./create-task.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/create-task/create-task.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./create-task.page.scss */
      "./src/app/Pages/create-task/create-task.page.scss"))["default"]]
    })], CreateTaskPage);
    /***/
  },

  /***/
  "./src/app/Services/authService.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/Services/authService.service.ts ***!
    \*************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! amazon-cognito-identity-js */
    "./node_modules/amazon-cognito-identity-js/es/index.js");
    /* harmony import */


    var zen_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! zen-observable */
    "./node_modules/zen-observable/index.js");
    /* harmony import */


    var zen_observable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _Models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Models/user */
    "./src/app/Models/user.ts");
    /* harmony import */


    var _users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./users.service */
    "./src/app/Services/users.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js"); // import { Observable } from 'rxjs/Observable';


    var poolData = {
      UserPoolId: "us-east-2_JQy9YBUJg",
      ClientId: "13fbvqm3f0032tnpqd2cr68jbc"
    };
    var userPool = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUserPool"](poolData);

    var AuthService = /*#__PURE__*/function () {
      function AuthService(navCtrl, router, userServ) {
        _classCallCheck(this, AuthService);

        this.navCtrl = navCtrl;
        this.router = router;
        this.userServ = userServ;
        this.errmessage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AuthService, [{
        key: "register",
        value: function register(email, password) {
          var _this2 = this;

          var attributeList = [];
          return new zen_observable__WEBPACK_IMPORTED_MODULE_3___default.a(function (observer) {
            userPool.signUp(email, password, attributeList, null, function (err, result) {
              if (err) {
                //  console.log("signUp error", err);
                observer.error(err);
              }

              _this2.cognitoUser = result.user; //   console.log("signUp success", result);

              observer.next(result);
              observer.complete();
            });
          });
        }
      }, {
        key: "confirmAuthCode",
        value: function confirmAuthCode(code) {
          var user = {
            Username: this.cognitoUser.username,
            Pool: userPool
          };
          return new zen_observable__WEBPACK_IMPORTED_MODULE_3___default.a(function (observer) {
            var cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUser"](user);
            cognitoUser.confirmRegistration(code, true, function (err, result) {
              if (err) {
                // console.log(err);
                observer.error(err);
              } // console.log("confirmAuthCode() success", result);


              observer.next(result);
              observer.complete();
            });
          });
        }
      }, {
        key: "signIn",
        value: function signIn(email, password) {
          var _this3 = this;

          var self = this;
          var authenticationData = {
            Username: email,
            Password: password
          };
          var authenticationDetails = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["AuthenticationDetails"](authenticationData);
          var userData = {
            Username: email,
            Pool: userPool
          };
          var cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUser"](userData);
          new zen_observable__WEBPACK_IMPORTED_MODULE_3___default.a(function (observer) {
            cognitoUser.authenticateUser(authenticationDetails, {
              onSuccess: function onSuccess(result) {
                //    console.log("result", result);
                observer.next(result);
                observer.complete();
              },
              onFailure: function onFailure(err) {
                // console.log("onFailure", err);
                // self.errmessage.next(err.message);
                self.errmessage.emit(err.message);
                observer.error(err);
              }
            });
          }).subscribe(function (data) {
            // console.log(
            //   "signIn data userPool.getCurrentUser() !=null",
            //  self.isUserPoolLoggedIn()
            // );
            if (self.isUserPoolLoggedIn()) {
              var currentUser = _this3.userServ.getUserByEmail(email);

              if (currentUser != null && currentUser != undefined) {
                self.setLoggedUser(currentUser);
                self.userChange.next(currentUser);
                self.redirectToHome(); // this.sendUser(username);
                // this.sendState(true);
              }
            } else self.redirectToLogin();
          }, function (err) {
            self.errmessage = err.message;
            console.log("signIn err", err.message);
          });
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          // console.log(
          //   "this.getLoggedUser()!=null  ",
          //   this.getLoggedUser() != null && this.getLoggedUser() != undefined
          // );
          try {
            var usr = this.getLoggedUser();
            if (usr == undefined || usr === undefined) return false;else if (usr == null || usr === null) return false; // the  user in the local storage is not null

            return usr.email ? true : false; // check if the email is not null or mepty
          } catch (_a) {
            return false;
          }
        }
      }, {
        key: "isUserPoolLoggedIn",
        value: function isUserPoolLoggedIn() {
          return userPool.getCurrentUser() != null;
        }
      }, {
        key: "getAuthenticatedUser",
        value: function getAuthenticatedUser() {
          // gets the current user from the local storage
          if (this.isLoggedIn()) {
            var usr = new Promise(function (resolve) {
              resolve(userPool.getCurrentUser());
            }).then(function (res) {
              usr = JSON.parse(res["storage"].client);
              return new _Models_user__WEBPACK_IMPORTED_MODULE_4__["User"](usr.userId, usr.userName, usr.email, usr.avatar); //  console.log(".then((res)=>", usr);
            })["catch"](function (err) {//return err;
            });
          } else return null; //return userPool.getCurrentUser();

        }
      }, {
        key: "setLoggedUser",
        value: function setLoggedUser(user) {
          localStorage.setItem("client", JSON.stringify(user));
        }
      }, {
        key: "setGuestUser",
        value: function setGuestUser(email) {
          sessionStorage.setItem("email", email);
        }
      }, {
        key: "getLoggedUser",
        value: function getLoggedUser() {
          var val = localStorage.getItem("client");
          var client = new _Models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
          client = JSON.parse(val); //console.log("getLoggedUser", client);

          return client;
        }
      }, {
        key: "getGuestUser",
        value: function getGuestUser() {
          //return sessionStorage.getItem("email");
          var email = sessionStorage.getItem("email");
          console.log("getGuestUser", email);
          return email;
        }
      }, {
        key: "redirectToHome",
        value: function redirectToHome() {
          //  if (this.checkCurrentUser())
          // console.log("this.navCtrl.navigateRoot(/);");
          this.navCtrl.navigateRoot("tasktracker/home"); //this.router.navigate["/"];
        }
      }, {
        key: "redirectToLogin",
        value: function redirectToLogin() {
          // if (!this.checkCurrentUser())
          this.navCtrl.navigateRoot("index"); // this.router.navigate["login"];
        }
      }, {
        key: "logOut",
        value: function logOut() {
          userPool.getCurrentUser().signOut();
          this.cognitoUser = null;
          localStorage.clear();
          sessionStorage.clear();
          window.location.reload();
          this.redirectToLogin();
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/Services/report.service.ts":
  /*!********************************************!*\
    !*** ./src/app/Services/report.service.ts ***!
    \********************************************/

  /*! exports provided: ReportService */

  /***/
  function srcAppServicesReportServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportService", function () {
      return ReportService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ReportService = /*#__PURE__*/function () {
      function ReportService(httpClient) {
        _classCallCheck(this, ReportService);

        this.httpClient = httpClient;
        this.path = 'https://46odim7l6f.execute-api.us-east-2.amazonaws.com/beta';
      }

      _createClass(ReportService, [{
        key: "getTaskByDateAndId",
        value: function getTaskByDateAndId(id, date) {
          return this.httpClient.get("".concat(this.path, "/task?userid=").concat(id, "&date=").concat(date));
        }
      }, {
        key: "getTasks",
        value: function getTasks() {
          return this.httpClient.get("".concat(this.path, "/task/"));
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          return this.httpClient.get("".concat(this.path, "/id/"));
        }
      }]);

      return ReportService;
    }();

    ReportService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ReportService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ReportService);
    /***/
  },

  /***/
  "./src/app/Services/task-progress-service.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Services/task-progress-service.service.ts ***!
    \***********************************************************/

  /*! exports provided: TaskProgressService */

  /***/
  function srcAppServicesTaskProgressServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskProgressService", function () {
      return TaskProgressService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tasks.service */
    "./src/app/Services/tasks.service.ts");
    /* harmony import */


    var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./users.service */
    "./src/app/Services/users.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var TaskProgressService = /*#__PURE__*/function () {
      function TaskProgressService(taskServ, userServ) {
        _classCallCheck(this, TaskProgressService);

        this.taskServ = taskServ;
        this.userServ = userServ;
        this.userProgressAry = new Array();
        this.UsersTasks = new Array();
        this.taskAry = new Array();
        this.usersAry = new Array();
        this.UsersTasks = this.getTasksGroupByUserId();
        console.log("UsersTasks Print", this.UsersTasks); // this.userProgressAry = this.getUsersProgress(this.UsersTasks);
        // // console.log("getAllTasks", this.taskAry);
        // console.log("this.userProgressAry", this.userProgressAry);
      }

      _createClass(TaskProgressService, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getTasksGroupByUserId",
        value: function getTasksGroupByUserId() {
          var avg = 0;
          var counter = 0;
          var self = this;
          var up;
          var usertasksAry = new Array();
          var userstasks$ = this.taskServ.getAllTasks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (res) {
            return res;
          }));
          var srs$ = userstasks$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["groupBy"])(function (t) {
            return t.userid;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (gr) {
            return gr.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["toArray"])());
          }));
          srs$.subscribe(function (val) {
            usertasksAry.push(val); //console.log("val,",val);
          });
          return usertasksAry;
        }
      }, {
        key: "parsPercentage",
        value: function parsPercentage(val) {
          return parseFloat(val) > 1 ? parseFloat(val) * 0.01 : parseFloat(val);
        }
      }, {
        key: "getUserTasks",
        value: function getUserTasks(userid) {
          var arr = this.userProgressAry.filter(function (x) {
            return x.userId === userid;
          });
          return arr;
        }
      }]);

      return TaskProgressService;
    }();

    TaskProgressService.ctorParameters = function () {
      return [{
        type: _tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"]
      }, {
        type: _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
      }];
    };

    TaskProgressService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], TaskProgressService);
    /***/
  },

  /***/
  "./src/app/Services/tasks.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/Services/tasks.service.ts ***!
    \*******************************************/

  /*! exports provided: TasksService */

  /***/
  function srcAppServicesTasksServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksService", function () {
      return TasksService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Models_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Models/task */
    "./src/app/Models/task.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _Models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../Models/user */
    "./src/app/Models/user.ts");
    /* harmony import */


    var _authService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./authService.service */
    "./src/app/Services/authService.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TasksService = /*#__PURE__*/function () {
      function TasksService(httpClient, auth, router) {
        _classCallCheck(this, TasksService);

        this.httpClient = httpClient;
        this.auth = auth;
        this.router = router;
        this._myTasks = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.loginedUser = new _Models_user__WEBPACK_IMPORTED_MODULE_6__["User"]();
        this.path = "https://46odim7l6f.execute-api.us-east-2.amazonaws.com/beta";

        if (auth.isLoggedIn()) {
          this.loginedUser = this.auth.getLoggedUser();
          console.log("Constr: ", this.loginedUser);
        } else {
          this.router.navigate(["/"]);
          return;
        }
      }

      _createClass(TasksService, [{
        key: "getAllTasks",
        value: function getAllTasks() {
          return this.httpClient.get("".concat(this.path, "/task/"));
        } // API Access // Get all user tasks

      }, {
        key: "fetchMyTasks",
        value: function fetchMyTasks(userId) {
          var _this4 = this;

          // For now, fetch all the task for the userId 0
          // TODO: change API later
          return this.httpClient.get("https://46odim7l6f.execute-api.us-east-2.amazonaws.com/beta/task/?userid=".concat(userId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resData) {
            var tasks = [];

            for (var key in resData) {
              if (resData.hasOwnProperty(key)) {
                tasks.push(new _Models_task__WEBPACK_IMPORTED_MODULE_2__["Task"](resData[key].task, resData[key].id, resData[key].taskdate, resData[key].details, resData[key].userid, parseFloat(resData[key].progress) > 1 ? parseFloat(resData[key].progress) * 0.01 : parseFloat(resData[key].progress)));
              }
            }

            return tasks.sort(function (a, b) {
              return Date.parse(b.taskdate) - Date.parse(a.taskdate);
            }); // order by date DESC
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (tasks) {
            _this4._myTasks.next(tasks);
          }));
        }
      }, {
        key: "getTask",
        value: function getTask(id) {
          return this.httpClient.get("https://46odim7l6f.execute-api.us-east-2.amazonaws.com/beta/task/?taskid=".concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (taskData) {
            return new _Models_task__WEBPACK_IMPORTED_MODULE_2__["Task"](taskData.task, id, taskData.taskdate, taskData.details, taskData.userid, parseFloat(taskData.progress));
          }));
        }
      }, {
        key: "addTask",
        value: function addTask(taskTitle, taskDescription) {
          var _this5 = this;

          console.log("Trying to create task with title: ", taskTitle, " and description: ", taskDescription);
          var currentUserId = this.loginedUser.userId;
          var newTask = Object.create(_Models_task__WEBPACK_IMPORTED_MODULE_2__["Task"]);
          newTask.task = taskTitle;
          newTask.id = null;
          newTask.taskdate = new Date().toISOString().substring(0, 10);
          newTask.details = taskDescription;
          newTask.userid = currentUserId;
          newTask.progress = "0";
          console.log("Create new task target: ", newTask);
          return this.httpClient.post("https://46odim7l6f.execute-api.us-east-2.amazonaws.com/beta/task", newTask).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (resData) {
            newTask.id = resData.taskid;
            return _this5.myTasks;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (tasks) {
            _this5._myTasks.next(tasks.concat(newTask));
          }));
        }
      }, {
        key: "updateTask",
        value: function updateTask(task) {
          var _this6 = this;

          // let index = this.myTasks.findIndex(item => item.id === task.id);
          // this.myTasks[index] = task;
          console.log("Receiving update task: ", task);
          var taskId = task.id;
          var taskName = task.task;
          var taskDesc = task.details;
          var taskProgress = task.progress;
          var taskUserId = task.userid;
          var updatedTasks;
          console.log("Start updating the task with ID: ", taskId);
          return this.myTasks.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (tasks) {
            if (!tasks || tasks.length <= 0) {
              console.log("The list is empty");
              return _this6.fetchMyTasks(_this6.loginedUser.userId); // TODO: This userId must be gotten from user service later
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(tasks);
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (tasks) {
            console.log("Start mapping obejct between task and");
            var updatedTaskIndex = tasks.findIndex(function (tk) {
              return tk.id === taskId;
            });
            updatedTasks = _toConsumableArray(tasks);
            var oldTask = updatedTasks[updatedTaskIndex];
            updatedTasks[updatedTaskIndex] = new _Models_task__WEBPACK_IMPORTED_MODULE_2__["Task"](taskName, oldTask.id, new Date().toString(), taskDesc, taskUserId, taskProgress);
            console.log("Sending update request to the server: ", updatedTasks[updatedTaskIndex]);
            return _this6.httpClient.put("https://46odim7l6f.execute-api.us-east-2.amazonaws.com/beta/task", // { ...updatedTasks[updatedTaskIndex] }
            task);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            console.log("Updating Reqeust Completed!");

            _this6._myTasks.next(updatedTasks);
          }));
        }
      }, {
        key: "deleteTask",
        value: function deleteTask(task) {
          var _this7 = this;

          console.log("Sending delete request to server with task ID: ", task.id);
          return this.httpClient["delete"]("https://46odim7l6f.execute-api.us-east-2.amazonaws.com/beta/task?id=".concat(task.id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            console.log("Handling error locally and rethrowing it...", err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this7.myTasks;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (tasks) {
            _this7._myTasks.next(tasks.filter(function (t) {
              return t.id !== task.id;
            }));
          }));
        }
      }, {
        key: "myTasks",
        get: function get() {
          return this._myTasks.asObservable();
        }
      }]);

      return TasksService;
    }();

    TasksService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _authService_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }];
    };

    TasksService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], TasksService);
    /***/
  },

  /***/
  "./src/app/Services/users.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/Services/users.service.ts ***!
    \*******************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppServicesUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _Models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Models/user */
    "./src/app/Models/user.ts");

    var UsersService = /*#__PURE__*/function () {
      function UsersService(http) {
        _classCallCheck(this, UsersService);

        this.http = http;
        this.usersList = new Array();
        this.path = "https://46odim7l6f.execute-api.us-east-2.amazonaws.com/beta";
        this.getAllUsers();
      }

      _createClass(UsersService, [{
        key: "getAllUsers",
        value: function getAllUsers() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this8 = this;

            var users;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.http.get("".concat(this.path, "/id/")).toPromise();

                  case 2:
                    users = _context.sent;
                    _context.next = 5;
                    return users.forEach(function (u) {
                      _this8.usersList.push(new _Models_user__WEBPACK_IMPORTED_MODULE_3__["User"](u.id, u.name, u.email, "../assets/avatar.svg"));
                    });

                  case 5:
                    return _context.abrupt("return", this.usersList);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "findUserById",
        value: function findUserById(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    return _context2.abrupt("return", this.usersList.find(function (x) {
                      return x.userId === id;
                    }));

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getUserById",
        value: function getUserById(id) {
          var rs = this.http.get("".concat(this.path, "/id/").concat(id)).toPromise();
          var usr = new _Models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
          rs.then(function (res) {
            console.log("res", res);
            usr.userId = res["Items"][0].id.S;
            usr.userName = res["Items"][0].name.S;
            usr.email = res["Items"][0].email.S;
            usr.avatar = "../assets/avatar.svg"; //  console.log(usr);    
            // console.log("res['Items']", res["Items"]);
            // console.log("res['Items'][0] ", res["Items"][0]);
            // console.log("res['Items'][0].id", res["Items"][0].id.S);
          });
          return usr;
        }
      }, {
        key: "getUserByEmail",
        value: function getUserByEmail(email) {
          console.log(this.usersList);
          return this.usersList.find(function (u) {
            return u.email === email;
          });
        }
      }]);

      return UsersService;
    }();

    UsersService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], UsersService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // const routes: Routes = [
    //   {
    //     path: "",
    //     // loadChildren: () =>
    //     //   import("./Pages/home/home.module").then((m) => m.HomePageModule),
    //     component: HomePage,
    //     // loadChildren: './Pages/home/home.module#HomePageModule',
    //      pathMatch: "full",
    //     //redirectTo:"home",
    //     // pathMatch: "prefix",
    //   },
    //   {
    //     path: "home",
    //     loadChildren: () =>
    //       import("./Pages/home/home.module").then((m) => m.HomePageModule),
    //   },
    //   {
    //     path: "tasktracker",
    //     // loadChildren: () =>
    //     //   import("./Pages/tabs/tabs.module").then((m) => m.TabsPageModule),
    //     children: [
    //       { path: "", loadChildren: "./Pages/tabs/tabs.module#TabsPageModule" },
    //       {
    //         path: "team-progress",
    //         loadChildren: "./Pages/tab1/tab1.module#Tab1PageModule",
    //       },
    //       {
    //         path: "reports",
    //         loadChildren: "./Pages/tab2/tab2.module#Tab2PageModule",
    //       },
    //       {
    //         path: "mytasks",
    //         loadChildren: "./Pages/tab3/tab3.module#Tab3PageModule",
    //       },
    //       // {
    //       //   path: "",
    //       //   loadChildren: () =>
    //       //     import("./Pages/tabs/tabs.module").then((m) => m.TabsPageModule),
    //       // },
    //       // {
    //       //   path: "reports",
    //       //   loadChildren: () =>
    //       //     import("./Pages/tab2/tab2.module").then((m) => m.Tab2PageModule),
    //       // },
    //     ],
    //   },
    //   {
    //     path: "create-task",
    //     loadChildren: () =>
    //       import("./Pages/create-task/create-task.module").then(
    //         (m) => m.CreateTaskPageModule
    //       ),
    //   },
    //   {
    //     path: "login",
    //     loadChildren: () =>
    //       import("./Pages/login/login.module").then((m) => m.LoginPageModule),
    //   },
    //   {
    //     path: "create-task",
    //     loadChildren: () =>
    //       import("./Pages/create-task/create-task.module").then(
    //         (m) => m.CreateTaskPageModule
    //       ),
    //   },
    //   // {
    //   //   path: "**",
    //   //   loadChildren: () =>
    //   //     import("./Pages/home/home.module").then((m) => m.HomePageModule),
    //   // },
    // ];


    var routes = [{
      path: '',
      loadChildren: './Pages/tabs/tabs.module#TabsPageModule'
    }, {
      path: 'index',
      loadChildren: './Pages/home/home.module#HomePageModule'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _Services_authService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Services/authService.service */
    "./src/app/Services/authService.service.ts");
    /* harmony import */


    var _Models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Models/user */
    "./src/app/Models/user.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Pages_create_task_create_task_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Pages/create-task/create-task.page */
    "./src/app/Pages/create-task/create-task.page.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent( // private router: ActivatedRoute,
      // private navCtrl: NavController,
      platform, splashScreen, statusBar, auth, menuCtr, router, modalCtrl, navCtrl) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.auth = auth;
        this.menuCtr = menuCtr;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.loggedin = true; // to get this value form Auth service

        this.initializeApp(); //console.log("AppComponent constructor");
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this9 = this;

          this.platform.ready().then(function () {
            _this9.statusBar.styleDefault();

            _this9.splashScreen.hide();
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          if (this.getIsLogged()) {
            this.auth.logOut();
            this.auth.userChange.emit(new _Models_user__WEBPACK_IMPORTED_MODULE_6__["User"]());
            this.closeMenu();
          } // console.log("logout" , this.getIsLogged())
          // if (this.getIsLogged()) this.authServ.userLogout();
          // else return;

        }
      }, {
        key: "getIsLogged",
        value: function getIsLogged() {
          return this.auth.isLoggedIn();
        }
      }, {
        key: "closeMenu",
        value: function closeMenu() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.menuCtr.toggle();

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.menuCtr.enable(true, "main-menu");
          this.menuCtr.open("main-menu");
        }
      }, {
        key: "openTeamProgress",
        value: function openTeamProgress() {
          this.navCtrl.navigateRoot("tasktracker/team-progress");
        }
      }, {
        key: "openNewTaskModal",
        value: function openNewTaskModal() {
          var _this10 = this;

          this.modalCtrl.create({
            component: _Pages_create_task_create_task_page__WEBPACK_IMPORTED_MODULE_8__["CreateTaskPage"]
          }).then(function (modalElement) {
            modalElement.present();
            return modalElement.onDidDismiss();
          }).then(function (resultData) {
            _this10.navCtrl.navigateRoot(["tasktracker/mytasks"]);

            console.log("ResultData: ", resultData);
          });
          this.closeMenu();
        }
      }, {
        key: "openlogin",
        value: function openlogin() {
          this.navCtrl.navigateRoot("tasktracker/login"); //console.log("openlogin")
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _Services_authService_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _Components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./Components/header/header.component */
    "./src/app/Components/header/header.component.ts");
    /* harmony import */


    var _Services_authService_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./Services/authService.service */
    "./src/app/Services/authService.service.ts");
    /* harmony import */


    var _Services_users_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./Services/users.service */
    "./src/app/Services/users.service.ts");
    /* harmony import */


    var _Services_tasks_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./Services/tasks.service */
    "./src/app/Services/tasks.service.ts");
    /* harmony import */


    var _Services_report_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./Services/report.service */
    "./src/app/Services/report.service.ts");
    /* harmony import */


    var _Services_task_progress_service_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./Services/task-progress-service.service */
    "./src/app/Services/task-progress-service.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _Components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(), _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"], _Services_authService_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _Services_users_service__WEBPACK_IMPORTED_MODULE_14__["UsersService"], _Services_tasks_service__WEBPACK_IMPORTED_MODULE_15__["TasksService"], _Services_task_progress_service_service__WEBPACK_IMPORTED_MODULE_17__["TaskProgressService"], _Services_report_service__WEBPACK_IMPORTED_MODULE_16__["ReportService"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/aws-exports.ts":
  /*!****************************!*\
    !*** ./src/aws-exports.ts ***!
    \****************************/

  /*! exports provided: default */

  /***/
  function srcAwsExportsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* eslint-disable */
    // WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.


    var awsmobile = {
      "aws_project_region": "us-east-2",
      "aws_cognito_identity_pool_id": "us-east-2:31e73415-c350-43ba-b0b1-80c79c964d98",
      "aws_cognito_region": "us-east-2",
      "aws_user_pools_id": "us-east-2_9fLoO5YN8",
      "aws_user_pools_web_client_id": "9m3lusa56lgttv1liis3eejil",
      "oauth": {}
    };
    /* harmony default export */

    __webpack_exports__["default"] = awsmobile;
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var aws_amplify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! aws-amplify */
    "./node_modules/aws-amplify/lib-esm/index.js");
    /* harmony import */


    var _aws_exports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./aws-exports */
    "./src/aws-exports.ts");

    aws_amplify__WEBPACK_IMPORTED_MODULE_4__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_5__["default"]);

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Work\LTI\Projects\Ionic\TaskTracker\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map