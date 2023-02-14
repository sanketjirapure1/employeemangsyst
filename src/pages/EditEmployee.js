import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSigleEmployee, UpdateEmployee } from "../redux/actions";

function EditEmployee() {
  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });

  const navigate = useNavigate();

  let dispatch = useDispatch();
  let { id } = useParams();
  const { employee } = useSelector((state) => state.data);

  const { name, email, address, contact } = state;

  useEffect(() => {
    dispatch(getSigleEmployee(id));
  }, []);

  useEffect(() => {
    if (employee) {
      setState({ ...employee });
    }
  }, [employee]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !address || !contact) {
      setError("please  enter all input field");
    } else {
      dispatch(UpdateEmployee(state, id));
      navigate("/");
      setError("");
    }
  };

  return (
    <div
      style={{
        width: "50%",
        textAlign: "left",
        marginLeft: 200,
        paddingTop: 50,
      }}
    >
      <h2 className="addbtncss"> Edit Employee</h2>

      {error && <h3 style={{ color: "red" }}> {error}</h3>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Addrees
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="address"
            value={address}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            {" "}
            Contact
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="contact"
            value={contact}
            onChange={handleInputChange}
          />
        </div>

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
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditEmployee;
