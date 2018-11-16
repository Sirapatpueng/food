webpackJsonp([5],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page4PageModule", function() { return Page4PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page4__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Page4PageModule = /** @class */ (function () {
    function Page4PageModule() {
    }
    Page4PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page4__["a" /* Page4Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page4__["a" /* Page4Page */]),
            ],
        })
    ], Page4PageModule);
    return Page4PageModule;
}());

//# sourceMappingURL=page4.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page4Page; });
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
 * Generated class for the Page4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Page4Page = /** @class */ (function () {
    function Page4Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Page4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Page4Page');
    };
    Page4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page4',template:/*ion-inline-start:"D:\food\food\src\pages\page4\page4.html"*/'<!--\n  Generated template for the Page4Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="ros" class="menu">\n    <ion-title class="menu">แกงส้มปลากระบอก</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-col justify-content-center>\n      <ion-row justify-content-center>\n        <img src="assets/imgs/pla.jpg" width="300" height="180" >\n      </ion-row>\n      \n      <ion-row justify-content-center > \n        <br><h1>แกงส้มปลากระบอก </h1><br>\n      </ion-row>\n      \n      <ion-row justify-content-center> \n        <h2> ส่วนผสม </h2>\n        <p> • เครื่องแกงส้มที่โขลกแล้ว (ขมิ้น พริกขี้หนู หอมแดง <br>\n          กระเทียม เกลือ และกะปิอย่างดี) 1 ช้อนโต๊ะ<br>\n            • เนื้อปลากระบอก (หั่นเป็นชิ้นพอคำและลวกสุก)<br>\n            • ผักสด เช่น ยอดมะพร้าว ผักขี้หนู หน่อไม้ดอง และอ้อดิบ)<br>\n            • น้ำตาลปี๊บ<br>\n            • น้ำปลา<br>\n            • น้ำมะนาวสด<br>\n  </p>\n      </ion-row>\n      \n      <ion-row justify-content-center > \n        <h2> วิธีทำ </h2> \n        <p> 1. ต้มน้ำให้เดือด ใส่เครื่องแกงลงไป<br>\n           2. ใส่ผักลงไป พอผักสุก ใส่เนื้อปลากระบอกลงไป รอจนเดือด<br> \n         ปรุงรสด้วยน้ำตาลปี๊บ น้ำปลา และน้ำมะนาวสด พร้อมเสิร์ฟ</p><br>\n      </ion-row>\n      \n    </ion-col>\n  </ion-content>\n\n  <ion-footer>\n      <ion-toolbar color="chom">\n        <ion-icon ios="ios-home" md="md-home" (click)="goToHome()"></ion-icon>\n        <ion-icon ios="ios-list-box" md="md-list-box" (click)="goToMenu()"></ion-icon>\n      </ion-toolbar>\n    </ion-footer>  '/*ion-inline-end:"D:\food\food\src\pages\page4\page4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Page4Page);
    return Page4Page;
}());

//# sourceMappingURL=page4.js.map

/***/ })

});
//# sourceMappingURL=5.js.map