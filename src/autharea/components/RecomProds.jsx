import { useEffect } from "react";
import "../styles/Recom.css";

import { useDispatch, useSelector } from "react-redux";
import { getRecommendedProd } from "../../features/products/productActions";
import RecomProd from "./RecomProd";
import SectionHeader from "./SectionHeader";

const RecomProds = () => {
  const { recommendedProd } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecommendedProd());
  }, [dispatch]);

  // console.log(recommendedProd);

  const recomProdsElements = recommendedProd.recommended
    ?.slice(0, 6)
    .map((prodData) => <RecomProd prodData={prodData} key={prodData.name} />);
  return (
    <div className="container products-grp">
      <div className="recom-section">
        <SectionHeader title={"Recommended"} />
        <div className="row recom-prods">{recomProdsElements}</div>
      </div>
    </div>
  );
};

export default RecomProds;
