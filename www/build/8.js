webpackJsonp([8],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1PageModule", function() { return Page1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page1__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Page1PageModule = /** @class */ (function () {
    function Page1PageModule() {
    }
    Page1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page1__["a" /* Page1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page1__["a" /* Page1Page */]),
            ],
        })
    ], Page1PageModule);
    return Page1PageModule;
}());

//# sourceMappingURL=page1.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1Page; });
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
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Page1Page = /** @class */ (function () {
    function Page1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Page1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Page1Page');
    };
    Page1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page1',template:/*ion-inline-start:"D:\food\food\src\pages\page1\page1.html"*/'<!--\n  Generated template for the Page1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="ros" class="menu"  >\n    <ion-title class="menu" > คั่วกลิ้ง </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-col justify-content-center>\n      <ion-row justify-content-center>\n        <img src="assets/imgs/kuakling.jpg" width="300" height="180" >\n      </ion-row><br>\n  \n      <ion-row justify-content-center> <br>\n        <h2> ส่วนผสม </h2>\n        <p> • หมูเนื้อแดงสับ 200 กรัม <br>\n            • น้ำพริกคั่วกลิ้ง 2 ช้อนโต๊ะ (เพิ่ม-ลดได้ตามความเผ็ดที่ชอบ)<br>\n            • กะปิอย่างดี 1/2 ช้อนชา (ควรชิมรสชาติของน้ำพริกแกงก่อนใส่กะปิ เพราะน้ำพริกแกงแต่ละร้านมีความเค็มไม่เท่ากัน)<br>\n            • น้ำตาลปี๊บ 1/2 ช้อนชา<br>\n            • น้ำปลา (ปรุงรส) 1 ช้อนชา<br>\n            • น้ำมันพืช (สำหรับผัด)<br>\n            • ใบมะกรูดซอย 6 ใบ<br>\n            • พริกไทยอ่อน 1 ช่อ</p><br>\n      </ion-row>\n  \n      <ion-row justify-content-center > \n        <h2> วิธีทำ </h2>\n        <p> 1. โขลกน้ำพริกคั่วกลิ้งกับกะปิให้พอเข้ากัน เตรียมไว้<br>\n           2. ใส่น้ำมันพืชลงในกระทะ พอร้อนใส่เนื้อหมูสับลงไปผัดจนเกือบสุก <br>\n           3. จากนั้นใส่น้ำพริกคั่วกลิ้งลงไปผัดกับหมูสับให้เข้ากัน ปรุงรสด้วยน้ำตาลปี๊บและน้ำปลา ผัดให้เข้ากัน ชิมรสตามชอบ<br>\n           4. ปิดไฟแล้วใส่พริกไทยอ่อนและใบมะกรูดซอยลงไปผัดให้เข้ากัน ตักใส่จาน เสิร์ฟพร้อมกับผักสดตามชอบ</p><br>\n      </ion-row>\n  \n    </ion-col>\n  </ion-content>\n  \n  <ion-footer>\n      <ion-toolbar color="chom">\n        <ion-icon ios="ios-home" md="md-home" (click)="goToHome()"></ion-icon>\n        <ion-icon ios="ios-list-box" md="md-list-box" (click)="goToMenu()"></ion-icon>\n      </ion-toolbar>\n    </ion-footer>  '/*ion-inline-end:"D:\food\food\src\pages\page1\page1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Page1Page);
    return Page1Page;
}());

//# sourceMappingURL=page1.js.map

/***/ })

});
//# sourceMappingURL=8.js.map