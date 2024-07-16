import type { ComponentType } from "react";
import Skeleton, { type SkeletonProps } from "shared/ui/Skeleton";

export interface WithSkeletonProps {
	isLoading: boolean;
}

function withSkeleton<T extends object>(
	Component: ComponentType<T>,
	type: SkeletonProps["type"],
	count: SkeletonProps["count"],
	direction: SkeletonProps["direction"] = "column",
) {
	return function WithSkeleton(props: T & WithSkeletonProps) {
		const { isLoading, ...restProps } = props;

		if (isLoading) {
			return <Skeleton type={type} count={count} direction={direction} />;
		}

		return <Component {...(restProps as T)} />;
	};
}

export default withSkeleton;
