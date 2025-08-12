package com.doggo.doggo.Service;

import com.doggo.doggo.dto.LoginResponseDto;
import com.doggo.doggo.entity.Member;
import com.doggo.doggo.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    
    // 리파지토리 생성자 주입 실행
    private final LoginRepository loginRepository;

    @Autowired
    public LoginService(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

     public LoginResponseDto login(String email, String password) {

        // 아이디 조회, 실패시 에러 메시지 출력
        LoginResponseDto loginResponseDto = loginRepository.findByLoginId(email, password);

        //  dto 안의 회원 이름 값 반환
         return loginResponseDto;

    }

    /* DB에 입력한 ID 확인*/


}
