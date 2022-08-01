const ProdPrice = ({ grossPrice, salePrice }) => {
  return (
    <>
      <p className="prod-price">
        <span className="gross-price">
          ${grossPrice * salePrice + salePrice}
        </span>
        <strong className="sale-price">${salePrice}</strong>
      </p>
    </>
  );
};

export default ProdPrice;
