import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentChildComponent } from '../content-child/content-child.component';

@Component({
  selector: 'ContentChildParent',
  standalone: true,
  imports: [CommonModule, ContentChildComponent],
  templateUrl: './content-child-parent.component.html',
  styleUrl: './content-child-parent.component.scss',
})
export class ContentChildParentComponent {}
