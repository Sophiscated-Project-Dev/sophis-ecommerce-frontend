import '../styles/TopProduct.css'
import TopRankedElement from "./TopRankedElement";
import SectionHeader from "./SectionHeader";
import data from "./TopRankData";

const TopProducts = () => {
    const topElements = data.map((prodData, i) => {
        return <TopRankedElement key={i} prodData={prodData}/>
    })
    return (
        <div className="container products-grp">
            <div className="recom-section">
                <SectionHeader title={'Top Ranked'}/>
                <div className="row recom-prods top-prods">
                    {topElements}
                </div>
            </div>
        </div>
    )
}

export default TopProducts