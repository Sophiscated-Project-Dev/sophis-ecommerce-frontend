import ProdPrice from "./ProdPrice";
const RecomProd = ({ prodData }) => {
  // const {
  //   image,
  //   name,
  //   grossPrice,
  //   salePrice,
  //   percentDiscount,
  //   rating,
  //   reviewNumber,
  // } = prodData;
  const { images, name, price, discount, averageRating, numberOfReviews } =
    prodData;

  const discountPerc = discount * 100;
  const grossPrice = discountPerc / 100;

  return (
    <div className="col recom-prod recom-prod1">
      <p className="discount-tag">-{discountPerc}%</p>
      <div className="product">
        <div>
          <img width={200} src={images[0]} alt="" />
        </div>
        <div className="prod-info">
          <p className="prod-name">{name}</p>
          <ProdPrice grossPrice={grossPrice} salePrice={price} />
          <div className="prod-stat">
            <img
              src={require(`../../assets/recom_images/star.png`)}
              alt="star"
            />
            <strong className="prod-rating">{averageRating} &nbsp;</strong>
            <p className="y-line"></p>
            <span className="prod-review">{numberOfReviews} reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecomProd;
