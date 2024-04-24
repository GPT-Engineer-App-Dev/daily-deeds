import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TodoList from './components/TodoList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;