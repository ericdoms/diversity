import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() menu: EventEmitter<string> = new EventEmitter<string> ();

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menu.emit('hide');
  }

}
