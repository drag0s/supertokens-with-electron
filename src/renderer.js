import './index.css';
import React from "react"
import ReactDOM from "react-dom"
import { HashRouter, Routes, Route } from "react-router-dom"
import * as reactRouterDom from "react-router-dom"

import SuperTokens, {getSuperTokensRoutesForReactRouterDom} from "supertokens-auth-react"

import EmailPassword, {EmailPasswordAuth} from "supertokens-auth-react/recipe/emailpassword"
import Session from "supertokens-auth-react/recipe/session"

SuperTokens.init({
    appInfo: {
      appName: "asd",
      apiDomain: "http://localhost:3001",
      websiteDomain: "http://localhost:3000",
      apiBasePath: "/auth",
      websiteBasePath: "/auth",
    },
    recipeList: [
      EmailPassword.init(),
      Session.init(),
    ],
})

function App() {
    return <h1>Hello world</h1>
}

function withProtected(element) {
    return <EmailPasswordAuth>{element}</EmailPasswordAuth>
  }

function getSupertokensRoutes() {
    return getSuperTokensRoutesForReactRouterDom(reactRouterDom)
}

function render() {
    ReactDOM.render(
      <HashRouter>
        <Routes>
          <Route path="/" element={withProtected(<App />)} />
          {getSupertokensRoutes()}
        </Routes>
      </HashRouter>,
      document.querySelector("#app")
    )
}
  
render()
