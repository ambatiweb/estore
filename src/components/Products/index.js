import { useDispatch, useSelector } from 'react-redux';
import './_product.scss';
import { getProducts } from '../../Redux/Product/action';
import { useEffect } from 'react';
import { addCartItem } from '../../Redux/Cart/cartSlice';
import { Link } from 'react-router-dom';

const Product=()=>{
    const productData = useSelector(state => state.pr.products);
    const cart = useSelector(state=>state.cr);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[])

    const addToCart = (itemData)=>{
        const payload = {...itemData,quantity:1};
        dispatch(addCartItem(payload));
    }

    return(
        <div className='products-container'>
            {
                productData.map((product,key)=>{
                    return(
                        <div className='mx-5 p-3 product-card'>
                            <div className='product-image-container'>
                            <Link to='/productDetails'
                                    state={product}>
                                <img src={require('../../assets/images/shop/'+product.product_img)}></img>
                            </Link>    
                            </div>
                            <div className='product-info'>
                                <h5>
                                    <Link to='/productDetails' state={product}>{product.product_name}</Link>
                                    </h5>
                                <p className='product-price'>${product.price}</p>
                                <div className='product-rating'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                </div>
                            </div>
                            <div className='my-3' onClick={()=>addToCart(product)}>
                                <div className='cart-button'>
                                    <div className='cart-icon-container mx-4'>
                                        <i className='fa fa-shopping-cart'/>
                                    </div>
                                    <div className='cart-text-container mx-3'>
                                        <p>Add to Cart</p>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Product;