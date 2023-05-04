import { Component, Input } from '@angular/core';
import { Item } from 'models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item!: Item;

  ngOnInit(): void {
  }

  onAddToBucket(){
    this.item.price++;
  }
  
}
