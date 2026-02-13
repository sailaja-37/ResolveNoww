import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './FooterC'

const SignUp = () => {

   const [title, setTitle] = useState("Select User")
   const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
      phone: "",
      userType: ""
   })

   const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value })
   }

   const handleTitle = (select) => {
      setTitle(select)
      setUser({ ...user, userType: select });
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      const updatedUser = { ...user, userType: title };

      axios.post("http://localhost:8000/SignUp", updatedUser)
         .then((res) => {
            alert("Record submitted")
         })
         .catch((err) => {
            console.log(err)
         })

      setUser({
         name: "",
         email: "",
         password: "",
         phone: "",
         userType: ""
      })
   }

   return (
      <>
         {/* Navbar */}
         <Navbar style={{ backgroundColor: "#0d9488" }} variant="dark">
            <Container>
               <Navbar.Brand>ResolveNow</Navbar.Brand>
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <Link to="/" className="nav-link text-light">Home</Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/login" className="nav-link text-light">Login</Link>
                  </li>
               </ul>
            </Container>
         </Navbar>

         {/* Signup Section */}
         <div
            className="auth-container"
            style={{
               minHeight: "100vh",
               background: "linear-gradient(135deg, #ccfbf1, #f0fdfa)",
               display: "flex",
               justifyContent: "center",
               alignItems: "center"
            }}
         >
            <div
               className="auth-card small-auth card p-4"
               style={{
                  borderRadius: "14px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  borderTop: "5px solid #0d9488",
                  width: "100%",
                  maxWidth: "400px"
               }}
            >

               <h3
                  className="text-center mb-3 fw-bold"
                  style={{
                     color: "#0d9488",
                     letterSpacing: "0.5px"
                  }}
               >
                  Create Account
               </h3>

               <form onSubmit={handleSubmit}>

                  <div className="mb-2">
                     <label className="form-label small">Full Name</label>
                     <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        className="form-control form-control-sm"
                        required
                     />
                  </div>

                  <div className="mb-2">
                     <label className="form-label small">Email</label>
                     <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className="form-control form-control-sm"
                        required
                     />
                  </div>

                  <div className="mb-2">
                     <label className="form-label small">Password</label>
                     <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        className="form-control form-control-sm"
                        required
                     />
                  </div>

                  <div className="mb-2">
                     <label className="form-label small">Mobile</label>
                     <input
                        type="text"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        className="form-control form-control-sm"
                        required
                     />
                  </div>

                  <div className="mb-3 text-center">
                     <Dropdown>
                        <Dropdown.Toggle
                           size="sm"
                           style={{
                              borderColor: "#0d9488",
                              color: "white"
                           }}
                        >
                           {title}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                           <Dropdown.Item onClick={() => handleTitle("Ordinary")}>Ordinary</Dropdown.Item>
                           <Dropdown.Item onClick={() => handleTitle("Admin")}>Admin</Dropdown.Item>
                           <Dropdown.Item onClick={() => handleTitle("Agent")}>Agent</Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
                  </div>

                  <button
                     type="submit"
                     className="btn w-100 btn-sm"
                     style={{
                        backgroundColor: "#0d9488",
                        color: "white",
                        borderRadius: "8px"
                     }}
                  >
                     Register
                  </button>

               </form>

               <p className="text-center mt-3 small">
                  Already have account?{" "}
                  <Link to="/Login" style={{ color: "#0d9488", fontWeight: "500" }}>
                     Login
                  </Link>
               </p>

            </div>
         </div>

         <Footer />
      </>
   )
}

export default SignUp
