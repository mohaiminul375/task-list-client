import axios from "axios";

const axiosSecure= axios.create({
    baseURL:'https://task-list-server-jade.vercel.app'
})

const useAxiosSecure=()=>{
    return axiosSecure;
}
export default useAxiosSecure;