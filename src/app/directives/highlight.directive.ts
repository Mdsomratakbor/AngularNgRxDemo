import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ChangeTextBackground]'
})
export class HighlightDirective {

  constructor(private eleRef: 
    ElementRef) {
      eleRef.nativeElement.style.background='red';
      eleRef.nativeElement.style.fontSize = '42px';
      eleRef.nativeElement.style.color = 'white';

     }

}
