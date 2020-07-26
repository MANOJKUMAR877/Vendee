import React, { useEffect } from 'react';
import { addToCart } from '../actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
function CartScreen(props) {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [])
    const handleAddToCart = () => {
        props.history.push("/product/" + props.match.params.id);
    }
    return (
        <div>
            <div className="back-to-result">
                <button className="btn" onClick={handleAddToCart}><FontAwesomeIcon icon={faBackward} /> Back to product</button>
            </div>
            <div className="cart">
                <div className="cart-list">
                    <ul className="cart-list-container">
                        <li>
                            <h3>Shopping cart</h3>
                            <div>Price</div>
                        </li>
                        {
                            cartItems.length === 0 ?
                                <div> Your cart is Empty</div> :
                                cartItems.map((item,index) =>
                                    <div key={index}>
                                        <img src={item.image} alt="image" />
                                        <div className="cart-name">
                                            <div>
                                                {item.name}
                                            </div>
                                            <div>
                                                Qty:
                                            <select>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            {item.price}
                                        </div>
                                    </div>
                                )
                        }

                    </ul>
                </div>
                <div className="cart-action">
                    <h3>Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} Items)
                    :
                    ₹ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                    </h3>
                   <button className="button primary" disabled={cartItems.length===0}>
                       Proceed to Checkout
                   </button>

                </div>
            </div>
        </div>
    )
}

export default CartScreen;
