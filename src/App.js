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