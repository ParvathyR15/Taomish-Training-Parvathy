import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  private balance: number = 0; // Initial balance
  private transactions: { type: string; amount: number }[] = [];

  //  constructor() {}

  // Get the current balance
  getBalance(): number {
    return this.balance;
  }

  // Get transaction history
  getTransactions(): { type: string; amount: number }[] {
    return this.transactions;
  }

  // Add money (Deposit)
  add(amount: number): void {
    this.balance += amount;
    this.transactions.push({ type: 'Deposit', amount });
  }

  // Subtract money (Withdraw)
  subtract(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push({ type: 'Withdrawal', amount });
    } else {
      alert('Insufficient balance!');
    }
  }

  // Multiply balance (Bonus Calculation)
  multiply(factor: number): void {
    this.balance *= factor;
    this.transactions.push({ type: 'Bonus Applied', amount: this.balance });
  }

  // Divide balance (Charges)
  divide(divisor: number): void {
    if (divisor === 0) {
      alert('Cannot divide by zero!');
      return;
    }
    this.balance /= divisor;
    this.transactions.push({ type: 'Service Charge Applied', amount: this.balance });
  }
}
