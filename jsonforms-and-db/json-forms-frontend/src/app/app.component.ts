import { Component } from '@angular/core';
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, 
  imports: [CommonModule, DynamicFormComponent]
})
export class AppComponent {
  title = 'angular-forms-project';
  selectedFormType: string = 'employee-review';

  changeForm(event: Event) {
    
    const select = event.target as HTMLSelectElement; //EventTargetInterface . HTMLSelectElement for TypeSafety
    this.selectedFormType = select.value;
  }
}