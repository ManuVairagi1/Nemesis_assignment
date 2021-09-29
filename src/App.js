import React from "react";
import "./App.css";
import MaterialTable from "material-table";
import CustomTable from "./component/CustomTable";

function App() {
  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align="center">Nemesis Table</h4>
      <CustomTable />
    </div>
  );
}

export default App;
