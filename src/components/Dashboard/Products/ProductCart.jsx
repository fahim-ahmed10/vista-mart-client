import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const ProductCart = ({ product }) => {
  const { title, imageURL, brand, price } = product;
  return (
    <div className="border rounded shadow p-4 flex flex-col justify-between">
      <img src={imageURL} alt="" className="w-full h-40 object-cover mb-4" />
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{brand}</p>
      <p className="font-medium text-gray-800 mb-2">${price}</p>
      <Link to="" className="text-blue-500 font-bold pb-4">
        View in Details
      </Link>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
};

ProductCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
  }).isRequired,
};
export default ProductCart;
