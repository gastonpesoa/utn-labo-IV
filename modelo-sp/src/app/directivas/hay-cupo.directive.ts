import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHayCupo]'
})
export class HayCupoDirective {

  @Input('appHayCupo') hayCupo: number;

  constructor(private el: ElementRef) {
    setTimeout(() => {

      if (this.hayCupo > 0) {
        this.infoHayCupo('Hay Cupo')
      }
    }, 1000);
  }

  private infoHayCupo(info: string) {
    this.el.nativeElement.innerHTML = info;
  }

}
