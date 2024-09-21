import { IonInput } from "@ionic/react";
import styles from "./styles.module.scss";

import type { SearchProps } from "../../model/props";

const Search: React.FC<SearchProps> = ({ setKeywords }) => {
	return (
		<div className="flex w-hull gap-3.5">
			<IonInput
				mode="md"
				className={styles.input}
				clearInput
				fill="outline"
				label="Search"
				placeholder="Search"
				labelPlacement="floating"
				onIonChange={(ev) => {
					setKeywords(ev.detail.value as string);
				}}
				type="text"
			/>
		</div>
	);
};

export default Search;
