// frontend\src\App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Pages
import Insights, {
  DemandChartPage,
  DerivativesChartPage,
} from "./pages/Insights";

import "./App.css";



const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/profile" element={<ProfileRoute />} />
    <Route path="/ad/:id" element={<AdDetails />} />
    <Route path="/exporter-ads" element={<ExporterAds />} />
    <Route path="/manufacturer-ads" element={<ManufacturerAds />} />
    <Route path="/insights" element={<Insights />} />
    <Route
      path="/insights/demand-chart/:country"
      element={<DemandChartPage />}
    />
    <Route
      path="/insights/derivatives/:country/:product"
      element={<DerivativesChartPage />}
    />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/reset-password/:token" element={<ResetPassword />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/terms-of-service" element={<TermsOfService />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/admin" element={<AdminDashboard />} />
    <Route path="/chat/inbox" element={<ChatInbox />} />
    <Route path="/chat" element={<Chat />} />
    <Route path="/exporters" element={<ExporterListing />} />
    <Route path="/manufacturers" element={<ManufacturerListing />} />
    <Route path="/public-profile/:userId" element={<PublicProfile />} />
  </Routes>
);

const App = () => {
  return (
    <AuthProvider>
      <ChatProvider>
        <NotificationProvider>
          <Router>
            <Navbar />
            <div className="app-container">
              <AppRoutes />
            </div>
            <Footer />
          </Router>
        </NotificationProvider>
      </ChatProvider>
    </AuthProvider>
  );
};

export default App;
