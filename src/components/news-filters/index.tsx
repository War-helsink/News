import React from "react";
import styles from "./styles.module.scss";
import type { CategoriesType } from "core/interface";

import { getCategory } from "api/apiNews";

import Categories from "components/categories";
import Search from "components/search";
import Slider from "components/slider";

interface NewsByFiltersProps {
	category: CategoriesType;
	keywords: string;

	changeFilter: (key: string, value: unknown) => void;
}

interface NewsFiltersState {
	categories: CategoriesType[];
}

class NewsFilters extends React.Component<
	NewsByFiltersProps,
	NewsFiltersState
> {
	state: NewsFiltersState = {
		categories: [],
	};

	componentDidMount() {
		this.fetchCategories();
	}

	fetchCategories = async () => {
		try {
			const data = await getCategory();
			this.setState({ categories: data.categories });
		} catch (error) {
			console.error(error);
		}
	};

	setCategory = (category: CategoriesType) => {
		this.props.changeFilter("category", category);
	};

	setKeywords = (keywords: string) => {
		this.props.changeFilter("keywords", keywords);
	};

	render() {
		const { category, keywords } = this.props;
		const { categories } = this.state;

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

export default NewsFilters;
