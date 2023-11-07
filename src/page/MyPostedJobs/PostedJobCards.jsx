// import { useState } from 'react';

import axios from "axios";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const PostedJobCards = ({ postedJob }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, jobTitle, category, deadline, email, shortDescription } = postedJob;

    //defaultValue={maximumPrice}
    //defaultValue={minimumPrice}


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
                }
            })
    }

    return (
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{jobTitle}</h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end">

                    <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_4').showModal()}>Update</button>
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
                                            <input type="number" name="maximumPrice" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    {/* Minimum price */}
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="lebel-text">Minimum Price</span>
                                        </label>
                                        <label>
                                            <input type="number" name="minimumPrice" className="input input-bordered w-full" />
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
                                    <input type="submit" className="btn btn-block" value="Update" />
                                </div>
                            </form>
                        </div>
                    </dialog>

                    <button className="btn btn-ghost">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default PostedJobCards;