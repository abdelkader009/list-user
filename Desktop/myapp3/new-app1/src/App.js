import './App.css';
import Profilephoto from './components/Profile/Profilephoto';
import Fullname from './components/Profile/Fullname';
import Adresse from './components/Profile/Adresse';
function App() {
  return (
    <div className="App">
    <Profilephoto/>
    <div className="name">
    <Fullname/></div>
    <div className="adresse">
    <Adresse/></div>
    </div>
  );
}

export default App;
