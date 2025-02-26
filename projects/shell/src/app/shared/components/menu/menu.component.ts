import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MenuService} from "../../services/menu.service";
import {AuthStatus, MenuItem, User} from "../../../common.types";
import {filter} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-menu',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownItem
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];
  public loggedUser: User | undefined;
  constructor(private menuService: MenuService, private authService: AuthService) {
    this.menuService.$initialized.pipe(
      filter(init => init)
    ).subscribe(() => {
      this.menuItems = this.menuService.menu;
    })
    this.authService.$initialized.pipe(
      filter(init => init)
    ).subscribe(() => {
      this.loggedUser = this.authService.getLoggedUser();
    })
  }

  protected readonly AuthStatus = AuthStatus;
}
