// src/main/java/com/example/dynamicforms/service/FormService.java
package com.example.dynamicforms.service;

import com.example.dynamicforms.dto.FormSubmissionDTO;
import com.example.dynamicforms.entity.ApprovalRequest;
import com.example.dynamicforms.entity.EmployeeReview;
import com.example.dynamicforms.repository.ApprovalRequestRepository;
import com.example.dynamicforms.repository.EmployeeReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import java.util.Map;

@Service
public class FormService {

    @Autowired
    private ApprovalRequestRepository approvalRequestRepository;

    @Autowired
    private EmployeeReviewRepository employeeReviewRepository;

    public Object saveFormData(FormSubmissionDTO formSubmission) {
        String formType = formSubmission.getFormType();
        Map<String, Object> data = formSubmission.getTitle();

        return switch (formType) {
            case "approval-request" -> saveApprovalRequest(data);
            case "employee-review" -> saveEmployeeReview(data);
            default -> throw new IllegalArgumentException("Unknown form type: " + formType);
        };
    }

    private ApprovalRequest saveApprovalRequest(Map<String, Object> data) {    //data: A Map<String, Object> representing form fields sent from the frontend. returns ApprovalRequest object
        ApprovalRequest approvalRequest = new ApprovalRequest();
        approvalRequest.setRequestorName((String) data.get("requestorName"));
        approvalRequest.setDepartment((String) data.get("department"));
        approvalRequest.setReason((String) data.get("reason"));
        approvalRequest.setUrgency((String) data.get("urgency"));

        return approvalRequestRepository.save(approvalRequest);
    }

    private EmployeeReview saveEmployeeReview(Map<String, Object> data) {
        EmployeeReview employeeReview = new EmployeeReview();
        employeeReview.setEmployeeName((String) data.get("employeeName"));
        employeeReview.setDepartment((String) data.get("department"));

        // Handle potential Integer parsing issues
        Object scoreObj = data.get("performanceScore");
        if (scoreObj instanceof Number) {
            employeeReview.setPerformanceScore(((Number) scoreObj).intValue());
        } else if (scoreObj instanceof String) {
            employeeReview.setPerformanceScore(Integer.parseInt((String) scoreObj));
        }

        employeeReview.setComments((String) data.get("comments"));

        return employeeReviewRepository.save(employeeReview);
    }
}