import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./Header.css";
import whole from "./whole.png";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

function Header() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [visible, setVisibility] = useState(false);

  const handleSignupClose = () => setShowSignupModal(false);
  const handleSignupShow = () => setShowSignupModal(true);

  const handleLoginClose = () => setShowLoginModal(false);
  const handleLoginShow = () => setShowLoginModal(true);

  const changeToSignUp = () => {
    setShowSignupModal(true);
    setShowLoginModal(false);
  };

  const changeToLogin = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
  };

  const handleVisibility = (e) => {
    e.preventDefault();
    setVisibility(!visible);
  };

  return (
    <div className="d-lg-block d-md-none">
      <div className="container d-none d-lg-flex align-items-center justify-content-between p-3">
        <a href="/">
          <img src={whole} alt="ATG" />
        </a>

        <div className="search">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />
          </form>
        </div>

        <div className="create">
          <div className="d-flex align-items-center gap-1">
            <button
              className="btn custom-btn-create p-0 m-0"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={handleSignupShow}
            >
              Create Account.
              <span className="text-primary fw-bold"> It's Free </span>
            </button>
            <span>OR</span>
            <button
              className="btn custom-btn-create p-0 m-0 btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={handleLoginShow}
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      <Modal
        show={showSignupModal}
        onHide={handleSignupClose}
        centered
        className="modal fade d-none d-lg-block"
        id="staticBackdrop"
        data-bs-backdrop="static"
        aria-labelledby="staticBackdropLabel"
      >
        <Modal.Header closeButton>
          <Modal.Title className="d-flex align-item-center align-content-center ">
            Create Account
            <div>
              <h4 className="ms-3 mt-1">Or</h4>
            </div>
            <button className="btn btn-primary ms-3" onClick={changeToLogin}>
              Login
            </button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="firstName">First Name</Form.Label>
              <Form.Control
                type="text"
                id="firstName"
                placeholder="Enter first name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="lastName">Last Name</Form.Label>
              <Form.Control
                type="text"
                id="lastName"
                placeholder="Enter last name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control type="email" id="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type={visible ? "text" : "password"}
                id="password"
                placeholder="Enter password"
              ></Form.Control>

              <button
                className={
                  visible
                    ? "btn btn-outline-info mt-3"
                    : "btn btn-outline-success mt-3"
                }
                onClick={handleVisibility}
              >
                Show Password
              </button>
            </Form.Group>
            <Button className="create_button" variant="primary" type="submit">
              Create Account
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Login Modal */}
      <Modal
        show={showLoginModal}
        onHide={handleLoginClose}
        centered
        className="modal fade d-none d-lg-block"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
      >
        <Modal.Header closeButton>
          <Modal.Title className="d-flex align-item-center align-content-center ">
            Login
            <div>
              <h4 className="ms-3 mt-1">Or</h4>
            </div>
            <button
              className="btn btn-primary ms-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={changeToSignUp}
            >
              Signup
            </button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control type="email" id="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                placeholder="Enter password"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="social-login-buttons">
                <GoogleLogin />
                <br />
                <FacebookLogin />
              </div>
            </Form.Group>

            <Button variant="primary" type="submit">
              Log In
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Header;
