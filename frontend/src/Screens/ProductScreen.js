import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions'
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
function ProductScreen(props) {
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const { products, loading, error } = productDetails;


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {

        };
    }, []);
    const handleAddToCart=()=>{
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
    }

    return (
        <div >
            <div className="back-to-result">
                <Link to="/"><button className="btn"><FontAwesomeIcon icon={faBackward} /> Back to result</button></Link>
            </div>
            {loading ? <div>Loading....</div> : error ? <div>error</div> :
                (
                    <div className="details">
                        <div className="details-image">
                            <img src={products.image} alt="productImage" />
                        </div>
                        <div className="details-info">
                            <ul>
                                <li>
                                    <h4>{products.name}</h4>
                                </li>
                                <li>
                                    {products.rating} Stars ({products.numReviews} Reviews)
                  </li>
                                <li>
                                    <b>Price:₹{products.price}</b>
                                </li>
                                <li>
                                    Description
                      <div>
                                        {products.description}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="details-action">
                            <ul>
                                <li>
                                    Price: {products.price}
                                </li>
                                <li>
                                    Status: {products.countInStock > 0?"In Stock":"Unavailable"}
                                </li>
                                <li>
                                    Qty: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                        {[...Array(products.countInStock).keys()].map(x =>
                                            <option key={x+1} value={x + 1}>{x + 1}</option>
                                        )}

                                    </select>
                                </li>
                                <li >
                                    {products.countInStock >0 && <button onClick={handleAddToCart} className="button" >Add to cart</button>}
                                    
                                </li>
                            </ul>

                        </div>
                    </div>)}

        </div>
    )
}

export default ProductScreen;
