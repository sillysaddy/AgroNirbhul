import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const LandingPage: React.FC<{}> = () => ( // Props might be empty now
  <div className="bg-body-tertiary text-body"> {/* Softer main background */}
    {/* Navigation / Header */}
    <header className="navbar navbar-expand-lg bg-white shadow-sm sticky-top py-3">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center text-decoration-none" to="/">
          <img src="/agronirbhul.png" alt="AgroNirbhul Logo" style={{ height: '40px', marginRight: '10px' }} />
          <span className="text-success fw-bold fs-3 d-none d-sm-inline">AgroNirbhul</span>
        </Link>
        <div className="ms-auto">
          <Link
            className="btn btn-outline-success me-2 rounded-pill px-4"
            to="/login" // Link to login page
          >
            Login
          </Link>
          <Link
            className="btn btn-success rounded-pill px-4"
            to="/register" // Link to register page
          >
            Register
          </Link>
        </div>
      </div>
    </header>

    {/* Hero Section */}
    <section className="py-5 py-md-6 text-center bg-gradient" style={{ background: 'linear-gradient(135deg, var(--bs-success-bg-subtle) 0%, var(--bs-teal-bg-subtle) 100%)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-8">
            <h1 className="display-3 fw-bolder mb-4 text-success-emphasis">
              AI-Powered Precision
              <span className="d-block text-dark fw-normal mt-2 fs-4">for Sustainable Agriculture in Bangladesh.</span>
            </h1>
            <p className="lead text-secondary mb-5">
              Empowering farmers with early disease detection to boost yields and secure livelihoods. A smart investment in a greener future.
            </p>
            <div className="my-5 position-relative">
              <img
                src="/hero-agro.jpg" // Ensure this image exists
                alt="Farmer using AI technology for crop health"
                className="img-fluid rounded-4 shadow-lg"
                style={{ aspectRatio: '16/9', objectFit: 'cover', maxHeight: '500px' }}
              />
              {/* Optional: Add a subtle overlay or design element here */}
            </div>
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
              <Link
                className="btn btn-success btn-lg rounded-pill px-5 py-3 shadow-sm"
                to="/register" // Farmers: Join Now CTA
              >
                <i className="bi bi-person-plus-fill me-2"></i>Farmers: Join Now
              </Link>
              <button className="btn btn-outline-primary btn-lg rounded-pill px-5 py-3 shadow-sm">
                <i className="bi bi-briefcase-fill me-2"></i>Investors: Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Call to Action for Farmers & Investors */}
    <section className="py-5 py-md-6 text-center bg-gradient" style={{ background: 'linear-gradient(135deg, var(--bs-success-bg-subtle) 0%, var(--bs-teal-bg-subtle) 100%)' }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-9 col-xl-8">
                    <h2 className="display-5 fw-bold mb-3 text-success-emphasis">Join the Agricultural Revolution</h2>
                    <p className="lead text-muted mb-5">
                        Whether you're a farmer seeking to boost your yields or an investor looking for a high-impact opportunity, AgroNirbhul offers the tools and the vision for a smarter agricultural future.
                    </p>
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                        <Link
                            className="btn btn-success btn-lg rounded-pill px-5 py-3 shadow-sm"
                            to="/register"
                        >
                            <i className="bi bi-person-plus-fill me-2"></i>Farmers: Join Now
                        </Link>
                        <Link
                            className="btn btn-outline-primary btn-lg rounded-pill px-5 py-3 shadow-sm"
                            to="/investors" // <-- Link to the new investor page
                        >
                            <i className="bi bi-briefcase-fill me-2"></i>Investors: Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Problem/Solution Section */}
    <section className="py-5 py-md-6">
      <div className="container text-center">
        <span className="badge bg-success-subtle text-success-emphasis rounded-pill px-3 py-2 fs-6 mb-3">The Challenge</span>
        <h2 className="fw-bold mb-3 display-6">
          Bridging Tradition with <span className="text-success">Cutting-Edge Innovation</span>
        </h2>
        <p className="lead text-muted col-lg-8 mx-auto mb-5">
          Traditional methods often fall short against unpredictable climate and pest behaviors. AgroNirbhul delivers AI-driven, actionable insights in Bengali, directly to farmers.
        </p>
      </div>
    </section>

    {/* How It Works Section */}
    <section className="py-5 py-md-6 bg-body-secondary">
      <div className="container text-center">
        <h2 className="fw-bold mb-5 display-6">Simple Steps to <span className="text-success">Healthier Crops</span></h2>
        <div className="row g-4 g-lg-5 justify-content-center">
          {[
            { icon: "bi-camera-fill", title: "Snap & Send", description: "Easily capture plant images via our intuitive mobile app, designed for all literacy levels." },
            { icon: "bi-cpu-fill", title: "AI Diagnosis", description: "Our advanced AI, trained on local data, analyzes images for diseases with high precision." },
            { icon: "bi-chat-dots-fill", title: "Act & Prosper", description: "Receive instant, clear advice in Bengali & SMS, enabling timely and effective treatment." }
          ].map((step, index) => (
            <div className="col-md-6 col-lg-4 d-flex" key={index}>
              <div className="card shadow-sm hover-shadow-lg transition-fast h-100 border-0 rounded-4">
                <div className="card-body p-4 p-xl-5 text-center">
                  <div className="bg-success-subtle text-success d-inline-flex align-items-center justify-content-center p-3 rounded-3 mb-4">
                    <i className={`${step.icon} fs-1`}></i>
                  </div>
                  <h4 className="fw-semibold mb-2 fs-5">{step.title}</h4>
                  <p className="text-muted small">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits & Features Section */}
    <section className="py-5 py-md-6">
      <div className="container">
        <h2 className="fw-bold mb-5 text-center display-6">
          Unlock <span className="text-success">Tangible Value</span> for All
        </h2>
        <div className="row g-4 g-lg-5">
          <div className="col-lg-6 d-flex">
            <div className="card shadow-sm border-success border-2 border-opacity-50 rounded-4 p-4 p-xl-5 h-100">
              <h3 className="fw-semibold mb-4 text-success"><i className="bi bi-tree-fill me-2"></i>For Bangladeshi Farmers</h3>
              <ul className="list-unstyled d-grid gap-3">
                {[
                  "Early disease detection, minimizing crop loss significantly.",
                  "Increased yield and optimized pesticide/fertilizer costs.",
                  "User-friendly mobile app with full Bengali voice & text support.",
                  "Actionable, localized treatment advice from trusted sources.",
                  "Empowerment through technology, improving livelihoods."
                ].map(item => <li key={item} className="d-flex align-items-start"><i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>{item}</li>)}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="card shadow-sm border-primary border-2 border-opacity-50 rounded-4 p-4 p-xl-5 h-100">
              <h3 className="fw-semibold mb-4 text-primary"><i className="bi bi-graph-up-arrow me-2"></i>For Impact Investors</h3>
              <ul className="list-unstyled d-grid gap-3">
                {[
                  "Access Bangladesh's vast, underserved agricultural market.",
                  "Invest in cutting-edge AI for image recognition & predictive analytics.",
                  "Highly scalable SaaS model with strong recurring revenue potential.",
                  "Drive significant economic, social, & environmental impact (ESG).",
                  "Partner with a mission-driven team with deep local expertise."
                ].map(item => <li key={item} className="d-flex align-items-start"><i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-5 pt-4">
            <h3 className="fw-bold mb-4 fs-4">Core Platform Features</h3>
            <div className="row g-3 justify-content-center">
              {[
                {icon: "bi-shield-shaded", text: "High-Accuracy AI"},
                {icon: "bi-broadcast", text: "Predictive Outbreak Alerts (Future)"},
                {icon: "bi-phone-vibrate-fill", text: "Mobile App & SMS"},
                {icon: "bi-translate", text: "Full Bengali Localization"},
                {icon: "bi-wifi-off", text: "Offline Capabilities (Planned)"}
              ].map(feature => (
                <div className="col-md-auto" key={feature.text}>
                  <span className="badge text-bg-light shadow-sm p-3 fs-6 rounded-pill">
                    <i className={`${feature.icon} me-2 text-success`}></i>{feature.text}
                  </span>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>

    {/* Trust & Credibility Section */}
    <section className="py-5 py-md-6 bg-info-subtle">
        <div className="container">
            <h2 className="fw-bold mb-5 text-center display-6">
                Built on <span className="text-info-emphasis">Trust</span> and <span className="text-info-emphasis">Transparency</span>
            </h2>
            <div className="row g-4 g-lg-5 justify-content-center">
                <div className="col-lg-5 d-flex">
                    <div className="card shadow-sm rounded-4 border-0 p-4 h-100">
                        <div className="card-body">
                            <i className="bi bi-quote fs-1 text-info mb-3 d-block"></i>
                            <blockquote className="blockquote">
                                <p className="mb-3 fst-italic">"AgroNirbhul's early warnings saved my potato harvest. It's simple, effective, and truly understands our local needs."</p>
                            </blockquote>
                            <figcaption className="blockquote-footer mb-0">
                                A. K. Fazlul Haque, <cite title="Source Title">Farmer, Bogura (Placeholder)</cite>
                            </figcaption>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 d-flex">
                     <div className="card shadow-sm rounded-4 border-0 p-4 h-100">
                        <div className="card-body">
                            <div className="text-info mb-3"><i className="bi bi-shield-lock-fill fs-1"></i></div>
                            <h4 className="fw-semibold mb-3">Our Commitment to Your Data</h4>
                            <p className="text-muted small">
                                Your privacy is paramount. We employ robust security measures and ethical data practices, ensuring your information empowers you, securely and transparently.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Investor Specific CTA */}
    <section className="py-5 py-md-6 text-white" style={{ background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://via.placeholder.com/1920x600/198754/ffffff?Text=Investor+CTA+Background") center center / cover no-repeat' }}>
        <div className="container text-center">
            <h2 className="display-5 fw-bold mb-3">Partner with AgroNirbhul</h2>
            <p className="lead fs-4 mb-4">
                Drive innovation and create lasting value in Bangladesh's agricultural heartland.
            </p>
            <Link to="/investors#contact" className="btn btn-light btn-lg rounded-pill px-5 py-3 shadow"> {/* Updated to Link */}
                <i className="bi bi-file-earmark-person-fill me-2"></i>Request Investor Deck
            </Link>
        </div>
    </section>

    {/* FAQ Section */}
    <section className="py-5 py-md-6 bg-body-tertiary">
        <div className="container">
            <h2 className="fw-bold mb-5 text-center display-6">Frequently Asked Questions</h2>
            <div className="row g-4 g-lg-5 justify-content-center">
                <div className="col-lg-6">
                    <h4 className="fw-semibold mb-3 text-success-emphasis"><i className="bi bi-person-raised-hand me-2"></i>For Farmers</h4>
                    <div className="accordion accordion-flush rounded-4 shadow-sm" id="faqFarmer">
                        {/* FAQ Item 1 */}
                        <div className="accordion-item rounded-top-4">
                            <h2 className="accordion-header" id="faqFarmerHeading1">
                                <button className="accordion-button collapsed fw-semibold rounded-top-4" type="button" data-bs-toggle="collapse" data-bs-target="#faqFarmerCollapse1" aria-expanded="false" aria-controls="faqFarmerCollapse1">
                                এই অ্যাপের খরচ কেমন? (Cost?)
                                </button>
                            </h2>
                            <div id="faqFarmerCollapse1" className="accordion-collapse collapse" aria-labelledby="faqFarmerHeading1" data-bs-parent="#faqFarmer">
                                <div className="accordion-body small text-muted">
                                অ্যাপটি ব্যবহার করার জন্য বিভিন্ন উপায় বিবেচনা করা হচ্ছে। ক্ষুদ্র কৃষকদের সীমিত আয়ের কথা মাথায় রেখে, মূল রোগ নির্ণয়ের সুবিধাটি বিনামূল্যে দেওয়ার পরিকল্পনা রয়েছে যাতে বেশি সংখ্যক কৃষক এটি ব্যবহার করতে পারেন এবং এর সুবিধা বুঝতে পারেন । অতিরিক্ত বা উন্নত সুবিধার জন্য সাবস্ক্রিপশন ভিত্তিক মডেল অথবা কৃষি বিষয়ক অন্যান্য বাণিজ্যিক অংশীদারদের সাথে কাজের সুযোগ তৈরি করে আয় করার পরিকল্পনা আছে । অর্থাৎ, রোগবালাই শনাক্তকরণের প্রাথমিক ব্যবহারের জন্য কৃষকদের হয়তো কোনো খরচই লাগবে না।
                                </div>
                            </div>
                        </div>
                        {/* FAQ Item 2 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faqFarmerHeading2">
                                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faqFarmerCollapse2" aria-expanded="false" aria-controls="faqFarmerCollapse2">
                                এটা ব্যবহার করতে কী কী লাগবে? (Requirements?)
                                </button>
                            </h2>
                            <div id="faqFarmerCollapse2" className="accordion-collapse collapse" aria-labelledby="faqFarmerHeading2" data-bs-parent="#faqFarmer">
                                <div className="accordion-body small text-muted">
                                এই অ্যাপটি ব্যবহারের জন্য একটি স্মার্টফোন লাগবে । যেহেতু বাংলাদেশের অনেক কৃষকই এখন স্মার্টফোন ব্যবহার করেন, তাই এটি ব্যবহার করা সহজ হবে । এছাড়াও, অনেক ক্ষেত্রে ইন্টারনেট সংযোগ ছাড়াও যাতে অ্যাপটির মূল কাজগুলো (যেমন ছবি তোলা এবং পুরনো তথ্য দেখা) করা যায়, সেদিকে খেয়াল রাখা হচ্ছে । সম্পূর্ণ রোগ নির্ণয় বা নতুন তথ্য পেতে ইন্টারনেট সংযোগ প্রয়োজন হতে পারে, তবে অফলাইনে ব্যবহারের কিছু সুবিধা থাকবে।
                                </div>
                            </div>
                        </div>
                         {/* Add more farmer FAQs here */}
                    </div>
                </div>
                <div className="col-lg-6">
                    <h4 className="fw-semibold mb-3 text-primary-emphasis"><i className="bi bi-building-gear me-2"></i>For Investors</h4>
                    <div className="accordion accordion-flush rounded-4 shadow-sm" id="faqInvestor">
                        {/* FAQ Item 1 */}
                        <div className="accordion-item rounded-top-4">
                            <h2 className="accordion-header" id="faqInvestorHeading1">
                                <button className="accordion-button collapsed fw-semibold rounded-top-4" type="button" data-bs-toggle="collapse" data-bs-target="#faqInvestorCollapse1" aria-expanded="false" aria-controls="faqInvestorCollapse1">
                                What is the market size & scalability?
                                </button>
                            </h2>
                            <div id="faqInvestorCollapse1" className="accordion-collapse collapse" aria-labelledby="faqInvestorHeading1" data-bs-parent="#faqInvestor">
                                <div className="accordion-body small text-muted">
                                Bangladesh has a large agricultural sector with approximately 15 to 16.5 million farm holdings managing about 8.5 million hectares of cultivable land. The sector contributes significantly to the national GDP and employs a large portion of the workforce. Crop losses due to pests and diseases are substantial, averaging 10-25% annually, highlighting a significant need for improved management. The AI-driven mobile application offers a scalable solution to reach this large base of smallholder farmers. The backend infrastructure is designed to be robust and scalable using cloud platforms (AWS, Azure, or GCP) to handle a growing user base and increasing data.
                                </div>
                            </div>
                        </div>
                        {/* FAQ Item 2 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faqInvestorHeading2">
                                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faqInvestorCollapse2" aria-expanded="false" aria-controls="faqInvestorCollapse2">
                                What is your competitive advantage?
                                </button>
                            </h2>
                            <div id="faqInvestorCollapse2" className="accordion-collapse collapse" aria-labelledby="faqInvestorHeading2" data-bs-parent="#faqInvestor">
                                <div className="accordion-body small text-muted">
                                While similar platforms exist globally and regionally, the proposed AI solution aims for hyper-localization for Bangladesh. This involves tailoring the diagnostic capabilities and management advice to specific local crops, pests, diseases, and agro-ecological conditions. A key competitive advantage is designing the solution explicitly for the context of low literacy and limited connectivity among many smallholder farmers, incorporating features like simple visual interfaces, audio support, and offline functionality. Building strong partnerships with local institutions like the Department of Agricultural Extension (DAE), research institutions (BARI, BRRI), and farmer cooperatives is also seen as a way to gain an advantage over global platforms and build trust.
                                </div>
                            </div>
                        </div>
                        {/* Add more investor FAQs here */}
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    <footer className="py-5 bg-dark text-white-50">
      <div className="container text-center">
        <Link className="d-inline-block mb-4 text-decoration-none" to="/">
          <img src="/agronirbhul.png" alt="AgroNirbhul Logo" style={{ height: '50px' }} />
        </Link>
        <p className="mb-3 small">&copy; {new Date().getFullYear()} AgroNirbhul. All Rights Reserved. <br />Cultivating a Smarter, Sustainable Future for Agriculture.</p>
        <ul className="list-inline mb-4">
          <li className="list-inline-item"><a href="#privacy" className="text-white-50 small">Privacy Policy</a></li>
          <li className="list-inline-item small">|</li>
          <li className="list-inline-item"><a href="#terms" className="text-white-50 small">Terms of Service</a></li>
          <li className="list-inline-item small">|</li>
          <li className="list-inline-item"><a href="#contact" className="text-white-50 small">Contact Us</a></li>
        </ul>
        <div>
          <a href="#" className="text-white-50 me-3 fs-5"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-white-50 me-3 fs-5"><i className="bi bi-linkedin"></i></a>
          <a href="#" className="text-white-50 fs-5"><i className="bi bi-youtube"></i></a>
        </div>
      </div>
    </footer>
  </div>
);

export default LandingPage;