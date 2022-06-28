import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  {

  pages: any = [
    { name: 'Home', link: '/home', icon: 'dashboard' },
    { name: 'Exchanges', link: '/exchanges', icon: 'dynamic_feed' },
  ];
}
