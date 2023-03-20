import {Outlet, useLoaderData} from "react-router-dom"
import React from "react"
import Footer from "./Footer"
import Header from "./Header"

export const UserContext = React.createContext({} as any)

export default () => {
	const users = useLoaderData()
	console.log(users)
	return (
		<>
			<UserContext.Provider value={users}>
				<Header />
				<Outlet />
				<Footer />
			</UserContext.Provider>
		</>
	)
}
