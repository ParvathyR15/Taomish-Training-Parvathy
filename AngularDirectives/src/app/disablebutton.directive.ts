import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableButton]',
  standalone:false
})
export class DisableButtonDirective {
 
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    // Disable the button
    this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');

    // Re-enable after 3 seconds
    setTimeout(() => {
      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }, 5000);
  }
}
