import { useAppDispatch } from "app/appStore";
import { Search } from "features/search";
import { Slider } from "features/slider";
import { Categories } from "features/categories";

import { setFilters } from "entities/news";
import type { CategoriesType } from "entities/category";

import type { NewsFiltersProps } from "../../model/props";
import styles from "./styles.module.scss";

const NewsFilters: React.FC<NewsFiltersProps> = ({
	filters,
	categories,
	isLoadingCategories,
}) => {
	const dispatch = useAppDispatch();

	const setCategory = (category: CategoriesType) => {
		dispatch(setFilters({ key: "category", value: category }));
	};

	const setKeywords = (keywords: string) => {
		dispatch(setFilters({ key: "keywords", value: keywords }));
	};

	return (
		<div className={styles.filters}>
			<Slider>
				<Categories
					type="chip"
					direction="fullRow"
					isLoading={isLoadingCategories}
					categories={categories}
					currentCategory={filters.category}
					setCategory={setCategory}
				/>
			</Slider>

			<Search keywords={filters.keywords} setKeywords={setKeywords} />
		</div>
	);
};

export default NewsFilters;
