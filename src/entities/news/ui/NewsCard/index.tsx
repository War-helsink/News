import React from "react";
import { formatTimeAgo } from "shared/helpers";
import SmartImage from "shared/ui/Image";

import type { NewsCardProps } from "../../model/props";

class NewsCard extends React.Component<NewsCardProps> {
	static defaultProps = {
		type: "item",
	};

	render() {
		const { type, item, viewNewsSlot } = this.props;

		const containerClasses =
			type === "banner" ? "flex flex-col gap-3 w-full" : "flex gap-3 w-full";
		const imageClasses =
			type === "banner"
				? "pt-[100%]"
				: "min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px]";

		return (
			<div className={`${containerClasses} justify-between`}>
				<div className={containerClasses}>
					<SmartImage src={item?.image} className={imageClasses} />

					<div className="flex flex-col gap-2">
						<h3 className={`${type === "banner" ? "text-base text-wrap" : "text-sm text-wrap"}`}>
							{item.title}
						</h3>
						<p className="text-xs text-wrap text-medium-default mb-2">
							{formatTimeAgo(item.published)} by {item.author}
						</p>
					</div>
				</div>
				{viewNewsSlot ? viewNewsSlot(item) : null}
			</div>
		);
	}
}

export default NewsCard;
