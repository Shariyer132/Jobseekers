import axios from "axios";
import { useEffect } from "react";
// import { useEffect, useState } from "react";

const MyBids = () => {
    // const [bidJobs, setBidJobs] = useState([]);

    useEffect(()=>{
        axios('http://localhost:5000/bidJobs')
        .then(res=>{
            console.log(res.data);
        })
    },[])
    return (
        <div>
            <h2>my bids</h2>
        </div>
    );
};

export default MyBids;