import PropTypes from "prop-types";

export const ProductDetail = ({ hadlerSelect, hadlerRemuve, product }) => {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
                <button className="btn btn-warning btn-sm" onClick={() => hadlerSelect(product)}>
                    Update
                </button>
            </td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={() => hadlerRemuve(product.id)}>
                    Remove
                </button>
            </td>
        </tr>
    );
};

ProductDetail.propTypes = {
    product: PropTypes.object.isRequired,
    hadlerRemuve: PropTypes.func.isRequired,
    hadlerSelect: PropTypes.func.isRequired
};
