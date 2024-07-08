import { Component } from "react";
import type { NewItem } from "../../core/interface";
import styles from "./styles.module.scss";

import { getNews } from "../../app/apiNews";

import NewsBanner from "../../components/news-banner";
import NewsList from "../../components/news-list";

interface MainState {
	news: NewItem[];
}

class Main extends Component<unknown, MainState> {
	constructor(props: unknown) {
		super(props);
		this.state = {
			news: [],
		};
	}

	componentDidMount() {
		this.fetchNews();
	}

	fetchNews = async () => {
		try {
			const news = await getNews();
			this.setState({ news: news.news });
			console.log("News", news);
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<main className={styles.main}>
				<NewsBanner item={this.state.news[0]} />
				<NewsList news={this.state.news} />
			</main>
		);
	}
}

export default Main;
