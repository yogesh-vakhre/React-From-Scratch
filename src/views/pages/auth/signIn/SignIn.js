import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { adminLogin } from "../../../../store/actions/userAction";

const SignIn = (props) => {
  const {
    users: { error },
    adminLogin,
  } = props;
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = async (data) => {
    adminLogin(data);
  };

  const handleError = (errors) => {
    // console.error(errors);
  };

  console.log("test props", props);

  return (
    <>
      <section className="vh-100 my-5" style={{ backgrounColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black border-radius-5">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign In
                      </p>
                     
                      <form
                        className="mx-1 mx-md-4"
                        onSubmit={handleSubmit(onSubmit, handleError)}
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              {...register("email")}
                            />
                            <p className="text-danger">
                              {errors.email?.message}
                            </p>
                            <p className="text-danger">{ error?.message}</p>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              {...register("password")}
                            />
                            <p className="text-danger">
                              {errors.password?.message}
                            </p>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Login
                          </button>
                        </div>
                        <div className="d-flex justify-content-center mb-5">
                          <p>
                            Don't have account?
                            <Link to="/sign-up">Register here</Link>
                          </p>
                        </div>
                        <div className="d-flex justify-content-center mb-5">
                          <Link to="/reset-password">
                            Forgot Your password?
                          </Link>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="phto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

SignIn.propTypes = {
  loading: PropTypes.bool,
  users: PropTypes.object,
  adminLogin: PropTypes.func.isRequired,
};

// Get state to props
const mapStateToProps = (state) => ({
  users: state.users,
});

// Get dispatch / function to props
const mapDispatchToProps = (dispatch) => ({
  adminLogin: (data) => dispatch(adminLogin(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
