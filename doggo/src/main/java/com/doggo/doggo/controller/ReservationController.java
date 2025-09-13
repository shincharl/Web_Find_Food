package com.doggo.doggo.controller;

import com.doggo.doggo.dto.ReservationDTO;
import com.doggo.doggo.entity.Reservation;
import com.doggo.doggo.repository.reservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ReservationController {
    @Autowired
    private reservationRepository reservationRepository;

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

        // 1. DTO를 엔티티로 변환
        Reservation reservations = reservation.toEntity();
        System.out.println(reservations.toString());

        // 2. 리파지터리로 엔티티를 DB에 저장
        Reservation saved = reservationRepository.save(reservations);
        System.out.println(saved.toString());

        return "예약 완료";
    }

    @GetMapping("/allReservation")
    public List<Reservation> index(){
        return reservationRepository.findAll();
    }
}
