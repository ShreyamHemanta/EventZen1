package com.example.spring.services;

import com.example.spring.models.Notification;
import com.example.spring.repositories.NotificationRepository;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class NotificationService {

    private final NotificationRepository notificationRepository;
    private final JavaMailSender mailSender;

    public NotificationService(NotificationRepository notificationRepository, JavaMailSender mailSender) {
        this.notificationRepository = notificationRepository;
        this.mailSender = mailSender;
    }

    public void sendNotification(String message, String recipient) throws MessagingException {
        Notification notification = new Notification();
        notification.setMessage(message);
        notification.setRecipient(recipient);
        notificationRepository.save(notification);

        MimeMessage mail = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mail);
        helper.setTo(recipient);
        helper.setSubject("Event Notification");
        helper.setText(message);
        mailSender.send(mail);
    }
}
