import React from "react";
import { Link } from "react-router-dom";

import {
	IonHeader,
	IonToolbar,
	IonButtons,
	IonButton,
	IonText,
	IonIcon,
	IonMenuButton,
} from "@ionic/react";
import { logoGithub } from "ionicons/icons";

import { LanguageButton } from "features/language";
import { ThemeButton } from "features/theme";
import { GITHUB_URL } from "shared/config";
import { formatDate } from "shared/helpers";

import styles from "./styles.module.scss";

class Header extends React.Component<unknown> {
	render() {
		return (
			<IonHeader>
				<IonToolbar className={styles.header}>
					<IonButtons slot="start">
						<Link to={"/"}>
							<IonButton color="dark" className="hidden md:block">
								<div className="flex flex-col items-start">
									<h1 className="text-3xl font-bold">News</h1>
									<p className="text-base font-medium">
										{formatDate(new Date())}
									</p>
								</div>
							</IonButton>
						</Link>
						<IonMenuButton color="dark" className="block md:hidden" />
					</IonButtons>

					<IonButtons className="hidden md:flex justify-center gap-3 uppercase text-base font-normal">
						<Link to={"/slot"}>
							<IonText>Fruit slots</IonText>
						</Link>
						<Link to={"/currency-converter"}>
							<IonText>Currency converter</IonText>
						</Link>
					</IonButtons>

					<div className={styles.navbar} slot="end" />

					<IonButtons slot="end">
						<LanguageButton />

						<ThemeButton />

						<IonButton
							color="medium"
							shape="round"
							target="_blank"
							href={GITHUB_URL}
						>
							<IonIcon slot="icon-only" icon={logoGithub} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
		);
	}
}

export default Header;
