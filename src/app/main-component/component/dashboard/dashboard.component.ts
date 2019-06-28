import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards = [
      {
        title: 'Reciclaje',
        description: 'Tomemos consciencia',
        buttonText: 'Button',
        img: 'https://mdbootstrap.com/img/video/forest.mp4'
      },
      {
        title: 'Reino fungi',
        description: 'Some quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Button',
        img: 'https://mdbootstrap.com/img/video/forest.mp4'
      },
      {
        title: 'Zonga geografica',
        description: 'Some quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Button',
        img: 'https://mdbootstrap.com/img/video/Tropical.mp4'
      },
      {
        title: 'Ciclo del agua',
        description: 'Some quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Button',
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
      },
      {
        title: 'Cuerpo humano',
        description: 'Some quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Button',
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
      },
      {
        title: 'Card Title 6',
        description: 'Some quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Button',
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
      },
      {
        title: 'Card Title 7',
        description: 'Some quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Button',
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
      },
      {
        title: 'Card Title 8',
        description: 'Some quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Button',
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
      },
      {
        title: 'Card Title 9',
        description: 'Some quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Button',
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
      },
    ];
    slides: any = [[]];
    chunk(arr, chunkSize) {
      let R = [];
      for (let i = 0, len = arr.length; i < len; i += chunkSize) {
        R.push(arr.slice(i, i + chunkSize));
      }
      return R;
    }
    ngOnInit() {
      this.slides = this.chunk(this.cards, 3);
    }

}
