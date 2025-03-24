package com.example.spring.controllers;

import com.example.spring.services.NotificationService;
import org.springframework.web.bind.annotation.*;
import jakarta.mail.MessagingException;

@RestController
@RequestMapping("/notifications")
public class NotificationController {

    private final NotificationService notificationService;

    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @PostMapping
    public void sendNotification(@RequestParam String message, @RequestParam String recipient) throws MessagingException {
        notificationService.sendNotification(message, recipient);
    }
}
