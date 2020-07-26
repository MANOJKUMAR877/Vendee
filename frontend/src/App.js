import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
            </button>
            <Link to="/">VENDEE</Link>

          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}><FontAwesomeIcon icon={faWindowClose} /></button>
          <ul>
            <li>
              <a className="side" href="/">Pants</a>
            </li>

            <li>
              <a className="side" href="/">Shirts</a>
            </li>

          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen}/>
            <Route path="/" exact={true} component={HomeScreen} />

          </div>

        </main>
        <footer className="footer">
        &copy;  All right reserved  .
    </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
