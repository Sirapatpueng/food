webpackJsonp([0],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page9PageModule", function() { return Page9PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page9__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Page9PageModule = /** @class */ (function () {
    function Page9PageModule() {
    }
    Page9PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page9__["a" /* Page9Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page9__["a" /* Page9Page */]),
            ],
        })
    ], Page9PageModule);
    return Page9PageModule;
}());

//# sourceMappingURL=page9.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page9Page; });
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
 * Generated class for the Page9Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Page9Page = /** @class */ (function () {
    function Page9Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Page9Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Page9Page');
    };
    Page9Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page9',template:/*ion-inline-start:"D:\food\food\src\pages\page9\page9.html"*/'<!--\n  Generated template for the Page9Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="ros" class="menu">\n    <ion-title class="menu">แกงส้มมะละกอกุ้ง</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-col justify-content-center>\n      <ion-row justify-content-center>\n        <img src="assets/imgs/som.jpg" width="300" height="180" >\n    </ion-row>\n        \n    <ion-row justify-content-center > \n      <br><h1>แกงส้มมะละกอกุ้ง</h1><br>\n    </ion-row>\n        \n    <ion-row justify-content-center> \n      <h2> ส่วนผสม </h2>\n      <p> • น้ำพริกแกงใต้ 100 กรัม<br>\n          • น้ำเปล่า<br>\n          • มะละกอดิบ (หั่นเป็นชิ้น) 300 กรัม<br>\n          • น้ำมะขามเปียก <br>\n          • น้ำตาลทราย <br>\n          • กุ้งแม่น้ำ 1-2 ตัว (หรือกุ้งแชบ๊วย)</p><br>\n    </ion-row>\n        \n    <ion-row justify-content-center > \n    <h2> วิธีทำ </h2>\n    <p>  1. ใส่น้ำพริกแกงใต้และมะละกอลงในหม้อ เติมน้ำเปล่าลงไป (กะพอให้ท่วมมะละกอ) <br>\n      คนให้น้ำพริกละลายแล้วเปิดไฟต้ม<br>\n         2. ปรุงรสด้วยน้ำมะขามเปียกและน้ำตาลทราย คนให้เข้ากัน ชิมรสตามชอบ<br>\n         3. พอส่วนผสมเดือดแล้วใส่กุ้งลงไปต้มจนสุก ชิมรสอีกครั้ง ปิดไฟ ตักใส่ถ้วย พร้อมเสิร์ฟ</p>  <br>\n    </ion-row>\n        \n  </ion-col>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar color="chom">\n      <ion-icon ios="ios-home" md="md-home" (click)="goToHome()"></ion-icon>\n      <ion-icon ios="ios-list-box" md="md-list-box" (click)="goToMenu()"></ion-icon>\n    </ion-toolbar>\n  </ion-footer>  '/*ion-inline-end:"D:\food\food\src\pages\page9\page9.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Page9Page);
    return Page9Page;
}());

//# sourceMappingURL=page9.js.map

/***/ })

});
//# sourceMappingURL=0.js.map