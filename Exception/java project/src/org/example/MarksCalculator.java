package org.example;

abstract class MarksCalculator {

    public double totalMarks(double firstYearMark, double secondYearMark) {
        return firstYearMark + secondYearMark;
    }

    public double averageMarks(double firstYearMark, double secondYearMark) {
        return (firstYearMark + secondYearMark) / 2;
    }

    public abstract String Status(double totalMarks);
}

