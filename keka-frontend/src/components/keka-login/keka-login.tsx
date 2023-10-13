import React from 'react';
import Link from 'next/link';
import '../login/login.css'
const KekaLogin = () => {
  return (
    <div>
      <div className="d-flex vh-100">
        <div className="position-relative bg-login w-100-500">
          <img src="https://cdn.kekastatic.net/login/v/M161_2023.10.09.1/images/login-image.jpg" />
        </div>
        <div className="login-content d-flex flex-column justify-content-between overflow-auto bg-primary">
          <div>
            <div className="mt-10 mb-40 w-300 h-50px"></div>
            <div>
              <p className="font-weight-semi-bold text-x-large mb-20">Login to Keka</p>
              <input
                name="__RequestVerificationToken"
                type="hidden"
                value="CfDJ8FqpALfnMQpJuN2iskteUFyAuyg_RsspfQuNsK3vbuB77Ml1zONK_tdoNWv-RWFsRlQMVcOGL3mm6qnPB2E3lpmaaoRsEmsvsc-UxjQ0paYpNpsLj8m0R63TGbGkB3SxcybUkyUfPFaVVnGgwU8B69ZcX7nYzo3mM1pUF3lRwaXipbceJGNHU-Ae7v7p51Ptpw"
              />
              <form
                method="post"
                autoComplete="off"
                className="js-keka-login"
                action="/Account/UserNameLogin?returnurl=%2F"
                noValidate="novalidate"
              >
                <div>
                  <div className="form-floating position-relative">
                    <input
                      type="text"
                      className="form-control border-danger"
                      id="domain"
                      placeholder="Company domain name"
                      autoComplete="off"
                      data-val="true"
                      data-val-length="Please enter a valid subdomain name."
                      data-val-length-max="40"
                      data-val-regex="Please enter a valid subdomain name."
                      data-val-regex-pattern="^[\w\d]*$"
                      data-val-required="Please enter a valid subdomain name."
                      maxLength="40"
                      name="SubdomainName"
                      // value=""
                    />
                    <label htmlFor="domain">Company domain name</label>
                    <span className="input-group-text" id="basic-addon2">.keka.com</span>
                  </div>
                  <span
                    className="text-danger field-validation-valid"
                    data-valmsg-for="SubdomainName"
                    data-valmsg-replace="true"
                  ></span>
                </div>
                <div className="form-floating mt-10">
                  <input
                    type="text"
                    className="form-control valid"
                    placeholder="Username"
                    id="userName"
                    autoComplete="off"
                    data-val="true"
                    data-val-length="Please enter a valid username."
                    data-val-length-max="80"
                    data-val-required="Please enter a valid username."
                    maxLength="80"
                    name="UserName"
                    // value=""
                    aria-describedby="userName-error"
                    aria-invalid="false"
                  />
                  <label htmlFor="userName">Username</label>
                </div>
                <span
                  className="text-danger field-validation-valid"
                  data-valmsg-for="UserName"
                  data-valmsg-replace="true"
                ></span>
                <div className="form-floating mt-10">
                  <input
                    type="password"
                    className="form-control valid"
                    placeholder="Password"
                    id="password"
                    autoComplete="off"
                    data-val="true"
                    data-val-required="Please enter your password."
                    name="Password"
                    aria-describedby="password-error"
                    aria-invalid="false"
                  />
                  <label htmlFor="password">Password</label>
                  <span className="ki-eye-slash text-secondary" id="togglePassword"></span>
                </div>
                <span
                  className="text-danger field-validation-valid"
                  data-valmsg-for="Password"
                  data-valmsg-replace="true"
                ></span>
                <div className="d-flex justify-content-between user-select-none mt-10">
                  <div className="d-flex align-items-center gap-1">
                    <img id="imgCaptcha" src="data:image/png;base64,...base64-image-data..." />
                    <i id="retryCaptcha" className="ki ki-refresh ki-blue ki-xl cursor-pointer"></i>
                  </div>
                  <div className="form-floating">
                    <input type="text" id="captcha" name="captcha" className="form-control" placeholder="Captcha" required="" />
                    <label htmlFor="captcha">Captcha</label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-10 border-0">Login</button>
                <input
                  name="__RequestVerificationToken"
                  type="hidden"
                  value="CfDJ8FqpALfnMQpJuN2iskteUFyAuyg_RsspfQuNsK3vbuB77Ml1zONK_tdoNWv-RWFsRlQMVcOGL3mm6qnPB2E3lpmaaoRsEmsvsc-UxjQ0paYpNpsLj8m0R63TGbGkB3SxcybUkyUfPFaVVnGgwU8B69ZcX7nYzo3mM1pUF3lRwaXipbceJGNHU-Ae7v7p51Ptpw"
                />
              </form>
              <div className="mt-30">
                <a className="d-flex align-items-center" href="/Account/Login?returnUrl=%2F">
                  <i className="ki ki-arrow-backward ki-blue mt-6 mr-4"></i>
                   <Link  href={'/login'}><span>Other login options</span></Link> 
                </a>
              </div>
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <div className="apps-store mt-30">
                <a href="https://itunes.apple.com/in/app/keka-hr/id1448024119?mt=8" target="_blank">
                  <img src="https://cdn.kekastatic.net/login/v/M161_2023.10.09.1/images/app-store.svg" className="mr-10 cursor-pointer" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.keka.xhr&hl=en_IN" target="_blank">
                  <img src="https://cdn.kekastatic.net/login/v/M161_2023.10.09.1/images/google-play.svg" className="cursor-pointer" />
                </a>
              </div>
              <div className="apps-store mt-20 pt-2">
                <img src="https://cdn.kekastatic.net/login/v/M161_2023.10.09.1/images/keka-logo-black.svg" />
                <div className="text-secondary text-x-small ms-3">
                  <p>
                    By logging in, you agree to Keka{' '}
                    <a href="https://www.keka.com/services-agreement" className="border-bottom text-secondary border-secondary">
                      Terms of Use
                    </a>{' '}
                    and{' '}
                    <a href="https://www.keka.com/privacy-policy" className="border-bottom text-secondary text-nowrap border-secondary">
                      Privacy Policy
                    </a>
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

export default KekaLogin;
