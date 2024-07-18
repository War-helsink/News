import React from "react";
import { IonChip } from "@ionic/react";

import type { CategoriesProps } from "../../model/props";
import styles from "./styles.module.scss";

import withSkeleton, { type WithSkeletonProps } from "shared/hocs/withSkeleton";

class Categories extends React.Component<
	CategoriesProps & { forwardedRef: React.ForwardedRef<HTMLDivElement> }
> {
	render() {
		return (
			<div ref={this.props.forwardedRef} className={styles.categories}>
				{this.props.categories.map((category) => (
					<IonChip
						key={category}
						className={`${styles.item} ${
							this.props.currentCategory === category ? styles.active : ""
						}`}
						onClick={() => this.props.setCategory(category)}
					>
						{category}
					</IonChip>
				))}
			</div>
		);
	}
}

const CategoriesWithSkeleton = withSkeleton(Categories, 10);

const ForwardedCategories = React.forwardRef<
	HTMLDivElement,
	WithSkeletonProps & CategoriesProps
>((props, ref) => <CategoriesWithSkeleton {...props} forwardedRef={ref} />);

export default ForwardedCategories;
