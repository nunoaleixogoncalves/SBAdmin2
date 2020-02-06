import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  constructor() {
  }

  sidebarToggle() {
    const classBody = document.getElementById('page-top').className;
    if (classBody === 'sidebar-toggled') {
      document.getElementById('page-top').className = '';
      document.getElementById('accordionSidebar').className = 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion';
    } else {
      document.getElementById('page-top').className = 'sidebar-toggled';
      document.getElementById('accordionSidebar').className = 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled';
    }
  }
}
