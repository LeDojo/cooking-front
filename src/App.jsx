import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from "./pages/UserPage";
import SubscriberPage from './pages/Subscriberpage';
import Navbar from './components/Navbar';
import CoursePage from './pages/CoursePage';
import HomePage from './pages/HomePage';
import CreateUserPage from './pages/CreateUserPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/create" element={<CreateUserPage />} />
        <Route path="/subscribers" element={<SubscriberPage/>} />
        <Route path="/courses" element={<CoursePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
