import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

const Leaderboard = () => <div>Leaderboard Page</div>;
const Order = () => <div>Order Page</div>;
const Products = () => <div>Products Page</div>;
const SalesReport = () => <div>Sales Report Page</div>;
const Messages = () => <div>Messages Page</div>;
const Settings = () => <div>Settings Page</div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-4 bg-[#FAFBFC] min-h-screen">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/order" element={<Order />} />
              <Route path="/products" element={<Products />} />
              <Route path="/salesreport" element={<SalesReport />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/setting" element={<Settings />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
