import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { detailsProduct} from '../actions/productActions'
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
function ProductScreen(props) {
    const productDetails = useSelector((state) => state.productDetails);
    const { products, loading, error } = productDetails;
    console.log(productDetails)
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {

        };
    }, []);

    return (
        <div >
            <div className="back-to-result">
                <Link to="/"><button className="btn"><FontAwesomeIcon icon={faBackward} /> Back to result</button></Link>
            </div>
          {loading ? <div>Loading....</div>:error?<div>error</div>:
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
                      Status: {products.status}
                  </li>
                  <li>
                      Qty: <select>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>

                      </select>
                  </li>
                  <li >
                      <button className="button" >Add to cart</button>
                  </li>
              </ul>

          </div>
      </div>)}
            
        </div>
    )
}

export default ProductScreen;
