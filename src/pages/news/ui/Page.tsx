import { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";

import type { RootState } from "app/appStore";
import { NewsDetails } from "entities/news";

import { IonButton } from "@ionic/react";

import type { NewsPageProps } from "../model/props";

class NewsPage extends Component<NewsPageProps> {
	render() {
		const { currentNews } = this.props;
		if (!currentNews) {
			return (
				<>
					<Helmet>
						<title>Cannot find news</title>
					</Helmet>
					<div className="flex flex-col justify-center items-center gap-4 w-full">
						<h1>Cannot find news</h1>
						<Link to={"/"}>
							<IonButton>
								<h3>Go to main page</h3>
							</IonButton>
						</Link>
					</div>
				</>
			);
		}
		return (
			<>
				<Helmet>
					<title>News</title>
				</Helmet>
				<main className="flex flex-col gap-8 w-full">
					<h1>{currentNews.title}</h1>

					<NewsDetails item={currentNews} />
				</main>
			</>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
	currentNews: state.news.currentNews,
});

export default connect(mapStateToProps)(NewsPage);
