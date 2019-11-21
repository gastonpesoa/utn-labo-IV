import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightCupo]'
})
export class HighlightCupoDirective {

  @Input('appHighlightCupo')  hightlightCupo: number;

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.hightlightCupo > 10) {
      this.highlight('red')
    }
    if (this.hightlightCupo > 10 && this.hightlightCupo <= 20) {
      this.highlight('red')
    }
    if (this.hightlightCupo > 20) {
      this.highlight('green')
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
