import React, {useEffect, useState} from "react";
import axios from "axios";

const Allreservation = () => {

    const [reservations, setReservations] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:8080/api/allReservation")
             .then((res) => {
                setReservations(res.data);
             })
            .catch((err) => {
                console.error("데이터 불러오기 실패:", err);
            });
    }, []);

    return(
        <div>
            <h1>예약 목록</h1>
            <ul>
                {reservations.map((reservation) => (
                    <li key = {reservation.id}>
                        {reservation.calender}
                        {reservation.clock}
                        {reservation.dog_type}
                        {reservation.dog_age}
                        {reservation.name}
                        {reservation.phone}
                        {reservation.location}
                        {reservation.distance}
                        {reservation.event}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Allreservation;