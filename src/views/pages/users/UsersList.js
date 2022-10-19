import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createUser, deleteUser, getUsers } from "../../../store/actions/userAction";

const UsersList = (props) => {
  const {
    users: { users },
    getUsers,
    deleteUser,
    createUser,
  } = props;
  useEffect(() => {
    getUsers();
  }, [getUsers, deleteUser, createUser]);
  //console.log(props);
 
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <h4 className="mb-3">Users Task</h4>

          <Link to="/users/create" className="btn btn-info w-25">
            <span>Add New ?User</span>
            <i className="fas fa-plus"></i>
          </Link>
          <h5 className="my-3">Task List</h5>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Title</th>
                <th>Complited</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>
                    <span className="options">
                      <Link
                        to={`/users/edit/${user.id}`}
                        className="badge bg-primary m-1"
                      >
                        Edit
                      </Link>                      
                      <i
                        onClick={() => {
                          deleteUser(user.id);
                        }}
                        className="badge bg-danger"
                      >
                        Delete
                      </i>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

UsersList.propTypes = {
  loading: PropTypes.bool,
  users: PropTypes.object,
  getUsers: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({   
  getUsers: () => dispatch( getUsers()),
  deleteUser: (id) => dispatch(deleteUser(id)),
  createUser: (data) => dispatch(createUser(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
