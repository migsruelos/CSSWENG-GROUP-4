import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import ContactUs from "./views/ContactPage/ContactUs.js"
import ProductPage from "./views/ProductPage/ProductPage.js"
import AdminDashboard from './views/AdminDashboard/AdminDashboard';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/products" component={Auth(ProductPage, null)}/>
          <Route exact path="/contact" component={Auth(ContactUs, null)} />
          <Route exact path="/admin" component={AdminDashboard} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
