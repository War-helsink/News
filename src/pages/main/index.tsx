import { Component } from "react";
import type { NewItem } from "core/interface";
import styles from "./styles.module.scss";

import { getNews, getCategory } from "app/apiNews";

import NewsBanner from "components/news-banner";
import NewsList from "components/news-list";
import Skeleton from "components/skeleton";
import Pagination from "components/plagination";

import Categories from "components/categories";
import Search from "components/search";

interface MainState {
	isLoading: boolean;

	pageSize: number;
	totalPages: number;
	currentPage: number;

	news: NewItem[];

	categories: string[];
	currentCategory: string | null;

	keywords: string;
}

class Main extends Component<unknown, MainState> {
	state = {
		isLoading: true,

		pageSize: 10,
		totalPages: 10,
		currentPage: 1,

		news: [],

		categories: [],
		currentCategory: null,

		keywords: "",
	};

	async componentDidMount() {
		await this.fetchNews();
		await this.fetchCategory();
	}

	componentDidUpdate(_: unknown, prevState: MainState) {
		if (
			prevState.currentPage !== this.state.currentPage ||
			prevState.currentCategory !== this.state.currentCategory ||
			prevState.keywords !== this.state.keywords
		) {
			this.fetchNews();
		}
	}

	fetchNews = async () => {
		try {
			this.setState({ isLoading: true });
			const data = await getNews({
				pageNumber: this.state.currentPage,
				pageSize: this.state.pageSize,
				category: this.state.currentCategory,
				keywords: this.state.keywords,
			});
			this.setState({ news: data.news, isLoading: false });
		} catch (error) {
			console.log(error);
		}
	};

	fetchCategory = async () => {
		try {
			const data = await getCategory();
			this.setState({ categories: data.categories, isLoading: false });
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<main className={styles.main}>
				<Categories
					categories={this.state.categories}
					currentCategory={this.state.currentCategory}
					setCurrentCategory={(currentCategory) => {
						this.setState({ currentCategory: currentCategory });
					}}
				/>
				<Search
					keywords={this.state.keywords}
					setKeywords={(keywords) => {
						this.setState({ keywords: keywords });
					}}
				/>

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
					<Skeleton type="item" count={this.state.totalPages} />
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
