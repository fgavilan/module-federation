import { Component } from '@angular/core';
import {filter} from "rxjs";
import {User} from "../../../../../shell/src/app/common.types";
import {AuthService} from "../../../../../shell/src/app/shared/services/auth.service";
import {JsonPipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-users-one',
  imports: [
    UpperCasePipe
  ],
  templateUrl: './users-one.component.html',
  styleUrl: './users-one.component.scss'
})
export class UsersOneComponent {

  public loggedUser: User | undefined
  constructor(private authService: AuthService) {
    this.authService.$initialized.pipe(
      filter(i => i)
    ).subscribe(() => {
      this.loggedUser = this.authService.getLoggedUser();
    })
  }
}
