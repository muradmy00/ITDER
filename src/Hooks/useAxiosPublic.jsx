import axios from "axios";


const axiosInstance = axios.create({
  baseURL: 'https://littleaccount.com/api'
})

const useAxiosPublic = () => {
  return axiosInstance;
}

export default useAxiosPublic;