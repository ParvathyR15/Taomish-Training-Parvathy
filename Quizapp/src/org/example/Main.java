package org.example;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Enter your name");
        Scanner scanner = new Scanner(System.in);
        String name = scanner.nextLine();
        System.out.println("Hi " + name + " Let's begin the quiz");


        Question question = new Question();
        Answers answer = new Answers();
        Score score = new Score(question.getTotalQuestions());


        for (String questionText : ((Question) question).quiz.keySet()) {
            question.showQuestions(questionText);


            System.out.println("\nEnter your answer (A, B, C, D):");
            String userAnswer = scanner.nextLine().toUpperCase();



            if (answer.checkAnswer(questionText, userAnswer)) {
                System.out.println("Correct answer!");
                score.increment();
            } else {

                String correctAnswer = answer.getCorrectAnswer(questionText);
                System.out.println("Wrong answer. The correct answer is " + correctAnswer);
            }
        }


        System.out.println("\nYour final score is: " + score.getScoreAsFraction());

        scanner.close();
    }
}

