const API_URL = "http://localhost:8000/api/";

class AuthService {
    login(data) {
        console.log(data);
        const headersJson = {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        };
        return axios
            .post(API_URL + "login", data, {
                headers: headersJson
            })
            .then(response => {
                if (response.data.access_token) {
                    localStorage.setItem("access_token", JSON.stringify(response.data.access_token));
                }

                return response.data.access_token;
            });
    }

    logout() {
        localStorage.removeItem("access_token");
    }

    getToken() {
        return localStorage.getItem('access_token');
    }
}

export default new AuthService();
