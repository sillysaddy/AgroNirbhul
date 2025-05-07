import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLoginSuccess();
  };

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary min-vh-100">
      <main className="form-signin w-100 m-auto p-4" style={{ maxWidth: '420px' }}>
        <form onSubmit={handleSubmit} className="card p-4 p-md-5 shadow-sm rounded-4 border-0">
          <div className="text-center mb-4">
            <Link className="navbar-brand d-flex align-items-center justify-content-center text-decoration-none" to="/">
              <img src="/agronirbhul.png" alt="AgroNirbhul Logo" style={{ height: '50px', marginRight: '10px' }} />
              <span className="text-success fw-bold fs-2 d-none d-sm-inline">AgroNirbhul</span>
            </Link>
            <h1 className="h3 mb-3 fw-semibold mt-3">Welcome Back!</h1>
            <p className="text-muted">Login to access your dashboard.</p>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control rounded-3"
              id="floatingInputIdentifier"
              placeholder="Email or Phone (+880...)"
              required
            />
            <label htmlFor="floatingInputIdentifier">
              <i className="bi bi-envelope-fill me-2 text-success"></i>Email or Phone
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control rounded-3"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label htmlFor="floatingPassword">
              <i className="bi bi-lock-fill me-2 text-success"></i>Password
            </label>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckRemember" />
              <label className="form-check-label small" htmlFor="flexCheckRemember">
                Remember me
              </label>
            </div>
            <a href="#" className="small text-success text-decoration-none">Forgot password?</a>
          </div>

          <button className="btn btn-success w-100 py-2 rounded-pill btn-lg" type="submit">
            <i className="bi bi-box-arrow-in-right me-2"></i>Sign in
          </button>

          <hr className="my-4" />

          <p className="text-center text-muted small mb-0">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="text-success text-decoration-none p-0 align-baseline"
            >
              Register here
            </Link>
          </p>
        </form>
        <p className="mt-4 mb-3 text-body-secondary text-center small">
          &copy; {new Date().getFullYear()} AgroNirbhul
        </p>
      </main>
    </div>
  );
};

export default LoginPage;