import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  menuValue:boolean=false;
  menuIcon:string='bi bi-list';

  openMenu() {
    this.menuValue = !this.menuValue;
    this.menuIcon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
    }

    closeMenu() {
      this.menuValue = false;
    this.menuIcon = 'bi bi-list';
      }
}
