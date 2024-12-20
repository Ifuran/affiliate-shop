import React, { useState } from "react";
import NavbarComponent from "../components/NavbarComponent";
import { useDispatch } from "react-redux";
import { createProduct } from "../features/productSlice";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    image_url: "",
    price: "",
    product_url: "",
    description: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(createProduct(newProduct));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product has been added successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      setNewProduct({});
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `Failed to add product: ${error.message}`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <>
      <NavbarComponent />
      <section className="product-form-section">
        <div className="col-lg-8 col-10 pt-5 mt-5 mx-auto">
          <div className="card">
            <div className="card-body">
              <h6 className="card-product-form-title fs-2 text-center mb-3 fw-bold">
                Recommend new product
              </h6>
              <form onSubmit={handleSubmit} className="product-form">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label fw-bold">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="title"
                    name="title"
                    value={newProduct.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="image_url" className="form-label fw-bold">
                    Image
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="image_url"
                    placeholder="image url"
                    name="image_url"
                    value={newProduct.image_url}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label fw-bold">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    placeholder="price"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="product_url" className="form-label fw-bold">
                    Product URL
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="product_url"
                    placeholder="product url"
                    name="product_url"
                    value={newProduct.product_url}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label fw-bold">
                    Description
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="description"
                    style={{ height: 100 }}
                    name="description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-success w-100 mb-3">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreatePage;
