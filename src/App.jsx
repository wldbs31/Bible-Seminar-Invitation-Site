import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <LangProvider>
      <HashRouter> 
        <Routes>
          <Route path="/" element={<Envelope />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </LangProvider>
  );
}
import { LangProvider } from "./context/LangContext";
import Envelope from "./pages/Envelope";
import Home from "./pages/Home";

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Envelope />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </LangProvider>
  );
}
