import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-available-selected',
  templateUrl: './available-selected.component.html',
  styleUrls: ['./available-selected.component.css']
})
export class AvailableSelectedComponent implements OnInit {

  @Input() nameSpaceTitle: string;
  @Input() availableItems: any;
  @Input() selectedItems: any;
  @Output() changesOnSelectedItems: any;

  constructor() { }

  ngOnInit() {
  }

  onSelectedItemChanges(e) {
    this.changesOnSelectedItems.emit(this.selectedItems);
  }

}
