import React from "react";
import { connect } from "react-redux";

import {
	IonText,
	IonSelect,
	IonSelectOption,
	IonIcon,
} from "@ionic/react";
import { language } from "ionicons/icons";

import type { AppDispatch } from "app/appStore";

import { setFilters } from "entities/news";
import { languagesApi, type LanguageType } from "entities/language";

import type {
	LanguageButtonProps,
	LanguageButtonState,
} from "../../model/props";

class LanguageButton extends React.Component<
	LanguageButtonProps,
	LanguageButtonState
> {
	state: Readonly<LanguageButtonState> = {
		language: "en",
		languages: ["en"],
	};

	componentDidMount() {
		this.props
			.dispatch(languagesApi.endpoints.getLanguage.initiate(null))
			.then((data) => {
				if (data.data) {
					const languages = [];
					for (const key in data.data.languages) {
						languages.push(data.data.languages[key]);
					}

					this.setState({ languages });
				}
			});
	}

	setLanguage = (language: LanguageType) => {
		this.props.changeLanguage(language);
	};

	render() {
		const { languages } = this.state;

		return (
				<IonSelect
					slot="end"
					interface="popover"
					value={this.state.language}
					onIonChange={(ev) => {
						this.setLanguage(ev.detail.value);
					}}
				>
					<IonText slot="label">
						<IonIcon icon={language} />
					</IonText>

					{languages.map((language) => (
						<IonSelectOption key={language} value={language}>
							{language}
						</IonSelectOption>
					))}
				</IonSelect>
		);
	}
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	dispatch: dispatch,
	changeLanguage: (value: LanguageType) =>
		dispatch(setFilters({ key: "language", value })),
});

export default connect(null, mapDispatchToProps)(LanguageButton);
