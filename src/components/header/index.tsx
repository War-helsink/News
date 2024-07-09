import React from "react";
import { formatDate } from "helpers";
import styles from "./styles.module.scss";

class Header extends React.Component {
	render() {
		return (
			<header className={styles.header}>
				<h1 className={styles.title}>New Reactify</h1>
				<p className={styles.date}>{formatDate(new Date())}</p>
			</header>
		);
	}
}

export default Header;
