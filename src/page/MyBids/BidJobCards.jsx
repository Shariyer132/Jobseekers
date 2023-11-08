
// eslint-disable-next-line react/prop-types
const BidJobCards = ({ bidJob }) => {
    // eslint-disable-next-line react/prop-types
    const { ownerEmail, jobTitle, deadline, status } = bidJob;
    return (
        <tr>
            <th>{jobTitle}</th>
            <td>{ownerEmail}</td>
            <td>{deadline}</td>
            <td>{status}</td>
            <td>
                <button className="btn btn-sm" disabled={status !== 'in progress'}>Complete</button>
            </td>
        </tr>
    );
};

export default BidJobCards;