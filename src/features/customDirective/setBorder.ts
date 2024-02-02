import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[setBorder]',
  standalone: true,
})
export class setBorder {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.border') border: string = '5px solid red';
  @HostBinding('style.background') background: string = 'cyan';

  @HostListener('mouseenter') onEnter() {
    this.background = 'red';
    this.border = '2px solid yellow';
  }
  @HostListener('mouseout') onOut() {
    this.background = 'blue';
    this.border = '2px solid yellow';
  }
}
