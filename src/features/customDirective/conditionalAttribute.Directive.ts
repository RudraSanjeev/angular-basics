import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setDisabled]',
  standalone: true,
})
export class setDisabledDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @Input() set setDisabled(disabled: boolean) {
    if (!disabled) {
      this.renderer.addClass(this.elRef, 'setDisabledProperty');
    }
  }
}
