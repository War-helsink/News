import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayouts";
import ErrorElement from "./layouts/ErrorElement";
import { Main } from "pages/main";
import { NewsPage } from "pages/news";

export const appRouter = createBrowserRouter([
	{
		element: <BaseLayout />,
		errorElement: <ErrorElement />,
		children: [
			{ path: "/", element: <Main /> },
			{ path: "/news/:id", element: <NewsPage /> },
		],
	},
]);
