import { createBrowserRouter } from "react-router-dom";
import BaseLayouts from "./layouts/BaseLayouts";
import ErrorLayouts from "./layouts/ErrorLayouts";

import { MainPage } from "pages/main";
import { NewsPage } from "pages/news";

export const appRouter = createBrowserRouter([
	{
		element: <BaseLayouts />,
		errorElement: <ErrorLayouts />,
		children: [
			{ path: "/", element: <MainPage /> },
			{ path: "/news/:id", element: <NewsPage /> },
		],
	},
]);
