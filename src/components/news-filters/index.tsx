import React from "react";
import styles from "./styles.module.scss";
import type { CategoriesType } from "core/interfaces";

import Categories from "components/categories";
import Search from "components/search";
import Slider from "components/slider";

import { useGetCategoriesQuery } from "store/services/newsApi";

interface NewsByFiltersProps {
	category: CategoriesType;
	keywords: string;

	changeFilter: (key: string, value: string | number | null) => void;
}

interface NewsFiltersCategoryProps extends NewsByFiltersProps {
	categories: CategoriesType[];
}

class NewsFiltersCategory extends React.Component<NewsFiltersCategoryProps> {
	setCategory = (category: CategoriesType) => {
		this.props.changeFilter("category", category);
	};

	setKeywords = (keywords: string) => {
		this.props.changeFilter("keywords", keywords);
	};

	render() {
		const { category, keywords, categories } = this.props;

		return (
			<div className={styles.filters}>
				<Slider>
					<Categories
						categories={categories}
						currentCategory={category}
						setCategory={this.setCategory}
					/>
				</Slider>

				<Search keywords={keywords} setKeywords={this.setKeywords} />
			</div>
		);
	}
}

const NewsFilters: React.FC<NewsByFiltersProps> = (props) => {
	const { data } = useGetCategoriesQuery(null);

	return (
		<NewsFiltersCategory categories={data ? data.categories : []} {...props} />
	);
};

export default NewsFilters;
