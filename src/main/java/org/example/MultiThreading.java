package org.example;


import java.util.Scanner;
import java.util.concurrent.*;

public class MultiThreading {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(2);
        Scanner scanner = new Scanner(System.in);


        System.out.print("Enter your name to start the exam: ");
        String name = scanner.nextLine();


        CompletableFuture<Void> loadQuestions = CompletableFuture.runAsync(() -> {
            System.out.println("Loading exam questions... [" + Thread.currentThread().getName() + "]");
            try {
                Thread.sleep(3000); // simulate loading
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(" Questions loaded.");
        }, executor);


        CompletableFuture<Void> verifyLogin = CompletableFuture.runAsync(() -> {
            System.out.println(" Verifying login for " + name + "... [" + Thread.currentThread().getName() + "]");
            try {
                Thread.sleep(2000); // simulate verification
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(" Login verified.");
        }, executor);

        //  Start exam once both tasks are complete
        CompletableFuture.allOf(loadQuestions, verifyLogin)
                .thenRunAsync(() -> {
                    System.out.println(" Exam started for " + name + "! [" + Thread.currentThread().getName() + "]");
                }, executor)
                .join();

        executor.shutdown();
    }
}

