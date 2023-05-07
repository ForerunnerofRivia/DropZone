import { Component } from '@angular/core';
import { Item } from 'models/item.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  items!: Item[];
  
  ngOnInit() {
    this.items = [
      {
        name: "Test Name",
        imagePath: "C:\\Users\\basti\\Desktop\\MarketPlace\\DropZone\\ressources\\img\\img1.png",
        description: "Test Description",
        ref: "testRef",
        price: 55,
        stock: 8645,
      },
      {
        name: "Test Name2",
        imagePath: "C:\\Users\\basti\\Desktop\\MarketPlace\\DropZone\\ressources\\img\\img1.png",
        description: "Test Description",
        ref: "testRef",
        price: 555,
        stock: 8645,
      },
      {
        name: "Test Name3",
        imagePath: "C:\\Users\\basti\\Desktop\\MarketPlace\\DropZone\\ressources\\img\\img1.png",
        description: "Test Description",
        ref: "testRef",
        price: 5555,
        stock: 8645,
      },
      {
        name: "Test Name4",
        imagePath: "C:\\Users\\basti\\Desktop\\MarketPlace\\DropZone\\ressources\\img\\img1.png",
        description: "Test Description",
        ref: "testRef",
        price: 55555,
        stock: 8645,
      }
    ];
  }
}
