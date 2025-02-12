package org.example;

import java.util.HashMap;

public class Answers implements AnswerInterface {
    private HashMap<String, String> correctAnswers;

    public Answers() {
        correctAnswers = new HashMap<>();
        initializeCorrectAnswers();
    }

    private void initializeCorrectAnswers() {
        correctAnswers.put("What is the capital of France?", "B");
        correctAnswers.put("What is 5 + 5?", "B");
        correctAnswers.put("Who wrote 'Romeo and Juliet'?", "A");
    }


    public boolean checkAnswer(String question, String answer) {
        String correctAnswer = correctAnswers.get(question);
        return answer != null && answer.equals(correctAnswer);
    }
    public String getCorrectAnswer(String question) {
        return correctAnswers.get(question);
    }
}
