import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ContactState } from "./context/contact/ContactState";
import { AuthState } from "./context/auth/AuthState";

import { Navbar } from "./components/layout/Navbar";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";

import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";

import "./App.css";

export const App = () => {
	return (
		<AuthState>
			<ContactState>
				<BrowserRouter>
					<>
						<Navbar />
						<main className='container'>
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/about' component={About} />
								<Route exact path='/register' component={Register} />
								<Route exact path='/login' component={Login} />
							</Switch>
						</main>
					</>
				</BrowserRouter>
			</ContactState>
		</AuthState>
	);
};
