import React from "react"
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Root from "../components/AppRoot"
import Home from "../pages/Home"
import PATHS from "./PATHS"
import About from "../pages/About"

async function fetchJSONPlaceholder() {
	const promise = await fetch("https://jsonplaceholder.typicode.com/users")
	return await promise.json()
}

export default createBrowserRouter(
	createRoutesFromElements(
		<Route
			path={PATHS.ROOT}
			element={<Root />}
			loader={fetchJSONPlaceholder}
		>
			<Route
				index
				element={<Home />}
			/>
			<Route
				index
				path={PATHS.ABOUT}
				element={<About />}
			/>
		</Route>
	)
)
