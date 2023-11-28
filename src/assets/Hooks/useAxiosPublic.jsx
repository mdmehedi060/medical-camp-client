import  axios  from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://asaigntment-twelve-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;