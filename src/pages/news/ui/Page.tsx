import { useAppSelector } from "app/appStore";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { NewsDetails } from "entities/news";
import { IonButton } from "@ionic/react";

const NewsPage: React.FC = () => {
	const currentNews = useAppSelector((state) => state.news.currentNews);

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
};

export default NewsPage;
