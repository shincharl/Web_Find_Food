import axios from 'axios';

const apiClient = axios.create({
    baseURL : 'http://localhost:8080/api',
    headers : {'Content-Type' : 'application/json'},
});

/* 로그인 시도 axios */

export const login = async (email, password) => {

    try {
        const res = await apiClient.post('/login', {email, password});
        return res;   
    } catch (error) {
        throw error;
    }

};

/* 회원가입 시도 axios */

export const signup = (name, email, password) => {

    if(!name || !email || !password ){
        throw new Error("잘못된 입력입니다. 확인해 주세요.")
    }

    return apiClient.post('/signup', {name, email, password});  
};