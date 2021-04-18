import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
            Peliculas IUDigital
        </div>
      </nav>
       <table className="table">
        <thead>
          <tr>
            <th scope="col">Id Género</th>
            <th scope="col">Género</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;