import "./App.scss";
import Create from "./Components/Create";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="bin">
          <div className="box-1">
            <Create />
          </div>
          <div className="box-2">List</div>
        </div>
      </div>
    </div>
  );
}

export default App;
