(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+9od":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");





class BookService {
    constructor(http, toastrService) {
        this.http = http;
        this.toastrService = toastrService;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'books';
    }
    getAll() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.http.get(`${this.apiUrl}/getAll`).subscribe((res) => {
                observer.next(res);
            });
        });
    }
    getWithAuthors() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.http.get(`${this.apiUrl}/getWithAuthors`).subscribe((res) => {
                observer.next(res);
            });
        });
    }
    post(data) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.http.post(this.apiUrl, data).subscribe((res) => {
                this.toastrService.success(res.message);
                observer.next(res.object);
            }, (error) => {
                console.log(error);
                this.toastrService.error(error.error.message);
                observer.error(error);
            });
        });
    }
    put(data) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.http.put(this.apiUrl, data).subscribe((res) => {
                this.toastrService.success(res.message);
                observer.next(res.object);
            }, (error) => {
                this.toastrService.error(error.error.message);
                observer.error(error);
            });
        });
    }
    getById(id) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.http
                .get(`${this.apiUrl}/getById/${id}`)
                .subscribe((res) => {
                observer.next(res.object);
            });
        });
    }
}
BookService.ɵfac = function BookService_Factory(t) { return new (t || BookService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
BookService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BookService, factory: BookService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "+UQt":
/*!**************************************!*\
  !*** ./src/app/models/book.model.ts ***!
  \**************************************/
/*! exports provided: Book, BookResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookResponse", function() { return BookResponse; });
/* harmony import */ var _utils_baseClass_modelBaseClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/baseClass/modelBaseClass */ "zHOm");

class Book extends _utils_baseClass_modelBaseClass__WEBPACK_IMPORTED_MODULE_0__["ModelBaseClass"] {
    constructor() {
        super();
    }
}
class BookResponse {
    constructor() { }
}


/***/ }),

/***/ "/FRm":
/*!***************************************!*\
  !*** ./src/app/models/login.model.ts ***!
  \***************************************/
/*! exports provided: Login, LoginResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginResponse", function() { return LoginResponse; });
class Login {
    constructor(options) {
        Object.assign(this, options);
    }
}
class LoginResponse {
    constructor(options) {
        Object.assign(this, options);
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/adityaadhikari/work/mean-project/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:9001/api/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BMNn":
/*!*****************************************************************!*\
  !*** ./src/app/components/app-toolbar/app-toolbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: AppToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppToolbarComponent", function() { return AppToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AppToolbarComponent {
    constructor() { }
    ngOnInit() { }
}
AppToolbarComponent.ɵfac = function AppToolbarComponent_Factory(t) { return new (t || AppToolbarComponent)(); };
AppToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppToolbarComponent, selectors: [["app-toolbar"]], decls: 5, vars: 0, consts: [[1, "app-toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"]], template: function AppToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".app-toolbar[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n.app-toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n.app-toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 8px;\n}\n.app-toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n.app-toolbar#twitter-logo[_ngcontent-%COMP%]:hover, .app-toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC10b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFBRTtFQUNFLGNBQUE7QUFFSjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFDSjtBQUVFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFBSjtBQUdFOztFQUVFLFlBQUE7QUFESiIsImZpbGUiOiJhcHAtdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtdG9vbGJhciB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBpbWcge1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICB9XG5cbiAgI3R3aXR0ZXItbG9nbyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMCA4cHg7XG4gIH1cblxuICAjeW91dHViZS1sb2dvIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG4gIH1cblxuICAmI3R3aXR0ZXItbG9nbzpob3ZlcixcbiAgI3lvdXR1YmUtbG9nbzpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "CfTE":
/*!****************************************!*\
  !*** ./src/app/models/author.model.ts ***!
  \****************************************/
/*! exports provided: Author, AuthorResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return Author; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorResponse", function() { return AuthorResponse; });
/* harmony import */ var _utils_baseClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/baseClass */ "pZOc");
/* harmony import */ var _utils_baseClass_modelBaseClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/baseClass/modelBaseClass */ "zHOm");


class Author extends _utils_baseClass_modelBaseClass__WEBPACK_IMPORTED_MODULE_1__["ModelBaseClass"] {
    constructor() {
        super();
    }
}
class AuthorResponse extends _utils_baseClass__WEBPACK_IMPORTED_MODULE_0__["Response"] {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models */ "VHTt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ "o0su");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.login = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["Login"]();
    }
    ngOnInit() {
        this.removeLocalStorage();
    }
    onSubmit() {
        this.loginService.post(this.login).subscribe((res) => {
            this.router.navigate(['/m/books']);
        });
    }
    removeLocalStorage() {
        localStorage.removeItem('user');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 14, vars: 2, consts: [[1, "login-component", "center"], [1, "login-container", "m-auto", "card", "col-4"], [1, "card-body"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "text", "name", "username", "placeholder", "Enter username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "exampleInputPassword1"], ["type", "text", "name", "password", "placeholder", "Enter password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) { return ctx.login.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.login.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.login.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.login.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".login-component[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbXBvbmVudCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "EFyh":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class LoginService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'login';
    }
    post(data) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observable) => {
            this.http.post(this.apiUrl, data).subscribe((res) => {
                localStorage.setItem('user', JSON.stringify(res));
                observable.next(res);
            }, (error) => {
                console.log(error);
            });
        });
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "G/4p":
/*!*************************************!*\
  !*** ./src/app/containers/index.ts ***!
  \*************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ "Vfs0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return _main_main_component__WEBPACK_IMPORTED_MODULE_0__["MainComponent"]; });




/***/ }),

/***/ "G5LV":
/*!*************************************************!*\
  !*** ./src/app/utils/baseClass/baseResponse.ts ***!
  \*************************************************/
/*! exports provided: Response */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
class Response {
}


/***/ }),

/***/ "N+9M":
/*!********************************************!*\
  !*** ./src/app/services/author.service.ts ***!
  \********************************************/
/*! exports provided: AuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return AuthorService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");





class AuthorService {
    constructor(http, toastrService) {
        this.http = http;
        this.toastrService = toastrService;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'authors';
    }
    getAll() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.http.get(`${this.apiUrl}/getAll`).subscribe((res) => {
                observer.next(res);
            });
        });
    }
    post(data) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.http.post(this.apiUrl, data).subscribe((res) => {
                this.toastrService.success(res.message);
                observer.next(res.object);
            }, (error) => {
                this.toastrService.error(error.error.message);
                observer.error(error);
            });
        });
    }
    put(data) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.http.put(this.apiUrl, data).subscribe((res) => {
                this.toastrService.success(res.message);
                observer.next(res.object);
            }, (error) => {
                this.toastrService.error(error.error.message);
                observer.error(error);
            });
        });
    }
    getById(id) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            this.http
                .get(`${this.apiUrl}/getById/${id}`)
                .subscribe((res) => {
                observer.next(res.object);
            });
        });
    }
}
AuthorService.ɵfac = function AuthorService_Factory(t) { return new (t || AuthorService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
AuthorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthorService, factory: AuthorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "VHTt":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: Book, BookResponse, Login, LoginResponse, Author, AuthorResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _book_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book.model */ "+UQt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return _book_model__WEBPACK_IMPORTED_MODULE_0__["Book"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookResponse", function() { return _book_model__WEBPACK_IMPORTED_MODULE_0__["BookResponse"]; });

/* harmony import */ var _login_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.model */ "/FRm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _login_model__WEBPACK_IMPORTED_MODULE_1__["Login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginResponse", function() { return _login_model__WEBPACK_IMPORTED_MODULE_1__["LoginResponse"]; });

/* harmony import */ var _author_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./author.model */ "CfTE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return _author_model__WEBPACK_IMPORTED_MODULE_2__["Author"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthorResponse", function() { return _author_model__WEBPACK_IMPORTED_MODULE_2__["AuthorResponse"]; });






/***/ }),

/***/ "Vfs0":
/*!***************************************************!*\
  !*** ./src/app/containers/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components */ "lbq7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MainComponent {
    constructor() { }
    ngOnInit() { }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 7, vars: 0, consts: [[1, "app-main"], [1, "content"], [1, "side-bar"], [1, "main-content"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-side-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [src_app_components__WEBPACK_IMPORTED_MODULE_1__["AppToolbarComponent"], src_app_components__WEBPACK_IMPORTED_MODULE_1__["AppSideNavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".app-main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n}\n.app-main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%] {\n  width: 220px;\n  background-color: #2076d21c;\n  height: calc(100vh - 60px);\n}\n.app-main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  padding: 16px;\n  width: calc(100vw - 220px);\n  max-height: calc(100vh - 60px);\n  overflow: overlay;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0FBQUo7QUFDSTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FBQ047QUFDSTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFDTiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1tYWluIHtcbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLnNpZGUtYmFyIHtcbiAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDc2ZDIxYztcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xuICAgIH1cbiAgICAubWFpbi1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDIyMHB4KTtcbiAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcbiAgICAgIG92ZXJmbG93OiBvdmVybGF5O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components */ "lbq7");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers */ "G/4p");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _utils_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/interceptors/auth.interceptor */ "rxt0");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














const APP_INTERCEPTOR = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
    useClass: _utils_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"],
    multi: true,
};
const COTAINERS = [_containers__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]];
const COMMON = [];
const COMPONENTS = [src_app_components__WEBPACK_IMPORTED_MODULE_1__["AppToolbarComponent"], src_app_components__WEBPACK_IMPORTED_MODULE_1__["AppSideNavBarComponent"]];
const PAGES = [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [APP_INTERCEPTOR], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            ...COMMON,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({
                timeOut: 2000,
                preventDuplicates: true,
                positionClass: 'toast-bottom-center',
                progressBar: true,
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _containers__WEBPACK_IMPORTED_MODULE_6__["MainComponent"], src_app_components__WEBPACK_IMPORTED_MODULE_1__["AppToolbarComponent"], src_app_components__WEBPACK_IMPORTED_MODULE_1__["AppSideNavBarComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"]] }); })();


/***/ }),

/***/ "frR4":
/*!***************************************************************************!*\
  !*** ./src/app/components/app-side-nav-bar/app-side-nav-bar.component.ts ***!
  \***************************************************************************/
/*! exports provided: AppSideNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSideNavBarComponent", function() { return AppSideNavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppSideNavBarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    onRouterChange(val) {
        this.router.navigate(['/m/' + val]);
    }
}
AppSideNavBarComponent.ɵfac = function AppSideNavBarComponent_Factory(t) { return new (t || AppSideNavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppSideNavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppSideNavBarComponent, selectors: [["app-side-nav-bar"]], decls: 5, vars: 0, consts: [[1, "app-side-nav-bar"], [1, "side-bar-item", 3, "click"]], template: function AppSideNavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppSideNavBarComponent_Template_div_click_1_listener() { return ctx.onRouterChange("books"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppSideNavBarComponent_Template_div_click_3_listener() { return ctx.onRouterChange("authors"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Authors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".app-side-nav-bar[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: grid;\n  grid-gap: 8px;\n}\n.app-side-nav-bar[_ngcontent-%COMP%]   .side-bar-item[_ngcontent-%COMP%] {\n  background-color: #c7e1ff;\n  border-radius: 12px;\n  padding: 8px;\n}\n.app-side-nav-bar[_ngcontent-%COMP%]   .side-bar-item[_ngcontent-%COMP%]:hover {\n  background-color: #9fcdff;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC1zaWRlLW5hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFDRjtBQUFFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFFSjtBQURJO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBR04iLCJmaWxlIjoiYXBwLXNpZGUtbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtc2lkZS1uYXYtYmFyIHtcbiAgcGFkZGluZzogMTZweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDhweDtcbiAgLnNpZGUtYmFyLWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjN2UxZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZjZGZmO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "lbq7":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: AppSideNavBarComponent, AppToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_side_nav_bar_app_side_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-side-nav-bar/app-side-nav-bar.component */ "frR4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSideNavBarComponent", function() { return _app_side_nav_bar_app_side_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__["AppSideNavBarComponent"]; });

/* harmony import */ var _app_toolbar_app_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-toolbar/app-toolbar.component */ "BMNn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppToolbarComponent", function() { return _app_toolbar_app_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["AppToolbarComponent"]; });





/***/ }),

/***/ "o0su":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: BookService, AuthorService, LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book.service */ "+9od");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return _book_service__WEBPACK_IMPORTED_MODULE_0__["BookService"]; });

/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./author.service */ "N+9M");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return _author_service__WEBPACK_IMPORTED_MODULE_1__["AuthorService"]; });

/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "EFyh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]; });






/***/ }),

/***/ "pZOc":
/*!******************************************!*\
  !*** ./src/app/utils/baseClass/index.ts ***!
  \******************************************/
/*! exports provided: Response, ModelBaseClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseResponse */ "G5LV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return _baseResponse__WEBPACK_IMPORTED_MODULE_0__["Response"]; });

/* harmony import */ var _modelBaseClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modelBaseClass */ "zHOm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelBaseClass", function() { return _modelBaseClass__WEBPACK_IMPORTED_MODULE_1__["ModelBaseClass"]; });





/***/ }),

/***/ "rxt0":
/*!********************************************************!*\
  !*** ./src/app/utils/interceptors/auth.interceptor.ts ***!
  \********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(request, next) {
        const token = localStorage.getItem('user');
        if (token && !request.headers.has('authorization')) {
            request = request.clone({
                headers: request.headers.append('authorization', JSON.parse(token).token),
            });
        }
        // return handle()
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                // do stuff with response if you want
            }
        }, (err) => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                // this.router.navigate(['/']);
            }
        }));
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers */ "G/4p");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    },
    {
        path: 'm',
        component: _containers__WEBPACK_IMPORTED_MODULE_1__["MainComponent"],
        children: [
            {
                path: 'books',
                loadChildren: () => Promise.all(/*! import() | modules-books-books-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-books-books-module")]).then(__webpack_require__.bind(null, /*! ./modules/books/books.module */ "n2S4")).then((m) => m.BooksModule),
            },
            {
                path: 'authors',
                loadChildren: () => Promise.all(/*! import() | modules-authors-authors-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-authors-authors-module")]).then(__webpack_require__.bind(null, /*! ./modules/authors/authors.module */ "0UNk")).then((m) => m.AuthorsModule),
            },
        ],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zHOm":
/*!***************************************************!*\
  !*** ./src/app/utils/baseClass/modelBaseClass.ts ***!
  \***************************************************/
/*! exports provided: ModelBaseClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelBaseClass", function() { return ModelBaseClass; });
class ModelBaseClass {
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map