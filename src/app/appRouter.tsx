import { createBrowserRouter } from "react-router-dom";
import BaseLayouts from "./layouts/BaseLayouts";
import CasinoLayouts from "./layouts/CasinoLayouts";
import ErrorLayouts from "./layouts/ErrorLayouts";

import { MainPage } from "pages/main";
import { TikTokPage } from "pages/tik-tok";
import { NewsPage } from "pages/news";
import { SlotPage } from "pages/slot";
import { CurrencyConverterPage } from "pages/currency-converter";

export const appRouter = createBrowserRouter([
	{
		element: <BaseLayouts />,
		errorElement: <ErrorLayouts />,
		children: [
			{ path: "/", element: <MainPage /> },
			{ path: "/tik-tok/", element: <TikTokPage /> },
			{ path: "/currency-converter/", element: <CurrencyConverterPage /> },
			{ path: "/news/:id", element: <NewsPage /> },
		],
	},
	{
		element: <CasinoLayouts />,
		errorElement: <ErrorLayouts />,
		children: [{ path: "/slot/", element: <SlotPage /> }],
	},
]);
