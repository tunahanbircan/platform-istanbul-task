import { createContext, useState } from "react";
import { Route, Routes } from "react-router";
import { HOME_SCREEN } from "./constants/navigations";
import Home from "./screens/Home";
import { products } from './products';

export const ProductsContext = createContext();

function App() {
  const [state, setState] = useState({ productList: products, cart: [], filterType: 'ALL' });

  const addToCart = (product) => {
    setState({
      ...state,
      cart: add(product),
    })
  };

  const filterBy = (type) => {
    setState({
      ...state,
      filterType: type,
    })
  };

  const removeFromCart = (product) => {
    setState({
      ...state,
      cart: remove(product),
    })
  };

  const add = (product) => {
    const hasProduct = state.cart.find((cartItem) => { return cartItem.id === product.id });

    if (hasProduct) {
      return state.cart.map((cartItem) => {
        return cartItem.id === product.id ? {...cartItem, count: cartItem.count + 1} : cartItem;
      });
    }

    return [...state.cart, { ...product, count: 1 }];
  }

  const remove = (product) => {
    return state.cart.map((cartItem) => {
      return cartItem.id === product.id ? {...cartItem, count: cartItem.count - 1 } : cartItem;
    }).filter((cartItem) => { return cartItem.count } );
  };

  return (
    <ProductsContext.Provider value={{ state, addToCart, removeFromCart, filterBy }}>
      <div className="App">
        <Routes>
          <Route path={HOME_SCREEN} element={<Home />} />
        </Routes>
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
