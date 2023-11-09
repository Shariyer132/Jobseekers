import axios from "axios";




// eslint-disable-next-line react/prop-types
const BidReqJobs = ({ jobReq }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, jobTitle, deadline, status, email } = jobReq;

    // Function to handle accepting the bid request
    const handleAccept = (_id) => {
        console.log(`Accepted request with ID ${_id}`);
        axios.patch(`http://localhost:5000/bidJobs/${_id}`, { status: 'in progress' })
        .then(res=>{
            console.log(res.data);
        })
    }

    // Function to handle rejecting the bid request
    const handleReject = (_id) => {
        console.log(`Rejected request with ID ${_id}`);
        axios.patch(`http://localhost:5000/bidJobs/${_id}`, { status: 'rejected' })
        .then(res=>{
            console.log(res.data);
        })
    }

    return (
        <tr>
            <th>{jobTitle}</th>
            <td>{email}</td>
            <td>{deadline}</td>
            <td>{status}</td>
            {status === 'in progress' ? (
                <td>
                    {/* Display a progress bar */}
                    <div className="progress-bar">
                        In Progress
                    </div>
                </td>
            ) : status === 'rejected' ? (
                <td>
                    Rejected
                </td>
            ) : (
                <td className="flex flex-col gap-2">
                    <button
                        onClick={()=>handleAccept(_id)} className="btn btn-primary btn-sm">Accept</button>
                    <button onClick={()=>handleReject(_id)} className="btn btn-sm btn-error">Reject</button>
                </td>
            )}
        </tr>
    );

};

export default BidReqJobs;
