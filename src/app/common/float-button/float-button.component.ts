import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-float-button',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.scss'],
})
export class FloatButtonComponent implements OnInit {
  @Input() btn_class: string = 'fa-plus';
  @Output() onClick: EventEmitter<null> = new EventEmitter(null);
  constructor() {}

  ngOnInit() {}

  click() {
    this.onClick.emit();
  }
}
