import Styles from '../css/header.module.css';
import {Link} from 'react-router-dom';
const Header = ({ toggleSidebar }) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary ${Styles.navbarSticky}`}>
        <div className="container-fluid d-flex align-items-center">

          {/* 왼쪽 끝: 로고 */}
          <Link to="/" className="navbar-brand">웹 사이트</Link>

          {/* 오른쪽 끝으로 밀기 */}
          <div className="d-flex align-items-center ms-auto">

            {/* 메뉴 버튼 */}
            <button onClick={toggleSidebar} className={`btn btn-outline-primary ${Styles.push_menu} me-3`}>
              ☰ 메뉴
            </button>

            {/* 내비게이션 메뉴 */}
            <ul className="navbar-nav d-flex flex-row mb-0">
              <li className="nav-item me-3">
                <Link to="/signin" className="nav-link active" aria-current="page">로그인</Link>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link active" aria-current="page" href="/">내 정보</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="/">예약</a>
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