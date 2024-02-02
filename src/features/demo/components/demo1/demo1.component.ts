import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
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
  @ViewChild('lazyContent') ngTemplate: ElementRef | undefined;
  @ViewChildren('viewChildPara') para: QueryList<ElementRef> | undefined;

  @ViewChild('username') username: ElementRef | undefined;
  getViewChild() {
    // this.para?.forEach((el: ElementRef) => {
    //   if (el.nativeElement.classList.contains('secondPara')) {
    //     console.log(el.nativeElement.innerText);
    //   }
    // });
    const validPara = this.para?.filter((el: ElementRef) => {
      return el.nativeElement.classList.contains('secondPara');
    });
    console.log(validPara?.[0].nativeElement.innerText);
  }

  getNgTemplate() {
    this.ngTemplate?.nativeElement.children[1].classList.add('redColor');
  }
  // name = '';
  // setUserName(username: HTMLInputElement) {
  //   // console.log(username);
  //   this.name = username.value;
  //   console.log(this.name);
  //   // console.log(username.innerHTML)
  // }
  // ngOnInit() {
  //   console.log(this.username);
  // }

  flag = false;
}
