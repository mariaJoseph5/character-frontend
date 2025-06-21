import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  el: ElementRef  = inject(ElementRef);
  constructor() {
    // this.el = inject(ElementRef);
  }
  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('white');
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('orange');
  }
}

