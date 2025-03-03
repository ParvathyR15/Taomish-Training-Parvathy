// src/main/java/com/example/dynamicforms/dto/FormSubmissionDTO.java
package com.example.dynamicforms.dto;

import lombok.Data;
import java.util.Map;

@Data
public class FormSubmissionDTO {
    private String formType;
    private Map<String, Object> title;
}

//DTOs only contain data, with no business logic. They help structure and encapsulate data while ensuring flexibility and security when handling API requests and responses.
