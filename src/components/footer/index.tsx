import React from "react";
import styles from "./styles.module.scss";

class Footer extends React.Component {
	render() {
		return (
			<footer className={styles.footer}>
				<h1 className={styles.title}>Footer</h1>
			</footer>
		);
	}
}

export default Footer;
