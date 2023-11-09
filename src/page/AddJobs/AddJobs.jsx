import axios from "axios";
import useAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';



const AddJobs = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleAddJob = event => {
    event.preventDefault();
    const form = event.target;
    // console.log(form);
    const email = form.email.value;
    const jobTitle = form.title.value;
    const deadline = form.deadline.value;
    const category = form.category.value;
    const minPrice = form.minPrice.value;
    const maxPrice = form.maxPrice.value;
    const shortDescription = form.shortDescription.value;
    console.log(email, jobTitle, minPrice, maxPrice, deadline, category, shortDescription);

    axios.post('http://localhost:5000/jobs', {
      email,
      jobTitle,
      deadline,
      category,
      shortDescription,
      priceRange: `${minPrice}-${maxPrice}`,
    })
      .then(res => {
        console.log(res.data.acknowledged, res.data);
        if (res.data.acknowledged) {
          Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question"
          });
          form.reset()
          navigate('/myPostedJobs')
          // console.log(res.data.acknowledged);
        }

      })
  }
  return (
    <>
      <Helmet>
        <title>Digilab add job page</title>
      </Helmet>
      <div className="bg-[#c6ddd7] p-24">
        <h3 className="text-center text-5xl font-semibold pb-7">Add New Job</h3>
        <form onSubmit={handleAddJob}>
          <div className="md:flex gap-5">
            {/* Email of the employer (read-only) */}
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Employer Email</span>
              </label>
              <input
                type="email"
                readOnly
                name="email"
                defaultValue={user?.email}
                className="input input-bordered w-full"
              />
            </div>

            {/* Job title */}
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Job Title</span>
              </label>
              <input
                type="text"
                required
                placeholder="Job Title"
                name="title"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="md:flex gap-5">
            {/* Deadline */}
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                type="date"
                required
                name="deadline"
                className="input input-bordered w-full"
              />
            </div>

            {/* Category dropdown */}
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select required name="category" className="input input-bordered w-full">
                <option value="web development">web development</option>
                <option value="digital marketing">digital marketing</option>
                <option value="graphics design">graphics design</option>
                {/* ... other categories */}
              </select>
            </div>
          </div>

          <div className="md:flex gap-5">
            {/* Minimum price */}
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Minimum Price</span>
              </label>
              <input
                type="number"
                name="minPrice"
                required
                placeholder="Minimum Price"
                className="input input-bordered w-full"
              />
            </div>

            {/* Maximum price */}
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Maximum Price</span>
              </label>
              <input
                type="number"
                name="maxPrice"
                required
                placeholder="Maximum Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="shortDescription"
              required
              placeholder="Job Description"
              className="input input-bordered w-full"
              rows="4"
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="flex items-center justify-center mt-4">
            <input type="submit" value="Add Job" className="btn btn-block btn-primary" />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddJobs;
