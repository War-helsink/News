import React from "react";
import styles from "./styles.module.scss";

interface ImageProps {
	image?: string;
}

class Image extends React.Component<ImageProps> {
	render() {
		return (
			<div className={styles.wrapper}>
				{this.props.image && (
					<img src={this.props.image} alt="news" className={styles.image} />
				)}
			</div>
		);
	}
}

export default Image;
