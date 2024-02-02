import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'OnChangeHook',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: './ng-on-change.component.html',
  styleUrl: './ng-on-change.component.scss',
})
export class NgOnChangeComponent {
  uname: string | undefined;
  constructor() {
    console.log('parent constructor called');
    // console.log(this.uname);
  }

  showCreds(event: HTMLInputElement) {
    console.log(event.value);
    this.uname = event.value;
  }
}
