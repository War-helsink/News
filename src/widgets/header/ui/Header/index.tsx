import React from "react";
import { Link } from "react-router-dom";

import {
	IonHeader,
	IonToolbar,
	IonButtons,
	IonButton,
	IonIcon,
} from "@ionic/react";
import { logoGithub } from "ionicons/icons";

import { LanguageButton } from "features/language";
import { ThemeButton } from "features/theme";
import { formatDate } from "shared/helpers";

import styles from "./styles.module.scss";

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;

class Header extends React.Component<unknown> {
	render() {
		return (
			<IonHeader>
				<IonToolbar className={styles.header}>
					<Link to={"/"} slot="start">
						<h1 className="text-3xl font-bold">News</h1>
						<p className="text-base font-medium">{formatDate(new Date())}</p>
					</Link>

					<div className={styles.navbar} slot="end" />

					<IonButtons slot="end">
						<LanguageButton />

						<ThemeButton />

						<IonButton color="medium" shape="round" href={GITHUB_URL}>
							<IonIcon slot="icon-only" icon={logoGithub} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
		);
	}
}

export default Header;
