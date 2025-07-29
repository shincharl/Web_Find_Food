import {useState} from "react";
const Signin = () =>{
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // html 기본 동기 전송 막기
        console.log('제출된 값: ', value);
        
    };

    return(
        <>
        <div>
        <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                    <input type="text" 
                        value={value} 
                        onChange={(e) => setValue(e.target.value)} 
                        placeholder="Email address"
                    />
                    <input type="password"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="password"
                    />
                    <button type="submit">submit</button>
            </form>
        </div>

        </>
    );
}

export default Signin;