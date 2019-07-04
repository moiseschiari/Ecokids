import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss']
})
export class AnimalesComponent implements OnInit {

  constructor(private router: Router) { }
  cards = [
    {
      url: "animal-text",
      title: 'Clasificación de los seres vivos',
      description: 'Vas a aprender sobre la claisficación de los seres vivos y sus respectivos reinos.',
      buttonText: 'Comenzemos!',
      img: 'https://elblogverde.com/wp-content/uploads/2017/05/reino-metazoos-600x437.jpg'
      
      
    },
    {
      url: "",
      title: 'Animales vertebrados',
      description: 'Todo animal que tenga estructura ósea pertecene aquí.',
      buttonText: 'Comenzemos',
      img: 'https://www.animalesvertebrados.org/wp-content/uploads/2018/12/HÁBITAT-ANIMALES-VERTEBRADOS.png'

	    },
    {
      url: "",
      title: 'Animales invertebrados',
      description: 'Gusanos, sanjiguelas, medusas, van a pertenecer a este grupo.',
      buttonText: 'Comenzemos',
      img: 'https://carpetapedagogica.com/img/articulos/animales-invertebrados.jpg'
    }
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
