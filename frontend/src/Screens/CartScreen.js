import React, { useEffect } from 'react';
import { addToCart } from '../actions/cartAction';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
function CartScreen(props) {
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
                        </li>
                    </ul>
                </div>
                <div className="cart-action">

                </div>
            </div>
        </div>
    )
}

export default CartScreen;
