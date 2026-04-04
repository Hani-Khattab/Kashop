import axios from "axios";
import useAuthStore from "../store/useAuthStore";


const authAxiosInstance = axios.create({
    baseURL: 'https://knowledgeshop.runasp.net/api',
    headers: {
        'Accept-Language': 'i18next.language',
    },
    withCredentials: true
});

//  request interceptor
authAxiosInstance.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;

    if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

//  response interceptor
authAxiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshResponse = await axios.post(
                    'https://knowledgeshop.runasp.net/api/auth/Account/RefreshToken',
                    {},
                    { withCredentials: true }
                );

                console.log("Refresh Token");

                const newAccessToken = refreshResponse.data.accessToken;

                // خزّن التوكن
                useAuthStore.getState().setToken(newAccessToken);
                localStorage.setItem("accessToken", newAccessToken);

                 
                originalRequest.headers = originalRequest.headers || {};
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                return authAxiosInstance(originalRequest);

            } catch (err) {
                console.log("Refresh failed");
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }
);

export default authAxiosInstance;