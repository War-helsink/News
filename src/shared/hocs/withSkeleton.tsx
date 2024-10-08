import type { ComponentType } from "react";
import Skeleton from "shared/ui/Skeleton";
import type { SkeletonProps } from "shared/model/props";

export interface WithSkeletonProps {
	isLoading: boolean;
	type?: SkeletonProps["type"];
	direction?: SkeletonProps["direction"];
}

function withSkeleton<T extends object>(
	Component: ComponentType<T>,
	count: SkeletonProps["count"],
) {
	return function WithSkeleton(props: WithSkeletonProps & T) {
		const {
			isLoading,
			type = "item",
			direction = "column",
			...restProps
		} = props;

		if (isLoading) {
			return <Skeleton type={type} count={count} direction={direction} />;
		}

		return (
			<Component type={type} direction={direction} {...(restProps as T)} />
		);
	};
}

export default withSkeleton;
