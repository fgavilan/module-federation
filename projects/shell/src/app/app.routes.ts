import {Routes} from '@angular/router';
import {AboutComponent} from './+about/about.component';
import {LandingComponent} from "./+landing/landing.component";
import {LoginComponent} from "./+login/login.component";
import {authGuard} from "./shared/guards/auth.guard";
import {noAuthGuard} from "./shared/guards/no-auth.guard";

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [noAuthGuard]
  },
  {
    path: 'users',
    loadChildren: () =>
      import('users/Module').then((m) => m.UsersModule),
    canMatch: [authGuard],
  },
  {
    path: 'items',
    loadChildren: () =>
      import('items/Module').then((m) => m.ItemsModule),
    canMatch: [authGuard],
  }
];
