import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './FooterC';

const Login = () => {
   const navigate = useNavigate();
   const [user, setUser] = useState({
      email: "",
      password: ""
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8000/Login", user)
         .then((res) => {
            alert("Successfully logged in");
            localStorage.setItem("user", JSON.stringify(res.data));
            const isLoggedIn = JSON.parse(localStorage.getItem("user"));
            const { userType } = isLoggedIn;

            switch (userType) {
               case "Admin":
                  navigate("/AdminHome");
                  break;
               case "Ordinary":
                  navigate("/HomePage");
                  break;
               case "Agent":
                  navigate("/AgentHome");
                  break;
               default:
                  navigate("/Login");
                  break;
            }
         })
         .catch((err) => {
            if (err.response && err.response.status === 401) {
               alert("User doesn't exist");
            }
            navigate("/Login");
         });
   };

   return (
      <>
         {/* Navbar */}
         <Navbar style={{ backgroundColor: "#0d9488" }} variant="dark">
            <Container>
               <Navbar.Brand style={{ fontWeight: "600" }}>
                  ResolveNow
               </Navbar.Brand>
               <ul className="navbar-nav">
                  <li className="nav-item mb-2">
                     <Link to={'/'} className="nav-link text-light">
                        Home
                     </Link>
                  </li>
                  <li className="nav-item mb-2">
                     <Link to={'/signup'} className="nav-link text-light">
                        SignUp
                     </Link>
                  </li>
                  <li className="nav-item mb-2">
                     <Link to={'/login'} className="nav-link text-light">
                        Login
                     </Link>
                  </li>
               </ul>
            </Container>
         </Navbar>

         {/* Login Section */}
         <section
            className="vh-100"
            style={{
               background: "linear-gradient(135deg, #ccfbf1, #f0fdfa)"
            }}
         >
            <div className="container py-5 h-100">
               <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                     <div
                        className="card text-dark"
                        style={{
                           borderRadius: "14px",
                           boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                           borderTop: "5px solid #0d9488"
                        }}
                     >
                        <div className="card-body p-5 text-center">
                           <div className="mb-md-5 mt-md-4 pb-5">
                              <h2
                                 className="fw-bold mb-4"
                                 style={{ color: "#0d9488" }}
                              >
                                 Login to ResolveNow
                              </h2>
                              <p className="text-muted mb-5">
                                 Enter your credentials to continue
                              </p>

                            <form onSubmit={handleSubmit}>
   <div className="mb-4 text-start">
      <label className="form-label fw-semibold">
         Email
      </label>
      <input
         type="email"
         name="email"
         value={user.email}
         onChange={handleChange}
         className="form-control form-control-lg"
         placeholder="Enter your email"
         required
      />
   </div>

   <div className="mb-4 text-start">
      <label className="form-label fw-semibold">
         Password
      </label>
      <input
         type="password"
         name="password"
         value={user.password}
         onChange={handleChange}
         className="form-control form-control-lg"
         placeholder="Enter your password"
         autoComplete="off"
         required
      />
   </div>

   <button
      className="btn btn-lg w-100"
      type="submit"
      style={{
         backgroundColor: "#0d9488",
         color: "white",
         borderRadius: "8px"
      }}
   >
      Login
   </button>
</form>

                           </div>

                           <div>
                              <p className="mb-0">
                                 Don't have an account?{" "}
                                 <Link to="/SignUp" style={{ color: "#0d9488", fontWeight: "500" }}>
                                    SignUp
                                 </Link>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </>
   );
};

export default Login;
