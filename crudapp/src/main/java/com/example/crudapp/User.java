package com.example.crudapp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

//The class is marked as an entity
@Entity
//table with name users is created in database
@Table(name = "users")
public class User {
    //primary key
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)//Autoincrement of primary key
    private Long id;
    private String name;
    private String email;

    // Constructor needed for JPA
    public User() {}

    //Defining constructor
    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}

