import ProdPrice from "./ProdPrice"
import ProgressBar from "./ProgressBar"
const FlashSaleElement = ({ prodData }) => {

    const {
        image,
        name,
        grossPrice,
        salePrice,
        percentDiscount,
        rating,
        reviewNumber,
        left,
        total,
    } = prodData

    return (
        <div className="col recom-prod top-product">
            {percentDiscount && <p className="discount-tag">-{percentDiscount}%</p>}
            <img src={require(`../../assets/topRankedImages/${image}.png`)} alt=""/>
            <p className="prod-name">{name}</p>
            <ProdPrice grossPrice={grossPrice} salePrice={salePrice}/>
            <ProgressBar left={left} total={total}/>
        </div>
    )
}

export default FlashSaleElement