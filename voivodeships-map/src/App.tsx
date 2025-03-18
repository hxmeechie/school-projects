import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import VoivodeshipPage from "@/pages/VoivodeshipPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/voivodeship/:id" element={<VoivodeshipPage />} />
    </Routes>
  );
};

export default App;
