import Button from '@material-ui/core/Button';

import logo from '../img/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Перед вами приложение по созданию заметок
        </div>
        <div>
          Иначе говоря CRUD
        </div>
        <Button variant="contained" color="primary">
          Push
        </Button>
      </header>
    </div>
  );
}

export default App;
