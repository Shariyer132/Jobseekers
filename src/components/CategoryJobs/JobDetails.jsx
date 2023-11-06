import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";

const JobDetails = () => {
    const {user} = useAuth();
    const jobs = useLoaderData();
    const { id } = useParams();

    const specificJob = jobs.find(job => job._id === id);
    

    const isOwner = user?.email === specificJob?.email;

    const handleBidJob = event =>{
        event.preventDefault();
        if (isOwner) {
            return(
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "You cannot bid on your own job listing.!"
                  })
            )
        }
    }

    return (
        <div className="m-8">
            <div>
                <h2>{specificJob?.jobTitle}</h2>
            </div>

            <form onSubmit={handleBidJob}>
                <div className="lg:flex gap-6">
                    {/* price */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label>
                            <input type="number" name="price" placeholder="your bidding amount" className="input input-bordered w-full" />
                        </label>
                    </div>

                    {/* deadline */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <label>
                            <input type="date" name="deadline" className="input input-bordered w-full" />
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
                            <input type="email" readOnly value={user.email} name="email" className="input w-full input-bordered" />
                        </label>
                    </div>

                    {/* job owner email */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Owner email</span>
                        </label>
                        <label>
                            <input type="email" readOnly value={specificJob?.email} name="email" className="input input-bordered w-full" />
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