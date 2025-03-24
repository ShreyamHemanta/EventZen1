package com.example.spring.services;

import com.example.spring.models.Payment;
import com.example.spring.repositories.PaymentRepository;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    private final PaymentRepository paymentRepository;

    public PaymentService(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    public Payment processPayment(Payment payment) {
        return paymentRepository.save(payment);
    }
}
