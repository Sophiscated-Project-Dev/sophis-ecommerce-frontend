import '../styles/Checkout.css'
import { Link } from "react-router-dom";
import AddressBox from "../components/AddressBox";
import CheckoutHeader from "../components/CheckoutHeader";
import PaymentMethod from '../components/PayMethod';
import {FaApplePay, FaCcVisa, FaCcMastercard, FaDhl} from 'react-icons/fa'

const Checkout = () => {
    return (
        <>
            <div className="container">
                <div className="checkout-nav">
                    <Link to={'/'}>Home</Link>{'/'}
                    <Link to={'/'}>Cart</Link>{'/'}
                    <Link to={'/checkout'}>Checkout</Link>
                </div>
            </div>
            <main className="checkout-main">
                <h2 className="checkout-title">Checkout</h2>
                <div className="checkout-bill">
                    <div className="checkout-price">
                        <span className="checkout-total-tag">Total</span>
                        <span className="checkout-total-price">$3,000</span>
                    </div>

                    <form className="checkout-form">
                        <div className="checkout-section">
                            <CheckoutHeader title={'Billing Address'}/>
                            <AddressBox/>
                        </div>

                        <div className="checkout-section">
                            <CheckoutHeader title={'Shipping Address'}/>
                            <label htmlFor="auto-address" className="same-as">
                                <input id="auto-address" type="checkbox"/>
                                same as billing address
                            </label>
                            <AddressBox/>
                        </div>

                        <div className="checkout-section">
                            <CheckoutHeader title={'Payment Method'}/>
                            <ul className="payment-methods">
                                <PaymentMethod id={'master-card'} Icon={<FaCcMastercard/>}/>
                                <PaymentMethod id={'visa'} Icon={<FaCcVisa/>}/>
                                <PaymentMethod id={'apple-pay'} Icon={<FaApplePay/>}/>
                                <PaymentMethod id={'dhl'} Icon={<FaDhl/>}/>
                            </ul> 
                        </div>
                        <button className="btn confirm-order">Confirm order</button>
                    </form>

                    <Link to={'/'}>continue shopping</Link>
                </div>
            </main>
        </>
    )
}

export default Checkout
