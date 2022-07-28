import ProdPrice from "./ProdPrice";
const RecomProd = ({ prodData }) => {
  const {
    image,
    name,
    grossPrice,
    salePrice,
    percentDiscount,
    rating,
    reviewNumber,
  } = prodData;

  return (
    <div className="col recom-prod recom-prod1">
      {percentDiscount && <p className="discount-tag">-{percentDiscount}%</p>}
      <div className="product">
        <div>
          <img src={require(`../../assets/recom_images/${image}.png`)} alt="" />
        </div>
        <div className="prod-info">
          <p className="prod-name">{name}</p>
          <ProdPrice grossPrice={grossPrice} salePrice={salePrice} />
          <div className="prod-stat">
            <img
              src={require(`../../assets/recom_images/star.png`)}
              alt="star"
            />
            <strong className="prod-rating">{rating} &nbsp;</strong>
            <p className="y-line"></p>
            <span className="prod-review">{reviewNumber} reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecomProd;
