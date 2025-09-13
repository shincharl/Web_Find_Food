import Styles from '../css/header.module.css';
import {Link} from 'react-router-dom';
const Header = ({ toggleSidebar, userData, onLogout }) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary ${Styles.navbarSticky}`}>
        <div className="container-fluid d-flex align-items-center">

          {/* 왼쪽 끝: 로고 */}
          <Link to="/" className="navbar-brand">웹 사이트</Link>

          {/* 오른쪽 끝으로 밀기 */}
          <div className="d-flex align-items-center ms-auto">

          {/* 로그인시 사용자 정보 표시 */}
            {userData ? (
              <>
                <p style={{"margin-top" : "2%"}}>{userData.name}님 환영합니다!</p>
                <span style={{"margin-left" : "20px"}}></span>
                <button className="btn btn-outline-danger ms-2" onClick={onLogout}>
                  로그아웃
                </button>
                <span style={{"margin-left" : "20px"}}></span>
                
              </>
            ) : (
              <>
                <Link to="/signin">로그인</Link>
                <span style={{"margin-left" : "20px"}}></span>
              </>
            )}

            {/* 메뉴 버튼 */}
            <button onClick={toggleSidebar} className={`btn btn-outline-primary ${Styles.push_menu} me-3`}>
              ☰ 메뉴
            </button>

            {/* 내비게이션 메뉴 */}
            <ul className="navbar-nav d-flex flex-row mb-0">
              <li className="nav-item me-3">
                <Link to="/reservation" className="nav-link active">예약</Link>
              </li>
              <li className="nav-item me-3">
                <Link to="/allReservation" className="nav-link active">예약확인</Link>
              </li>
               <li className="nav-item me-3">
                <Link to="/service" className="nav-link active">서비스 요금</Link>
              </li>
              <li className="nav-item">
                <span className="nav-link disabled" aria-disabled="true">QnA</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;