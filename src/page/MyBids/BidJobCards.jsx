import PropTypes from 'prop-types';

const BidJobCards = ({ bidJob }) => {
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

BidJobCards.propTypes={
    bidJob: PropTypes.object.isRequired
}

export default BidJobCards;