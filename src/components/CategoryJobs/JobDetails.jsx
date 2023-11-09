import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
    const { user } = useAuth();
    const jobs = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate();

    const specificJob = jobs.find(job => job._id === id);
    const { jobTitle, category, deadline, maximumPrice, minimumPrice, shortDescription } = specificJob;
    console.log(specificJob);

    const isOwner = user?.email === specificJob?.email;

    const handleBidJob = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.userEmail.value;
        const ownerEmail = form.email.value;
        const bidPrice = form.bidPrice.value;
        const deadline = form.deadline.value;
        console.log(email, ownerEmail, bidPrice, deadline);
        if (isOwner) {
            return (
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "You cannot bid on your own job listing.!"
                })
            )
        }
        axios.post('https://assignment-eleventh-server-wheat.vercel.app/bidJobs', {
            email,
            ownerEmail,
            bidPrice,
            deadline,
            jobTitle,
            status: 'pending'
        })
            .then(res => {
                console.log(res.data);
                if (res.data.acknowledged) {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "You have successfully bid on this job"
                    })
                    navigate('/myBids')
                }
            })
    }

    return (
        <div className="m-8">
            <Helmet>
                <title>Digilab Job Details</title>
            </Helmet>
            <div className="card card-side bg-base-100 shadow-xl mb-10">
                <div className="card-body">
                    <h2 className="text-5xl font-bold">{jobTitle}</h2>
                    <p className="text-lg font-semibold">Type: {category}</p>
                    <p className="text-base font-semibold">Price: {`${minimumPrice}-${maximumPrice}`}</p>
                    <p className="text-lg font-semibold">Deadline: {deadline}</p>
                    <p>{shortDescription}</p>
                </div>
            </div>
            <form onSubmit={handleBidJob}>
                <div className="lg:flex gap-6">
                    {/* price */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label>
                            <input type="number" required name="bidPrice" placeholder="your bidding amount" className="input input-bordered w-full" />
                        </label>
                    </div>

                    {/* deadline */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <label>
                            <input type="date" required name="deadline" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="lg:flex gap-6 pb-5">
                    {/* user email */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">User email</span>
                        </label>
                        <label>
                            <input type="email" readOnly defaultValue={user?.email} name="userEmail" className="input w-full input-bordered" />
                        </label>
                    </div>

                    {/* job owner email */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Owner email</span>
                        </label>
                        <label>
                            <input type="email" readOnly defaultValue={specificJob?.email} name="email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* disable button */}
                <div className="form-control">
                    <input type="submit" disabled={isOwner} className="btn btn-block btn-primary" value="Bid on the project" />
                </div>
            </form>
        </div>
    );
};

export default JobDetails;