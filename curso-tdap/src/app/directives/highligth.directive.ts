import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighligth]',
  standalone: false
})
export class HighligthDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'red';
   }

  
}
