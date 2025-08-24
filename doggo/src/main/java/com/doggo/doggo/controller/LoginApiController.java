package com.doggo.doggo.controller;

import com.doggo.doggo.Service.LoginService;
import com.doggo.doggo.dto.LoginRequestDto;
import com.doggo.doggo.dto.LoginResponseDto;
import com.doggo.doggo.dto.RegisterDto;
import com.doggo.doggo.entity.Member;
import com.doggo.doggo.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") //리액트가 돌아가는 주소
public class LoginApiController {

    // 1. 서비스 객체 생성자 주입
    private final LoginService loginService;

    public LoginApiController(LoginService loginService) {
        this.loginService = loginService;
    }

    // 2. 서비스에 데이터 처리 요청 및 반환 (로그인)
    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginRequestDto request){

        // 서비스로 값 할당 후 응답 dto로 반환 후 재할당
        LoginResponseDto response = loginService.login(request.getEmail(), request.getPassword());

        // entity -> dto 변환 후 값 반환
        return ResponseEntity.ok(response);

    }
    
    // 2. 서비스에 데이터 처리 요청 및 반환 (회원가입)
    @Transactional
    @PostMapping("/signup")
    public ResponseEntity<RegisterDto> register(@RequestBody RegisterDto registerDto){

        RegisterDto regist_Dtos = loginService.signup(registerDto);

        // entity -> dto 변환 후 값 반환
        return ResponseEntity.ok(regist_Dtos);
    }


}
