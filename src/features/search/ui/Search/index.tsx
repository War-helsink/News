import React from "react";
import { IonInput } from "@ionic/react";
import styles from "./styles.module.scss";

interface SearchProps {
	keywords: string;
	setKeywords: (keywords: string) => void;
}

class Search extends React.Component<SearchProps> {
	render() {
		return (
			<div className="flex w-hull gap-3.5">
				<IonInput
					className={styles.input}
					clearInput
					fill="outline"
					label="Search"
					placeholder="Search"
					labelPlacement="floating"
					onIonChange={(ev) => {
						this.props.setKeywords(ev.detail.value as string);
					}}
					type="text"
				/>
			</div>
		);
	}
}

export default Search;
