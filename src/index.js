import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AllVisitors from "./pages/AllVisitors";
import NoPage from "./pages/NoPage";


import LayoutAdmin from "./adminpages/LayoutAdmin";

import "rsuite/dist/rsuite.min.css"; // "rsuite/styles/index.less"
import "./index.css"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="visitors" element={<AllVisitors />} />
          <Route path="admin" element={<LayoutAdmin />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);