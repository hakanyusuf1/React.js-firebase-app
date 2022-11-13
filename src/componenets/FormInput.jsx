import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Person } from "../assets/Icons";
const FormInput = ({ handleSubmit, values, setValues }) => {
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <div className="w-25 ml-5  p-5">
      <h3>ADD CONTACT</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            onChange={changeHandler}
            name="userName"
            value={values.userName}
            id="disabledTextInput"
            placeholder="Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            onChange={changeHandler}
            id="disabledTextInput"
            name="phone"
            value={values.phone}
            placeholder="Phone"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select
            name="gender"
            value={values.gender}
            onChange={changeHandler}
            id="disabledSelect"
            placeholder="Gender"
            required
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit">Add</Button>
      </Form>
    </div>
  );
};

export default FormInput;
