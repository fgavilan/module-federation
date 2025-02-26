import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
}];
