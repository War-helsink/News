import React from "react";
import { Header } from "widgets/header";
import { Footer } from "widgets/footer";

import { IonApp, IonContent, IonButton, IonText } from "@ionic/react";
import { Link } from "react-router-dom";

class ErrorElement extends React.Component {
	render() {
		return (
			<>
				<IonApp>
					<Header />
					<IonContent>
						<div className="w-full h-full flex flex-col items-center justify-center gap-4">
							<IonText className="text-3xl font-bold">Oops!</IonText>
							<IonText className="text-xl">
								Sorry, an unexpected error has occurred.
							</IonText>
							<IonText className="opacity-50">Not Found</IonText>
							<Link to={"/"}>
								<IonButton fill="clear">On the main page</IonButton>
							</Link>
						</div>
					</IonContent>
					<Footer />
				</IonApp>
			</>
		);
	}
}

export default ErrorElement;
