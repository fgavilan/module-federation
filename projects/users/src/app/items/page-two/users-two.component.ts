import { Component } from '@angular/core';
import {User} from "../../../../../shell/src/app/common.types";
import {AuthService} from "../../../../../shell/src/app/shared/services/auth.service";
import {filter} from "rxjs";
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-users-two',
  imports: [
    UpperCasePipe
  ],
  templateUrl: './users-two.component.html',
  styleUrl: './users-two.component.scss'
})
export class UsersTwoComponent {
  public userList: User[] = [];
  public fields: string[] = [];
  constructor(private authService: AuthService) {
    this.authService.$initialized.pipe(
      filter(i => i)
    ).subscribe(() => {
      this.userList = this.authService.users;
      this.fields = Object.keys(this.userList[0]);
    })
  }
}
