import axios from 'axios';

const apiClient = axios.create({
    baseURL : 'http://localhost:8080/api',
    headers : {'Content-Type' : 'application/json'},
});

/* 로그인 시도 axios */

export const login = (email, password) => {
    return apiClient.post('/login', {email, password});
};

/* 회원가입 시도 axios */

export const signup = (name, email, password) => {
    return apiClient.post('/signup', {name, email, password});  
};