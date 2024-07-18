import React from "react";
import { connect } from "react-redux";

import type { AppDispatch } from "app/appStore";

import { Search } from "features/search";
import { Slider } from "features/slider";
import { Categories } from "features/categories";

import { setFilters } from "entities/news";
import type { CategoriesType } from "entities/category";

import type { NewsFiltersProps } from "../../model/props";
import styles from "./styles.module.scss";

class NewsFilters extends React.Component<NewsFiltersProps> {
	setCategory = (category: CategoriesType) => {
		this.props.changeFilter("category", category);
	};

	setKeywords = (keywords: string) => {
		this.props.changeFilter("keywords", keywords);
	};

	render() {
		const { filters, categories, isLoadingCategories } = this.props;

		return (
			<div className={styles.filters}>
				<Slider>
					<Categories
						type="chip"
						direction="fullRow"
						isLoading={isLoadingCategories}
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

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	changeFilter: (key: string, value: string | number | null) =>
		dispatch(setFilters({ key, value })),
});

export default connect(null, mapDispatchToProps)(NewsFilters);
