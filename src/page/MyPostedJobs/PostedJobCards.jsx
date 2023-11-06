
// eslint-disable-next-line react/prop-types
const PostedJobCards = ({ postedJob }) => {
    // eslint-disable-next-line react/prop-types
    const { jobTitle } = postedJob;
    return (
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{jobTitle}</h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Update</button> */}
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_4').showModal()}>Update</button>
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box text-black w-11/12 max-w-5xl">
                            <h3 className="font-bold text-lg">{jobTitle}</h3>
                            <p className="py-4">Click the button below to close</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    <button className="btn btn-ghost">Delete</button>
                
                </div>
            </div>
        </div>
    );
};

export default PostedJobCards;