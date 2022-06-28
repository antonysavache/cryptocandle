import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() openMenu = new EventEmitter<boolean>();

  isMenuOpened = false;

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
    this.openMenu.emit(this.isMenuOpened);
  }

}
