import { useOutletContext, useNavigate} from "react-router-dom";
import {useEffect} from "react"
import styles from "../css/Reservation.module.css";

const sampleReservations = [
  { id: 1, name: "홍길동", dogType: "푸들", time: "10:00", status: "대기" },
  { id: 2, name: "김철수", dogType: "시츄", time: "11:00", status: "승인" },
  { id: 3, name: "박영희", dogType: "말티즈", time: "14:00", status: "취소" },
];

const MasterPage = () => {
    const outletContext = useOutletContext() || {};
    const {userData} = outletContext;
    const navigate = useNavigate();

    useEffect(() => {
        if(!userData){
          alert("로그인 해야 이용할 수 있는 관리자 전용 페이지 입니다.");
          navigate("/"); // 홈으로 이동
        }
    }, [userData, navigate]);

    if(!userData) return null; // 렌더링 방지
  
  return (
   <div>
      <h2>관리자 대시보드</h2>
      <p>환영합니다, {userData?.name}님!</p>

      {/* 통계 카드 */}
      <div style={{ display: "flex", gap: 20, marginBottom: 20, flexWrap: "wrap" }}>
        <div style={{ flex: 1, background: "#fff", padding: 20, borderRadius: 8, boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h3>오늘 예약</h3>
          <p>12건</p>
        </div>
        <div style={{ flex: 1, background: "#fff", padding: 20, borderRadius: 8, boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h3>기간 만료 예약</h3>
          <p>230개</p>
        </div>
        <div style={{ flex: 1, background: "#fff", padding: 20, borderRadius: 8, boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h3>이벤트 신청 회원</h3>
          <p>2건</p>
        </div>
      </div>

      {/* 예약 테이블 */}
      <table border={1} cellPadding={10} cellSpacing={0} style={{ width: "100%", background: "#fff", borderRadius: 8 }}>
        <thead>
          <tr style={{ background: "#ecf0f1" }}>
            <th>ID</th>
            <th>예약자</th>
            <th>강아지 종류</th>
            <th>시간</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {sampleReservations.map(res => (
            <tr key={res.id}>
              <td>{res.id}</td>
              <td>{res.name}</td>
              <td>{res.dogType}</td>
              <td>{res.time}</td>
              <td>{res.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  };

export default MasterPage;