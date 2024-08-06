import React from "react";

import Chip from "shared/ui/Chip";
import withSkeleton, { type WithSkeletonProps } from "shared/hocs/withSkeleton";

import type { CategoriesProps } from "../../model/props";

class Categories extends React.Component<
	CategoriesProps & { forwardedRef: React.ForwardedRef<HTMLDivElement> }
> {
	render() {
		return (
			<div
				ref={this.props.forwardedRef}
				className="flex gap-2 items-start"
			>
				{this.props.categories.map((category) => (
					<Chip
						key={category}
						text={category}
						active={this.props.currentCategory === category}
						onClick={() => this.props.setCategory(category)}
					/>
				))}
			</div>
		);
	}
}

const CategoriesWithSkeleton = withSkeleton(Categories, 15);

const ForwardedCategories = React.forwardRef<
	HTMLDivElement,
	WithSkeletonProps & CategoriesProps
>((props, ref) => <CategoriesWithSkeleton {...props} forwardedRef={ref} />);

export default ForwardedCategories;
