import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { Demo2Component } from '../demo2/demo2.component';

@Component({
  selector: 'ParentDemo',
  standalone: true,
  imports: [CommonModule, Demo2Component],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss',
})
export class Demo1Component {
  parentName = 'parentName';
  @Output()
  childName: string | undefined;

  receiveChildName(e: any) {
    this.childName = e;
    console.log(e);
  }
}
