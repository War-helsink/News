import { Helmet } from "react-helmet-async";

import LatestNews from "./LatestNews";
import NewsByFilters from "./NewsByFilters";

const MainPage: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>News</title>
			</Helmet>
			<main className="grid w-full gap-8 md:grid-cols-2 grid-cols-1">
				<LatestNews />

				<NewsByFilters />
			</main>
		</>
	);
};

export default MainPage;
