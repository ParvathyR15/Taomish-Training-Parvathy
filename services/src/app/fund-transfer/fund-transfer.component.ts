import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css'],
  standalone:false
})
export class FundTransferComponent {
  amount: number = 0;
  factor: number = 0;
  divisor: number = 0;
  balance: number = 0; 

  constructor(private bankService: BankService) {
    this.updateBalance(); // Get initial balance
  }
  
  
 
  

  deposit() {
    if (this.amount > 0) {
      this.bankService.add(this.amount);
      this.updateBalance();
      alert('Amount Deposited Successfully!');
      

    }
  }

  withdraw() {
    if (this.amount > 0) {
      this.bankService.subtract(this.amount);
      alert('Amount Withdrawn Successfully!');
      this.updateBalance();
    }
  }

  applyBonus() {
    if (this.factor > 0) {
      this.bankService.multiply(this.factor);
      alert(`Balance Multiplied by ${this.factor}`);
      this.updateBalance();
    }
  }

  applyCharge() {
    if (this.divisor > 0) {
      this.bankService.divide(this.divisor);
      alert(`Balance Divided by ${this.divisor} for Service Charges`);
      this.updateBalance();
    }
  }

  updateBalance() {
    this.balance = this.bankService.getBalance(); 
  }
}
