
// eslint-disable-next-line react/prop-types
const SingleCategoryCard = ({job}) => {
    // eslint-disable-next-line react/prop-types
    const {jobTitle, _id} = job;

    const handleBidJob = _id =>{
        console.log(_id);
    }

    return (
        <div className="card w-96 bg-slate-300">
            <div className="card-body">
                <h2 className="card-title">{jobTitle}</h2>
                <p>How to park your car at your garage?</p>
                <div onClick={()=>handleBidJob(_id)} className="card-actions justify-end">
                    <button className="btn btn-primary">Bid now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCategoryCard;