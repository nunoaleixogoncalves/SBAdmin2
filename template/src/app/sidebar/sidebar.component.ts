import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  constructor() {
  }

  sidebarToggle() {
    const classBody = document.getElementById('page-top').classList;
    if (classBody.contains('sidebar-toggled')) {
      document.getElementById('page-top').classList.remove('sidebar-toggled');
      document.getElementById('accordionSidebar').classList.remove('toggled');
    } else {
      document.getElementById('page-top').classList.add('sidebar-toggled');
      document.getElementById('accordionSidebar').classList.add('toggled');
    }
  }
}
