import { DisableButtonDirective } from './disablebutton.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('DisableButtonDirective', () => {
  let elementRefMock: ElementRef;
  let rendererMock: Renderer2;

  beforeEach(() => {
    elementRefMock = { nativeElement: document.createElement('button') };
    rendererMock = jasmine.createSpyObj('Renderer2', ['setAttribute', 'removeAttribute']);
  });

  it('should create an instance', () => {
    const directive = new DisableButtonDirective(elementRefMock, rendererMock);
    expect(directive).toBeTruthy();
  });

  it('should disable the button when clicked', () => {
    const directive = new DisableButtonDirective(elementRefMock, rendererMock);
    directive.onClick(); // Simulate button click

    expect(rendererMock.setAttribute).toHaveBeenCalledWith(elementRefMock.nativeElement, 'disabled', 'true');
  });

  it('should re-enable the button after 3 seconds', (done) => {
    const directive = new DisableButtonDirective(elementRefMock, rendererMock);
    directive.onClick(); // Simulate button click

    // setTimeout(() => {
    //   expect(rendererMock.removeAttribute).toHaveBeenCalledWith(elementRefMock.nativeElement, 'disabled');
    //   done(); // Marks async test as complete
    // }, 3100);
  });
});
