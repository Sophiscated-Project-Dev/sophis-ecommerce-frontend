import ProdPrice from "./ProdPrice"
const TopRankedElement = ({ prodData }) => {

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
        <div className="col recom-prod top-product">
            {percentDiscount && <p className="discount-tag">-{percentDiscount}%</p>}
            <img src={require(`../../assets/topRankedImages/${image}.png`)} alt=""/>
            <p className="prod-name">{name}</p>
            <ProdPrice grossPrice={grossPrice} salePrice={salePrice}/>
        </div>
    )
}

export default TopRankedElement