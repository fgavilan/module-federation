import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {InventoryItem} from "../items.types";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  public $initialized: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private inventoryUrl: string = `${environment.baseUrl}/assets/data/inventory.json`;
  public inventory: InventoryItem[] = [];

  constructor(private http: HttpClient) {
    this.loadInventory();
  }

  private loadInventory() {
    this.http.get<InventoryItem[]>(this.inventoryUrl).subscribe(m => {
      this.inventory = m;
      this.$initialized.next(true);
    })
  }
}
