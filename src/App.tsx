import { Route, Routes } from "react-router-dom";

import DefaultLayout from "./layouts/default";
import HomePage from "./pages/home/view/home";
import RegistrationPage from "./pages/registration/view/registration";
import LoginPage from "./pages/login/view";
import AboutPage from "./pages/about/view";
import AuthorPage from "./pages/author/view";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="author/:1d" element={<AuthorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
