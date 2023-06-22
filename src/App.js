import Header from "./components/Header/Header";
import LeftNavBar from "./components/LeftNavBar/LeftNavBar";
import Container from "./components/Container/Conteiner";
import Router from "./components/React-router/React-router";

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
      </div>
      <Router/>
    </div>
  );
}

export default App;
