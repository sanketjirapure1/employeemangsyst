import * as types from "./actionType";
import axios from "axios";

const getEmployees = (employees) => ({
  type: types.GET_EMPLOYEES,
  payload: employees,
});

const employeeDeleted = () => ({
  type: types.DELETE_EMPLOYEE,
});

const employeeAdded = () => ({
  type: types.ADD_EMPLOYEE,
});

const employeeUpdated = () => ({
  type: types.UPDATE_EMPLOYEE,
});

const getEmployee = (employee) => ({
  type: types.GET_SINGLE_EMPLOYEES,
  payload: employee,
});

export const loadEmployees = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getEmployees(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteEmployee = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(employeeDeleted(resp.data));
        dispatch(loadEmployees());
      })
      .catch((error) => console.log(error));
  };
};

export const addEmployee = (employee) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, employee)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(employeeAdded(resp.data));
        dispatch(loadEmployees());
      })
      .catch((error) => console.log(error));
  };
};

export const getSigleEmployee = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getEmployee(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const UpdateEmployee = (employee, id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, employee)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(employeeUpdated());
      })
      .catch((error) => console.log(error));
  };
};
