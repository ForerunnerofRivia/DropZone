import { Component } from '@angular/core';
import { Item } from 'models/item.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  items!: Item[];

  item1!: Item;
  
  ngOnInit() {
    this.item1 = new Item("Test Name","C:\\Users\\basti\\Desktop\\MarketPlace\\DropZone\\ressources\\img\\img1.png","Test Description","testRef",99);
  }
}
