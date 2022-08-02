import ProdPrice from "./ProdPrice";
const TopRankedElement = ({ prodData }) => {
  const { images, name, price, discount} =
    prodData;

  const discountPerc = discount * 100;
  const grossPrice = discountPerc / 100;

  return (
    <div className="col recom-prod top-product">
      <p className="discount-tag">-{discountPerc}%</p>
      <img width={200} src={images[0]} alt="" />
      <p className="prod-name">{name}</p>
      <ProdPrice grossPrice={grossPrice} salePrice={price} />
    </div>
  );
};

export default TopRankedElement;
