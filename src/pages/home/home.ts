import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MenuPage } from '../menu/menu';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  MnPage = MenuPage
  constructor(public navCtrl: NavController) {
  }

  ongoToHome(){
    this.navCtrl.push('HomePage');
 
}
  ongoToMenu(){
    this.navCtrl.push(this.MnPage)
}

}
