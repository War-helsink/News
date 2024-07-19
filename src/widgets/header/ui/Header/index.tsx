import React from "react";
import { Link } from "react-router-dom";

import { IonHeader, IonToolbar, IonButtons } from "@ionic/react";
import { LanguageButton } from "features/language";
import { ThemeButton } from "features/theme";
import { formatDate } from "shared/helpers";

import styles from "./styles.module.scss";

class Header extends React.Component<unknown> {
	render() {
		return (
			<IonHeader>
				<IonToolbar className={styles.header}>
					<Link to={"/"} slot="start">
						<h1 className="text-3xl font-bold">News</h1>
						<p className="text-base font-medium">{formatDate(new Date())}</p>
					</Link>

					<LanguageButton slot="end" />

					<IonButtons slot="end">
						<ThemeButton />
					</IonButtons>
				</IonToolbar>
			</IonHeader>
		);
	}
}

export default Header;
