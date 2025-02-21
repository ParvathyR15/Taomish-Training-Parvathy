import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  standalone:false
})
export class TransactionComponent {
  transactions: { type: string; amount: number }[] = [];

  constructor(private bankService: BankService) {
    this.updateTransactions();
  }

  // Update transaction history
  updateTransactions() {
    this.transactions = this.bankService.getTransactions();
  }
}
