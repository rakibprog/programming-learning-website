
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Notfound from './Components/NotFound/Notfound';
import Services from './Components/Services/Services';
import Teachers from './Components/Teacher/Teachers';



function App() {
  return (
    <div className="App">
          <Router>
            <Header></Header>
            <Switch>
                <Route exact path="/">
                  <Banner></Banner>
                  <Services></Services>
                </Route>
                <Route path="/home">
                  <Banner></Banner>
                  <Services></Services>
                </Route>
                <Route path="/about">
                  <About></About>
                </Route>
                <Route path="/Service">
                    <Services></Services>
                </Route>
                <Route path="/teacher">
                    <Teachers></Teachers>
                </Route>
                <Route path="*">
                    <Notfound></Notfound>
                </Route>
            </Switch>
          </Router>
        <Footer></Footer>
    </div>
  );
}

export default App;
