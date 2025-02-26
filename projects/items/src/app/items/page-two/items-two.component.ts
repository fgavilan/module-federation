import { Component } from '@angular/core';
import {InventoryService} from "../../services/inventory.service";
import {InventoryItem} from "../../items.types";
import {filter} from "rxjs";

@Component({
  selector: 'app-items-two',
  imports: [],
  templateUrl: './items-two.component.html',
  styleUrl: './items-two.component.scss'
})
export class ItemsTwoComponent {
  public items: InventoryItem[] = [];
  constructor(private inventoryService: InventoryService) {
    this.inventoryService.$initialized.pipe(
      filter(i => i),
    ).subscribe(() => {
      this.items = this.inventoryService.inventory;
    })
  }
}
