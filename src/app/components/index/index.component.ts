import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  card_arr: any = [];

  constructor() {
    this.card_arr = [
      {
        path: '/assets/images/card-previews/Flyer.jpg',
        name: 'Flyer',
        width: 150,
        height: 1200
      }, {
        path: '/assets/images/card-previews/News Letter.jpg',
        name: 'News Letter',
        width: 650,
        height: 1100
      }, {
        path: '/assets/images/card-previews/Magazine.jpg',
        name: 'Magazine',
        width: 650,
        height: 1000
      }, {
        path: '/assets/images/card-previews/Open House.jpg',
        name: 'Open House',
        width: 900,
        height: 1000
      }, {
        path: '/assets/images/card-previews/Greeting Card.jpg',
        name: 'Greeting Card',
        width: 650,
        height: 1000
      }, {
        path: '/assets/images/card-previews/Postcard.jpg',
        name: 'Postcard',
        width: 600,
        height: 800
      }
    ]
  }

  ngOnInit() {
  }

}
