import type { ReactNode, FC } from "react";
import { Link } from "react-router-dom";

import {
	IonContent,
	IonHeader,
	IonMenu,
	IonPage,
	IonButton,
	IonButtons,
	IonToolbar,
	IonList,
	IonItem,
	IonLabel,
} from "@ionic/react";

import { Footer } from "widgets/footer";
import { formatDate } from "shared/helpers";

import styles from "./styles.module.scss";

interface MenuWrapperProps {
	children: ReactNode;
}

const MenuWrapper: FC<MenuWrapperProps> = ({ children }) => {
	return (
		<>
			<IonMenu contentId="main-content">
				<IonHeader>
					<IonToolbar className={styles.header}>
						<IonButtons slot="start">
							<Link to={"/"}>
								<IonButton color="dark">
									<div className="flex flex-col items-start">
										<h1 className="text-3xl font-bold">News</h1>
										<p className="text-base font-medium">
											{formatDate(new Date())}
										</p>
									</div>
								</IonButton>
							</Link>
						</IonButtons>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonList className="py-0">
						<Link to={"/"}>
							<IonItem button detail>
								<IonLabel>News</IonLabel>
							</IonItem>
						</Link>
						<Link to={"/slot"}>
							<IonItem button detail>
								<IonLabel>Fruit slots</IonLabel>
							</IonItem>
						</Link>
						<Link to={"/tik-tok"}>
							<IonItem button detail>
								<IonLabel>TikTok</IonLabel>
							</IonItem>
						</Link>
					</IonList>
				</IonContent>
				<Footer />
			</IonMenu>
			<IonPage id="main-content">{children}</IonPage>
		</>
	);
};

export default MenuWrapper;
