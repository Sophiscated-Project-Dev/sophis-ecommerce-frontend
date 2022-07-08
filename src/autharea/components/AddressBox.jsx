import {BsPencil} from "react-icons/bs"

const AddressBox = ({data, setData}) => {

    function handleChange(event, which) {
        setData(prev => {
            return {
                ...prev,
                [which]: event.target.value
            }
        })
    }
    
    return (
        <div className="address-box">
            <div className="address-container">
                <input className="address-input" type="text" placeholder="Firstname" value={data.name} onChange={(event) => handleChange(event, 'name')} />
                <input className="address-input" type="email" placeholder="Email address" value={data.email} onChange={(event) => handleChange(event, 'email')}/>
                <input className="address-input" type="text" placeholder="Street" value={data.street} onChange={(event) => handleChange(event, 'street')}/>
                <div className="location">
                    <input className="address-input" type="text" placeholder="State" value={data.state} onChange={(event) => handleChange(event, 'state')}/>
                    <input className="address-input" type="text" placeholder="Country" value={data.country} onChange={(event) => handleChange(event, 'country')}/>
                </div>
            </div>
            <button className="btn address-edit" type="button">
                <span>Edit</span>
                <BsPencil/>
            </button>
        </div>
    )
    
}

export default AddressBox