import axios from "axios";
import { useEffect, useState } from "react";
import BidJobCards from "./BidJobCards";

const MyBids = () => {
    const [bidJobs, setBidJobs] = useState([]);


    useEffect(() => {
        axios('http://localhost:5000/bidJobs',{withCredentials:true})
            .then(res => {
                console.log(res.data);
                setBidJobs(res.data);
            })
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Job title</th>
                        <th>Email</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th>Complete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        bidJobs.map((bidJob, idx) => <BidJobCards key={idx} bidJob={bidJob}></BidJobCards>)
                    }
                </tbody>
            </table>
        </div>        
    );
};

export default MyBids;