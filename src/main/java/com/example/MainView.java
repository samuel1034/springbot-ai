package com.example;

import com.example.aichatbot.service.ChatService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Route("")
@CssImport("./styles/shared-styles.css")
public class MainView extends VerticalLayout {

    @Autowired
    private ChatService chatService;

    private final VerticalLayout messageContainer;

    public MainView() {
        setSizeFull();
        setDefaultHorizontalComponentAlignment(Alignment.CENTER);
        getStyle().set("background-color", "#f8f9fa");

        // Header
        HorizontalLayout headerLayout = new HorizontalLayout();
        headerLayout.setDefaultVerticalComponentAlignment(Alignment.CENTER);
        headerLayout.setJustifyContentMode(JustifyContentMode.CENTER);

        Span title = new Span("AI Chatbot Assistant");
        title.getStyle()
                .set("font-size", "24px")
                .set("font-weight", "bold")
                .set("margin", "20px 0");

        Image javaImage = new Image("/images/java.png", "Java Logo");
        javaImage.setWidth("80px");
        javaImage.setHeight("80px");
        javaImage.getStyle().set("border-radius", "50%");

        headerLayout.add(title, javaImage);
        headerLayout.setSpacing(true);
        add(headerLayout);

        // Message Container
        messageContainer = new VerticalLayout();
        messageContainer.setWidth("50%");
        messageContainer.setHeight("70%");
        messageContainer.getStyle()
                .set("background-color", "#ffffff")
                .set("border", "1px solid #dee2e6")
                .set("border-radius", "8px")
                .set("padding", "10px")
                .set("overflow-y", "auto");
        add(messageContainer);
        expand(messageContainer);

        // Input Area
        HorizontalLayout inputLayout = new HorizontalLayout();
        inputLayout.setWidth("50%");
        TextField inputField = new TextField();
        inputField.setWidthFull();
        inputField.setPlaceholder("Message");

        Button sendButton = new Button("Send", event -> sendMessage(inputField));
        sendButton.getStyle()
                .set("background-color", "#007bff")
                .set("color", "#ffffff")
                .set("border-radius", "5px");
        inputLayout.add(inputField, sendButton);
        inputLayout.setFlexGrow(1, inputField);
        add(inputLayout);
    }

    private void sendMessage(TextField inputField) {
        String userMessage = inputField.getValue().trim();
        if (!userMessage.isEmpty()) {
            addMessage(userMessage, "User", "user-avatar.png", true);
            String aiResponse = chatService.getResponse(userMessage);
            addMessage(aiResponse, "Assistant", "assistant-avatar.png", false);
            inputField.clear();
        }
    }

    private void addMessage(String message, String sender, String avatarUrl, boolean isUser) {
        HorizontalLayout messageLayout = new HorizontalLayout();
        messageLayout.setWidthFull();
        messageLayout.getStyle().set("margin", "10px 0");

        // Avatar
        Image avatar = new Image("/images/" + avatarUrl, sender);
        avatar.setWidth("60px");
        avatar.setHeight("60px");
        avatar.getStyle().set("border-radius", "50%");
        if (isUser) {
            messageLayout.add(avatar);
        }

        // Message Bubble
        VerticalLayout bubbleContainer = new VerticalLayout();
        bubbleContainer.getStyle().set("max-width", "70%");
        bubbleContainer.getStyle()
                .set("padding", "10px")
                .set("border-radius", "15px")
                .set("background-color", isUser ? "#007bff" : "#f1f1f1")
                .set("color", isUser ? "#ffffff" : "#000000")
                .set("box-shadow", "0 1px 4px rgba(0, 0, 0, 0.1)");
        Span messageText = new Span(message);
        Span timestamp = new Span(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd MMM yyyy, HH:mm")));
        timestamp.getStyle()
                .set("font-size", "12px")
                .set("color", "#6c757d")
                .set("margin-top", "5px");
        bubbleContainer.add(messageText, timestamp);

        if (isUser) {
            messageLayout.add(bubbleContainer);
            messageLayout.setJustifyContentMode(JustifyContentMode.END);
        } else {
            messageLayout.add(bubbleContainer, avatar);
            messageLayout.setJustifyContentMode(JustifyContentMode.START);
        }

        messageContainer.add(messageLayout);
        messageContainer.getElement().executeJs("this.scrollTop = this.scrollHeight;");
    }
}