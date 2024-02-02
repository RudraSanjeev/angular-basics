import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[setInput]',
  standalone: true,
})
export class setInput {
  @HostBinding('attr.value') setInput: string = 'Hi, there !';
}
