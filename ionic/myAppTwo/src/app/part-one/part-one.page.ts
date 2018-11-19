import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-part-one',
  templateUrl: './part-one.page.html',
  styleUrls: ['./part-one.page.scss'],
})
export class PartOnePage implements OnInit {

  constructor(private  navParams: NavParams, private modalCtrl: ModalController) {  }
    public myName = this.navParams.get('value');
  ngOnInit() {
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }

}
