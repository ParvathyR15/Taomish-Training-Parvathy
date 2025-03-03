package com.example.dynamicforms.repository;

import com.example.dynamicforms.entity.EmployeeReview;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeReviewRepository extends JpaRepository<EmployeeReview, Long> {
}