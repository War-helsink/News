/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_NEWS_BASE_API_URL: string;
	readonly VITE_NEWS_API_KEY: string;
	readonly VITE_GITHUB_URL: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
