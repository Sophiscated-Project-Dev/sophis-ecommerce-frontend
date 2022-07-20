const ProdPrice = ({ grossPrice, salePrice }) => {
    return (
        <>
            <p className="prod-price">
              {grossPrice
                &&<span className="gross-price">${grossPrice}</span>
              }
              <strong className="sale-price">${salePrice}</strong>
            </p>
        </>
    )
}

export default ProdPrice