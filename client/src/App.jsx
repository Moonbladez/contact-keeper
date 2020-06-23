import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ContactState } from "./context/contact/ContactState";
import { AuthState } from "./context/auth/AuthState";
import { AlertState } from "./context/alert/AlertState";

import { Navbar } from "./components/layout/Navbar";
import { Alerts } from "./components/layout/Alerts";

import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";

import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";

import { setAuthToken } from "./utils/setAuthToken";

import { PrivateRoute } from "./components/routing/PrivateRoute";

import Container from "@material-ui/core/Container";

import "./App.css";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

export const App = () => {
	return (
		<AuthState>
			<ContactState>
				<AlertState>
					<BrowserRouter>
						<>
							<Navbar />
							<Container>
								<Alerts />
								<Switch>
									<PrivateRoute exact path='/' component={Home} />
									<Route exact path='/about' component={About} />
									<Route exact path='/register' component={Register} />
									<Route exact path='/login' component={Login} />
								</Switch>
							</Container>
						</>
					</BrowserRouter>
				</AlertState>
			</ContactState>
		</AuthState>
	);
};
