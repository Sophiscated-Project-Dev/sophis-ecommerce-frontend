import { useEffect } from "react";
import data from "./NewArrivalsData";
import SectionHeader from "./SectionHeader";
import RecomProd from "./RecomProd";
import { useDispatch, useSelector } from "react-redux";
import { getNewArrivals } from "../../features/products/productActions";
import { IconBase } from "react-icons";

const NewArrivals = () => {
  const { loading, error, newArrivals } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewArrivals());
  }, []);

  const newElements = newArrivals.newArrival?.slice(0, 6).map((prodData) => {
    return <RecomProd key={prodData.name} prodData={prodData} />;
  });
  return (
    <div className="container products-grp">
      <div className="recom-section">
        <SectionHeader title={"New Arrivals"} />
        <div className="row recom-prods">{newElements}</div>
      </div>
    </div>
  );
};

export default NewArrivals;
