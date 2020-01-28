import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isShow: boolean;
  constructor() { 
    this.isShow = false;
  }

  ngOnInit() {
  }
  toggleMenu(action) {
    if (action === 'show') {
      
      this.isShow = true;
    } else {

      this.isShow = false;
    }
  }
}
