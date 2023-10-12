import React from 'react';
import './login.css'

const Login = () => {
  return (
    <div className="d-flex vh-100">
      <div className="position-relative bg-login w-100-500">
        <img src="https://cdn.kekastatic.net/login/v/M161_2023.10.09.1/images/login-image.jpg" alt="Login Image" />
      </div>
      <div className="login-content d-flex flex-column justify-content-between overflow-auto bg-primary">
        <div>
          <div>
            <p className="font-weight-semi-bold text-x-large mb-20">Login to Keka</p>
          </div>
       
          <form className="js-keka-login">
            <div className="form-floating">
              <input
                type="text"
                className="form-control valid"
                placeholder="Email or Mobile"
                id="email"
                required
                autoComplete="off"
                data-val="true"
                data-val-length="Please enter a valid username or work email address."
                data-val-length-max="80"
                data-val-required="Please enter a valid username or work email address."
                maxLength="80"
                name="UserName"
                value=""
                aria-describedby="email-error"
                aria-invalid="false"
              />
              <label htmlFor="email">Email or Mobile</label>
            </div>
            <span className="text-danger field-validation-valid" data-valmsg-for="UserName" data-valmsg-replace="true"></span>
            <button type="submit" className="btn btn-primary mt-10 border-0">
              Continue
            </button>
          </form>
          <form method="post" action="/Account/ExternalLogin?returnurl=%2F">
            <div className="mt-10">
              <div className="d-flex align-items-center w-100 mt-30 mb-10">
                <div className="line"></div>
                <p className="text-small text-secondary px-3">Login with</p>
                <div className="line"></div>
              </div>
              <div className="login-container flex-wrap">
                <div className="login-option">
                  <button className="login-button bg-hover-btn" name="provider" value="Office365">
                    <div className="d-flex align-items-center justify-content-center">
                      <img src="https://cdn.kekastatic.net/login/v/M161_2023.10.09.1/images/logos/microsoft.svg" alt="Microsoft" />
                      <p className="ps-2">Microsoft</p>
                    </div>
                  </button>
                </div>
                <div className="login-option">
                  <button className="login-button bg-hover-btn" name="provider" value="Google">
                    <div className="d-flex align-items-center justify-content-center">
                      <img src="https://cdn.kekastatic.net/login/v/M161_2023.10.09.1/images/logos/google.svg" alt="Google" />
                      <p className="ps-2">Google</p>
                    </div>
                  </button>
                </div>
                <div className="login-option">
                  <button className="login-button bg-hover-btn" name="provider" value="UserName">
                    <div className="d-flex align-items-center justify-content-center">
                      <img src="https://cdn.kekastatic.net/login/v/M161_2023.10.09.1/images/logos/keka.svg" alt="Keka username" />
                      <p className="ps-2">Keka username</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
