import React from 'react';
import { Link } from 'react-router-dom';

const InvestorPage: React.FC = () => {
  const appName = "AgroNirbhul"; // Use your app's name

  // Placeholder for team members - replace with actual data
  const teamMembers = [
    { name: "Dr. Aisha Rahman", role: "Founder & CEO", expertise: "PhD in Agricultural Science, 15+ years in AgTech innovation.", image: "https://via.placeholder.com/150/28a745/ffffff?Text=Team+A" },
    { name: "Mr. Kamal Ahmed", role: "Lead AI Engineer", expertise: "MSc in Computer Science, specialization in Deep Learning & CV.", image: "https://via.placeholder.com/150/0dcaf0/ffffff?Text=Team+B" },
    { name: "Ms. Fatima Chowdhury", role: "Agronomy Specialist", expertise: "BSc in Agronomy, extensive field experience with Bangladeshi crops.", image: "https://via.placeholder.com/150/ffc107/000000?Text=Team+C" },
    { name: "Mr. David Lee", role: "Operations & Partnerships Lead", expertise: "MBA, proven track record in scaling startups in emerging markets.", image: "https://via.placeholder.com/150/6f42c1/ffffff?Text=Team+D" }
  ];

  const renderSource = (id: string | number) => <sup className="text-muted small ms-1">[{id}]</sup>;

  return (
    <div className="bg-body-tertiary">
      {/* Consistent Header */}
      <header className="navbar navbar-expand-lg bg-white shadow-sm sticky-top py-3">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center text-decoration-none" to="/">
            <img src="/agronirbhul.png" alt="AgroNirbhul Logo" style={{ height: '40px', marginRight: '10px' }} />
            <span className="text-success fw-bold fs-3 d-none d-sm-inline">{appName}</span>
          </Link>
          <div className="ms-auto">
            <Link className="btn btn-outline-success me-2 rounded-pill px-4" to="/login">Login</Link>
            <Link className="btn btn-success rounded-pill px-4" to="/register">Register</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="py-5 py-lg-6 text-white d-flex align-items-center"
        style={{
          background: 'linear-gradient(rgba(0, 87, 39, 0.7), rgba(0, 0, 0, 0.8)), url("https://via.placeholder.com/1920x800/28a745/ffffff?Text=Tech+Meets+Agriculture+Hero") center center / cover no-repeat',
          minHeight: '70vh',
        }}
      >
        <div className="container text-center">
          <h1 className="display-3 fw-bolder mb-3 animate-fade-in-down">Unlock Significant Growth and Impact in a Vital Market</h1>
          <p className="lead fs-4 mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Invest in <strong>{appName}</strong>: An AI-Powered Solution Revolutionizing Crop Health for Millions of Bangladeshi Farmers.
          </p>
          <Link to="#contact" className="btn btn-light btn-lg rounded-pill px-5 py-3 shadow-lg animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <i className="bi bi-briefcase-fill me-2"></i>Request Full Pitch Deck
          </Link>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="container py-5">
        {/* Section 1: Executive Summary & The Opportunity */}
        <section id="opportunity" className="mb-5 py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img src="https://via.placeholder.com/600x400/28a745/ffffff?Text=Opportunity+Visual" alt="Agricultural Opportunity" className="img-fluid rounded-4 shadow-lg hover-lift" />
            </div>
            <div className="col-lg-6">
              <h2 className="display-6 fw-bold text-success-emphasis mb-3">Executive Summary & The Opportunity</h2>
              <p className="text-muted">
                Bangladesh's agricultural sector, the backbone of its economy, faces a persistent and costly challenge: crop losses due to pests and diseases, averaging 10-25% annually and exacerbated by climate change.{renderSource(5)}{renderSource(6)}{renderSource(84)} Existing solutions, heavily reliant on chemical pesticides and often lacking timely accuracy, fail to adequately address this problem, leading to significant economic, health, and environmental costs.{renderSource(18)}{renderSource(318)}
              </p>
              <p className="text-muted">
                <strong>{appName}</strong> presents a transformative opportunity. We are deploying an accessible, AI-driven mobile platform providing rapid, accurate pest and disease diagnosis and localized management advice to millions of smallholder farmers. This solution directly addresses a critical pain point, offering a clear path to increased yields, reduced costs, and improved farmer livelihoods.
              </p>
              <p className="text-muted">
                We offer a scalable SaaS business model with multiple revenue streams, targeting a massive and underserved market. Investing in <strong>{appName}</strong> is an opportunity to achieve significant financial returns while driving substantial positive social and environmental impact, directly aligning with national development goals for a "Smart Bangladesh."{renderSource(167)}{renderSource(260)}
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: The Market: Scale and Need */}
        <section id="market" className="mb-5 py-4 bg-light rounded-4 shadow-sm p-4 p-lg-5">
          <h2 className="display-6 fw-bold text-center text-success-emphasis mb-5">The Market: Scale and Need</h2>
          {/* Placeholder for Infographic/Charts */}
          <div className="text-center mb-4">
            <img src="https://via.placeholder.com/800x300/0dcaf0/ffffff?Text=Market+Size+Infographic" alt="Market Size Infographic" className="img-fluid rounded-3 shadow" />
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body">
                  <h5 className="card-title text-success fw-semibold"><i className="bi bi-pie-chart-fill me-2"></i>Vital Sector</h5>
                  <p className="card-text text-muted small">Agriculture contributes significantly to Bangladesh's GDP (11-21%) and employs a large percentage of the workforce (39-48%).{renderSource(150)}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body">
                  <h5 className="card-title text-success fw-semibold"><i className="bi bi-people-fill me-2"></i>Vast User Base</h5>
                  <p className="card-text text-muted small">Approximately 15-16.5 million farm holdings, primarily smallholders cultivating less than one hectare.{renderSource(151)}{renderSource(173)}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body">
                  <h5 className="card-title text-danger fw-semibold"><i className="bi bi-bug-fill me-2"></i>Critical Problem</h5>
                  <p className="card-text text-muted small">Average annual crop losses of 10-25% due to pests and diseases represent a major economic drain. Outbreaks can lead to losses exceeding 60%.{renderSource(5)}{renderSource(6)}{renderSource(241)}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body">
                  <h5 className="card-title text-warning fw-semibold"><i className="bi bi-cash-coin me-2"></i>High Costs</h5>
                  <p className="card-text text-muted small">Farmers incur significant costs on often ineffective pesticides.{renderSource(35)}</p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body">
                  <h5 className="card-title text-info fw-semibold"><i className="bi bi-phone-fill me-2"></i>Digital Readiness</h5>
                  <p className="card-text text-muted small">Increasing smartphone ownership (70.1% of households) and mobile usage create a fertile ground for digital solutions, though accessibility considerations are key.{renderSource(182)}{renderSource(179)}</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center mt-4 text-muted">The urgent need for effective, accessible pest and disease management, coupled with the scale of the agricultural sector and growing digital adoption, presents a substantial and immediate market opportunity for <strong>{appName}</strong>.</p>
        </section>

        {/* Section 3: Our Solution: AI-Powered Crop Health */}
        <section id="solution" className="mb-5 py-4">
          <h2 className="display-6 fw-bold text-center text-success-emphasis mb-5">Our Solution: AI-Powered Crop Health</h2>
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-lg-2">
              <img src="https://via.placeholder.com/600x450/28a745/ffffff?Text=App+Mockups" alt="App Mockups" className="img-fluid rounded-4 shadow-lg hover-lift" />
            </div>
            <div className="col-lg-6 order-lg-1">
              <p className="text-muted"><strong>{appName}</strong> is a mobile application leveraging cutting-edge Artificial Intelligence, specifically deep learning and image recognition technology.{renderSource(97)}</p>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex">
                  <i className="bi bi-camera-fill fs-4 text-success me-3"></i>
                  <span className="text-muted"><strong>Core Functionality:</strong> Farmers capture images of affected crops, which our AI analyzes in real-time to identify the specific pest or disease.{renderSource(98)}{renderSource(99)}</span>
                </li>
                <li className="mb-3 d-flex">
                  <i className="bi bi-translate fs-4 text-success me-3"></i>
                  <span className="text-muted"><strong>Localized Intelligence:</strong> Provides accurate diagnoses and actionable management recommendations tailored to Bangladeshi crops, pests, diseases, and local conditions, available in Bengali.{renderSource(111)}{renderSource(112)}</span>
                </li>
                <li className="mb-3 d-flex">
                  <i className="bi bi-lightbulb-fill fs-4 text-success me-3"></i>
                  <span className="text-muted"><strong>Actionable Advice:</strong> Focuses on promoting Integrated Pest Management (IPM) principles and sustainable practices, guiding farmers towards effective and environmentally friendly solutions.{renderSource(113)}{renderSource(114)}</span>
                </li>
                <li className="d-flex">
                  <i className="bi bi-universal-access fs-4 text-success me-3"></i>
                  <span className="text-muted"><strong>Accessible Design:</strong> Built with a simple, visual, and intuitive user interface, incorporating audio guidance and robust offline functionality to cater to users with varying digital literacy and connectivity.{renderSource(136)}{renderSource(138)}{renderSource(139)}{renderSource(141)}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Technology & Competitive Edge */}
        <section id="technology" className="mb-5 py-4 bg-light rounded-4 shadow-sm p-4 p-lg-5">
          <h2 className="display-6 fw-bold text-center text-success-emphasis mb-5">Technology & Competitive Edge</h2>
          <div className="text-center mb-4">
            {/* Placeholder for Icons */}
            <i className="bi bi-cpu-fill fs-1 text-success mx-3"></i>
            <i className="bi bi-cloud-fill fs-1 text-primary mx-3"></i>
            <i className="bi bi-database-fill-gear fs-1 text-info mx-3"></i>
            <i className="bi bi-shield-check fs-1 text-warning mx-3"></i>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
                <h5 className="text-success fw-semibold"><i className="bi bi-stars me-2"></i>Robust AI</h5>
                <p className="text-muted small">Utilizing state-of-the-art deep learning models and transfer learning techniques to achieve high diagnostic accuracy, even with potentially limited initial local datasets.{renderSource(121)}{renderSource(124)}{renderSource(126)}</p>
            </div>
            <div className="col-md-6">
                <h5 className="text-success fw-semibold"><i className="bi bi-hdd-stack-fill me-2"></i>Scalable Infrastructure</h5>
                <p className="text-muted small">Built on a robust cloud platform (AWS, Azure, or GCP) to ensure the system can efficiently handle a growing user base and data volume.{renderSource(132)}{renderSource(133)}{renderSource(134)}</p>
            </div>
            <div className="col-md-6">
                <h5 className="text-success fw-semibold"><i className="bi bi-geo-alt-fill me-2"></i>Hyper-Localization</h5>
                <p className="text-muted small">Our primary differentiator is the explicit focus on tailoring the technology and content to the specific needs and context of Bangladeshi agriculture and farmers.{renderSource(208)}{renderSource(209)}</p>
            </div>
            <div className="col-md-6">
                <h5 className="text-success fw-semibold"><i className="bi bi-person-video3 me-2"></i>Accessibility Focus</h5>
                <p className="text-muted small">Design choices prioritizing low literacy, offline functionality, and local language support provide a significant advantage in reaching the target demographic effectively.{renderSource(136)}{renderSource(141)}</p>
            </div>
             <div className="col-md-12">
                <h5 className="text-success fw-semibold"><i className="bi bi-people-fill me-2"></i>Partnership Integration</h5>
                <p className="text-muted small">Strategy to integrate with trusted local institutions (DAE, NGOs, cooperatives) for wider reach and adoption.{renderSource(281)}</p>
            </div>
          </div>
        </section>

        {/* Section 5: Business Model & Go-to-Market Strategy */}
        <section id="business-model" className="mb-5 py-4">
          <h2 className="display-6 fw-bold text-center text-success-emphasis mb-5">Business Model & Go-to-Market</h2>
           <div className="text-center mb-4">
            <img src="https://via.placeholder.com/700x350/28a745/ffffff?Text=Revenue+Streams+Diagram" alt="Business Model Diagram" className="img-fluid rounded-3 shadow" />
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
                <h5 className="text-success fw-semibold"><i className="bi bi-currency-dollar me-2"></i>Hybrid Monetization</h5>
                <p className="text-muted small">A flexible approach combining a Freemium model (core diagnostics free for widespread adoption) with premium features, B2B partnerships (e.g., with agribusinesses, NGOs, government projects), and potentially aggregated data analytics for institutional clients.{renderSource(265)}{renderSource(266)}{renderSource(271)}{renderSource(272)}</p>
            </div>
            <div className="col-lg-6">
                <h5 className="text-success fw-semibold"><i className="bi bi-bullseye me-2"></i>Partnership-Driven Go-to-Market</h5>
                <p className="text-muted small">Leveraging the networks and trust of existing agricultural stakeholders like DAE, NGOs, farmer cooperatives, and input retailers for outreach, training, and adoption.{renderSource(281)}{renderSource(282)}{renderSource(284)}{renderSource(285)}</p>
            </div>
            <div className="col-lg-6">
                <h5 className="text-success fw-semibold"><i className="bi bi-map-fill me-2"></i>Phased Rollout</h5>
                <p className="text-muted small">Implementing a phased geographical rollout to refine the strategy and build momentum.{renderSource(295)}</p>
            </div>
            <div className="col-lg-6">
                <h5 className="text-success fw-semibold"><i className="bi bi-shield-fill-check me-2"></i>Addressing Adoption Hurdles</h5>
                <p className="text-muted small">Proactive strategies to overcome barriers like cost, digital literacy, trust, and connectivity through design, partnerships, and targeted training.{renderSource(298)}</p>
            </div>
          </div>
        </section>

        {/* Section 6: Impact & Vision */}
        <section id="impact" className="mb-5 py-4 bg-success-subtle rounded-4 shadow-sm p-4 p-lg-5">
          <h2 className="display-6 fw-bold text-center text-success-emphasis mb-5">Impact & Vision</h2>
          <div className="text-center mb-4">
            <img src="https://via.placeholder.com/700x300/0dcaf0/ffffff?Text=Positive+Impact+Visuals" alt="Positive Impact" className="img-fluid rounded-3 shadow" />
          </div>
          <div className="row g-4">
            <div className="col-md-4">
                <h5 className="text-success fw-semibold"><i className="bi bi-graph-up-arrow me-2"></i>Economic Impact</h5>
                <p className="text-muted small">Reduced pesticide costs, decreased crop losses, increased yields, and improved farmer profitability.{renderSource(213)}{renderSource(214)}{renderSource(219)}{renderSource(224)}{renderSource(229)}</p>
            </div>
            <div className="col-md-4">
                <h5 className="text-success fw-semibold"><i className="bi bi-heart-fill me-2"></i>Social Impact</h5>
                <p className="text-muted small">Enhanced farmer knowledge, empowerment of marginalized farmers, and improved food safety.{renderSource(243)}{renderSource(246)}{renderSource(249)}{renderSource(250)}</p>
            </div>
            <div className="col-md-4">
                <h5 className="text-success fw-semibold"><i className="bi bi-tree-fill me-2"></i>Environmental Impact</h5>
                <p className="text-muted small">Reduced reliance on harmful chemical pesticides, promoting sustainable agriculture.{renderSource(251)}</p>
            </div>
          </div>
          <p className="text-muted mt-3"><strong>Strategic Alignment:</strong> Directly supports national goals related to food security, poverty reduction, sustainable agriculture, climate resilience, and digital transformation.{renderSource(256)}{renderSource(257)}{renderSource(258)}{renderSource(259)}{renderSource(260)}</p>
          <p className="text-muted"><strong>Vision:</strong> To become the leading digital platform for crop health management in Bangladesh, expanding to predictive analytics, IoT integration, and broader agricultural support services, creating a more resilient and prosperous agricultural sector.</p>
        </section>

        {/* Section 7: The Team */}
        <section id="team" className="mb-5 py-4">
          <h2 className="display-6 fw-bold text-center text-success-emphasis mb-5">Meet Our Core Team</h2>
          <div className="row g-4 justify-content-center">
            {teamMembers.map((member, index) => (
              <div className="col-md-6 col-lg-3 d-flex" key={index}>
                <div className="card text-center h-100 border-0 shadow-sm hover-lift">
                  <img src={member.image} className="card-img-top" alt={member.name} style={{height: '180px', objectFit: 'cover'}}/>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-success fw-semibold">{member.name}</h5>
                    <p className="card-subtitle mb-2 text-muted fw-light">{member.role}</p>
                    <p className="card-text small text-muted mt-auto">{member.expertise}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Financial Overview */}
        <section id="financials" className="mb-5 py-4 bg-light rounded-4 shadow-sm p-4 p-lg-5">
          <h2 className="display-6 fw-bold text-center text-success-emphasis mb-5">Financial Overview & Ask</h2>
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
                <h4 className="text-success fw-semibold">Funding Ask:</h4>
                <p className="fs-4 text-muted">Seed Funding Round: <strong className="text-success-emphasis">[Amount - e.g., $500,000 USD]</strong></p>
                <h4 className="text-success fw-semibold mt-4">Use of Funds:</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-transparent text-muted"><i className="bi bi-robot me-2 text-success"></i>AI Model Development & Data Acquisition</li>
                    <li className="list-group-item bg-transparent text-muted"><i className="bi bi-code-slash me-2 text-success"></i>Platform Development & Enhancement</li>
                    <li className="list-group-item bg-transparent text-muted"><i className="bi bi-megaphone-fill me-2 text-success"></i>Marketing, Outreach & Partnerships</li>
                    <li className="list-group-item bg-transparent text-muted"><i className="bi bi-person-gear me-2 text-success"></i>Operations & Team Expansion</li>
                </ul>
            </div>
            <div className="col-lg-6">
                 {/* Placeholder for charts */}
                <img src="https://via.placeholder.com/500x300/0dcaf0/ffffff?Text=Projected+Growth+Chart" alt="Projected Growth" className="img-fluid rounded-3 shadow" />
                <p className="text-center mt-2 text-muted small">Projected rapid user adoption and revenue growth over the next 3-5 years.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="contact" className="py-5 text-center bg-success text-white rounded-4 shadow-lg">
          <div className="container">
            <h2 className="display-5 fw-bold mb-3">Ready to Invest in the Future?</h2>
            <p className="lead fs-4 mb-4">
              Join us in transforming Bangladeshi agriculture. Let's cultivate growth and impact together.
            </p>
            {/* This could link to a contact form, mailto link, or a modal */}
            <a href="mailto:invest@agronirbhul.com?subject=Investor%20Inquiry%20-%20AgroNirbhul" className="btn btn-light btn-lg rounded-pill px-5 py-3 shadow-lg">
              <i className="bi bi-envelope-paper-fill me-2"></i>Contact Us for Full Pitch Deck
            </a>
          </div>
        </section>
      </main>

      {/* Consistent Footer */}
      <footer className="py-5 bg-dark text-white-50">
        <div className="container text-center">
          <Link className="d-inline-block mb-4 text-decoration-none" to="/">
            <img src="/agronirbhul.png" alt="AgroNirbhul Logo" style={{ height: '50px' }} />
          </Link>
          <p className="mb-3 small">&copy; {new Date().getFullYear()} {appName}. All Rights Reserved. <br />Empowering Farmers, Nourishing Nations.</p>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#privacy" className="text-white-50 text-decoration-none">Privacy Policy</a></li>
            <li className="list-inline-item"><a href="#terms" className="text-white-50 text-decoration-none">Terms of Service</a></li>
            <li className="list-inline-item"><a href="mailto:invest@agronirbhul.com" className="text-white-50 text-decoration-none">Contact Investor Relations</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default InvestorPage;