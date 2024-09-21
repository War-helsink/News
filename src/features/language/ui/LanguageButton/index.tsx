import { IonButton, IonSelect, IonSelectOption, IonIcon } from "@ionic/react";
import { language as languageIcon } from "ionicons/icons";
import { useAppSelector, useAppDispatch } from "app/appStore";

import { setFilters } from "entities/news";
import { useGetLanguageQuery, type LanguageType } from "entities/language";

const LanguageButton: React.FC = () => {
	const language = useAppSelector((state) => state.news.filters.language);
	const { data: languages } = useGetLanguageQuery(null);
	const dispatch = useAppDispatch();

	const setLanguage = (language: LanguageType) => {
		dispatch(setFilters({ key: "language", value: language }));
	};

	return (
		<IonSelect
			className="block w-12"
			slot="end"
			interface="popover"
			value={language}
			onIonChange={(ev) => {
				setLanguage(ev.detail.value);
			}}
		>
			<IonButton slot="label" color="medium" shape="round">
				<IonIcon slot="icon-only" icon={languageIcon} />
			</IonButton>

			{languages &&
				Object.entries(languages.languages).map(([language, key]) => (
					<IonSelectOption key={key} value={key}>
						{language}
					</IonSelectOption>
				))}
		</IonSelect>
	);
};

export default LanguageButton;
