webpackJsonp([7],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2PageModule", function() { return Page2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page2__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Page2PageModule = /** @class */ (function () {
    function Page2PageModule() {
    }
    Page2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page2__["a" /* Page2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page2__["a" /* Page2Page */]),
            ],
        })
    ], Page2PageModule);
    return Page2PageModule;
}());

//# sourceMappingURL=page2.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2Page; });
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
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Page2Page = /** @class */ (function () {
    function Page2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Page2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Page2Page');
    };
    Page2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page2',template:/*ion-inline-start:"D:\food\food\src\pages\page2\page2.html"*/'<!--\n  Generated template for the Page2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="ros" class="menu" >\n    <ion-title class="menu">ผัดสะตอกุ้งสด</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-col justify-content-center>\n      <ion-row justify-content-center>\n        <img src="assets/imgs/sator.jpg" width="300" height="170" >\n      </ion-row>\n      \n      <ion-row justify-content-center > \n        <br><h1>ผัดสะตอกุ้งสด</h1><br>\n      </ion-row>\n      \n      <ion-row justify-content-center> \n        <h2> ส่วนผสม </h2>\n        <p> • น้ำพริกแกง 4 ช้อนโต๊ะ<br>\n            • น้ำมันพืช (สำหรับผัด) 1 ช้อนโต๊ะ<br>\n            • กุ้งสด (ปอกเปลือกผ่าหลัง) 100 กรัม<br>\n            • หมูสับ 100 กรัม<br>\n            • น้ำตาลทราย 1 ช้อนโต๊ะ<br>\n            • น้ำปลา 2 ช้อนโต๊ะ<br>\n            • สะตอ (แกะเปลือก) 100 กรัม</p><br>\n      </ion-row>\n      \n      <ion-row justify-content-center > \n        <h2> วิธีทำ </h2>\n        <p>  1. ใส่น้ำมันพืชลงในกระทะ ใส่น้ำพริกแกงลงไปผัดจนหอม <br>\n             2. ใส่หมูสับและกุ้งลงผัดจนสุก ปรุงรสด้วยน้ำตาลปี๊บ และน้ำปลา <br>\n             3. ใส่สะตอลงผัดจนสุกหอม ตักใส่จาน พร้อมเสิร์ฟ</p><br>\n      </ion-row>\n      \n    </ion-col>\n  </ion-content>\n\n<ion-footer>\n    <ion-toolbar color="chom">\n      <ion-icon ios="ios-home" md="md-home" (click)="goToHome()"></ion-icon>\n      <ion-icon ios="ios-list-box" md="md-list-box" (click)="goToMenu()"></ion-icon>\n    </ion-toolbar>\n  </ion-footer>  '/*ion-inline-end:"D:\food\food\src\pages\page2\page2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Page2Page);
    return Page2Page;
}());

//# sourceMappingURL=page2.js.map

/***/ })

});
//# sourceMappingURL=7.js.map