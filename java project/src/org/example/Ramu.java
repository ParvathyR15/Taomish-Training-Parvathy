package org.example;

class Ramu extends MarksCalculator implements StudentDetails,Scholarship {
    private double firstYearMark;
    private double secondYearMark;

    public Ramu(double firstYearMark, double secondYearMark) {
        this.firstYearMark = firstYearMark;
        this.secondYearMark = secondYearMark;
    }

    public void printDetails() {
        System.out.println("c = " + firstYearMark + ", 2ndYear = " + secondYearMark);
    }

    public String Status(double totalMarks) {
        if (totalMarks >= 150) {
            return "Pass";
        } else {
            return "Failed";
        }
    }

    public boolean Eligiblity() {
        return true;
    }

}