import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth";
import BidReqJobs from "./BidReqJobs";
import { Helmet } from "react-helmet-async";

const BidReguest = () => {
    const [reqJobs, setReqJobs] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        axios(`https://assignment-eleventh-server-wheat.vercel.app/bidJobs?ownerEmail=${user?.email}`, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setReqJobs(res.data)
            })
    }, []);

    const jobsReq = reqJobs.filter(job => job?.ownerEmail === user?.email)
    console.log(jobsReq);


    return (
        <>
        <Helmet><title>Digilab Bid Requests</title></Helmet>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Job title</th>
                        <th>Email</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {
                    jobsReq.map(jobReq=><BidReqJobs key={jobReq._id} jobReq={jobReq}></BidReqJobs>)
                   }
                </tbody>
            </table>
        </div>  
        </>
    );
};

export default BidReguest;