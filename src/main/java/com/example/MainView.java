package com.example;

import com.example.aichatbot.service.ChatService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.StreamResource;
import org.springframework.beans.factory.annotation.Autowired;

@Route("")
public class MainView extends VerticalLayout {
    @Autowired
    private ChatService chatService;

    public MainView() {
        // Page title
        Label title = new Label("AI Chatbot");

        StreamResource imageResource = new StreamResource("myimage.png",
                () -> getClass().getResourceAsStream("/images/myimage.png"));

        Image image = new Image(imageResource, "My Streamed Image");
        add(image);

        Image image2 = new Image("images/java.png", "My Alt Image");
        image2.setWidth("250px");
        image2.setHeight("auto");
        image2.getStyle().set("margin-top", "-40px");
        add(image2);

        title.getStyle()
                .set("font-size", "42px")
                .set("font-weight", "bold")
                .set("margin-bottom", "20px");

        // Chat history area as TextArea
        TextArea chatHistory = new TextArea("Chat History");
        chatHistory.setWidthFull();
        chatHistory.setHeight("400px");
        chatHistory.setReadOnly(true); // Make the text area read-only
        chatHistory.getStyle().set("font-family", "Arial, sans-serif")
                .set("font-size", "14px");

        // User input field
        TextField userInput = new TextField();
        userInput.setPlaceholder("Type your message...");
        userInput.setWidthFull();
        userInput.getStyle().set("font-family", "Arial, sans-serif")
                .set("font-size", "14px");

        // Send button
        Button sendButton = new Button("Send");
        sendButton.getStyle().set("background-color", "#007bff")
                .set("color", "#ffffff")
                .set("border-radius", "5px")
                .set("padding", "10px 20px");

        sendButton.addClickListener(event -> {
            String message = userInput.getValue().trim();
            if (message.isEmpty()) {
                Notification.show("Please enter a message.", 2000, Notification.Position.MIDDLE);
                return;
            }

            String response = chatService.getResponse(message);

            // Create a layout for the chat history with the bot image
            HorizontalLayout botMessageLayout = new HorizontalLayout();
            Image botImage = new Image("images/Ai.png", "Bot Image");
            botImage.setWidth("50px");
            botImage.setHeight("50px");

            // Add bot image and the response text
            botMessageLayout.add(botImage);
            botMessageLayout.add(new Label(response));

            // Align the bot's message layout to the left
            botMessageLayout.setAlignItems(FlexComponent.Alignment.START);

            // Add the bot's message layout to the chat history
            chatHistory.setValue(chatHistory.getValue() + "\nYou: " + message + "\nBot: " + response);

            // Clear the input field
            userInput.clear();
        });

        // Input and button layout
        HorizontalLayout inputLayout = new HorizontalLayout(userInput, sendButton);
        inputLayout.setWidthFull();
        inputLayout.setAlignItems(Alignment.CENTER);

        // Add components to the layout
        setDefaultHorizontalComponentAlignment(Alignment.CENTER);
        setPadding(true);
        setSpacing(true);
        setSizeFull();
        add(title, chatHistory, inputLayout); // Add chat history and other components
        expand(chatHistory);
    }
}
