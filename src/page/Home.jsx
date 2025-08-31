import main_img from "../image/main.jpg";
import styles from "../css/Home.module.css";
import CalendarBasic from "../components/Calender";
import { Calendar } from "lucide-react";
import { useState } from "react";
import TimePickers from "../components/TimePicker";
import Regions from "../components/Regions";
import Movingdistance from "../components/Movingdistance";

const Home = () => {
  // 현재 단계
  const [step, setStep] = useState(1);

  // 다음 단계 핸들
  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  // 이전 단계 핸들
  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  // 단계 : 1 입력값 상태
  const [selected_Calender, setSelected_Calender] = useState();
  const [open_Calender, setOpen_Calender] = useState(false);
  const [selected_Clock, setSelected_Clock] = useState(null);
  const [value, setValue] = useState("");



  // 단계 : 2 입력값 상태

  // 지역 선택
  const [place, setPlace] = useState(false);

  // 총 거리 값 받기
  const [totalDistance, setTotalDistance] = useState(0);

  // 입력한 지역 값 받기
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedDong, setSelectedDong] = useState("");
  const [selectedDistition, setSelectedDistition] = useState(false);

  const handleChange = (e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input)) setValue(input);
  };

  return (
    <div className={styles.page_container}>
      {/* 왼쪽 이미지 */}
      <div className={styles.image_container}>
        <img
          src={main_img}
          alt="메인 페이지 강아지"
          className={styles.main_img}
        />
        <div className={styles.text_group}>
          <p className={styles.overlay_text_1}>슬기로운 산책 생활</p>
          <p className={styles.overlay_text_2}>강아지 산책 예약 서비스</p>
        </div>
      </div>

      {/* 오른쪽 예약 폼 */}
      {step === 1 && (
        <div className={styles.reservation_form}>
          <p style={{ fontWeight: "700", marginBottom: "20px" }}>
            예약 정보를 입력해주세요
          </p>

          {/* 달력 */}
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="날짜 선택"
              value={
                selected_Calender
                  ? selected_Calender.toLocaleDateString("ko-KR")
                  : ""
              }
              readOnly
              onClick={() => setOpen_Calender(!open_Calender)}
            />
            <Calendar
              size={20}
              onClick={() => setOpen_Calender(!open_Calender)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            />
            {open_Calender && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  zIndex: 100,
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  marginTop: "4px",
                }}
              >
                <CalendarBasic
                  selected={selected_Calender}
                  setSelected={setSelected_Calender}
                  setOpen={setOpen_Calender}
                />
              </div>
            )}
          </div>

          {/* 시간 선택 */}
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <TimePickers
              selected={selected_Clock}
              setSelected={setSelected_Clock}
            />
          </div>

          {/* 강아지 정보 */}
          <input type="text" placeholder="강아지 종류" />
          <input
            type="text"
            placeholder="견종 나이 (숫자만 입력)"
            value={value}
            onChange={handleChange}
          />
          <input type="text" placeholder="마리 수, 기타 (선택사항)" />

          {/* 다음 버튼 */}
          <button type="button" onClick={handleNext}>
            다음
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className={styles.reservation_form}>
          <p style={{ fontWeight: "700", marginBottom: "20px" }}>
            예약자 정보를 입력해주세요
          </p>

          <input type="text" placeholder= "예약자 성명" />
          <input type="text" placeholder= "반려견 이름" />
          <input type="text" placeholder= "지역선택 (일부 지역은 선택이 불가 할 수 있습니다.)" 
              readOnly
              value={selectedRegion && selectedDong ? `${selectedRegion} ${selectedDong}` : ""}
              onClick = {() => setPlace(!place)}
          />

          {place && (
            <Regions onClose={() => setPlace(!place)}
                     onConfirm={(region, dong) => {
                      setSelectedRegion(region);
                      setSelectedDong(dong);
                      setPlace(false); // 모달 창 닫기
                     }}/>
          )}


          <input type="text" placeholder= "코스 선택 (마우스 우측 클릭 종료)" 
              readOnly
              onClick = {() => setSelectedDistition(!selectedDistition)} 
              value = {totalDistance > 0 ? totalDistance : ""}/>

           {selectedDistition && (
            <Movingdistance 
              address={selectedRegion && selectedDong ? `${selectedRegion} ${selectedDong}` : ""}
              onDistanceChange={setTotalDistance}
           />
           )}

          <input type="text" placeholder= "이벤트 선택" />

          <button onClick={handlePrev}>이전</button>
          <button onClick={handleNext}>다음</button>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className={styles.reservation_form}>
          <h2>Step 3: 예약 확인</h2>
          <p>날짜: {selected_Calender?.toLocaleDateString("ko-KR")}</p>
          <p>시간: {selected_Clock ? selected_Clock.toLocaleTimeString() : ""}</p>
          <p>강아지 나이: {value}</p>
          {/* ...필요한 정보들 추가 */}

          <button onClick={handlePrev}>이전</button>
          <button onClick={() => alert("예약 완료!")}>완료</button>
        </div>
      )}
    </div>
  );
};

export default Home;
