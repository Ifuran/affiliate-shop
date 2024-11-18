import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <section className="login-section">
        <div className="col-lg-5 col-10 pt-5 mt-5 mx-auto">
          <div className="card">
            <div className="card-body">
              <h6 className="card-login-title fs-2">
                Welcome to{" "}
                <span className="brand text-success">Affiliate Shop!</span>
              </h6>
              <p>Please login your account</p>
              <form className="login-form">
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="password"
                  />
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-success w-100 mb-3"
                    disabled
                  >
                    Login
                  </button>
                  <Link to="/" className="text-success">
                    Back to home
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
