import React, { useEffect } from "react";
import NavbarComponent from "../components/NavbarComponent";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../features/productSlice";

const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { item, isLoading, errorMessage } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  return (
    <>
      <NavbarComponent />
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
      <section className="product-detail-section">
        <div className="col-lg-10 col-10 pt-5 mt-5 mx-auto">
          <div className="card">
            <div className="card-body">
              <img src={item.image_url} alt={item.title} />
              <h3 className="fw-bold">{item.title}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailPage;
