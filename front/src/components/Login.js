// import React from "react";
import './Css/Login.css';
// import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { BsShieldLockFill } from "react-icons/bs";
import { CgArrowLongRight } from "react-icons/cg";


function Login() {

  const navigate = useNavigate();

  let [email, setemail] = useState('');
  let [password, setpassword] = useState('');
  let [error, setError] = useState('');

  const btnhandler = () => {
    console.log(1);


    axios.post('http://localhost:5000/login', {

      email: email,
      password: password,
      error: error

    })
      .then(function (response) {
        // handle success
        console.log(response);
        if (response.data.status == "success") {
          navigate("/home")
          alert("success")
        }

        else {
          setError(response.data.status);
          // alert("User Allready login");
          alert("User Not Found")

          // return false;
        }



        if (response.data.status === " ") {
          setError(response.data.status);
          alert("please enter your email and password");
          // return false;
        }

        if (response.data.status === "user not found") {
          setError(response.data.status);
          alert("check your password");
          // return false;
        }

        if (response.data.status === "check_password") {
          setError(response.data.status);
          alert("check your password");
          // return false;
        }

        if (response.data.status === "user already logged in") {
          setError(response.data.status);
          alert("user already logged in");
          // return false;
        }


      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  // register

  const Navigate = useNavigate('');


  let [name, setname] = useState('');
  let [Email, setEmail] = useState('');
  let [Password, setPassword] = useState('');
  let [conformpassword, setconformpassword] = useState('');
  let [Error, seterror] = useState('');

  const btnregister = () => {
    axios.post('http://localhost:5000/register', {
      name: name,
      email: Email,
      password: Password,
      conformpassword: conformpassword,
      error: Error
    })

      .then(function (response) {
        // handle success
        console.log(response.data);
        if (response.data.status === "success") {
          Navigate("/login")
        }

        else {
          seterror(response.data.status);
          // alert("please enter you data");
        }

        if (response.data.status === " ") {
          // seterror(response.data.status);
          alert("please enter you data");
        }

        if (response.data.status === "check your email") {
          seterror(response.data.status);
          alert("check your password");
        }

        if (response.data.status === "check your password") {
          seterror(response.data.status);
          alert("check your password");
        }

        if (response.data.status === "user already registered") {
          alert("user already regiaster");
        }

      })

      .catch(function (error) {
        console.log(error);
      })

  }


  return (
    <>


    

      <div class="section">
        <div class="container">
          <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
              <div class="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up  </span></h6>
                <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                <label for="reg-log"></label>
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="section text-white text-center">
                          <h4 class="mb-4 pb-3">Log In</h4>
                          <div class="form-group">
                            <input type="email" name="logemail" class="form-style" onChange={(e) => { setemail(e.target.value) }} placeholder="Enter Your Email" id="logemail" autocomplete="off" />
                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input type="password" name="logpass" class="form-style" onChange={(e) => { setpassword(e.target.value) }} placeholder="Enter Your Password" id="logpass" autocomplete="off" />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <Link onClick={btnhandler}>
                          <a href="#" class="btn mt-4">submit</a>
                          </Link>
                          <p class="mb-0 mt-4 text-center " ><a href="#0" class="link text-white">Forgot your password?</a></p>
                        </div>
                      </div>
                    </div>

                    {/* // register // */}

                    <div class="card-back">
                      <div class="center-wrap">
                        <div class="section text-center text-white">
                          <h4 class="mb-4 pb-3">Sign Up</h4>
                          <div class="form-group">
                            <input type="text" name="logname" class="form-style"  onChange={(e) => { setname(e.target.value) }} placeholder="Enter Your Full Name" id="logname" autocomplete="off" />
                            <i class="input-icon uil uil-user"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input type="email" name="logemail" class="form-style" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Your Email" id="logemail" autocomplete="off" />
                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input type="password" name="logpass" class="form-style" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter Your Password" id="logpass" autocomplete="off" />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input type="password" name="logpass" class="form-style" onChange={(e) => { setconformpassword(e.target.value) }} placeholder="Re-Enter Your Password" id="logpass" autocomplete="off" />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                        </div>
                          <a href="#" class="btn mt-4" onClick={btnregister} >submit</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt immg" data-tilt>

            </div>

            <form className="login100-form validate-form">
              <span className="login100-form-title fw-bold">
                Member Login
              </span>

              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input
                  type="email"
                  className="input100 mt-1"
                  onChange={(e) => { setemail(e.target.value) }}
                  placeholder="Email"
                  id='email'
                  name='email'
                  autoComplete="email"
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <MdOutlineEmail />
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input
                  type="password"
                  onChange={(e) => { setpassword(e.target.value) }}
                  className="input100 mt-1"
                  placeholder="Password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <BsShieldLockFill />
                </span>
              </div>

              <div className="container-login100-form-btn">

                <Link onClick={btnhandler} >
                  <button type="submit" className="login100-form-btn">
                    Login
                  </button>
                </Link>

                {/* <button className="login100-form-btn">
                  Login
                </button> */}
      {/* </div>

              <div className="text-center pt-5">
                <Link to="/forgetpassword">
                  <span className="txt1">
                    Forgot
                  </span>
                  <a className="ps-2" href="#">
                    Username / Password?
                  </a>
                </Link>
              </div>

              <div className="text-center pt-5">
                <Link to="/signup">
                  <a className='fw-bold' href="#">
                    You don't have register?
                    <CgArrowLongRight className='ms-3' />
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </>
  )
}




export default Login;