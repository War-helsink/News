import { useContext } from "react";
import { ThemeContext, type IThemeContext } from "app/providers/ThemeContext";

import { IonButton, IonIcon } from "@ionic/react";
import { sunny, moon } from "ionicons/icons";

const ThemeButton: React.FC = () => {
	const { isDark, toggleTheme } = useContext(ThemeContext) as IThemeContext;

	return (
		<IonButton color="medium" shape="round" onClick={toggleTheme}>
			<IonIcon slot="icon-only" icon={isDark ? sunny : moon} />
		</IonButton>
	);
};

export default ThemeButton;
