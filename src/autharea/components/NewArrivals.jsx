import data from "./NewArrivalsData";
import SectionHeader from "./SectionHeader";
import RecomProd from "./RecomProd";

const NewArrivals = () => {
    const newElements = data.map(
        prodData => <RecomProd key={ prodData.name } prodData={ prodData }/>
    )
    return (
        <div className="container products-grp">
            <div className="recom-section">
                <SectionHeader title={'New Arrivals'}/>
                <div className="row recom-prods">
                    { newElements }
                </div>
            </div>
        </div>

    )
}

export default NewArrivals