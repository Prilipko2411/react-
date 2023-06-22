import Header from "./components/Header/Header";
import LeftNavBar from "./components/LeftNavBar/LeftNavBar";
import Container from "./components/Container/Conteiner";
import Contacts from "./components/Contacts/Contacts"
import React from "react";

function App() {
  return (
    <div className="App">
      <Header/>
      <div 
          className="MainPageContainer"
          style ={{
            display: "flex",
            justifyContent: "space-between",
            paddingRight: "63px",
            paddingTop: "30px"
          }}
      >
      <LeftNavBar/>
      <Container/>
      </div>gi
      <div>
        <Contacts/>
      </div>
    </div>

  );
}

export default App;
