import React, { useState } from "react";
import { Form, Alert, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { apiSignIn } from "../../apis/auth";
import PasswordInput from "../../components/FormControls/PasswordInput";
import config from "../../config";
import { signIn, signOut } from "../../store/auth.slice";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [err, setError] = useState("");
  const [loading, setLoader] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onBtnLoginClicked = () => {
    setLoader(true);

    apiSignIn(email, password)
      .then((res) => {
        const { token, user } = res.data;
        localStorage.setItem(config.AUTH_USER_TOKEN_KEY, token);
        dispatch(signIn(user));
      })
      .catch((err) => {
        setError("Username or password is incorrect.");

        dispatch(signOut(null));
      })
      .then(() => {
        setLoader(false);
      });
  };

  return (
    <div>
      <div className="login-img">
        <div className="page">
          <div className="container-login100">
            <div className="wrap-login100 p-6">
              <form className="login100-form validate-form">
                <span className="login100-form-title pb-5"> Login</span>
                <div>
                  {err && <Alert variant="danger">{err}</Alert>}
                  <div className="wrap-input100 validate-input input-group">
                    <Link to="#" className="input-group-text bg-white text-muted">
                      <i className="zmdi zmdi-email text-muted" aria-hidden="true"></i>
                    </Link>
                    <Form.Control
                      className="input100 border-start-0 form-control ms-0"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      required
                    />
                  </div>
                  <PasswordInput
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></PasswordInput>
                  <div className="container-login100-form-btn">
                    <Link
                      to="#"
                      onClick={() => {
                        onBtnLoginClicked();
                      }}
                      className="login100-form-btn btn-primary"
                    >
                      Login
                      {loading && (
                        <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm ms-2"></span>
                      )}
                    </Link>
                  </div>
                  <div className="text-center pt-3"></div>
                  <label className="login-social-icon">
                    <span>Login with Social</span>
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
                  {/* <Link to={`/auth/signup`} className="d-flex justify-content-center mt-4">
                    Create a new account ?
                  </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
