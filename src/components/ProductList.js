import React, { useContext } from "react"
import { ProductsContext } from '../App';
import BottomBar from './BottomBar';

const ProductList = () => {
  const context = useContext(ProductsContext);

  const products = () => {
    if (context.state.filterType === 'ALL') {
      return context.state.productList;
    }

    return context.state.productList.filter((product) => {
      return product.type === context.state.filterType;
    })
  }

  const getProductCount = (product) => {
    const item = context.state.cart.find((cartItem) => {
      return cartItem.id === product.id;
    });

    return item?.count || 0;
  };

  return(
    <div>
      <div className="product-list">
        { products().map((product, index) => {
          return (
            <div className="product-list__item" key={index}>
            <img src={product.image} className="product-list__image" alt="Product Image" />
              <p className="product-list__title">{ product.name }</p>
              <p className="product-list__price">{ parseInt(product.price, 10).toFixed(2) } TL</p>
              <div className="product-list__buttons">
                { getProductCount(product) ? (
                  <>
                    <button onClick={() => context.removeFromCart(product)} className="product-list__button">
                      <span className="product-list__button-text">-</span>
                    </button>
                    <p className="product-list__count">{ getProductCount(product) }</p>
                  </>
                )  : null }
                <button onClick={() => context.addToCart(product)} className="product-list__button">
                  <span className="product-list__button-text">+</span>
                </button>
              </div>
            </div>
          )
        }) }
      </div>
      <BottomBar />
    </div>
  )
}

export default ProductList;
