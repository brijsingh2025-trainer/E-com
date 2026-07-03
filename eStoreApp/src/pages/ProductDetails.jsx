import { useEffect } from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import { useParams } from "react-router-dom";

import {
  fetchProductById,
} from "../features/products/productSlice";

const ProductDetails = () => {

  const dispatch =
    useDispatch();

  const { id } =
    useParams();

  const {
    selectedProduct,
    loading,
    error,
  } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(
      fetchProductById(id)
    );
  }, [dispatch, id]);

  if (loading) {
    return (
      <h2 className="text-center mt-5">
        Loading...
      </h2>
    );
  }

  if (error) {
    return (
      <h2 className="text-danger">
        {error}
      </h2>
    );
  }

  if (!selectedProduct) {
    return null;
  }

  return (
    <div className="container mt-5">

      <div className="row">

        <div className="col-md-4">

          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="img-fluid"
          />

        </div>

        <div className="col-md-8">

          <h2>
            {selectedProduct.title}
          </h2>

          <h4>
            ${selectedProduct.price}
          </h4>

          <p>
            {selectedProduct.description}
          </p>

          <p>
            <strong>
              Category:
            </strong>

            {" "}
            {selectedProduct.category}
          </p>

          <p>
            <strong>
              Rating:
            </strong>

            {" "}
            {selectedProduct.rating?.rate}
          </p>

          <button
            className="btn btn-success"
          >
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;