import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-comprobantes-list-header',
  templateUrl: './comprobantes-list-header.component.html',
  styleUrls: ['./comprobantes-list-header.component.css']
})
export class ComprobantesListHeaderComponent implements OnInit {
  // emits and event when the button 'crear' is clicked
  @Output() create: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  /**
   * Captures the click event in the button 'crear' and emits the event
   */
  onCreate() {
    this.create.emit();
  }

}
