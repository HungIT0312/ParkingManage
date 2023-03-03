import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(`Username: ${username}, Password: ${password}`);
    console.log(`Username: ${name},Password: ${Password},Email: ${Email}`)
  };

  return (
    <div className="login-form-bg h-100" style={{ marginTop: "10%" }}>
      <div className="container h-100">
        <div className="row justify-content-center h-100">
          <div className="col-xl-6">
            <div className="form-input-content">
              <div className="card login-form mb-0">
                <div className="card-body pt-5">
                  <a className="text-center" href="index.html">
                    <h4>Đăng kí</h4>
                  </a>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-5 mb-5 login-input"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={Email}
                        required
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={Password}
                        required
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </div>
                    <button className="btn login-form__btn submit w-100">
                      Sign in
                    </button>
                  </form>
                  <p className="mt-5 login-form__footer">
                    Have account
                    <Link to="/Login" className="text-primary">
                      Sign Up
                    </Link>
                    now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
