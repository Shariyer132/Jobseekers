import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth";
import PostedJobCards from "./PostedJobCards";

const MyPostedJobs = () => {
    // const [loadedJobs, setLoadedJobs] = useState([]);
    // const [jobs, setJobs] = useState(loadedJobs);
    const [jobs, setJobs] = useState([]);
    // const [jobs, setJobs] = useState([]);
    const {user} = useAuth();

    useEffect(()=>{
        axios('http://localhost:5000/jobs')
        .then(res=>{
            // setLoadedJobs(res.data);
            setJobs(res.data);
        })
    },[]);

    // const myPostedJobs = loadedjobs.filter(job=> job?.email === user?.email)
    const myPostedJobs = jobs.filter(job=> job?.email === user?.email)
    // console.log(myPostedJobs);

    return (
        <div>
            <h2>my posted jobs: {myPostedJobs.length}</h2>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 md:">  */}
            <div className="flex flex-col md:flex-row gap-5 justify-around flex-wrap items-center"> 
                {
                    myPostedJobs.map(postedJob=><PostedJobCards 
                        key={postedJob._id}
                        postedJob={postedJob}
                        jobs={jobs}
                        setJobs={setJobs}
                        ></PostedJobCards>)
                }
            </div>
        </div>
    );
};

export default MyPostedJobs;