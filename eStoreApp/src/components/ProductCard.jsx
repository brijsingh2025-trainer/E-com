import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3 mb-4">

      <div className="card h-100">

        <img
          src={product.image}
          alt={product.title}
          height="200"
          className="card-img-top p-3"
        />

        <div className="card-body">

          <h6>{product.title}</h6>

          <h5>${product.price}</h5>

          <Link
            to={`/product/${product.id}`}
            className="btn btn-primary"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;
