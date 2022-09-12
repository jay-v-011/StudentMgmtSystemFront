import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import StudentList from './components/StudentList';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <Student/>
      <StudentList/>
      <NavigationBar/>
    </div>
  );
}

export default App;
