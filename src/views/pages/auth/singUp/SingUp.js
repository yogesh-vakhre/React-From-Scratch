import React, { useEffect } from "react";
import PropTypes from "prop-types";
 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createUser } from "../../../../store/actions/userAction";

const SingUp = (props) => {
  const {   users: {error}, createUser } = props;

 
  //let navigate = useNavigate();
  // form validation rules
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),
    phonenumber: Yup.string()
      .required("Phone number is required")
      .min(10, "Phone number must be at least 10 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    address: Yup.string().required("Address is required"),
    age: Yup.string().required("Age is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Confirm Passwords must match"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = async (data) => {
    createUser(data);
  
  };

  const handleError = (errors) => {
   // console.error(errors);
  };

  useEffect(() => {
    console.log('test props',props ); 
  }, [props]);
  
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
                        Sign up
                      </p>

                      <form
                        className="mx-1 mx-md-4"
                        onSubmit={handleSubmit(onSubmit, handleError)}
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              className="form-control"
                              {...register("name")}
                            />
                            <p className="text-danger">
                              {errors?.name && errors.name.message}
                            </p>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="email">
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              {...register("email")}
                            />
                            <p className="text-danger">
                              {errors.email?.message}
                            </p>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              {...register("password")}
                            />
                            <p className="text-danger">
                              {errors.password?.message}
                            </p>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="confirmPassword"
                            >
                              Confirm your password
                            </label>
                            <input
                              type="password"
                              id="confirmPassword"
                              className="form-control"
                              {...register("confirmPassword")}
                            />
                            <p className="text-danger">
                              {errors.confirmPassword?.message}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="phonenumber">
                              Phone Number
                            </label>
                            <input
                              type="number"
                              id="phonenumber"
                              className="form-control"
                              {...register("phonenumber")}
                            />
                            <p className="text-danger">
                            {error?.phonenumber &&
                                error.phonenumber}
                              {errors?.phonenumber &&
                                errors.phonenumber.message}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="age">
                              Age
                            </label>
                            <input
                              type="number"
                              id="age"
                              className="form-control"
                              {...register("age")}
                            />
                            <p className="text-danger">                             
                              {error?.age && error.age}
                              {errors?.age && errors.age.message}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="address">
                              Address
                            </label>
                            <input
                              type="text"
                              id="address"
                              className="form-control"
                              {...register("address")}
                            />
                            <p className="text-danger">
                              {errors.address?.message}
                            </p>
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                        <div className="d-flex justify-content-center mb-5">
                          Already have account?{" "}
                          <Link to="/sign-in">Login here</Link>
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
SingUp.propTypes = {
  loading: PropTypes.bool,
  users: PropTypes.object,
  createUser: PropTypes.func.isRequired,
};

// Get state to props
const mapStateToProps = (state) => ({
  users: state.users,
});

// Get dispatch / function to props
const mapDispatchToProps = (dispatch) => ({   
  createUser: (data) =>
    dispatch(dispatch(createUser(data))),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingUp);
