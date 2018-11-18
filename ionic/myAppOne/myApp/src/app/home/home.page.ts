import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {
    constructor(private router: Router){}
    
    public toPartOne(url: any, id: any){
        console.log('in method');
        const finalUrl = `${url}/${id}`;
        this.router.navigateByUrl(finalUrl);
    } 
    
}


