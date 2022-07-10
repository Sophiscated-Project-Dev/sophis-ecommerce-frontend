const PaymentMethod = ({ Icon, id, setPaymentMethod}) => {

    function setPayMethod(event) {
        setPaymentMethod(event.target.value)
    }
    
    return (
        <li className={`payment-method ${id}`}>
            <input name="payment-method" id={id} value={id} onChange={setPayMethod} type="radio"/>
            <label htmlFor={id}>{Icon}</label>
        </li>
    )
}

export default PaymentMethod
