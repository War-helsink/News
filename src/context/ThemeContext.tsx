import {
	type FC,
	type ReactNode,
	createContext,
	useState,
	useEffect,
} from "react";

export interface IThemeContext {
	isDark: boolean;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const [isDark, setIsDark] = useState(false);

	const toggleTheme = () => {
		setIsDark((prev) => !prev);
	};

	useEffect(() => {
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
		setIsDark(prefersDark.matches);
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle("ion-palette-dark", isDark);
	}, [isDark]);

	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
