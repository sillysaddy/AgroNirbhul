import React from 'react';
import { Link } from 'react-router-dom';

interface DashboardPageProps {
  userName?: string;
  onLogout: () => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ userName = "User", onLogout }) => {
  // Placeholder data for dashboard cards
  const stats = [
    { title: "Active Alerts", value: "3", icon: "bi-exclamation-triangle-fill", color: "warning" },
    { title: "Fields Monitored", value: "12", icon: "bi-map-fill", color: "info" },
    { title: "Healthy Crops", value: "95%", icon: "bi-patch-check-fill", color: "success" },
    { title: "Reports Generated", value: "27", icon: "bi-file-earmark-text-fill", color: "primary" },
  ];

  const recentActivities = [
    { text: "New disease alert for 'Field Alpha'", time: "10 mins ago", icon: "bi-bug-fill text-danger" },
    { text: "Treatment applied to 'Field Gamma'", time: "2 hours ago", icon: "bi-eyedropper text-info" },
    { text: "Scheduled scan for 'Field Beta' completed", time: "Yesterday", icon: "bi-calendar-check-fill text-success" },
  ];

  return (
    <div className="d-flex bg-body-tertiary" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <nav className="d-flex flex-column flex-shrink-0 p-3 text-bg-success shadow" style={{ width: '280px' }}>
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <img src="/agronirbhul.png" alt="AgroNirbhul Logo" style={{ height: '30px', marginRight: '8px' }} />
          <span className="fs-4 fw-bold">AgroNirbhul</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link active text-white" aria-current="page">
              <i className="bi bi-speedometer2 me-2"></i>Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/detect" className="nav-link text-white">
              <i className="bi bi-camera-fill me-2"></i>Disease Detection
            </Link>
          </li>
          <li>
            <Link to="/dashboard/fields" className="nav-link text-white">
              <i className="bi bi-card-list me-2"></i>My Fields
            </Link>
          </li>
          <li>
            <Link to="/dashboard/alerts" className="nav-link text-white">
              <i className="bi bi-bell-fill me-2"></i>Alerts <span className="badge bg-danger rounded-pill ms-1">3</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/reports" className="nav-link text-white">
              <i className="bi bi-graph-up-arrow me-2"></i>Reports
            </Link>
          </li>
          <li>
            <Link to="/dashboard/tools" className="nav-link text-white">
              <i className="bi bi-tools me-2"></i>Tools & Resources
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://via.placeholder.com/32/ffffff/000000?text=U" alt={userName} width="32" height="32" className="rounded-circle me-2" />
            <strong>{userName}</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><Link className="dropdown-item" to="/dashboard/profile"><i className="bi bi-person-circle me-2"></i>Profile</Link></li>
            <li><Link className="dropdown-item" to="/dashboard/settings"><i className="bi bi-gear-fill me-2"></i>Settings</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <button className="dropdown-item" onClick={onLogout}>
                <i className="bi bi-box-arrow-right me-2"></i>Sign out
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow-1 p-4 overflow-auto">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2 fw-bold">Dashboard Overview</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <Link to="/dashboard/fields/new" className="btn btn-sm btn-outline-light rounded-pill">
              <i className="bi bi-plus-circle-fill me-1"></i> Add New Field
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="row g-4 mb-4">
          {stats.map(stat => (
            <div className="col-md-6 col-xl-3" key={stat.title}>
              <div className={`card text-bg-${stat.color} shadow-sm rounded-4 border-0 h-100 hover-shadow-lg transition-fast`}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title mb-0">{stat.title}</h5>
                    <i className={`${stat.icon} fs-2 opacity-75`}></i>
                  </div>
                  <p className="card-text fs-1 fw-bolder mt-2">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity & Quick Actions */}
        <div className="row g-4">
          <div className="col-lg-7">
            <div className="card shadow-sm rounded-4 border-0">
              <div className="card-header bg-white border-bottom-0 rounded-top-4 pt-3">
                <h5 className="card-title fw-semibold"><i className="bi bi-clock-history me-2 text-success"></i>Recent Activity</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {recentActivities.map(activity => (
                    <li className="list-group-item d-flex justify-content-between align-items-start py-3" key={activity.text}>
                      <div className="ms-2 me-auto">
                        <div className="fw-semibold"><i className={`${activity.icon} me-2`}></i>{activity.text}</div>
                      </div>
                      <span className="badge bg-light text-muted rounded-pill">{activity.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card shadow-sm rounded-4 border-0">
               <div className="card-header bg-white border-bottom-0 rounded-top-4 pt-3">
                <h5 className="card-title fw-semibold"><i className="bi bi-lightning-charge-fill me-2 text-success"></i>Quick Actions</h5>
              </div>
              <div className="card-body d-grid gap-2">
                <Link to="/dashboard/detect" className="btn btn-outline-success btn-lg"><i className="bi bi-camera-fill me-2"></i>Upload New Image</Link>
                <Link to="/dashboard/scan/schedule" className="btn btn-outline-primary btn-lg"><i className="bi bi-calendar-plus-fill me-2"></i>Schedule Scan</Link>
                <Link to="/dashboard/support" className="btn btn-outline-info btn-lg"><i className="bi bi-chat-left-text-fill me-2"></i>Get Support</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;