import React from "react";
import styles from "./styles.module.scss";

import { IonFooter, IonTitle, IonToolbar } from "@ionic/react";

class Footer extends React.Component {
	render() {
		return (
			<IonFooter>
				<IonToolbar className={styles.footer}>
					<IonTitle className={styles.title}>Footer</IonTitle>
				</IonToolbar>
			</IonFooter>
		);
	}
}

export default Footer;
