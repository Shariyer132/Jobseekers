import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const SingleCategoryCard = ({job}) => {
    const {jobTitle, _id, deadline, minimumPrice, maximumPrice, shortDescription } = job;

    const navigate = useNavigate()

    const handleViewDetails = _id =>{
        navigate(`/jobs/${_id}`)
    }
    return (
        <div className="card w-96 bg-slate-300">
            <div className="card-body">
                <h2 className="text-3xl font-semibold">{jobTitle}</h2>
                <p className="text-lg font-medium">Deadline: {deadline}</p>
                <p className="text-lg font-medium">Price range: {`$${minimumPrice}-${maximumPrice}`}</p>
                <p>{shortDescription}</p>
                <div onClick={()=>handleViewDetails(_id)} className="card-actions justify-end">
                    <button className="btn btn-primary text-white">Bid now</button>
                </div>
            </div>
        </div>
    );
};

SingleCategoryCard.propTypes={
    job: PropTypes.object.isRequired
}

export default SingleCategoryCard;