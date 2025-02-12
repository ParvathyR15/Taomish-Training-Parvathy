package org.example;

public class Score implements ScoreInterface {
    private int score;
    private int totalQuestions;

    public Score(int totalQuestions) {
        this.score = 0;
        this.totalQuestions = totalQuestions;
    }

    public void increment() {
        score++;
    }

    public int fetchScore() {
        return score;
    }

    public int getTotalQuestions() {
        return totalQuestions;
    }

    public String getScoreAsFraction() {
        return score + "/" + totalQuestions; // return score in fraction format
    }
}

