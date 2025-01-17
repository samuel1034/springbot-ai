package com.example.aichatbot.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ChatService {

    @Value("${groq.api.key}")
    private String apiKey;

    // Groq API endpoint
    private static final String API_URL = "https://api.groq.com/openai/v1/chat/completions";

    public String getResponse(String userInput) {
        RestTemplate restTemplate = new RestTemplate();

        // Set request headers
        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-Type", "application/json");
        headers.set("Authorization", "Bearer " + apiKey);

        // Build the request body
        Map<String, Object> message = new HashMap<>();
        message.put("role", "user");
        message.put("content", userInput);

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", "llama-3.3-70b-versatile");
        List<Map<String, Object>> messagesList = new ArrayList<>();
        messagesList.add(message);
        requestBody.put("messages", messagesList);

        // Wrap request body and headers in an HttpEntity
        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);

        // Send POST request to Groq API
        try {
            ResponseEntity<Map> response = restTemplate.exchange(API_URL, HttpMethod.POST, entity, Map.class);

            // Parse and return the generated response
            Map<String, Object> responseBody = response.getBody();
            if (responseBody != null && responseBody.containsKey("choices")) {
                @SuppressWarnings("unchecked")
                List<Map<String, Object>> choices = (List<Map<String, Object>>) responseBody.get("choices");
                if (!choices.isEmpty()) {
                    Map<String, Object> firstChoice = choices.get(0);
                    Map<String, Object> messageMap = (Map<String, Object>) firstChoice.get("message");
                    if (messageMap != null && messageMap.containsKey("content")) {
                        return (String) messageMap.get("content");
                    }
                }
            }

            return "Sorry, I couldn't process your request. Please try again.";

        } catch (Exception e) {
            // Handle errors gracefully
            e.printStackTrace();
            return "Sorry, I couldn't process your request. Please try again.";
        }
    }
}