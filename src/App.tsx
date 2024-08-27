import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className="mt-[64px]">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
