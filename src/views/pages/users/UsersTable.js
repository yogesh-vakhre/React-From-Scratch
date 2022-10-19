import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UsersTable = (props) => {
  const { users, deleteUser } = props;
  return (
    <>
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
    </>
  );
};

UsersTable.propTypes = {
  loading: PropTypes.bool,
  users: PropTypes.object,
  deleteUser: PropTypes.func.isRequired,
};

export default UsersTable;
