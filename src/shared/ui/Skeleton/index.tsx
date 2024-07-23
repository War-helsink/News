import React from "react";
import { IonSkeletonText } from "@ionic/react";

import type { SkeletonProps } from "../../model/props";

class Skeleton extends React.Component<SkeletonProps> {
	static defaultProps = {
		count: 1,
		type: "banner",
		direction: "column",
	};

	render() {
		const { direction, type, count } = this.props;

		const containerClasses = {
			column: "flex flex-col gap-3", // gap-3 для 12px
			row: "grid grid-cols-auto-fill gap-3", // gap-3 для 12px
			fullRow:
				"flex gap-2 items-start overflow-x-auto whitespace-nowrap scrollbar-hidden", // gap-2 для 8px
		};

		return (
			<div className={containerClasses[direction]}>
				{type === "banner" &&
					[...Array(count)].map((_, index) => (
						<IonSkeletonText
							animated
							key={`key-li-${index}`}
							className="w-full pt-[100%] relative"
						/>
					))}

				{type === "item" &&
					[...Array(count)].map((_, index) => (
						<div key={`key-li-${index}`} className="flex w-full h-20 gap-3">
							<IonSkeletonText animated className="w-16 h-16" />
							<div className="flex flex-col gap-2 w-9/12">
								<IonSkeletonText animated className="h-6" />
								<IonSkeletonText animated className="h-5 w-9/12" />
							</div>
						</div>
					))}

				{type === "chip" &&
					[...Array(count)].map((_, index) => (
						<IonSkeletonText
							key={`key-li-${index}`}
							className="min-w-20 max-w-20 h-9 rounded-2xl"
							animated
						/>
					))}
			</div>
		);
	}
}

export default Skeleton;
