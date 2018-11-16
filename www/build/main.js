webpackJsonp([11],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.goToMenu = function () {
        this.navCtrl.push('MenuPage');
    };
    MenuPage.prototype.goToPage1 = function () {
        this.navCtrl.push('Page1Page');
    };
    MenuPage.prototype.goToPage2 = function () {
        this.navCtrl.push('Page2Page');
    };
    MenuPage.prototype.goToPage3 = function () {
        this.navCtrl.push('Page3Page');
    };
    MenuPage.prototype.goToPage4 = function () {
        this.navCtrl.push('Page4Page');
    };
    MenuPage.prototype.goToPage5 = function () {
        this.navCtrl.push('Page5Page');
    };
    MenuPage.prototype.goToPage6 = function () {
        this.navCtrl.push('Page6Page');
    };
    MenuPage.prototype.goToPage7 = function () {
        this.navCtrl.push('Page7Page');
    };
    MenuPage.prototype.goToPage8 = function () {
        this.navCtrl.push('Page8Page');
    };
    MenuPage.prototype.goToPage9 = function () {
        this.navCtrl.push('Page9Page');
    };
    MenuPage.prototype.goToPage10 = function () {
        this.navCtrl.push('Page10Page');
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"D:\food\food\src\pages\menu\menu.html"*/'<!--\n  Generated template for the MenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n    <ion-navbar color="ros" class="menu"  >\n      <ion-title class="menu"><br>อาหารปักษ์ใต้หรอยแรง</ion-title>  \n    </ion-navbar>\n</ion-header>\n  \n<ion-content padding class="ff">\n    <div style="text-align:left"> \n        \n        <div class="ss">\n            <img src="assets/imgs/kuakling.jpg" width="60" height="50" >\n            <span style=" \n            border-radius: 5px; padding: 2px 5px; font-size: 22px;  \n            margin: 20px 0px 0px 20px;   " (click)="goToPage1()">คั่วกลิ้ง</span>  <br>\n         </div>\n  \n         <div class="ss">\n            <img src="assets/imgs/sator.jpg" width="60" height="50" >\n            <span style=" \n            border-radius: 5px; padding: 2px 5px; font-size: 22px; \n            margin: 20px 0px 0px 20px;" (click)="goToPage2()" >ผัดสะตอกุ้งสด</span><br>\n        </div>\n  \n        <div class="ss">\n            <img src="assets/imgs/ky.jpg" width="60" height="50" >\n            <span style=" \n            border-radius: 5px; padding: 2px 5px; font-size: 22px; \n            margin: 20px 0px 0px 20px;" (click)="goToPage3()">ข้าวยำ </span><br>\n        </div>\n       \n        <div class="ss">\n            <img src="assets/imgs/pla.jpg" width="60" height="50" >\n            <span style=" \n            border-radius: 5px; padding: 2px 5px; font-size: 22px;\n            margin: 20px 0px 0px 20px;" (click)="goToPage4()">แกงส้มปลากระบอก </span><br>\n         </div> \n  \n         <div class="ss">\n            <img src="assets/imgs/taipla.jpg" width="60" height="50" >\n            <span style=" \n            border-radius: 5px; padding: 2px 5px; font-size: 22px;\n            margin: 20px 0px 0px 20px;" (click)="goToPage5()" >แกงไตปลา </span><br>\n        </div>\n  \n        <div class="ss">\n            <img src="assets/imgs/pig.jpg" width="60" height="50" >\n            <span style=" \n            border-radius: 5px; padding: 2px 5px; font-size: 22px;\n            margin: 20px 0px 0px 20px;" (click)="goToPage6()">กระดูกหมูต้มใบชะมวง</span><br>\n        </div>\n  \n        <div class="ss">\n            <img src="assets/imgs/egg.jpg" width="60" height="50" >\n            <span style=" \n            border-radius: 5px; padding: 2px 5px; font-size: 22px;\n            margin: 20px 0px 0px 20px;" (click)="goToPage7()">ผักเหลียงผัดไข่ </span><br>\n        </div>\n  \n        <div class="ss">\n            <img src="assets/imgs/pad.jpg" width="60" height="50" >\n            <span style=" \n            border-radius: 5px; padding: 2px 5px; font-size:22px;\n            margin: 20px 0px 0px 20px;" (click)="goToPage8()" >ผัดไทยไชยา</span><br>\n        </div>\n  \n        <div class="ss">\n            <img src="assets/imgs/som.jpg" width="60" height="50" >\n            <span style=" \n            border-radius: 5px; padding: 2px 5px; font-size: 22px;\n            margin: 20px 0px 0px 20px;" (click)="goToPage9()">แกงส้มมะละกอกุ้ง</span><br>\n         </div>\n  \n         <div class="ss">\n            <img src="assets/imgs/pu.jpg" width="60" height="50" >\n            <span style=" \n            border-radius: 5px; padding: 2px 5px; font-size: 22px;\n            margin: 20px 0px 0px 20px;" (click)="goToPage10()">ขนมจีนน้ำยาปู</span><br>\n        </div>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar color="chom">\n        <ion-icon ios="ios-home" md="md-home" (click)="goToHome()"></ion-icon>\n        <ion-icon ios="ios-list-box" md="md-list-box" (click)="goToMenu()"></ion-icon>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"D:\food\food\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/menu/menu.module": [
		269,
		10
	],
	"../pages/page1/page1.module": [
		270,
		8
	],
	"../pages/page10/page10.module": [
		271,
		9
	],
	"../pages/page2/page2.module": [
		272,
		7
	],
	"../pages/page3/page3.module": [
		273,
		6
	],
	"../pages/page4/page4.module": [
		274,
		5
	],
	"../pages/page5/page5.module": [
		275,
		4
	],
	"../pages/page6/page6.module": [
		276,
		3
	],
	"../pages/page7/page7.module": [
		277,
		2
	],
	"../pages/page8/page8.module": [
		279,
		1
	],
	"../pages/page9/page9.module": [
		278,
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
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page1/page1.module#Page1PageModule', name: 'Page1Page', segment: 'page1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page10/page10.module#Page10PageModule', name: 'Page10Page', segment: 'page10', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page2/page2.module#Page2PageModule', name: 'Page2Page', segment: 'page2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page3/page3.module#Page3PageModule', name: 'Page3Page', segment: 'page3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page4/page4.module#Page4PageModule', name: 'Page4Page', segment: 'page4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page5/page5.module#Page5PageModule', name: 'Page5Page', segment: 'page5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page6/page6.module#Page6PageModule', name: 'Page6Page', segment: 'page6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page7/page7.module#Page7PageModule', name: 'Page7Page', segment: 'page7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page9/page9.module#Page9PageModule', name: 'Page9Page', segment: 'page9', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page8/page8.module#Page8PageModule', name: 'Page8Page', segment: 'page8', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\food\food\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\food\food\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.MnPage = __WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */];
    }
    HomePage.prototype.ongoToHome = function () {
        this.navCtrl.push('HomePage');
    };
    HomePage.prototype.ongoToMenu = function () {
        this.navCtrl.push(this.MnPage);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\food\food\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="chom">\n    <ion-title> อาหารปักษ์ใต้หรอยแรง </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding >\n  <ion-col justify-content-center>\n    <ion-row justify-content-center>\n      <img src="assets/imgs/food.jpg" width="300" height="150" >\n    </ion-row>\n\n    <ion-row justify-content-center > \n      <br>\n       อาหารภาคใต้<br>\n    </ion-row>\n\n    <ion-row justify-content-center> \n      <p> อาหารไทยภาคใต้ เป็นอาหารไทยที่นิยมรับประทานในภาคใต้ โดยมีลักษณะเฉพาะตัว \n      ที่มีเครื่องเทศเป็นหลัก ซึ่งอาหารไทยในภาคใต้มีความหลากหลายไปตามกลุ่มวัฒนธรรมต่างๆ\n      ที่โดดเด่น คือ อาหารของชาวไทยพุทธ ชาวไทยมุสลิมในจังหวัดชายแดนภาคใต้ที่มีเชื้อสาย\n      มลายู และกลุ่มชาวไทยเชื้อสายจีน โดยเฉพาะในจังหวัดภูเก็ตนอกจากนั้น อาหารในแถบ\n      ทะเลอันดามัน อ่าวไทย และทะเลสาบสงขลาก็มีลักษณะเด่นเฉพาะกลุ่มเช่นกัน <p>\n    </ion-row>\n\n    <ion-row justify-content-center > \n        เอกลักษณ์ของอาหารภาคใต้\n      </ion-row>\n\n      <ion-row justify-content-center> \n        <p> อาหารภาคใต้ มีเอกลักษณ์สำคัญ คือ รสชาติเผ็ด ด้วยพริกแกงใต้ ที่มีเครื่องเทศต่างๆ\n        พริกแกงใต้สีเหลือง ได้มาจากสีของขมิ้น ซึ่งขมิ้นนั้นสามารถแก้รสคาวได้ รสเค็มจะได้จาก กะปิ\n        อาหารที่ใต้ รสชาติเผ็ดร้อน เค็ม เปรี้ยว ไม่นิยมหวาน <p>                 \n      </ion-row>\n  </ion-col>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="chom">\n    <ion-icon ios="ios-home" md="md-home" (click)="ongoToHome()"></ion-icon>\n    <ion-icon ios="ios-list-box" md="md-list-box" (click)="ongoToMenu()"></ion-icon>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"D:\food\food\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map