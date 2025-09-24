package com.doggo.doggo.repository;

import com.doggo.doggo.dto.FindAllReservationDTO;
import com.doggo.doggo.dto.ReservationDTO;
import com.doggo.doggo.entity.Reservation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;
import java.util.List;

public interface reservationRepository extends CrudRepository<Reservation, Long> {

    @Override
    ArrayList<Reservation> findAll();

    List<FindAllReservationDTO> findAllProjectedBy();
}
