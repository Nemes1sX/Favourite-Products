import axios from "axios";
import AuthHeader from "./auth-header";

const API_URL =  window.location.href + "api/";
const headersJson = {
    'Accept': 'application/json, text/plain',
    'Content-Type': 'application/json;charset=UTF-8'
};

class AuthService {

    logout() {
        axios
            .post(API_URL + "logout", '',{
                headers:  [headersJson, AuthHeader()]
            })
            .then(response => response.data.message)
            .catch(error => {
                if (error.status === 401) {
                    alert(error.message);
                }
            })
        localStorage.removeItem("access_token");
    }

    getToken() {
        return localStorage.getItem('access_token');
    }
}

export default new AuthService();
