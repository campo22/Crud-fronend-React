import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const initialDataForm = {
    id: 0,
    name: '',
    description: '',
    price: ''
};

export const ProductForm = ({ productSelected, handlerAdd }) => {
    const [form, setForm] = useState(initialDataForm);

    useEffect(() => {
        setForm(productSelected);
    }, [productSelected]);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (!form.name || !form.description || form.price === '') {
                alert('Debe completar todos los campos');
                return;
            }
            handlerAdd(form);
            setForm(initialDataForm);
        }} className="border p-3 rounded bg-light">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    id="name"
                    className="form-control"
                    name="name"
                    value={form.name}
                    onChange={(event) =>
                        setForm({ ...form, name: event.target.value })
                    }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={(event) =>
                        setForm({ ...form, description: event.target.value })
                    }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    value={form.price}
                    onChange={(event) =>
                        setForm({ ...form, price: Number(event.target.value) })
                    }
                />
            </div>
            <button type="submit" className="btn btn-success w-100">{form.id > 0 ? 'Update' : 'Save'}</button>
        </form>
    );
};

ProductForm.propTypes = {
    handlerAdd: PropTypes.func.isRequired,
    productSelected: PropTypes.object.isRequired
};
