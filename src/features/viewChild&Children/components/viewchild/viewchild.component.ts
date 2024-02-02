import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'Viewchild',
  standalone: true,
  imports: [],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.scss',
})
export class ViewchildComponent {
  // view child
  // @ViewChild('username') inputElements: ElementRef | undefined;
  // showUserName() {
  //   console.log(this.inputElements?.nativeElement.value);
  // }
  @ViewChildren('userInfo') inputElements: QueryList<ElementRef> | undefined;

  showCredentials() {
    if (this.inputElements) {
      this.inputElements.forEach((elementRef) => {
        console.log(elementRef.nativeElement);
      });
    }
  }
}
