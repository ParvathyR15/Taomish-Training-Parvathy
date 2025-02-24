import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlexbComponent } from './flexb/flexb.component';
import { GridbComponent } from './gridb/gridb.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstproject';
}
