import axios from "axios";
import useAuthStore from "../store/useAuthStore";


const authAxiosInstance = axios.create({
    baseURL: 'https://knowledgeshop.runasp.net/api',
    headers: {
        'Accept-Language': 'en',
    },
    withCredentials: true
});
const {token} = useAuthStore.getState();

authAxiosInstance.interceptors.request.use( (config)=>{
    config.headers['Authorization'] =  `Bearer ${token}`;
    return config;
} )

authAxiosInstance.interceptors.response.use((response)=>response,async (error)=>{
    const originalRequest = error.config;
    console.log(originalRequest);

    if(error.response?.status === 401 &&!originalRequest._retry){
        originalRequest._retry = true ;

    try{
        const refreshResponse = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/RefreshToken',{},{
            withCredentials:true,
        });
            console.log("Refresh Token");

        const newAccessToken = refreshResponse.data.accessToken;
        useAuthStore.getState().setToken(newAccessToken);
        
        originalRequest.headres.Authorization = `Bearer ${newAccessToken}`
        return authAxiosInstance ( originalRequest);
        }catch(error){
            console.log("error");
            return Promise.reject(error);
        }
    }
    return Promise.reject(error);
})

export default authAxiosInstance;