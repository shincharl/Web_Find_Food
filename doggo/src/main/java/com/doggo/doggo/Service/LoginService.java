package com.doggo.doggo.Service;

import com.doggo.doggo.dto.LoginResponseDto;
import com.doggo.doggo.dto.RegisterDto;
import com.doggo.doggo.entity.Member;
import com.doggo.doggo.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

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

    public RegisterDto signup(RegisterDto registerDto) {

        Optional<Member> byEmail = loginRepository.findByEmail(registerDto.getEmail());

        if(byEmail.isPresent()){

            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "이미 가입된 이메일입니다."
            );

        }else{
            // DTO -> Entity 변환
            Member member = new Member();
            member.setEmail(registerDto.getEmail());
            member.setPassword(registerDto.getPassword());
            member.setName(registerDto.getName());

            // DB 저장
            Member saved = loginRepository.save(member);

            // Entity -> DTO 변환해서 반환
            RegisterDto response = new RegisterDto();
            response.setEmail(saved.getEmail());
            response.setName(saved.getName());

            return response;

        }



    }

    /* DB에 입력한 ID 확인*/


}
