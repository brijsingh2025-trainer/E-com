import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";

import { fetchProductById } from "../features/products/productSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const {
    selectedProduct,
    loading,
    error,
  } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <h2>Loading Product...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <h2 className="text-danger">
          {error}
        </h2>
      </div>
    );
  }

  if (!selectedProduct) {
    return null;
  }

  return (
    <div className="container mt-4">

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">

          <li className="breadcrumb-item">
            <Link to="/">
              Home
            </Link>
          </li>

          <li className="breadcrumb-item">
            <Link to="/products">
              Products
            </Link>
          </li>

          <li
            className="breadcrumb-item active"
            aria-current="page"
          >
            Product Details
          </li>

        </ol>
      </nav>

      {/* Back Button */}
      <div className="mb-3">
        <Link
          to="/products"
          className="btn btn-outline-secondary"
        >
          ← Back to Products
        </Link>
      </div>

      <div className="card shadow-sm p-4">

        <div className="row">

          {/* Product Image */}
          <div className="col-md-5 text-center">

            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="img-fluid"
              style={{
                maxHeight: "400px",
                objectFit: "contain",
              }}
            />

          </div>

          {/* Product Information */}
          <div className="col-md-7">

            <h2>
              {selectedProduct.title}
            </h2>

            <h3 className="text-success mt-3">
              ${selectedProduct.price}
            </h3>

            <p className="mt-3">
              {selectedProduct.description}
            </p>

            <hr />

            <p>
              <strong>Category:</strong>{" "}
              {selectedProduct.category}
            </p>

            <p>
              <strong>Rating:</strong>{" "}
              ⭐ {selectedProduct.rating?.rate}
            </p>

            <p>
              <strong>Reviews:</strong>{" "}
              {selectedProduct.rating?.count}
            </p>

            <div className="mt-4">

              <button
                className="btn btn-success me-2"
              >
                Add To Cart
              </button>

              <button
                className="btn btn-primary"
              >
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;