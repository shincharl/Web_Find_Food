import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import styles from "../css/Allreservation.module.css";

const Allreservation = () => {

     const navigate = useNavigate();

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

    // 수정하기 버튼 입력
    const modify = async (reservation) => {

       const inputPassword = prompt('등록하신 비밀번호를 입력해주세요');

       if(!inputPassword){
            alert('잘못된 입력입니다...');
            return;
       }

       axios
        .post(`http://localhost:8080/api/reservation/${reservation.id}`, {password: inputPassword})
        .then((res) => {
            if(res.data === "OK"){
                navigate(`/modify/${reservation.id}`);
            }
        })
        .catch((err) => {
            console.error(err);
            alert("비밀번호가 올바르지 않습니다.");
        });
    };

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
                               🐶 {reservation.dogType} ({reservation.dogAge}살)
                            </p>
                            <p className={styles.text}>📞 {reservation.phone}</p>
                            <p className={styles.text}>
                                📍 {reservation.location} ({reservation.distance} km)
                            </p>
                            <p className={styles.text}>🎉 {reservation.event}</p>
                        </div> 
                         <div className={styles.rightButtonWrapper}>
                                <button className={styles.rightButtonArea} onClick={() => modify(reservation)}>
                                    수정하기
                                </button>
                            </div>
                    </div>
                ))}
            </div>
       </div>
    );
};


export default Allreservation;