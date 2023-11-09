import axios from "axios";
import { useEffect, useState } from "react";

const useServices = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        axios('')
        .then(res=>{
            setJobs(res.data)
        })
    },[])
    return jobs 
};

export default useServices;