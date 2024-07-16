import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import "index.scss";

import { store } from "store";
import { Provider } from "react-redux";

import { ThemeProvider } from "context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>,
);
