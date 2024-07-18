import type { FC } from "react";
import { NewsList } from "widgets/news";

import type { INews } from "entities/news";
import { useGetLatestNewsQuery, setCurrentNews } from "entities/news";

import { useAppDispatch } from "app/appStore";
import { useNavigate } from "react-router-dom";

import { IonButton } from "@ionic/react";

import styles from "./styles.module.scss";

const LatestNews: FC = () => {
	const { data, isLoading } = useGetLatestNewsQuery(null);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const navigateTo = (news: INews) => {
		dispatch(setCurrentNews(news));
		navigate(`/news/${news.id}`);
	};

	return (
		<section className={styles.section}>
			<NewsList
				type="banner"
				direction="row"
				news={data ? data.news : undefined}
				isLoading={isLoading}
				viewNewsSlot={(news: INews) => (
					<IonButton onClick={() => navigateTo(news)}>view more...</IonButton>
				)}
			/>
		</section>
	);
};

export default LatestNews;
