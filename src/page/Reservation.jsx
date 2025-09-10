import { useEffect, useRef, useState } from "react";
import styles from "../css/Reservation.module.css";

const Reservation = () => {

    const [inputValue, setInputValue] = useState('대전 은행동 맛집');

    const mapRef = useRef(null); // 지도 객체 저장용
    const psRef = useRef(null); // 장소 검색 객체 저장용
    const markersRef = useRef([]); // 생성한 마커 저장용

  useEffect(() => {
    console.log("Reservation 컴포넌트 실행됨");

    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=0b4766e4ceb0f40563062b8b95efcbda&autoload=false&libraries=services";
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(36.3261, 127.4385),
          level: 3,
        };

        // 지도 생성
        mapRef.current = new window.kakao.maps.Map(container, options);
        // 장소 검색 객체 생성
        psRef.current = new window.kakao.maps.services.Places();

                searchPlaces(inputValue);
            });
        };

          document.head.appendChild(script);
           // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        const clearMarkers = () => {
            markersRef.current.forEach(marker => marker.setMap(null));
            markersRef.current = [];
        }
        
        // 지도에 마커를 표시하는 함수
        const displayMarker = (place) => {
          const marker = new window.kakao.maps.Marker({
            map: mapRef.current,
            position: new window.kakao.maps.LatLng(place.y, place.x),
          });
          markersRef.current.push(marker);
        };

        //키워드 검색 완료시 호출되는 함수 {data : 검색된 장소 목록 (배열), 
        // status: 검색 결과 상태, pagination: 페이지네이션 관련 객체}
        const placesSearchCB = (data, status, pagination) => {
          if (status === window.kakao.maps.services.Status.OK) {

            //키워드 검색 성공 시 이전 검색 마크 제거
            clearMarkers();

            const bounds = new window.kakao.maps.LatLngBounds();

            for (let i = 0; i < data.length; i++) {
              displayMarker(data[i]);
              bounds.extend( // 각 장소의 좌표를 지도에 추가
                new window.kakao.maps.LatLng(data[i].y, data[i].x)
              );
            }

            mapRef.current.setBounds(bounds); //bounds에 들어온 모든 위치를 자동으로 포함하도록 지도 확대/축소
          }
        };
        
        // 장소 검색 함수
        const searchPlaces = (keyword) => {
            if(!psRef.current) return;
            psRef.current.keywordSearch(keyword, placesSearchCB);
        };

         const handleChange = (e) => {
            setInputValue(e.target.value);
        }
        
        const handleSubmit = () => {
            searchPlaces(inputValue);
        }


  return (
    <>
        <div id="map" className={styles.map}/>
        <input type="text" value = {inputValue} onChange = {handleChange} className={styles.inputBox} />
        <button onClick={handleSubmit} className={styles.searchButton}>검색</button>

    </>
    );
};

export default Reservation;