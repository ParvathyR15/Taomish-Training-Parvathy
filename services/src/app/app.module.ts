import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { TransactionComponent } from './transaction/transaction.component';
// import { BankService } from './bank.service';

@NgModule({
  declarations: [AppComponent, FundTransferComponent, TransactionComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
