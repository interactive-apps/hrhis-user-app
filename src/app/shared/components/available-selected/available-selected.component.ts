import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as fromUtilHelpers from '../../helpers';

@Component({
  selector: 'app-available-selected',
  templateUrl: './available-selected.component.html',
  styleUrls: ['./available-selected.component.css']
})
export class AvailableSelectedComponent implements OnInit {

  @Input() nameSpaceTitle: string;
  @Input() availableItems: any;
  @Input() selectedItems: any;
  @Output() changesOnSelectedItems: EventEmitter<any> = new EventEmitter<any>();
  searchText = '';

  constructor() {
    this.availableItems = fromUtilHelpers.removeArrayObjects(this.availableItems ? this.availableItems : [],
      this.selectedItems ? this.selectedItems : [], 'id');
  }

  ngOnInit() {}

  getAvailableItems(availableItems) {
    console.log(JSON.stringify(this.selectedItems));
    const newAvailableItems = fromUtilHelpers.removeArrayObjects(availableItems ? availableItems : [],
      this.selectedItems ? this.selectedItems : [], 'id');
      // console.log(JSON.stringify(newAvailableItems));
    this.availableItems = newAvailableItems;
    return newAvailableItems;
  }

  onSelectedItemChanges(item) {
    const newselectedItems = this.selectedItems ? this.selectedItems : [];
    newselectedItems.push(item);
    this.availableItems = fromUtilHelpers.removeArrayObjects(this.availableItems, [item], 'id');
    this.changesOnSelectedItems.emit({selectedItems: newselectedItems, availableItems: this.availableItems});
  }

  searchingItems(e) {
    if (e) {
      e.stopPropagation();
    }
    this.searchText = e ? e.target.value.trim() : this.searchText;
  }

}
