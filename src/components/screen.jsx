import styles from "../css/screen.module.css"
const screen = () => {
    return(
        <div className={styles.screen}>
            <h1>메인 입니다!!!</h1>
            <div style={{ height: '2000px' }}></div>
        </div>
    );
}

export default screen;