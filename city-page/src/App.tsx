import { Route, Routes } from "react-router-dom";
import RootLayout from "@/layout/Root";
import LandingPage from "@/pages/Landing";
import Entertainment from "@/pages/Entertainment";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/entertainment" element={<Entertainment />} />
      </Route>
    </Routes>
  );
};

export default App;
