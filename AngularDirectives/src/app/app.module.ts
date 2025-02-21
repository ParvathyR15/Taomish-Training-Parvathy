import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DisableButtonDirective } from './disablebutton.directive';
import { TooltipDirective } from './tooltipcustom.directive';
import { TextCasePipe } from './text-case.pipe';
// import { TextCasePipe } from './text-case.pipe';
// import { DisableButtonDirective } from './disable-button.directive'; // Import directive

@NgModule({
  declarations: [
    AppComponent,
    DisableButtonDirective,
    TooltipDirective,
    TextCasePipe
   
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
