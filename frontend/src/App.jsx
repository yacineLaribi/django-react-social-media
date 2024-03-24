import { AuthForm, NavBar } from "./pages/pagesIndex";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="/auth" element={<AuthForm />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
