import "../styles/ProductDetail.css";

const ProductDetail = ({ product }) => {
   const {
     numberOfReviews,
     description,
     specification,
  } = product;
  

  return (
    <div className="pDetail bg-white mt-5">
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-details-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-details"
            type="button"
            role="tab"
            aria-controls="pills-details"
            aria-selected="true"
          >
            Product details
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-specifications-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-specifications"
            type="button"
            role="tab"
            aria-controls="pills-specifications"
            aria-selected="false"
          >
            Specifications
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-reviews-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-reviews"
            type="button"
            role="tab"
            aria-controls="pills-reviews"
            aria-selected="false"
          >
            Reviews
          </button>
        </li>

        <li className="nav-item " role="presentation">
          <button
            className="nav-link w-75"
            id="pills-report-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-report"
            type="button"
            role="tab"
            aria-controls="pills-report"
            aria-selected="false"
          >
            Report incorrect Product Information
          </button>
        </li>
      </ul>
      <div className="tab-content p-4" id="pills-tabContent">
        <div
          className="tab-pane fade show active text-justify"
          id="pills-details"
          role="tabpanel"
          aria-labelledby="pills-details-tab"
        >{description}</div>

        <div
          className="tab-pane fade"
          id="pills-specifications"
          role="tabpanel"
          aria-labelledby="pills-specifications-tab"
        >{specification}</div>

        <div
          className="tab-pane fade"
          id="pills-reviews"
          role="tabpanel"
          aria-labelledby="pills-reviews-tab"
        >{numberOfReviews}</div>

        <div
          className="tab-pane fade"
          id="pills-report"
          role="tabpanel"
          aria-labelledby="pills-report-tab"
        >
          A form or something should be here</div>
      </div>
    </div>
  );
};

export default ProductDetail;
