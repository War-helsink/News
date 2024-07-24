import React from "react";
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
import { GITHUB_URL } from "shared/config"
import { formatDate } from "shared/helpers";

import styles from "./styles.module.scss";


class Header extends React.Component<unknown> {
	render() {
		return (
			<IonHeader>
				<IonToolbar className={styles.header}>
					<IonButtons slot="start">
						<IonButton color="dark" href="/">
							<div className="flex flex-col items-start">
								<h1 className="text-3xl font-bold">News</h1>
								<p className="text-base font-medium">
									{formatDate(new Date())}
								</p>
							</div>
						</IonButton>
					</IonButtons>

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
