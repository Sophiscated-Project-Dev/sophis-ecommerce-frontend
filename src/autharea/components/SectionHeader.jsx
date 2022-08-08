import { BsArrowRight } from "react-icons/bs";

import { Link } from "react-router-dom";

const SectionHeader = (props) => {
  return (
    <div className="recom-header p-3 mb-0">
      <div className="section-title">
        <h4>{props.title}</h4>
        <span className="btn see-all">
          <Link to="/allProducts">
            <span>see all items</span>
            <BsArrowRight />
          </Link>
        </span>
      </div>
      {props.children}
    </div>
  );
};

export default SectionHeader;
