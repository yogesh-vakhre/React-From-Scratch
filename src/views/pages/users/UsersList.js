import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  createUser,
  deleteUser,
  getUsers,
} from "../../../store/actions/userAction";
 
import UsersTable from "./UsersTable";
import Pagination from "../../../components/Pagination/Pagination";

const UsersList = (props) => {
  const {
    users: { users },
    getUsers,
    deleteUser,
    createUser,
  } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  useEffect(() => {
    getUsers();
  }, [getUsers, deleteUser, createUser]);
  //console.log(props);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = users.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(users.length / recordsPerPage);

  
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <h4 className="mb-3">Users Task</h4>

          <Link to="/users/create" className="btn btn-info w-25">
            <span>Add New ?User</span>
            <i className="fas fa-plus"></i>
          </Link>
          <UsersTable users={currentRecords} deleteUser={deleteUser} />
          <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
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
  getUsers: () => dispatch(getUsers()),
  deleteUser: (id) => dispatch(deleteUser(id)),
  createUser: (data) => dispatch(createUser(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
