import Styles from '../css/sidebar.module.css'
const Sidebar = ({isOpen, closeSidebar}) => {

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