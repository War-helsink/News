import React from "react";
import { formatDate } from "helpers";
import styles from "./styles.module.scss";

import { IonHeader, IonToolbar } from "@ionic/react";

class Header extends React.Component {
	render() {
		return (
			<IonHeader>
				<IonToolbar className={styles.header}>
					<h1 className={styles.title}>New Reactify</h1>
					<p className={styles.date}>{formatDate(new Date())}</p>
				</IonToolbar>
			</IonHeader>
		);
	}
}

export default Header;
