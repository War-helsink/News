import { Component } from "react";
import type { NewItem } from "core/interface";
import styles from "./styles.module.scss";

import { getNews } from "app/apiNews";

import NewsBanner from "components/news-banner";
import NewsList from "components/news-list";
import Skeleton from "components/skeleton";

interface MainState {
	news: NewItem[];
	isLoading: boolean;
}

class Main extends Component<unknown, MainState> {
	state: MainState = {
		news: [],
		isLoading: true,
	};

	componentDidMount() {
		this.fetchNews();
	}

	fetchNews = async () => {
		try {
			const news = await getNews();
			this.setState({ news: news.news, isLoading: false });
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<main className={styles.main}>
				{this.state.news.length > 0 && !this.state.isLoading ? (
					<NewsBanner item={this.state.news[0]} />
				) : (
					<Skeleton />
				)}
				{!this.state.isLoading ? (
					<NewsList news={this.state.news} />
				) : (
					<Skeleton type="item" count={10} />
				)}
			</main>
		);
	}
}

export default Main;
