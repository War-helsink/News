import { Component } from "react";
import type { NewItem } from "core/interface";
import styles from "./styles.module.scss";

import { getNews } from "app/apiNews";

import NewsBanner from "components/news-banner";
import NewsList from "components/news-list";
import Skeleton from "components/skeleton";
import Pagination from "components/plagination";

interface MainState {
	totalPages: number;
	currentPage: number;
	news: NewItem[];
	isLoading: boolean;
}

class Main extends Component<unknown, MainState> {
	state = {
		currentPage: 1,
		news: [],
		isLoading: true,
		totalPages: 10,
	};

	componentDidMount() {
		this.fetchNews();
	}

	componentDidUpdate(_: unknown, prevState: MainState) {
		if (prevState.currentPage !== this.state.currentPage) {
			this.setState({ isLoading: true });
			this.fetchNews();
		}
	}

	fetchNews = async () => {
		try {
			const news = await getNews(this.state.currentPage);
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

				<Pagination
					onChangePage={(currentPage) => {
						this.setState({ currentPage: currentPage });
					}}
					currentPage={this.state.currentPage}
					totalPages={this.state.totalPages}
				/>

				{!this.state.isLoading ? (
					<NewsList news={this.state.news} />
				) : (
					<Skeleton type="item" count={10} />
				)}

				<Pagination
					onChangePage={(currentPage) => {
						this.setState({ currentPage: currentPage });
					}}
					currentPage={this.state.currentPage}
					totalPages={this.state.totalPages}
				/>
			</main>
		);
	}
}

export default Main;
