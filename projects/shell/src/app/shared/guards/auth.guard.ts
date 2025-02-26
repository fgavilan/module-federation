import {CanMatchFn} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";
import {filter} from "rxjs";

export const authGuard: CanMatchFn = async (route, segments) => {
  const authService = inject(AuthService);
  const init = await authService.$initialized.pipe(filter(i => i));
  return !!authService.getLoggedUser();
};
