import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone:false
})
export class TooltipDirective {
  private tooltip: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private createTooltip() {
    this.tooltip = this.renderer.createElement('span');
    this.renderer.appendChild(this.tooltip, this.renderer.createText('No multiple sumission'));
    this.renderer.setStyle(this.tooltip, 'position', 'absolute');
    this.renderer.setStyle(this.tooltip, 'background', 'black');
    this.renderer.setStyle(this.tooltip, 'color', 'white');
    this.renderer.setStyle(this.tooltip, 'padding', '5px');
    this.renderer.setStyle(this.tooltip, 'borderRadius', '5px');
    this.renderer.setStyle(this.tooltip, 'top', '50px');
    this.renderer.setStyle(this.tooltip, 'left', '10%');
    this.renderer.setStyle(this.tooltip, 'whiteSpace', 'nowrap');
    this.renderer.appendChild(this.el.nativeElement, this.tooltip);
  }

  private removeTooltip() {
    if (this.tooltip) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltip);
      this.tooltip = null;
    }
  }

  @HostListener('mouseenter') onMouseEnter() { this.createTooltip(); }
  @HostListener('mouseleave') onMouseLeave() { this.removeTooltip(); }
}

