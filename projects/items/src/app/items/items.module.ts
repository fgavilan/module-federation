import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemsComponent} from './items.component';
import {RouterModule, Routes} from '@angular/router';
import {ItemsOneComponent} from "./items-one/items-one.component";
import {ItemsTwoComponent} from "./page-two/items-two.component";

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
    children: [
      {
        path: 'one',
        component: ItemsOneComponent,
      }, {
        path: 'two',
        component: ItemsTwoComponent,
      },
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ItemsModule {
}
