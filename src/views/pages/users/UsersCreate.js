import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createUser } from "../../../store/actions/userAction";

const UsersCreate = (props) => {
  const {
    users: {error},
    createUser,
  } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {},
  });

  const onSubmit = async (data) => {
    createUser(data);
  };

  const handleError = (errors) => {
    console.log(errors);
  };

  const registerOptions = {
    name: { required: "Name is required." },
    email: { required: "Email is required." },
    password: { required: "Password is required." },
    phonenumber: {
      required: "Phone number is required.",
      minLength: {
        value: 10,
        message: "Phone number must have at least 10 characters",
      },
    },
    age: { required: "Age is required." },
    address: { required: "Address is required." },
  };

  console.log(error);
  return (
    <>
      <div className="container-xxl my-5">
        <div className="row mt-2">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="card-body">
              <h4 className="card-title">Create User</h4>

              <form onSubmit={handleSubmit(onSubmit, handleError)}>
                <div className="form-group">
                  <label>Title: </label>
                  <input
                    placeholder="Title"
                    name="name"
                    className="form-control"
                    {...register("name", registerOptions.name)}
                  />
                  <p className="text-danger">
                    {error?.name && error.name }
                    {errors?.name && errors.name.message}
                  </p>
                </div>
                <div className="form-group">
                  <label> Email: </label>
                  <input
                    type="email"
                    placeholder="Description"
                    name="email"
                    className="form-control"
                    {...register("email", registerOptions.email)}
                  />
                  <p className="text-danger"> {error?.email && error.email }{errors.email?.message}</p>
                </div>
                <div className="form-group">
                  <label> Password: </label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="form-control"
                    {...register("password", registerOptions.password)}
                  />
                  <p className="text-danger"> {error?.password && error.password }{errors.password?.message}</p>
                </div>
                <div className="form-group">
                  <label>Phone Number: </label>
                  <input
                    placeholder="Phone Number"
                    name="phonenumber"
                    className="form-control"
                    {...register("phonenumber", registerOptions.phonenumber)}
                  />
                  <p className="text-danger">
                    {error?.phonenumber && error.phonenumber }
                    {errors?.phonenumber && errors.phonenumber.message}
                  </p>
                </div>
                <div className="form-group">
                  <label>Age: </label>
                  <input
                    placeholder="Age"
                    name="age"
                    className="form-control"
                    {...register("age", registerOptions.age)}
                  />
                  <p className="text-danger">
                    {error?.age && error.age }
                    {errors?.age && errors.age.message}
                  </p>
                </div>
                <div className="form-group">
                  <label> Address: </label>
                  <textarea
                    placeholder="Description"
                    name="address"
                    className="form-control"
                    {...register("address", registerOptions.address)}
                  ></textarea>
                  <p className="text-danger"> {error?.address && errors.address } {errors.address?.message}</p>
                </div>
                <input
                  type="checkbox"
                  name="published"
                  value="true"
                  className="input-checkbox"
                  {...register("status", registerOptions.status)}
                />{" "}
                IsActive
                <p className="text-danger">{error?.status && errors.status }{errors.status?.message}</p>
                <div className="my-2">
                  <button type="submit" className="btn btn-success">
                    Save
                  </button>
                  <Link to="/users" className="btn btn-danger mx-1">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

UsersCreate.propTypes = {
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
  createUser: (data) => dispatch(createUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersCreate);
