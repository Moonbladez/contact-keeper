import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Navbar } from "./components/layout/Navbar";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";

import "./App.css";

export const App = () => {
	return (
		<BrowserRouter>
			<>
				<Navbar />
				<main className='container'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/about' component={About} />
					</Switch>
				</main>
			</>
		</BrowserRouter>
	);
};
