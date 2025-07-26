import styles from '../css/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <div className={styles.footer}>
            <h2>푸터 입니다.</h2>
            <div className={styles.icons}>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faGithub}/>
             </div>
        </div>
    )
}

export default Footer;  