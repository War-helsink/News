import { Header } from "widgets/header";
import { Outlet } from "react-router-dom";

import MenuWrapper from "../providers/MenuWrapper";
import { IonContent } from "@ionic/react";

const CasinoLayouts: React.FC = () => {
	return (
		<MenuWrapper>
			<Header />
			<IonContent>
				<Outlet />
			</IonContent>
		</MenuWrapper>
	);
};

export default CasinoLayouts;
