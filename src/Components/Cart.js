import React from 'react';

function Cart() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Flip/WRS_Event/ofeerstripes/Apay-stripe.jpg" alt="" />
                <div className="">
                    <h3>Hello Mayur</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    <div className="checkout__product">
                        <img src="https://m.media-amazon.com/images/I/61L0nz+KpvL._AC_UL320_.jpg" alt="" />
                        <div className="checkoutProduct__info">
                            <p className="checkoutProduct__title">Product Name</p>
                            <p className="checkoutProduct__price">
                                <strong>$60 * 1 = $60</strong>
                            </p>
                            <button>Remove from Basket</button>
                                div
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="checkout__right">
                <div className="subtotal">
                    <p>Subtotal (2 items): <strong>$299</strong></p>
                <small className="subtotal___gift">
                    <input type="checkbox">This order containes a gift</input>
                </small>
                </div>
            </div>
        </div>
    )
}

export default Cart;
