package com.doggo.doggo.Service;

import com.doggo.doggo.entity.Reservation;
import com.doggo.doggo.repository.reservationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberTodayDateService {

    @Autowired
    private reservationRepository reservationRepository;

    public List<Reservation> findTodayReservationMember(){
        
        LocalDate today = LocalDate.now(); // 오늘 날짜 구하기

        LocalDateTime startOfDay = today.atStartOfDay();
        LocalDateTime endOfDay = today.atTime(LocalTime.MAX);

        return reservationRepository.findAllByCreatedDateBetween(startOfDay, endOfDay);

    }

    public List<Reservation> getExpiredReservations(){
        LocalDateTime oneMonthAgo = LocalDateTime.now().minusMonths(1);

        return reservationRepository.findAllByCreatedDateBefore(oneMonthAgo);
    }

    public List<Reservation> getEventAppliedReservations(){

        return reservationRepository.findAllByEventIsNotNullAndEventNot("");
    }

}
