import React from "react";

import { IonImg, IonSkeletonText, IonSpinner, IonIcon } from "@ionic/react";
import { warning } from "ionicons/icons";

import type { SmartImageProps } from "../../model/props";
import type { SmartImageState } from "../../model/state";

class SmartImage extends React.Component<SmartImageProps, SmartImageState> {
	static defaultProps = {
		alt: "new",
	};

	state: Readonly<SmartImageState> = {
		loaded: false,
		loadError: false,
	};

	render() {
		const { loaded, loadError } = this.state;

		return (
			<div className={`relative w-full h-auto ${this.props.className}`}>
				<IonImg
					src={this.props.src}
					alt={this.props.alt}
					className={`${loaded ? "block" : loadError ? "hidden" : "block"} absolute top-0 left-0 w-full h-full object-cover`}
					onIonImgDidLoad={() => {
						this.setState({ loaded: true, loadError: false });
					}}
					onIonError={() => {
						this.setState({ loadError: true, loaded: false });
					}}
				/>

				<IonSkeletonText
					className={`${loaded ? "hidden" : "block"} absolute top-0 left-0 w-full h-full m-0`}
					animated
				/>

				<div className="flex justify-center items-center absolute top-0 left-0 w-full h-full ">
					<IonIcon
						className={`${loadError ? "block" : "hidden"}  w-7 h-7`}
						size="large"
						color="danger"
						icon={warning}
					/>
					<IonSpinner
						className={`${loaded ? "hidden" : loadError ? "hidden" : "block"} w-7 h-7`}
						color="medium"
					/>
				</div>
			</div>
		);
	}
}

export default SmartImage;
