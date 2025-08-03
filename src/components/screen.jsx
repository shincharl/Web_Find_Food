import styles from "../css/screen.module.css"
const screen = ({children}) => {
    return(
        <div className={styles.screen}>
            {children}
        </div>
    );
}

export default screen;