import { useEffect } from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import ProductCard
from "../components/ProductCard";

import {
  fetchProducts,
} from "../features/products/productSlice";

const ProductList = () => {

  const dispatch =
    useDispatch();

  const {
    products,
    loading,
    error,
  } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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

  return (
    <div className="container mt-4">

      <h2 className="mb-4">
        Product List
      </h2>

      <div className="row">

        {products.map(
          (product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          )
        )}

      </div>

    </div>
  );
};

export default ProductList;
