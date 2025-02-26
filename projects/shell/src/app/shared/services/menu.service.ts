import { Injectable } from '@angular/core';
import {MenuItem} from "../../common.types";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public $initialized: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private menuUrl: string = 'assets/data/menu.json';
  public menu: MenuItem[] = [];

  constructor(private http: HttpClient) {
    this.loadMenu();
  }

  private loadMenu() {
    this.http.get<MenuItem[]>(this.menuUrl).subscribe(m => {
      this.menu = m;
      this.$initialized.next(true);
    })
  }
}
