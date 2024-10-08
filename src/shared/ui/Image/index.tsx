import { useState } from "react";

import { IonImg, IonSkeletonText, IonSpinner, IonIcon } from "@ionic/react";
import { warning } from "ionicons/icons";

import type { SmartImageProps } from "../../model/props";

const SmartImage: React.FC<SmartImageProps> = ({ src, alt, className }) => {
	const [loaded, setLoaded] = useState(false);
	const [loadError, setLoadError] = useState(false);

	return (
		<div className={`relative w-full h-auto ${className}`}>
			<IonImg
				src={src}
				alt={alt}
				className={`${loaded ? "block" : loadError ? "hidden" : "block"} absolute top-0 left-0 w-full h-full object-cover`}
				onIonImgDidLoad={() => {
					setLoaded(true);
					setLoadError(false);
				}}
				onIonError={() => {
					setLoaded(false);
					setLoadError(true);
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
};

export default SmartImage;
