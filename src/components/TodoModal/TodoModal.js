import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//import axios from "axios";

const schema = yup
  .object({
    title: yup.string().required(),
  })
  .required();

const TodoModal = (props) => {
  //const { todo } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    createTodo(data);
  };

  const createTodo = (data) => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  };

  return (
    <>
      <form
        className='modal fade hide'
        id="form"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add New Task
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* <input type="hidden" value={todo.id} name="id" /> */}
              {/* <input type="hidden" value={todo.userId} name="userId" /> */}
              <p>Task Title</p>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                 
                {...register("title", { required: true })}
              />

              <p className="text-danger">{errors.title?.message}</p>

              <br />
              <p>User</p>
              <select
                id="userId"
                className="form-control"
                name="userId"
                {...register("userId", { required: true })}
              >
                <option value="1">Grapefruit</option>
                <option value="2">Lime</option>
                <option value="3">Coconut</option>
                <option value="4">Mango</option>
              </select>
              <p className="text-danger">{errors.userId?.message}</p>
              <br />
              <p>
                <input
                  type="checkbox"
                  className="input-checkbox m-1"
                  value="true"
                  id="completed"
                  name="completed"
                   
                  {...register("completed", { required: true })}
                />
                Is Completed
              </p>
              <p className="text-danger">{errors.completed?.message}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" id="add" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default TodoModal;
