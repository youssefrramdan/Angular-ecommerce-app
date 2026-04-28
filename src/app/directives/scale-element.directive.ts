import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScaleElement]',
  standalone: true,
})
export class ScaleElement {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.transform = 'scale(1.2)';
    this.el.nativeElement.style.transition = 'all 0.5s ease-in-out';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.el.nativeElement.style.transform = 'scale(1)';
    this.el.nativeElement.style.transition = 'all 0.5s ease-in-out';
  }
}
