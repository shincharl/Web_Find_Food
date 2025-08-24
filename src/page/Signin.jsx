import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from '../css/signin.module.css';
import { signup, login } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  // 로그인 상태
  const [value1, setValue1] = useState("");
  const [password1, setPassword1] = useState("");

  // 회원가입 상태
  const [name, setName] = useState("");
  const [value2, setValue2] = useState("");
  const [password2, setPassword2] = useState("");

  // 로그인/회원가입 화면 전환
  const [isLogin, setIsLogin] = useState(true);

  // 로그인 에러 메시지
  const [errorMessage, setErrorMessage] = useState("");

  // 로그인 submit
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!value1 || !password1) {
      setErrorMessage("로그인 하지 않았습니다.");
      return;
    }

    try {
      const res = await login(value1, password1);
      console.log('로그인 성공: ', res.data);
      navigate("/", { state: { userData: res.data } });
    } catch (error) {
      const message = error.response?.data?.message || "로그인 실패";
      setErrorMessage(message);
    }
  };

  // 회원가입 submit
  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !value2 || !password2) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    try {
      const res = await signup(name, value2, password2);
      console.log('회원가입 성공: ', res.data);

      alert("회원가입 성공! 로그인 해주세요.");

      // 초기화 후 로그인 화면으로
      setIsLogin(true);
      setErrorMessage("");
      setName("");
      setValue2("");
      setPassword2("");
    } catch (error) {
      console.log('회원가입 실패: ', error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "네트워크 에러");
    }
  };

  return (
    <div className={styles.container}>
      {isLogin ? (
        <>
          <h2 className={styles.heading}>로그인</h2>
          <form onSubmit={handleLogin} className={`${styles.card} ${styles.form}`}>
            <div className={styles.social_icons_container}>
              <FontAwesomeIcon icon={faTwitter} size="2x" className={styles.social_icon} />
              <FontAwesomeIcon icon={faInstagram} size="2x" className={styles.social_icon} />
              <FontAwesomeIcon icon={faGoogle} size="2x" className={styles.social_icon} />
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
            <div style={{ whiteSpace: "pre-line", height: "1.2em", color: "red" }}>
              {errorMessage || <>&nbsp;</>}
            </div>
            <hr className={styles.divider} />
            <button type="submit" className={styles.button_primary}>로그인</button>
            <button type="button" onClick={(e) => {e.preventDefault(); setIsLogin(false); setErrorMessage(""); }} className={styles.button_primary}>
              회원가입
            </button>
          </form>
        </>
      ) : (
        <>
          <h2 className={styles.heading}>회원가입</h2>
          <form onSubmit={handleSignup} className={`${styles.card} ${styles.form}`}>
            <div className={styles.social_icons_container}>
              <FontAwesomeIcon icon={faTwitter} size="2x" className={styles.social_icon} />
              <FontAwesomeIcon icon={faInstagram} size="2x" className={styles.social_icon} />
              <FontAwesomeIcon icon={faGoogle} size="2x" className={styles.social_icon} />
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
            <button type="button" onClick={() => setIsLogin(true)} className={styles.button_primary}>
              다시 로그인
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Signin;
