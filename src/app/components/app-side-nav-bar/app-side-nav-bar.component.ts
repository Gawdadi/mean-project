import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './app-side-nav-bar.component.html',
  styleUrls: ['./app-side-nav-bar.component.scss'],
})
export class AppSideNavBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onRouterChange(val: string) {
    this.router.navigate(['/m/' + val]);
  }
}
