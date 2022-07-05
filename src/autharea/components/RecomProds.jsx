import '../styles/Recom.css'
import RecomProd from "./RecomProd";
import data from "./RecomProdsData";
import SectionHeader from './SectionHeader';

const RecomProds = () => {
    const recomProdsElements = data.map(
        prodData => <RecomProd prodData={prodData} key={prodData.name}/>
    )
    return (
        <div className="container">
            <div className="recom-section">
                <SectionHeader/>
                <div className="row recom-prods">
                    {
                        recomProdsElements
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default RecomProds