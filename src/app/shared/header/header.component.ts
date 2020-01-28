import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() menuHeader: string;

  @Output() menu: EventEmitter<string> = new EventEmitter<string>();

  isLoggedIn: boolean;
  isMenu: boolean;

  constructor() { }

  ngOnInit() {
    this.isLoggedIn = false;
    this.isMenu = true;

    if(this.menuHeader){
      this.isMenu = false;
    }
    console.log(this.menuHeader);
  }

  toggleMenu() {
    this.menu.emit('show');
  }

}
