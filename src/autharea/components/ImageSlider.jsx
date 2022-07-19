import "../styles/ImageSlider.css";

const ImageSlider = ({ data }) => {
  return (
    <div id="slider" className="bg-white py-4">
      <div className=" d-flex w-75" style={{ overflowX: "scroll" }}>
        {data.map((product) => (
          <div key={product.name} className="imageBox position-relative">
            <img
              className="img-fluid mx-auto d-block"
              src={require(`../../assets/recom_images/${product.image}.png`)}
              alt={product.name}
            />
            <div className="imageTag position-absolute top-0 justify-content-center d-flex align-items-center text-white">
              {product.percentDiscount}%
            </div>
            <p>{product.name}</p>
            <p className="d-inline-block">
              <del>${product.salePrice}</del>
            </p>
            <p className="d-inline-block ms-3">${product.grossPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
