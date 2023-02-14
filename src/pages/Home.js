import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee, loadEmployees } from "../redux/actions";
import { useNavigate } from "react-router-dom";

function Home() {
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const { employees } = useSelector((state) => state.data);

  const handleDelete = (id) => {
    if (window.confirm("are you sure wanted to  detete user?")) {
      dispatch(deleteEmployee(id));
      dispatch(loadEmployees());
    }
  };

  useEffect(() => {
    dispatch(loadEmployees());
  }, []);
  return (
    <div className="w-100">
      <h2 className="pt-5 pb-5">Employee Managment System</h2>

      <div
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div
          className="btn-group me-2 btncss"
          role="group"
          aria-label="First group"
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/addemployee")}
          >
            Add Employee
          </button>
        </div>
      </div>
      <div className="w-100">
        <table className="table justify-content-center tablecss">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Contact</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees &&
              employees.map((employee) => (
                <tr key={employee.id}>
                  <td> {employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.address}</td>
                  <td>{employee.contact}</td>
                  <td>
                    <div className="btn-group" aria-label="Basic example">
                      <button
                        type="button"
                        className="btn btn-primary m-1 btncss"
                        onClick={() => navigate(`/editemployee/${employee.id}`)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger m-1 btncssdelete"
                        onClick={() => handleDelete(employee.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
