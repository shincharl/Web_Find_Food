package com.doggo.doggo.repository;

import com.doggo.doggo.entity.Reservation;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface reservationRepository extends CrudRepository<Reservation, Long> {

    @Override
    ArrayList<Reservation> findAll();
}
