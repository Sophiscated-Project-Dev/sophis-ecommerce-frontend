import star from "../../../assets/top_vendors/star.png";

const Structure = ({ vendor }) => {
  const { rank, firstName, numOfProd, rating, reviewNumber } = vendor;
  /* "topVendors": [
    {
      "vendor": {
        "_id": "62d6dc5ee1e089eb4f5d8ab8",
        "firstName": "Ebune",
        "lastName": "Daniel",
        "email": "example1@gmail.com",
        "businessName": "soph-dev",
        "phoneNumber": "08120776546",
        "__v": 0
      }
    }, */
  return (
    <div className="col vendor-tiletag"> 
      <div>
        <div className="vendor-card">
          <div className="rank">{rank}</div>
          <div>
            <img src={star} alt="" className="vendor-img" />
          </div>
          <div className="vendor-info">
            <strong>
              <p className="vendor-name">{firstName} </p>
            </strong>
            <p className="vendor-NOP"> {numOfProd} products</p>
            <div className="vendor-stats">
              <img src={star} alt="star" />
              <strong>{rating} </strong> <span className="ssp">|</span>
              <span> {reviewNumber} Reviews </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;
