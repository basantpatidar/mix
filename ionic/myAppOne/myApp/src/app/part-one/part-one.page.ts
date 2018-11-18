import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-one',
  templateUrl: './part-one.page.html',
  styleUrls: ['./part-one.page.scss'],
})
export class PartOnePage implements OnInit {

    public myParam: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.myParam = this.route.snapshot.paramMap.get('id');
  }

}
