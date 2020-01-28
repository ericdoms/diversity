import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  isShow: boolean;
  constructor() { 
    this.isShow = false;
  }

  ngOnInit() {
  }
  toggleMenu(action) {
    if (action === 'show') {
      //window.addEventListener('scroll', noScroll);
      this.isShow = true;
    } else {
      //window.removeEventListener('scroll', noScroll);
      this.isShow = false;
    }
  }
}
