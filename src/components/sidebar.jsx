import Styles from '../css/sidebar.module.css';
import {Link} from 'react-router-dom';
const Sidebar = ({isOpen, closeSidebar, userData, onLogout}) => {

    const handleSidebarClick = (e) =>{
       e.stopPropagation(); // 버튼 클릭이 외부 클릭으로 처리되지 않도록 막음
    }


    return(
           <>
                {isOpen && (
                    <div className={Styles.overlay} onClick={closeSidebar}/>
                )}

                <div className={`${Styles.left_side} ${isOpen ? Styles.move : ''}`}
                     onClick={handleSidebarClick}
                >
                    <h2>사이드바</h2>

                    {/* 로그인시 사용자 정보 표시 */}
                        {userData ? (
                          <>
                            <p style={{"margin-top" : "2%"}}>{userData.name}님 환영합니다!</p>
                            <span style={{marginLeft : "20px"}}></span>
                            <button className="btn btn-outline-danger ms-2" onClick={onLogout}>
                                로그아웃
                            </button>
                            <span style={{marginLeft : "20px"}}></span>
                          </>
                        ) : (
                            <>
                                <Link to="/signin">관리자 로그인</Link>
                                <span style={{marginLeft : "20px"}}></span>
                            </>
                        )}                        

                    <ul>
                        <li>내정보</li>
                        <li>예약</li>
                        <li>QnA</li>
                    </ul>
                    
                </div>
           </>
    );
}

export default Sidebar;