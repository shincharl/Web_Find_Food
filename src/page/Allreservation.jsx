import React, {useEffect, useState} from "react";
import axios from "axios";
import styles from "../css/Allreservation.module.css";

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
       <div className={styles.container}>
            <h1 className={styles.title}>예약목록</h1>
            <div className={styles.list}>
                {reservations.map((reservation) => (
                    <div key={reservation.id} className={styles.card}>
                        <div className={styles.content}>
                            <h3 className={styles.name}>{reservation.name}
                                {" "}<input type="checkbox" className={styles.checkbox} />
                            </h3>
                            <p className={styles.text}>
                               📅 {reservation.calender} ⏰ {reservation.clock}
                            </p>
                            <p className={styles.text}>
                               🐶 {reservation.dog_type} ({reservation.dog_age}살)
                            </p>
                            <p className={styles.text}>📞 {reservation.phone}</p>
                            <p className={styles.text}>
                                📍 {reservation.location} ({reservation.distance} km)
                            </p>
                            <p className={styles.text}>🎉 {reservation.event}</p>
                        </div> 
                    </div>
                ))}
            </div>
       </div>
    );
};


export default Allreservation;