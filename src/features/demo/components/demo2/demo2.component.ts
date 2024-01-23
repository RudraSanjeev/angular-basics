import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ChildDemo',
  standalone: true,
  imports: [],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.scss',
})
export class Demo2Component {
  @Input()
  name: string | undefined;

  childName: string | undefined = 'childName';
  @Output()
  childEvent: EventEmitter<string> = new EventEmitter<string>();

  sendChildName() {
    this.childEvent.emit(this.childName);
  }
}
