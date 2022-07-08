import {BsPencil} from "react-icons/bs"
const AddressBox = () => {
    return (
        <div className="address-box">
            <div className="address-container">
                <input className="address-input" type="text" placeholder="Firstname"/>
                <input className="address-input" type="email" placeholder="Email address"/>
                <input className="address-input" type="text" placeholder="Street"/>
                <div className="location">
                    <input className="address-input" type="text" placeholder="State"/>
                    <input className="address-input" type="text" placeholder="Country"/>
                </div>
            </div>
            <button className="btn address-edit" type="button">
                <span>Edit</span>
                <BsPencil/>
                {/* <img src="./bxs_edit.png" alt=""/> */}
            </button>
        </div>
    )
    
}

export default AddressBox