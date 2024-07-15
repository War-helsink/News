import React from "react";
import { formatDate } from "helpers";
import styles from "./styles.module.scss";

import { ThemeContext, type IThemeContext } from "context";

import {
	IonHeader,
	IonToolbar,
	IonButtons,
	IonButton,
	IonIcon,
} from "@ionic/react";

import { sunny, moon } from "ionicons/icons";

class Header extends React.Component<unknown> {
	static contextType = ThemeContext;

	render() {
		const { isDark, toggleTheme } = this.context as IThemeContext;
		return (
			<IonHeader>
				<IonToolbar className={styles.header}>
					<h1 className="text-3xl font-bold">New Reactify</h1>
					<p className="text-base font-medium">{formatDate(new Date())}</p>

					<IonButtons slot="end">
						<IonButton color="primary" shape="round" onClick={toggleTheme}>
							<IonIcon slot="icon-only" icon={isDark ? sunny : moon} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
		);
	}
}

export default Header;
