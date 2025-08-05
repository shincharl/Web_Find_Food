import main_img from "../image/main.jpg"
import styles from "../css/Home.module.css"

const Home = () => {
  return (
    <>
      <div className={styles.image_container}>
         <img src={main_img} alt="메인 페이지 강아지" className={styles.main_img}/>
          <div className={styles.text_group}>
          <p className={styles.overlay_text_1}>슬기로운 산책 생활</p>
          <p className={styles.overlay_text_2}>강아지 산책 예약 서비스</p>
          </div>
      </div>
      <div className={styles.reservation_form}>
        <form>
            <p>예약 정보를 입력해주세요</p>
            <input type="text" placeholder="날짜 선택"/><br/>
            <input type="text" placeholder="시간대 선택"/><br/>
            <input type="text" placeholder="강아지 종류"/><br/>
            <input type="text" placeholder="견종 나이"/><br/>
            <input type="text" placeholder="마리 수, 기타(선택사항)"/><br/>
            <button type="submit">Next</button>
        </form>
      </div>
    </>
  );
}

export default Home;