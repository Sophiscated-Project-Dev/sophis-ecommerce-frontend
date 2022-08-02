import star from "../../../assets/top_vendors/star.png";

const Structure = ({ vendor, rank, numOfProd }) => {
  const { firstName, averageRating, numberOfReviews } = vendor;

  //check the number of an item to pluralise/not pluralise
  const quantityCheck = (field, plural) =>
    field === 1 ? `${field} ${plural}` : `${field} ${plural}s`;

  return (
    <div className="col vendor-tiletag">
      <div>
        <div className="vendor-card">
          <div className="rank">{rank + 1}</div>
          <div>
            <img
              src="https://i.ibb.co/bWTbJ3w/pfp-2.png"
              alt=""
              className="vendor-img"
            />
          </div>
          <div className="vendor-info">
            <strong>
              <p className="vendor-name">{firstName} </p>
            </strong>
            <p className="vendor-NOP"> {quantityCheck(numOfProd, "product")}</p>
            <div className="vendor-stats">
              <img src={star} alt="star" />
              <strong>{averageRating} </strong> <span className="ssp">|</span>
              <span> {quantityCheck(numberOfReviews, "Review")} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;
