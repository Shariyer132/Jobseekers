import axios from "axios";
import { useEffect, useState } from "react";
import BidJobCards from "./BidJobCards";
import useAuth from "../../hooks/UseAuth";
import { Helmet } from "react-helmet-async";

const MyBids = () => {
    const { user } = useAuth();
    const [bidJobs, setBidJobs] = useState([]);
console.log(user.email);

    const url = `https://assignment-eleventh-server-wheat.vercel.app/bidJobs?email=${user?.email}`;
    useEffect(() => {
        axios(url, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setBidJobs(res?.data);
            })
    }, [url])
    return (
        <>
        <Helmet><title>Digilab My bids</title></Helmet>
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
                    {/* row 1 */}
                    {
                        bidJobs.map((bidJob, idx) => <BidJobCards key={idx} bidJob={bidJob}></BidJobCards>)
                    }
                </tbody>
            </table>
        </div>
        </>
    );
};

export default MyBids;