package com.doggo.doggo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QnaController {

    @PostMapping("/api/qna")
    public ResponseEntity<String> saveQna() {

        return null;
    }
}
