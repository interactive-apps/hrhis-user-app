import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-data-error',
  templateUrl: './no-data-error.component.html',
  styleUrls: ['./no-data-error.component.css']
})
export class NoDataErrorComponent implements OnInit {
  @Input()
  errorMessage;

  @Input()
  errorTitle;

  @Input()
  errorSuggestions;

  constructor() {}

  ngOnInit() {}
}
