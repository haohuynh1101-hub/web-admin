import React from "react";
import "./App.scss";
import SideBar from "./components/SideBar";
import PageContainer from "./containers/PageContainer";

function App() {
  return (
    <div className="App">
      <SideBar />
      <PageContainer />
    </div>
  );
}

export default App;
