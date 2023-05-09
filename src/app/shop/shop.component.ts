import { Component } from '@angular/core';
import { Item } from 'models/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  items!: Item[];

  constructor(private itemService: ItemService){}
  
  ngOnInit() {
    this.items = this.itemService.items;
  }
}
