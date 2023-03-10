import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Form, InputGroup } from "react-bootstrap";
import PasswordInput from "../../components/FormControls/PasswordInput";

const SignUp = () => {
  const [err, setError] = useState("");
  const [Loader, setLoader] = useState(false);
  const [data, setData] = React.useState({
    fullname: "",
    email: "",
    password: "",
  });
  const { email, password, fullname } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const Signup = (e) => {
    e.preventDefault();
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((user) => {
    //     console.log(user);
    //     RouteChange();
    //     setLoader(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setError(err.message);
    //     setLoader(false);
    //   });
  };
  let navigate = useNavigate();
  const RouteChange = () => {
    let path = `${process.env.PUBLIC_URL}/dashboard`;
    navigate(path);
  };
  return (
    <div>
      <div className="login-img">
        <div className="page">
          <div className="container-login100">
            <div className="wrap-login100 p-6">
              <form className="login100-form validate-form">
                <span className="login100-form-title">Registration</span>
                {err && <Alert variant="danger">{err}</Alert>}
                <div className="wrap-input100 validate-input input-group">
                  <Link to="#" className="input-group-text bg-white text-muted">
                    <i className="mdi mdi-account" aria-hidden="true"></i>
                  </Link>
                  <Form.Control
                    className="input100 border-start-0 ms-0 form-control"
                    type="text"
                    name="fullname"
                    placeholder="User name"
                    value={fullname}
                    onChange={changeHandler}
                  />{" "}
                </div>
                <div className="wrap-input100 validate-input input-group">
                  <Link to="#" className="input-group-text bg-white text-muted">
                    <i className="zmdi zmdi-email" aria-hidden="true"></i>
                  </Link>
                  <Form.Control
                    className="input100 border-start-0 ms-0 form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={changeHandler}
                  />{" "}
                </div>
                <PasswordInput />
                <label className="custom-control custom-checkbox mt-4">
                  <input type="checkbox" className="custom-control-input" />
                  <span className="custom-control-label">
                    Agree the <Link to={`${process.env.PUBLIC_URL}/pages/extension/term`}>terms and policy</Link>
                  </span>
                </label>
                <div className="container-login100-form-btn">
                  <Link to="#" onClick={Signup} className="login100-form-btn btn-primary">
                    {" "}
                    Register
                    {Loader ? (
                      <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm ms-2"></span>
                    ) : (
                      ""
                    )}
                  </Link>
                </div>
                <div className="text-center pt-3"></div>
                <label className="login-social-icon">
                  <span>Register with Social</span>
                </label>
                <div className="d-flex justify-content-center">
                  <Link to="#">
                    <div className="social-login me-4 text-center">
                      <i className="fa fa-google"></i>
                    </div>
                  </Link>
                  <Link to="#">
                    <div className="social-login me-4 text-center">
                      <i className="fa fa-facebook"></i>
                    </div>
                  </Link>
                  <Link to="#">
                    <div className="social-login text-center">
                      <i className="fa fa-twitter"></i>
                    </div>
                  </Link>
                </div>
                <Link to={`/auth/login`} className="d-flex justify-content-center mt-4">
                  Alerady have an account ?
                </Link>
              </form>
            </div>
          </div>
          {/* <!-- CONTAINER CLOSED --> */}
        </div>
      </div>
    </div>
  );
};
SignUp.propTypes = {};

SignUp.defaultProps = {};

export default SignUp;
