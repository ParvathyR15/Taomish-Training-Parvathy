package org.example;

public class Main {
    public static void main(String[] args) {


        Ramu ramu = new Ramu(70, 80);
        Ammu ammu = new Ammu(85, 90);


        ramu.printDetails();
        System.out.println("Ramu's Total Marks: " + ramu.totalMarks(75, 80));
        System.out.println("Ramu's Average Marks: " + ramu.averageMarks(75, 80));
        System.out.println("Ramu's Status: " + ramu.Status(ramu.totalMarks(75, 80)));
        System.out.println("Ramu Scholarship Eligibility: " + ramu.Eligiblity());

        System.out.println();

        ammu.printDetails();
        System.out.println("Ammu's Total Marks: " + ammu.totalMarks(85, 90));
        System.out.println("Ammu's Average Marks: " + ammu.averageMarks(85, 90));
        System.out.println("Ammu's Status: " + ammu.Status(ammu.totalMarks(85, 90)));
        System.out.println("Ammu's Scholarship Eligibility: " + ammu.Eligiblity());

    }
}
