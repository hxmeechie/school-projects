import { Route, Routes } from "react-router-dom";
import RootLayout from "@/layout/Root";
import LandingPage from "@/pages/Landing";
import Traditions from "@/pages/Traditions";
import Dishes from "@/pages/Dishes";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/traditions" element={<Traditions />} />
        <Route path="/dishes" element={<Dishes />} />
      </Route>
    </Routes>
  );
};

export default App;
