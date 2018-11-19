import { Component } from '@angular/core';
import {ActionSheetController, ModalController} from '@ionic/angular';
import { PartOnePage } from '../part-one/part-one.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public myName;
    constructor( private modal: ModalController, public actionSheetCtrl: ActionSheetController) {

    }
async partOne() {
      if (typeof this.myName === 'undefined') {
        this.myName = '';
      }
      const myModal = await this.modal.create({
          component: PartOnePage,
          componentProps: { value: 'Welcome ' + this.myName}
      });
      this.myName = '';
      return await myModal.present();
}

}
