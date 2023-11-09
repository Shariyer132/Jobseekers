import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth";
import PostedJobCards from "./PostedJobCards";
import { Helmet } from "react-helmet-async";

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        axios('http://localhost:5000/jobs')
            .then(res => {
                setJobs(res.data);
            })
    }, []);

    const myPostedJobs = jobs.filter(job => job?.ownerEmail === user?.email)
    // console.log(myPostedJobs);

    return (
        <div>
            <Helmet><title>Digilab my posted jobs</title></Helmet>
            {
                user ?
                    <div className="flex flex-col md:flex-row gap-5 justify-around flex-wrap items-center mt-10">
                        {
                            myPostedJobs.map(postedJob => <PostedJobCards
                                key={postedJob._id}
                                postedJob={postedJob}
                                jobs={jobs}
                                setJobs={setJobs}
                            ></PostedJobCards>)
                        }
                    </div>
                    :
                    <h2 className="text-center mt-56 text-5xl font-bold">You have not posted any job yet.</h2>

            }
        </div>
    );
};

export default MyPostedJobs;