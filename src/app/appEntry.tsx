import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { ThemeProvider } from "./providers/ThemeContext";
import BaseLayouts from "./layouts/BaseLayouts";
import { store } from "./appStore";
import "./index.scss";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider>
			<Provider store={store}>
				<BaseLayouts />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>,
);
