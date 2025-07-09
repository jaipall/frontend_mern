import { BrowserRouter, Routes, Route } from "react-router";
import { Homepage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { ViewPage } from "./pages/ViewPage";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CartPage } from "./pages/CartPage";
import { ProfilePage } from "./pages/ProfilePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/view" element={<ViewPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
