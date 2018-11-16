import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  } 
  goToMenu(){
    this.navCtrl.push('MenuPage')
}
  goToPage1(){
    this.navCtrl.push('Page1Page')
  }
  goToPage2(){
    this.navCtrl.push('Page2Page')
  }
  goToPage3(){
    this.navCtrl.push('Page3Page')
  }
  goToPage4(){
    this.navCtrl.push('Page4Page')
  }
  goToPage5(){
    this.navCtrl.push('Page5Page')
  }
  goToPage6(){
    this.navCtrl.push('Page6Page')
  }
  goToPage7(){
    this.navCtrl.push('Page7Page')
  }
  goToPage8(){
    this.navCtrl.push('Page8Page')
  }
  goToPage9(){
    this.navCtrl.push('Page9Page') 
  }
  goToPage10(){
    this.navCtrl.push('Page10Page') 
  }
 
}
