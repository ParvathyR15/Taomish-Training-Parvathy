package org.example;

import java.util.HashMap;

public class Question implements Questioninterface {
    HashMap<String, HashMap<String, String>> quiz = new HashMap<>();

    public Question() {

        addQuestion("What is the capital of France?", "Berlin", "Paris", "Rome", "Madrid");
        addQuestion("What is 5 + 5?", "5", "10", "15", "20");
        addQuestion("Who wrote 'Romeo and Juliet'?", "Shakespeare", "Dickens", "Austen", "Twain");
    }


    public void addQuestion(String question, String optionA, String optionB, String optionC, String optionD) {
        HashMap<String, String> options = new HashMap<>();
        options.put("A", optionA);
        options.put("B", optionB);
        options.put("C", optionC);
        options.put("D", optionD);
        quiz.put(question, options);
    }



    public void showQuestions(String questionText) {

        System.out.println("\n" + questionText);


        HashMap<String, String> options = quiz.get(questionText);
        if (options != null) {
            options.forEach((option, description) -> System.out.println(option + ": " + description));

        }
    }
}



