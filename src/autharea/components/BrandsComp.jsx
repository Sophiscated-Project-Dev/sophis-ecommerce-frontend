import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands } from "../../features/brand/brandActions";
import "../styles/BrandsComp.css";
import { BsArrowRight } from "react-icons/bs";
import FIRMAN from "../../assets/brand-img/firman.png";

const BrandsComp = () => {
  const { brands, loading, error } = useSelector((state) => state.brands);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="brand_section">
        <div className="brand-sec_head">
          <h3>Brands</h3>

          <div className="next-pointer">
            <span style={{ paddingRight: "1rem" }}>see all items</span>
            <BsArrowRight className="" />
          </div>
        </div>
        {loading ? (
          <h5>loading...</h5>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <div className="row brand-sec_body">
            {brands?.map((item, index) => {
              const { brandName } = item;
              return (
                <div className="col brand-sec_item" key={index}>
                  <div
                    style={{
                      background: `url(${FIRMAN})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="brand-sec_background"
                  >
                    <h3 className='text-center '>{brandName}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandsComp;
