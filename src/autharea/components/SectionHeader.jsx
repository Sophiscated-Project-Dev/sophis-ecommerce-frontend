import { BsArrowRight } from "react-icons/bs"
const SectionHeader = ({ title }) => {
    return (
        <div className="recom-header p-3 mb-0">
            <h4>{title}</h4>
            <span className='btn see-all' to="/">
                <span>see all items</span>
                <BsArrowRight/>
            </span>
        </div>
    )
}

export default SectionHeader