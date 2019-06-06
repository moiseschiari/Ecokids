import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    @ViewChild('sidenav') sidenav: ElementRef;

    clicked: boolean;

    constructor() {
      this.clicked = this.clicked === undefined ? false : true;
    }

    ngOnInit() {
    }

    setClicked(val: boolean): void {
      this.clicked = val;
    }


}
