import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgClass} from "@angular/common";
import {MenuComponent} from "./shared/components/menu/menu.component";
import {AuthService} from "./shared/services/auth.service";
import {filter} from "rxjs";
import {User} from "./common.types";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public loggedUser: User | undefined;
  constructor(private authService: AuthService) {
    this.authService.$initialized.pipe(
      filter(init => init)
    ).subscribe(() => {
      this.loggedUser = this.authService.getLoggedUser();
    })
  }

  public logout(): void {
    this.authService.logout();
  }

}
