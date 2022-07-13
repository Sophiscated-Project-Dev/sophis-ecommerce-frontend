const PaymentMethod = ({ Icon, id}) => {
    return (
        <li className={`payment-method ${id}`}>
            <input name="payment-method" id={id} type="radio"/>
            <label htmlFor={id}>{Icon}</label>
        </li>
    )
}

export default PaymentMethod
