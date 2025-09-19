package com.doggo.doggo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.ToString;

@Entity
@ToString
@Getter
public class Reservation {

    protected Reservation() {}

    public Reservation(Long id, String calender, String clock, String dog_type, String password, int dog_age, String name, String phone, String location, int distance, String event) {
        this.id = id;
        this.calender = calender;
        this.clock = clock;
        this.dog_type = dog_type;
        this.password = password;
        this.dog_age = dog_age;
        this.name = name;
        this.phone = phone;
        this.location = location;
        this.distance = distance;
        this.event = event;
    }

    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String calender;

    @Column
    private String clock;

    @Column
    private String dog_type;

    @Column
    private String password;

    @Column
    private int dog_age;

    @Column
    private String name;

    @Column
    private String phone;

    @Column
    private String location;

    @Column
    private int distance;

    @Column
    private String event;

}
