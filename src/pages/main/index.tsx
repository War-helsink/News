import { Component } from "react";
import styles from "./styles.module.scss";

import LatestNews from "components/latest-news";
import NewsByFilters from "components/news-by-filters";

class Main extends Component {
	render() {
		return (
			<main className={styles.main}>
				<LatestNews />

				<NewsByFilters />
			</main>
		);
	}
}

export default Main;
