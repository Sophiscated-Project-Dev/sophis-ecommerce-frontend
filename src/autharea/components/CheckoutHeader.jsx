const CheckoutHeader = ({ title }) => {
    return (
        <div className="checkout-header">
            <div className="round-box">
                <div className="inner-box"></div>
            </div>
            <h3>{title}</h3>
        </div>
    )
}

export default CheckoutHeader