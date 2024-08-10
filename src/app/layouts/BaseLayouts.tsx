import React from "react";
import { Header } from "widgets/header";
import { Footer } from "widgets/footer";
import { Outlet } from "react-router-dom";

import MenuWrapper from "../providers/MenuWrapper";

import { IonContent } from "@ionic/react";

class BaseLayouts extends React.Component {
	render() {
		return (
			<MenuWrapper>
				<Header />
				<IonContent>
					<div className="p-6 min-h-full">
						<Outlet />
					</div>
					<Footer />
				</IonContent>
			</MenuWrapper>
		);
	}
}

export default BaseLayouts;
