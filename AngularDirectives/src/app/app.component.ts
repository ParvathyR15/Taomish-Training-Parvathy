import { Component } from '@angular/core';
import { TextCasePipe } from './text-case.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  title = 'Angular Tooltip Directive';
  snakeCaseText: string = '';
  camelCaseText: string = '';
  textConverted: boolean = false; 

  constructor(private textCasePipe: TextCasePipe) {}

  convertText(input: string) {
    if (!input.trim()) return; 

    this.snakeCaseText = this.textCasePipe.transform(input, 'snake');
    this.camelCaseText = this.textCasePipe.transform(input, 'camel');
    this.textConverted = true; 
  }
}
