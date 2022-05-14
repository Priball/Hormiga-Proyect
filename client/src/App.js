import Dashboard from "./pages/Dashboard/Dashboard";
import Signin from "./pages/Signin/Signin";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signin" element={<Signin />} />
     
      </Routes>
      
    </Router>
//    <div className="">
  //      <Dashboard />
    //</div>
  );
}

export default App;
