import React, {useState} from "react";
import Styles from "../css/Qna.module.css"

const Qna = () => {

    const [formData, setFormData] = useState({
        memo : "",
        satisfaction : "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("제출된 데이터:", formData);
        if(formData.satisfaction && formData.memo){
                alert("소중한 의견 감사합니다.");    
        }else{
                alert("입력되지 않은 항목이 있습니다.");
            }
        };

    return(
        <>
            <div className={Styles.qnaContainer}>
                <div className={Styles.qnaCard}>
                    <header className={Styles.qnaHeader}>
                        <h2>Q&A</h2>
                        <p>궁금한 내용은 무엇인가요?</p>
                    </header>

                    <section className={Styles.qnaList}>
                        {[
                            "첫번째 질문입니다.",
                            "두번째 질문입니다.",
                            "세번째 질문입니다.",
                            "네번째 질문입니다.",
                            "다섯번째 질문입니다.",
                        ].map((q, idx) => (
                            <div key = {idx} className={Styles.qnaItem}>
                                <h4>Q. {q}</h4>
                                <p>A. 내용들...</p>
                            </div>
                        ))}
                    </section>

                    <div className={Styles.qnaContact}>
                        <h4>관리자 : OOO</h4>
                        <h4>연락처 : 010-1234-5678</h4>
                    </div>

                            <form onSubmit={handleSubmit} className={Styles.qnaForm}>
                                <p className={Styles.qnaQuestion}>이 페이지에서 제공하는 정보에 대하여 만족하십니까?</p>
                                <div className={Styles.qnaRadios}>
                                  {[
                                    {label: "매우만족", value: "very_good"},
                                    {label: "만족", value: "good"},
                                    {label: "보통", value: "soso"},
                                    {label: "불만족", value: "bad"},
                                    {label: "매우불만족", value: "very_bad"},
                                  ].map((item) => (
                                    <label
                                      key={item.value}
                                      className={`${Styles.radioBtn} ${
                                        formData.satisfaction === item.value ? Styles.active : ""
                                      }`}
                                    >
                                        <input
                                            type="radio"
                                            name="satisfaction"
                                            value={item.value}
                                            checked={formData.satisfaction === item.value}
                                            onChange={handleChange}
                                        /> 
                                        {item.label}
                                    </label>
                                  ))}
                                </div>

                                <input
                                    type="text"
                                    name="memo"
                                    value={formData.memo}
                                    onChange={handleChange}
                                    placeholder="의견을 남겨주세요..."
                                    className={Styles.qnaInput}
                                />

                                <button type="submit" className={Styles.qnaSubmit}>
                                    평가하기
                                </button>
                        </form>
                    </div>
                </div>
        </>
    );
};

export default Qna;