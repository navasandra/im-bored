import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingConst } from 'src/app/constants/routing.constants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  constructor(private router: Router) {}

  navigateToActivities(): void {
    this.router.navigate([RoutingConst.ACTIVITIES_PAGE]);
  }
}
