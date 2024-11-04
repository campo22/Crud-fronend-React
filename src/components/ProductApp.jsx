import { useEffect, useState } from "react";
import { create, findAll, remove, update } from "../service/ProductService";
import { ProductGrid } from "./ProductGrid";
import PropTypes from "prop-types";
import { ProductForm } from "./ProductForm";

export const ProductApp = ({ title }) => {

    const [products, setProducts] = useState([]);
    const [productSelected, setProductSelected] = useState({
        id: 0,
        name: '',
        description: '',
        price: ''
    });

    const getProduct = async () => {

        const result = await findAll();
        console.log(result);
        setProducts(result.data._embedded.products);
    }

    useEffect(() => {
        getProduct();

    }, []);

    const handlerAddProduct = async (product) => {
        if (product.id > 0) {
            // Actualizar el producto existente
            const response = await update(product);
            setProducts(products.map(prod =>
                prod.id === response.data.id ? product : prod,
            ));
        } else {
            // Agregar un nuevo producto
            const response = await create(product);
            setProducts([...products, { ...response.data }]);
        }
    };

    const handlerRemuveProducto = (id) => {
        // Eliminar el producto
        remove(id);
        setProducts(products.filter(product => product.id !== id));
    };

    const hadlerProductSelected = (product) => {
        setProductSelected({ ...product });
    };

    return (
        <div className="container my-4">
            <h1 className="text-center mb-4">{title}</h1>
            <div className="row">
                <div className="col-md-6">
                    <ProductForm handlerAdd={handlerAddProduct} productSelected={productSelected} />
                </div>
                <div className="col-md-6">
                    {products.length > 0 ? (
                        <ProductGrid products={products} hadlerRemuve={handlerRemuveProducto} hadlerSelect={hadlerProductSelected} />
                    ) : (
                        <div className="alert alert-warning text-center">No hay productos en la base de datos</div>
                    )}
                </div>
            </div>
        </div>
    );
};

ProductApp.propTypes = {
    title: PropTypes.string.isRequired
};
