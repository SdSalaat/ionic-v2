webpackJsonp([3],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoggedinPage = (function () {
    function LoggedinPage(fire, navCtrl, navParams) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.displayName = fire.auth.currentUser.displayName;
    }
    LoggedinPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoggedinPage');
    };
    return LoggedinPage;
}());
LoggedinPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-loggedin',template:/*ion-inline-start:"/home/asamad/Desktop/WorkSpace/ionic-v2/src/pages/loggedin/loggedin.html"*/'<!--\n  Generated template for the LoggedinPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Welcome {{displayName}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-slides pager>\n\n        <ion-slide>\n            <img src="data:image/png;base64,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" />\n            <img src="https://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" />\n            <br>\n\n            <ion-card>\n                <ion-card-header>\n                    GitHub Issue Link\n                </ion-card-header>\n                <ion-card-content>\n                    Any Issue Regarding This App Click Below and publish it will be solved ASAP<br/>\n                    <b><i><a class="aTag" target="_system" href="https://github.com/SdSalaat/ionic-v2/issues/new"> <ion-icon name="md-warning"></ion-icon> Create Issue</a></i></b>\n                </ion-card-content>\n            </ion-card>\n\n        </ion-slide>\n\n        <ion-slide>\n            <img class="imageId" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Star_background.svg/424px-Star_background.svg.png" />\n            <img src="https://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" />\n            <br>\n\n            <ion-card>\n                <ion-card-header>\n                    GitHub Link\n                </ion-card-header>\n                <ion-card-content>\n                    Give a star on Repositories will be  totally Appreciated<br/>\n                    <b><i><a class="aTag" target="_system" href="https://github.com/sdsalaat"> <ion-icon name="md-star"></ion-icon> Star Repository</a></i></b>\n                </ion-card-content>\n            </ion-card>\n\n        </ion-slide>\n\n        <ion-slide>\n\n            <img src="http://thatcrazyoilylife.com/uploads/3/4/8/6/34863172/lets-connect_orig.jpg" />\n            <img class="imgF" src="https://blog.addthiscdn.com/wp-content/uploads/2015/11/logo-facebook.png" />\n            <br>\n\n            <ion-card>\n                <ion-card-header>\n                    Facebook Profile\n                </ion-card-header>\n                <ion-card-content>\n                    Lets Get Social Follow me on Facebook<br/>\n                    <b><i><a class="aTag" target="_system" href="https://www.facebook.com/abdul.samad811"> <ion-icon name="logo-facebook"></ion-icon> Follow </a></i></b>\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n\n    </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/asamad/Desktop/WorkSpace/ionic-v2/src/pages/loggedin/loggedin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], LoggedinPage);

//# sourceMappingURL=loggedin.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loggedin_loggedin__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(fire, alertCtrl, navCtrl, navParams) {
        this.fire = fire;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: "Info!",
            subTitle: message,
            buttons: ['COOL']
        }).present();
    };
    LoginPage.prototype.signInUser = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.username.value, this.password.value)
            .then(function (data) {
            console.log(data);
            _this.alert("Suucessfully Logged In...");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__loggedin_loggedin__["a" /* LoggedinPage */]);
        })
            .catch(function (error) {
            console.log(error);
            _this.alert(error.message);
        });
        console.log('Signing in with ' + this.username.value + ' and ' + this.password.value);
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('username'),
    __metadata("design:type", Object)
], LoginPage.prototype, "username", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('password'),
    __metadata("design:type", Object)
], LoginPage.prototype, "password", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/asamad/Desktop/WorkSpace/ionic-v2/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login User\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" #username></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" #password></ion-input>\n    </ion-item>\n\n    <div padding>\n      <button ion-button block color="twitter" (click)="signInUser()">Sign In</button>\n    </div>\n  </ion-list>\n</ion-content>\nZ\n'/*ion-inline-end:"/home/asamad/Desktop/WorkSpace/ionic-v2/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(fire, navCtrl, navParams) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.registerUser = function () {
        var _this = this;
        this.fire.auth.createUserWithEmailAndPassword(this.username.value, this.password.value)
            .then(function (data) {
            data.updateProfile({ 'displayName': _this.displayName.value })
                .then(function (data) {
                console.log(data);
                _this.navCtrl.pop();
            });
        })
            .catch(function (error) {
            console.log(error);
        });
        console.log('registering with ' + this.username.value + ' and ' + this.password.value);
    };
    return RegisterPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('username'),
    __metadata("design:type", Object)
], RegisterPage.prototype, "username", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('password'),
    __metadata("design:type", Object)
], RegisterPage.prototype, "password", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('displayName'),
    __metadata("design:type", Object)
], RegisterPage.prototype, "displayName", void 0);
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/home/asamad/Desktop/WorkSpace/ionic-v2/src/pages/register/register.html"*/'<ion-header >\n  <ion-navbar>\n    <ion-title>\n      Create Account\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding setScrollDisabled="true" >\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Full Name</ion-label>\n      <ion-input type="text" #displayName></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" #username></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" #password></ion-input>\n    </ion-item>\n\n    <div padding>\n      <button ion-button block color="twitter" (click)="registerUser()">register</button>\n    </div>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/home/asamad/Desktop/WorkSpace/ionic-v2/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/loggedin/loggedin.module": [
		317,
		2
	],
	"../pages/login/login.module": [
		318,
		1
	],
	"../pages/register/register.module": [
		319,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    HomePage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.signIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/asamad/Desktop/WorkSpace/ionic-v2/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Social Network\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div id="topButtons">\n    <div padding>\n      <button ion-button round block color="twitter" (click)="register()">Register</button>\n    </div>\n\n    <div padding>\n      <button ion-button round block color="dark" (click)="signIn()">Sign In</button>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/asamad/Desktop/WorkSpace/ionic-v2/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_loggedin_loggedin__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var firebaseAuth = {
    apiKey: "AIzaSyCaY-LnyxlfoC07hzh1uk_UV88XABMhVvo",
    authDomain: "test-project-ionic2.firebaseapp.com",
    databaseURL: "https://test-project-ionic2.firebaseio.com",
    projectId: "test-project-ionic2",
    storageBucket: "test-project-ionic2.appspot.com",
    messagingSenderId: "628430462201"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_loggedin_loggedin__["a" /* LoggedinPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/loggedin/loggedin.module#LoggedinPageModule', name: 'LoggedinPage', segment: 'loggedin', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
            __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_loggedin_loggedin__["a" /* LoggedinPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/asamad/Desktop/WorkSpace/ionic-v2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/asamad/Desktop/WorkSpace/ionic-v2/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map