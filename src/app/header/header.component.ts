import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {

  }
  subHeaderVisibility() {
    return this.router.url == "/women" || this.router.url == "/men";
  }
}
