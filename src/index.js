// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {
//     BrowserRouter,
//     Routes,
//     Route,
// } from "react-router-dom";
// import ProfilePage from './components/ProfilePage';
// import Navbar from './components/Navbar';
// import IndexPage from './components/IndexPage';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     // <BrowserRouter>
//     //     <Navbar />
//     //     <Routes>
//     //         <Route exact path="/" element={<IndexPage />} />
//     //         <Route exact path="/profile/:id" element={<ProfilePage />} />
//     //     </Routes>
//     // </BrowserRouter>
// );

import React from 'react'
import ReactDOM from "react-dom";
import { Router, history, Model } from "backbone";
import ProfilePage from "./components/ProfilePage";
import IndexPage from "./components/IndexPage";


const rootElement = document.getElementById("root");

const renderView = View => ReactDOM.render(View, rootElement);

const User = Model.extend({
  defaults: {
    name: "",
    title: "",
    img: ""
  }
});

const model = new User({
  name: "Sheri Soliman",
  title: "Software Developer",
  img: "https://img.freepik.com/free-icon/user_318-875902.jpg",
});

const AppRouter = Router.extend({
  routes: {
    "": "init",
    "profile/:id": "profile",
  },
  init: () => renderView(<IndexPage />),
  profile: id => renderView(<ProfilePage profileId={id} model={model} />)
});

new AppRouter();
history.start({ pushState: true });