import './assets/scss/style.scss';
import './App.css';
import { Header } from './components/Header';
import { Navigate, Route, Routes, useNavigate, useLocation, BrowserRouter as Router, useParams } from "react-router-dom";
import { Layout } from './layout/Layout';
function App() {
  return <Routes>
  <Route path="/" element={<Layout />}>

  </Route>
  </Routes>
}
export default App;
