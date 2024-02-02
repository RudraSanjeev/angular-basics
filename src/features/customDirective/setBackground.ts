import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[setBackground]',
  standalone: true,
})
export class setBackground {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @Input('setBackground') setBackground: string = 'white';
  @Input() setText: string = 'white';
  @Input() setColor: string = 'white';
  ngOnInit() {
    // this.elRef.nativeElement.style.backgroundColor = 'red';
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green');
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'backgroundcolor',
    //   'green'
    // );
    // this.renderer.addClass(this.elRef.nativeElement, 'addBackground');
    // this.renderer.removeClass(this.elRef.nativeElement, 'addBackground');
  }

  @HostListener('click') onClick() {
    this.renderer.setAttribute(
      this.elRef.nativeElement,
      'title',
      'click is happening'
    );
  }
  @HostBinding('style.border') border: '5px solid red';
}
