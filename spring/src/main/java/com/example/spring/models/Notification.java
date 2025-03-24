package com.example.spring.models;

import lombok.Data;
import jakarta.persistence.*;

@Data
@Entity
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String message;
    private String recipient;
}
