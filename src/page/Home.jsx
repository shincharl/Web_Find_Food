import main_img from "../image/main.jpg";
import styles from "../css/Home.module.css";
import CalendarBasic from "../components/Calender";
import { Calendar, Clock } from "lucide-react";
import { useState} from "react";
import TimePickers from "../components/TimePicker";

const Home = () => {
  const [selected_Calender, setSelected_Calender] = useState();
  const [open_Calender, setOpen_Calender] = useState(false);
  const [selected_Clock, setSelected_Clock] = useState(null);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input)) setValue(input);
  };

  return (
    <div className={styles.page_container}>
      {/* 왼쪽 이미지 */}
      <div className={styles.image_container}>
        <img src={main_img} alt="메인 페이지 강아지" className={styles.main_img} />
        <div className={styles.text_group}>
          <p className={styles.overlay_text_1}>슬기로운 산책 생활</p>
          <p className={styles.overlay_text_2}>강아지 산책 예약 서비스</p>
        </div>
      </div>

      {/* 오른쪽 예약 폼 */}
      <div className={styles.reservation_form}>
        <p style={{ fontWeight: "700", marginBottom: "20px" }}>예약 정보를 입력해주세요</p>

        {/* 달력 */}
        <div style={{ position: "relative", marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="날짜 선택"
            value={selected_Calender ? selected_Calender.toLocaleDateString("ko-KR") : ""}
            readOnly
            onClick={() => setOpen_Calender(!open_Calender)}
          />
          <Calendar
            size={20}
            onClick={() => setOpen_Calender(!open_Calender)}
            style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}
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
              <CalendarBasic selected={selected_Calender} setSelected={setSelected_Calender} setOpen={setOpen_Calender} />
            </div>
          )}
        </div>

        {/* 시간 선택 */}
        <div style={{ position: "relative", marginBottom: "20px" }}>
              <TimePickers selected={selected_Clock} setSelected={setSelected_Clock} />
        </div>

        {/* 강아지 정보 */}
        <input type="text" placeholder="강아지 종류" />
        <input type="text" placeholder="견종 나이 (숫자만 입력)" value={value} onChange={handleChange} />
        <input type="text" placeholder="마리 수, 기타 (선택사항)" />
        <button type="submit">다음</button>
      </div>
    </div>
  );
};

export default Home;
