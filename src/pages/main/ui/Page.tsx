import { Component } from "react";
import LatestNews from "./LatestNews";
import NewsByFilters from "./NewsByFilters";

class Main extends Component {
	render() {
		return (
			<main className="grid w-full gap-8 md:grid-cols-2 grid-cols-1">
				<LatestNews />

				<NewsByFilters />
			</main>
		);
	}
}

export default Main;
