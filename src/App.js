import { Routes, Route } from "react-router-dom";
import Characters from "./screens/CharactersScreen";
import Students from "./screens/StudentsScreen";
import Staff from "./screens/StaffScreen";
import NavBar from "./components/NavBar";
import "./App.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/students" element={<Students />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </div>
  );
}

export default App;
