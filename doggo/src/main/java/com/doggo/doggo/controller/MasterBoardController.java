package com.doggo.doggo.controller;

import com.doggo.doggo.Service.MemberTodayDateService;
import com.doggo.doggo.dto.ReservationCountDTO;
import com.doggo.doggo.entity.Reservation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class MasterBoardController {

    private final MemberTodayDateService memberTodayDateService;

    // 오늘 예약 개수 알기
    // 만료된 예약 애수 알기 (1달전 데이터는 전부 만료 처리)
    @GetMapping("/masterpage/today")
    public ReservationCountDTO todayReservation(){

        Long todayCount = (long) memberTodayDateService.findTodayReservationMember().size();
        Long expiredCount = (long) memberTodayDateService.getExpiredReservations().size();
        Long eventChoiceMemberCount = (long) memberTodayDateService.getEventAppliedReservations().size();

        return new ReservationCountDTO(todayCount, expiredCount, eventChoiceMemberCount);

    }

    @GetMapping("/masterpage/today/list")
    public List<Reservation> getTodayList(){
        return memberTodayDateService.findTodayReservationMember();
    }

    @GetMapping("/masterpage/expired/list")
    public List<Reservation> getExpiredList(){
        return memberTodayDateService.getExpiredReservations();
    }

    @GetMapping("masterpage/event/list")
    public List<Reservation> getEventAppliedList(){
        return memberTodayDateService.getEventAppliedReservations();
    }
}
