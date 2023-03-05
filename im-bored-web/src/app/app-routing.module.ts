import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesPageComponent } from './components/activities-page/activities-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RoutingConst } from './constants/routing.constants';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  { path: RoutingConst.ACTIVITIES_PAGE, component: ActivitiesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
