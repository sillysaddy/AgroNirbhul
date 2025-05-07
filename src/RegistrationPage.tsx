import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface RegistrationPageProps {
  onRegisterSuccess: () => void;
}

const RegistrationPage: React.FC<RegistrationPageProps> = ({ onRegisterSuccess }) => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your form validation and actual registration logic here
    // For now, just call the success handler
    onRegisterSuccess();
  };

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary min-vh-100">
      <main className="form-register w-100 m-auto p-4" style={{ maxWidth: '520px' }}>
        <form onSubmit={handleSubmit} className="card p-4 p-md-5 shadow-sm rounded-4 border-0">
          <div className="text-center mb-4">
            <Link className="navbar-brand d-flex align-items-center justify-content-center text-decoration-none" to="/">
              <img src="/agronirbhul.png" alt="AgroNirbhul Logo" style={{ height: '50px', marginRight: '10px' }} />
              <span className="text-success fw-bold fs-2 d-none d-sm-inline">AgroNirbhul</span>
            </Link>
            <h1 className="h3 mb-3 fw-semibold mt-3">Create Your Account</h1>
            <p className="text-muted">Join our community of innovative farmers.</p>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control rounded-3"
              id="floatingFullName"
              placeholder="Full Name"
              required
            />
            <label htmlFor="floatingFullName">
              <i className="bi bi-person-fill me-2 text-success"></i>Full Name
            </label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control rounded-3"
              id="floatingInputEmail"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="floatingInputEmail">
              <i className="bi bi-envelope-fill me-2 text-success"></i>Email address
            </label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="tel"
              className="form-control rounded-3"
              id="floatingPhoneNumber"
              placeholder="Phone Number (Optional)"
            />
            <label htmlFor="floatingPhoneNumber">
              <i className="bi bi-telephone-fill me-2 text-success"></i>Phone Number (Optional)
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

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control rounded-3"
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
              required
            />
            <label htmlFor="floatingConfirmPassword">
              <i className="bi bi-shield-lock-fill me-2 text-success"></i>Confirm Password
            </label>
          </div>

          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckTerms" required />
            <label className="form-check-label small" htmlFor="flexCheckTerms">
              I agree to the <a href="#terms" className="text-success text-decoration-none">Terms of Service</a> and <a href="#privacy" className="text-success text-decoration-none">Privacy Policy</a>.
            </label>
          </div>

          <button className="btn btn-success w-100 py-2 rounded-pill btn-lg" type="submit">
            <i className="bi bi-person-plus-fill me-2"></i>Register
          </button>

          <hr className="my-4" />

          <p className="text-center text-muted small mb-0">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-success text-decoration-none p-0 align-baseline"
            >
              Login here
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

export default RegistrationPage;