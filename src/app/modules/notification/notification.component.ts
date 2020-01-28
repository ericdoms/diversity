import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

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
