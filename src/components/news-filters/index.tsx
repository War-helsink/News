import React from "react";
import styles from "./styles.module.scss";

import { getCategory } from "api/apiNews";

import Categories from "components/categories";
import Search from "components/search";

interface NewsByFiltersProps {
	category: string;
	keywords: string;

	changeFilter: (key: string, value: unknown) => void;
}

interface NewsFiltersState {
	categories: string[];
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

	setCategory = (category: string) => {
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
				<Categories
					categories={categories}
					currentCategory={category}
					setCategory={this.setCategory}
				/>
				<Search keywords={keywords} setKeywords={this.setKeywords} />
			</div>
		);
	}
}

export default NewsFilters;
