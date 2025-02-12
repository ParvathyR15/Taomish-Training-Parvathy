package org.example;

class Ammu extends MarksCalculator implements StudentDetails,Scholarship {
    private double firstYearMark;
    private double secondYearMark;

    public Ammu(double firstYearMark, double secondYearMark) {
        this.firstYearMark = firstYearMark;
        this.secondYearMark = secondYearMark;
    }

    public void printDetails() {
        System.out.println("Ammu's Marks: 1st Year= " + firstYearMark + ", 2ndYear  = " + secondYearMark);
    }

    public String Status(double totalMarks) {
        if (totalMarks >= 170) {
            return "Pass";
        } else {
            return "Fail";
        }
    }

    public boolean Eligiblity() {
        return false;
    }
}
