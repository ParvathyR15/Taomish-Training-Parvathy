// src/main/java/com/example/dynamicforms/entity/ApprovalRequest.java
package com.example.dynamicforms.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "approval_requests")
@Data
public class ApprovalRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String requestorName;

    @Column(nullable = false)
    private String department;

    @Column(nullable = false, length = 1000)
    private String reason;

    @Column(nullable = false)
    private String urgency;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
}