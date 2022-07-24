import "../styles/TopProduct.css";
import FlashSaleElement from "./FlashSaleElement";
import SectionHeader from "./SectionHeader";
import { flashSale } from "./TopRankData";
import Countdown from "./Countdown";

const FlashProducts = () => {
  const endDate = new Date(2022, 11, 19, 0, 0, 0);
  const topElements = flashSale.map((prodData, i) => {
    return <FlashSaleElement key={i} prodData={prodData} />;
  });
  return (
    <div className="container products-grp">
      <div className="recom-section">
        <SectionHeader title={"Flash Sale"}>
          <Countdown endDate={endDate} />
        </SectionHeader>
        <div className="row recom-prods top-prods">{topElements}</div>
      </div>
    </div>
  );
};

export default FlashProducts;
