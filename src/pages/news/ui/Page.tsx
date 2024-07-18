import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import type { RootState } from "app/appStore";
import { NewsDetails } from "entities/news";

import { IonButton } from "@ionic/react";

import type { NewsPageProps } from "../model/props";
import styles from "./styles.module.scss";

class NewsPage extends Component<NewsPageProps> {
	render() {
		const { currentNews } = this.props;
		if (!currentNews) {
			return (
				<div className={styles["none-news"]}>
					<h1>Cannot find news</h1>
					<Link to={"/"}>
						<IonButton>
							<h3>Go to main page</h3>
						</IonButton>
					</Link>
				</div>
			);
		}
		return (
			<main className={styles.news}>
				<h1>{currentNews.title}</h1>

				<NewsDetails item={currentNews} />
			</main>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
	currentNews: state.news.currentNews,
});

export default connect(mapStateToProps)(NewsPage);
