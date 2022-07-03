const RecomProd = ({prodData}) => {
    const {
        image,
        name,
        grossPrice,
        salePrice,
        percentDiscount,
        rating,
        reviewNumber
    } = prodData

    return (
        <div className="col recom-prod">
              {percentDiscount && <p className="discount-tag">-{percentDiscount}%</p>}
              <div className="product">
                <div>
                  <img src={require(`../../assets/recom_images/${image}.png`)} alt=""/>
                </div>
                <div className="prod-info">
                  <p className="prod-name">{name}</p>
                  <p className="prod-price">
                    {grossPrice
                     &&<span className="gross-price">${grossPrice}</span>
                    }
                    <strong className="sale-price">${salePrice}</strong>
                  </p>
                  <div className="prod-stat">
                    <img src={require(`../../assets/recom_images/star.png`)} alt="star"/>
                    <strong className="prod-rating">{rating} &nbsp;</strong>
                    <p className="y-line"></p>
                    <span className="prod-review">{reviewNumber} reviews</span>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default RecomProd