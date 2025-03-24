package com.example.spring.controllers;

import org.springframework.web.bind.annotation.*;
import com.example.spring.services.PaymentService;
import com.example.spring.models.Payment;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping
    public Payment processPayment(@RequestBody Payment payment) {
        return paymentService.processPayment(payment);
    }
}
