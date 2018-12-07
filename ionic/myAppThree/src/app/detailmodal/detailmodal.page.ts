import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-detailmodal',
  templateUrl: './detailmodal.page.html',
  styleUrls: ['./detailmodal.page.scss'],
})
export class DetailmodalPage implements OnInit {

  constructor(private navParam: NavParams, private modalCtrl: ModalController) { }
  public myMusicDetails = this.navParam.get('value');
  ngOnInit() {
    console.log(this.myMusicDetails);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
