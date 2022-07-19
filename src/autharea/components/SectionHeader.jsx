import { BsArrowRight } from "react-icons/bs";
const SectionHeader = (props) => {
  return (
    <div className="recom-header p-3 mb-0">
      <h4>{props.title}</h4>
      <span className="btn see-all" to="/">
        <span>see all items</span>
        <BsArrowRight />
      </span>
      {props.children}
    </div>
  );
};

export default SectionHeader;
