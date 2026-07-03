// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector(
    (state) => state.cart?.cartItems || []
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          MyStore
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/products"
              >
                Products
              </Link>
            </li>

          </ul>

          <Link
            className="btn btn-warning"
            to="/cart"
          >
            Cart ({totalItems})
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;