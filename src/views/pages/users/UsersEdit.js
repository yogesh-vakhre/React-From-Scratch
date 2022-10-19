import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
 
import { useEffect } from "react";
import { showUser, updateUser } from "../../../store/actions/userAction";

const UsersEdit = (props) => {
  const {
    users: { user },
    showUser,
    updateUser,
  } = props;
  const { id } = useParams();
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    updateUser({id,data});
   // navigate("/users");
  };

  const handleError = (errors) => console.error(errors);

  const registerOptions = {
    name: { required: "Name is required." },
    email: { required: "Email is required." },
    password: { required: "Password is required." },
    phonenumber: { required: "Phone number is required." },
    age: { required: "Age is required." },
    address: { required: "Address is required." },
  };

  useEffect(() => {
    showUser(id);
  }, [id,showUser]);
  console.log(props);
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
                    {...setValue("name", user?.name && user.name)}
                    {...register("name", registerOptions.name)}
                  />
                  <p className="text-danger">
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
                    {...setValue("email", user?.email && user.email)}
                    {...register("email", registerOptions.email)}
                  />
                  <p className="text-danger">{errors.email?.message}</p>
                </div>
                
                <div className="form-group">
                  <label>Phone Number: </label>
                  <input
                    placeholder="Phone Number"
                    name="phonenumber"
                    className="form-control"
                    {...setValue("phonenumber", user?.phonenumber && user.phonenumber)}
                    {...register("phonenumber", registerOptions.phonenumber)}
                  />
                  <p className="text-danger">
                    {errors?.phonenumber && errors.phonenumber.message}
                  </p>
                </div>
                <div className="form-group">
                  <label>Age: </label>
                  <input
                    placeholder="Age"
                    name="age"
                    className="form-control"
                    {...setValue("age", user?.age && user.age)}
                    {...register("age", registerOptions.age)}
                  />
                  <p className="text-danger">
                    {errors?.age && errors.age.message}
                  </p>
                </div>
                <div className="form-group">
                  <label> Address: </label>
                  <textarea
                    placeholder="Description"
                    name="address"
                    className="form-control"
                    {...setValue("address", user?.address && user.address)}
                    {...register("address", registerOptions.address)}
                  ></textarea>
                  <p className="text-danger">{errors.address?.message}</p>
                </div>
                <input
                  type="checkbox"
                  name="published"
                  value="true"
                  className="input-checkbox"
                  checked={ user.status ===1 ? true:'' }                 
                  {...register("status", registerOptions.status)}
                />{" "}
                IsActive
                <p className="text-danger">{errors.status?.message}</p>
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

UsersEdit.propTypes = {
  loading: PropTypes.bool,
  users: PropTypes.object,
  showUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
};

// Get state to props
const mapStateToProps = (state) => ({
  users: state.users,
});

// Get dispatch / function to props
const mapDispatchToProps = (dispatch) => ({
  showUser: (id) => dispatch( showUser(id)),
  updateUser: (data) =>
    dispatch(updateUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersEdit);
