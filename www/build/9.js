webpackJsonp([9],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page10PageModule", function() { return Page10PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page10__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Page10PageModule = /** @class */ (function () {
    function Page10PageModule() {
    }
    Page10PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page10__["a" /* Page10Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page10__["a" /* Page10Page */]),
            ],
        })
    ], Page10PageModule);
    return Page10PageModule;
}());

//# sourceMappingURL=page10.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page10Page; });
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
 * Generated class for the Page10Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Page10Page = /** @class */ (function () {
    function Page10Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Page10Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Page10Page');
    };
    Page10Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page10',template:/*ion-inline-start:"D:\food\food\src\pages\page10\page10.html"*/'<!--\n  Generated template for the Page10Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="ros" class="menu">\n    <ion-title class="menu">ขนมจีนน้ำยาปู</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-col justify-content-center>\n      <ion-row justify-content-center>\n        <img src="assets/imgs/pu.jpg" width="300" height="180" >\n      </ion-row>\n          \n      <ion-row justify-content-center > \n        <br><h1>ขนมจีนน้ำยาปู</h1><br>\n      </ion-row>\n          \n      <ion-row justify-content-center> \n        <h2> ส่วนผสม </h2>\n        <p> • หัวกะทิกับหางกะทิ 2 กิโลกรัม<br>\n            • พริกแกงใต้ 500 กรัม<br>\n            • กรรเชียงปู 800-1,000 กรัม<br>\n            • น้ำตาลปี๊บ (ตามชอบ)<br>\n            • เกลือ (ตามชอบ)<br>\n            • ส้มแขก (ตามชอบ)<br>\n            • ขนมจีน<br>\n            • ผักซอย (ตามชอบ)<br>\n            • ไข่ต้ม</p><br>\n      </ion-row>\n          \n      <ion-row justify-content-center > \n        <h2> วิธีทำ </h2>\n        <p>  1. เคี่ยวหัวกะทิให้แตกมัน จากนั้นใส่พริกแกงใต้ลงไปผัดให้หอม<br>\n             2. ใส่หางกะทิลงไปคนให้เข้ากัน ปรุงรสเค็มหวานตามชอบ ใส่ส้มแขกลงไป<br>\n            จะทำให้มีรสเปรี้ยวเล็กน้อย ปล่อยให้เดือด<br> \n             3. ใส่เนื้อปูลงไปคนให้เข้ากันอย่างเบามือเพื่อไม่ให้เนื้อปูแตก ปล่อยให้เดือดอีกครั้ง ปิดไฟ<br>\n             4. ตักราดขนมจีน กินพร้อมผักซอย ไข่ต้ม (มันดีงามมาก ๆ)</p><br>\n      </ion-row>\n          \n    </ion-col>\n  </ion-content>\n  \n  <ion-footer>\n      <ion-toolbar color="chom">\n        <ion-icon ios="ios-home" md="md-home" (click)="goToHome()"></ion-icon>\n        <ion-icon ios="ios-list-box" md="md-list-box" (click)="goToMenu()"></ion-icon>\n      </ion-toolbar>\n    </ion-footer>  '/*ion-inline-end:"D:\food\food\src\pages\page10\page10.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Page10Page);
    return Page10Page;
}());

//# sourceMappingURL=page10.js.map

/***/ })

});
//# sourceMappingURL=9.js.map