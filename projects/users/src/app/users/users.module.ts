import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users.component';
import {ItemsOneComponent} from "../../../../items/src/app/items/items-one/items-one.component";
import {ItemsTwoComponent} from "../../../../items/src/app/items/page-two/items-two.component";
import {UsersOneComponent} from "../items/page-one/users-one.component";
import {UsersTwoComponent} from "../items/page-two/users-two.component";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'one',
        component: UsersOneComponent,
      }, {
        path: 'two',
        component: UsersTwoComponent,
      },
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
