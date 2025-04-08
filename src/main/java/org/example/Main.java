package org.example;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;



// Custom exception for invalid deposit amounts


public class Main {
    private double balance;

    public Main(double initialBalance) {
        this.balance = initialBalance;
    }

    // Method to deposit money, throws an exception for invalid deposit
    public void deposit(double amount) throws InvalidDepositAmountException {
        if (amount <= 100) {
            throw new InvalidDepositAmountException("Deposit amount must be greater than zero.");
        }
        balance += amount;
        System.out.println("Deposited: $" + amount);
    }

    // Method to withdraw money, throws an exception for insufficient funds
    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException("Insufficient funds. Current balance: $" + balance);
        }
        balance -= amount;
        System.out.println("Withdrew: $" + amount);
    }

    public void displayBalance() {
        System.out.println("Current balance: $" + balance);
    }

    // Method to write error messages to a plain text file
    public static void logErrorToFile(String errorMessage) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("bank_account_errors.txt", true))) {
            writer.write(errorMessage);
            writer.newLine();  // Add a newline after each error message
        } catch (IOException e) {
            System.out.println("Error writing to text file: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Main account = new Main(500);  // Initial balance of $500

        while (true) {
            try {
                // Ask user for the operation they want to perform
                System.out.println("\nChoose an operation:");
                System.out.println("1. Deposit");
                System.out.println("2. Withdraw");
                System.out.println("3. Exit");
                System.out.print("Enter choice (1/2/3): ");
                int choice = Integer.parseInt(scanner.nextLine());

                switch (choice) {
                    case 1: // Deposit
                        System.out.print("Enter deposit amount: $");
                        double depositAmount = Double.parseDouble(scanner.nextLine());
                        account.deposit(depositAmount);
                        break;

                    case 2: // Withdraw
                        System.out.print("Enter withdrawal amount: $");
                        double withdrawAmount = Double.parseDouble(scanner.nextLine());
                        account.withdraw(withdrawAmount);
                        break;

                    case 3: // Exit
                        System.out.println("Exiting the program.");
                        account.displayBalance();
                        scanner.close();
                        return;

                    default:
                        System.out.println("Invalid choice. Please enter 1, 2, or 3.");
                }

            } catch (NumberFormatException e) {
                // Handle invalid input and log error to file
                String errorMessage = "Error: Invalid input. Please enter a valid number. " + e.getMessage();
                System.out.println(errorMessage);
                logErrorToFile(errorMessage);
            } catch (InvalidDepositAmountException e) {
                // Handle invalid deposit and log error to file
                String errorMessage = "Error: " + e.getMessage();
                System.out.println(errorMessage);
                logErrorToFile(errorMessage);
            } catch (InsufficientFundsException e) {
                // Handle insufficient funds and log error to file
                String errorMessage = "Error: " + e.getMessage();
                System.out.println(errorMessage);
                logErrorToFile(errorMessage);
            } finally {
                // Always display the current balance
                account.displayBalance();
            }
        }


    }
}
