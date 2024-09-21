import { forwardRef } from "react";
import Chip from "shared/ui/Chip";
import withSkeleton from "shared/hocs/withSkeleton";

import type { CategoriesProps } from "../../model/props";

const Categories = forwardRef<HTMLDivElement, CategoriesProps>(
	({ categories, currentCategory, setCategory }, ref) => {
		return (
			<div ref={ref} className="flex gap-2 items-start">
				{categories.map((category) => (
					<Chip
						key={category}
						text={category}
						active={currentCategory === category}
						onClick={() => setCategory(category)}
					/>
				))}
			</div>
		);
	},
);

const CategoriesWithSkeleton = withSkeleton(Categories, 15);

export default CategoriesWithSkeleton;
