import axios from "axios";
import { useOutletContext, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react"
import styles from "../css/Reservation.module.css";

const MasterPage = () => {
    const outletContext = useOutletContext() || {};
    const {userData} = outletContext;
    const navigate = useNavigate();

    const [todayCount, setTodayCount] = useState([]);
    const [expiredCount, setExpiredCount] = useState([]);
    const [eventChoiceMemberCount, setEventChoiceMemberCount] = useState([]);
    const [qnaCount, setQnaCount] = useState([]);

    const [selectedType, setSelectedType] = useState(null);
    const [tableData, setTableData] = useState([]);


    // 각각 카드 클릭 시 처리할 함수
    const handleCardClick = (type) => {
      setSelectedType(type);

      let url = "";
      if (type === "today"){ url = "http://localhost:8080/api/masterpage/today/list";}
      else if (type === "expired"){url = "http://localhost:8080/api/masterpage/expired/list";}
      else if (type === "event"){url = "http://localhost:8080/api/masterpage/event/list";}
      else if (type === "qna"){url="http://localhost:8080/api/masterpage/master/qna";}

      axios.get(url)
        .then((res) => setTableData(res.data))
        .catch((err) => console.error(`${type} 데이터 불러오기 실패:`, err));

    }

    const handleStatusChange = (id, newStatus) => {
     
      // 상태 변경 전 원본을 따로 저장
    const originalStatus = tableData.find(item => item.id === id)?.status;
    
      // 프론트엔드 상태 즉시 업데이트
    setTableData((prev) => 
      prev.map((item) => 
        item.id === id ? {...item, status: newStatus} : item
      )
    );

      // 백엔드로 변경 요청
      axios.put(`http://localhost:8080/api/masterpage/status/${id}`, { status: newStatus })
        .then((res) => {
            console.log("상태 변경 성공:", res.data);
        })
        .catch((err) => {
            console.error("상태 변경 실패:" , err);
            alert("상태 변경 중 오류가 발생했습니다.");

            // 실패 시 다시 원래 상태로 복구
            setTableData((prev) =>
              prev.map((item) => 
                item.id === id ? {...item, status: originalStatus} : item
              )
            );
        });
    }


    useEffect(() => {
        if(!userData){
          alert("로그인 해야 이용할 수 있는 관리자 전용 페이지 입니다.");
          navigate("/"); // 홈으로 이동
        }

        //오늘 예약 목록 가져오기
        axios
            .get("http://localhost:8080/api/masterpage/today")
            .then((res) => {
              setTodayCount(res.data.todayCount);
              setExpiredCount(res.data.expiredCount);
              setEventChoiceMemberCount(res.data.eventChoiceMemberCount);
              setQnaCount(res.data.qnaCount);
            })
            .catch((err) => {
              console.error("예약 데이터 불러오기 실패:", err);
            });


    }, [userData, navigate]);

    if(!userData) return null; // 렌더링 방지
  
  return (
   <div>
      <h2>관리자 대시보드</h2>
      <p>환영합니다, {userData?.name}님!</p>

      {/* 통계 카드 */}
      <div style={{ display: "flex", gap: 20, marginBottom: 20, flexWrap: "wrap" }}>
        <div style={{ flex: 1, background: "#fff", padding: 20, borderRadius: 8, boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}
          onClick={() => {handleCardClick("today")}}
        >
          <h3>오늘 예약</h3>
          <p>{todayCount}건</p>
        </div>
        <div style={{ flex: 1, background: "#fff", padding: 20, borderRadius: 8, boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}
          onClick={() => {handleCardClick("expired")}}
        >
          <h3>기간 만료 예약</h3>
          <p>{expiredCount}건</p>
        </div>
        <div style={{ flex: 1, background: "#fff", padding: 20, borderRadius: 8, boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}
          onClick={() => handleCardClick("event")}
        >
          <h4>이벤트 신청 회원</h4>
          <p>{eventChoiceMemberCount}건</p>
        </div>
        <div style={{ flex: 1, background: "#fff", padding: 20, borderRadius: 8, boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}
          onClick={() => handleCardClick("qna")}
        >
          <h3>QnA 목록</h3>
          <p>{qnaCount}건</p>
        </div>
      </div>

      {/* 예약 테이블 */}
      {selectedType && (
        <>
          <h3 style={{marginTop: 30}}>
            {selectedType === "today"
              ? "오늘 예약 목록"
              : selectedType === "expired"
              ? "기간 만료 예약 목록"
              : selectedType === "event"
              ? "이벤트 신청 회원 목록"
              : selectedType === "qna"
              ? "QnA 목록"
              : ""
              }
          </h3>

          {/* QnA 목록일 때는 다른 테이블 렌더링 */}
          {selectedType === "qna" ? (
            <table
              border={1}
              cellPadding={10}
              cellSpacing={0}
              style={{ width: "100%", background: "#fff", background: 8}}
              >
              <thead>
                <tr style={{ background: "#ecf0f1" }}>
                  <th>ID</th>
                  <th>메모</th>
                  <th>만족도</th>
                  <th>작성일</th>
                </tr>
              </thead>
              <tbody>
                {tableData.length > 0 ? (
                  tableData.map((res) => (
                    <tr key={res.id}>
                      <td>{res.id}</td>
                      <td>{res.memo}</td>
                      <td>{res.satisfaction}</td>
                      <td>{res.createdAt}</td>
                    </tr>
                  ))
                ): (
                  <tr>
                    <td colSpan={4} style={{textAlign: "center", color: "gray"}}>
                      QnA 데이터가 없습니다.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          ) : (
                      <table
            border={1}
            cellPadding={10}
            cellSpacing={0}
            style={{ width: "100%", background: "#fff", borderRadius: 8}}  
          >
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
              {tableData.length > 0 ? (
                tableData.map((res) => (
                  <tr key={res.id}>
                    <td>{res.id}</td>
                    <td>{res.name}</td>
                    <td>{res.dogType}</td>
                    <td>{res.clock}</td>
                    <td>
                      현재상태 : {res.status}<br/>
                     <select 
                        value={res.status || ""}
                        onChange={(e) => handleStatusChange(res.id, e.target.value)}
                      >
                        <option value="대기">대기</option>
                        <option value="승인">승인</option>
                        
                     </select>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center", colorl: "gray"}}>
                    데이터가 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          )}
        </>
      )}
    </div>
    );
  };

export default MasterPage;