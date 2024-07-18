import type { ReactNode } from "react";
import type { INews } from "./types";
import type { NewsType } from "shared/interfaces";

export interface NewsCardProps {
	type: NewsType;
	item: INews;
	viewNewsSlot?: (news: INews) => ReactNode;
}
