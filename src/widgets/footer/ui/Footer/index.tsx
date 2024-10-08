import { IonFooter, IonToolbar } from "@ionic/react";

import styles from "./styles.module.scss";

const Footer: React.FC = () => {
	return (
		<IonFooter>
			<IonToolbar className={styles.footer}>
				<div className="w-full flex flex-col justify-center items-center">
					<div className="text-2xl font-black">Watching news</div>
					<div className="text-sm font-light">©2024 watching news</div>
				</div>
			</IonToolbar>
		</IonFooter>
	);
};

export default Footer;
