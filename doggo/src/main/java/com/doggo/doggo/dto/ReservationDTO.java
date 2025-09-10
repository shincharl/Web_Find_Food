package com.doggo.doggo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReservationDTO {
    private String selected_Calender;
    private String selected_Clock;
    private String dogType;
    private String dogage;
    private String name;
    private String phone;
    private String location;
    private int totalDistance;
    private String event;
}
