import React, { useState } from "react";
import { Button, Modal, Form, FormGroup } from "react-bootstrap";
import whole from "./whole.png";
import "./Cards.css";
import FmdBadIcon from "@mui/icons-material/FmdBad";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import EditIcon from "@mui/icons-material/Edit";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import ShareIcon from "@mui/icons-material/Share";

function Cards() {
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
    <div>
      <div>
        <div class="container">
          <div class="row">
            <div class="col-9 posts-center position-relative">
              <div class="card mt-lg-5">
                <img
                  src="https://dont-copy.netlify.app/assets/nature-rDsfVg8l.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h3 class="card-title">Article</h3>
                  <div className="d-flex gap-2 justify-content-between">
                    <h5>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </h5>

                    <button
                      class=" btn btn-primary btn-sm dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Actions
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a class=" btn btn-success dropdown-item" href="#">
                          Share
                        </a>
                      </li>
                      <li>
                        <a class=" btn btn-danger dropdown-item" href="#">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>

                  <p class="card-text">
                    lorem ipsum.sadadqwdwqdffnfdwqdwdqwdqw
                  </p>
                </div>
                <br />
                <div class="card-footer">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-between gap-3">
                      <img
                        className="rounded-circle"
                        width="48"
                        height="48"
                        src="https://media.licdn.com/dms/image/D4D03AQHkpwc0EJA4OQ/profile-displayphoto-shrink_800_800/0/1689261810543?e=1714003200&v=beta&t=b_rZXjV8kh-4fvYDWvQm1tkaPJXmJWr3kj48l5PH8Gw"
                        alt="Image"
                      />
                      <h6>Zeya Mustafa</h6>
                    </div>
                    <div className="btn">
                      <ShareIcon />
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-5">
                <img
                  src="https://dont-copy.netlify.app/assets/wood-SIbopgrg.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h3 class="card-title">Article</h3>
                  <div className="d-flex gap-2 justify-content-between">
                    <h5>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </h5>

                    <button
                      class=" btn btn-primary btn-sm dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Actions
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a class=" btn btn-success dropdown-item" href="#">
                          Share
                        </a>
                      </li>
                      <li>
                        <a class=" btn btn-danger dropdown-item" href="#">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>

                  <p class="card-text">
                    lorem ipsum.sadadqwdwqdffnfdwqdwdqwdqw
                  </p>
                </div>
                <br />
                <div class="card-footer">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-between gap-3">
                      <img
                        className="rounded-circle"
                        width="48"
                        height="48"
                        src="https://media.licdn.com/dms/image/D4D03AQHkpwc0EJA4OQ/profile-displayphoto-shrink_800_800/0/1689261810543?e=1714003200&v=beta&t=b_rZXjV8kh-4fvYDWvQm1tkaPJXmJWr3kj48l5PH8Gw"
                        alt="Image"
                      />
                      <h6>Zeya Mustafa</h6>
                    </div>
                    <div className="btn">
                      <ShareIcon />
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mt-5">
                <img
                  src="https://dont-copy.netlify.app/assets/car-kZ9O3U5Q.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h3 class="card-title">Article</h3>
                  <div className="d-flex gap-2 justify-content-between">
                    <h5>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </h5>

                    <button
                      class=" btn btn-primary btn-sm dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Actions
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a class=" btn btn-success dropdown-item" href="#">
                          Share
                        </a>
                      </li>
                      <li>
                        <a class=" btn btn-danger dropdown-item" href="#">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>

                  <p class="card-text">
                    lorem ipsum.sadadqwdwqdffnfdwqdwdqwdqw
                  </p>
                </div>
                <br />
                <div class="card-footer">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-between gap-3">
                      <img
                        className="rounded-circle"
                        width="48"
                        height="48"
                        src="https://media.licdn.com/dms/image/D4D03AQHkpwc0EJA4OQ/profile-displayphoto-shrink_800_800/0/1689261810543?e=1714003200&v=beta&t=b_rZXjV8kh-4fvYDWvQm1tkaPJXmJWr3kj48l5PH8Gw"
                        alt="Image"
                      />
                      <h6>Zeya Mustafa</h6>
                    </div>
                    <div className="btn">
                      <ShareIcon />
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mt-5">
                <div class="card-body">
                  <h3 class="card-title">Article</h3>
                  <div className="d-flex gap-2 justify-content-between">
                    <h5>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </h5>

                    <button
                      class=" btn btn-primary btn-sm dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Actions
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a class=" btn btn-success dropdown-item" href="#">
                          Share
                        </a>
                      </li>
                      <li>
                        <a class=" btn btn-danger dropdown-item" href="#">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>

                  <p class="card-text">
                    lorem ipsum.sadadqwdwqdffnfdwqdwdqwdqw
                  </p>
                </div>
                <br />
                <div class="card-footer">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-between gap-3">
                      <img
                        className="rounded-circle"
                        width="48"
                        height="48"
                        src="https://media.licdn.com/dms/image/D4D03AQHkpwc0EJA4OQ/profile-displayphoto-shrink_800_800/0/1689261810543?e=1714003200&v=beta&t=b_rZXjV8kh-4fvYDWvQm1tkaPJXmJWr3kj48l5PH8Gw"
                        alt="Image"
                      />
                      <h6>Zeya Mustafa</h6>
                    </div>
                    <div className="btn">
                      <ShareIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3 mt-5">
              <div className="container d-none d-lg-flex flex-column mt-4 ">
                <div className="d-flex d-none d-lg-block justify-content-between">
                  <div className="d-flex align-items-center">
                    <AddLocationAltIcon fontSize="medium" />
                    <input
                      type="text"
                      placeholder="Enter Your Location"
                      className="Form.Control-text"
                    />
                    <button className="btn">
                      <img
                        src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-edit-24px'%20clip-path='url(%23clip0_1_848)'%3e%3cpath%20id='Vector'%20d='M2.5%2014.375V17.5H5.625L14.8417%208.28334L11.7167%205.15834L2.5%2014.375ZM17.2583%205.86667C17.5833%205.54167%2017.5833%205.01667%2017.2583%204.69167L15.3083%202.74167C14.9833%202.41667%2014.4583%202.41667%2014.1333%202.74167L12.6083%204.26667L15.7333%207.39167L17.2583%205.86667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_848'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                        alt="Edit"
                      />
                    </button>
                  </div>
                </div>
                <hr className="my-1" />

                <div className="d-flex align-items-start gap-2 mb-4 mt-4">
                  <div className="d-flex align-item-top">
                    <FmdBadIcon fontSize="medium" />
                  </div>
                  <p className="location_info">
                    Add Location to Get Precise Results
                  </p>
                </div>

                <div className="d-flex align-items-center gap-2 text-capitalize mb-3 mt-5">
                  <div>
                    <ThumbUpIcon fontSize="medium" />
                  </div>
                  <p className="mt-2 p-1">RECOMMENDED GROUPS</p>
                </div>

                <div className="d-flex flex-column gap-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <img className="rounded-circle" src="" alt="Pic" />
                      <div className="text-wrapper">Zeya</div>
                    </div>
                    <a className="btn follow rounded-5" href="/">
                      Follow
                    </a>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <img className="rounded-circle" alt="Pic" />
                      <div className="text-wrapper">Mustafa</div>
                    </div>
                    <a className="btn follow rounded-5" href="/">
                      Follow
                    </a>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <img className="rounded-circle" alt="Pic" />
                      <div className="text-wrapper">Mohammad</div>
                    </div>
                    <a className="btn follow rounded-5" href="/">
                      Follow
                    </a>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <img className="rounded-circle" alt="Pic" />
                      <div className="text-wrapper">Zain</div>
                    </div>
                    <a className="btn follow rounded-5" href="/">
                      Follow
                    </a>
                  </div>
                </div>
              </div>

              <div className="android_modal fixed-bottom d-lg-none">
                <button
                  className=" rounded-circle btn btn-dark"
                  onClick={handleSignupShow}
                >
                  <EditIcon fontSize="large" variant="contained" />
                </button>
              </div>
            </div>
          </div>

          {/* Signup Modal (bottom-aligned on small devices) */}
          {/* Signup Modal */}
          <Modal
            show={showSignupModal}
            onHide={handleSignupClose}
            centered
            className="modal fade d-lg-none"
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
                <button
                  className="btn btn-primary ms-3"
                  onClick={changeToLogin}
                >
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
                  <Form.Control
                    type="email"
                    id="email"
                    placeholder="Enter email"
                  />
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
                <Button
                  className="create_button"
                  variant="primary"
                  type="submit"
                >
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
            className="modal fade d-lg-none"
            id="exampleModal"
            aria-labelledby="exampleModalLabel"
          >
            <Modal.Header closeButton>
              <Modal.Title className="d-flex align-item-center align-content-center ">
                Welcome Back
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
                  <Form.Control
                    type="email"
                    id="email"
                    placeholder="Enter email"
                  />
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
      </div>
    </div>
  );
}

export default Cards;
