import React from "react";
import type { IFilters } from "shared/interfaces";

import type { CategoriesType } from "entities/category";
import { Categories } from "features/categories";
import { setFilters } from "entities/news";
import { Search } from "features/search";
import { Slider } from "features/slider";

import { useGetCategoriesQuery } from "entities/category";
import { useAppSelector, useAppDispatch } from "app/appStore";

import styles from "./styles.module.scss";

interface NewsFiltersCategoryProps {
	categories: CategoriesType[];
	filters: IFilters;

	changeFilter: (key: string, value: string | number | null) => void;
}

class NewsFiltersCategory extends React.Component<NewsFiltersCategoryProps> {
	setCategory = (category: CategoriesType) => {
		this.props.changeFilter("category", category);
	};

	setKeywords = (keywords: string) => {
		this.props.changeFilter("keywords", keywords);
	};

	render() {
		const { filters, categories } = this.props;

		return (
			<div className={styles.filters}>
				<Slider>
					<Categories
						categories={categories}
						currentCategory={filters.category}
						setCategory={this.setCategory}
					/>
				</Slider>

				<Search keywords={filters.keywords} setKeywords={this.setKeywords} />
			</div>
		);
	}
}

const NewsFilters: React.FC = () => {
	const filters = useAppSelector((state) => state.news.filters);
	const { data } = useGetCategoriesQuery(null);
	const dispatch = useAppDispatch();

	return (
		<NewsFiltersCategory
			categories={data ? data.categories : []}
			filters={filters}
			changeFilter={(key, value) => {
				dispatch(setFilters({ key, value }));
			}}
		/>
	);
};

export default NewsFilters;
