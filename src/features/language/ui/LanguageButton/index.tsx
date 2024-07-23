import React from "react";
import { connect } from "react-redux";

import {
	IonButton,
	IonSelect,
	IonSelectOption,
	IonIcon,
} from "@ionic/react";
import { language } from "ionicons/icons";

import type { AppDispatch, RootState } from "app/appStore";

import { setFilters } from "entities/news";
import { languagesApi, type LanguageType } from "entities/language";

import type { LanguageButtonProps } from "../../model/props";
import type { LanguageButtonState } from "../../model/state";

class LanguageButton extends React.Component<
	LanguageButtonProps,
	LanguageButtonState
> {
	state: Readonly<LanguageButtonState> = {
		languages: {},
	};

	componentDidMount() {
		this.props
			.dispatch(languagesApi.endpoints.getLanguage.initiate(null))
			.then((data) => {
				if (data.data) {
					this.setState({ languages: data.data.languages });
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
				className="w-12"
				slot="end"
				interface="popover"
				value={this.props.language}
				onIonChange={(ev) => {
					this.setLanguage(ev.detail.value);
				}}
				hidden={false}
			>
				<IonButton slot="label" color="medium" shape="round">
					<IonIcon slot="icon-only" icon={language} />
				</IonButton>

				{Object.entries(languages).map(([language, key]) => (
					<IonSelectOption key={key} value={key}>
						{language}
					</IonSelectOption>
				))}
			</IonSelect>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
	language: state.news.filters.language,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	dispatch: dispatch,
	changeLanguage: (value: LanguageType) =>
		dispatch(setFilters({ key: "language", value })),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageButton);
