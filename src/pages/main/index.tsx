import { Component } from "react";
import type { NewItem } from "core/interface";
import styles from "./styles.module.scss";

import LatestNews from "components/latest-news";
import NewsByFilters from "components/news-by-filters";

interface MainState {
	filters: {
		pageNumber: number;
		pageSize: number;
		category: string;
		keywords: string;
	};
	isLoading: boolean;
	news: NewItem[];
}

class Main extends Component<unknown, MainState> {
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
