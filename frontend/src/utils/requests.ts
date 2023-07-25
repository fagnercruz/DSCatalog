import axios from "axios";
import QueryString from "qs";

//----------- REACT_APP_BACKEND_URL é uma variável de ambiente já compatível com Netlify
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

//----------- Valor do client_id e client_secret do BACKEND a ser conectado (compatível com netlify)
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'dscatalog';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'dscatalog123';

//----------- Objeto auxiliar com os dados do usuario para efetuar o login
type LoginData = {
    username: string;
    password: string;
}

//----------- função que prepara o header para ser enviado ao backend para autenticação
export const requestBackendLogin = (login : LoginData) => {
    
    const headers = {
        'Content-Type'  : 'application/x-www-form-urlencoded',
        'Authorization' : "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    };
    
    const data = QueryString.stringify({
        //username : login.username,
        //password : login.password,
        ...login,
        'grant_type' : 'password'
    });

    return axios({
        method : 'POST',
        baseURL : BASE_URL,
        url : '/oauth/token',
        data,
        headers
    });
}