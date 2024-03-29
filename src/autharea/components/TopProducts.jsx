import { useEffect } from "react";
import "../styles/TopProduct.css";
import TopRankedElement from "./TopRankedElement";
import SectionHeader from "./SectionHeader";
import { useDispatch, useSelector } from "react-redux";
import { getTopRanked } from "../../features/products/productActions";

const TopProducts = () => {
  const { topRanked } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRanked());
  }, [dispatch]);


  const topElements = topRanked.topRanks?.slice(0, 10).map((prodData, i) => {
    return <TopRankedElement key={i} prodData={prodData} />;
  });
  return (
    <div className="container products-grp">
      <div className="recom-section">
        <SectionHeader title={"Top Ranked"} />
        <div className="row recom-prods top-prods">{topElements}</div>
      </div>
    </div>
  );
};

export default TopProducts;
