import { Component } from "react";
import { Helmet } from "react-helmet-async";

import LatestNews from "./LatestNews";
import NewsByFilters from "./NewsByFilters";

class MainPage extends Component {
	render() {
		return (
			<>
				<Helmet>
					<title>News</title>
				</Helmet>
				<main className="grid w-full gap-8 md:grid-cols-2 grid-cols-1">
					<LatestNews />

					<NewsByFilters />
				</main>
			</>
		);
	}
}

export default MainPage;
