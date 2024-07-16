import React from "react";
import { formatTimeAgo } from "helpers";
import Image from "components/image";
import styles from "./styles.module.scss";
import type { INews } from "core/interfaces";

interface NewsBannerProps {
	item?: INews;
}

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
