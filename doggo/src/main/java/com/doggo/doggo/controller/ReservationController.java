package com.doggo.doggo.controller;

import com.doggo.doggo.dto.ReservationDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ReservationController {

    @PostMapping("/reservation")
    public String makeReservation(@RequestBody ReservationDTO reservation){
        System.out.println("날짜: " + reservation.getSelected_Calender());
        System.out.println("시간: " + reservation.getSelected_Clock());
        System.out.println("강아지 종류: " + reservation.getDogType());
        System.out.println("견종 나이: " + reservation.getDogage());
        System.out.println("예약자 이름: " + reservation.getName());
        System.out.println("전화번호: " + reservation.getPhone());
        System.out.println("위치: " + reservation.getLocation());
        System.out.println("거리: " + reservation.getTotalDistance());
        System.out.println("이벤트: " + reservation.getEvent());

        return "예약 완료";
    }
}
