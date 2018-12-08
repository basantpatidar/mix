import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

/*tslint:disable*/
export class musicAlbums{
public musicData : any;
constructor (private connection : HttpClient){}
  public getJSONData(){
  console.log('in service');
    this.connection.get('./assets/abc.json').subscribe((data:any) => {
      this.musicData = data.musicList;
        }
    )

    return this.musicData;
  }

}


