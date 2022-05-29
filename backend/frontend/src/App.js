import Header from "./components/Header";
import Footer from "./components/Footer";
import CartScreen from "./screens/CartScreen";
import { Container } from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Switch, Routes, Redirect } from 'react-router-dom';
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/cart/:id?' component={CartScreen}/>
          {/* <HomeScreen/> */}
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
