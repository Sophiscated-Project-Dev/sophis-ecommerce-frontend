import "../styles/ImageSlider.css";

const ImageSlider = ({ data }) => {
  // console.log(data);

  return (
    <div id="slider" className="bg-white py-4">
      <div className=" d-flex w-75" style={{ overflowX: "scroll" }}>
        {data?.newArrival?.map((product) => {
          // const discountPerc = product?.discount * 100;
          // const grossPrice = discountPerc / 100;
          return (
            <div key={product?.name} className="imageBox position-relative">
              <img
                className="img-fluid mx-auto d-block"
                src={product?.images[0]}
                // src={require(`../../assets/recom_images/${product.image}.png`)}
                alt={product?.name}
              />
              <div className="imageTag position-absolute top-0 justify-content-center d-flex align-items-center text-white">
                {product?.discount}%
              </div>
              <p>{product?.name}</p>
              <p className="d-inline-block">
                {/* <del> ${grossPrice * product?.price + product?.price}</del> */}
              </p>
              {<p className="d-inline-block ms-3">${product?.price}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
