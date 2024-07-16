import React from "react";
import { formatDate } from "shared/helpers";

import { IonHeader, IonToolbar, IonButtons } from "@ionic/react";
import { ThemeButton } from "features/theme";

import styles from "./styles.module.scss";

class Header extends React.Component<unknown> {
	render() {
		return (
			<IonHeader>
				<IonToolbar className={styles.header}>
					<h1 className="text-3xl font-bold">New Reactify</h1>
					<p className="text-base font-medium">{formatDate(new Date())}</p>

					<IonButtons slot="end">
						<ThemeButton />
					</IonButtons>
				</IonToolbar>
			</IonHeader>
		);
	}
}

export default Header;
