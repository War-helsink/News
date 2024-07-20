import type { SkeletonType, DirectionType } from "shared/interfaces";

export interface SmartImageProps {
	src?: string;
	alt?: string;

	className?: string;
}

export interface SkeletonProps {
	count: number;
	type: SkeletonType;
	direction: DirectionType;
}