package com.example.spring.models;

import lombok.Data;
import jakarta.persistence.*;

@Data
@Entity
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String paymentMethod;
    private double amount;
    private Long eventId;
}
