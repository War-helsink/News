import { IonSkeletonText } from "@ionic/react";

import type { SkeletonProps } from "../../model/props";

import styles from "./styles.module.scss";

const Skeleton: React.FC<SkeletonProps> = ({
	count = 1,
	type = "banner",
	direction = "column",
}) => {
	return (
		<div className={styles[direction]}>
			{type === "banner" &&
				[...Array(count)].map((_, index) => (
					<IonSkeletonText
						animated
						key={`key-li-${index}`}
						className="w-full pt-[100%] relative"
					/>
				))}

			{type === "item" &&
				[...Array(count)].map((_, index) => (
					<div key={`key-li-${index}`} className="flex w-full gap-3">
						<IonSkeletonText animated className="w-16 h-16 m-0" />
						<div className="flex flex-col gap-2 w-9/12">
							<IonSkeletonText animated className="h-6 m-0" />
							<IonSkeletonText animated className="h-5 w-9/12 m-0" />
						</div>
					</div>
				))}

			{type === "chip" &&
				[...Array(count)].map((_, index) => (
					<IonSkeletonText
						key={`key-li-${index}`}
						className="min-w-20 max-w-20 h-9 rounded-2xl"
						animated
					/>
				))}
		</div>
	);
};

export default Skeleton;
