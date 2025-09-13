package com.doggo.doggo.dto;

import com.doggo.doggo.entity.Reservation;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReservationDTO {
    private String selected_Calender;
    private String selected_Clock;
    private String dogType;
    private int dogage;
    private String name;
    private String phone;
    private String location;
    private int totalDistance;
    private String event;

    public Reservation toEntity() {
        return new Reservation(null, selected_Calender, selected_Clock, dogType, dogage, name, phone, location, totalDistance, event);
    }
}
