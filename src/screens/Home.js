import React from "react"
import Header from '../components/Header';
import ProductList from '../components/ProductList';

const HomeScreen = () => {
  return(
    <div className="home">
      <Header />
      <ProductList />
    </div>
  )
}

export default HomeScreen;
