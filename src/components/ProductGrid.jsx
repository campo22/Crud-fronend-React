import PropTypes from "prop-types";
import { ProductDetail } from "./ProductDetail";

export const ProductGrid = ({ hadlerSelect, hadlerRemuve, products = [] }) => {
    return (
        <table className="table table-hover">
            <thead className="table-light">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Update</th>
                    <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <ProductDetail product={product} hadlerSelect={hadlerSelect} key={product.id} hadlerRemuve={hadlerRemuve} />
                ))}
            </tbody>
        </table>
    );
};

ProductGrid.propTypes = {
    products: PropTypes.array.isRequired,
    hadlerRemuve: PropTypes.func.isRequired,
    hadlerSelect: PropTypes.func.isRequired
};
