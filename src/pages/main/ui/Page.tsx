import { Component } from "react";

import LatestNews from "./LatestNews";
import NewsByFilters from "./NewsByFilters";

import styles from "./styles.module.scss";

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
