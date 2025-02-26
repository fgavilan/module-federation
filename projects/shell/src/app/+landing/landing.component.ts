import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {User} from "../common.types";
import {AuthService} from "../shared/services/auth.service";
import {filter} from "rxjs";

@Component({
  selector: 'app-+landing',
  imports: [
    RouterLink
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  public loggedUser: User | undefined;
  constructor(private authService: AuthService) {
    this.authService.$initialized.pipe(
      filter(init => init)
    ).subscribe(() => {
      this.loggedUser = this.authService.getLoggedUser();
    })
  }
}
