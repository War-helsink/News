import { Component } from "react";
import { Helmet } from "react-helmet-async";
import { IonToolbar, IonTitle } from "@ionic/react";

import { SlotMachine } from "widgets/slot";

class SlotPage extends Component {
	render() {
		return (
			<>
				<Helmet>
					<title>Slot</title>
				</Helmet>
				<main className="flex flex-col justify-center items-center w-full min-h-full">
					<div className="p-8 flex flex-col justify-center items-center">
						<IonToolbar>
							<IonTitle>Online Casino Slot Machine</IonTitle>
						</IonToolbar>
						<SlotMachine />
					</div>
				</main>
			</>
		);
	}
}

export default SlotPage;
