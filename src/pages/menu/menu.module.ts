import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from '../home/home';
import { MenuPage } from '../menu/menu';


@NgModule({
  declarations: [
    HomePage,
    MenuPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuPage),
  ],
})
export class MenuPageModule {}
