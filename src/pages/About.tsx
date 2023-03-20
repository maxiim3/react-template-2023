import style from "./about.module.scss"
import React, {useContext} from "react"
import {UserContext} from "../components/AppRoot"

export default () => {
	const users = useContext(UserContext)

	return (
		<main className={style.mainContent}>
			<h1>About Page</h1>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae distinctio
				dolore ea illo labore magni odio perferendis praesentium, quibusdam quidem quis
				quisquam sequi?
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae distinctio
				dolore ea illo labore magni odio perferendis praesentium, quibusdam quidem quis
				quisquam sequi?
			</p>

			<ul>
				{users.map((user: any) => (
					<li key={user.id}> {user.name} </li>
				))}
			</ul>
		</main>
	)
}
