import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import Account from "./pages/Account";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path={"/dashboard"} element={<Dashboard />} />
            <Route path={"/bookings"} element={<Bookings />} />
            <Route path={"/cabins"} element={<Cabins />} />
            <Route path={"/settings"} element={<Settings />} />
            <Route path={"/users"} element={<Users />} />
            <Route path={"/account"} element={<Account />} />
            <Route path={"*"} element={<PageNotFound />} />
          </Route>
          <Route path={"/login"} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
