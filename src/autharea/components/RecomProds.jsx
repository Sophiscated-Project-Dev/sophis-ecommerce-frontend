import '../styles/Recom.css'
import Link from "react-bootstrap/esm/NavLink";
import RecomProd from "./RecomProd";
import data from "./RecomProdsData";

const RecomProds = () => {
    const recomProdsElements = data.map(
        prodData => <RecomProd prodData={prodData} key={prodData.name}/>
    )
    return (
        <div className="container">
            <div className="recom-section">
                <div className="recom-header p-3 mb-0">
                    <h4>Recommended</h4>
                    <Link className='see-all' to="/">
                        see all items &nbsp; &nbsp;
                        <img src={require(`../../assets/recom_images/arrow-right.png`)} alt=""/>
                    </Link>
                </div>
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