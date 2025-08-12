import { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from '../css/signin.module.css';
import { signup, login } from "../api/auth";


const Signin = () => {

  /*로그인시 사용하는 useState 훅*/
  const [value1, setValue1] = useState("");
  const [password1, setPassword1] = useState("");

  /*회원가입시 사용하는 useState 훅*/
  const [name, setName] = useState("");
  const [value2, setValue2] = useState("");
  const [password2, setPassword2] = useState("");

  /*로그인, 회원가입 전환하는 useState 훅*/
  const [change, setChange] = useState(true);

  /* 로그인 에러정보 추가 */
  const [errorMessage, setErrormessage] = useState("");

  /* 백엔드 로그인 json 데이터 전달*/
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    try {
      const res = await login(value1, password1);
      console.log('로그인 성공: ', res.data);
      
    } catch (error) {
      console.error('로그인 실패: ', error.response?.data || error.message);
      setErrormessage("로그인 실패...\n회원가입을 진행해 주세요.");
      }
  };

 /* 백엔드 회원가입 json 데이터 전달 */
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      const res = await signup(name, value2, password2);
      console.log('회원가입 성공: ', res.data);
    } catch (error) {
      console.log('회원가입 실패: ', error.response?.data || error.message);
    }
  };

  return (
    <>
      {change ? (
        <div className={styles.container}>
          <h2 className={styles.heading}>로그인</h2>
          <form onSubmit={handleSubmit1} className={`${styles.card} ${styles.form}`}>
            <div className={styles.social_icons_container}>
              <FontAwesomeIcon icon={faTwitter} size="2x"className ={styles.social_icon} />
              <FontAwesomeIcon icon={faInstagram} size="2x" className ={styles.social_icon} />
              <FontAwesomeIcon icon={faGoogle} size="2x"  className ={styles.social_icon} />
            </div>
            <input
              type="text"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              placeholder="Email address"
              className={styles.input_field}
            />
            <hr className={styles.divider} />
            <input
              type="password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              placeholder="Password"
              className={styles.input_field}
            />

            <div style={{whiteSpace: "pre-line", height : "1.2em", color: "red"}}>
              {errorMessage || <>&nbsp;</>}
            </div>

            <hr className={styles.divider} />
            <button type="submit" className={styles.button_primary}>로그인</button>
            <button type="button" onClick={() => setChange(false)}  className={styles.button_primary}>회원가입</button>
          </form>
        </div>
      ) : (
        <div className={styles.container}>
          <h2 className={styles.heading}>회원가입</h2>
          <form onSubmit={handleSubmit2} className={`${styles.card} ${styles.form}`}>
            <div className={styles.social_icons_container}>
              <FontAwesomeIcon icon={faTwitter} size="2x" className ={styles.social_icon} />
              <FontAwesomeIcon icon={faInstagram} size="2x" className ={styles.social_icon} />
              <FontAwesomeIcon icon={faGoogle} size="2x" className ={styles.social_icon} />
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className={styles.input_field}
            />
            <hr className={styles.divider} />
            <input
              type="text"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              placeholder="Email address"
              className={styles.input_field}
            />
            <hr className={styles.divider} />
            <input
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="Password"
              className={styles.input_field}
            />
            <hr className={styles.divider} />
            <button type="submit" className={styles.button_primary}>회원가입</button>
            <button type="button" onClick={() => setChange(true)}  className={styles.button_primary}>다시 로그인</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Signin;
