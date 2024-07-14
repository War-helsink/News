import { useEffect, useState } from "react";

export const useFetch = <T, P = unknown>(
	fetchFunc: (params?: P) => Promise<T>,
	params?: P,
) => {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<unknown>(null);

	const stringParams = params ? new URLSearchParams(params).toString() : "";

	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				const result = await fetchFunc(params);

				setData(result);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		})();
	}, [fetchFunc, stringParams]);

	return { data, isLoading, error };
};
