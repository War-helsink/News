import React from "react";
import Header from "components/header";
import Footer from "components/footer";
import Main from "pages/main";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

import "@ionic/react/css/palettes/dark.class.css";

import { IonApp, IonContent, setupIonicReact } from "@ionic/react";

setupIonicReact();

class App extends React.Component {
	render() {
		return (
			<>
				<IonApp>
					<Header />
					<IonContent>
						<div className="p-6 grow">
							<Main />
						</div>
						<Footer />
					</IonContent>
				</IonApp>
			</>
		);
	}
}

export default App;
