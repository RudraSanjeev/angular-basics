import { CommonModule } from '@angular/common';
import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ContentChildComponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-child.component.html',
  styleUrl: './content-child.component.scss',
})
export class ContentChildComponent {
  @ContentChild('para') paraElement: ElementRef | undefined;

  showContentChild() {
    console.log(this.paraElement?.nativeElement);
  }
}
