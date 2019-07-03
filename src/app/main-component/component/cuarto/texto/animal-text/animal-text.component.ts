import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-text',
  templateUrl: './animal-text.component.html',
  styleUrls: ['./animal-text.component.scss']
})
export class AnimalTextComponent implements OnInit {

  constructor() { }

  cards = [
    {
      title: 'Reino Animal',
      img: 'http://2.bp.blogspot.com/-kfg5-FfLGeQ/UbYbG57dAQI/AAAAAAAAAAM/ojvBgY7QVdM/s400/elefante-animales-selva.jpg'
    },
    {
      title: 'Reino Vegetal',
      img: 'https://concepto.de/wp-content/uploads/2019/03/reino-plantae-item-4.jpg'
    },
    {
      title: 'Reino hongos',
      img: 'https://okdiario.com/img/2017/11/09/hongos-655x368.jpg'
    },
    {
      title: 'Reino protoctistas',
      img: 'https://10celula.com/wp-content/uploads/2018/08/Qué-es-el-Reino-Protista-2-.png'
    },
    {
      title: 'Reino Mónera',
      img: 'https://conceptodefinicion.de/wp-content/uploads/2017/11/Reino_Mónera.jpg'},
    {
      img: 'https://1.bp.blogspot.com/-b5j0KEUzVUA/WCXo_vr3QtI/AAAAAAAAACY/YWlOEaKdeQAym1wmVmePHjMG8e9zB7i1QCLcB/s1600/los-5-reinos-2-728.jpg'
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
