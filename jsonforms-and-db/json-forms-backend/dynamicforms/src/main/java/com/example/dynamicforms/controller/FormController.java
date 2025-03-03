// src/main/java/com/example/dynamicforms/controller/FormController.java
package com.example.dynamicforms.controller;

import com.example.dynamicforms.dto.FormSubmissionDTO;
import com.example.dynamicforms.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/forms")
@CrossOrigin(origins = "http://localhost:4200") // Allow requests from Angular dev server
public class FormController {

    @Autowired
    private FormService formService;

   @PostMapping("/submit")
    public ResponseEntity<?> submitForm(@RequestBody FormSubmissionDTO formSubmission) {
      try {
           Object savedEntity = formService.saveFormData(formSubmission);
           return ResponseEntity.ok(savedEntity);
       } catch (Exception e) {
           return ResponseEntity.badRequest().body("Error saving form: " + e.getMessage());
      }
    }


//    @PostMapping("/submit")
//    public List<Object> submitForms(@RequestBody List<FormSubmissionDTO> formSubmissions) {
//        return formSubmissions.stream()
//                .map(formService::saveFormData)
//                .toList(); // Save each form and return as a list
    }

//    @GetMapping("/data")
//    public  List<> get
}