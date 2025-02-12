package org.example;

public class Score implements ScoreInterface {
    private int score;

    public Score() {
        this.score = 0;
    }


    public void increment() {
        score++;
    }


    public int fetchScore() {
        return score;
    }
}
