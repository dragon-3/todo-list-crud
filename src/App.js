import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList';
import {
  BrowserRouter as Router,
  Routes,
  Route
} 
from 'react-router-dom'
import Edit from './Components/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

        <Route path='/:id' element={<Edit />} />
          <Route path='/' element={<TodoList />} />
        </Routes>

     </Router>

    </div>
  );
}

export default App;
