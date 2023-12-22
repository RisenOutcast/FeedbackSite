import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
import FeedbackPage from "./pages/feedbackPage";
import SubmitPage from "./pages/submitPage";

import Banner from "./components/banner";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "./styles/common.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Banner />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/about" exact>
          <AboutPage />
        </Route>

        <Route path="/contact" exact>
          <ContactPage />
        </Route>

        <Route path="/submit" exact>
          <SubmitPage />
        </Route>

        <Route path="/feedback/:feedbackId" />

        <Route path="/feedback" exact>
          <FeedbackPage />
        </Route>
      </Switch>

      <Footer/>
    </Router>
  );
}

export default App;
