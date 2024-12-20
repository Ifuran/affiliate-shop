import React, { useEffect } from "react";
import NavbarComponent from "../components/NavbarComponent";
import { Link } from "react-router-dom";
import { deleteProduct, getProducts } from "../features/productSlice";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const { data, isLoading, errorMessage } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await dispatch(deleteProduct(id));
        await Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      } catch (error) {
        await Swal.fire({
          title: "Error!",
          text: `Failed to delete the product: ${error.message}`,
          icon: "error",
        });
      }
    }
  };

  return (
    <>
      <NavbarComponent />
      <section className="latest-products pt-3">
        <div className="container">
          <div className="row">
            {isLoading && (
              <div className="container product-list pt-5 mt-5 text-center">
                Loading....
              </div>
            )}
            {errorMessage && (
              <div className="container product-list pt-5 mt-5 text-center">
                {errorMessage}
              </div>
            )}
            {!isLoading &&
              !errorMessage &&
              (data.length === 0 ? (
                <div className="container product-list pt-5 mt-5 text-center">
                  No product found
                </div>
              ) : (
                data.map((product) => (
                  <div className="col-6 col-md-4 col-lg-3" key={product._id}>
                    <div className="card my-2">
                      <Link to={`/product/${product._id}`}>
                        <img
                          src={product.image_url}
                          className="card-img-top object-fit-contain"
                          style={{ height: "200px" }}
                          alt="product"
                        />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title text-truncate">
                          {product.title}
                        </h5>
                        <p className="card-price">$ {product.price}</p>
                        <div className="btn-group" role="group">
                          <button
                            type="button"
                            className="btn btn-sm btn-warning"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(product._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
