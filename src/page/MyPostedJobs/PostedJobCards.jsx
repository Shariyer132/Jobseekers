import PropTypes from 'prop-types';
import axios from "axios";
import Swal from "sweetalert2";

const PostedJobCards = ({ postedJob, setJobs, jobs }) => {

    const { _id, jobTitle, category, deadline, email, shortDescription, minimumPrice, maximumPrice } = postedJob;

    const handleUpdateJob = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const jobTitle = form.jobTitle.value;
        const deadline = form.deadline.value;
        const category = form.category.value;
        const minimumPrice = form.minimumPrice.value;
        const maximumPrice = form.maximumPrice.value;
        const shortDescription = form.shortDescription.value;
        console.log(email, jobTitle, deadline, category, minimumPrice, maximumPrice, shortDescription);
        axios.patch(`http://localhost:5000/jobs/${_id}`, {
            email,
            jobTitle,
            deadline,
            category,
            shortDescription,
            minimumPrice,
            maximumPrice,
        })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    document.getElementById('my_modal_4').close();
                    Swal.fire({
                        title: "Success",
                        text: "Successfully updated your job",
                        icon: "success"
                    });
                    form.reset()
                }
            })
    }

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result);
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/jobs/${_id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data?.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your posted job has been deleted.",
                                icon: "success"
                            });
                            const remaining = jobs.filter(job => job?._id !== _id);
                            setJobs(remaining);
                            console.log(res.data);
                        }
                    })
            }
        });
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="text-3xl font-semibold">{jobTitle}</h2>
                <p className="text-lg font-medium">Deadline: {deadline}</p>
                <p className="text-lg font-medium">Price range: {`$${minimumPrice}-${maximumPrice}`}</p>
                <p>{shortDescription}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-info text-white" onClick={() => document.getElementById('my_modal_4').showModal()}>Update</button>
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box text-black w-11/12 max-w-5xl">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <form onSubmit={handleUpdateJob}>

                                <div className="lg:flex gap-5">
                                    {/* email */}
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Your Email</span>
                                        </label>
                                        <label>
                                            <input type="email" name="email" required defaultValue={email} readOnly className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    {/* Job title */}
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Job title</span>
                                        </label>
                                        <label>
                                            <input type="text" name="jobTitle" required defaultValue={jobTitle} className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                </div>
                                <div className="lg:flex gap-5">
                                    {/* Deadline */}
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Deadline</span>
                                        </label>
                                        <label>
                                            <input type="date" required name="deadline" defaultValue={deadline} className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    {/* Category */}
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <select name="category" defaultValue={category} className="input input-bordered w-full">
                                            <option value={category}>you selected {category}</option>
                                            <option value="web development">web development</option>
                                            <option value="digital marketing">digital marketing</option>
                                            <option value="graphics design">graphics design</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="lg:flex gap-5">
                                    {/* Maximum Price */}
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Maximum Price</span>
                                        </label>
                                        <label>
                                            <input type="number" name="maximumPrice" defaultValue={maximumPrice} className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    {/* Minimum price */}
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="lebel-text">Minimum Price</span>
                                        </label>
                                        <label>
                                            <input type="number" defaultValue={minimumPrice} name="minimumPrice" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                </div>

                                {/* description */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <label>
                                        <input type="text" name="shortDescription" defaultValue={shortDescription} className="input input-bordered w-full" />
                                    </label>
                                </div>

                                <div className="modal-action">
                                    {/* if there is a button, it will close the modal */}
                                    <input type="submit" className="btn btn-block btn-success" value="Update" />
                                </div>
                            </form>
                        </div>
                    </dialog>

                    <button onClick={() => handleDelete(_id)} className="btn btn-error">Delete</button>
                </div>
            </div>
        </div>
    );
};

PostedJobCards.propTypes = {
    postedJob: PropTypes.object.isRequired,
    setJobs: PropTypes.func.isRequired,
    jobs: PropTypes.array.isRequired

}

export default PostedJobCards;