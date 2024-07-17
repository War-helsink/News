import React from "react";
import { formatTimeAgo } from "shared/helpers";
import Image from "shared/ui/Image";

import styles from "./styles.module.scss";
import type { NewsBannerProps } from "../../model/props";

class NewsBanner extends React.Component<NewsBannerProps> {
	render() {
		return (
			<div className={styles.banner}>
				<Image image={this.props.item?.image} />
				<h3 className={styles.title}>{this.props.item?.title}</h3>
				<p className={styles.extra}>
					{formatTimeAgo(this.props.item?.published)} by{" "}
					{this.props.item?.author}
				</p>
			</div>
		);
	}
}

export default NewsBanner;
