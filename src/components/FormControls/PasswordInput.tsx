import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const PasswordInput = (props) => {
  const [isShown, setShown] = useState(false);

  return (
    <div>
      <Form.Group>
        <InputGroup className="wrap-input100 validate-input" id="Password-toggle">
          <InputGroup.Text
            id="basic-addon2"
            onClick={() => {
              setShown(!isShown);
            }}
            className="bg-white text-muted"
          >
            <Link to="#">
              <i className={`zmdi ${isShown ? "zmdi-eye" : "zmdi-eye-off"} text-muted`} aria-hidden="true"></i>
            </Link>
          </InputGroup.Text>
          <Form.Control
            className="input100 border-start-0 ms-0"
            type={isShown ? "text" : "password"}
            placeholder="Password"
            {...props}
          />
        </InputGroup>
      </Form.Group>
    </div>
  );
};

export default PasswordInput;
