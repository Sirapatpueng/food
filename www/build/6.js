webpackJsonp([6],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page3PageModule", function() { return Page3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page3__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Page3PageModule = /** @class */ (function () {
    function Page3PageModule() {
    }
    Page3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page3__["a" /* Page3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page3__["a" /* Page3Page */]),
            ],
        })
    ], Page3PageModule);
    return Page3PageModule;
}());

//# sourceMappingURL=page3.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page3Page; });
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
 * Generated class for the Page3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Page3Page = /** @class */ (function () {
    function Page3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Page3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Page3Page');
    };
    Page3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page3',template:/*ion-inline-start:"D:\food\food\src\pages\page3\page3.html"*/'<!--\n  Generated template for the Page3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="ros" class="menu" >\n    <ion-title  class="menu" >ข้าวยำ</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-col justify-content-center>\n      <ion-row justify-content-center>\n        <img src="assets/imgs/ky.jpg" width="300" height="180" >\n      </ion-row>\n      \n      <ion-row justify-content-center > \n        <br><h1>ข้าวยำ</h1><br>\n      </ion-row>\n      \n      <ion-row justify-content-center> \n        <h2> ส่วนผสม </h2>\n        <p> • กุ้งแห้งป่น<br>\n            • เส้นหมี่ขาว<br>\n            • ซีอิ๊วดำ<br>\n            • ข้าวตังทอด<br>\n            • มะพร้าวคั่ว<br>\n            • มะนาว หรือ มะม่วงเปรี้ยว<br>\n            • พริกป่น<br>\n            • น้ำข้าวยำสำเร็จรูป (ตุ๊ดขี้เกียจทำเลยซื้อแบบสำเร็จ ส่วนมากจะใช้น้ำข้าวยำร้านสินอดุลยพันธ์จากสงขลา <br>\n          แต่ร้านข้าวยำทางเลือกตลาดหลังการบินไทยก็ใช้ได้อยู่นะฮะ)<br>\n            • ข้าวสวยหุงสุกเม็ดเรียงสวย<br>\n            • ผักต่าง ๆ เช่น ถั่วฝักยาวซอย, ถั่วพูซอย, ตะไคร้ซอย, ใบมะกรูดซอย, ใบบัวบกซอย, ใบชะพลูซอย,<br> \n          ถั่วงอกเด็ดหาง, ส้มโอแกะเป็นกลีบดอกไม้พวงชมพู หรือ ดอกดาหลา หรือ ดอกชมพู่มะเหมี่ยว, แตงกวาหั่นแว่น<br>\n  </p>\n      </ion-row>\n      \n      <ion-row justify-content-center > \n        <h2> วิธีทำ </h2>\n        <p>  1. นำกุ้งแห้งมาตำให้ละเอียดและฟู (หรือใส่เครื่องปั่นพอหยาบ ๆ) <br>\n             2. นำเส้นหมี่ขาวไปผัด ใส่ซีอิ๊วดำหวานลงไป ปรุงรสแค่พอเค็ม ๆ หวาน ๆ ผัดให้มันเส้นไม่ติดกันก็พอ<br>\n             3. บิข้าวตังทอดเป็นเศษ ๆ ไว้ <br>\n             4. คั่วมะพร้าวด้วยไฟอ่อน ๆ ให้มีสีเหลืองทอง (หมั่นดูและคนบ่อย ๆ นะฮะ มันไหม้ง่าย)<br>\n             5. ตักข้าวใส่จาน (ปริมาณไม่ต้องเยอะ สักทัพพีน้อย ๆ ก็พอ) หยิบผักอย่างละนิดละหน่อยเรียงให้พอดี <br>\n          จากนั้นโรยกุ้งแห้ง เส้นหมี่ ใส่มะพร้าวคั่ว (ตุ๊ดชอบใส่เยอะ ๆ รสนัวดี) น้ำข้าวยำสัก 2-3 ช้อน ชิมรสตามชอบ <br>\n          ถ้ารสอ่อนก็ค่อยเติม บีบมะนาว โรยพริกป่น คลุกให้ทั่ว</p> <br>\n  \n      </ion-row>\n      \n    </ion-col>\n  </ion-content>\n  \n  <ion-footer>\n      <ion-toolbar color="chom">\n        <ion-icon ios="ios-home" md="md-home" (click)="goToHome()"></ion-icon>\n        <ion-icon ios="ios-list-box" md="md-list-box" (click)="goToMenu()"></ion-icon>\n      </ion-toolbar>\n    </ion-footer>  '/*ion-inline-end:"D:\food\food\src\pages\page3\page3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Page3Page);
    return Page3Page;
}());

//# sourceMappingURL=page3.js.map

/***/ })

});
//# sourceMappingURL=6.js.map