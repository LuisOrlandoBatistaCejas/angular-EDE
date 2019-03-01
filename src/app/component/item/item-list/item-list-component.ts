import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../service/item-service';

@Component({
  selector: 'app-item-list-component',
  templateUrl: './item-list-component.html',
  styleUrls: ['./item-list-component.css']
})
export class ItemListComponent implements OnInit {
  itemList: [];
  constructor(private itemService: ItemService) {}
  ngOnInit() {
    this.itemService.getItems().subscribe(
      res => {
        this.itemList = res;
      }
    );
  }
}
