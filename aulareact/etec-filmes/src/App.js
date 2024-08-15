import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Header/>
      <Banner image="home" />
      <Container>
        <h1>ETEC MCM</h1>
        <p>Olá Mundo! Vambora...</p>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
