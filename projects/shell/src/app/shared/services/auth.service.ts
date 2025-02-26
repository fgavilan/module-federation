import {Injectable} from '@angular/core';
import {User} from "../../common.types";
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public $initialized: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private usersUrl = 'assets/data/users.json';
  public users: User[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.http.get<User[]>(this.usersUrl).subscribe(users => {
      this.users = users;
      this.$initialized.next(true);
    })
  }

  public async login(email: string): Promise<boolean> {
    const foundUser = this.users.find(u => u.email === email);
    if (foundUser) {
      sessionStorage.setItem('loggedUser', JSON.stringify(foundUser));
    }
    return new Promise(async (resolve, reject) => {
      this.$initialized.next(true);
      resolve(!!foundUser);
    });
  }

  logout(): void {
    sessionStorage.removeItem('loggedUser');
    this.$initialized.next(true);
    this.router.navigate(['/']);
  }

  getLoggedUser(): any {
    const user = sessionStorage.getItem('loggedUser');
    return user ? JSON.parse(user) : null;
  }

}
