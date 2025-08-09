import image from "../image/service.jpg"
import Styles from "../css/service.module.css"

const Service = () => {
    return(
        <>
            <div className={Styles.service_container}>
                <div className={Styles.tape}></div>
                <img src={image} alt="서비스 이미지" className={Styles.service_image} />
                <p className={Styles.main_name}>서비스 요금</p>
                <p className={Styles.texts}>투명한 가격정책을 추구합니다.</p>
            </div>

            <div className={Styles.container}>
                <h1>견종 종류 및 크기</h1>
                <h2>대형견, 중형견, 소형견 각 견종 별 맞춤 산책 및 놀이, 플레이 타임</h2>
                    <div className={Styles.section}>
                        <div className={Styles.card}>
                             <div className="card-icon">🐩</div>
                            <h3>소형견</h3>
                            <h4>포메라니안, 푸들, 요크셔테리어, 치와와, 시츄, 말티즈, 닥스훈트 등등</h4>
                            <p>1만원</p> 
                        </div>
                        <div className={Styles.card}>
                            <div className="card-icon">🐕</div>
                            <h3>중형견</h3>
                            <h4>비글, 시바견, 웰시코기, 프렌치불독, 보더콜리, 시베리안 허스키 등등</h4>
                            <p>3만원</p>
                        </div>
                        <div className={Styles.card}>
                            <div className="card-icon">🐶</div>
                            <h3>대형견</h3>
                            <h4>그레이트 데인, 세인트 버나드, 마스티프, 알래스칸 맬러뮤트, 보르조이 등등</h4>
                            <p>5만원</p>
                        </div>        
                    </div>
            </div>
            <hr />
             <div className={Styles.container}>
                <h1>놀이 리스트 및 활동</h1>
                <h2>지역별 특색 산책 코스 선택! 수영장 플레이, 산악 코스, 공원산책 등등 선택 가능</h2>
                <div className={Styles.section}>
                        <div className={Styles.card}>
                            <div className="card-icon">🐕🌳</div>
                            <h3>일반 산책 코스</h3>
                            <h4>강아지가 좋아하는 산책코스 선택 및 카메라 사진 촬영 서비스 가격 포함 </h4>
                            <p>1~2만원</p>
                        </div>     
                        <div className={Styles.card}>
                            <div className="card-icon">🐕⛰️</div>
                            <h3>산악코스</h3>
                            <h4>지역별 산악코스 선택 포함 및 각종 플레이 타임 놀이기구(부메랑, 공, 카메라 등) 가격 포함</h4>
                            <p>3~5만원</p>
                        </div>
                        
                        <div className={Styles.card}>
                            <div className="card-icon">🐕🏊‍♀️</div>
                            <h3>수영장 코스</h3>
                            <h4>애완견 수영장 대여 및 각종 플레이 타임 놀이기구(튜브, 방수조끼, 카메라 등) 가격 포함</h4>
                            <p>5~7만원</p>
                        </div>
                 </div>
            </div>
            <hr />
            <div className={Styles.container}>
                <h1>상담 후 결정</h1>
                <h2>문의남겨주시면 빠른 견적과 안내를 드리겠습니다.</h2>
                    <div className={Styles.section}>
                        <div className={Styles.card}>
                            <div className="card-icon">🐶🐕🐩</div>
                            <h3>애완견 단체 예약</h3>
                            <h4>3마리 이상의 단체 애완견 산책 서비스 예약(추가 시 할인이 적용됩니다.)</h4>
                            <p>상담 후 결정</p>
                        </div>
                        <div className={Styles.card}>
                            <div className="card-icon">🎂🎁</div>
                            <h3>특색있는 이벤트 예약</h3>
                            <h4>생일축하 이벤트, 애견 결혼식 및 장거리 산책코스 예약 등등</h4>
                            <p>상담 후 결정</p>
                        </div>
                        <div className={Styles.card}>
                            <div className="card-icon">❓</div>
                            <h3>기타</h3>
                            <h4>기타사항을 문의에 남겨주세요</h4>
                            <p>상담 후 결정</p>
                        </div>        
                    </div>
            </div>
            <hr />
            <div className={Styles.container}>
                <h1>추가 옵션</h1>
                <br/>
                    <div className={Styles.section}>
                        <div className={Styles.card}>
                            <div className="card-icon">🛁</div>
                            <h3>애완견 목욕</h3>
                            <h4>견종 및 크기에 따라 가격 상이</h4>
                            <p>2만원</p>
                        </div>
                        <div className={Styles.card}>
                            <div className="card-icon">💆</div>
                            <h3> 마사지 및 특별 산책</h3>
                            <h4>노령견 및 장애견 집중 케어(강아지 유모차 등 대여) 서비스</h4>
                            <p>3~5만원</p>
                        </div>
                    </div>
            </div>
            <hr />
        </>
    );
}

export default Service;