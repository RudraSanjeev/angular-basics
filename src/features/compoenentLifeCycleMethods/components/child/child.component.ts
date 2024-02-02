import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent implements OnChanges {
  @Input() username: string | undefined;
  constructor() {
    console.log('child constructor called');
    console.log(this.username);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['username'].currentValue);
  }
}
