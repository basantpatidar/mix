import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {musicAlbums} from '../music-album.service';
import {DetailmodalPage} from '../detailmodal/detailmodal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
constructor (private modal: ModalController, public musicDataService: musicAlbums) {}

ngOnInit() {
  this.loadData();
}

loadData() {
  console.log('in loaddata');
  this.musicDataService.getJSONData();
}

async openDetails(myMusicData) {
  const myModal = await this.modal.create({
      component: DetailmodalPage,
      componentProps : { value : myMusicData}
  });
  return await myModal.present();
}

}
