import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayouts";
import CasinoLoyuts from "./layouts/CasinoLoyuts";
import ErrorElement from "./layouts/ErrorElement";

import { Main } from "pages/main";
import { NewsPage } from "pages/news";
import { SlotPage } from "pages/slot";

export const appRouter = createBrowserRouter([
	{
		element: <BaseLayout />,
		errorElement: <ErrorElement />,
		children: [
			{ path: "/", element: <Main /> },
			{ path: "/news/:id", element: <NewsPage /> },
		],
	},
	{
		element: <CasinoLoyuts />,
		errorElement: <ErrorElement />,
		children: [{ path: "/slot/", element: <SlotPage /> }],
	},
]);
