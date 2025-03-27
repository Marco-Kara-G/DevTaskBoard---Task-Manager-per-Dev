import "./App.css";
import { LoginPage } from "./components/LoginPage";
import { ProjectsPage } from "./components/Projects";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage></LoginPage>} />
          <Route path="/dashboard" element={<ProjectsPage></ProjectsPage>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
