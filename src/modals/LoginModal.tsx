const LoginModal = () => (
    <div className="modal fade" id="modallogin" tabIndex={-1} aria-modal={true} role="dialog">
      <div
        className="modal-dialog modal-fullscreen-md-down modal-md modal-dialog-centered"
        role="document"
      >
        <div className="modal-content p-4">
          <div className="modal-header mx-auto border-0">
            <h2 className="modal-title fs-3 fw-normal">Login</h2>
          </div>
          <div className="modal-body">
            <div className="login-detail">
              <div className="login-form p-0">
                <div className="col-lg-12 mx-auto">
                  <div id="login-form">
                    <input
                      type="text"
                      name="username"
                      placeholder="Username or Email Address *"
                      className="mb-3 ps-3 text-input"
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="ps-3 text-input"
                    />
                    <div className="checkbox d-flex justify-content-between mt-4">
                      <p className="checkbox-form">
                        <label>
                          <input
                            name="rememberme"
                            type="checkbox"
                            id="remember-me"
                            value="forever"
                          />{' '}
                          Remember me
                        </label>
                      </p>
                      <p className="lost-password">
                        <a href="#">Forgot your password?</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer mt-5 d-flex justify-content-center">
                <button type="button" className="btn btn-red hvr-sweep-to-right dark-sweep">
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-outline-gray hvr-sweep-to-right dark-sweep"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default LoginModal;