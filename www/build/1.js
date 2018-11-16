webpackJsonp([1],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page8PageModule", function() { return Page8PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page8__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Page8PageModule = /** @class */ (function () {
    function Page8PageModule() {
    }
    Page8PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page8__["a" /* Page8Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page8__["a" /* Page8Page */]),
            ],
        })
    ], Page8PageModule);
    return Page8PageModule;
}());

//# sourceMappingURL=page8.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page8Page; });
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
 * Generated class for the Page8Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Page8Page = /** @class */ (function () {
    function Page8Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Page8Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Page8Page');
    };
    Page8Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page8',template:/*ion-inline-start:"D:\food\food\src\pages\page8\page8.html"*/'<!--\n  Generated template for the Page8Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="ros" class="menu">\n    <ion-title class="menu">ผัดไทยไชยา</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-col justify-content-center>\n      <ion-row justify-content-center>\n        <img src="assets/imgs/pad.jpg" width="300" height="180" >\n      </ion-row>\n          \n      <ion-row justify-content-center > \n        <br><h1>ผัดไทยไชยา </h1><br>\n      </ion-row>\n          \n      <ion-row justify-content-center> \n        <h2> ส่วนผสมน้ำผัดไท </h2>\n        <p> • น้ำพริกเครื่องก๋วยเตี๋ยว 1 กิโลกรัม (สูตรอยู่ด้านล่าง)\n            • หอมแดง 2 กิโลกรัม\n            • มะขามเปียก 1/2 กิโลกรัม\n            • กะทิ 4 กิโลกรัม\n            • น้ำตาลปี๊บอย่างดี 5 กิโลกรัม\n            • น้ำตาลทราย 1 กิโลกรัม\n            • กะปิ เล็กน้อย\n            • เกลือเม็ด เล็กน้อย\n            • น้ำมันพืช เล็กน้อย</p>\n      </ion-row>\n  \n      <ion-row justify-content-center> \n        <h2> ส่วนผสมน้ำพริกเครื่องก๋วยเตี๋ยว </h2>\n        <p> • พริกแห้งเม็ดใหญ่ 1 กิโลกรัม\n            • หอมแดง 3 กิโลกรัม\n            • เกลือเม็ด เล็กน้อย</p>\n      </ion-row>\n  \n      <ion-row justify-content-center> \n        <h2> ส่วนผสมเครื่องก๋วยเตี๋ยวอื่น ๆ </h2>\n        <p> • ก๋วยเตี๋ยวเส้นเล็ก หรือเส้นหมี่ (ยี่ห้อที่นิยมใช้คือ ตราดอกบัว)\n            • ถั่วงอกดิบ หรือกะหล่ำปลีซอย\n            • ใบกุยช่าย </p>\n      </ion-row>\n          \n      <ion-row justify-content-center > \n        <h2> วิธีทำน้ำพริกเครื่องก๋วยเตี๋ยว </h2>\n        <p>  1. ผ่าพริกแห้งแล้วนำเม็ดออก นำไปแช่น้ำจนนิ่ม เตรียมไว้<br>\n             2. นำหอมแดงไปแช่น้ำแล้วปอกเปลือกออก <br>\n            (เคล็ดลับ:ถ้านำหอมแดงไปแช่น้ำจะทำให้ปอกง่าย และไม่แสบตา) <br>       \n             3. ปั่นผสมพริกแห้งที่แช่น้ำจนนิ่มแล้วกับหอมแดง และเกลือเม็ดจนละเอียด <br>\n            เตรียมไว้สำหรับทำน้ำผัดไทย</p><br>\n      </ion-row>\n  \n      <ion-row justify-content-center > \n        <h2> วิธีทำผัดไทยไชยา </h2>\n        <p>  1. ปอกเปลือกหอมแดงออกแล้วนำไปปั่นให้ละเอียด เตรียมไว้<br>\n             2. นำมะขามเปียกมาคั้นกับน้ำ เตรียมไว้<br>\n             3. ใส่กะทิลงในหม้อ นำขึ้นตั้งไฟไม่ต้องรอให้เดือด ใส่หอมแดงปั่น น้ำมะขามเปียก น้ำตาลปี๊บ <br>\n          น้ำตาลทราย กะปิ และเกลือเม็ดลงไป คนผสมให้ละลายเข้ากัน เคี่ยวจนเดือด ชิมรสตามชอบ <br>\n          (ให้รสชาติหวานนำตามด้วยเปรี้ยว และเค็มตามลำดับ) เคี่ยวต่ออีกสักครู่แล้วปิดไฟ <br>\n          (ไม่ต้องเคี่ยวนานเพราะเดี๋ยวกะทิจะแตกมัน) เตรียมไว้ผัดกับเส้น</p><br>\n      </ion-row>\n  \n      <ion-row justify-content-center > \n        <h2> วิธีทำน้ำพริกเครื่องก๋วยเตี๋ยว </h2>\n        <p>  1. ผัดเส้นก๋วยเตี๋ยว (1 กิโลกรัม) กับน้ำผัดไทย (1.2 กิโลกรัม)<br> <br>\n          *ถ้าน้ำผัดไทยรสชาติเข้มข้นเกินไปให้ใส่น้ำเปล่าเพิ่มลงไป 1 แก้ว* ผัดจนเส้นสุก <br>\n             2. ตักใส่จาน เสิร์ฟพร้อมกับถั่วงอกดิบ และใบกุยช่าย</p><br>\n      </ion-row>\n          \n    </ion-col>\n  </ion-content>\n\n  <ion-footer>\n      <ion-toolbar color="chom">\n        <ion-icon ios="ios-home" md="md-home" (click)="goToHome()"></ion-icon>\n        <ion-icon ios="ios-list-box" md="md-list-box" (click)="goToMenu()"></ion-icon>\n      </ion-toolbar>\n    </ion-footer>  \n'/*ion-inline-end:"D:\food\food\src\pages\page8\page8.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Page8Page);
    return Page8Page;
}());

//# sourceMappingURL=page8.js.map

/***/ })

});
//# sourceMappingURL=1.js.map